(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [664], {
        13412: function(e, t) {
            "use strict";
            var n, r;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    PrefetchKind: function() {
                        return n
                    },
                    ACTION_REFRESH: function() {
                        return o
                    },
                    ACTION_NAVIGATE: function() {
                        return l
                    },
                    ACTION_RESTORE: function() {
                        return u
                    },
                    ACTION_SERVER_PATCH: function() {
                        return f
                    },
                    ACTION_PREFETCH: function() {
                        return a
                    },
                    ACTION_FAST_REFRESH: function() {
                        return i
                    },
                    ACTION_SERVER_ACTION: function() {
                        return c
                    },
                    isThenable: function() {
                        return s
                    }
                });
            let o = "refresh",
                l = "navigate",
                u = "restore",
                f = "server-patch",
                a = "prefetch",
                i = "fast-refresh",
                c = "server-action";

            function s(e) {
                return e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
            }(r = n || (n = {})).AUTO = "auto", r.FULL = "full", r.TEMPORARY = "temporary", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        96504: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(10282);

            function o(e, t, o, l) {
                {
                    let u = n(54898).normalizeLocalePath,
                        f = n(3964).detectDomainLocale,
                        a = t || u(e, o).detectedLocale,
                        i = f(l, void 0, a);
                    if (i) {
                        let t = "http" + (i.http ? "" : "s") + "://",
                            n = a === i.defaultLocale ? "" : "/" + a;
                        return "" + t + i.domain + (0, r.normalizePathTrailingSlash)("" + n + e)
                    }
                    return !1
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        63480: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return g
                }
            });
            let r = n(10260),
                o = n(85893),
                l = r._(n(67294)),
                u = n(7950),
                f = n(87387),
                a = n(76982),
                i = n(56921),
                c = n(97727),
                s = n(1973),
                d = n(26216),
                p = n(61722),
                b = n(96504),
                y = n(90634),
                h = n(13412),
                _ = new Set;

            function v(e, t, n, r, o, l) {
                if (l || (0, f.isLocalURL)(t)) {
                    if (!r.bypassPrefetchedCheck) {
                        let o = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0);
                        if (_.has(o)) return;
                        _.add(o)
                    }
                    Promise.resolve(l ? e.prefetch(t, o) : e.prefetch(t, n, r)).catch(e => {})
                }
            }

            function O(e) {
                return "string" == typeof e ? e : (0, a.formatUrl)(e)
            }
            let g = l.default.forwardRef(function(e, t) {
                let n, r;
                let {
                    href: a,
                    as: _,
                    children: g,
                    prefetch: P = null,
                    passHref: j,
                    replace: C,
                    shallow: m,
                    scroll: E,
                    locale: M,
                    onClick: T,
                    onMouseEnter: R,
                    onTouchStart: L,
                    legacyBehavior: A = !1,
                    ...k
                } = e;
                n = g, A && ("string" == typeof n || "number" == typeof n) && (n = (0, o.jsx)("a", {
                    children: n
                }));
                let I = l.default.useContext(s.RouterContext),
                    x = l.default.useContext(d.AppRouterContext),
                    S = null != I ? I : x,
                    N = !I,
                    U = !1 !== P,
                    w = null === P ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
                    {
                        href: K,
                        as: F
                    } = l.default.useMemo(() => {
                        if (!I) {
                            let e = O(a);
                            return {
                                href: e,
                                as: _ ? O(_) : e
                            }
                        }
                        let [e, t] = (0, u.resolveHref)(I, a, !0);
                        return {
                            href: e,
                            as: _ ? (0, u.resolveHref)(I, _) : t || e
                        }
                    }, [I, a, _]),
                    H = l.default.useRef(K),
                    z = l.default.useRef(F);
                A && (r = l.default.Children.only(n));
                let D = A ? r && "object" == typeof r && r.ref : t,
                    [V, q, B] = (0, p.useIntersection)({
                        rootMargin: "200px"
                    }),
                    G = l.default.useCallback(e => {
                        (z.current !== F || H.current !== K) && (B(), z.current = F, H.current = K), V(e), D && ("function" == typeof D ? D(e) : "object" == typeof D && (D.current = e))
                    }, [F, D, K, B, V]);
                l.default.useEffect(() => {
                    S && q && U && v(S, K, F, {
                        locale: M
                    }, {
                        kind: w
                    }, N)
                }, [F, K, q, M, U, null == I ? void 0 : I.locale, S, N, w]);
                let Y = {
                    ref: G,
                    onClick(e) {
                        A || "function" != typeof T || T(e), A && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), S && !e.defaultPrevented && function(e, t, n, r, o, u, a, i, c) {
                            let {
                                nodeName: s
                            } = e.currentTarget;
                            if ("A" === s.toUpperCase() && (function(e) {
                                    let t = e.currentTarget.getAttribute("target");
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !c && !(0, f.isLocalURL)(n))) return;
                            e.preventDefault();
                            let d = () => {
                                let e = null == a || a;
                                "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                                    shallow: u,
                                    locale: i,
                                    scroll: e
                                }) : t[o ? "replace" : "push"](r || n, {
                                    scroll: e
                                })
                            };
                            c ? l.default.startTransition(d) : d()
                        }(e, S, K, F, C, m, E, M, N)
                    },
                    onMouseEnter(e) {
                        A || "function" != typeof R || R(e), A && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), S && (U || !N) && v(S, K, F, {
                            locale: M,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: w
                        }, N)
                    },
                    onTouchStart(e) {
                        A || "function" != typeof L || L(e), A && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), S && (U || !N) && v(S, K, F, {
                            locale: M,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: w
                        }, N)
                    }
                };
                if ((0, i.isAbsoluteUrl)(F)) Y.href = F;
                else if (!A || j || "a" === r.type && !("href" in r.props)) {
                    let e = void 0 !== M ? M : null == I ? void 0 : I.locale,
                        t = (null == I ? void 0 : I.isLocaleDomain) && (0, b.getDomainLocale)(F, e, null == I ? void 0 : I.locales, null == I ? void 0 : I.domainLocales);
                    Y.href = t || (0, y.addBasePath)((0, c.addLocale)(F, e, null == I ? void 0 : I.defaultLocale))
                }
                return A ? l.default.cloneElement(r, Y) : (0, o.jsx)("a", { ...k,
                    ...Y,
                    children: n
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        54898: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "normalizeLocalePath", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = (e, t) => n(40107).normalizeLocalePath(e, t);
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        61722: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = n(67294),
                o = n(39126),
                l = "function" == typeof IntersectionObserver,
                u = new Map,
                f = [];

            function a(e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: a
                } = e, i = a || !l, [c, s] = (0, r.useState)(!1), d = (0, r.useRef)(null), p = (0, r.useCallback)(e => {
                    d.current = e
                }, []);
                return (0, r.useEffect)(() => {
                    if (l) {
                        if (i || c) return;
                        let e = d.current;
                        if (e && e.tagName) return function(e, t, n) {
                            let {
                                id: r,
                                observer: o,
                                elements: l
                            } = function(e) {
                                let t;
                                let n = {
                                        root: e.root || null,
                                        margin: e.rootMargin || ""
                                    },
                                    r = f.find(e => e.root === n.root && e.margin === n.margin);
                                if (r && (t = u.get(r))) return t;
                                let o = new Map;
                                return t = {
                                    id: n,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = o.get(e.target),
                                                n = e.isIntersecting || e.intersectionRatio > 0;
                                            t && n && t(n)
                                        })
                                    }, e),
                                    elements: o
                                }, f.push(n), u.set(n, t), t
                            }(n);
                            return l.set(e, t), o.observe(e),
                                function() {
                                    if (l.delete(e), o.unobserve(e), 0 === l.size) {
                                        o.disconnect(), u.delete(r);
                                        let e = f.findIndex(e => e.root === r.root && e.margin === r.margin);
                                        e > -1 && f.splice(e, 1)
                                    }
                                }
                        }(e, e => e && s(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        })
                    } else if (!c) {
                        let e = (0, o.requestIdleCallback)(() => s(!0));
                        return () => (0, o.cancelIdleCallback)(e)
                    }
                }, [i, n, t, c, d.current]), [p, c, (0, r.useCallback)(() => {
                    s(!1)
                }, [])]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        41664: function(e, t, n) {
            e.exports = n(63480)
        }
    }
]);
//# sourceMappingURL=664-ed109919cc7e818a.js.map