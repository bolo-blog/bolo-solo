/*
 * Bolo - A stable and beautiful blogging system based in Solo.
 * Copyright (c) 2020-present, https://github.com/bolo-blog
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 10)
}([function(e, t, n) {
    var r;
    ! function(t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, (function(n, o) {
        "use strict";
        var i = [],
            a = Object.getPrototypeOf,
            s = i.slice,
            c = i.flat ? function(e) {
                return i.flat.call(e)
            } : function(e) {
                return i.concat.apply([], e)
            },
            l = i.push,
            u = i.indexOf,
            d = {},
            f = d.toString,
            p = d.hasOwnProperty,
            h = p.toString,
            m = h.call(Object),
            g = {},
            v = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            y = function(e) {
                return null != e && e === e.window
            },
            b = n.document,
            x = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function w(e, t, n) {
            var r, o, i = (n = n || b).createElement("script");
            if (i.text = e, t)
                for (r in x)(o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i)
        }

        function T(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[f.call(e)] || "object" : typeof e
        }
        var C = function(e, t) {
            return new C.fn.init(e, t)
        };

        function k(e) {
            var t = !!e && "length" in e && e.length,
                n = T(e);
            return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        C.fn = C.prototype = {
            jquery: "3.5.1",
            constructor: C,
            length: 0,
            toArray: function() {
                return s.call(this)
            },
            get: function(e) {
                return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = C.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return C.each(this, e)
            },
            map: function(e) {
                return this.pushStack(C.map(this, (function(t, n) {
                    return e.call(t, n, t)
                })))
            },
            slice: function() {
                return this.pushStack(s.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(C.grep(this, (function(e, t) {
                    return (t + 1) % 2
                })))
            },
            odd: function() {
                return this.pushStack(C.grep(this, (function(e, t) {
                    return t % 2
                })))
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: l,
            sort: i.sort,
            splice: i.splice
        }, C.extend = C.fn.extend = function() {
            var e, t, n, r, o, i, a = arguments[0] || {},
                s = 1,
                c = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === c && (a = this, s--); s < c; s++)
                if (null != (e = arguments[s]))
                    for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (C.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], i = o && !Array.isArray(n) ? [] : o || C.isPlainObject(n) ? n : {}, o = !1, a[t] = C.extend(l, i, r)) : void 0 !== r && (a[t] = r));
            return a
        }, C.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== f.call(e)) && (!(t = a(e)) || "function" == typeof(n = p.call(t, "constructor") && t.constructor) && h.call(n) === m)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                w(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, r = 0;
                if (k(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (k(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : u.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
                return r
            },
            map: function(e, t, n) {
                var r, o, i = 0,
                    a = [];
                if (k(e))
                    for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o);
                else
                    for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                return c(a)
            },
            guid: 1,
            support: g
        }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = i[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        }));
        var S = function(e) {
            var t, n, r, o, i, a, s, c, l, u, d, f, p, h, m, g, v, y, b, x = "sizzle" + 1 * new Date,
                w = e.document,
                T = 0,
                C = 0,
                k = ce(),
                S = ce(),
                E = ce(),
                A = ce(),
                j = function(e, t) {
                    return e === t && (d = !0), 0
                },
                N = {}.hasOwnProperty,
                _ = [],
                D = _.pop,
                L = _.push,
                O = _.push,
                q = _.slice,
                I = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                $ = "(?:\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                M = "\\[" + P + "*(" + $ + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + $ + "))|)" + P + "*\\]",
                R = ":(" + $ + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                B = new RegExp(P + "+", "g"),
                F = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                W = new RegExp("^" + P + "*," + P + "*"),
                U = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                z = new RegExp(P + "|>"),
                V = new RegExp(R),
                X = new RegExp("^" + $ + "$"),
                G = {
                    ID: new RegExp("^#(" + $ + ")"),
                    CLASS: new RegExp("^\\.(" + $ + ")"),
                    TAG: new RegExp("^(" + $ + "|[*])"),
                    ATTR: new RegExp("^" + M),
                    PSEUDO: new RegExp("^" + R),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + H + ")$", "i"),
                    needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                },
                J = /HTML$/i,
                Y = /^(?:input|select|textarea|button)$/i,
                K = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp("\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])", "g"),
                ne = function(e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                },
                re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                oe = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                ie = function() {
                    f()
                },
                ae = xe((function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }), {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                O.apply(_ = q.call(w.childNodes), w.childNodes), _[w.childNodes.length].nodeType
            } catch (e) {
                O = {
                    apply: _.length ? function(e, t) {
                        L.apply(e, q.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }

            function se(e, t, r, o) {
                var i, s, l, u, d, h, v, y = t && t.ownerDocument,
                    w = t ? t.nodeType : 9;
                if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
                if (!o && (f(t), t = t || p, m)) {
                    if (11 !== w && (d = Z.exec(e)))
                        if (i = d[1]) {
                            if (9 === w) {
                                if (!(l = t.getElementById(i))) return r;
                                if (l.id === i) return r.push(l), r
                            } else if (y && (l = y.getElementById(i)) && b(t, l) && l.id === i) return r.push(l), r
                        } else {
                            if (d[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                            if ((i = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(i)), r
                        } if (n.qsa && !A[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                        if (v = e, y = t, 1 === w && (z.test(e) || U.test(e))) {
                            for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(re, oe) : t.setAttribute("id", u = x)), s = (h = a(e)).length; s--;) h[s] = (u ? "#" + u : ":scope") + " " + be(h[s]);
                            v = h.join(",")
                        }
                        try {
                            return O.apply(r, y.querySelectorAll(v)), r
                        } catch (t) {
                            A(e, !0)
                        } finally {
                            u === x && t.removeAttribute("id")
                        }
                    }
                }
                return c(e.replace(F, "$1"), t, r, o)
            }

            function ce() {
                var e = [];
                return function t(n, o) {
                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = o
                }
            }

            function le(e) {
                return e[x] = !0, e
            }

            function ue(e) {
                var t = p.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function de(e, t) {
                for (var n = e.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = t
            }

            function fe(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function pe(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function he(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function me(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function ge(e) {
                return le((function(t) {
                    return t = +t, le((function(n, r) {
                        for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                    }))
                }))
            }

            function ve(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !J.test(t || n && n.nodeName || "HTML")
            }, f = se.setDocument = function(e) {
                var t, o, a = e ? e.ownerDocument || e : w;
                return a != p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, m = !i(p), w != p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.scope = ue((function(e) {
                    return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                })), n.attributes = ue((function(e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = ue((function(e) {
                    return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = Q.test(p.getElementsByClassName), n.getById = ue((function(e) {
                    return h.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length
                })), n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n, r, o, i = t.getElementById(e);
                        if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                            for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        o = 0,
                        i = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return i
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                }, v = [], g = [], (n.qsa = Q.test(p.querySelectorAll)) && (ue((function(e) {
                    var t;
                    h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                })), ue((function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                }))), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue((function(e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", R)
                })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), b = t || Q.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, j = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == w && b(w, e) ? -1 : t == p || t.ownerDocument == w && b(w, t) ? 1 : u ? I(u, e) - I(u, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, r = 0,
                        o = e.parentNode,
                        i = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!o || !i) return e == p ? -1 : t == p ? 1 : o ? -1 : i ? 1 : u ? I(u, e) - I(u, t) : 0;
                    if (o === i) return fe(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? fe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                }, p) : p
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (f(e), n.matchesSelector && m && !A[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {
                    A(t, !0)
                }
                return se(t, p, null, [e]).length > 0
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != p && f(e), b(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != p && f(e);
                var o = r.attrHandle[t.toLowerCase()],
                    i = o && N.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
                return void 0 !== i ? i : n.attributes || !m ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, oe)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, r = [],
                    o = 0,
                    i = 0;
                if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(j), d) {
                    for (; t = e[i++];) t === e[i] && (o = r.push(i));
                    for (; o--;) e.splice(r[o], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (r = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = k[e + " "];
                        return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && k(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var o = se.attr(r, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, o) {
                        var i = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, c) {
                            var l, u, d, f, p, h, m = i !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !c && !s,
                                b = !1;
                            if (g) {
                                if (i) {
                                    for (; m;) {
                                        for (f = t; f = f[m];)
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (b = (p = (l = (u = (d = (f = g)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (b = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++b && f === t) {
                                            u[e] = [T, p, b];
                                            break
                                        }
                                } else if (y && (b = p = (l = (u = (d = (f = t)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === b)
                                    for (;
                                        (f = ++p && f && f[m] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((u = (d = f[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [T, b]), f !== t)););
                                return (b -= o) === r || b % r == 0 && b / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return o[x] ? o(t) : o.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, n) {
                            for (var r, i = o(e, t), a = i.length; a--;) e[r = I(e, i[a])] = !(n[r] = i[a])
                        })) : function(e) {
                            return o(e, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: le((function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(F, "$1"));
                        return r[x] ? le((function(e, t, n, o) {
                            for (var i, a = r(e, null, o, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                        })) : function(e, o, i) {
                            return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
                        }
                    })),
                    has: le((function(e) {
                        return function(t) {
                            return se(e, t).length > 0
                        }
                    })),
                    contains: le((function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return (t.textContent || o(t)).indexOf(e) > -1
                            }
                    })),
                    lang: le((function(e) {
                        return X.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: me(!1),
                    disabled: me(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return K.test(e.nodeName)
                    },
                    input: function(e) {
                        return Y.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ge((function() {
                        return [0]
                    })),
                    last: ge((function(e, t) {
                        return [t - 1]
                    })),
                    eq: ge((function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    })),
                    even: ge((function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    })),
                    odd: ge((function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    })),
                    lt: ge((function(e, t, n) {
                        for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                        return e
                    })),
                    gt: ge((function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    }))
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = pe(t);
            for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = he(t);

            function ye() {}

            function be(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function xe(e, t, n) {
                var r = t.dir,
                    o = t.next,
                    i = o || r,
                    a = n && "parentNode" === i,
                    s = C++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || a) return e(t, n, o);
                    return !1
                } : function(t, n, c) {
                    var l, u, d, f = [T, s];
                    if (c) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || a) && e(t, n, c)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || a)
                                if (u = (d = t[x] || (t[x] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;
                                else {
                                    if ((l = u[i]) && l[0] === T && l[1] === s) return f[2] = l[2];
                                    if (u[i] = f, f[2] = e(t, n, c)) return !0
                                } return !1
                }
            }

            function we(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function Te(e, t, n, r, o) {
                for (var i, a = [], s = 0, c = e.length, l = null != t; s < c; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), l && t.push(s)));
                return a
            }

            function Ce(e, t, n, r, o, i) {
                return r && !r[x] && (r = Ce(r)), o && !o[x] && (o = Ce(o, i)), le((function(i, a, s, c) {
                    var l, u, d, f = [],
                        p = [],
                        h = a.length,
                        m = i || function(e, t, n) {
                            for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
                            return n
                        }(t || "*", s.nodeType ? [s] : s, []),
                        g = !e || !i && t ? m : Te(m, f, e, s, c),
                        v = n ? o || (i ? e : h || r) ? [] : a : g;
                    if (n && n(g, v, s, c), r)
                        for (l = Te(v, p), r(l, [], s, c), u = l.length; u--;)(d = l[u]) && (v[p[u]] = !(g[p[u]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (l = [], u = v.length; u--;)(d = v[u]) && l.push(g[u] = d);
                                o(null, v = [], l, c)
                            }
                            for (u = v.length; u--;)(d = v[u]) && (l = o ? I(i, d) : f[u]) > -1 && (i[l] = !(a[l] = d))
                        }
                    } else v = Te(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, c) : O.apply(a, v)
                }))
            }

            function ke(e) {
                for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], c = a ? 1 : 0, u = xe((function(e) {
                    return e === t
                }), s, !0), d = xe((function(e) {
                    return I(t, e) > -1
                }), s, !0), f = [function(e, n, r) {
                    var o = !a && (r || n !== l) || ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                    return t = null, o
                }]; c < i; c++)
                    if (n = r.relative[e[c].type]) f = [xe(we(f), n)];
                    else {
                        if ((n = r.filter[e[c].type].apply(null, e[c].matches))[x]) {
                            for (o = ++c; o < i && !r.relative[e[o].type]; o++);
                            return Ce(c > 1 && we(f), c > 1 && be(e.slice(0, c - 1).concat({
                                value: " " === e[c - 2].type ? "*" : ""
                            })).replace(F, "$1"), n, c < o && ke(e.slice(c, o)), o < i && ke(e = e.slice(o)), o < i && be(e))
                        }
                        f.push(n)
                    } return we(f)
            }
            return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = se.tokenize = function(e, t) {
                var n, o, i, a, s, c, l, u = S[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (s = e, c = [], l = r.preFilter; s;) {
                    for (a in n && !(o = W.exec(s)) || (o && (s = s.slice(o[0].length) || s), c.push(i = [])), n = !1, (o = U.exec(s)) && (n = o.shift(), i.push({
                        value: n,
                        type: o[0].replace(F, " ")
                    }), s = s.slice(n.length)), r.filter) !(o = G[a].exec(s)) || l[a] && !(o = l[a](o)) || (n = o.shift(), i.push({
                        value: n,
                        type: a,
                        matches: o
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? se.error(e) : S(e, c).slice(0)
            }, s = se.compile = function(e, t) {
                var n, o = [],
                    i = [],
                    s = E[e + " "];
                if (!s) {
                    for (t || (t = a(e)), n = t.length; n--;)(s = ke(t[n]))[x] ? o.push(s) : i.push(s);
                    (s = E(e, function(e, t) {
                        var n = t.length > 0,
                            o = e.length > 0,
                            i = function(i, a, s, c, u) {
                                var d, h, g, v = 0,
                                    y = "0",
                                    b = i && [],
                                    x = [],
                                    w = l,
                                    C = i || o && r.find.TAG("*", u),
                                    k = T += null == w ? 1 : Math.random() || .1,
                                    S = C.length;
                                for (u && (l = a == p || a || u); y !== S && null != (d = C[y]); y++) {
                                    if (o && d) {
                                        for (h = 0, a || d.ownerDocument == p || (f(d), s = !m); g = e[h++];)
                                            if (g(d, a || p, s)) {
                                                c.push(d);
                                                break
                                            } u && (T = k)
                                    }
                                    n && ((d = !g && d) && v--, i && b.push(d))
                                }
                                if (v += y, n && y !== v) {
                                    for (h = 0; g = t[h++];) g(b, x, a, s);
                                    if (i) {
                                        if (v > 0)
                                            for (; y--;) b[y] || x[y] || (x[y] = D.call(c));
                                        x = Te(x)
                                    }
                                    O.apply(c, x), u && !i && x.length > 0 && v + t.length > 1 && se.uniqueSort(c)
                                }
                                return u && (T = k, l = w), b
                            };
                        return n ? le(i) : i
                    }(i, o))).selector = e
                }
                return s
            }, c = se.select = function(e, t, n, o) {
                var i, c, l, u, d, f = "function" == typeof e && e,
                    p = !o && a(e = f.selector || e);
                if (n = n || [], 1 === p.length) {
                    if ((c = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = c[0]).type && 9 === t.nodeType && m && r.relative[c[1].type]) {
                        if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                        f && (t = t.parentNode), e = e.slice(c.shift().value.length)
                    }
                    for (i = G.needsContext.test(e) ? 0 : c.length; i-- && (l = c[i], !r.relative[u = l.type]);)
                        if ((d = r.find[u]) && (o = d(l.matches[0].replace(te, ne), ee.test(c[0].type) && ve(t.parentNode) || t))) {
                            if (c.splice(i, 1), !(e = o.length && be(c))) return O.apply(n, o), n;
                            break
                        }
                }
                return (f || s(e, p))(o, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
            }, n.sortStable = x.split("").sort(j).join("") === x, n.detectDuplicates = !!d, f(), n.sortDetached = ue((function(e) {
                return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
            })), ue((function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            })) || de("type|href|height|width", (function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            })), n.attributes && ue((function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            })) || de("value", (function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            })), ue((function(e) {
                return null == e.getAttribute("disabled")
            })) || de(H, (function(e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            })), se
        }(n);
        C.find = S, C.expr = S.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = S.uniqueSort, C.text = S.getText, C.isXMLDoc = S.isXML, C.contains = S.contains, C.escapeSelector = S.escape;
        var E = function(e, t, n) {
                for (var r = [], o = void 0 !== n;
                     (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && C(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            A = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            j = C.expr.match.needsContext;

        function N(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var _ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function D(e, t, n) {
            return v(t) ? C.grep(e, (function(e, r) {
                return !!t.call(e, r, e) !== n
            })) : t.nodeType ? C.grep(e, (function(e) {
                return e === t !== n
            })) : "string" != typeof t ? C.grep(e, (function(e) {
                return u.call(t, e) > -1 !== n
            })) : C.filter(t, e, n)
        }
        C.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, (function(e) {
                return 1 === e.nodeType
            })))
        }, C.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    o = this;
                if ("string" != typeof e) return this.pushStack(C(e).filter((function() {
                    for (t = 0; t < r; t++)
                        if (C.contains(o[t], this)) return !0
                })));
                for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, o[t], n);
                return r > 1 ? C.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(D(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(D(this, e || [], !0))
            },
            is: function(e) {
                return !!D(this, "string" == typeof e && j.test(e) ? C(e) : e || [], !1).length
            }
        });
        var L, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function(e, t, n) {
            var r, o;
            if (!e) return this;
            if (n = n || L, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), _.test(r[1]) && C.isPlainObject(t))
                        for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (o = b.getElementById(r[2])) && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
        }).prototype = C.fn, L = C(b);
        var q = /^(?:parents|prev(?:Until|All))/,
            I = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function H(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        C.fn.extend({
            has: function(e) {
                var t = C(e, this),
                    n = t.length;
                return this.filter((function() {
                    for (var e = 0; e < n; e++)
                        if (C.contains(this, t[e])) return !0
                }))
            },
            closest: function(e, t) {
                var n, r = 0,
                    o = this.length,
                    i = [],
                    a = "string" != typeof e && C(e);
                if (!j.test(e))
                    for (; r < o; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                i.push(n);
                                break
                            } return this.pushStack(i.length > 1 ? C.uniqueSort(i) : i)
            },
            index: function(e) {
                return e ? "string" == typeof e ? u.call(C(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), C.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return E(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return E(e, "parentNode", n)
            },
            next: function(e) {
                return H(e, "nextSibling")
            },
            prev: function(e) {
                return H(e, "previousSibling")
            },
            nextAll: function(e) {
                return E(e, "nextSibling")
            },
            prevAll: function(e) {
                return E(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return E(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return E(e, "previousSibling", n)
            },
            siblings: function(e) {
                return A((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return A(e.firstChild)
            },
            contents: function(e) {
                return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (N(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
            }
        }, (function(e, t) {
            C.fn[e] = function(n, r) {
                var o = C.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = C.filter(r, o)), this.length > 1 && (I[e] || C.uniqueSort(o), q.test(e) && o.reverse()), this.pushStack(o)
            }
        }));
        var P = /[^\x20\t\r\n\f]+/g;

        function $(e) {
            return e
        }

        function M(e) {
            throw e
        }

        function R(e, t, n, r) {
            var o;
            try {
                e && v(o = e.promise) ? o.call(e).done(t).fail(n) : e && v(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        C.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return C.each(e.match(P) || [], (function(e, n) {
                    t[n] = !0
                })), t
            }(e) : C.extend({}, e);
            var t, n, r, o, i = [],
                a = [],
                s = -1,
                c = function() {
                    for (o = o || e.once, r = t = !0; a.length; s = -1)
                        for (n = a.shift(); ++s < i.length;) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (i = n ? [] : "")
                },
                l = {
                    add: function() {
                        return i && (n && !t && (s = i.length - 1, a.push(n)), function t(n) {
                            C.each(n, (function(n, r) {
                                v(r) ? e.unique && l.has(r) || i.push(r) : r && r.length && "string" !== T(r) && t(r)
                            }))
                        }(arguments), n && !t && c()), this
                    },
                    remove: function() {
                        return C.each(arguments, (function(e, t) {
                            for (var n;
                                 (n = C.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= s && s--
                        })), this
                    },
                    has: function(e) {
                        return e ? C.inArray(e, i) > -1 : i.length > 0
                    },
                    empty: function() {
                        return i && (i = []), this
                    },
                    disable: function() {
                        return o = a = [], i = n = "", this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return o = a = [], n || t || (i = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(e, n) {
                        return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || c()), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return l
        }, C.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                        ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    o = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return o.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return C.Deferred((function(n) {
                                C.each(t, (function(t, r) {
                                    var o = v(e[r[4]]) && e[r[4]];
                                    i[r[1]]((function() {
                                        var e = o && o.apply(this, arguments);
                                        e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments)
                                    }))
                                })), e = null
                            })).promise()
                        },
                        then: function(e, r, o) {
                            var i = 0;

                            function a(e, t, r, o) {
                                return function() {
                                    var s = this,
                                        c = arguments,
                                        l = function() {
                                            var n, l;
                                            if (!(e < i)) {
                                                if ((n = r.apply(s, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                l = n && ("object" == typeof n || "function" == typeof n) && n.then, v(l) ? o ? l.call(n, a(i, t, $, o), a(i, t, M, o)) : (i++, l.call(n, a(i, t, $, o), a(i, t, M, o), a(i, t, $, t.notifyWith))) : (r !== $ && (s = void 0, c = [n]), (o || t.resolveWith)(s, c))
                                            }
                                        },
                                        u = o ? l : function() {
                                            try {
                                                l()
                                            } catch (n) {
                                                C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= i && (r !== M && (s = void 0, c = [n]), t.rejectWith(s, c))
                                            }
                                        };
                                    e ? u() : (C.Deferred.getStackHook && (u.stackTrace = C.Deferred.getStackHook()), n.setTimeout(u))
                                }
                            }
                            return C.Deferred((function(n) {
                                t[0][3].add(a(0, n, v(o) ? o : $, n.notifyWith)), t[1][3].add(a(0, n, v(e) ? e : $)), t[2][3].add(a(0, n, v(r) ? r : M))
                            })).promise()
                        },
                        promise: function(e) {
                            return null != e ? C.extend(e, o) : o
                        }
                    },
                    i = {};
                return C.each(t, (function(e, n) {
                    var a = n[2],
                        s = n[5];
                    o[n[1]] = a.add, s && a.add((function() {
                        r = s
                    }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), i[n[0]] = function() {
                        return i[n[0] + "With"](this === i ? void 0 : this, arguments), this
                    }, i[n[0] + "With"] = a.fireWith
                })), o.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    o = s.call(arguments),
                    i = C.Deferred(),
                    a = function(e) {
                        return function(n) {
                            r[e] = this, o[e] = arguments.length > 1 ? s.call(arguments) : n, --t || i.resolveWith(r, o)
                        }
                    };
                if (t <= 1 && (R(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || v(o[n] && o[n].then))) return i.then();
                for (; n--;) R(o[n], a(n), i.reject);
                return i.promise()
            }
        });
        var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && B.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, C.readyException = function(e) {
            n.setTimeout((function() {
                throw e
            }))
        };
        var F = C.Deferred();

        function W() {
            b.removeEventListener("DOMContentLoaded", W), n.removeEventListener("load", W), C.ready()
        }
        C.fn.ready = function(e) {
            return F.then(e).catch((function(e) {
                C.readyException(e)
            })), this
        }, C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || F.resolveWith(b, [C]))
            }
        }), C.ready.then = F.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(C.ready) : (b.addEventListener("DOMContentLoaded", W), n.addEventListener("load", W));
        var U = function(e, t, n, r, o, i, a) {
                var s = 0,
                    c = e.length,
                    l = null == n;
                if ("object" === T(n))
                    for (s in o = !0, n) U(e, t, s, n[s], !0, i, a);
                else if (void 0 !== r && (o = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(C(e), n)
                })), t))
                    for (; s < c; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return o ? e : l ? t.call(e) : c ? t(e[0], n) : i
            },
            z = /^-ms-/,
            V = /-([a-z])/g;

        function X(e, t) {
            return t.toUpperCase()
        }

        function G(e) {
            return e.replace(z, "ms-").replace(V, X)
        }
        var J = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function Y() {
            this.expando = C.expando + Y.uid++
        }
        Y.uid = 1, Y.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, J(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, o = this.cache(e);
                if ("string" == typeof t) o[G(t)] = n;
                else
                    for (r in t) o[G(r)] = t[r];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(P) || []).length;
                        for (; n--;) delete r[t[n]]
                    }(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t)
            }
        };
        var K = new Y,
            Q = new Y,
            Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ee = /[A-Z]/g;

        function te(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    Q.set(e, t, n)
                } else n = void 0;
            return n
        }
        C.extend({
            hasData: function(e) {
                return Q.hasData(e) || K.hasData(e)
            },
            data: function(e, t, n) {
                return Q.access(e, t, n)
            },
            removeData: function(e, t) {
                Q.remove(e, t)
            },
            _data: function(e, t, n) {
                return K.access(e, t, n)
            },
            _removeData: function(e, t) {
                K.remove(e, t)
            }
        }), C.fn.extend({
            data: function(e, t) {
                var n, r, o, i = this[0],
                    a = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && (o = Q.get(i), 1 === i.nodeType && !K.get(i, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), te(i, r, o[r]));
                        K.set(i, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each((function() {
                    Q.set(this, e)
                })) : U(this, (function(t) {
                    var n;
                    if (i && void 0 === t) return void 0 !== (n = Q.get(i, e)) || void 0 !== (n = te(i, e)) ? n : void 0;
                    this.each((function() {
                        Q.set(this, e, t)
                    }))
                }), null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each((function() {
                    Q.remove(this, e)
                }))
            }
        }), C.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = K.get(e, t), n && (!r || Array.isArray(n) ? r = K.access(e, t, C.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                    r = n.length,
                    o = n.shift(),
                    i = C._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, (function() {
                    C.dequeue(e, t)
                }), i)), !r && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return K.get(e, n) || K.access(e, n, {
                    empty: C.Callbacks("once memory").add((function() {
                        K.remove(e, [t + "queue", n])
                    }))
                })
            }
        }), C.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                    var n = C.queue(this, e, t);
                    C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                }))
            },
            dequeue: function(e) {
                return this.each((function() {
                    C.dequeue(this, e)
                }))
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    o = C.Deferred(),
                    i = this,
                    a = this.length,
                    s = function() {
                        --r || o.resolveWith(i, [i])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = K.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), o.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
            oe = ["Top", "Right", "Bottom", "Left"],
            ie = b.documentElement,
            ae = function(e) {
                return C.contains(e.ownerDocument, e)
            },
            se = {
                composed: !0
            };
        ie.getRootNode && (ae = function(e) {
            return C.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
        });
        var ce = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === C.css(e, "display")
        };

        function le(e, t, n, r) {
            var o, i, a = 20,
                s = r ? function() {
                    return r.cur()
                } : function() {
                    return C.css(e, t, "")
                },
                c = s(),
                l = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                u = e.nodeType && (C.cssNumber[t] || "px" !== l && +c) && re.exec(C.css(e, t));
            if (u && u[3] !== l) {
                for (c /= 2, l = l || u[3], u = +c || 1; a--;) C.style(e, t, u + l), (1 - i) * (1 - (i = s() / c || .5)) <= 0 && (a = 0), u /= i;
                u *= 2, C.style(e, t, u + l), n = n || []
            }
            return n && (u = +u || +c || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = u, r.end = o)), o
        }
        var ue = {};

        function de(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                o = ue[r];
            return o || (t = n.body.appendChild(n.createElement(r)), o = C.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), ue[r] = o, o)
        }

        function fe(e, t) {
            for (var n, r, o = [], i = 0, a = e.length; i < a; i++)(r = e[i]).style && (n = r.style.display, t ? ("none" === n && (o[i] = K.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && ce(r) && (o[i] = de(r))) : "none" !== n && (o[i] = "none", K.set(r, "display", n)));
            for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
            return e
        }
        C.fn.extend({
            show: function() {
                return fe(this, !0)
            },
            hide: function() {
                return fe(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                    ce(this) ? C(this).show() : C(this).hide()
                }))
            }
        });
        var pe, he, me = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ve = /^$|^module$|\/(?:java|ecma)script/i;
        pe = b.createDocumentFragment().appendChild(b.createElement("div")), (he = b.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), pe.appendChild(he), g.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked, pe.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue, pe.innerHTML = "<option></option>", g.option = !!pe.lastChild;
        var ye = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function be(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? C.merge([e], n) : n
        }

        function xe(e, t) {
            for (var n = 0, r = e.length; n < r; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
        }
        ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, g.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
        var we = /<|&#?\w+;/;

        function Te(e, t, n, r, o) {
            for (var i, a, s, c, l, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                if ((i = e[p]) || 0 === i)
                    if ("object" === T(i)) C.merge(f, i.nodeType ? [i] : i);
                    else if (we.test(i)) {
                        for (a = a || d.appendChild(t.createElement("div")), s = (ge.exec(i) || ["", ""])[1].toLowerCase(), c = ye[s] || ye._default, a.innerHTML = c[1] + C.htmlPrefilter(i) + c[2], u = c[0]; u--;) a = a.lastChild;
                        C.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
                    } else f.push(t.createTextNode(i));
            for (d.textContent = "", p = 0; i = f[p++];)
                if (r && C.inArray(i, r) > -1) o && o.push(i);
                else if (l = ae(i), a = be(d.appendChild(i), "script"), l && xe(a), n)
                    for (u = 0; i = a[u++];) ve.test(i.type || "") && n.push(i);
            return d
        }
        var Ce = /^key/,
            ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Se = /^([^.]*)(?:\.(.+)|)/;

        function Ee() {
            return !0
        }

        function Ae() {
            return !1
        }

        function je(e, t) {
            return e === function() {
                try {
                    return b.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function Ne(e, t, n, r, o, i) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ne(e, s, n, r, t[s], i);
                return e
            }
            if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Ae;
            else if (!o) return e;
            return 1 === i && (a = o, (o = function(e) {
                return C().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = C.guid++)), e.each((function() {
                C.event.add(this, t, o, r, n)
            }))
        }

        function _e(e, t, n) {
            n ? (K.set(e, t, !1), C.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var r, o, i = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (i.length)(C.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (i = s.call(arguments), K.set(this, t, i), r = n(this, t), this[t](), i !== (o = K.get(this, t)) || r ? K.set(this, t, !1) : o = {}, i !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
                    } else i.length && (K.set(this, t, {
                        value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })) : void 0 === K.get(e, t) && C.event.add(e, t, Ee)
        }
        C.event = {
            global: {},
            add: function(e, t, n, r, o) {
                var i, a, s, c, l, u, d, f, p, h, m, g = K.get(e);
                if (J(e))
                    for (n.handler && (n = (i = n).handler, o = i.selector), o && C.find.matchesSelector(ie, o), n.guid || (n.guid = C.guid++), (c = g.events) || (c = g.events = Object.create(null)), (a = g.handle) || (a = g.handle = function(t) {
                        return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(P) || [""]).length; l--;) p = m = (s = Se.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (d = C.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = C.event.special[p] || {}, u = C.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && C.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, i), (f = c[p]) || ((f = c[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), C.event.global[p] = !0)
            },
            remove: function(e, t, n, r, o) {
                var i, a, s, c, l, u, d, f, p, h, m, g = K.hasData(e) && K.get(e);
                if (g && (c = g.events)) {
                    for (l = (t = (t || "").match(P) || [""]).length; l--;)
                        if (p = m = (s = Se.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                            for (d = C.event.special[p] || {}, f = c[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = f.length; i--;) u = f[i], !o && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (f.splice(i, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                            a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || C.removeEvent(e, p, g.handle), delete c[p])
                        } else
                            for (p in c) C.event.remove(e, p + t[l], n, r, !0);
                    C.isEmptyObject(c) && K.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, o, i, a, s = new Array(arguments.length),
                    c = C.event.fix(e),
                    l = (K.get(this, "events") || Object.create(null))[c.type] || [],
                    u = C.event.special[c.type] || {};
                for (s[0] = c, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                if (c.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, c)) {
                    for (a = C.event.handlers.call(this, c, l), t = 0;
                         (o = a[t++]) && !c.isPropagationStopped();)
                        for (c.currentTarget = o.elem, n = 0;
                             (i = o.handlers[n++]) && !c.isImmediatePropagationStopped();) c.rnamespace && !1 !== i.namespace && !c.rnamespace.test(i.namespace) || (c.handleObj = i, c.data = i.data, void 0 !== (r = ((C.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (c.result = r) && (c.preventDefault(), c.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, c), c.result
                }
            },
            handlers: function(e, t) {
                var n, r, o, i, a, s = [],
                    c = t.delegateCount,
                    l = e.target;
                if (c && l.nodeType && !("click" === e.type && e.button >= 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                            for (i = [], a = {}, n = 0; n < c; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? C(o, this).index(l) > -1 : C.find(o, this, null, [l]).length), a[o] && i.push(r);
                            i.length && s.push({
                                elem: l,
                                handlers: i
                            })
                        } return l = this, c < t.length && s.push({
                    elem: l,
                    handlers: t.slice(c)
                }), s
            },
            addProp: function(e, t) {
                Object.defineProperty(C.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: v(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[C.expando] ? e : new C.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && N(t, "input") && _e(t, "click", Ee), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && N(t, "input") && _e(t, "click"), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return me.test(t.type) && t.click && N(t, "input") && K.get(t, "click") || N(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, C.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, C.Event = function(e, t) {
            if (!(this instanceof C.Event)) return new C.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ae, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
        }, C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: Ae,
            isPropagationStopped: Ae,
            isImmediatePropagationStopped: Ae,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, C.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, C.event.addProp), C.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            C.event.special[e] = {
                setup: function() {
                    return _e(this, e, je), !1
                },
                trigger: function() {
                    return _e(this, e), !0
                },
                delegateType: t
            }
        })), C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(e, t) {
            C.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        o = e.relatedTarget,
                        i = e.handleObj;
                    return o && (o === r || C.contains(r, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                }
            }
        })), C.fn.extend({
            on: function(e, t, n, r) {
                return Ne(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return Ne(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ae), this.each((function() {
                    C.event.remove(this, e, n, t)
                }))
            }
        });
        var De = /<script|<style|<link/i,
            Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function qe(e, t) {
            return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
        }

        function Ie(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function He(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Pe(e, t) {
            var n, r, o, i, a, s;
            if (1 === t.nodeType) {
                if (K.hasData(e) && (s = K.get(e).events))
                    for (o in K.remove(t, "handle events"), s)
                        for (n = 0, r = s[o].length; n < r; n++) C.event.add(t, o, s[o][n]);
                Q.hasData(e) && (i = Q.access(e), a = C.extend({}, i), Q.set(t, a))
            }
        }

        function $e(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function Me(e, t, n, r) {
            t = c(t);
            var o, i, a, s, l, u, d = 0,
                f = e.length,
                p = f - 1,
                h = t[0],
                m = v(h);
            if (m || f > 1 && "string" == typeof h && !g.checkClone && Le.test(h)) return e.each((function(o) {
                var i = e.eq(o);
                m && (t[0] = h.call(this, o, i.html())), Me(i, t, n, r)
            }));
            if (f && (i = (o = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
                for (s = (a = C.map(be(o, "script"), Ie)).length; d < f; d++) l = o, d !== p && (l = C.clone(l, !0, !0), s && C.merge(a, be(l, "script"))), n.call(e[d], l, d);
                if (s)
                    for (u = a[a.length - 1].ownerDocument, C.map(a, He), d = 0; d < s; d++) l = a[d], ve.test(l.type || "") && !K.access(l, "globalEval") && C.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, u) : w(l.textContent.replace(Oe, ""), l, u))
            }
            return e
        }

        function Re(e, t, n) {
            for (var r, o = t ? C.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || C.cleanData(be(r)), r.parentNode && (n && ae(r) && xe(be(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        C.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var r, o, i, a, s = e.cloneNode(!0),
                    c = ae(e);
                if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                    for (a = be(s), r = 0, o = (i = be(e)).length; r < o; r++) $e(i[r], a[r]);
                if (t)
                    if (n)
                        for (i = i || be(e), a = a || be(s), r = 0, o = i.length; r < o; r++) Pe(i[r], a[r]);
                    else Pe(e, s);
                return (a = be(s, "script")).length > 0 && xe(a, !c && be(e, "script")), s
            },
            cleanData: function(e) {
                for (var t, n, r, o = C.event.special, i = 0; void 0 !== (n = e[i]); i++)
                    if (J(n)) {
                        if (t = n[K.expando]) {
                            if (t.events)
                                for (r in t.events) o[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                            n[K.expando] = void 0
                        }
                        n[Q.expando] && (n[Q.expando] = void 0)
                    }
            }
        }), C.fn.extend({
            detach: function(e) {
                return Re(this, e, !0)
            },
            remove: function(e) {
                return Re(this, e)
            },
            text: function(e) {
                return U(this, (function(e) {
                    return void 0 === e ? C.text(this) : this.empty().each((function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    }))
                }), null, e, arguments.length)
            },
            append: function() {
                return Me(this, arguments, (function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
                }))
            },
            prepend: function() {
                return Me(this, arguments, (function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = qe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                }))
            },
            before: function() {
                return Me(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                }))
            },
            after: function() {
                return Me(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                }))
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(be(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map((function() {
                    return C.clone(this, e, t)
                }))
            },
            html: function(e) {
                return U(this, (function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !De.test(e) && !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(be(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }), null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return Me(this, arguments, (function(t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 && (C.cleanData(be(this)), n && n.replaceChild(t, this))
                }), e)
            }
        }), C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(e, t) {
            C.fn[e] = function(e) {
                for (var n, r = [], o = C(e), i = o.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), C(o[a])[t](n), l.apply(r, n.get());
                return this.pushStack(r)
            }
        }));
        var Be = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
            Fe = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            We = function(e, t, n) {
                var r, o, i = {};
                for (o in t) i[o] = e.style[o], e.style[o] = t[o];
                for (o in r = n.call(e), t) e.style[o] = i[o];
                return r
            },
            Ue = new RegExp(oe.join("|"), "i");

        function ze(e, t, n) {
            var r, o, i, a, s = e.style;
            return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ae(e) || (a = C.style(e, t)), !g.pixelBoxStyles() && Be.test(a) && Ue.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
        }

        function Ve(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (u) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(l).appendChild(u);
                    var e = n.getComputedStyle(u);
                    r = "1%" !== e.top, c = 12 === t(e.marginLeft), u.style.right = "60%", a = 36 === t(e.right), o = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(l), u = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var r, o, i, a, s, c, l = b.createElement("div"),
                u = b.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === u.style.backgroundClip, C.extend(g, {
                boxSizingReliable: function() {
                    return e(), o
                },
                pixelBoxStyles: function() {
                    return e(), a
                },
                pixelPosition: function() {
                    return e(), r
                },
                reliableMarginLeft: function() {
                    return e(), c
                },
                scrollboxSize: function() {
                    return e(), i
                },
                reliableTrDimensions: function() {
                    var e, t, r, o;
                    return null == s && (e = b.createElement("table"), t = b.createElement("tr"), r = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", r.style.height = "9px", ie.appendChild(e).appendChild(t).appendChild(r), o = n.getComputedStyle(t), s = parseInt(o.height) > 3, ie.removeChild(e)), s
                }
            }))
        }();
        var Xe = ["Webkit", "Moz", "ms"],
            Ge = b.createElement("div").style,
            Je = {};

        function Ye(e) {
            var t = C.cssProps[e] || Je[e];
            return t || (e in Ge ? e : Je[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                    if ((e = Xe[n] + t) in Ge) return e
            }(e) || e)
        }
        var Ke = /^(none|table(?!-c[ea]).+)/,
            Qe = /^--/,
            Ze = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            et = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function tt(e, t, n) {
            var r = re.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function nt(e, t, n, r, o, i) {
            var a = "width" === t ? 1 : 0,
                s = 0,
                c = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (c += C.css(e, n + oe[a], !0, o)), r ? ("content" === n && (c -= C.css(e, "padding" + oe[a], !0, o)), "margin" !== n && (c -= C.css(e, "border" + oe[a] + "Width", !0, o))) : (c += C.css(e, "padding" + oe[a], !0, o), "padding" !== n ? c += C.css(e, "border" + oe[a] + "Width", !0, o) : s += C.css(e, "border" + oe[a] + "Width", !0, o));
            return !r && i >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - c - s - .5)) || 0), c
        }

        function rt(e, t, n) {
            var r = Fe(e),
                o = (!g.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                i = o,
                a = ze(e, t, r),
                s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Be.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return (!g.boxSizingReliable() && o || !g.reliableTrDimensions() && N(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, r), (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + nt(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
        }

        function ot(e, t, n, r, o) {
            return new ot.prototype.init(e, t, n, r, o)
        }
        C.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = ze(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, i, a, s = G(t),
                        c = Qe.test(t),
                        l = e.style;
                    if (c || (t = Ye(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                    "string" === (i = typeof n) && (o = re.exec(n)) && o[1] && (n = le(e, t, o), i = "number"), null != n && n == n && ("number" !== i || c || (n += o && o[3] || (C.cssNumber[s] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (c ? l.setProperty(t, n) : l[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var o, i, a, s = G(t);
                return Qe.test(t) || (t = Ye(s)), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = ze(e, t, r)), "normal" === o && t in et && (o = et[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
            }
        }), C.each(["height", "width"], (function(e, t) {
            C.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return !Ke.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, t, r) : We(e, Ze, (function() {
                        return rt(e, t, r)
                    }))
                },
                set: function(e, n, r) {
                    var o, i = Fe(e),
                        a = !g.scrollboxSize() && "absolute" === i.position,
                        s = (a || r) && "border-box" === C.css(e, "boxSizing", !1, i),
                        c = r ? nt(e, t, r, s, i) : 0;
                    return s && a && (c -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - nt(e, t, "border", !1, i) - .5)), c && (o = re.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = C.css(e, t)), tt(0, n, c)
                }
            }
        })), C.cssHooks.marginLeft = Ve(g.reliableMarginLeft, (function(e, t) {
            if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left
            }))) + "px"
        })), C.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(e, t) {
            C.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + oe[r] + t] = i[r] || i[r - 2] || i[0];
                    return o
                }
            }, "margin" !== e && (C.cssHooks[e + t].set = tt)
        })), C.fn.extend({
            css: function(e, t) {
                return U(this, (function(e, t, n) {
                    var r, o, i = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (r = Fe(e), o = t.length; a < o; a++) i[t[a]] = C.css(e, t[a], !1, r);
                        return i
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                }), e, t, arguments.length > 1)
            }
        }), C.Tween = ot, ot.prototype = {
            constructor: ot,
            init: function(e, t, n, r, o, i) {
                this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (C.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = ot.propHooks[this.prop];
                return e && e.get ? e.get(this) : ot.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = ot.propHooks[this.prop];
                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this
            }
        }, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, C.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, C.fx = ot.prototype.init, C.fx.step = {};
        var it, at, st = /^(?:toggle|show|hide)$/,
            ct = /queueHooks$/;

        function lt() {
            at && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(lt) : n.setTimeout(lt, C.fx.interval), C.fx.tick())
        }

        function ut() {
            return n.setTimeout((function() {
                it = void 0
            })), it = Date.now()
        }

        function dt(e, t) {
            var n, r = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = oe[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function ft(e, t, n) {
            for (var r, o = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), i = 0, a = o.length; i < a; i++)
                if (r = o[i].call(n, t, e)) return r
        }

        function pt(e, t, n) {
            var r, o, i = 0,
                a = pt.prefilters.length,
                s = C.Deferred().always((function() {
                    delete c.elem
                })),
                c = function() {
                    if (o) return !1;
                    for (var t = it || ut(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, a = l.tweens.length; i < a; i++) l.tweens[i].run(r);
                    return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                },
                l = s.promise({
                    elem: e,
                    props: C.extend({}, t),
                    opts: C.extend(!0, {
                        specialEasing: {},
                        easing: C.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: it || ut(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = C.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? l.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < r; n++) l.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                    }
                }),
                u = l.props;
            for (! function(e, t) {
                var n, r, o, i, a;
                for (n in e)
                    if (o = t[r = G(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = C.cssHooks[r]) && "expand" in a)
                        for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
                    else t[r] = o
            }(u, l.opts.specialEasing); i < a; i++)
                if (r = pt.prefilters[i].call(l, e, u, l.opts)) return v(r.stop) && (C._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
            return C.map(u, ft, l), v(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), C.fx.timer(C.extend(c, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l
        }
        C.Animation = C.extend(pt, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return le(n.elem, e, re.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                v(e) ? (t = e, e = ["*"]) : e = e.match(P);
                for (var n, r = 0, o = e.length; r < o; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, o, i, a, s, c, l, u, d = "width" in t || "height" in t,
                    f = this,
                    p = {},
                    h = e.style,
                    m = e.nodeType && ce(e),
                    g = K.get(e, "fxshow");
                for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, f.always((function() {
                    f.always((function() {
                        a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
                    }))
                }))), t)
                    if (o = t[r], st.test(o)) {
                        if (delete t[r], i = i || "toggle" === o, o === (m ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[r]) continue;
                            m = !0
                        }
                        p[r] = g && g[r] || C.style(e, r)
                    } if ((c = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                    for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = g && g.display) && (l = K.get(e, "display")), "none" === (u = C.css(e, "display")) && (l ? u = l : (fe([e], !0), l = e.style.display || l, u = C.css(e, "display"), fe([e]))), ("inline" === u || "inline-block" === u && null != l) && "none" === C.css(e, "float") && (c || (f.done((function() {
                        h.display = l
                    })), null == l && (u = h.display, l = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always((function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    }))), c = !1, p) c || (g ? "hidden" in g && (m = g.hidden) : g = K.access(e, "fxshow", {
                        display: l
                    }), i && (g.hidden = !m), m && fe([e], !0), f.done((function() {
                        for (r in m || fe([e]), K.remove(e, "fxshow"), p) C.style(e, r, p[r])
                    }))), c = ft(m ? g[r] : 0, r, f), r in g || (g[r] = c.start, m && (c.end = c.start, c.start = 0))
            }],
            prefilter: function(e, t) {
                t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
            }
        }), C.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? C.extend({}, e) : {
                complete: n || !n && t || v(e) && e,
                duration: e,
                easing: n && t || t && !v(t) && t
            };
            return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                v(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
            }, r
        }, C.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ce).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var o = C.isEmptyObject(e),
                    i = C.speed(t, n, r),
                    a = function() {
                        var t = pt(this, C.extend({}, e), i);
                        (o || K.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        i = C.timers,
                        a = K.get(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && ct.test(o) && r(a[o]);
                    for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                    !t && n || C.dequeue(this, e)
                }))
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each((function() {
                    var t, n = K.get(this),
                        r = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        i = C.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, C.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                }))
            }
        }), C.each(["toggle", "show", "hide"], (function(e, t) {
            var n = C.fn[t];
            C.fn[t] = function(e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, r, o)
            }
        })), C.each({
            slideDown: dt("show"),
            slideUp: dt("hide"),
            slideToggle: dt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(e, t) {
            C.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        })), C.timers = [], C.fx.tick = function() {
            var e, t = 0,
                n = C.timers;
            for (it = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || C.fx.stop(), it = void 0
        }, C.fx.timer = function(e) {
            C.timers.push(e), C.fx.start()
        }, C.fx.interval = 13, C.fx.start = function() {
            at || (at = !0, lt())
        }, C.fx.stop = function() {
            at = null
        }, C.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, C.fn.delay = function(e, t) {
            return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, r) {
                var o = n.setTimeout(t, e);
                r.stop = function() {
                    n.clearTimeout(o)
                }
            }))
        },
            function() {
                var e = b.createElement("input"),
                    t = b.createElement("select").appendChild(b.createElement("option"));
                e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value
            }();
        var ht, mt = C.expr.attrHandle;
        C.fn.extend({
            attr: function(e, t) {
                return U(this, C.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each((function() {
                    C.removeAttr(this, e)
                }))
            }
        }), C.extend({
            attr: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === i && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!g.radioValue && "radio" === t && N(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    o = t && t.match(P);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) e.removeAttribute(n)
            }
        }), ht = {
            set: function(e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, C.each(C.expr.match.bool.source.match(/\w+/g), (function(e, t) {
            var n = mt[t] || C.find.attr;
            mt[t] = function(e, t, r) {
                var o, i, a = t.toLowerCase();
                return r || (i = mt[a], mt[a] = o, o = null != n(e, t, r) ? a : null, mt[a] = i), o
            }
        }));
        var gt = /^(?:input|select|textarea|button)$/i,
            vt = /^(?:a|area)$/i;

        function yt(e) {
            return (e.match(P) || []).join(" ")
        }

        function bt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function xt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
        }
        C.fn.extend({
            prop: function(e, t) {
                return U(this, C.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each((function() {
                    delete this[C.propFix[e] || e]
                }))
            }
        }), C.extend({
            prop: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return 1 === i && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), g.optSelected || (C.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
            C.propFix[this.toLowerCase()] = this
        })), C.fn.extend({
            addClass: function(e) {
                var t, n, r, o, i, a, s, c = 0;
                if (v(e)) return this.each((function(t) {
                    C(this).addClass(e.call(this, t, bt(this)))
                }));
                if ((t = xt(e)).length)
                    for (; n = this[c++];)
                        if (o = bt(n), r = 1 === n.nodeType && " " + yt(o) + " ") {
                            for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            o !== (s = yt(r)) && n.setAttribute("class", s)
                        } return this
            },
            removeClass: function(e) {
                var t, n, r, o, i, a, s, c = 0;
                if (v(e)) return this.each((function(t) {
                    C(this).removeClass(e.call(this, t, bt(this)))
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((t = xt(e)).length)
                    for (; n = this[c++];)
                        if (o = bt(n), r = 1 === n.nodeType && " " + yt(o) + " ") {
                            for (a = 0; i = t[a++];)
                                for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                            o !== (s = yt(r)) && n.setAttribute("class", s)
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function(n) {
                    C(this).toggleClass(e.call(this, n, bt(this), t), t)
                })) : this.each((function() {
                    var t, o, i, a;
                    if (r)
                        for (o = 0, i = C(this), a = xt(e); t = a[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = bt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var wt = /\r/g;
        C.fn.extend({
            val: function(e) {
                var t, n, r, o = this[0];
                return arguments.length ? (r = v(e), this.each((function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = r ? e.call(this, n, C(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = C.map(o, (function(e) {
                        return null == e ? "" : e + ""
                    }))), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                }))) : o ? (t = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
            }
        }), C.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : yt(C.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, o = e.options,
                            i = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            c = a ? i + 1 : o.length;
                        for (r = i < 0 ? c : a ? i : 0; r < c; r++)
                            if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                if (t = C(n).val(), a) return t;
                                s.push(t)
                            } return s
                    },
                    set: function(e, t) {
                        for (var n, r, o = e.options, i = C.makeArray(t), a = o.length; a--;)((r = o[a]).selected = C.inArray(C.valHooks.option.get(r), i) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), C.each(["radio", "checkbox"], (function() {
            C.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1
                }
            }, g.checkOn || (C.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        })), g.focusin = "onfocusin" in n;
        var Tt = /^(?:focusinfocus|focusoutblur)$/,
            Ct = function(e) {
                e.stopPropagation()
            };
        C.extend(C.event, {
            trigger: function(e, t, r, o) {
                var i, a, s, c, l, u, d, f, h = [r || b],
                    m = p.call(e, "type") ? e.type : e,
                    g = p.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = f = s = r = r || b, 3 !== r.nodeType && 8 !== r.nodeType && !Tt.test(m + C.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."), m = g.shift(), g.sort()), l = m.indexOf(":") < 0 && "on" + m, (e = e[C.expando] ? e : new C.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : C.makeArray(t, [e]), d = C.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, t))) {
                    if (!o && !d.noBubble && !y(r)) {
                        for (c = d.delegateType || m, Tt.test(c + m) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                        s === (r.ownerDocument || b) && h.push(s.defaultView || s.parentWindow || n)
                    }
                    for (i = 0;
                         (a = h[i++]) && !e.isPropagationStopped();) f = a, e.type = i > 1 ? c : d.bindType || m, (u = (K.get(a, "events") || Object.create(null))[e.type] && K.get(a, "handle")) && u.apply(a, t), (u = l && a[l]) && u.apply && J(a) && (e.result = u.apply(a, t), !1 === e.result && e.preventDefault());
                    return e.type = m, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), t) || !J(r) || l && v(r[m]) && !y(r) && ((s = r[l]) && (r[l] = null), C.event.triggered = m, e.isPropagationStopped() && f.addEventListener(m, Ct), r[m](), e.isPropagationStopped() && f.removeEventListener(m, Ct), C.event.triggered = void 0, s && (r[l] = s)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = C.extend(new C.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                C.event.trigger(r, null, t)
            }
        }), C.fn.extend({
            trigger: function(e, t) {
                return this.each((function() {
                    C.event.trigger(e, t, this)
                }))
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0)
            }
        }), g.focusin || C.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            var n = function(e) {
                C.event.simulate(t, e.target, C.event.fix(e))
            };
            C.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this.document || this,
                        o = K.access(r, t);
                    o || r.addEventListener(e, n, !0), K.access(r, t, (o || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this.document || this,
                        o = K.access(r, t) - 1;
                    o ? K.access(r, t, o) : (r.removeEventListener(e, n, !0), K.remove(r, t))
                }
            }
        }));
        var kt = n.location,
            St = {
                guid: Date.now()
            },
            Et = /\?/;
        C.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
        };
        var At = /\[\]$/,
            jt = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            _t = /^(?:input|select|textarea|keygen)/i;

        function Dt(e, t, n, r) {
            var o;
            if (Array.isArray(t)) C.each(t, (function(t, o) {
                n || At.test(e) ? r(e, o) : Dt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
            }));
            else if (n || "object" !== T(t)) r(e, t);
            else
                for (o in t) Dt(e + "[" + o + "]", t[o], n, r)
        }
        C.param = function(e, t) {
            var n, r = [],
                o = function(e, t) {
                    var n = v(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, (function() {
                o(this.name, this.value)
            }));
            else
                for (n in e) Dt(n, e[n], t, o);
            return r.join("&")
        }, C.fn.extend({
            serialize: function() {
                return C.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map((function() {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this
                })).filter((function() {
                    var e = this.type;
                    return this.name && !C(this).is(":disabled") && _t.test(this.nodeName) && !Nt.test(e) && (this.checked || !me.test(e))
                })).map((function(e, t) {
                    var n = C(this).val();
                    return null == n ? null : Array.isArray(n) ? C.map(n, (function(e) {
                        return {
                            name: t.name,
                            value: e.replace(jt, "\r\n")
                        }
                    })) : {
                        name: t.name,
                        value: n.replace(jt, "\r\n")
                    }
                })).get()
            }
        });
        var Lt = /%20/g,
            Ot = /#.*$/,
            qt = /([?&])_=[^&]*/,
            It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ht = /^(?:GET|HEAD)$/,
            Pt = /^\/\//,
            $t = {},
            Mt = {},
            Rt = "*/".concat("*"),
            Bt = b.createElement("a");

        function Ft(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, o = 0,
                    i = t.toLowerCase().match(P) || [];
                if (v(n))
                    for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function Wt(e, t, n, r) {
            var o = {},
                i = e === Mt;

            function a(s) {
                var c;
                return o[s] = !0, C.each(e[s] || [], (function(e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || i || o[l] ? i ? !(c = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                })), c
            }
            return a(t.dataTypes[0]) || !o["*"] && a("*")
        }

        function Ut(e, t) {
            var n, r, o = C.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && C.extend(!0, e, r), e
        }
        Bt.href = kt.href, C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: kt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Rt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": C.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Ut(Ut(e, C.ajaxSettings), t) : Ut(C.ajaxSettings, e)
            },
            ajaxPrefilter: Ft($t),
            ajaxTransport: Ft(Mt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, o, i, a, s, c, l, u, d, f, p = C.ajaxSetup({}, t),
                    h = p.context || p,
                    m = p.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                    g = C.Deferred(),
                    v = C.Callbacks("once memory"),
                    y = p.statusCode || {},
                    x = {},
                    w = {},
                    T = "canceled",
                    k = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (l) {
                                if (!a)
                                    for (a = {}; t = It.exec(i);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = a[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return l ? i : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == l && (p.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (l) k.always(e[k.status]);
                                else
                                    for (t in e) y[t] = [y[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || T;
                            return r && r.abort(t), S(0, t), this
                        }
                    };
                if (g.promise(k), p.url = ((e || p.url || kt.href) + "").replace(Pt, kt.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(P) || [""], null == p.crossDomain) {
                    c = b.createElement("a");
                    try {
                        c.href = p.url, c.href = c.href, p.crossDomain = Bt.protocol + "//" + Bt.host != c.protocol + "//" + c.host
                    } catch (e) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)), Wt($t, p, t, k), l) return k;
                for (d in (u = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ht.test(p.type), o = p.url.replace(Ot, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Lt, "+")) : (f = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (Et.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(qt, "$1"), f = (Et.test(o) ? "&" : "?") + "_=" + St.guid++ + f), p.url = o + f), p.ifModified && (C.lastModified[o] && k.setRequestHeader("If-Modified-Since", C.lastModified[o]), C.etag[o] && k.setRequestHeader("If-None-Match", C.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : p.accepts["*"]), p.headers) k.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, k, p) || l)) return k.abort();
                if (T = "abort", v.add(p.complete), k.done(p.success), k.fail(p.error), r = Wt(Mt, p, t, k)) {
                    if (k.readyState = 1, u && m.trigger("ajaxSend", [k, p]), l) return k;
                    p.async && p.timeout > 0 && (s = n.setTimeout((function() {
                        k.abort("timeout")
                    }), p.timeout));
                    try {
                        l = !1, r.send(x, S)
                    } catch (e) {
                        if (l) throw e;
                        S(-1, e)
                    }
                } else S(-1, "No Transport");

                function S(e, t, a, c) {
                    var d, f, b, x, w, T = t;
                    l || (l = !0, s && n.clearTimeout(s), r = void 0, i = c || "", k.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, a && (x = function(e, t, n) {
                        for (var r, o, i, a, s = e.contents, c = e.dataTypes;
                             "*" === c[0];) c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (o in s)
                                if (s[o] && s[o].test(r)) {
                                    c.unshift(o);
                                    break
                                } if (c[0] in n) i = c[0];
                        else {
                            for (o in n) {
                                if (!c[0] || e.converters[o + " " + c[0]]) {
                                    i = o;
                                    break
                                }
                                a || (a = o)
                            }
                            i = i || a
                        }
                        if (i) return i !== c[0] && c.unshift(i), n[i]
                    }(p, k, a)), !d && C.inArray("script", p.dataTypes) > -1 && (p.converters["text script"] = function() {}), x = function(e, t, n, r) {
                        var o, i, a, s, c, l = {},
                            u = e.dataTypes.slice();
                        if (u[1])
                            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                        for (i = u.shift(); i;)
                            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = i, i = u.shift())
                                if ("*" === i) i = c;
                                else if ("*" !== c && c !== i) {
                                    if (!(a = l[c + " " + i] || l["* " + i]))
                                        for (o in l)
                                            if ((s = o.split(" "))[1] === i && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                                                !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0], u.unshift(s[1]));
                                                break
                                            } if (!0 !== a)
                                        if (a && e.throws) t = a(t);
                                        else try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + c + " to " + i
                                            }
                                        }
                                }
                        return {
                            state: "success",
                            data: t
                        }
                    }(p, x, k, d), d ? (p.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (C.lastModified[o] = w), (w = k.getResponseHeader("etag")) && (C.etag[o] = w)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, f = x.data, d = !(b = x.error))) : (b = T, !e && T || (T = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || T) + "", d ? g.resolveWith(h, [f, T, k]) : g.rejectWith(h, [k, T, b]), k.statusCode(y), y = void 0, u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [k, p, d ? f : b]), v.fireWith(h, [k, T]), u && (m.trigger("ajaxComplete", [k, p]), --C.active || C.event.trigger("ajaxStop")))
                }
                return k
            },
            getJSON: function(e, t, n) {
                return C.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return C.get(e, void 0, t, "script")
            }
        }), C.each(["get", "post"], (function(e, t) {
            C[t] = function(e, n, r, o) {
                return v(n) && (o = o || r, r = n, n = void 0), C.ajax(C.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: r
                }, C.isPlainObject(e) && e))
            }
        })), C.ajaxPrefilter((function(e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        })), C._evalUrl = function(e, t, n) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    C.globalEval(e, t, n)
                }
            })
        }, C.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (v(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                })).append(this)), this
            },
            wrapInner: function(e) {
                return v(e) ? this.each((function(t) {
                    C(this).wrapInner(e.call(this, t))
                })) : this.each((function() {
                    var t = C(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                }))
            },
            wrap: function(e) {
                var t = v(e);
                return this.each((function(n) {
                    C(this).wrapAll(t ? e.call(this, n) : e)
                }))
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each((function() {
                    C(this).replaceWith(this.childNodes)
                })), this
            }
        }), C.expr.pseudos.hidden = function(e) {
            return !C.expr.pseudos.visible(e)
        }, C.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, C.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var zt = {
                0: 200,
                1223: 204
            },
            Vt = C.ajaxSettings.xhr();
        g.cors = !!Vt && "withCredentials" in Vt, g.ajax = Vt = !!Vt, C.ajaxTransport((function(e) {
            var t, r;
            if (g.cors || Vt && !e.crossDomain) return {
                send: function(o, i) {
                    var a, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) s.setRequestHeader(a, o[a]);
                    t = function(e) {
                        return function() {
                            t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && n.setTimeout((function() {
                            t && r()
                        }))
                    }, t = t("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        })), C.ajaxPrefilter((function(e) {
            e.crossDomain && (e.contents.script = !1)
        })), C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return C.globalEval(e), e
                }
            }
        }), C.ajaxPrefilter("script", (function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        })), C.ajaxTransport("script", (function(e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
                send: function(r, o) {
                    t = C("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), b.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }));
        var Xt, Gt = [],
            Jt = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Gt.pop() || C.expando + "_" + St.guid++;
                return this[e] = !0, e
            }
        }), C.ajaxPrefilter("json jsonp", (function(e, t, r) {
            var o, i, a, s = !1 !== e.jsonp && (Jt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Jt, "$1" + o) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return a || C.error(o + " was not called"), a[0]
            }, e.dataTypes[0] = "json", i = n[o], n[o] = function() {
                a = arguments
            }, r.always((function() {
                void 0 === i ? C(n).removeProp(o) : n[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, Gt.push(o)), a && v(i) && i(a[0]), a = i = void 0
            })), "script"
        })), g.createHTMLDocument = ((Xt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), C.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(r)) : t = b), i = !n && [], (o = _.exec(e)) ? [t.createElement(o[1])] : (o = Te([e], t, i), i && i.length && C(i).remove(), C.merge([], o.childNodes)));
            var r, o, i
        }, C.fn.load = function(e, t, n) {
            var r, o, i, a = this,
                s = e.indexOf(" ");
            return s > -1 && (r = yt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && C.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done((function(e) {
                i = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
            })).always(n && function(e, t) {
                a.each((function() {
                    n.apply(this, i || [e.responseText, t, e])
                }))
            }), this
        }, C.expr.pseudos.animated = function(e) {
            return C.grep(C.timers, (function(t) {
                return e === t.elem
            })).length
        }, C.offset = {
            setOffset: function(e, t, n) {
                var r, o, i, a, s, c, l = C.css(e, "position"),
                    u = C(e),
                    d = {};
                "static" === l && (e.style.position = "relative"), s = u.offset(), i = C.css(e, "top"), c = C.css(e, "left"), ("absolute" === l || "fixed" === l) && (i + c).indexOf("auto") > -1 ? (a = (r = u.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(c) || 0), v(t) && (t = t.call(e, n, C.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d))
            }
        }, C.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                    C.offset.setOffset(this, e, t)
                }));
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - C.css(r, "marginTop", !0),
                        left: t.left - o.left - C.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                    return e || ie
                }))
            }
        }), C.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(e, t) {
            var n = "pageYOffset" === t;
            C.fn[e] = function(r) {
                return U(this, (function(e, r, o) {
                    var i;
                    if (y(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
                    i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
                }), e, r, arguments.length)
            }
        })), C.each(["top", "left"], (function(e, t) {
            C.cssHooks[t] = Ve(g.pixelPosition, (function(e, n) {
                if (n) return n = ze(e, t), Be.test(n) ? C(e).position()[t] + "px" : n
            }))
        })), C.each({
            Height: "height",
            Width: "width"
        }, (function(e, t) {
            C.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, (function(n, r) {
                C.fn[r] = function(o, i) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                        s = n || (!0 === o || !0 === i ? "margin" : "border");
                    return U(this, (function(t, n, o) {
                        var i;
                        return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? C.css(t, n, s) : C.style(t, n, o, s)
                    }), t, a ? o : void 0, a)
                }
            }))
        })), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
            C.fn[t] = function(e) {
                return this.on(t, e)
            }
        })), C.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
            C.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }));
        var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        C.proxy = function(e, t) {
            var n, r, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = s.call(arguments, 2), (o = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, o
        }, C.holdReady = function(e) {
            e ? C.readyWait++ : C.ready(!0)
        }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = N, C.isFunction = v, C.isWindow = y, C.camelCase = G, C.type = T, C.now = Date.now, C.isNumeric = function(e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, C.trim = function(e) {
            return null == e ? "" : (e + "").replace(Yt, "")
        }, void 0 === (r = function() {
            return C
        }.apply(t, [])) || (e.exports = r);
        var Kt = n.jQuery,
            Qt = n.$;
        return C.noConflict = function(e) {
            return n.$ === C && (n.$ = Qt), e && n.jQuery === C && (n.jQuery = Kt), C
        }, void 0 === o && (n.jQuery = n.$ = C), C
    }))
}, function(e, t, n) {
    var r, o;
    void 0 === (o = "function" == typeof(r = function() {
        var e, t, n = {
                version: "0.2.0"
            },
            r = n.settings = {
                minimum: .08,
                easing: "ease",
                positionUsing: "",
                speed: 200,
                trickle: !0,
                trickleRate: .02,
                trickleSpeed: 800,
                showSpinner: !0,
                barSelector: '[role="bar"]',
                spinnerSelector: '[role="spinner"]',
                parent: "body",
                template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            };

        function o(e, t, n) {
            return e < t ? t : e > n ? n : e
        }

        function i(e) {
            return 100 * (-1 + e)
        }
        n.configure = function(e) {
            var t, n;
            for (t in e) void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (r[t] = n);
            return this
        }, n.status = null, n.set = function(e) {
            var t = n.isStarted();
            e = o(e, r.minimum, 1), n.status = 1 === e ? null : e;
            var c = n.render(!t),
                l = c.querySelector(r.barSelector),
                u = r.speed,
                d = r.easing;
            return c.offsetWidth, a((function(t) {
                "" === r.positionUsing && (r.positionUsing = n.getPositioningCSS()), s(l, function(e, t, n) {
                    var o;
                    return (o = "translate3d" === r.positionUsing ? {
                        transform: "translate3d(" + i(e) + "%,0,0)"
                    } : "translate" === r.positionUsing ? {
                        transform: "translate(" + i(e) + "%,0)"
                    } : {
                        "margin-left": i(e) + "%"
                    }).transition = "all " + t + "ms " + n, o
                }(e, u, d)), 1 === e ? (s(c, {
                    transition: "none",
                    opacity: 1
                }), c.offsetWidth, setTimeout((function() {
                    s(c, {
                        transition: "all " + u + "ms linear",
                        opacity: 0
                    }), setTimeout((function() {
                        n.remove(), t()
                    }), u)
                }), u)) : setTimeout(t, u)
            })), this
        }, n.isStarted = function() {
            return "number" == typeof n.status
        }, n.start = function() {
            n.status || n.set(0);
            var e = function() {
                setTimeout((function() {
                    n.status && (n.trickle(), e())
                }), r.trickleSpeed)
            };
            return r.trickle && e(), this
        }, n.done = function(e) {
            return e || n.status ? n.inc(.3 + .5 * Math.random()).set(1) : this
        }, n.inc = function(e) {
            var t = n.status;
            return t ? ("number" != typeof e && (e = (1 - t) * o(Math.random() * t, .1, .95)), t = o(t + e, 0, .994), n.set(t)) : n.start()
        }, n.trickle = function() {
            return n.inc(Math.random() * r.trickleRate)
        }, e = 0, t = 0, n.promise = function(r) {
            return r && "resolved" !== r.state() ? (0 === t && n.start(), e++, t++, r.always((function() {
                0 == --t ? (e = 0, n.done()) : n.set((e - t) / e)
            })), this) : this
        }, n.render = function(e) {
            if (n.isRendered()) return document.getElementById("nprogress");
            l(document.documentElement, "nprogress-busy");
            var t = document.createElement("div");
            t.id = "nprogress", t.innerHTML = r.template;
            var o, a = t.querySelector(r.barSelector),
                c = e ? "-100" : i(n.status || 0),
                u = document.querySelector(r.parent);
            return s(a, {
                transition: "all 0 linear",
                transform: "translate3d(" + c + "%,0,0)"
            }), r.showSpinner || (o = t.querySelector(r.spinnerSelector)) && f(o), u != document.body && l(u, "nprogress-custom-parent"), u.appendChild(t), t
        }, n.remove = function() {
            u(document.documentElement, "nprogress-busy"), u(document.querySelector(r.parent), "nprogress-custom-parent");
            var e = document.getElementById("nprogress");
            e && f(e)
        }, n.isRendered = function() {
            return !!document.getElementById("nprogress")
        }, n.getPositioningCSS = function() {
            var e = document.body.style,
                t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
            return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin"
        };
        var a = function() {
                var e = [];

                function t() {
                    var n = e.shift();
                    n && n(t)
                }
                return function(n) {
                    e.push(n), 1 == e.length && t()
                }
            }(),
            s = function() {
                var e = ["Webkit", "O", "Moz", "ms"],
                    t = {};

                function n(n) {
                    return n = n.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (function(e, t) {
                        return t.toUpperCase()
                    })), t[n] || (t[n] = function(t) {
                        var n = document.body.style;
                        if (t in n) return t;
                        for (var r, o = e.length, i = t.charAt(0).toUpperCase() + t.slice(1); o--;)
                            if ((r = e[o] + i) in n) return r;
                        return t
                    }(n))
                }

                function r(e, t, r) {
                    t = n(t), e.style[t] = r
                }
                return function(e, t) {
                    var n, o, i = arguments;
                    if (2 == i.length)
                        for (n in t) void 0 !== (o = t[n]) && t.hasOwnProperty(n) && r(e, n, o);
                    else r(e, i[1], i[2])
                }
            }();

        function c(e, t) {
            return ("string" == typeof e ? e : d(e)).indexOf(" " + t + " ") >= 0
        }

        function l(e, t) {
            var n = d(e),
                r = n + t;
            c(n, t) || (e.className = r.substring(1))
        }

        function u(e, t) {
            var n, r = d(e);
            c(e, t) && (n = r.replace(" " + t + " ", " "), e.className = n.substring(1, n.length - 1))
        }

        function d(e) {
            return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
        }

        function f(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        }
        return n
    }) ? r.call(t, n, t, e) : r) || (e.exports = o)
}, function(e, t, n) {
    window,
        e.exports = function(e) {
            var t = {};

            function n(r) {
                if (t[r]) return t[r].exports;
                var o = t[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
            }
            return n.m = e, n.c = t, n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: r
                })
            }, n.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, n.t = function(e, t) {
                if (1 & t && (e = n(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                    for (var o in e) n.d(r, o, function(t) {
                        return e[t]
                    }.bind(null, o));
                return r
            }, n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, n.p = "", n(n.s = 0)
        }([function(e, t, n) {
            "use strict";
            n.r(t);
            var r = function(e, t, n) {
                    return new Promise((function(r, o) {
                        fetch(e, {
                            body: JSON.stringify(t),
                            cache: "no-cache",
                            method: "POST"
                        }).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            return r(e)
                        })), n && setTimeout((function() {
                            o(t)
                        }), n)
                    }))
                },
                o = function(e, t, n) {
                    var r = [];
                    return document.querySelectorAll("[data-" + e + "]").forEach((function(o) {
                        var i, a = parseInt(o.textContent.trim().replace(/,/g, "").replace(/ /g, ""), 10) || 0;
                        r.push(((i = {
                            count: a
                        })[n] = o.getAttribute("data-" + e).toLowerCase(), i));
                        var s = o.getBoundingClientRect().height;
                        o.innerHTML = t, o.setAttribute("data-ocount", a.toString()), o.firstElementChild.style.height = s + "px", o.firstElementChild.style.width = s + "px"
                    })), r
                },
                i = function(e, t, n) {
                    Object.keys(e).forEach((function(r) {
                        var o = document.querySelectorAll("[data-" + t + '="' + r + '" i]');
                        0 !== o.length && (-1 === e[r] ? o.forEach((function(e) {
                            var t = e.getAttribute("data-ocount");
                            e.innerHTML = t, n && n(e, parseInt(t, 10))
                        })) : o.forEach((function(t) {
                            var o = e[r];
                            t.innerHTML = o.toString(), n && n(t, o)
                        })))
                    }))
                },
                a = function(e, t, n, r) {
                    e.forEach((function(e) {
                        var o = document.querySelectorAll("[data-" + t + '="' + e[n] + '" i]');
                        0 !== o.length && o.forEach((function(e) {
                            var t = e.getAttribute("data-ocount");
                            e.innerHTML = t, r && r(e, parseInt(t, 10))
                        }))
                    }))
                },
                s = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(e) {
                            try {
                                c(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            try {
                                c(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(a, s)
                        }
                        c((r = r.apply(e, t || [])).next())
                    }))
                },
                c = function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                l = function() {
                    function e(e) {
                        this.options = function(e) {
                            var t = {
                                cache: !0,
                                cacheId: "uvstat",
                                cmtAPI: "https://ld246.com/apis/vcomment/count",
                                loading: '<svg version="1.1" style="vertical-align: bottom;" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">\n<circle fill="#3b3e43" stroke="none" cx="6" cy="50" r="6">\n<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate>\n</circle>\n<circle fill="#3b3e43" stroke="none" cx="26" cy="50" r="6">\n<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate>\n</circle>\n<circle fill="#3b3e43" stroke="none" cx="46" cy="50" r="6">\n<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate>\n</circle>\n</svg>',
                                location: {
                                    hash: !1,
                                    pathname: !0,
                                    search: !1
                                },
                                renderCmtName: "uvstatcmt",
                                renderName: "uvstaturl",
                                timeout: 2e3,
                                url: "https://ld246.com/uvstat"
                            };
                            return e && e.location && (e.location = Object.assign({}, t.location, e.location)), Object.assign({}, t, e)
                        }(e)
                    }
                    return e.prototype.getStat = function(e, t) {
                        return void 0 === t && (t = 0), s(this, void 0, void 0, (function() {
                            return c(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, r(this.options.url + "/get", {
                                            data: e
                                        }, t)];
                                    case 1:
                                        return [2, n.sent().data]
                                }
                            }))
                        }))
                    }, e.prototype.getCmtStat = function(e, t) {
                        return void 0 === t && (t = 0), s(this, void 0, void 0, (function() {
                            return c(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, r(this.options.cmtAPI, {
                                            data: e
                                        }, t)];
                                    case 1:
                                        return [2, n.sent().data]
                                }
                            }))
                        }))
                    }, e.prototype.renderStat = function() {
                        return s(this, void 0, void 0, (function() {
                            var e, t;
                            return c(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (0 === (e = o(this.options.renderName, this.options.loading, "url")).length) return [2];
                                        n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.getStat(e, this.options.timeout)];
                                    case 2:
                                        return t = n.sent(), i(t, this.options.renderName), [3, 4];
                                    case 3:
                                        return n.sent(), a(e, this.options.renderName, "url"), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.renderCmtStat = function(e) {
                        return s(this, void 0, void 0, (function() {
                            var t, n;
                            return c(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (0 === (t = o(this.options.renderCmtName, this.options.loading, "id")).length) return [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.getCmtStat(t, this.options.timeout)];
                                    case 2:
                                        return n = r.sent(), i(n, this.options.renderCmtName, e), [3, 4];
                                    case 3:
                                        return r.sent(), a(t, this.options.renderCmtName, "id", e), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.addStat = function() {
                        var e = location.origin;
                        if (this.options.location.pathname && (e += location.pathname), this.options.location.search && (e += location.search), this.options.location.hash && (e += location.hash), e = e.toLowerCase(), this.options.cache) {
                            var t = JSON.parse(localStorage.getItem(this.options.cacheId) || "[]");
                            if (t.includes(e)) return;
                            t.push(e), localStorage.setItem(this.options.cacheId, JSON.stringify(t)), r(this.options.url + "/inc?url=" + e)
                        } else r(this.options.url + "/inc?url=" + e)
                    }, e.prototype.clearCache = function() {
                        localStorage.removeItem(this.options.cacheId)
                    }, e
                }();
            t.default = l
        }]).default
}, function(e, t, n) {
    window,
        e.exports = function(e) {
            var t = {};

            function n(r) {
                if (t[r]) return t[r].exports;
                var o = t[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
            }
            return n.m = e, n.c = t, n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: r
                })
            }, n.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, n.t = function(e, t) {
                if (1 & t && (e = n(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                    for (var o in e) n.d(r, o, function(t) {
                        return e[t]
                    }.bind(null, o));
                return r
            }, n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, n.p = "", n(n.s = 5)
        }([function(e, t, n) {
            var r;
            ! function(t, n) {
                "use strict";
                "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return n(e)
                } : n(t)
            }("undefined" != typeof window ? window : this, (function(n, o) {
                "use strict";
                var i = [],
                    a = Object.getPrototypeOf,
                    s = i.slice,
                    c = i.flat ? function(e) {
                        return i.flat.call(e)
                    } : function(e) {
                        return i.concat.apply([], e)
                    },
                    l = i.push,
                    u = i.indexOf,
                    d = {},
                    f = d.toString,
                    p = d.hasOwnProperty,
                    h = p.toString,
                    m = h.call(Object),
                    g = {},
                    v = function(e) {
                        return "function" == typeof e && "number" != typeof e.nodeType
                    },
                    y = function(e) {
                        return null != e && e === e.window
                    },
                    b = n.document,
                    x = {
                        type: !0,
                        src: !0,
                        nonce: !0,
                        noModule: !0
                    };

                function w(e, t, n) {
                    var r, o, i = (n = n || b).createElement("script");
                    if (i.text = e, t)
                        for (r in x)(o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
                    n.head.appendChild(i).parentNode.removeChild(i)
                }

                function T(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[f.call(e)] || "object" : typeof e
                }
                var C = function(e, t) {
                    return new C.fn.init(e, t)
                };

                function k(e) {
                    var t = !!e && "length" in e && e.length,
                        n = T(e);
                    return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                }
                C.fn = C.prototype = {
                    jquery: "3.5.1",
                    constructor: C,
                    length: 0,
                    toArray: function() {
                        return s.call(this)
                    },
                    get: function(e) {
                        return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
                    },
                    pushStack: function(e) {
                        var t = C.merge(this.constructor(), e);
                        return t.prevObject = this, t
                    },
                    each: function(e) {
                        return C.each(this, e)
                    },
                    map: function(e) {
                        return this.pushStack(C.map(this, (function(t, n) {
                            return e.call(t, n, t)
                        })))
                    },
                    slice: function() {
                        return this.pushStack(s.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    even: function() {
                        return this.pushStack(C.grep(this, (function(e, t) {
                            return (t + 1) % 2
                        })))
                    },
                    odd: function() {
                        return this.pushStack(C.grep(this, (function(e, t) {
                            return t % 2
                        })))
                    },
                    eq: function(e) {
                        var t = this.length,
                            n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: l,
                    sort: i.sort,
                    splice: i.splice
                }, C.extend = C.fn.extend = function() {
                    var e, t, n, r, o, i, a = arguments[0] || {},
                        s = 1,
                        c = arguments.length,
                        l = !1;
                    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === c && (a = this, s--); s < c; s++)
                        if (null != (e = arguments[s]))
                            for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (C.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], i = o && !Array.isArray(n) ? [] : o || C.isPlainObject(n) ? n : {}, o = !1, a[t] = C.extend(l, i, r)) : void 0 !== r && (a[t] = r));
                    return a
                }, C.extend({
                    expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e)
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return !(!e || "[object Object]" !== f.call(e) || (t = a(e)) && ("function" != typeof(n = p.call(t, "constructor") && t.constructor) || h.call(n) !== m))
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e) return !1;
                        return !0
                    },
                    globalEval: function(e, t, n) {
                        w(e, {
                            nonce: t && t.nonce
                        }, n)
                    },
                    each: function(e, t) {
                        var n, r = 0;
                        if (k(e))
                            for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                        else
                            for (r in e)
                                if (!1 === t.call(e[r], r, e[r])) break;
                        return e
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (k(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : u.call(t, e, n)
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                        return e.length = o, e
                    },
                    grep: function(e, t, n) {
                        for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
                        return r
                    },
                    map: function(e, t, n) {
                        var r, o, i = 0,
                            a = [];
                        if (k(e))
                            for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o);
                        else
                            for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                        return c(a)
                    },
                    guid: 1,
                    support: g
                }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = i[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                    d["[object " + t + "]"] = t.toLowerCase()
                }));
                var S = function(e) {
                    var t, n, r, o, i, a, s, c, l, u, d, f, p, h, m, g, v, y, b, x = "sizzle" + 1 * new Date,
                        w = e.document,
                        T = 0,
                        C = 0,
                        k = ce(),
                        S = ce(),
                        E = ce(),
                        A = ce(),
                        j = function(e, t) {
                            return e === t && (d = !0), 0
                        },
                        N = {}.hasOwnProperty,
                        _ = [],
                        D = _.pop,
                        L = _.push,
                        O = _.push,
                        q = _.slice,
                        I = function(e, t) {
                            for (var n = 0, r = e.length; n < r; n++)
                                if (e[n] === t) return n;
                            return -1
                        },
                        H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        P = "[\\x20\\t\\r\\n\\f]",
                        $ = "(?:\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                        M = "\\[" + P + "*(" + $ + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + $ + "))|)" + P + "*\\]",
                        R = ":(" + $ + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                        B = new RegExp(P + "+", "g"),
                        F = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                        W = new RegExp("^" + P + "*," + P + "*"),
                        U = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                        z = new RegExp(P + "|>"),
                        V = new RegExp(R),
                        X = new RegExp("^" + $ + "$"),
                        G = {
                            ID: new RegExp("^#(" + $ + ")"),
                            CLASS: new RegExp("^\\.(" + $ + ")"),
                            TAG: new RegExp("^(" + $ + "|[*])"),
                            ATTR: new RegExp("^" + M),
                            PSEUDO: new RegExp("^" + R),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + H + ")$", "i"),
                            needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                        },
                        J = /HTML$/i,
                        Y = /^(?:input|select|textarea|button)$/i,
                        K = /^h\d$/i,
                        Q = /^[^{]+\{\s*\[native \w/,
                        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        ee = /[+~]/,
                        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])", "g"),
                        ne = function(e, t) {
                            var n = "0x" + e.slice(1) - 65536;
                            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                        },
                        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        oe = function(e, t) {
                            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                        },
                        ie = function() {
                            f()
                        },
                        ae = xe((function(e) {
                            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                        }), {
                            dir: "parentNode",
                            next: "legend"
                        });
                    try {
                        O.apply(_ = q.call(w.childNodes), w.childNodes), _[w.childNodes.length].nodeType
                    } catch (e) {
                        O = {
                            apply: _.length ? function(e, t) {
                                L.apply(e, q.call(t))
                            } : function(e, t) {
                                for (var n = e.length, r = 0; e[n++] = t[r++];);
                                e.length = n - 1
                            }
                        }
                    }

                    function se(e, t, r, o) {
                        var i, s, l, u, d, h, v, y = t && t.ownerDocument,
                            w = t ? t.nodeType : 9;
                        if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
                        if (!o && (f(t), t = t || p, m)) {
                            if (11 !== w && (d = Z.exec(e)))
                                if (i = d[1]) {
                                    if (9 === w) {
                                        if (!(l = t.getElementById(i))) return r;
                                        if (l.id === i) return r.push(l), r
                                    } else if (y && (l = y.getElementById(i)) && b(t, l) && l.id === i) return r.push(l), r
                                } else {
                                    if (d[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                                    if ((i = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(i)), r
                                } if (n.qsa && !A[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                                if (v = e, y = t, 1 === w && (z.test(e) || U.test(e))) {
                                    for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(re, oe) : t.setAttribute("id", u = x)), s = (h = a(e)).length; s--;) h[s] = (u ? "#" + u : ":scope") + " " + be(h[s]);
                                    v = h.join(",")
                                }
                                try {
                                    return O.apply(r, y.querySelectorAll(v)), r
                                } catch (t) {
                                    A(e, !0)
                                } finally {
                                    u === x && t.removeAttribute("id")
                                }
                            }
                        }
                        return c(e.replace(F, "$1"), t, r, o)
                    }

                    function ce() {
                        var e = [];
                        return function t(n, o) {
                            return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = o
                        }
                    }

                    function le(e) {
                        return e[x] = !0, e
                    }

                    function ue(e) {
                        var t = p.createElement("fieldset");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }

                    function de(e, t) {
                        for (var n = e.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = t
                    }

                    function fe(e, t) {
                        var n = t && e,
                            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (r) return r;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === t) return -1;
                        return e ? 1 : -1
                    }

                    function pe(e) {
                        return function(t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }

                    function he(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }

                    function me(e) {
                        return function(t) {
                            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                        }
                    }

                    function ge(e) {
                        return le((function(t) {
                            return t = +t, le((function(n, r) {
                                for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                            }))
                        }))
                    }

                    function ve(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }
                    for (t in n = se.support = {}, i = se.isXML = function(e) {
                        var t = e.namespaceURI,
                            n = (e.ownerDocument || e).documentElement;
                        return !J.test(t || n && n.nodeName || "HTML")
                    }, f = se.setDocument = function(e) {
                        var t, o, a = e ? e.ownerDocument || e : w;
                        return a != p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, m = !i(p), w != p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.scope = ue((function(e) {
                            return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        })), n.attributes = ue((function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        })), n.getElementsByTagName = ue((function(e) {
                            return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                        })), n.getElementsByClassName = Q.test(p.getElementsByClassName), n.getById = ue((function(e) {
                            return h.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length
                        })), n.getById ? (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n, r, o, i = t.getElementById(e);
                                if (i) {
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                    for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                        if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                                }
                                return []
                            }
                        }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, r = [],
                                o = 0,
                                i = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return i
                        }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                        }, v = [], g = [], (n.qsa = Q.test(p.querySelectorAll)) && (ue((function(e) {
                            var t;
                            h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                        })), ue((function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = p.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                        }))), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue((function(e) {
                            n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", R)
                        })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), b = t || Q.test(h.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, j = t ? function(e, t) {
                            if (e === t) return d = !0, 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == w && b(w, e) ? -1 : t == p || t.ownerDocument == w && b(w, t) ? 1 : u ? I(u, e) - I(u, t) : 0 : 4 & r ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return d = !0, 0;
                            var n, r = 0,
                                o = e.parentNode,
                                i = t.parentNode,
                                a = [e],
                                s = [t];
                            if (!o || !i) return e == p ? -1 : t == p ? 1 : o ? -1 : i ? 1 : u ? I(u, e) - I(u, t) : 0;
                            if (o === i) return fe(e, t);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; a[r] === s[r];) r++;
                            return r ? fe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                        }, p) : p
                    }, se.matches = function(e, t) {
                        return se(e, null, null, t)
                    }, se.matchesSelector = function(e, t) {
                        if (f(e), n.matchesSelector && m && !A[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                            var r = y.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (e) {
                            A(t, !0)
                        }
                        return se(t, p, null, [e]).length > 0
                    }, se.contains = function(e, t) {
                        return (e.ownerDocument || e) != p && f(e), b(e, t)
                    }, se.attr = function(e, t) {
                        (e.ownerDocument || e) != p && f(e);
                        var o = r.attrHandle[t.toLowerCase()],
                            i = o && N.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
                        return void 0 !== i ? i : n.attributes || !m ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }, se.escape = function(e) {
                        return (e + "").replace(re, oe)
                    }, se.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, se.uniqueSort = function(e) {
                        var t, r = [],
                            o = 0,
                            i = 0;
                        if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(j), d) {
                            for (; t = e[i++];) t === e[i] && (o = r.push(i));
                            for (; o--;) e.splice(r[o], 1)
                        }
                        return u = null, e
                    }, o = se.getText = function(e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += o(t);
                        return n
                    }, (r = se.selectors = {
                        cacheLength: 50,
                        createPseudo: le,
                        match: G,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = k[e + " "];
                                return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && k(e, (function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                }))
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var o = se.attr(r, e);
                                    return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, r, o) {
                                var i = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === o ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, c) {
                                    var l, u, d, f, p, h, m = i !== a ? "nextSibling" : "previousSibling",
                                        g = t.parentNode,
                                        v = s && t.nodeName.toLowerCase(),
                                        y = !c && !s,
                                        b = !1;
                                    if (g) {
                                        if (i) {
                                            for (; m;) {
                                                for (f = t; f = f[m];)
                                                    if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                                h = m = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                            for (b = (p = (l = (u = (d = (f = g)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (b = p = 0) || h.pop();)
                                                if (1 === f.nodeType && ++b && f === t) {
                                                    u[e] = [T, p, b];
                                                    break
                                                }
                                        } else if (y && (b = p = (l = (u = (d = (f = t)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === b)
                                            for (;
                                                (f = ++p && f && f[m] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((u = (d = f[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [T, b]), f !== t)););
                                        return (b -= o) === r || b % r == 0 && b / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                return o[x] ? o(t) : o.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, n) {
                                    for (var r, i = o(e, t), a = i.length; a--;) e[r = I(e, i[a])] = !(n[r] = i[a])
                                })) : function(e) {
                                    return o(e, 0, n)
                                }) : o
                            }
                        },
                        pseudos: {
                            not: le((function(e) {
                                var t = [],
                                    n = [],
                                    r = s(e.replace(F, "$1"));
                                return r[x] ? le((function(e, t, n, o) {
                                    for (var i, a = r(e, null, o, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                                })) : function(e, o, i) {
                                    return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
                                }
                            })),
                            has: le((function(e) {
                                return function(t) {
                                    return se(e, t).length > 0
                                }
                            })),
                            contains: le((function(e) {
                                return e = e.replace(te, ne),
                                    function(t) {
                                        return (t.textContent || o(t)).indexOf(e) > -1
                                    }
                            })),
                            lang: le((function(e) {
                                return X.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            })),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: me(!1),
                            disabled: me(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function(e) {
                                return K.test(e.nodeName)
                            },
                            input: function(e) {
                                return Y.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: ge((function() {
                                return [0]
                            })),
                            last: ge((function(e, t) {
                                return [t - 1]
                            })),
                            eq: ge((function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            })),
                            even: ge((function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            })),
                            odd: ge((function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            })),
                            lt: ge((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                return e
                            })),
                            gt: ge((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            }))
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = pe(t);
                    for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = he(t);

                    function ye() {}

                    function be(e) {
                        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                        return r
                    }

                    function xe(e, t, n) {
                        var r = t.dir,
                            o = t.next,
                            i = o || r,
                            a = n && "parentNode" === i,
                            s = C++;
                        return t.first ? function(t, n, o) {
                            for (; t = t[r];)
                                if (1 === t.nodeType || a) return e(t, n, o);
                            return !1
                        } : function(t, n, c) {
                            var l, u, d, f = [T, s];
                            if (c) {
                                for (; t = t[r];)
                                    if ((1 === t.nodeType || a) && e(t, n, c)) return !0
                            } else
                                for (; t = t[r];)
                                    if (1 === t.nodeType || a)
                                        if (u = (d = t[x] || (t[x] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;
                                        else {
                                            if ((l = u[i]) && l[0] === T && l[1] === s) return f[2] = l[2];
                                            if (u[i] = f, f[2] = e(t, n, c)) return !0
                                        } return !1
                        }
                    }

                    function we(e) {
                        return e.length > 1 ? function(t, n, r) {
                            for (var o = e.length; o--;)
                                if (!e[o](t, n, r)) return !1;
                            return !0
                        } : e[0]
                    }

                    function Te(e, t, n, r, o) {
                        for (var i, a = [], s = 0, c = e.length, l = null != t; s < c; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), l && t.push(s)));
                        return a
                    }

                    function Ce(e, t, n, r, o, i) {
                        return r && !r[x] && (r = Ce(r)), o && !o[x] && (o = Ce(o, i)), le((function(i, a, s, c) {
                            var l, u, d, f = [],
                                p = [],
                                h = a.length,
                                m = i || function(e, t, n) {
                                    for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
                                    return n
                                }(t || "*", s.nodeType ? [s] : s, []),
                                g = !e || !i && t ? m : Te(m, f, e, s, c),
                                v = n ? o || (i ? e : h || r) ? [] : a : g;
                            if (n && n(g, v, s, c), r)
                                for (l = Te(v, p), r(l, [], s, c), u = l.length; u--;)(d = l[u]) && (v[p[u]] = !(g[p[u]] = d));
                            if (i) {
                                if (o || e) {
                                    if (o) {
                                        for (l = [], u = v.length; u--;)(d = v[u]) && l.push(g[u] = d);
                                        o(null, v = [], l, c)
                                    }
                                    for (u = v.length; u--;)(d = v[u]) && (l = o ? I(i, d) : f[u]) > -1 && (i[l] = !(a[l] = d))
                                }
                            } else v = Te(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, c) : O.apply(a, v)
                        }))
                    }

                    function ke(e) {
                        for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], c = a ? 1 : 0, u = xe((function(e) {
                            return e === t
                        }), s, !0), d = xe((function(e) {
                            return I(t, e) > -1
                        }), s, !0), f = [function(e, n, r) {
                            var o = !a && (r || n !== l) || ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                            return t = null, o
                        }]; c < i; c++)
                            if (n = r.relative[e[c].type]) f = [xe(we(f), n)];
                            else {
                                if ((n = r.filter[e[c].type].apply(null, e[c].matches))[x]) {
                                    for (o = ++c; o < i && !r.relative[e[o].type]; o++);
                                    return Ce(c > 1 && we(f), c > 1 && be(e.slice(0, c - 1).concat({
                                        value: " " === e[c - 2].type ? "*" : ""
                                    })).replace(F, "$1"), n, c < o && ke(e.slice(c, o)), o < i && ke(e = e.slice(o)), o < i && be(e))
                                }
                                f.push(n)
                            } return we(f)
                    }
                    return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = se.tokenize = function(e, t) {
                        var n, o, i, a, s, c, l, u = S[e + " "];
                        if (u) return t ? 0 : u.slice(0);
                        for (s = e, c = [], l = r.preFilter; s;) {
                            for (a in n && !(o = W.exec(s)) || (o && (s = s.slice(o[0].length) || s), c.push(i = [])), n = !1, (o = U.exec(s)) && (n = o.shift(), i.push({
                                value: n,
                                type: o[0].replace(F, " ")
                            }), s = s.slice(n.length)), r.filter) !(o = G[a].exec(s)) || l[a] && !(o = l[a](o)) || (n = o.shift(), i.push({
                                value: n,
                                type: a,
                                matches: o
                            }), s = s.slice(n.length));
                            if (!n) break
                        }
                        return t ? s.length : s ? se.error(e) : S(e, c).slice(0)
                    }, s = se.compile = function(e, t) {
                        var n, o = [],
                            i = [],
                            s = E[e + " "];
                        if (!s) {
                            for (t || (t = a(e)), n = t.length; n--;)(s = ke(t[n]))[x] ? o.push(s) : i.push(s);
                            (s = E(e, function(e, t) {
                                var n = t.length > 0,
                                    o = e.length > 0,
                                    i = function(i, a, s, c, u) {
                                        var d, h, g, v = 0,
                                            y = "0",
                                            b = i && [],
                                            x = [],
                                            w = l,
                                            C = i || o && r.find.TAG("*", u),
                                            k = T += null == w ? 1 : Math.random() || .1,
                                            S = C.length;
                                        for (u && (l = a == p || a || u); y !== S && null != (d = C[y]); y++) {
                                            if (o && d) {
                                                for (h = 0, a || d.ownerDocument == p || (f(d), s = !m); g = e[h++];)
                                                    if (g(d, a || p, s)) {
                                                        c.push(d);
                                                        break
                                                    } u && (T = k)
                                            }
                                            n && ((d = !g && d) && v--, i && b.push(d))
                                        }
                                        if (v += y, n && y !== v) {
                                            for (h = 0; g = t[h++];) g(b, x, a, s);
                                            if (i) {
                                                if (v > 0)
                                                    for (; y--;) b[y] || x[y] || (x[y] = D.call(c));
                                                x = Te(x)
                                            }
                                            O.apply(c, x), u && !i && x.length > 0 && v + t.length > 1 && se.uniqueSort(c)
                                        }
                                        return u && (T = k, l = w), b
                                    };
                                return n ? le(i) : i
                            }(i, o))).selector = e
                        }
                        return s
                    }, c = se.select = function(e, t, n, o) {
                        var i, c, l, u, d, f = "function" == typeof e && e,
                            p = !o && a(e = f.selector || e);
                        if (n = n || [], 1 === p.length) {
                            if ((c = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = c[0]).type && 9 === t.nodeType && m && r.relative[c[1].type]) {
                                if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                                f && (t = t.parentNode), e = e.slice(c.shift().value.length)
                            }
                            for (i = G.needsContext.test(e) ? 0 : c.length; i-- && (l = c[i], !r.relative[u = l.type]);)
                                if ((d = r.find[u]) && (o = d(l.matches[0].replace(te, ne), ee.test(c[0].type) && ve(t.parentNode) || t))) {
                                    if (c.splice(i, 1), !(e = o.length && be(c))) return O.apply(n, o), n;
                                    break
                                }
                        }
                        return (f || s(e, p))(o, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
                    }, n.sortStable = x.split("").sort(j).join("") === x, n.detectDuplicates = !!d, f(), n.sortDetached = ue((function(e) {
                        return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                    })), ue((function(e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                    })) || de("type|href|height|width", (function(e, t, n) {
                        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    })), n.attributes && ue((function(e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                    })) || de("value", (function(e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                    })), ue((function(e) {
                        return null == e.getAttribute("disabled")
                    })) || de(H, (function(e, t, n) {
                        var r;
                        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    })), se
                }(n);
                C.find = S, C.expr = S.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = S.uniqueSort, C.text = S.getText, C.isXMLDoc = S.isXML, C.contains = S.contains, C.escapeSelector = S.escape;
                var E = function(e, t, n) {
                        for (var r = [], o = void 0 !== n;
                             (e = e[t]) && 9 !== e.nodeType;)
                            if (1 === e.nodeType) {
                                if (o && C(e).is(n)) break;
                                r.push(e)
                            } return r
                    },
                    A = function(e, t) {
                        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                        return n
                    },
                    j = C.expr.match.needsContext;

                function N(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }
                var _ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                function D(e, t, n) {
                    return v(t) ? C.grep(e, (function(e, r) {
                        return !!t.call(e, r, e) !== n
                    })) : t.nodeType ? C.grep(e, (function(e) {
                        return e === t !== n
                    })) : "string" != typeof t ? C.grep(e, (function(e) {
                        return u.call(t, e) > -1 !== n
                    })) : C.filter(t, e, n)
                }
                C.filter = function(e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, (function(e) {
                        return 1 === e.nodeType
                    })))
                }, C.fn.extend({
                    find: function(e) {
                        var t, n, r = this.length,
                            o = this;
                        if ("string" != typeof e) return this.pushStack(C(e).filter((function() {
                            for (t = 0; t < r; t++)
                                if (C.contains(o[t], this)) return !0
                        })));
                        for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, o[t], n);
                        return r > 1 ? C.uniqueSort(n) : n
                    },
                    filter: function(e) {
                        return this.pushStack(D(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(D(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!D(this, "string" == typeof e && j.test(e) ? C(e) : e || [], !1).length
                    }
                });
                var L, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (C.fn.init = function(e, t, n) {
                    var r, o;
                    if (!e) return this;
                    if (n = n || L, "string" == typeof e) {
                        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (r[1]) {
                            if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), _.test(r[1]) && C.isPlainObject(t))
                                for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this
                        }
                        return (o = b.getElementById(r[2])) && (this[0] = o, this.length = 1), this
                    }
                    return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
                }).prototype = C.fn, L = C(b);
                var q = /^(?:parents|prev(?:Until|All))/,
                    I = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    };

                function H(e, t) {
                    for (;
                        (e = e[t]) && 1 !== e.nodeType;);
                    return e
                }
                C.fn.extend({
                    has: function(e) {
                        var t = C(e, this),
                            n = t.length;
                        return this.filter((function() {
                            for (var e = 0; e < n; e++)
                                if (C.contains(this, t[e])) return !0
                        }))
                    },
                    closest: function(e, t) {
                        var n, r = 0,
                            o = this.length,
                            i = [],
                            a = "string" != typeof e && C(e);
                        if (!j.test(e))
                            for (; r < o; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                        i.push(n);
                                        break
                                    } return this.pushStack(i.length > 1 ? C.uniqueSort(i) : i)
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? u.call(C(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, t) {
                        return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }), C.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null
                    },
                    parents: function(e) {
                        return E(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return E(e, "parentNode", n)
                    },
                    next: function(e) {
                        return H(e, "nextSibling")
                    },
                    prev: function(e) {
                        return H(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return E(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return E(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return E(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return E(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return A((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return A(e.firstChild)
                    },
                    contents: function(e) {
                        return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (N(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
                    }
                }, (function(e, t) {
                    C.fn[e] = function(n, r) {
                        var o = C.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = C.filter(r, o)), this.length > 1 && (I[e] || C.uniqueSort(o), q.test(e) && o.reverse()), this.pushStack(o)
                    }
                }));
                var P = /[^\x20\t\r\n\f]+/g;

                function $(e) {
                    return e
                }

                function M(e) {
                    throw e
                }

                function R(e, t, n, r) {
                    var o;
                    try {
                        e && v(o = e.promise) ? o.call(e).done(t).fail(n) : e && v(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
                    } catch (e) {
                        n.apply(void 0, [e])
                    }
                }
                C.Callbacks = function(e) {
                    e = "string" == typeof e ? function(e) {
                        var t = {};
                        return C.each(e.match(P) || [], (function(e, n) {
                            t[n] = !0
                        })), t
                    }(e) : C.extend({}, e);
                    var t, n, r, o, i = [],
                        a = [],
                        s = -1,
                        c = function() {
                            for (o = o || e.once, r = t = !0; a.length; s = -1)
                                for (n = a.shift(); ++s < i.length;) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = !1);
                            e.memory || (n = !1), t = !1, o && (i = n ? [] : "")
                        },
                        l = {
                            add: function() {
                                return i && (n && !t && (s = i.length - 1, a.push(n)), function t(n) {
                                    C.each(n, (function(n, r) {
                                        v(r) ? e.unique && l.has(r) || i.push(r) : r && r.length && "string" !== T(r) && t(r)
                                    }))
                                }(arguments), n && !t && c()), this
                            },
                            remove: function() {
                                return C.each(arguments, (function(e, t) {
                                    for (var n;
                                         (n = C.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= s && s--
                                })), this
                            },
                            has: function(e) {
                                return e ? C.inArray(e, i) > -1 : i.length > 0
                            },
                            empty: function() {
                                return i && (i = []), this
                            },
                            disable: function() {
                                return o = a = [], i = n = "", this
                            },
                            disabled: function() {
                                return !i
                            },
                            lock: function() {
                                return o = a = [], n || t || (i = n = ""), this
                            },
                            locked: function() {
                                return !!o
                            },
                            fireWith: function(e, n) {
                                return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || c()), this
                            },
                            fire: function() {
                                return l.fireWith(this, arguments), this
                            },
                            fired: function() {
                                return !!r
                            }
                        };
                    return l
                }, C.extend({
                    Deferred: function(e) {
                        var t = [
                                ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                                ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                            ],
                            r = "pending",
                            o = {
                                state: function() {
                                    return r
                                },
                                always: function() {
                                    return i.done(arguments).fail(arguments), this
                                },
                                catch: function(e) {
                                    return o.then(null, e)
                                },
                                pipe: function() {
                                    var e = arguments;
                                    return C.Deferred((function(n) {
                                        C.each(t, (function(t, r) {
                                            var o = v(e[r[4]]) && e[r[4]];
                                            i[r[1]]((function() {
                                                var e = o && o.apply(this, arguments);
                                                e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments)
                                            }))
                                        })), e = null
                                    })).promise()
                                },
                                then: function(e, r, o) {
                                    var i = 0;

                                    function a(e, t, r, o) {
                                        return function() {
                                            var s = this,
                                                c = arguments,
                                                l = function() {
                                                    var n, l;
                                                    if (!(e < i)) {
                                                        if ((n = r.apply(s, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                        l = n && ("object" == typeof n || "function" == typeof n) && n.then, v(l) ? o ? l.call(n, a(i, t, $, o), a(i, t, M, o)) : (i++, l.call(n, a(i, t, $, o), a(i, t, M, o), a(i, t, $, t.notifyWith))) : (r !== $ && (s = void 0, c = [n]), (o || t.resolveWith)(s, c))
                                                    }
                                                },
                                                u = o ? l : function() {
                                                    try {
                                                        l()
                                                    } catch (n) {
                                                        C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= i && (r !== M && (s = void 0, c = [n]), t.rejectWith(s, c))
                                                    }
                                                };
                                            e ? u() : (C.Deferred.getStackHook && (u.stackTrace = C.Deferred.getStackHook()), n.setTimeout(u))
                                        }
                                    }
                                    return C.Deferred((function(n) {
                                        t[0][3].add(a(0, n, v(o) ? o : $, n.notifyWith)), t[1][3].add(a(0, n, v(e) ? e : $)), t[2][3].add(a(0, n, v(r) ? r : M))
                                    })).promise()
                                },
                                promise: function(e) {
                                    return null != e ? C.extend(e, o) : o
                                }
                            },
                            i = {};
                        return C.each(t, (function(e, n) {
                            var a = n[2],
                                s = n[5];
                            o[n[1]] = a.add, s && a.add((function() {
                                r = s
                            }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), i[n[0]] = function() {
                                return i[n[0] + "With"](this === i ? void 0 : this, arguments), this
                            }, i[n[0] + "With"] = a.fireWith
                        })), o.promise(i), e && e.call(i, i), i
                    },
                    when: function(e) {
                        var t = arguments.length,
                            n = t,
                            r = Array(n),
                            o = s.call(arguments),
                            i = C.Deferred(),
                            a = function(e) {
                                return function(n) {
                                    r[e] = this, o[e] = arguments.length > 1 ? s.call(arguments) : n, --t || i.resolveWith(r, o)
                                }
                            };
                        if (t <= 1 && (R(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || v(o[n] && o[n].then))) return i.then();
                        for (; n--;) R(o[n], a(n), i.reject);
                        return i.promise()
                    }
                });
                var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                C.Deferred.exceptionHook = function(e, t) {
                    n.console && n.console.warn && e && B.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                }, C.readyException = function(e) {
                    n.setTimeout((function() {
                        throw e
                    }))
                };
                var F = C.Deferred();

                function W() {
                    b.removeEventListener("DOMContentLoaded", W), n.removeEventListener("load", W), C.ready()
                }
                C.fn.ready = function(e) {
                    return F.then(e).catch((function(e) {
                        C.readyException(e)
                    })), this
                }, C.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || F.resolveWith(b, [C]))
                    }
                }), C.ready.then = F.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(C.ready) : (b.addEventListener("DOMContentLoaded", W), n.addEventListener("load", W));
                var U = function(e, t, n, r, o, i, a) {
                        var s = 0,
                            c = e.length,
                            l = null == n;
                        if ("object" === T(n))
                            for (s in o = !0, n) U(e, t, s, n[s], !0, i, a);
                        else if (void 0 !== r && (o = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                            return l.call(C(e), n)
                        })), t))
                            for (; s < c; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                        return o ? e : l ? t.call(e) : c ? t(e[0], n) : i
                    },
                    z = /^-ms-/,
                    V = /-([a-z])/g;

                function X(e, t) {
                    return t.toUpperCase()
                }

                function G(e) {
                    return e.replace(z, "ms-").replace(V, X)
                }
                var J = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };

                function Y() {
                    this.expando = C.expando + Y.uid++
                }
                Y.uid = 1, Y.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return t || (t = {}, J(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))), t
                    },
                    set: function(e, t, n) {
                        var r, o = this.cache(e);
                        if ("string" == typeof t) o[G(t)] = n;
                        else
                            for (r in t) o[G(r)] = t[r];
                        return o
                    },
                    get: function(e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
                    },
                    access: function(e, t, n) {
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                    },
                    remove: function(e, t) {
                        var n, r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(P) || []).length;
                                for (; n--;) delete r[t[n]]
                            }(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function(e) {
                        var t = e[this.expando];
                        return void 0 !== t && !C.isEmptyObject(t)
                    }
                };
                var K = new Y,
                    Q = new Y,
                    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    ee = /[A-Z]/g;

                function te(e, t, n) {
                    var r;
                    if (void 0 === n && 1 === e.nodeType)
                        if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                            try {
                                n = function(e) {
                                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                                }(n)
                            } catch (e) {}
                            Q.set(e, t, n)
                        } else n = void 0;
                    return n
                }
                C.extend({
                    hasData: function(e) {
                        return Q.hasData(e) || K.hasData(e)
                    },
                    data: function(e, t, n) {
                        return Q.access(e, t, n)
                    },
                    removeData: function(e, t) {
                        Q.remove(e, t)
                    },
                    _data: function(e, t, n) {
                        return K.access(e, t, n)
                    },
                    _removeData: function(e, t) {
                        K.remove(e, t)
                    }
                }), C.fn.extend({
                    data: function(e, t) {
                        var n, r, o, i = this[0],
                            a = i && i.attributes;
                        if (void 0 === e) {
                            if (this.length && (o = Q.get(i), 1 === i.nodeType && !K.get(i, "hasDataAttrs"))) {
                                for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), te(i, r, o[r]));
                                K.set(i, "hasDataAttrs", !0)
                            }
                            return o
                        }
                        return "object" == typeof e ? this.each((function() {
                            Q.set(this, e)
                        })) : U(this, (function(t) {
                            var n;
                            if (i && void 0 === t) return void 0 !== (n = Q.get(i, e)) || void 0 !== (n = te(i, e)) ? n : void 0;
                            this.each((function() {
                                Q.set(this, e, t)
                            }))
                        }), null, t, arguments.length > 1, null, !0)
                    },
                    removeData: function(e) {
                        return this.each((function() {
                            Q.remove(this, e)
                        }))
                    }
                }), C.extend({
                    queue: function(e, t, n) {
                        var r;
                        if (e) return t = (t || "fx") + "queue", r = K.get(e, t), n && (!r || Array.isArray(n) ? r = K.access(e, t, C.makeArray(n)) : r.push(n)), r || []
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = C.queue(e, t),
                            r = n.length,
                            o = n.shift(),
                            i = C._queueHooks(e, t);
                        "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, (function() {
                            C.dequeue(e, t)
                        }), i)), !r && i && i.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return K.get(e, n) || K.access(e, n, {
                            empty: C.Callbacks("once memory").add((function() {
                                K.remove(e, [t + "queue", n])
                            }))
                        })
                    }
                }), C.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                            var n = C.queue(this, e, t);
                            C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                        }))
                    },
                    dequeue: function(e) {
                        return this.each((function() {
                            C.dequeue(this, e)
                        }))
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, r = 1,
                            o = C.Deferred(),
                            i = this,
                            a = this.length,
                            s = function() {
                                --r || o.resolveWith(i, [i])
                            };
                        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = K.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                        return s(), o.promise(t)
                    }
                });
                var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
                    oe = ["Top", "Right", "Bottom", "Left"],
                    ie = b.documentElement,
                    ae = function(e) {
                        return C.contains(e.ownerDocument, e)
                    },
                    se = {
                        composed: !0
                    };
                ie.getRootNode && (ae = function(e) {
                    return C.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
                });
                var ce = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === C.css(e, "display")
                };

                function le(e, t, n, r) {
                    var o, i, a = 20,
                        s = r ? function() {
                            return r.cur()
                        } : function() {
                            return C.css(e, t, "")
                        },
                        c = s(),
                        l = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                        u = e.nodeType && (C.cssNumber[t] || "px" !== l && +c) && re.exec(C.css(e, t));
                    if (u && u[3] !== l) {
                        for (c /= 2, l = l || u[3], u = +c || 1; a--;) C.style(e, t, u + l), (1 - i) * (1 - (i = s() / c || .5)) <= 0 && (a = 0), u /= i;
                        u *= 2, C.style(e, t, u + l), n = n || []
                    }
                    return n && (u = +u || +c || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = u, r.end = o)), o
                }
                var ue = {};

                function de(e) {
                    var t, n = e.ownerDocument,
                        r = e.nodeName,
                        o = ue[r];
                    return o || (t = n.body.appendChild(n.createElement(r)), o = C.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), ue[r] = o, o)
                }

                function fe(e, t) {
                    for (var n, r, o = [], i = 0, a = e.length; i < a; i++)(r = e[i]).style && (n = r.style.display, t ? ("none" === n && (o[i] = K.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && ce(r) && (o[i] = de(r))) : "none" !== n && (o[i] = "none", K.set(r, "display", n)));
                    for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
                    return e
                }
                C.fn.extend({
                    show: function() {
                        return fe(this, !0)
                    },
                    hide: function() {
                        return fe(this)
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                            ce(this) ? C(this).show() : C(this).hide()
                        }))
                    }
                });
                var pe, he, me = /^(?:checkbox|radio)$/i,
                    ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    ve = /^$|^module$|\/(?:java|ecma)script/i;
                pe = b.createDocumentFragment().appendChild(b.createElement("div")), (he = b.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), pe.appendChild(he), g.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked, pe.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue, pe.innerHTML = "<option></option>", g.option = !!pe.lastChild;
                var ye = {
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

                function be(e, t) {
                    var n;
                    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? C.merge([e], n) : n
                }

                function xe(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
                }
                ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, g.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
                var we = /<|&#?\w+;/;

                function Te(e, t, n, r, o) {
                    for (var i, a, s, c, l, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                        if ((i = e[p]) || 0 === i)
                            if ("object" === T(i)) C.merge(f, i.nodeType ? [i] : i);
                            else if (we.test(i)) {
                                for (a = a || d.appendChild(t.createElement("div")), s = (ge.exec(i) || ["", ""])[1].toLowerCase(), c = ye[s] || ye._default, a.innerHTML = c[1] + C.htmlPrefilter(i) + c[2], u = c[0]; u--;) a = a.lastChild;
                                C.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
                            } else f.push(t.createTextNode(i));
                    for (d.textContent = "", p = 0; i = f[p++];)
                        if (r && C.inArray(i, r) > -1) o && o.push(i);
                        else if (l = ae(i), a = be(d.appendChild(i), "script"), l && xe(a), n)
                            for (u = 0; i = a[u++];) ve.test(i.type || "") && n.push(i);
                    return d
                }
                var Ce = /^key/,
                    ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                    Se = /^([^.]*)(?:\.(.+)|)/;

                function Ee() {
                    return !0
                }

                function Ae() {
                    return !1
                }

                function je(e, t) {
                    return e === function() {
                        try {
                            return b.activeElement
                        } catch (e) {}
                    }() == ("focus" === t)
                }

                function Ne(e, t, n, r, o, i) {
                    var a, s;
                    if ("object" == typeof t) {
                        for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ne(e, s, n, r, t[s], i);
                        return e
                    }
                    if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Ae;
                    else if (!o) return e;
                    return 1 === i && (a = o, (o = function(e) {
                        return C().off(e), a.apply(this, arguments)
                    }).guid = a.guid || (a.guid = C.guid++)), e.each((function() {
                        C.event.add(this, t, o, r, n)
                    }))
                }

                function _e(e, t, n) {
                    n ? (K.set(e, t, !1), C.event.add(e, t, {
                        namespace: !1,
                        handler: function(e) {
                            var r, o, i = K.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (i.length)(C.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (i = s.call(arguments), K.set(this, t, i), r = n(this, t), this[t](), i !== (o = K.get(this, t)) || r ? K.set(this, t, !1) : o = {}, i !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
                            } else i.length && (K.set(this, t, {
                                value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this)
                            }), e.stopImmediatePropagation())
                        }
                    })) : void 0 === K.get(e, t) && C.event.add(e, t, Ee)
                }
                C.event = {
                    global: {},
                    add: function(e, t, n, r, o) {
                        var i, a, s, c, l, u, d, f, p, h, m, g = K.get(e);
                        if (J(e))
                            for (n.handler && (n = (i = n).handler, o = i.selector), o && C.find.matchesSelector(ie, o), n.guid || (n.guid = C.guid++), (c = g.events) || (c = g.events = Object.create(null)), (a = g.handle) || (a = g.handle = function(t) {
                                return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                            }), l = (t = (t || "").match(P) || [""]).length; l--;) p = m = (s = Se.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (d = C.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = C.event.special[p] || {}, u = C.extend({
                                type: p,
                                origType: m,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: o,
                                needsContext: o && C.expr.match.needsContext.test(o),
                                namespace: h.join(".")
                            }, i), (f = c[p]) || ((f = c[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), C.event.global[p] = !0)
                    },
                    remove: function(e, t, n, r, o) {
                        var i, a, s, c, l, u, d, f, p, h, m, g = K.hasData(e) && K.get(e);
                        if (g && (c = g.events)) {
                            for (l = (t = (t || "").match(P) || [""]).length; l--;)
                                if (p = m = (s = Se.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                                    for (d = C.event.special[p] || {}, f = c[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = f.length; i--;) u = f[i], !o && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (f.splice(i, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                                    a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || C.removeEvent(e, p, g.handle), delete c[p])
                                } else
                                    for (p in c) C.event.remove(e, p + t[l], n, r, !0);
                            C.isEmptyObject(c) && K.remove(e, "handle events")
                        }
                    },
                    dispatch: function(e) {
                        var t, n, r, o, i, a, s = new Array(arguments.length),
                            c = C.event.fix(e),
                            l = (K.get(this, "events") || Object.create(null))[c.type] || [],
                            u = C.event.special[c.type] || {};
                        for (s[0] = c, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                        if (c.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, c)) {
                            for (a = C.event.handlers.call(this, c, l), t = 0;
                                 (o = a[t++]) && !c.isPropagationStopped();)
                                for (c.currentTarget = o.elem, n = 0;
                                     (i = o.handlers[n++]) && !c.isImmediatePropagationStopped();) c.rnamespace && !1 !== i.namespace && !c.rnamespace.test(i.namespace) || (c.handleObj = i, c.data = i.data, void 0 !== (r = ((C.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (c.result = r) && (c.preventDefault(), c.stopPropagation()));
                            return u.postDispatch && u.postDispatch.call(this, c), c.result
                        }
                    },
                    handlers: function(e, t) {
                        var n, r, o, i, a, s = [],
                            c = t.delegateCount,
                            l = e.target;
                        if (c && l.nodeType && !("click" === e.type && e.button >= 1))
                            for (; l !== this; l = l.parentNode || this)
                                if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                    for (i = [], a = {}, n = 0; n < c; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? C(o, this).index(l) > -1 : C.find(o, this, null, [l]).length), a[o] && i.push(r);
                                    i.length && s.push({
                                        elem: l,
                                        handlers: i
                                    })
                                } return l = this, c < t.length && s.push({
                            elem: l,
                            handlers: t.slice(c)
                        }), s
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(C.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: v(t) ? function() {
                                if (this.originalEvent) return t(this.originalEvent)
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[e]
                            },
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                })
                            }
                        })
                    },
                    fix: function(e) {
                        return e[C.expando] ? e : new C.Event(e)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return me.test(t.type) && t.click && N(t, "input") && _e(t, "click", Ee), !1
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return me.test(t.type) && t.click && N(t, "input") && _e(t, "click"), !0
                            },
                            _default: function(e) {
                                var t = e.target;
                                return me.test(t.type) && t.click && N(t, "input") && K.get(t, "click") || N(t, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    }
                }, C.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }, C.Event = function(e, t) {
                    if (!(this instanceof C.Event)) return new C.Event(e, t);
                    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ae, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
                }, C.Event.prototype = {
                    constructor: C.Event,
                    isDefaultPrevented: Ae,
                    isPropagationStopped: Ae,
                    isImmediatePropagationStopped: Ae,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                    }
                }, C.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: function(e) {
                        var t = e.button;
                        return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                    }
                }, C.event.addProp), C.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    C.event.special[e] = {
                        setup: function() {
                            return _e(this, e, je), !1
                        },
                        trigger: function() {
                            return _e(this, e), !0
                        },
                        delegateType: t
                    }
                })), C.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(e, t) {
                    C.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, r = this,
                                o = e.relatedTarget,
                                i = e.handleObj;
                            return o && (o === r || C.contains(r, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                        }
                    }
                })), C.fn.extend({
                    on: function(e, t, n, r) {
                        return Ne(this, e, t, n, r)
                    },
                    one: function(e, t, n, r) {
                        return Ne(this, e, t, n, r, 1)
                    },
                    off: function(e, t, n) {
                        var r, o;
                        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                        if ("object" == typeof e) {
                            for (o in e) this.off(o, t, e[o]);
                            return this
                        }
                        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ae), this.each((function() {
                            C.event.remove(this, e, n, t)
                        }))
                    }
                });
                var De = /<script|<style|<link/i,
                    Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                function qe(e, t) {
                    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
                }

                function Ie(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                }

                function He(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
                }

                function Pe(e, t) {
                    var n, r, o, i, a, s;
                    if (1 === t.nodeType) {
                        if (K.hasData(e) && (s = K.get(e).events))
                            for (o in K.remove(t, "handle events"), s)
                                for (n = 0, r = s[o].length; n < r; n++) C.event.add(t, o, s[o][n]);
                        Q.hasData(e) && (i = Q.access(e), a = C.extend({}, i), Q.set(t, a))
                    }
                }

                function $e(e, t) {
                    var n = t.nodeName.toLowerCase();
                    "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                }

                function Me(e, t, n, r) {
                    t = c(t);
                    var o, i, a, s, l, u, d = 0,
                        f = e.length,
                        p = f - 1,
                        h = t[0],
                        m = v(h);
                    if (m || f > 1 && "string" == typeof h && !g.checkClone && Le.test(h)) return e.each((function(o) {
                        var i = e.eq(o);
                        m && (t[0] = h.call(this, o, i.html())), Me(i, t, n, r)
                    }));
                    if (f && (i = (o = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
                        for (s = (a = C.map(be(o, "script"), Ie)).length; d < f; d++) l = o, d !== p && (l = C.clone(l, !0, !0), s && C.merge(a, be(l, "script"))), n.call(e[d], l, d);
                        if (s)
                            for (u = a[a.length - 1].ownerDocument, C.map(a, He), d = 0; d < s; d++) l = a[d], ve.test(l.type || "") && !K.access(l, "globalEval") && C.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
                                nonce: l.nonce || l.getAttribute("nonce")
                            }, u) : w(l.textContent.replace(Oe, ""), l, u))
                    }
                    return e
                }

                function Re(e, t, n) {
                    for (var r, o = t ? C.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || C.cleanData(be(r)), r.parentNode && (n && ae(r) && xe(be(r, "script")), r.parentNode.removeChild(r));
                    return e
                }
                C.extend({
                    htmlPrefilter: function(e) {
                        return e
                    },
                    clone: function(e, t, n) {
                        var r, o, i, a, s = e.cloneNode(!0),
                            c = ae(e);
                        if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                            for (a = be(s), r = 0, o = (i = be(e)).length; r < o; r++) $e(i[r], a[r]);
                        if (t)
                            if (n)
                                for (i = i || be(e), a = a || be(s), r = 0, o = i.length; r < o; r++) Pe(i[r], a[r]);
                            else Pe(e, s);
                        return (a = be(s, "script")).length > 0 && xe(a, !c && be(e, "script")), s
                    },
                    cleanData: function(e) {
                        for (var t, n, r, o = C.event.special, i = 0; void 0 !== (n = e[i]); i++)
                            if (J(n)) {
                                if (t = n[K.expando]) {
                                    if (t.events)
                                        for (r in t.events) o[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                                    n[K.expando] = void 0
                                }
                                n[Q.expando] && (n[Q.expando] = void 0)
                            }
                    }
                }), C.fn.extend({
                    detach: function(e) {
                        return Re(this, e, !0)
                    },
                    remove: function(e) {
                        return Re(this, e)
                    },
                    text: function(e) {
                        return U(this, (function(e) {
                            return void 0 === e ? C.text(this) : this.empty().each((function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            }))
                        }), null, e, arguments.length)
                    },
                    append: function() {
                        return Me(this, arguments, (function(e) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
                        }))
                    },
                    prepend: function() {
                        return Me(this, arguments, (function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = qe(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        }))
                    },
                    before: function() {
                        return Me(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        }))
                    },
                    after: function() {
                        return Me(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        }))
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(be(e, !1)), e.textContent = "");
                        return this
                    },
                    clone: function(e, t) {
                        return e = null != e && e, t = null == t ? e : t, this.map((function() {
                            return C.clone(this, e, t)
                        }))
                    },
                    html: function(e) {
                        return U(this, (function(e) {
                            var t = this[0] || {},
                                n = 0,
                                r = this.length;
                            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                            if ("string" == typeof e && !De.test(e) && !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = C.htmlPrefilter(e);
                                try {
                                    for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(be(t, !1)), t.innerHTML = e);
                                    t = 0
                                } catch (e) {}
                            }
                            t && this.empty().append(e)
                        }), null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = [];
                        return Me(this, arguments, (function(t) {
                            var n = this.parentNode;
                            C.inArray(this, e) < 0 && (C.cleanData(be(this)), n && n.replaceChild(t, this))
                        }), e)
                    }
                }), C.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(e, t) {
                    C.fn[e] = function(e) {
                        for (var n, r = [], o = C(e), i = o.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), C(o[a])[t](n), l.apply(r, n.get());
                        return this.pushStack(r)
                    }
                }));
                var Be = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
                    Fe = function(e) {
                        var t = e.ownerDocument.defaultView;
                        return t && t.opener || (t = n), t.getComputedStyle(e)
                    },
                    We = function(e, t, n) {
                        var r, o, i = {};
                        for (o in t) i[o] = e.style[o], e.style[o] = t[o];
                        for (o in r = n.call(e), t) e.style[o] = i[o];
                        return r
                    },
                    Ue = new RegExp(oe.join("|"), "i");

                function ze(e, t, n) {
                    var r, o, i, a, s = e.style;
                    return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ae(e) || (a = C.style(e, t)), !g.pixelBoxStyles() && Be.test(a) && Ue.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
                }

                function Ve(e, t) {
                    return {
                        get: function() {
                            if (!e()) return (this.get = t).apply(this, arguments);
                            delete this.get
                        }
                    }
                }! function() {
                    function e() {
                        if (u) {
                            l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(l).appendChild(u);
                            var e = n.getComputedStyle(u);
                            r = "1%" !== e.top, c = 12 === t(e.marginLeft), u.style.right = "60%", a = 36 === t(e.right), o = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(l), u = null
                        }
                    }

                    function t(e) {
                        return Math.round(parseFloat(e))
                    }
                    var r, o, i, a, s, c, l = b.createElement("div"),
                        u = b.createElement("div");
                    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === u.style.backgroundClip, C.extend(g, {
                        boxSizingReliable: function() {
                            return e(), o
                        },
                        pixelBoxStyles: function() {
                            return e(), a
                        },
                        pixelPosition: function() {
                            return e(), r
                        },
                        reliableMarginLeft: function() {
                            return e(), c
                        },
                        scrollboxSize: function() {
                            return e(), i
                        },
                        reliableTrDimensions: function() {
                            var e, t, r, o;
                            return null == s && (e = b.createElement("table"), t = b.createElement("tr"), r = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", r.style.height = "9px", ie.appendChild(e).appendChild(t).appendChild(r), o = n.getComputedStyle(t), s = parseInt(o.height) > 3, ie.removeChild(e)), s
                        }
                    }))
                }();
                var Xe = ["Webkit", "Moz", "ms"],
                    Ge = b.createElement("div").style,
                    Je = {};

                function Ye(e) {
                    return C.cssProps[e] || Je[e] || (e in Ge ? e : Je[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                            if ((e = Xe[n] + t) in Ge) return e
                    }(e) || e)
                }
                var Ke = /^(none|table(?!-c[ea]).+)/,
                    Qe = /^--/,
                    Ze = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    },
                    et = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    };

                function tt(e, t, n) {
                    var r = re.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                }

                function nt(e, t, n, r, o, i) {
                    var a = "width" === t ? 1 : 0,
                        s = 0,
                        c = 0;
                    if (n === (r ? "border" : "content")) return 0;
                    for (; a < 4; a += 2) "margin" === n && (c += C.css(e, n + oe[a], !0, o)), r ? ("content" === n && (c -= C.css(e, "padding" + oe[a], !0, o)), "margin" !== n && (c -= C.css(e, "border" + oe[a] + "Width", !0, o))) : (c += C.css(e, "padding" + oe[a], !0, o), "padding" !== n ? c += C.css(e, "border" + oe[a] + "Width", !0, o) : s += C.css(e, "border" + oe[a] + "Width", !0, o));
                    return !r && i >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - c - s - .5)) || 0), c
                }

                function rt(e, t, n) {
                    var r = Fe(e),
                        o = (!g.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                        i = o,
                        a = ze(e, t, r),
                        s = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (Be.test(a)) {
                        if (!n) return a;
                        a = "auto"
                    }
                    return (!g.boxSizingReliable() && o || !g.reliableTrDimensions() && N(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, r), (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + nt(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
                }

                function ot(e, t, n, r, o) {
                    return new ot.prototype.init(e, t, n, r, o)
                }
                C.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = ze(e, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var o, i, a, s = G(t),
                                c = Qe.test(t),
                                l = e.style;
                            if (c || (t = Ye(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                            "string" == (i = typeof n) && (o = re.exec(n)) && o[1] && (n = le(e, t, o), i = "number"), null != n && n == n && ("number" !== i || c || (n += o && o[3] || (C.cssNumber[s] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (c ? l.setProperty(t, n) : l[t] = n))
                        }
                    },
                    css: function(e, t, n, r) {
                        var o, i, a, s = G(t);
                        return Qe.test(t) || (t = Ye(s)), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = ze(e, t, r)), "normal" === o && t in et && (o = et[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
                    }
                }), C.each(["height", "width"], (function(e, t) {
                    C.cssHooks[t] = {
                        get: function(e, n, r) {
                            if (n) return !Ke.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, t, r) : We(e, Ze, (function() {
                                return rt(e, t, r)
                            }))
                        },
                        set: function(e, n, r) {
                            var o, i = Fe(e),
                                a = !g.scrollboxSize() && "absolute" === i.position,
                                s = (a || r) && "border-box" === C.css(e, "boxSizing", !1, i),
                                c = r ? nt(e, t, r, s, i) : 0;
                            return s && a && (c -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - nt(e, t, "border", !1, i) - .5)), c && (o = re.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = C.css(e, t)), tt(0, n, c)
                        }
                    }
                })), C.cssHooks.marginLeft = Ve(g.reliableMarginLeft, (function(e, t) {
                    if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                        marginLeft: 0
                    }, (function() {
                        return e.getBoundingClientRect().left
                    }))) + "px"
                })), C.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(e, t) {
                    C.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + oe[r] + t] = i[r] || i[r - 2] || i[0];
                            return o
                        }
                    }, "margin" !== e && (C.cssHooks[e + t].set = tt)
                })), C.fn.extend({
                    css: function(e, t) {
                        return U(this, (function(e, t, n) {
                            var r, o, i = {},
                                a = 0;
                            if (Array.isArray(t)) {
                                for (r = Fe(e), o = t.length; a < o; a++) i[t[a]] = C.css(e, t[a], !1, r);
                                return i
                            }
                            return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                        }), e, t, arguments.length > 1)
                    }
                }), C.Tween = ot, ot.prototype = {
                    constructor: ot,
                    init: function(e, t, n, r, o, i) {
                        this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (C.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var e = ot.propHooks[this.prop];
                        return e && e.get ? e.get(this) : ot.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = ot.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this
                    }
                }, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                        },
                        set: function(e) {
                            C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                }, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                }, C.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                }, C.fx = ot.prototype.init, C.fx.step = {};
                var it, at, st = /^(?:toggle|show|hide)$/,
                    ct = /queueHooks$/;

                function lt() {
                    at && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(lt) : n.setTimeout(lt, C.fx.interval), C.fx.tick())
                }

                function ut() {
                    return n.setTimeout((function() {
                        it = void 0
                    })), it = Date.now()
                }

                function dt(e, t) {
                    var n, r = 0,
                        o = {
                            height: e
                        };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = oe[r])] = o["padding" + n] = e;
                    return t && (o.opacity = o.width = e), o
                }

                function ft(e, t, n) {
                    for (var r, o = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), i = 0, a = o.length; i < a; i++)
                        if (r = o[i].call(n, t, e)) return r
                }

                function pt(e, t, n) {
                    var r, o, i = 0,
                        a = pt.prefilters.length,
                        s = C.Deferred().always((function() {
                            delete c.elem
                        })),
                        c = function() {
                            if (o) return !1;
                            for (var t = it || ut(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, a = l.tweens.length; i < a; i++) l.tweens[i].run(r);
                            return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                        },
                        l = s.promise({
                            elem: e,
                            props: C.extend({}, t),
                            opts: C.extend(!0, {
                                specialEasing: {},
                                easing: C.easing._default
                            }, n),
                            originalProperties: t,
                            originalOptions: n,
                            startTime: it || ut(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function(t, n) {
                                var r = C.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                                return l.tweens.push(r), r
                            },
                            stop: function(t) {
                                var n = 0,
                                    r = t ? l.tweens.length : 0;
                                if (o) return this;
                                for (o = !0; n < r; n++) l.tweens[n].run(1);
                                return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                            }
                        }),
                        u = l.props;
                    for (function(e, t) {
                        var n, r, o, i, a;
                        for (n in e)
                            if (o = t[r = G(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = C.cssHooks[r]) && "expand" in a)
                                for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
                            else t[r] = o
                    }(u, l.opts.specialEasing); i < a; i++)
                        if (r = pt.prefilters[i].call(l, e, u, l.opts)) return v(r.stop) && (C._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                    return C.map(u, ft, l), v(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), C.fx.timer(C.extend(c, {
                        elem: e,
                        anim: l,
                        queue: l.opts.queue
                    })), l
                }
                C.Animation = C.extend(pt, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return le(n.elem, e, re.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        v(e) ? (t = e, e = ["*"]) : e = e.match(P);
                        for (var n, r = 0, o = e.length; r < o; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var r, o, i, a, s, c, l, u, d = "width" in t || "height" in t,
                            f = this,
                            p = {},
                            h = e.style,
                            m = e.nodeType && ce(e),
                            g = K.get(e, "fxshow");
                        for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                            a.unqueued || s()
                        }), a.unqueued++, f.always((function() {
                            f.always((function() {
                                a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
                            }))
                        }))), t)
                            if (o = t[r], st.test(o)) {
                                if (delete t[r], i = i || "toggle" === o, o === (m ? "hide" : "show")) {
                                    if ("show" !== o || !g || void 0 === g[r]) continue;
                                    m = !0
                                }
                                p[r] = g && g[r] || C.style(e, r)
                            } if ((c = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                            for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = g && g.display) && (l = K.get(e, "display")), "none" === (u = C.css(e, "display")) && (l ? u = l : (fe([e], !0), l = e.style.display || l, u = C.css(e, "display"), fe([e]))), ("inline" === u || "inline-block" === u && null != l) && "none" === C.css(e, "float") && (c || (f.done((function() {
                                h.display = l
                            })), null == l && (u = h.display, l = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always((function() {
                                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                            }))), c = !1, p) c || (g ? "hidden" in g && (m = g.hidden) : g = K.access(e, "fxshow", {
                                display: l
                            }), i && (g.hidden = !m), m && fe([e], !0), f.done((function() {
                                for (r in m || fe([e]), K.remove(e, "fxshow"), p) C.style(e, r, p[r])
                            }))), c = ft(m ? g[r] : 0, r, f), r in g || (g[r] = c.start, m && (c.end = c.start, c.start = 0))
                    }],
                    prefilter: function(e, t) {
                        t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
                    }
                }), C.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? C.extend({}, e) : {
                        complete: n || !n && t || v(e) && e,
                        duration: e,
                        easing: n && t || t && !v(t) && t
                    };
                    return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        v(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
                    }, r
                }, C.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(ce).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var o = C.isEmptyObject(e),
                            i = C.speed(t, n, r),
                            a = function() {
                                var t = pt(this, C.extend({}, e), i);
                                (o || K.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                            var t = !0,
                                o = null != e && e + "queueHooks",
                                i = C.timers,
                                a = K.get(this);
                            if (o) a[o] && a[o].stop && r(a[o]);
                            else
                                for (o in a) a[o] && a[o].stop && ct.test(o) && r(a[o]);
                            for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                            !t && n || C.dequeue(this, e)
                        }))
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each((function() {
                            var t, n = K.get(this),
                                r = n[e + "queue"],
                                o = n[e + "queueHooks"],
                                i = C.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, C.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        }))
                    }
                }), C.each(["toggle", "show", "hide"], (function(e, t) {
                    var n = C.fn[t];
                    C.fn[t] = function(e, r, o) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, r, o)
                    }
                })), C.each({
                    slideDown: dt("show"),
                    slideUp: dt("hide"),
                    slideToggle: dt("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(e, t) {
                    C.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                })), C.timers = [], C.fx.tick = function() {
                    var e, t = 0,
                        n = C.timers;
                    for (it = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || C.fx.stop(), it = void 0
                }, C.fx.timer = function(e) {
                    C.timers.push(e), C.fx.start()
                }, C.fx.interval = 13, C.fx.start = function() {
                    at || (at = !0, lt())
                }, C.fx.stop = function() {
                    at = null
                }, C.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, C.fn.delay = function(e, t) {
                    return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, r) {
                        var o = n.setTimeout(t, e);
                        r.stop = function() {
                            n.clearTimeout(o)
                        }
                    }))
                },
                    function() {
                        var e = b.createElement("input"),
                            t = b.createElement("select").appendChild(b.createElement("option"));
                        e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value
                    }();
                var ht, mt = C.expr.attrHandle;
                C.fn.extend({
                    attr: function(e, t) {
                        return U(this, C.attr, e, t, arguments.length > 1)
                    },
                    removeAttr: function(e) {
                        return this.each((function() {
                            C.removeAttr(this, e)
                        }))
                    }
                }), C.extend({
                    attr: function(e, t, n) {
                        var r, o, i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === i && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!g.radioValue && "radio" === t && N(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t
                                }
                            }
                        }
                    },
                    removeAttr: function(e, t) {
                        var n, r = 0,
                            o = t && t.match(P);
                        if (o && 1 === e.nodeType)
                            for (; n = o[r++];) e.removeAttribute(n)
                    }
                }), ht = {
                    set: function(e, t, n) {
                        return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
                    }
                }, C.each(C.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                    var n = mt[t] || C.find.attr;
                    mt[t] = function(e, t, r) {
                        var o, i, a = t.toLowerCase();
                        return r || (i = mt[a], mt[a] = o, o = null != n(e, t, r) ? a : null, mt[a] = i), o
                    }
                }));
                var gt = /^(?:input|select|textarea|button)$/i,
                    vt = /^(?:a|area)$/i;

                function yt(e) {
                    return (e.match(P) || []).join(" ")
                }

                function bt(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }

                function xt(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
                }
                C.fn.extend({
                    prop: function(e, t) {
                        return U(this, C.prop, e, t, arguments.length > 1)
                    },
                    removeProp: function(e) {
                        return this.each((function() {
                            delete this[C.propFix[e] || e]
                        }))
                    }
                }), C.extend({
                    prop: function(e, t, n) {
                        var r, o, i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i) return 1 === i && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = C.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }), g.optSelected || (C.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex, null
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                    }
                }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                    C.propFix[this.toLowerCase()] = this
                })), C.fn.extend({
                    addClass: function(e) {
                        var t, n, r, o, i, a, s, c = 0;
                        if (v(e)) return this.each((function(t) {
                            C(this).addClass(e.call(this, t, bt(this)))
                        }));
                        if ((t = xt(e)).length)
                            for (; n = this[c++];)
                                if (o = bt(n), r = 1 === n.nodeType && " " + yt(o) + " ") {
                                    for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                    o !== (s = yt(r)) && n.setAttribute("class", s)
                                } return this
                    },
                    removeClass: function(e) {
                        var t, n, r, o, i, a, s, c = 0;
                        if (v(e)) return this.each((function(t) {
                            C(this).removeClass(e.call(this, t, bt(this)))
                        }));
                        if (!arguments.length) return this.attr("class", "");
                        if ((t = xt(e)).length)
                            for (; n = this[c++];)
                                if (o = bt(n), r = 1 === n.nodeType && " " + yt(o) + " ") {
                                    for (a = 0; i = t[a++];)
                                        for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                                    o !== (s = yt(r)) && n.setAttribute("class", s)
                                } return this
                    },
                    toggleClass: function(e, t) {
                        var n = typeof e,
                            r = "string" === n || Array.isArray(e);
                        return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function(n) {
                            C(this).toggleClass(e.call(this, n, bt(this), t), t)
                        })) : this.each((function() {
                            var t, o, i, a;
                            if (r)
                                for (o = 0, i = C(this), a = xt(e); t = a[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                            else void 0 !== e && "boolean" !== n || ((t = bt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
                        }))
                    },
                    hasClass: function(e) {
                        var t, n, r = 0;
                        for (t = " " + e + " "; n = this[r++];)
                            if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1) return !0;
                        return !1
                    }
                });
                var wt = /\r/g;
                C.fn.extend({
                    val: function(e) {
                        var t, n, r, o = this[0];
                        return arguments.length ? (r = v(e), this.each((function(n) {
                            var o;
                            1 === this.nodeType && (null == (o = r ? e.call(this, n, C(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = C.map(o, (function(e) {
                                return null == e ? "" : e + ""
                            }))), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                        }))) : o ? (t = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
                    }
                }), C.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = C.find.attr(e, "value");
                                return null != t ? t : yt(C.text(e))
                            }
                        },
                        select: {
                            get: function(e) {
                                var t, n, r, o = e.options,
                                    i = e.selectedIndex,
                                    a = "select-one" === e.type,
                                    s = a ? null : [],
                                    c = a ? i + 1 : o.length;
                                for (r = i < 0 ? c : a ? i : 0; r < c; r++)
                                    if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                        if (t = C(n).val(), a) return t;
                                        s.push(t)
                                    } return s
                            },
                            set: function(e, t) {
                                for (var n, r, o = e.options, i = C.makeArray(t), a = o.length; a--;)((r = o[a]).selected = C.inArray(C.valHooks.option.get(r), i) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), i
                            }
                        }
                    }
                }), C.each(["radio", "checkbox"], (function() {
                    C.valHooks[this] = {
                        set: function(e, t) {
                            if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1
                        }
                    }, g.checkOn || (C.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    })
                })), g.focusin = "onfocusin" in n;
                var Tt = /^(?:focusinfocus|focusoutblur)$/,
                    Ct = function(e) {
                        e.stopPropagation()
                    };
                C.extend(C.event, {
                    trigger: function(e, t, r, o) {
                        var i, a, s, c, l, u, d, f, h = [r || b],
                            m = p.call(e, "type") ? e.type : e,
                            g = p.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (a = f = s = r = r || b, 3 !== r.nodeType && 8 !== r.nodeType && !Tt.test(m + C.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."), m = g.shift(), g.sort()), l = m.indexOf(":") < 0 && "on" + m, (e = e[C.expando] ? e : new C.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : C.makeArray(t, [e]), d = C.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, t))) {
                            if (!o && !d.noBubble && !y(r)) {
                                for (c = d.delegateType || m, Tt.test(c + m) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                                s === (r.ownerDocument || b) && h.push(s.defaultView || s.parentWindow || n)
                            }
                            for (i = 0;
                                 (a = h[i++]) && !e.isPropagationStopped();) f = a, e.type = i > 1 ? c : d.bindType || m, (u = (K.get(a, "events") || Object.create(null))[e.type] && K.get(a, "handle")) && u.apply(a, t), (u = l && a[l]) && u.apply && J(a) && (e.result = u.apply(a, t), !1 === e.result && e.preventDefault());
                            return e.type = m, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), t) || !J(r) || l && v(r[m]) && !y(r) && ((s = r[l]) && (r[l] = null), C.event.triggered = m, e.isPropagationStopped() && f.addEventListener(m, Ct), r[m](), e.isPropagationStopped() && f.removeEventListener(m, Ct), C.event.triggered = void 0, s && (r[l] = s)), e.result
                        }
                    },
                    simulate: function(e, t, n) {
                        var r = C.extend(new C.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        C.event.trigger(r, null, t)
                    }
                }), C.fn.extend({
                    trigger: function(e, t) {
                        return this.each((function() {
                            C.event.trigger(e, t, this)
                        }))
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n) return C.event.trigger(e, t, n, !0)
                    }
                }), g.focusin || C.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    var n = function(e) {
                        C.event.simulate(t, e.target, C.event.fix(e))
                    };
                    C.event.special[t] = {
                        setup: function() {
                            var r = this.ownerDocument || this.document || this,
                                o = K.access(r, t);
                            o || r.addEventListener(e, n, !0), K.access(r, t, (o || 0) + 1)
                        },
                        teardown: function() {
                            var r = this.ownerDocument || this.document || this,
                                o = K.access(r, t) - 1;
                            o ? K.access(r, t, o) : (r.removeEventListener(e, n, !0), K.remove(r, t))
                        }
                    }
                }));
                var kt = n.location,
                    St = {
                        guid: Date.now()
                    },
                    Et = /\?/;
                C.parseXML = function(e) {
                    var t;
                    if (!e || "string" != typeof e) return null;
                    try {
                        t = (new n.DOMParser).parseFromString(e, "text/xml")
                    } catch (e) {
                        t = void 0
                    }
                    return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
                };
                var At = /\[\]$/,
                    jt = /\r?\n/g,
                    Nt = /^(?:submit|button|image|reset|file)$/i,
                    _t = /^(?:input|select|textarea|keygen)/i;

                function Dt(e, t, n, r) {
                    var o;
                    if (Array.isArray(t)) C.each(t, (function(t, o) {
                        n || At.test(e) ? r(e, o) : Dt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
                    }));
                    else if (n || "object" !== T(t)) r(e, t);
                    else
                        for (o in t) Dt(e + "[" + o + "]", t[o], n, r)
                }
                C.param = function(e, t) {
                    var n, r = [],
                        o = function(e, t) {
                            var n = v(t) ? t() : t;
                            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                        };
                    if (null == e) return "";
                    if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, (function() {
                        o(this.name, this.value)
                    }));
                    else
                        for (n in e) Dt(n, e[n], t, o);
                    return r.join("&")
                }, C.fn.extend({
                    serialize: function() {
                        return C.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var e = C.prop(this, "elements");
                            return e ? C.makeArray(e) : this
                        })).filter((function() {
                            var e = this.type;
                            return this.name && !C(this).is(":disabled") && _t.test(this.nodeName) && !Nt.test(e) && (this.checked || !me.test(e))
                        })).map((function(e, t) {
                            var n = C(this).val();
                            return null == n ? null : Array.isArray(n) ? C.map(n, (function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(jt, "\r\n")
                                }
                            })) : {
                                name: t.name,
                                value: n.replace(jt, "\r\n")
                            }
                        })).get()
                    }
                });
                var Lt = /%20/g,
                    Ot = /#.*$/,
                    qt = /([?&])_=[^&]*/,
                    It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    Ht = /^(?:GET|HEAD)$/,
                    Pt = /^\/\//,
                    $t = {},
                    Mt = {},
                    Rt = "*/".concat("*"),
                    Bt = b.createElement("a");

                function Ft(e) {
                    return function(t, n) {
                        "string" != typeof t && (n = t, t = "*");
                        var r, o = 0,
                            i = t.toLowerCase().match(P) || [];
                        if (v(n))
                            for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                    }
                }

                function Wt(e, t, n, r) {
                    var o = {},
                        i = e === Mt;

                    function a(s) {
                        var c;
                        return o[s] = !0, C.each(e[s] || [], (function(e, s) {
                            var l = s(t, n, r);
                            return "string" != typeof l || i || o[l] ? i ? !(c = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                        })), c
                    }
                    return a(t.dataTypes[0]) || !o["*"] && a("*")
                }

                function Ut(e, t) {
                    var n, r, o = C.ajaxSettings.flatOptions || {};
                    for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && C.extend(!0, e, r), e
                }
                Bt.href = kt.href, C.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: kt.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Rt,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": C.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? Ut(Ut(e, C.ajaxSettings), t) : Ut(C.ajaxSettings, e)
                    },
                    ajaxPrefilter: Ft($t),
                    ajaxTransport: Ft(Mt),
                    ajax: function(e, t) {
                        "object" == typeof e && (t = e, e = void 0), t = t || {};
                        var r, o, i, a, s, c, l, u, d, f, p = C.ajaxSetup({}, t),
                            h = p.context || p,
                            m = p.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                            g = C.Deferred(),
                            v = C.Callbacks("once memory"),
                            y = p.statusCode || {},
                            x = {},
                            w = {},
                            T = "canceled",
                            k = {
                                readyState: 0,
                                getResponseHeader: function(e) {
                                    var t;
                                    if (l) {
                                        if (!a)
                                            for (a = {}; t = It.exec(i);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                        t = a[e.toLowerCase() + " "]
                                    }
                                    return null == t ? null : t.join(", ")
                                },
                                getAllResponseHeaders: function() {
                                    return l ? i : null
                                },
                                setRequestHeader: function(e, t) {
                                    return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                                },
                                overrideMimeType: function(e) {
                                    return null == l && (p.mimeType = e), this
                                },
                                statusCode: function(e) {
                                    var t;
                                    if (e)
                                        if (l) k.always(e[k.status]);
                                        else
                                            for (t in e) y[t] = [y[t], e[t]];
                                    return this
                                },
                                abort: function(e) {
                                    var t = e || T;
                                    return r && r.abort(t), S(0, t), this
                                }
                            };
                        if (g.promise(k), p.url = ((e || p.url || kt.href) + "").replace(Pt, kt.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(P) || [""], null == p.crossDomain) {
                            c = b.createElement("a");
                            try {
                                c.href = p.url, c.href = c.href, p.crossDomain = Bt.protocol + "//" + Bt.host != c.protocol + "//" + c.host
                            } catch (e) {
                                p.crossDomain = !0
                            }
                        }
                        if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)), Wt($t, p, t, k), l) return k;
                        for (d in (u = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ht.test(p.type), o = p.url.replace(Ot, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Lt, "+")) : (f = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (Et.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(qt, "$1"), f = (Et.test(o) ? "&" : "?") + "_=" + St.guid++ + f), p.url = o + f), p.ifModified && (C.lastModified[o] && k.setRequestHeader("If-Modified-Since", C.lastModified[o]), C.etag[o] && k.setRequestHeader("If-None-Match", C.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : p.accepts["*"]), p.headers) k.setRequestHeader(d, p.headers[d]);
                        if (p.beforeSend && (!1 === p.beforeSend.call(h, k, p) || l)) return k.abort();
                        if (T = "abort", v.add(p.complete), k.done(p.success), k.fail(p.error), r = Wt(Mt, p, t, k)) {
                            if (k.readyState = 1, u && m.trigger("ajaxSend", [k, p]), l) return k;
                            p.async && p.timeout > 0 && (s = n.setTimeout((function() {
                                k.abort("timeout")
                            }), p.timeout));
                            try {
                                l = !1, r.send(x, S)
                            } catch (e) {
                                if (l) throw e;
                                S(-1, e)
                            }
                        } else S(-1, "No Transport");

                        function S(e, t, a, c) {
                            var d, f, b, x, w, T = t;
                            l || (l = !0, s && n.clearTimeout(s), r = void 0, i = c || "", k.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, a && (x = function(e, t, n) {
                                for (var r, o, i, a, s = e.contents, c = e.dataTypes;
                                     "*" === c[0];) c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (o in s)
                                        if (s[o] && s[o].test(r)) {
                                            c.unshift(o);
                                            break
                                        } if (c[0] in n) i = c[0];
                                else {
                                    for (o in n) {
                                        if (!c[0] || e.converters[o + " " + c[0]]) {
                                            i = o;
                                            break
                                        }
                                        a || (a = o)
                                    }
                                    i = i || a
                                }
                                if (i) return i !== c[0] && c.unshift(i), n[i]
                            }(p, k, a)), !d && C.inArray("script", p.dataTypes) > -1 && (p.converters["text script"] = function() {}), x = function(e, t, n, r) {
                                var o, i, a, s, c, l = {},
                                    u = e.dataTypes.slice();
                                if (u[1])
                                    for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                                for (i = u.shift(); i;)
                                    if (e.responseFields[i] && (n[e.responseFields[i]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = i, i = u.shift())
                                        if ("*" === i) i = c;
                                        else if ("*" !== c && c !== i) {
                                            if (!(a = l[c + " " + i] || l["* " + i]))
                                                for (o in l)
                                                    if ((s = o.split(" "))[1] === i && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                                                        !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0], u.unshift(s[1]));
                                                        break
                                                    } if (!0 !== a)
                                                if (a && e.throws) t = a(t);
                                                else try {
                                                    t = a(t)
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: a ? e : "No conversion from " + c + " to " + i
                                                    }
                                                }
                                        }
                                return {
                                    state: "success",
                                    data: t
                                }
                            }(p, x, k, d), d ? (p.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (C.lastModified[o] = w), (w = k.getResponseHeader("etag")) && (C.etag[o] = w)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, f = x.data, d = !(b = x.error))) : (b = T, !e && T || (T = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || T) + "", d ? g.resolveWith(h, [f, T, k]) : g.rejectWith(h, [k, T, b]), k.statusCode(y), y = void 0, u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [k, p, d ? f : b]), v.fireWith(h, [k, T]), u && (m.trigger("ajaxComplete", [k, p]), --C.active || C.event.trigger("ajaxStop")))
                        }
                        return k
                    },
                    getJSON: function(e, t, n) {
                        return C.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return C.get(e, void 0, t, "script")
                    }
                }), C.each(["get", "post"], (function(e, t) {
                    C[t] = function(e, n, r, o) {
                        return v(n) && (o = o || r, r = n, n = void 0), C.ajax(C.extend({
                            url: e,
                            type: t,
                            dataType: o,
                            data: n,
                            success: r
                        }, C.isPlainObject(e) && e))
                    }
                })), C.ajaxPrefilter((function(e) {
                    var t;
                    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                })), C._evalUrl = function(e, t, n) {
                    return C.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            C.globalEval(e, t, n)
                        }
                    })
                }, C.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return this[0] && (v(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                            return e
                        })).append(this)), this
                    },
                    wrapInner: function(e) {
                        return v(e) ? this.each((function(t) {
                            C(this).wrapInner(e.call(this, t))
                        })) : this.each((function() {
                            var t = C(this),
                                n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        }))
                    },
                    wrap: function(e) {
                        var t = v(e);
                        return this.each((function(n) {
                            C(this).wrapAll(t ? e.call(this, n) : e)
                        }))
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each((function() {
                            C(this).replaceWith(this.childNodes)
                        })), this
                    }
                }), C.expr.pseudos.hidden = function(e) {
                    return !C.expr.pseudos.visible(e)
                }, C.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }, C.ajaxSettings.xhr = function() {
                    try {
                        return new n.XMLHttpRequest
                    } catch (e) {}
                };
                var zt = {
                        0: 200,
                        1223: 204
                    },
                    Vt = C.ajaxSettings.xhr();
                g.cors = !!Vt && "withCredentials" in Vt, g.ajax = Vt = !!Vt, C.ajaxTransport((function(e) {
                    var t, r;
                    if (g.cors || Vt && !e.crossDomain) return {
                        send: function(o, i) {
                            var a, s = e.xhr();
                            if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                for (a in e.xhrFields) s[a] = e.xhrFields[a];
                            for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) s.setRequestHeader(a, o[a]);
                            t = function(e) {
                                return function() {
                                    t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                        binary: s.response
                                    } : {
                                        text: s.responseText
                                    }, s.getAllResponseHeaders()))
                                }
                            }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                                4 === s.readyState && n.setTimeout((function() {
                                    t && r()
                                }))
                            }, t = t("abort");
                            try {
                                s.send(e.hasContent && e.data || null)
                            } catch (e) {
                                if (t) throw e
                            }
                        },
                        abort: function() {
                            t && t()
                        }
                    }
                })), C.ajaxPrefilter((function(e) {
                    e.crossDomain && (e.contents.script = !1)
                })), C.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return C.globalEval(e), e
                        }
                    }
                }), C.ajaxPrefilter("script", (function(e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                })), C.ajaxTransport("script", (function(e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs) return {
                        send: function(r, o) {
                            t = C("<script>").attr(e.scriptAttrs || {}).prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                            }), b.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }));
                var Xt, Gt = [],
                    Jt = /(=)\?(?=&|$)|\?\?/;
                C.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = Gt.pop() || C.expando + "_" + St.guid++;
                        return this[e] = !0, e
                    }
                }), C.ajaxPrefilter("json jsonp", (function(e, t, r) {
                    var o, i, a, s = !1 !== e.jsonp && (Jt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(e.data) && "data");
                    if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Jt, "$1" + o) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                        return a || C.error(o + " was not called"), a[0]
                    }, e.dataTypes[0] = "json", i = n[o], n[o] = function() {
                        a = arguments
                    }, r.always((function() {
                        void 0 === i ? C(n).removeProp(o) : n[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, Gt.push(o)), a && v(i) && i(a[0]), a = i = void 0
                    })), "script"
                })), g.createHTMLDocument = ((Xt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), C.parseHTML = function(e, t, n) {
                    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(r)) : t = b), i = !n && [], (o = _.exec(e)) ? [t.createElement(o[1])] : (o = Te([e], t, i), i && i.length && C(i).remove(), C.merge([], o.childNodes)));
                    var r, o, i
                }, C.fn.load = function(e, t, n) {
                    var r, o, i, a = this,
                        s = e.indexOf(" ");
                    return s > -1 && (r = yt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && C.ajax({
                        url: e,
                        type: o || "GET",
                        dataType: "html",
                        data: t
                    }).done((function(e) {
                        i = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
                    })).always(n && function(e, t) {
                        a.each((function() {
                            n.apply(this, i || [e.responseText, t, e])
                        }))
                    }), this
                }, C.expr.pseudos.animated = function(e) {
                    return C.grep(C.timers, (function(t) {
                        return e === t.elem
                    })).length
                }, C.offset = {
                    setOffset: function(e, t, n) {
                        var r, o, i, a, s, c, l = C.css(e, "position"),
                            u = C(e),
                            d = {};
                        "static" === l && (e.style.position = "relative"), s = u.offset(), i = C.css(e, "top"), c = C.css(e, "left"), ("absolute" === l || "fixed" === l) && (i + c).indexOf("auto") > -1 ? (a = (r = u.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(c) || 0), v(t) && (t = t.call(e, n, C.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d))
                    }
                }, C.fn.extend({
                    offset: function(e) {
                        if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                            C.offset.setOffset(this, e, t)
                        }));
                        var t, n, r = this[0];
                        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                            top: t.top + n.pageYOffset,
                            left: t.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n, r = this[0],
                                o = {
                                    top: 0,
                                    left: 0
                                };
                            if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
                            else {
                                for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0))
                            }
                            return {
                                top: t.top - o.top - C.css(r, "marginTop", !0),
                                left: t.left - o.left - C.css(r, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                            return e || ie
                        }))
                    }
                }), C.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(e, t) {
                    var n = "pageYOffset" === t;
                    C.fn[e] = function(r) {
                        return U(this, (function(e, r, o) {
                            var i;
                            if (y(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
                            i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
                        }), e, r, arguments.length)
                    }
                })), C.each(["top", "left"], (function(e, t) {
                    C.cssHooks[t] = Ve(g.pixelPosition, (function(e, n) {
                        if (n) return n = ze(e, t), Be.test(n) ? C(e).position()[t] + "px" : n
                    }))
                })), C.each({
                    Height: "height",
                    Width: "width"
                }, (function(e, t) {
                    C.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, (function(n, r) {
                        C.fn[r] = function(o, i) {
                            var a = arguments.length && (n || "boolean" != typeof o),
                                s = n || (!0 === o || !0 === i ? "margin" : "border");
                            return U(this, (function(t, n, o) {
                                var i;
                                return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? C.css(t, n, s) : C.style(t, n, o, s)
                            }), t, a ? o : void 0, a)
                        }
                    }))
                })), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                    C.fn[t] = function(e) {
                        return this.on(t, e)
                    }
                })), C.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    hover: function(e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                    C.fn[t] = function(e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                }));
                var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                C.proxy = function(e, t) {
                    var n, r, o;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = s.call(arguments, 2), (o = function() {
                        return e.apply(t || this, r.concat(s.call(arguments)))
                    }).guid = e.guid = e.guid || C.guid++, o
                }, C.holdReady = function(e) {
                    e ? C.readyWait++ : C.ready(!0)
                }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = N, C.isFunction = v, C.isWindow = y, C.camelCase = G, C.type = T, C.now = Date.now, C.isNumeric = function(e) {
                    var t = C.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                }, C.trim = function(e) {
                    return null == e ? "" : (e + "").replace(Yt, "")
                }, void 0 === (r = function() {
                    return C
                }.apply(t, [])) || (e.exports = r);
                var Kt = n.jQuery,
                    Qt = n.$;
                return C.noConflict = function(e) {
                    return n.$ === C && (n.$ = Qt), e && n.jQuery === C && (n.jQuery = Kt), C
                }, void 0 === o && (n.jQuery = n.$ = C), C
            }))
        }, function(e, t, n) {
            var r = n(2),
                o = n(3);
            "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
                [e.i, o, ""]
            ]), r(o, {
                insert: "head",
                singleton: !1
            }), e.exports = o.locals || {}
        }, function(e, t, n) {
            "use strict";
            var r, o = function() {
                    var e = {};
                    return function(t) {
                        if (void 0 === e[t]) {
                            var n = document.querySelector(t);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                n = n.contentDocument.head
                            } catch (e) {
                                n = null
                            }
                            e[t] = n
                        }
                        return e[t]
                    }
                }(),
                i = [];

            function a(e) {
                for (var t = -1, n = 0; n < i.length; n++)
                    if (i[n].identifier === e) {
                        t = n;
                        break
                    } return t
            }

            function s(e, t) {
                for (var n = {}, r = [], o = 0; o < e.length; o++) {
                    var s = e[o],
                        c = t.base ? s[0] + t.base : s[0],
                        l = n[c] || 0,
                        u = "".concat(c, " ").concat(l);
                    n[c] = l + 1;
                    var d = a(u),
                        f = {
                            css: s[1],
                            media: s[2],
                            sourceMap: s[3]
                        }; - 1 !== d ? (i[d].references++, i[d].updater(f)) : i.push({
                        identifier: u,
                        updater: m(f, t),
                        references: 1
                    }), r.push(u)
                }
                return r
            }

            function c(e) {
                var t = document.createElement("style"),
                    r = e.attributes || {};
                if (void 0 === r.nonce) {
                    var i = n.nc;
                    i && (r.nonce = i)
                }
                if (Object.keys(r).forEach((function(e) {
                    t.setAttribute(e, r[e])
                })), "function" == typeof e.insert) e.insert(t);
                else {
                    var a = o(e.insert || "head");
                    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(t)
                }
                return t
            }
            var l, u = (l = [], function(e, t) {
                return l[e] = t, l.filter(Boolean).join("\n")
            });

            function d(e, t, n, r) {
                var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (e.styleSheet) e.styleSheet.cssText = u(t, o);
                else {
                    var i = document.createTextNode(o),
                        a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
                }
            }

            function f(e, t, n) {
                var r = n.css,
                    o = n.media,
                    i = n.sourceMap;
                if (o ? e.setAttribute("media", o) : e.removeAttribute("media"), i && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet) e.styleSheet.cssText = r;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r))
                }
            }
            var p = null,
                h = 0;

            function m(e, t) {
                var n, r, o;
                if (t.singleton) {
                    var i = h++;
                    n = p || (p = c(t)), r = d.bind(null, n, i, !1), o = d.bind(null, n, i, !0)
                } else n = c(t), r = f.bind(null, n, t), o = function() {
                    ! function(e) {
                        if (null === e.parentNode) return !1;
                        e.parentNode.removeChild(e)
                    }(n)
                };
                return r(e),
                    function(t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                            r(e = t)
                        } else o()
                    }
            }
            e.exports = function(e, t) {
                (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = (void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r));
                var n = s(e = e || [], t);
                return function(e) {
                    if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                        for (var r = 0; r < n.length; r++) {
                            var o = a(n[r]);
                            i[o].references--
                        }
                        for (var c = s(e, t), l = 0; l < n.length; l++) {
                            var u = a(n[l]);
                            0 === i[u].references && (i[u].updater(), i.splice(u, 1))
                        }
                        n = c
                    }
                }
            }
        }, function(e, t, n) {
            (t = n(4)(!1)).push([e.i, '.vcomment .details{display:inline-block;position:relative}.vcomment .details>summary{list-style:none}.vcomment .details>summary::-webkit-details-marker,.vcomment .details>summary::before{display:none}.vcomment .details>summary:focus{outline:none}.vcomment .details:not([open])>:not(summary){display:none}.vcomment .details details-menu:after,.vcomment .details details-menu:before{top:-14px;right:7px;left:auto;position:absolute;border:7px solid transparent;border-bottom-color:#fff;content:" "}.vcomment .details details-menu:before{border-width:8px;border-bottom-color:#eee;top:-16px;right:6px}.vcomment a{text-decoration:none}.vcomment a:hover{text-decoration:underline}.vcomment__flex{display:flex}.vcomment__flex1{flex:1;min-width:1px}.vcomment__flexinline{display:inline-flex;align-items:center}.vcomment__flexcenter{-ms-grid-row-align:center;align-self:center}.vcomment__center{text-align:center}.vcomment__space{display:inline-block;width:5px}.vcomment__hr{display:block;height:5px}.vcomment__text{margin-left:10px;-ms-grid-row-align:center;align-self:center;color:#4285f4;cursor:pointer;font-size:16px}.vcomment__text:hover{color:rgba(0,0,0,0.38)}.vcomment__input{border:1px solid #d1d5da;background-color:#FAFAFA;border-radius:3px;box-shadow:inset 0 1px 2px rgba(27,31,35,0.075);padding:5px 63px 5px 10px;width:100%;line-height:22px;box-sizing:border-box}.vcomment__input:focus{background-color:#FFF;box-shadow:inset 0 1px 2px rgba(27,31,35,0.075),0 0 0 0.2em #dbedff;border:1px solid #4285f4;outline:none}.vcomment__btn{cursor:pointer;color:#fff;background-color:#60b044;border-radius:3px;padding:6px 12px;border:1px solid #569e3d;box-sizing:border-box;line-height:20px;white-space:nowrap;display:inline-block;font-size:14px}.vcomment__btn:disabled{opacity:0.3;cursor:not-allowed}.vcomment__btn:hover{text-decoration:none;border-color:#eee}.vcomment__btn:focus{outline:none}.vcomment__btn:active{box-shadow:0 2px 15px rgba(0,0,0,0.25) inset}.vcomment__btn--cancel{background-color:transparent;color:rgba(0,0,0,0.54);border:0}.vcomment__btn--cancel:hover{color:#586069}.vcomment__btn--comment2{position:absolute;top:10px;right:10px;border-radius:0 3px 3px 0}.vcomment__pointer{cursor:pointer;color:rgba(0,0,0,0.54);font-size:12px}.vcomment__pointer:hover{color:#586069}.vcomment__none{display:none}.vcomment__smaller{font-size:12px}.vcomment__fade{color:rgba(0,0,0,0.38)}.vcomment__gray{color:rgba(0,0,0,0.54)}.vcomment__meta{font-size:12px;color:rgba(0,0,0,0.38);line-height:18px}.vcomment__svg{height:10px;width:10px;fill:currentColor;display:inline-block;stroke-width:0;stroke:currentColor}.vcomment__red{color:#d23f31}.vcomment__layer{display:block;padding:5px 0;-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:scale-in;animation-name:scale-in;-webkit-animation-timing-function:cubic-bezier(0.2, 0, 0.13, 1.5);animation-timing-function:cubic-bezier(0.2, 0, 0.13, 1.5);position:absolute;background-color:#fff;line-height:20px;box-shadow:0 1px 2px rgba(0,0,0,0.06);border:1px solid #eee;border-radius:3px;min-width:180px;right:-10px;z-index:100}.vcomment__layer--static{-webkit-animation:none;animation:none}.vcomment__layer::-webkit-scrollbar{display:none}.vcomment__layer hr{margin:5px 0;border:0;background-color:#eee;height:1px}.vcomment__layer-item{display:block;text-shadow:0 1px 0 #fff;position:relative;padding:5px 10px;color:#616161;font-weight:normal;width:100%;box-sizing:border-box;word-break:break-all;cursor:pointer;font-size:12px}.vcomment__layer-item:hover{text-decoration:none;background-color:#4285f4;color:#fff !important;text-shadow:none}.vcomment__layer-item--warn{color:#d23f31}.vcomment__layer-item--warn:hover{background-color:#d23f31;color:#fff !important}.vcomment__list{padding:0;margin:0}.vcomment__item{padding:10px;border-bottom:1px solid #eee;list-style:none}.vcomment__item--stick{background-color:#f1f7fe !important}.vcomment__item:last-child{border-bottom-width:0}.vcomment__avatar{height:48px;width:48px;border-radius:6px;margin-right:10px}.vcomment__avatar--small{height:20px;width:20px;margin-right:5px}.vcomment__avatarlink{display:inherit}.vcomment__comment2{margin-top:5px;border-top:1px solid #eee;padding-top:5px}.vcomment__comment2-form{padding:10px;position:relative;box-shadow:0 3px 12px rgba(27,31,35,0.15)}.vcomment__paginations{font-size:16px}.vcomment__paginations .vcomment__pointer{font-size:16px}.vcomment__paginations .vcomment__svg{height:14px;width:14px}.vcomment__pagination--disabled{cursor:not-allowed;color:rgba(0,0,0,0.18)}.vcomment .commentOriginal .vcomment__list{box-shadow:0 3px 12px rgba(27,31,35,0.15);margin-bottom:10px}.vcomment .commentActionPanel{box-shadow:0 3px 12px rgba(27,31,35,0.15)}.vcomment__editor{display:none;width:100%;position:fixed;bottom:0;z-index:100;top:0}.vcomment__editor-main{display:none;position:fixed;width:100%;box-sizing:border-box;bottom:0;background-color:#f1f7fe;z-index:201;padding:20px 0;left:0}.vcomment__editor-content{max-width:920px;padding:10px;margin:0 auto}.vcomment__editor-content #vcommentVditor{background-color:#fff;height:200px}.vcomment__bg{background-color:#000;height:100%;opacity:0.48;left:0;position:fixed;top:0;width:100%;z-index:200;-webkit-animation-duration:.38s;animation-duration:.38s;-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}\n', ""]), e.exports = t
        }, function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var n = function(e, t) {
                            var n, r, o, i = e[1] || "",
                                a = e[3];
                            if (!a) return i;
                            if (t && "function" == typeof btoa) {
                                var s = (n = a, r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))), o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r), "/*# ".concat(o, " */")),
                                    c = a.sources.map((function(e) {
                                        return "/*# sourceURL=".concat(a.sourceRoot || "").concat(e, " */")
                                    }));
                                return [i].concat(c).concat([s]).join("\n")
                            }
                            return [i].join("\n")
                        }(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                    })).join("")
                }, t.i = function(e, n, r) {
                    "string" == typeof e && (e = [
                        [null, e, ""]
                    ]);
                    var o = {};
                    if (r)
                        for (var i = 0; i < this.length; i++) {
                            var a = this[i][0];
                            null != a && (o[a] = !0)
                        }
                    for (var s = 0; s < e.length; s++) {
                        var c = [].concat(e[s]);
                        r && o[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n), t.push(c))
                    }
                }, t
            }
        }, function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(0),
                o = n.n(r),
                i = function(e) {
                    alert(e)
                },
                a = function() {
                    var e = function(e) {
                        var t = document.createElement("img");
                        t.src = e.getAttribute("data-src"), t.addEventListener("load", (function() {
                            e.getAttribute("style") || e.getAttribute("class") || e.getAttribute("width") || e.getAttribute("height") || t.naturalHeight > t.naturalWidth && t.naturalWidth / t.naturalHeight < document.querySelector(".vditor-reset").clientWidth / (window.innerHeight - 40) && t.naturalHeight > window.innerHeight - 40 && (e.style.height = window.innerHeight - 40 + "px"), e.src = t.src
                        })), e.removeAttribute("data-src")
                    };
                    if (!("IntersectionObserver" in window)) return document.querySelectorAll("img").forEach((function(t) {
                        t.getAttribute("data-src") && e(t)
                    })), !1;
                    window.vcommentImageIntersectionObserver ? (window.vcommentImageIntersectionObserver.disconnect(), document.querySelectorAll("img").forEach((function(e) {
                        window.vcommentImageIntersectionObserver.observe(e)
                    }))) : (window.vcommentImageIntersectionObserver = new IntersectionObserver((function(t) {
                        t.forEach((function(t) {
                            (void 0 === t.isIntersecting ? 0 !== t.intersectionRatio : t.isIntersecting) && t.target.getAttribute("data-src") && e(t.target)
                        }))
                    })), document.querySelectorAll("img").forEach((function(e) {
                        window.vcommentImageIntersectionObserver.observe(e)
                    })))
                },
                s = function(e) {
                    Vditor.highlightRender({
                        enable: e.hljsEnable,
                        lineNumber: e.lineNumber,
                        style: e.hljsStyle
                    }, document),
                        Vditor.codeRender(document.body, e.lang),
                        Vditor.graphvizRender(document.body),
                        Vditor.mathRender(document.body),
                        Vditor.abcRender(),
                        Vditor.chartRender(),
                        Vditor.mindmapRender(),
                        Vditor.mediaRender(document.body),
                        Vditor.mermaidRender(document.body),
                        Vditor.flowchartRender(document.body),
                    e.speech && document.querySelectorAll(".vditor-reset").forEach((function(t) {
                        Vditor.speechRender(t, e.lang)
                    }))
                },
                c = function(e, t) {
                    confirm(e) && t()
                },
                l = function(e) {
                    window.location.href = e + "/login?goto=" + encodeURIComponent(location.href) + "userinfo=false"
                },
                u = function(e) {
                    document.getElementById(e.id).innerHTML = '<div class="vcomment__center"><svg style="height: 260px;width: 260px;background: none;" width="260px"  height="260px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.c1}}" ng-attr-stroke-dasharray="{{config.dasharray}}" fill="none" stroke-linecap="round" r="20" stroke-width="4" stroke="#3b3e43" stroke-dasharray="31.41592653589793 31.41592653589793" transform="rotate(111.924 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.5s" begin="0s" repeatCount="indefinite"></animateTransform></circle><circle cx="50" cy="50" ng-attr-r="{{config.radius2}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.c2}}" ng-attr-stroke-dasharray="{{config.dasharray2}}" ng-attr-stroke-dashoffset="{{config.dashoffset2}}" fill="none" stroke-linecap="round" r="15" stroke-width="4" stroke="#d23f31" stroke-dasharray="23.561944901923447 23.561944901923447" stroke-dashoffset="23.561944901923447" transform="rotate(-111.924 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;-360 50 50" keyTimes="0;1" dur="1.5s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg></div>', o.a.ajax({
                        cache: !1,
                        success: function(t) {
                            0 === t.code ? (document.getElementById(e.id).innerHTML = t.data.html, a(), s(e.vditor), function(e) {
                                o()(".vcomment__paginations [data-page]").click((function() {
                                    e.currentPage = o()(this).data("page"), u(e)
                                }))
                            }(e), e.after && e.after(), e.commentVditor = null, 1 !== e.currentPage && o()("html, body").animate({
                                scrollTop: o()("#" + e.id).offset().top
                            }, 300)) : e.error && e.error()
                        },
                        url: e.url + "/apis/vcomment?aid=" + e.postId + "&p=" + e.currentPage + "&un=" + e.userName
                    })
                },
                d = function(e, t) {
                    if ("disabled" !== t.attr("disabled"))
                        if (t.data("haspermission")) {
                            if (e.commentVditor.getValue().length > 4096 || 0 === e.commentVditor.getValue().length) return i("回帖内容长度 1-4096"), !1;
                            var n = {
                                    articleAuthorName: e.userName,
                                    articleId: e.postId,
                                    commentContent: e.commentVditor.getValue(),
                                    commentOriginalCommentId: ""
                                },
                                r = o()("#vcommentReplyUseName");
                            r.data("commentOriginalCommentId") && (n.commentOriginalCommentId = r.data("commentOriginalCommentId"));
                            var c = e.url + "/apis/vcomment/vcomment",
                                l = "POST",
                                d = r.data("commentId");
                            d && (c = e.url + "/apis/vcomment/" + d, l = "PUT"), o.a.ajax({
                                cache: !1,
                                data: encodeURIComponent(JSON.stringify(n)),
                                headers: {
                                    "X-B3-UA": "vcomment",
                                    csrfToken: o()("#" + e.id + " .vcomment").data("csrf")
                                },
                                type: l,
                                url: c,
                                beforeSend: function() {
                                    t.attr("disabled", "disabled"), e.commentVditor.disabled()
                                },
                                success: function(t) {
                                    if (0 === t.code) {
                                        d ? (document.getElementById(d).outerHTML = t.data.html, a(), s(e.vditor), f(e)) : u(e);
                                        var n = JSON.parse(localStorage.getItem("comments") || "{}");
                                        delete n[e.postId], localStorage.setItem("comments", JSON.stringify(n))
                                    } else i(t.msg)
                                },
                                error: function(e) {
                                    i(e.statusText)
                                },
                                complete: function() {
                                    t.removeAttr("disabled"), e.commentVditor.enable(), 0 === arguments[0].responseJSON.code && e.commentVditor.setValue("")
                                }
                            })
                        } else i("因权限不足操作已被禁止")
                },
                f = function(e, t, n, r, c) {
                    if (o()("#" + e.id + " .vcomment").data("login")) {
                        var u = o()(".vcomment__editor"),
                            p = o()(".vcomment__editor-main");
                        if (o()("#" + e.id + " .vcomment").data("grant"))
                            if ("block" !== u.css("display")) {
                                var h = o()("#vcommentReplyUseName");
                                h.removeData(), n ? h.data("commentOriginalCommentId", t).html('<div class="vcomment__meta vcomment__flexinline">\n  <svg class="vcomment__svg" viewBox="0 0 32 32">\n    <path d="M19.583 9.75q-8.667 1.25-13.375 6.625t-6.208 12.958q6.417-9.083 19.583-9.083v7.25l12.417-12.417-12.417-12.417v7.083z"></path>\n  </svg>\n  <span class="vcomment__space"></span>\n  <img class="vcomment__avatar vcomment__avatar--small" src="' + r + '">\n  <span>' + n + "</span>\n</div>") : t ? h.data("commentId", t).html('<div class="vcomment__meta">编辑</div>') : h.html('<div class="vcomment__flexinline vcomment__meta">\n  <svg class="vcomment__svg" viewBox="0 0 32 32">\n    <path d="M19.583 9.75q-8.667 1.25-13.375 6.625t-6.208 12.958q6.417-9.083 19.583-9.083v7.25l12.417-12.417-12.417-12.417v7.083z"></path>\n  </svg>\n  <span class="vcomment__space"></span>\n  <span>' + o()("title").html() + "</span>\n</div>"), u.show(), p.slideDown((function() {
                                    ! function(e, t) {
                                        if (void 0 === t && (t = ""), e.commentVditor) return t && e.commentVditor.setValue(t), void e.commentVditor.focus();
                                        e.vditor.emoji || (e.vditor.emoji = {}, o.a.ajax({
                                            async: !1,
                                            cache: !0,
                                            url: e.url + "/apis/vcomment/users/emotions",
                                            success: function(t) {
                                                Array.isArray(t.data) && t.data.forEach((function(t) {
                                                    var n = Object.keys(t)[0];
                                                    e.vditor.emoji[n] = t[n]
                                                }))
                                            }
                                        }));
                                        var n = o()("#commentSubmitBtn"),
                                            r = {
                                                after: function() {
                                                    if (t) e.commentVditor.setValue(t), e.commentVditor.focus();
                                                    else {
                                                        var n = JSON.parse(localStorage.getItem("comments") || "{}");
                                                        e.commentVditor.setValue(n[e.postId] || ""), e.commentVditor.focus()
                                                    }
                                                },
                                                cache: {
                                                    enable: !1
                                                },
                                                counter: {
                                                    enable: !0,
                                                    max: 4096
                                                },
                                                ctrlEnter: function() {
                                                    d(e, n)
                                                },
                                                esc: function() {
                                                    f(e)
                                                },
                                                input: function(t) {
                                                    if ("\n" !== t) {
                                                        var n = JSON.parse(localStorage.getItem("comments") || "{}");
                                                        n[e.postId] = t, localStorage.setItem("comments", JSON.stringify(n))
                                                    }
                                                },
                                                height: 200,
                                                hint: {
                                                    emoji: e.vditor.emoji,
                                                    emojiTail: '<a href="' + e.url + '/settings/function" target="_blank">设置常用表情</a>',
                                                    extend: [{
                                                        hint: function(t) {
                                                            var n = [];
                                                            return o.a.ajax({
                                                                async: !1,
                                                                data: JSON.stringify({
                                                                    name: t
                                                                }),
                                                                type: "POST",
                                                                url: e.url + "/apis/vcomment/users/names",
                                                                success: function(e) {
                                                                    0 === e.code ? (n = e.data.map((function(e) {
                                                                        return e.value = "@" + e.userName, e.html = "<img src='" + e.userAvatarURL + "'/> " + e.userName, e
                                                                    })), "" === t && n.push({
                                                                        html: "<img src='https://static.ld246.com/images/user-thumbnail.png'/> 参与者",
                                                                        value: "@participants"
                                                                    })) : i(e.msg)
                                                                }
                                                            }), n
                                                        },
                                                        key: "@"
                                                    }]
                                                },
                                                lang: "zh_CN",
                                                placeholder: o()("#vcommentVditor").data("placeholder"),
                                                preview: {
                                                    hljs: {
                                                        enable: e.vditor.hljsEnable,
                                                        lineNumber: e.vditor.lineNumber,
                                                        style: e.vditor.hljsStyle
                                                    },
                                                    url: e.url + "/apis/vcomment/markdown",
                                                    parse: function(t) {
                                                        "none" !== t.style.display && (a(), s(e.vditor))
                                                    }
                                                },
                                                resize: {
                                                    enable: !0,
                                                    position: "top"
                                                },
                                                tab: "\t",
                                                toolbar: ["emoji", "headings", "bold", "italic", "strike", "link", "|", "list", "ordered-list", "check", "outdent", "indent", "|", "quote", "line", "code", "inline-code", "table", "insert-before", "insert-after", "undo", "redo", "|", "fullscreen", "edit-mode", {
                                                    name: "more",
                                                    toolbar: ["both", "code-theme", "content-theme", "export", "outline", "preview", "devtools", "info", "help"]
                                                }],
                                                toolbarConfig: {
                                                    pin: !1
                                                },
                                                typewriterMode: !1
                                            };
                                        o()(window).width() < 768 && (r.toolbar = ["emoji", "link", "edit-mode", {
                                            name: "more",
                                            toolbar: ["insert-after", "fullscreen", "preview", "info", "help"]
                                        }], r.resize.enable = !1, r.toolbarConfig.pin = !0), e.commentVditor = new Vditor("vcommentVditor", r), n.click((function() {
                                            d(e, n)
                                        }))
                                    }(e, c)
                                }));
                                var m = o()("#" + t);
                                1 === m.length && (o()(window).width() < 768 ? o()(window).scrollTop(m[0].offsetTop - 308) : o()(window).scrollTop(m[0].offsetTop)), m.css({
                                    "background-color": "#9bbee0"
                                }), setTimeout((function() {
                                    m.css({
                                        "background-color": "#FFF",
                                        transition: "all 3s cubic-bezier(0.56, -0.36, 0.58, 1)"
                                    })
                                }), 100), setTimeout((function() {
                                    m.removeAttr("style")
                                }), 3100)
                            } else p.slideUp((function() {
                                u.hide()
                            }));
                        else i("角色有误")
                    } else l(e.url)
                },
                p = (n(1), function() {
                    function e(e) {
                        this.options = function(e) {
                            var t = {
                                currentPage: 1,
                                id: "",
                                postId: "",
                                url: "https://ld246.com",
                                userName: "",
                                vditor: {
                                    emoji: null,
                                    hljsEnable: !0,
                                    hljsStyle: "github",
                                    lang: "zh_CN",
                                    lineNumber: !1,
                                    speech: !1
                                }
                            };
                            return e.vditor && (e.vditor = Object.assign({}, t.vditor, e.vditor)), Object.assign({}, t, e)
                        }(e), document.addEventListener("click", (function(e) {
                            var t = o()(e.target);
                            1 === t.closest("details-menu").length && t.closest(".details").removeAttr("open"), 0 === t.closest(".details").length && o()(".details").removeAttr("open")
                        })), o()("body").off("click", ".details summary"), o()("body").on("click", ".details summary", (function() {
                            o()(".details").removeAttr("open")
                        })),
                            function(e) {
                                o()("#" + e.id).on("click", ".commentCloseBtn", (function() {
                                    o()(this).closest(".commentActionPanel").hide(), o()(this).closest("ul").remove("")
                                })).on("click", ".commentOriginalBtn", (function() {
                                    ! function(e, t, n, r) {
                                        "disabled" !== n.attr("disabled") && o.a.ajax({
                                            data: JSON.stringify({
                                                commentId: e
                                            }),
                                            headers: {
                                                "X-B3-UA": "vcomment",
                                                csrfToken: o()("#" + r.id + " .vcomment").data("csrf")
                                            },
                                            type: "POST",
                                            url: r.url + "/apis/vcomment/original",
                                            beforeSend: function() {
                                                n.attr("disabled", "disabled")
                                            },
                                            success: function(e) {
                                                if (0 !== e.code) return i(e.msg), !1;
                                                t.html('<ul class="vcomment__list">' + e.data + "</ul>").show(), a(), s(r.vditor)
                                            },
                                            error: function(e) {
                                                i(e.statusText)
                                            },
                                            complete: function() {
                                                n.removeAttr("disabled")
                                            }
                                        })
                                    }(o()(this).data("ooid"), o()(this).closest("li").find(".commentOriginal"), o()(this), e)
                                })).on("click", ".commentShowReplyBtn", (function() {
                                    var t = o()(this),
                                        n = t.closest("li").find(".commentActionPanel");
                                    ! function(e, t, n, r) {
                                        "disabled" !== n.attr("disabled") && o.a.ajax({
                                            data: JSON.stringify({
                                                commentId: e
                                            }),
                                            headers: {
                                                "X-B3-UA": "vcomment",
                                                csrfToken: o()("#" + r.id + " .vcomment").data("csrf")
                                            },
                                            type: "POST",
                                            url: r.url + "/apis/vcomment/replies",
                                            beforeSend: function() {
                                                n.attr("disabled", "disabled")
                                            },
                                            success: function(e) {
                                                if (0 !== e.code) return i(e.msg), !1;
                                                var n = "";
                                                e.data.forEach((function(e) {
                                                    n += e
                                                })), t.html('<ul class="vcomment__list">' + n + "</ul>").slideDown(), a(), s(r.vditor)
                                            },
                                            error: function(e) {
                                                i(e.statusText)
                                            },
                                            complete: function() {
                                                n.removeAttr("disabled")
                                            }
                                        })
                                    }(t.closest("li").attr("id"), n, t, e)
                                })).on("click", ".commentShowMoreBtn", (function() {
                                    var e = o()(this),
                                        t = 1 === e.closest(".commentOriginal").length,
                                        n = e.closest(".commentOriginal").find(".commentHide");
                                    t || (n = e.closest("li").find(".commentHide").filter((function(e, t) {
                                        return 0 === o()(t).closest(".commentOriginal").length
                                    }))), "fold" === e.data("type") ? (n.show(), e.html("折叠").data("type", "open")) : (n.hide(), e.html("展开").data("type", "fold"))
                                })).on("click", ".comment2SubmitBtn", (function() {
                                    var t = o()(this);
                                    if ("disabled" !== t.attr("disabled")) {
                                        t.attr("disabled", "disabled");
                                        var n = "POST",
                                            r = "",
                                            s = JSON.stringify({
                                                comment2Content: t.prev().val(),
                                                commentId: t.closest("li").attr("id")
                                            });
                                        t.prev().data("id") && (n = "PUT", r = "/" + t.prev().data("id"), s = JSON.stringify({
                                            comment2Content: t.prev().val()
                                        })), o.a.ajax({
                                            complete: function() {
                                                t.removeAttr("disabled")
                                            },
                                            data: s,
                                            headers: {
                                                "X-B3-UA": "vcomment",
                                                csrfToken: o()("#" + e.id + " .vcomment").data("csrf")
                                            },
                                            type: n,
                                            url: e.url + "/apis/vcomment2" + r,
                                            success: function(e) {
                                                0 === e.code ? ("PUT" === n ? t.closest(".comment2Item")[0].outerHTML = e.data.html : (t.closest("li").find(".vcomment-comment2s").append(e.data.html), 1 === t.closest(".comment2Form").length ? t.closest(".vcomment__comment2-form").remove() : t.closest("li").find(".commentActionPanel").slideUp()), a()) : i(e.msg)
                                            }
                                        })
                                    }
                                }))
                            }(e),
                            function(e) {
                                var t = '<div class="vcomment__comment2-form">\n    <div class="vcomment__flex">\n      <input class="vcomment__input" type="text" placeholder="评论内容长度 4-4096">\n      <button class="comment2SubmitBtn vcomment__btn vcomment__btn--comment2">提交</button>\n    </div>\n    <div class="vcomment__hr"></div>\n    <div class="vcomment__meta">\n     仅支持_斜体_、**加粗**以及超链接，请浏览<a href="https://ld246.com/article/1555259445024" target="_blank">使用场景说明</a>了解更多细节\n    </div>\n</div>';
                                o()("#" + e.id).on("click", ".commentMenuBtn", (function() {
                                    if (o()("#" + e.id + " .vcomment").data("login")) {
                                        var t = o()(this);
                                        "" === o.a.trim(t.closest("details").find("details-menu").html()) && "disabled" !== t.attr("disabled") && (t.attr("disabled", "disabled"), o.a.ajax({
                                            cache: !1,
                                            headers: {
                                                "X-B3-UA": "vcomment",
                                                csrfToken: o()("#" + e.id + " .vcomment").data("csrf")
                                            },
                                            url: e.url + "/apis/vcomment/action?id=" + t.closest("li").attr("id"),
                                            success: function(e) {
                                                t.removeAttr("disabled"), 0 === e.code ? t.closest("details").find("details-menu").html(e.data) : i(e.msg)
                                            },
                                            error: function(e) {
                                                i(e.statusText)
                                            }
                                        }))
                                    } else l(e.url)
                                })).on("click", ".comment2Btn", (function() {
                                    if (o()(this).data("grant")) {
                                        var e = o()(this).closest("li").find(".commentActionPanel");
                                        e.html(t).slideDown(), e.find("input").focus()
                                    } else i("因权限不足操作已被禁止")
                                })).on("click", ".commentThankBtn", (function() {
                                    var t = o()(this);
                                    c(t.data("tip"), (function() {
                                        "disabled" !== t.attr("disabled") && (t.attr("disabled", "disabled"), o.a.ajax({
                                            cache: !1,
                                            complete: function() {
                                                t.removeAttr("disabled")
                                            },
                                            data: JSON.stringify({
                                                commentId: t.closest("li").attr("id")
                                            }),
                                            headers: {
                                                "X-B3-UA": "vcomment",
                                                csrfToken: o()("#" + e.id + " .vcomment").data("csrf")
                                            },
                                            type: "POST",
                                            url: e.url + "/apis/vcomment/thank",
                                            success: function(n) {
                                                0 === n.code ? (t.closest("li")[0].outerHTML = n.data.html, a(), s(e.vditor)) : i(n.msg)
                                            }
                                        }))
                                    }))
                                })).on("click", ".commentMenuBtn .commentShowEditorBtn", (function() {
                                    var t = o()(this);
                                    f(e, t.closest("li").attr("id"), t.data("name"), t.data("avatar"))
                                })).on("click", ".commentRemoveBtn", (function() {
                                    var t = o()(this);
                                    if (o()("#" + e.id + " .vcomment").data("login")) {
                                        var n = t.closest("li").attr("id");
                                        c("确定删除么？", (function() {
                                            o.a.ajax({
                                                cache: !1,
                                                headers: {
                                                    "X-B3-UA": "vcomment",
                                                    csrfToken: o()("#" + e.id + " .vcomment").data("csrf")
                                                },
                                                type: "DELETE",
                                                url: e.url + "/apis/vcomment/" + n,
                                                success: function(e) {
                                                    if (0 === e.code) {
                                                        o()("#" + n).remove();
                                                        var t = o()("#commentsCount");
                                                        t.text(parseInt(t.first().text(), 10) - 1 || "")
                                                    } else i(e.msg)
                                                }
                                            })
                                        }))
                                    } else l(e.url)
                                })).on("click", ".commentEditBtn", (function() {
                                    var t = o()(this);
                                    o.a.ajax({
                                        cache: !1,
                                        url: e.url + "/apis/vcomment/vcomment/" + t.closest("li").attr("id") + "/content",
                                        success: function(n) {
                                            0 === n.code && f(e, t.closest("li").attr("id"), "", "", n.data.commentContent)
                                        }
                                    })
                                })).on("click", ".comment2Thank", (function() {
                                    var t = o()(this);
                                    c(t.data("tip"), (function() {
                                        t.attr("disabled", "disabled"), o.a.ajax({
                                            complete: function() {
                                                t.removeAttr("disabled")
                                            },
                                            data: JSON.stringify({
                                                comment2Id: t.closest(".comment2Item").data("id")
                                            }),
                                            headers: {
                                                "X-B3-UA": "vcomment",
                                                csrfToken: o()("#" + e.id + " .vcomment").data("csrf")
                                            },
                                            type: "POST",
                                            url: e.url + "/apis/vcomment2/thank",
                                            success: function(e) {
                                                0 === e.code ? t.closest(".comment2Item")[0].outerHTML = e.data.html : i(e.msg)
                                            }
                                        })
                                    }))
                                })).on("click", ".comment2at", (function() {
                                    var e = o()(this),
                                        n = e.closest(".comment2Item");
                                    0 === n.find(".vcomment__comment2-form").length ? n.find(".comment2Form").html(t).find("input").val(e.text()).focus() : n.find("input").focus()
                                })).on("click", ".comment2Edit", (function() {
                                    var n = o()(this).closest(".comment2Item");
                                    1 !== n.find(".vcomment__comment2-form").length ? (n.find(".comment2Form").html(t), o.a.ajax({
                                        url: e.url + "/apis/vcomment2/update/" + n.data("id"),
                                        success: function(e) {
                                            0 === e.code ? n.find("input").val(e.data.comment2Content).data("id", e.data.oId).focus() : i(e.msg)
                                        }
                                    })) : n.find(".vcomment__comment2-form").remove()
                                })).on("click", ".comment2Remove", (function() {
                                    var t = o()(this);
                                    "disabled" !== t.attr("disabled") && c("确定删除么？", (function() {
                                        t.attr("disabled", "disabled"), o.a.ajax({
                                            complete: function() {
                                                t.removeAttr("disabled")
                                            },
                                            headers: {
                                                "X-B3-UA": "vcomment",
                                                csrfToken: o()("#" + e.id + " .vcomment").data("csrf")
                                            },
                                            type: "DELETE",
                                            url: e.url + "/apis/vcomment2/" + t.closest(".comment2Item").data("id"),
                                            success: function(e) {
                                                0 === e.code ? t.closest(".comment2Item").remove() : i(e.msg)
                                            }
                                        })
                                    }))
                                }))
                            }(e), o()("#" + e.id).on("click", ".commentToggleEditorBtn", (function() {
                            f(e)
                        })), o.a.ajaxSetup({
                            xhrFields: {
                                withCredentials: !0
                            }
                        })
                    }
                    return e.prototype.render = function() {
                        u(this.options)
                    }, e.parseMarkdown = s, e.lazyLoadImage = a, e
                }());
            t.default = p
        }]).default
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
        o = n.n(r),
        i = n(1),
        a = n.n(i),
        s = n(2),
        c = n.n(s),
        l = {
            support: {
                pjax: window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/),
                storage: !!window.localStorage
            },
            toInt: function(e) {
                return parseInt(e)
            },
            stack: {},
            getTime: function() {
                return 1 * new Date
            },
            getRealUrl: function(e) {
                return e = (e = (e || "").replace(/\#.*?$/, "")).replace("?pjax=true&", "?").replace("?pjax=true", "").replace("&pjax=true", "")
            },
            getUrlHash: function(e) {
                return e.replace(/^[^\#]*(?:\#(.*?))?$/, "$1")
            },
            getLocalKey: function(e) {
                var t = "pjax_" + encodeURIComponent(e);
                return {
                    data: t + "_data",
                    time: t + "_time",
                    title: t + "_title"
                }
            },
            removeAllCache: function() {
                if (l.support.storage)
                    for (var e in localStorage) "pjax" === (e.split("_") || [""])[0] && delete localStorage[e]
            },
            getCache: function(e, t, n) {
                var r, o, i;
                if (t = l.toInt(t), e in l.stack) {
                    r = l.stack[e];
                    var a = l.getTime();
                    if (r.time + 1e3 * t > a) return r;
                    delete l.stack[e]
                } else if (n && l.support.storage) {
                    var s = l.getLocalKey(e);
                    if (o = s.data, i = s.time, r = localStorage.getItem(o)) {
                        if (l.toInt(localStorage.getItem(i)) + 1e3 * t > l.getTime()) return {
                            data: r,
                            title: localStorage.getItem(s.title)
                        };
                        localStorage.removeItem(o), localStorage.removeItem(i), localStorage.removeItem(s.title)
                    }
                }
                return null
            },
            setCache: function(e, t, n, r) {
                var o, i = l.getTime();
                l.stack[e] = {
                    data: t,
                    title: n,
                    time: i
                }, r && l.support.storage && (o = l.getLocalKey(e), localStorage.setItem(o.data, t), localStorage.setItem(o.time, i), localStorage.setItem(o.title, n))
            },
            removeCache: function(e) {
                if (e = l.getRealUrl(e || location.href), delete l.stack[e], l.support.storage) {
                    var t = l.getLocalKey(e);
                    localStorage.removeItem(t.data), localStorage.removeItem(t.time), localStorage.removeItem(t.title)
                }
            }
        },
        u = function(e) {
            if (!(e = o.a.extend({
                selector: "",
                container: "",
                callback: function() {},
                filter: function() {}
            }, e)).container || !e.selector) throw new Error("selector & container options must be set");
            o()("body").delegate(e.selector, "click", (function(t) {
                if (t.which > 1 || t.metaKey) return !0;
                var n = o()(this).attr("href");
                if ("function" == typeof e.filter && !0 === e.filter.call(this, n, this)) return !0;
                if (n === location.href) return !0;
                if (l.getRealUrl(n) == l.getRealUrl(location.href)) {
                    var r = l.getUrlHash(n);
                    return r && (location.hash = r, e.callback && e.callback.call(this, {
                        type: "hash"
                    })), !0
                }
                t.preventDefault(), e = o.a.extend(!0, e, {
                    url: n,
                    element: this,
                    push: !0
                }), u.request(e)
            }))
        };
    u.xhr = null, u.options = {}, u.state = {}, u.defaultOptions = {
        timeout: 2e3,
        element: null,
        cache: 86400,
        storage: !0,
        url: "",
        push: !0,
        show: "",
        title: "",
        titleSuffix: "",
        type: "GET",
        data: {
            pjax: !0
        },
        dataType: "html",
        callback: null,
        beforeSend: function(e) {
            o()(u.options.container).trigger("pjax.start", [e, u.options]), e && e.setRequestHeader("X-PJAX", !0) && e.setRequestHeader("X-PJAX-Container", u.options.container)
        },
        error: function() {
            u.options.callback && u.options.callback.call(u.options.element, {
                type: "error"
            }), location.href = u.options.url
        },
        complete: function(e) {
            o()(u.options.container).trigger("pjax.end", [e, u.options])
        }
    }, u.showFx = {
        _default: function(e, t, n) {
            this.html(e), t && t.call(this, e, n)
        },
        fade: function(e, t, n) {
            var r = this;
            n ? (r.html(e), t && t.call(r, e, n)) : this.fadeOut(200, (function() {
                r.html(e).fadeIn(200, (function() {
                    t && t.call(r, e, n)
                }))
            }))
        }
    }, u.showFn = function(e, t, n, r, o) {
        var i = null;
        "function" == typeof e ? i = e : (e in u.showFx || (e = "_default"), i = u.showFx[e]), i && i.call(t, n, (function() {
            "" === location.hash && window.scrollTo(0, 0), r && r.call(this, n, o)
        }), o)
    }, u.success = function(e, t) {
        if (!0 !== t && (t = !1), u.html && (e = o()(e).find(u.html).html()), -1 != (e || "").indexOf("<html")) return u.options.callback && u.options.callback.call(u.options.element, {
            type: "error"
        }), location.href = u.options.url, !1;
        var n = o()(u.options.element).attr("pjax-title");
        if (!n) {
            if ("" == (n = u.options.title || "") && u.options.element) {
                var r = o()(u.options.element);
                n = r.attr("title") || r.text()
            }
            var i = e.match(/<title>(.*?)<\/title>/);
            i && (n = i[1])
        }
        n && -1 == n.indexOf(u.options.titleSuffix) && (n += u.options.titleSuffix);
        var a = document.title;
        document.title = n, u.state = {
            container: u.options.container,
            timeout: u.options.timeout,
            cache: u.options.cache,
            storage: u.options.storage,
            show: u.options.show,
            title: n,
            url: u.options.oldUrl
        };
        var s = o.a.param(u.options.data);
        "" != s && (u.state.url = u.options.url + (/\?/.test(u.options.url) ? "&" : "?") + s), u.options.push ? (u.active || (history.replaceState(o.a.extend({}, u.state, {
            url: null,
            title: a
        }), a), u.active = !0), history.pushState(u.state, document.title, u.options.oldUrl)) : !1 === u.options.push && history.replaceState(u.state, document.title, u.options.oldUrl), u.options.showFn && u.options.showFn(e, (function() {
            u.options.callback && u.options.callback.call(u.options.element, {
                type: t ? "cache" : "success"
            })
        }), t), u.options.cache && !t && l.setCache(u.options.url, e, n, u.options.storage)
    }, u.request = function(e) {
        e.hasOwnProperty("data") && (u.defaultOptions.data = e.data), u.defaultOptions.title = "", e = o.a.extend(!0, u.defaultOptions, e);
        var t, n = o()(e.container);
        if (e.oldUrl = e.url, e.url = l.getRealUrl(e.url), o()(e.element).length && (t = l.toInt(o()(e.element).attr("data-pjax-cache"))) && (e.cache = t), !0 === e.cache && (e.cache = 86400), e.cache = l.toInt(e.cache), 0 === e.cache && l.removeAllCache(), e.showFn || (e.showFn = function(t, r, o) {
            u.showFn(e.show, n, t, r, o)
        }), u.options = e, u.options.success = u.success, e.cache && (t = l.getCache(e.url, e.cache, e.storage))) return e.beforeSend(), e.title = t.title, u.success(t.data, !0), e.complete(), !0;
        u.xhr && u.xhr.readyState < 4 && (u.xhr.onreadystatechange = o.a.noop, u.xhr.abort()), u.xhr = o.a.ajax(u.options)
    };
    var d = "state" in window.history,
        f = location.href;
    o()(window).bind("popstate", (function(e) {
        var t = !d && location.href == f;
        if (d = !0, !t) {
            var n = e.state;
            if (n && n.container)
                if (o()(n.container).length) {
                    var r = {
                        url: n.url,
                        container: n.container,
                        push: null,
                        timeout: n.timeout,
                        cache: n.cache,
                        storage: n.storage,
                        title: n.title,
                        element: null
                    };
                    u.request(r)
                } else window.location.href = location.href
        }
    })), l.support.pjax || ((u = function() {
        return !0
    }).request = function(e) {
        e && e.url && (location.href = e.url)
    }), "state" in o.a.Event.prototype || o.a.event.addProp("state");
    var p = u,
        h = n(3),
        m = n.n(h);
    window.$ = o.a, window.Vcomment = m.a, window.Util = {
        uvstat: void 0,
        initViewCnt: function(e) {
            Util.uvstat = new c.a, Util.uvstat.addStat(), Util.uvstat.renderStat(), Util.uvstat.renderCmtStat(e)
        },
        isArticlePage: function(e) {
            var t = !0;
            return e.indexOf(Label.servePath + "/tags/") > -1 && (t = !1), e.indexOf(Label.servePath + "/tags.html") > -1 && (t = !1), e.indexOf(Label.servePath + "/category/") > -1 && (t = !1), e.indexOf(Label.servePath + "/archives.html") > -1 && (t = !1), e.indexOf(Label.servePath + "/archives/") > -1 && (t = !1), e.indexOf(Label.servePath + "/links.html") > -1 && (t = !1), e === Label.servePath && (t = !1), /^[0-9]*$/.test(e.replace(Label.servePath + "/", "")) && (t = !1), t
        },
        initPjax: function(e) {
            1 === o()("#pjax").length && (p({
                selector: "a",
                container: "#pjax",
                show: "",
                cache: !1,
                storage: !0,
                titleSuffix: "",
                filter: function(e, t) {
                    return !e || ("_blank" === t.getAttribute("target") || (e === Label.servePath + "/rss.xml" || e.indexOf(Label.servePath + "/admin-index.do") > -1 || (0 === e.indexOf("#") || !(t.href.indexOf(Label.servePath) > -1))))
                },
                callback: function() {
                    Util.parseMarkdown(), void 0 === Util.uvstat && (Util.uvstat = new c.a), Util.uvstat.addStat(), Util.uvstat.renderStat(), Util.uvstat.renderCmtStat(window.utilOptions && window.utilOptions.cmtCountCB), "undefined" != typeof soloKanbanniang && soloKanbanniang.bgChange && soloKanbanniang.bgChange(), e && e()
                }
            }), a.a.configure({
                showSpinner: !1
            }), o()("#pjax").bind("pjax.start", (function() {
                a.a.start()
            })), o()("#pjax").bind("pjax.end", (function() {
                window.scroll(window.scrollX, 0), a.a.done()
            })))
        },
        previewImg: function() {
            o()("body").on("click", ".vditor-reset img", (function() {
                o()(this).hasClass("prevent") || window.open(this.src)
            }))
        },
        addScript: function(e, t) {
            if (!document.getElementById(t)) {
                var n = new XMLHttpRequest;
                n.open("GET", e, !1), n.setRequestHeader("Accept", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01"), n.send("");
                var r = document.createElement("script");
                r.id = t, r.type = "text/javascript", r.text = n.responseText, document.getElementsByTagName("head")[0].appendChild(r)
            }
        },
        parseMarkdown: function() {
            m.a.parseMarkdown({
                lang: Label.langLabel,
                lineNumber: Label.showCodeBlockLn,
                hljsEnable: !Label.luteAvailable,
                hljsStyle: Label.hljsStyle,
                speech: Label.speech
            })
        },
        killIE: function(e) {
            var t = navigator.userAgent.split("MSIE")[1];
            t && (e || (e = 7), parseFloat(t.split(";")) <= e && function() {
                try {
                    var e = '<div class="killIEIframe" style=\'display: block; height: 100%; width: 100%; position: fixed; background-color: rgb(0, 0, 0); opacity: 0.6;filter: alpha(opacity=60); top: 0px;z-index:110\'></div><iframe class="killIEIframe" style=\'left:' + (o()(window).width() - 781) / 2 + "px;z-index:120;top: " + (o()(window).height() - 680) / 2 + "px; position: fixed; border: 0px none; width: 781px; height: 680px;' src='" + Label.servePath + "/kill-browser'></iframe>";
                    o()("body").append(e)
                } catch (t) {
                    e = '<div class="killIEIframe" style=\'display: block; height: 100%; width: 100%; position: fixed; background-color: rgb(0, 0, 0); opacity: 0.6;filter: alpha(opacity=60); top: 0px;z-index:110\'></div><iframe class="killIEIframe" style=\'left:' + 10 + "px;z-index:120;top: " + 0 + "px; position: fixed; border: 0px none; width: 781px; height: 680px;' src='" + Label.servePath + "/kill-browser'></iframe>";
                    document.body.innerHTML = document.body.innerHTML + e
                }
            }())
        },
        setTopBar: function() {
            var e = o()("#top");
            if (1 === e.length) {
                var t = o()("#showTop");
                t.click((function() {
                    e.slideDown(), t.hide()
                })), o()("#hideTop").click((function() {
                    e.slideUp(), t.show()
                }))
            }
        },
        goTop: function() {
            o()("html, body").animate({
                scrollTop: 0
            }, 800)
        },
        goBottom: function(e) {
            e || (e = 0), o()("html, body").animate({
                scrollTop: o()(document).height() - o()(window).height() - e
            }, 800)
        },
        init: function() {
            Util.killIE(), Util.parseMarkdown(), Util.initSW(), Util.previewImg(), Util.initDebugInfo()
        },
        initDebugInfo: function() {
            // console.log("%cSolo%c\n  🎸一款小而美的博客系统，专为程序员设计。\n\n  https://b3log.org/solo v" + Label.version + "\n  Copyright © 2010-present", "font-size:96px;color:#3b3e43", "font-size:12px;color:#4285f4;")
        },
        initSW: function() {
            navigator.serviceWorker && navigator.serviceWorker.register("/sw.js", {
                scope: "/"
            })
        },
        buildTags: function(e) {
            e = e || "tags";
            for (var t = ["tags1", "tags2", "tags3", "tags4", "tags5"], n = o()("#" + e + " b").get(), r = parseInt(o()("#" + e + " b").last().text()), i = Math.ceil(r / t.length), a = 0; a < n.length; a++)
                for (var s = parseInt(n[a].innerHTML), c = 0; c < t.length; c++)
                    if (s > c * i && s <= (c + 1) * i) {
                        n[a].parentNode.className = t[c];
                        break
                    } o()("#" + e).html(o()("#" + e + " li").get().sort((function(e, t) {
                var n = o()(e).find("span").text().toLowerCase(),
                    r = o()(t).find("span").text().toLowerCase();
                return n.localeCompare(r)
            })))
        },
        loadVditor: function(e) {
            o.a.ajax({
                method: "GET",
                url: "https://file.fishpi.cn/vditor/3.8.13/dist/index.min.js",
                dataType: "script",
                cache: !0,
                success: function() {
                    Util.init(), e && e()
                }
            })
        },
        skinPreview: function() {
            if ("/admin-index.do" !== location.pathname) {
                var e = location.search.split("skin="),
                    t = "",
                    n = !1;
                2 === e.length && (t = e[1].split("=")[0], n = !0), t ? sessionStorage.setItem("skin", t) : t = sessionStorage.getItem("skin"), t && (n || (location.search = location.search ? location.search + "&skin=" + t : "?skin=" + t))
            }
        }
    }, Util.skinPreview(), Util.initViewCnt(window.utilOptions), "undefined" == typeof Vditor && "/admin-index.do" !== location.pathname && Util.loadVditor()
}, , , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    n(4);
    1 == !1 ? $("#archives span.al_mon").click((function() {
        return $(this).next().slideToggle(400), !1
    })) : function() {
        $("#al_expand_collapse,#archives span.al_mon").css({
            cursor: "pointer"
        }), $("#archives span.al_mon").each((function() {
            var e = $(this).next().children("li").length;
            $(this).children("#post-num").text(e)
        }));
        var e = $("#archives ul.al_post_list"),
            t = $("#archives ul.al_post_list:first");
        e.hide(1, (function() {
            t.show()
        })), $("#archives span.al_mon").click((function() {
            return $(this).next().slideToggle(400), !1
        })), document.body.clientWidth > 860 && $("#archives li.al_li").mouseover((function() {
            return $(this).children(".al_post_list").show(400), !1
        }));
        var n = 0;
        $("#al_expand_collapse").click((function() {
            0 == n ? (e.show(), n++) : 1 == n && (e.hide(), n--)
        }))
    }(), window.Skin = {
        init: function() {
            var e, t, n = function() {
                    document.documentElement.setAttribute("data-theme", "dark"), null !== document.querySelector('meta[name="theme-color"]') && document.querySelector('meta[name="theme-color"]').setAttribute("content", "#000")
                },
                r = function() {
                    document.documentElement.setAttribute("data-theme", "light"), null !== document.querySelector('meta[name="theme-color"]') && document.querySelector('meta[name="theme-color"]').setAttribute("content", "#fff")
                },
                o = function(e) {
                    const t = ("; " + document.cookie).split(`; ${e}=`);
                    if (2 === t.length) return t.pop().split(";").shift()
                }("theme");
            t = (e = (new Date).getHours()) <= 6 || e >= 18, void 0 === o ? t ? n() : r() : "light" === o ? r() : n();
            window.addEventListener("load", (function() {
                loadScript("https://sdk.jinrishici.com/v2/browser/jinrishici.js", (function() {
                    jinrishici.load((function(e) {
                        var t = 0 == "May the god bless you.,It is better to burn out than to fade away.".length ? new Array : "May the god bless you.,It is better to burn out than to fade away.".split(","),
                            n = e.data.content;
                        t.unshift(n), new Typed("#subtitle", {
                            strings: t,
                            startDelay: 300,
                            typeSpeed: 150,
                            loop: !0,
                            backSpeed: 50
                        })
                    }))
                }))
            }));
            const i = void 0 !== GLOBAL_CONFIG.Snackbar,
                a = $("#nav"),
                s = $("#rightside"),
                c = $("body");
            var l = $("#blog_name").width(),
                u = $(".menus").width(),
                d = $("#sidebar").width();

            function f(e) {
                var t;
                1 === e ? t = l + u > a.width() - d - 20 : 2 === e && (t = l + u > a.width() - 20), t ? p() : (a.find(".toggle-menu").removeClass("is-visible-inline"), a.find(".menus_items").removeClass("is-invisible"), a.find("#search_button span").removeClass("is-invisible"))
            }

            function p() {
                a.find(".toggle-menu").addClass("is-visible-inline"), a.find(".menus_items").addClass("is-invisible"), a.find("#search_button span").addClass("is-invisible")
            }

            function h() {
                window.innerWidth < 768 ? p() : f(2)
            }
            h(), $("#nav").css({
                opacity: "1",
                animation: "headerNoOpacity 1s"
            }), $(window).on("resize", (function() {
                $("#sidebar").hasClass("tocOpenPc") && a.hasClass("fixed") ? f(1) : h()
            }));
            var m = $(".toggle-menu"),
                g = $("#mobile-sidebar-menus"),
                v = $("#mobile-toc-button"),
                y = $("#menu_mask");

            function b(e) {
                if ("closeMenu" === e) {
                    m.removeClass("open").addClass("close"), g.css("transform", "translate3d(0%,0,0)");
                }
                if (sidebarPaddingR(), y.fadeIn(), "menu" === e) {
                    m.removeClass("close").addClass("open"), g.css("transform", "translate3d(-100%,0,0)");
                    var t = g.children();
                    for (let e = 0; e <= t.length; e++) {
                        const n = e / 5 + .2;
                        t.eq(e).css("animation", "sidebarItem " + n + "s")
                    }
                }
                "toc" === e && (v.removeClass("close").addClass("open"), $("#sidebar").addClass("tocOpenMobile"), $("#sidebar").css({
                    transform: "translate3d(-100%,0,0)",
                    left: ""
                }))
            }

            function x(e) {
                $("body").css({
                    overflow: "",
                    "padding-right": ""
                }), y.fadeOut(), "menu" === e && (m.removeClass("open").addClass("close"), g.css("transform", ""), $("#mobile-sidebar-menus > div,#mobile-sidebar-menus > hr").css("animation", "")), "toc" === e && (v.removeClass("open").addClass("close"), $("#sidebar").removeClass("tocOpenMobile"), $("#sidebar").css({
                    transform: ""
                }))
            }
            m.on("click", (function() {
                if(m.hasClass("close")) {
                    b("menu")
                } else {
                    b("closeMenu")
                }
            })), v.on("click", (function() {
                b("toc")
            })), y.on("click touchstart", (function(e) {
                m.hasClass("open") && x("menu"), v.hasClass("open") && x("toc")
            })), $(window).on("resize", (function(e) {
                m.is(":visible") || m.hasClass("open") && x("menu")
            }));
            window.matchMedia("(max-width: 1024px)").addListener((function(e) {
                e.matches ? $("#sidebar").hasClass("tocOpenPc") && closeSidebar() : ($("#toggle-sidebar").hasClass("on") && openSidebar(), v.hasClass("open") && x("toc"))
            })), $("#scroll_down").on("click", (function() {
                scrollToDest("#content-inner")
            })), $("#bookmark-it").on("click", (function() {
                if (window.sidebar && window.sidebar.addPanel) window.sidebar.addPanel(document.title, window.location.href, "");
                else if (window.external && "AddFavorite" in window.external) window.external.AddFavorite(location.href, document.title);
                else {
                    if (window.opera && window.print) return this.title = document.title, !0;
                    if (i) {
                        var e = GLOBAL_CONFIG.Snackbar.bookmark.message_prev + " " + (-1 !== navigator.userAgent.toLowerCase().indexOf("mac") ? "Command/Cmd" : "CTRL") + "+ D " + GLOBAL_CONFIG.Snackbar.bookmark.message_next + ".";
                        snackbarShow(e)
                    } else alert(GLOBAL_CONFIG.bookmark.message_prev + " " + (-1 !== navigator.userAgent.toLowerCase().indexOf("mac") ? "Command/Cmd" : "CTRL") + "+ D " + GLOBAL_CONFIG.bookmark.message_next + ".")
                }
            }));
            var w = 0,
                T = !0,
                C = "function" == typeof chatBtnHide,
                k = "function" == typeof chatBtnShow;
            if ($(window).scroll(throttle((function(e) {
                var t = $(this).scrollTop(),
                    n = function(e) {
                        var t = e > w;
                        return w = e, t
                    }(t);
                t > 56 ? (n ? (a.hasClass("visible") && a.removeClass("visible"), k && !0 === T && (chatBtnHide(), T = !1)) : (a.hasClass("visible") || a.addClass("visible"), C && !1 === T && (window.chatBtnShow(), T = !0)), a.addClass("fixed"), "0" === s.css("opacity") && s.css({
                    opacity: "1",
                    transform: "translateX(-38px)"
                })) : (0 === t && a.removeClass("fixed").removeClass("visible"), s.css({
                    opacity: "",
                    transform: ""
                }))
            }), 200)), $(".body-index")[0] ? ($("#readmode").hide(), $("#to_comment").hide(), $("#font_plus").hide(), $("#font_minus").hide()) : ($("#readmode").show(), $("#to_comment").show(), $("#font_plus").show(), $("#font_minus").show()), $("#go-up").on("click", (function() {
                scrollToDest("body")
            })), GLOBAL_CONFIG_SITE.isPost && GLOBAL_CONFIG_SITE.isSidebar) {
                $(".toc-child").hide(), $(window).scroll(throttle((function(e) {
                    var t = $(this).scrollTop();
                    S(t), A(t), j(t)
                }), 100)), $(".toc-link").on("click", (function(e) {
                    window.innerWidth <= 1024 ? x("toc") : (e.preventDefault(), scrollToDest($(this).attr("href")))
                }));
                var S = function(e) {
                        var t = $("#article-container").height(),
                            n = $(window).height(),
                            r = e / (t > n ? t - n : $(document).height() - n),
                            o = Math.round(100 * r),
                            i = o > 100 ? 100 : o <= 0 ? 0 : o;
                        $(".progress-num").text(i), $(".sidebar-toc__progress-bar").animate({
                            width: i + "%"
                        }, 100)
                    },
                    E = GLOBAL_CONFIG.isanchor,
                    A = function(e) {
                        if (0 === $(".toc-link").length) return !1;
                        var t = $("#article-container").find("h1,h2,h3,h4,h5,h6"),
                            n = "";
                        t.each((function() {
                            var t = $(this);
                            e > t.offset().top - 25 && (n = "#" + $(this).attr("id"))
                        })), "" === n && ($(".toc-link").removeClass("active"), $(".toc-child").hide());
                        var r, o, i = $(".toc-link.active");
                        if (n && i.attr("href") !== n) {
                            E && (o = n, window.history.replaceState && o !== window.location.hash && window.history.replaceState(void 0, void 0, o)), $(".toc-link").removeClass("active");
                            var a = $('.toc-link[href="' + n + '"]');
                            a.addClass("active");
                            var s = a.parents(".toc-child"),
                                c = s.length > 0 ? s.last() : a;
                            (r = c.closest(".toc-item").find(".toc-child")).is(":visible") || r.fadeIn(400), c.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()
                        }
                    },
                    j = function(e) {
                        if ($(".toc-link").hasClass("active")) {
                            var t = $(".active").offset().top,
                                n = $("#sidebar .sidebar-toc__content").scrollTop();
                            t > e + $(window).height() - 100 && $("#sidebar .sidebar-toc__content").scrollTop(n + 100), t < e + 100 && $("#sidebar .sidebar-toc__content").scrollTop(n - 100)
                        }
                    }
            }
            $("#readmode").click((function() {
                $("body").toggleClass("read-mode")
            })), $("#font_plus").click((function() {
                c.css("font-size", parseFloat(c.css("font-size")) + 1)
            })), $("#font_minus").click((function() {
                c.css("font-size", parseFloat(c.css("font-size")) - 1)
            })), $("#mobile-sidebar-menus .menus-expand").on("click", (function() {
                $(this).hasClass("menus-closed") ? ($(this).parents(".menus_item").find(".menus_item_child").slideDown(), $(this).removeClass("menus-closed")) : ($(this).parents(".menus_item").find(".menus_item_child").slideUp(), $(this).addClass("menus-closed"))
            })), $(window).on("touchmove", (function(e) {
                var t = $("#nav .menus_item_child");
                t.is(":visible") && t.css("display", "none")
            })), $("#rightside_config").on("click", (function() {
                $("#rightside-config-hide").hasClass("rightside-in") ? $("#rightside-config-hide").removeClass("rightside-in").addClass("rightside-out") : $("#rightside-config-hide").removeClass("rightside-out").addClass("rightside-in")
            })), $("#darkmode").click((function() {
                "light" == ("dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light") ? (n(), Cookies.set("theme", "dark", 2), i && snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)) : (r(), Cookies.set("theme", "light", 2), i && snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)), "function" == typeof utterancesTheme && utterancesTheme()
            }))
        },
        initArticle: function() {
            page.share(), initCanvas("articleTop"), $(window).width() >= 768 ? $(".post__toc").css({
                left: document.querySelector("article").getBoundingClientRect().right + 20,
                right: "auto",
                display: "block"
            }) : $(".side__top--toc").click((function() {
                $(".post__toc").slideToggle()
            }));
            var e = $("#article-container [id^=b3_solo_h]"),
                t = $(".article__toc");
            t.find("a").click((function(e) {
                var t = $(this).attr("href");
                return window.location.hash = t, $(window).scrollTop($(t).offset().top), $(window).width() < 768 && $(".post__toc").slideToggle(), e.preventDefault(), e.stopPropagation(), !1
            })), $("#to_comment").click((function() {
                var e = $(".commentFont").offset().top;
                $("body,html").animate({
                    scrollTop: e
                }, 1e3)
            })), $(window).scroll((function(n) {
                if (0 === $(".article__toc li").length) return !1;
                var r = [];
                e.each((function(e) {
                    r.push({
                        id: this.id,
                        offsetTop: $(this).offset().top
                    })
                }));
                for (var o = $(window).scrollTop() + 10, i = 0, a = r.length; i < a; i++)
                    if (o < r[i].offsetTop) {
                        t.find("li").removeClass("current");
                        var s = i > 0 ? i - 1 : 0;
                        t.find('a[href="#' + r[s].id + '"]').parent().addClass("current");
                        break
                    } o >= r[r.length - 1].offsetTop && (t.find("li").removeClass("current"), t.find("li:last").addClass("current"))
            })), $(window).scroll()
        }
    }, $(document).ready((function() {
        Skin.init()
    })),
        function() {
            window.cnblogsConfig = {
                homeTopImg: ["https://ftp.stackoverflow.wiki/bolo/background/butterfly/1.jpg", "https://ftp.stackoverflow.wiki/bolo/background/butterfly/2.jpg", 
                "https://ftp.stackoverflow.wiki/bolo/background/butterfly/3.jpg", "https://ftp.stackoverflow.wiki/bolo/background/butterfly/4.jpg", 
                "https://ftp.stackoverflow.wiki/bolo/background/butterfly/5.jpg", "https://ftp.stackoverflow.wiki/bolo/background/butterfly/6.jpg", 
                "https://ftp.stackoverflow.wiki/bolo/background/butterfly/7.jpg", "https://ftp.stackoverflow.wiki/bolo/background/butterfly/8.jpg", 
                "https://ftp.stackoverflow.wiki/bolo/background/butterfly/9.jpg", "https://ftp.stackoverflow.wiki/bolo/background/butterfly/10.jpg",
                "https://ftp.stackoverflow.wiki/bolo/background/butterfly/11.jpg","https://ftp.stackoverflow.wiki/bolo/background/butterfly/13.jpg"]
            };
            let e, t = window.cnblogsConfig.homeTopImg;
            var n, r;
            e = t.length > 0 ? t.length > 1 ? t[(n = 0, r = t.length - 1, Math.floor(Math.random() * (r - n) + n))] : t[0] : "", $(".full_page").css({
                background: "#222 url(" + e + ")  center center no-repeat",
                "background-size": "cover"
            })
        }(), leftRight()
}]);
