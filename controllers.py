from py4web import request, URL, HTTP, action
from .common import db, auth, session
from . import settings
from .spa_form import Form as SPAForm

import os
import json
from PIL import Image

def action_agg(*path_list):
    def inner(f):
        plist = reversed(path_list)
        ret = action(next(plist))(f)
        for p in plist:
            ret = action(p)(ret)
        return ret
    return inner


class APIError(HTTP):
    def __init__(self, code, body = ''):
        basis = super()
        basis.__init__(code, type=basis.Type.error)
        self._body = body

    @property
    def body(self):
        ret = self._body
        if isinstance(ret, dict):
            ret = json.dumps(self._body, ensure_ascii=False)
        return ret

def profile_get():
    user = auth.get_user()
    profile = db.auth_user(user["id"]).profile.select().first()
    # Append the user profile icon to the dict so it prepopulates it with current data
    #profile["user_id"] = user["id"]
    user.update(dict(
        image = profile.image,
        profile_id = profile.id,
        user_id = user["id"]
    ))
    del user['id']
    return user

@action_agg('index', 'home', 'login', 'about', 'register', 'profile', 'post', 'post/<pid:int>', 'post/new', 'post/user/<uid:int>')
@action.uses("index.html")
def index(pid = None, uid = None):
    return dict(app_root = URL(), title = 'blog')


@action('try_connect')
@action.uses(session, auth.user)
def try_connect():
    user = auth.get_user()
    return dict(user = user)

def post_get(pid = None, uid = None):
    q = db.post.author == db.auth_user.id
    q &= db.profile.user == db.auth_user.id
    if pid:
        q &= db.post.id == pid
    elif uid:
        q &= db.post.author == uid
    rows = db(q).select(db.post.ALL, db.profile.image, db.auth_user.username)
    plist = []
    for r in rows:
        rec = r.post
        rec.author_icon = r.profile.image
        rec.username = r.auth_user.username
        plist.append(rec.as_dict())
    return plist

def post_del(pid):
    rec = db.post(pid)
    if not rec:
        raise APIError(404)
    if rec.author != auth.get_user()['id']:
        raise APIError(403)
    rec.delete_record()
    return dict()


@action("api_blog/post")
@action("api_blog/post/user/<uid:int>")
@action("api_blog/post/<pid:int>")
@action.uses(db)
def post(pid = None, uid = None):
    return dict(items = post_get(pid, uid))



@action("api_blog/post", method = ['POST'])
@action("api_blog/post/<pid:int>", method = ['PUT', 'DELETE'])
@action.uses(db, auth.user)
def post_cud(pid = None):
    if request.method == 'DELETE':
        return post_del(pid)

    rec = None
    if pid:
        rec = db.post(pid)
        if not rec:
            raise APIError(404)
        if rec.author != auth.get_user()['id']:
                raise APIError(403)

    form = SPAForm(db.post)
    if form(request.json or request.POST, record_id = rec and rec.id).accepted:
        if not rec:
            pid = form.insert(db.post)
        else:
            form.update(record = rec)
        return dict(items = post_get(pid))
    raise APIError(422, dict(errors= form.errors))

@action("api_blog/profile", method = ['GET', 'PUT'])
@action.uses(db, auth.user)
def profile():
    profile = profile_get()
    if request.method == 'GET':
        return dict(profile = profile)

    form_list = [field for field in db.auth_user if field.writable] + [
        field for field in db.profile if field.writable
    ]

    form = SPAForm(form_list)
    user_id = profile['user_id']
    if form(request.json or request.POST, record_id = user_id).accepted:
        form.upload()
        form.update(db.auth_user, record_id = user_id)
        form.update(db.profile, record_id = profile['profile_id'], del_files = True)
        update_icon = form.vars.get('image')
        if update_icon:
            resize_image(update_icon)
        return dict(profile = profile_get())
    raise APIError(422, dict(errors= aform.errors))


def resize_image(image_path):
    total_path = os.path.join(settings.UPLOAD_PATH, image_path)

    img = Image.open(total_path)
    if img.height > 300 or img.width > 300:
        output_size = (300, 300)
        img.thumbnail(output_size)
        img.save(total_path)

