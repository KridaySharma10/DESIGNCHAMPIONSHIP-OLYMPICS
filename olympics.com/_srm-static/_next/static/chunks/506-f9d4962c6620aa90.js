"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [506], {
        38415: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return ep
                },
                Z: function() {
                    return eg
                }
            });
            var i = n(35944),
                a = n(67294),
                l = n(84193),
                r = n(52227),
                d = n(67807),
                o = n(91845);
            let c = (0, a.memo)(e => {
                let {
                    className: t,
                    path: l,
                    loop: r = !1
                } = e, d = (0, a.useRef)(null), o = (0, a.useRef)(null);
                return (0, a.useEffect)(() => {
                    if (d.current) return n.e(296).then(n.t.bind(n, 11248, 23)).then(async e => {
                        if (!d.current) return;
                        let t = "lottie-animation-".concat(l),
                            n = sessionStorage.getItem(t);
                        if (null === n) {
                            let e = await fetch(l);
                            if (!e.ok) return;
                            n = await e.text(), sessionStorage.setItem(t, n)
                        }
                        n = JSON.parse(n), o.current = e.default.loadAnimation({
                            container: d.current,
                            renderer: "svg",
                            loop: r,
                            autoplay: !0,
                            animationData: n
                        })
                    }), () => {
                        var e;
                        null === (e = o.current) || void 0 === e || e.destroy()
                    }
                }, [l, r]), (0, i.tZ)("div", {
                    "data-testid": "lottie-animation-container",
                    ref: d,
                    className: t
                })
            });
            var s = n(42771);
            let u = (0, r.Z)("div", {
                    target: "e73qmbz0"
                })("position:fixed;top:0;bottom:0;left:0;right:0;overflow-y:auto;transition:transform ", o.N, "ms ease-in-out,height 200ms ease-in-out;display:flex;justify-content:center;transform:translateY(100%);background-color:#ffffff;box-shadow:0px 2px 8px 0px rgba(0,0,0,0.06);z-index:100;&.open{transform:translateY(0);}&.loading{align-items:center;}@media (min-width:", d.MR, "px){top:auto;overflow:hidden;", e => {
                    let {
                        $height: t
                    } = e;
                    return "height: ".concat(t, "px;")
                }, "}"),
                h = (0, r.Z)("div", {
                    target: "e73qmbz1"
                })("position:relative;max-width:1312px;margin:0 24px;width:100%;height:min-content;> div{padding:16px 0;}> div:not(:last-of-type){border-bottom:1px solid rgba(219,219,219,1);}@media (min-width:", d.MR, "px){margin:0 64px;> div{padding:24px 0;}}"),
                p = (0, r.Z)("button", {
                    target: "e73qmbz2"
                })("cursor:pointer;position:absolute;top:16px;right:16px;width:32px;height:32px;padding:0;background-color:transparent;border:0;z-index:1;"),
                g = (0, r.Z)("div", {
                    target: "e73qmbz3"
                })("display:grid;grid-template-columns:1fr;gap:32px;@media (min-width:", d.MR, "px){grid-template-columns:1fr 1fr 1fr;}"),
                m = (0, r.Z)("div", {
                    target: "e73qmbz4"
                })("display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:8px;@media (min-width:", d.MR, "px){justify-content:end;}"),
                v = (0, r.Z)("div", {
                    target: "e73qmbz5"
                })("display:flex;justify-content:center;align-items:center;flex:1;&.desktop-only{display:none;}@media (min-width:", d.MR, "px){display:flex;justify-content:end;align-items:end;&.desktop-only{display:flex;}&.mobile-only{display:none;}}"),
                f = (0, r.Z)(s.F, {
                    target: "e73qmbz6"
                })("&.center{text-align:center;}&.full-width{flex:0 1 100%;}&.align-right{text-align:right;}&.apiMrh{white-space:normal;}"),
                x = (0, r.Z)(c, {
                    target: "e73qmbz7"
                })("padding:24px 0;width:130px;height:260px;"),
                y = (0, r.Z)("div", {
                    target: "e73qmbz8"
                })("display:none;align-items:center;padding:4px;border-radius:2px;gap:4px;width:min-content;&.gray{background:#dbdbdb;}&.warning{background:#ffc700;}@media (min-width:", d.MR, "px){display:flex;}&.small{display:flex;white-space:nowrap;}&.extended{width:100%;}&.full{display:flex;flex:1 0;width:auto;@media (min-width:", d.MR, "px){display:none;}}");
            var Z = n(25675),
                w = n.n(Z),
                b = n(41664),
                k = n.n(b),
                N = n(36227);
            let C = e => {
                    var t, n;
                    let {
                        testId: a,
                        link: l,
                        imgSrc: r,
                        alt: d,
                        pageType: o,
                        linkTag: c,
                        analyticsProps: s,
                        integrationType: u
                    } = e, {
                        module: h,
                        moduleInstance: p
                    } = N.ft.find(e => e.type === o) || {}, g = u ? N.Mc[u] : null, m = {
                        module: null !== (t = null == g ? void 0 : g.module) && void 0 !== t ? t : h,
                        module_instance: null !== (n = null == g ? void 0 : g.moduleInstance) && void 0 !== n ? n : p,
                        link_tag: c,
                        destination_url: l,
                        ...s
                    };
                    return (0, i.tZ)(E, {
                        "data-testid": a,
                        "aria-label": l,
                        href: null != l ? l : "#",
                        "data-tracking": "click",
                        "data-tracking-payload": JSON.stringify(m),
                        children: (0, i.tZ)(S, {
                            children: r && (0, i.tZ)(w(), {
                                unoptimized: !0,
                                alt: d || "",
                                width: 109,
                                height: 61,
                                src: r
                            })
                        })
                    })
                },
                E = (0, r.Z)(k(), {
                    target: "e10ach670"
                })("display:flex;color:black;background-color:white;width:109px;height:61px;border-radius:4px;border:1px solid rgba(219,219,219,1);"),
                S = (0, r.Z)("div", {
                    target: "e10ach671"
                })("display:flex;flex:1;justify-content:center;align-items:center;padding:4px;box-sizing:border-box;> img{object-fit:contain;height:100%;width:100%;}"),
                B = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.filter(e => !!e).reduce((e, t) => "".concat(e, " ").concat(t).trim(), "")
                };
            var X = n(37223),
                T = n(71001);
            let I = e => {
                    var t, n;
                    let {
                        title: a,
                        description: r,
                        location: d,
                        imgSrc: o,
                        noticeText: c,
                        noticeType: u,
                        noticeDescription: h,
                        mrhs: p,
                        pageType: g,
                        analyticsProps: x,
                        integrationType: Z
                    } = e, {
                        imagesBasePath: b
                    } = (0, X.V)(), k = [u === l.kS.Warning && "warning", u === l.kS.Info && "gray"];
                    return (0, i.BX)(z, {
                        "data-testid": "header-event-unit",
                        children: [(0, i.BX)(M, {
                            children: [(0, i.tZ)("div", {
                                children: (0, i.tZ)(w(), {
                                    alt: "".concat(a, " picture"),
                                    width: 72,
                                    height: 72,
                                    src: o
                                })
                            }), (0, i.BX)(F, {
                                children: [u && (0, i.BX)(y, {
                                    className: B("small", ...k),
                                    children: [u === l.kS.Warning && (0, i.tZ)(w(), {
                                        alt: "Warning Icon",
                                        width: 13.3,
                                        height: 12,
                                        src: "".concat(b, "/srm/paris-2024/dailyScheduleWarning")
                                    }), c && (0, i.tZ)(s.F, {
                                        variant: "caption",
                                        children: c
                                    })]
                                }), (0, i.tZ)(s.F, {
                                    as: "h3",
                                    variant: "h3",
                                    children: a
                                }), (0, i.tZ)(s.F, {
                                    variant: "small",
                                    children: r
                                }), d && (0, i.BX)(R, {
                                    children: [(0, i.tZ)(w(), {
                                        alt: "Location Icon",
                                        width: 24,
                                        height: 24,
                                        src: "/_srm-static/locationIcon.svg"
                                    }), (0, i.tZ)(s.F, {
                                        variant: "small",
                                        children: d
                                    })]
                                }), h && (0, i.BX)(y, {
                                    className: B("extended", ...k),
                                    children: [u === l.kS.Warning && (0, i.tZ)(w(), {
                                        alt: "Warning Icon",
                                        width: 13.3,
                                        height: 12,
                                        src: "".concat(b, "/srm/paris-2024/dailyScheduleWarning")
                                    }), h && (0, i.tZ)(s.F, {
                                        variant: "caption",
                                        children: h
                                    })]
                                })]
                            }), !!(null == p ? void 0 : null === (t = p.items) || void 0 === t ? void 0 : t.length) && (0, i.tZ)(v, {
                                className: "desktop-only",
                                children: (0, i.BX)(m, {
                                    children: [(0, i.tZ)(f, {
                                        className: B("align-right", p.items.length > 2 && "full-width", Z === T.BD.apiIntegration && "apiMrh"),
                                        variant: "mrhTitle",
                                        children: p.title
                                    }), null === (n = p.items) || void 0 === n ? void 0 : n.map(e => (0, i.tZ)(C, {
                                        testId: "".concat(e.id, "-desktop"),
                                        ...e,
                                        pageType: g,
                                        linkTag: p.title,
                                        analyticsProps: x,
                                        integrationType: Z
                                    }, "".concat(e.id, "-desktop")))]
                                })
                            })]
                        }), h && (0, i.BX)(y, {
                            className: B("full", ...k),
                            children: [u === l.kS.Warning && (0, i.tZ)(w(), {
                                alt: "Warning Icon",
                                width: 13.3,
                                height: 12,
                                src: "".concat(b, "/srm/paris-2024/dailyScheduleWarning")
                            }), h && (0, i.tZ)(s.F, {
                                variant: "caption",
                                children: h
                            })]
                        })]
                    })
                },
                M = (0, r.Z)("div", {
                    target: "euv4fin0"
                })("display:flex;gap:16px;"),
                z = (0, r.Z)("div", {
                    target: "euv4fin1"
                })("display:flex;flex-direction:column;gap:16px;"),
                F = (0, r.Z)("div", {
                    target: "euv4fin2"
                })("display:flex;gap:8px;flex-direction:column;"),
                R = (0, r.Z)("div", {
                    target: "euv4fin3"
                })("display:flex;align-items:center;gap:8px;"),
                _ = e => {
                    let {
                        type: t,
                        label: n,
                        link: a,
                        pageType: l,
                        modulePosition: r,
                        analyticsProps: d
                    } = e, {
                        imagesBasePath: o
                    } = (0, X.V)(), {
                        module: c,
                        moduleInstance: s
                    } = N.ft.find(e => e.type === l) || {}, u = {
                        module: c,
                        module_instance: s,
                        link_tag: n,
                        destination_url: a,
                        module_position: (r + 1).toString(),
                        ...d
                    };
                    return (0, i.BX)(W, {
                        href: null != a ? a : "#",
                        "data-tracking": "click",
                        "data-tracking-payload": JSON.stringify(u),
                        children: [(0, i.tZ)(w(), {
                            alt: n,
                            width: 32,
                            height: 32,
                            src: "".concat(o, "/srm/paris-2024/contextual-icons/").concat(t)
                        }), (0, i.tZ)(q, {
                            variant: "mediumBold",
                            children: n
                        }), (0, i.tZ)(w(), {
                            alt: "arrow",
                            width: 24,
                            height: 24,
                            src: "".concat(o, "/srm/paris-2024/contextual-icons/arrow")
                        })]
                    })
                },
                W = (0, r.Z)("a", {
                    target: "eyfeqss0"
                })("display:flex;align-items:center;gap:8px;"),
                q = (0, r.Z)(s.F, {
                    target: "eyfeqss1"
                })("flex:1;color:black;"),
                j = (0, r.Z)("button", {
                    target: "e1kr62m70"
                })("position:relative;width:42px;height:20px;border-radius:20px;border:1px solid black;padding:0 1px;background-color:transparent;cursor:pointer;"),
                L = (0, r.Z)("div", {
                    target: "e1kr62m71"
                })("position:absolute;top:50%;left:calc(0% + 10px);width:16px;height:16px;background-color:black;border-radius:50%;transform:translate(-50%,-50%);transition:left 100ms ease-in-out;&.active{left:calc(100% - 10px);}"),
                $ = e => {
                    let {
                        active: t,
                        onToggle: n
                    } = e;
                    return (0, i.tZ)(j, {
                        "data-testid": "toggle",
                        onClick: () => n(!t),
                        children: (0, i.tZ)(L, {
                            className: t ? "active" : ""
                        })
                    })
                };
            var D = n(7478),
                V = n(11163);
            let P = e => {
                    let {
                        type: t,
                        title: n,
                        description: a,
                        onToggle: r,
                        active: d = !1
                    } = e, {
                        imagesBasePath: o
                    } = (0, X.V)(), {
                        locale: c
                    } = (0, V.useRouter)(), u = {
                        link_tag: "export to iCal"
                    };
                    return (0, i.BX)(O, {
                        as: t === l.N$.CalendarExport ? "button" : void 0,
                        "data-testid": "contextual-op",
                        onClick: t === l.N$.CalendarExport ? () => {
                            null == r || r({
                                type: t,
                                title: n,
                                description: a,
                                active: d
                            }), (0, D.T)(c, !1, u)
                        } : void 0,
                        className: t === l.N$.CalendarExport ? "clickable center" : "",
                        children: [(0, i.tZ)(U, {
                            children: (0, i.tZ)(w(), {
                                alt: n,
                                width: 24,
                                height: 24,
                                src: "".concat(o, "/srm/paris-2024/contextual-icons/").concat(t)
                            })
                        }), (0, i.BX)(H, {
                            children: [(0, i.tZ)(s.F, {
                                variant: t !== l.N$.CalendarExport ? "medium" : "mediumBold",
                                children: n
                            }), a && (0, i.tZ)(s.F, {
                                variant: "small",
                                children: a
                            })]
                        }), t === l.N$.CalendarExport && (0, i.tZ)(w(), {
                            alt: n,
                            width: 24,
                            height: 24,
                            src: "".concat(o, "/srm/paris-2024/contextual-icons/orientedArrow")
                        }), t !== l.N$.CalendarExport && r && (0, i.tZ)($, {
                            active: d,
                            onToggle: () => r({
                                type: t,
                                title: n,
                                description: a,
                                active: !d
                            })
                        })]
                    })
                },
                O = (0, r.Z)("div", {
                    target: "e1mv1y10"
                })("display:flex;height:min-content;background-color:transparent;outline:none;border:none;border-radius:2px;&:focus{border:2px solid #000;}gap:8px;&.clickable{cursor:pointer;}&.center{align-items:center;}"),
                U = (0, r.Z)("div", {
                    target: "e1mv1y11"
                })("display:flex;align-items:center;justify-content:center;width:24px;height:24px;"),
                H = (0, r.Z)("div", {
                    target: "e1mv1y12"
                })("display:flex;align-items:start;flex-direction:column;flex:1;"),
                Y = e => {
                    let {
                        title: t,
                        description: n,
                        imgSrc: a
                    } = e;
                    return (0, i.BX)(A, {
                        "data-testid": "header-event",
                        children: [(0, i.tZ)("div", {
                            children: (0, i.tZ)(w(), {
                                alt: "".concat(t, " picture"),
                                width: 72,
                                height: 72,
                                src: a
                            })
                        }), (0, i.BX)(J, {
                            children: [(0, i.tZ)(s.F, {
                                as: "h3",
                                variant: "h3",
                                children: t
                            }), n && (0, i.tZ)(s.F, {
                                variant: "small",
                                children: n
                            })]
                        })]
                    })
                },
                A = (0, r.Z)("div", {
                    target: "e730ic50"
                })("display:flex;gap:16px;"),
                J = (0, r.Z)("div", {
                    target: "e730ic51"
                })("display:flex;flex-direction:column;gap:8px;"),
                K = e => {
                    let {
                        title: t,
                        country: n,
                        imgSrc: a,
                        flagSrc: l,
                        alertMessage: r
                    } = e, {
                        imagesBasePath: d
                    } = (0, X.V)();
                    return (0, i.BX)(G, {
                        "data-testid": "header-individual",
                        children: [(0, i.tZ)("div", {
                            children: (0, i.tZ)(w(), {
                                alt: "".concat(t, " picture"),
                                width: 72,
                                height: 96,
                                src: a
                            })
                        }), (0, i.BX)(Q, {
                            children: [r && (0, i.BX)(y, {
                                className: B("small", "warning"),
                                children: [(0, i.tZ)(w(), {
                                    alt: "Warning Icon",
                                    width: 13.3,
                                    height: 12,
                                    src: "".concat(d, "/srm/paris-2024/dailyScheduleWarning")
                                }), (0, i.tZ)(s.F, {
                                    variant: "caption",
                                    children: r
                                })]
                            }), (0, i.tZ)(s.F, {
                                as: "h3",
                                variant: "h3",
                                children: t
                            }), (0, i.BX)(ee, {
                                children: [(0, i.tZ)(w(), {
                                    alt: "".concat(n, " flag"),
                                    width: 32,
                                    height: 24,
                                    src: l
                                }), (0, i.tZ)(s.F, {
                                    variant: "medium",
                                    children: n
                                })]
                            })]
                        })]
                    })
                },
                G = (0, r.Z)("div", {
                    target: "e9l8q180"
                })("display:flex;gap:16px;"),
                Q = (0, r.Z)("div", {
                    target: "e9l8q181"
                })("display:flex;justify-content:center;flex-direction:column;gap:4px;"),
                ee = (0, r.Z)("div", {
                    target: "e9l8q182"
                })("display:flex;gap:8px;align-items:center;"),
                et = e => {
                    let {
                        title: t,
                        flagSrc: n
                    } = e;
                    return (0, i.BX)(en, {
                        "data-testid": "header-team",
                        children: [(0, i.tZ)("div", {
                            children: (0, i.tZ)(w(), {
                                alt: "".concat(t, " picture"),
                                width: 64,
                                height: 48,
                                src: n
                            })
                        }), (0, i.tZ)(ei, {
                            children: (0, i.tZ)(s.F, {
                                as: "h3",
                                variant: "h3",
                                children: t
                            })
                        })]
                    })
                },
                en = (0, r.Z)("div", {
                    target: "ep751370"
                })("display:flex;gap:16px;"),
                ei = (0, r.Z)("div", {
                    target: "ep751371"
                })("display:flex;justify-content:center;flex-direction:column;gap:4px;"),
                ea = e => {
                    let {
                        title: t,
                        flagSrc: n,
                        country: a,
                        alertMessage: l
                    } = e, {
                        imagesBasePath: r
                    } = (0, X.V)();
                    return (0, i.tZ)(el, {
                        "data-testid": "header-double",
                        children: (0, i.BX)(er, {
                            children: [l && (0, i.BX)(y, {
                                className: B("small", "warning"),
                                children: [(0, i.tZ)(w(), {
                                    alt: "Warning Icon",
                                    width: 13.3,
                                    height: 12,
                                    src: "".concat(r, "/srm/paris-2024/dailyScheduleWarning")
                                }), (0, i.tZ)(s.F, {
                                    variant: "caption",
                                    children: l
                                })]
                            }), (0, i.tZ)(s.F, {
                                as: "h3",
                                variant: "h3",
                                children: t
                            }), (0, i.BX)(ed, {
                                children: [(0, i.tZ)(w(), {
                                    alt: "".concat(a, " flag"),
                                    width: 32,
                                    height: 24,
                                    src: n
                                }), (0, i.tZ)(s.F, {
                                    variant: "medium",
                                    children: a
                                })]
                            })]
                        })
                    })
                },
                el = (0, r.Z)("div", {
                    target: "e1dmzwm70"
                })("display:flex;gap:16px;"),
                er = (0, r.Z)("div", {
                    target: "e1dmzwm71"
                })("display:flex;justify-content:center;flex-direction:column;gap:4px;"),
                ed = (0, r.Z)("div", {
                    target: "e1dmzwm72"
                })("display:flex;gap:8px;align-items:center;");
            var eo = n(18446),
                ec = n.n(eo);
            let es = e => {
                let {
                    children: t,
                    containerRef: n,
                    onClose: l,
                    closeButton: r,
                    focusedElementOnCloseSelector: d
                } = e, o = (0, a.useRef)(null), c = (0, a.useRef)(null), s = (0, a.useCallback)(e => {
                    var t;
                    if ("Tab" != o.current || e.target && (n.current === e.target || (null === (t = n.current) || void 0 === t ? void 0 : t.contains(e.target))) || !d) return;
                    let i = document.querySelector(d);
                    null == i || i.focus(), null == l || l()
                }, [n, d, l]), u = (0, a.useCallback)(e => {
                    if (!d || "Space" !== e.code && "Enter" !== e.code) return;
                    let t = document.querySelector(d);
                    null == t || t.focus(), null == l || l()
                }, [d, l]), h = (0, a.useCallback)(e => {
                    o.current = e.code
                }, []), p = (0, a.useCallback)(() => {
                    o.current = null
                }, []);
                return (0, a.useEffect)(() => (document.addEventListener("keydown", h), document.addEventListener("keyup", p), document.addEventListener("focusin", s), () => {
                    document.removeEventListener("keydown", h), document.removeEventListener("keyup", p), document.removeEventListener("focusin", s)
                }), [s, h, p]), (0, a.useEffect)(() => {
                    var e;
                    return null == c ? void 0 : null === (e = c.current) || void 0 === e ? void 0 : e.focus()
                }, []), (0, i.BX)(i.HY, {
                    children: [a.cloneElement(r, {
                        ref: c,
                        onClick: l,
                        onKeyUp: u
                    }), t]
                })
            };
            var eu = n(43386);
            let eh = e => {
                    let {
                        mrhs: t,
                        integrationType: n
                    } = e, {
                        locale: l
                    } = (0, V.useRouter)();
                    return (0, a.useEffect)(() => {
                        var e;
                        if (!t) return;
                        let i = n ? N.Mc[n] : null;
                        (0, eu.Rp)({
                            language: null != l ? l : "",
                            moduleInstance: null == i ? void 0 : i.moduleInstance,
                            module: null == i ? void 0 : i.module,
                            title: null !== (e = t.title) && void 0 !== e ? e : ""
                        }, {})
                    }, [n, l, t]), (0, i.tZ)(i.HY, {})
                },
                ep = (0, a.memo)(e => {
                    var t, n;
                    let {
                        open: r = !1,
                        loading: o,
                        onClose: c,
                        type: s,
                        header: y,
                        mrhs: Z,
                        links: b,
                        ops: k,
                        pageType: N,
                        analyticsProps: E,
                        focusedElementOnCloseSelector: S,
                        integrationType: T
                    } = e, {
                        imagesBasePath: M
                    } = (0, X.V)(), [z, F] = (0, a.useState)(0), R = (0, a.useRef)(null);
                    if ((0, a.useEffect)(() => {
                            if (!r) return () => null;
                            let e = getComputedStyle(document.body).overflow,
                                t = () => {
                                    var t, n;
                                    F(null !== (n = (null === (t = R.current) || void 0 === t ? void 0 : t.lastChild).clientHeight) && void 0 !== n ? n : 0), window.innerWidth <= d.MR ? document.body.style.overflow = "hidden" : document.body.style.overflow = e
                                };
                            return window.addEventListener("resize", t), window.innerWidth <= d.MR && (document.body.style.overflow = "hidden"), () => {
                                window.removeEventListener("resize", t), document.body.style.overflow = e
                            }
                        }, [r]), (0, a.useEffect)(() => {
                            if (!R.current) return;
                            let e = new MutationObserver(() => {
                                var e, t;
                                F(null !== (t = (null === (e = R.current) || void 0 === e ? void 0 : e.lastChild).clientHeight) && void 0 !== t ? t : 0)
                            });
                            return e.observe(R.current, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                e.disconnect()
                            }
                        }, []), o) return (0, i.tZ)(u, {
                        ref: R,
                        $height: z,
                        "data-testid": "contextual-menu-loading",
                        className: B("loading", r ? "open" : ""),
                        children: (0, i.tZ)(x, {
                            path: "/_srm-static/contextual-menu/loader.json",
                            loop: !0
                        })
                    }, "contextual-menu-container");
                    let W = "".concat(M, "/srm/paris-2024/contextual-icons/close-icon");
                    return y ? (0, i.tZ)(u, {
                        ref: R,
                        $height: z,
                        "data-testid": "contextual-menu-full",
                        className: r ? "open" : "",
                        children: (0, i.tZ)(es, {
                            containerRef: R,
                            onClose: c,
                            focusedElementOnCloseSelector: S,
                            closeButton: (0, i.tZ)(p, {
                                children: (0, i.tZ)(w(), {
                                    alt: "Close Icon",
                                    width: 32,
                                    height: 32,
                                    src: W
                                })
                            }),
                            children: (0, i.BX)(h, {
                                children: [(0, i.BX)("div", {
                                    children: [(0, i.tZ)(eh, {
                                        mrhs: Z,
                                        integrationType: T
                                    }), s === l.ky.EventUnit && (0, i.tZ)(I, { ...y,
                                        mrhs: Z,
                                        pageType: N,
                                        analyticsProps: E,
                                        integrationType: T
                                    }), (s === l.ky.Event || s === l.ky.Discipline) && (0, i.tZ)(Y, { ...y
                                    }), s === l.ky.MedalistsIndividual && (0, i.tZ)(K, { ...y
                                    }), s === l.ky.MedalistsTeam && (0, i.tZ)(et, { ...y
                                    }), s === l.ky.MedalistsDouble && (0, i.tZ)(ea, { ...y
                                    })]
                                }), !!(null == Z ? void 0 : null === (t = Z.items) || void 0 === t ? void 0 : t.length) && (0, i.tZ)(v, {
                                    className: "mobile-only",
                                    children: (0, i.BX)(m, {
                                        children: [(0, i.tZ)(f, {
                                            className: B("center", (null == Z ? void 0 : Z.items.length) > 2 && "full-width"),
                                            variant: "mrhTitle",
                                            children: Z.title
                                        }), null == Z ? void 0 : null === (n = Z.items) || void 0 === n ? void 0 : n.map(e => (0, i.tZ)(C, {
                                            testId: "".concat(e.id, "-mobile"),
                                            ...e,
                                            pageType: N,
                                            linkTag: Z.title,
                                            analyticsProps: E,
                                            integrationType: T
                                        }, "".concat(e.id, "-mobile")))]
                                    })
                                }), !!(null == b ? void 0 : b.length) && (0, i.tZ)(g, {
                                    children: null == b ? void 0 : b.map((e, t) => (0, i.tZ)(_, { ...e,
                                        pageType: N,
                                        modulePosition: t,
                                        analyticsProps: E
                                    }, e.label))
                                }), !!(null == k ? void 0 : k.length) && (0, i.tZ)(g, {
                                    children: null == k ? void 0 : k.map(e => (0, i.tZ)(P, { ...e
                                    }, e.title))
                                })]
                            })
                        })
                    }, "contextual-menu-container") : (0, i.tZ)(u, {
                        ref: R,
                        $height: z,
                        "data-testid": "contextual-menu-empty",
                        className: r ? "open" : "",
                        children: (0, i.tZ)(p, {
                            onClick: c,
                            children: (0, i.tZ)(w(), {
                                alt: "Close Icon",
                                width: 32,
                                height: 32,
                                src: W
                            })
                        })
                    }, "contextual-menu-container")
                }, ec());
            var eg = ep
        },
        84193: function(e, t, n) {
            var i, a, l, r, d, o, c, s;
            n.d(t, {
                N$: function() {
                    return a
                },
                Un: function() {
                    return r
                },
                kS: function() {
                    return l
                },
                ky: function() {
                    return i
                }
            }), (d = i || (i = {})).MedalistsIndividual = "medalistsIndividual", d.MedalistsTeam = "medalistsTeam", d.MedalistsDouble = "medalistsDouble", d.Discipline = "discipline", d.Event = "event", d.EventUnit = "eventUnit", (o = a || (a = {})).Notification = "notification", o.Favourites = "favourites", o.CalendarExport = "exportToCalendar", (c = l || (l = {})).Warning = "warning", c.Info = "info", (s = r || (r = {})).Live = "live", s.Schedule = "schedule", s.Standings = "standings", s.Statistics = "statistics", s.Videos = "videos", s.News = "news"
        },
        91845: function(e, t, n) {
            n.d(t, {
                N: function() {
                    return i
                }
            });
            let i = 400
        },
        8988: function(e, t, n) {
            n.d(t, {
                y: function() {
                    return o
                }
            });
            var i = n(43386),
                a = n(36227),
                l = n(91845),
                r = n(11163),
                d = n(67294);
            let o = (e, t) => {
                let [n, o] = (0, d.useState)(!1), [c, s] = (0, d.useState)(!1), [u, h] = (0, d.useState)(), [p, g] = (0, d.useState)(), [m, v] = (0, d.useState)(), {
                    locale: f
                } = (0, r.useRouter)(), x = (0, d.useCallback)(e => {
                    v(e), o(!0), s(!1)
                }, []), y = (0, d.useCallback)(() => {
                    o(!1), setTimeout(() => v(void 0), l.N), s(!1)
                }, []), Z = (0, d.useCallback)(e => {
                    if (e) {
                        o(!0), s(!0);
                        return
                    }
                    o(!1), setTimeout(() => s(!1), l.N)
                }, []), w = (0, d.useCallback)(t => {
                    if (e) {
                        let {
                            module: n,
                            moduleInstance: l
                        } = a.ft.find(t => t.type === e) || {}, r = {
                            discipline: null == t ? void 0 : t.disciplineCode,
                            noc_id: null == t ? void 0 : t.nocId,
                            athlete: null == t ? void 0 : t.athlete
                        };
                        (0, i.Rf)({
                            language: f || "",
                            module: n,
                            moduleInstance: l,
                            contentExpanded: !!t,
                            linkTag: "contextual menu",
                            extraTrackingData: r
                        }), h(r)
                    }
                    g(null == t ? void 0 : t.integrationType), t ? x(t) : y()
                }, [f, e, y, x]);
                return {
                    open: n,
                    item: (0, d.useMemo)(() => {
                        let e = e => m && (null == t ? void 0 : t(e, m)),
                            n = (null == m ? void 0 : m.ops.map(t => ({ ...t,
                                onToggle: e
                            }))) || [];
                        return m ? { ...m,
                            ops: n
                        } : void 0
                    }, [m, t]),
                    toggle: w,
                    loading: c,
                    setLoading: Z,
                    analyticsProps: u,
                    integrationType: p
                }
            }
        },
        7478: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return r
                }
            });
            var i = n(43386),
                a = n(66358),
                l = n(25556);
            let r = function() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en",
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Paris 2024",
                    o = window.document.location.pathname.replace(/\/([a-z][a-z])\//, "").split("/");
                "" === o[0] && o.shift(), r.section_level_1 = "paris-2024", r.section_level_2 = o[1];
                let c = { ...(0, l.Cr)(n, null !== (e = r.link_tag) && void 0 !== e ? e : "", t, d),
                    ...r
                };
                console.info("trackingLinkData", c), (0, i.j)(a.ju.click, c, !0)
            }
        }
    }
]);
//# sourceMappingURL=506-f9d4962c6620aa90.js.map