(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [343], {
        17765: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/medals", function() {
                return n(66809)
            }])
        },
        69759: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var i = n(35944),
                o = n(67294),
                l = n(66194),
                a = n(18063),
                r = n(71978),
                d = n(71001);
            let s = e => {
                let {
                    items: t,
                    title: n,
                    params: i
                } = e, [l, a] = (0, o.useState)([]), [s, p] = (0, o.useState)(null == n ? void 0 : n.substring(0, d.OL.maxTitleCharacters)), [u, c] = (0, o.useState)();
                return (0, o.useEffect)(() => {
                    (0, r.r)({
                        items: t,
                        params: i
                    }).then(e => {
                        var t, n;
                        if ((null == e ? void 0 : null === (t = e.items) || void 0 === t ? void 0 : t.length) && (a(e.items), c(e.integrationType), e.integrationType === d.BD.apiIntegration)) {
                            let t = e.items && (null === (n = e.items[0].title) || void 0 === n ? void 0 : n.substring(0, d.OL.maxTitleCharacters));
                            t && p(t)
                        }
                    })
                }, [t, null == l ? void 0 : l.length, i]), {
                    mrhItems: l,
                    mrhTitle: s,
                    currentIntegration: u
                }
            };
            var p = n(43386),
                u = (0, o.memo)(e => {
                    var t;
                    let {
                        title: n,
                        items: r,
                        params: u,
                        marginBottom: c,
                        trackingData: m
                    } = e, {
                        mrhItems: g,
                        mrhTitle: f,
                        currentIntegration: h
                    } = s({
                        items: r,
                        title: n,
                        params: u
                    }), [v, x] = (0, o.useState)({});
                    (0, o.useEffect)(() => {
                        let e = window.document.location.pathname.replace(/\/([a-z][a-z])\//, "").split("/");
                        "" === e[0] && e.shift(), x({
                            section_level_1: "paris-2024",
                            section_level_2: e[1]
                        })
                    }, []);
                    let b = null !== (t = null == u ? void 0 : u.lang) && void 0 !== t ? t : l.SQ.DEFAULT,
                        _ = (0, o.useCallback)(() => {
                            let e = {
                                language: b,
                                moduleInstance: "MRH",
                                module: h === d.BD.apiIntegration ? "MRH API Banner" : "MRH Static Banner",
                                title: f || "",
                                user_nation: null == u ? void 0 : u.territory
                            };
                            (0, p.Rp)(e, v, !0)
                        }, [h, b, f, null == u ? void 0 : u.territory, v]);
                    return (null == g ? void 0 : g.length) > 0 ? (0, i.tZ)(p.Pm, {
                        callbackFn: _,
                        children: (0, i.tZ)(a.Z.MrhWrapper, {
                            $marginBottom: c,
                            children: (0, i.BX)(a.Z.MrhContainer, {
                                "data-cy": "mrh-integration",
                                className: (null == g ? void 0 : g.length) > 2 ? "isColumn" : "",
                                children: [f && (0, i.tZ)(a.Z.MrhTitle, {
                                    className: (null == g || g.length, h === d.BD.apiIntegration ? "apiMrh" : ""),
                                    variant: l.El.mrhTitle,
                                    children: f
                                }), (0, i.tZ)(a.Z.MrhImgSection, {
                                    children: null == g ? void 0 : g.map((e, t) => {
                                        var n;
                                        return (0, i.tZ)(a.Z.MrhLink, {
                                            "data-tracking": "click",
                                            "data-tracking-payload": JSON.stringify({
                                                module_instance: "MRH",
                                                link_tag: e.link,
                                                module: h === d.BD.apiIntegration ? "MRH API Banner" : "MRH Static Banner",
                                                module_position: t + 1,
                                                content_id: e.id,
                                                section_level_1: null == v ? void 0 : v.section_level_1,
                                                section_level_2: null == v ? void 0 : v.section_level_2
                                            }),
                                            href: e.link,
                                            target: "_blank",
                                            children: (0, i.tZ)(a.Z.MrhImg, {
                                                src: e.imgSrc,
                                                alt: e.alt,
                                                width: 97,
                                                height: 49
                                            })
                                        }, null !== (n = e.id) && void 0 !== n ? n : e.alt)
                                    })
                                })]
                            })
                        })
                    }) : (0, i.tZ)(i.HY, {})
                });
            n(66770);
            var c = u
        },
        75834: function(e, t, n) {
            "use strict";
            var i = n(35944),
                o = n(52227),
                l = n(67807);
            t.Z = e => {
                let {
                    html: t,
                    marginBottom: n
                } = e;
                return (0, i.tZ)(a, {
                    $marginBottom: n,
                    children: (0, i.tZ)("div", {
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    })
                })
            };
            let a = (0, o.Z)("div", {
                target: "ew3zklk0"
            })(e => {
                let {
                    $marginBottom: t
                } = e;
                return "margin-bottom: ".concat(t, "px;")
            }, "  font-size:14px;font-style:normal;font-weight:400;line-height:20px;> div{>:nth-of-type(1){margin-top:0;}>:last-child{margin-bottom:0;}}@media (min-width:", l.MR, "px){font-size:16px;line-height:24px;}")
        },
        39525: function(e, t, n) {
            "use strict";
            let i = (0, n(52227).Z)("div", {
                target: "epcya100"
            })("&:not(:empty){max-width:54rem;margin:16px 1rem;@media (min-width:768px) and (max-width:965px){padding:0 2rem;}@media (min-width:768px){margin:16px auto;font-size:16px;line-height:24px;}}");
            t.Z = i
        },
        66809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return j
                },
                default: function() {
                    return $
                }
            });
            var i = n(35944),
                o = n(67294),
                l = n(42782),
                a = n(9021),
                r = n(74154),
                d = n(74724),
                s = n(25215),
                p = n(8988),
                u = n(68578),
                c = n(84193),
                m = n(89128),
                g = n(47312),
                f = n(74177),
                h = n(37223),
                v = n(11163),
                x = n(81758),
                b = n(88261),
                _ = n(67807),
                y = n(7478),
                w = n(43386),
                k = n(27221),
                C = n(36227);
            let S = e => {
                var t;
                let {
                    locale: n
                } = (0, v.useRouter)(), {
                    integrationApiBaseUrl: i,
                    frontendBaseUrl: l,
                    originalUrl: a
                } = (0, h.V)(), {
                    data: r
                } = (0, x.ZP)("".concat(i, "/summer/info/api/").concat((0, f.f)(n), "/athletes"), b._, {
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1
                }), {
                    setFavoriteAthlete: d,
                    removeFavoriteAthlete: s,
                    favorites: S,
                    isLoggedIn: E,
                    getSignInUrl: R
                } = (0, g.ug)(), {
                    push: F
                } = (0, v.useRouter)(), M = (0, k.Z)(), Z = (0, m.m)(), {
                    module: B,
                    moduleInstance: L
                } = C.ft.find(e => e.type === _.GV.medals) || {}, [T, D] = (0, o.useState)(null), I = (0, o.useCallback)(e => {
                    var t, i;
                    if (e.type !== c.N$.Favourites) return;
                    let o = null == r ? void 0 : null === (t = r.athletes) || void 0 === t ? void 0 : t.find(e => e.id === (null == T ? void 0 : T.competitorCode)),
                        p = window.document.location.pathname.replace(/\/([a-z][a-z])\//, "").split("/");
                    "" === p[0] && p.shift();
                    let u = {
                        section_level_1: "paris-2024",
                        section_level_2: p[1]
                    };
                    if (E) {
                        if (o) {
                            let e = [...(null == M ? void 0 : null === (i = M.favorites) || void 0 === i ? void 0 : i.favoritesAthletes) || [], {
                                ocsCode: null == o ? void 0 : o.slug
                            }];
                            (0, w.f3)({
                                commonData: {
                                    language: n || "",
                                    pageType: _.GV.medals,
                                    nonInteraction: 0
                                },
                                eventData: { ...u,
                                    link_tag: "Add to favourites",
                                    athlete: null == o ? void 0 : o.slug,
                                    favorite_athletes: e.map(e => e.ocsCode)
                                }
                            }), (null == S ? void 0 : S.FavoritesAthletes.find(e => e.slug === (null == o ? void 0 : o.slug))) ? null == s || s(o.slug): null == d || d(null == o ? void 0 : o.slug)
                        }
                    } else {
                        let e = R(a, "p2024_favourites", "paris-2024", l, _.BE, "favorite=athletes/".concat(null == o ? void 0 : o.slug)),
                            t = {
                                link_tag: "sign in",
                                entry_point_type: _.kq,
                                entry_point_tag: _.hm,
                                module: B || "",
                                module_instance: L || "",
                                destination_url: e,
                                ...u
                            };
                        (0, y.T)(n, !1, t), F(e)
                    }
                }, [null == r ? void 0 : r.athletes, null == T ? void 0 : T.competitorCode, null == S ? void 0 : S.FavoritesAthletes, l, R, E, n, B, L, null == M ? void 0 : null === (t = M.favorites) || void 0 === t ? void 0 : t.favoritesAthletes, a, F, s, d]), {
                    open: z,
                    item: O,
                    toggle: H,
                    loading: A,
                    setLoading: P,
                    analyticsProps: U
                } = (0, p.y)(_.GV.medals, I), W = (0, o.useCallback)(e => {
                    console.log(e), e || H(), D(e)
                }, [H]);
                (0, o.useEffect)(() => {
                    var t;
                    if (!T) return;
                    P(!0);
                    let n = null == r ? void 0 : null === (t = r.athletes) || void 0 === t ? void 0 : t.find(e => e.id === (null == T ? void 0 : T.competitorCode));
                    (0, u.pX)(T, e, Z, n).then(e => {
                        e ? H(e) : P(!1)
                    }).catch(e => {
                        console.error("Error during medals contextual menu data fetch: ", e), P(!1)
                    })
                }, [r, e, T, Z, P, H]);
                let V = (0, o.useCallback)(() => {
                    var e;
                    let t = null == r ? void 0 : null === (e = r.athletes) || void 0 === e ? void 0 : e.find(e => e.id === (null == T ? void 0 : T.competitorCode));
                    return !!(null == S ? void 0 : S.FavoritesAthletes.find(e => e.slug === (null == t ? void 0 : t.slug)))
                }, [null == r ? void 0 : r.athletes, T, null == S ? void 0 : S.FavoritesAthletes]);
                return {
                    open: z,
                    item: (0, o.useMemo)(() => O ? { ...O,
                        ops: null == O ? void 0 : O.ops.map(e => ({ ...e,
                            active: V()
                        }))
                    } : void 0, [V, O]),
                    loading: A,
                    setData: W,
                    analyticsProps: U
                }
            };
            var E = n(38415),
                R = (0, o.memo)((0, o.forwardRef)((e, t) => {
                    let {
                        contextualMenuApiUrl: n
                    } = (0, h.V)(), {
                        open: l,
                        item: a,
                        setData: r,
                        loading: d
                    } = S(n);
                    (0, o.useImperativeHandle)(t, () => ({
                        setContextualMenuItem: r
                    }));
                    let s = (0, o.useCallback)(() => r(null), [r]);
                    return (0, i.tZ)(E.Z, {
                        open: l,
                        loading: d,
                        onClose: s,
                        ...a,
                        pageType: _.GV.medals
                    })
                })),
                F = n(18446),
                M = n.n(F),
                Z = n(12902),
                B = n(17552);
            let L = {
                    filterBar: { ...B.V,
                        padding: "16px",
                        maxWidth: "864px",
                        width: "100%",
                        ["@media (max-width: ".concat(_.MR, "px)")]: {
                            padding: "16px 12px"
                        },
                        "> div:first-of-type > div:first-of-type": {
                            borderRadius: "4px"
                        },
                        ".icon-button--active": {
                            filter: "invert(1)"
                        }
                    },
                    header: {
                        backgroundColor: "#fff",
                        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                        zIndex: 12,
                        position: "relative"
                    },
                    mainContainer: {
                        backgroundColor: "#f8f8f9",
                        position: "relative"
                    },
                    filterModal: {
                        span: {
                            fontFamily: "Source Sans 3"
                        },
                        ".filters-panel__header": {
                            position: "relative"
                        },
                        ".filters-panel__title-container": {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)"
                        },
                        ".filters-panel__title": {
                            fontFamily: "Source Sans 3",
                            fontSize: "20px",
                            fontWeight: 900,
                            lineHeight: "24px"
                        },
                        ".filters-panel__close-icon": {
                            position: "absolute",
                            right: "16px",
                            button: {
                                border: "1px solid #000"
                            }
                        },
                        ".filters-panel__sub-title": {
                            fontFamily: "Source Sans 3"
                        },
                        ".toggle, .expand-all-toggle": {
                            span: {
                                fontSize: "14px",
                                lineHeight: "20px"
                            },
                            "& > span": {
                                color: "#4D4D4D"
                            },
                            "button.toggle__switch": {
                                border: "1px solid #000000"
                            }
                        },
                        ".toggle": {
                            "button.toggle__switch": {
                                backgroundColor: "#000000",
                                "& > div:nth-child(2)": {
                                    backgroundColor: "#FFFFFF"
                                },
                                "&--active": {
                                    backgroundColor: "#FFFFFF",
                                    "& > div:nth-child(2)": {
                                        backgroundColor: "#000000"
                                    }
                                }
                            }
                        },
                        ".expand-all-toggle[data-checked=true]": {
                            "& > span": {
                                color: "#000000"
                            },
                            "button.toggle__switch--active": {
                                backgroundColor: "#000000",
                                "& > div:nth-child(2)": {
                                    backgroundColor: "#FFFFFF"
                                }
                            }
                        },
                        ".expand-all-toggle[data-checked=false]": {
                            "button.toggle__switch": {
                                backgroundColor: "#FFFFFF",
                                "& > div:nth-child(2)": {
                                    backgroundColor: "#000000"
                                }
                            }
                        },
                        'div[data-fluid="true"]': {
                            boxShadow: "none"
                        },
                        ".select-single-value__header": {
                            border: "1px solid #202020",
                            span: {
                                fontWeight: 400
                            },
                            '&[data-disabled="true"]': {
                                border: "1px solid #929aa0",
                                color: "#929aa0",
                                background: "none"
                            }
                        },
                        ".reset-filters": {
                            background: "none",
                            color: "#000000",
                            fontWeight: 400,
                            fontSize: "12px",
                            padding: 0,
                            border: "none",
                            borderBottom: "0.8px solid #000000",
                            borderRadius: "unset",
                            height: "auto",
                            "&:disabled": {
                                opacity: 1
                            },
                            "&:disabled:hover": {
                                border: "none",
                                borderBottom: "1px solid #4d5175"
                            }
                        },
                        ".apply-filters": {
                            display: "block",
                            textAlign: "left",
                            background: "none",
                            color: "#000000",
                            border: "2px solid #000000",
                            padding: "16px 12px",
                            fontSize: "14px",
                            position: "relative",
                            ".apply-filters-icon": {
                                position: "absolute",
                                right: 0,
                                top: 0,
                                zIndex: 1
                            },
                            "::after": {
                                content: '""',
                                position: "absolute",
                                height: "100%",
                                width: "5px",
                                right: 0,
                                top: 0,
                                backgroundColor: "black"
                            }
                        }
                    }
                },
                T = {
                    container: {
                        margin: "16px 8px",
                        minHeight: 500,
                        maxWidth: "864px !important",
                        ["@media (max-width: ".concat(_.MR, "px)")]: {
                            margin: "16px"
                        }
                    },
                    header: {
                        container: {
                            gridTemplateColumns: "5.5fr repeat(4, 1.5fr) 1.2fr",
                            padding: "4px 16px",
                            ["@media (max-width: ".concat(_.MR, "px)")]: {
                                padding: "4px 16px"
                            }
                        },
                        typography: {
                            rank: {
                                marginLeft: "0"
                            }
                        }
                    },
                    noc: {
                        container: {
                            boxShadow: "none",
                            border: "1px solid #DBDBDB",
                            "> div:nth-of-type(0)": {
                                border: "1px solid #000"
                            }
                        },
                        collapsible: {
                            borderTop: "3px solid #4D4D4D",
                            "& > div:first-of-type": {
                                borderTop: "none"
                            }
                        },
                        row: {
                            flagIcon: {
                                style: {
                                    width: "30px !important",
                                    height: "20px !important",
                                    boxSizing: "border-box"
                                }
                            },
                            style: {
                                height: "56px",
                                padding: "0 16px",
                                gridTemplateColumns: "minmax(0, 5.5fr) repeat(4, 1.5fr) 1.2fr",
                                ["@media (max-width: ".concat(_.MR, "px)")]: {
                                    padding: "0 16px",
                                    height: "48px"
                                }
                            },
                            expandIcon: {
                                width: 16,
                                height: 16,
                                style: {
                                    border: "1px solid #000",
                                    borderRadius: "4px",
                                    padding: "7.5px",
                                    filter: "brightness(0)",
                                    justifySelf: "flex-end",
                                    ["@media (max-width: ".concat(_.MR, "px)")]: {
                                        padding: "5px",
                                        width: 12.3,
                                        height: 12.3
                                    }
                                }
                            }
                        },
                        typography: {
                            rank: { ...B.w.style,
                                fontWeight: "700",
                                textAlign: "left",
                                marginLeft: "0",
                                marginRight: "38px",
                                ["@media (max-width: ".concat(_.MR, "px)")]: {
                                    marginRight: "12px"
                                }
                            },
                            gold: { ...B.w.style,
                                fontSize: "16px",
                                letterSpacing: "2px"
                            },
                            silver: { ...B.w.style,
                                fontSize: "16px",
                                letterSpacing: "2px"
                            },
                            bronze: { ...B.w.style,
                                fontSize: "16px",
                                letterSpacing: "2px"
                            },
                            total: { ...B.w.style,
                                fontSize: "16px",
                                letterSpacing: "2px",
                                fontWeight: 700
                            }
                        },
                        expanded: {
                            row: {
                                style: {
                                    borderTop: "1px solid #000",
                                    borderLeft: "1px solid #000",
                                    borderRight: "1px solid #000"
                                },
                                expandIcon: {
                                    style: {
                                        backgroundColor: "white",
                                        filter: "invert(1)"
                                    }
                                }
                            },
                            typography: {
                                noc: {
                                    fontWeight: "bold"
                                }
                            }
                        }
                    },
                    discipline: {
                        collapsible: {
                            borderTop: "1px solid #dbdbdb"
                        },
                        row: {
                            style: {
                                height: "48px",
                                padding: "0 20px !important",
                                gridTemplateColumns: "minmax(0, 5.5fr) repeat(4, 1.5fr) 1.2fr !important",
                                ["@media (max-width: ".concat(_.MR, "px)")]: {
                                    gridTemplateColumns: "minmax(0, 5.5fr) repeat(4, 1.5fr) 1.2fr !important",
                                    padding: "0 16px !important"
                                }
                            },
                            expandIcon: {
                                width: 16,
                                height: 16,
                                style: {
                                    border: "1px solid #000",
                                    borderRadius: "4px",
                                    padding: "7.5px",
                                    filter: "brightness(0)",
                                    justifySelf: "flex-end",
                                    ["@media (max-width: ".concat(_.MR, "px)")]: {
                                        padding: "5px",
                                        width: 12.3,
                                        height: 12.3
                                    }
                                }
                            }
                        },
                        typography: {
                            total: { ...B.w.style,
                                fontSize: "16px",
                                fontWeight: 400,
                                letterSpacing: "2px"
                            },
                            gold: { ...B.w.style,
                                fontSize: "16px",
                                display: "flex",
                                letterSpacing: "2px"
                            },
                            silver: { ...B.w.style,
                                fontSize: "16px",
                                display: "flex",
                                letterSpacing: "2px"
                            },
                            bronze: { ...B.w.style,
                                fontSize: "16px",
                                display: "flex",
                                letterSpacing: "2px"
                            },
                            name: {
                                paddingLeft: "94px !important",
                                ["@media (max-width: ".concat(_.MR, "px)")]: {
                                    paddingLeft: "0 !important"
                                }
                            }
                        },
                        expanded: {
                            row: {
                                expandIcon: {
                                    style: {
                                        backgroundColor: "white",
                                        filter: "invert(1)"
                                    }
                                }
                            },
                            typography: {
                                name: {
                                    fontWeight: 700
                                }
                            }
                        }
                    },
                    medalWinner: {
                        row: {
                            style: {
                                background: "#F9F9F9",
                                minHeight: "48px",
                                gridTemplateColumns: "minmax(0, 10fr) 1.8fr 1fr",
                                "& > div:first-of-type": {
                                    ["@media (max-width: ".concat(_.MR, "px)")]: {
                                        padding: "0!important"
                                    }
                                },
                                ["@media (max-width: ".concat(_.MR, "px)")]: {
                                    "a, span": {
                                        padding: 0
                                    },
                                    gridTemplateColumns: "minmax(0, 10.5fr) 1.5fr 1.2fr",
                                    borderTop: "1px solid #DBDBDB",
                                    minHeight: "60px",
                                    padding: "0 16px !important",
                                    "> div:first-of-type": {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        gap: "4px"
                                    }
                                }
                            },
                            contextualIcon: {
                                width: 27,
                                height: 27,
                                container: {
                                    border: "1px solid #000",
                                    borderRadius: "4px",
                                    padding: "2px",
                                    filter: "brightness(0)",
                                    marginRight: "0",
                                    boxSizing: "border-box",
                                    justifySelf: "flex-end",
                                    ["@media (max-width: ".concat(_.MR, "px)")]: {
                                        padding: "1px"
                                    }
                                }
                            }
                        },
                        typography: {
                            athlete: {
                                ["@media (max-width: ".concat(_.MR, "px)")]: {
                                    color: "#4D4D4D",
                                    paddingLeft: "62px"
                                }
                            },
                            description: {
                                textDecoration: "none",
                                color: "rgb(0, 0, 0)",
                                fontWeight: "400",
                                marginRight: "16px",
                                ["@media (max-width: ".concat(_.MR, "px)")]: {
                                    paddingLeft: "16px"
                                }
                            }
                        }
                    }
                };
            var D = n(49729),
                I = n(22748),
                z = n(80487),
                O = n(75834),
                H = n(69759),
                A = n(71001);
            let P = () => {
                let [e, t] = (0, o.useState)(!1), n = (0, k.Z)(), {
                    module: i,
                    moduleInstance: l
                } = C.ft.find(e => e.type === _.GV.medals) || {}, {
                    locale: a,
                    push: r
                } = (0, v.useRouter)(), d = (0, s.n)();
                (0, o.useEffect)(() => {
                    let e = _.et,
                        t = _.hm,
                        n = () => {
                            if (d.loginUrl) {
                                let n = new URL(d.loginUrl);
                                n.searchParams.set("entry_point_type", e), n.searchParams.set("entry_point_tag", t), n.searchParams.set("template", _.BE);
                                let o = {
                                    link_tag: "sign in",
                                    entry_point_type: e,
                                    entry_point_tag: t,
                                    module: i || "",
                                    module_instance: l || "",
                                    destination_url: n.href
                                };
                                (0, y.T)(a, !1, o), r(n)
                            }
                        },
                        o = () => {
                            if (d.favouritesUrl) {
                                let n = new URL(d.favouritesUrl);
                                n.searchParams.set("entry_point_type", e), n.searchParams.set("entry_point_tag", t), n.searchParams.set("template", _.BE);
                                let o = {
                                    link_tag: "Add",
                                    entry_point_type: e,
                                    entry_point_tag: t,
                                    module: i || "",
                                    module_instance: l || "",
                                    destination_url: n.href
                                };
                                (0, y.T)(a, !1, o), r(d.favouritesUrl)
                            }
                        };
                    return document.addEventListener("clickOnFavoritesLoginRegister", n), document.addEventListener("clickOnManageFavorites", o), () => {
                        document.addEventListener("clickOnFavoritesLoginRegister", n), document.addEventListener("clickOnManageFavorites", o)
                    }
                }, [a, i, l, r, d.favouritesUrl, d.loginUrl]), (0, o.useEffect)(() => {
                    let n = () => {
                        (0, w.Rf)({
                            language: null != a ? a : "en",
                            module: i,
                            moduleInstance: l,
                            contentExpanded: !e,
                            linkTag: "display sorting order"
                        }), t(!e)
                    };
                    return document.addEventListener("clickOnSortingButton", n), () => {
                        document.removeEventListener("clickOnSortingButton", n)
                    }
                }, [a, i, l, e]), (0, o.useEffect)(() => {
                    let e = e => {
                        e.detail && (0, w.Rf)({
                            language: null != a ? a : "en",
                            module: i,
                            moduleInstance: l,
                            linkTag: "+",
                            extraTrackingData: {
                                content_expansion: "1",
                                noc_id: e.detail.organisationCode
                            }
                        })
                    };
                    return document.addEventListener("clickOnOrganisationExpansion", e), () => {
                        document.removeEventListener("clickOnOrganisationExpansion", e)
                    }
                }, [a, i, l]), (0, o.useEffect)(() => {
                    let e = e => {
                        e.detail && (0, w.Rf)({
                            language: null != a ? a : "en",
                            module: i,
                            moduleInstance: l,
                            linkTag: "+",
                            extraTrackingData: {
                                content_expansion: "2",
                                discipline: e.detail.disciplineCode,
                                noc_id: e.detail.organisationCode
                            }
                        })
                    };
                    return document.addEventListener("clickOnDisciplineExpansion", e), () => {
                        document.removeEventListener("clickOnDisciplineExpansion", e)
                    }
                }, [a, i, l]), (0, o.useEffect)(() => {
                    let e = e => {
                        console.info("clickOnMyScheduleFilter", e.detail), (0, w.Rf)({
                            language: a || "",
                            module: i,
                            moduleInstance: l,
                            contentExpanded: !!e.detail.openFavourites,
                            linkTag: "display favorited filter"
                        }, !!(null == n ? void 0 : n.user))
                    };
                    return document.addEventListener("clickOnFavouriteButton", e), () => {
                        document.removeEventListener("clickOnFavouriteButton", e)
                    }
                }, [a, i, l, null == n ? void 0 : n.user]), (0, o.useEffect)(() => {
                    let e = e => {
                        (0, y.T)(null != a ? a : "en", !1, {
                            link_tag: "reset filters"
                        })
                    };
                    return document.addEventListener("clickOnResetFiltersMobile", e), () => {
                        document.removeEventListener("clickOnResetFiltersMobile", e)
                    }
                }, [a, i, null == n ? void 0 : n.user])
            };
            var U = n(50804),
                W = n(39525),
                V = n(29687);
            let N = () => {
                    let {
                        t: e
                    } = (0, r.$)(d.w.srmParis2024), {
                        asPath: t,
                        locale: n
                    } = (0, v.useRouter)(), [i, l] = (0, o.useState)("/".concat(n).concat(t)), {
                        urls: a
                    } = (0, h.V)();
                    return (0, o.useEffect)(() => {
                        let e = e => {
                            l(e.detail.newUrl)
                        };
                        return document.addEventListener(_.SZ, e), () => {
                            document.removeEventListener(_.SZ, e)
                        }
                    }, []), (0, o.useMemo)(() => {
                        var t;
                        let {
                            nocLabel: n,
                            disciplineLabel: o
                        } = (null !== (t = a[i.split("?")[0]]) && void 0 !== t ? t : {
                            params: {}
                        }).params;
                        return n ? {
                            title: n,
                            roofline: e("medal_table")
                        } : o ? {
                            title: o,
                            roofline: e("medal_table")
                        } : {
                            title: e("medal_table")
                        }
                    }, [i, e, a])
                },
                G = {
                    debug: !0,
                    urls: {
                        competitor: e => {
                            var t;
                            return null === (t = e.extraData) || void 0 === t ? void 0 : t.detailUrl
                        },
                        discipline: e => {
                            var t;
                            return null === (t = e.extraData) || void 0 === t ? void 0 : t.detailUrl
                        },
                        noc: e => {
                            var t;
                            return null === (t = e.extraData) || void 0 === t ? void 0 : t.detailUrl
                        }
                    }
                },
                X = (0, o.memo)(a.eH, M());
            var j = !0,
                $ = e => {
                    let {
                        query: t,
                        contextualMenuApiUrl: n,
                        disclaimerBanner: a,
                        bottomStory: r,
                        poweredByBox: d,
                        ainMedalsDisclaimer: p,
                        ...u
                    } = e, [c, m] = (0, o.useState)(), [g, f] = (0, o.useState)(), {
                        title: x,
                        roofline: b
                    } = N(), {
                        locale: y
                    } = (0, v.useRouter)(), w = (0, s.n)(), k = (0, o.useRef)(), C = (0, V.A)();
                    P(), (0, Z.X)(_.GV.medals), (0, D.B)({
                        language: y || "",
                        pageType: _.GV.medals,
                        triggerPercents: [50, 75, 100]
                    });
                    let {
                        apiAdvConfig: {
                            medals: {
                                itemsBetweenAds: S,
                                maximumAdv: E
                            }
                        },
                        mrhUrl: F
                    } = (0, h.V)();
                    (0, o.useEffect)(() => {
                        let e = async e => {
                            k.current.setContextualMenuItem(e.detail)
                        };
                        return document.addEventListener("clickOnCompetitorContextualMenu", e), () => {
                            document.removeEventListener("clickOnCompetitorContextualMenu", e)
                        }
                    }, []);
                    let M = (0, o.useMemo)(() => ({
                            maxAdvertisements: null != E ? E : 8,
                            intervalBetweenAds: null != S ? S : 15,
                            adWidth: "100%",
                            adHeight: "auto",
                            adIdFormat: "mid{{id}}",
                            adRenderer: e => {
                                let {
                                    height: t,
                                    ...n
                                } = e;
                                return (0, i.tZ)(I.N, { ...n,
                                    expandBreakpoint: 50,
                                    desktopHeight: "".concat(114, "px"),
                                    desktopPaddingTop: "32px",
                                    mobileHeight: "".concat(66, "px"),
                                    mobilePaddingTop: "24px"
                                })
                            }
                        }), [S, E]),
                        B = (0, o.useMemo)(() => {
                            var e;
                            let t = (null == c ? void 0 : null === (e = c.mrhItems) || void 0 === e ? void 0 : e.length) ? 77 : 0,
                                n = a.length ? 44 * a.length + (a.length - 1) * 8 + 16 : 0;
                            return {
                                width: "100%",
                                height: "".concat(n + t, "px"),
                                renderer: () => (0, i.BX)(i.HY, {
                                    children: [(0, i.tZ)(z.Z, {
                                        marginBottom: 16,
                                        spaceBetweenElements: 8,
                                        data: a
                                    }), c && (0, i.tZ)(H.Z, {
                                        title: c.title || "",
                                        items: c.mrhItems,
                                        params: g,
                                        marginBottom: 16
                                    })]
                                })
                            }
                        }, [a, g, c]);
                    (0, o.useEffect)(() => {
                        j(F)
                    }, [F]);
                    let j = e => {
                        e && fetch(e).then(e => e.json()).then(e => {
                            if (e && e.title && e.mrhItems) {
                                var t;
                                let n = (null === (t = e.mrhItems) || void 0 === t ? void 0 : t.map(e => {
                                    var t;
                                    return {
                                        id: e.title,
                                        imgSrc: null === (t = e.image) || void 0 === t ? void 0 : t.replace("{formatInstructions}", A.pG.base),
                                        link: e.url,
                                        alt: e.title,
                                        apiEndpointBaseUrl: e.apiEndpointBaseUrl,
                                        apiEndpointAuthHeader: e.apiEndpointAuthHeader,
                                        tags: e.tags
                                    }
                                })) || [];
                                m({
                                    title: e.title,
                                    countryCode: e.countryCode,
                                    mrhItems: n
                                })
                            }
                        }).catch(console.error)
                    };
                    return (0, o.useEffect)(() => {
                        let e = e => {
                            var t, n, i, o, l, a, r, d;
                            if (!e.detail) return;
                            let s = null !== (d = null == c ? void 0 : null === (t = c.countryCode) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== d ? d : null === (o = window) || void 0 === o ? void 0 : null === (i = o.deltatre) || void 0 === i ? void 0 : null === (n = i.userNation) || void 0 === n ? void 0 : n.toLowerCase();
                            f({
                                page: _.GV.medals,
                                lang: null != y ? y : "en",
                                territory: null != s ? s : "",
                                platform: "web",
                                noc: null === (l = e.detail.organisationCode) || void 0 === l ? void 0 : l.toLowerCase(),
                                disc: null === (a = e.detail.disciplineCode) || void 0 === a ? void 0 : a.toLowerCase(),
                                rsc: null === (r = e.detail.event) || void 0 === r ? void 0 : r.toLowerCase()
                            })
                        };
                        return document.addEventListener("filterApplied", e), () => {
                            document.removeEventListener("filterApplied", e)
                        }
                    }, [y, null == c ? void 0 : c.countryCode]), (0, i.BX)(l.X, {
                        title: x,
                        roofline: b,
                        children: [(0, i.tZ)(X, { ...u,
                            favourites: w,
                            pageCustomTheme: L,
                            customTheme: T,
                            urlConfig: G,
                            filters: C,
                            hideCompletedEvents: !0,
                            advConfig: M,
                            disclaimerConfig: B,
                            footerBottomStory: (0, i.tZ)(i.HY, {
                                children: p && (0, i.tZ)(O.Z, {
                                    html: p
                                })
                            })
                        }), (0, i.BX)(W.Z, {
                            children: [r && (0, i.tZ)(O.Z, {
                                html: r,
                                marginBottom: 16
                            }), d && (0, i.tZ)(U.Z, {
                                textElementContent: d.textElementContent,
                                image: d.image,
                                marginBottom: 16
                            })]
                        }), (0, i.tZ)(R, {
                            ref: k
                        })]
                    })
                }
        }
    },
    function(e) {
        e.O(0, [662, 227, 478, 799, 811, 456, 788, 664, 21, 194, 149, 77, 506, 696, 888, 774, 179], function() {
            return e(e.s = 17765)
        }), _N_E = e.O()
    }
]);
//# sourceMappingURL=medals-131748c273915c32.js.map