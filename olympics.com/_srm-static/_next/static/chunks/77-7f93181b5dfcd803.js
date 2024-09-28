"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [77], {
        68294: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return p
                }
            });
            var i = n(35944),
                l = n(92765),
                a = n(66194),
                o = n(94184),
                r = n.n(o);
            n(67294);
            var d = n(77986),
                c = n(57634),
                s = n(43355);
            let u = (e, t) => e.buttons && e.buttons[t] ? e.buttons[t] || {} : {
                xs: {}
            };
            var m = {
                Button: d.styled.button.withConfig({
                    componentId: "sc-e5ddedd5-0"
                })(e => {
                    let {
                        theme: t,
                        $buttonType: n
                    } = e, i = u(t, n);
                    return (0, d.css)(["cursor:pointer;&:disabled{cursor:default;}", " ", "{", "}"], null == i ? void 0 : i[a.u3.XS], (0, a.TE)(a.u3.LG), null == i ? void 0 : i[a.u3.LG])
                }),
                ButtonIcon: d.styled.span.withConfig({
                    componentId: "sc-e5ddedd5-1"
                })(["i{background:unset;color:currentColor;padding:0;}svg > path{fill:currentColor;}"]),
                ButtonText: (0, d.styled)(s.Z).withConfig({
                    componentId: "sc-e5ddedd5-2"
                })(["color:currentColor;"])
            };
            let g = e => {
                var t;
                let {
                    buttonType: n,
                    children: l,
                    typographyType: o,
                    customIcon: r
                } = e, s = u((0, d.useTheme)(), n), g = Array.isArray(l) && l.filter(Boolean).length > 1, p = "string" == typeof l || "cta" === n && !g, h = null !== (t = null != o ? o : s.typographyType) && void 0 !== t ? t : "cta" === n ? a.El.cta : a.El.button;
                return p ? (0, i.BX)(i.HY, {
                    children: [(0, i.tZ)(m.ButtonText, {
                        tag: "p",
                        variant: h,
                        children: l
                    }), r ? (0, i.tZ)(m.ButtonIcon, {
                        className: "button__icon",
                        children: r
                    }) : (null == s ? void 0 : s.icon) && (0, i.tZ)(m.ButtonIcon, {
                        className: "button__icon",
                        children: (0, i.tZ)(c.JO, {
                            type: s.icon
                        })
                    })]
                }) : (0, i.tZ)(i.HY, {
                    children: l
                })
            };
            var p = e => {
                let {
                    tag: t,
                    ...n
                } = e;
                if ("a" === t) {
                    let {
                        active: e,
                        ariaLabel: t,
                        buttonType: a = "primary",
                        children: o,
                        className: d,
                        customIcon: c,
                        dataCy: s = "link",
                        multiLine: u,
                        squared: p,
                        typographyType: h,
                        ...v
                    } = n, f = null != t ? t : "string" == typeof o ? o : "";
                    return (0, i.tZ)(m.Button, {
                        as: l.Z,
                        ...v,
                        role: "button",
                        $buttonType: a,
                        "data-cy": s,
                        "aria-label": f,
                        className: r()(a, d, p && "squared", u && "multiLine", e && "active"),
                        children: (0, i.tZ)(g, {
                            buttonType: a,
                            typographyType: h,
                            customIcon: c,
                            children: o
                        })
                    })
                }
                let {
                    active: a = !1,
                    buttonType: o = "primary",
                    children: d,
                    className: c = "",
                    dataCy: s = "btn",
                    disabled: u = !1,
                    multiLine: p = !1,
                    squared: h = !1,
                    typographyType: v,
                    onClick: f,
                    customIcon: y,
                    ...b
                } = e;
                return (0, i.tZ)(m.Button, { ...b,
                    $buttonType: o,
                    "data-cy": s,
                    type: "button",
                    className: r()(o, c, h && "squared", p && "multiLine", a && "active"),
                    onClick: f,
                    disabled: u,
                    children: (0, i.tZ)(g, {
                        buttonType: o,
                        typographyType: v,
                        customIcon: y,
                        children: d
                    })
                })
            }
        },
        98040: function(e, t, n) {
            n.d(t, {
                ZP: function() {
                    return G
                }
            });
            var i = n(35944),
                l = n(67294),
                a = n(43355),
                o = n(66194),
                r = n(77986);
            r.styled.button.withConfig({
                componentId: "sc-8bac787a-0"
            })(["background-color:transparent;border:0;color:", ";cursor:pointer;text-decoration:underline;-webkit-text-wrap:nowrap;white-space:nowrap;"], e => {
                let {
                    theme: t
                } = e;
                return t.colors.text
            });
            let d = r.styled.div.withConfig({
                componentId: "sc-8bac787a-1"
            })(["display:grid;padding:0;position:relative;width:100%;& > span{color:", ";opacity:1;}.with-read-more-wrapper{background-color:transparent;border:0;cursor:pointer;text-decoration:underline;-webkit-text-wrap:nowrap;white-space:nowrap;}"], e => {
                let {
                    theme: t
                } = e;
                return t.colors.text
            });
            r.styled.div.withConfig({
                componentId: "sc-8bac787a-2"
            })(["bottom:0;cursor:pointer;position:absolute;right:0;width:100%;button{min-width:8rem;span{font-size:1.4rem;font-weight:400;", "{font-size:1.6rem;}}}p{font-size:1.4rem;", "{font-size:1.6rem;}}"], (0, o.TE)(o.u3.MD), (0, o.TE)(o.u3.MD));
            var c = {
                WrapperNoWordCut: d
            };
            let s = (e, t, n) => {
                    let i = t - (n.length + 4),
                        l = e.substring(0, i).split(" ").slice(0, -1).join(" ");
                    return "".concat(l, "... <span class='with-read-more-wrapper'>").concat(n, "<span>")
                },
                u = (e, t, n) => {
                    let i = "",
                        l = 0,
                        a = 0,
                        o = 1;
                    for (; o <= n;) {
                        a += t;
                        let r = e.slice(l, a).split(" "),
                            d = r.pop();
                        i = "".concat(i).concat(r.join(" ")).concat(o === n ? "" : "</br>"), l = a - ((null == d ? void 0 : d.length) || 0), o += 1
                    }
                    return i
                },
                m = e => e.clientHeight / (parseInt(getComputedStyle(e).getPropertyValue("line-height"), 10) || parseInt(getComputedStyle(e).getPropertyValue("font-size"), 10) || e.clientHeight),
                g = (e, t, n, i) => {
                    null == e || e.preventDefault(), null == e || e.stopPropagation(), n(t), i && i()
                },
                p = (e, t, n, i, l) => {
                    let a = null == e ? void 0 : e.querySelectorAll(".with-read-more-wrapper");
                    if (a && a.length) {
                        let e = a[0];
                        (null == e ? void 0 : e.getAttribute("callbacks-set")) !== "true" && (e.setAttribute("callbacks-set", "true"), e.addEventListener("click", e => l(e, t, n, i)))
                    }
                };
            var h = e => {
                    let {
                        clampLines: t = 0,
                        className: n,
                        expandLabel: r = "Read More",
                        language: d = o.SQ.DEFAULT,
                        text: h,
                        typographyType: v,
                        onExpandCallback: f
                    } = e, y = (0, l.useRef)(null), b = (0, l.useRef)(null), S = (0, l.useRef)({
                        totalLines: 1,
                        estimatedCharInLine: 1
                    }), [w, M] = (0, l.useState)(h || "");
                    return (0, l.useEffect)(() => {
                        b.current && y.current && h && t >= 1 && (S.current.totalLines = Math.ceil(m(y.current)) || Math.floor(m(b.current)), S.current.estimatedCharInLine = Math.floor((null == h ? void 0 : h.length) / S.current.totalLines))
                    }, []), (0, l.useEffect)(() => {
                        if (y.current && h && t >= 1) {
                            let {
                                estimatedCharInLine: e,
                                totalLines: n
                            } = S.current, i = Math.min(e * t, h.length);
                            i >= h.length || n <= t || M(s(u(h, e, n), i, r))
                        }
                    }, [h, t]), (0, l.useEffect)(() => {
                        p(y.current, h, M, f, g)
                    }), (0, i.tZ)(i.HY, {
                        children: (0, i.tZ)(c.WrapperNoWordCut, {
                            ref: b,
                            "data-cy": "with-read-more-wrapper",
                            className: n,
                            children: (0, i.tZ)(a.Z, {
                                dataCy: "with-read-more-content",
                                ref: y,
                                language: d,
                                variant: v,
                                dangerouslySetInnerHTML: {
                                    __html: w
                                },
                                children: void 0
                            })
                        })
                    })
                },
                v = n(7473),
                f = n(94184),
                y = n.n(f);
            let b = r.styled.section.withConfig({
                    shouldForwardProp: e => !["$captionDisplay"].includes(e)
                }).withConfig({
                    componentId: "sc-a81b7b8c-0"
                })(["display:grid;grid-gap:", ";justify-content:space-between;line-height:0;margin-top:", ";", "{margin-top:", ";}&.has-credits{grid-template:'credits';", "}&.has-title{grid-template:'title';}&.has-credits.has-title{grid-template:'title credits';justify-content:start;", " &.", "{grid-template:'title' 'credits';}}", ""], e => {
                    let {
                        theme: t
                    } = e;
                    return t.image.spacing
                }, e => {
                    var t;
                    let {
                        theme: n
                    } = e;
                    return null === (t = n.image.marginTop) || void 0 === t ? void 0 : t.xs
                }, (0, o.TE)(o.u3.LG), e => {
                    var t;
                    let {
                        theme: n
                    } = e;
                    return null === (t = n.image.marginTop) || void 0 === t ? void 0 : t.lg
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.image.showCreditsOnRight && "justify-content: end;"
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.image.showCreditsOnRight && "justify-content: space-between;"
                }, o.DH.MULTI_LINE, e => {
                    var t;
                    let {
                        theme: n
                    } = e;
                    return null === (t = n.image.styles) || void 0 === t ? void 0 : t.xs
                }),
                S = (0, r.styled)(a.Z).withConfig({
                    componentId: "sc-a81b7b8c-1"
                })(["grid-area:title;", ""], e => {
                    var t;
                    let {
                        theme: n
                    } = e;
                    return null === (t = n.image.titleStyles) || void 0 === t ? void 0 : t.xs
                }),
                w = (0, r.styled)(v.Z).withConfig({
                    componentId: "sc-a81b7b8c-2"
                })(["display:inline-block;grid-area:title;width:fit-content;> p,p *{", "}p:last-child{", ";}"], e => {
                    var t;
                    let {
                        theme: n
                    } = e;
                    return null === (t = n.image.titleStyles) || void 0 === t ? void 0 : t.xs
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.spacings.useRules ? "margin-bottom: 0" : ""
                });
            var M = {
                Caption: b,
                Credits: (0, r.styled)(a.Z).withConfig({
                    componentId: "sc-a81b7b8c-3"
                })(["display:inline-flex;grid-area:credits;white-space:pre-wrap;", ""], e => {
                    var t;
                    let {
                        theme: n
                    } = e;
                    return null === (t = n.image.creditsStyles) || void 0 === t ? void 0 : t.xs
                }),
                Title: S,
                TextBlockCaption: w
            };
            let k = e => {
                    let {
                        credits: t,
                        showCreditsCopyright: n,
                        showCreditsPrefix: i,
                        showCreditsParenthesis: l,
                        i18n: a
                    } = e, o = t;
                    return n && (o = "\xa9 ".concat(o)), i && (o = "".concat(null == a ? void 0 : a.pictureBy, " ").concat(o)), l && (o = "(".concat(o, ")")), o
                },
                x = e => {
                    let {
                        caption: t,
                        captionTypographyType: n,
                        language: l,
                        title: a
                    } = e;
                    return (0, i.tZ)(i.HY, {
                        children: t ? (0, i.tZ)(M.TextBlockCaption, {
                            input: t || "",
                            language: l,
                            className: "text-block",
                            typographyTypes: (0, v.x)(n)
                        }) : (0, i.tZ)(M.Title, {
                            "data-cy": "title",
                            className: "image-title",
                            language: l,
                            variant: n,
                            children: a
                        })
                    })
                };
            var T = e => {
                    let {
                        caption: t,
                        captionDisplay: n,
                        captionTypographyType: l = o.El.caption,
                        className: a,
                        credits: d,
                        i18n: c = {
                            more: "More",
                            pictureBy: "Picture by"
                        },
                        language: s,
                        title: u,
                        showCaptionReadMore: m,
                        showCreditsCopyright: g,
                        showCreditsParenthesis: p,
                        showCreditsPrefix: v,
                        showTitle: f
                    } = e, {
                        image: b
                    } = (0, r.useTheme)(), S = l || b.captionTypographyType || o.El.caption, w = n || b.captionDisplay || o.DH.SINGLE_LINE, T = k({
                        credits: d,
                        showCreditsCopyright: null != g ? g : b.showCreditsCopyright,
                        showCreditsParenthesis: null != p ? p : b.showCreditsParenthesis,
                        showCreditsPrefix: null != v ? v : b.showCreditsPrefix,
                        i18n: c
                    }), L = m && b.showReadMoreCaption, C = (0, i.tZ)(x, {
                        caption: t,
                        captionTypographyType: S,
                        language: s,
                        title: u
                    });
                    return (0, i.BX)(M.Caption, {
                        $captionDisplay: w,
                        hasCredits: !!T,
                        hasTitle: f && !!(u || t),
                        "data-cy": "caption",
                        className: y()("image-caption", a, T ? "has-credits" : "", f && (u || t) ? "has-title" : "", w),
                        children: [f && !!(u || t) && (L ? (0, i.tZ)(h, {
                            className: "image-with-readmore",
                            expandLabel: c.more,
                            typographyType: l,
                            clampLines: 2,
                            text: t || u
                        }) : C), d && (0, i.BX)(M.Credits, {
                            "data-cy": "credits",
                            className: "image-credits",
                            language: s,
                            variant: S,
                            children: [" ", T]
                        })]
                    })
                },
                L = n(96846),
                C = n(77090),
                Z = n.n(C),
                W = {
                    Picture: r.styled.picture.withConfig({
                        componentId: "sc-b6203b63-0"
                    })(["display:flex;", " ", ""], e => {
                        let {
                            $width: t
                        } = e;
                        return !t && "img {\n    width: 100%;\n  }"
                    }, e => {
                        let {
                            $aspectRatio: t
                        } = e;
                        return !!t && "\n    > img {\n      aspect-ratio: ".concat(t, ";\n      height: auto;\n      width: auto;\n      margin: 0 auto;\n    }\n    ")
                    })
                };
            let E = {
                    default: "/f_auto"
                },
                I = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    return e.replace("{formatInstructions}", "".concat(t).concat(n ? "/t_lqip" : "").concat(i ? E.default : ""))
                },
                B = {
                    card_s: 20 / 23,
                    topicHeader: 16 / 9,
                    pog_staticContent_hero: 16 / 9,
                    pog_overview_hero: 21 / 9,
                    cc_cardWall_bg_xl: 960 / 412,
                    cc_cardWall_bg_lg: 600 / 412,
                    cc_cardWall_bg_md: 496 / 412,
                    cc_cardWall_bg_sm: 496 / 412,
                    cc_cardWall_bg_xs: 380 / 214,
                    cc_photoGallery: 16 / 9,
                    cc_podcast: 16 / 9,
                    pog_flag_featuredAthleteCard: 1.5,
                    pog_flag_teamAwardCard: 1,
                    pog_flag: 1.5,
                    athlete_medal: 1,
                    fog_logo_l: 220 / 253,
                    fog_logo_m: 220 / 253,
                    fog_logo_s: 200 / 230,
                    "16:9": 16 / 9,
                    "16-9": 16 / 9,
                    "16_9": 16 / 9,
                    "1:1": 1,
                    "1-1": 1,
                    "1_1": 1,
                    "4:3": 4 / 3,
                    "4-3": 4 / 3,
                    "4_3": 4 / 3,
                    "21:9": 21 / 9,
                    "21-9": 21 / 9,
                    "21_9": 21 / 9,
                    "3:2": 1.5,
                    "3-2": 1.5,
                    "3_2": 1.5,
                    "3:4": 3 / 4,
                    "3-4": 3 / 4,
                    "3_4": 3 / 4
                },
                R = (e, t, n) => {
                    var i;
                    if (0 === Object.keys(e).length) return n;
                    let l = "string" == typeof e[t] ? e[t] : null === (i = e[t]) || void 0 === i ? void 0 : i.standard,
                        a = Object.keys(B).find(e => null == l ? void 0 : l.includes(e));
                    return a ? B[a] : n
                },
                _ = "https://gstatic.olympics.com/image/private/{formatInstructions}/primary/p4omdu759pqnhb6ef4in",
                O = e => e && "undefined" !== e ? e : _,
                H = e => Number(e.split("px")[0]),
                A = e => {
                    let {
                        breakpoints: t
                    } = e;
                    return {
                        xl: "(min-width: ".concat(t.xl, ")"),
                        lg: "(min-width: ".concat(t.lg, ") and (max-width: ").concat(H(t.xl) - 1, "px)"),
                        md: "(min-width: ".concat(t.md, ") and (max-width: ").concat(H(t.lg) - 1, "px)"),
                        sm: "(min-width: ".concat(t.sm, ") and (max-width: ").concat(H(t.md) - 1, "px)"),
                        xs: "(max-width: ".concat(H(t.sm) - 1, "px)")
                    }
                },
                F = function(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    return "".concat(I(e, t.standard, !1, n), ", ").concat(I(e, t.x2, !1, n), " 2x")
                },
                P = e => Object.entries(e).reduce((e, t) => {
                    let [n, i] = t;
                    return i && ("string" == typeof i ? e[n] = {
                        standard: i,
                        x2: "".concat(i, "_2x")
                    } : e[n] = i), e
                }, {}),
                X = function(e, t, n, l, a, o) {
                    let r = !(arguments.length > 6) || void 0 === arguments[6] || arguments[6];
                    return Object.entries(l).map(l => {
                        let [d, c] = l, s = "";
                        if (s = e[d] ? F(t, e[d], r) : e[n] && F(t, e[n], r), a) {
                            let e = s || "".concat(I(t, "", !1, r), " , ").concat(I(t, "", !1, r), " 2x");
                            return (0, i.tZ)("source", {
                                className: o ? "native-lazy" : "lazy",
                                media: c,
                                srcSet: o ? e : void 0,
                                "data-srcset": e
                            }, d)
                        }
                        return e[d] ? (0, i.tZ)("source", {
                            media: c,
                            srcSet: s
                        }, d) : null
                    })
                },
                D = (e, t, n, l, a, o, r, d, c, s, u) => {
                    let m = I(l, e[n] && e[n].standard || "", !1, u);
                    return a ? (0, i.tZ)("img", {
                        loading: "lazy",
                        alt: t,
                        className: s ? "" : "lazyload",
                        "data-src": m,
                        height: d,
                        onError: () => o(!0),
                        src: m,
                        width: r,
                        title: c
                    }) : (0, i.tZ)("img", {
                        alt: t,
                        height: d,
                        onError: () => o(!1),
                        src: I(l, e[n] ? e[n].standard : "", !1, u),
                        width: r
                    })
                };
            var N = e => {
                    let {
                        altText: t,
                        aspectRatio: n,
                        ariaHidden: a = !1,
                        dataCy: d = "picture-wrapper",
                        defaultImgSource: c = "lg",
                        enableLazyLoading: s = !0,
                        imageHeight: u,
                        imageUrl: m,
                        imageWidth: g,
                        sources: p,
                        title: h = "",
                        className: v,
                        addFAuto: f = !0
                    } = e, [y, b] = (0, l.useState)(!1), S = (0, r.useTheme)();
                    (0, l.useEffect)(() => {
                        if (s) {
                            var e;
                            let t = !!(null === (e = S.cloudinaryImage.configuration) || void 0 === e ? void 0 : e.useNativeLazyLoading) && "loading" in HTMLImageElement.prototype;
                            b(t), t || async function() {
                                Z().init()
                            }()
                        }
                    }, []);
                    let w = (0, l.useContext)(o.Ni),
                        M = P(p),
                        k = 1 === Object.keys(p).length ? Object.keys(p)[0] : c,
                        x = R(p, k, n),
                        [T, L] = (0, l.useState)(O(m));
                    (0, l.useEffect)(() => {
                        L(O(m))
                    }, [m]);
                    let C = e => {
                            if (L(_), e) {
                                let e = document.querySelectorAll("source.native-lazy"),
                                    t = document.querySelectorAll("source.lazy");
                                e.forEach(e => {
                                    var t;
                                    e.srcset = null !== (t = e.dataset.srcset) && void 0 !== t ? t : ""
                                }), (null == t ? void 0 : t.length) && t[0].srcset !== t[0].dataset.srcset && t.forEach(e => {
                                    var t;
                                    e.srcset = null !== (t = e.dataset.srcset) && void 0 !== t ? t : ""
                                })
                            }
                        },
                        E = (0, l.useMemo)(() => 0 !== Object.keys(M).length ? X(M, T, k, A(w), s, y, f) : null, [M, y]),
                        I = (0, l.useMemo)(() => D(M, t, k, T, s, C, g, u, h, y, f), [M, y]);
                    return (0, i.BX)(W.Picture, {
                        "data-cy": d,
                        $aspectRatio: x,
                        $width: g,
                        className: v,
                        "aria-hidden": a || void 0,
                        children: [E, I]
                    })
                },
                G = e => {
                    var t;
                    let {
                        altText: n = "",
                        aspectRatio: l,
                        ariaHidden: a = !1,
                        caption: o = "",
                        captionDisplay: d,
                        captionTypographyType: c,
                        className: s,
                        credits: u = "",
                        dataCy: m,
                        defaultImgSource: g = "lg",
                        enableLazyLoading: p = !0,
                        i18n: h,
                        imageHeight: v,
                        imageUrl: f,
                        imageWidth: y,
                        language: b = L.SQ.EN,
                        shouldShowCaptionReadMore: S,
                        shouldShowCreditsParenthesis: w,
                        shouldShowCreditsCopyright: M,
                        shouldShowCreditsPrefix: k,
                        shouldShowTitle: x,
                        shouldShowCaption: C = !0,
                        sources: Z,
                        title: W = "",
                        addFAuto: E = !0
                    } = e, I = (0, r.useTheme)().image, B = !!((W || o) && (null === (t = null != x ? x : I.showTitle) || void 0 === t || t));
                    return (0, i.BX)(i.HY, {
                        children: [(0, i.tZ)(N, {
                            dataCy: m,
                            altText: n,
                            aspectRatio: l,
                            ariaHidden: a,
                            defaultImgSource: g,
                            enableLazyLoading: p,
                            imageHeight: v,
                            imageUrl: f,
                            imageWidth: y,
                            sources: Z,
                            title: W,
                            className: s,
                            addFAuto: E
                        }), (!!u || B) && (0, i.tZ)(T, {
                            caption: C ? o : void 0,
                            captionDisplay: d,
                            captionTypographyType: c,
                            credits: u,
                            i18n: h,
                            language: b,
                            showCaptionReadMore: S,
                            showCreditsCopyright: M,
                            showCreditsParenthesis: w,
                            showCreditsPrefix: k,
                            showTitle: B,
                            title: W
                        })]
                    })
                }
        },
        57634: function(e, t, n) {
            n.d(t, {
                ol: function() {
                    return c
                },
                b3: function() {
                    return s
                },
                KR: function() {
                    return u
                },
                _M: function() {
                    return m
                },
                s$: function() {
                    return g
                },
                Kh: function() {
                    return p
                },
                BB: function() {
                    return h
                },
                GT: function() {
                    return v
                },
                yn: function() {
                    return f
                },
                pb: function() {
                    return y
                },
                dL: function() {
                    return G
                },
                Zf: function() {
                    return b
                },
                V2: function() {
                    return w
                },
                s1: function() {
                    return M
                },
                By: function() {
                    return S
                },
                Ep: function() {
                    return k
                },
                pr: function() {
                    return x
                },
                JO: function() {
                    return o
                },
                Px: function() {
                    return T
                },
                n6: function() {
                    return L
                },
                BL: function() {
                    return W
                },
                JK: function() {
                    return Z
                },
                e$: function() {
                    return N
                },
                v3: function() {
                    return E
                },
                ZH: function() {
                    return I
                },
                NZ: function() {
                    return B
                },
                LH: function() {
                    return R
                },
                cY: function() {
                    return _
                },
                B5: function() {
                    return X
                },
                t3: function() {
                    return C
                },
                vL: function() {
                    return D
                },
                bf: function() {
                    return P
                },
                k3: function() {
                    return O
                },
                US: function() {
                    return H
                },
                Nu: function() {
                    return A
                },
                tL: function() {
                    return F
                }
            });
            var i = n(35944);
            n(67294);
            var l = n(77986),
                a = {
                    Icon: l.styled.i.withConfig({
                        componentId: "sc-af5d3271-0"
                    })(["background:", ";border:none;border-radius:50%;box-sizing:content-box;color:", ";display:inline-block;height:26px;line-height:1;padding:", ";position:relative;vertical-align:middle;width:26px;&:before{display:table;font-family:", ";font-style:normal;font-variant:normal;font-weight:400;left:50%;line-height:1;position:absolute;text-decoration:none;text-transform:none;top:50%;transform:translate(-50%,-50%);}"], e => {
                        let {
                            theme: t
                        } = e;
                        return t.colors.inputBackground
                    }, e => {
                        let {
                            theme: t
                        } = e;
                        return t.colors.linkSecondary
                    }, e => {
                        let {
                            theme: t
                        } = e;
                        return t.spacings.xs
                    }, e => {
                        let {
                            theme: t
                        } = e;
                        return t.fonts.icon
                    }),
                    IconDefinitions: l.styled.span.withConfig({
                        componentId: "sc-af5d3271-1"
                    })([".icon-archery:before{content:'';}.icon-arrow-down:before{content:'';}.icon-arrow-down-filled:before{content:'';}.icon-arrow-left:before{content:'';}.icon-arrow-right:before{content:'';}.icon-arrow-up:before{content:'';}.icon-arrow-up-filled:before{content:'';}.icon-athletes_placeholder:before{content:'';}.icon-avatar:before{content:'';}.icon-caret-down:before{content:'';}.icon-caret-up:before{content:'';}.icon-chevron-down:before{content:'';}.icon-chevron-left-solid:before{content:'';}.icon-chevron-right-solid:before{content:'';padding-bottom:0.02rem;}.icon-circle-arrow-down:before{content:'';}.icon-circle-arrow-left:before{content:'';}.icon-circle-arrow-right:before{content:'';}.icon-circle-arrow-up:before{content:'';}.icon-close-button:before{content:'';}.icon-danger:before{content:'';}.icon-dot:before{content:'';}.icon-email:before{content:'';}.icon-epg:before{content:'';}.icon-facebook:before{content:'';}.icon-favorite:before{content:'';}.icon-featured-circle:before{content:'';}.icon-file-generic:before{content:'';}.icon-file-pdf:before{content:'';}.icon-fullscreen:before{content:'';}.icon-google:before{content:'';}.icon-instagram:before{content:'';}.icon-paris-medal:before{content:'';}.icon-photogallery-icon:before{content:'';}.icon-play-button:before{content:'';}.icon-quotes:before{content:'';}.icon-search:before{content:'';}.icon-share:before{content:'';}.icon-summer:before{content:'';}.icon-thumbnails:before{content:'';}.icon-torch:before{content:'';}.icon-twitter:before{content:'';}.icon-wechat:before{content:'';}.icon-winter:before{content:'';}.icon-yog:before{content:'';}.icon-z-podcast-icon:before{content:'';}.icon-zz-account-bell:before{content:'';}.icon-zz-account-tv:before{content:'';}.icon-zz-logout:before{content:'';}.icon-zzz-download:before{content:'';}.icon-vault:before{content:'';}.icon-parallel-bars:before{content:'';}.icon-horizontal-bar:before{content:'';}.icon-pommel-horse:before{content:'';}.icon-rings:before{content:'';}.icon-floor:before{content:'';}.icon-uneven-bars:before{content:'';}.icon-balance-beam:before{content:'';}.icon-plus{&:before{content:'';font-size:1.4rem;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%) rotate(45deg);}}"])
                };
            let o = e => {
                let {
                    type: t,
                    className: n = "",
                    wrapperClassName: l = ""
                } = e;
                return (0, i.tZ)(a.IconDefinitions, {
                    className: l,
                    "data-cy": "icon-".concat(t),
                    children: (0, i.tZ)(a.Icon, {
                        className: "icon icon-".concat(t, " ").concat(n)
                    })
                })
            };
            var r = n(66194);
            let d = r.O9.black;
            r.O9.white, r.O9.black, r.O9.white;
            let c = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        height: "13",
                        role: "img",
                        viewBox: "0 0 15 13",
                        width: "15",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("path", {
                            d: "M0 5.26557H11.8817L7.57006 1.11011L8.7219 0L15 6.05066L8.7219 12.1013L7.57006 10.9912L11.8817 6.83574H0V5.26557Z",
                            fill: t
                        })
                    })
                },
                s = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("g", {
                            clipPath: "url(#clip0_245_7787)",
                            children: (0, i.tZ)("path", {
                                d: "M20.0005 19.0578L23.3005 15.7578L24.2431 16.7005L20.9431 20.0005L24.2431 23.3005L23.3005 24.2431L20.0005 20.9431L16.7005 24.2431L15.7578 23.3005L19.0578 20.0005L15.7578 16.7005L16.7005 15.7578L20.0005 19.0578Z",
                                fill: t
                            })
                        })
                    })
                },
                u = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        stroke: t,
                        fill: t,
                        strokeWidth: "0",
                        viewBox: "0 0 24 24",
                        height: "1em",
                        width: "1em",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("path", {
                            d: "M10.5253 5.49475L10.5206 7.49475L15.0782 7.50541L5.47473 17.0896L6.88752 18.5052L16.5173 8.89479L16.5065 13.5088L18.5065 13.5134L18.5253 5.51345L10.5253 5.49475Z",
                            fill: t
                        })
                    })
                },
                m = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        width: "28",
                        height: "16",
                        viewBox: "0 0 28 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M27.9442 1.94281L14.0014 15.8856L0.0585938 1.94281L1.94421 0.0571899L14.0014 12.1144L26.0586 0.0571899L27.9442 1.94281Z",
                            fill: t
                        })
                    })
                },
                g = e => {
                    let {
                        color: t = "white"
                    } = e;
                    return (0, i.tZ)("svg", {
                        width: "6",
                        height: "12",
                        viewBox: "0 0 6 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("path", {
                            d: "M3.53774 12L4.76995e-08 6L3.53774 -2.15258e-07L5.9151 -7.42269e-09L2.46226 5.93878L6 12L3.53774 12Z",
                            fill: t
                        })
                    })
                },
                p = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        width: "28",
                        height: "16",
                        viewBox: "0 0 28 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M0.0585938 14.0572L14.0014 0.11438L27.9442 14.0572L26.0586 15.9428L14.0014 3.88562L1.94421 15.9428L0.0585938 14.0572Z",
                            fill: t
                        })
                    })
                },
                h = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)(i.HY, {
                        children: (0, i.tZ)("svg", {
                            width: "32",
                            height: "32",
                            viewBox: "0 0 32 32",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            role: "img",
                            children: (0, i.tZ)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M7 2.99023H19.104L25 8.95176V28.9902H7V2.99023ZM9.57143 5.59023V26.3902H22.4286V10.7902H17.2857V5.59023H9.57143ZM19.8571 7.42871L20.6103 8.19023H19.8571V7.42871Z",
                                fill: t
                            })
                        })
                    })
                },
                v = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        width: "20",
                        height: "16",
                        viewBox: "0 0 20 16",
                        fill: "none",
                        role: "img",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("path", {
                            d: "M16.7199 0H3.2799C2.51608 0 1.78354 0.300267 1.24343 0.834746C0.70333 1.36922 0.399902 2.09413 0.399902 2.85V12.35C0.399902 13.1059 0.70333 13.8308 1.24343 14.3653C1.78354 14.8997 2.51608 15.2 3.2799 15.2H16.7199C17.4837 15.2 18.2163 14.8997 18.7564 14.3653C19.2965 13.8308 19.5999 13.1059 19.5999 12.35V2.85C19.5999 2.09413 19.2965 1.36922 18.7564 0.834746C18.2163 0.300267 17.4837 0 16.7199 0ZM16.7199 1.9L10.4799 6.1465C10.334 6.22988 10.1684 6.27378 9.9999 6.27378C9.83139 6.27378 9.66584 6.22988 9.5199 6.1465L3.2799 1.9H16.7199Z",
                            fill: t
                        })
                    })
                },
                f = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.BX)("svg", {
                        stroke: t,
                        fill: t,
                        strokeWidth: "0",
                        viewBox: "0 0 24 24",
                        height: "1em",
                        width: "1em",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.tZ)("path", {
                            fill: "none",
                            d: "M0 0h24v24H0z"
                        }), (0, i.tZ)("path", {
                            d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
                        })]
                    })
                },
                y = e => {
                    let {
                        color: t
                    } = e;
                    return (0, i.BX)("svg", {
                        stroke: t,
                        fill: t,
                        strokeWidth: "0",
                        viewBox: "0 0 24 24",
                        height: "1em",
                        width: "1em",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.tZ)("path", {
                            fill: "none",
                            d: "M0 0h24v24H0z"
                        }), (0, i.tZ)("path", {
                            d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                        })]
                    })
                },
                b = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        stroke: t,
                        fill: t,
                        strokeWidth: "0",
                        viewBox: "0 0 448 512",
                        height: "24px",
                        width: "24px",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("path", {
                            d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        })
                    })
                },
                S = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.BX)("svg", {
                        width: "32",
                        height: "32",
                        viewBox: "240 225 520 520",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        role: "img",
                        children: [(0, i.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M262.3,583.2V403.3h124.6v28.5h-91v47.3H382v28.5h-86.1v75.6H262.3z",
                            fill: t
                        }), (0, i.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M529.3,583.2l-18-49.1h-76.6l-18.2,49.1h-36l74-179.9h38.6l74,179.9H529.3z M445.3,505.6h55.5l-20.6-56     c-2.8-7.5-4.9-13.4-6.9-20.8c-2.3,7.5-4.6,13.6-7.5,20.8L445.3,505.6z",
                            fill: t
                        }), (0, i.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M721,564.2l16.4,20.3L714.3,603l-18.2-22.4c-11.3,4.6-23.9,7.2-37.3,7.2c-50.4,0-88.2-34.2-88.2-94.6     c0-57.8,37.8-94.6,88.2-94.6c50.4,0,88.9,37.5,88.9,94.6C747.8,524.1,737.7,548.3,721,564.2z M676.3,556.8l-18.8-23.1l23.4-18.2     l19.5,23.6c8-11.1,12.6-26.5,12.6-45.7c0-40.3-22.1-66-54.2-66s-53.5,25.2-53.5,66c0,41.9,21.6,66,53.5,66     C665,559.3,670.9,558.3,676.3,556.8z",
                            fill: t
                        })]
                    })
                },
                w = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        stroke: t,
                        fill: t,
                        strokeWidth: "0",
                        viewBox: "0 0 576 512",
                        height: "24px",
                        width: "24px",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("path", {
                            d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                        })
                    })
                },
                M = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        fill: "none",
                        height: "20",
                        viewBox: "0 0 20 20",
                        width: "20",
                        xmlns: "http://www.w3.org/2000/svg",
                        role: "img",
                        children: (0, i.tZ)("path", {
                            d: "M16.6178 9.25476L16.6101 9.25376L16.5574 9.24695H13.7104V7.37545C13.7104 6.94922 13.7695 6.59337 13.9794 6.34394C14.189 6.09481 14.5506 5.95002 15.1602 5.95002H16.7177H16.7202V5.9422H16.728V3.31214H16.7785L16.7212 3.3044C16.4503 3.26778 15.5261 3.18733 14.4484 3.18733C13.3232 3.18733 12.3747 3.53092 11.7075 4.19048C11.0402 4.85007 10.6552 5.82481 10.6552 7.08539V9.24695H8.12069V9.25476H8.11287V12.1993H8.12069V12.2071H10.6552V19.7428H1.03C0.602877 19.7428 0.257812 19.3978 0.257812 18.9706V1.03064C0.257812 0.603518 0.602877 0.258453 1.03 0.258453H18.97C19.3971 0.258453 19.7422 0.603518 19.7422 1.03064V18.9706C19.7422 19.3978 19.3971 19.7428 18.97 19.7428H13.7104V12.2046H16.2376V12.2578L16.2453 12.1978L16.6256 9.25577L16.6178 9.25476Z",
                            fill: t,
                            stroke: "black",
                            strokeWidth: "0.015625"
                        })
                    })
                },
                k = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.BX)("svg", {
                        width: "24",
                        height: "25",
                        viewBox: "0 0 21 11",
                        fill: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.BX)("g", {
                            clipPath: "url(#clip0_3129_18316)",
                            children: [(0, i.tZ)("path", {
                                d: "M11.2217 5.62998C11.2217 8.19186 13.299 10.2692 15.8613 10.2692C18.4232 10.2692 20.5001 8.19186 20.5001 5.62998C20.5001 3.0681 18.4232 0.991211 15.8613 0.991211C13.299 0.991211 11.2217 3.0681 11.2217 5.62998V5.62998Z",
                                fill: "white"
                            }), (0, i.tZ)("path", {
                                d: "M0.5 5.62998C0.5 8.19186 2.57689 10.2692 5.13919 10.2692C7.70149 10.2692 9.77838 8.19186 9.77838 5.62998C9.77838 3.0681 7.70149 0.991211 5.13919 0.991211C2.57689 0.991211 0.5 3.0681 0.5 5.62998V5.62998Z",
                                fill: "white"
                            })]
                        }), (0, i.tZ)("defs", {
                            children: (0, i.tZ)("clipPath", {
                                id: "clip0_3129_18316",
                                children: (0, i.tZ)("rect", {
                                    width: "20",
                                    height: "9.28",
                                    fill: "white",
                                    transform: "translate(0.5 0.990234)"
                                })
                            })
                        })]
                    })
                },
                x = e => {
                    let {
                        color: t = d,
                        size: n = "24"
                    } = e;
                    return (0, i.tZ)("svg", {
                        fill: t,
                        width: n,
                        height: n,
                        viewBox: "0 0 32 32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("path", {
                            d: "M6.001 7.128L6 10.438l19.998-.005L26 7.124zM6.001 21.566L6 24.876l19.998-.006.002-3.308zM6.001 14.341L6 17.65l19.998-.004.002-3.309z"
                        })
                    })
                },
                T = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        stroke: t,
                        fill: t,
                        strokeWidth: "0",
                        viewBox: "0 0 512 512",
                        height: "24px",
                        width: "24px",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("path", {
                            d: "M412.19 118.66a109.27 109.27 0 01-9.45-5.5 132.87 132.87 0 01-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69 0 .52-.05 1-.08 1.56 0 .23 0 .47-.05.71v.18a70 70 0 01-35.22 55.56 68.8 68.8 0 01-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0121.41 3.39l.1-83.94a153.14 153.14 0 00-118 34.52 161.79 161.79 0 00-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 00115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34 7.66-.31 33.32 0 62.46-13.81 32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0027.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61z"
                        })
                    })
                },
                L = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.BX)("svg", {
                        width: "24",
                        height: "25",
                        viewBox: "0 0 24 25",
                        fill: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.tZ)("g", {
                            clipPath: "url(#clip0_2146_10797)",
                            children: (0, i.tZ)("path", {
                                d: "M7.2933 20.0622V9.30058H3.70192V20.0622H7.29367H7.2933ZM5.49836 7.83151C6.75048 7.83151 7.53002 7.00514 7.53002 5.97242C7.50658 4.91616 6.75048 4.11285 5.52217 4.11285C4.29302 4.11285 3.49023 4.91616 3.49023 5.97232C3.49023 7.00505 4.26948 7.83142 5.47483 7.83142H5.49808L5.49836 7.83151ZM9.28117 20.0622H12.8723V14.0531C12.8723 13.7319 12.8957 13.4098 12.9906 13.1804C13.2501 12.5375 13.841 11.872 14.8333 11.872C16.1325 11.872 16.6525 12.8588 16.6525 14.3057V20.0622H20.2435V13.8918C20.2435 10.5864 18.472 9.04828 16.1093 9.04828C14.1721 9.04828 13.3213 10.1267 12.8486 10.8612H12.8725V9.30096H9.28136C9.32823 10.3105 9.28108 20.0626 9.28108 20.0626L9.28117 20.0622Z",
                                fill: "#100F0D"
                            })
                        }), (0, i.tZ)("defs", {
                            children: (0, i.tZ)("clipPath", {
                                id: "clip0_2146_10797",
                                children: (0, i.tZ)("rect", {
                                    width: "24",
                                    height: "24",
                                    fill: "white",
                                    transform: "translate(0 0.00976562)"
                                })
                            })
                        })]
                    })
                },
                C = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("g", {
                            id: "Frame",
                            clipPath: "url(#clip0_247_8893)",
                            children: (0, i.tZ)("path", {
                                id: "Vector",
                                d: "M12.0213 11.0728L14.8767 13.9275L13.9333 14.8708L11.0787 12.0155C10.0165 12.8669 8.69532 13.3301 7.33398 13.3281C4.02198 13.3281 1.33398 10.6401 1.33398 7.32812C1.33398 4.01613 4.02198 1.32812 7.33398 1.32812C10.646 1.32812 13.334 4.01613 13.334 7.32812C13.3359 8.68946 12.8728 10.0106 12.0213 11.0728ZM10.684 10.5781C11.5301 9.70805 12.0026 8.54174 12.0007 7.32812C12.0007 4.74946 9.91198 2.66146 7.33398 2.66146C4.75532 2.66146 2.66732 4.74946 2.66732 7.32812C2.66732 9.90613 4.75532 11.9948 7.33398 11.9948C8.5476 11.9967 9.71391 11.5242 10.584 10.6781L10.684 10.5781Z",
                                fill: t
                            })
                        })
                    })
                },
                Z = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.BX)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.tZ)("rect", {
                            x: "0.5",
                            y: "-0.5",
                            width: "23",
                            height: "23",
                            rx: "3.5",
                            transform: "matrix(1 0 0 -1 0 23)",
                            fill: t
                        }), (0, i.tZ)("path", {
                            d: "M18 11.5377L12 8L6 11.5377L6 13.9151L11.9388 10.4623L18 14L18 11.5377Z",
                            fill: "white"
                        }), (0, i.tZ)("rect", {
                            x: "0.5",
                            y: "-0.5",
                            width: "23",
                            height: "23",
                            rx: "3.5",
                            transform: "matrix(1 0 0 -1 0 23)",
                            stroke: t
                        })]
                    })
                },
                W = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.BX)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.tZ)("rect", {
                            x: "0.5",
                            y: "0.5",
                            width: "23",
                            height: "23",
                            rx: "3.5",
                            fill: "#F9F9F9"
                        }), (0, i.tZ)("path", {
                            d: "M18 12.4623L12 16L6 12.4623L6 10.0849L11.9388 13.5377L18 10L18 12.4623Z",
                            fill: t
                        }), (0, i.tZ)("rect", {
                            x: "0.5",
                            y: "0.5",
                            width: "23",
                            height: "23",
                            rx: "3.5",
                            stroke: t
                        })]
                    })
                },
                E = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.BX)("svg", {
                        "aria-hidden": !0,
                        fill: "none",
                        height: "14",
                        role: "img",
                        viewBox: "0 0 14 14",
                        width: "14",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.tZ)("path", {
                            d: "M7.0013 1.31579V12.6842",
                            stroke: t,
                            strokeWidth: "2",
                            strokeLinecap: "square"
                        }), (0, i.tZ)("path", {
                            d: "M13 6.99999H1",
                            stroke: t,
                            strokeWidth: "2",
                            strokeLinecap: "square"
                        })]
                    })
                },
                I = () => (0, i.tZ)("svg", {
                    width: "24",
                    height: "25",
                    viewBox: "0 0 24 25",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.tZ)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 2.02759C7.58172 2.02759 4 5.60931 4 10.0276V13.0276C2.89543 13.0276 2 13.923 2 15.0276V19.0276C2 20.1322 2.89543 21.0276 4 21.0276H8V13.0276H6V10.0276C6 6.71388 8.68629 4.02759 12 4.02759C15.3137 4.02759 18 6.71388 18 10.0276V13.0276H16V21.0276H20C21.1046 21.0276 22 20.1322 22 19.0276V15.0276C22 13.923 21.1046 13.0276 20 13.0276V10.0276C20 5.60931 16.4183 2.02759 12 2.02759ZM6 15.0276V19.0276H4V15.0276H6ZM18 15.0276V19.0276H20V15.0276H18Z",
                        fill: "black"
                    })
                }),
                B = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.5 8.5C8.5 6.567 10.067 5 12 5C13.933 5 15.5 6.567 15.5 8.5C15.5 10.433 13.933 12 12 12C10.067 12 8.5 10.433 8.5 8.5ZM15.5274 12.7201C16.7331 11.7112 17.5 10.1951 17.5 8.5C17.5 5.46243 15.0376 3 12 3C8.96243 3 6.5 5.46243 6.5 8.5C6.5 10.1951 7.26687 11.7112 8.4726 12.7201C7.41347 13.1713 6.45048 13.8216 5.63604 14.636C4.80031 15.4718 4.13738 16.4639 3.68508 17.5559C3.23279 18.6478 3 19.8181 3 21H5C5 20.0807 5.18106 19.1705 5.53284 18.3212C5.88463 17.4719 6.40024 16.7003 7.05025 16.0503C7.70026 15.4002 8.47194 14.8846 9.32122 14.5328C10.1705 14.1811 11.0807 14 12 14C12.9193 14 13.8295 14.1811 14.6788 14.5328C15.5281 14.8846 16.2997 15.4002 16.9497 16.0503C17.5998 16.7003 18.1154 17.4719 18.4672 18.3212C18.8189 19.1705 19 20.0807 19 21H21C21 19.8181 20.7672 18.6478 20.3149 17.5558C19.8626 16.4639 19.1997 15.4718 18.364 14.636C17.5495 13.8216 16.5865 13.1713 15.5274 12.7201Z",
                            fill: t
                        })
                    })
                },
                R = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("g", {
                            id: "Account",
                            children: (0, i.tZ)("g", {
                                id: "Account_2",
                                children: (0, i.tZ)("path", {
                                    id: "Union",
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M9.23013 11.0216C8.17739 10.1974 7.5 8.91504 7.5 7.47656C7.5 4.99406 9.5175 2.97656 12 2.97656C14.4825 2.97656 16.5 4.99406 16.5 7.47656C16.5 8.92152 15.8165 10.2089 14.7556 11.0327C17.9231 12.2555 21 15.4288 21 18.749C21 18.9478 20.9212 19.139 20.7787 19.2778C19.62 20.4366 16.7513 20.9991 12 20.9991C7.24875 20.9991 4.37625 20.4366 3.22125 19.2778C3.07875 19.1353 3 18.9478 3 18.749C3 16.7653 3.88875 14.8228 5.50125 13.2853C6.5543 12.2805 7.86903 11.4975 9.23013 11.0216Z",
                                    fill: t
                                })
                            })
                        })
                    })
                },
                _ = () => (0, i.BX)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.tZ)("path", {
                        d: "M4.28332 3.22035L3.22266 4.28101L19.7239 20.7822L20.7845 19.7216L4.28332 3.22035Z",
                        fill: "black"
                    }), (0, i.tZ)("path", {
                        d: "M19.7239 3.21777L3.22266 19.719L4.28332 20.7797L20.7845 4.27843L19.7239 3.21777Z",
                        fill: "black"
                    })]
                }),
                O = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("g", {
                            id: "Buy",
                            children: (0, i.tZ)("g", {
                                id: "Group",
                                children: (0, i.tZ)("path", {
                                    id: "Union",
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M12.7498 3.69006C12.6861 1.67902 11.0278 0.0600586 9.00171 0.0600586C6.97561 0.0600586 5.31728 1.67902 5.25361 3.69006H1.8279C1.4379 3.69006 1.11165 3.99006 1.08165 4.38006L0.087904 17.1301C0.072904 17.3363 0.144154 17.5426 0.286654 17.6963C0.429154 17.8501 0.627904 17.9363 0.837904 17.9363H17.1579C17.3679 17.9363 17.5667 17.8501 17.7092 17.6963C17.8517 17.5426 17.9229 17.3401 17.9079 17.1301L16.9142 4.38006C16.8842 3.99006 16.5579 3.69006 16.1679 3.69006H12.7498ZM11.2517 8.25005H12.7517V5.18631H15.4779L16.3554 16.4363H1.6479L2.5254 5.18631H5.25171V8.25005H6.75171V5.18631H11.2517V8.25005ZM6.75487 3.69006H11.2486C11.186 2.50445 10.2027 1.56006 9.00171 1.56006C7.80071 1.56006 6.81738 2.50445 6.75487 3.69006Z",
                                    fill: t
                                })
                            })
                        })
                    })
                },
                H = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        stroke: t,
                        fill: t,
                        strokeWidth: "0",
                        viewBox: "0 0 448 512",
                        height: "24px",
                        width: "24px",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("g", {
                            transform: "matrix(19.75809669494629, 0, 0, 19.75809669494629, -12.868927955627441, 14.504806518554688)",
                            children: (0, i.tZ)("path", {
                                d: "M12.2,24L12.2,24c-3.6,0-6.3-1.2-8.2-3.5c-1.6-2.1-2.5-4.9-2.5-8.5v0c0-3.6,0.9-6.4,2.5-8.5 C5.8,1.2,8.6,0,12.2,0h0h0c2.7,0,5,0.7,6.8,2.1c1.7,1.3,2.9,3.1,3.5,5.5l-2,0.6c-1.1-4-3.9-6-8.3-6c-2.9,0-5.1,0.9-6.5,2.7 c-1.3,1.7-2,4.1-2.1,7.2c0,3.1,0.7,5.5,2.1,7.2c1.4,1.8,3.6,2.7,6.5,2.7c2.6,0,4.4-0.6,5.8-2c1.6-1.6,1.6-3.6,1.1-4.8 c-0.3-0.7-0.9-1.3-1.6-1.7c-0.2,1.4-0.6,2.4-1.3,3.3c-0.9,1.1-2.1,1.7-3.7,1.8c-1.2,0.1-2.4-0.2-3.3-0.8c-1.1-0.7-1.7-1.7-1.8-3 c-0.1-1.2,0.4-2.3,1.3-3.1c0.9-0.8,2.1-1.2,3.6-1.3c1.1-0.1,2.1,0,3,0.1C15.2,9.6,15,9,14.6,8.6c-0.5-0.6-1.3-0.9-2.4-0.9 c0,0,0,0,0,0c-0.8,0-2,0.2-2.7,1.3L7.7,7.8c1-1.5,2.6-2.3,4.5-2.3c0,0,0,0,0,0c3.2,0,5.1,2,5.3,5.4c0.1,0,0.2,0.1,0.3,0.1 c1.5,0.7,2.6,1.8,3.2,3.1c0.8,1.8,0.9,4.8-1.5,7.2C17.6,23.2,15.4,24,12.2,24L12.2,24L12.2,24z M13.2,12.3c-0.2,0-0.5,0-0.7,0 c-1.8,0.1-3,0.9-2.9,2.1c0.1,1.3,1.5,1.8,2.8,1.8c1.2-0.1,2.8-0.5,3.1-3.7C14.7,12.4,14,12.3,13.2,12.3z"
                            })
                        })
                    })
                },
                A = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 22 22",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("g", {
                            id: "Ticket",
                            children: (0, i.tZ)("path", {
                                id: "Union",
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M0.5 13.3589L13.3591 0.5L14.3212 1.46215C14.3219 1.46154 14.3225 1.46093 14.3231 1.46033L15.3953 2.5325C14.8573 3.07048 14.5504 3.81305 14.5504 4.57076C14.5504 5.33606 14.8497 6.05589 15.399 6.60145C15.9446 7.14701 16.6645 7.4501 17.426 7.4501C18.1837 7.4501 18.9301 7.13943 19.4681 6.60145L20.5402 7.67362C20.5389 7.67491 20.5377 7.6762 20.5364 7.67749L21.5 8.64109L8.64089 21.5L7.67687 20.536L7.66958 20.5396L7.67506 20.5342L6.60497 19.4637C7.14296 18.9257 7.44984 18.1831 7.44984 17.4254C7.44984 16.6601 7.15053 15.9403 6.60118 15.3947C6.05561 14.8492 5.33577 14.5461 4.57425 14.5461C3.81652 14.5461 3.07016 14.8567 2.53217 15.3947L1.45999 14.3226L1.46182 14.3207L0.5 13.3589ZM19.6239 8.37398C18.9598 8.75568 18.199 8.96553 17.4298 8.96553L17.4222 8.96932C16.2553 8.96932 15.1528 8.5109 14.3231 7.67741C13.4896 6.84392 13.0311 5.74144 13.0311 4.57076C13.0311 3.80398 13.2367 3.04879 13.6137 2.38852L8.55994 7.44223L14.5128 13.485L19.6239 8.37398ZM7.48832 8.51384L13.4412 14.5566L8.369 19.6287C8.75238 18.9644 8.96151 18.2027 8.96151 17.4292C8.96151 16.2585 8.50308 15.156 7.66958 14.3226C6.83986 13.4891 5.73737 13.0306 4.57047 13.0306C3.8045 13.0306 3.04685 13.2387 2.3847 13.6174L7.48832 8.51384Z",
                                fill: t
                            })
                        })
                    })
                },
                F = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        fill: "none",
                        height: "17",
                        role: "img",
                        viewBox: "0 0 1200 1227",
                        width: "20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("path", {
                            d: "M 714.163025 519.283997 L 1160.890015 0 L 1055.030029 0 L 667.137024 450.886963 L 357.328003 0 L 0 0 L 468.492004 681.820984 L 0 1226.369995 L 105.865997 1226.369995 L 515.491028 750.218018 L 842.671997 1226.369995 L 1200 1226.369995 L 714.137024 519.283997 L 714.163025 519.283997 Z M 569.164978 687.828003 L 521.697021 619.934021 L 144.011002 79.694336 L 306.61499 79.694336 L 611.411987 515.684998 L 658.880005 583.578979 L 1055.079956 1150.300049 L 892.476013 1150.300049 L 569.164978 687.854004 L 569.164978 687.828003 Z",
                            fill: t,
                            stroke: "black",
                            strokeWidth: "0.015625"
                        })
                    })
                },
                P = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.314 20.899L18.031 16.617C19.3082 15.0237 20.0029 13.042 20 11C20 6.032 15.968 2 11 2C6.032 2 2 6.032 2 11C2 15.968 6.032 20 11 20C13.042 20.0029 15.0237 19.3082 16.617 18.031L20.899 22.314L22.314 20.899ZM18 11C18.0029 12.8204 17.2941 14.5699 16.025 15.875L15.875 16.025C14.5699 17.2941 12.8204 18.0029 11 18C7.132 18 4 14.867 4 11C4 7.132 7.132 4 11 4C14.867 4 18 7.132 18 11Z",
                            fill: t
                        })
                    })
                },
                X = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.BX)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11 6H13V11.5858L16.2071 14.7929L14.7929 16.2071L11 12.4142V6Z",
                            fill: t
                        }), (0, i.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
                            fill: t
                        })]
                    })
                },
                D = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.BX)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M17.2463 19.4849L12 16.1774L12 14.4036L16.5 17.2427L16.5 4.49986L18 4.49986L18 17.2297L22.5 14.3699L22.5 16.1474L17.2463 19.4849Z",
                            fill: t
                        }), (0, i.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7.55615 19.5L6.05615 19.5L6.05615 6.7572L1.55615 9.61501L1.55615 7.84126L6.81365 4.50001L12.0562 7.80751L12.0562 9.58125L7.55615 6.74017L7.55615 19.5Z",
                            fill: t
                        })]
                    })
                },
                N = e => {
                    let {
                        color: t = d,
                        background: n = r.O9.blue
                    } = e;
                    return (0, i.BX)("svg", {
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.tZ)("path", {
                            d: "M0 2C0 0.895431 0.895431 0 2 0H30C31.1046 0 32 0.895431 32 2V30C32 31.1046 31.1046 32 30 32H2C0.895431 32 0 31.1046 0 30V2Z",
                            fill: n
                        }), (0, i.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M20 16L12 20L12 12L20 16Z",
                            fill: t
                        })]
                    })
                },
                G = e => {
                    let {
                        color: t = d
                    } = e;
                    return (0, i.tZ)("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7.33333V2H8.66668V3.33333H11.7233L6.52868 8.52867L7.47134 9.47133L12.6667 4.27533V7.33333H14ZM6.66667 5.33333V4H2.66667C2.29848 4 2 4.29848 2 4.66667V13.3333C2 13.7015 2.29848 14 2.66667 14H11.3333C11.7015 14 12 13.7015 12 13.3333V9.33333H10.6667V12.6667H3.33333V5.33333H6.66667Z",
                            fill: t
                        })
                    })
                }
        },
        92765: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var i = n(35944),
                l = n(11163);
            n(67294);
            let a = (e, t) => !e.startsWith("mailto") && (!e.startsWith("http") || t.some(t => e.includes(t)) && !e.startsWith("http")),
                o = (e, t) => {
                    if (e.startsWith("mailto")) return e;
                    let n = new URL(e),
                        i = new URLSearchParams(n.search.slice(1));
                    Object.entries(t).filter(e => {
                        let [t] = e;
                        return !i.has(t)
                    }).forEach(e => {
                        let [t, n] = e;
                        return i.append(t, n)
                    });
                    let l = n.pathname.length > 1 ? n.pathname : "";
                    return [n.origin, l, Array.from(i).length && "?".concat(i.toString()), n.hash].filter(Boolean).join("")
                },
                r = (e, t) => Object.fromEntries(Object.entries(e).filter(e => {
                    let [n] = e;
                    return t.includes(n)
                })),
                d = (e, t) => {
                    let [n, i] = e.split(/(?:\?|%3F)/), l = new URLSearchParams(i);
                    Object.entries(t).filter(e => {
                        let [t] = e;
                        return !l.has(t)
                    }).forEach(e => {
                        let [t, n] = e;
                        return l.append(t, n)
                    });
                    let a = n.startsWith("http") || n.startsWith("/") || n.startsWith("mailto") || n.startsWith("javascript") ? n : "/".concat(n),
                        o = Array.from(l).length ? "?".concat(l.toString()) : "";
                    return "".concat(a).concat(o)
                };
            var c = e => {
                let {
                    nextLinkWildCards: t = ["/topics/", "/olympic-games/", "/news/"],
                    className: n = "",
                    children: c,
                    preserveQueryParams: s = ["displayAsWebViewlight", "displayAsWebViewdark", "displayAsWebView", "AnonymousID"],
                    ...u
                } = e, m = (0, l.useRouter)(), {
                    href: g
                } = u;
                if (!g) return (0, i.tZ)("span", {
                    className: n,
                    children: c
                });
                let p = a(g, t),
                    h = s.length && (null == m ? void 0 : m.query) ? { ...u,
                        href: p ? d(g, r(m.query, s)) : o(g, r(m.query, s))
                    } : u;
                return (0, i.tZ)("a", {
                    "data-cy": "link",
                    className: n,
                    ...h,
                    children: c
                })
            }
        },
        71001: function(e, t, n) {
            var i, l, a, o;
            n.d(t, {
                BD: function() {
                    return i
                },
                OL: function() {
                    return r
                },
                pG: function() {
                    return l
                },
                rH: function() {
                    return d
                }
            }), (a = i || (i = {})).apiIntegration = "api", a.widgetIntegration = "widget", a.staticIntegration = "static", a.carouselIntegration = "carousel", (o = l || (l = {})).base = "t_16-9_320", o.big = "t_p2024_mrh_logo_big";
            let r = {
                    maxItems: 3,
                    maxTitleCharacters: 33,
                    truncateTitle: !0,
                    truncateItems: !0
                },
                d = "mrh-results"
        },
        73803: function(e, t, n) {
            n.d(t, {
                Hq: function() {
                    return g
                },
                nV: function() {
                    return nq
                },
                ZP: function() {
                    return nJ
                }
            });
            var i, l, a, o, r, d, c, s, u, m, g, p = n(35944),
                h = n(67294),
                v = n(66194),
                f = n(43355),
                y = n(82021),
                b = n(94184),
                S = n.n(b),
                w = n(77986);
            let M = w.styled.div.withConfig({
                    componentId: "sc-b0680aac-0"
                })(["overflow:hidden;position:relative;width:100%;& > div{height:100%;position:absolute;width:100%;}aspect-ratio:375/272;max-height:27.2rem;", "{aspect-ratio:1440/360;max-height:36rem;}"], (0, v.TE)(v.u3.MD)),
                k = w.styled.section.withConfig({
                    componentId: "sc-b0680aac-1"
                })(["img,svg{height:100%;left:0;position:absolute;top:0;width:100%;}"]),
                x = w.styled.div.withConfig({
                    componentId: "sc-b0680aac-2"
                })(["img{", "{object-fit:cover;}}"], (0, v.TE)(v.u3.XL)),
                T = w.styled.div.withConfig({
                    componentId: "sc-b0680aac-3"
                })(["left:0;transform:scaleX(2.5);transform-origin:left;"]),
                L = w.styled.div.withConfig({
                    componentId: "sc-b0680aac-4"
                })(["right:0;transform:scaleX(2.5);transform-origin:right;"]);
            var C = {
                Animation: M,
                Center: x,
                Bottom: w.styled.div.withConfig({
                    componentId: "sc-b0680aac-5"
                })(["transform:translateY(0%) scaleY(2.5);transform-origin:top;"]),
                Left: L,
                Right: T,
                Top: w.styled.div.withConfig({
                    componentId: "sc-b0680aac-6"
                })(["transform:translateY(0%) scaleY(2.5);transform-origin:bottom;"]),
                Wrapper: k
            };
            n(96846), (i = d || (d = {})).normal = "normal", i.interface = "interface", i.banner = "banner";
            let Z = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return "translate".concat(t, "(").concat(n ? "-" : "").concat(125 * e, "%) scale").concat(t, "(2.5)")
                },
                W = e => {
                    var t, n, i;
                    let {
                        top: l,
                        height: a
                    } = (null == e ? void 0 : e.getBoundingClientRect()) || {}, o = null === (n = document) || void 0 === n ? void 0 : null === (t = n.getElementById("header-adv-banner")) || void 0 === t ? void 0 : t.getBoundingClientRect(), r = Math.max(Math.min(((null !== (i = null == o ? void 0 : o.height) && void 0 !== i ? i : 0) - l) / a, 1.2), 0);
                    return {
                        leftT: Z(r, "X"),
                        rightT: Z(r, "X", !0),
                        topT: Z(r, "Y"),
                        bottomT: Z(r, "Y", !0)
                    }
                };
            var E = () => {
                    let e = (0, h.useRef)(null),
                        t = (0, h.useRef)(null),
                        n = (0, h.useRef)(null),
                        i = (0, h.useRef)(null),
                        l = (0, h.useRef)(null),
                        a = (0, w.useTheme)();
                    return (0, h.useEffect)(() => {
                        let a = () => {
                            if (n.current && t.current && l.current && i.current && e.current) {
                                let {
                                    leftT: a,
                                    rightT: o,
                                    topT: r,
                                    bottomT: d
                                } = W(e.current);
                                n.current.style.transform = a, t.current.style.transform = o, l.current.style.transform = r, i.current.style.transform = d
                            }
                        };
                        return a(), window.addEventListener("resize", a), window.addEventListener("scroll", a), () => {
                            window.removeEventListener("resize", a), window.removeEventListener("scroll", a)
                        }
                    }, []), (0, p.tZ)(C.Wrapper, {
                        id: "animation-wrapper",
                        children: (0, p.BX)(C.Animation, {
                            ref: e,
                            children: [(0, p.tZ)(C.Center, {
                                "aria-hidden": "true",
                                $animationType: d.interface,
                                children: (0, p.BX)("picture", {
                                    children: [(0, p.tZ)("source", {
                                        srcSet: "https://gstatic.olympics.com/s1/f_auto/static/srm/paris-2024/topic-assets/paris-2024/animation/header/center.svg",
                                        media: "(min-width: ".concat(a.breakpoints.md, ")")
                                    }), (0, p.tZ)("img", {
                                        src: "https://gstatic.olympics.com/s1/f_auto/static/srm/paris-2024/topic-assets/paris-2024/animation/header/mobile/center.svg",
                                        alt: "",
                                        "data-cy": "center-animation"
                                    })]
                                })
                            }), (0, p.tZ)(C.Right, {
                                ref: t,
                                "aria-hidden": "true",
                                children: (0, p.BX)("picture", {
                                    children: [(0, p.tZ)("source", {
                                        srcSet: "https://gstatic.olympics.com/s1/f_auto/static/srm/paris-2024/topic-assets/paris-2024/animation/header/right.svg",
                                        media: "(min-width: ".concat(a.breakpoints.md, ")")
                                    }), (0, p.tZ)("img", {
                                        src: "https://gstatic.olympics.com/s1/f_auto/static/srm/paris-2024/topic-assets/paris-2024/animation/header/mobile/right.svg",
                                        alt: "",
                                        "data-cy": "right-animation"
                                    })]
                                })
                            }), (0, p.tZ)(C.Left, {
                                ref: n,
                                "aria-hidden": "true",
                                children: (0, p.BX)("picture", {
                                    children: [(0, p.tZ)("source", {
                                        srcSet: "https://gstatic.olympics.com/s1/f_auto/static/srm/paris-2024/topic-assets/paris-2024/animation/header/left.svg",
                                        media: "(min-width: ".concat(a.breakpoints.md, ")")
                                    }), (0, p.tZ)("img", {
                                        src: "https://gstatic.olympics.com/s1/f_auto/static/srm/paris-2024/topic-assets/paris-2024/animation/header/mobile/left.svg",
                                        alt: "",
                                        "data-cy": "left-animation"
                                    })]
                                })
                            }), (0, p.tZ)(C.Bottom, {
                                ref: i,
                                "aria-hidden": "true",
                                children: (0, p.BX)("picture", {
                                    children: [(0, p.tZ)("source", {
                                        srcSet: "https://gstatic.olympics.com/s1/f_auto/static/srm/paris-2024/topic-assets/paris-2024/animation/header/bottom.svg",
                                        media: "(min-width: ".concat(a.breakpoints.md, ")")
                                    }), (0, p.tZ)("img", {
                                        src: "https://gstatic.olympics.com/s1/f_auto/static/srm/paris-2024/topic-assets/paris-2024/animation/header/mobile/bottom.svg",
                                        alt: "",
                                        "data-cy": "bottom-animation"
                                    })]
                                })
                            }), (0, p.tZ)(C.Top, {
                                ref: l,
                                "aria-hidden": "true",
                                children: (0, p.BX)("picture", {
                                    children: [(0, p.tZ)("source", {
                                        srcSet: "https://gstatic.olympics.com/s1/f_auto/static/srm/paris-2024/topic-assets/paris-2024/animation/header/top.svg",
                                        media: "(min-width: ".concat(a.breakpoints.md, ")")
                                    }), (0, p.tZ)("img", {
                                        src: "https://gstatic.olympics.com/s1/f_auto/static/srm/paris-2024/topic-assets/paris-2024/animation/header/mobile/top.svg",
                                        alt: "",
                                        "data-cy": "top-animation"
                                    })]
                                })
                            })]
                        })
                    })
                },
                I = n(94698),
                B = n(11589);
            let R = w.styled.div.withConfig({
                    componentId: "sc-f43451b5-0"
                })(["align-items:center;box-sizing:border-box;display:flex;flex-direction:column;height:100%;justify-content:space-between;padding:", "rem ", "rem;width:100%;", "{width:100%;}"], v.t8.S, v.t8.XS, (0, v.TE)(v.u3.LG)),
                _ = w.styled.div.withConfig({
                    componentId: "sc-f43451b5-1"
                })(["aspect-ratio:375/272;max-width:100vw;height:27.2rem;", "{aspect-ratio:1440/360;height:36rem;}"], (0, v.TE)(v.u3.MD)),
                O = w.styled.header.withConfig({
                    componentId: "sc-f43451b5-2"
                })(["align-items:center;background-size:cover;box-sizing:border-box;display:flex;justify-content:center;padding:0;z-index:13;aspect-ratio:375/272;max-height:27.2rem;width:100%;", "{max-height:27.2rem;}", "{aspect-ratio:1440/360;max-height:36rem;", "{max-height:36rem;}}", "{", "{padding:", "rem;}}&.-sticky{background-image:url('https://gstatic.olympics.com/s1/f_auto/static/srm/paris-2024/topic-assets/paris-2024/sticky-header/blue/d01.svg');background-position:center bottom;height:", "rem;position:sticky;top:", ";width:100%;", "{height:", "rem;justify-content:center;}", "{aspect-ratio:1440/88;height:", "rem;top:", ";", "{height:fit-content;justify-content:center;}}}"], R, (0, v.TE)(v.u3.MD), R, (0, v.TE)(v.u3.LG), R, v.t8.S, v.t8.Spacing09, e => {
                    let {
                        $isAdvStatic: t
                    } = e;
                    return t ? "0" : "8.2rem"
                }, R, v.t8.Spacing09, (0, v.TE)(v.u3.MD), v.t8.Spacing11, e => {
                    let {
                        $isAdvStatic: t
                    } = e;
                    return t ? "0" : "12.2rem"
                }, R),
                H = w.styled.a.withConfig({
                    componentId: "sc-f43451b5-3"
                })(["border:0;clip:rect(0,0,0,0);height:0.1rem;left:0;overflow:hidden;padding:0;position:absolute;top:0;white-space:nowrap;width:0.1rem;font-family:", ";font-size:15px;", ";", "{display:block;font-size:20px;}&:focus{background-color:", ";clip:auto;color:", ";height:auto;margin:0.2rem;outline:0.2rem solid ", ";overflow:visible;padding:", "rem;position:fixed;white-space:normal;width:auto;z-index:99999;}"], v.Rq.olympicSans, e => {
                    let {
                        $largeOnly: t
                    } = e;
                    return t && (0, w.css)(["display:none;"])
                }, (0, v.TE)(v.u3.LG), v.O9.black, v.O9.white, v.O9.white, v.t8.XXS),
                A = w.styled.div.withConfig({
                    componentId: "sc-f43451b5-4"
                })(["height:fit-content;width:100%;z-index:1;"]),
                F = w.styled.div.withConfig({
                    componentId: "sc-f43451b5-5"
                })(["display:flex;justify-content:center;text-transform:uppercase;width:100%;span{color:", ";font-weight:700;text-align:center;}"], v.O9.white),
                P = w.styled.div.withConfig({
                    componentId: "sc-f43451b5-6"
                })(["display:flex;justify-content:center;margin-top:0.4rem;width:100%;z-index:1;h2,h1{color:", ";font-size:", ";line-height:", ";text-align:center;}"], v.O9.white, e => {
                    let {
                        $fontSize: t
                    } = e;
                    return t
                }, e => {
                    let {
                        $lineHeight: t
                    } = e;
                    return t
                }),
                X = w.styled.div.withConfig({
                    componentId: "sc-f43451b5-7"
                })(["align-items:center;background-color:", ";border-radius:4px;box-sizing:border-box;display:flex;flex-shrink:0;gap:0.4rem;max-width:100%;min-height:", "rem;overflow-x:auto;padding:0.4rem;width:fit-content;z-index:0;", "{min-height:", "rem;}"], v.O9.black, v.t8.Spacing05, (0, v.TE)(v.u3.XL), v.t8.Spacing06),
                D = w.styled.div.withConfig({
                    componentId: "sc-f43451b5-8"
                })(["min-height:", "rem;"], v.t8.Spacing05),
                N = (0, w.styled)(f.Z).withConfig({
                    componentId: "sc-f43451b5-9"
                })(["border-radius:0.4rem;color:", ";font-weight:700;height:fit-content;padding:0.6rem ", "rem;text-align:center;text-transform:uppercase;white-space:nowrap;&:hover{background-color:", ";}", ";"], v.O9.white, v.t8.XXS, e => {
                    var t;
                    let {
                        theme: n
                    } = e;
                    return null === (t = n.colors) || void 0 === t ? void 0 : t.linkSecondary
                }, e => {
                    var t;
                    let {
                        $active: n,
                        theme: i
                    } = e;
                    return n && (0, w.css)(["background-color:", ";"], null === (t = i.colors) || void 0 === t ? void 0 : t.linkSecondary)
                }),
                G = w.styled.div.withConfig({
                    componentId: "sc-f43451b5-10"
                })(["height:0rem;position:sticky;z-index:0;"]),
                K = w.styled.h2.withConfig({
                    componentId: "sc-f43451b5-11"
                })(["border:0;clip:rect(0,0,0,0);clip-path:inset(50%);height:0.1rem;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:0.1rem;"]),
                z = w.styled.div.withConfig({
                    componentId: "sc-f43451b5-12"
                })(["display:flex;gap:", "rem;#p2024-user-header-mobile{display:flex;", "{display:none;}}"], v.t8.XXS, (0, v.TE)(v.u3.LG)),
                U = (0, w.styled)(f.Z).withConfig({
                    componentId: "sc-f43451b5-13"
                })(["align-items:center;display:flex;font-weight:700;text-transform:uppercase;"]),
                V = (0, w.styled)(f.Z).withConfig({
                    componentId: "sc-f43451b5-14"
                })(["align-items:center;background-color:", ";border:none;border-radius:5.8rem;box-sizing:border-box;cursor:pointer;display:flex;font-weight:700;height:", "rem;justify-content:center;padding:0 ", "rem;text-transform:uppercase;white-space:nowrap;z-index:1;", "{font-size:1.1rem;padding:0 ", "rem;}"], v.O9.white, v.t8.Spacing05, v.t8.XS, (0, v.__)(v.u3.LG, v.u3.XL), v.t8.XXS);
            var j = {
                    AnimationWrapper: G,
                    StickySpacing: _,
                    HeaderWrapper: O,
                    HeaderContent: R,
                    SkipToLink: H,
                    RooflineContainter: A,
                    RooflineWrapper: F,
                    TitleWrapper: P,
                    InterfaceContainer: X,
                    InterfacePlaceholder: D,
                    InterfaceButton: N,
                    ScreenReaderOnlyH2: K,
                    ButtonGroup: z,
                    ButtonText: U,
                    LinkButton: V,
                    MergedTitleContainer: w.styled.div.withConfig({
                        componentId: "sc-f43451b5-15"
                    })(["position:relative;h1{color:", ";display:flex;flex-direction:column;margin:0;text-align:center;text-transform:uppercase;z-index:1;span{color:", ";&.roofline{font-weight:700;width:100%;}&.title{font-size:", ";line-height:", ";margin-top:0.4rem;width:100%;}}}"], v.O9.white, v.O9.white, e => {
                        let {
                            $fontSize: t
                        } = e;
                        return t
                    }, e => {
                        let {
                            $lineHeight: t
                        } = e;
                        return t
                    }),
                    HiddenDash: w.styled.span.withConfig({
                        componentId: "sc-f43451b5-16"
                    })(["height:0;opacity:0;"]),
                    QuickLinksWrapper: w.styled.div.withConfig({
                        componentId: "sc-f43451b5-17"
                    })(["align-items:center;display:flex;gap:0.8rem;justify-content:center;"])
                },
                q = n(57634),
                J = n(47312);
            let Y = w.styled.div.withConfig({
                    componentId: "sc-8bc408a4-0"
                })(["align-items:flex-start;box-sizing:border-box;display:flex;justify-content:space-between;width:100%;"]),
                $ = w.styled.div.withConfig({
                    componentId: "sc-8bc408a4-1"
                })(["align-items:center;display:flex;gap:", "rem;justify-content:center;width:calc(100% / 3);", "{#p2024-user-header,#p2024-user-header-mobile{position:relative;}}"], v.t8.XXS, (0, v.TE)(v.u3.LG)),
                Q = (0, w.styled)($).withConfig({
                    componentId: "sc-8bc408a4-2"
                })(["justify-content:left;html[dir='rtl'] &,div[dir='rtl'] &{justify-content:right;}"]),
                ee = (0, w.styled)($).withConfig({
                    componentId: "sc-8bc408a4-3"
                })(["justify-content:right;html[dir='rtl'] &,div[dir='rtl'] &{justify-content:left;}"]);
            var et = {
                    TopbarWrapper: Y,
                    TopbarSection: $,
                    TopbarLeftSection: Q,
                    TopbarRightSection: ee,
                    EmblemLink: w.styled.a.withConfig({
                        componentId: "sc-8bc408a4-4"
                    })(["z-index:1;"]),
                    Logo: w.styled.img.withConfig({
                        componentId: "sc-8bc408a4-5"
                    })(["height:7rem;pointer-events:none;position:relative;width:auto;", "{", "}", "{height:", ";}"], (0, v.TE)(v.u3.LG), e => {
                        let {
                            $isSlimHeader: t
                        } = e;
                        return t && "height: 1.8rem;"
                    }, (0, v.TE)(v.u3.XL), e => {
                        let {
                            $isSlimHeader: t
                        } = e;
                        return t ? "1.8rem;" : "".concat(v.t8.Spacing13, "rem;")
                    }),
                    Nav: w.styled.nav.withConfig({
                        componentId: "sc-8bc408a4-6"
                    })(["z-index:1;"])
                },
                en = {
                    TopbarButton: w.styled.button.withConfig({
                        componentId: "sc-8f28a595-0"
                    })(["align-items:center;background-color:", ";border:none;border-radius:", ";cursor:pointer;display:flex;flex-shrink:", ";height:", "rem;justify-content:center;white-space:nowrap;width:", ";z-index:", ";span{color:", ";", "{font-size:1.1rem;}}", "{background-color:", ";}"], e => {
                        let {
                            $dark: t
                        } = e;
                        return t ? v.O9.graphiteGray : v.O9.white
                    }, e => {
                        let {
                            $isRounded: t
                        } = e;
                        return t ? "50%" : "5.8rem"
                    }, e => {
                        let {
                            $isRounded: t
                        } = e;
                        return t ? "0" : ""
                    }, v.t8.Spacing05, e => {
                        let {
                            $isRounded: t
                        } = e;
                        return t ? "".concat(v.t8.Spacing05, "rem") : ""
                    }, e => {
                        let {
                            $zIndex: t
                        } = e;
                        return "".concat(null != t ? t : 1)
                    }, e => {
                        let {
                            $dark: t
                        } = e;
                        return t ? v.O9.white : v.O9.black
                    }, (0, v.__)(v.u3.LG, v.u3.XL), (0, v.TE)(v.u3.LG), e => {
                        let {
                            $dark: t
                        } = e;
                        return t ? v.O9.black : v.O9.white
                    }),
                    TopbarButtonChild: w.styled.div.withConfig({
                        componentId: "sc-8f28a595-1"
                    })(["align-items:center;display:flex;padding:1rem ", "rem;pointer-events:none;", "{padding:1rem ", "rem;}"], v.t8.XS, (0, v.__)(v.u3.LG, v.u3.XL), v.t8.XXS)
                },
                ei = e => {
                    let {
                        children: t,
                        rounded: n,
                        dark: i,
                        id: l,
                        ariaLabel: a,
                        ariaExpanded: o,
                        zIndex: r,
                        dataCy: d = "topbar-button",
                        onClick: c,
                        dataTrackingPayload: s,
                        tag: u,
                        href: m
                    } = e;
                    return (0, p.tZ)(en.TopbarButton, {
                        $isRounded: n,
                        $dark: i,
                        onClick: c,
                        "data-cy": d,
                        id: l,
                        "aria-label": a,
                        "aria-expanded": o,
                        $zIndex: r,
                        "data-tracking": "click",
                        as: u,
                        href: m,
                        "data-tracking-payload": JSON.stringify({
                            module: null == s ? void 0 : s.module,
                            module_instance: null == s ? void 0 : s.moduleInstance,
                            link_tag: null == s ? void 0 : s.linkTag,
                            destination_url: null == s ? void 0 : s.destinationUrl,
                            entry_point_type: null == s ? void 0 : s.entryPointType,
                            entry_point_tag: null == s ? void 0 : s.entryPointTag
                        }),
                        children: (0, p.tZ)(en.TopbarButtonChild, {
                            children: t
                        })
                    })
                },
                el = n(6792),
                ea = n(58685);
            let eo = w.styled.div.withConfig({
                componentId: "sc-6c35a766-0"
            })(["align-items:left;color:", ";display:flex;flex-direction:column;justify-content:center;margin-top:8rem;padding:0 ", "rem 0 0 ", "rem;", ";"], e => {
                let {
                    theme: t
                } = e;
                return t.colors.text || v.O9.black
            }, v.t8.Spacing02, v.t8.Spacing02, e => {
                var t, n;
                let {
                    theme: i
                } = e;
                return null === (n = i.algoliaSearch) || void 0 === n ? void 0 : null === (t = n.customStyles) || void 0 === t ? void 0 : t.wrapper
            });
            var er = {
                    Wrapper: eo,
                    LogoWrapper: w.styled.div.withConfig({
                        componentId: "sc-6c35a766-1"
                    })(["align-items:center;display:flex;justify-content:center;margin-bottom:", ";"], e => {
                        var t, n, i, l, a;
                        let {
                            theme: o
                        } = e;
                        return null !== (a = null === (l = o.algoliaSearch) || void 0 === l ? void 0 : null === (i = l.customStyles) || void 0 === i ? void 0 : null === (n = i.margins) || void 0 === n ? void 0 : null === (t = n.logo) || void 0 === t ? void 0 : t.bottom) && void 0 !== a ? a : "".concat(v.t8.Spacing05, "rem")
                    }),
                    Logo: w.styled.img.withConfig({
                        componentId: "sc-6c35a766-2"
                    })(["height:4rem;", ";", "{height:4.8rem;", ";}"], e => {
                        var t, n, i;
                        let {
                            theme: l
                        } = e;
                        return null === (i = l.algoliaSearch) || void 0 === i ? void 0 : null === (n = i.customStyles) || void 0 === n ? void 0 : null === (t = n.logo) || void 0 === t ? void 0 : t.xs
                    }, (0, v.TE)(v.u3.LG), e => {
                        var t, n, i;
                        let {
                            theme: l
                        } = e;
                        return null === (i = l.algoliaSearch) || void 0 === i ? void 0 : null === (n = i.customStyles) || void 0 === n ? void 0 : null === (t = n.logo) || void 0 === t ? void 0 : t.lg
                    }),
                    SearchContainer: w.styled.div.withConfig({
                        componentId: "sc-6c35a766-3"
                    })(["display:flex;flex-direction:column;gap:", "rem;margin-bottom:", "rem;width:100%;"], v.t8.Spacing02, v.t8.Spacing03)
                },
                ed = n(25377),
                ec = n(93962),
                es = n(37386),
                eu = n(3),
                em = n(71629),
                eg = n(43386),
                ep = {
                    Wrapper: w.styled.div.withConfig({
                        componentId: "sc-40ed3212-0"
                    })(["display:flex;flex-direction:column;margin-bottom:", "rem;.empty-results-subtitle{margin-bottom:", "px;}.empty-results-disclaimer{color:", ";}"], v.t8.Spacing03, v.t8.Spacing01, e => {
                        var t, n, i;
                        let {
                            theme: l
                        } = e;
                        return null !== (i = null === (n = l.algoliaSearch) || void 0 === n ? void 0 : null === (t = n.colors) || void 0 === t ? void 0 : t.emptyResultDisclaimer) && void 0 !== i ? i : v.O9.black
                    })
                };
            let eh = (0, h.createContext)({
                translations: {},
                locale: "",
                gamesTime: !1,
                imageFormat: "",
                rtl: !1,
                setCtaResultItemData: () => 0,
                queryDebouncerDelay: 300
            });
            var ev = () => {
                    var e, t, n;
                    let i = (0, w.useTheme)(),
                        {
                            translations: l
                        } = (0, h.useContext)(eh);
                    return (0, p.BX)(ep.Wrapper, {
                        "data-cy": "search-empty",
                        children: [(0, p.tZ)(f.Z, {
                            className: "empty-results-subtitle",
                            variant: v.El.subtitle,
                            children: l.noResults
                        }), (0, p.tZ)(f.Z, {
                            variant: null !== (n = null == i ? void 0 : null === (t = i.algoliaSearch) || void 0 === t ? void 0 : null === (e = t.typography) || void 0 === e ? void 0 : e.noResults) && void 0 !== n ? n : v.El.lBody,
                            className: "empty-results-disclaimer",
                            children: l.noResultsDisclaimer
                        })]
                    })
                },
                ef = n(68294),
                ey = {
                    LoadMore: w.styled.div.withConfig({
                        componentId: "sc-bbefc94e-0"
                    })(["align-items:center;display:flex;justify-content:center;margin-top:0;.button-with-icon{background:", ";border:none;border-radius:4.8rem;height:4.8rem;width:4.8rem;svg{align-items:center;display:flex;justify-content:center;width:100%;}}.transparent-button{background:transparent;border:none;span{text-decoration:underline;text-transform:capitalize;}&:hover{background:transparent;}}", ";", "{margin-top:", "rem;", ";}"], v.O9.black, e => {
                        var t, n, i;
                        let {
                            theme: l
                        } = e;
                        return null === (i = l.algoliaSearch) || void 0 === i ? void 0 : null === (n = i.customStyles) || void 0 === n ? void 0 : null === (t = n.loadMore) || void 0 === t ? void 0 : t[v.u3.XS]
                    }, (0, v.TE)(v.u3.MD), v.t8.Spacing06, e => {
                        var t, n, i;
                        let {
                            theme: l
                        } = e;
                        return null === (i = l.algoliaSearch) || void 0 === i ? void 0 : null === (n = i.customStyles) || void 0 === n ? void 0 : null === (t = n.loadMore) || void 0 === t ? void 0 : t[v.u3.LG]
                    })
                },
                eb = n(92765);
            let eS = (e, t, n) => {
                var i, l, a, o, r, d, c, s;
                let {
                    categories: u,
                    defaults: m,
                    tagTypes: g
                } = e.tag;
                return { ...null !== (o = null == m ? void 0 : m.styles) && void 0 !== o ? o : {},
                    ...null !== (r = null == g ? void 0 : g[t]) && void 0 !== r ? r : {},
                    ...null !== (c = null !== (d = null == u ? void 0 : null === (i = u[n]) || void 0 === i ? void 0 : i.styles) && void 0 !== d ? d : null == u ? void 0 : null === (l = u.default) || void 0 === l ? void 0 : l.styles) && void 0 !== c ? c : {},
                    ...null !== (s = null == u ? void 0 : null === (a = u[n]) || void 0 === a ? void 0 : a[t]) && void 0 !== s ? s : {}
                }
            };
            var ew = {
                    Tag: (0, w.styled)(f.Z).withConfig({
                        shouldForwardProp: e => !["$tagType", "$category"].includes(e),
                        componentId: "sc-2c82cd2c-0"
                    })(e => {
                        let {
                            theme: t,
                            $tagType: n,
                            $category: i
                        } = e;
                        return eS(t, n, i)
                    })
                },
                eM = e => {
                    var t, n, i, l, a, o, r, d;
                    let {
                        category: c,
                        className: s,
                        clickHandler: u,
                        dataCy: m = "tag",
                        dataTrackingPayload: g,
                        entity: h,
                        icon: f,
                        text: y,
                        tagType: b = "light",
                        typographyType: M = v.El.caption,
                        active: k = !1,
                        href: x
                    } = e, {
                        categories: T,
                        defaults: L
                    } = (0, w.useTheme)().tag, C = null !== (r = null !== (o = null !== (a = null != M ? M : null == T ? void 0 : null === (t = T[c]) || void 0 === t ? void 0 : t.typographyType) && void 0 !== a ? a : null == T ? void 0 : null === (n = T.default) || void 0 === n ? void 0 : n.typographyType) && void 0 !== o ? o : null == L ? void 0 : L.typographyType) && void 0 !== r ? r : v.El.caption, Z = null !== (d = null == T ? void 0 : null === (i = T[c]) || void 0 === i ? void 0 : i.showIcon) && void 0 !== d ? d : null == T ? void 0 : null === (l = T.default) || void 0 === l ? void 0 : l.showIcon, W = (0, p.BX)(ew.Tag, {
                        onClick: u,
                        $category: c,
                        className: S()(s, u && "clickable", k && "active", Z && f && "with-icon", h && "".concat(h, "-tag")),
                        "data-cy": m,
                        tag: "span",
                        $tagType: b,
                        variant: C,
                        children: [Z && f, y]
                    });
                    return x ? (0, p.tZ)(eb.Z, {
                        href: x,
                        "data-tracking-payload": JSON.stringify(g),
                        children: W
                    }) : W
                },
                ek = e => {
                    var t;
                    let {
                        alt: n,
                        countryCode: i,
                        width: l,
                        height: a
                    } = e, o = null === (t = (0, w.useTheme)().icon) || void 0 === t ? void 0 : t.flags;
                    if (!i || !(null == o ? void 0 : o.templateUrl)) return null;
                    let r = o.templateUrl.replace("{code}", i);
                    return (0, p.tZ)("img", {
                        "data-cy": "flag-icon",
                        alt: null != n ? n : "".concat(null != i ? i : "", " flag"),
                        src: r,
                        height: a,
                        width: l
                    })
                },
                ex = n(7473);
            let eT = w.styled.div.withConfig({
                    componentId: "sc-ef81c3c1-0"
                })(["width:100%;"]),
                eL = w.styled.div.withConfig({
                    componentId: "sc-ef81c3c1-1"
                })(["display:flex;flex-wrap:wrap;gap:", "rem;margin-bottom:", "rem;"], v.t8.Spacing01, v.t8.Spacing01),
                eC = w.styled.div.withConfig({
                    componentId: "sc-ef81c3c1-2"
                })(["span{background:", ";border:0.1rem solid ", ";border-radius:0.3rem;color:", ";font-weight:400;text-transform:capitalize;", ";}"], e => {
                    var t, n, i;
                    let {
                        theme: l
                    } = e;
                    return (null === (i = l.algoliaSearch) || void 0 === i ? void 0 : null === (n = i.colors) || void 0 === n ? void 0 : null === (t = n.tag) || void 0 === t ? void 0 : t.background) || v.O9.black
                }, e => {
                    var t, n, i;
                    let {
                        theme: l
                    } = e;
                    return (null === (i = l.algoliaSearch) || void 0 === i ? void 0 : null === (n = i.colors) || void 0 === n ? void 0 : null === (t = n.tag) || void 0 === t ? void 0 : t.border) || v.O9.black
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.colors.text || v.O9.black
                }, e => {
                    var t, n;
                    let {
                        theme: i
                    } = e;
                    return null === (n = i.algoliaSearch) || void 0 === n ? void 0 : null === (t = n.customStyles) || void 0 === t ? void 0 : t.tags
                }),
                eZ = w.styled.div.withConfig({
                    componentId: "sc-ef81c3c1-3"
                })(["align-items:center;display:flex;gap:", "rem;justify-content:space-between;margin-bottom:", "rem;", " ", ";", "{", ";}"], v.t8.Spacing01, v.t8.Spacing01, e => {
                    let {
                        $hasLabels: t
                    } = e;
                    return t && "width: 100%;"
                }, e => {
                    var t, n, i, l, a, o;
                    let {
                        theme: r
                    } = e;
                    return null !== (o = null === (i = r.algoliaSearch) || void 0 === i ? void 0 : null === (n = i.customStyles) || void 0 === n ? void 0 : null === (t = n.resultTitle) || void 0 === t ? void 0 : t.xs) && void 0 !== o ? o : null === (a = r.algoliaSearch) || void 0 === a ? void 0 : null === (l = a.customStyles) || void 0 === l ? void 0 : l.resultTitle
                }, (0, v.TE)(v.u3.MD), e => {
                    var t, n, i;
                    let {
                        theme: l
                    } = e;
                    return null === (i = l.algoliaSearch) || void 0 === i ? void 0 : null === (n = i.customStyles) || void 0 === n ? void 0 : null === (t = n.resultTitle) || void 0 === t ? void 0 : t.md
                }),
                eW = w.styled.div.withConfig({
                    componentId: "sc-ef81c3c1-4"
                })(["position:relative;width:100%;"]),
                eE = w.styled.img.withConfig({
                    componentId: "sc-ef81c3c1-5"
                })(["display:block;height:3.2rem;object-fit:contain;object-position:center;", " width:3.2rem;"], e => {
                    let {
                        $rtl: t
                    } = e;
                    return t ? (0, w.css)(["float:left;padding-right:", "rem;"], v.t8.Spacing01) : (0, w.css)(["float:right;padding-left:", "rem;"], v.t8.Spacing01)
                }),
                eI = w.styled.div.withConfig({
                    componentId: "sc-ef81c3c1-6"
                })(["margin-bottom:", "rem;width:100%;", " .search-item-description{width:100%;p{margin-bottom:0;}}", ";"], v.t8.Spacing01, e => {
                    let {
                        $isFAQ: t
                    } = e;
                    return !t && "\n      /* stylelint-disable property-no-vendor-prefix, value-no-vendor-prefix */\n      -webkit-box-orient: vertical;\n      display: -webkit-inline-box;\n      -webkit-line-clamp: 3;\n      overflow: hidden;\n    "
                }, e => {
                    var t, n;
                    let {
                        theme: i
                    } = e;
                    return null === (n = i.algoliaSearch) || void 0 === n ? void 0 : null === (t = n.customStyles) || void 0 === t ? void 0 : t.resultDescription
                }),
                eB = w.styled.div.withConfig({
                    componentId: "sc-ef81c3c1-7"
                })(["align-items:center;display:flex;img{margin-right:", "rem;html[dir='rtl'] &,div[dir='rtl'] &{margin-left:", "rem;margin-right:0;}}", ";"], v.t8.Spacing01, v.t8.Spacing01, e => {
                    var t, n;
                    let {
                        theme: i
                    } = e;
                    return null === (n = i.algoliaSearch) || void 0 === n ? void 0 : null === (t = n.customStyles) || void 0 === t ? void 0 : t.athleteCountry
                }),
                eR = w.styled.div.withConfig({
                    componentId: "sc-ef81c3c1-8"
                })(["align-items:center;cursor:pointer;display:flex;height:2.4rem;justify-content:center;svg{height:2.4rem;width:2.4rem;}"]),
                e_ = w.styled.div.withConfig({
                    componentId: "sc-ef81c3c1-9"
                })(["a{align-items:center;display:flex;span{font-size:1.4rem;font-weight:400;line-height:2.4rem;margin-right:0.4rem;}}"]);
            var eO = {
                Caption: w.styled.div.withConfig({
                    componentId: "sc-ef81c3c1-10"
                })(["span{", "}", ";"], e => {
                    var t, n;
                    let {
                        theme: i
                    } = e;
                    return (null === (n = i.algoliaSearch) || void 0 === n ? void 0 : null === (t = n.colors) || void 0 === t ? void 0 : t.caption) && "color: ".concat(i.algoliaSearch.colors.caption, ";")
                }, e => {
                    var t, n;
                    let {
                        theme: i
                    } = e;
                    return null === (n = i.algoliaSearch) || void 0 === n ? void 0 : null === (t = n.customStyles) || void 0 === t ? void 0 : t.resultCaption
                }),
                Wrapper: w.styled.article.withConfig({
                    componentId: "sc-ef81c3c1-11"
                })(["background:", ";border:0.1rem solid var(--full-palette-neutrals-neutral-100,", ");border-radius:0.4rem;box-sizing:border-box;display:flex;flex-direction:row;margin-bottom:", "rem;padding:", "rem;width:100%;&:hover{", "{", ";}}", ";", "{.result-icon{", "}}"], v.O9.white, v.O9.silver, v.t8.Spacing02, v.t8.Spacing01, eZ, e => {
                    var t, n;
                    let {
                        theme: i
                    } = e;
                    return (null === (n = i.algoliaSearch) || void 0 === n ? void 0 : null === (t = n.colors) || void 0 === t ? void 0 : t.titleHighlight) && "color: ".concat(i.algoliaSearch.colors.titleHighlight, ";")
                }, e => {
                    var t, n;
                    let {
                        theme: i
                    } = e;
                    return null === (n = i.algoliaSearch) || void 0 === n ? void 0 : null === (t = n.customStyles) || void 0 === t ? void 0 : t.resultBox
                }, (0, v.nU)(v.u3.MD), e => {
                    var t;
                    let {
                        theme: n
                    } = e;
                    return (null === (t = n.algoliaSearch) || void 0 === t ? void 0 : t.hideImagesOnMobile) && "display: none !important;"
                }),
                Content: eT,
                Tags: eL,
                Title: eZ,
                Description: eI,
                TagItem: eC,
                Country: eB,
                Expand: eR,
                ExternalLink: e_,
                TitleWrapper: eW,
                ItemEmblem: eE,
                TextBlockWrapper: (0, w.styled)(ex.Z).withConfig({
                    componentId: "sc-ef81c3c1-12"
                })(["& > p > a{color:", ";}"], v.O9.black)
            };
            (l = c || (c = {})).ATHLETE = "athletes", l.DISCIPLINE = "disciplines", l.STORIES = "stories", l.VIDEO = "vod", l.GENERIC = "page", l.PODCAST = "podcast", l.FAQ = "faq", l.EVENTS = "ocsevents", l.SERIES = "series", l.PERSONS = "persons", l.NOCS = "nocs", l.FEDERATION = "federation", l.IOCDOCUMENT = "iocdocument", l.VENUE = "venue", l.PRESSRELEASES = "press-releases";
            let eH = (e, t) => {
                    if (!e) return "";
                    let n = new Date(e);
                    return "".concat(n.getDate(), " ").concat(n.toLocaleDateString(t, {
                        month: "long"
                    }), " ").concat(n.getFullYear())
                },
                eA = (e, t) => "".concat(eH(null == e ? void 0 : e.startDate, t), " - ").concat(eH(e.endDate, t)),
                eF = e => e.type === c.STORIES || e.type === c.VIDEO || e.type === c.PODCAST || e.type === c.PRESSRELEASES,
                eP = e => !!e.link && e.type === c.FAQ,
                eX = (e, t) => e.filter(e => !(null == t ? void 0 : t.length) || t.includes(e.value)),
                eD = (e, t) => e.map(e => t.find(t => t.value === e) || {
                    count: 0,
                    isRefined: !1,
                    value: e,
                    label: e,
                    highlighted: e
                }),
                eN = e => e > 4 && e - 4 + 1 > 1 ? 4 : e,
                eG = e => e !== c.FAQ && e !== c.IOCDOCUMENT,
                eK = function(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    return n && e !== c.FAQ && t.length > 0
                },
                ez = (e, t) => {
                    switch (e.type) {
                        case c.EVENTS:
                            return eA(e, t);
                        case c.FAQ:
                            return e.body;
                        default:
                            return e.description
                    }
                },
                eU = e => e === c.ATHLETE,
                eV = (e, t, n) => {
                    let i = [];
                    if (e.showType) {
                        var l, a;
                        switch (e.type) {
                            case c.STORIES:
                                (null == n ? void 0 : null === (l = n.algoliaSearch) || void 0 === l ? void 0 : l.hideNewsTag) || i.push(t.stories);
                                break;
                            case c.PRESSRELEASES:
                                (null == n ? void 0 : null === (a = n.algoliaSearch) || void 0 === a ? void 0 : a.hideNewsTag) || i.push(t["press-releases"]);
                                break;
                            case c.FAQ:
                                i.push(t.faq);
                                break;
                            case c.GENERIC:
                                i.push(t.page);
                                break;
                            case c.VIDEO:
                                i.push(t.vod);
                                break;
                            case c.PODCAST:
                                i.push(t.podcast);
                                break;
                            case c.ATHLETE:
                                i.push(t.athlete);
                                break;
                            case c.SERIES:
                                i.push(t.originals);
                                break;
                            case c.PERSONS:
                                i.push(t.persons);
                                break;
                            case c.NOCS:
                                i.push(t.nocs);
                                break;
                            case c.FEDERATION:
                                i.push(t.federation);
                                break;
                            case c.IOCDOCUMENT:
                                i.push(t.iocdocument);
                                break;
                            case c.VENUE:
                                i.push(t.venue)
                        }
                    }
                    return e.displayLabels && i.push(...e.displayLabels), i
                },
                ej = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "noEmblem";
                    return "noEmblem" !== e ? e : ""
                };
            var eq = n(98040),
                eJ = {
                    Image: (0, w.styled)(eq.ZP).withConfig({
                        componentId: "sc-b60db389-0"
                    })(["img{", " ", "}"], e => {
                        var t;
                        let {
                            imageHeight: n
                        } = e;
                        return null !== (t = n && "height: ".concat(n, "px;")) && void 0 !== t ? t : ""
                    }, e => {
                        var t;
                        let {
                            imageWidth: n
                        } = e;
                        return null !== (t = n && "width: ".concat(n, "px;")) && void 0 !== t ? t : ""
                    }),
                    Sprite: w.styled.span.withConfig({
                        componentId: "sc-b60db389-1"
                    })(["", ""], e => {
                        let {
                            odfCode: t,
                            theme: n
                        } = e, {
                            disciplines: i,
                            disciplinesV2: l
                        } = n.olympicGames, a = -1 !== i.sprite.search(/sprite\.png$/), o = a ? l : i;
                        return (0, w.css)(["background-image:url(", ");background-position:", ";background-repeat:no-repeat;background-size:cover;display:block;height:", ";transform:", ";width:", ";", " ", "{transform:", ";}"], o.sprite, o[t], "9.6rem", .6, "9.6rem", a && (0, w.css)(["border:solid 0.1rem;border-radius:0.2rem;"]), (0, v.TE)(v.u3.LG), .8)
                    })
                };
            let eY = e => "".concat(e.toLowerCase().replace(/\s+|_|\//g, "-").replace(/[-]+/g, "-")),
                e$ = (e, t, n, i, l, a, o) => {
                    var r, d;
                    let c = i ? eY(i) : a,
                        s = e.replace("{type}", t).replace("{size}", n).replace("{mode}", null != l ? l : "").replace("2022/{code}", i ? c : "2022/".concat(c)).replace("{odf}", null !== (r = null == a ? void 0 : a.toLowerCase()) && void 0 !== r ? r : "").replace("{ODF}", null !== (d = null == a ? void 0 : a.toUpperCase()) && void 0 !== d ? d : "");
                    return o && 0 !== Object.keys(o).length ? s : s.replace("{formatInstructions}", "t_original")
                };
            var eQ = e => {
                    var t, n, i;
                    let {
                        alt: l,
                        className: a,
                        dataCy: o = "discipline-icon",
                        disciplineCode: r,
                        height: d,
                        isDecoration: c = !1,
                        mode: s,
                        odfCode: u,
                        size: m = "small",
                        sources: g = {},
                        sprite: h,
                        type: v = "olympics",
                        width: f
                    } = e, y = null === (t = (0, w.useTheme)().icon) || void 0 === t ? void 0 : t.disciplines, b = null !== (n = null != h ? h : null == y ? void 0 : y.sprite) && void 0 !== n ? n : !(null == y ? void 0 : y.templateUrl), M = null !== (i = null != s ? s : null == y ? void 0 : y.mode) && void 0 !== i ? i : "light", k = S()(a, "pictogram--odf-".concat(u), !h && "pictogram--size-".concat(m), h && "sprite");
                    if (!(null == y ? void 0 : y.templateUrl) || b) return u ? (0, p.tZ)(eJ.Sprite, {
                        className: k,
                        "data-cy": o,
                        odfCode: u
                    }) : (0, p.tZ)(p.HY, {});
                    let x = e$(y.templateUrl, v, m, r, M, u, g);
                    return (0, p.tZ)(eJ.Image, {
                        className: k,
                        imageHeight: d,
                        imageWidth: f,
                        dataCy: o,
                        altText: null != l ? l : "discipline-".concat(u),
                        imageUrl: x,
                        sources: g,
                        ariaHidden: c
                    })
                },
                e0 = n(37340);

            function e1() {
                let e = (0, e0._)(["\n      height: 12.8rem;\n      width: 7.4rem;\n    "]);
                return e1 = function() {
                    return e
                }, e
            }

            function e2() {
                let e = (0, e0._)(["\n      height: 12.8rem;\n      width: 7.4rem;\n    "]);
                return e2 = function() {
                    return e
                }, e
            }

            function e4() {
                let e = (0, e0._)(["\n        height: 9.6rem;\n        width: 7.2rem;\n      "]);
                return e4 = function() {
                    return e
                }, e
            }
            let e3 = w.styled.div.withConfig({
                    componentId: "sc-bb3458be-0"
                })(["flex-shrink:0;margin-right:", "rem;position:relative;height:7.2rem;width:7.2rem;", "{height:9.6rem;width:9.6rem;}html[dir='rtl'] &,div[dir='rtl'] &{margin-left:", "rem;margin-right:0;}img{height:100%;width:100%;}", "{", "}"], v.t8.Spacing02, (0, v.TE)(v.u3.MD), v.t8.Spacing02, (0, v.nU)(v.u3.MD), e => {
                    var t;
                    let {
                        theme: n
                    } = e;
                    return (null === (t = n.algoliaSearch) || void 0 === t ? void 0 : t.hideImagesOnMobile) && "display: none !important;"
                }),
                e5 = w.styled.div.withConfig({
                    componentId: "sc-bb3458be-1"
                })(["", ";", "{", ";}"], e => {
                    var t, n;
                    let {
                        theme: i
                    } = e;
                    return null === (n = i.algoliaSearch) || void 0 === n ? void 0 : null === (t = n.customStyles) || void 0 === t ? void 0 : t.imageIcon
                }, (0, v.TE)(v.u3.LG), e => {
                    var t, n, i;
                    let {
                        theme: l
                    } = e;
                    return null === (i = l.algoliaSearch) || void 0 === i ? void 0 : null === (n = i.customStyles) || void 0 === n ? void 0 : null === (t = n.imageIcon) || void 0 === t ? void 0 : t.lg
                });
            var e6 = {
                    ImageWrapper: e3,
                    Image: w.styled.img.withConfig({
                        componentId: "sc-bb3458be-2"
                    })(["height:7.4rem;width:7.4rem;", ";", " ", " ", "{height:9.6rem;width:9.6rem;", "}"], e => {
                        var t, n;
                        let {
                            theme: i
                        } = e;
                        return null === (n = i.algoliaSearch) || void 0 === n ? void 0 : null === (t = n.customStyles) || void 0 === t ? void 0 : t.resultImage
                    }, e => {
                        let {
                            $gamesTime: t
                        } = e;
                        return t && (0, v.iv)(e1())
                    }, e => {
                        let {
                            $gamesTime: t
                        } = e;
                        return t && (0, v.iv)(e2())
                    }, (0, v.TE)(v.u3.MD), e => {
                        let {
                            $gamesTime: t
                        } = e;
                        return t && (0, v.iv)(e4())
                    }),
                    ImageIcon: e5,
                    Pictogram: w.styled.div.withConfig({
                        componentId: "sc-bb3458be-3"
                    })(["border:1px solid;border-radius:0.4rem;display:flex;height:100%;width:100%;picture{height:100%;width:100%;}img{height:75%;margin:auto;width:75%;}"])
                },
                e8 = e => {
                    var t, n, i, l, a, o, r, d, s, u, m;
                    let {
                        item: g
                    } = e, {
                        fallbackImageUrl: v,
                        gamesTime: f,
                        imageFormat: y
                    } = (0, h.useContext)(eh), b = (0, w.useTheme)();
                    return g.thumbnail || (null === (t = b.algoliaSearch) || void 0 === t ? void 0 : t.showFallbackImage) && v ? (0, p.BX)(e6.ImageWrapper, {
                        "data-cy": "search-result-item-image",
                        className: "image ".concat(g.type),
                        children: [g.type === c.DISCIPLINE && (0, p.tZ)(e6.Pictogram, {
                            "data-cy": "image-wrapper-pictogram",
                            children: (0, p.tZ)(eQ, {
                                odfCode: null !== (s = g.odfCode) && void 0 !== s ? s : "",
                                size: "small",
                                type: g.isParalympic ? "paralympic" : "olympics"
                            })
                        }), g.type !== c.DISCIPLINE && (0, p.BX)(p.HY, {
                            children: [(0, p.tZ)(e6.Image, {
                                $gamesTime: f,
                                src: null !== (m = null !== (u = null === (n = g.thumbnail) || void 0 === n ? void 0 : n.replace("{formatInstructions}", y)) && void 0 !== u ? u : v) && void 0 !== m ? m : "",
                                alt: g.type,
                                "aria-hidden": "true"
                            }), g.type === c.PODCAST && (0, p.tZ)(e6.ImageIcon, {
                                "data-cy": "podcast-icon",
                                children: (0, p.tZ)(q.ZH, {})
                            }), g.type === c.VIDEO && (0, p.tZ)(e6.ImageIcon, {
                                "data-cy": "play-with-background-icon",
                                children: (0, p.tZ)(q.e$, {
                                    color: null === (a = b.algoliaSearch) || void 0 === a ? void 0 : null === (l = a.colors) || void 0 === l ? void 0 : null === (i = l.playIcon) || void 0 === i ? void 0 : i.text,
                                    background: null === (d = b.algoliaSearch) || void 0 === d ? void 0 : null === (r = d.colors) || void 0 === r ? void 0 : null === (o = r.playIcon) || void 0 === o ? void 0 : o.background
                                })
                            })]
                        })]
                    }) : (0, p.tZ)(p.HY, {})
                };
            let e9 = h.memo(e => {
                    var t, n, i, l, a, o, r, d, s, u, m, g, y;
                    let {
                        item: b,
                        imgPathPrefix: S
                    } = e, {
                        translations: M,
                        locale: k,
                        rtl: x
                    } = (0, h.useContext)(eh), T = (0, w.useTheme)(), L = eG(null !== (s = b.type) && void 0 !== s ? s : ""), [C, Z] = (0, h.useState)(!1), W = null !== (u = ez(b, k)) && void 0 !== u ? u : "", E = eK(null !== (m = null == b ? void 0 : b.type) && void 0 !== m ? m : "", W, null == b ? void 0 : b.showDescription), I = ej(null == b ? void 0 : b.displayLogo), B = eU(null !== (g = b.type) && void 0 !== g ? g : ""), [R, _] = (null === (t = T.name) || void 0 === t ? void 0 : t.includes("gtw-paris-2024")) ? [(0, p.tZ)(q.JK, {
                        "data-cy": "chevron-up-icon"
                    }), (0, p.tZ)(q.BL, {
                        "data-cy": "chevron-down-icon"
                    })] : [(0, p.tZ)(q.Kh, {
                        "data-cy": "chevron-up-icon"
                    }), (0, p.tZ)(q._M, {
                        "data-cy": "chevron-down-icon"
                    })], O = eV(b, M, T), H = !!(null === (n = T.algoliaSearch) || void 0 === n ? void 0 : n.disableFaqExpand), A = !!(null === (i = T.algoliaSearch) || void 0 === i ? void 0 : i.showIconsInResults), F = null === (a = T.algoliaSearch) || void 0 === a ? void 0 : null === (l = a.typography) || void 0 === l ? void 0 : l.resultTitle, P = null === (r = T.algoliaSearch) || void 0 === r ? void 0 : null === (o = r.typography) || void 0 === o ? void 0 : o.caption, X = !!(null === (d = T.algoliaSearch) || void 0 === d ? void 0 : d.hideDescriptions), D = (null !== (y = b.link) && void 0 !== y ? y : "").replace("#nolink", ""), N = b.type === c.FAQ && !H, G = O.length > 0, K = {
                        a: v.El.smTextLink,
                        p: v.El.smBody,
                        blockquote: v.El.smBody,
                        ul: v.El.smBody,
                        h1: v.El.xlTitle,
                        h2: v.El.title,
                        h3: v.El.sTitle,
                        h4: v.El.xsTitle,
                        h5: v.El.xsTitle,
                        h6: v.El.xsTitle,
                        ol: v.El.smBody
                    };
                    return (0, p.tZ)(e => {
                        var t;
                        let {
                            children: n
                        } = e;
                        return D ? (0, p.tZ)(eb.Z, {
                            href: D,
                            "data-tracking-payload": JSON.stringify({
                                module: "Search",
                                module_instance: "Search Module",
                                link_tag: null !== (t = b.entityId) && void 0 !== t ? t : ""
                            }),
                            children: n
                        }) : (0, p.tZ)(p.HY, {
                            children: n
                        })
                    }, {
                        children: (0, p.BX)(eO.Wrapper, {
                            onClick: e => {
                                (null == e ? void 0 : e.target.tagName) !== "A" && N && Z(!C)
                            },
                            "data-cy": "search-result-item",
                            children: [L && (0, p.tZ)(e8, {
                                item: b
                            }), !L && A && (0, p.BX)("div", {
                                className: "result-icon",
                                children: [b.type === c.IOCDOCUMENT && (0, p.tZ)(q.BB, {}), b.type === c.FAQ && (0, p.tZ)(q.By, {})]
                            }), (0, p.BX)(eO.Content, {
                                children: [(0, p.BX)(eO.TitleWrapper, {
                                    children: [I && (0, p.tZ)(eO.ItemEmblem, {
                                        alt: I,
                                        src: "https://gstatic.olympics.com/s1/f_auto/static/srm/paris-2024/topic-assets/algolia-search/".concat(I, ".svg"),
                                        $rtl: x
                                    }), G && (0, p.tZ)(eO.Tags, {
                                        children: null == O ? void 0 : O.map(e => (0, p.tZ)(eO.TagItem, {
                                            children: (0, p.tZ)(eM, {
                                                text: e,
                                                category: e
                                            })
                                        }, e))
                                    }), (0, p.BX)(eO.Title, {
                                        "data-cy": "search-item-title",
                                        $hasLabels: G,
                                        onClick: () => {
                                            var e, t;
                                            return null === (e = window) || void 0 === e ? void 0 : e.dispatchEvent(new CustomEvent("content-extended", {
                                                detail: {
                                                    module: null !== (t = b.entityId) && void 0 !== t ? t : "",
                                                    contentExpanded: !C,
                                                    linkTag: "+"
                                                }
                                            }))
                                        },
                                        children: [(0, p.tZ)(f.Z, {
                                            variant: null != F ? F : v.El.subtitle,
                                            children: b.title
                                        }), N && (0, p.tZ)(eO.Expand, {
                                            children: C ? R : _
                                        })]
                                    })]
                                }), (E || N && C) && !X && W && (0, p.BX)(p.HY, {
                                    children: [(0, p.tZ)(eO.Description, {
                                        "data-cy": "faq-description",
                                        $isFAQ: b.type === c.FAQ,
                                        children: (0, p.tZ)(eO.TextBlockWrapper, {
                                            input: null != W ? W : "",
                                            typographyTypes: K,
                                            className: "search-item-description",
                                            avoidTypographyForHeading: !0
                                        })
                                    }), eP(b) && D && !H && (0, p.tZ)(eO.ExternalLink, {
                                        children: (0, p.BX)(eb.Z, {
                                            href: D,
                                            "data-tracking-payload": JSON.stringify({
                                                module: "Search",
                                                module_instance: "Search Module",
                                                link_tag: D
                                            }),
                                            children: [(0, p.tZ)(f.Z, {
                                                variant: v.El.textLink,
                                                children: M.externalLink
                                            }), (0, p.tZ)(q.dL, {
                                                color: T.colors.text
                                            })]
                                        })
                                    })]
                                }), B && (0, p.BX)(eO.Country, {
                                    children: [(0, p.tZ)(ek, {
                                        countryCode: null == b ? void 0 : b.countryCode,
                                        width: 22,
                                        height: 16
                                    }), (0, p.tZ)(f.Z, {
                                        variant: v.El.smBody,
                                        children: null == b ? void 0 : b.countryName
                                    })]
                                }), eF(b) && (0, p.tZ)(eO.Caption, {
                                    children: (0, p.tZ)(f.Z, {
                                        variant: null != P ? P : v.El.caption,
                                        children: eH(b.displayContentDate, k)
                                    })
                                })]
                            })]
                        })
                    })
                }),
                e7 = (0, w.styled)(ef.Z).withConfig({
                    componentId: "sc-6c194aac-0"
                })(["background-color:", ";border:none;border-radius:0.5rem;padding:0;width:min-content;html[dir='rtl'] &,div[dir='rtl'] &{transform:rotate(180deg);}& > span > i{padding:0.3rem;transform:scale(0.5);}"], e => {
                    var t;
                    let {
                        theme: n
                    } = e;
                    return null === (t = n.colors) || void 0 === t ? void 0 : t.dropdownSeparator
                }),
                te = w.styled.div.withConfig({
                    componentId: "sc-6c194aac-1"
                })(["align-items:center;display:flex;gap:1rem;padding-left:", "rem;& > span{color:", ";}", "{padding-left:0;}"], v.t8.Spacing01, v.O9.white, (0, v.TE)(v.u3.LG)),
                tt = w.styled.div.withConfig({
                    componentId: "sc-6c194aac-2"
                })(["display:flex;flex-direction:column;gap:0.4rem;justify-content:center;padding-left:", "rem;"], v.t8.Spacing01),
                tn = w.styled.div.withConfig({
                    componentId: "sc-6c194aac-3"
                })(["display:flex;flex-direction:column;justify-content:space-between;padding:", "rem;width:100%;", "{flex-direction:row;justify-content:space-between;}"], v.t8.Spacing01, (0, v.TE)(v.u3.LG)),
                ti = (0, w.styled)(f.Z).withConfig({
                    componentId: "sc-6c194aac-4"
                })(["color:", ";"], v.O9.white),
                tl = (0, w.styled)(f.Z).withConfig({
                    componentId: "sc-6c194aac-5"
                })(["color:", ";"], v.O9.white);
            var ta = {
                    Button: e7,
                    ButtonWrapper: te,
                    Content: tt,
                    ContentWrapper: tn,
                    Description: ti,
                    Title: tl,
                    Thumbnail: (0, w.styled)(eq.ZP).withConfig({
                        componentId: "sc-6c194aac-6"
                    })(["height:9.6rem;width:9.6rem;& > img{border-radius:0.4rem;}"]),
                    ThumbnailWrapper: w.styled.div.withConfig({
                        componentId: "sc-6c194aac-7"
                    })(["flex-shrink:0;height:8rem;position:relative;width:8rem;> picture{height:100%;width:100%;}", "{height:9.6rem;width:9.6rem;}"], (0, v.TE)(v.u3.MD)),
                    Wrapper: w.styled.div.withConfig({
                        componentId: "sc-6c194aac-8"
                    })(["background:", ";border-radius:0.4rem;display:flex;margin-bottom:", "rem;overflow:hidden;padding:0.8rem;position:relative;&:after{aspect-ratio:1/1;background:", ";border-radius:0 0 100% 100%;bottom:-40%;content:'';position:absolute;left:50%;transform:rotate(90deg);width:100%;}& > *{z-index:1;}", "{&:after{bottom:-75%;}}", "{&:after{bottom:-100%;}}"], e => {
                        var t, n, i, l, a, o;
                        let {
                            theme: r
                        } = e;
                        return "linear-gradient(90deg, ".concat(null === (i = r.algoliaSearch) || void 0 === i ? void 0 : null === (n = i.cta) || void 0 === n ? void 0 : null === (t = n.background) || void 0 === t ? void 0 : t.colorDark, ", ").concat(null === (o = r.algoliaSearch) || void 0 === o ? void 0 : null === (a = o.cta) || void 0 === a ? void 0 : null === (l = a.background) || void 0 === l ? void 0 : l.colorLight, ")")
                    }, v.t8.Spacing02, e => {
                        var t, n, i, l, a, o;
                        let {
                            theme: r
                        } = e;
                        return "linear-gradient(90deg, ".concat(null === (i = r.algoliaSearch) || void 0 === i ? void 0 : null === (n = i.cta) || void 0 === n ? void 0 : null === (t = n.background) || void 0 === t ? void 0 : t.colorDark, ", ").concat(null === (o = r.algoliaSearch) || void 0 === o ? void 0 : null === (a = o.cta) || void 0 === a ? void 0 : null === (l = a.background) || void 0 === l ? void 0 : l.colorLight, ")")
                    }, (0, v.TE)(v.u3.MD), (0, v.TE)(v.u3.LG))
                },
                to = e => {
                    var t, n, i, l, a, o;
                    let {
                        ctaData: r
                    } = e, {
                        fallbackImageUrl: d,
                        imageFormat: c,
                        locale: s
                    } = (0, h.useContext)(eh), u = (0, B.G)((0, I.down)(v.u3.MD));
                    return (0, p.tZ)(eg.Pm, {
                        callbackFn: () => {
                            var e, t;
                            let n = {
                                language: null == s ? void 0 : s.split("-")[0],
                                moduleInstance: "CTAs",
                                title: "External CTA"
                            };
                            (0, eg.Rp)(n, {
                                destination_url: null === (t = r.extraData) || void 0 === t ? void 0 : null === (e = t.button) || void 0 === e ? void 0 : e.link,
                                content_id: r.contentId,
                                translation_id: r.translationId
                            }, !0)
                        },
                        children: (0, p.tZ)(e => {
                            var t, n, i, l, a, o, d, c, s, u;
                            let {
                                children: m
                            } = e;
                            return (null == r ? void 0 : null === (n = r.extraData) || void 0 === n ? void 0 : null === (t = n.button) || void 0 === t ? void 0 : t.link) ? (0, p.tZ)(eb.Z, {
                                href: null == r ? void 0 : null === (l = r.extraData) || void 0 === l ? void 0 : null === (i = l.button) || void 0 === i ? void 0 : i.link,
                                "data-tracking": "click",
                                "data-tracking-payload": JSON.stringify({
                                    module_instance: "CTAs",
                                    link_tag: null === (o = r.extraData) || void 0 === o ? void 0 : null === (a = o.button) || void 0 === a ? void 0 : a.text,
                                    module: "External CTA",
                                    destination_url: null === (c = r.extraData) || void 0 === c ? void 0 : null === (d = c.button) || void 0 === d ? void 0 : d.link,
                                    content_id: r.contentId,
                                    translation_id: r.translationId
                                }),
                                target: (null == r ? void 0 : null === (u = r.extraData) || void 0 === u ? void 0 : null === (s = u.button) || void 0 === s ? void 0 : s.openLinkInNewTab) ? "_blank" : "_self",
                                children: m
                            }) : (0, p.tZ)(p.HY, {
                                children: m
                            })
                        }, {
                            children: (0, p.BX)(ta.Wrapper, {
                                children: [(0, p.tZ)(ta.ThumbnailWrapper, {
                                    children: (0, p.tZ)(ta.Thumbnail, {
                                        imageUrl: null !== (o = r.imageUrlTemplate) && void 0 !== o ? o : d,
                                        sources: {
                                            xs: {
                                                standard: c,
                                                x2: c
                                            }
                                        },
                                        addFAuto: !1
                                    })
                                }), (0, p.BX)(ta.ContentWrapper, {
                                    children: [(0, p.BX)(ta.Content, {
                                        "data-cy": "cta-content",
                                        children: [(null == r ? void 0 : r.title) && (0, p.tZ)(ta.Title, {
                                            "data-cy": "cta-title",
                                            variant: v.El.xsTitle,
                                            children: r.title
                                        }), !u && (null == r ? void 0 : r.description) && (0, p.tZ)(ta.Description, {
                                            "data-cy": "cta-description",
                                            variant: v.El.sm,
                                            children: r.description
                                        })]
                                    }), (null == r ? void 0 : null === (t = r.extraData) || void 0 === t ? void 0 : t.button) && (0, p.BX)(ta.ButtonWrapper, {
                                        "data-cy": "cta-button",
                                        children: [(null == r ? void 0 : null === (i = r.extraData) || void 0 === i ? void 0 : null === (n = i.button) || void 0 === n ? void 0 : n.text) && (0, p.tZ)(f.Z, {
                                            "data-cy": "cta-button-text",
                                            variant: v.El.cta,
                                            children: null == r ? void 0 : null === (a = r.extraData) || void 0 === a ? void 0 : null === (l = a.button) || void 0 === l ? void 0 : l.text
                                        }), (0, p.tZ)(ta.Button, {
                                            buttonType: "black",
                                            squared: !0,
                                            children: (0, p.tZ)(q.JO, {
                                                type: "arrow-right"
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                tr = e => {
                    var t, n, i, l, a;
                    let {
                        items: o = [],
                        isLastPage: r = !1,
                        showMore: d,
                        imgPathPrefix: c,
                        refineSelected: s
                    } = e, {
                        translations: u,
                        ctaResultItemData: m,
                        searchResultsCtaConfiguration: g
                    } = (0, h.useContext)(eh), {
                        algoliaSearch: y
                    } = (0, w.useTheme)(), b = e => !s && m && (null == g ? void 0 : g.ctaResultOffset) === e ? (0, p.tZ)(to, {
                        ctaData: m
                    }) : null;
                    return (0, p.BX)("div", {
                        "data-cy": "search-results",
                        children: [(null == o ? void 0 : o.length) > 0 && (0, p.BX)("div", {
                            "data-cy": "search-result-items",
                            children: [o.map((e, t) => [b(t), (0, p.tZ)(e9, {
                                item: e,
                                imgPathPrefix: c
                            }, e.objectID)].filter(Boolean)), g && (null == g ? void 0 : g.ctaResultOffset) >= o.length && b(null == g ? void 0 : g.ctaResultOffset)]
                        }), !r && (0, p.tZ)(ey.LoadMore, {
                            "data-cy": "search-result-last-page",
                            className: "search-loadmore",
                            onClick: () => {
                                var e;
                                return window.dispatchEvent(new CustomEvent("content-extended", {
                                    detail: {
                                        module: "Search Module",
                                        linkTag: u.loadMore,
                                        weblate_key: null == y ? void 0 : null === (e = y.weblateKeys) || void 0 === e ? void 0 : e.loadMore
                                    }
                                }))
                            },
                            children: (null == y ? void 0 : null === (t = y.loadMore) || void 0 === t ? void 0 : t.buttonType) ? (0, p.tZ)("div", {
                                "data-cy": "search-results-load-more",
                                children: (0, p.BX)(ef.Z, {
                                    buttonType: null == y ? void 0 : null === (i = y.loadMore) || void 0 === i ? void 0 : i.buttonType,
                                    onClick: d,
                                    children: [(0, p.tZ)("span", {
                                        children: u.loadMore
                                    }), (0, p.tZ)(q.JO, {
                                        type: null !== (a = null == y ? void 0 : null === (l = y.loadMore) || void 0 === l ? void 0 : l.iconType) && void 0 !== a ? a : "plus"
                                    })]
                                })
                            }) : (null == y ? void 0 : null === (n = y.loadMore) || void 0 === n ? void 0 : n.useIcon) ? (0, p.tZ)("div", {
                                "data-cy": "search-results-load-more",
                                children: (0, p.tZ)(ef.Z, {
                                    buttonType: "icon",
                                    className: "button-with-icon",
                                    onClick: d,
                                    children: (0, p.tZ)(q.v3, {
                                        color: v.O9.white
                                    })
                                })
                            }) : (0, p.tZ)(ef.Z, {
                                buttonType: "transparent",
                                className: "transparent-button",
                                onClick: d,
                                children: (0, p.tZ)(f.Z, {
                                    type: v.El.textLink,
                                    children: u.loadMore
                                })
                            })
                        })]
                    })
                };
            let td = w.styled.div.withConfig({
                componentId: "sc-9610241d-0"
            })(["margin-bottom:", "rem;"], v.t8.Spacing01);
            var tc = {
                    SubTitle: td,
                    Item: w.styled.div.withConfig({
                        componentId: "sc-9610241d-1"
                    })(["align-items:center;display:flex;margin-bottom:", "rem;"], v.t8.Spacing02),
                    ItemIcon: w.styled.div.withConfig({
                        componentId: "sc-9610241d-2"
                    })(["align-items:center;cursor:pointer;display:flex;justify-content:center;"]),
                    ItemText: w.styled.div.withConfig({
                        componentId: "sc-9610241d-3"
                    })(["align-items:center;cursor:pointer;display:flex;justify-content:center;margin-left:", "rem;html[dir='rtl'] &,div[dir='rtl'] &{margin-left:0;margin-right:", "rem;}", ";"], v.t8.Spacing02, v.t8.Spacing02, e => {
                        var t, n;
                        let {
                            theme: i
                        } = e;
                        return null === (n = i.algoliaSearch) || void 0 === n ? void 0 : null === (t = n.customStyles) || void 0 === t ? void 0 : t.trendingItemText
                    })
                },
                ts = e => {
                    let {
                        topicList: t,
                        onSelected: n
                    } = e, {
                        translations: i
                    } = (0, h.useContext)(eh), l = (0, w.useTheme)();
                    return (0, p.BX)("div", {
                        "data-cy": "search-trendings",
                        children: [(0, p.tZ)(tc.SubTitle, {
                            children: (0, p.tZ)(f.Z, {
                                variant: v.El.subtitle,
                                children: null == i ? void 0 : i.trending
                            })
                        }), (0, p.tZ)("div", {
                            "data-cy": "search-trendings-items",
                            children: t.map(e => (0, p.BX)(tc.Item, {
                                onClick: () => n(e),
                                "data-cy": "search-trending-item",
                                children: [(0, p.tZ)(tc.ItemIcon, {
                                    children: (0, p.tZ)(q.bf, {
                                        color: l.colors.text
                                    })
                                }), (0, p.tZ)(tc.ItemText, {
                                    children: (0, p.tZ)(f.Z, {
                                        variant: v.El.smBody,
                                        children: e.label
                                    })
                                })]
                            }, e.entityId))
                        })]
                    })
                };
            let tu = w.styled.div.withConfig({
                    componentId: "sc-c7399d07-0"
                })(["display:flex;flex-direction:column;margin-top:", "rem;"], v.t8.Spacing03),
                tm = w.styled.div.withConfig({
                    componentId: "sc-c7399d07-1"
                })(["align-items:center;display:flex;margin-bottom:", "rem;.clear-search{color:black;cursor:pointer;margin-left:1.2rem;html[dir='rtl'] &,div[dir='rtl'] &{margin-left:0;margin-right:1.2rem;}}"], v.t8.Spacing01);
            var tg = {
                Wrapper: tu,
                SubTitle: tm,
                Item: w.styled.div.withConfig({
                    componentId: "sc-c7399d07-2"
                })(["align-items:center;cursor:pointer;display:flex;margin-bottom:", "rem;"], v.t8.Spacing01),
                ItemIcon: w.styled.div.withConfig({
                    componentId: "sc-c7399d07-3"
                })(["align-items:center;display:flex;justify-content:center;"]),
                ItemText: w.styled.div.withConfig({
                    componentId: "sc-c7399d07-4"
                })(["align-items:center;cursor:pointer;display:flex;justify-content:center;margin-left:", "rem;html[dir='rtl'] &,div[dir='rtl'] &{margin-left:0;margin-right:", "rem;}", ";"], v.t8.Spacing02, v.t8.Spacing02, e => {
                    var t, n;
                    let {
                        theme: i
                    } = e;
                    return null === (n = i.algoliaSearch) || void 0 === n ? void 0 : null === (t = n.customStyles) || void 0 === t ? void 0 : t.recentItemText
                })
            };
            let {
                createLocalStorageRecentSearchesPlugin: tp
            } = n(86617), th = (e, t) => tp({
                key: e,
                limit: t
            }), tv = (e, t) => {
                var n;
                return null === (n = th(e, t).data) || void 0 === n ? void 0 : n.getAll()
            }, tf = (e, t) => {
                var n;
                let i = th(e, t),
                    l = null === (n = i.data) || void 0 === n ? void 0 : n.getAll();
                null == l || l.forEach(e => {
                    var t;
                    return null === (t = i.data) || void 0 === t ? void 0 : t.removeItem(e.id)
                })
            }, ty = (e, t, n) => {
                var i, l, a, o;
                let r = th(t, n),
                    d = e.replace(/\W+/g, "-").toLowerCase(),
                    c = null !== (a = tv(t, n)) && void 0 !== a ? a : [];
                if (c.length === n) {
                    let e = c[c.length - 1].id;
                    null === (o = r.data) || void 0 === o || o.removeItem(e)
                }
                null === (i = r.data) || void 0 === i || i.removeItem(d), null === (l = r.data) || void 0 === l || l.addItem({
                    id: d,
                    label: e
                })
            };
            var tb = e => {
                    var t;
                    let {
                        recentSearchKey: n,
                        recentSearchesLimit: i = 10,
                        query: l,
                        onSelected: a
                    } = e, {
                        translations: o
                    } = (0, h.useContext)(eh), {
                        colors: r,
                        algoliaSearch: d
                    } = (0, w.useTheme)(), c = (0, h.useRef)(null), [s, u] = (0, h.useState)(), m = (0, h.useCallback)(() => {
                        u(tv(n, i))
                    }, []), g = (0, h.useCallback)(() => {
                        tf(n, i), m()
                    }, [m]);
                    return ((0, h.useEffect)(() => {
                        l.length && c && (c.current && clearTimeout(c.current), c.current = setTimeout(() => {
                            ty(l, n, i), m(), c.current = null
                        }, 2e3))
                    }, [l, m]), (0, h.useEffect)(() => m(), [m]), !l.length && (null == s ? void 0 : s.length)) ? (0, p.BX)(tg.Wrapper, {
                        "data-cy": "search-history",
                        children: [(0, p.BX)(tg.SubTitle, {
                            children: [(0, p.tZ)(f.Z, {
                                variant: v.El.subtitle,
                                children: null == o ? void 0 : o.recentSearches
                            }), (0, p.tZ)(f.Z, {
                                className: "clear-search",
                                onClick: g,
                                variant: v.El.smTextLink,
                                "data-cy": "clear-search-button",
                                "data-tracking": "click",
                                "data-tracking-payload": JSON.stringify({
                                    module: "Recent Searches",
                                    link_tag: null == o ? void 0 : o.clear,
                                    module_instance: "Search Module",
                                    weblate_key: null == d ? void 0 : null === (t = d.weblateKeys) || void 0 === t ? void 0 : t.clearSearch
                                }),
                                children: null == o ? void 0 : o.clear
                            })]
                        }), (0, p.tZ)("div", {
                            "data-cy": "search-history-items",
                            children: null == s ? void 0 : s.map(e => {
                                let {
                                    id: t,
                                    label: n
                                } = e;
                                return (0, p.BX)(tg.Item, {
                                    onClick: () => a(n),
                                    "data-cy": "search-history-item",
                                    id: "search-history-item",
                                    children: [(0, p.tZ)(tg.ItemIcon, {
                                        children: (0, p.tZ)(q.B5, {
                                            color: r.text
                                        })
                                    }), (0, p.tZ)(tg.ItemText, {
                                        children: (0, p.tZ)(f.Z, {
                                            variant: v.El.smBody,
                                            children: n
                                        })
                                    })]
                                }, t)
                            })
                        })]
                    }) : (0, p.tZ)(p.HY, {})
                },
                tS = n(9198),
                tw = n.n(tS);
            let tM = w.styled.div.withConfig({
                    componentId: "sc-56644fc6-0"
                })(["align-items:center;display:flex;flex-direction:column;margin-bottom:", "rem;row-gap:", "rem;", "{flex-direction:row;}"], v.t8.Spacing03, v.t8.Spacing03, (0, v.TE)(v.u3.MD)),
                tk = w.styled.div.withConfig({
                    componentId: "sc-56644fc6-1"
                })(["align-items:center;display:flex;justify-content:flex-start;margin-bottom:", "rem;position:relative;width:100%;", ""], v.t8.Spacing02, e => {
                    var t, n;
                    let {
                        theme: i
                    } = e;
                    return null === (n = i.algoliaSearch) || void 0 === n ? void 0 : null === (t = n.customStyles) || void 0 === t ? void 0 : t.filters
                }),
                tx = w.styled.button.withConfig({
                    componentId: "sc-56644fc6-2"
                })(["align-items:center;background:transparent;border:none;cursor:pointer;display:flex;margin-right:", "rem;padding:0;&.disabled{opacity:0.5;pointer-events:none;}"], v.t8.Spacing02),
                tT = w.styled.div.withConfig({
                    componentId: "sc-56644fc6-3"
                })(["align-items:center;display:flex;justify-content:center;&.selected{border-bottom:0.2rem solid black;span{font-weight:700;}}"]);
            var tL = {
                Wrapper: tM,
                Items: tk,
                Item: tx,
                ItemText: tT,
                List: w.styled.ul.withConfig({
                    componentId: "sc-56644fc6-4"
                })(["background:", ";border:0.2rem solid ", ";border-radius:0.4rem;cursor:pointer;display:none;margin-top:0.4rem;padding:0;position:absolute;right:0;top:100%;z-index:2;html[dir='rtl'] &,div[dir='rtl'] &{left:0;right:unset;}li{padding:1.2rem 2.4rem;}li .selected{background-color:", ";span{color:", ";}}&.open{display:block;}"], v.O9.white, v.O9.black, v.O9.black, v.O9.white),
                DateFilter: w.styled.div.withConfig({
                    componentId: "sc-56644fc6-5"
                })(["cursor:pointer;position:relative;width:100%;& > div{width:100%;input{width:100%;}}svg{align-items:center;display:flex;height:100%;justify-content:center;position:absolute;right:", "rem;top:50%;transform:translateY(-50%);width:1rem;z-index:2;}", "{margin-bottom:0;max-width:24rem;}"], v.t8.Spacing02, (0, v.TE)(v.u3.MD)),
                DateFilters: w.styled.div.withConfig({
                    componentId: "sc-56644fc6-6"
                })(["align-items:center;display:flex;flex-direction:column;height:100%;width:100%;& > div:last-child{margin-top:", "rem;}", "{flex-direction:row;justify-content:flex-end;& > div:last-child{margin-left:", "rem;margin-top:0;}}.react-datepicker-popper{padding:0;&[data-placement^='bottom']{padding-top:0.4rem;}&[data-placement^='top']{padding-bottom:0;}& > *{font-family:", " !important;}.react-datepicker{border:0.1rem solid ", ";font-size:1.2rem;.react-datepicker__current-month{font-size:1.3rem;}.react-datepicker__header{border:0;padding:0.6rem 0;.react-datepicker__day-names{margin-bottom:0;}}.react-datepicker__month{margin:", "rem;}.react-datepicker__day,.react-datepicker__day-name{margin:0.2rem 0.5rem;}}}.react-datepicker__triangle{display:none;}.react-datepicker__input-container{& > input{background-color:", ";border:0.1rem solid ", ";border-radius:0.4rem;box-sizing:border-box;color:", ";cursor:pointer;font-size:1.6rem;font-weight:400;height:3.8rem;line-height:2.4rem;padding:", "rem ", "rem;width:100%;&:focus-visible{outline:0 !important;}&::placeholder{color:", ";font-family:", ";font-size:1.6rem;font-weight:400;line-height:2.4rem;}}}"], v.t8.Spacing01, (0, v.TE)(v.u3.MD), v.t8.Spacing01, e => {
                    let {
                        theme: t
                    } = e;
                    return t.fonts.text
                }, v.O9.gray50, v.t8.Spacing01, v.O9.gray50, v.O9.gray50, e => {
                    let {
                        theme: t
                    } = e;
                    return t.colors.text
                }, v.t8.Spacing01, v.t8.Spacing02, e => {
                    let {
                        theme: t
                    } = e;
                    return t.colors.text
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.fonts.text
                })
            };
            let tC = null !== (s = tw().default) && void 0 !== s ? s : tw(),
                tZ = (e, t) => void 0 === e || (null == e ? void 0 : e.tabs.filter(e => "all" !== e.label).some(e => e.types.includes(t.label)));
            var tW = e => {
                    var t, n, i, l, a;
                    let {
                        items: o,
                        onAllSelected: r,
                        onItemSelected: d
                    } = e, [c, s] = (0, h.useState)(!1), u = (0, B.G)((0, I.up)(v.u3.MD)), m = (0, w.useTheme)(), {
                        translations: g,
                        allowMultipleFilters: y,
                        dateFilter: b,
                        refinementListConfiguration: S
                    } = (0, h.useContext)(eh), {
                        dateFrom: M,
                        dateTo: k,
                        setDateTo: x,
                        setDateFrom: T
                    } = null != b ? b : {}, L = e => {
                        "all" === e ? (r(), C()) : (y || (r(), C(e)), d(e)), window.dispatchEvent(new CustomEvent("filter-selected", {
                            detail: {
                                module: "Search Module",
                                moduleInstance: "Search Module",
                                filterType: "Search Category",
                                filterValue: e
                            }
                        }))
                    }, C = e => {
                        E(t => t.map(t => ({ ...t,
                            isRefined: t.value === e
                        })))
                    }, Z = e => {
                        c && s(!c), L(e)
                    }, [W, E] = (0, h.useState)(S ? eD(null == S ? void 0 : S.tabs[0].types, o) : null !== (a = null === (n = m.algoliaSearch) || void 0 === n ? void 0 : null === (t = n.refinementList) || void 0 === t ? void 0 : t.map(e => ({
                        count: 0,
                        isRefined: !1,
                        value: e,
                        label: e,
                        highlighted: e
                    }))) && void 0 !== a ? a : []);
                    (0, h.useEffect)(() => {
                        if (!S) {
                            let e = [...o];
                            W.forEach(t => {
                                o.some(e => e.label === t.label) || e.push(t)
                            }), E(e.filter(e => {
                                var t, n;
                                return null === (t = m.algoliaSearch) || void 0 === t || !t.refinementList || (null === (n = m.algoliaSearch) || void 0 === n ? void 0 : n.refinementList.includes(e.label))
                            }).sort((e, t) => e.label.localeCompare(t.label)))
                        }
                        o.length || Z("all")
                    }, [o]);
                    let R = W.filter(e => tZ(S, e)),
                        _ = u || (null === (i = m.algoliaSearch) || void 0 === i ? void 0 : i.showAllFiltersInMobile) ? R.length : eN(W.length),
                        O = R.length - _ > 1,
                        H = R.some(e => e.isRefined) ? "" : "selected",
                        A = o.length ? "" : "disabled";
                    return (0, p.BX)(tL.Wrapper, {
                        "data-cy": "search-refinement-wrapper",
                        children: [(0, p.BX)(tL.Items, {
                            "data-cy": "search-refinement-items",
                            children: [(0, p.tZ)(tL.Item, {
                                onClick: () => Z("all"),
                                "data-cy": "search-refinement-item",
                                children: (0, p.tZ)(tL.ItemText, {
                                    className: "item-text ".concat(H),
                                    children: (0, p.tZ)(f.Z, {
                                        variant: v.El.smBody,
                                        children: null == g ? void 0 : g.all
                                    })
                                })
                            }, "all"), R.slice(0, _).sort((e, t) => {
                                var n, i;
                                return (null === (n = m.algoliaSearch.refinementList) || void 0 === n ? void 0 : n.indexOf(e.value)) - (null === (i = m.algoliaSearch.refinementList) || void 0 === i ? void 0 : i.indexOf(t.value))
                            }).filter(e => tZ(S, e)).map(e => (0, p.tZ)(tL.Item, {
                                onClick: () => L(e.value),
                                "data-cy": "search-refinement-item",
                                className: A,
                                children: (0, p.tZ)(tL.ItemText, {
                                    className: e.isRefined ? "selected" : "",
                                    children: (0, p.tZ)(f.Z, {
                                        variant: v.El.smBody,
                                        children: g[e.label]
                                    })
                                })
                            }, e.label)), O && (0, p.tZ)(tL.Item, {
                                className: A,
                                onClick: () => {
                                    s(!c)
                                },
                                "data-cy": "search-refinement-show-more",
                                children: (0, p.tZ)(tL.ItemText, {
                                    children: (0, p.tZ)(f.Z, {
                                        variant: v.El.smBody,
                                        children: null == g ? void 0 : g.more
                                    })
                                })
                            }, "more"), (0, p.tZ)(tL.List, {
                                className: c ? "open" : "",
                                "data-cy": "search-refinement-show-more-list",
                                children: R.slice(_, W.length - 1).map(e => (0, p.tZ)("li", {
                                    children: (0, p.tZ)(tL.Item, {
                                        onClick: () => Z(e.value),
                                        "data-cy": "search-refinement-item",
                                        children: (0, p.tZ)(tL.ItemText, {
                                            className: e.isRefined ? "selected" : "",
                                            children: (0, p.tZ)(f.Z, {
                                                variant: v.El.smBody,
                                                children: g[e.label]
                                            })
                                        })
                                    })
                                }, e.label))
                            })]
                        }), (null === (l = m.algoliaSearch) || void 0 === l ? void 0 : l.showDateFilters) && (0, p.BX)(tL.DateFilters, {
                            children: [(0, p.BX)(tL.DateFilter, {
                                children: [(0, p.tZ)(tC, {
                                    selected: M,
                                    onChange: T,
                                    placeholderText: null == g ? void 0 : g.dateFrom,
                                    maxDate: k
                                }), (0, p.tZ)(q._M, {})]
                            }), (0, p.BX)(tL.DateFilter, {
                                children: [(0, p.tZ)(tC, {
                                    selected: k,
                                    onChange: x,
                                    minDate: M,
                                    placeholderText: null == g ? void 0 : g.dateTo
                                }), (0, p.tZ)(q._M, {})]
                            })]
                        })]
                    })
                },
                tE = n(31554);
            let tI = w.styled.div.withConfig({
                    componentId: "sc-f2067c55-0"
                })([""]),
                tB = (w.styled.div.withConfig({
                    componentId: "sc-f2067c55-1"
                })([""]), w.styled.div.withConfig({
                    componentId: "sc-f2067c55-2"
                })(["display:flex;gap:", "rem;margin-bottom:", ";width:100%;", ""], v.t8.Spacing02, e => {
                    var t, n, i, l, a;
                    let {
                        theme: o
                    } = e;
                    return null !== (a = null === (l = o.algoliaSearch) || void 0 === l ? void 0 : null === (i = l.customStyles) || void 0 === i ? void 0 : null === (n = i.margins) || void 0 === n ? void 0 : null === (t = n.search) || void 0 === t ? void 0 : t.bottom) && void 0 !== a ? a : "".concat(v.t8.Spacing07, "rem")
                }, e => {
                    var t, n;
                    let {
                        theme: i
                    } = e;
                    return null === (n = i.algoliaSearch) || void 0 === n ? void 0 : null === (t = n.customStyles) || void 0 === t ? void 0 : t.searchBox
                })),
                tR = (0, w.styled)(tE.R).withConfig({
                    componentId: "sc-f2067c55-3"
                })(["width:100%;.ais-SearchBox-form{background:", ";border:0.2rem solid ", ";border-radius:0.4rem;display:flex;padding:0 0 0 ", "rem;html[dir='rtl'] &,div[dir='rtl'] &{padding:0 ", "rem 0 0;}}textarea:focus,input:focus{outline:none;}input[type='search']::-webkit-search-decoration,input[type='search']::-webkit-search-cancel-button,input[type='search']::-webkit-search-results-button,input[type='search']::-webkit-search-results-decoration{-webkit-appearance:none;}.ais-SearchBox-input{background:", ";border:unset;color:", ";flex:1;font-size:1.6rem;height:4.8rem;padding:1.2rem 0;width:100%;}.ais-SearchBox-submit{background-color:transparent;border:none;padding:0 ", "rem;", "}.ais-SearchBox-reset{background-color:transparent;border:none;cursor:pointer;padding:0 ", "rem;}.ais-SearchBox-submitIcon{cursor:pointer;height:2rem;width:2rem;", "}.ais-SearchBox-resetIcon{cursor:pointer;height:2.4rem;margin:auto 0;width:2.4rem;}"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.colors.background || v.O9.white
                }, v.O9.black, v.t8.Spacing01, v.t8.Spacing02, e => {
                    let {
                        theme: t
                    } = e;
                    return t.colors.background || v.O9.white
                }, v.O9.black, v.t8.Spacing02, e => {
                    let {
                        $disablesearchicon: t
                    } = e;
                    return t && "display: none;"
                }, v.t8.Spacing01, e => {
                    let {
                        $disablesearchicon: t
                    } = e;
                    return t && "\n        display: none;\n    "
                });
            var t_ = {
                FiltersLabel: (0, w.styled)(f.Z).withConfig({
                    componentId: "sc-f2067c55-4"
                })(["margin-bottom:", "rem;"], v.t8.Spacing01),
                Wrapper: tI,
                SearchBoxContainer: tB,
                StyledSearchBox: tR
            };
            let tO = w.styled.div.withConfig({
                    componentId: "sc-d5905748-0"
                })(["align-items:center;cursor:pointer;display:flex;justify-content:center;position:relative;", ";"], e => {
                    var t, n;
                    let {
                        theme: i
                    } = e;
                    return null === (n = i.algoliaSearch) || void 0 === n ? void 0 : null === (t = n.customStyles) || void 0 === t ? void 0 : t.searchSort
                }),
                tH = w.styled.button.withConfig({
                    componentId: "sc-d5905748-1"
                })(["align-items:center;background:", ";border:0.1rem solid ", ";border-radius:0.4rem;box-sizing:border-box;cursor:pointer;display:flex;height:4.8rem;justify-content:center;width:4.8rem;.svg{height:2rem;width:2rem;}&.open{background-color:", ";transform:rotate(180deg);}&.disabled{border-color:", ";cursor:auto;}"], v.O9.white, e => {
                    var t;
                    let {
                        theme: n
                    } = e;
                    return null !== (t = n.colors.text) && void 0 !== t ? t : v.O9.black
                }, v.O9.black, e => {
                    let {
                        theme: t
                    } = e;
                    return t.colors.borderSecondary
                }),
                tA = w.styled.li.withConfig({
                    componentId: "sc-d5905748-2"
                })(["list-style:none;"]);
            var tF = {
                    Wrapper: tO,
                    Button: tH,
                    List: w.styled.ul.withConfig({
                        componentId: "sc-d5905748-3"
                    })(["background:", ";border:0.1rem solid ", ";border-radius:0.4rem;cursor:pointer;display:none;margin-top:0.4rem;padding:0;position:absolute;right:0;top:100%;width:14.7rem;z-index:2;", "{width:19rem;}html[dir='rtl'] &,div[dir='rtl'] &{left:0;right:unset;}li{.sort-item{align-items:center;display:flex;padding:1rem ", "rem;", "{padding:", "rem ", "rem;}}}li .selected{background-color:", ";span{color:", ";}}&.open{display:block;}"], v.O9.white, e => {
                        let {
                            theme: t
                        } = e;
                        return t.colors.borderSecondary
                    }, (0, v.TE)(v.u3.LG), v.t8.Spacing01, (0, v.TE)(v.u3.LG), v.t8.Spacing01, v.t8.Spacing01, e => {
                        var t, n, i;
                        let {
                            theme: l
                        } = e;
                        return (null === (i = l.algoliaSearch) || void 0 === i ? void 0 : null === (n = i.colors) || void 0 === n ? void 0 : null === (t = n.sort) || void 0 === t ? void 0 : t.background) || v.O9.black
                    }, e => {
                        var t, n, i;
                        let {
                            theme: l
                        } = e;
                        return (null === (i = l.algoliaSearch) || void 0 === i ? void 0 : null === (n = i.colors) || void 0 === n ? void 0 : null === (t = n.sort) || void 0 === t ? void 0 : t.text) || v.O9.black
                    }),
                    ListItem: tA
                },
                tP = e => {
                    var t, n, i, l, a, o;
                    let {
                        options: r = [],
                        onSort: d,
                        currentRefinement: c = "",
                        disabled: s = !1,
                        isOpen: u,
                        toggleOpen: m
                    } = e, {
                        translations: g
                    } = (0, h.useContext)(eh), y = (0, w.useTheme)(), b = u ? "open" : void 0, M = e => {
                        d(e), m()
                    };
                    return (0, p.BX)(tF.Wrapper, {
                        "data-cy": "search-sort",
                        children: [(0, p.tZ)(tF.Button, {
                            className: S()(b, s && "disabled"),
                            onClick: m,
                            disabled: s,
                            "aria-label": g.sort,
                            "data-cy": "search-sort-button",
                            children: (0, p.tZ)(q.vL, {
                                color: s ? y.colors.borderSecondary : u ? null === (o = y.algoliaSearch) || void 0 === o ? void 0 : null === (a = o.colors) || void 0 === a ? void 0 : null === (l = a.sort) || void 0 === l ? void 0 : l.toggled : null === (i = y.algoliaSearch) || void 0 === i ? void 0 : null === (n = i.colors) || void 0 === n ? void 0 : null === (t = n.sort) || void 0 === t ? void 0 : t.default
                            })
                        }), (0, p.tZ)(tF.List, {
                            className: b,
                            "data-cy": "search-sort-list-items",
                            children: r.map(e => (0, p.tZ)(tF.ListItem, {
                                onClick: () => M(e),
                                "data-cy": "search-sort-item",
                                children: (0, p.tZ)("div", {
                                    className: c === e.value ? "selected sort-item" : "sort-item",
                                    children: (0, p.tZ)(f.Z, {
                                        variant: v.El.sm,
                                        children: g[e.label]
                                    })
                                })
                            }, e.value))
                        })]
                    })
                },
                tX = {
                    Counter: w.styled.div.withConfig({
                        componentId: "sc-3f98ff1b-0"
                    })(["font-size:1.6rem;font-weight:700;line-height:2.4rem;margin-bottom:22px;"])
                };
            let tD = null;
            var tN = e => {
                    var t, n;
                    let {
                        itemsCount: i,
                        items: l
                    } = e, a = (0, w.useTheme)(), [o, r] = (0, h.useState)(i), {
                        translations: d
                    } = (0, h.useContext)(eh), c = eX(l, null === (t = a.algoliaSearch) || void 0 === t ? void 0 : t.refinementList);
                    (0, h.useEffect)(() => {
                        tD && clearTimeout(tD), tD = setTimeout(() => {
                            var e, t;
                            r(null !== (t = null === (e = c.find(e => e.isRefined)) || void 0 === e ? void 0 : e.count) && void 0 !== t ? t : c.reduce((e, t) => e + t.count, 0))
                        }, 200)
                    }, [l]);
                    let s = (null !== (n = null == d ? void 0 : d.counterTemplate) && void 0 !== n ? n : "").replace("{{count}}", i.toString()).replace("{{total}}", o.toString());
                    return (0, p.tZ)(tX.Counter, {
                        "data-cy": "content-counter",
                        children: s
                    })
                },
                tG = n(18258),
                tK = () => {
                    let {
                        setCtaResultItemData: e,
                        searchResultsCtaConfiguration: t
                    } = (0, h.useContext)(eh), n = e => {
                        var n;
                        if (!e) return;
                        let i = (0, tG.yC)(e, null !== (n = null == t ? void 0 : t.matchingWords) && void 0 !== n ? n : [], {
                            returnMatchData: !0,
                            threshold: .8
                        }).pop();
                        return null == i ? void 0 : i.item
                    };
                    return {
                        getCtaForQuery: async i => {
                            let l = n(i);
                            e(l && (null == t ? void 0 : t.getCtaForWord) && await t.getCtaForWord(l) || (null == t ? void 0 : t.defaultCta))
                        }
                    }
                };
            let tz = null,
                tU = null;
            var tV = e => {
                var t, n, i, l, a;
                let {
                    recentSearchKey: o,
                    recentSearchesLimit: r,
                    disableTrendings: d,
                    disableRefinementList: c,
                    disableHistory: s,
                    trendings: u = [],
                    sortItems: m = [],
                    hideSort: g = !1,
                    filtersLabel: v,
                    showCounter: f,
                    imgPathPrefix: y
                } = e, {
                    translations: b,
                    dateFilter: S,
                    locale: M,
                    setSelectedEntity: k,
                    queryDebouncerDelay: x
                } = (0, h.useContext)(eh), T = (0, h.useCallback)((e, t) => {
                    (null == e ? void 0 : e.trim().length) > 0 && (tz && clearTimeout(tz), tz = setTimeout(() => {
                        t(e.trim())
                    }, x))
                }, []), L = (0, w.useTheme)(), {
                    items: C
                } = (0, ed.b)(), {
                    hits: Z,
                    isLastPage: W,
                    showMore: E
                } = (0, ec.a)({}), {
                    query: I,
                    refine: B
                } = (0, es.l)(), {
                    getCtaForQuery: R
                } = tK(), {
                    items: _,
                    refine: O
                } = (0, eu.c)({
                    attribute: "type",
                    sortBy: ["name:asc"]
                }), {
                    options: H,
                    refine: A,
                    currentRefinement: F
                } = (0, em.s)({
                    items: m
                }), [P, X] = (0, h.useState)(), [D, N] = (0, h.useState)(Z), [G, K] = (0, h.useState)(W), [z, U] = (0, h.useState)(!1);
                (0, h.useEffect)(() => {
                    N(Z), K(W)
                }, [_]);
                let V = (0, h.useCallback)(() => U(e => !e), []),
                    j = !!(null == D ? void 0 : D.length),
                    J = !!(null == u ? void 0 : u.length),
                    Y = !!(null == I ? void 0 : I.length),
                    $ = Y && j,
                    Q = Y && !j,
                    ee = {
                        language: M.split("-")[0],
                        userNation: M.split("-")[1],
                        selectedCategory: null !== (a = null === (t = _.find(e => e.isRefined)) || void 0 === t ? void 0 : t.label) && void 0 !== a ? a : "all"
                    },
                    et = () => {
                        X(void 0), null == S || S.setDateTo(void 0), null == S || S.setDateFrom(void 0), C && 0 !== C.length && (null == C || C[0].refinements.forEach(e => {
                            O(e.value.toString())
                        }))
                    },
                    [en, ei] = (0, h.useState)(!1);
                (0, h.useEffect)(() => {
                    if (!(null == I ? void 0 : I.length)) {
                        et();
                        return
                    }
                    if (en) {
                        ei(!1);
                        return
                    }(0, eg.Zx)({
                        module: ee.selectedCategory,
                        moduleInstance: "Search Module",
                        searchString: I,
                        searchType: ee.selectedCategory,
                        searchFound: "".concat(j),
                        language: ee.language,
                        userNation: ee.userNation
                    }, !0)
                }, [I]), (0, h.useEffect)(() => {
                    R(I)
                }, [I]), (0, h.useEffect)(() => {
                    let e = document.querySelector(".ais-SearchBox-input");
                    e && e.setAttribute("aria-label", b.search)
                }, []), (0, h.useEffect)(() => {
                    _ && k && k(_.find(e => e.isRefined))
                }, [JSON.stringify(_ || [])]);
                let el = e => {
                        ei(!0), B(e), (0, eg.Zx)({
                            language: ee.language,
                            module: "Recent Searches",
                            moduleInstance: "Search Module",
                            searchString: e,
                            searchType: ee.selectedCategory,
                            searchFound: "true",
                            userNation: ee.userNation
                        }, !0)
                    },
                    ea = !!(null === (n = L.algoliaSearch) || void 0 === n ? void 0 : n.showSortIcon),
                    [eo, er] = (0, h.useState)(!1);
                return (0, h.useEffect)(() => {
                    Y ? (tU && clearTimeout(tU), tU = setTimeout(() => {
                        er(Y)
                    }, 200)) : er(!1)
                }, [Y]), (0, p.BX)(t_.Wrapper, {
                    "data-cy": "search-content",
                    children: [(0, p.BX)(t_.SearchBoxContainer, {
                        children: [(0, p.tZ)(t_.StyledSearchBox, {
                            $disablesearchicon: Y,
                            placeholder: b.search,
                            queryHook: T,
                            searchAsYouType: !0,
                            onResetCapture: () => {
                                (0, eg.j)(eg.tw.click, {
                                    module: "Search",
                                    moduleInstance: "Search Module",
                                    link_tag: "clear search bar"
                                }, !0), U(!1), B("")
                            },
                            "aria-label": b.search,
                            autoFocus: !0,
                            onSubmit: e => {
                                let t = e.currentTarget.querySelector("input");
                                setTimeout(() => {
                                    null == t || t.focus()
                                })
                            },
                            resetIconComponent: q.cY
                        }), (Y && !g || ea) && (0, p.tZ)(tP, {
                            options: H,
                            onSort: e => {
                                A(e.value), (0, eg.ZP)({
                                    language: ee.language,
                                    module: ee.selectedCategory,
                                    moduleInstance: "Search Module",
                                    sortingOrder: "descending",
                                    sortingType: "relevant" === e.label ? "relevance" : "date",
                                    sortingValue: "relevant" === e.label ? "relevance" : "latest",
                                    userNation: ee.userNation
                                })
                            },
                            currentRefinement: F,
                            disabled: !Y || !j,
                            isOpen: z,
                            toggleOpen: V
                        })]
                    }), Y && !c && (0, p.BX)(p.HY, {
                        children: [v && (0, p.tZ)(t_.FiltersLabel, {
                            variant: null === (l = L.algoliaSearch) || void 0 === l ? void 0 : null === (i = l.typography) || void 0 === i ? void 0 : i.filtersLabel,
                            children: v
                        }), (0, p.tZ)(tW, {
                            items: _,
                            onItemSelected: e => {
                                X(e), O(e)
                            },
                            onAllSelected: et
                        })]
                    }), Q && (0, p.tZ)(ev, {}), f && $ && (0, p.tZ)(tN, {
                        items: _,
                        itemsCount: D.length
                    }), eo && (0, p.tZ)(tr, {
                        isLastPage: G,
                        showMore: E,
                        items: D || [],
                        imgPathPrefix: y,
                        refineSelected: P
                    }), !$ && J && !d && (0, p.tZ)(ts, {
                        topicList: u,
                        onSelected: e => {
                            var t;
                            null == S || S.setDateTo(void 0), null == S || S.setDateFrom(void 0), ei(!0), B(e.label), (0, eg.Zx)({
                                language: ee.language,
                                module: "Trending",
                                moduleInstance: "Search Module",
                                searchString: null !== (t = e.entityId) && void 0 !== t ? t : "",
                                searchType: ee.selectedCategory,
                                searchFound: "true",
                                userNation: ee.userNation
                            }, !0)
                        }
                    }), !s && (0, p.tZ)(tb, {
                        recentSearchKey: o,
                        onSelected: e => el(e),
                        recentSearchesLimit: r,
                        query: I
                    })]
                })
            };
            let tj = "sortContentDate",
                tq = e => {
                    if (e) return e.getTime() + 864e5
                },
                tJ = (e, t) => {
                    if (e || t) return "(".concat(e && t ? "".concat(tj, ": ").concat(e.getTime(), " TO  ").concat(tq(t)) : t ? "".concat(tj, " <= ").concat(tq(t)) : e ? "".concat(tj, " >= ").concat(e.getTime()) : void 0, ") OR hasDate=0")
                },
                tY = e => {
                    if (e) {
                        let t = "";
                        return e.forEach((n, i) => {
                            t += "".concat("type", ":").concat(n), i < e.length - 1 && (t += " OR ")
                        }), t
                    }
                },
                t$ = (e, t, n, i, l) => {
                    var a, o;
                    let r = ["context:".concat(e), tJ(t, n), tY(i)];
                    if (!i) {
                        let e = null == l ? void 0 : null === (o = l.tabs.find(e => "all" === e.label)) || void 0 === o ? void 0 : o.types;
                        r.push(tY(e))
                    }
                    return r.push("isGloballyAvailable:true OR geo:".concat((null === (a = window.deltatre) || void 0 === a ? void 0 : a.userNation) || "US")), r.filter(Boolean).map(e => "(".concat(e, ")")).join(" AND ")
                };
            var tQ = n(70290),
                t0 = n.n(tQ),
                t1 = (e, t) => {
                    let n = !0,
                        i = t0()(e, t, {}),
                        l = async (e, t) => n && e.every(e => {
                            var t;
                            return !(null === (t = e.params) || void 0 === t ? void 0 : t.query)
                        }) ? (n = !1, {
                            results: [{
                                hits: []
                            }]
                        }) : i.search(e, t);
                    return { ...i,
                        search: l
                    }
                };
            let t2 = (e, t, n, i) => {
                var l, a;
                let o = [{
                        label: "relevant",
                        value: e.indexName
                    }, {
                        label: "latest",
                        value: "".concat(e.indexName, "_content_date")
                    }],
                    r = null === (l = t.refinementListConfiguration) || void 0 === l ? void 0 : l.find(e => e.context === i),
                    d = t.algoliaSearchConfig;
                if (!d) return;
                let c = null == n ? void 0 : n.slice(0, null !== (a = t.trendingTopicsCount) && void 0 !== a ? a : 5);
                return {
                    apiKey: d.apiKey,
                    appId: d.appId,
                    fallbackImageUrl: d.fallbackImageUrl,
                    gamesTime: d.gamesTime,
                    imageFormat: d.imageFormat,
                    logoUrl: d.logoUrl,
                    recentSearchKey: d.recentSearchKey,
                    recentSearchesLimit: d.recentSearchesLimit,
                    disableRefinementList: d.disableRefinementList,
                    refinementListItemTabConfiguration: r,
                    trendings: c,
                    sortItems: o,
                    indexName: e.indexName,
                    locale: e.locale,
                    i18n: e.i18n,
                    disableTrendings: !1,
                    disableHistory: !1,
                    hideLogo: !1,
                    hideSort: !1,
                    imgPathPrefix: "/_pr",
                    queryDebouncerDelay: t.queryDebouncerDelay
                }
            };
            var t4 = e => {
                var t;
                let {
                    appId: n,
                    apiKey: i,
                    indexName: l,
                    locale: a,
                    context: o,
                    ruleContext: r,
                    logoUrl: d,
                    disableTrendings: c = !1,
                    disableHistory: s = !1,
                    disableRefinementList: u = !1,
                    trendings: m = [],
                    recentSearchesLimit: g = 10,
                    recentSearchKey: v,
                    sortItems: f = [],
                    i18n: y,
                    imageFormat: b = "t_1-1_160",
                    gamesTime: S = !1,
                    hideLogo: M = !1,
                    hideSort: k = !1,
                    filtersLabel: x,
                    allowMultipleFilters: T,
                    fallbackImageUrl: L,
                    overrideRefinementList: C,
                    showCounter: Z,
                    refinementListConfiguration: W,
                    imgPathPrefix: E = "",
                    rtl: I,
                    searchResultsCtaConfiguration: B,
                    queryDebouncerDelay: R = 300
                } = e, _ = (0, w.useTheme)(), O = null != d ? d : null == _ ? void 0 : null === (t = _.algoliaSearch) || void 0 === t ? void 0 : t.logo, H = (0, h.useMemo)(() => t1(n, i), [n, i]), [A, F] = (0, h.useState)(), [P, X] = (0, h.useState)(), [D, N] = (0, h.useState)(t$(o, A, P));
                (0, h.useEffect)(() => {
                    N(t$(o, A, P, C, W))
                }, [A, P]);
                let [G, K] = (0, h.useState)(null == B ? void 0 : B.defaultCta), [z, U] = (0, h.useState)(), V = (0, h.useMemo)(() => ({
                    allowMultipleFilters: T,
                    translations: y,
                    locale: a,
                    fallbackImageUrl: L,
                    dateFilter: {
                        dateFrom: A,
                        setDateFrom: F,
                        dateTo: P,
                        setDateTo: X
                    },
                    gamesTime: S,
                    imageFormat: b,
                    overrideRefinementList: C,
                    refinementListConfiguration: W,
                    rtl: I,
                    searchResultsCtaConfiguration: B,
                    ctaResultItemData: null != G ? G : null == B ? void 0 : B.defaultCta,
                    setCtaResultItemData: K,
                    selectedEntity: z,
                    setSelectedEntity: U,
                    queryDebouncerDelay: R
                }), [T, y, a, L, A, P, S, b, C, W, I, G, B, z, R]);
                return (0, p.tZ)(eh.Provider, {
                    value: V,
                    children: (0, p.BX)(er.Wrapper, {
                        "data-cy": "algolia-search-container",
                        children: [!M && (0, p.tZ)(er.LogoWrapper, {
                            children: (0, p.tZ)(er.Logo, {
                                src: O,
                                "data-cy": "algolia-search-logo",
                                alt: "Algolia Search Logo",
                                "aria-hidden": "true"
                            })
                        }), (0, p.BX)(el.p, {
                            searchClient: H,
                            indexName: l,
                            children: [(0, p.tZ)(ea.T, {
                                filters: D,
                                ruleContexts: [null != r ? r : o]
                            }), (0, p.tZ)(er.SearchContainer, {
                                children: (0, p.tZ)(tV, {
                                    recentSearchKey: null != v ? v : "",
                                    recentSearchesLimit: g,
                                    trendings: m,
                                    disableHistory: s,
                                    disableRefinementList: u,
                                    disableTrendings: c,
                                    sortItems: f,
                                    hideSort: k,
                                    filtersLabel: x,
                                    showCounter: Z,
                                    imgPathPrefix: E
                                })
                            })]
                        })]
                    })
                })
            };
            let t3 = w.styled.div.withConfig({
                    componentId: "sc-63902cd0-0"
                })(["background-color:", ";bottom:0;display:flex;height:100%;justify-content:center;left:0;overflow-y:scroll;position:fixed;right:0;top:0;width:100%;z-index:19;"], v.O9.white),
                t5 = w.styled.div.withConfig({
                    componentId: "sc-63902cd0-1"
                })(["max-width:64rem;padding:0 ", "rem;width:100%;"], v.t8.XS);
            var t6 = {
                SearchOverlayWrapper: t3,
                CloseButton: w.styled.div.withConfig({
                    componentId: "sc-63902cd0-2"
                })(["position:absolute;right:", "rem;top:", "rem;width:fit-content;html[dir='rtl'] &,div[dir='rtl'] &{left:", "rem;right:auto;}& > button{height:2.4rem;width:2.4rem;}", "{right:", "rem;top:", "rem;html[dir='rtl'] &,div[dir='rtl'] &{left:", "rem;right:auto;}}"], v.t8.XS, v.t8.XS, v.t8.XS, (0, v.TE)(v.u3.MD), v.t8.S, v.t8.S, v.t8.S),
                AlgoliaWrapper: t5
            };
            (a = u || (u = {})).normal = "normal", a.interface = "interface", a.overlay = "overlay", a.slim = "slim", (o = m || (m = {})).desktop = "desktop", o.mobile = "mobile", (r = g || (g = {})).OLY = "oly", r.PARA = "para", r.OTR = "otr", r.PTR = "ptr", r.OTR_FR = "otr_fr", r.PTR_FR = "ptr_fr", r.SLIM = "slim", r.FLIP_FLOP = "flip_flop";
            let t8 = {
                    xs: 1,
                    sm: 1,
                    md: .4,
                    lg: 1,
                    xl: 1,
                    xxl: 1
                },
                t9 = {
                    xs: .75,
                    sm: .75,
                    md: .4,
                    lg: .75,
                    xl: 1,
                    xxl: 1
                },
                t7 = {
                    xs: .5,
                    sm: .5,
                    md: .4,
                    lg: .5,
                    xl: .875,
                    xxl: .875
                };
            g.OTR_FR, g.PTR_FR;
            let ne = () => {
                var e, t;
                null === (t = window.THEOplayer) || void 0 === t || null === (e = t.players) || void 0 === e || e.forEach(e => {
                    null == e || e.pause()
                })
            };
            var nt = e => {
                    var t, n;
                    let {
                        searchModule: i,
                        i18n: {
                            search: l
                        },
                        closeOverlay: a,
                        emblem: o
                    } = e, r = o === g.PARA ? "p2024-para" : "p2024-oly";
                    return (0, h.useEffect)(() => {
                        ne()
                    }, []), (0, p.BX)(t6.SearchOverlayWrapper, {
                        "data-cy": "search-overlay",
                        children: [(0, p.tZ)(t6.CloseButton, {
                            children: (0, p.tZ)(ei, {
                                rounded: !0,
                                id: "p2024-close-button",
                                ariaLabel: l,
                                onClick: a,
                                children: (0, p.tZ)(q.cY, {})
                            })
                        }), i && (0, p.tZ)(t6.AlgoliaWrapper, {
                            "data-cy": "p2024-algolia-wrapper",
                            children: (0, p.tZ)(t4, {
                                apiKey: i.apiKey,
                                appId: i.appId,
                                indexName: i.indexName,
                                locale: i.locale,
                                logoUrl: i.logoUrl,
                                recentSearchesLimit: i.recentSearchesLimit,
                                recentSearchKey: i.recentSearchKey,
                                i18n: i.i18n,
                                disableHistory: i.disableHistory,
                                disableRefinementList: i.disableRefinementList,
                                disableTrendings: i.disableTrendings,
                                gamesTime: i.gamesTime,
                                hideLogo: i.hideLogo,
                                hideSort: i.hideSort,
                                imageFormat: i.imageFormat,
                                sortItems: i.sortItems,
                                trendings: i.trendings,
                                fallbackImageUrl: i.fallbackImageUrl,
                                context: "p2024",
                                overrideRefinementList: null === (t = i.refinementListItemTabConfiguration) || void 0 === t ? void 0 : t.tabs[0].types,
                                refinementListConfiguration: i.refinementListItemTabConfiguration,
                                ruleContext: r,
                                imgPathPrefix: null !== (n = null == i ? void 0 : i.imgPathPrefix) && void 0 !== n ? n : "",
                                searchResultsCtaConfiguration: null == i ? void 0 : i.searchResultsCtaConfiguration,
                                queryDebouncerDelay: null == i ? void 0 : i.queryDebouncerDelay
                            })
                        })]
                    })
                },
                nn = n(42771);
            let ni = w.styled.div.withConfig({
                    componentId: "sc-e45c75c7-0"
                })(["background-color:", ";height:100%;left:0;overflow-x:hidden;position:fixed;top:0;width:100%;z-index:19;*{box-sizing:border-box;}", "{display:flex;}&.hidden{visibility:hidden;}"], v.O9.gray20, (0, v.TE)(v.u3.LG)),
                nl = w.styled.div.withConfig({
                    componentId: "sc-e45c75c7-1"
                })(["background-color:", ";height:fit-content;min-height:100%;padding:6.1rem ", "rem ", "rem ", "rem;position:relative;top:0;width:100%;z-index:20;", "{height:fit-content;padding:", "rem ", "rem ", "rem ", "rem;position:static;width:33%;}"], v.O9.black, v.t8.XXS, v.t8.S, v.t8.XXS, (0, v.TE)(v.u3.LG), v.t8.Spacing12, v.t8.Spacing06, v.t8.S, v.t8.Spacing06),
                na = w.styled.div.withConfig({
                    componentId: "sc-e45c75c7-2"
                })(["background-color:", ";display:flex;padding:", "rem ", "rem;position:fixed;width:100%;z-index:23;", "{background-color:transparent;padding:", "rem;}"], e => {
                    let {
                        $isNotFirstLevel: t
                    } = e;
                    return t ? v.O9.gray20 : v.O9.black
                }, v.t8.S, v.t8.XS, (0, v.TE)(v.u3.LG), v.t8.S),
                no = w.styled.div.withConfig({
                    componentId: "sc-e45c75c7-3"
                })(["border:0.1rem solid ", ";border-radius:5.8rem;width:fit-content;"], v.O9.black),
                nr = w.styled.div.withConfig({
                    componentId: "sc-e45c75c7-4"
                })(["display:", ";margin-left:auto;html[dir='rtl'] &,div[dir='rtl'] &{margin-left:0;margin-right:auto;}"], e => {
                    let {
                        $hidden: t
                    } = e;
                    return t ? "none" : "block"
                }),
                nd = w.styled.div.withConfig({
                    componentId: "sc-e45c75c7-5"
                })(["border-bottom:0.1rem solid ", ";margin-bottom:", "rem;margin-top:", "rem;padding-bottom:", "rem;"], v.O9.graphiteGray, v.t8.S, v.t8.Spacing04, v.t8.S),
                nc = w.styled.a.withConfig({
                    componentId: "sc-e45c75c7-6"
                })(["align-items:center;border-radius:0.4rem;color:", ";display:flex;cursor:pointer;margin-bottom:", "rem;padding:", "rem;width:100%;&:hover,&:focus,&.-active{background-color:", ";color:", ";a{color:", ";}}html[dir='rtl'] &,div[dir='rtl'] &{svg{rotate:180deg;}}"], v.O9.white, v.t8.XXS, v.t8.XXS, v.O9.white, v.O9.black, v.O9.black),
                ns = w.styled.a.withConfig({
                    componentId: "sc-e45c75c7-7"
                })(["align-items:center;border-radius:0.4rem;color:", ";display:flex;gap:", "rem;margin-bottom:", "rem;padding:", "rem;&:hover,&:focus{background-color:", ";color:", ";}"], v.O9.white, v.t8.XXS, v.t8.XXS, v.t8.XXS, v.O9.white, v.O9.black),
                nu = w.styled.div.withConfig({
                    componentId: "sc-e45c75c7-8"
                })(["border-top:0.1rem solid ", ";margin-top:", "rem;padding-top:", "rem;.text--cta{color:", ";}:hover .text-cta{color:", ";}"], v.O9.graphiteGray, v.t8.S, v.t8.Spacing05, v.O9.black, v.O9.white),
                nm = w.styled.a.withConfig({
                    componentId: "sc-e45c75c7-9"
                })(["align-items:center;display:flex;gap:1rem;padding-bottom:", "rem;width:fit-content;span{color:", ";}"], v.t8.XXS, v.O9.white),
                ng = w.styled.div.withConfig({
                    componentId: "sc-e45c75c7-10"
                })(["align-items:center;background-color:", ";border-radius:0.5rem;display:flex;height:", "rem;justify-content:center;width:", "rem;html[dir='rtl'] &,div[dir='rtl'] &{svg{rotate:180deg;}}"], v.O9.gray20, v.t8.Spacing04, v.t8.Spacing04),
                np = w.styled.div.withConfig({
                    componentId: "sc-e45c75c7-11"
                })(["background-color:", ";height:100%;min-height:100%;opacity:", ";overflow-y:auto;padding:10.4rem ", "rem ", "rem ", "rem;position:fixed;top:0;transition:translate 0.5s,opacity 0.5s;translate:", ";width:100%;z-index:21;", "{height:auto;margin:10rem 0 ", "rem 0;min-height:auto;padding:0 ", "rem 0 ", "rem;position:static;translate:", ";width:33%;z-index:19;}html[dir='rtl'] &,div[dir='rtl'] &{translate:", ";", "{translate:", ";}}"], v.O9.gray20, e => {
                    let {
                        $isOpen: t
                    } = e;
                    return t ? "1" : "0"
                }, v.t8.XS, v.t8.S, v.t8.XS, e => {
                    let {
                        $isOpen: t
                    } = e;
                    return t ? "0" : "100%"
                }, (0, v.TE)(v.u3.LG), v.t8.S, v.t8.Spacing06, v.t8.Spacing06, e => {
                    let {
                        $isOpen: t
                    } = e;
                    return t ? "0" : "-100%"
                }, e => {
                    let {
                        $isOpen: t
                    } = e;
                    return t ? "0" : "-100%"
                }, (0, v.TE)(v.u3.LG), e => {
                    let {
                        $isOpen: t
                    } = e;
                    return t ? "0" : "100%"
                }),
                nh = (0, w.styled)(np).withConfig({
                    componentId: "sc-e45c75c7-12"
                })(["", "{border-left:0.1rem solid ", ";z-index:18;html[dir='rtl'] &,div[dir='rtl'] &{border-left:none;border-right:0.1rem solid ", ";}}"], (0, v.TE)(v.u3.LG), v.O9.graphiteGray, v.O9.graphiteGray),
                nv = (0, w.styled)(f.Z).withConfig({
                    componentId: "sc-e45c75c7-13"
                })(["color:", ";margin:", "rem 0 ", "rem 0;", "{margin:0 0 ", "rem 0;}"], v.O9.white, v.t8.Spacing04, v.t8.Spacing04, (0, v.TE)(v.u3.LG), v.t8.Spacing04),
                nf = (0, w.styled)(f.Z).withConfig({
                    componentId: "sc-e45c75c7-14"
                })(["color:", ";cursor:pointer;display:flex;", "{display:none;}"], v.O9.white, (0, v.TE)(v.u3.LG));
            var ny = {
                MenuWrapper: ni,
                MenuFirstLevel: nl,
                MenuHeadingRow: na,
                CloseButton: no,
                DropdownsContainer: nr,
                MenuLinksWrapper: nd,
                MenuLink: nc,
                SecondaryMenuLink: ns,
                LoginButton: nu,
                SwitchButton: nm,
                SwitchArrow: ng,
                MenuSecondLevel: np,
                MenuThirdLevel: nh,
                SecondLevelTitle: nv,
                BackButton: nf,
                BackButtonIcon: (0, w.styled)(f.Z).withConfig({
                    componentId: "sc-e45c75c7-15"
                })(["align-items:center;display:flex;height:", "rem;margin-right:0.2rem;width:", "rem;html[dir='rtl'] &,div[dir='rtl'] &{svg{rotate:180deg;}}"], v.t8.S, v.t8.XS),
                Nav: w.styled.nav.withConfig({
                    componentId: "sc-e45c75c7-16"
                })(["z-index:1;"]),
                TextContainer: (0, w.styled)(nn.F).withConfig({
                    componentId: "sc-e45c75c7-17"
                })(["align-items:center;gap:", "rem;width:100%;"], v.t8.XXS)
            };
            let nb = w.styled.div.withConfig({
                    componentId: "sc-2f59167b-0"
                })(["height:fit-content;position:relative;text-transform:uppercase;#p2024-languageButton-header{padding-left:0;padding-right:0;}"]),
                nS = w.styled.span.withConfig({
                    componentId: "sc-2f59167b-1"
                })(["display:flex;font-size:2rem;justify-content:center;margin-left:0.4rem;pointer-events:none;html[dir='rtl'] &,div[dir='rtl'] &{margin-left:0;margin-right:", "rem;}", "{margin-left:", "rem;}"], v.t8.XXS, (0, v.TE)(v.u3.XL), v.t8.XXS);
            var nw = {
                DropdownWrapper: nb,
                DropdownButtonIcon: nS,
                DropdownList: w.styled.ul.withConfig({
                    componentId: "sc-2f59167b-2"
                })(["background-color:", ";border-radius:", "rem;box-shadow:0 0.3rem 1.5rem 0 rgba(0,0,0,0.06);gap:1.2rem;margin:", "rem 0 0 0;padding:1.2rem;position:absolute;right:0;z-index:15;", "{background-color:", ";}html[dir='rtl'] &,div[dir='rtl'] &{left:0;right:auto;}"], v.O9.graphiteGray, v.t8.XXS, v.t8.XXS, (0, v.TE)(v.u3.LG), v.O9.black),
                DropdownListItem: w.styled.li.withConfig({
                    componentId: "sc-2f59167b-3"
                })(["align-items:center;border-bottom:", ";display:flex;padding:1.2rem 0;&:first-of-type{padding-top:0;}&:last-of-type{border-bottom:none;padding-bottom:0;}a,span{color:", ";font-weight:700;white-space:nowrap;&:hover,&:focus{text-decoration:underline;}", "{font-size:1.1rem;}}"], e => {
                    let {
                        theme: t
                    } = e;
                    return "0.1rem solid ".concat(t.colors.dropdownSeparator)
                }, v.O9.white, (0, v.__)(v.u3.LG, v.u3.XL)),
                ProfileButton: w.styled.button.withConfig({
                    componentId: "sc-2f59167b-4"
                })(["background-color:transparent;border:none;cursor:pointer;padding:0;text-transform:uppercase;span{", "{font-size:1.1rem;}}"], (0, v.__)(v.u3.LG, v.u3.XL))
            };
            let nM = e => {
                var t, n, i, l, a;
                let {
                    items: o,
                    isUserDropdown: r,
                    logout: d,
                    goToAccountUpdate: c,
                    updateFavoritesUrl: s,
                    dataTrackingPayload: u,
                    hideFavouritesLink: m
                } = e, g = m ? null == o ? void 0 : o.filter(e => "favourites" !== e.code) : o, h = null == g ? void 0 : g.find(e => "my-profile" === e.code), y = null == g ? void 0 : g.find(e => "favourites" === e.code), b = null == g ? void 0 : g.find(e => "sign-out" === e.code);
                return (null == o ? void 0 : o.length) ? (0, p.tZ)(p.HY, {
                    children: r ? (0, p.BX)(nw.DropdownList, {
                        "data-cy": "user-dropdown-list",
                        children: [h && (0, p.tZ)(nw.DropdownListItem, {
                            children: (0, p.tZ)(nw.ProfileButton, {
                                type: "button",
                                onClick: () => {
                                    c && c()
                                },
                                "data-tracking-payload": JSON.stringify({
                                    module: null !== (t = null == u ? void 0 : u.module) && void 0 !== t ? t : "Header",
                                    link_tag: "My Profile",
                                    module_instance: null !== (n = null == u ? void 0 : u.moduleInstance) && void 0 !== n ? n : "P2024 - Top menu",
                                    destination_url: null !== (i = null == h ? void 0 : h.url) && void 0 !== i ? i : "/account/profile"
                                }),
                                "data-tracking": "click",
                                "data-cy": "my-profile",
                                children: (0, p.tZ)(f.Z, {
                                    tag: "span",
                                    variant: v.El.sm,
                                    children: null == h ? void 0 : h.title
                                })
                            })
                        }), y && (0, p.tZ)(nw.DropdownListItem, {
                            "data-cy": "update-favourites",
                            children: (0, p.tZ)(f.Z, {
                                tag: "a",
                                variant: v.El.sm,
                                href: s,
                                "data-tracking-payload": JSON.stringify({
                                    module: null !== (l = null == u ? void 0 : u.module) && void 0 !== l ? l : "Header",
                                    link_tag: "Favourites",
                                    module_instance: null !== (a = null == u ? void 0 : u.moduleInstance) && void 0 !== a ? a : "P2024 - Top menu",
                                    destination_url: s
                                }),
                                children: null == y ? void 0 : y.title
                            })
                        }), b && (0, p.tZ)(nw.DropdownListItem, {
                            children: (0, p.tZ)(nw.ProfileButton, {
                                type: "button",
                                onClick: () => {
                                    if (d) {
                                        d();
                                        let e = new CustomEvent("user-logout");
                                        window.dispatchEvent(e)
                                    }
                                },
                                "data-cy": "logout-button",
                                children: (0, p.tZ)(f.Z, {
                                    tag: "span",
                                    variant: v.El.sm,
                                    children: null == b ? void 0 : b.title
                                })
                            })
                        })]
                    }) : (0, p.tZ)(nw.DropdownList, {
                        "data-cy": "dropdown-list",
                        children: null == g ? void 0 : g.map(e => (0, p.tZ)(nw.DropdownListItem, {
                            children: (0, p.tZ)(f.Z, {
                                tag: "a",
                                variant: v.El.sm,
                                href: e.url,
                                "data-tracking": "click",
                                "data-tracking-payload": JSON.stringify({
                                    link_tag: e.title,
                                    destination_url: e.url,
                                    module: null == u ? void 0 : u.module,
                                    module_instance: null == u ? void 0 : u.moduleInstance
                                }),
                                children: e.title
                            })
                        }, e.code))
                    })
                }) : (0, p.tZ)(p.HY, {})
            };
            var nk = e => {
                let {
                    items: t,
                    children: n,
                    isUserDropdown: i,
                    id: l,
                    ariaLabel: a,
                    logout: o,
                    goToAccountUpdate: r,
                    updateFavoritesUrl: d,
                    gigyaIsReady: c,
                    dataTrackingPayload: s,
                    filledIcon: u,
                    dataCy: m,
                    hideFavouritesLink: g
                } = e, [f, b] = (0, h.useState)(!1), S = (0, y.O3)(() => {
                    f && b(!1)
                }), w = u ? (0, p.tZ)(q.LH, {
                    color: f ? v.O9.white : v.O9.black
                }) : (0, p.tZ)(q.NZ, {
                    color: f ? v.O9.white : v.O9.black
                });
                return (0, p.BX)(nw.DropdownWrapper, {
                    ref: S,
                    "data-cy": m,
                    tabIndex: -1,
                    children: [(0, p.BX)(ei, {
                        dark: f,
                        onClick: c ? () => {
                            (0, eg.Rf)({
                                language: "",
                                module: "Header",
                                moduleInstance: "P2024 - Top menu",
                                contentExpanded: !f,
                                ...s
                            }, i), b(!f)
                        } : () => void 0,
                        id: l,
                        ariaLabel: a,
                        ariaExpanded: f,
                        children: [i ? w : (0, p.tZ)(p.HY, {
                            children: n
                        }), (0, p.tZ)(nw.DropdownButtonIcon, {
                            children: f ? (0, p.tZ)(q.yn, {
                                color: f ? v.O9.white : v.O9.black
                            }) : (0, p.tZ)(q.pb, {
                                color: f ? v.O9.white : v.O9.black
                            })
                        })]
                    }), f && (0, p.tZ)(nM, {
                        items: t,
                        isUserDropdown: i,
                        logout: o,
                        goToAccountUpdate: r,
                        updateFavoritesUrl: d,
                        dataTrackingPayload: s,
                        hideFavouritesLink: g
                    })]
                })
            };
            let nx = (e, t, n, i) => {
                    var l;
                    if (!i || !t) return;
                    let a = t === v.u3.LG || t === v.u3.XL || t === v.u3.XXL ? v.u3.XL : v.u3.XS,
                        o = null === (l = e.typography) || void 0 === l ? void 0 : l.title,
                        r = (0, y.SN)(n) ? "base" : v.SQ[n],
                        d = nT(i);
                    if (o) {
                        let e = o.base ? o.base[a] : void 0;
                        o[r] && o[r][a] && (e = o[r][a]);
                        let n = null == e ? void 0 : e.fontSize;
                        if (!n) return;
                        let i = Number(n.replace("rem", "")) * d[t],
                            l = Number(n.replace("rem", "")) * d[t];
                        return {
                            fontSize: "".concat(i, "rem"),
                            lineHeight: "".concat(l, "rem")
                        }
                    }
                },
                nT = e => e.length > 45 ? t7 : e.length > 24 && e.length <= 44 ? t9 : t8,
                nL = (e, t) => {
                    let n = e.split(":");
                    return n[0] = n[0].concat(": ".concat(t)), n.join("")
                },
                nC = e => e.length > 80 ? "".concat(e.substring(0, 80), "…") : e,
                nZ = 0,
                nW = !0,
                nE = !1,
                nI = (e, t, n) => {
                    var i, l, a, o, r, d, c, s;
                    let {
                        clientHeight: u
                    } = e, m = null === (l = document) || void 0 === l ? void 0 : null === (i = l.getElementById("header-adv-banner")) || void 0 === i ? void 0 : i.getBoundingClientRect(), g = null === (o = document) || void 0 === o ? void 0 : null === (a = o.getElementById("stickySpacing")) || void 0 === a ? void 0 : a.getBoundingClientRect(), p = null !== (c = null !== (d = null == g ? void 0 : g.height) && void 0 !== d ? d : null == m ? void 0 : m.height) && void 0 !== c ? c : 0, h = null !== (s = null === (r = window) || void 0 === r ? void 0 : r.scrollY) && void 0 !== s ? s : 0;
                    return nW = h > nZ, nZ = h, nW ? h > u + n && (nE = !0) : u + p + t >= nZ && (nE = !1), !nE
                },
                nB = (e, t) => {
                    let {
                        icon: n
                    } = nR(e);
                    switch (n) {
                        case "shop":
                            return (0, p.tZ)(q.k3, {
                                color: t
                            });
                        case "tickets":
                            return (0, p.tZ)(q.Nu, {
                                color: t
                            });
                        default:
                            return
                    }
                },
                nR = e => {
                    let t = {};
                    return e && e.forEach(e => {
                        let n = e.split(":"),
                            i = n[0],
                            l = n[1];
                        t[i] = l
                    }), t
                },
                n_ = () => {
                    var e, t;
                    return document.cookie.includes("glt_".concat(null === (t = window) || void 0 === t ? void 0 : null === (e = t.gigya) || void 0 === e ? void 0 : e.apiKey))
                },
                nO = e => {
                    setTimeout(() => {
                        if (e && e.id) {
                            var t, n;
                            null === (t = document.getElementById(null !== (n = e.id) && void 0 !== n ? n : "")) || void 0 === t || t.focus()
                        }
                    }, 500)
                };
            var nH = e => {
                    let {
                        userLinks: t,
                        filledIcon: n,
                        quickLinks: i,
                        languageList: l,
                        location: a,
                        hideFavouritesLink: o,
                        customSignInQueryParams: r,
                        customFavoritesQueryParams: d,
                        i18n: {
                            srSiteLanguage: c,
                            srCurrentLanguage: s,
                            userSettings: u,
                            manageMyProfile: m,
                            login: g
                        },
                        languageDropdownButtonId: f
                    } = e, {
                        logout: b,
                        goToAccountUpdate: S,
                        updateFavoritesUrl: w,
                        getSignInUrl: M,
                        ready: k
                    } = (0, J.ug)(), [x, T] = h.useState("En"), [L, C] = h.useState(), [Z, W] = h.useState(), [E, I] = h.useState(), [B, R] = h.useState();
                    h.useEffect(() => {
                        let e = 0,
                            t = () => {
                                setTimeout(() => {
                                    if (e <= 10) {
                                        var n;
                                        e++, (null === (n = window) || void 0 === n ? void 0 : n.gigya) ? _(): t()
                                    } else _()
                                }, 1e3)
                            };
                        t()
                    }, []);
                    let _ = () => {
                        C(n_), W(!0)
                    };
                    return h.useEffect(() => {
                        if (R(L ? void 0 : M(window.location.href, "home_sign_in", "", void 0, void 0, r)), w) {
                            let e = window.location.pathname.split("/")[1],
                                t = d ? "?".concat(d) : "";
                            I("".concat("/".concat(e, "/account/signup-preferences")).concat(t))
                        }
                    }, [d, r, M, L, w]), h.useEffect(() => {
                        if (l) {
                            let e = window.location.pathname.split("/")[1],
                                t = l.filter(t => t.code === e);
                            T(t.length ? t[0].title : "En")
                        }
                    }, [l]), (0, p.BX)(j.ButtonGroup, {
                        "data-cy": "user-dropdowns",
                        children: [(0, p.tZ)(j.ScreenReaderOnlyH2, {
                            children: c
                        }), i && (0, p.tZ)(j.QuickLinksWrapper, {
                            children: null == i ? void 0 : i.map(e => {
                                var t, n;
                                return (0, p.tZ)(j.LinkButton, {
                                    tag: "a",
                                    variant: v.El.sm,
                                    href: null !== (t = e.link) && void 0 !== t ? t : void 0,
                                    target: null !== (n = e.target) && void 0 !== n ? n : void 0,
                                    "data-cy": "topbar-button",
                                    "data-tracking-payload": JSON.stringify({
                                        content_id: e.id,
                                        module: "Header",
                                        module_instance: "P2024 - Top menu",
                                        link_tag: e.text,
                                        destination_url: e.link
                                    }),
                                    children: e.text
                                }, e.text)
                            })
                        }), (0, p.tZ)(nk, {
                            items: l,
                            id: f,
                            ariaLabel: nL(s, x),
                            gigyaIsReady: !0,
                            dataTrackingPayload: {
                                linkTag: "language",
                                module: "Hamburger menu",
                                moduleInstance: "Hamburger - P2024",
                                destination_url: a
                            },
                            dataCy: "header-dropdown",
                            children: (0, p.tZ)(j.ButtonText, {
                                variant: v.El.sm,
                                children: x
                            })
                        }), Z && (0, p.tZ)(p.HY, {
                            children: L ? (0, p.tZ)(nk, {
                                items: t,
                                isUserDropdown: !0,
                                hideFavouritesLink: o,
                                filledIcon: n,
                                id: "p2024-user-header-mobile",
                                ariaLabel: n ? u : m,
                                logout: b,
                                goToAccountUpdate: S,
                                updateFavoritesUrl: E,
                                gigyaIsReady: k,
                                dataTrackingPayload: {
                                    linkTag: "user options",
                                    module: "Hamburger menu",
                                    moduleInstance: "Hamburger - P2024",
                                    destination_url: a
                                },
                                dataCy: "logged-dropdown"
                            }) : (0, p.tZ)(p.HY, {
                                children: n ? (0, p.tZ)(ei, {
                                    id: "p2024-user-header-mobile",
                                    ariaLabel: g,
                                    rounded: !0,
                                    dataCy: "filled-icon",
                                    tag: "a",
                                    href: B,
                                    dataTrackingPayload: {
                                        module: "Hamburger menu",
                                        moduleInstance: "Hamburger - P2024",
                                        linkTag: "Log In or Register",
                                        destinationUrl: B,
                                        entryPointType: (0, y.Lj)(null != B ? B : "", "entry_point_type"),
                                        entryPointTag: (0, y.Lj)(null != B ? B : "", "entry_point_tag")
                                    },
                                    children: (0, p.tZ)(q.NZ, {})
                                }) : (0, p.tZ)(j.LinkButton, {
                                    id: "p2024-user-header-mobile",
                                    tag: "a",
                                    "data-cy": "login-button",
                                    "aria-label": g,
                                    variant: v.El.sm,
                                    href: B,
                                    "data-tracking-payload": JSON.stringify({
                                        module: "Header",
                                        module_instance: "P2024 - Top menu",
                                        link_tag: "Login",
                                        destination_url: B,
                                        entryPointType: (0, y.Lj)(null != B ? B : "", "entry_point_type"),
                                        entryPointTag: (0, y.Lj)(null != B ? B : "", "entry_point_tag")
                                    }),
                                    children: g
                                })
                            })
                        })]
                    })
                },
                nA = n(11163),
                nF = e => {
                    let {
                        link: t,
                        isSecondary: n,
                        isActive: i,
                        handleClick: l,
                        shopUrl: a,
                        dataTrackingPayload: o,
                        target: r
                    } = e, [d, c] = (0, h.useState)(v.O9.white), {
                        locale: s
                    } = (0, nA.useRouter)(), u = t.navLinks && t.navLinks.length > 0, m = (0, h.useRef)(null);
                    (0, h.useEffect)(() => {
                        c(i ? v.O9.black : v.O9.white)
                    }, [i]);
                    let g = (() => {
                        let {
                            tag: e
                        } = nR(t.customProperties);
                        return "shop" === t.tag || "shop" === e ? a : u ? "#" : t.link
                    })();
                    return g ? (0, p.tZ)("div", {
                        onMouseEnter: () => c(v.O9.black),
                        onFocus: () => c(v.O9.black),
                        onMouseLeave: () => !i && c(v.O9.white),
                        onBlur: () => !i && c(v.O9.white),
                        "data-cy": "menu-link-wrapper",
                        ref: m,
                        children: n ? (0, p.BX)(ny.SecondaryMenuLink, {
                            as: "a",
                            href: g,
                            "data-cy": "secondary-link",
                            "data-tracking": "click",
                            "data-tracking-payload": JSON.stringify(o),
                            target: null != r ? r : void 0,
                            children: [nB(t.customProperties, d), (0, p.tZ)(ny.TextContainer, {
                                variant: v.El.body,
                                lang: s,
                                children: t.text
                            })]
                        }, t.text) : (0, p.BX)(ny.MenuLink, {
                            id: t.id,
                            href: g,
                            onClick: u ? l : void 0,
                            "data-cy": "menu-link",
                            className: i ? "-active" : "",
                            "data-tracking": "click",
                            "data-tracking-payload": JSON.stringify(o),
                            target: null != r ? r : void 0,
                            children: [(0, p.tZ)(ny.TextContainer, {
                                variant: v.El.body,
                                lang: s,
                                children: t.text
                            }), u && (0, p.tZ)(q.ol, {
                                color: d
                            })]
                        }, t.text)
                    }, t.id) : (0, p.tZ)(p.HY, {})
                },
                nP = e => {
                    let {
                        closeMenu: t,
                        languageList: n,
                        userLinks: i,
                        menuLinks: l,
                        secondaryLinks: a,
                        entryPointType: o,
                        switchButton: r,
                        shopUrl: d,
                        location: c,
                        hideFavouritesLink: s,
                        customSignInQueryParams: u,
                        customFavoritesQueryParams: m,
                        isUsingKeyboard: g,
                        isOpen: b,
                        i18n: {
                            loginButtonLabel: w,
                            userSettings: M,
                            manageMyProfile: k,
                            login: x,
                            srSiteLanguage: T,
                            srCurrentLanguage: L,
                            srMainNavigation: C,
                            srSecondaryNavigation: Z,
                            closeMainMenu: W,
                            loginButton: E,
                            back: R
                        }
                    } = e, _ = (0, B.G)((0, I.up)(v.u3.LG)), {
                        isLoggedIn: O,
                        getSignInUrl: H
                    } = (0, J.ug)(), [A, F] = h.useState(), [P, X] = h.useState([]), [D, N] = h.useState(), [G, K] = h.useState([]), [z, U] = h.useState(), V = h.useRef(null);
                    h.useEffect(() => F(O ? void 0 : H(window.location.href, o, "", void 0, void 0, u)), [u, o, H, O]);
                    let Y = e => {
                            Q(!0), X(e.navLinks), N(e.text), e.navLinks && g && nO(e.navLinks[0])
                        },
                        $ = e => {
                            z !== e.text && (K(e.navLinks), U(e.text), e.navLinks && g && nO(e.navLinks[0]))
                        },
                        Q = e => {
                            e ? (K(void 0), U(void 0)) : (X(void 0), N(void 0))
                        };
                    return (0, p.BX)(ny.MenuWrapper, {
                        "data-cy": "manu-overlay",
                        className: S()(!b && "hidden"),
                        ref: V,
                        children: [(0, p.BX)(ny.MenuHeadingRow, {
                            $isNotFirstLevel: (null == P ? void 0 : P.length) && P.length > 0,
                            children: [(0, p.tZ)(ny.Nav, {
                                children: (0, p.tZ)(ny.CloseButton, {
                                    children: (0, p.tZ)(ei, {
                                        rounded: !0,
                                        id: "p2024-close-button",
                                        ariaLabel: W,
                                        onClick: t,
                                        dataTrackingPayload: {
                                            module: "Hamburger menu",
                                            moduleInstance: "Hamburger - P2024",
                                            linkTag: "Hamburger menu - Close",
                                            destinationUrl: c
                                        },
                                        children: (0, p.tZ)(q.b3, {
                                            size: "16"
                                        })
                                    })
                                })
                            }), (0, p.tZ)(ny.DropdownsContainer, {
                                $hidden: _ || (null == P ? void 0 : P.length) && P.length > 0,
                                children: (0, p.tZ)(nH, {
                                    languageList: n,
                                    userLinks: i,
                                    filledIcon: !0,
                                    languageDropdownButtonId: "p2024-languageButton-header-mobile",
                                    location: c,
                                    hideFavouritesLink: s,
                                    customSignInQueryParams: u,
                                    customFavoritesQueryParams: m,
                                    i18n: {
                                        loginButtonLabel: w,
                                        userSettings: M,
                                        manageMyProfile: k,
                                        login: x,
                                        srSiteLanguage: T,
                                        srCurrentLanguage: L
                                    }
                                })
                            })]
                        }), (0, p.BX)(ny.MenuFirstLevel, {
                            children: [r && r.link && (0, p.tZ)(ny.MenuLinksWrapper, {
                                "data-cy": "menu-links",
                                children: (0, p.BX)(ny.SwitchButton, {
                                    href: r.link,
                                    "data-tracking": "click",
                                    "data-tracking-payload": JSON.stringify({
                                        link_tag: r.text,
                                        content_id: r.id,
                                        destination_url: r.link,
                                        module: "Hamburger menu - Secondary Navigation",
                                        module_instance: "Hamburger - P2024"
                                    }),
                                    children: [(0, p.tZ)(f.Z, {
                                        variant: V.current && v.El.cta,
                                        children: r.text
                                    }), (0, p.tZ)(ny.SwitchArrow, {
                                        children: (0, p.tZ)(q.ol, {
                                            color: v.O9.white
                                        })
                                    })]
                                })
                            }), l && l.length > 0 && (0, p.BX)(ny.MenuLinksWrapper, {
                                "data-cy": "menu-links",
                                children: [(0, p.tZ)(j.ScreenReaderOnlyH2, {
                                    children: C
                                }), l.map(e => {
                                    var t, n;
                                    return (0, p.tZ)(nF, {
                                        handleClick: () => Y(e),
                                        link: e,
                                        isActive: D === e.text,
                                        target: null !== (n = e.target) && void 0 !== n ? n : void 0,
                                        dataTrackingPayload: {
                                            link_tag: e.text,
                                            content_id: e.id,
                                            destination_url: (null === (t = e.navLinks) || void 0 === t ? void 0 : t.length) ? c : e.link,
                                            module: "Hamburger menu - Main Navigation",
                                            module_instance: "Hamburger - P2024"
                                        }
                                    }, e.id)
                                })]
                            }), a && a.length > 0 && (0, p.BX)("div", {
                                "data-cy": "secondary-links",
                                children: [(0, p.tZ)(j.ScreenReaderOnlyH2, {
                                    children: Z
                                }), a.map(e => {
                                    var t;
                                    return (0, p.tZ)(nF, {
                                        link: e,
                                        isSecondary: !0,
                                        shopUrl: d,
                                        target: null !== (t = e.target) && void 0 !== t ? t : void 0,
                                        dataTrackingPayload: {
                                            link_tag: e.text,
                                            content_id: e.id,
                                            destination_url: e.link,
                                            module: "Hamburger menu - Secondary Navigation",
                                            module_instance: "Hamburger - P2024"
                                        }
                                    }, e.id)
                                })]
                            }), !O && (0, p.tZ)(ny.LoginButton, {
                                "data-cy": "login-button",
                                children: (0, p.tZ)(ef.Z, {
                                    tag: "a",
                                    href: null != A ? A : "",
                                    buttonType: "cta",
                                    "data-tracking": "click",
                                    "data-tracking-payload": JSON.stringify({
                                        module: "Hamburger menu",
                                        module_instance: "Hamburger - P2024",
                                        linkTag: "Log In or Register",
                                        destination_url: A,
                                        entry_point_type: (0, y.Lj)(null != A ? A : "", "entry_point_type"),
                                        entry_point_tag: (0, y.Lj)(null != A ? A : "", "entry_point_tag")
                                    }),
                                    children: E
                                })
                            })]
                        }), (0, p.BX)(ny.MenuSecondLevel, {
                            $isOpen: !!((null == P ? void 0 : P.length) && P.length > 0),
                            "data-cy": "second-level-links",
                            children: [(0, p.BX)(ny.BackButton, {
                                tag: "a",
                                href: "#",
                                variant: v.El.body,
                                onClick: () => Q(!1),
                                "data-cy": "second-level-back",
                                "data-tracking": "click",
                                "data-tracking-payload": JSON.stringify({
                                    link_tag: "back",
                                    destination_url: c,
                                    module: "Hamburger menu - Second level Menu",
                                    module_instance: "Hamburger - P2024"
                                }),
                                children: [(0, p.tZ)(ny.BackButtonIcon, {
                                    children: (0, p.tZ)(q.s$, {})
                                }), R]
                            }), D && (0, p.tZ)(ny.SecondLevelTitle, {
                                tag: "h3",
                                variant: v.El.sTitle,
                                children: D
                            }), null == P ? void 0 : P.map(e => {
                                var t;
                                return (0, p.tZ)(nF, {
                                    link: e,
                                    handleClick: () => $(e),
                                    isActive: z === e.text,
                                    target: null !== (t = e.target) && void 0 !== t ? t : void 0,
                                    dataTrackingPayload: {
                                        link_tag: e.text,
                                        content_id: e.id,
                                        destination_url: e.link,
                                        module: "Hamburger menu - Second level Menu",
                                        module_instance: "Hamburger - P2024"
                                    }
                                }, e.id)
                            })]
                        }), (0, p.BX)(ny.MenuThirdLevel, {
                            $isOpen: !!((null == G ? void 0 : G.length) && G.length > 0),
                            "data-cy": "third-level-links",
                            children: [(0, p.BX)(ny.BackButton, {
                                tag: "a",
                                href: "#",
                                variant: v.El.body,
                                onClick: () => Q(!0),
                                "data-cy": "third-level-back",
                                "data-tracking": "click",
                                "data-tracking-payload": JSON.stringify({
                                    link_tag: "back",
                                    destination_url: c,
                                    module: "Hamburger menu - Third level Menu",
                                    module_instance: "Hamburger - P2024"
                                }),
                                children: [(0, p.tZ)(ny.BackButtonIcon, {
                                    children: (0, p.tZ)(q.s$, {})
                                }), R]
                            }), z && (0, p.tZ)(ny.SecondLevelTitle, {
                                tag: "h3",
                                variant: v.El.sTitle,
                                children: z
                            }), null == G ? void 0 : G.map(e => {
                                var t;
                                return (0, p.tZ)(nF, {
                                    link: e,
                                    target: null !== (t = e.target) && void 0 !== t ? t : void 0,
                                    dataTrackingPayload: {
                                        link_tag: e.text,
                                        content_id: e.id,
                                        destination_url: e.link,
                                        module: "Hamburger menu - Third level Menu",
                                        module_instance: "Hamburger - P2024"
                                    }
                                }, e.id)
                            })]
                        })]
                    })
                },
                nX = e => {
                    let {
                        assetsBaseUrl: t,
                        quickLinks: n,
                        rightQuickLinks: i,
                        languageList: l,
                        userLinks: a,
                        entryPointType: o,
                        shopUrl: r,
                        i18n: d,
                        emblem: c,
                        isInViewport: s,
                        searchModule: u,
                        menuLinks: m,
                        secondaryLinks: g,
                        switchButton: f,
                        location: b,
                        hideFavouritesLink: S,
                        customSignInQueryParams: w,
                        customFavoritesQueryParams: M,
                        filledIcon: k,
                        emblemLink: x
                    } = e, T = (0, B.G)((0, I.up)(v.u3.LG)), [L, C] = (0, h.useState)(!1), [Z, W] = (0, h.useState)(!1), [E, R] = (0, h.useState)(!1), [_, O] = h.useState(), [H, A] = h.useState(), [F, P] = h.useState(), [X, D] = h.useState(), N = (0, h.useMemo)(() => ({
                        search: d.search
                    }), [d.search]), G = e => {
                        document.body.style.overflow = e ? "hidden" : "auto"
                    };
                    (0, h.useEffect)(() => (G(E || L), () => G(!1)), [E, L]);
                    let K = (0, h.useCallback)(e => {
                            (0, h.startTransition)(() => {
                                C(!L), W(0 === e.screenX && 0 === e.screenY)
                            })
                        }, [L]),
                        {
                            logout: z,
                            goToAccountUpdate: U,
                            updateFavoritesUrl: V,
                            getSignInUrl: Y,
                            ready: $
                        } = (0, J.ug)(),
                        Q = () => {
                            A(n_), P(!0)
                        };
                    (0, h.useEffect)(() => {
                        let e = 0,
                            t = () => {
                                setTimeout(() => {
                                    if (e <= 10) {
                                        var n;
                                        e++, (null === (n = window) || void 0 === n ? void 0 : n.gigya) ? Q(): t()
                                    } else Q()
                                }, 1e3)
                            };
                        t()
                    }, []);
                    let ee = (0, h.useCallback)(() => {
                        (0, h.startTransition)(() => {
                            R(!E)
                        })
                    }, [E]);
                    return (0, h.useEffect)(() => {
                        L && m && Z && nO(m[0])
                    }, [L, Z, m]), (0, h.useEffect)(() => {
                        if (O(H ? void 0 : Y(window.location.href, "home_sign_in", "", void 0, void 0, w)), V) {
                            let e = window.location.pathname.split("/")[1],
                                t = M ? "?".concat(M) : "";
                            D("".concat("/".concat(e, "/account/signup-preferences")).concat(t))
                        }
                    }, [M, w, Y, H, V]), (0, p.BX)(et.TopbarWrapper, {
                        children: [(0, p.tZ)(nP, {
                            userLinks: a,
                            closeMenu: K,
                            languageList: l,
                            hideFavouritesLink: S,
                            menuLinks: m,
                            customFavoritesQueryParams: M,
                            secondaryLinks: g,
                            entryPointType: o,
                            switchButton: f,
                            shopUrl: r,
                            location: b,
                            customSignInQueryParams: w,
                            isUsingKeyboard: Z,
                            i18n: d,
                            isOpen: L
                        }), (0, p.BX)(et.TopbarLeftSection, {
                            children: [(0, p.tZ)(et.Nav, {
                                children: (0, p.tZ)(ei, {
                                    rounded: !0,
                                    ariaLabel: d.openMainMenu,
                                    onClick: K,
                                    "data-cy": "sidebar-button",
                                    dataTrackingPayload: {
                                        module: "Hamburger menu",
                                        moduleInstance: "Hamburger - P2024",
                                        linkTag: "Hamburger menu - Open",
                                        destinationUrl: b
                                    },
                                    children: (0, p.tZ)(q.pr, {
                                        size: "16"
                                    })
                                })
                            }), T && (0, p.BX)(j.ButtonGroup, {
                                "data-cy": "quicklinks",
                                children: [(0, p.tZ)(j.ScreenReaderOnlyH2, {
                                    children: d.srQuickLinks
                                }), F && (0, p.tZ)(p.HY, {
                                    children: H ? (0, p.tZ)(nk, {
                                        items: a,
                                        isUserDropdown: !0,
                                        hideFavouritesLink: S,
                                        filledIcon: k,
                                        id: "p2024-user-header",
                                        ariaLabel: k ? null == d ? void 0 : d.userSettings : null == d ? void 0 : d.manageMyProfile,
                                        logout: z,
                                        goToAccountUpdate: U,
                                        updateFavoritesUrl: X,
                                        gigyaIsReady: $,
                                        dataTrackingPayload: {
                                            linkTag: "user options",
                                            module: "Hamburger menu",
                                            moduleInstance: "Hamburger - P2024",
                                            destination_url: b
                                        },
                                        dataCy: "logged-dropdown"
                                    }) : (0, p.tZ)(p.HY, {
                                        children: k ? (0, p.tZ)(ei, {
                                            id: "p2024-user-header",
                                            ariaLabel: null == d ? void 0 : d.loginButtonLabel,
                                            rounded: !0,
                                            dataCy: "filled-icon",
                                            tag: "a",
                                            href: _,
                                            "data-cy": "login-button",
                                            dataTrackingPayload: {
                                                module: "Hamburger menu",
                                                moduleInstance: "Hamburger - P2024",
                                                linkTag: "Log In or Register",
                                                destinationUrl: _,
                                                entryPointType: (0, y.Lj)(null != _ ? _ : "", "entry_point_type"),
                                                entryPointTag: (0, y.Lj)(null != _ ? _ : "", "entry_point_tag")
                                            },
                                            children: (0, p.tZ)(q.NZ, {})
                                        }) : (0, p.tZ)(j.LinkButton, {
                                            id: "p2024-user-header",
                                            tag: "a",
                                            "data-cy": "login-button",
                                            "aria-label": null == d ? void 0 : d.login,
                                            variant: v.El.sm,
                                            href: _,
                                            "data-tracking-payload": JSON.stringify({
                                                module: "Header",
                                                module_instance: "P2024 - Top menu",
                                                link_tag: "Login-Register",
                                                destination_url: _,
                                                entryPointType: (0, y.Lj)(null != _ ? _ : "", "entry_point_type"),
                                                entryPointTag: (0, y.Lj)(null != _ ? _ : "", "entry_point_tag")
                                            }),
                                            children: null == d ? void 0 : d.loginButtonLabel
                                        })
                                    })
                                }), null == n ? void 0 : n.map(e => {
                                    var t, n;
                                    return (0, p.tZ)(j.LinkButton, {
                                        tag: "a",
                                        variant: v.El.sm,
                                        href: null !== (t = e.link) && void 0 !== t ? t : void 0,
                                        target: null !== (n = e.target) && void 0 !== n ? n : void 0,
                                        "data-cy": "topbar-button",
                                        "data-tracking-payload": JSON.stringify({
                                            content_id: e.id,
                                            module: "Header",
                                            module_instance: "P2024 - Top menu",
                                            link_tag: e.text,
                                            destination_url: e.link
                                        }),
                                        children: e.text
                                    }, e.text)
                                })]
                            })]
                        }), s && (0, p.tZ)(et.TopbarSection, {
                            children: (0, p.tZ)(et.EmblemLink, {
                                "data-tracking-payload": JSON.stringify({
                                    module: "Header",
                                    link_tag: "Paris 2024",
                                    module_instance: "P2024 - Top menu",
                                    destination_url: x || "/"
                                }),
                                href: x || "/",
                                children: (0, p.tZ)(et.Logo, {
                                    src: "".concat(t, "/paris-2024/emblem-").concat(c, ".svg"),
                                    alt: d.logoAlt,
                                    loading: "lazy"
                                })
                            })
                        }), (0, p.BX)(et.TopbarRightSection, {
                            children: [T && (0, p.tZ)(nH, {
                                quickLinks: i,
                                languageList: l,
                                location: b,
                                i18n: d,
                                languageDropdownButtonId: "p2024-languageButton-header",
                                customFavoritesQueryParams: M,
                                filledIcon: k,
                                customSignInQueryParams: w,
                                hideFavouritesLink: S,
                                userLinks: a
                            }), u && (0, p.tZ)(ei, {
                                rounded: !0,
                                id: "p2024-search-header",
                                ariaLabel: null == d ? void 0 : d.search,
                                onClick: ee,
                                dataCy: "search-overlay-button",
                                dataTrackingPayload: {
                                    module: "Header",
                                    moduleInstance: "P2024 - Top menu",
                                    linkTag: "Search - P2024"
                                },
                                children: (0, p.tZ)(q.t3, {
                                    size: "16"
                                })
                            }), E && u && (0, p.tZ)(nt, {
                                searchModule: u,
                                i18n: N,
                                closeOverlay: ee
                            })]
                        })]
                    })
                },
                nD = n(5152),
                nN = n.n(nD),
                nG = n(71876),
                nK = {
                    AdvWrapper: w.styled.div.withConfig({
                        componentId: "sc-58034d4-0"
                    })(["align-items:center;background-color:", ";display:flex;height:8.2rem;justify-content:center;opacity:1;top:0;transition:height 500ms ease-in-out,opacity 400ms ease-in-out;z-index:17;&.-sticky{position:sticky;}", "{height:12.2rem;}"], v.O9.gray100, (0, v.TE)(v.u3.MD)),
                    AdvContentWrapper: w.styled.div.withConfig({
                        componentId: "sc-58034d4-1"
                    })(["align-items:center;display:flex;justify-content:center;width:100%;"])
                };
            let nz = nN()(() => Promise.resolve().then(n.bind(n, 71876)), {
                    loadableGenerated: {
                        webpack: () => [71876]
                    },
                    ssr: !1
                }),
                nU = [{
                    viewport: [320, 0],
                    slot: [
                        [320, 50]
                    ]
                }, {
                    viewport: [768, 0],
                    slot: [
                        [728, 90]
                    ]
                }, {
                    viewport: [970, 0],
                    slot: [
                        [970, 90]
                    ]
                }, {
                    viewport: [970, 0],
                    slot: [
                        [728, 90]
                    ]
                }];
            var nV = e => {
                    let {
                        advTimeout: t = 7e3,
                        onAdvDisplayChange: n,
                        targeting: i,
                        unitTag: l
                    } = e, [a, o] = (0, h.useState)(!1);
                    return (0, h.useEffect)(() => {
                        let e = setTimeout(() => {
                            o(!0)
                        }, t);
                        return () => clearTimeout(e)
                    }, [t]), (0, h.useEffect)(() => {
                        n && n(a)
                    }, [a, n]), (0, p.tZ)(nK.AdvWrapper, {
                        className: S()([!a && "-sticky"]),
                        "data-cy": "paris2024-top-adv",
                        id: "header-adv-banner",
                        children: (0, p.tZ)(nK.AdvContentWrapper, {
                            children: l && (0, p.tZ)(nz, {
                                showBackground: !0,
                                slot: nG.AD_TOP,
                                shouldDisplaySponsorText: !1,
                                path: l,
                                targeting: i,
                                sizeMapping: nU
                            })
                        })
                    })
                },
                nj = n(98116);
            let nq = (e, t, n) => t2(e, t, n, "p2024");
            var nJ = e => {
                let {
                    assetsBaseUrl: t = "",
                    quickLinks: n,
                    rightQuickLinks: i,
                    languageList: l,
                    userLinks: a,
                    interfaceLinks: o,
                    activeInterfaceLink: r,
                    title: d,
                    roofline: c,
                    locale: s = v.SQ.DEFAULT,
                    emblem: u,
                    searchModule: m,
                    menuLinks: g,
                    secondaryLinks: b,
                    entryPointType: M,
                    switchButton: k,
                    shopBaseUrl: x,
                    hideAdv: T = !1,
                    i18n: {
                        loginButtonLabel: L,
                        userSettings: C,
                        openMainMenu: Z,
                        closeMainMenu: W,
                        search: R,
                        manageMyProfile: _,
                        login: O,
                        srQuickLinks: H,
                        srSiteLanguage: A,
                        srCurrentLanguage: F,
                        srMainNavigation: P,
                        srSecondaryNavigation: X,
                        logoAlt: D,
                        loginButton: N,
                        back: G,
                        skipToMainContent: K,
                        skipToLanguageSelection: z,
                        skipToLoginProfile: U,
                        skipToSearch: V,
                        skipToFooter: q
                    },
                    RooflineInH1: J,
                    hideFavouritesLink: Y,
                    customSignInQueryParams: $,
                    customFavoritesQueryParams: Q,
                    advOptions: ee,
                    emblemLink: et
                } = e, [en, ei] = (0, h.useState)(!0), [el, ea] = (0, h.useState)(!0), [eo, er] = (0, h.useState)(""), ed = (0, y.Qx)(null != x ? x : "/", s), ec = (0, w.useTheme)(), es = (0, v.Gc)(), eu = (0, h.useRef)(null), em = (0, h.useMemo)(() => d && nC(d), [d]), eg = (0, B.G)((0, I.up)(v.u3.XL)), ep = (0, h.useMemo)(() => d && nx(ec, es, s, d), [ec, es, s, d]), eh = (0, v.Gc)((0, I.down)(v.u3.MD)), ev = nj.constants.dailySchedule.filterBarStickyOffsets, ef = eh ? ev.mobile : ev.desktop;
                return (0, h.useEffect)(() => {
                    let e = () => (eu.current && ei(nI(eu.current, ef.scrollDown, ef.scrollUp)), () => null);
                    return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e), () => {
                        window.removeEventListener("resize", e), window.removeEventListener("scroll", e)
                    }
                }, []), (0, h.useEffect)(() => {
                    var e, t, n;
                    er(null !== (n = null === (t = window) || void 0 === t ? void 0 : null === (e = t.location) || void 0 === e ? void 0 : e.href) && void 0 !== n ? n : "")
                }, []), (0, p.BX)(p.HY, {
                    children: [!T && (0, p.tZ)(nV, {
                        advTimeout: null == ee ? void 0 : ee.advTimeout,
                        onAdvDisplayChange: ea,
                        targeting: null == ee ? void 0 : ee.targeting,
                        unitTag: null == ee ? void 0 : ee.unitTag
                    }), en && (0, p.tZ)(j.AnimationWrapper, {
                        children: (0, p.tZ)(E, {})
                    }), !en && (0, p.tZ)(j.StickySpacing, {
                        id: "stickySpacing",
                        "aria-hidden": !0
                    }), (0, p.BX)(j.HeaderWrapper, {
                        id: "paris2024-header",
                        "data-cy": "paris2024-header",
                        ref: eu,
                        className: S()(!en && "-sticky"),
                        $isAdvStatic: el,
                        children: [(0, p.BX)("nav", {
                            children: [(0, p.tZ)(j.SkipToLink, {
                                href: "#p2024-main-content",
                                children: K
                            }), (0, p.tZ)(j.SkipToLink, {
                                $largeOnly: !0,
                                href: "#p2024-languageButton-header",
                                children: z
                            }), (0, p.tZ)(j.SkipToLink, {
                                $largeOnly: !0,
                                href: "#p2024-user-header",
                                children: U
                            }), (0, p.tZ)(j.SkipToLink, {
                                href: "#p2024-search-header",
                                children: V
                            }), (0, p.tZ)(j.SkipToLink, {
                                href: "#p2024-footer",
                                children: q
                            })]
                        }), (0, p.BX)(j.HeaderContent, {
                            children: [(0, p.tZ)(nX, {
                                assetsBaseUrl: t,
                                quickLinks: n,
                                rightQuickLinks: i,
                                languageList: l,
                                userLinks: a,
                                secondaryLinks: b,
                                entryPointType: M || "p2024_header_sign_in",
                                shopUrl: ed,
                                i18n: {
                                    loginButtonLabel: L,
                                    userSettings: C,
                                    openMainMenu: Z,
                                    search: R,
                                    manageMyProfile: _,
                                    login: O,
                                    srSiteLanguage: A,
                                    srCurrentLanguage: F,
                                    srMainNavigation: P,
                                    srSecondaryNavigation: X,
                                    logoAlt: D,
                                    srQuickLinks: H,
                                    closeMainMenu: W,
                                    loginButton: N,
                                    back: G
                                },
                                emblem: u,
                                isInViewport: en,
                                searchModule: m,
                                menuLinks: g,
                                switchButton: k,
                                location: eo,
                                hideFavouritesLink: Y,
                                customSignInQueryParams: $,
                                customFavoritesQueryParams: Q,
                                emblemLink: et
                            }), !J && en && (0, p.BX)(j.RooflineContainter, {
                                children: [c && (0, p.tZ)(j.RooflineWrapper, {
                                    "data-cy": "header-roofline",
                                    children: (0, p.tZ)(f.Z, {
                                        variant: v.El.sm,
                                        children: c
                                    })
                                }), d && (0, p.tZ)(j.TitleWrapper, {
                                    "data-cy": "header-title",
                                    $fontSize: null == ep ? void 0 : ep.fontSize,
                                    $lineHeight: null == ep ? void 0 : ep.lineHeight,
                                    children: (0, p.tZ)(f.Z, {
                                        tag: "h1",
                                        variant: v.El.title,
                                        children: em
                                    })
                                })]
                            }), d && c && J && en && (0, p.tZ)(j.MergedTitleContainer, {
                                $fontSize: null == ep ? void 0 : ep.fontSize,
                                $lineHeight: null == ep ? void 0 : ep.lineHeight,
                                children: (0, p.BX)("h1", {
                                    children: [(0, p.tZ)(f.Z, {
                                        variant: eu.current && v.El.smBody,
                                        className: "roofline",
                                        children: c
                                    }), (0, p.tZ)(j.HiddenDash, {
                                        children: " - "
                                    }), (0, p.tZ)(f.Z, {
                                        variant: eu.current && v.El.title,
                                        className: "title",
                                        children: em
                                    })]
                                })
                            }), !!(null == o ? void 0 : o.length) && en && (0, p.tZ)(j.InterfaceContainer, {
                                children: null == o ? void 0 : o.map(e => (0, p.tZ)(j.InterfaceButton, {
                                    "data-cy": "interface-button",
                                    tag: "a",
                                    variant: eg ? eu.current && v.El.mediumText : eu.current && v.El.sm,
                                    href: e.url,
                                    "data-tracking-payload": JSON.stringify({
                                        module: "Top Navigation",
                                        link_tag: e.title,
                                        module_instance: "Top Navigation",
                                        destination_url: e.url
                                    }),
                                    $active: r === e.code,
                                    children: e.title
                                }, e.title))
                            }), !(null == o ? void 0 : o.length) && en && (0, p.tZ)(j.InterfacePlaceholder, {})]
                        })]
                    })]
                })
            }
        },
        7473: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return Z
                },
                x: function() {
                    return C
                }
            });
            var i = n(35944),
                l = n(57634),
                a = n(66194),
                o = n(96846),
                r = n(35576),
                d = n(67294),
                c = n(38456),
                s = n.n(c),
                u = n(76388),
                m = n.n(u),
                g = n(77986);
            let p = "1rem",
                h = "1.5rem",
                v = "1.5rem",
                f = e => {
                    var t, n, i, l, o, r, d, c, s, u, m, p, h, v, f, y, b, S, w, M, k, x, T, L, C;
                    let {
                        element: Z,
                        language: W,
                        theme: E,
                        fallbackTypographyType: I = a.El.lBody,
                        fallbackColor: B = E.colors.text,
                        fallbackColorHover: R,
                        finalTypographyTypes: _,
                        includeChildren: O = !0
                    } = e, H = null !== (x = null === (t = E.typography) || void 0 === t ? void 0 : t[null == _ ? void 0 : _[Z]]) && void 0 !== x ? x : null === (n = E.typography) || void 0 === n ? void 0 : n[I], A = null == H ? void 0 : null === (i = H.base) || void 0 === i ? void 0 : i[a.u3.XS], F = null == H ? void 0 : null === (l = H[W]) || void 0 === l ? void 0 : l[a.u3.XS], P = null === (d = E.textBlock) || void 0 === d ? void 0 : null === (r = d[Z]) || void 0 === r ? void 0 : null === (o = r.styles) || void 0 === o ? void 0 : o[a.u3.XS], X = null == H ? void 0 : null === (c = H.base) || void 0 === c ? void 0 : c[a.u3.LG], D = null == H ? void 0 : null === (s = H[W]) || void 0 === s ? void 0 : s[a.u3.LG], N = null === (p = E.textBlock) || void 0 === p ? void 0 : null === (m = p[Z]) || void 0 === m ? void 0 : null === (u = m.styles) || void 0 === u ? void 0 : u[a.u3.LG], G = null == H ? void 0 : null === (h = H.base) || void 0 === h ? void 0 : h[a.u3.XL], K = null == H ? void 0 : null === (v = H[W]) || void 0 === v ? void 0 : v[a.u3.XL], z = null === (b = E.textBlock) || void 0 === b ? void 0 : null === (y = b[Z]) || void 0 === y ? void 0 : null === (f = y.styles) || void 0 === f ? void 0 : f[a.u3.XL], U = null !== (L = null !== (T = null === (w = E.textBlock) || void 0 === w ? void 0 : null === (S = w.colors) || void 0 === S ? void 0 : S[Z]) && void 0 !== T ? T : null == A ? void 0 : A.color) && void 0 !== L ? L : B, V = null !== (C = null === (k = E.textBlock) || void 0 === k ? void 0 : null === (M = k.colors) || void 0 === M ? void 0 : M["".concat(Z, "Hover")]) && void 0 !== C ? C : R;
                    return (0, g.css)(["--", "-color:", ";", " ", " ", "{--variant:", ";", " ", " ", " color:var(--", "-color);", " ", "{", " ", " ", " color:var(--", "-color);", "}", "{", " ", " ", " color:var(--", "-color);", "}}"], Z, U, V ? "--".concat(Z, "-color-hover: ").concat(V, ";") : "", Z, O ? ",".concat(Z, " *") : "", (null == _ ? void 0 : _[Z]) || I, () => A || "", () => F || "", () => P || "", Z, V ? (0, g.css)(["&:hover{color:var(--", "-color-hover);}"], Z) : "", (0, a.TE)(a.u3.LG), () => X || "", () => D || "", () => N || "", Z, V ? (0, g.css)(["&:hover{color:var(--", "-color-hover);}"], Z) : "", (0, a.TE)(a.u3.XL), () => G || "", () => K || "", () => z || "", Z, V ? (0, g.css)(["&:hover{color:var(--", "-color-hover);}"], Z) : "")
                },
                y = g.styled.section.withConfig({
                    shouldForwardProp: e => !["$hasMargin", "$hasWidth", "$language", "$alignment", "$typographyTypes"].includes(e)
                }).withConfig({
                    componentId: "sc-1669ef46-0"
                })(["margin:", ";html[dir='rtl'] &{margin:", ";}width:100%;word-wrap:break-word;& > p{", ";}& > :first-child{margin-top:0;& > :first-child{margin-top:0;}}& > :last-child{", ";& > :last-child{", ";}}", " ", " ", ""], e => {
                    let {
                        $hasMargin: t
                    } = e;
                    return t ? "0 auto" : 0
                }, e => {
                    let {
                        $hasMargin: t
                    } = e;
                    return t ? "auto 0" : 0
                }, e => {
                    var t, n;
                    let {
                        theme: i
                    } = e;
                    return (null === (t = i.textBlock) || void 0 === t ? void 0 : t.innerMargins) ? "" : "margin-bottom: ".concat(null === (n = i.textBlock) || void 0 === n ? void 0 : n.paragraphGap)
                }, e => {
                    var t;
                    let {
                        theme: n
                    } = e;
                    return (null === (t = n.textBlock) || void 0 === t ? void 0 : t.innerMargins) ? "" : "margin-bottom: 0"
                }, e => {
                    var t;
                    let {
                        theme: n
                    } = e;
                    return (null === (t = n.textBlock) || void 0 === t ? void 0 : t.innerMargins) ? "" : "margin-bottom: 0"
                }, e => {
                    var t;
                    let {
                        $language: n,
                        theme: i,
                        $typographyTypes: l,
                        $alignment: o
                    } = e, r = { ...null === (t = i.textBlock) || void 0 === t ? void 0 : t.typographyTypes,
                        ...l
                    }, d = {
                        start: "flex-start",
                        end: "flex-end",
                        justify: "flex-start",
                        center: "center"
                    };
                    return (0, g.css)(["", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " blockquote,blockquote *{margin:0;}ol{align-items:", ";display:flex;flex-direction:column;gap:", ";padding-inline-start:2rem;> li{margin-left:", ";padding-left:", " html[dir= 'rtl'] &,div[dir= 'rtl'] &{margin-left:unset;margin-right:", ";padding-left:unset;padding-right:", ";}> ul,> ol{margin-top:", ";}}}ul{align-items:", ";display:flex;flex-direction:column;gap:", ";list-style-type:disc;> li{margin-left:1em;padding-left:", ";html[dir='rtl'] &,div[dir='rtl'] &{margin-left:unset;margin-right:1em;padding-left:unset;padding-right:", ";}> ul,ol{margin-top:", ";}}}ul ul{list-style-type:circle;}ul ul ul{list-style-type:square;}ul ul ul ul{list-style-type:disc;}ul ul ul ul ul{list-style-type:circle;}ul ul ul ul ul ul{list-style-type:square;}"], f({
                        element: "a",
                        language: n,
                        theme: i,
                        fallbackColor: i.colors.linkPrimary,
                        fallbackColorHover: i.colors.linkPrimaryHover,
                        finalTypographyTypes: r,
                        includeChildren: !1
                    }), f({
                        element: "p",
                        language: n,
                        theme: i,
                        finalTypographyTypes: r,
                        includeChildren: !1
                    }), f({
                        element: "blockquote",
                        language: n,
                        theme: i,
                        finalTypographyTypes: r,
                        fallbackTypographyType: a.El.lSubtitle
                    }), f({
                        element: "h1",
                        language: n,
                        theme: i,
                        finalTypographyTypes: r,
                        fallbackTypographyType: a.El.xxlSubtitle
                    }), f({
                        element: "h2",
                        language: n,
                        theme: i,
                        finalTypographyTypes: r,
                        fallbackTypographyType: a.El.xxlSubtitle
                    }), f({
                        element: "h3",
                        language: n,
                        theme: i,
                        finalTypographyTypes: r,
                        fallbackTypographyType: a.El.xlSubtitle
                    }), f({
                        element: "h4",
                        language: n,
                        theme: i,
                        finalTypographyTypes: r,
                        fallbackTypographyType: a.El.xlBody
                    }), f({
                        element: "h5",
                        language: n,
                        theme: i,
                        finalTypographyTypes: r
                    }), f({
                        element: "h6",
                        language: n,
                        theme: i,
                        finalTypographyTypes: r
                    }), f({
                        element: "ol",
                        language: n,
                        theme: i,
                        finalTypographyTypes: r,
                        includeChildren: !1
                    }), f({
                        element: "ul",
                        language: n,
                        theme: i,
                        finalTypographyTypes: r,
                        includeChildren: !1
                    }), o ? d[o] : "flex-start", e => {
                        var t, n, i;
                        let {
                            theme: l
                        } = e;
                        return null !== (i = null === (n = l.textBlock) || void 0 === n ? void 0 : null === (t = n.lists) || void 0 === t ? void 0 : t.spaceBetweenListItems) && void 0 !== i ? i : p
                    }, e => {
                        var t, n, i;
                        let {
                            theme: l
                        } = e;
                        return null !== (i = null === (n = l.textBlock) || void 0 === n ? void 0 : null === (t = n.lists) || void 0 === t ? void 0 : t.indentation) && void 0 !== i ? i : 0
                    }, e => {
                        var t, n, i;
                        let {
                            theme: l
                        } = e;
                        return null !== (i = null === (n = l.textBlock) || void 0 === n ? void 0 : null === (t = n.lists) || void 0 === t ? void 0 : t.orderedListSpaceFromNumber) && void 0 !== i ? i : h
                    }, e => {
                        var t, n, i;
                        let {
                            theme: l
                        } = e;
                        return null !== (i = null === (n = l.textBlock) || void 0 === n ? void 0 : null === (t = n.lists) || void 0 === t ? void 0 : t.indentation) && void 0 !== i ? i : 0
                    }, e => {
                        var t, n, i;
                        let {
                            theme: l
                        } = e;
                        return null !== (i = null === (n = l.textBlock) || void 0 === n ? void 0 : null === (t = n.lists) || void 0 === t ? void 0 : t.orderedListSpaceFromNumber) && void 0 !== i ? i : h
                    }, e => {
                        var t, n, i;
                        let {
                            theme: l
                        } = e;
                        return null !== (i = null === (n = l.textBlock) || void 0 === n ? void 0 : null === (t = n.lists) || void 0 === t ? void 0 : t.spaceBetweenListItems) && void 0 !== i ? i : p
                    }, o ? d[o] : "flex-start", e => {
                        var t, n, i;
                        let {
                            theme: l
                        } = e;
                        return null !== (i = null === (n = l.textBlock) || void 0 === n ? void 0 : null === (t = n.lists) || void 0 === t ? void 0 : t.spaceBetweenListItems) && void 0 !== i ? i : p
                    }, e => {
                        var t, n, i;
                        let {
                            theme: l
                        } = e;
                        return null !== (i = null === (n = l.textBlock) || void 0 === n ? void 0 : null === (t = n.lists) || void 0 === t ? void 0 : t.unorderedListSpaceFromBullet) && void 0 !== i ? i : v
                    }, e => {
                        var t, n, i;
                        let {
                            theme: l
                        } = e;
                        return null !== (i = null === (n = l.textBlock) || void 0 === n ? void 0 : null === (t = n.lists) || void 0 === t ? void 0 : t.unorderedListSpaceFromBullet) && void 0 !== i ? i : v
                    }, e => {
                        var t, n, i;
                        let {
                            theme: l
                        } = e;
                        return null !== (i = null === (n = l.textBlock) || void 0 === n ? void 0 : null === (t = n.lists) || void 0 === t ? void 0 : t.spaceBetweenListItems) && void 0 !== i ? i : p
                    })
                }, e => {
                    let {
                        $alignment: t
                    } = e;
                    return t && t !== o.bJ.start ? (0, g.css)(["text-align:", ";"], t) : ""
                }, e => {
                    let {
                        $hasWidth: t
                    } = e;
                    return t ? (0, g.css)(["", "{width:", ";}", "{width:", ";}"], (0, a.TE)(a.u3.LG), () => (0, a.o0)(8, a.u3.LG), (0, a.TE)(a.u3.XL), () => (0, a.o0)(8, a.u3.XL)) : ""
                }),
                b = g.styled.span.withConfig({
                    componentId: "sc-1669ef46-1"
                })(["cursor:pointer;&.hidden{display:none;}.icon{background:transparent;color:", ";}"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.colors.linkPrimary
                }),
                S = g.styled.div.withConfig({
                    componentId: "sc-1669ef46-2"
                })(["display:flex;justify-content:center;&.hidden{display:none;}", "{justify-content:flex-start;margin-left:2rem;}"], (0, a.TE)(a.u3.LG)),
                w = g.styled.div.withConfig({
                    componentId: "sc-1669ef46-3"
                })(["&.hidden{display:none;}"]),
                M = g.styled.section.withConfig({
                    componentId: "sc-1669ef46-4"
                })(["align-items:baseline;display:flex;flex-direction:column;p{margin:0;}div{align-items:flex-start;flex-direction:column;}", "{flex-direction:row;gap:0.5rem;p{margin:initial;}div{align-items:center;flex-direction:row;}}"], (0, a.TE)(a.u3.SM));
            var k = {
                ContinueReading: b,
                ContinueReadingCustomIcon: S,
                Link: g.styled.div.withConfig({
                    componentId: "sc-1669ef46-5"
                })(["align-items:center;display:flex;gap:0.8rem;img{border:0.1rem solid ", ";border-radius:0.2rem;height:4rem;width:4rem;html[dir='rtl'] &,div[dir='rtl'] &{margin-right:0;}}"], a.O9.gray100),
                SecondBlock: w,
                Wrapper: y,
                ReverseLinkWrapper: M
            };
            let x = [m()],
                T = {
                    namedCodesToUnicode: {
                        laquo: "\xab",
                        raquo: "\xbb",
                        ldquo: "“",
                        rdquo: "”",
                        rsquo: "’",
                        ndash: "–",
                        Agrave: "\xc0",
                        agrave: "\xe0",
                        Acirc: "\xc2",
                        acirc: "\xe2",
                        AElig: "\xc6",
                        aelig: "\xe6",
                        Ccedil: "\xc7",
                        ccedil: "\xe7",
                        Egrave: "\xc8",
                        egrave: "\xe8",
                        Ecirc: "\xca",
                        ecirc: "\xea",
                        Euml: "\xcb",
                        euml: "\xeb",
                        Icirc: "\xce",
                        icirc: "\xee",
                        Iuml: "\xcf",
                        iuml: "\xef",
                        Ocirc: "\xd4",
                        ocirc: "\xf4",
                        OElig: "Œ",
                        oelig: "œ",
                        Ugrave: "\xd9",
                        ugrave: "\xf9",
                        Ucirc: "\xdb",
                        ucirc: "\xfb",
                        Uuml: "\xdc",
                        uuml: "\xfc"
                    }
                },
                L = {
                    p: e => e.children
                },
                C = e => ({
                    a: e,
                    p: e,
                    blockquote: e,
                    ul: e,
                    h1: e,
                    h2: e,
                    h3: e,
                    h4: e,
                    h5: e,
                    h6: e,
                    ol: e
                });
            var Z = e => {
                let {
                    continueReadingIcon: t,
                    continueReadingText: n,
                    continueReadingThreshold: c,
                    hasMargin: u = !0,
                    hasWidth: m = !0,
                    input: g,
                    language: p = a.SQ.DEFAULT,
                    linkImage: h,
                    linkTitle: v,
                    linkUrl: f,
                    markdownOptions: y,
                    reactMarkdownEnabled: b = !0,
                    shouldReplaceP: S = !1,
                    typographyTypes: w,
                    reverseLink: M = !1,
                    additionalLinkText: C,
                    textAlign: Z = o.bJ.start,
                    ...W
                } = e, [E, I] = d.useState(!0), B = S ? { ...null == y ? void 0 : y.components,
                    ...L
                } : null == y ? void 0 : y.components, R = g.indexOf("\n\n", c), _ = g.substring(0, R), O = g.substring(R), H = () => f && (0, i.tZ)("a", {
                    "data-cy": "logo-link",
                    href: f,
                    target: "_blank",
                    rel: "noreferrer",
                    children: (0, i.BX)(k.Link, {
                        "data-tracking": "click",
                        "data-tracking-payload": JSON.stringify({
                            destination_url: f,
                            link_tag: v,
                            module_instance: "inline",
                            module: _
                        }),
                        children: [h && (0, i.tZ)("img", {
                            "data-cy": "logo-link-img",
                            src: h,
                            alt: v || "",
                            height: 40,
                            width: 40
                        }), v || f, (0, i.tZ)(l.KR, {})]
                    })
                });
                return c && -1 !== R ? (0, i.BX)(k.Wrapper, {
                    $hasWidth: m,
                    $hasMargin: u,
                    $language: p,
                    $typographyTypes: w,
                    $alignment: Z,
                    "data-cy": "text-block-container",
                    ...W,
                    children: [b ? (0, i.tZ)(s(), { ...y,
                        rehypePlugins: x,
                        children: _
                    }) : (0, i.tZ)(r.ZP, {
                        options: T,
                        children: _
                    }), H(), t ? (0, i.tZ)(k.ContinueReadingCustomIcon, {
                        className: E ? "" : "hidden",
                        children: (0, i.tZ)("span", {
                            onClick: () => I(!1),
                            children: t
                        })
                    }) : (0, i.BX)(k.ContinueReading, {
                        className: E ? "" : "hidden",
                        onClick: () => I(!1),
                        children: [n, (0, i.tZ)(l.JO, {
                            type: "caret-down",
                            className: "icon"
                        })]
                    }), (0, i.tZ)(k.SecondBlock, {
                        className: E ? "hidden" : "",
                        "data-cy": "second-block",
                        children: b ? (0, i.tZ)(s(), { ...y,
                            rehypePlugins: x,
                            children: O
                        }) : (0, i.tZ)(r.ZP, {
                            options: T,
                            children: O
                        })
                    })]
                }) : (0, i.BX)(k.Wrapper, {
                    $hasMargin: u,
                    $hasWidth: m,
                    $language: p,
                    $typographyTypes: w,
                    $alignment: Z,
                    "data-cy": "text-block-container",
                    ...W,
                    children: [b ? (0, i.tZ)(s(), { ...y,
                        components: B,
                        rehypePlugins: x,
                        children: g
                    }) : (0, i.tZ)(r.ZP, {
                        options: T,
                        children: g
                    }), M ? f && (0, i.BX)(k.ReverseLinkWrapper, {
                        children: [C && (0, i.tZ)("p", {
                            children: C
                        }), (0, i.tZ)("a", {
                            "data-cy": "logo-link",
                            href: f,
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0, i.BX)(k.Link, {
                                "data-tracking": "click",
                                "data-tracking-payload": JSON.stringify({
                                    destination_url: f,
                                    link_tag: v,
                                    module_instance: "inline",
                                    module: _
                                }),
                                children: [null != v ? v : f, h && (0, i.tZ)("img", {
                                    "data-cy": "logo-link-img",
                                    src: h,
                                    alt: null != v ? v : "",
                                    height: 40,
                                    width: 40
                                })]
                            })
                        })]
                    }) : H()]
                })
            }
        },
        76908: function(e, t, n) {
            var i = n(35944),
                l = n(67294),
                a = n(4298),
                o = n.n(a);
            t.Z = (0, l.memo)(e => {
                let {
                    onAnalyticsLoaded: t,
                    frontendBaseUrl: n,
                    language: a,
                    disableAnalytics: r
                } = e;
                return (0, l.useEffect)(() => {
                    var e, n;
                    let i = () => {
                        t(!0)
                    };
                    return (null === (n = window.ddnawrapper) || void 0 === n ? void 0 : null === (e = n.events) || void 0 === e ? void 0 : e.analyticsReady) ? i() : window.addEventListener("analytics-ready", i), () => {
                        window.removeEventListener("analytics-ready", i)
                    }
                }, [t]), (0, i.BX)(i.HY, {
                    children: [(0, i.tZ)(o(), {
                        src: "".concat(n, "/").concat(a, "/api/js/usernation"),
                        strategy: "beforeInteractive"
                    }), !r && (0, i.BX)(i.HY, {
                        children: [(0, i.tZ)(o(), {
                            src: "".concat(n, "/").concat(a, "/api/js/ddna-configuration"),
                            strategy: "beforeInteractive"
                        }), (0, i.tZ)(o(), {
                            src: "".concat(n, "/").concat(a, "/ddna-wrapper/ddna-wrapper.js"),
                            strategy: "beforeInteractive"
                        })]
                    })]
                })
            })
        },
        42782: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return tr
                }
            });
            var i, l, a, o, r, d, c = n(35944),
                s = n(67294),
                u = n(73803),
                m = n(66194),
                g = n(77986),
                p = n(43355);
            (i = o || (o = {})).light = "light", i.dark = "dark";
            let h = e => (0, g.css)(["", ""], t => {
                let {
                    theme: n,
                    $hasPaddingLeft: i,
                    $hasPaddingRight: l
                } = t;
                if (!i && !l) return "";
                let a = (0, m.o0)(n.grid[e].columns || 12, e)({
                    theme: n
                });
                return (0, g.css)(["", " ", ""], e => {
                    let {
                        $hasPaddingLeft: t
                    } = e;
                    return t && "padding-left: calc(\n        (\n            100% -\n              ".concat(a, "\n          ) / 2\n      );")
                }, e => {
                    let {
                        $hasPaddingRight: t
                    } = e;
                    return t && "padding-right: calc(\n          (\n              100% -\n                ".concat(a, "\n            ) / 2\n        );")
                })
            });
            var v = {
                    GridContainer: g.styled.section.withConfig({
                        shouldForwardProp: e => !["$hasPaddingLeft", "$hasPaddingRight"].includes(e)
                    }).withConfig({
                        componentId: "sc-751e9b0e-0"
                    })(["", " ", " ", " ", "{", "}", "{", "}", "{", "}", "{", "}"], e => {
                        let {
                            theme: t,
                            backgroundStyle: n
                        } = e;
                        return n ? (0, g.css)(["background-color:", ";"], n === o.dark ? t.colors.backgroundSecondary : t.colors.background) : ""
                    }, e => {
                        let {
                            theme: t,
                            $hasPaddingLeft: n
                        } = e;
                        return n && (0, g.css)(["padding-left:", "px;", "{padding-left:", "px;}", "{padding-left:", "px;}"], t.grid[m.u3.XS].padding, (0, m.TE)(m.u3.XS), t.grid[m.u3.XS].padding, (0, m.TE)(m.u3.SM), t.grid[m.u3.SM].padding)
                    }, e => {
                        let {
                            theme: t,
                            $hasPaddingRight: n
                        } = e;
                        return n && (0, g.css)(["padding-right:", "px;", "{padding-right:", "px;}", "{padding-right:", "px;}"], t.grid[m.u3.XS].padding, (0, m.TE)(m.u3.XS), t.grid[m.u3.XS].padding, (0, m.TE)(m.u3.SM), t.grid[m.u3.SM].padding)
                    }, (0, m.TE)(m.u3.MD), h(m.u3.MD), (0, m.TE)(m.u3.LG), h(m.u3.LG), (0, m.TE)(m.u3.XL), h(m.u3.XL), (0, m.TE)(m.u3.XXL), h(m.u3.XXL))
                },
                f = e => {
                    let {
                        children: t,
                        hasPaddingLeft: n = !0,
                        hasPaddingRight: i = !0,
                        backgroundStyle: l,
                        ...a
                    } = e;
                    return (0, c.tZ)(v.GridContainer, {
                        id: "grid-container",
                        ...a,
                        $hasPaddingLeft: n,
                        $hasPaddingRight: i,
                        backgroundStyle: l,
                        children: t
                    })
                },
                y = n(71876),
                b = n(37340);

            function S() {
                let e = (0, b._)(["\n  display: flex;\n"]);
                return S = function() {
                    return e
                }, e
            }

            function w() {
                let e = (0, b._)(["\n  color: ", ";\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 2.6rem;\n  padding-bottom: ", "rem;\n  width: 100%;\n\n  ", " {\n    display: none;\n    opacity: 0;\n  }\n"]);
                return w = function() {
                    return e
                }, e
            }

            function M() {
                let e = (0, b._)(["\n  border-top: 0.1rem solid #5e5e5e;\n  grid-gap: ", "rem;\n  padding-bottom: ", "rem;\n  padding-top: 2.8rem;\n\n  & > div:first-child {\n    grid-column: 1 / span 2;\n  }\n"]);
                return M = function() {
                    return e
                }, e
            }

            function k() {
                let e = (0, b._)([""]);
                return k = function() {
                    return e
                }, e
            }

            function x() {
                let e = (0, b._)(["\n  display: grid;\n  gap: ", "rem;\n  grid-template-columns: 1fr 1fr;\n"]);
                return x = function() {
                    return e
                }, e
            }
            let T = m.zo.div(S());
            m.zo.div(w(), m.O9.white, m.t8.Spacing01, (0, m.TE)(m.u3.LG)), m.zo.div(M(), m.t8.Spacing03, m.t8.Spacing04), m.zo.div(k()), m.zo.div(x(), m.t8.Spacing03);
            var L = {
                    GlobalMenuItem: T
                },
                C = n(92765);
            (l = r || (r = {})).ClassName = "className", l.PreventDefault = "preventDefault", (a = d || (d = {})).Full = "full", a.Slim = "slim";
            var Z = {
                    NavigationLink: g.styled.div.withConfig({
                        componentId: "sc-c8712086-0"
                    })(["line-height:0;padding-bottom:", "rem;padding-top:", "rem;span{cursor:pointer;}a,span{color:", ";}", "{a,span{text-decoration:none;}&:hover,&:active{cursor:pointer;a,span.ot-sdk-show-settings{text-decoration:underline;}}}"], m.t8.Spacing01, m.t8.Spacing01, m.O9.white, (0, m.TE)(m.u3.LG))
                },
                W = e => {
                    let {
                        itemLink: t,
                        className: n
                    } = e, [i, l] = (0, s.useState)(""), a = t.customProperties || [], o = a.filter(e => e.startsWith("".concat(r.ClassName, ":"))).map(e => e.substring("".concat(r.ClassName, ":").length)), d = a.some(e => e === "".concat(r.PreventDefault, ":true"));
                    return (0, s.useEffect)(() => {
                        if (o.length > 0) {
                            let e = setTimeout(() => {
                                l(o.join(" "))
                            }, 100);
                            return () => clearTimeout(e)
                        }
                    }, [o]), (0, c.tZ)(Z.NavigationLink, {
                        className: n,
                        "data-cy": "navigation-link",
                        children: d ? (0, c.tZ)(p.Z, {
                            tag: "span",
                            variant: m.El.smTextLink,
                            className: i,
                            "data-cy": "otSdkShowSettings",
                            children: t.text
                        }) : (0, c.tZ)(C.Z, {
                            href: t.link || "",
                            target: t.target || "",
                            className: i,
                            "data-text": t.text,
                            children: (0, c.tZ)(p.Z, {
                                tag: "span",
                                variant: m.El.smTextLink,
                                children: t.text
                            })
                        })
                    })
                },
                E = e => {
                    let {
                        itemLink: t
                    } = e;
                    return (0, c.tZ)(L.GlobalMenuItem, {
                        "data-cy": "global-menu-item",
                        children: (0, c.tZ)(W, {
                            itemLink: t,
                            className: "global-item"
                        })
                    }, t.text)
                };
            let I = (0, g.styled)(f).withConfig({
                    componentId: "sc-b10ddee9-0"
                })(["background:", ";"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.colors.title
                }),
                B = g.styled.div.withConfig({
                    componentId: "sc-b10ddee9-1"
                })(["background:", ";display:flex;flex-direction:column;padding-top:", "rem;", "{padding-top:", "rem;}"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.colors.title
                }, m.t8.Spacing05, (0, m.TE)(m.u3.LG), m.t8.Spacing09),
                R = g.styled.div.withConfig({
                    componentId: "sc-b10ddee9-2"
                })(["align-items:flex-start;display:flex;flex-direction:column;gap:16rem;padding-bottom:", "rem;", "{flex-direction:row;padding-bottom:", "rem;}"], m.t8.Spacing04, (0, m.TE)(m.u3.LG), m.t8.Spacing08),
                _ = g.styled.div.withConfig({
                    componentId: "sc-b10ddee9-3"
                })(["align-items:center;display:flex;flex-direction:column;gap:", "rem;width:100%;", "{align-items:flex-start;width:25.6rem;}"], m.t8.Spacing02, (0, m.TE)(m.u3.LG)),
                O = g.styled.div.withConfig({
                    componentId: "sc-b10ddee9-4"
                })(["display:flex;flex:1;"]),
                H = g.styled.div.withConfig({
                    componentId: "sc-b10ddee9-5"
                })(["display:none;grid-column-gap:", "rem;grid-row-gap:", "rem;grid-template-columns:repeat(4,1fr);width:100%;", "{display:grid;}"], m.t8.Spacing04, m.t8.Spacing04, (0, m.TE)(m.u3.LG)),
                A = g.styled.div.withConfig({
                    componentId: "sc-b10ddee9-6"
                })(["border-bottom:0.1rem solid ", ";border-top:0.1rem solid ", ";display:flex;flex-direction:column;justify-content:space-between;", "{align-items:baseline;flex-direction:row;padding-bottom:", "rem;padding-top:", "rem;}"], m.O9.graphiteGray, m.O9.graphiteGray, (0, m.TE)(m.u3.LG), m.t8.Spacing03, m.t8.Spacing03),
                F = g.styled.div.withConfig({
                    componentId: "sc-b10ddee9-7"
                })(["column-gap:3.6rem;display:flex;flex-wrap:wrap;justify-content:center;padding-bottom:", "rem;padding-top:", "rem;row-gap:", "rem;", "{column-gap:", "rem;flex:1;justify-content:start;padding-bottom:0;padding-top:0;row-gap:0;}"], m.t8.Spacing05, m.t8.Spacing03, m.t8.Spacing01, (0, m.TE)(m.u3.LG), m.t8.Spacing08),
                P = g.styled.div.withConfig({
                    componentId: "sc-b10ddee9-8"
                })(["background:", ";display:flex;flex-direction:column;padding-bottom:", "rem;padding-top:", "rem;row-gap:", "rem;&.slim{padding-bottom:", "rem;padding-top:", "rem;}a{margin:0;}", "{align-items:baseline;flex-direction:row;justify-content:space-between;padding-bottom:", "rem;padding-top:", "rem;row-gap:0;&.slim{padding-bottom:", "rem;padding-top:", "rem;}}"], m.O9.black, m.t8.Spacing05, m.t8.Spacing03, m.t8.Spacing03, m.t8.Spacing04, m.t8.Spacing03, (0, m.TE)(m.u3.LG), m.t8.Spacing10, m.t8.Spacing07, m.t8.Spacing04, m.t8.Spacing04),
                X = g.styled.div.withConfig({
                    componentId: "sc-b10ddee9-9"
                })(["column-gap:", "rem;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;row-gap:", "rem;", "{column-gap:", "rem;flex:1 1 50%;justify-content:flex-start;padding-bottom:0;padding-top:0;row-gap:0;}"], m.t8.Spacing05, m.t8.Spacing01, (0, m.TE)(m.u3.LG), m.t8.Spacing08),
                D = g.styled.div.withConfig({
                    componentId: "sc-b10ddee9-10"
                })(["align-items:center;border:none;display:flex;flex-direction:column;gap:", "rem;padding-bottom:", "rem;", "{align-items:unset;flex-direction:row;gap:", "rem;padding-bottom:0;}"], m.t8.Spacing02, m.t8.Spacing04, (0, m.TE)(m.u3.LG), m.t8.Spacing04),
                N = g.styled.div.withConfig({
                    componentId: "sc-b10ddee9-11"
                })(["align-items:center;column-gap:", "rem;display:grid;grid-template-columns:repeat(5,1fr);justify-content:center;row-gap:", "rem;a{line-height:0;svg{path{fill:", ";}}}", "{justify-content:flex-end;}"], m.t8.Spacing03, m.t8.Spacing02, m.O9.white, (0, m.TE)(m.u3.LG)),
                G = g.styled.div.withConfig({
                    componentId: "sc-b10ddee9-12"
                })(["align-items:flex-start;column-gap:", "rem;display:flex;flex:0 0 auto;& > span{color:", ";}"], m.t8.Spacing04, m.O9.white),
                K = g.styled.div.withConfig({
                    componentId: "sc-b10ddee9-13"
                })(["align-items:center;display:flex;justify-content:center;& > span{color:", ";}"], m.O9.white);
            var z = {
                    Adv: g.styled.div.withConfig({
                        componentId: "sc-b10ddee9-14"
                    })(["align-items:center;display:flex;justify-content:center;padding:", "rem 0;"], m.t8.Spacing02),
                    AppsLinksWrapper: _,
                    CopyrightWrapper: K,
                    GlobalMenuWrapper: F,
                    GlobalMenuSocialWrapper: A,
                    LegalDisclaimerMenuWrapper: X,
                    LegalCopyrightWrapper: P,
                    MainNavWrapper: H,
                    NavWrapper: O,
                    SocialListIcon: N,
                    SocialText: G,
                    SocialWrapper: D,
                    Wrapper: R,
                    WrapperFooter: B,
                    WrapperFooterGrid: I
                },
                U = {
                    LegalDisclaimerMenuItem: g.styled.div.withConfig({
                        componentId: "sc-cc69bac7-0"
                    })([""])
                },
                V = e => {
                    let {
                        itemLink: t
                    } = e;
                    return (0, c.tZ)(U.LegalDisclaimerMenuItem, {
                        "data-cy": "legal-disclaimer-item",
                        children: (0, c.tZ)(W, {
                            itemLink: t,
                            className: "legal-disclaimer"
                        })
                    }, t.text)
                };
            let j = g.styled.div.withConfig({
                componentId: "sc-9aae359a-0"
            })(["padding-bottom:", "rem;& > span{color:", ";font-weight:700;}"], m.t8.Spacing01, m.O9.white);
            var q = {
                    SiteMapMenu: g.styled.div.withConfig({
                        componentId: "sc-9aae359a-1"
                    })(["display:flex;flex:0 0 calc(50% - ", "rem);flex-direction:column;padding-bottom:", "rem;", "{flex:0 0 calc(25% - ", "rem);padding-bottom:0.4rem;}"], m.t8.Spacing04, m.t8.Spacing01, (0, m.TE)(m.u3.LG), m.t8.Spacing04),
                    SiteMapMenuTitle: j
                },
                J = e => {
                    let {
                        itemLink: t,
                        navLinks: n,
                        className: i
                    } = e;
                    return (0, c.BX)(q.SiteMapMenu, {
                        className: i,
                        children: [(0, c.tZ)(q.SiteMapMenuTitle, {
                            children: (0, c.tZ)(p.Z, {
                                tag: "span",
                                variant: m.El.smBody,
                                children: t.text
                            })
                        }), n.map(e => (0, c.tZ)(W, {
                            itemLink: e,
                            className: i
                        }, e.text))]
                    })
                },
                Y = n(57634);
            let $ = (0, n(52227).Z)("span", {
                target: "e1mhhh310"
            })("border:0;padding:0;margin:0;position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap;");
            var Q = e => {
                    let {
                        itemLink: t
                    } = e, n = {
                        Facebook: Y.s1,
                        Twitter: Y.tL,
                        Email: Y.GT,
                        Linkedin: Y.n6,
                        FaYoutube: Y.V2,
                        Flickr: Y.Ep,
                        FaInstagram: Y.Zf,
                        IoLogoTiktok: Y.Px,
                        Threads: Y.US
                    }[((e, t) => {
                        let n = e.find(e => {
                            let [n] = e.split(":");
                            return n === t
                        });
                        return n ? n.split(":")[1] : ""
                    })((null == t ? void 0 : t.customProperties) || [], "icon") || ""];
                    return (0, c.BX)(C.Z, {
                        href: t.link || "",
                        target: t.target || "",
                        children: [n && (0, c.tZ)($, {
                            children: t.text
                        }), n ? (0, c.tZ)(n, {}) : t.text || ""]
                    })
                },
                ee = n(68294),
                et = n(98040);
            let en = g.styled.div.withConfig({
                    componentId: "sc-41d03316-0"
                })([""]),
                ei = g.styled.div.withConfig({
                    componentId: "sc-41d03316-1"
                })(["padding-top:", "rem;", "{padding-top:", "rem;}.text--cta span{color:", ";}:hover .text--cta span{color:", ";}"], m.t8.Spacing01, (0, m.TE)(m.u3.LG), m.t8.Spacing03, m.O9.black, m.O9.white),
                el = g.styled.div.withConfig({
                    componentId: "sc-41d03316-2"
                })(["background-color:", ";height:0.1rem;margin-bottom:", "rem;margin-top:", "rem;width:100%;", "{margin-bottom:", "rem;margin-top:", "rem;}"], m.O9.graphiteGray, m.t8.Spacing02, m.t8.Spacing02, (0, m.TE)(m.u3.LG), m.t8.Spacing01, m.t8.Spacing01),
                ea = (0, g.styled)(p.Z).withConfig({
                    componentId: "sc-41d03316-3"
                })(["color:", ";"], m.O9.white);
            var eo = {
                    DownloadButtons: g.styled.div.withConfig({
                        componentId: "sc-41d03316-4"
                    })(["align-items:center;display:flex;gap:", "rem;img{height:4rem;width:auto;}"], m.t8.Spacing02),
                    DownloadText: ea,
                    LogoWrapper: en,
                    ParalympicButtonWrapper: ei,
                    Separator: el
                },
                er = e => {
                    var t, n, i, l, a, o, r, d, s, u, g;
                    let {
                        appsLinks: p,
                        translations: h,
                        isMobile: v = !1
                    } = e, f = {
                        sm: {
                            standard: "t_original_380",
                            x2: "t_original_760"
                        },
                        md: {
                            standard: "t_original_760",
                            x2: "t_original_1280"
                        },
                        lg: {
                            standard: "t_original_760",
                            x2: "t_original_1280"
                        },
                        xl: {
                            standard: "t_original_1280",
                            x2: "t_original_1920"
                        }
                    }, y = {
                        sm: {
                            standard: "t_app-badges",
                            x2: "t_app-badges"
                        }
                    };
                    return (0, c.BX)(c.HY, {
                        children: [(0, c.tZ)(eo.LogoWrapper, {
                            "data-cy": "paris2024-footer-logo",
                            children: p[0].link ? (0, c.tZ)(C.Z, {
                                href: null !== (n = p[0].link) && void 0 !== n ? n : "",
                                target: p[0].target || "_self",
                                children: (0, c.tZ)(et.ZP, {
                                    imageUrl: null !== (i = p[0].imageTemplateUrl) && void 0 !== i ? i : "",
                                    altText: p[0].text,
                                    sources: f,
                                    imageWidth: v ? 69.5 : 104,
                                    imageHeight: v ? 80 : 120
                                })
                            }) : (0, c.tZ)(et.ZP, {
                                imageUrl: null !== (l = p[0].imageTemplateUrl) && void 0 !== l ? l : "",
                                altText: p[0].text,
                                sources: f,
                                imageWidth: v ? 69.5 : 104,
                                imageHeight: v ? 80 : 120
                            })
                        }), (0, c.tZ)(eo.ParalympicButtonWrapper, {
                            children: (0, c.tZ)(ee.Z, {
                                buttonType: "cta",
                                tag: "a",
                                href: null !== (a = p[1].link) && void 0 !== a ? a : "",
                                target: p[1].target || "_self",
                                "aria-label": p[1].text,
                                children: (0, c.tZ)("span", {
                                    children: p[1].text
                                })
                            })
                        }), (0, c.tZ)(eo.Separator, {}), (0, c.tZ)(eo.DownloadText, {
                            tag: "span",
                            variant: m.El.smBody,
                            children: null == h ? void 0 : null === (t = h.appsLink) || void 0 === t ? void 0 : t.download
                        }), (0, c.BX)(eo.DownloadButtons, {
                            children: [p[2].link ? (0, c.tZ)(C.Z, {
                                href: null !== (o = p[2].link) && void 0 !== o ? o : "",
                                target: "_blank",
                                children: (0, c.tZ)(et.ZP, {
                                    addFAuto: !1,
                                    imageUrl: null !== (r = p[2].imageTemplateUrl) && void 0 !== r ? r : "",
                                    altText: p[2].text,
                                    sources: y
                                })
                            }) : (0, c.tZ)(et.ZP, {
                                addFAuto: !1,
                                imageUrl: null !== (d = p[2].imageTemplateUrl) && void 0 !== d ? d : "",
                                altText: p[2].text,
                                sources: y
                            }), p[3].link ? (0, c.tZ)(C.Z, {
                                href: null !== (s = p[3].link) && void 0 !== s ? s : "",
                                target: "_blank",
                                children: (0, c.tZ)(et.ZP, {
                                    addFAuto: !1,
                                    imageUrl: null !== (u = p[3].imageTemplateUrl) && void 0 !== u ? u : "",
                                    altText: p[3].text,
                                    sources: y
                                })
                            }) : (0, c.tZ)(et.ZP, {
                                addFAuto: !1,
                                imageUrl: null !== (g = p[3].imageTemplateUrl) && void 0 !== g ? g : "",
                                altText: p[3].text,
                                sources: y
                            })]
                        })]
                    })
                },
                ed = n(82021),
                ec = n(76330),
                es = n(74154),
                eu = n(74724),
                em = n(11163);
            let eg = e => e.map(e => {
                    let {
                        src: t,
                        format: n
                    } = e;
                    return 'url("'.concat(t, '") format("').concat(n, '")')
                }).join(", "),
                ep = (e, t) => {
                    let {
                        srcs: n,
                        style: i,
                        weight: l
                    } = t;
                    return '\n@font-face {\n  font-display: swap;\n  font-family: "'.concat(e, '";\n  ').concat(i ? "font-style: ".concat(i, ";") : "", "\n  ").concat(l ? "font-weight: ".concat(l, ";") : "", '\n  src: local("').concat(e, '"), ').concat(eg(n), ";\n}\n")
                },
                eh = (e, t) => t.map(t => ep(e, t)).join(""),
                ev = (0, g.createGlobalStyle)(["", ""], e => {
                    let {
                        fontFaces: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            name: n,
                            variants: i
                        } = t;
                        return e.concat(eh(n, i))
                    }, "")
                });
            var ef = n(97834),
                ey = n(39350),
                eb = n(37223),
                eS = n(9008),
                ew = n.n(eS);
            let eM = () => {
                    let {
                        originalUrl: e,
                        cdnAppBaseUrl: t
                    } = (0, eb.V)();
                    return (0, c.tZ)(ew(), {
                        children: e && (0, c.tZ)("link", {
                            rel: "canonical",
                            href: "https://".concat(t).concat(e)
                        })
                    })
                },
                ek = (e, t, n) => [{
                    url: "#",
                    title: e,
                    code: "my-profile"
                }, {
                    url: "/account/signup-preferences",
                    title: t,
                    code: "favourites"
                }, {
                    url: "#",
                    title: n,
                    code: "sign-out"
                }],
                ex = () => {
                    let {
                        locale: e
                    } = (0, em.useRouter)(), {
                        algoliaVariables: t,
                        envConfig: n,
                        topics: i
                    } = (0, ef.g)(), {
                        t: l
                    } = (0, es.$)(eu.w.common), {
                        algoliaIndexName: a
                    } = (0, eb.V)(), o = (0, s.useMemo)(() => ({
                        all: l("algoliaSearch", "all"),
                        ocsevents: l("algoliaSearch", "events"),
                        athlete: l("algoliaSearch", "athlete"),
                        news: l("algoliaSearch", "news"),
                        athletes: l("algoliaSearch", "athletes"),
                        nocs: l("algoliaSearch", "nocs"),
                        stories: l("algoliaSearch", "stories"),
                        clear: l("algoliaSearch", "clear"),
                        faq: l("algoliaSearch", "faq"),
                        search: l("algoliaSearch", "search"),
                        genericPage: l("algoliaSearch", "genericPage"),
                        noResults: l("algoliaSearch", "noResults"),
                        noResultsDisclaimer: l("algoliaSearch", "noResultsDisclaimer"),
                        more: l("algoliaSearch", "more"),
                        loadMore: l("algoliaSearch", "loadMore"),
                        persons: l("algoliaSearch", "persons"),
                        iocdocument: l("algoliaSearch", "iocdocument"),
                        federation: l("algoliaSearch", "federation"),
                        page: l("algoliaSearch", "page"),
                        dateFrom: l("algoliaSearch", "dateFrom"),
                        dateTo: l("algoliaSearch", "dateTo"),
                        vod: l("algoliaSearch", "vod"),
                        series: l("algoliaSearch", "series"),
                        originals: l("algoliaSearch", "originals"),
                        disciplines: l("algoliaSearch", "disciplines"),
                        trending: l("algoliaSearch", "trending"),
                        recentSearches: l("algoliaSearch", "recentSearches"),
                        relevant: l("algoliaSearch", "relevant"),
                        latest: l("algoliaSearch", "latest"),
                        externalLink: l("algoliaSearch", "externalLink"),
                        podcast: l("algoliaSearch", "podcast"),
                        teams: l("algoliaSearch", "teams"),
                        video: l("videos")
                    }), [l]), r = (0, s.useMemo)(() => (0, u.nV)({ ...n,
                        indexName: null == a ? void 0 : a.replace("{locale}", null != e ? e : "en"),
                        i18n: o
                    }, t, i), [a, n, o, e, i, t]);
                    return (0, s.useMemo)(() => {
                        if (r) return {
                            fallbackImageUrl: "https://gstatic.olympics.com/image/private/t_original_380/f_auto/primary/p4omdu759pqnhb6ef4in",
                            ...r,
                            imgPathPrefix: "/_srm",
                            logoUrl: "https://gstatic.olympics.com/s1/f_auto/static/srm/paris-2024/topic-assets/algolia-search/paris-2024/logo.svg"
                        }
                    }, [r])
                };
            var eT = n(54362),
                eL = n(18446),
                eC = n.n(eL),
                eZ = n(35111);
            let eW = e => console.log("################ ".concat(e.name, " WEB VITALS ################"), e, "###############################################"),
                eE = () => (0, eZ.useReportWebVitals)(eW);
            var eI = n(43386);
            let eB = (e, t) => {
                let n = e,
                    i = t.extraTrackingData || {};
                return clearInterval(n), n = window.setInterval(() => {
                    (0, eI.Yp)({ ...t,
                        extraTrackingData: i
                    }, !0)
                }, parseInt("30000", 10)), () => {
                    clearInterval(n)
                }
            };
            var eR = e => {
                    let {
                        language: t,
                        analyticsReady: n,
                        analyticsMeta: i,
                        children: l
                    } = e, a = (0, s.useRef)({ ...window.location
                    }), o = (0, s.useRef)(), r = (0, s.useRef)(!1);
                    return (0, s.useEffect)(() => {
                        if (n) {
                            let n = window.document.location.pathname.replace(/\/([a-z][a-z])\//, "").split("/");
                            "" === n[0] && n.shift();
                            let c = {
                                language: t,
                                pageType: "Paris 2024",
                                levelNames: {
                                    level1: "paris-2024",
                                    level2: n[1]
                                },
                                ...i
                            };
                            if (!r.current && (eI.ZY.isTrackingConsentGiven() || eI.ZY.isSpecialTerritory())) {
                                var e, l, d;
                                (0, eI.HC)({ ...c,
                                    url: null === (e = a.current) || void 0 === e ? void 0 : e.href,
                                    search: null === (l = a.current) || void 0 === l ? void 0 : l.search,
                                    path: null === (d = a.current) || void 0 === d ? void 0 : d.pathname
                                }, !0), r.current = !0
                            }
                            if (eI.ZY.isTrackingConsentGiven() || eI.ZY.cookieLoadedTriggered() && eI.ZY.isSpecialTerritory()) return eB(o.current, c)
                        }
                    }, [i, n, t]), (0, c.tZ)(c.HY, {
                        children: l
                    })
                },
                e_ = e => {
                    let {
                        language: t = "en",
                        analyticsReady: n,
                        analyticsMeta: i,
                        children: l
                    } = e;
                    return (0, s.useEffect)(() => {
                        let e = "Clear Signed Up",
                            t = "Signed Up";
                        sessionStorage.getItem(e) ? (sessionStorage.removeItem(t), sessionStorage.removeItem(e)) : sessionStorage.getItem(t) && sessionStorage.setItem(e, "true")
                    }, []), (0, s.useEffect)(() => {
                        let e = e => {
                            (0, eI.dN)(e, "", t, window.location.origin, "", !1, void 0, !0)
                        };
                        return document.addEventListener("click", e), document.addEventListener("auxclick", e), () => {
                            document.removeEventListener("click", e), document.removeEventListener("auxclick", e)
                        }
                    }, [t]), (0, s.useEffect)(() => {
                        let e = () => {
                            (0, eI.Tx)({
                                language: t
                            })
                        };
                        return window.addEventListener("user-logout", e), () => {
                            window.removeEventListener("user-logout", e)
                        }
                    }, [t]), (0, s.useEffect)(() => {
                        let e = [],
                            t = e => {
                                let t = e.currentTarget,
                                    n = null == t ? void 0 : t.getAttribute("href");
                                if (n && "#" !== n) {
                                    var i;
                                    null === (i = document.querySelector(n)) || void 0 === i || i.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start"
                                    })
                                }
                            };
                        return document.querySelectorAll('a[href^="#"]').forEach(n => {
                            let i = null == n ? void 0 : n.addEventListener("click", t);
                            e.push(i)
                        }), () => {
                            e.forEach(e => {
                                null == e || e.removeEventListener("click", t)
                            })
                        }
                    }, []), (0, c.tZ)(eR, {
                        analyticsReady: n,
                        language: t,
                        analyticsMeta: i,
                        children: l
                    })
                },
                eO = n(76908);
            let eH = () => {
                    let {
                        asPath: e,
                        locale: t
                    } = (0, em.useRouter)(), {
                        urls: n,
                        frontendBaseUrl: i
                    } = (0, eb.V)(), l = [], {
                        hrefLangList: a
                    } = eA(e, n, t);
                    return Object.keys(a).forEach(e => {
                        let t = (0, ed.Gr)(i, a[e]);
                        t && l.push((0, c.tZ)("link", {
                            rel: "alternate",
                            href: t,
                            hrefLang: e
                        }, "alternate-".concat(e)))
                    }), (null == l ? void 0 : l.length) > 0 ? (0, c.tZ)(ew(), {
                        children: l
                    }) : (0, c.tZ)(c.HY, {})
                },
                eA = (e, t, n) => {
                    var i, l;
                    let a = "/".concat(n).concat(e).split("?")[0],
                        o = null !== (l = null === (i = t[a]) || void 0 === i ? void 0 : i.hrefLang) && void 0 !== l ? l : [];
                    return {
                        pathName: a,
                        hrefLangList: o
                    }
                };
            var eF = n(67807),
                eP = JSON.parse('{"y":[{"id":"ARC","name":"Archery","events":[{"id":"ARCMINDIVID-----------------------","name":"Men\'s Individual"},{"id":"ARCWINDIVID-----------------------","name":"Women\'s Individual"},{"id":"ARCMTEAM3-------------------------","name":"Men\'s Team"},{"id":"ARCWTEAM3-------------------------","name":"Women\'s Team"},{"id":"ARCXTEAM2-------------------------","name":"Mixed Team"}]},{"id":"ATH","name":"Athletics","events":[{"id":"ATHM100M--------------------------","name":"Men\'s 100m"},{"id":"ATHM200M--------------------------","name":"Men\'s 200m"},{"id":"ATHM400M--------------------------","name":"Men\'s 400m"},{"id":"ATHM800M--------------------------","name":"Men\'s 800m"},{"id":"ATHM1500M-------------------------","name":"Men\'s 1500m"},{"id":"ATHM5000M-------------------------","name":"Men\'s 5000m"},{"id":"ATHM10000M------------------------","name":"Men\'s 10,000m"},{"id":"ATHMMARATHON----------------------","name":"Men\'s Marathon"},{"id":"ATHM3000MST-----------------------","name":"Men\'s 3000m Steeplechase"},{"id":"ATHM110MHURD----------------------","name":"Men\'s 110m Hurdles"},{"id":"ATHM400MHURD----------------------","name":"Men\'s 400m Hurdles"},{"id":"ATHMHIGHJUMP----------------------","name":"Men\'s High Jump"},{"id":"ATHMPLEVAULT----------------------","name":"Men\'s Pole Vault"},{"id":"ATHMLONGJUMP----------------------","name":"Men\'s Long Jump"},{"id":"ATHMTRPLJUMP----------------------","name":"Men\'s Triple Jump"},{"id":"ATHMSHOTPUT-----------------------","name":"Men\'s Shot Put"},{"id":"ATHMDISCUS------------------------","name":"Men\'s Discus Throw"},{"id":"ATHMHAMMER------------------------","name":"Men\'s Hammer Throw"},{"id":"ATHMJAVELIN-----------------------","name":"Men\'s Javelin Throw"},{"id":"ATHMDECATH------------------------","name":"Men\'s Decathlon"},{"id":"ATHM20KMWALK----------------------","name":"Men\'s 20km Race Walk"},{"id":"ATHM50KMWALK----------------------","name":"Men\'s 50km Race Walk"},{"id":"ATHM4X100M------------------------","name":"Men\'s 4 x 100m Relay"},{"id":"ATHM4X400M------------------------","name":"Men\'s 4 x 400m Relay"},{"id":"ATHW100M--------------------------","name":"Women\'s 100m"},{"id":"ATHW200M--------------------------","name":"Women\'s 200m"},{"id":"ATHW400M--------------------------","name":"Women\'s 400m"},{"id":"ATHW800M--------------------------","name":"Women\'s 800m"},{"id":"ATHW1500M-------------------------","name":"Women\'s 1500m"},{"id":"ATHW5000M-------------------------","name":"Women\'s 5000m"},{"id":"ATHW10000M------------------------","name":"Women\'s 10,000m"},{"id":"ATHWMARATHON----------------------","name":"Women\'s Marathon"},{"id":"ATHW3000MST-----------------------","name":"Women\'s 3000m Steeplechase"},{"id":"ATHW100MHURD----------------------","name":"Women\'s 100m Hurdles"},{"id":"ATHW400MHURD----------------------","name":"Women\'s 400m Hurdles"},{"id":"ATHWHIGHJUMP----------------------","name":"Women\'s High Jump"},{"id":"ATHWPLEVAULT----------------------","name":"Women\'s Pole Vault"},{"id":"ATHWLONGJUMP----------------------","name":"Women\'s Long Jump"},{"id":"ATHWTRPLJUMP----------------------","name":"Women\'s Triple Jump"},{"id":"ATHWSHOTPUT-----------------------","name":"Women\'s Shot Put"},{"id":"ATHWDISCUS------------------------","name":"Women\'s Discus Throw"},{"id":"ATHWHAMMER------------------------","name":"Women\'s Hammer Throw"},{"id":"ATHWJAVELIN-----------------------","name":"Women\'s Javelin Throw"},{"id":"ATHWHEPTATH-----------------------","name":"Women\'s Heptathlon"},{"id":"ATHW20KMWALK----------------------","name":"Women\'s 20km Race Walk"},{"id":"ATHW4X100M------------------------","name":"Women\'s 4 x 100m Relay"},{"id":"ATHW4X400M------------------------","name":"Women\'s 4 x 400m Relay"},{"id":"ATHX4X400M------------------------","name":"4 x 400m Relay Mixed"}]},{"id":"BDM","name":"Badminton","events":[{"id":"BDMMSINGLES-----------------------","name":"Men\'s Singles"},{"id":"BDMWSINGLES-----------------------","name":"Women\'s Singles"},{"id":"BDMMDOUBLES-----------------------","name":"Men\'s Doubles"},{"id":"BDMWDOUBLES-----------------------","name":"Women\'s Doubles"},{"id":"BDMXDOUBLES-----------------------","name":"Mixed Doubles"}]},{"id":"BK3","name":"3x3 Basketball","events":[{"id":"BK3MTEAM3-------------------------","name":"Men"},{"id":"BK3WTEAM3-------------------------","name":"Women"}]},{"id":"BKB","name":"Basketball","events":[{"id":"BKBMTEAM5-------------------------","name":"Men"},{"id":"BKBWTEAM5-------------------------","name":"Women"}]},{"id":"BMF","name":"Cycling BMX Freestyle","events":[{"id":"BMFMINDVFRST----------------------","name":"Men\'s Park"},{"id":"BMFWINDVFRST----------------------","name":"Women\'s Park"}]},{"id":"BMX","name":"Cycling BMX Racing","events":[{"id":"BMXMINDVRACE----------------------","name":"Men"},{"id":"BMXWINDVRACE----------------------","name":"Women"}]},{"id":"BOX","name":"Boxing","events":[{"id":"BOXM52KG--------------------------","name":"Men\'s Fly (48-52kg)"},{"id":"BOXM57KG--------------------------","name":"Men\'s Feather (52-57kg)"},{"id":"BOXM63KG--------------------------","name":"Men\'s Light (57-63kg)"},{"id":"BOXM69KG--------------------------","name":"Men\'s Welter (63-69kg)"},{"id":"BOXM75KG--------------------------","name":"Men\'s Middle (69-75kg)"},{"id":"BOXM81KG--------------------------","name":"Men\'s Light Heavy (75-81kg)"},{"id":"BOXM91KG--------------------------","name":"Men\'s Heavy (81-91kg)"},{"id":"BOXMO91KG-------------------------","name":"Men\'s Super Heavy (+91kg)"},{"id":"BOXW51KG--------------------------","name":"Women\'s Fly (48-51kg)"},{"id":"BOXW57KG--------------------------","name":"Women\'s Feather (54-57kg)"},{"id":"BOXW60KG--------------------------","name":"Women\'s Light (57-60kg)"},{"id":"BOXW69KG--------------------------","name":"Women\'s Welter (64-69kg)"},{"id":"BOXW75KG--------------------------","name":"Women\'s Middle (69-75kg)"}]},{"id":"BSB","name":"Baseball/Softball","events":[{"id":"BSBMBBLTEAM9----------------------","name":"Baseball"},{"id":"BSBWSBLTEAM9----------------------","name":"Softball"}]},{"id":"CLB","name":"Sport Climbing","events":[{"id":"CLBWCOMBINED----------------------","name":"Women\'s Combined"},{"id":"CLBMCOMBINED----------------------","name":"Men\'s Combined"}]},{"id":"CRD","name":"Cycling Road","events":[{"id":"CRDMRR----------------------------","name":"Men\'s Road Race"},{"id":"CRDWRR----------------------------","name":"Women\'s Road Race"},{"id":"CRDMTT----------------------------","name":"Men\'s Individual Time Trial"},{"id":"CRDWTT----------------------------","name":"Women\'s Individual Time Trial"}]},{"id":"CSL","name":"Canoe Slalom","events":[{"id":"CSLMK1----------------------------","name":"Men\'s Kayak"},{"id":"CSLWK1----------------------------","name":"Women\'s Kayak"},{"id":"CSLMC1----------------------------","name":"Men\'s Canoe"},{"id":"CSLWC1----------------------------","name":"Women\'s Canoe"}]},{"id":"CSP","name":"Canoe Sprint","events":[{"id":"CSPMK1-200M-----------------------","name":"Men\'s Kayak Single 200m"},{"id":"CSPMK1-1000M----------------------","name":"Men\'s Kayak Single 1000m"},{"id":"CSPMK2-1000M----------------------","name":"Men\'s Kayak Double 1000m"},{"id":"CSPMK4-500M-----------------------","name":"Men\'s Kayak Four 500m"},{"id":"CSPMC1-1000M----------------------","name":"Men\'s Canoe Single 1000m"},{"id":"CSPMC2-1000M----------------------","name":"Men\'s Canoe Double 1000m"},{"id":"CSPWK1-200M-----------------------","name":"Women\'s Kayak Single 200m"},{"id":"CSPWK1-500M-----------------------","name":"Women\'s Kayak Single 500m"},{"id":"CSPWK2-500M-----------------------","name":"Women\'s Kayak Double 500m"},{"id":"CSPWK4-500M-----------------------","name":"Women\'s Kayak Four 500m"},{"id":"CSPWC1-200M-----------------------","name":"Women\'s Canoe Single 200m"},{"id":"CSPWC2-500M-----------------------","name":"Women\'s Canoe Double 500m"}]},{"id":"CTR","name":"Cycling Track","events":[{"id":"CTRMSPRTEAM3----------------------","name":"Men\'s Team Sprint"},{"id":"CTRMSPRINT------------------------","name":"Men\'s Sprint"},{"id":"CTRMKEIRIN------------------------","name":"Men\'s Keirin"},{"id":"CTRMPURTEAM4----------------------","name":"Men\'s Team Pursuit"},{"id":"CTRMOMNIUM------------------------","name":"Men\'s Omnium"},{"id":"CTRMMADISON-----------------------","name":"Men\'s Madison"},{"id":"CTRWSPRTEAM3----------------------","name":"Women\'s Team Sprint"},{"id":"CTRWSPRINT------------------------","name":"Women\'s Sprint"},{"id":"CTRWKEIRIN------------------------","name":"Women\'s Keirin"},{"id":"CTRWPURTEAM4----------------------","name":"Women\'s Team Pursuit"},{"id":"CTRWOMNIUM------------------------","name":"Women\'s Omnium"},{"id":"CTRWMADISON-----------------------","name":"Women\'s Madison"}]},{"id":"DIV","name":"Diving","events":[{"id":"DIVW3M----------------------------","name":"Women\'s 3m Springboard"},{"id":"DIVW10M---------------------------","name":"Women\'s 10m Platform"},{"id":"DIVW3MTEAM2-----------------------","name":"Women\'s Synchronised 3m Springboard"},{"id":"DIVW10MTEAM2----------------------","name":"Women\'s Synchronised 10m Platform"},{"id":"DIVM3M----------------------------","name":"Men\'s 3m Springboard"},{"id":"DIVM10M---------------------------","name":"Men\'s 10m Platform"},{"id":"DIVM3MTEAM2-----------------------","name":"Men\'s Synchronised 3m Springboard"},{"id":"DIVM10MTEAM2----------------------","name":"Men\'s Synchronised 10m Platform"}]},{"id":"EQU","name":"Equestrian","events":[{"id":"EQUOEVENTEAM----------------------","name":"Eventing Team"},{"id":"EQUOEVENINDV----------------------","name":"Eventing Individual"},{"id":"EQUODRESTEAM----------------------","name":"Dressage Team"},{"id":"EQUODRESINDV----------------------","name":"Dressage Individual"},{"id":"EQUOJUMPTEAM----------------------","name":"Jumping Team"},{"id":"EQUOJUMPINDV----------------------","name":"Jumping Individual"}]},{"id":"FBL","name":"Football","events":[{"id":"FBLMTEAM11------------------------","name":"Men"},{"id":"FBLWTEAM11------------------------","name":"Women"}]},{"id":"FEN","name":"Fencing","events":[{"id":"FENWEPEE--------------------------","name":"Women\'s \xc9p\xe9e Individual"},{"id":"FENWFOIL--------------------------","name":"Women\'s Foil Individual"},{"id":"FENWSABRE-------------------------","name":"Women\'s Sabre Individual"},{"id":"FENMEPEE--------------------------","name":"Men\'s \xc9p\xe9e Individual"},{"id":"FENMFOIL--------------------------","name":"Men\'s Foil Individual"},{"id":"FENMSABRE-------------------------","name":"Men\'s Sabre Individual"},{"id":"FENWTEAMEPEE----------------------","name":"Women\'s \xc9p\xe9e Team"},{"id":"FENWTEAMFOIL----------------------","name":"Women\'s Foil Team"},{"id":"FENWTEAMSABR----------------------","name":"Women\'s Sabre Team"},{"id":"FENMTEAMEPEE----------------------","name":"Men\'s \xc9p\xe9e Team"},{"id":"FENMTEAMFOIL----------------------","name":"Men\'s Foil Team"},{"id":"FENMTEAMSABR----------------------","name":"Men\'s Sabre Team"}]},{"id":"GAR","name":"Artistic Gymnastics","events":[]},{"id":"GLF","name":"Golf","events":[{"id":"GLFMSTROKE------------------------","name":"Men\'s Individual Stroke Play"},{"id":"GLFWSTROKE------------------------","name":"Women\'s Individual Stroke Play"}]},{"id":"GRY","name":"Rhythmic Gymnastics","events":[{"id":"GRYW1AA---------------------------","name":"Individual All-Around"},{"id":"GRYW5AA---------------------------","name":"Group All-Around"}]},{"id":"GTR","name":"Trampoline Gymnastics","events":[{"id":"GTRM1TRA--------------------------","name":"Men"},{"id":"GTRW1TRA--------------------------","name":"Women"}]},{"id":"HBL","name":"Handball","events":[{"id":"HBLMTEAM7-------------------------","name":"Men"},{"id":"HBLWTEAM7-------------------------","name":"Women"}]},{"id":"HOC","name":"Hockey","events":[{"id":"HOCMTEAM11------------------------","name":"Men"},{"id":"HOCWTEAM11------------------------","name":"Women"}]},{"id":"JUD","name":"Judo","events":[{"id":"JUDW48KG--------------------------","name":"Women -48 kg"},{"id":"JUDW52KG--------------------------","name":"Women -52 kg"},{"id":"JUDW57KG--------------------------","name":"Women -57 kg"},{"id":"JUDW63KG--------------------------","name":"Women -63 kg"},{"id":"JUDW70KG--------------------------","name":"Women -70 kg"},{"id":"JUDW78KG--------------------------","name":"Women -78 kg"},{"id":"JUDWO78KG-------------------------","name":"Women +78 kg"},{"id":"JUDM60KG--------------------------","name":"Men -60 kg"},{"id":"JUDM66KG--------------------------","name":"Men -66 kg"},{"id":"JUDM73KG--------------------------","name":"Men -73 kg"},{"id":"JUDM81KG--------------------------","name":"Men -81 kg"},{"id":"JUDM90KG--------------------------","name":"Men -90 kg"},{"id":"JUDM100KG-------------------------","name":"Men -100 kg"},{"id":"JUDMO100KG------------------------","name":"Men +100 kg"},{"id":"JUDXTEAM6-------------------------","name":"Mixed Team"}]},{"id":"KTE","name":"Karate","events":[{"id":"KTEWKATA--------------------------","name":"Women\'s Kata"},{"id":"KTEMKATA--------------------------","name":"Men\'s Kata"},{"id":"KTEW55KG--------------------------","name":"Women\'s Kumite -55kg"},{"id":"KTEW61KG--------------------------","name":"Women\'s Kumite -61kg"},{"id":"KTEWO61KG-------------------------","name":"Women\'s Kumite +61kg"},{"id":"KTEM67KG--------------------------","name":"Men\'s Kumite -67kg"},{"id":"KTEM75KG--------------------------","name":"Men\'s Kumite -75kg"},{"id":"KTEMO75KG-------------------------","name":"Men\'s Kumite +75kg"}]},{"id":"MPN","name":"Modern Pentathlon","events":[{"id":"MPNWINDIVID-----------------------","name":"Women\'s Individual"},{"id":"MPNMINDIVID-----------------------","name":"Men\'s Individual"}]},{"id":"MTB","name":"Cycling Mountain Bike","events":[{"id":"MTBMXCTRY-------------------------","name":"Men\'s Cross-country"},{"id":"MTBWXCTRY-------------------------","name":"Women\'s Cross-country"}]},{"id":"OWS","name":"Marathon Swimming","events":[{"id":"OWSW10KM--------------------------","name":"Women\'s 10km"},{"id":"OWSM10KM--------------------------","name":"Men\'s 10km"}]},{"id":"ROW","name":"Rowing","events":[{"id":"ROWWNOCOX2------------------------","name":"Women\'s Pair"},{"id":"ROWMNOCOX2------------------------","name":"Men\'s Pair"},{"id":"ROWWSCULL2------------------------","name":"Women\'s Double Sculls"},{"id":"ROWMSCULL2------------------------","name":"Men\'s Double Sculls"},{"id":"ROWWNOCOX4------------------------","name":"Women\'s Four"},{"id":"ROWMNOCOX4------------------------","name":"Men\'s Four"},{"id":"ROWWSCULL1------------------------","name":"Women\'s Single Sculls"},{"id":"ROWMSCULL1------------------------","name":"Men\'s Single Sculls"},{"id":"ROWWSCULL2-L----------------------","name":"Lightweight Women\'s Double Sculls"},{"id":"ROWMSCULL2-L----------------------","name":"Lightweight Men\'s Double Sculls"},{"id":"ROWWSCULL4------------------------","name":"Women\'s Quadruple Sculls"},{"id":"ROWMSCULL4------------------------","name":"Men\'s Quadruple Sculls"},{"id":"ROWWCOXED8------------------------","name":"Women\'s Eight"},{"id":"ROWMCOXED8------------------------","name":"Men\'s Eight"}]},{"id":"RUG","name":"Rugby Sevens","events":[{"id":"RUGMTEAM7-------------------------","name":"Men"},{"id":"RUGWTEAM7-------------------------","name":"Women"}]},{"id":"SAL","name":"Sailing","events":[{"id":"SALMRSX---------------------------","name":"RS:X Men"},{"id":"SALMLASER-------------------------","name":"Laser Men"},{"id":"SALMFINN--------------------------","name":"Finn Men"},{"id":"SALM470---------------------------","name":"470 Men"},{"id":"SALM49ER--------------------------","name":"49er Men"},{"id":"SALWRSX---------------------------","name":"RS:X Women"},{"id":"SALWRADIAL------------------------","name":"Laser Radial Women"},{"id":"SALW470---------------------------","name":"470 Women"},{"id":"SALW49ERFX------------------------","name":"49er FX Women"},{"id":"SALXNACRA17-----------------------","name":"Nacra 17 Mixed"}]},{"id":"SHO","name":"Shooting","events":[{"id":"SHOMAR60--------------------------","name":"10m Air Rifle Men"},{"id":"SHOMFR3X40------------------------","name":"50m Rifle 3 Positions Men"},{"id":"SHOMAP60--------------------------","name":"10m Air Pistol Men"},{"id":"SHOMRFP---------------------------","name":"25m Rapid Fire Pistol Men"},{"id":"SHOMTR125-------------------------","name":"Trap Men"},{"id":"SHOMSK125-------------------------","name":"Skeet Men"},{"id":"SHOWAR60W-------------------------","name":"10m Air Rifle Women"},{"id":"SHOWR3X40-------------------------","name":"50m Rifle 3 Positions Women"},{"id":"SHOWAP60W-------------------------","name":"10m Air Pistol Women"},{"id":"SHOWSP----------------------------","name":"25m Pistol Women"},{"id":"SHOWTR125W------------------------","name":"Trap Women"},{"id":"SHOWSK125W------------------------","name":"Skeet Women"},{"id":"SHOXARMIX-------------------------","name":"10m Air Rifle Mixed Team"},{"id":"SHOXAPMIX-------------------------","name":"10m Air Pistol Mixed Team"},{"id":"SHOXTRMIX-------------------------","name":"Trap Mixed Team"}]},{"id":"SKB","name":"Skateboarding","events":[{"id":"SKBWSTREET------------------------","name":"Women\'s Street"},{"id":"SKBMSTREET------------------------","name":"Men\'s Street"},{"id":"SKBWPARK--------------------------","name":"Women\'s Park"},{"id":"SKBMPARK--------------------------","name":"Men\'s Park"}]},{"id":"SRF","name":"Surfing","events":[{"id":"SRFMSHORTBRD----------------------","name":"Men"},{"id":"SRFWSHORTBRD----------------------","name":"Women"}]},{"id":"SWA","name":"Artistic Swimming","events":[{"id":"SWAWTEAM2-------------------------","name":"Duet"},{"id":"SWAWTEAM8-------------------------","name":"Team"}]},{"id":"SWM","name":"Swimming","events":[{"id":"SWMM100MBA-R----------------------","name":"Men\'s 100m Backstroke (relay only)"},{"id":"SWMM100MBF-R----------------------","name":"Men\'s 100m Butterfly (relay only)"},{"id":"SWMM100MBR-R----------------------","name":"Men\'s 100m Breaststroke (relay only)"},{"id":"SWMM100MFR-R----------------------","name":"Men\'s 100m Freestyle (relay only)"},{"id":"SWMM200MFR-R----------------------","name":"Men\'s 200m Freestyle (relay only)"},{"id":"SWMW100MBA-R----------------------","name":"Women\'s 100m Backstroke (relay only)"},{"id":"SWMW100MBF-R----------------------","name":"Women\'s 100m Butterfly (relay only)"},{"id":"SWMW100MBR-R----------------------","name":"Women\'s 100m Breaststroke (relay only)"},{"id":"SWMW100MFR-R----------------------","name":"Women\'s 100m Freestyle (relay only)"},{"id":"SWMW200MFR-R----------------------","name":"Women\'s 200m Freestyle (relay only)"},{"id":"SWMW50MFR-------------------------","name":"Women\'s 50m Freestyle"},{"id":"SWMW100MFR------------------------","name":"Women\'s 100m Freestyle"},{"id":"SWMW200MFR------------------------","name":"Women\'s 200m Freestyle"},{"id":"SWMW400MFR------------------------","name":"Women\'s 400m Freestyle"},{"id":"SWMW800MFR------------------------","name":"Women\'s 800m Freestyle"},{"id":"SWMW1500MFR-----------------------","name":"Women\'s 1500m Freestyle"},{"id":"SWMW100MBA------------------------","name":"Women\'s 100m Backstroke"},{"id":"SWMW200MBA------------------------","name":"Women\'s 200m Backstroke"},{"id":"SWMW100MBR------------------------","name":"Women\'s 100m Breaststroke"},{"id":"SWMW200MBR------------------------","name":"Women\'s 200m Breaststroke"},{"id":"SWMW100MBF------------------------","name":"Women\'s 100m Butterfly"},{"id":"SWMW200MBF------------------------","name":"Women\'s 200m Butterfly"},{"id":"SWMW200MIM------------------------","name":"Women\'s 200m Individual Medley"},{"id":"SWMW400MIM------------------------","name":"Women\'s 400m Individual Medley"},{"id":"SWMW4X100MFR----------------------","name":"Women\'s 4 x 100m Freestyle Relay"},{"id":"SWMW4X200MFR----------------------","name":"Women\'s 4 x 200m Freestyle Relay"},{"id":"SWMW4X100MMD----------------------","name":"Women\'s 4 x 100m Medley Relay"},{"id":"SWMM50MFR-------------------------","name":"Men\'s 50m Freestyle"},{"id":"SWMM100MFR------------------------","name":"Men\'s 100m Freestyle"},{"id":"SWMM200MFR------------------------","name":"Men\'s 200m Freestyle"},{"id":"SWMM400MFR------------------------","name":"Men\'s 400m Freestyle"},{"id":"SWMM800MFR------------------------","name":"Men\'s 800m Freestyle"},{"id":"SWMM1500MFR-----------------------","name":"Men\'s 1500m Freestyle"},{"id":"SWMM100MBA------------------------","name":"Men\'s 100m Backstroke"},{"id":"SWMM200MBA------------------------","name":"Men\'s 200m Backstroke"},{"id":"SWMM100MBR------------------------","name":"Men\'s 100m Breaststroke"},{"id":"SWMM200MBR------------------------","name":"Men\'s 200m Breaststroke"},{"id":"SWMM100MBF------------------------","name":"Men\'s 100m Butterfly"},{"id":"SWMM200MBF------------------------","name":"Men\'s 200m Butterfly"},{"id":"SWMM200MIM------------------------","name":"Men\'s 200m Individual Medley"},{"id":"SWMM400MIM------------------------","name":"Men\'s 400m Individual Medley"},{"id":"SWMM4X100MFR----------------------","name":"Men\'s 4 x 100m Freestyle Relay"},{"id":"SWMM4X200MFR----------------------","name":"Men\'s 4 x 200m Freestyle Relay"},{"id":"SWMM4X100MMD----------------------","name":"Men\'s 4 x 100m Medley Relay"},{"id":"SWMX4X100MMD----------------------","name":"Mixed 4 x 100m Medley Relay"}]},{"id":"TEN","name":"Tennis","events":[{"id":"TENMSINGLES-----------------------","name":"Men\'s Singles"},{"id":"TENWSINGLES-----------------------","name":"Women\'s Singles"},{"id":"TENMDOUBLES-----------------------","name":"Men\'s Doubles"},{"id":"TENWDOUBLES-----------------------","name":"Women\'s Doubles"},{"id":"TENXDOUBLES-----------------------","name":"Mixed Doubles"}]},{"id":"TKW","name":"Taekwondo","events":[{"id":"TKWM58KG--------------------------","name":"Men -58kg"},{"id":"TKWM68KG--------------------------","name":"Men -68kg"},{"id":"TKWM80KG--------------------------","name":"Men -80kg"},{"id":"TKWMO80KG-------------------------","name":"Men +80kg"},{"id":"TKWW49KG--------------------------","name":"Women -49kg"},{"id":"TKWW57KG--------------------------","name":"Women -57kg"},{"id":"TKWW67KG--------------------------","name":"Women -67kg"},{"id":"TKWWO67KG-------------------------","name":"Women +67kg"}]},{"id":"TRI","name":"Triathlon","events":[{"id":"TRIWOLYMPIC-----------------------","name":"Women\'s Individual"},{"id":"TRIMOLYMPIC-----------------------","name":"Men\'s Individual"},{"id":"TRIXTEAM4-------------------------","name":"Mixed Relay"}]},{"id":"TTE","name":"Table Tennis","events":[{"id":"TTEMSINGLES-----------------------","name":"Men\'s Singles"},{"id":"TTEWSINGLES-----------------------","name":"Women\'s Singles"},{"id":"TTEXDOUBLES-----------------------","name":"Mixed Doubles"},{"id":"TTEMTEAM--------------------------","name":"Men\'s Team"},{"id":"TTEWTEAM--------------------------","name":"Women\'s Team"}]},{"id":"VBV","name":"Beach Volleyball","events":[{"id":"VBVMTEAM2-------------------------","name":"Men"},{"id":"VBVWTEAM2-------------------------","name":"Women"}]},{"id":"VVO","name":"Volleyball","events":[{"id":"VVOMTEAM6-------------------------","name":"Men"},{"id":"VVOWTEAM6-------------------------","name":"Women"}]},{"id":"WLF","name":"Weightlifting","events":[{"id":"WLFW49KG--------------------------","name":"Women\'s 49kg"},{"id":"WLFW55KG--------------------------","name":"Women\'s 55kg"},{"id":"WLFW59KG--------------------------","name":"Women\'s 59kg"},{"id":"WLFW64KG--------------------------","name":"Women\'s 64kg"},{"id":"WLFW76KG--------------------------","name":"Women\'s 76kg"},{"id":"WLFW87KG--------------------------","name":"Women\'s 87kg"},{"id":"WLFWO87KG-------------------------","name":"Women\'s +87kg"},{"id":"WLFM61KG--------------------------","name":"Men\'s 61kg"},{"id":"WLFM67KG--------------------------","name":"Men\'s 67kg"},{"id":"WLFM73KG--------------------------","name":"Men\'s 73kg"},{"id":"WLFM81KG--------------------------","name":"Men\'s 81kg"},{"id":"WLFM96KG--------------------------","name":"Men\'s 96kg"},{"id":"WLFM109KG-------------------------","name":"Men\'s 109kg"},{"id":"WLFMO109KG------------------------","name":"Men\'s +109kg"}]},{"id":"WPO","name":"Water Polo","events":[{"id":"WPOMTEAM7-------------------------","name":"Men"},{"id":"WPOWTEAM7-------------------------","name":"Women"}]},{"id":"WRE","name":"Wrestling","events":[{"id":"WREMGR60KG------------------------","name":"Men\'s Greco-Roman 60kg"},{"id":"WREMGR67KG------------------------","name":"Men\'s Greco-Roman 67kg"},{"id":"WREMGR77KG------------------------","name":"Men\'s Greco-Roman 77kg"},{"id":"WREMGR87KG------------------------","name":"Men\'s Greco-Roman 87kg"},{"id":"WREMGR97KG------------------------","name":"Men\'s Greco-Roman 97kg"},{"id":"WREMGR130KG-----------------------","name":"Men\'s Greco-Roman 130kg"},{"id":"WREWFS50KG------------------------","name":"Women\'s Freestyle 50kg"},{"id":"WREWFS53KG------------------------","name":"Women\'s Freestyle 53kg"},{"id":"WREWFS57KG------------------------","name":"Women\'s Freestyle 57kg"},{"id":"WREWFS62KG------------------------","name":"Women\'s Freestyle 62kg"},{"id":"WREWFS68KG------------------------","name":"Women\'s Freestyle 68kg"},{"id":"WREWFS76KG------------------------","name":"Women\'s Freestyle 76kg"},{"id":"WREMFS57KG------------------------","name":"Men\'s Freestyle 57kg"},{"id":"WREMFS65KG------------------------","name":"Men\'s Freestyle 65kg"},{"id":"WREMFS74KG------------------------","name":"Men\'s Freestyle 74kg"},{"id":"WREMFS86KG------------------------","name":"Men\'s Freestyle 86kg"},{"id":"WREMFS97KG------------------------","name":"Men\'s Freestyle 97kg"},{"id":"WREMFS125KG-----------------------","name":"Men\'s Freestyle 125kg"}]}]}');
            let eX = {
                    scheduleGrid: {
                        title: {
                            default: {
                                filterKey: "schedule_grid_overall_page_title"
                            }
                        },
                        description: {
                            default: {
                                filterKey: "schedule_grid_overall_meta_description"
                            }
                        }
                    },
                    schedule: {
                        title: {
                            default: {
                                filterKey: "schedule_list_default_page_title"
                            },
                            day: {
                                filterKey: "schedule_list_day_page_title"
                            },
                            discipline: {
                                filterKey: "schedule_list_sport_page_title",
                                concatenable: {
                                    organisation: {
                                        filterKey: "schedule_list_noc_sport_page_title"
                                    }
                                }
                            },
                            event: {
                                filterKey: "schedule_list_event_page_title"
                            },
                            organisation: {
                                filterKey: "schedule_list_noc_page_title",
                                concatenable: {
                                    discipline: {
                                        filterKey: "schedule_list_noc_sport_page_title"
                                    }
                                }
                            }
                        },
                        description: {
                            default: {
                                filterKey: "schedule_list_default_meta_description"
                            },
                            day: {
                                filterKey: "schedule_list_day_meta_description"
                            },
                            discipline: {
                                filterKey: "schedule_list_sport_meta_description",
                                concatenable: {
                                    organisation: {
                                        filterKey: "schedule_list_noc_sport_meta_description"
                                    }
                                }
                            },
                            event: {
                                filterKey: "schedule_list_event_meta_description"
                            },
                            organisation: {
                                filterKey: "schedule_list_noc_meta_description",
                                concatenable: {
                                    discipline: {
                                        filterKey: "schedule_list_noc_sport_meta_description"
                                    }
                                }
                            }
                        }
                    },
                    medals: {
                        title: {
                            default: {
                                filterKey: "medal_table_page_title"
                            },
                            discipline: {
                                filterKey: "medals_by_sport_page_title"
                            }
                        },
                        description: {
                            default: {
                                filterKey: "medal_table_meta_description"
                            },
                            discipline: {
                                filterKey: "medals_by_sport_meta_description"
                            }
                        }
                    },
                    medallists: {
                        title: {
                            default: {
                                filterKey: "medalists_page_title"
                            },
                            discipline: {
                                filterKey: "medalists_by_sport_page_title"
                            },
                            organisation: {
                                filterKey: "medalists_by_noc_page_title"
                            }
                        },
                        description: {
                            default: {
                                filterKey: "medalists_meta_description"
                            },
                            discipline: {
                                filterKey: "medalists_by_sport_meta_description"
                            },
                            organisation: {
                                filterKey: "medalists_by_noc_meta_description"
                            }
                        }
                    }
                },
                eD = ["event", "discipline", "day", "noc"],
                eN = {
                    day: "date",
                    discipline: "discipline",
                    event: "event",
                    organisation: "noc"
                },
                eG = (e, t) => "noc" === e ? {
                    type: "organisation",
                    code: t
                } : {
                    type: e,
                    code: t
                },
                eK = e => {
                    let t = eD.find(t => !!e[t]);
                    return t ? eG(t, e[t]) : null
                },
                ez = e => {
                    let t = new URLSearchParams(null != e ? e : ""),
                        n = [];
                    return t.forEach((e, t) => {
                        eD.find(e => e === t) && n.push(eG(t, e))
                    }), n
                },
                eU = (e, t, n) => {
                    let i = e[t.type];
                    if ((null == i ? void 0 : i.concatenable) && (null == n ? void 0 : n.length)) {
                        let e = n.find(e => {
                            var t;
                            return !!(null == i ? void 0 : null === (t = i.concatenable) || void 0 === t ? void 0 : t[e.type])
                        });
                        e && (i = i.concatenable[e.type])
                    }
                    return i
                },
                eV = (e, t, n) => {
                    var i, l, a, o, r, d;
                    if ("organisation" === t.type) {
                        let a = null === (l = Object.values(n).find(e => e.params.noc === t.code)) || void 0 === l ? void 0 : null === (i = l.params) || void 0 === i ? void 0 : i.nocLabel;
                        if (a) return e.replaceAll("[".concat(eN[t.type], "]"), a)
                    }
                    if ("discipline" === t.type) {
                        let i = null === (o = Object.values(n).find(e => e.params.discipline === t.code)) || void 0 === o ? void 0 : null === (a = o.params) || void 0 === a ? void 0 : a.disciplineLabel;
                        if (i) return e.replaceAll("[".concat(eN[t.type], "]"), i)
                    }
                    if ("event" === t.type) {
                        let i = null === (r = Object.values(n).find(e => e.params.event === t.code)) || void 0 === r ? void 0 : r.params;
                        if (i) return e.replaceAll("[".concat(eN[t.type], "]"), i.eventLabel).replaceAll("[".concat(eN.discipline, "]"), i.disciplineLabel)
                    }
                    if ("day" === t.type) {
                        let i = null === (d = Object.values(n).find(e => e.params.day === t.code)) || void 0 === d ? void 0 : d.params;
                        if (i) return e.replaceAll("[".concat(eN[t.type], "]"), "".concat(i.dayNumber, " ").concat(i.monthLabel))
                    }
                    return e.replaceAll("[".concat(eN[t.type], "]"), t.code)
                },
                ej = (e, t) => {
                    var n;
                    let i = "event" === e.type || "discipline" === e.type ? e.code.padEnd(34, "-") : null;
                    if (i) return i;
                    let l = t.find(t => "event" === t.type || "discipline" === e.type);
                    return null !== (n = null == l ? void 0 : l.code.padEnd(34, "-")) && void 0 !== n ? n : null
                },
                eq = (e, t) => {
                    var n;
                    let i = "organisation" === e.type ? e.code : null;
                    if (i) return i;
                    let l = t.find(e => "organisation" === e.type);
                    return null !== (n = null == l ? void 0 : l.code) && void 0 !== n ? n : null
                },
                eJ = (e, t, n, i) => n.reduce((e, t) => eV(e, t, i), eV(e, t, i)),
                eY = e => {
                    var t;
                    let n = null === (t = eP.y.find(t => {
                        let {
                            id: n
                        } = t;
                        return n === e
                    })) || void 0 === t ? void 0 : t.name.toLowerCase();
                    return n ? "discipline-".concat(n) : void 0
                },
                e$ = () => {
                    let {
                        urls: e
                    } = (0, eb.V)(), {
                        asPath: t,
                        locale: n
                    } = (0, em.useRouter)(), [i, l] = (0, s.useState)("/".concat(n).concat(t)), {
                        t: a
                    } = (0, es.$)(eu.w.srmParis2024);
                    return (0, s.useEffect)(() => {
                        let e = e => {
                            l(e.detail.newUrl)
                        };
                        return document.addEventListener(eF.SZ, e), () => {
                            document.removeEventListener(eF.SZ, e)
                        }
                    }, []), (0, s.useMemo)(() => {
                        let t = i.split("?"),
                            n = null == t ? void 0 : t[0],
                            l = null == t ? void 0 : t[1],
                            o = e[n];
                        if (!o) return {
                            title: "",
                            description: ""
                        };
                        let r = o.page,
                            d = o.params,
                            c = eK(d),
                            s = ez(null != l ? l : ""),
                            u = eX[r];
                        if (!u) return {
                            title: "",
                            description: ""
                        };
                        if (!c && s.length) {
                            let [e, ...t] = s;
                            c = e, s = t
                        }
                        if (!c) return {
                            analyticsMeta: {},
                            title: a(u.title.default.filterKey),
                            description: a(u.description.default.filterKey)
                        };
                        let m = eU(u.title, c, s),
                            g = eU(u.description, c, s),
                            p = "event" === c.type ? d.discipline : c.code;
                        return {
                            analyticsMeta: {
                                odf_id: ej(c, s),
                                discipline: eY(p),
                                noc_id: eq(c, s)
                            },
                            title: m ? eJ(a(m.filterKey), c, s, e) : a(u.title.default.filterKey),
                            description: g ? eJ(a(g.filterKey), c, s, e) : a(u.description.default.filterKey)
                        }
                    }, [i, a, e])
                };
            var eQ = n(94582),
                e0 = n(27563);
            let e1 = (0, n(90602).Z)({
                    key: "emotion-srm",
                    stylisPlugins: [e => {
                        e.type === e0.h5 && (e.return = e.value.replace(/(\d+(\.\d+)?)px/g, (e, t) => parseFloat(t) / 16 + "rem"))
                    }, eQ.Ji]
                }),
                e2 = {
                    version: "1.1.26-static"
                },
                e4 = () => {
                    let e = (0, eb.V)();
                    (0, s.useEffect)(() => {
                        let t = { ...e2,
                            generatedAt: e.generatedAt,
                            pageProps: e
                        };
                        console.log("############# SRM WEB BUILD INFO ##############"), console.log(t), console.log("###############################################"), window.srmBuild = t
                    }, [e])
                };
            var e3 = n(69090),
                e5 = n(25349);
            let e6 = e => {
                    let {
                        ScriptUrl: t,
                        BranchKey: n,
                        OptanonCategoryFilter: i
                    } = e;
                    if (!t || !n || !i) return;
                    let l = '\n		/* load Branch */\n		(function (b, r, a, n, c, h, _, s, d, k) { if (!b[n] || !b[n]._q) { for (; s < _.length;)c(h, _[s++]); d = r.createElement(a); d.async = 1; d.src = "'.concat(t, '"; k = r.getElementsByTagName(a)[0]; k.parentNode.insertBefore(d, k); b[n] = h } })(window, document, "script", "branch", function (b, r) { b[r] = function () { b._q.push([r, arguments]) } }, { _q: [], _v: 1 }, "addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking".split(" "), 0);\n		/* init Branch */\n		branch.init("').concat(n, '");\n  '),
                        a = document.createElement("script");
                    a.classList.add(i), a.textContent = l, document.head.appendChild(a)
                },
                e8 = e => {
                    var t;
                    let n = new URLSearchParams(window.location.search).get("displayAsWebView"),
                        i = null !== (t = navigator) && void 0 !== t && !!t.userAgent && (null == e ? void 0 : e.some(e => navigator.userAgent.includes(e)));
                    return !!n || i
                };
            var e9 = n(1785),
                e7 = n.n(e9),
                te = n(87066);
            let tt = (e, t) => {
                    let n = new URLSearchParams;
                    n.set("module", "algoliaSearchCta"), n.set("locale", e), n.set("page", "1"), n.set("properties", btoa(JSON.stringify({
                        word: t
                    })));
                    let i = "".concat("/_pr/api/moduledata", "?").concat(n.toString());
                    return te.default.get(i).then(e => e.data).catch(e => (console.error("Error fetching module data from url", i, e), {}))
                },
                tn = e => tt(e).then(e => ({ ...e
                })),
                ti = e => async t => {
                    let n = await tt(e, t);
                    return null == n ? void 0 : n.data[0]
                },
                tl = { ...m.np[m.b3["gtw-paris-2024-blue"]],
                    ...eT.Y
                },
                ta = (0, s.memo)(u.ZP, eC()),
                to = (0, s.memo)(e => {
                    var t;
                    let {
                        appsLinks: n,
                        sitemapLinks: i,
                        mainLinks: l,
                        socialLinks: a,
                        legalLinks: o,
                        footerType: r = d.Full,
                        translations: u,
                        hideAdv: h,
                        advOptions: v
                    } = e, b = window, [S, w] = (0, s.useState)(!1), M = () => {
                        if (b) {
                            var e;
                            w((null === (e = window) || void 0 === e ? void 0 : e.innerWidth) < parseInt(m.np[m.b3["gtw-paris-2024"]].breakpoints.lg, 10))
                        }
                    };
                    return (0, s.useEffect)(() => {
                        if (b) {
                            var e;
                            return M(), null === (e = window) || void 0 === e || e.addEventListener("resize", M), () => {
                                var e;
                                null === (e = window) || void 0 === e || e.removeEventListener("resize", M)
                            }
                        }
                    }, [b]), (0, c.tZ)("footer", {
                        id: "p2024-footer",
                        children: (0, c.BX)(g.ThemeProvider, {
                            theme: m.np[m.b3["gtw-paris-2024"]],
                            children: [!h && (0, c.tZ)(f, {
                                children: (0, c.tZ)(z.Adv, {
                                    children: (0, c.tZ)(y.default, {
                                        slot: "bottom",
                                        shouldDisplaySponsorText: !1,
                                        targeting: null == v ? void 0 : v.targeting,
                                        path: null == v ? void 0 : v.unitTag,
                                        sizeMapping: null == v ? void 0 : v.sizeMapping
                                    })
                                })
                            }), (0, c.BX)(z.WrapperFooterGrid, {
                                children: [r === d.Full && (0, c.BX)(z.WrapperFooter, {
                                    "data-cy": "paris2024-footer",
                                    children: [(0, c.BX)(z.Wrapper, {
                                        children: [n && n.length > 0 && (0, c.tZ)(z.AppsLinksWrapper, {
                                            children: (0, c.tZ)(er, {
                                                appsLinks: n,
                                                translations: u,
                                                isMobile: S
                                            })
                                        }), !S && (0, c.tZ)(z.NavWrapper, {
                                            children: (0, c.tZ)(z.MainNavWrapper, {
                                                "data-cy": "paris2024-footer-main-nav",
                                                children: i && i.map(e => {
                                                    var t;
                                                    return e.isEnabled && (0, c.tZ)(J, {
                                                        itemLink: e,
                                                        navLinks: null !== (t = e.navLinks) && void 0 !== t ? t : []
                                                    }, e.text)
                                                })
                                            })
                                        })]
                                    }), (0, c.BX)(z.GlobalMenuSocialWrapper, {
                                        children: [(0, c.tZ)(z.GlobalMenuWrapper, {
                                            "data-cy": "paris2024-global-menu",
                                            children: l && l.map(e => e.isEnabled && (0, c.tZ)(E, {
                                                itemLink: e
                                            }, e.text))
                                        }), (0, c.BX)(z.SocialWrapper, {
                                            "data-cy": "paris2024-socials",
                                            children: [(0, c.tZ)(z.SocialText, {
                                                children: (0, c.tZ)(p.Z, {
                                                    tag: "span",
                                                    variant: m.El.smBody,
                                                    children: null == u ? void 0 : null === (t = u.socialLink) || void 0 === t ? void 0 : t.followUsOn
                                                })
                                            }), (0, c.tZ)(z.SocialListIcon, {
                                                children: a && a.map(e => e.isEnabled && (0, c.tZ)(Q, {
                                                    itemLink: e
                                                }, e.text))
                                            })]
                                        })]
                                    })]
                                }), (0, c.BX)(z.LegalCopyrightWrapper, {
                                    className: r,
                                    children: [(0, c.tZ)(z.LegalDisclaimerMenuWrapper, {
                                        "data-cy": "paris2024-legal-disclaimer",
                                        children: o && o.map(e => e.isEnabled && (0, c.tZ)(V, {
                                            itemLink: e
                                        }, e.text))
                                    }), (0, c.tZ)(z.CopyrightWrapper, {
                                        children: (0, c.tZ)(p.Z, {
                                            tag: "span",
                                            variant: m.El.smBody,
                                            children: null == u ? void 0 : u.copyright
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                }, eC());
            ta.displayName = "TemplateHeader", to.displayName = "TemplateFooter";
            let tr = (0, s.memo)(e => {
                var t, n, i, l, a, o, r, d, m;
                let {
                    title: p,
                    roofline: h,
                    emblem: v = u.Hq.OLY,
                    children: f
                } = e;
                eE(), e4();
                let {
                    title: y,
                    description: b,
                    analyticsMeta: S
                } = e$(), {
                    frontendBaseUrl: w,
                    parisCountriesLivestream: M,
                    disableAnalytics: k,
                    cdnInfoApiBaseUrl: x
                } = (0, eb.V)(), {
                    locale: T,
                    asPath: L
                } = (0, em.useRouter)(), {
                    interfaceLinks: C,
                    topBannerAdvTimeout: Z,
                    appUserAgents: W,
                    gtmKey: E,
                    ...I
                } = (0, ef.g)(), [B, R] = (0, s.useState)(!1), [_, O] = (0, s.useState)(!1), H = ex(), [A, F] = (0, s.useState)(!1), [P, X] = (0, s.useState)(!1), [D, N] = (0, s.useState)(), [G, K] = (0, s.useState)(), [z, U] = (0, s.useState)(), {
                    t: V
                } = (0, es.$)(eu.w.common), {
                    t: j
                } = (0, es.$)(eu.w.pageRendererParis2024), q = (0, s.useMemo)(() => ek(j("header", "myProfile"), j("header", "favourites"), j("header", "signOut")), [j]), {
                    urls: J,
                    apiAdvConfig: {
                        aboveHeaderAdv: {
                            stickySeconds: Y
                        }
                    }
                } = (0, eb.V)(), $ = (0, e5.h)("top"), {
                    hrefLangList: Q
                } = eA(L, J, T);
                m = eI.ZY.isTrackingConsentGiven(), (0, s.useEffect)(() => {
                    B && m && !_ && E && ((async () => {
                        var e, t;
                        e7().initialize({
                            gtmId: E,
                            dataLayer: {
                                userNation: null === (t = window) || void 0 === t ? void 0 : null === (e = t.deltatre) || void 0 === e ? void 0 : e.userNation
                            }
                        })
                    })(), O(!0))
                }, [B, m, _, !1, O, E]);
                let ee = "hi" === T ? "en" : T,
                    et = (0, s.useMemo)(() => C.map(e => ({ ...e,
                        url: (0, e3.M)(e.url)
                    })), [C]),
                    en = "/".concat(T).concat(L),
                    ei = null == et ? void 0 : null === (t = et.filter(e => en.startsWith(e.url)).sort((e, t) => {
                        let n = e.url.split("/").length,
                            i = t.url.split("/").length;
                        return n < i ? 1 : n > i ? -1 : 0
                    })) || void 0 === t ? void 0 : t[0];
                (0, s.useEffect)(() => {
                    let e = () => {
                        var e, t;
                        return F(null == M ? void 0 : M.includes(null === (t = window) || void 0 === t ? void 0 : null === (e = t.deltatre) || void 0 === e ? void 0 : e.userNation))
                    };
                    return document.addEventListener("user-nation-loaded", e), () => {
                        document.removeEventListener("user-nation-loaded", e)
                    }
                }, [M]), (0, s.useEffect)(() => {
                    let {
                        branchSettings: e
                    } = I, t = null == W ? void 0 : W.filter(e => !!e);
                    !e || document.querySelector(".".concat(e.OptanonCategoryFilter)) || e8(t) || e6({ ...e
                    })
                }, [W, I]), (0, s.useEffect)(() => {
                    (async () => {
                        var e, t, n, i, l, a;
                        let o = (0, ed.Gr)(x, "menu", T || "en", "edition", "oly", "position", "footer", "geofilter", (null === (t = window) || void 0 === t ? void 0 : null === (e = t.deltatre) || void 0 === e ? void 0 : e.userNation) || "US"),
                            r = (0, ed.Gr)(x, "menu", T || "en", "edition", "oly", "position", "header", "geofilter", (null === (i = window) || void 0 === i ? void 0 : null === (n = i.deltatre) || void 0 === n ? void 0 : n.userNation) || "US"),
                            [d, c] = await Promise.all([fetch(r).then(e => e.json()), fetch(o).then(e => e.json())]);
                        N({ ...d
                        }), K(c), U(null !== (a = null == d ? void 0 : null === (l = d.languageList) || void 0 === l ? void 0 : l.map(e => {
                            var t, n, i;
                            let {
                                customProperties: l,
                                text: a,
                                link: o
                            } = e, r = null !== (n = null === (t = (0, ed._n)(l)) || void 0 === t ? void 0 : t.code) && void 0 !== n ? n : null == o ? void 0 : o.split("/").pop(), d = null !== (i = Q[r]) && void 0 !== i ? i : o;
                            return {
                                code: r,
                                title: a,
                                url: d
                            }
                        })) && void 0 !== a ? a : [])
                    })()
                }, [x, Q, T]), (0, s.useEffect)(() => {
                    R(eI.ZY.cookieLoadedTriggered());
                    let e = () => R(!0);
                    return window.addEventListener("cookies-loaded", e), () => {
                        window.removeEventListener("cookies-loaded", e)
                    }
                }, []);
                let [el, ea] = (0, s.useState)();
                return (0, s.useEffect)(() => {
                    tn(null != T ? T : "en").then(e => ea({ ...e,
                        getCtaForWord: ti(null != T ? T : "en")
                    }))
                }, [T]), (0, c.BX)(c.HY, {
                    children: [(0, c.BX)(ew(), {
                        children: [(0, c.tZ)("title", {
                            children: y
                        }), (0, c.tZ)("meta", {
                            name: "description",
                            content: b
                        }), (0, c.tZ)("meta", {
                            name: "google",
                            content: "notranslate"
                        })]
                    }), (0, c.tZ)(eO.Z, {
                        language: null != T ? T : "en",
                        frontendBaseUrl: w,
                        onAnalyticsLoaded: X,
                        disableAnalytics: k
                    }), (0, c.tZ)(g.StyleSheetManager, {
                        stylisPlugins: [ey.Z],
                        children: (0, c.tZ)(ec.C, {
                            value: e1,
                            children: (0, c.tZ)(g.ThemeProvider, {
                                theme: tl,
                                children: (0, c.BX)(ec.a, {
                                    theme: tl,
                                    children: [(0, c.tZ)(eM, {}), (0, c.tZ)(eH, {}), (0, c.tZ)(ev, {
                                        fontFaces: null !== (i = tl.fontFaces) && void 0 !== i ? i : []
                                    }), (0, c.BX)(e_, {
                                        language: T,
                                        analyticsReady: P,
                                        analyticsMeta: S,
                                        children: [(0, c.tZ)(ta, { ...I,
                                            ...null != D ? D : {},
                                            switchButton: null == D ? void 0 : null === (n = D.switchButton) || void 0 === n ? void 0 : n[0],
                                            languageList: z,
                                            advOptions: {
                                                advTimeout: (null != Y ? Y : 7) * 1e3,
                                                unitTag: $.unitTag,
                                                targeting: $.targeting
                                            },
                                            searchModule: { ...H,
                                                searchResultsCtaConfiguration: el
                                            },
                                            quickLinks: A ? null == D ? void 0 : D.liveStream : null == D ? void 0 : D.quickLinks,
                                            assetsBaseUrl: "https://gstatic.olympics.com/s1/f_auto/static/srm/paris-2024/topic-assets",
                                            title: p,
                                            roofline: h,
                                            locale: ee,
                                            emblem: v,
                                            RooflineInH1: !!p && !!h,
                                            activeInterfaceLink: null == ei ? void 0 : ei.code,
                                            userLinks: q,
                                            shopBaseUrl: w,
                                            i18n: {
                                                loginButtonLabel: j("header", "login"),
                                                openMainMenu: j("header", "openMainMenu").toLowerCase(),
                                                search: V("search").toLowerCase(),
                                                manageMyProfile: j("header", "manageMyProfile").toLowerCase(),
                                                login: V("login").toLowerCase(),
                                                srQuickLinks: j("header", "quickLinks"),
                                                srSiteLanguage: j("header", "siteLanguage"),
                                                srCurrentLanguage: j("header", "currentLanguage"),
                                                logoAlt: j("header", "logoAltText"),
                                                closeMainMenu: j("header", "closeMainMenu"),
                                                srMainNavigation: j("header", "mainNavigation"),
                                                srSecondaryNavigation: j("header", "secondaryNavigation"),
                                                loginButton: j("header", "loginButton"),
                                                back: j("header", "backButton"),
                                                userSettings: j("header", "userSettings"),
                                                skipToMainContent: j("header", "skipToMainContent"),
                                                skipToLanguageSelection: j("header", "skipToLanguageSelection"),
                                                skipToLoginProfile: j("header", "skipToLoginProfile"),
                                                skipToSearch: j("header", "skipToSearch"),
                                                skipToFooter: j("header", "skipToFooter")
                                            },
                                            interfaceLinks: et
                                        }), (0, c.tZ)("div", {
                                            id: "p2024-main-content",
                                            children: f
                                        }), (0, c.tZ)(to, {
                                            hideAdv: !0,
                                            appsLinks: null !== (l = null == G ? void 0 : G.appsLinks) && void 0 !== l ? l : [],
                                            sitemapLinks: null !== (a = null == G ? void 0 : G.sitemapLinks) && void 0 !== a ? a : [],
                                            mainLinks: null !== (o = null == G ? void 0 : G.mainLinks) && void 0 !== o ? o : [],
                                            socialLinks: null !== (r = null == G ? void 0 : G.socialLinks) && void 0 !== r ? r : [],
                                            legalLinks: null !== (d = null == G ? void 0 : G.legalLinks) && void 0 !== d ? d : [],
                                            translations: {
                                                copyright: j("footer", "copyright"),
                                                socialLink: {
                                                    followUsOn: j("footer", "socialLink", "followUsOn")
                                                },
                                                appsLink: {
                                                    download: j("footer", "appsLink", "download")
                                                }
                                            }
                                        })]
                                    })]
                                })
                            })
                        })
                    })]
                })
            }, eC())
        },
        42771: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return o
                }
            });
            var i = n(52227),
                l = n(67807),
                a = n(59584);
            let o = (0, i.Z)("span", {
                target: "ek0nen90"
            })(e => {
                var t;
                let {
                    theme: n,
                    variant: i,
                    lang: o
                } = e, r = null == n ? void 0 : null === (t = n.srmTheme) || void 0 === t ? void 0 : t.typography[i][o && a.M.includes(o) ? o : "en"];
                return { ...null == r ? void 0 : r.base,
                    ["@media (min-width: ".concat(l.MR, "px)")]: null == r ? void 0 : r.desktop
                }
            })
        },
        36227: function(e, t, n) {
            n.d(t, {
                Mc: function() {
                    return c
                },
                fJ: function() {
                    return d
                },
                ft: function() {
                    return r
                }
            });
            var i, l, a = n(71001),
                o = n(67807);
            (i = l || (l = {})).gold = "Gold", i.silver = "Silver", i.bronze = "Bronze", i.totalMedals = "Total Medals", i.alphabetical = "Alphabetical", i.protocol = "Protocol", i.total = "Total", i.athleteName = "AthleteName", i.nocs = "Nocs";
            let r = [{
                    type: o.GV.schedule,
                    module: "Daily Schedule",
                    moduleInstance: "Schedule"
                }, {
                    type: o.GV.scheduleGrid,
                    module: "Overall Schedule",
                    moduleInstance: "Schedule"
                }, {
                    type: o.GV.medals,
                    module: "Medal Table",
                    moduleInstance: "Medals"
                }, {
                    type: o.GV.medallists,
                    module: "Medallist",
                    moduleInstance: "Medals"
                }],
                d = [{
                    sortingValue: "Gold",
                    sortingOrder: "descending",
                    sortingType: "Medals"
                }, {
                    sortingValue: "Silver",
                    sortingOrder: "descending",
                    sortingType: "Medals"
                }, {
                    sortingValue: "Bronze",
                    sortingOrder: "descending",
                    sortingType: "Medals"
                }, {
                    sortingValue: "Total",
                    sortingOrder: "descending",
                    sortingType: "Medals"
                }, {
                    sortingValue: "Total Medals",
                    sortingOrder: "descending",
                    sortingType: "Medals"
                }, {
                    sortingValue: "Alphabetical",
                    sortingOrder: "ascending",
                    sortingType: "Alphabetical"
                }, {
                    sortingValue: "Protocol",
                    sortingOrder: "ascending",
                    sortingType: "Protocol"
                }, {
                    sortingValue: "AthleteName",
                    sortingOrder: "ascending",
                    sortingType: "Alphabetical"
                }, {
                    sortingValue: "Nocs",
                    sortingOrder: "ascending",
                    sortingType: "Alphabetical"
                }],
                c = {
                    [a.BD.staticIntegration]: {
                        module: "MRH Static Banner",
                        moduleInstance: "MRH"
                    },
                    [a.BD.apiIntegration]: {
                        module: "MRH API Banner",
                        moduleInstance: "MRH"
                    }
                }
        },
        67807: function(e, t, n) {
            var i, l;
            n.d(t, {
                AV: function() {
                    return s
                },
                BE: function() {
                    return m
                },
                GV: function() {
                    return i
                },
                MR: function() {
                    return o
                },
                SZ: function() {
                    return r
                },
                et: function() {
                    return d
                },
                hm: function() {
                    return c
                },
                kq: function() {
                    return u
                },
                nw: function() {
                    return a
                }
            });
            let a = "OG2024",
                o = 770,
                r = "history-change",
                d = "p2024_heart",
                c = "paris-2024",
                s = "p2024_bookmark",
                u = "p2024_favourites",
                m = "paris-2024-favourites";
            (l = i || (i = {})).schedule = "schedule", l.scheduleGrid = "scheduleGrid", l.medals = "medals", l.medallists = "medallists"
        },
        59584: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return i
                }
            });
            let i = ["ja", "ar", "zh", "hi", "ko", "ru"]
        },
        25349: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return d
                }
            });
            var i = n(67294),
                l = JSON.parse('{"BK3":"3x3-basketball","ARC":"archery","GAR":"artistic-gymnastics","SWA":"artistic-swimming","ATH":"athletics","BDM":"badminton","BKB":"basketball","VBV":"beach-volleyball","BOX":"boxing","BKG":"breaking","CSL":"canoe-kayak-slalom","CSP":"canoe-kayak-flatwater","BMF":"cycling-bmx-freestyle","BMX":"cycling-bmx-racing","MTB":"cycling-mountain-bike","CRD":"cycling-road","CTR":"cycling-track","DIV":"diving","EQU":"equestrian","FEN":"fencing","FBL":"football","GLF":"golf","HBL":"handball","HOC":"hockey","JUD":"judo","OWS":"marathon-swimming","MPN":"modern-pentathlon","GRY":"rhythmic-gymnastics","ROW":"rowing","RU7":"rugby-sevens","SAL":"sailing","SHO":"shooting","SKB":"skateboarding","CLB":"sport-climbing","SRF":"surfing","SWM":"swimming","TTE":"table-tennis","TKW":"taekwondo","TEN":"tennis","GTR":"trampoline-gymnastics","TRI":"triathlon","VVO":"volleyball","WPO":"water-polo","WLF":"weightlifting","WRE":"wrestling"}'),
                a = n(37223),
                o = n(11163),
                r = n(67807);
            let d = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mid",
                    {
                        locale: t,
                        asPath: n,
                        pathname: d
                    } = (0, o.useRouter)(),
                    {
                        query: c,
                        advTargeting: s,
                        advUnitTags: u
                    } = (0, a.V)(),
                    [m, g] = (0, i.useState)(null == c ? void 0 : c.pDiscipline),
                    [p, h] = (0, i.useState)("/".concat(t).concat(n)),
                    v = (0, i.useCallback)(e => {
                        g(e.detail.disciplineCode)
                    }, []);
                (0, i.useEffect)(() => {
                    let e = e => {
                        h(e.detail.newUrl)
                    };
                    return document.addEventListener(r.SZ, e), () => {
                        document.removeEventListener(r.SZ, e)
                    }
                }, []), (0, i.useEffect)(() => (document.addEventListener("filterApplied", v), () => {
                    document.removeEventListener("filterApplied", v)
                }), [v]);
                let f = d.substring(1),
                    y = m ? l[m] : void 0,
                    b = "/".concat(t).concat(p.split("?")[0]);
                return {
                    unitTag: u[f],
                    targeting: {
                        environment: [s],
                        language_version: [null != t ? t : "en"],
                        page: [b],
                        "event-slug": ["paris-2024"],
                        sport: y ? [y] : void 0,
                        slot: e
                    }
                }
            }
        },
        74724: function(e, t, n) {
            var i, l;
            n.d(t, {
                w: function() {
                    return i
                }
            }), (l = i || (i = {})).common = "page-renderer/common", l.pageRendererParis2024 = "page-renderer/paris-2024", l.srmParis2024 = "srm/paris-2024"
        },
        39350: function(e, t, n) {
            var i = n(27563);
            t.Z = e => {
                if (e.type === i.h5) {
                    let t = e.value.replace(/(\d+(\.\d+)?)rem/g, (e, t) => parseFloat(t) / 1.6 + "rem");
                    e.return = t
                }
            }
        },
        54362: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return m
                }
            });
            var i, l, a, o, r, d, c, s = n(59159),
                u = n(12222);
            let m = {
                srmTheme: {
                    typography: {
                        mrhTitle: {
                            en: {
                                base: {
                                    fontFamily: "'Paris 2024',\"Olympic Headline\",Helvetica,sans-serif",
                                    fontSize: "21px",
                                    fontWeight: "900",
                                    lineHeight: "22px",
                                    letterSpacing: "0.005em",
                                    margin: 0,
                                    textTransform: "uppercase"
                                }
                            }
                        },
                        h3: {
                            en: {
                                base: {
                                    fontSize: "24px",
                                    fontWeight: "900",
                                    lineHeight: "28px",
                                    letterSpacing: "0",
                                    textAlign: "left",
                                    margin: 0
                                }
                            }
                        },
                        h4: {
                            en: {
                                base: { ...(0, s.a)("sourceSans"),
                                    fontSize: "24px",
                                    fontWeight: "900",
                                    lineHeight: "20px",
                                    letterSpacing: "0",
                                    margin: 0
                                }
                            }
                        },
                        big: {
                            en: {
                                base: { ...(0, s.a)("sourceSans"),
                                    fontSize: "24px",
                                    fontWeight: "400",
                                    lineHeight: "36px",
                                    letterSpacing: "0",
                                    margin: 0
                                }
                            }
                        },
                        medium: {
                            en: {
                                base: { ...(0, s.a)("sourceSans"),
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    lineHeight: "24px",
                                    letterSpacing: "0",
                                    margin: 0,
                                    textAlign: "center"
                                },
                                desktop: { ...(0, s.a)("sourceSans"),
                                    fontSize: "20px",
                                    fontWeight: "400",
                                    lineHeight: "28px",
                                    letterSpacing: "0",
                                    textAlign: "center"
                                }
                            }
                        },
                        mediumBold: {
                            en: {
                                base: { ...(0, s.a)("sourceSans"),
                                    fontSize: "16px",
                                    fontWeight: "700",
                                    lineHeight: "24px",
                                    letterSpacing: "0",
                                    margin: 0,
                                    textAlign: "left"
                                },
                                desktop: { ...(0, s.a)("sourceSans"),
                                    fontSize: "20px",
                                    fontWeight: "700",
                                    lineHeight: "28px",
                                    letterSpacing: "0",
                                    textAlign: "left"
                                }
                            }
                        },
                        small: {
                            en: {
                                base: { ...(0, s.a)("sourceSans"),
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    lineHeight: "24px",
                                    letterSpacing: "0",
                                    margin: 0,
                                    textAlign: "left"
                                },
                                desktop: { ...(0, s.a)("sourceSans"),
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    lineHeight: "24px",
                                    letterSpacing: "0",
                                    textAlign: "left"
                                }
                            }
                        },
                        caption: {
                            en: {
                                base: { ...(0, s.a)("sourceSans"),
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    lineHeight: "16px",
                                    letterSpacing: "0",
                                    margin: 0,
                                    textAlign: "left"
                                }
                            }
                        },
                        body: {
                            en: {
                                base: {
                                    fontFamily: null === (i = u.Ho.base) || void 0 === i ? void 0 : i.sans,
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    lineHeight: "24px",
                                    letterSpacing: "0",
                                    textAlign: "left"
                                },
                                desktop: {
                                    fontSize: "20px",
                                    fontWeight: "400",
                                    lineHeight: "28px",
                                    letterSpacing: "0",
                                    textAlign: "left"
                                }
                            },
                            ja: {
                                base: {
                                    fontFamily: null === (l = u.Ho.ja) || void 0 === l ? void 0 : l.sans,
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    lineHeight: "24px"
                                },
                                desktop: {
                                    fontSize: "20px",
                                    fontWeight: 400,
                                    lineHeight: "30px"
                                }
                            },
                            ko: {
                                base: {
                                    fontFamily: null === (a = u.Ho.ko) || void 0 === a ? void 0 : a.sans,
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    lineHeight: "26px"
                                },
                                desktop: {
                                    fontSize: "20px",
                                    fontWeight: 400,
                                    lineHeight: "30px"
                                }
                            },
                            zh: {
                                base: {
                                    fontFamily: null === (o = u.Ho.zh) || void 0 === o ? void 0 : o.sans,
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    lineHeight: "32px"
                                },
                                desktop: {
                                    fontSize: "20px",
                                    fontWeight: 400,
                                    lineHeight: "30px"
                                }
                            },
                            ru: {
                                base: {
                                    fontFamily: null === (r = u.Ho.ru) || void 0 === r ? void 0 : r.sans,
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    lineHeight: "32px"
                                },
                                desktop: {
                                    fontSize: "20px",
                                    fontWeight: 400,
                                    lineHeight: "30px"
                                }
                            },
                            ar: {
                                base: {
                                    fontFamily: null === (d = u.Ho.ar) || void 0 === d ? void 0 : d.sans,
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    lineHeight: "32px"
                                },
                                desktop: {
                                    fontSize: "20px",
                                    fontWeight: 400,
                                    lineHeight: "30px"
                                }
                            },
                            hi: {
                                base: {
                                    fontFamily: null === (c = u.Ho.hi) || void 0 === c ? void 0 : c.sans,
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    lineHeight: "32px"
                                },
                                desktop: {
                                    fontSize: "20px",
                                    fontWeight: 400,
                                    lineHeight: "30px"
                                }
                            }
                        }
                    }
                }
            }
        },
        59159: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return u
                },
                c: function() {
                    return s
                }
            });
            var i = n(1729),
                l = n.n(i),
                a = n(83946),
                o = n.n(a),
                r = n(70917),
                d = n(66194);
            let c = {
                    parisRegular: o().style,
                    parisBold: l().style,
                    sourceSans: {
                        fontFamily: "'Source Sans 3',sans-serif"
                    },
                    sourceSansPro: {
                        fontFamily: "".concat(d.Rq.sourceSansPro, ", ").concat(d.Rq.olympicSans)
                    },
                    icons: {
                        fontFamily: "".concat(d.Rq.icons, ", ").concat(d.Rq.olympicSans)
                    },
                    olympicHeadline: {
                        fontFamily: "".concat(d.Rq.olympicHeadline, ", ").concat(d.Rq.olympicSans)
                    },
                    olympicHeadlineCondensed: {
                        fontFamily: "".concat(d.Rq.olympicHeadlineCondensed, ", ").concat(d.Rq.olympicSans)
                    },
                    olympicHeadlineBarlowCondensed: {
                        fontFamily: "".concat(d.Rq.olympicHeadlineBarlowCondensed, ", ").concat(d.Rq.olympicSans)
                    },
                    olympicSans: {
                        fontFamily: "".concat(d.Rq.olympicSans, ", ").concat(d.Rq.olympicSans)
                    },
                    olympicSerif: {
                        fontFamily: "".concat(d.Rq.olympicSerif, ", ").concat(d.Rq.olympicSans)
                    },
                    notoNaskh: {
                        fontFamily: "".concat(d.Rq.notoNaskh, ", ").concat(d.Rq.olympicSans)
                    },
                    notoSans: {
                        fontFamily: "".concat(d.Rq.notoSans, ", ").concat(d.Rq.olympicSans)
                    },
                    notoSansDevanagari: {
                        fontFamily: "".concat(d.Rq.notoSansDevanagari, ", ").concat(d.Rq.olympicSans)
                    },
                    notoSansJp: {
                        fontFamily: "".concat(d.Rq.notoSansJp, ", ").concat(d.Rq.olympicSans)
                    },
                    notoSansKr: {
                        fontFamily: "".concat(d.Rq.notoSansKr, ", ").concat(d.Rq.olympicSans)
                    },
                    notoSansSc: {
                        fontFamily: "".concat(d.Rq.notoSansSc, ", ").concat(d.Rq.olympicSans)
                    },
                    notoSansAr: {
                        fontFamily: "".concat(d.Rq.notoSansAr, ", ").concat(d.Rq.olympicSans)
                    },
                    notoSerif: {
                        fontFamily: "".concat(d.Rq.notoSerif, ", ").concat(d.Rq.olympicSans)
                    },
                    notoSerifJp: {
                        fontFamily: "".concat(d.Rq.notoSerifJp, ", ").concat(d.Rq.olympicSans)
                    },
                    notoSerifKr: {
                        fontFamily: "".concat(d.Rq.notoSerifKr, ", ").concat(d.Rq.olympicSans)
                    },
                    notoSerifSc: {
                        fontFamily: "".concat(d.Rq.notoSerifSc, ", ").concat(d.Rq.olympicSans)
                    },
                    bebasNeue: {
                        fontFamily: "".concat(d.Rq.bebasNeue, ", ").concat(d.Rq.olympicSans)
                    },
                    changa: {
                        fontFamily: "".concat(d.Rq.changa, ", ").concat(d.Rq.olympicSans)
                    },
                    karma: {
                        fontFamily: "".concat(d.Rq.karma, ", ").concat(d.Rq.olympicSans)
                    },
                    paris2024: {
                        fontFamily: "".concat(d.Rq.paris2024, ", ").concat(d.Rq.olympicSans)
                    }
                },
                s = e => (0, r.iv)(c[e]),
                u = e => c[e]
        },
        69090: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return l
                },
                i: function() {
                    return i
                }
            });
            let i = e => {
                    let t = new URLSearchParams(window.location.search);
                    t.delete(e);
                    let n = "".concat(window.location.pathname).concat(t.size ? "?" + t.toString() : "");
                    window.history.replaceState({ ...window.history.state,
                        as: n,
                        url: n
                    }, "", n)
                },
                l = e => e.replace(/(\/\w+)\1/, "$1")
        }
    }
]);
//# sourceMappingURL=77-7f93181b5dfcd803.js.map