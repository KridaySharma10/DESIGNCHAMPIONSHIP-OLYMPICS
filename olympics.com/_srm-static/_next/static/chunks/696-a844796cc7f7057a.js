(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [696], {
        18063: function(e, t, n) {
            "use strict";
            var i = n(43355),
                l = n(66194),
                r = n(67294),
                a = n(77986);
            let o = (0, r.memo)(i.Z),
                d = a.styled.div.withConfig({
                    componentId: "sc-b5fbe4d0-0"
                })(["display:flex;justify-content:center;margin-bottom:", ";width:100%;", "{justify-content:flex-end;}"], e => {
                    let {
                        $marginBottom: t
                    } = e;
                    return "".concat(t, "px")
                }, (0, l.TE)(l.u3.LG)),
                s = a.styled.div.withConfig({
                    componentId: "sc-b5fbe4d0-1"
                })(["align-items:center;display:flex;gap:", "rem;height:6.1rem;justify-content:right;max-width:34.3rem;", "{&.isColumn{flex-direction:column;height:10rem;}}"], l.t8.XS, (0, l.nU)(l.u3.LG)),
                u = (0, a.styled)(o).withConfig({
                    componentId: "sc-b5fbe4d0-2"
                })([".isRow{text-align:end;}text-transform:uppercase;white-space:nowrap;&.apiMrh{white-space:normal;text-align:right;}"]),
                c = a.styled.section.withConfig({
                    componentId: "sc-b5fbe4d0-3"
                })(["display:flex;gap:", "rem;"], l.t8.XXS),
                p = a.styled.a.withConfig({
                    componentId: "sc-b5fbe4d0-4"
                })(["align-items:center;background-color:", ";border:0.1rem solid ", ";border-radius:0.4rem;box-sizing:border-box;display:flex;height:6.1rem;justify-content:center;width:10.9rem;"], l.O9.white, l.O9.gray86),
                f = a.styled.img.withConfig({
                    componentId: "sc-b5fbe4d0-5"
                })(["box-sizing:border-box;max-width:100%;object-fit:contain;"]);
            t.Z = {
                MrhWrapper: d,
                MrhContainer: s,
                MrhTitle: u,
                MrhImgSection: c,
                MrhLink: p,
                MrhImg: f
            }
        },
        66770: function(e, t, n) {
            "use strict";
            var i, l;
            n.d(t, {
                B: function() {
                    return i
                }
            }), (l = i || (i = {})).ATHLETE = "athlete", l.DISCIPLINE = "disc", l.LANGUAGE = "lang", l.NOC = "noc", l.PAGE = "page", l.PLATFORM = "platform", l.RSC = "rsc", l.TERRITORY = "territory", l.TEAM = "team"
        },
        71978: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return u
                }
            });
            var i = n(71001),
                l = n(82021),
                r = n(66194),
                a = n(66770);
            let o = async function() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "https://stage-schedules.nbcolympics.com/ioc/v1/iocLink",
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        o = null !== (e = null == i ? void 0 : i.lang) && void 0 !== e ? e : r.SQ.DEFAULT;
                    if (!(null == i ? void 0 : i.page)) return;
                    let s = new URLSearchParams;
                    s.append(a.B.PAGE, i.page), s.append(a.B.LANGUAGE, o), s.append(a.B.TERRITORY, i.territory), s.append(a.B.PLATFORM, i.platform), i.athlete && s.append(a.B.ATHLETE, i.athlete), i.team && s.append(a.B.TEAM, i.team), i.noc && s.append(a.B.NOC, i.noc), i.disc && s.append(a.B.DISCIPLINE, i.disc), i.rsc && s.append(a.B.RSC, i.rsc);
                    let u = "".concat(t, "?").concat(null == s ? void 0 : s.toString());
                    try {
                        let e = (null == n ? void 0 : n.length) > 0 ? {
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: n
                                }
                            } : void 0,
                            t = await (0, l.rQ)(u, e);
                        if (!t.ok) return;
                        let i = await t.json();
                        return d(i)
                    } catch (e) {
                        return
                    }
                },
                d = e => {
                    var t;
                    return ((null == e ? void 0 : null === (t = e.items) || void 0 === t ? void 0 : t.length) ? null == e ? void 0 : e.items : [e]).map(e => ({
                        id: e.label,
                        imgSrc: e.image,
                        link: e.url,
                        alt: e.label,
                        title: e.label
                    }))
                },
                s = e => null == e || "object" == typeof e && 0 === Object.keys(e).length,
                u = async e => {
                    let {
                        items: t,
                        params: n
                    } = e, l = t.filter(e => {
                        var t;
                        return (null === (t = e.tags) || void 0 === t ? void 0 : t.some(e => e.slug === i.rH)) && !e.mrssFeedUrl
                    }), r = await c(l.find(e => e.apiEndpointBaseUrl), n);
                    return r ? {
                        items: r,
                        integrationType: i.BD.apiIntegration
                    } : {
                        items: l.filter(e => !!e.imgSrc && !!e.link).slice(0, i.OL.maxItems),
                        integrationType: i.BD.staticIntegration
                    }
                },
                c = async (e, t) => {
                    if (!e) return;
                    let n = await o(e.apiEndpointBaseUrl, e.apiEndpointAuthHeader, t),
                        i = null == n ? void 0 : n.filter(e => !!e.imgSrc && !!e.link);
                    return i && !s(i) ? i : e.imgSrc && e.link ? [{ ...e,
                        title: void 0
                    }] : void 0
                }
        },
        80487: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return p
                }
            });
            var i = n(35944),
                l = n(52227);
            let r = (0, l.Z)("div", {
                target: "e1vvaxkf0"
            })("&:empty{display:none;}", e => {
                let {
                    $marginBottom: t
                } = e;
                return "margin-bottom: ".concat(t, "px;")
            });
            var a = n(25675),
                o = n.n(a),
                d = n(59159),
                s = n(67807);
            let u = e => {
                    let {
                        text: t,
                        spaceBetweenElements: n = 16
                    } = e;
                    return (0, i.BX)(c, {
                        $spaceBetweenElements: n,
                        children: [(0, i.tZ)(o(), {
                            alt: "Warning Icon",
                            width: 24,
                            height: 24,
                            src: "/_srm-static/warningIcon.svg"
                        }), (0, i.tZ)("div", {
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        })]
                    })
                },
                c = (0, l.Z)("div", {
                    target: "e1johedf0"
                })((0, d.c)("sourceSans"), "  display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;align-items:flex-start;background-color:#dbdbdb;border-radius:4px;padding:10px;gap:8px;font-size:14px;font-style:normal;font-weight:400;line-height:20px;& + &{", e => {
                    let {
                        $spaceBetweenElements: t
                    } = e;
                    return "margin-top: ".concat(t, "px;")
                }, "}> img{flex-shrink:0;}> div{>:nth-of-type(1){margin-top:0;}>:last-child{margin-bottom:0;}}@media (min-width:", s.MR, "px){padding:10px 16px;font-size:16px;line-height:24px;}");
            var p = e => {
                let {
                    data: t,
                    marginBottom: n = 0,
                    spaceBetweenElements: l
                } = e;
                return (0, i.tZ)(r, {
                    $marginBottom: n,
                    children: t.map((e, t) => e ? (0, i.tZ)(u, {
                        spaceBetweenElements: l,
                        text: e
                    }, t) : null)
                })
            }
        },
        50804: function(e, t, n) {
            "use strict";
            var i = n(35944),
                l = n(18063),
                r = n(71001),
                a = n(66194),
                o = n(52227);
            let d = (0, o.Z)("section", {
                    target: "e168eizr0"
                })("align-items:center;background-color:#ffffff;border:1px solid ", a.O9.gray86, ";border-radius:4px;box-sizing:border-box;display:flex;height:61px;justify-content:center;width:109px;"),
                s = (0, o.Z)("div", {
                    target: "e168eizr1"
                })("align-items:center;display:flex;gap:", a.t8.XS, "rem;height:61px;justify-content:right;");
            t.Z = e => {
                let {
                    textElementContent: t,
                    marginBottom: n = 0,
                    image: o
                } = e, u = null == o ? void 0 : o.replace("{formatInstructions}", r.pG.base);
                return (0, i.tZ)(l.Z.MrhWrapper, {
                    $marginBottom: n,
                    children: (0, i.BX)(s, {
                        children: [t && (0, i.tZ)(l.Z.MrhTitle, {
                            variant: a.El.mrhTitle,
                            children: (0, i.tZ)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: t
                                }
                            })
                        }), (0, i.tZ)(l.Z.MrhImgSection, {
                            children: u && (0, i.tZ)(d, {
                                children: (0, i.tZ)(l.Z.MrhImg, {
                                    src: u,
                                    alt: "powered by image",
                                    width: 97,
                                    height: 49
                                })
                            })
                        })]
                    })
                })
            }
        },
        22748: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return v
                }
            });
            var i = n(35944),
                l = n(71876),
                r = n(5152),
                a = n.n(r),
                o = n(67807);
            let d = n(77986).styled.div.withConfig({
                componentId: "sc-bd1526d7-0"
            })(["overflow:hidden;width:100%;", " ", " section{padding-top:unset;padding-bottom:unset;border-bottom:unset;border-top:unset;margin:auto;}", ""], e => {
                let {
                    $mobilePaddingTop: t
                } = e;
                return "padding-top: ".concat(t, ";")
            }, e => {
                let {
                    $mobileHeight: t
                } = e;
                return "height: ".concat(t, ";")
            }, e => {
                let {
                    $expandBreakpoint: t,
                    $desktopHeight: n,
                    $width: i,
                    $desktopPaddingTop: l
                } = e;
                return "@media (min-width: ".concat(o.MR + t, "px) {\n    height: ").concat(n, ";\n    width: ").concat(i, ";\n    padding-top: ").concat(l, "\n  }")
            });
            var s = n(25349),
                u = n(67294),
                c = n(18446),
                p = n.n(c);
            let f = a()(() => Promise.resolve().then(n.bind(n, 71876)), {
                    loadableGenerated: {
                        webpack: () => [71876]
                    },
                    ssr: !1
                }),
                v = (0, u.memo)(e => {
                    let {
                        width: t,
                        id: n,
                        expandBreakpoint: r,
                        desktopHeight: a,
                        desktopPaddingTop: u,
                        mobileHeight: c,
                        mobilePaddingTop: p
                    } = e, v = (0, s.h)(n);
                    return (0, i.tZ)(d, {
                        $width: t,
                        $expandBreakpoint: r,
                        $desktopHeight: a,
                        $desktopPaddingTop: u,
                        $mobileHeight: c,
                        $mobilePaddingTop: p,
                        children: (0, i.tZ)(f, {
                            id: n,
                            sizeMapping: [{
                                viewport: [o.MR + r, 0],
                                slot: l.AD_DIMENSIONS.DEFAULT.DESKTOP
                            }, {
                                viewport: [0, 0],
                                slot: l.AD_DIMENSIONS.DEFAULT.MOBILE
                            }],
                            targeting: v.targeting,
                            slot: n,
                            shouldDisplaySponsorText: !1,
                            path: v.unitTag
                        })
                    })
                }, p())
        },
        55844: function(e, t, n) {
            "use strict";
            n.d(t, {
                X: function() {
                    return i
                }
            });
            let i = [{
                type: "parsedFullDate",
                key: "day",
                valueKey: "day"
            }, {
                type: "discipline",
                key: "sport",
                valueKey: "disciplineCode"
            }, {
                type: "noc",
                key: "noc",
                valueKey: "organisationCode"
            }, {
                type: "venue",
                key: "venue",
                valueKey: "venue"
            }, {
                type: "eventCategory",
                key: "category",
                valueKey: "eventCategory"
            }, {
                type: "gender",
                key: "gender",
                valueKey: "gender"
            }, {
                type: "event",
                key: "event",
                valueKey: "event"
            }, {
                type: "medalEvents",
                key: "medalEvents",
                valueKey: "medalEvents"
            }]
        },
        29687: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return a
                }
            });
            var i = n(37223),
                l = n(55844),
                r = n(67294);
            let a = () => {
                let {
                    filters: e,
                    dates: t
                } = (0, i.V)(), [n, a] = (0, r.useState)(() => {
                    var n;
                    let i = Object.entries(null != t ? t : {}),
                        r = new URLSearchParams(window.location.search),
                        a = null !== (n = e.additionalFilters) && void 0 !== n ? n : [];
                    return r.forEach((e, t) => {
                        if (a.find(e => e.type === t)) return;
                        if ("day" === t) {
                            var n;
                            let l = null === (n = i.find(t => {
                                let [, n] = t;
                                return e === n
                            })) || void 0 === n ? void 0 : n[0];
                            if (!l) return;
                            a.push({
                                type: t,
                                code: l
                            });
                            return
                        }
                        let r = l.X.find(e => {
                            let {
                                key: n
                            } = e;
                            return n === t
                        });
                        !r || a.find(e => e.type === (null == r ? void 0 : r.type)) || a.push({
                            type: r.type,
                            code: e
                        })
                    }), a
                });
                return (0, r.useEffect)(() => {
                    let e = () => a([]);
                    return document.addEventListener("filterApplied", e), () => {
                        document.removeEventListener("filterApplied", e)
                    }
                }, []), (0, r.useMemo)(() => ({
                    mainFilter: e.mainFilter,
                    additionalFilters: n
                }), [n, e.mainFilter])
            }
        },
        89128: function(e, t, n) {
            "use strict";
            n.d(t, {
                m: function() {
                    return a
                }
            });
            var i = n(74154),
                l = n(74724),
                r = n(67294);
            let a = () => {
                let {
                    t: e
                } = (0, i.$)(l.w.srmParis2024);
                return (0, r.useMemo)(() => ({
                    exportToCalendar: e("export_to_calendar"),
                    addToFavoritesAthleteDescription: e("add_to_favorites_athlete_description"),
                    addToFavoritesAthleteTitle: e("add_to_favorites_athlete_title"),
                    unofficial: e("medal_unofficial_alert_icon")
                }), [e])
            }
        },
        12902: function(e, t, n) {
            "use strict";
            n.d(t, {
                X: function() {
                    return f
                }
            });
            var i = n(67294),
                l = n(37223),
                r = n(67807),
                a = n(43386),
                o = n(11163),
                d = n(36227),
                s = n(27221);
            let u = e => {
                if (!e) return;
                let t = e.match(/([+-]\d{2}):\d{2}$/);
                return t ? "UTC".concat(t[1]) : "UTC"
            };
            var c = n(7478),
                p = n(55844);
            let f = e => {
                let t = (0, i.useRef)({
                        selectedFilter: {}
                    }),
                    n = (0, s.Z)(),
                    {
                        locale: f
                    } = (0, o.useRouter)(),
                    {
                        urls: v,
                        urlForLinks: g,
                        dates: m
                    } = (0, l.V)(),
                    h = (0, i.useCallback)(() => {
                        let n = g,
                            i = !1,
                            l = [];
                        p.X.forEach(e => {
                            var n;
                            let i = null === (n = t.current) || void 0 === n ? void 0 : n[e.valueKey];
                            ("day" !== e.key || "allItems" !== i) && i && l.push({
                                type: e.type,
                                key: e.key,
                                value: i
                            })
                        });
                        let a = Object.entries(v);
                        if (t.current.event) {
                            let r = a.find(n => {
                                let [, i] = n;
                                return i.params.event === t.current.event && i.page === e
                            });
                            r && (n = r[0], l = l.filter(e => "discipline" !== e.type && "event" !== e.type), i = !0)
                        }
                        if (t.current.disciplineCode && !i) {
                            let r = a.find(n => {
                                let [, i] = n;
                                return i.params.discipline === t.current.disciplineCode && i.page === e
                            });
                            r && (n = r[0], l = l.filter(e => "discipline" !== e.type), i = !0)
                        }
                        if (t.current.organisationCode && !i) {
                            let r = a.find(n => {
                                let [, i] = n;
                                return i.params.noc === t.current.organisationCode && i.page === e
                            });
                            r && (n = r[0], l = l.filter(e => "noc" !== e.type), i = !0)
                        }
                        if (t.current.day && !i) {
                            let r = t.current.day.split("T")[0],
                                o = a.find(t => {
                                    let [, n] = t;
                                    return n.params.parsedFullDate === r && n.page === e
                                });
                            o && (n = o[0], l = l.filter(e => "parsedFullDate" !== e.type), i = !0)
                        }
                        if (1 === l.length && !i) {
                            let t = l[0],
                                i = a.find(n => {
                                    let [, i] = n;
                                    return i.params[t.type] === t.value && i.page === e
                                });
                            i && (n = i[0], l = [])
                        }
                        let o = new URLSearchParams;
                        l.forEach(e => "day" === e.key ? o.append(e.key, m[e.value.split("T")[0]]) : o.append(e.key, e.value)), new URLSearchParams(window.location.search).forEach((e, t) => {
                            p.X.find(e => e.key === t) || o.append(t, e)
                        });
                        let d = "".concat(n).concat(o.size ? "?" + o.toString() : "");
                        window.history.replaceState({ ...window.history.state,
                            as: d,
                            url: d
                        }, "", d), document.dispatchEvent(new CustomEvent(r.SZ, {
                            detail: {
                                newUrl: d
                            }
                        }))
                    }, [m, e, g, v]),
                    y = (0, i.useCallback)((t, i) => {
                        let {
                            selectedFilter: l,
                            day: o,
                            userTimeZone: s
                        } = t, p = Object.keys(l)[0], v = l[p];
                        if (!p || null == v || "" === v) return;
                        let g = !!(null == n ? void 0 : n.user),
                            {
                                module: m,
                                moduleInstance: h
                            } = d.ft.find(t => t.type === e) || {},
                            y = u(o);
                        if (i) {
                            (0, a.I6)({
                                filterValue: y || "",
                                filterType: "timezone",
                                filterOn: s,
                                language: null != f ? f : "en",
                                module: m,
                                moduleInstance: h
                            }, g);
                            return
                        }
                        switch (p) {
                            case "day":
                                break;
                            case "organisation":
                                (0, a.I6)({
                                    filterValue: v,
                                    filterType: "team/noc",
                                    language: null != f ? f : "en",
                                    module: m,
                                    moduleInstance: h
                                }, g);
                                break;
                            case "event":
                                (0, a.I6)({
                                    filterValue: v,
                                    filterType: "disciplines",
                                    language: null != f ? f : "en",
                                    module: m,
                                    moduleInstance: h
                                }, g);
                                break;
                            case "venue":
                                (0, a.I6)({
                                    filterValue: v,
                                    filterType: "area",
                                    language: null != f ? f : "en",
                                    module: m,
                                    moduleInstance: h
                                }, g);
                                break;
                            case "discipline":
                                (0, a.I6)({
                                    filterValue: v,
                                    filterType: e === r.GV.medallists ? "discipline" : "sport",
                                    language: null != f ? f : "en",
                                    module: m,
                                    moduleInstance: h
                                }, g);
                                break;
                            case "gender":
                                (0, a.I6)({
                                    filterValue: v,
                                    filterType: "gender",
                                    language: null != f ? f : "en",
                                    module: m,
                                    moduleInstance: h
                                }, g);
                                break;
                            case "userTimeZone":
                                (0, a.I6)({
                                    filterValue: y || "",
                                    filterType: "timezone",
                                    filterOn: v,
                                    language: null != f ? f : "en",
                                    module: m,
                                    moduleInstance: h
                                }, g);
                                break;
                            case "sortingCriteria":
                                var b, w, E;
                                let {
                                    sortingValue: k,
                                    sortingOrder: x,
                                    sortingType: T
                                } = d.fJ.find(e => e.sortingValue === v) || {};
                                (0, a.ZP)({
                                    language: null != f ? f : "en",
                                    module: null != m ? m : "",
                                    moduleInstance: null != h ? h : "",
                                    userNation: null !== (E = null === (w = window) || void 0 === w ? void 0 : null === (b = w.deltatre) || void 0 === b ? void 0 : b.userNation) && void 0 !== E ? E : "",
                                    sortingOrder: null != x ? x : "",
                                    sortingType: null != T ? T : "",
                                    sortingValue: null != k ? k : "",
                                    authenticated: g
                                });
                                break;
                            case "resetFilters":
                                (0, c.T)(null != f ? f : "en", !1, {
                                    link_tag: "reset filters"
                                });
                                break;
                            case "medalEvents":
                                (0, a.I6)({
                                    filterValue: "medal event",
                                    filterType: "event",
                                    language: null != f ? f : "en",
                                    module: m,
                                    moduleInstance: h,
                                    filterOn: v
                                });
                                break;
                            default:
                                (0, a.I6)({
                                    filterValue: v,
                                    filterType: "other",
                                    language: null != f ? f : "en",
                                    module: m,
                                    moduleInstance: h
                                }, g)
                        }
                    }, [f, null == n ? void 0 : n.user, e]),
                    b = (0, i.useCallback)(e => {
                        if (console.log("Filters Applied", e), !e.detail) return;
                        let n = e.detail.userTimeZone !== t.current.userTimeZone && !e.detail.resetFilters;
                        t.current = { ...t.current,
                            ...e.detail
                        }, h(), y(e.detail, n)
                    }, [y, h]),
                    w = (0, i.useCallback)(t => {
                        if (console.log("calendarDaySelected", t), !t.detail) return;
                        let {
                            date: i
                        } = t.detail;
                        if (!i || null == i || "" === i) return;
                        let l = !!(null == n ? void 0 : n.user),
                            {
                                module: r,
                                moduleInstance: o
                            } = d.ft.find(t => t.type === e) || {};
                        (0, a.I6)({
                            filterValue: i,
                            filterType: "date",
                            language: null != f ? f : "en",
                            module: r,
                            moduleInstance: o
                        }, l)
                    }, [f, null == n ? void 0 : n.user, e]);
                (0, i.useEffect)(() => (document.addEventListener("filterApplied", b), () => {
                    document.removeEventListener("filterApplied", b)
                }), [b]), (0, i.useEffect)(() => (document.addEventListener("calendarDaySelected", w), () => {
                    document.removeEventListener("calendarDaySelected", w)
                }), [w])
            }
        },
        27221: function(e, t, n) {
            "use strict";
            var i = n(67294);
            t.Z = () => {
                let [e, t] = (0, i.useState)(null);
                return (0, i.useEffect)(() => {
                    let n = () => {
                        t({ ...window.olympicId
                        })
                    };
                    return e || n(), window.addEventListener("oid-update", n), () => {
                        window.removeEventListener("oid-update", n)
                    }
                }), e
            }
        },
        49729: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return a
                }
            });
            var i = n(43386),
                l = n(36227),
                r = n(67294);
            let a = e => {
                let {
                    language: t,
                    pageType: n,
                    triggerPercents: a
                } = e, [o, d] = (0, r.useState)(!1), {
                    module: s,
                    moduleInstance: u
                } = l.ft.find(e => e.type === n) || {}, c = (0, r.useRef)([]), p = (0, r.useCallback)(e => {
                    var n, l;
                    return (0, i.Qy)({
                        language: t,
                        scrollDepth: e,
                        trackPageType: "",
                        userNation: null !== (l = null === (n = window.deltatre) || void 0 === n ? void 0 : n.userNation) && void 0 !== l ? l : ""
                    }, {
                        module: s || "",
                        module_instance: u || ""
                    }, !0)
                }, [t, s, u]);
                (0, r.useEffect)(() => {
                    let e = () => {
                        let e = window.scrollY / (document.body.offsetHeight - window.innerHeight) * 100;
                        a.forEach(t => {
                            o && e >= t && !c.current.includes(t) && (p(t), c.current.push(t))
                        })
                    };
                    return window.addEventListener("scroll", e), () => {
                        window.addEventListener("scroll", e)
                    }
                }, [o, p, a, c]), (0, r.useEffect)(() => {
                    let e = () => {
                        d(!0)
                    };
                    return window.addEventListener("analytics-ready", e), () => {
                        window.removeEventListener("analytics-ready", e)
                    }
                }, [])
            }
        },
        25215: function(e, t, n) {
            "use strict";
            n.d(t, {
                n: function() {
                    return c
                }
            });
            var i = n(47312),
                l = n(67294);
            let r = () => {
                var e, t, n, r;
                let [a, o] = (0, l.useState)(), {
                    favorites: d,
                    isLoggedIn: s
                } = (0, i.ug)();
                return (0, l.useEffect)(() => {
                    s && window.gigya.accounts.getAccountInfo({
                        include: "",
                        callback: e => {
                            var t, n;
                            return o(null !== (n = null === (t = e.data.personalization) || void 0 === t ? void 0 : t.favoritesCountries) && void 0 !== n ? n : [])
                        }
                    })
                }, [s]), {
                    FavoritesSeries: null !== (e = null == d ? void 0 : d.FavoritesSeries) && void 0 !== e ? e : [],
                    FavoritesAthletes: null !== (t = null == d ? void 0 : d.FavoritesAthletes) && void 0 !== t ? t : [],
                    FavoritesDiscipline: null !== (n = null == d ? void 0 : d.FavoritesDiscipline) && void 0 !== n ? n : [],
                    FavoritesCountries: null != a ? a : [],
                    FavoritesEventUnits: null !== (r = null == d ? void 0 : d.FavoritesEventUnits) && void 0 !== r ? r : []
                }
            };
            var a = n(37223),
                o = n(11163),
                d = n(74177),
                s = n(81758),
                u = n(88261);
            let c = () => {
                let {
                    locale: e
                } = (0, o.useRouter)(), {
                    nocList: t,
                    originalUrl: n,
                    integrationApiBaseUrl: c,
                    frontendBaseUrl: p
                } = (0, a.V)(), {
                    isLoggedIn: f,
                    ready: v,
                    getSignInUrl: g
                } = (0, i.ug)(), {
                    FavoritesCountries: m,
                    FavoritesDiscipline: h
                } = r(), {
                    data: y
                } = (0, s.ZP)("".concat(c, "/summer/info/api/").concat((0, d.f)(e), "/disciplines"), u._, {
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1
                }), b = v ? f ? "yes" : "no" : "pending", w = (0, l.useMemo)(() => v ? g(n, void 0, void 0, p) : void 0, [p, g, n, v]), E = (0, l.useMemo)(() => m.map(e => {
                    var n, i;
                    return {
                        code: e.nocCode,
                        description: null !== (i = null == t ? void 0 : null === (n = t.find(t => t.id === e.nocCode)) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : "-"
                    }
                }), [m, t]), k = (0, l.useMemo)(() => h.map(e => {
                    let t = null == y ? void 0 : y.find(t => t.slug === e.slug);
                    return t ? {
                        code: t.code,
                        isPara: t.isParalympic
                    } : null
                }).filter(e => !!e), [h, y]);
                return {
                    isUserLoggedIn: b,
                    loginUrl: w,
                    favouritesUrl: "".concat(p, "/").concat(e, "/account/signup-preferences?screen=sports&origin=").concat(n),
                    favDisciplines: k,
                    favNocs: E
                }
            }
        },
        17552: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return r
                },
                w: function() {
                    return l.a
                }
            });
            var i = n(82900),
                l = n.n(i);
            let r = {
                ".filterToggle": {
                    backgroundColor: "white",
                    borderRadius: "4px",
                    width: "40px",
                    height: "40px"
                },
                ".filters-counter": {
                    zIndex: 2,
                    backgroundColor: "black",
                    color: "white"
                },
                ".icon-button": {
                    width: "40px",
                    height: "40px",
                    border: "1px solid #000",
                    borderRadius: "4px",
                    backgroundColor: "white",
                    boxSizing: "border-box"
                },
                ".select-header": {
                    height: "40px"
                },
                ".toggle__switch": {
                    border: "1px solid #000"
                },
                ".select-single-value__header": {
                    border: "1px solid #000",
                    boxSizing: "border-box",
                    height: "40px"
                },
                ".select-single-value__header--disabled": {
                    opacity: "0.2",
                    backgroundColor: "white",
                    span: {
                        color: "black"
                    }
                },
                ".calendar-grid__body-item--disabled": {
                    opacity: "0.4"
                }
            }
        },
        88261: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return i
                }
            });
            let i = (e, t) => fetch(e, t).then(e => e.json())
        },
        74177: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return l
                }
            });
            let i = {
                    en: "ENG",
                    it: "ITA",
                    fr: "FRA",
                    de: "DEU",
                    hi: "ENG",
                    es: "SPA",
                    pt: "POR",
                    ja: "JPN",
                    zh: "CHI",
                    ko: "KOR",
                    ru: "RUS"
                },
                l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en";
                    return i[e] || i.en
                }
        },
        68578: function(e, t, n) {
            "use strict";
            n.d(t, {
                pi: function() {
                    return p
                },
                CV: function() {
                    return u
                },
                pX: function() {
                    return c
                }
            });
            var i, l, r = n(71001),
                a = n(71978),
                o = n(84193);
            let d = {
                POSTPONED: o.kS.Warning,
                RESCHEDULED: o.kS.Warning,
                CANCELLED: o.kS.Warning,
                DELAYED: o.kS.Warning,
                "GETTING READY": o.kS.Info,
                RUNNING: o.kS.Info,
                INTERRUPTED: o.kS.Warning,
                "SCHEDULED BREAK": o.kS.Info,
                FINISHED: o.kS.Info
            };
            (i = l || (l = {})).EVENT_UNIT = "event_unit", i.MEDAL = "medal", i.DISCIPLINE = "discipline";
            let s = e => (null == e ? void 0 : e.map(e => ({
                    type: e.iconId,
                    label: e.label,
                    link: e.url
                }))) || [],
                u = async function(e, t, n) {
                    var i, l, u, c, p, f, v, g;
                    let m;
                    let h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en",
                        {
                            alertMessage: y,
                            disciplineCode: b,
                            disciplineName: w,
                            eventUnitStatusDescription: E,
                            eventUnitDescription: k,
                            eventUnitCode: x,
                            eventUnitLocationDescription: T,
                            eventUnitStatus: I,
                            phaseCode: S
                        } = e,
                        C = await fetch(t.replace("{rsc}", null != x ? x : ""));
                    if (!C.ok) return null;
                    let _ = await C.json(),
                        D = s(_.links),
                        A = I ? d[I] : void 0,
                        L = _.mrh,
                        N = (null === (i = L.mrhItems) || void 0 === i ? void 0 : i.map(e => {
                            var t;
                            return {
                                id: e.label,
                                imgSrc: null === (t = e.image) || void 0 === t ? void 0 : t.replace("{formatInstructions}", r.pG.base),
                                link: e.url,
                                alt: e.label,
                                apiEndpointBaseUrl: e.apiEndpointBaseUrl,
                                apiEndpointAuthHeader: e.apiEndpointAuthHeader,
                                tags: e.tags
                            }
                        })) || [],
                        F = {
                            page: "schedule-menu",
                            lang: h,
                            territory: null !== (p = null !== (c = null == L ? void 0 : L.countryCode) && void 0 !== c ? c : null === (u = window) || void 0 === u ? void 0 : null === (l = u.deltatre) || void 0 === l ? void 0 : l.userNation) && void 0 !== p ? p : "",
                            platform: "web",
                            disc: b || void 0,
                            rsc: x || void 0
                        },
                        R = r.BD.staticIntegration;
                    await (0, a.r)({
                        items: N,
                        params: F
                    }).then(e => {
                        var t;
                        if (null == e ? void 0 : null === (t = e.items) || void 0 === t ? void 0 : t.length) {
                            let t = e.integrationType === r.BD.apiIntegration ? e.items[0].title : L.title;
                            m = {
                                items: e.items,
                                title: null == t ? void 0 : t.substring(0, 33)
                            }, R = e.integrationType
                        }
                    });
                    let O = x ? '[data-unit-rsc-code="'.concat(x, '"] .contextualmenu-button') : "",
                        Z = [];
                    return "TMRY" !== S && Z.push({
                        type: o.N$.CalendarExport,
                        title: n.exportToCalendar
                    }), {
                        type: o.ky.EventUnit,
                        header: {
                            title: null != w ? w : "",
                            description: null != k ? k : "",
                            imgSrc: null !== (f = _.header.disciplinePicto) && void 0 !== f ? f : "",
                            location: null != T ? T : void 0,
                            noticeType: A,
                            noticeDescription: null !== (g = null !== (v = _.header.alert) && void 0 !== v ? v : y) && void 0 !== g ? g : void 0,
                            noticeText: null != E ? E : void 0
                        },
                        links: D,
                        mrhs: m,
                        ops: Z,
                        disciplineCode: b || void 0,
                        focusedElementOnCloseSelector: O,
                        integrationType: R
                    }
                },
                c = async (e, t, n, i) => {
                    var l, r;
                    let {
                        competitorCode: a,
                        competitorDisplayName: d,
                        competitorType: u,
                        disciplineCode: c,
                        organisationCode: p,
                        eventCode: f,
                        medalDetailId: v
                    } = e;
                    console.log(e);
                    let g = await fetch(t.replace("{competitorType}", u).replace("{competitorCode}", a).replace("{organisation}", p).replace("{rsc}", f));
                    if (!g.ok) return null;
                    let m = await g.json(),
                        h = s(m.links),
                        y = null !== (l = m.header.nocFlag) && void 0 !== l ? l : "",
                        b = v ? '[data-medal-detail-id="'.concat(v, '"] .contextualmenu-button') : "";
                    return "T" === u ? {
                        type: o.ky.MedalistsDouble,
                        header: {
                            title: d,
                            flagSrc: y,
                            country: p,
                            alertMessage: e.medalOfficial ? void 0 : n.unofficial
                        },
                        links: h,
                        ops: [],
                        disciplineCode: c,
                        nocId: p,
                        athlete: null == i ? void 0 : i.slug,
                        focusedElementOnCloseSelector: b
                    } : {
                        type: o.ky.MedalistsIndividual,
                        header: {
                            title: d,
                            flagSrc: y,
                            imgSrc: null !== (r = m.header.athleteImg) && void 0 !== r ? r : "",
                            country: p,
                            alertMessage: e.medalOfficial ? void 0 : n.unofficial
                        },
                        links: h,
                        ops: [{
                            type: o.N$.Favourites,
                            title: n.addToFavoritesAthleteTitle,
                            description: n.addToFavoritesAthleteDescription
                        }],
                        disciplineCode: c,
                        nocId: p,
                        athlete: null == i ? void 0 : i.slug,
                        focusedElementOnCloseSelector: b
                    }
                },
                p = async (e, t, n) => {
                    let {
                        eventCode: i,
                        disciplineName: l,
                        eventDescription: r,
                        disciplineCode: a,
                        organisationCode: d,
                        medalDetailId: u
                    } = e;
                    console.log(e);
                    let c = await fetch(t.replace("{rsc}", null != i ? i : ""));
                    if (!c.ok) return null;
                    let p = await c.json(),
                        f = s(p.links);
                    return {
                        type: o.ky.Discipline,
                        header: {
                            title: null != l ? l : "",
                            description: null != r ? r : "",
                            imgSrc: p.header.disciplinePicto
                        },
                        ops: [],
                        links: f,
                        disciplineCode: a || void 0,
                        nocId: d || void 0,
                        athlete: null == n ? void 0 : n.slug,
                        focusedElementOnCloseSelector: u ? '[data-medal-detail-id="'.concat(u, '"] .contextualmenu-button') : ""
                    }
                }
        },
        82900: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Noto_Sans_1ddc88', '__Noto_Sans_Fallback_1ddc88'",
                    fontStyle: "normal"
                },
                className: "__className_1ddc88"
            }
        }
    }
]);
//# sourceMappingURL=696-a844796cc7f7057a.js.map