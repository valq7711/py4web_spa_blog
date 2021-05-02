(function(){
"use strict";
var ՐՏ_2, ՐՏ_3, ՐՏ_4, ՐՏ_5, ՐՏ_7, ՐՏ_8, ՐՏ_9, ՐՏ_10, ՐՏ_11, ՐՏ_13, ՐՏ_17, ՐՏ_22, ՐՏ_23, ՐՏ_24, ՐՏ_25, ՐՏ_28, ՐՏ_29, ՐՏ_30, ՐՏ_32, ՐՏ_34, ՐՏ_35, ՐՏ_37, ՐՏ_39, ՐՏ_41, ՐՏ_42, ՐՏ_43;
function ՐՏ_extends(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.__base__ = parent;
    child.prototype.constructor = child;
}
function ՐՏ_in(val, arr) {
    if (typeof arr.indexOf === "function") {
        return arr.indexOf(val) !== -1;
    } else if (typeof arr.has === "function") {
        return arr.has(val);
    }
    return arr.hasOwnProperty(val);
}
function ՐՏ_Iterable(iterable) {
    var tmp;
    if (iterable.constructor === [].constructor || iterable.constructor === "".constructor || (tmp = Array.prototype.slice.call(iterable)).length) {
        return tmp || iterable;
    }
    if (Set && iterable.constructor === Set) {
        return Array.from(iterable);
    }
    return Object.keys(iterable);
}
function ՐՏ_print() {
    if (typeof console === "object") {
        console.log.apply(console, arguments);
    }
}
function range(start, stop, step) {
    var length, idx, range;
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = arguments[2] || 1;
    length = Math.max(Math.ceil((stop - start) / step), 0);
    idx = 0;
    range = new Array(length);
    while (idx < length) {
        range[idx++] = start;
        start += step;
    }
    return range;
}
function ՐՏ_type(obj) {
    return obj && obj.constructor && obj.constructor.name ? obj.constructor.name : Object.prototype.toString.call(obj).slice(8, -1);
}
function ՐՏ_eq(a, b) {
    var ՐՏitr36, ՐՏidx36;
    var i;
    if (a === b) {
        return true;
    }
    if (a === void 0 || b === void 0 || a === null || b === null) {
        return false;
    }
    if (a.constructor !== b.constructor) {
        return false;
    }
    if (Array.isArray(a)) {
        if (a.length !== b.length) {
            return false;
        }
        for (i = 0; i < a.length; i++) {
            if (!ՐՏ_eq(a[i], b[i])) {
                return false;
            }
        }
        return true;
    } else if (a.constructor === Object) {
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false;
        }
        ՐՏitr36 = ՐՏ_Iterable(a);
        for (ՐՏidx36 = 0; ՐՏidx36 < ՐՏitr36.length; ՐՏidx36++) {
            i = ՐՏitr36[ՐՏidx36];
            if (!ՐՏ_eq(a[i], b[i])) {
                return false;
            }
        }
        return true;
    } else if (Set && a.constructor === Set || Map && a.constructor === Map) {
        if (a.size !== b.size) {
            return false;
        }
        for (i of a) {
            if (!b.has(i)) {
                return false;
            }
        }
        return true;
    } else if (a.constructor === Date) {
        return a.getTime() === b.getTime();
    } else if (typeof a.__eq__ === "function") {
        return a.__eq__(b);
    }
    return false;
}
class KeyError extends Error {
    constructor (message) {
        super();
        var self = this;
        self.name = "KeyError";
        self.message = message;
    }
}
function ՐՏ_def_modules() {
    var modules;
    modules = {};
    function mounter(mod_id) {
        var rs_mod_id, rs_mod;
        rs_mod_id = "ՐՏ:" + mod_id;
        rs_mod = modules[rs_mod_id] = {
            "body": null,
            "exports": null
        };
        rs_mod["export"] = function(prop, get, set) {
            if (!rs_mod["exports"]) {
                rs_mod["exports"] = {};
            }
            Object.defineProperty(rs_mod["exports"], prop, {
                configurable: true,
                enumerable: true,
                get: get,
                set: set
            });
        };
        Object.defineProperty(modules, mod_id, {
            enumerable: true,
            get: function() {
                var mod;
                return (mod = modules[rs_mod_id])["exports"] || mod["body"]();
            },
            set: function(v) {
                modules[rs_mod_id]["exports"] = v;
            }
        });
        return rs_mod;
    }
    Object.defineProperty(modules, "ՐՏ_def", {
        configurable: false,
        enumerable: false,
        value: mounter
    });
    return modules;
}
var ՐՏ_modules = ՐՏ_def_modules();
ՐՏ_modules.ՐՏ_def("asset.mechanic");
ՐՏ_modules.ՐՏ_def("asset.rs_vue");
ՐՏ_modules.ՐՏ_def("asset.utils");
ՐՏ_modules.ՐՏ_def("asset.validators");
ՐՏ_modules.ՐՏ_def("asset.computed");
ՐՏ_modules.ՐՏ_def("asset.store33");
ՐՏ_modules.ՐՏ_def("asset");
ՐՏ_modules.ՐՏ_def("settings");
ՐՏ_modules.ՐՏ_def("server");
ՐՏ_modules.ՐՏ_def("common");
ՐՏ_modules.ՐՏ_def("directives.click_out");
ՐՏ_modules.ՐՏ_def("directives.vscroll");
ՐՏ_modules.ՐՏ_def("directives");
ՐՏ_modules.ՐՏ_def("components.navbar");
ՐՏ_modules.ՐՏ_def("components.progress_bar");
ՐՏ_modules.ՐՏ_def("components.modal");
ՐՏ_modules.ՐՏ_def("components.form");
ՐՏ_modules.ՐՏ_def("components.vscroll");
ՐՏ_modules.ՐՏ_def("components.flash");
ՐՏ_modules.ՐՏ_def("components");
ՐՏ_modules.ՐՏ_def("app_components.top_menu");
ՐՏ_modules.ՐՏ_def("app_components.login");
ՐՏ_modules.ՐՏ_def("models");
ՐՏ_modules.ՐՏ_def("app_components.post");
ՐՏ_modules.ՐՏ_def("app_components.change_password");
ՐՏ_modules.ՐՏ_def("app_components");
ՐՏ_modules.ՐՏ_def("xtools");
ՐՏ_modules.ՐՏ_def("store.auth");
ՐՏ_modules.ՐՏ_def("store.post");
ՐՏ_modules.ՐՏ_def("store.root");
ՐՏ_modules.ՐՏ_def("store");
ՐՏ_modules.ՐՏ_def("pages.login");
ՐՏ_modules.ՐՏ_def("pages.index");
ՐՏ_modules.ՐՏ_def("pages.register");
ՐՏ_modules.ՐՏ_def("pages.profile");
ՐՏ_modules.ՐՏ_def("pages.post_new");
ՐՏ_modules.ՐՏ_def("pages.about");
ՐՏ_modules.ՐՏ_def("pages");
ՐՏ_modules.ՐՏ_def("routes");
ՐՏ_modules.ՐՏ_def("setup");
ՐՏ_modules.ՐՏ_def("app");

ՐՏ_modules["ՐՏ:asset.mechanic"].body = function(){
    var __name__ = "asset.mechanic";

    var RS_MODULES;
    RS_MODULES = ՐՏ_modules;
    function module(mod_id) {
        if (mod_id) {
            return RS_MODULES[mod_id];
        }
        function all_() {
            var ret;
            ret = {};
            for (var k in RS_MODULES) {
                if (!k.startsWith("ՐՏ:")) {
                    ret[k] = RS_MODULES[k];
                }
            }
            return ret;
        }
        function keys() {
            var ret;
            ret = [];
            for (var k in RS_MODULES) {
                if (!k.startsWith("ՐՏ:")) {
                    ret.push(k);
                }
            }
            return ret;
        }
        return {
            "all": all_,
            keys: keys
        };
    }
    function module_spec(mod_id) {
        if (mod_id) {
            return RS_MODULES["ՐՏ:" + mod_id];
        }
        return {
            "all": function() {
                var ret;
                ret = {};
                module().keys().forEach(function(k) {
                    ret[k] = module_spec(k);
                });
                return ret;
            },
            "undefined": function() {
                var ret;
                ret = {};
                module().keys().forEach(function(k) {
                    var ms;
                    ms = module_spec(k);
                    if (!(ms.exports || ms.body)) {
                        ret[k] = ms;
                    }
                });
                return ret;
            },
            "defined": function() {
                var ret;
                ret = {};
                module().keys().forEach(function(k) {
                    var ms;
                    ms = module_spec(k);
                    if (ms.exports || ms.body) {
                        ret[k] = ms;
                    }
                });
                return ret;
            }
        };
    }
    function create_module(mod_name, pack_id) {
        var mod_id, pack, rs_mod_id;
        mod_id = pack_id ? pack_id + "." + mod_name : mod_name;
        if (module_spec(mod_id)) {
            throw new KeyError("Module exists: " + mod_id);
        }
        if (pack_id) {
            pack = module_spec(pack_id);
            if (!pack) {
                throw new KeyError("Package doesn't exists: " + pack_id);
            }
        } else {
            pack = null;
        }
        RS_MODULES.ՐՏ_def_mod(mod_id);
        if (pack) {
            rs_mod_id = "ՐՏ:" + mod_id;
            pack.export(mod_name, function() {
                return RS_MODULES[rs_mod_id].exports;
            }, function(v) {
                replace_module(mod_id, v);
            });
        }
    }
    function replace_module(mod_id, new_exp) {
        var ՐՏitr1, ՐՏidx1;
        var mod_spec, exp, p;
        if (!(mod_spec = module_spec(mod_id))) {
            throw new KeyError("Module doesn't exist: " + mod_id);
        }
        ՐՏitr1 = ՐՏ_Iterable(exp = mod_spec.exports);
        for (ՐՏidx1 = 0; ՐՏidx1 < ՐՏitr1.length; ՐՏidx1++) {
            p = ՐՏitr1[ՐՏidx1];
            delete exp[p];
        }
        Object.defineProperties(exp, Object.getOwnPropertyDescriptors(new_exp));
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.mechanic"];
    ՐՏ_mod.export("RS_MODULES", function(){return RS_MODULES;}, function(ՐՏ_v){if (typeof RS_MODULES !== "undefined") {RS_MODULES = ՐՏ_v;};});
    ՐՏ_mod.export("module", function(){return module;}, function(ՐՏ_v){if (typeof module !== "undefined") {module = ՐՏ_v;};});
    ՐՏ_mod.export("module_spec", function(){return module_spec;}, function(ՐՏ_v){if (typeof module_spec !== "undefined") {module_spec = ՐՏ_v;};});
    ՐՏ_mod.export("create_module", function(){return create_module;}, function(ՐՏ_v){if (typeof create_module !== "undefined") {create_module = ՐՏ_v;};});
    ՐՏ_mod.export("replace_module", function(){return replace_module;}, function(ՐՏ_v){if (typeof replace_module !== "undefined") {replace_module = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset.rs_vue"].body = function(){
    var __name__ = "asset.rs_vue";

    function is_hook(name) {
        return [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "activated", "deactivated", "beforeDestroy", "destroyed", "render" ].includes(name);
    }
    function is_special(name) {
        return /^(_.+|constructor)$/.test(name);
    }
    class RS_vue {
        constructor (v_collector, name) {
            var ՐՏ_1, ՐՏitr2, ՐՏidx2, ՐՏitr3, ՐՏidx3, ՐՏitr4, ՐՏidx4;
            var self = this;
            var tmp, bases, it, sym, _name, k, methods, meth;
            if (!v_collector) {
                v_collector = self.__vue_opt__;
            } else if (ՐՏ_type(v_collector) === "String") {
                name = v_collector;
                v_collector = self.__vue_opt__;
            }
            if (name) {
                self.name = (ՐՏ_1 = name.split("."))[ՐՏ_1.length-1];
            }
            self.props = {};
            if (tmp = self.data || self._init_data) {
                self.data = tmp;
            }
            self.methods = {};
            if (v_collector) {
                if ((bases = v_collector.bases) && bases.length) {
                    self.mixins = v_collector.bases.map(function(it) {
                        if (it instanceof RS_vue) {
                            return it;
                        }
                        return new it();
                    });
                }
                self.computed = v_collector._computed;
                self.directives = v_collector._directives;
                self.filters = v_collector._filters;
                self.watch = v_collector._watch;
                Object.assign(self.methods, v_collector._methods);
                ՐՏitr2 = ՐՏ_Iterable([ [ "~", "_mutations" ], [ "*", "_actions" ] ]);
                for (ՐՏidx2 = 0; ՐՏidx2 < ՐՏitr2.length; ՐՏidx2++) {
                    it = ՐՏitr2[ՐՏidx2];
                    [sym, _name] = it;
                    if (v_collector[_name]) {
                        if (!self.map_store) {
                            self.map_store = {};
                        }
                        ՐՏitr3 = ՐՏ_Iterable(v_collector[_name]);
                        for (ՐՏidx3 = 0; ՐՏidx3 < ՐՏitr3.length; ՐՏidx3++) {
                            k = ՐՏitr3[ՐՏidx3];
                            self.map_store[k] = sym;
                            self.methods[k] = v_collector[_name][k];
                        }
                    }
                }
            }
            methods = Object.getOwnPropertyDescriptors(self.__proto__);
            ՐՏitr4 = ՐՏ_Iterable(methods);
            for (ՐՏidx4 = 0; ՐՏidx4 < ՐՏitr4.length; ՐՏidx4++) {
                meth = ՐՏitr4[ՐՏidx4];
                if (is_special(meth) || v_collector && v_collector.__collected__[meth]) {
                    continue;
                }
                if (is_hook(meth)) {
                    self[meth] = methods[meth].value;
                } else if (methods[meth].value.call) {
                    self.methods[meth] = methods[meth].value;
                }
            }
        }
        static make () {
            var args = [].slice.call(arguments, 0);
            var cls;
            cls = this;
            return new cls(...args);
        }
    }
    function unpack_name_fun_opt(f_reg_as) {
        function unpacker(reg_as, name_fun_opt, opt) {
            var self, arg1type, name;
            self = this;
            if (!name_fun_opt) {
                if (reg_as === "_getters") {
                    return function(f) {
                        var name;
                        name = f.__name__ || f.name;
                        return f_reg_as.call(self, reg_as, name, f());
                    };
                } else {
                    throw new Error("Attempt to call V_Collector @decorator with empty `()`");
                }
            }
            arg1type = ՐՏ_type(name_fun_opt);
            if (arg1type.startsWith("Fun")) {
                name = name_fun_opt.__name__ || name_fun_opt.name;
                return f_reg_as.call(self, reg_as, name, name_fun_opt);
            } else {
                return function(f) {
                    var name;
                    if (arg1type.startsWith("Str")) {
                        name = name_fun_opt;
                        if (opt) {
                            opt.handler = f;
                        } else {
                            opt = f;
                        }
                    } else {
                        opt = name_fun_opt;
                        name = f.__name__ || f.name;
                        opt.handler = f;
                    }
                    return f_reg_as.call(self, reg_as, name, opt);
                };
            }
        }
        return unpacker;
    }
    var V_collector = (ՐՏ_2 = class V_collector {
        constructor () {
            var self = this;
            self._methods = null;
            self._computed = null;
            self._watch = null;
            self._filters = null;
            self._directives = null;
            self._getters = null;
            self._mutations = null;
            self._actions = null;
            self.__current__ = null;
            self.__collected__ = {};
        }
        _collector (opt_name, extra) {
            var self = this;
            self.__current__ = {
                __collected__: {}
            };
            if (extra) {
                Object.assign(self.__current__, extra);
            }
            function wrapper(cls) {
                cls.prototype[opt_name] = self.__current__;
                cls.prototype.name = cls.name;
                self.__current__ = null;
                return cls;
            }
            return wrapper;
        }
        component () {
            var self = this;
            var bases = [].slice.call(arguments, 0);
            return self._collector("__vue_opt__", {
                bases: bases
            });
        }
        store () {
            var self = this;
            return self._collector("__store_opt__");
        }
        _reg_as (reg_as, name, fun_opt) {
            var self = this;
            var cur;
            cur = self.__current__ || self;
            if (!cur[reg_as]) {
                cur[reg_as] = {};
            }
            cur[reg_as][name] = fun_opt;
            cur.__collected__[name] = true;
            return fun_opt.handler ? fun_opt.handler : fun_opt;
        }
        meth (name_or_fun) {
            var self = this;
            return self._reg_as("_methods", name_or_fun);
        }
        computed (name_or_fun) {
            var self = this;
            return self._reg_as("_computed", name_or_fun);
        }
        filter (name_or_fun) {
            var self = this;
            return self._reg_as("_filters", name_or_fun);
        }
        directive (name_or_fun) {
            var self = this;
            return self._reg_as("_directives", name_or_fun);
        }
        watch (name_or_fun, opt) {
            var self = this;
            return self._reg_as("_watch", name_or_fun, opt);
        }
        getter (name_or_fun) {
            var self = this;
            return self._reg_as("_getters", name_or_fun);
        }
        model (name_or_fun) {
            var self = this;
            return self._reg_as("_getters")(name_or_fun);
        }
        mutation (name_or_fun) {
            var self = this;
            return self._reg_as("_mutations", name_or_fun);
        }
        action (name_or_fun) {
            var self = this;
            return self._reg_as("_actions", name_or_fun);
        }
    }, (function(){
        Object.defineProperties(ՐՏ_2.prototype, {
            _reg_as: {
                enumerable: false, 
                writable: true, 
                value: unpack_name_fun_opt(ՐՏ_2.prototype._reg_as)
            }
        });
        return ՐՏ_2;
    })(), ՐՏ_2);
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.rs_vue"];
    ՐՏ_mod.export("is_hook", function(){return is_hook;}, function(ՐՏ_v){if (typeof is_hook !== "undefined") {is_hook = ՐՏ_v;};});
    ՐՏ_mod.export("is_special", function(){return is_special;}, function(ՐՏ_v){if (typeof is_special !== "undefined") {is_special = ՐՏ_v;};});
    ՐՏ_mod.export("RS_vue", function(){return RS_vue;}, function(ՐՏ_v){if (typeof RS_vue !== "undefined") {RS_vue = ՐՏ_v;};});
    ՐՏ_mod.export("unpack_name_fun_opt", function(){return unpack_name_fun_opt;}, function(ՐՏ_v){if (typeof unpack_name_fun_opt !== "undefined") {unpack_name_fun_opt = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset.utils"].body = function(){
    var __name__ = "asset.utils";

    function timeout(tm) {
        function inner(f) {
            var h;
            h = setTimeout(f, tm);
            return h;
        }
        return inner;
    }
    function inject_props(opt) {
        var ՐՏitr5, ՐՏidx5;
        var src, props, target, ret, src_getter, isArr, p, map_from, getter;
        src = opt.src;
        props = opt.props;
        target = opt.target;
        ret = target || {};
        opt = {};
        src_getter = function(n) {
            return function() {
                return src[n];
            };
        };
        isArr = Array.isArray(props);
        ՐՏitr5 = ՐՏ_Iterable(props);
        for (ՐՏidx5 = 0; ՐՏidx5 < ՐՏitr5.length; ՐՏidx5++) {
            p = ՐՏitr5[ՐՏidx5];
            getter = isArr || !(map_from = props[p]) || map_from === "self" ? src_getter(p) : ՐՏ_type(map_from) === "String" ? src_getter(map_from) : map_from;
            opt[p] = {
                configurable: false,
                enumerable: true,
                get: getter
            };
        }
        Object.defineProperties(ret, opt);
        return ret;
    }
    function to_pascal(txt) {
        var single_word, ret;
        single_word = true;
        function clearAndUpper(text) {
            if (single_word) {
                single_word = text[0] !== "_";
            }
            return text.replace(/_/, "").toUpperCase();
        }
        ret = txt.replace(/((^[^_])|(_\w))/g, clearAndUpper);
        if (single_word) {
            ret = "X" + ret;
        }
        return ret;
    }
    class Merge_call {
        set_key (a) {
            var self = this;
            self.cmd = "set_key";
            self.args = a;
            return self;
        }
        merge (a) {
            var self = this;
            self.cmd = "merge";
            self.args = a;
            return self;
        }
    }
    class AsyncerError extends Error {
        constructor (msg, fun) {
            super(msg);
            var self = this;
            self.wrapped = fun;
        }
    }
    function asyncer(fun) {
        var merge_call, ret;
        merge_call = {};
        function wrap(ctx) {
            function pret(ok, err) {
                function inner(f, opt) {
                    var ret_v, ret_throw, merge_key, v, fname, p;
                    if (opt) {
                        ret_v = opt.ret_v;
                        ret_throw = opt.ret_throw;
                        merge_key = opt.merge_key;
                    }
                    function _err(e, merge_key) {
                        try {
                            throw e;
                        } catch (ՐՏ_Exception) {
                            err(e);
                        }
                        if (merge_key) {
                            merge_call[merge_key].map(function(cb) {
                                cb.err(e);
                            });
                            delete merge_call[merge_key];
                        }
                    }
                    if (ret_throw) {
                        v = ret_throw;
                    } else {
                        try {
                            if (!f) {
                                f = fun.apply(ctx.self, ctx.args);
                                if (!(f && f.next)) {
                                    fname = fun.__name__ || fun.name || "<anonymous>";
                                    throw new AsyncerError(`${fname} must be instance of Generator`, fun);
                                }
                            }
                            v = f.next(ret_v);
                        } catch (ՐՏ_Exception) {
                            var e = ՐՏ_Exception;
                            _err(e, merge_key);
                            return;
                        }
                    }
                    if (v.value instanceof Merge_call) {
                        if (v.value.cmd === "get_keys") {
                            Promise.resolve(Object.keys(merge_call)).then(function(ret_v) {
                                inner(f, {
                                    ret_v: ret_v,
                                    merge_key: merge_key
                                });
                            });
                        } else if (v.value.cmd === "merge") {
                            if (p = merge_call[v.value.args]) {
                                p.push({
                                    ok: function(v) {
                                        ok(v);
                                    },
                                    err: function(v) {
                                        err(v);
                                    }
                                });
                                return;
                            } else {
                                merge_key = v.value.args;
                                merge_call[merge_key] = [];
                                Promise.resolve(null).then(function(ret_v) {
                                    inner(f, {
                                        ret_v: ret_v,
                                        merge_key: merge_key
                                    });
                                });
                            }
                        } else {
                            Promise.resolve(null).then(function(ret_v) {
                                inner(f, {
                                    ret_v: ret_v,
                                    merge_key: merge_key
                                });
                            });
                        }
                    } else if (!v.done) {
                        if (v.value instanceof Promise) {
                            v.value.then(function(ret_v) {
                                inner(f, {
                                    ret_v: ret_v,
                                    merge_key: merge_key
                                });
                            }, function(e) {
                                var v;
                                try {
                                    v = f.throw(e);
                                } catch (ՐՏ_Exception) {
                                    var e = ՐՏ_Exception;
                                    _err(e, merge_key);
                                    return;
                                }
                                inner(f, {
                                    ret_throw: v,
                                    merge_key: merge_key
                                });
                            });
                        } else {
                            Promise.resolve(v.value).then(function(ret_v) {
                                inner(f, {
                                    ret_v: ret_v,
                                    merge_key: merge_key
                                });
                            });
                        }
                    } else {
                        ok(v.value);
                        if (merge_key) {
                            merge_call[merge_key].map(function(cb) {
                                cb.ok(v.value);
                            });
                            delete merge_call[merge_key];
                        }
                    }
                }
                inner();
            }
            return pret;
        }
        ret = function() {
            var ctx, p;
            ctx = {
                self: this,
                args: arguments
            };
            p = new Promise(wrap(ctx));
            return p;
        };
        ret.__name__ = fun.__name__ || fun.name;
        return ret;
    }
    function upload() {
        var field_name;
        field_name = "files";
        function prom(ok, err) {
            var el, ret;
            el = document.createElement("input");
            el.setAttribute("type", "file");
            el.setAttribute("multiple", true);
            el.style.display = "none";
            document.body.appendChild(el);
            ret = [];
            el.onchange = function() {
                var frm, done, i;
                frm = new FormData();
                done = el.files.length;
                for (i = 0; i < el.files.length; i++) {
                    frm.append(field_name, el.files[i], el.files[i].name);
                }
                ok(frm);
            };
            el.click();
            document.body.removeChild(el);
        }
        return new Promise(prom);
    }
    function read_img_url(file_input) {
        var files, raeder;
        files = file_input.files || file_input;
        if (!files[0]) {
            return Promise.resolve("");
        }
        raeder = new FileReader();
        function prom(ok, err) {
            raeder.onloadend = function() {
                ok(raeder.result);
            };
            raeder.readAsDataURL(files[0]);
        }
        return new Promise(prom);
    }
    function upload_text() {
        function prom(ok, err) {
            var el, ret;
            el = document.createElement("input");
            el.setAttribute("type", "file");
            el.setAttribute("multiple", true);
            el.style.display = "none";
            document.body.appendChild(el);
            ret = [];
            el.onchange = function() {
                var done, i, fr;
                done = el.files.length;
                for (i = 0; i < el.files.length; i++) {
                    fr = new FileReader();
                    fr._filename_ = el.files[i].name;
                    fr.onloadend = function(s) {
                        ret.push({
                            name: s.target._filename_,
                            value: s.target.result
                        });
                        --done;
                        if (done === 0) {
                            ok(ret);
                        }
                    };
                    fr.readAsText(el.files[i]);
                }
            };
            el.click();
            document.body.removeChild(el);
        }
        return new Promise(prom);
    }
    function download_link(href, filename) {
        var el;
        el = document.createElement("a");
        el.setAttribute("href", href);
        if (filename) {
            el.setAttribute("download", filename);
        }
        el.style.display = "none";
        document.body.appendChild(el);
        el.click();
        document.body.removeChild(el);
    }
    function download(s, filename, mime) {
        var blob, el_data, el;
        blob = new Blob([ s ], {
            type: mime || "text/plain;charset=utf-8;"
        });
        el_data = window.URL.createObjectURL(blob);
        el = document.createElement("a");
        el.setAttribute("href", el_data);
        if (filename) {
            el.setAttribute("download", filename);
        }
        el.style.display = "none";
        document.body.appendChild(el);
        el.click();
        document.body.removeChild(el);
        window.URL.revokeObjectURL(blob);
    }
    function SF(text, props) {
        function replacer(str_, p) {
            var t, p_chain;
            if (t = /^("|')(.+?)("|')$/.exec(p)) {
                return props[t[2]];
            }
            if ((p_chain = p.split(".")) && p_chain.length > 1) {
                return p_chain.reduce(function(it, p) {
                    return it[p];
                }, props);
            }
            return props[p];
        }
        return text.replace(/\$\{ *(.+?) *\}/g, replacer);
    }
    function drag_track(start_event, debounce) {
        function inner(tracker) {
            var ctx;
            inner.__name__ = tracker.__name__ || tracker.name;
            ctx = {
                x0: 0,
                y0: 0,
                dx: 0,
                dy: 0,
                debounce: debounce || 50,
                tm: null,
                last_event: null
            };
            function process_move(e) {
                e = e || ctx.last_event;
                ctx.dx = e.clientX - ctx.x0;
                ctx.dy = e.clientY - ctx.y0;
                ctx.tm = false;
                tracker.call(null, "move", e, {
                    dx: ctx.dx,
                    dy: ctx.dy
                });
            }
            function mousemove(e) {
                e.stopPropagation();
                e.preventDefault();
                ctx.last_event = e;
                if (ctx.tm === null) {
                    process_move();
                } else if (!ctx.tm) {
                    ctx.tm = setTimeout(process_move, ctx.debounce);
                }
            }
            function mouseup(e) {
                document.removeEventListener("mousemove", mousemove);
                document.removeEventListener("mouseup", mouseup);
                e.stopPropagation();
                e.preventDefault();
                if (ctx.tm) {
                    clearTimeout(ctx.tm);
                    process_move(e);
                }
                tracker.call(null, "stop", e, {
                    dx: ctx.dx,
                    dy: ctx.dy
                });
            }
            function mousedn(e) {
                ctx.x0 = e.clientX;
                ctx.y0 = e.clientY;
                document.addEventListener("mousemove", mousemove, false);
                document.addEventListener("mouseup", mouseup, false);
                e.stopPropagation();
                e.preventDefault();
                tracker.call(null, "start", e, {
                    x0: ctx.x0,
                    y0: ctx.y0
                });
            }
            mousedn(start_event);
        }
        return inner;
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.utils"];
    ՐՏ_mod.export("timeout", function(){return timeout;}, function(ՐՏ_v){if (typeof timeout !== "undefined") {timeout = ՐՏ_v;};});
    ՐՏ_mod.export("inject_props", function(){return inject_props;}, function(ՐՏ_v){if (typeof inject_props !== "undefined") {inject_props = ՐՏ_v;};});
    ՐՏ_mod.export("to_pascal", function(){return to_pascal;}, function(ՐՏ_v){if (typeof to_pascal !== "undefined") {to_pascal = ՐՏ_v;};});
    ՐՏ_mod.export("Merge_call", function(){return Merge_call;}, function(ՐՏ_v){if (typeof Merge_call !== "undefined") {Merge_call = ՐՏ_v;};});
    ՐՏ_mod.export("AsyncerError", function(){return AsyncerError;}, function(ՐՏ_v){if (typeof AsyncerError !== "undefined") {AsyncerError = ՐՏ_v;};});
    ՐՏ_mod.export("asyncer", function(){return asyncer;}, function(ՐՏ_v){if (typeof asyncer !== "undefined") {asyncer = ՐՏ_v;};});
    ՐՏ_mod.export("upload", function(){return upload;}, function(ՐՏ_v){if (typeof upload !== "undefined") {upload = ՐՏ_v;};});
    ՐՏ_mod.export("read_img_url", function(){return read_img_url;}, function(ՐՏ_v){if (typeof read_img_url !== "undefined") {read_img_url = ՐՏ_v;};});
    ՐՏ_mod.export("upload_text", function(){return upload_text;}, function(ՐՏ_v){if (typeof upload_text !== "undefined") {upload_text = ՐՏ_v;};});
    ՐՏ_mod.export("download_link", function(){return download_link;}, function(ՐՏ_v){if (typeof download_link !== "undefined") {download_link = ՐՏ_v;};});
    ՐՏ_mod.export("download", function(){return download;}, function(ՐՏ_v){if (typeof download !== "undefined") {download = ՐՏ_v;};});
    ՐՏ_mod.export("SF", function(){return SF;}, function(ՐՏ_v){if (typeof SF !== "undefined") {SF = ՐՏ_v;};});
    ՐՏ_mod.export("drag_track", function(){return drag_track;}, function(ՐՏ_v){if (typeof drag_track !== "undefined") {drag_track = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset.validators"].body = function(){
    var __name__ = "asset.validators";

    var default_messages;
    function make_template(templ) {
        return new Function("f", "return `" + templ + "`;");
    }
    class ValidationError extends Error {
    }
    default_messages = {
        required: "Enter ${f.label}",
        min_length: "${f.label} length should not be less than  ${f.minl}",
        length: "${f.label} length should be between ${f.minl} and ${f.maxl}",
        regex: "it doesn't look like ${f.label}",
        filter: "it doesn't look like ${f.label}"
    };
    class BaseValidator {
        constructor (opt) {
            var ՐՏitr6, ՐՏidx6;
            var self = this;
            var _messages, messages, k;
            self.sense_from = opt.sense_from || 0;
            self.required = opt.required;
            self.length = opt.length;
            self.regex = opt.regex;
            self.filter = opt.filter;
            _messages = Object.assign({}, default_messages, opt.messages || {});
            messages = {};
            ՐՏitr6 = ՐՏ_Iterable(_messages);
            for (ՐՏidx6 = 0; ՐՏidx6 < ՐՏitr6.length; ՐՏidx6++) {
                k = ՐՏitr6[ՐՏidx6];
                messages[k] = make_template(_messages[k]);
            }
            self.messages = messages;
            self.call = self.validate.bind(self);
        }
        _validate (v, opt) {
            var self = this;
            var msg, vlen, minl, maxl;
            msg = self.messages;
            vlen = v.length || 0;
            if (self.sense_from > vlen) {
                return;
            }
            if (!v) {
                if (self.required) {
                    return [ null, msg["required"](opt) ];
                } else {
                    return;
                }
            }
            if (self.length) {
                [minl, maxl] = self.length;
                if (!maxl) {
                    if (!(minl <= vlen)) {
                        return [ null, msg["min_length"](Object.assign({}, opt, {
                            minl: minl
                        })) ];
                    }
                } else {
                    if (!(minl <= vlen && vlen <= maxl)) {
                        return [ null, msg["length"](Object.assign({}, opt, {
                            minl: minl,
                            maxl: maxl
                        })) ];
                    }
                }
            }
            if (self.regex && !self.regex.test(v)) {
                return [ null, msg["regex"](opt) ];
            }
            if (self.filter) {
                try {
                    v = self.filter(v);
                } catch (ՐՏ_Exception) {
                    if (ՐՏ_Exception instanceof ValidationError) {
                        var err = ՐՏ_Exception;
                        return [ null, err.message || msg["filter"](opt) || "" ];
                    } else {
                        throw ՐՏ_Exception;
                    }
                }
            }
            return [ v, null ];
        }
        validate (v, opt) {
            var self = this;
            return self._validate(v, opt);
        }
    }
    function string(length, opt) {
        var def_opt;
        def_opt = {
            required: true,
            length: length
        };
        opt = Object.assign({}, def_opt, opt);
        return new BaseValidator(opt).call;
    }
    function email(opt) {
        var def_opt;
        def_opt = {
            required: true,
            regex: /^.+@[^@]+?\.\w+$/
        };
        opt = Object.assign({}, def_opt, opt);
        return new BaseValidator(opt).call;
    }
    function password(opt) {
        var def_opt;
        def_opt = {
            required: true,
            length: [ 8, 32 ]
        };
        opt = Object.assign({}, def_opt, opt);
        return new BaseValidator(opt).call;
    }
    function number(opt) {
        var def_opt;
        def_opt = {
            required: true,
            regex: /^\d+((,|\.)\d*)?$/,
            filter: function(v) {
                return new Number(v.replace(",", "."));
            }
        };
        opt = Object.assign({}, def_opt, opt);
        return new BaseValidator(opt).call;
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.validators"];
    ՐՏ_mod.export("default_messages", function(){return default_messages;}, function(ՐՏ_v){if (typeof default_messages !== "undefined") {default_messages = ՐՏ_v;};});
    ՐՏ_mod.export("make_template", function(){return make_template;}, function(ՐՏ_v){if (typeof make_template !== "undefined") {make_template = ՐՏ_v;};});
    ՐՏ_mod.export("ValidationError", function(){return ValidationError;}, function(ՐՏ_v){if (typeof ValidationError !== "undefined") {ValidationError = ՐՏ_v;};});
    ՐՏ_mod.export("BaseValidator", function(){return BaseValidator;}, function(ՐՏ_v){if (typeof BaseValidator !== "undefined") {BaseValidator = ՐՏ_v;};});
    ՐՏ_mod.export("string", function(){return string;}, function(ՐՏ_v){if (typeof string !== "undefined") {string = ՐՏ_v;};});
    ՐՏ_mod.export("email", function(){return email;}, function(ՐՏ_v){if (typeof email !== "undefined") {email = ՐՏ_v;};});
    ՐՏ_mod.export("password", function(){return password;}, function(ՐՏ_v){if (typeof password !== "undefined") {password = ՐՏ_v;};});
    ՐՏ_mod.export("number", function(){return number;}, function(ՐՏ_v){if (typeof number !== "undefined") {number = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset.computed"].body = function(){
    var __name__ = "asset.computed";

    var noop;
    noop = function() {
    };
    function computed_patch(Vue) {
        var _vm, Watcher, Dep;
        if (Vue.computed) {
            return;
        }
        _vm = new Vue({
            computed: {
                value: function() {
                    return 0;
                }
            }
        });
        Watcher = _vm._computedWatchers.value.constructor;
        Dep = _vm._data.__ob__.dep.__proto__.constructor;
        function computed(opt, ctx) {
            var _get, _set, watcher, ret;
            ctx = ctx || _vm;
            if (typeof opt === 'function') {
                _get = opt;
                _set = null;
            } else {
                _get = opt.get;
                _set = opt.set;
            }
            watcher = null;
            ret = {
                get: function get() {
                    var self = this;
                    if (!watcher) {
                        watcher = new Watcher(ctx, _get, noop, {
                            lazy: true
                        });
                    }
                    if (watcher.dirty) {
                        watcher.evaluate();
                    }
                    if (Dep.target) {
                        watcher.depend();
                    }
                    return watcher.value;
                },
                set: function set(v) {
                    var self = this;
                    if (!_set) {
                        throw new Error("Write operation failed: computed value is readonly");
                    }
                    _set(v);
                }
            };
            return ret;
        }
        computed.$destroy = function() {
            _vm.$destroy();
        };
        computed._vm = _vm;
        Vue.computed = computed;
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.computed"];
    ՐՏ_mod.export("noop", function(){return noop;}, function(ՐՏ_v){if (typeof noop !== "undefined") {noop = ՐՏ_v;};});
    ՐՏ_mod.export("computed_patch", function(){return computed_patch;}, function(ՐՏ_v){if (typeof computed_patch !== "undefined") {computed_patch = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset.store33"].body = function(){
    var __name__ = "asset.store33";

    var inject_props = ՐՏ_modules["asset.utils"].inject_props;
    var computed_patch = ՐՏ_modules["asset.computed"].computed_patch;
    "\n# how modules state and computed mounted in the parent\nstate_api:\n    state {\n        mod_foo_state:{\n            submod_foo_state:{...}\n            foo_propA:...,\n            foo_propB:...,\n        },\n        mod_bar_state:{...}\n    }\n\n    computed:{\n        # `self` holds own getters\n        self: {\n            getterA\n            getterB\n        }\n        # submodules getters\n        mod_foo_computed:{\n            submod_foo_computed:{self:{...}, ...}\n            foo_getterA:...,\n            foo_getterB:...,\n        },\n        mod_bar_computed:{...},\n    }\n";
    function print_log() {
        var args = [].slice.call(arguments, 0);
        if (window.ENV && window.ENV.debug) {
            console.log.apply(console, arguments);
        }
    }
    function to_hash(v) {
        var ret;
        if (Array.isArray(v)) {
            ret = {};
            v.forEach(function(it) {
                ret[it] = it;
            });
        } else {
            ret = v;
        }
        return ret;
    }
    function make_prop_chain(path, splitter, prefix) {
        prefix = prefix || "";
        if (!Array.isArray(path)) {
            splitter = splitter || ".";
            path = path.split(splitter).filter(function(v) {
                return v;
            });
        }
        return path.reduce(function(p, v) {
            return p + prefix + "." + v;
        }, "");
    }
    function check_path(obj, path, return_prop) {
        var p, ret, last_prnt;
        if (!Array.isArray(path)) {
            path = path.split(".");
        }
        if (path.length === 1) {
            p = path[0];
            ret = obj.hasOwnProperty(p);
            if (ret && return_prop) {
                ret = obj[p];
            }
            return ret;
        }
        try {
            last_prnt = make_prop_getter(path.slice(0, -1).join("."))(obj);
        } catch (ՐՏ_Exception) {
            if (ՐՏ_Exception instanceof TypeError) {
                return false;
            } else {
                throw ՐՏ_Exception;
            }
        }
        ret = last_prnt && last_prnt.hasOwnProperty(path[path.length-1]);
        if (ret && return_prop) {
            ret = last_prnt[path[path.length-1]];
        }
        return ret;
    }
    function make_prop_getter(prop_chain) {
        var sym0, me, ret;
        if (prop_chain) {
            sym0 = prop_chain[0];
            if (sym0 !== "." && sym0 !== "[") {
                prop_chain = "." + prop_chain;
            }
        }
        me = make_prop_getter;
        if (!(ret = me._memo[prop_chain])) {
            ret = me._memo[prop_chain] = new Function("obj", "{return obj" + prop_chain + "}");
        }
        return ret;
    }
    make_prop_getter._memo = {};
    var split_modgetter_rest = (ՐՏ_3 = function split_modgetter_rest(path) {
        var mod_rest, mod_path, is_relative, modgetter, _modgetter;
        if (path[0] === "$") {
            if (path[1] === ".") {
                return [ function(mod) {
                    return mod.root || mod;
                }, path.slice(2) ];
            } else if (path[1] === "/") {
                path = path.slice(1);
            }
        }
        mod_rest = /(^\.?(\/[\w$]+)+)((\.[^.]+)+)$/.exec(path);
        if (!mod_rest) {
            return [ function(mod) {
                return mod;
            }, path ];
        } else {
            mod_path = mod_rest[1];
            if (mod_path[0] === ".") {
                is_relative = true;
                mod_path = mod_path.slice(2);
            } else {
                is_relative = false;
                mod_path = mod_path.slice(1);
            }
            modgetter = make_prop_getter(".modules" + make_prop_chain(mod_path, "/") + ".self");
            if (!is_relative) {
                _modgetter = modgetter;
                modgetter = function(mod) {
                    return _modgetter(mod.root || mod);
                };
            }
        }
        return [ modgetter, mod_rest[3].slice(1) ];
    }, Object.defineProperty(ՐՏ_3, "__doc__", {
        value: '"foo.some"  - module prop path\n"./foo/bar.baz" - relative path\n"/foo/bar.baz" - root path\n"$/foo/bar.baz" - also root path\n"$.bar" - root prop'
    }), ՐՏ_3);
    class RS_store {
        mount (istate, computed_node, path) {
            var ՐՏitr7, ՐՏidx7, ՐՏitr8, ՐՏidx8;
            var self = this;
            var map_getters, k, g, opt, raw_getters, name;
            self._path = path;
            self._istate = istate;
            self.computed = computed_node;
            istate.set(self._init_state);
            delete self._init_state;
            if (self.map_getters) {
                map_getters = self.map_getters;
                ՐՏitr7 = ՐՏ_Iterable(map_getters);
                for (ՐՏidx7 = 0; ՐՏidx7 < ՐՏitr7.length; ՐՏidx7++) {
                    k = ՐՏitr7[ՐՏidx7];
                    g = self.getter_factory(map_getters[k]);
                    opt = {
                        enumerable: true,
                        configurable: true,
                        get: g.get,
                        set: g.set
                    };
                    Object.defineProperty(self.computed.self, k, opt);
                }
            }
            if (raw_getters = self._raw_getters) {
                ՐՏitr8 = ՐՏ_Iterable(raw_getters);
                for (ՐՏidx8 = 0; ՐՏidx8 < ՐՏitr8.length; ՐՏidx8++) {
                    name = ՐՏitr8[ՐՏidx8];
                    self._mounted_getters[name] = self.mount_getter(name, raw_getters[name]);
                }
            }
            self.__mount_helpers__();
        }
        static root (processor, state) {
            var cls;
            cls = this;
            return new cls(processor, state, true);
        }
        constructor (processor, state, is_root) {
            var self = this;
            var store_opt, opt, _vm, computed, istate;
            self.is_root = is_root;
            if (self.is_root && !self._vue) {
                throw ReferenceError("You should first call Vue.use(Your_Store)");
            }
            self.processor = processor;
            if (state) {
                self._init_state = state.call ? state() : state;
            } else {
                self._init_state = processor.init_state ? processor.init_state() : {};
            }
            self.root = null;
            self._istate = null;
            self._path = null;
            self._unwatchers = [];
            self.modules = {};
            store_opt = processor.__store_opt__;
            self._mutations = store_opt._mutations || {};
            self._actions = store_opt._actions;
            self._raw_getters = store_opt._getters;
            self._mounted_getters = {};
            self._2way_getters = {};
            self.computed = null;
            self.map_getters = processor.map_getters;
            self.dispatch = self.dispatch.bind(self);
            self.commit = self.commit.bind(self);
            self.processor.commit = self.commit;
            self.processor.dispatch = self.dispatch;
            self.processor.get = self.get.bind(self);
            self.processor._get = self._get.bind(self);
            self.processor.$set = self.$set.bind(self);
            self.processor.$del = self.$del.bind(self);
            self.processor.$watch = self.$watch;
            inject_props({
                src: self,
                props: [ "state", "$state" ],
                target: self.processor
            });
            if (self.is_root) {
                self.__handlers_memo__ = {};
                opt = {
                    state: null,
                    computed: {
                        "self": {}
                    },
                    rspace: {}
                };
                _vm = self._vm = new self._vue({
                    data: opt
                });
                computed = _vm.computed;
                istate = {
                    get: function() {
                        return _vm.state;
                    },
                    set: function(v) {
                        _vm.state = v;
                    }
                };
                self.mount(istate, computed, []);
                if (self.processor.modules) {
                    self.mount_modules(self.processor.modules);
                }
                if (self.processor._mounted) {
                    self.processor._mounted();
                }
            } else {
            }
        }
        mount_getter (name, user_getter) {
            var self = this;
            var raw_getter, raw_setter, opt;
            if (user_getter instanceof Function) {
                raw_getter = user_getter;
            } else {
                raw_getter = user_getter.get;
                raw_setter = user_getter.set;
            }
            function wrapped_getter() {
                return raw_getter.call(self.processor, self.state, self.computed, self.$state, self.$computed);
            }
            opt = self.vue.computed(wrapped_getter);
            Object.assign(opt, {
                enumerable: true,
                configurable: true,
                set: function() {
                    throw new Error(`Getter '${name}' isn't 2way`);
                }
            });
            if (raw_setter) {
                opt.set = function(v) {
                    raw_setter.call(self.processor, v, self.state, self.computed, self.$state, self.$computed);
                };
                self._2way_getters[name] = true;
            }
            Object.defineProperty(self.computed.self, name, opt);
            return opt.get;
        }
        $del () {
            var self = this;
            self._vm.$delete.apply(self._vm, arguments);
        }
        $set () {
            var self = this;
            return self._vm.$set.apply(self._vm, arguments);
        }
        check_spath (path, return_prop) {
            var self = this;
            return check_path(self.state, path, return_prop);
        }
        check_gpath (path, return_prop) {
            var self = this;
            return check_path(self.computed.self, path, return_prop);
        }
        get state () {
            var self = this;
            return self._istate.get();
        }
        get $state () {
            var self = this;
            return (self.root || self)._istate.get();
        }
        get $computed () {
            var self = this;
            return (self.root || self).computed;
        }
        _$get (path) {
            var self = this;
            return make_prop_getter(path)(self.state);
        }
        $get (path) {
            var self = this;
            var c;
            c = null;
            if (path in (c = self.computed.self)) {
                return c[path];
            } else {
                return self._$get(path);
            }
        }
        get vue () {
            var self = this;
            var r;
            return (RS_store.prototype.r = self.root) ? RS_store.prototype.r._vue : self._vue;
        }
        mount_modules (modules) {
            var ՐՏitr9, ՐՏidx9;
            var self = this;
            var k, m;
            ՐՏitr9 = ՐՏ_Iterable(modules);
            for (ՐՏidx9 = 0; ՐՏidx9 < ՐՏitr9.length; ՐՏidx9++) {
                k = ՐՏitr9[ՐՏidx9];
                m = modules[k];
                m = m.Store && new m.Store() || m;
                self.mount_module(m, k);
            }
        }
        mount_module (mod_obj, as_name) {
            var ՐՏitr10, ՐՏidx10;
            var self = this;
            var path, path_node, rpath_node, parent_node_getter, istate, inject, provide, props, p;
            if (!(mod_obj instanceof RS_store)) {
                mod_obj = new RS_store(mod_obj);
            }
            path = "";
            as_name = as_name || mod_obj.__name__ || mod_obj.constructor && mod_obj.constructor.name;
            if (!(as_name && ՐՏ_type(as_name).startsWith("Str"))) {
                throw new Error("can`t get the name of module: " + mod_obj);
            }
            path_node = self.state;
            self.$set(path_node, as_name, null);
            rpath_node = self._path;
            parent_node_getter = make_prop_getter(make_prop_chain(rpath_node));
            istate = {
                get: function() {
                    return parent_node_getter(self.$state)[as_name];
                },
                set: function(v) {
                    parent_node_getter(self.$state)[as_name] = v;
                },
                $parent_node: function() {
                    return parent_node_getter(self.$state);
                },
                $self_name: as_name
            };
            self.$set(self.computed, as_name, {
                self: {}
            });
            mod_obj._path = rpath_node.concat(as_name);
            mod_obj.root = self.root || self;
            mod_obj.mount(istate, self.computed[as_name], mod_obj._path);
            if (mod_obj.processor.modules) {
                mod_obj.mount_modules(mod_obj.processor.modules);
            }
            self.modules[as_name] = Object.assign({
                self: mod_obj
            }, mod_obj.modules);
            if (inject = to_hash(mod_obj.processor.inject)) {
                provide = self.processor.provide;
                props = {};
                ՐՏitr10 = ՐՏ_Iterable(inject);
                for (ՐՏidx10 = 0; ՐՏidx10 < ՐՏitr10.length; ՐՏidx10++) {
                    p = ՐՏitr10[ՐՏidx10];
                    const to_ = p;
                    const from_ = inject[to_];
                    props[to_] = {
                        enumerable: false,
                        configurable: true,
                        get: function() {
                            return provide[from_];
                        }
                    };
                }
                Object.defineProperties(mod_obj.processor, props);
            }
            if (mod_obj.processor._mounted) {
                mod_obj.processor._mounted();
            }
        }
        _get (path) {
            var self = this;
            var mod, rest;
            [mod, rest] = split_modgetter_rest(path);
            return mod(self)._$get(rest);
        }
        get (path) {
            var self = this;
            var mod, rest;
            [mod, rest] = split_modgetter_rest(path);
            return mod(self).$get(rest);
        }
        getter_factory (path) {
            var self = this;
            var rpath, rmod, h;
            rpath = self.get_rpath(path);
            rmod = self.root || self;
            if (!(h = rmod.__handlers_memo__[rpath])) {
                h = rmod.__handlers_memo__[rpath] = rmod._getter_factory(rpath);
            }
            return h;
        }
        _getter_factory (rpath) {
            var self = this;
            var argtype, modgetter, rest, _getter, rest_split, rest_0;
            if (self.root) {
                throw new Error("this function is for staff only");
            }
            argtype = ՐՏ_type(rpath);
            if (argtype[0] === "S") {
                [modgetter, rest] = split_modgetter_rest(rpath);
            } else if (argtype[0] === "F") {
                modgetter = arguments[0];
                rest = arguments[1];
            } else {
                throw new Error("Wrong args: ", arguments);
            }
            _getter = make_prop_getter(rest);
            rest_split = rest.split(".");
            if (rest_split.length === 1) {
                rest_0 = null;
            } else {
                rest_0 = rest_split[0];
            }
            function getter() {
                var mod, c;
                mod = modgetter(self);
                c = null;
                if (rest in (c = mod.computed.self)) {
                    return c[rest];
                } else if (rest_0 && rest_0 in c) {
                    return _getter({
                        [rest_0]: c[rest_0]
                    });
                } else {
                    return _getter(mod.state);
                }
            }
            function setter(v) {
                var mod, c;
                mod = modgetter(self);
                c = mod.computed.self;
                if (ՐՏ_in(rest, c)) {
                    c[rest] = v;
                } else {
                    throw new Error(`Getter '${rpath}' doesn't exist`);
                }
            }
            getter.get = getter;
            getter.set = setter;
            getter.get_set = {
                get: getter,
                set: setter
            };
            return getter;
        }
        get_rpath (path_str) {
            var self = this;
            var is_root, path;
            is_root = self.is_root;
            path = path_str || "";
            if (ՐՏ_in(path[0], [ "/", "$" ])) {
                return path;
            } else if (path[0] === ".") {
                if (is_root) {
                    return path.slice(1);
                }
                path = path.slice(1);
            } else if (path) {
                if (is_root) {
                    return path;
                }
                path = "." + path;
            }
            return "/" + (self._path || []).join("/") + path;
        }
        handler_factory (path) {
            var self = this;
            var rpath, rmod, h;
            rpath = self.get_rpath(path);
            rmod = self.root || self;
            if (!(h = rmod.__handlers_memo__[rpath])) {
                h = rmod.__handlers_memo__[rpath] = rmod._handler_factory(rpath);
            }
            return h;
        }
        _handler_factory (rpath) {
            var self = this;
            var modgetter, rest, mutation, action;
            if (self.root) {
                throw new Error("this function is for staff only");
            }
            [modgetter, rest] = split_modgetter_rest(rpath);
            if (rest.endsWith("~")) {
                mutation = rest.slice(0, -1);
                return function() {
                    var args = [].slice.call(arguments, 0);
                    modgetter(self)._commit(mutation, ...args);
                };
            } else if (rest.endsWith("=")) {
                return function() {
                    var args = [].slice.call(arguments, 0);
                    return modgetter(self)._commit(rest, ...args);
                };
            } else if (rest.endsWith("*")) {
                action = rest.slice(0, -1);
                return function() {
                    var args = [].slice.call(arguments, 0);
                    return modgetter(self)._dispatch(action, ...args);
                };
            } else {
                return self._getter_factory(modgetter, rest);
            }
        }
        _commit (mutation) {
            var self = this;
            var payload = [].slice.call(arguments, 1);
            var h, path_arr, parent, child;
            print_log("mutation: ", mutation);
            print_log("\tpayload: ", payload);
            if (h = self._mutations[mutation]) {
                return h.apply(self.processor, payload);
            } else if (mutation[mutation.length-1] === "=") {
                path_arr = mutation.slice(0, -1).split(".");
                if (path_arr.length === 1) {
                    if (self._2way_getters[path_arr[0]]) {
                        self.computed.self[path_arr[0]] = payload[0];
                        return payload[0];
                    } else {
                        parent = self.state;
                    }
                    child = path_arr[0];
                } else if (parent = self.check_spath(path_arr.slice(0, -1), true)) {
                    child = path_arr[path_arr.length-1];
                }
                if (parent) {
                    return self.$set(parent, child, payload[0]);
                }
            }
            throw new Error("unknown mutation: " + mutation);
        }
        commit (mutation) {
            var self = this;
            var payload = [].slice.call(arguments, 1);
            var modgetter;
            [modgetter, mutation] = split_modgetter_rest(mutation);
            return modgetter(self)._commit(mutation, ...payload);
        }
        _dispatch (action) {
            var self = this;
            var payload = [].slice.call(arguments, 1);
            var $action, p;
            print_log("action: ", action);
            print_log("\tpayload: ", payload);
            if (!(self._actions && ($action = self._actions[action]))) {
                throw new Error("unknown action: " + action);
            }
            p = $action.apply(self.processor, payload);
            if (!(p instanceof Promise)) {
                p = Promise.resolve(p);
            }
            return p;
        }
        dispatch (action) {
            var self = this;
            var payload = [].slice.call(arguments, 1);
            var modgetter, mod;
            [modgetter, action] = split_modgetter_rest(action);
            mod = modgetter(self);
            return mod._dispatch(action, ...payload);
        }
        set_mutation (h, as_name) {
            var self = this;
            as_name = as_name || h.__name__ || h.name;
            if (!(as_name && ՐՏ_type(as_name).startsWith("Str"))) {
                throw new Error("can`t get the name of new mutation: " + h);
            }
            if (ՐՏ_in(as_name, self._mutations)) {
            } else if (self.hasOwnProperty(as_name)) {
                throw new Error("Bad mutation name: " + as_name);
            }
            self._mutations[as_name] = self[as_name] = h;
        }
        set_action (h, as_name) {
            var self = this;
            as_name = as_name || h.__name__ || h.name;
            if (!(as_name && ՐՏ_type(as_name).startsWith("Str"))) {
                throw new Error("can`t get the name of new action: " + h);
            }
            if (ՐՏ_in(as_name, self._actions)) {
            } else if (self.hasOwnProperty(as_name)) {
                throw new Error("Bad action name: " + as_name);
            }
            self._actions[as_name] = self[as_name] = h;
        }
        __mount_helpers__ () {
            var self = this;
            if (self.is_root) {
                self.__proto__.$watch = function() {
                    var args = [].slice.call(arguments, 0);
                    var off;
                    off = self._vm.$watch(...args);
                    self._unwatchers.push(off);
                    return off;
                };
                self.__proto__._vm = self._vm;
            }
        }
        static _map_opt ($store, $map_opts, $opts, copy_opt) {
            var ՐՏitr11, ՐՏidx11, ՐՏitr13, ՐՏidx13, ՐՏitr14, ՐՏidx14;
            var is_mutation_re, is_action_re, $store_path, _map_opts, opt, p, injectors, k, map_to, map_from, map_to_split, map_to_meth, store_meth, modgetter, rest, store_mod, handler, action, mutation;
            is_mutation_re = /(.+)(~|=)$/;
            is_action_re = /(.+)\*$/;
            $store_path = $opts.propsData && $opts.propsData["store_path"];
            if (!$map_opts) {
                return;
            } else if ($store_path) {
                _map_opts = {};
                ՐՏitr11 = ՐՏ_Iterable($map_opts);
                for (ՐՏidx11 = 0; ՐՏidx11 < ՐՏitr11.length; ՐՏidx11++) {
                    opt = ՐՏitr11[ՐՏidx11];
                    p = $map_opts[opt];
                    _map_opts[opt] = $store_path + (p[0] === "/" ? p : `.${p}`);
                }
                $map_opts = _map_opts;
            }
            injectors = {
                "*": function(f) {
                    return function() {
                        f.call(this, $store.dispatch, ...arguments);
                    };
                },
                "~": function(f) {
                    return function() {
                        f.call(this, $store.commit, ...arguments);
                    };
                }
            };
            if (Array.isArray($map_opts)) {
                $map_opts = (function() {
                    var ՐՏidx12, ՐՏitr12 = ՐՏ_Iterable($map_opts), ՐՏres = {}, k;
                    for (ՐՏidx12 = 0; ՐՏidx12 < ՐՏitr12.length; ՐՏidx12++) {
                        k = ՐՏitr12[ՐՏidx12];
                        ՐՏres[k] = k;
                    }
                    return ՐՏres;
                })();
            }
            if (copy_opt) {
                ՐՏitr13 = ՐՏ_Iterable([ "methods", "computed" ]);
                for (ՐՏidx13 = 0; ՐՏidx13 < ՐՏitr13.length; ՐՏidx13++) {
                    opt = ՐՏitr13[ՐՏidx13];
                    $opts[opt] = Object.assign({}, $opts[opt]);
                }
            }
            ՐՏitr14 = ՐՏ_Iterable($map_opts);
            for (ՐՏidx14 = 0; ՐՏidx14 < ՐՏitr14.length; ՐՏidx14++) {
                map_to = ՐՏitr14[ՐՏidx14];
                map_from = $map_opts[map_to];
                if (ՐՏ_in(map_from, [ "*", "~" ])) {
                    if (!$opts.methods[map_to]) {
                        throw ReferenceError("Can`t map " + map_from + " to non-existing method: " + map_to);
                    }
                    $opts.methods[map_to] = injectors[map_from]($opts.methods[map_to]);
                } else if (ՐՏ_type(map_from).startsWith("Fun") && (map_to_split = /(.+?)(\*|~)$/.exec(map_to))) {
                    map_to_meth = map_to_split[1];
                    store_meth = map_to_split[2];
                    $opts.methods[map_to_meth] = injectors[store_meth](map_from);
                } else {
                    [modgetter, rest] = split_modgetter_rest(map_from);
                    store_mod = modgetter($store);
                    if (rest === "$bus") {
                        $opts["computed"][map_to] = function() {
                            return modgetter($store).$bus;
                        };
                        continue;
                    }
                    handler = $store.handler_factory(map_from);
                    if (action = is_action_re.exec(rest)) {
                        action = action[1];
                        if (!(store_mod._actions && ՐՏ_in(action, store_mod._actions))) {
                            throw ReferenceError("unknown action in `map_store`: " + map_from);
                        }
                        if ($opts["methods"][map_to]) {
                            $opts["methods"][map_to] = function(h, store_h) {
                                return function() {
                                    return h.call(this, store_h, ...arguments);
                                };
                            }($opts["methods"][map_to], handler);
                        } else {
                            $opts["methods"][map_to] = handler;
                        }
                    } else if (mutation = is_mutation_re.exec(rest)) {
                        if (mutation[2] === "=") {
                            if (!store_mod.check_spath(mutation[1])) {
                                throw ReferenceError("unknown mutation in `map_store`: " + map_from);
                            }
                        } else {
                            mutation = mutation[1];
                            if (!(ՐՏ_in(mutation, store_mod._mutations))) {
                                throw ReferenceError("unknown mutation in `map_store`: " + map_from);
                            }
                        }
                        if ($opts["methods"][map_to]) {
                            $opts["methods"][map_to] = function(h, store_h) {
                                return function() {
                                    return h.call(this, store_h, ...arguments);
                                };
                            }($opts["methods"][map_to], handler);
                        } else {
                            $opts["methods"][map_to] = handler;
                        }
                    } else if (rest[rest.length-1] === "=") {
                        rest = rest.slice(0, -1);
                        if (store_mod.check_spath(rest)) {
                            $opts["methods"][map_to] = handler.get_set;
                        }
                    } else if (store_mod.check_gpath(rest) || store_mod.check_spath(rest)) {
                        $opts["computed"][map_to] = handler.get_set;
                    } else {
                        throw ReferenceError("Can`t map `" + map_from + "` to `" + map_to + "`");
                    }
                }
            }
        }
        static before_create () {
            var map_store, $opts, store, $map_opts;
            map_store = "map_store";
            $opts = this.$options;
            if (this === this.$root) {
                store = $opts.$store;
            } else {
                store = this.$root.$store;
            }
            this.$store = store;
            $map_opts = $opts[map_store] || $opts.propsData && $opts.propsData[map_store];
            if (!$map_opts) {
                return;
            }
            if (!store) {
                throw new Error("Store is not found");
            }
            RS_store._map_opt(store, $map_opts, $opts, true);
        }
        static beforeDestroy () {
            var self;
            self = this;
            if (self.bus_cleanup && self.bus_cleanup.length) {
                print_log("bus_cleanup", self.bus_cleanup);
                self.bus_cleanup.forEach(function(off) {
                    off();
                });
            }
        }
        static install (Vue, opt) {
            computed_patch(Vue);
            RS_store.prototype._vue = Vue;
            Vue.mixin({
                beforeCreate: RS_store.before_create,
                beforeDestroy: RS_store.beforeDestroy
            });
        }
        $unwatch_all () {
            var ՐՏitr15, ՐՏidx15, ՐՏitr16, ՐՏidx16;
            var self = this;
            var unwatchers, name, off;
            unwatchers = self._unwatchers;
            if (!unwatchers) {
                return;
            }
            ՐՏitr15 = ՐՏ_Iterable(self.modules || []);
            for (ՐՏidx15 = 0; ՐՏidx15 < ՐՏitr15.length; ՐՏidx15++) {
                name = ՐՏitr15[ՐՏidx15];
                self.modules[name].self.$unwatch_all();
            }
            ՐՏitr16 = ՐՏ_Iterable(self._unwatchers);
            for (ՐՏidx16 = 0; ՐՏidx16 < ՐՏitr16.length; ՐՏidx16++) {
                off = ՐՏitr16[ՐՏidx16];
                off();
            }
            delete self._unwatchers;
        }
        $destroy () {
            var ՐՏitr17, ՐՏidx17;
            var self = this;
            var name, node;
            self.$unwatch_all();
            ՐՏitr17 = ՐՏ_Iterable(self.modules || []);
            for (ՐՏidx17 = 0; ՐՏidx17 < ՐՏitr17.length; ՐՏidx17++) {
                name = ՐՏitr17[ՐՏidx17];
                self.modules[name].self.$destroy();
                delete self.modules[name];
            }
            if (!self.is_root) {
                node = self._istate.$parent_node();
                name = self._istate.$self_name;
                delete node[name];
            } else {
                delete self.computed;
                self._vm.$destroy();
                delete self._vm;
            }
        }
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset.store33"];
    ՐՏ_mod.export("print_log", function(){return print_log;}, function(ՐՏ_v){if (typeof print_log !== "undefined") {print_log = ՐՏ_v;};});
    ՐՏ_mod.export("to_hash", function(){return to_hash;}, function(ՐՏ_v){if (typeof to_hash !== "undefined") {to_hash = ՐՏ_v;};});
    ՐՏ_mod.export("make_prop_chain", function(){return make_prop_chain;}, function(ՐՏ_v){if (typeof make_prop_chain !== "undefined") {make_prop_chain = ՐՏ_v;};});
    ՐՏ_mod.export("check_path", function(){return check_path;}, function(ՐՏ_v){if (typeof check_path !== "undefined") {check_path = ՐՏ_v;};});
    ՐՏ_mod.export("make_prop_getter", function(){return make_prop_getter;}, function(ՐՏ_v){if (typeof make_prop_getter !== "undefined") {make_prop_getter = ՐՏ_v;};});
    ՐՏ_mod.export("split_modgetter_rest", function(){return split_modgetter_rest;}, function(ՐՏ_v){if (typeof split_modgetter_rest !== "undefined") {split_modgetter_rest = ՐՏ_v;};});
    ՐՏ_mod.export("RS_store", function(){return RS_store;}, function(ՐՏ_v){if (typeof RS_store !== "undefined") {RS_store = ՐՏ_v;};});
    ՐՏ_mod.export("inject_props", function(){return inject_props;}, function(ՐՏ_v){if (typeof inject_props !== "undefined") {inject_props = ՐՏ_v;};});
    ՐՏ_mod.export("computed_patch", function(){return computed_patch;}, function(ՐՏ_v){if (typeof computed_patch !== "undefined") {computed_patch = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:asset"].body = function(){
    var __name__ = "asset";

    ՐՏ_modules["ՐՏ:asset"].export("mechanic", function(){return ՐՏ_modules["asset.mechanic"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:asset"].export("rs_vue", function(){return ՐՏ_modules["asset.rs_vue"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:asset"].export("utils", function(){return ՐՏ_modules["asset.utils"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:asset"].export("validators", function(){return ՐՏ_modules["asset.validators"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:asset"].export("computed", function(){return ՐՏ_modules["asset.computed"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:asset"].export("store33", function(){return ՐՏ_modules["asset.store33"];}, function(){throw new Error("use Object.defineProperty!");});

    var ՐՏ_mod = ՐՏ_modules["ՐՏ:asset"];
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:server"].body = function(){
    var __name__ = "server";

    var HTTP_METHODS;
    HTTP_METHODS = "get post put patch delete head".split(" ");
    function inject_http_methods(cls) {
        var ՐՏitr18, ՐՏidx18;
        var m;
        ՐՏitr18 = ՐՏ_Iterable(HTTP_METHODS);
        for (ՐՏidx18 = 0; ՐՏidx18 < ՐՏitr18.length; ՐՏidx18++) {
            m = ՐՏitr18[ՐՏidx18];
            const meth = m;
            cls.prototype[meth] = function() {
                var args = [].slice.call(arguments, 0);
                return this.http(meth, ...args);
            };
        }
        return cls;
    }
    
    var API = (ՐՏ_4 = class API {
        constructor (axios, baseURL) {
            var self = this;
            self.baseURL = baseURL;
            self.srv = axios.create({
                baseURL: baseURL,
                timeout: 6e4
            });
            self.last_resp = "";
            self.last_error = "";
            self._on_satus = {};
        }
        on_status (status, replace=false) {
            var self = this;
            if (!replace && self._on_satus[status]) {
                throw new Error(`"${status}"-handler is already set`);
            }
            function inner(f) {
                self._on_satus[status] = f;
                return f;
            }
            return inner;
        }
        http (meth, path, args, query, data, conf) {
            var self = this;
            var _opt, opt, ret;
            _opt = {
                meth: meth,
                args: args,
                query: query,
                data: data,
                conf: conf
            };
            opt = {
                args: args,
                query: query,
                data: data,
                conf: conf
            };
            if (!Array.isArray(args)) {
                opt.args = null;
                opt.query = args;
                opt.data = query;
                opt.conf = data;
                args = opt.args;
                query = opt.query;
                data = opt.data;
                conf = opt.conf;
            }
            if (query && query.is_config) {
                opt.conf = query;
                opt.query = null;
                opt.data = null;
                query = null;
                data = null;
                conf = opt.conf;
            }
            if (!conf) {
                if (data && data.is_config) {
                    opt.conf = data;
                    opt.data = null;
                    data = null;
                    conf = opt.conf;
                }
                if (!data && ՐՏ_in(meth, [ "post", "put", "patch", "delete" ])) {
                    opt.data = query;
                    opt.query = null;
                    query = null;
                    data = opt.data;
                }
            }
            conf = conf || {};
            if (args) {
                args.unshift(path);
                path = args.join("/");
            }
            if (query) {
                conf.params = query;
            }
            if (data) {
                conf.data = data;
            }
            Object.assign(conf, {
                method: meth,
                url: path
            });
            delete conf.is_config;
            ret = self.srv.request(conf).then(function(r) {
                self.done(r);
                return r;
            }, function(r) {
                return self.raise_error(r, _opt);
            });
            return ret;
        }
        done (resp) {
            var self = this;
            var status, cb;
            self.last_resp = resp;
            status = resp.status;
            if (cb = self._on_satus[status]) {
                cb(resp);
            }
        }
        raise_error (err, opt) {
            var self = this;
            var status, cb, ret;
            self.last_error = err;
            status = err.response.status;
            if (cb = self._on_satus[status]) {
                ret = cb(err, opt);
                if (ret) {
                    return ret;
                }
            }
            return Promise.reject(err);
        }
    }, ՐՏ_4 = inject_http_methods(ՐՏ_4), ՐՏ_4);
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:server"];
    ՐՏ_mod.export("HTTP_METHODS", function(){return HTTP_METHODS;}, function(ՐՏ_v){if (typeof HTTP_METHODS !== "undefined") {HTTP_METHODS = ՐՏ_v;};});
    ՐՏ_mod.export("inject_http_methods", function(){return inject_http_methods;}, function(ՐՏ_v){if (typeof inject_http_methods !== "undefined") {inject_http_methods = ՐՏ_v;};});
    ՐՏ_mod.export("API", function(){return API;}, function(ՐՏ_v){if (typeof API !== "undefined") {API = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:common"].body = function(){
    var __name__ = "common";

    var store, router, URL, http;
    var settings = ՐՏ_modules["settings"];
    var server = ՐՏ_modules["server"];
    store = null;
    router = null;
    URL = null;
    http = new server.API(axios, settings.app_base);
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:common"];
    ՐՏ_mod.export("store", function(){return store;}, function(ՐՏ_v){if (typeof store !== "undefined") {store = ՐՏ_v;};});
    ՐՏ_mod.export("router", function(){return router;}, function(ՐՏ_v){if (typeof router !== "undefined") {router = ՐՏ_v;};});
    ՐՏ_mod.export("URL", function(){return URL;}, function(ՐՏ_v){if (typeof URL !== "undefined") {URL = ՐՏ_v;};});
    ՐՏ_mod.export("http", function(){return http;}, function(ՐՏ_v){if (typeof http !== "undefined") {http = ՐՏ_v;};});
    ՐՏ_mod.export("settings", function(){return settings;}, function(ՐՏ_v){if (typeof settings !== "undefined") {settings = ՐՏ_v;};});
    ՐՏ_mod.export("server", function(){return server;}, function(ՐՏ_v){if (typeof server !== "undefined") {server = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:directives.click_out"].body = function(){
    var __name__ = "directives.click_out";

    var name;
    name = "click-out";
    function make() {
        var handleOutsideClick, opt;
        handleOutsideClick = null;
        opt = {
            bind: function bind(el, binding, vnode) {
                var self = this;
                handleOutsideClick = function(e) {
                    var handler, exclude, clickedOnExcludedEl, refName, excludedEl;
                    handler = binding.value.handler;
                    exclude = binding.value.exclude;
                    clickedOnExcludedEl = false;
                    for (var i=0;i++;i<exclude.length) {
                        refName = exclude[i];
                        excludedEl = vnode.context.$refs[refName];
                        if (clickedOnExcludedEl = excludedEl.contains(e.target)) {
                            break;
                        }
                    }
                    if (!(el.contains(e.target) || clickedOnExcludedEl)) {
                        vnode.context[handler]();
                    }
                };
                document.addEventListener("click", handleOutsideClick);
                document.addEventListener("touchstart", handleOutsideClick);
            },
            unbind: function unbind() {
                var self = this;
                document.removeEventListener("click", handleOutsideClick);
                document.removeEventListener("touchstart", handleOutsideClick);
            }
        };
        return opt;
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:directives.click_out"];
    ՐՏ_mod.export("name", function(){return name;}, function(ՐՏ_v){if (typeof name !== "undefined") {name = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:directives.vscroll"].body = function(){
    var __name__ = "directives.vscroll";

    function make() {
        var opt, directive;
        opt = {
            scroll_snap: null,
            listener: null,
            container: null,
            height: null,
            win: null
        };
        function cb(cmd) {
            var args = [].slice.call(arguments, 1);
            var win, container, container_rect;
            win = opt.win;
            container = opt.container();
            container_rect = container.getBoundingClientRect();
            if (cmd === "scrollto") {
                container.children[args[0]].scrollIntoView();
            } else if (cmd === "snap") {
                opt.height = container_rect.height;
                opt.scroll_snap = win.scrollTop;
            } else if (cmd === "range") {
                win = opt.win;
                container = opt.container();
                return get_visible_range(win, container.children);
            } else {
                win.scrollTop = opt.scroll_snap - (opt.height - container_rect.height);
            }
        }
        function get_visible_range(win, items) {
            var win_rect, win_top, win_bottom, ret, up, dn, cur_idx, is_visible, el;
            win_rect = win.getBoundingClientRect();
            win_top = win_rect.top;
            win_bottom = win_rect.bottom;
            ret = [ 0, -1 ];
            up = 0;
            dn = items.length - 1;
            while (dn - up >= 2) {
                cur_idx = (up + dn) / 2 >> 0;
                is_visible = items[cur_idx].getBoundingClientRect().bottom > win_top;
                if (is_visible) {
                    dn = cur_idx;
                } else {
                    up = cur_idx;
                }
            }
            ret[0] = is_visible ? dn - 1 : up;
            while (el = items[cur_idx]) {
                is_visible = el.getBoundingClientRect().top < win_bottom;
                if (!is_visible) {
                    break;
                }
                ++cur_idx;
            }
            ret[1] = el ? cur_idx : -1;
            return ret;
        }
        function handler(e) {
            var win, container;
            win = opt.win = e.target;
            container = opt.container();
            opt.listener(get_visible_range(win, container.children), cb);
        }
        directive = {
            bind: function bind(el, binding, vnode) {
                var self = this;
                var listener, container;
                listener = binding.value.listener;
                container = binding.value.container;
                opt.win = el;
                opt.listener = function() {
                    var args = [].slice.call(arguments, 0);
                    return vnode.context[listener](...args);
                };
                opt.container = container ? function() {
                    return vnode.context[container]();
                } : function() {
                    return opt.win.children[0];
                };
                el.addEventListener("scroll", handler);
            },
            inserted: function inserted(el, binding, vnode) {
                var self = this;
                vnode.context[binding.value.cmd] = cb;
            },
            unbind: function unbind(el) {
                var self = this;
                el.removeEventListener("scroll", handler);
            }
        };
        return directive;
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:directives.vscroll"];
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:directives"].body = function(){
    var __name__ = "directives";

    ՐՏ_modules["ՐՏ:directives"].export("click_out", function(){return ՐՏ_modules["directives.click_out"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:directives"].export("vscroll", function(){return ՐՏ_modules["directives.vscroll"];}, function(){throw new Error("use Object.defineProperty!");});

    var ՐՏ_mod = ՐՏ_modules["ՐՏ:directives"];
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.navbar"].body = function(){
    var __name__ = "components.navbar";

    var templ, vc;
    templ = '\n<nav  class = "navbar" :class = "{\'is-fixed-top\': fixed_top}">\n    <div  class = \'container\'>\n        <div  class = \'navbar-brand\'>\n            <slot  name = \'brand\'></slot>\n            <a  class = "navbar-burger burger" @click = \'is_active = !is_active\'>\n                <span  v-for = \'i in 3\' aria-hidden = "true"/>\n            </a>\n        </div>\n        <div  class = "navbar-menu" :class = "{\'is-active\':is_active}" @click = \'is_active = false\'>\n            <template  v-for = "side in [\'left\', \'right\']">\n                <div  :class = "\'navbar-\' + (side == \'left\' ? \'start\' : \'end\')">\n                    <template  v-for = "item in menus[side]">\n                        <template  v-if = "item.slot">\n                            <slot  :name = \'item.slot\' :side = \'side\'></slot>\n                        </template>\n                        <template  v-else-if = \'item.subitems && item.subitems.length\'>\n                            <div  class = "navbar-item has-dropdown is-hoverable">\n                                <a  class = "navbar-link">{{item.label}}</a>\n                                <div  class = "navbar-dropdown">\n                                    <template  v-for = "subitem in item.subitems">\n                                        <XNavbarItem  :href = "subitem.href" v-on = "subitem.on" v-bind = "subitem.attrs">{{subitem.label}}</XNavbarItem>\n                                    </template>\n                                </div>\n                            </div>\n                        </template>\n                        <template  v-else>\n                            <XNavbarItem  :href = "item.href" v-on = "item.on" v-bind = "item.attrs">{{item.label}}</XNavbarItem>\n                        </template>\n                    </template>\n                </div>\n            </template>\n        </div>\n    </div>\n    <slot  name = \'progress\'></slot>\n</nav>\n';
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var timeout = ՐՏ_modules["asset.utils"].timeout;
    vc = new V_collector();
    
    var XNavbarItem = (ՐՏ_5 = class XNavbarItem extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.props = {
                href: String,
                dropdown: Boolean,
                arrowless: false,
                side: String
            };
        }
        link (h) {
            var self = this;
            var nativeOn, href, to_router_link, tag, attrs, on;
            nativeOn = null;
            function click(e) {
                var ՐՏ_6;
                self.$emit("click", e);
                
                (ՐՏ_6 = function() {
                    e.target.blur();
                }, ՐՏ_6 = timeout(0)(ՐՏ_6), ՐՏ_6)
            }
            href = self.href;
            to_router_link = href && href.startsWith("to:") ? href.slice(3) : null;
            if (to_router_link) {
                tag = "router-link";
                attrs = {
                    "to": to_router_link
                };
                nativeOn = {
                    click: click
                };
            } else {
                tag = "a";
                attrs = {
                    "href": href || null
                };
                on = {
                    click: click
                };
            }
            return h(tag, {
                "class": "navbar-item",
                attrs: attrs,
                on: on,
                nativeOn: nativeOn
            }, self.$slots.label || self.$slots.default);
        }
        dropdown_link (h) {
            var self = this;
            var class_;
            class_ = {
                "navbar-link": true,
                "is-arrowless": self.arrowless
            };
            return h("a", {
                "class": class_
            }, self.$scopedSlots.label());
        }
        dropdown_body (h) {
            var self = this;
            var dropdown_data, ret;
            dropdown_data = {
                "class": {
                    "navbar-dropdown": true,
                    "is-right": self.side === "right"
                }
            };
            ret = [ self.dropdown_link(h), h("div", dropdown_data, self.$scopedSlots.default()) ];
            return ret;
        }
        render (h) {
            var self = this;
            if (self.dropdown) {
                return h("div", {
                    "class": "navbar-item has-dropdown is-hoverable"
                }, self.dropdown_body(h));
            } else {
                return self.link(h);
            }
        }
    }, ՐՏ_5 = vc.component()(ՐՏ_5), ՐՏ_5);
    
    var XNavbar = (ՐՏ_7 = class XNavbar extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.template = templ;
            self.props = {
                fixed_top: Boolean,
                menus: Object
            };
        }
        data () {
            var self = this;
            return {
                is_active: false
            };
        }
        beforeMount () {
            var self = this;
            if (self.fixed_top) {
                document.body.style.paddingTop = "50px";
            }
        }
    }, ՐՏ_7 = vc.component()(ՐՏ_7), ՐՏ_7);
    function make() {
        return [ new XNavbar(), new XNavbarItem() ];
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.navbar"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("XNavbarItem", function(){return XNavbarItem;}, function(ՐՏ_v){if (typeof XNavbarItem !== "undefined") {XNavbarItem = ՐՏ_v;};});
    ՐՏ_mod.export("XNavbar", function(){return XNavbar;}, function(ՐՏ_v){if (typeof XNavbar !== "undefined") {XNavbar = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("timeout", function(){return timeout;}, function(ՐՏ_v){if (typeof timeout !== "undefined") {timeout = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.progress_bar"].body = function(){
    var __name__ = "components.progress_bar";

    var templ, vc;
    templ = "\n<div  class = 'xprogress-container'>\n    <div  v-if = 'active' class = 'xprogress' key = 'progress'>\n        <div  ref = 'pro' :style = \"style\"></div>\n    </div>\n</div>\n";
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    vc = new V_collector();
    
    var XProgressBar = (ՐՏ_8 = class XProgressBar extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.template = templ;
        }
        data () {
            var self = this;
            var ret;
            ret = {
                active: false,
                style: null
            };
            return ret;
        }
        start () {
            var self = this;
            if (self.active) {
                return;
            }
            self.style = null;
            self.active = true;
            self.$nextTick(function() {
                setTimeout(function() {
                    self.style = {
                        "width": "98%"
                    };
                }, 100);
            });
        }
        done () {
            var self = this;
            if (!self.active) {
                return;
            }
            self.style = {
                "width": "100%",
                "transition": "width linear 0.5s"
            };
            setTimeout(function() {
                self.active = false;
            }, 700);
        }
    }, ՐՏ_8 = vc.component()(ՐՏ_8), ՐՏ_8);
    function make() {
        return new XProgressBar();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.progress_bar"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("XProgressBar", function(){return XProgressBar;}, function(ՐՏ_v){if (typeof XProgressBar !== "undefined") {XProgressBar = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.modal"].body = function(){
    var __name__ = "components.modal";

    var templ, templ_dialog, CLEANUP_REQUIRED, vc, xdialog;
    templ = '\n<div  class = "modal" :class = "{\'is-active\': is_active}">\n    <div  class = "modal-background" @click = "can_cancel$ && close(\'ui\')"></div>\n    <div  class = "modal-card" :style = "{\'max-height\': max_height$, \'max-width\': max_width$, \'width\': width$ }">\n        <header  class = "modal-card-head">\n            <p  class = "modal-card-title">\n                <slot  name = \'title\'></slot>\n            </p>\n            <button  v-if = \'can_cancel$\' class = "delete" aria-label = "close" @click.stop = "close(\'ui\')"/>\n        </header>\n        <section  class = "modal-card-body" :class = "{\'rb-6\': !$slots.footer}">\n            <slot  name = \'body\'></slot>\n        </section>\n        <footer  v-if = \'$slots.footer\' class = "modal-card-foot">\n            <slot  name = \'footer\'></slot>\n        </footer>\n    </div>\n</div>\n';
    templ_dialog = "\n<XModal  :can_cancel = 'true' :max_width = 'max_width' :max_height = 'max_height' @close = \"$emit('close')\">\n    <template  v-slot:title>\n        {{title}}\n    </template>\n    <template  v-slot:body>\n        <div  class = 'media'>\n            <div  class = 'media-left' :class = \"'has-text-' + status\">\n                <i  :class = \"'fa fa-' + icon + ' fa-3x'\"></i>\n            </div>\n            <div  class = 'media-content'>\n                {{message}}\n            </div>\n        </div>\n    </template>\n    <template  v-slot:footer>\n        <div  class = 'container buttons is-right'>\n            <button  class = 'button' :class = \"'is-' + status\" @click.stop.prevent = \"$emit('ok')\">{{ok_text}}</button>\n            <button  v-if = \"type == 'confirm'\" class = 'button' @click.stop.prevent = \"$emit('cancel')\">{{cancel_text}}</button>\n        </div>\n    </template>\n</XModal>\n";
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    CLEANUP_REQUIRED = "cleanup_required";
    vc = new V_collector();
    
    var XDialog = (ՐՏ_9 = class XDialog extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.props = {
                can_cancel: {
                    type: Boolean,
                    default: true
                },
                max_height: {
                    type: String,
                    default: "600px"
                },
                max_width: {
                    type: String,
                    default: "300px"
                },
                type: {
                    type: String
                },
                ok_text: {
                    type: String,
                    default: "OK"
                },
                cancel_text: {
                    type: String,
                    default: "Cancel"
                },
                title: {
                    type: String,
                    default: "Confirmation"
                },
                message: String,
                icon: {
                    type: String,
                    default: "exclamation-circle"
                },
                status: {
                    type: String,
                    default: "warning"
                }
            };
            self.template = templ_dialog;
        }
    }, ՐՏ_9 = vc.component()(ՐՏ_9), ՐՏ_9);
    
    var XModal = (ՐՏ_10 = class XModal extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.props = {
                can_cancel: {
                    type: Boolean,
                    default: true
                },
                max_height: String,
                max_width: String,
                width: String
            };
            self.template = templ;
        }
        data () {
            var ՐՏitr19, ՐՏidx19;
            var self = this;
            var data, open_props, props_keys, k;
            data = {
                is_active: false,
                can_cancel$: self.can_cancel,
                max_height$: self.max_height,
                max_width$: self.max_width,
                width$: self.width
            };
            if (open_props = self.$parent.$options.modal_props) {
                props_keys = Object.keys(self.$options.props);
                ՐՏitr19 = ՐՏ_Iterable(Object.keys(open_props));
                for (ՐՏidx19 = 0; ՐՏidx19 < ՐՏitr19.length; ՐՏidx19++) {
                    k = ՐՏitr19[ՐՏidx19];
                    if (ՐՏ_in(k, props_keys)) {
                        data[k + "$"] = open_props[k];
                    }
                }
            }
            return data;
        }
        is_active (n, o) {
            var self = this;
            var p;
            p = self.$parent;
            if (!n && p.$attrs[CLEANUP_REQUIRED]) {
                p.$el.parentNode.removeChild(p.$el);
                p.$destroy();
            }
        }
        mounted () {
            var self = this;
            self.is_active = true;
            self.$parent.$modal = self;
        }
        close (ui) {
            var self = this;
            if (ui) {
                self.$emit("close");
            }
            self.is_active = false;
        }
    }, ՐՏ_10 = vc.component()((function(){
        Object.defineProperties(ՐՏ_10.prototype, {
            is_active: {
                enumerable: false, 
                writable: true, 
                value: vc.watch(ՐՏ_10.prototype.is_active)
            }
        });
        return ՐՏ_10;
    })()), ՐՏ_10);
    xdialog = Vue.extend(new XDialog());
    function make() {
        return new XModal();
    }
    function open(parent, opt) {
        var ՐՏitr20, ՐՏidx20;
        var propsData, cmp, vcmp, vm, is_dia, el, res, p, e;
        propsData = opt.props;
        if (cmp = opt.component) {
            vcmp = Vue.extend(cmp);
            vm = new vcmp({
                parent: parent,
                propsData: propsData
            });
            vm.$options.modal_props = opt;
            is_dia = false;
        } else {
            vm = new xdialog({
                parent: parent,
                propsData: propsData
            });
            is_dia = true;
        }
        el = document.body.appendChild(document.createElement("div"));
        el.setAttribute(CLEANUP_REQUIRED, true);
        vm.$mount(el);
        if (!is_dia) {
            return vm;
        }
        res = null;
        p = new Promise(function(resolve) {
            res = resolve;
        });
        ՐՏitr20 = ՐՏ_Iterable([ "ok", "cancel", "close" ]);
        for (ՐՏidx20 = 0; ՐՏidx20 < ՐՏitr20.length; ՐՏidx20++) {
            e = ՐՏitr20[ՐՏidx20];
            const ce = e;
            vm.$on(ce, function() {
                var args = [].slice.call(arguments, 0);
                var e;
                e = ce === "close" ? "cancel" : ce;
                if (args.length) {
                    res({
                        action: e,
                        args: args
                    });
                } else {
                    res(e);
                }
                if (ce !== "close") {
                    setTimeout(function() {
                        vm.$modal.close();
                    }, 0);
                }
            });
        }
        return p;
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.modal"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("templ_dialog", function(){return templ_dialog;}, function(ՐՏ_v){if (typeof templ_dialog !== "undefined") {templ_dialog = ՐՏ_v;};});
    ՐՏ_mod.export("CLEANUP_REQUIRED", function(){return CLEANUP_REQUIRED;}, function(ՐՏ_v){if (typeof CLEANUP_REQUIRED !== "undefined") {CLEANUP_REQUIRED = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("xdialog", function(){return xdialog;}, function(ՐՏ_v){if (typeof xdialog !== "undefined") {xdialog = ՐՏ_v;};});
    ՐՏ_mod.export("XDialog", function(){return XDialog;}, function(ՐՏ_v){if (typeof XDialog !== "undefined") {XDialog = ՐՏ_v;};});
    ՐՏ_mod.export("XModal", function(){return XModal;}, function(ՐՏ_v){if (typeof XModal !== "undefined") {XModal = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("open", function(){return open;}, function(ՐՏ_v){if (typeof open !== "undefined") {open = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.form"].body = function(){
    var __name__ = "components.form";

    var templ_field, templ_form, MAP_STATUS, vc;
    templ_field = "\n<div  class = \"field\">\n    <template  v-if = \"check_radio\">\n        <div  v-for = 'it in check_radio.fields' class = 'field' :key = 'it.name'>\n            <div  class = 'control'>\n                <label  v-for = 'it in check_radio.labels(it)' class = 'is-capitalized' :class = 'input_type'>\n                    <input  :type = 'input_type' :name = 'it.name' v-model = 'input_value' :value = 'it.value !== undefined ? it.value : it.name' @change = \"on_edit('change')\"/>\n                    <slot  v-if = \"[undefined, null].includes(it.label) || it.label\" :name = \"`${it.name}_label`\">\n                        {{it.label || it.name}}\n                    </slot>\n                </label>\n            </div>\n        </div>\n    </template>\n    <template  v-else>\n        <slot  v-if = \"input_label\" :name = \"`${name}_label`\">\n            <label  class = 'label is-capitalized'>{{input_label}}</label>\n        </slot>\n        <div  class = 'control' :class = \"{'has-icons-left': icon_left, 'has-icons-right': icon_right}\">\n            <template  v-if = \"input_type.startsWith('file')\">\n                <template  v-if = \"input_type === 'file.img'\">\n                    <figure  class = 'image is-128x128 is-inline-block' @click = 'select_file'>\n                        <img  :src = \"file_url\"/>\n                    </figure>\n                    <span>\n                        <button  class = 'delete' @click = 'clear_file'/>\n                    </span>\n                    <div  style = 'display:none;'>\n                        <input  type = \"file\" :name = \"name\" @change = 'change_input_file' ref = 'file'/>\n                    </div>\n                </template>\n                <template  v-else>\n                    <div  class = \"file has-name\">\n                        <label  class = \"file-label\">\n                            <input  class = \"file-input\" type = \"file\" :name = \"name\" @change = 'change_input_file' ref = 'file'/>\n                            <span  class = \"file-cta\">\n                                <span  class = \"file-icon\">\n                                    <i  class = \"fas fa-upload\"></i>\n                                </span>\n                                <span  class = \"file-label\">Choose a file</span>\n                            </span>\n                            <span  class = \"file-name\">{{filename}}</span>\n                        </label>\n                    </div>\n                </template>\n            </template>\n            <template  v-else-if = \"input_type === 'select'\">\n                <div  class = 'select'>\n                    <select  v-model = 'input_value' @input = \"on_edit('input')\" @change = \"on_edit('change')\">\n                        <option  v-for = 'opt in options' :value = 'opt.value !== undefined ? opt.value : opt.name'>\n                            {{option_label(opt)}}\n                        </option>\n                    </select>\n                </div>\n            </template>\n            <template  v-else>\n                <template  v-if = \"input_type === 'textarea'\">\n                    <textarea  \n                        class = 'textarea' \n                        :class = \"input_status\" \n                        :placeholder = 'placeholder' \n                        v-model = 'input_value' \n                        @input = \"on_edit('input')\" \n                        @change = \"on_edit('change')\"></textarea>\n                </template>\n                <template  v-else>\n                    <input  \n                        :name = 'name' \n                        class = 'input' \n                        :class = \"input_status\" \n                        :type = 'input_type' \n                        :placeholder = 'placeholder' \n                        v-model = 'input_value' \n                        @input = \"on_edit('input')\" \n                        @change = \"on_edit('change')\"/>\n                    <template  v-for = \"icon in [[icon_left, 'is-left'], [icon_right, 'is-right']]\">\n                        <span  v-if = \"icon[0]\" class = \"icon is-small\" :class = \"icon[1]\">\n                            <i  :class = \"'fas fa-' + icon[0]\"></i>\n                        </span>\n                    </template>\n                </template>\n                <p  v-if = 'help_message' class = \"help\" :class = \"input_status\">\n                    {{help_message}}\n                </p>\n            </template>\n        </div>\n    </template>\n</div>\n";
    templ_form = "\n<div>\n    <form  method = 'post' autocomplete = \"off\" @submit.prevent.stop>\n        <XField  v-for = 'it in fields_c' :key = 'it.name' :ref = 'it.name' v-bind = 'it' @change = \"$emit('change',it)\"></XField>\n        <slot  name = 'actions'>\n            <div  class = 'field is-grouped'>\n                <div  v-for = \"act in actions\" class = 'control'>\n                    <button  class = 'button is-primary' @click.stop.prevent = 'action(act)'>{{act.label || act.name}}</button>\n                </div>\n            </div>\n        </slot>\n    </form>\n</div>\n";
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;
    var read_img_url = ՐՏ_modules["asset.utils"].read_img_url;
    MAP_STATUS = {
        "ok": "is-success",
        "error": "is-danger",
        "warning": "is-warning"
    };
    vc = new V_collector();
    
    var XField = (ՐՏ_11 = class XField extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.template = templ_field;
            self.props = {
                name: String,
                value: [ String, Object, Array, Boolean ],
                default_file_url: String,
                label: String,
                status: {
                    validator: function(v) {
                        return [ "ok", "error", "warning" ].includes(v);
                    }
                },
                message: String,
                type: {
                    type: String,
                    default: "text"
                },
                icon_left: String,
                icon_right: String,
                placeholder: String,
                validator: {
                    type: [ Object, Function ]
                },
                validation: Object,
                options: Array
            };
        }
        data () {
            var self = this;
            return {
                input_value: self.value || "",
                input_file_url: null,
                input_file: null,
                dirty: null,
                validation$: {
                    status: null,
                    message: null,
                    value: null
                }
            };
        }
        filename () {
            var self = this;
            var name;
            if (ՐՏ_type(self.input_value) !== "String") {
                name = self.input_value[0].name;
                return name;
            }
            return self.input_value || "";
        }
        file_url () {
            var self = this;
            var inp;
            inp = self.input_value;
            if (inp && inp === ":delete" || ՐՏ_type(inp) !== "String") {
                inp = "";
            }
            return self.input_file_url || inp || self.default_file_url || "";
        }
        select_file () {
            var self = this;
            self.$refs.file.click();
        }
        clear_file () {
            var self = this;
            self.input_file = "";
            self.input_value = ":delete";
        }
        change_input_file () {
            var self = this;
            var files;
            if ((files = self.$refs.file.files) && files.length) {
                self.input_value = files;
                self.input_file = files;
            } else {
                self.input_value = self.input_file;
            }
        }
        input_value (n, o) {
            var self = this;
            var read_url;
            self.dirty = true;
            if (self.type.startsWith("file")) {
                read_url = self.type === "file.img";
                self.set_file_input(read_url);
            }
        }
        set_file_input (read_url) {
            var ՐՏ_12;
            var self = this;
            if (read_url && self.input_value && ՐՏ_type(self.input_value) !== "String") {
                
                (ՐՏ_12 = function(url) {
                    self.input_file_url = url;
                }, ՐՏ_12 = read_img_url(self.input_value).then(ՐՏ_12), ՐՏ_12)
            } else {
                self.input_file_url = "";
            }
        }
        validation (n, o) {
            var self = this;
            Object.assign(self.validation$, n);
        }
        input_status () {
            var self = this;
            var status;
            status = self.status || self.validation$.status;
            return status ? MAP_STATUS[status] : null;
        }
        help_message () {
            var self = this;
            return self.message || self.validation$.message;
        }
        check_radio () {
            var self = this;
            var fields, labels, _labels;
            if (self.input_type === "checkbox") {
                fields = self.options || [ {
                    name: self.name,
                    label: self.input_label,
                    value: self.value
                } ];
                labels = function(it) {
                    return [ it ];
                };
            } else if (self.input_type === "radio") {
                fields = [ self.name ];
                _labels = self.options || [ {
                    name: self.name,
                    label: self.input_label,
                    value: self.value
                } ];
                labels = function() {
                    return _labels;
                };
            } else {
                return null;
            }
            return {
                fields: fields,
                labels: labels
            };
        }
        validation_status () {
            var self = this;
            return self.validation$.status;
        }
        has_error () {
            var self = this;
            self.validate();
            return self.validation_status === "error";
        }
        input_label () {
            var self = this;
            var ret;
            ret = !(ՐՏ_in(self.label, [ void 0, null ])) ? self.label : self.name;
            ret = ret.replace(/_/g, " ");
            return ret;
        }
        input_type () {
            var self = this;
            return self.type;
        }
        value (n, o) {
            var self = this;
            self.input_value = n;
        }
        option_label (opt) {
            var self = this;
            return opt.label !== void 0 ? opt.label : opt.value !== void 0 ? opt.value : opt.name !== void 0 ? opt.name : opt;
        }
        on_edit (e) {
            var self = this;
            self.reset_validation();
            self.$emit(e, self.input_value);
            self.validate(e);
        }
        reset_validation () {
            var self = this;
            Object.assign(self.validation$, {
                value: null,
                message: null,
                status: null
            });
        }
        validate (e) {
            var self = this;
            var validation, validator, _validator, status, out_value, message;
            validation = self.validation$;
            if (self.dirty === false) {
                return [validation.value, validation.message];
            }
            if (validator = self.validator) {
                if (e) {
                    _validator = validator["on_" + e];
                } else {
                    _validator = validator["on_submit"] || validator.call && validator;
                }
                if (ՐՏ_type(_validator) === "String") {
                    validator = validator[_validator];
                    if (!validator) {
                        throw new KeyError(`there is not ${_validator}-validator`);
                    }
                } else {
                    validator = _validator;
                }
            }
            if (!validator) {
                return;
            }
            [out_value, message, status] = validator(self.input_value, {
                on: e,
                name: self.name,
                label: self.input_label
            }) || [ null, null, null ];
            if (!status) {
                status = out_value !== null ? "ok" : message !== null ? "error" : null;
            }
            validation.value = out_value;
            validation.message = message;
            validation.status = status;
            self.dirty = false;
            return [out_value, message];
        }
    }, ՐՏ_11 = vc.component()((function(){
        Object.defineProperties(ՐՏ_11.prototype, {
            filename: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_11.prototype.filename)
            },
            file_url: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_11.prototype.file_url)
            },
            input_value: {
                enumerable: false, 
                writable: true, 
                value: vc.watch(ՐՏ_11.prototype.input_value)
            },
            validation: {
                enumerable: false, 
                writable: true, 
                value: vc.watch(ՐՏ_11.prototype.validation)
            },
            input_status: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_11.prototype.input_status)
            },
            help_message: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_11.prototype.help_message)
            },
            check_radio: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_11.prototype.check_radio)
            },
            validation_status: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_11.prototype.validation_status)
            },
            has_error: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_11.prototype.has_error)
            },
            input_label: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_11.prototype.input_label)
            },
            input_type: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_11.prototype.input_type)
            },
            value: {
                enumerable: false, 
                writable: true, 
                value: vc.watch(ՐՏ_11.prototype.value)
            }
        });
        return ՐՏ_11;
    })()), ՐՏ_11);
    
    var XForm = (ՐՏ_13 = class XForm extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.template = templ_form;
            function default_actions() {
                return [ {
                    name: "OK",
                    label: "OK",
                    if_valid: true
                } ];
            }
            self.props = {
                fields: Array,
                record: Object,
                actions: {
                    type: Array,
                    default: default_actions
                },
                validator: {
                    type: [ Object, Function ],
                    default: null
                },
                validation: Object
            };
        }
        data () {
            var self = this;
            return {
                _errors: null
            };
        }
        fields_c () {
            var ՐՏ_14;
            var self = this;
            var validation, rec;
            validation = self.validation;
            if (!(validation || self.record)) {
                return self.fields;
            }
            rec = self.record || {};
            validation = validation || {};
            
            var mapped = (ՐՏ_14 = function mapped(it) {
                var ՐՏ_15, ՐՏ_16;
                var clone, v;
                clone = Object.assign({}, it);
                if (v = validation[it.name]) {
                    clone.validation = v;
                }
                if (((ՐՏ_15 = (v = rec[it.name])) !== (ՐՏ_16 = void 0) && (typeof ՐՏ_15 !== "object" || !ՐՏ_eq(ՐՏ_15, ՐՏ_16)))) {
                    clone.value = v;
                }
                return clone;
            }, ՐՏ_14 = self.fields.map(ՐՏ_14), ՐՏ_14);
            return mapped;
        }
        validate () {
            var ՐՏitr21, ՐՏidx21;
            var self = this;
            var errors, values, f, xfld;
            errors = [];
            values = {};
            ՐՏitr21 = ՐՏ_Iterable(self.fields);
            for (ՐՏidx21 = 0; ՐՏidx21 < ՐՏitr21.length; ՐՏidx21++) {
                f = ՐՏitr21[ՐՏidx21];
                xfld = self.$refs[f.name][0];
                if (xfld.has_error) {
                    errors.push({
                        field: f,
                        value: xfld.input_value,
                        message: xfld.help_message
                    });
                } else {
                    values[f.name] = xfld.input_value;
                }
            }
            if (!errors.length) {
                errors = null;
                if (self.validator) {
                    [values, errors] = self.validator(values);
                }
            }
            self._errors = errors;
            if (!errors) {
                return values;
            }
        }
        errors () {
            var self = this;
            self.validate();
            return self._errors;
        }
        action (act) {
            var self = this;
            var values;
            ՐՏ_print(act.name);
            values = null;
            if (act.if_valid) {
                values = self.validate();
                if (!values) {
                    return;
                }
            }
            self.$emit("action", act, values);
            self.$emit("action:" + act.name, act, values);
        }
    }, ՐՏ_13 = vc.component()((function(){
        Object.defineProperties(ՐՏ_13.prototype, {
            fields_c: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_13.prototype.fields_c)
            },
            errors: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_13.prototype.errors)
            }
        });
        return ՐՏ_13;
    })()), ՐՏ_13);
    function make() {
        return [ new XField(), new XForm() ];
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.form"];
    ՐՏ_mod.export("templ_field", function(){return templ_field;}, function(ՐՏ_v){if (typeof templ_field !== "undefined") {templ_field = ՐՏ_v;};});
    ՐՏ_mod.export("templ_form", function(){return templ_form;}, function(ՐՏ_v){if (typeof templ_form !== "undefined") {templ_form = ՐՏ_v;};});
    ՐՏ_mod.export("MAP_STATUS", function(){return MAP_STATUS;}, function(ՐՏ_v){if (typeof MAP_STATUS !== "undefined") {MAP_STATUS = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("XField", function(){return XField;}, function(ՐՏ_v){if (typeof XField !== "undefined") {XField = ՐՏ_v;};});
    ՐՏ_mod.export("XForm", function(){return XForm;}, function(ՐՏ_v){if (typeof XForm !== "undefined") {XForm = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("RS_vue", function(){return RS_vue;}, function(ՐՏ_v){if (typeof RS_vue !== "undefined") {RS_vue = ՐՏ_v;};});
    ՐՏ_mod.export("read_img_url", function(){return read_img_url;}, function(ՐՏ_v){if (typeof read_img_url !== "undefined") {read_img_url = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.vscroll"].body = function(){
    var __name__ = "components.vscroll";

    var templ, vc;
    templ = "\n<div  v-vscroll = \"{listener:'scroll_handler', container: items_container && 'items_container', cmd: 'cmd'}\" style = 'height:200px;overflow-y:auto'>\n    <div>\n        <slot  v-bind = \"{items, off}\"></slot>\n    </div>\n</div>\n";
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    vc = new V_collector();
    
    var VScroll = (ՐՏ_17 = class VScroll extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.template = templ;
            self.props = {
                get_items: Function,
                offset: Number,
                count: Number,
                render_count: Number,
                items_container: Function,
                init_scrollto: Number,
                distance: {
                    type: Number,
                    default: 20
                }
            };
        }
        data () {
            var self = this;
            return {
                top: 0,
                bot: self.render_count,
                off: self.offset
            };
            self.loading = null;
        }
        mounted () {
            var self = this;
            if (self.init_scrollto) {
                self.$nextTick(function() {
                    self.scrollto(self.init_scrollto);
                });
            }
        }
        items () {
            var self = this;
            var ret;
            ret = self.get_items(self.off, self.render_count + self.distance);
            return ret.slice(0, self.bot);
        }
        offset (n, prev) {
            var ՐՏ_18, ՐՏ_19;
            var self = this;
            if (ՐՏ_in(self.loading, [ "up", "dn" ])) {
                self.move_view(n - prev);
            } else {
                self.off = n;
                if (self.loading && ((ՐՏ_18 = (n = self.loading.scrollto)) !== (ՐՏ_19 = void 0) && (typeof ՐՏ_18 !== "object" || !ՐՏ_eq(ՐՏ_18, ՐՏ_19)))) {
                    self.loading = null;
                    self.$nextTick(function() {
                        self.cmd("scrollto", n - self.off);
                    });
                }
            }
        }
        scrollto (n) {
            var self = this;
            var dist, bot_margin, off;
            if (self.off <= n && n < self.off + self.render_count) {
                self.cmd("scrollto", n);
            } else {
                dist = self.distance;
                bot_margin = self.count - self.render_count;
                off = n - dist >= 0 ? n - dist : 0;
                off = off > bot_margin ? bot_margin : off;
                self.loading = {
                    scrollto: n
                };
                self.$emit("load_more", "offset", off);
            }
        }
        move_view (n) {
            var self = this;
            var cb, off_max, nxt;
            cb = self.cmd;
            if (n === 0) {
                return;
            }
            if (n > 0) {
                off_max = self.count - (self.off + self.render_count);
                n = off_max + n <= self.count ? n : off_max;
                self.bot += n;
                nxt = function() {
                    cb("snap");
                    self.off += n;
                    self.bot -= n;
                    self.$nextTick(function() {
                        cb();
                        self.loading = null;
                    });
                };
            } else {
                cb("snap");
                n = -n;
                n = self.off >= n ? n : self.off;
                self.off -= n;
                self.bot += n;
                nxt = function() {
                    cb();
                    self.bot -= n;
                    self.loading = null;
                };
            }
            self.$nextTick(nxt);
        }
        scroll_handler (top_bot) {
            var ՐՏ_20, ՐՏ_21;
            var self = this;
            var dist, dir;
            dist = self.distance;
            if (self.off > 0 && top_bot[0] < self.distance) {
                dir = "up";
                dist = -dist;
            } else if (self.off + self.render_count < self.count && (((ՐՏ_20 = top_bot[1]) === (ՐՏ_21 = -1) || typeof ՐՏ_20 === "object" && ՐՏ_eq(ՐՏ_20, ՐՏ_21)) || top_bot[1] > self.render_count - self.distance)) {
                dir = "dn";
            }
            if (dir && self.loading !== dir) {
                self.loading = dir;
                self.$emit("load_more", dir, dist);
            }
        }
    }, ՐՏ_17 = vc.component()((function(){
        Object.defineProperties(ՐՏ_17.prototype, {
            items: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_17.prototype.items)
            },
            offset: {
                enumerable: false, 
                writable: true, 
                value: vc.watch(ՐՏ_17.prototype.offset)
            }
        });
        return ՐՏ_17;
    })()), ՐՏ_17);
    function make() {
        return new VScroll();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.vscroll"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("VScroll", function(){return VScroll;}, function(ՐՏ_v){if (typeof VScroll !== "undefined") {VScroll = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components.flash"].body = function(){
    var __name__ = "components.flash";

    var templ, notify, vc, fcmp;
    templ = "\n<div  class = 'flash-container'>\n<transition  name = 'trn' @before-leave = 'leave' @after-leave = \"$emit('kill')\">\n    <div  ref = 'el' v-if = 'is_active' class = \"notification flash-tr\" :class = \"'is-' + status\">\n        <button  class = 'delete' @click = \"$emit('close')\"/>\n        <div  v-if = 'message' v-html = 'message'></div>\n        <slot  v-else></slot>\n    </div>\n</transition></div>\n";
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    notify = Vue.extend({
        name: "XNotify",
        template: templ,
        props: {
            message: String,
            status: String,
            basket: Object
        },
        data: function() {
            return {
                is_active: false
            };
        },
        mounted: function mounted() {
            var self = this;
            self.is_active = true;
        },
        methods: {
            leave: function leave(el, done) {
                var self = this;
                var basket_el, pos, top, right;
                if (self.basket) {
                    basket_el = self.basket.$el || self.basket;
                    pos = basket_el.getBoundingClientRect();
                    top = pos.height / 2;
                    right = window.innerWidth - pos.right + pos.width / 2 - self.$refs.el.clientWidth / 2;
                    requestAnimationFrame(function() {
                        el.style.transformOrigin = "top";
                        el.style.top = top + "px";
                        el.style.right = right + "px";
                        el.style.transform = "scale(0.1)";
                    });
                } else {
                    el.style.right = "-300px";
                }
            }
        }
    });
    vc = new V_collector();
    
    var XFlash = (ՐՏ_22 = class XFlash extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.props = {
                component: [ Object, String ],
                message: String,
                status: {
                    type: String,
                    default: "info"
                },
                duration: {
                    type: Number,
                    default: 500
                },
                props: Object,
                basket: Object
            };
        }
        render (h) {
            var self = this;
            var notify_props, cmp;
            notify_props = {
                message: self.message,
                status: self.status,
                basket: self.basket
            };
            if (self.component) {
                cmp = h(self.component, {
                    props: self.props
                });
            }
            return h(notify, {
                props: notify_props,
                on: {
                    "close": function() {
                        self.kill();
                    },
                    "kill": function() {
                        self.kill();
                    }
                }
            }, [ cmp ]);
        }
        kill (dur) {
            var self = this;
            var prnt;
            if (self._isDestroyed) {
                return;
            }
            if (self.kill_tm) {
                clearTimeout(self.kill_tm);
                self.kill_tm = null;
            }
            if (dur === void 0) {
                if (prnt = self.$el.parentNode) {
                    prnt.removeChild(self.$el);
                }
                self.$destroy();
                return;
            }
            self.kill_tm = setTimeout(function() {
                self.$children[0].is_active = false;
            }, dur);
        }
        mounted () {
            var self = this;
            self.kill(self.duration);
        }
    }, ՐՏ_22 = vc.component()(ՐՏ_22), ՐՏ_22);
    function make() {
        return new XFlash();
    }
    fcmp = Vue.extend(new XFlash());
    function open(opt, parent) {
        var vm, el;
        parent = parent || this;
        vm = new fcmp({
            parent: parent,
            propsData: opt
        });
        el = document.body.appendChild(document.createElement("div"));
        vm.$mount(el);
        return vm;
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components.flash"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("notify", function(){return notify;}, function(ՐՏ_v){if (typeof notify !== "undefined") {notify = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("fcmp", function(){return fcmp;}, function(ՐՏ_v){if (typeof fcmp !== "undefined") {fcmp = ՐՏ_v;};});
    ՐՏ_mod.export("XFlash", function(){return XFlash;}, function(ՐՏ_v){if (typeof XFlash !== "undefined") {XFlash = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("open", function(){return open;}, function(ՐՏ_v){if (typeof open !== "undefined") {open = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:components"].body = function(){
    var __name__ = "components";

    ՐՏ_modules["ՐՏ:components"].export("navbar", function(){return ՐՏ_modules["components.navbar"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:components"].export("progress_bar", function(){return ՐՏ_modules["components.progress_bar"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:components"].export("modal", function(){return ՐՏ_modules["components.modal"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:components"].export("form", function(){return ՐՏ_modules["components.form"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:components"].export("vscroll", function(){return ՐՏ_modules["components.vscroll"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:components"].export("flash", function(){return ՐՏ_modules["components.flash"];}, function(){throw new Error("use Object.defineProperty!");});

    var ՐՏ_mod = ՐՏ_modules["ՐՏ:components"];
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:app_components.top_menu"].body = function(){
    var __name__ = "app_components.top_menu";

    var templ, vc;
    templ = "\n<XNavbar  class = 'is-dark' :fixed_top = 'true' :menus = \"menus\">\n    <template  v-slot:brand><XNavbarItem><img  :src = \"$x.URL('static/logo.png')\"/></XNavbarItem></template>\n    <template  v-slot:post = \"{side}\">\n        <template  v-if = 'user'>\n            <XNavbarItem  href = \"to:/post\">Posts</XNavbarItem>\n            <XNavbarItem  href = 'to:/post/new'>New Post</XNavbarItem>\n        </template>\n    </template>\n    <template  v-slot:user = \"{side}\">\n        <template  v-if = 'user'>\n            <XNavbarItem  :dropdown = \"true\" :side = \"side\">\n                <template  v-slot:label>\n                    <span><i  class = 'fa fa-user'></i></span>\n                    <span  class = \"is-capitalized px-1\">{{user.username}}</span>\n                </template>\n                <template  v-slot:default>\n                    <XNavbarItem  :href = \"'to:/post/' + user.id\">My Posts</XNavbarItem>\n                    <XNavbarItem  href = 'to:/profile'>Profile</XNavbarItem>\n                    <XNavbarItem  @click = \"$emit('change_password')\">Change Password</XNavbarItem>\n                </template>\n            </XNavbarItem>\n            <XNavbarItem  @click = '$emit(\"logout\")'>\n                <span><i  class = 'fa fa-sign-out-alt'></i></span>\n            </XNavbarItem>\n        </template>\n        <template  v-else>\n            <XNavbarItem  @click = '$emit(\"login\")'>\n                <span  title = 'login'><i  class = 'fa fa-sign-in-alt'></i></span>\n            </XNavbarItem>\n            <XNavbarItem  href = 'to:/register'>\n                <span  title = 'register'><i  class = 'fa fa-user-plus'></i></span>\n            </XNavbarItem>\n        </template>\n    </template>\n    <template  v-slot:flash = \"{side}\">\n        <XNavbarItem  ref = 'flash' :dropdown = 'true' :side = \"side\">\n            <template  v-slot:label>\n                <i  class = 'fa fa-bullhorn fa-flip-horizontal'></i>\n            </template>\n            <XNavbarItem  class = 'px-3'>\n                <div  class = 'notification py-1' :class = \"'is-'+flash_status\">\n                    <template  v-if = 'flash.component'>\n                        <component  :is = 'flash.component' v-bind = 'flash.cargs'></component>\n                    </template>\n                    <template  v-else>\n                        {{flash.msg}}\n                    </template>\n                </div>\n            </XNavbarItem>\n        </XNavbarItem>\n    </template>\n    <template  v-slot:progress>\n        <slot  name = 'progress'></slot>\n    </template>\n</XNavbar>\n";
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    vc = new V_collector();
    
    var TopMenu = (ՐՏ_23 = class TopMenu extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.template = templ;
            self.map_store = {
                user: "/auth.user",
                flash: "flash"
            };
            self.props = {
                menus_left: Array
            };
        }
        data () {
            var self = this;
            var ret;
            ret = {
                menus: {}
            };
            if (self.menus_left) {
                ret.menus.left = self.menus_left;
            } else {
                ret.menus.left = [ {
                    label: "Home",
                    href: "to:/index"
                }, {
                    label: "About",
                    href: "to:/about"
                }, {
                    slot: "post"
                } ];
            }
            ret.menus.right = [ {
                slot: "flash"
            }, {
                slot: "user"
            } ];
            return ret;
        }
        flash_status () {
            var self = this;
            var map_status;
            map_status = {
                ok: "success",
                err: "danger",
                error: "danger",
                warn: "warning"
            };
            return map_status[self.flash.status];
        }
        flash_watcher () {
            var self = this;
            var opt;
            opt = {
                duration: 2e3,
                message: self.flash.msg,
                status: self.flash_status,
                component: self.flash.component,
                props: self.flash.cargs,
                basket: self.$refs.flash
            };
            self.$x.flash(opt, self);
        }
    }, ՐՏ_23 = vc.component()((function(){
        Object.defineProperties(ՐՏ_23.prototype, {
            flash_status: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_23.prototype.flash_status)
            },
            flash_watcher: {
                enumerable: false, 
                writable: true, 
                value: vc.watch("flash.trigger")(ՐՏ_23.prototype.flash_watcher)
            }
        });
        return ՐՏ_23;
    })()), ՐՏ_23);
    function make() {
        return new TopMenu();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:app_components.top_menu"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("TopMenu", function(){return TopMenu;}, function(ՐՏ_v){if (typeof TopMenu !== "undefined") {TopMenu = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:app_components.login"].body = function(){
    var __name__ = "app_components.login";

    var templ_login, vc;
    templ_login = "\n<XModal  :can_cancel = 'false' max_width = '300px'>\n    <template  v-slot:title>\n        Login\n    </template>\n    <template  v-slot:body>\n        <form  ref = 'frm' method = 'post' autocomplete = \"off\" @submit.prevent.stop>\n            <div  v-if = '!username' class = 'field'>\n                <p  class = 'control has-icons-left'>\n                    <input  name = 'username' class = 'input' placeholder = 'name'/>\n                    <span  class = \"icon is-small is-left\">\n                        <i  class = \"fas fa-user\"></i>\n                    </span>\n                </p>\n            </div>\n            <div  class = 'field'>\n                <p  class = 'control has-icons-left'>\n                    <input  name = 'password' class = 'input' type = 'password' placeholder = 'password' @keydown.enter = \"ok\"/>\n                    <span  class = \"icon is-small is-left\">\n                        <i  class = \"fas fa-lock\"></i>\n                    </span>\n                </p>\n            </div>\n        </form>\n    </template>\n    <template  v-slot:footer>\n        <div  class = 'container buttons is-right'>\n            <button  class = 'button is-primary' :class = \"{'is-loading': in_process}\" @click.stop.prevent = 'ok'>OK</button>\n        </div>\n    </template>\n</XModal>\n";
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;
    var asyncer = ՐՏ_modules["asset.utils"].asyncer;
    vc = new V_collector();
    
    var XLogin = (ՐՏ_24 = class XLogin extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.template = templ_login;
            self.map_store = {
                "err": "/auth.http_error",
                "login": "/auth.login*",
                "logged": "/auth.logged",
                "flash": "flash~"
            };
            self.props = {
                username: String
            };
        }
        data () {
            var self = this;
            return {
                in_process: false
            };
        }
        ok () {
            var self = this;
            setTimeout(function() {
                self.async_ok();
            }, 0);
        }
        *async_ok () {
            var self = this;
            var frm;
            frm = new FormData(self.$refs.frm);
            if (self.username) {
                frm.append("username", self.username);
            }
            self.in_process = true;
            yield self.login(frm);
            self.in_process = false;
            if (self.logged) {
                self.$emit("close");
            } else {
                self.flash(self.err.data.message, "error");
            }
        }
    }, ՐՏ_24 = vc.component()((function(){
        Object.defineProperties(ՐՏ_24.prototype, {
            async_ok: {
                enumerable: false, 
                writable: true, 
                value: asyncer(ՐՏ_24.prototype.async_ok)
            }
        });
        return ՐՏ_24;
    })()), ՐՏ_24);
    function make() {
        return new XLogin();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:app_components.login"];
    ՐՏ_mod.export("templ_login", function(){return templ_login;}, function(ՐՏ_v){if (typeof templ_login !== "undefined") {templ_login = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("XLogin", function(){return XLogin;}, function(ՐՏ_v){if (typeof XLogin !== "undefined") {XLogin = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("RS_vue", function(){return RS_vue;}, function(ՐՏ_v){if (typeof RS_vue !== "undefined") {RS_vue = ՐՏ_v;};});
    ՐՏ_mod.export("asyncer", function(){return asyncer;}, function(ՐՏ_v){if (typeof asyncer !== "undefined") {asyncer = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:models"].body = function(){
    var __name__ = "models";

    var default_author_icon, _profile, register, profile, post, post_fields, auth_fields;
    var email = ՐՏ_modules["asset.validators"].email;var password = ՐՏ_modules["asset.validators"].password;var string = ՐՏ_modules["asset.validators"].string;var number = ՐՏ_modules["asset.validators"].number;
    default_author_icon = "default.jpg";
    _profile = [ {
        name: "username",
        label: "user name",
        icon_left: "user",
        validator: {
            on_change: string([ 2, 15 ]),
            on_submit: "on_change"
        }
    }, {
        name: "email",
        icon_left: "envelope",
        validator: email()
    }, {
        name: "last_name",
        validator: string()
    }, {
        name: "first_name",
        validator: string()
    }, {
        name: "password",
        icon_left: "key",
        type: "password",
        validator: password()
    }, {
        name: "image",
        label: "avatar",
        type: "file.img",
        default_file_url: default_author_icon
    } ];
    register = _profile.filter(function(it) {
        return it.name !== "image";
    });
    profile = _profile.filter(function(it) {
        return it.name !== "password";
    });
    post = [ {
        name: "title",
        validator: {
            on_change: string([ 2, 64 ]),
            on_submit: "on_change"
        }
    }, {
        name: "content",
        type: "textarea",
        validator: {
            on_change: string([ 3, 1024 * 5 ]),
            on_submit: "on_change"
        }
    } ];
    function make_dict(model) {
        var f;
        return (function() {
            var ՐՏidx22, ՐՏitr22 = ՐՏ_Iterable(model), ՐՏres = {}, f;
            for (ՐՏidx22 = 0; ՐՏidx22 < ՐՏitr22.length; ՐՏidx22++) {
                f = ՐՏitr22[ՐՏidx22];
                ՐՏres[f.name] = f;
            }
            return ՐՏres;
        })();
    }
    post_fields = make_dict(post);
    auth_fields = make_dict(register);
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:models"];
    ՐՏ_mod.export("default_author_icon", function(){return default_author_icon;}, function(ՐՏ_v){if (typeof default_author_icon !== "undefined") {default_author_icon = ՐՏ_v;};});
    ՐՏ_mod.export("_profile", function(){return _profile;}, function(ՐՏ_v){if (typeof _profile !== "undefined") {_profile = ՐՏ_v;};});
    ՐՏ_mod.export("register", function(){return register;}, function(ՐՏ_v){if (typeof register !== "undefined") {register = ՐՏ_v;};});
    ՐՏ_mod.export("profile", function(){return profile;}, function(ՐՏ_v){if (typeof profile !== "undefined") {profile = ՐՏ_v;};});
    ՐՏ_mod.export("post", function(){return post;}, function(ՐՏ_v){if (typeof post !== "undefined") {post = ՐՏ_v;};});
    ՐՏ_mod.export("post_fields", function(){return post_fields;}, function(ՐՏ_v){if (typeof post_fields !== "undefined") {post_fields = ՐՏ_v;};});
    ՐՏ_mod.export("auth_fields", function(){return auth_fields;}, function(ՐՏ_v){if (typeof auth_fields !== "undefined") {auth_fields = ՐՏ_v;};});
    ՐՏ_mod.export("make_dict", function(){return make_dict;}, function(ՐՏ_v){if (typeof make_dict !== "undefined") {make_dict = ՐՏ_v;};});
    ՐՏ_mod.export("number", function(){return number;}, function(ՐՏ_v){if (typeof number !== "undefined") {number = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:app_components.post"].body = function(){
    var __name__ = "app_components.post";

    var templ, vc;
    templ = '\n<article  class = "media">\n    <figure  class = "media-left">\n        <p  class = "image is-64x64">\n            <img  :src = "author_icon"/>\n        </p>\n    </figure>\n    <div  class = "media-content">\n        <template  v-if = "mode == \'edit\'">\n            <XField  ref = \'title\' :value = \'title\' v-bind = \'fields.title\' @change = \'post_edit.title = $event\'></XField>\n            <XField  ref = \'content\' :value = \'content\' v-bind = \'fields.content\' @change = \'post_edit.content = $event\'></XField>\n            <nav  class = "level">\n                <div  class = "level-left">\n                    <div  class = "level-item">\n                        <a  class = "button is-primary" :class = "state" @click = \'save_post\'>\n                            OK\n                        </a>\n                    </div>\n                    <div  class = "level-item">\n                        <a  class = "button" :class = "state" @click = "cancel">Cancel</a>\n                    </div>\n                </div>\n                <div  v-if = \'!is_new_post\' class = "level-right">\n                    <div  class = "level-item">\n                        <a  class = "button is-danger" :class = "state" @click = \'del_post\'>Delete</a>\n                    </div>\n                </div>\n            </nav>\n        </template>\n        <template  v-else>\n            <div  class = "content">\n                <p  class = \'title\'>{{title}}</p>\n                <p>\n                    <span>\n                        <strong  v-text = \'author\'/>\n                        <small  v-text = \'date_posted\'/>\n                    </span>\n                    <span  v-if = \'user && user.id == author_id\' class = "is-pulled-right">\n                        <button  class = "button" @click = "mode= \'edit\'">\n                            <span  class = "icon"><i  class = "fas fa-edit"></i></span>\n                        </button>\n                    </span>\n                </p>\n                <hr  class = \'my-1\'/>\n                <p  class = \'ml-4\' v-text = \'content\'/>\n            </div>\n        </template>\n    </div>\n</article>\n';
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;
    var asyncer = ՐՏ_modules["asset.utils"].asyncer;
    var post_fields = ՐՏ_modules["models"].post_fields;
    vc = new V_collector();
    
    var XPost = (ՐՏ_25 = class XPost extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.template = templ;
            self.props = {
                id: [ Number, String ],
                content: String,
                author: String,
                author_id: [ Number, String ],
                author_icon: String,
                title: String,
                date_posted: String
            };
            self.map_store = {
                save_post: "/post.post_save*",
                del_post: "/post.post_del*",
                post_get: "/post.post_get*",
                user: "/auth.user"
            };
        }
        data () {
            var self = this;
            return {
                mode: self.id !== "#" ? "show" : "edit",
                state: null,
                post_edit: {
                    content: self.content,
                    title: self.title
                },
                errors: null
            };
        }
        mode (n) {
            var self = this;
            if (n === "edit") {
                self.post_edit.content = self.content;
                self.post_edit.title = self.title;
            }
        }
        is_new_post () {
            var self = this;
            return self.id === "#";
        }
        fields () {
            var ՐՏitr23, ՐՏidx23;
            var self = this;
            var fields, k;
            fields = {...post_fields};
            ՐՏitr23 = ՐՏ_Iterable(self.errors || []);
            for (ՐՏidx23 = 0; ՐՏidx23 < ՐՏitr23.length; ՐՏidx23++) {
                k = ՐՏitr23[ՐՏidx23];
                fields[k].validation = self.errors[k];
            }
            return fields;
        }
        cancel () {
            var self = this;
            if (self.is_new_post) {
                self.$router.go(-1);
            } else {
                self.mode = "show";
            }
        }
        save_post (act) {
            var ՐՏitr24, ՐՏidx24, ՐՏ_26;
            var self = this;
            var it;
            ՐՏitr24 = ՐՏ_Iterable(self.fields);
            for (ՐՏidx24 = 0; ՐՏidx24 < ՐՏitr24.length; ՐՏidx24++) {
                it = ՐՏitr24[ՐՏidx24];
                if (self.$refs[it].has_error) {
                    return;
                }
            }
            
            
            (ՐՏ_26 = function*() {
                var err;
                self.state = "is-loading";
                try {
                    yield act(self.id, self.post_edit);
                    self.errors = null;
                    self.$emit("saved");
                } catch (ՐՏ_Exception) {
                    var err = ՐՏ_Exception;
                    if (err.errors) {
                        self.errors = err.errors;
                        err = null;
                    }
                }
                self.state = null;
                if (!self.is_new_post) {
                    self.mode = "show";
                }
                if (err) {
                    throw err;
                }
            }, ՐՏ_26 = self.$x.with_progress(asyncer(ՐՏ_26)), ՐՏ_26)
        }
        *del_post (act) {
            var ՐՏ_27;
            var self = this;
            var ret;
            ret = yield self.$x.modal("confirm", {
                message: "Are you sure?"
            });
            if (ret === "ok") {
                
                
                (ՐՏ_27 = function*() {
                    yield act(self.id);
                    yield self.post_get();
                    self.mode = "show";
                }, ՐՏ_27 = self.$x.with_progress(asyncer(ՐՏ_27)), ՐՏ_27)
            }
        }
    }, ՐՏ_25 = vc.component()((function(){
        Object.defineProperties(ՐՏ_25.prototype, {
            mode: {
                enumerable: false, 
                writable: true, 
                value: vc.watch(ՐՏ_25.prototype.mode)
            },
            is_new_post: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_25.prototype.is_new_post)
            },
            fields: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_25.prototype.fields)
            },
            del_post: {
                enumerable: false, 
                writable: true, 
                value: asyncer(ՐՏ_25.prototype.del_post)
            }
        });
        return ՐՏ_25;
    })()), ՐՏ_25);
    function make() {
        return new XPost();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:app_components.post"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("XPost", function(){return XPost;}, function(ՐՏ_v){if (typeof XPost !== "undefined") {XPost = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("RS_vue", function(){return RS_vue;}, function(ՐՏ_v){if (typeof RS_vue !== "undefined") {RS_vue = ՐՏ_v;};});
    ՐՏ_mod.export("asyncer", function(){return asyncer;}, function(ՐՏ_v){if (typeof asyncer !== "undefined") {asyncer = ՐՏ_v;};});
    ՐՏ_mod.export("post_fields", function(){return post_fields;}, function(ՐՏ_v){if (typeof post_fields !== "undefined") {post_fields = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:app_components.change_password"].body = function(){
    var __name__ = "app_components.change_password";

    var templ, vc;
    templ = "\n<XModal  :can_cancel = 'true' max_width = '300px' @close = \"$emit('close')\">\n    <template  v-slot:title>\n        Change Password\n    </template>\n    <template  v-slot:body>\n        <XForm  :fields = 'fields' @action = 'on_action' :validation = 'validation'></XForm>\n    </template>\n</XModal>\n";
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;
    var asyncer = ՐՏ_modules["asset.utils"].asyncer;
    var string = ՐՏ_modules["asset.validators"].string;
    var auth_fields = ՐՏ_modules["models"].auth_fields;
    vc = new V_collector();
    
    var XChangePassword = (ՐՏ_28 = class XChangePassword extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.template = templ;
            self.map_store = {
                "err": "/auth.http_error",
                "flash": "flash~",
                "change_password": "/auth.change_password*"
            };
        }
        data () {
            var self = this;
            var fields;
            fields = [ {
                name: "old_password",
                label: "Current Password",
                type: "password",
                validator: string([ 8 ])
            }, {
                name: "new_password",
                label: "New Password",
                type: "password",
                validator: auth_fields.password.validator
            } ];
            return {
                fields: fields,
                in_process: false,
                validation: null
            };
        }
        *on_action (act_obj, form_values) {
            var self = this;
            var err, validation, f;
            if (self.in_process) {
                return;
            }
            self.in_process = true;
            err = null;
            try {
                yield self.change_password(form_values);
                self.validation = null;
                self.flash("Done!", "ok");
                self.$modal.close("ui");
            } catch (ՐՏ_Exception) {
                var ՐՏitr25, ՐՏidx25;
                var err = ՐՏ_Exception;
                if (err.errors) {
                    validation = {};
                    ՐՏitr25 = ՐՏ_Iterable(err.errors);
                    for (ՐՏidx25 = 0; ՐՏidx25 < ՐՏitr25.length; ՐՏidx25++) {
                        f = ՐՏitr25[ՐՏidx25];
                        self.validation = err.errors;
                    }
                    err = null;
                }
            }
            self.in_process = false;
            if (err) {
                throw err;
            }
        }
    }, ՐՏ_28 = vc.component()((function(){
        Object.defineProperties(ՐՏ_28.prototype, {
            on_action: {
                enumerable: false, 
                writable: true, 
                value: asyncer(ՐՏ_28.prototype.on_action)
            }
        });
        return ՐՏ_28;
    })()), ՐՏ_28);
    function make() {
        return new XChangePassword();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:app_components.change_password"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("XChangePassword", function(){return XChangePassword;}, function(ՐՏ_v){if (typeof XChangePassword !== "undefined") {XChangePassword = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("RS_vue", function(){return RS_vue;}, function(ՐՏ_v){if (typeof RS_vue !== "undefined") {RS_vue = ՐՏ_v;};});
    ՐՏ_mod.export("asyncer", function(){return asyncer;}, function(ՐՏ_v){if (typeof asyncer !== "undefined") {asyncer = ՐՏ_v;};});
    ՐՏ_mod.export("string", function(){return string;}, function(ՐՏ_v){if (typeof string !== "undefined") {string = ՐՏ_v;};});
    ՐՏ_mod.export("auth_fields", function(){return auth_fields;}, function(ՐՏ_v){if (typeof auth_fields !== "undefined") {auth_fields = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:app_components"].body = function(){
    var __name__ = "app_components";

    ՐՏ_modules["ՐՏ:app_components"].export("top_menu", function(){return ՐՏ_modules["app_components.top_menu"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:app_components"].export("login", function(){return ՐՏ_modules["app_components.login"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:app_components"].export("post", function(){return ՐՏ_modules["app_components.post"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:app_components"].export("change_password", function(){return ՐՏ_modules["app_components.change_password"];}, function(){throw new Error("use Object.defineProperty!");});

    var ՐՏ_mod = ՐՏ_modules["ՐՏ:app_components"];
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:xtools"].body = function(){
    var __name__ = "xtools";

    var components = ՐՏ_modules["components"];
    class XTools {
        constructor (app_base, app_static) {
            var self = this;
            self.url_static = app_static;
            self.url_base = app_base;
            self._busy_el;
            self._busy_tm_id;
            self.flash = components.flash.open;
            self.modal_open = components.modal.open;
            self.start_progress = null;
            self.end_progress = null;
            self.$root = null;
            self.busy_state = {
                el: null,
                tm: null
            };
            self.modal_state = {
                vm: null,
                ok_err: null
            };
            self.show_busy = self.show_busy.bind(self);
            self.modal_close = self.modal_close.bind(self);
            self.URL = self.URL.bind(self);
        }
        on_resize (f) {
            var self = this;
            var off;
            off = window.addEventListener("resize", f);
            return function() {
                window.removeEventListener("resize", f);
            };
        }
        modal_close () {
            var self = this;
            var args = [].slice.call(arguments, 0);
            var ok, vm;
            if (!self.modal_state.ok_err) {
                return;
            }
            ok = self.modal_state.ok_err.ok;
            vm = self.modal_state.vm;
            if (vm) {
                vm.$modal && vm.$modal.close();
            }
            Object.assign(self.modal_state, {
                vm: null,
                ok_err: null
            });
            ok(...args);
        }
        modal (component, args, opt) {
            var self = this;
            var resolver, ret, props, modal_opt, vm;
            if (self.modal_state.ok_err) {
                throw new Error("only one active modal is allowed");
            }
            resolver = function(ok, err) {
                self.modal_state.ok_err = {
                    ok: ok,
                    err: err
                };
            };
            ret = new Promise(resolver);
            if (ՐՏ_in(component, [ "confirm", "dialog" ])) {
                props = Object.assign({
                    type: component
                }, args);
                self.modal_open(self.$root, {
                    props: props
                }).then(self.modal_close);
            } else {
                if (ՐՏ_type(component) === "String") {
                    component = self.$root.constructor.component(component);
                }
                modal_opt = {
                    props: args,
                    component: component
                };
                if (opt) {
                    modal_opt.can_cancel = ՐՏ_in("cancelable", opt) ? opt.cancelable : true;
                }
                vm = self.modal_state.vm = self.modal_open(self.$root, modal_opt);
                vm.$on("close", self.modal_close);
                vm.$on("ok", self.modal_close);
            }
            ret.close = self.modal_close;
            return ret;
        }
        URL () {
            var self = this;
            var args = [].slice.call(arguments, 0);
            var path, tmp;
            path = args.join("");
            if (tmp = /^static(\/.*)/.exec(path)) {
                return self.url_static + tmp[1];
            }
            if (!/^(\w+?:\/)?\//.test(path)) {
                return self.url_base + "/" + path;
            }
            return path;
        }
        show_busy () {
            var self = this;
            var busy, el;
            busy = self.busy_state;
            el = document.createElement("div");
            el.className = "busy";
            document.body.appendChild(el);
            setTimeout(function() {
                el.className += " busy-active";
            }, 0);
            busy.el = el;
            busy.tm = null;
        }
        busy (on) {
            var self = this;
            var busy;
            busy = self.busy_state;
            if (on) {
                if (busy.el || busy.tm) {
                    return;
                }
                busy.tm = setTimeout(self.show_busy, 200);
            } else {
                if (busy.tm) {
                    clearTimeout(busy.tm);
                    busy.tm = null;
                } else if (busy.el) {
                    document.body.removeChild(busy.el);
                    busy.el = null;
                }
            }
        }
        _with (fun, start, end) {
            var self = this;
            var p;
            start();
            p = fun;
            if (!(p instanceof Promise)) {
                try {
                    p = p.call(null);
                } catch (ՐՏ_Exception) {
                    var err = ՐՏ_Exception;
                    end();
                    throw err;
                }
                if (!(p instanceof Promise)) {
                    end();
                    throw new Error("promise was expected");
                }
            }
            p.then(end, end);
            return p;
        }
        with_progress (fun) {
            var self = this;
            return self._with(fun, self.start_progress.bind(self), self.end_progress.bind(self));
        }
        with_busy (fun) {
            var self = this;
            return self._with(fun, function() {
                self.busy(true);
            }, function() {
                self.busy(false);
            });
        }
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:xtools"];
    ՐՏ_mod.export("XTools", function(){return XTools;}, function(ՐՏ_v){if (typeof XTools !== "undefined") {XTools = ՐՏ_v;};});
    ՐՏ_mod.export("components", function(){return components;}, function(ՐՏ_v){if (typeof components !== "undefined") {components = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:store.auth"].body = function(){
    var __name__ = "store.auth";

    var vc;
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var RS_store = ՐՏ_modules["asset.store33"].RS_store;
    var asyncer = ՐՏ_modules["asset.utils"].asyncer;var Merge_call = ՐՏ_modules["asset.utils"].Merge_call;var timeout = ՐՏ_modules["asset.utils"].timeout;
    var http = ՐՏ_modules["common"].http;
    var common = ՐՏ_modules["common"];
    vc = new V_collector();
    function format_err(errors) {
        var ՐՏitr26, ՐՏidx26;
        var ret, f;
        ret = {};
        ՐՏitr26 = ՐՏ_Iterable(errors);
        for (ՐՏidx26 = 0; ՐՏidx26 < ՐՏitr26.length; ՐՏidx26++) {
            f = ՐՏitr26[ՐՏidx26];
            ret[f] = {
                status: "error",
                message: errors[f]
            };
        }
        return ret;
    }
    
    var Store = (ՐՏ_29 = class Store {
        init_state () {
            var self = this;
            var ret;
            ret = {
                user: null,
                profile: null,
                logged: null,
                http_error: null
            };
            return ret;
        }
        constructor () {
            var self = this;
            self.inject = {
                $flash: "$flash",
                $toggle_busy: "$toggle_busy"
            };
            self.LOGIN = "auth/api/login";
            self.LOGOUT = "auth/api/logout";
            self.REGISTER = "auth/api/register";
            self.CHANGE_PASSWORD = "auth/api/change_password";
            self.TRY_CONNECT = "try_connect";
            self.PROFILE = "api_blog/profile";
        }
        clear_error () {
            var self = this;
            self.commit("http_error=", null);
        }
        profile (data) {
            var self = this;
            data = data.profile;
            if (data.image) {
                data.image = common.URL(`static/images/${data.image}`);
            }
            self.state.profile = data;
        }
        *profile_get () {
            var self = this;
            var resp, httperr;
            try {
                resp = (yield http.get(self.PROFILE)).data;
            } catch (ՐՏ_Exception) {
                var err = ՐՏ_Exception;
                self.commit("http_error=", {
                    status: err.response.status,
                    data: err.response.data
                });
                httperr = new Error();
                httperr.http = err.response.data;
                throw httperr;
            }
            self.commit("profile", resp);
            return true;
        }
        *profile_set (data) {
            var ՐՏitr27, ՐՏidx27;
            var self = this;
            var frm, k, v, resp, httperr;
            if (!(data instanceof FormData)) {
                frm = new FormData();
                ՐՏitr27 = ՐՏ_Iterable(data);
                for (ՐՏidx27 = 0; ՐՏidx27 < ՐՏitr27.length; ՐՏidx27++) {
                    k = ՐՏitr27[ՐՏidx27];
                    v = data[k];
                    if (v instanceof FileList) {
                        v = v[0];
                    }
                    frm.append(k, v);
                }
            }
            try {
                resp = (yield http.put(self.PROFILE, frm)).data;
            } catch (ՐՏ_Exception) {
                var err = ՐՏ_Exception;
                self.commit("http_error=", {
                    status: err.response.status,
                    data: err.response.data
                });
                httperr = new Error();
                httperr.errors = format_err(err.response.data.errors);
                throw httperr;
            }
            self.commit("profile", resp);
        }
        *register (data) {
            var self = this;
            var resp, httperr;
            if (data instanceof FormData) {
                data = Object.fromEntries(data);
            }
            try {
                resp = (yield http.post(self.REGISTER, data)).data;
            } catch (ՐՏ_Exception) {
                var err = ՐՏ_Exception;
                self.commit("http_error=", {
                    status: err.response.status,
                    data: err.response.data
                });
                httperr = new Error();
                httperr.errors = format_err(err.response.data.errors);
                throw httperr;
            }
            return true;
        }
        *try_connect () {
            var self = this;
            var logged, user;
            yield new Merge_call().merge(1);
            logged = self.state.logged;
            if (logged || logged === false) {
                return;
            }
            try {
                user = (yield http.get(self.TRY_CONNECT)).data.user;
            } catch (ՐՏ_Exception) {
                var err = ՐՏ_Exception;
                if (err.response) {
                    self.commit("http_error=", {
                        status: err.response.status,
                        data: err.response.data
                    });
                    self.commit("logged=", false);
                    return;
                } else {
                    throw err;
                }
            }
            self.commit("user=", user);
            self.commit("logged=", true);
            return true;
        }
        *login (data) {
            var self = this;
            var user;
            if (data instanceof FormData) {
                data = Object.fromEntries(data);
            }
            if (!data.email) {
                data.email = data.username;
            }
            try {
                user = (yield http.post(self.LOGIN, data)).data.user;
                self.commit("user=", user);
                self.commit("logged=", true);
            } catch (ՐՏ_Exception) {
                var err = ՐՏ_Exception;
                self.commit("http_error=", {
                    status: err.response.status,
                    data: err.response.data
                });
            }
        }
        *logout () {
            var self = this;
            try {
                yield http.post(self.LOGOUT);
                self.commit("user=", null);
                self.commit("logged=", false);
            } catch (ՐՏ_Exception) {
                var err = ՐՏ_Exception;
                self.commit("http_error=", {
                    status: err.response.status,
                    data: err.response.data
                });
            }
        }
        *change_password (old_new) {
            var self = this;
            var httperr;
            try {
                yield http.post(self.CHANGE_PASSWORD, old_new);
            } catch (ՐՏ_Exception) {
                var err = ՐՏ_Exception;
                httperr = new Error();
                httperr.errors = format_err(err.response.data.errors);
                throw httperr;
            }
        }
    }, ՐՏ_29 = vc.store()((function(){
        Object.defineProperties(ՐՏ_29.prototype, {
            clear_error: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_29.prototype.clear_error)
            },
            profile: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_29.prototype.profile)
            },
            profile_get: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_29.prototype.profile_get))
            },
            profile_set: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_29.prototype.profile_set))
            },
            register: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_29.prototype.register))
            },
            try_connect: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_29.prototype.try_connect))
            },
            login: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_29.prototype.login))
            },
            logout: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_29.prototype.logout))
            },
            change_password: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_29.prototype.change_password))
            }
        });
        return ՐՏ_29;
    })()), ՐՏ_29);
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:store.auth"];
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("format_err", function(){return format_err;}, function(ՐՏ_v){if (typeof format_err !== "undefined") {format_err = ՐՏ_v;};});
    ՐՏ_mod.export("Store", function(){return Store;}, function(ՐՏ_v){if (typeof Store !== "undefined") {Store = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("RS_store", function(){return RS_store;}, function(ՐՏ_v){if (typeof RS_store !== "undefined") {RS_store = ՐՏ_v;};});
    ՐՏ_mod.export("timeout", function(){return timeout;}, function(ՐՏ_v){if (typeof timeout !== "undefined") {timeout = ՐՏ_v;};});
    ՐՏ_mod.export("http", function(){return http;}, function(ՐՏ_v){if (typeof http !== "undefined") {http = ՐՏ_v;};});
    ՐՏ_mod.export("common", function(){return common;}, function(ՐՏ_v){if (typeof common !== "undefined") {common = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:store.post"].body = function(){
    var __name__ = "store.post";

    var vc, dtformatter;
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var RS_store = ՐՏ_modules["asset.store33"].RS_store;
    var asyncer = ՐՏ_modules["asset.utils"].asyncer;var upload = ՐՏ_modules["asset.utils"].upload;var download_link = ՐՏ_modules["asset.utils"].download_link;
    vc = new V_collector();
    var http = ՐՏ_modules["common"].http;
    var common = ՐՏ_modules["common"];
    var default_author_icon = ՐՏ_modules["models"].default_author_icon;
    dtformatter = function(d) {
        if (ՐՏ_type(d) === "Number") {
            d *= 1e3;
        }
        return d ? new Date(d).toLocaleString() : "";
    };
    
    var Store = (ՐՏ_30 = class Store {
        _mounted () {
            var self = this;
        }
        constructor () {
            var self = this;
            self.API_POST = "api_blog/post";
        }
        init_state () {
            var self = this;
            var ret;
            ret = {
                post_list: null,
                post: {}
            };
            return ret;
        }
        post_list_set (lst) {
            var ՐՏ_31;
            var self = this;
            var st, post, post_list;
            st = self.state;
            post = {};
            post_list = [];
            
            (ՐՏ_31 = function(it) {
                post[it.id] = it;
                post_list.push(it.id);
            }, ՐՏ_31 = lst.map(ՐՏ_31), ՐՏ_31)
            st.post = post;
            st.post_list = post_list;
        }
        *post_get (user_id) {
            var self = this;
            var user_args, post_list;
            user_args = [];
            if (user_id) {
                user_args = [ "user", user_id ];
            }
            post_list = (yield http.get(self.API_POST, user_args)).data.items;
            self.commit("post_list_set", post_list);
        }
        *post_save (pid, payload) {
            var self = this;
            var meth, ret, errors, httperr, f;
            meth = pid === "#" ? "post" : "put";
            pid = pid === "#" ? "" : pid;
            try {
                ret = (yield http[meth](`${self.API_POST}/${pid}`, payload)).data.items[0];
            } catch (ՐՏ_Exception) {
                var ՐՏitr28, ՐՏidx28;
                var err = ՐՏ_Exception;
                errors = err.response.data.errors;
                httperr = new Error();
                httperr.errors = {};
                ՐՏitr28 = ՐՏ_Iterable(errors);
                for (ՐՏidx28 = 0; ՐՏidx28 < ՐՏitr28.length; ՐՏidx28++) {
                    f = ՐՏitr28[ՐՏidx28];
                    httperr.errors[f] = {
                        status: "error",
                        message: errors[f]
                    };
                }
                throw httperr;
            }
            self.$set(self.state.post, ret.id, ret);
        }
        *post_del (pid) {
            var self = this;
            try {
                yield http.delete(`${self.API_POST}/${pid}`);
            } catch (ՐՏ_Exception) {
                var err = ՐՏ_Exception;
                throw err;
            }
        }
        post_list (st) {
            var ՐՏitr29, ՐՏidx29;
            var self = this;
            var out, pid, rec;
            out = [];
            ՐՏitr29 = ՐՏ_Iterable(st.post_list || []);
            for (ՐՏidx29 = 0; ՐՏidx29 < ՐՏitr29.length; ՐՏidx29++) {
                pid = ՐՏitr29[ՐՏidx29];
                rec = {...st.post[pid]};
                rec.date_posted = dtformatter(rec.date_posted);
                rec.author_id = rec.author;
                rec.author = rec.username;
                rec.author_icon = common.URL("static/images/", rec.author_icon || default_author_icon);
                out.push(rec);
            }
            return out;
        }
    }, ՐՏ_30 = vc.store()((function(){
        Object.defineProperties(ՐՏ_30.prototype, {
            post_list_set: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_30.prototype.post_list_set)
            },
            post_get: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_30.prototype.post_get))
            },
            post_save: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_30.prototype.post_save))
            },
            post_del: {
                enumerable: false, 
                writable: true, 
                value: vc.action(asyncer(ՐՏ_30.prototype.post_del))
            },
            post_list: {
                enumerable: false, 
                writable: true, 
                value: vc.getter(ՐՏ_30.prototype.post_list)
            }
        });
        return ՐՏ_30;
    })()), ՐՏ_30);
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:store.post"];
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("dtformatter", function(){return dtformatter;}, function(ՐՏ_v){if (typeof dtformatter !== "undefined") {dtformatter = ՐՏ_v;};});
    ՐՏ_mod.export("Store", function(){return Store;}, function(ՐՏ_v){if (typeof Store !== "undefined") {Store = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("RS_store", function(){return RS_store;}, function(ՐՏ_v){if (typeof RS_store !== "undefined") {RS_store = ՐՏ_v;};});
    ՐՏ_mod.export("download_link", function(){return download_link;}, function(ՐՏ_v){if (typeof download_link !== "undefined") {download_link = ՐՏ_v;};});
    ՐՏ_mod.export("http", function(){return http;}, function(ՐՏ_v){if (typeof http !== "undefined") {http = ՐՏ_v;};});
    ՐՏ_mod.export("common", function(){return common;}, function(ՐՏ_v){if (typeof common !== "undefined") {common = ՐՏ_v;};});
    ՐՏ_mod.export("default_author_icon", function(){return default_author_icon;}, function(ՐՏ_v){if (typeof default_author_icon !== "undefined") {default_author_icon = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:store.root"].body = function(){
    var __name__ = "store.root";

    var vc;
    var settings = ՐՏ_modules["settings"];
    var common = ՐՏ_modules["common"];
    var http = ՐՏ_modules["common"].http;
    var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var RS_store = ՐՏ_modules["asset.store33"].RS_store;
    var asyncer = ՐՏ_modules["asset.utils"].asyncer;
    var server = ՐՏ_modules["server"];
    var auth = ՐՏ_modules["store.auth"];var post = ՐՏ_modules["store.post"];
    Vue.use(RS_store);
    vc = new V_collector();
    
    var Root = (ՐՏ_32 = class Root {
        _mounted () {
            var self = this;
        }
        init_state () {
            var self = this;
            var ret;
            ret = {
                flash: {
                    msg: "Hi",
                    status: "",
                    component: null,
                    cargs: null,
                    trigger: 0
                },
                is_busy: true,
                relogin_required: false
            };
            return ret;
        }
        constructor () {
            var ՐՏ_33;
            var self = this;
            self.modules = {
                auth: auth,
                post: post
            };
            self._after_relogin = null;
            self.provide = (ՐՏ_33 = {
                $flash: self.$flash.bind(self),
                $toggle_busy: self.$toggle_busy.bind(self),
                $URL: common.URL
            }, (function(){
Object.defineProperties(ՐՏ_33, {
                    $router: {
                        enumerable: true, 
                        configurable: true, 
                        get: function $router() {
                            var _ = this;
                            return self.$router;
                        }
                    },
                    $route: {
                        enumerable: true, 
                        configurable: true, 
                        get: function $route() {
                            var _ = this;
                            return self.$route;
                        }
                    }
                });
                return ՐՏ_33;
            })(), ՐՏ_33);
            http.on_status(440)(self.on_440.bind(self));
        }
        on_440 (err, opt) {
            var self = this;
            return self.commit("relogin_required", true, opt);
        }
        get $router () {
            var self = this;
            return common.router;
        }
        get $route () {
            var self = this;
            return common.router.$route;
        }
        relogin_required (value, request_opt) {
            var self = this;
            var ok_err, p;
            if (ՐՏ_in(value, [ false, "cancel" ])) {
                self.state.relogin_required = false;
                self._after_relogin(value);
                return;
            } else if (self._after_relogin) {
                throw new Error("unexpected logic");
            }
            ok_err = {};
            p = new Promise(function(ok, err) {
                ok_err.ok = ok;
                ok_err.err = err;
            });
            function after_relogin(type) {
                self._after_relogin = null;
                if (type === "cancel") {
                    ok_err.err("cancel");
                    return;
                }
                http[request_opt.meth](request_opt.path, request_opt.args, request_opt.query, request_opt.data, request_opt.conf).then(ok_err.ok, ok_err.err);
            }
            self._after_relogin = after_relogin;
            self.state.relogin_required = true;
            self.commit("/auth.logged=", false);
            return p;
        }
        toggle_busy (onoff) {
            var self = this;
            onoff = onoff === void 0 ? !self.state.is_busy : onoff;
            self.state.is_busy = onoff;
        }
        flash (msg, status) {
            var self = this;
            var st_flash;
            st_flash = self.state.flash;
            if (ՐՏ_type(msg) === "String") {
                st_flash.msg = msg;
                st_flash.component = null;
                st_flash.cargs = null;
            } else {
                st_flash.component = msg.component;
                st_flash.cargs = msg.cargs;
                st_flash.msg = null;
            }
            st_flash.status = status;
            ++st_flash.trigger;
        }
        $flash () {
            var self = this;
            var args = [].slice.call(arguments, 0);
            return self.commit("flash", ...args);
        }
        $toggle_busy (onoff) {
            var self = this;
            self.commit("toggle_busy", onoff);
        }
    }, ՐՏ_32 = vc.store()((function(){
        Object.defineProperties(ՐՏ_32.prototype, {
            relogin_required: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_32.prototype.relogin_required)
            },
            toggle_busy: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_32.prototype.toggle_busy)
            },
            flash: {
                enumerable: false, 
                writable: true, 
                value: vc.mutation(ՐՏ_32.prototype.flash)
            }
        });
        return ՐՏ_32;
    })()), ՐՏ_32);
    function make() {
        return RS_store.root(new Root());
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:store.root"];
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("Root", function(){return Root;}, function(ՐՏ_v){if (typeof Root !== "undefined") {Root = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("settings", function(){return settings;}, function(ՐՏ_v){if (typeof settings !== "undefined") {settings = ՐՏ_v;};});
    ՐՏ_mod.export("common", function(){return common;}, function(ՐՏ_v){if (typeof common !== "undefined") {common = ՐՏ_v;};});
    ՐՏ_mod.export("http", function(){return http;}, function(ՐՏ_v){if (typeof http !== "undefined") {http = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("RS_store", function(){return RS_store;}, function(ՐՏ_v){if (typeof RS_store !== "undefined") {RS_store = ՐՏ_v;};});
    ՐՏ_mod.export("asyncer", function(){return asyncer;}, function(ՐՏ_v){if (typeof asyncer !== "undefined") {asyncer = ՐՏ_v;};});
    ՐՏ_mod.export("server", function(){return server;}, function(ՐՏ_v){if (typeof server !== "undefined") {server = ՐՏ_v;};});
    ՐՏ_mod.export("auth", function(){return auth;}, function(ՐՏ_v){if (typeof auth !== "undefined") {auth = ՐՏ_v;};});
    ՐՏ_mod.export("post", function(){return post;}, function(ՐՏ_v){if (typeof post !== "undefined") {post = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:store"].body = function(){
    var __name__ = "store";

    ՐՏ_modules["ՐՏ:store"].export("auth", function(){return ՐՏ_modules["store.auth"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:store"].export("post", function(){return ՐՏ_modules["store.post"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:store"].export("root", function(){return ՐՏ_modules["store.root"];}, function(){throw new Error("use Object.defineProperty!");});
    var make = ՐՏ_modules["store.root"].make;
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:store"];
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:pages.login"].body = function(){
    var __name__ = "pages.login";

    var templ, vc;
    templ = "\n<div></div>\n";
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var asyncer = ՐՏ_modules["asset.utils"].asyncer;
    vc = new V_collector();
    
    var Login = (ՐՏ_34 = class Login extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.template = templ;
            self.map_store = {
                try_connect: "/auth.try_connect*",
                logged: "/auth.logged"
            };
        }
        *do_login () {
            var self = this;
            var next, ret;
            next = self.$route.query.next;
            if (self.logged === null) {
                self.$x.busy(true);
                yield self.try_connect();
                self.$x.busy(false);
            }
            if (!self.logged) {
                ret = (yield self.$x.modal("XLogin"));
                if (ret === "nav") {
                    return;
                }
            }
            if (next) {
                self.$router.replace(next);
            } else if (self.$route.name === "login") {
                self.$router.replace("/index");
            }
        }
        mounted () {
            var self = this;
            self.do_login();
        }
    }, ՐՏ_34 = vc.component()((function(){
        Object.defineProperties(ՐՏ_34.prototype, {
            do_login: {
                enumerable: false, 
                writable: true, 
                value: asyncer(ՐՏ_34.prototype.do_login)
            }
        });
        return ՐՏ_34;
    })()), ՐՏ_34);
    function make() {
        return {
            name: "login",
            path: "/login",
            component: new Login()
        };
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:pages.login"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("Login", function(){return Login;}, function(ՐՏ_v){if (typeof Login !== "undefined") {Login = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("asyncer", function(){return asyncer;}, function(ՐՏ_v){if (typeof asyncer !== "undefined") {asyncer = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:pages.index"].body = function(){
    var __name__ = "pages.index";

    var templ, vc;
    templ = "\n<div  class = 'container'>\n    <div  class = 'columns'>\n        <div  class = 'column is-2 p-0'></div>\n        <div  class = 'column'>\n            <h1  class = 'title'>Posts</h1>\n            <hr/>\n            <template  v-if = 'is_ready'>\n                <p  v-if = \"!(post_list && post_list.length)\">\n                    There doesn't seem to be any posts made yet. Why don't you \n                    <span  class = 'tag is-large'>\n                        <router-link  to = '/register'>sign up</router-link>\n                    </span>\n                    and make one?\n                </p>\n                <XPost  v-for = \"p in post_list\" mode = 'show' v-bind = 'p' :key = 'p.id'></XPost>\n            </template>\n            <template  v-else>\n                <div>\n                    Loading...\n                </div>\n            </template>\n        </div>\n        <div  class = 'column is-2  p-0'></div>\n    </div>\n</div>\n";
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var asyncer = ՐՏ_modules["asset.utils"].asyncer;
    var URL = ՐՏ_modules["common"].URL;
    vc = new V_collector();
    
    var Pg = (ՐՏ_35 = class Pg extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.template = templ;
            self.map_store = {
                "post_get": "/post.post_get*",
                "post_list": "/post.post_list"
            };
            self.props = {
                user_id: Number
            };
        }
        data () {
            var self = this;
            return {
                is_ready: false
            };
        }
        load_post () {
            var ՐՏ_36;
            var self = this;
            
            
            (ՐՏ_36 = function*() {
                self.is_ready = false;
                yield self.post_get(self.user_id);
                self.is_ready = true;
            }, ՐՏ_36 = self.$x.with_progress(asyncer(ՐՏ_36)), ՐՏ_36)
        }
        user_id (n, o) {
            var self = this;
            self.load_post();
        }
        created () {
            var self = this;
            self.load_post();
        }
    }, ՐՏ_35 = vc.component()((function(){
        Object.defineProperties(ՐՏ_35.prototype, {
            user_id: {
                enumerable: false, 
                writable: true, 
                value: vc.watch(ՐՏ_35.prototype.user_id)
            }
        });
        return ՐՏ_35;
    })()), ՐՏ_35);
    function make() {
        return {
            path: "/post/:user_id(\\d+)?",
            alias: "/index/:user_id(\\d+)?",
            name: "post_list",
            props: function(r) {
                return {
                    user_id: parseInt(r.params.user_id)
                };
            },
            component: new Pg(),
            meta: {
                requires_login: false
            }
        };
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:pages.index"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("Pg", function(){return Pg;}, function(ՐՏ_v){if (typeof Pg !== "undefined") {Pg = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("asyncer", function(){return asyncer;}, function(ՐՏ_v){if (typeof asyncer !== "undefined") {asyncer = ՐՏ_v;};});
    ՐՏ_mod.export("URL", function(){return URL;}, function(ՐՏ_v){if (typeof URL !== "undefined") {URL = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:pages.register"].body = function(){
    var __name__ = "pages.register";

    var templ, vc;
    templ = "\n<div  class = 'container'>\n    <div  class = 'columns'>\n        <div  class = 'column is-3 p-0'></div>\n        <div  class = 'column'>\n            <h1  class = 'title'>Sign Up</h1>\n            <hr/>\n            <div  class = 'box'>\n                <XForm  :fields = 'fields' @action = 'on_action' :validation = 'validation'></XForm>\n            </div>\n        </div>\n        <div  class = 'column is-3  p-0'></div>\n    </div>\n</div>\n";
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var asyncer = ՐՏ_modules["asset.utils"].asyncer;
    var register = ՐՏ_modules["models"].register;
    vc = new V_collector();
    
    var Pg = (ՐՏ_37 = class Pg extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.template = templ;
            self.map_store = {
                "register": "/auth.register*",
                "flash": "flash~"
            };
        }
        on_action (act_obj, form_values) {
            var ՐՏ_38;
            var self = this;
            
            
            var register = (ՐՏ_38 = function* register() {
                try {
                    yield self.register(form_values);
                    self.validation = null;
                    self.flash("Done!", "ok");
                    self.$router.push("/login");
                } catch (ՐՏ_Exception) {
                    var err = ՐՏ_Exception;
                    if (err.errors) {
                        self.validation = err.errors;
                    } else {
                        throw err;
                    }
                }
            }, ՐՏ_38 = self.$x.with_progress(asyncer(ՐՏ_38)), ՐՏ_38);
        }
        data () {
            var self = this;
            window.frm = self;
            return {
                fields: register,
                validation: null
            };
        }
    }, ՐՏ_37 = vc.component()(ՐՏ_37), ՐՏ_37);
    function make() {
        return {
            path: "/register",
            name: "register",
            component: new Pg(),
            meta: {
                requires_login: false
            }
        };
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:pages.register"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("Pg", function(){return Pg;}, function(ՐՏ_v){if (typeof Pg !== "undefined") {Pg = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("asyncer", function(){return asyncer;}, function(ՐՏ_v){if (typeof asyncer !== "undefined") {asyncer = ՐՏ_v;};});
    ՐՏ_mod.export("register", function(){return register;}, function(ՐՏ_v){if (typeof register !== "undefined") {register = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:pages.profile"].body = function(){
    var __name__ = "pages.profile";

    var templ, vc;
    templ = "\n<div  class = 'container'>\n    <div  class = 'columns'>\n        <div  class = 'column is-3 p-0'></div>\n        <div  class = 'column'>\n            <h1  class = 'title'>Profile</h1>\n            <hr/>\n            <div  class = 'box'>\n                <XForm  v-if = 'profile' :fields = 'fields' :record = 'profile' @action = 'on_action' :validation = 'validation'></XForm>\n                <div  v-else>Loading...</div>\n            </div>\n        </div>\n        <div  class = 'column is-3  p-0'></div>\n    </div>\n</div>\n";
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var asyncer = ՐՏ_modules["asset.utils"].asyncer;
    var profile = ՐՏ_modules["models"].profile;
    var URL = ՐՏ_modules["common"].URL;
    vc = new V_collector();
    
    var Pg = (ՐՏ_39 = class Pg extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.template = templ;
            self.map_store = {
                "profile_get": "/auth.profile_get*",
                "profile_set": "/auth.profile_set*",
                "profile": "/auth.profile",
                "flash": "flash~"
            };
        }
        on_action (act_obj, form_values) {
            var ՐՏ_40;
            var self = this;
            
            
            var register = (ՐՏ_40 = function* register() {
                try {
                    yield self.profile_set(form_values);
                    self.validation = null;
                    self.flash("Done!", "ok");
                } catch (ՐՏ_Exception) {
                    var err = ՐՏ_Exception;
                    if (err.errors) {
                        self.validation = err.errors;
                    } else {
                        throw err;
                    }
                }
            }, ՐՏ_40 = self.$x.with_progress(asyncer(ՐՏ_40)), ՐՏ_40);
        }
        data () {
            var self = this;
            window.frm = self;
            return {
                model: profile,
                validation: null
            };
        }
        fields () {
            var ՐՏitr30, ՐՏidx30;
            var self = this;
            var ret, f, fld;
            if (!self.profile) {
                return;
            }
            ret = [];
            ՐՏitr30 = ՐՏ_Iterable(self.model);
            for (ՐՏidx30 = 0; ՐՏidx30 < ՐՏitr30.length; ՐՏidx30++) {
                f = ՐՏitr30[ՐՏidx30];
                fld = Object.assign({}, f);
                if (fld.type === "file.img") {
                    fld.default_file_url = URL("static/images/", fld.default_file_url);
                }
                ret.push(fld);
            }
            return ret;
        }
        created () {
            var self = this;
            if (!self.profile) {
                self.profile_get();
            }
        }
    }, ՐՏ_39 = vc.component()((function(){
        Object.defineProperties(ՐՏ_39.prototype, {
            fields: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_39.prototype.fields)
            }
        });
        return ՐՏ_39;
    })()), ՐՏ_39);
    function make() {
        return {
            path: "/profile",
            name: "profile",
            component: new Pg(),
            meta: {
                requires_login: true
            }
        };
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:pages.profile"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("Pg", function(){return Pg;}, function(ՐՏ_v){if (typeof Pg !== "undefined") {Pg = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("asyncer", function(){return asyncer;}, function(ՐՏ_v){if (typeof asyncer !== "undefined") {asyncer = ՐՏ_v;};});
    ՐՏ_mod.export("profile", function(){return profile;}, function(ՐՏ_v){if (typeof profile !== "undefined") {profile = ՐՏ_v;};});
    ՐՏ_mod.export("URL", function(){return URL;}, function(ՐՏ_v){if (typeof URL !== "undefined") {URL = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:pages.post_new"].body = function(){
    var __name__ = "pages.post_new";

    var templ, vc;
    templ = "\n<div  class = 'container'>\n    <div  class = 'columns'>\n        <div  class = 'column is-2 p-0'></div>\n        <div  class = 'column'>\n            <h1  class = 'title'>New Post</h1>\n            <hr/>\n            <XPost  mode = 'edit' v-bind = 'post' @saved = \"$router.push({name: 'post_list'})\"></XPost>\n        </div>\n        <div  class = 'column is-2  p-0'></div>\n    </div>\n</div>\n";
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var asyncer = ՐՏ_modules["asset.utils"].asyncer;
    var URL = ՐՏ_modules["common"].URL;
    vc = new V_collector();
    
    var Pg = (ՐՏ_41 = class Pg extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.template = templ;
            self.map_store = {
                profile: "/auth.profile",
                profile_get: "/auth.profile_get*"
            };
        }
        data () {
            var self = this;
            return {
                post_: {
                    id: "#",
                    title: "",
                    content: ""
                }
            };
        }
        post () {
            var self = this;
            var ret;
            ret = {...self.post_};
            ret.author_icon = self.profile ? self.profile.image : "";
            return ret;
        }
        created () {
            var self = this;
            if (!self.profile) {
                self.profile_get();
            }
        }
    }, ՐՏ_41 = vc.component()((function(){
        Object.defineProperties(ՐՏ_41.prototype, {
            post: {
                enumerable: false, 
                writable: true, 
                value: vc.computed(ՐՏ_41.prototype.post)
            }
        });
        return ՐՏ_41;
    })()), ՐՏ_41);
    function make() {
        return {
            path: "/post/new",
            name: "post_new",
            component: new Pg(),
            meta: {
                requires_login: true
            }
        };
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:pages.post_new"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("Pg", function(){return Pg;}, function(ՐՏ_v){if (typeof Pg !== "undefined") {Pg = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("asyncer", function(){return asyncer;}, function(ՐՏ_v){if (typeof asyncer !== "undefined") {asyncer = ՐՏ_v;};});
    ՐՏ_mod.export("URL", function(){return URL;}, function(ՐՏ_v){if (typeof URL !== "undefined") {URL = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:pages.about"].body = function(){
    var __name__ = "pages.about";

    var templ, vc;
    templ = "\n<div  class = 'container'>\n    <h1  class = 'title'>About page</h1>\n</div>\n";
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    vc = new V_collector();
    
    var Pg = (ՐՏ_42 = class Pg extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.template = templ;
        }
    }, ՐՏ_42 = vc.component()(ՐՏ_42), ՐՏ_42);
    function make() {
        return {
            name: "about",
            path: "/about",
            component: new Pg()
        };
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:pages.about"];
    ՐՏ_mod.export("templ", function(){return templ;}, function(ՐՏ_v){if (typeof templ !== "undefined") {templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("Pg", function(){return Pg;}, function(ՐՏ_v){if (typeof Pg !== "undefined") {Pg = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:pages"].body = function(){
    var __name__ = "pages";

    ՐՏ_modules["ՐՏ:pages"].export("login", function(){return ՐՏ_modules["pages.login"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:pages"].export("index", function(){return ՐՏ_modules["pages.index"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:pages"].export("register", function(){return ՐՏ_modules["pages.register"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:pages"].export("profile", function(){return ՐՏ_modules["pages.profile"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:pages"].export("post_new", function(){return ՐՏ_modules["pages.post_new"];}, function(){throw new Error("use Object.defineProperty!");});
    ՐՏ_modules["ՐՏ:pages"].export("about", function(){return ՐՏ_modules["pages.about"];}, function(){throw new Error("use Object.defineProperty!");});

    var ՐՏ_mod = ՐՏ_modules["ՐՏ:pages"];
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:routes"].body = function(){
    var __name__ = "routes";

    var settings = ՐՏ_modules["settings"];
    var common = ՐՏ_modules["common"];
    var pages = ՐՏ_modules["pages"];
    Vue.use(VueRouter);
    function make_routes() {
        var ՐՏitr31, ՐՏidx31;
        var routes, p, pg, index;
        routes = [];
        ՐՏitr31 = ՐՏ_Iterable(pages);
        for (ՐՏidx31 = 0; ՐՏidx31 < ՐՏitr31.length; ՐՏidx31++) {
            p = ՐՏitr31[ՐՏidx31];
            pg = pages[p].make();
            if (p === "index") {
                index = pg;
            }
            routes.push(pg);
        }
        routes.push({
            path: "/",
            index: index
        });
        routes.push({
            path: "/*",
            component: {
                template: "<div>not found</div>"
            }
        });
        return routes;
    }
    function before_each(to_, _, next) {
        if (to_.matched.some(function(record) {
            return record.meta && record.meta.requires_login;
        })) {
            if (!common.store.get("/auth.user")) {
                next({
                    path: "/login",
                    query: {
                        next: to_.fullPath
                    }
                });
            } else {
                next();
            }
        } else {
            next();
        }
    }
    function after_each(to_, _) {
        if (this.app._isMounted) {
            this.app.close_modal();
        }
    }
    function make() {
        var router;
        router = new VueRouter({
            routes: make_routes(),
            mode: "history",
            base: settings.app_base
        });
        router.beforeEach(before_each.bind(router));
        router.afterEach(after_each.bind(router));
        return router;
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:routes"];
    ՐՏ_mod.export("make_routes", function(){return make_routes;}, function(ՐՏ_v){if (typeof make_routes !== "undefined") {make_routes = ՐՏ_v;};});
    ՐՏ_mod.export("before_each", function(){return before_each;}, function(ՐՏ_v){if (typeof before_each !== "undefined") {before_each = ՐՏ_v;};});
    ՐՏ_mod.export("after_each", function(){return after_each;}, function(ՐՏ_v){if (typeof after_each !== "undefined") {after_each = ՐՏ_v;};});
    ՐՏ_mod.export("make", function(){return make;}, function(ՐՏ_v){if (typeof make !== "undefined") {make = ՐՏ_v;};});
    ՐՏ_mod.export("settings", function(){return settings;}, function(ՐՏ_v){if (typeof settings !== "undefined") {settings = ՐՏ_v;};});
    ՐՏ_mod.export("common", function(){return common;}, function(ՐՏ_v){if (typeof common !== "undefined") {common = ՐՏ_v;};});
    ՐՏ_mod.export("pages", function(){return pages;}, function(ՐՏ_v){if (typeof pages !== "undefined") {pages = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:setup"].body = function(){
    var __name__ = "setup";

    var settings = ՐՏ_modules["settings"];
    var common = ՐՏ_modules["common"];
    var directives = ՐՏ_modules["directives"];
    var components = ՐՏ_modules["components"];
    var app_components = ՐՏ_modules["app_components"];
    var XTools = ՐՏ_modules["xtools"].XTools;
    var store = ՐՏ_modules["store"];
    var routes = ՐՏ_modules["routes"];
    function reg_directives(Vue) {
        var ՐՏitr32, ՐՏidx32;
        var dname, d;
        ՐՏitr32 = ՐՏ_Iterable(directives);
        for (ՐՏidx32 = 0; ՐՏidx32 < ՐՏitr32.length; ՐՏidx32++) {
            dname = ՐՏitr32[ՐՏidx32];
            d = directives[dname];
            Vue.directive(d.name || dname, d.make());
        }
    }
    function reg_components(Vue) {
        var ՐՏitr33, ՐՏidx33, ՐՏitr34, ՐՏidx34, ՐՏitr35, ՐՏidx35;
        var pack, cname, c, c_;
        ՐՏitr33 = ՐՏ_Iterable([ components, app_components ]);
        for (ՐՏidx33 = 0; ՐՏidx33 < ՐՏitr33.length; ՐՏidx33++) {
            pack = ՐՏitr33[ՐՏidx33];
            ՐՏitr34 = ՐՏ_Iterable(pack);
            for (ՐՏidx34 = 0; ՐՏidx34 < ՐՏitr34.length; ՐՏidx34++) {
                cname = ՐՏitr34[ՐՏidx34];
                c = pack[cname];
                if (c.make) {
                    c = c.make();
                    if (!Array.isArray(c)) {
                        c = [ c ];
                    }
                    ՐՏitr35 = ՐՏ_Iterable(c);
                    for (ՐՏidx35 = 0; ՐՏidx35 < ՐՏitr35.length; ՐՏidx35++) {
                        c_ = ՐՏitr35[ՐՏidx35];
                        Vue.component(c_.name, c_);
                    }
                }
            }
        }
    }
    function run(Vue) {
        var x;
        reg_directives(Vue);
        reg_components(Vue);
        x = new XTools(settings.app_base, settings.app_static);
        Vue.prototype.$x = x;
        common.URL = x.URL;
        common.store = store.make();
        common.router = routes.make();
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:setup"];
    ՐՏ_mod.export("reg_directives", function(){return reg_directives;}, function(ՐՏ_v){if (typeof reg_directives !== "undefined") {reg_directives = ՐՏ_v;};});
    ՐՏ_mod.export("reg_components", function(){return reg_components;}, function(ՐՏ_v){if (typeof reg_components !== "undefined") {reg_components = ՐՏ_v;};});
    ՐՏ_mod.export("run", function(){return run;}, function(ՐՏ_v){if (typeof run !== "undefined") {run = ՐՏ_v;};});
    ՐՏ_mod.export("settings", function(){return settings;}, function(ՐՏ_v){if (typeof settings !== "undefined") {settings = ՐՏ_v;};});
    ՐՏ_mod.export("common", function(){return common;}, function(ՐՏ_v){if (typeof common !== "undefined") {common = ՐՏ_v;};});
    ՐՏ_mod.export("directives", function(){return directives;}, function(ՐՏ_v){if (typeof directives !== "undefined") {directives = ՐՏ_v;};});
    ՐՏ_mod.export("components", function(){return components;}, function(ՐՏ_v){if (typeof components !== "undefined") {components = ՐՏ_v;};});
    ՐՏ_mod.export("app_components", function(){return app_components;}, function(ՐՏ_v){if (typeof app_components !== "undefined") {app_components = ՐՏ_v;};});
    ՐՏ_mod.export("XTools", function(){return XTools;}, function(ՐՏ_v){if (typeof XTools !== "undefined") {XTools = ՐՏ_v;};});
    ՐՏ_mod.export("store", function(){return store;}, function(ՐՏ_v){if (typeof store !== "undefined") {store = ՐՏ_v;};});
    ՐՏ_mod.export("routes", function(){return routes;}, function(ՐՏ_v){if (typeof routes !== "undefined") {routes = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

ՐՏ_modules["ՐՏ:app"].body = function(){
    var __name__ = "app";

    var app_templ, vc;
    app_templ = "\n<div>\n    <TopMenu  @login = '$router.push(\"/login\")' @logout = 'logout' @change_password = 'change_password'>\n        <template  v-slot:progress>\n            <XProgressBar  ref = 'progress'></XProgressBar>\n        </template>\n    </TopMenu>\n    <div>\n        <router-view></router-view>\n    </div>\n</div>\n";
    var setup = ՐՏ_modules["setup"];
    setup.run(Vue);
    var store = ՐՏ_modules["common"].store;var router = ՐՏ_modules["common"].router;
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;var V_collector = ՐՏ_modules["asset.rs_vue"].V_collector;
    var asyncer = ՐՏ_modules["asset.utils"].asyncer;
    vc = new V_collector();
    
    var App = (ՐՏ_43 = class App extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.$store = store;
            self.router = router;
            self.template = app_templ;
            self.map_store = {
                is_busy: "is_busy",
                user: "/auth.user",
                login: "/auth.login*",
                logout: "/auth.logout*",
                try_connect: "/auth.try_connect*",
                relogin_required: "relogin_required",
                set_relogin_required: "relogin_required~",
                flash: "flash~"
            };
        }
        logout (action) {
            var ՐՏ_44;
            var self = this;
            
            
            var logout = (ՐՏ_44 = function logout() {
                return action();
            }, ՐՏ_44 = self.$x.with_busy(self.$x.with_progress(ՐՏ_44)), ՐՏ_44);
        }
        user_watch (n, o) {
            var self = this;
            var username;
            if (!n) {
                if (o) {
                    window.location.reload();
                }
            } else {
                username = n.username[0].toLocaleUpperCase() + n.username.slice(1);
                self.flash(`Hey ${username}!`, "ok");
            }
        }
        beforeRouteLeave () {
            var self = this;
            self.close_modal();
        }
        change_password () {
            var self = this;
            self.$x.modal("XChangePassword");
        }
        relogin_required (n, o) {
            var self = this;
            if (n) {
                self.relogin_show();
            }
        }
        *relogin_show () {
            var self = this;
            var ret;
            ret = (yield self.$x.modal("XLogin", {
                username: self.user.name
            }));
            if (ret === "nav") {
                self.set_relogin_required("cancel");
            } else {
                self.set_relogin_required(false);
            }
        }
        close_modal () {
            var self = this;
            self.$x.modal_close("nav");
        }
        data () {
            var self = this;
            var ret;
            ret = {};
            return ret;
        }
        is_busy (n, o) {
            var self = this;
            self.$x.busy(n);
        }
        beforeCreate () {
            var self = this;
            self.$x.start_progress = function() {
                var args = [].slice.call(arguments, 0);
                return self.$refs.progress.start(...args);
            };
            self.$x.end_progress = function() {
                var args = [].slice.call(arguments, 0);
                return self.$refs.progress.done(...args);
            };
            self.$x.$root = self;
        }
        created () {
            var self = this;
            self.try_connect();
        }
    }, ՐՏ_43 = vc.component()((function(){
        Object.defineProperties(ՐՏ_43.prototype, {
            user_watch: {
                enumerable: false, 
                writable: true, 
                value: vc.watch("user")(ՐՏ_43.prototype.user_watch)
            },
            relogin_required: {
                enumerable: false, 
                writable: true, 
                value: vc.watch(ՐՏ_43.prototype.relogin_required)
            },
            relogin_show: {
                enumerable: false, 
                writable: true, 
                value: asyncer(ՐՏ_43.prototype.relogin_show)
            },
            is_busy: {
                enumerable: false, 
                writable: true, 
                value: vc.watch(ՐՏ_43.prototype.is_busy)
            }
        });
        return ՐՏ_43;
    })()), ՐՏ_43);
    function start() {
        var app;
        app = new App();
        window.app = new Vue(app);
        window.app.$mount("#app");
    }
    var ՐՏ_mod = ՐՏ_modules["ՐՏ:app"];
    ՐՏ_mod.export("app_templ", function(){return app_templ;}, function(ՐՏ_v){if (typeof app_templ !== "undefined") {app_templ = ՐՏ_v;};});
    ՐՏ_mod.export("vc", function(){return vc;}, function(ՐՏ_v){if (typeof vc !== "undefined") {vc = ՐՏ_v;};});
    ՐՏ_mod.export("App", function(){return App;}, function(ՐՏ_v){if (typeof App !== "undefined") {App = ՐՏ_v;};});
    ՐՏ_mod.export("start", function(){return start;}, function(ՐՏ_v){if (typeof start !== "undefined") {start = ՐՏ_v;};});
    ՐՏ_mod.export("setup", function(){return setup;}, function(ՐՏ_v){if (typeof setup !== "undefined") {setup = ՐՏ_v;};});
    ՐՏ_mod.export("router", function(){return router;}, function(ՐՏ_v){if (typeof router !== "undefined") {router = ՐՏ_v;};});
    ՐՏ_mod.export("V_collector", function(){return V_collector;}, function(ՐՏ_v){if (typeof V_collector !== "undefined") {V_collector = ՐՏ_v;};});
    ՐՏ_mod.export("asyncer", function(){return asyncer;}, function(ՐՏ_v){if (typeof asyncer !== "undefined") {asyncer = ՐՏ_v;};});
    return ՐՏ_mod["exports"];
};

(function(){

    var __name__ = "__main__";

    var params;
    var mechanic = ՐՏ_modules["asset.mechanic"];
    params = document.getElementsByTagName("meta")[0].dataset;
    params = Object.assign({}, params);
    mechanic.module_spec("settings").exports = params;
    var app = ՐՏ_modules["app"];
    app.start();
})();
})();
