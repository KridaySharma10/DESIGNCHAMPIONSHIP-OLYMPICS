"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [21], {
        95444: function(e, t, l) {
            l.d(t, {
                _: function() {
                    return n
                }
            });
            var i = l(67294);
            let n = () => {
                let [e, t] = (0, i.useState)("advOnly"), l = (0, i.useCallback)(() => {
                    var e, l;
                    let i = null === (e = document.querySelector("header")) || void 0 === e ? void 0 : e.classList.contains("-sticky"),
                        n = null === (l = document.getElementById("header-adv-banner")) || void 0 === l ? void 0 : l.classList.contains("-sticky");
                    if (i && n) {
                        t("full");
                        return
                    }
                    if (i) {
                        t("headerOnly");
                        return
                    }
                    if (n) {
                        t("advOnly");
                        return
                    }
                    t("none")
                }, []);
                return (0, i.useEffect)(() => {
                    let e = document.querySelector("header");
                    if (l(), !e) return () => null;
                    let t = new MutationObserver(l);
                    return t.observe(e, {
                        attributes: !0,
                        attributeFilter: ["class"]
                    }), () => t.disconnect()
                }, [l]), e
            }
        },
        9021: function(e, t, l) {
            l.d(t, {
                JW: function() {
                    return sq
                },
                eH: function() {
                    return sy
                },
                Uu: function() {
                    return ut
                },
                w5: function() {
                    return c9
                },
                _G: function() {
                    return at.constants
                },
                Xz: function() {
                    return uy
                }
            });
            var i, n, o, a, d, r, s, c, u, v, p, h, m, g, y, f, x, b = l(35944),
                w = l(67294),
                _ = l(52227),
                I = l(50308),
                C = l.n(I),
                S = l(32010),
                T = l(96486),
                D = l.n(T),
                Z = {
                    primary100: "#f4f4f6",
                    primary300: "#d3d3dd",
                    primary500: "#4d5175",
                    primary700: "#212553",
                    primary900: "#1a1e42",
                    secondary100: "#feeeee",
                    secondary300: "#f9868a",
                    secondary500: "#f75258",
                    secondary700: "#d2464b",
                    secondary900: "#a13539",
                    tertiary100: "#eefafb",
                    tertiary300: "#a9e7ee",
                    tertiary500: "#53cedc",
                    tertiary700: "#47afbb",
                    tertiary900: "#3e9ba5",
                    warning100: "#fff8e9",
                    warning300: "#feeabe",
                    warning500: "#fcba26",
                    warning700: "#d69e20",
                    success100: "#eefaee",
                    success300: "#ccf0cb",
                    success500: "#54cc52",
                    success700: "#43a342",
                    error100: "#feefec",
                    error300: "#fccfc5",
                    error500: "#f55e3f",
                    error700: "#c44b32",
                    info100: "#f6f8ff",
                    info300: "#cbd4fd",
                    info500: "#5371f7",
                    info700: "#3a4fad",
                    gray200: "#f8f8f8",
                    gray300: "#eaebec",
                    gray400: "#d3d7d9",
                    gray500: "#b8bec2",
                    gray600: "#929aa0",
                    gray700: "#5f676d",
                    gray800: "#303336",
                    gray900: "#0f1011",
                    white: "#ffffff",
                    black: "#000000",
                    gold: "#9F8F5E",
                    silver: "#969696",
                    bronze: "#DCB386"
                },
                E = {
                    100: "0px 1px 4px rgba(0, 0, 0, 0.1);",
                    300: "0px 2px 8px rgba(0, 0, 0, 0.1);",
                    500: "0px 4px 16px rgba(0, 0, 0, 0.1);",
                    700: "0px 4px 24px rgba(0, 0, 0, 0.1);",
                    900: "0px 4px 40px rgba(0, 0, 0, 0.1);"
                },
                k = {
                    title1: {
                        fontSize: "4.5rem",
                        fontWeight: 400,
                        lineHeight: "5.25rem"
                    },
                    title2: {
                        fontSize: "2.5rem",
                        fontWeight: 400,
                        lineHeight: "3rem"
                    },
                    title3: {
                        fontSize: "2rem",
                        fontWeight: 400,
                        lineHeight: "2.5rem"
                    },
                    title4: {
                        fontSize: "1.5rem",
                        fontWeight: 400,
                        lineHeight: "1.88rem"
                    },
                    title5: {
                        fontSize: "1.25rem",
                        fontWeight: 400,
                        lineHeight: "1.5rem"
                    },
                    title6: {
                        fontSize: "1.13rem",
                        fontWeight: 400,
                        lineHeight: "1.5rem"
                    },
                    title7: {
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: "1.31rem"
                    },
                    title8: {
                        fontSize: "0.88rem",
                        fontWeight: 400,
                        lineHeight: "1.25rem"
                    },
                    body1: {
                        fontSize: "1.25rem",
                        fontWeight: 400,
                        lineHeight: "1.88rem"
                    },
                    body2: {
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: "1.5rem"
                    },
                    body3: {
                        fontSize: "0.88rem",
                        fontWeight: 400,
                        lineHeight: "1.31rem"
                    },
                    body4: {
                        fontSize: "0.81rem",
                        fontWeight: 400,
                        lineHeight: "1.19rem"
                    },
                    body5: {
                        fontSize: "0.81rem",
                        fontWeight: 600,
                        lineHeight: "1.19rem"
                    },
                    ui1: {
                        fontSize: "1.5rem",
                        fontWeight: 400,
                        lineHeight: "1.88rem"
                    },
                    ui2: {
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: "1.5rem"
                    },
                    ui3: {
                        fontSize: "1rem",
                        fontWeight: 500,
                        lineHeight: "1.25rem"
                    },
                    ui4: {
                        fontSize: "0.88rem",
                        fontWeight: 400,
                        lineHeight: "1.5rem"
                    },
                    ui5: {
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        lineHeight: "1.5rem"
                    },
                    ui6: {
                        fontSize: "0.88rem",
                        fontWeight: 400,
                        lineHeight: "1.25rem"
                    },
                    ui7: {
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        lineHeight: "1.25rem"
                    },
                    ui8: {
                        fontSize: "0.88rem",
                        fontWeight: 400,
                        lineHeight: "1.13rem"
                    },
                    ui9: {
                        fontSize: "0.75rem",
                        fontWeight: 400,
                        lineHeight: "1rem"
                    },
                    ui10: {
                        fontSize: "0.75rem",
                        fontWeight: 400,
                        lineHeight: "0.88rem"
                    },
                    ui11: {
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        lineHeight: "0.88rem"
                    },
                    ui12: {
                        fontSize: "0.63rem",
                        fontWeight: 400,
                        lineHeight: "0.88rem"
                    },
                    code: {
                        fontFamily: "Space Mono",
                        fontWeight: 400,
                        fontSize: "0.75rem",
                        lineHeight: "1rem"
                    }
                };
            let N = {
                    global: {
                        hover: {},
                        disabled: void 0,
                        align: "left",
                        classic: !0,
                        borderColor: Z.gray400
                    },
                    container: { ...k.ui4
                    },
                    header: { ...k.ui2
                    },
                    body: {},
                    row: [],
                    footer: {},
                    cellStyles: [],
                    columnsConfig: [],
                    rowContainer: []
                },
                R = {
                    global: {
                        container: {},
                        checked: {},
                        disabled: {
                            opacity: "0.5"
                        }
                    },
                    switch: {
                        container: {
                            backgroundColor: Z.gray600,
                            borderRadius: "20px",
                            width: "72px",
                            padding: "3px"
                        },
                        checked: {}
                    },
                    slider: {
                        container: {
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: Z.white,
                            boxShadow: E[100]
                        },
                        checked: {}
                    },
                    leftLabel: {
                        container: {
                            padding: "8px"
                        },
                        checked: {}
                    },
                    rightLabel: {
                        container: {
                            padding: "8px"
                        },
                        checked: {}
                    }
                },
                M = {
                    breakpoints: {
                        xs: 0,
                        sm: 768,
                        md: 960,
                        lg: 1280,
                        xl: 1920
                    },
                    colors: Z,
                    elevation: E,
                    global: {
                        body: {
                            fontFamily: 'Rubik,Roboto,"Helvetica Neue",Arial,sans-serif',
                            fontSize: "16px"
                        }
                    },
                    spacing: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "px",
                            l = {
                                0: "",
                                .125: "",
                                .25: "",
                                .5: "",
                                .75: "",
                                1: "",
                                1.25: "",
                                1.5: "",
                                1.75: "",
                                2: "",
                                2.5: "",
                                3: "",
                                3.5: "",
                                4: "",
                                5: ""
                            };
                        return [0, .125, .25, .5, .75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3, 3.5, 4, 5].forEach(e => {
                            if (!e) return;
                            let i = "".concat(16 * e).concat(t);
                            l[e] = i
                        }), l
                    }(16),
                    typography: k,
                    customization: {
                        table: N,
                        calendar: {
                            container: {},
                            date: {},
                            day: {},
                            month: {},
                            global: {
                                height: "",
                                margin: "",
                                width: ""
                            }
                        },
                        list: {
                            container: {},
                            item: {
                                global: {}
                            }
                        },
                        select: {
                            global: {
                                height: "",
                                margin: "",
                                width: ""
                            },
                            header: {
                                global: {
                                    padding: "",
                                    margin: "",
                                    border: "",
                                    backgroundColor: "",
                                    open: {}
                                }
                            },
                            body: {
                                global: {
                                    padding: "",
                                    margin: "",
                                    border: "",
                                    backgroundColor: "",
                                    width: "",
                                    maxHeight: ""
                                },
                                listSelect: {
                                    items: {
                                        global: {
                                            padding: "",
                                            margin: "",
                                            border: "",
                                            disabled: {},
                                            hover: {},
                                            selected: {},
                                            hoverSelected: {}
                                        },
                                        input: {
                                            disabled: {},
                                            hover: {},
                                            selected: {},
                                            hoverSelected: {}
                                        },
                                        label: {
                                            disabled: {},
                                            hover: {},
                                            selected: {},
                                            hoverSelected: {}
                                        }
                                    }
                                }
                            },
                            disabled: {}
                        },
                        iconButton: {
                            container: {}
                        },
                        toggle: R,
                        spinner: {
                            color: "currentColor",
                            spinnerWidth: "4px",
                            size: "24px"
                        }
                    }
                };
            var F = D().cloneDeep(M),
                O = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rem";
                    if ("number" == typeof e) return "".concat(e).concat(t);
                    let {
                        top: l = 0,
                        left: i = 0,
                        bottom: n = 0,
                        right: o = 0
                    } = e;
                    return "".concat(l).concat(t, " ").concat(o).concat(t, " ").concat(n).concat(t, " ").concat(i).concat(t)
                },
                B = {
                    shouldForwardProp: e => !e.startsWith("$") && "tx" !== e && "as" !== e && "variant" !== e && "customtheme" !== e
                };
            let L = (0, _.Z)("button", B, {
                    target: "eejbn4e0"
                })("padding:12px 24px;border-radius:4px;border:none;cursor:pointer;font-size:16px;font-weight:bold;transition:background 0.2s ease-in-out,color 0.2s ease-in-out;", e => {
                    let {
                        variant: t
                    } = e, l = {
                        contained: "\n        background-color: ".concat(F.colors.primary500, ";\n        color: ").concat(F.colors.white, ";\n\n        &:disabled {\n          opacity: 0.5;\n          cursor: not-allowed;\n\n          &:hover {\n            background-color: ").concat(F.colors.primary500, ";\n            color: ").concat(F.colors.white, ";\n          }\n        }\n\n        &:hover {\n          background-color: ").concat(F.colors.primary700, ";\n        }\n      "),
                        outlined: "\n        background-color: transparent;\n        color: ".concat(F.colors.primary500, ";\n        border: 1px solid ").concat(F.colors.primary500, ";\n\n        &:disabled {\n          opacity: 0.5;\n          cursor: not-allowed;\n\n          &:hover {\n            background-color: transparent;\n            color: ").concat(F.colors.primary500, ";\n            border: 1px solid ").concat(F.colors.primary500, ";\n          }\n        }\n\n        &:hover {\n          background-color: ").concat(F.colors.primary500, ";\n          color: ").concat(F.colors.white, ";\n        }\n      "),
                        text: "\n      background-color: transparent;\n      color: ".concat(F.colors.primary500, ";\n      padding: 8px 24px;\n\n      &:disabled {\n          opacity: 0.5;\n          cursor: not-allowed;\n\n          &:hover {\n            background-color: transparent;\n          }\n        }\n\n      &:hover {\n        background-color: ").concat(F.colors.gray200, ";\n      }\n      ")
                    };
                    return l[t] || l.contained
                }, ";"),
                z = e => {
                    let {
                        variant: t = "contained",
                        children: l,
                        onClick: i,
                        ...n
                    } = e;
                    return (0, b.tZ)(L, {
                        variant: t,
                        onClick: i,
                        type: "button",
                        ...n,
                        children: l
                    })
                };
            z.displayName = "Button";
            var j = e => {
                    let t = D().cloneDeep(F);
                    return D().merge(t, e)
                },
                A = l(76330),
                W = l(70917);
            let H = e => {
                let {
                    theme: t = F,
                    children: l
                } = e;
                return (0, b.BX)(A.a, {
                    theme: t,
                    children: [(0, b.tZ)(W.xB, {
                        styles: [(0, W.iv)(t.global, ";")]
                    }), l]
                })
            };
            var G = e => {
                let t = t => {
                    let {
                        customTheme: l,
                        ...i
                    } = t, n = (0, w.useMemo)(() => l ? j({
                        customization: { ...l
                        }
                    }) : null, [l]);
                    return n ? (0, b.tZ)(H, {
                        theme: n,
                        children: (0, b.tZ)(e, { ...i
                        })
                    }) : (0, b.tZ)(e, { ...i
                    })
                };
                return t.displayName = "WithCustomTheme(".concat(e.displayName || e.name || "Component", ")"), t
            };
            let X = e => {
                    let {
                        children: t,
                        variant: l,
                        as: i = "span",
                        hasRoundBrackets: n,
                        truncate: o,
                        bold: a,
                        superscript: d,
                        ...r
                    } = e;
                    return (0, b.tZ)(P, {
                        variant: l,
                        $lineClamp: (() => {
                            if (o) return !0 === o ? 1 : "number" == typeof o ? o : "unset"
                        })(),
                        $bold: a,
                        $superscript: d,
                        as: i,
                        ...r,
                        children: n ? (0, b.BX)(b.HY, {
                            children: ["(", t, ")"]
                        }) : t
                    })
                },
                P = (0, _.Z)("span", B, {
                    target: "e14trgsy0"
                })(e => {
                    let {
                        variant: t
                    } = e;
                    if (t) {
                        var l;
                        return { ...null == F ? void 0 : null === (l = F.typography) || void 0 === l ? void 0 : l[t]
                        }
                    }
                }, " ", e => e.$lineClamp && (0, W.iv)("display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:", e.$lineClamp, ";overflow:hidden;"), "      \n  ", e => e.$bold && (0, W.iv)("font-weight:bold;"), " ", e => e.$superscript && (0, W.iv)("vertical-align:super;font-size:x-small;"));
            X.displayName = "Text";
            let $ = G(X),
                U = (0, _.Z)("div", {
                    target: "eiwh8h00"
                })("display:inline-flex;align-items:center;justify-content:center;", e => {
                    var t, l, i, n, o, a;
                    let {
                        theme: d
                    } = e, r = null === (l = d.customization.calendar) || void 0 === l ? void 0 : null === (t = l.global) || void 0 === t ? void 0 : t.width, s = null === (n = d.customization.calendar) || void 0 === n ? void 0 : null === (i = n.global) || void 0 === i ? void 0 : i.height;
                    return {
                        margin: null === (a = d.customization.calendar) || void 0 === a ? void 0 : null === (o = a.global) || void 0 === o ? void 0 : o.margin,
                        width: r || "40px",
                        height: s
                    }
                }),
                V = e => {
                    let {
                        startDay: t,
                        days: l
                    } = e, i = (0, A.u)(), n = [...l.slice(t, l.length), ...l.slice(0, t)], o = 0, a = e => (o += 1, "".concat(e).concat(o));
                    return (0, b.tZ)(q, {
                        className: "calendar-grid__header",
                        children: n.map(e => {
                            var t, l;
                            return (0, b.tZ)(U, {
                                className: "calendar-grid__header-item",
                                children: (0, b.tZ)($, {
                                    variant: null === (l = i.customization.calendar) || void 0 === l ? void 0 : null === (t = l.text) || void 0 === t ? void 0 : t.day,
                                    children: e
                                })
                            }, a(e))
                        })
                    })
                },
                q = (0, _.Z)("div", {
                    target: "el1lcmm0"
                })(e => {
                    var t;
                    let {
                        theme: l
                    } = e, i = null === (t = l.customization.calendar) || void 0 === t ? void 0 : t.header;
                    if (i) return { ...i
                    }
                });
            var Y = l(30120);
            let J = (0, _.Z)("div", B, {
                    target: "e1oix8v90"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                K = (0, _.Z)($, {
                    target: "e1oix8v91"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                Q = (0, _.Z)("a", B, {
                    target: "e1oix8v92"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                ee = (0, _.Z)("button", B, {
                    target: "e1oix8v93"
                })("background:none;border:none;cursor:pointer;font:inherit;padding:0;", e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                et = e => {
                    var t, l, i, n;
                    let {
                        column: o,
                        row: a,
                        date: d,
                        onDateClick: r,
                        ...s
                    } = e, c = (0, A.u)(), u = (0, w.useCallback)(() => {
                        d && r(d)
                    }, [d, r]), v = {
                        $column: o,
                        $row: a,
                        $date: d,
                        onClick: u,
                        "data-testid": "CalendarDay",
                        ...s
                    }, p = (0, b.tZ)(b.HY, {
                        children: !0 === d.hidden ? "" : (0, b.BX)(el, {
                            "data-testid": "day-".concat(d.date),
                            children: [(0, b.tZ)($, {
                                variant: null === (l = c.customization.calendar) || void 0 === l ? void 0 : null === (t = l.text) || void 0 === t ? void 0 : t.date,
                                children: Y.ou.fromISO(d.date, {
                                    setZone: !0
                                }).day
                            }), (0, b.tZ)(ei, {
                                children: (0, b.tZ)($, {
                                    variant: null === (n = c.customization.calendar) || void 0 === n ? void 0 : null === (i = n.text) || void 0 === i ? void 0 : i.month,
                                    children: d.month
                                })
                            })]
                        })
                    });
                    return d.href ? (0, b.tZ)(en, {
                        as: "a",
                        href: d.href,
                        className: "calendar-grid__body-item ".concat(d.selected ? "calendar-grid__body-item--active" : "", " ").concat(d.disabled ? "calendar-grid__body-item--disabled" : ""),
                        ...v,
                        children: p
                    }) : (0, b.tZ)(en, {
                        className: "calendar-grid__body-item ".concat(d.selected ? "calendar-grid__body-item--active" : "", " ").concat(d.disabled ? "calendar-grid__body-item--disabled" : ""),
                        ...v,
                        children: p
                    })
                },
                el = (0, _.Z)(ee, {
                    target: "e189jkml0"
                })("display:flex;flex-direction:column;align-items:center;"),
                ei = (0, _.Z)("div", {
                    target: "e189jkml1"
                })(e => {
                    var t;
                    let {
                        theme: l
                    } = e, i = null === (t = l.customization.calendar) || void 0 === t ? void 0 : t.month;
                    if (i) return { ...i
                    }
                }),
                en = (0, _.Z)(U, {
                    target: "e189jkml2"
                })(e => e.$column && (0, W.iv)("grid-column:", e.$column, ";"), ";", e => e.$row && (0, W.iv)("grid-row:", e.$row, ";"), ";", e => e.$date && !e.$date.disabled && !0 !== e.$date.hidden && (0, W.iv)("cursor:pointer;"), ";", e => {
                    var t;
                    let {
                        theme: l
                    } = e;
                    if (null === (t = l.customization.calendar) || void 0 === t ? void 0 : t.date) {
                        let {
                            borderColor: e,
                            borderRadius: t,
                            borderThickness: i,
                            disabled: n,
                            hover: o,
                            selected: a,
                            ...d
                        } = l.customization.calendar.date;
                        if (d) return { ...d
                        }
                    }
                }, " ", e => {
                    var t, l, i, n, o, a;
                    let {
                        theme: d,
                        $date: r
                    } = e, s = null === (l = d.customization.calendar) || void 0 === l ? void 0 : null === (t = l.date) || void 0 === t ? void 0 : t.borderColor, c = null === (n = d.customization.calendar) || void 0 === n ? void 0 : null === (i = n.date) || void 0 === i ? void 0 : i.borderThickness, u = null === (a = d.customization.calendar) || void 0 === a ? void 0 : null === (o = a.date) || void 0 === o ? void 0 : o.borderRadius;
                    if (!0 !== r.hidden && s && c) return {
                        border: "".concat(c, " solid ").concat(s),
                        borderRadius: u
                    }
                }, " ", e => {
                    var t, l;
                    let {
                        theme: i,
                        $date: n
                    } = e, o = null === (l = i.customization.calendar) || void 0 === l ? void 0 : null === (t = l.date) || void 0 === t ? void 0 : t.selected;
                    if (o && n.selected) return { ...o
                    }
                }, " ", e => {
                    var t, l;
                    let {
                        theme: i,
                        $date: n
                    } = e, o = null === (l = i.customization.calendar) || void 0 === l ? void 0 : null === (t = l.date) || void 0 === t ? void 0 : t.disabled;
                    if (o && n.disabled) return { ...o
                    }
                }, "  &:hover{", e => {
                    var t, l;
                    let {
                        theme: i,
                        $date: n
                    } = e, o = null === (l = i.customization.calendar) || void 0 === l ? void 0 : null === (t = l.date) || void 0 === t ? void 0 : t.hover;
                    if (o && !0 !== n.disabled && !0 !== n.hidden) return { ...o
                    }
                }, "}"),
                eo = e => {
                    let {
                        startDay: t,
                        dates: l,
                        onDateClick: i,
                        ...n
                    } = e, o = (0, w.useMemo)(() => {
                        let e = [];
                        if (l.length > 0) {
                            let i = Y.ou.fromISO(l[0].date, {
                                    setZone: !0
                                }),
                                n = Y.ou.fromISO(l[l.length - 1].date, {
                                    setZone: !0
                                }).diff(i, "days").days + 1,
                                o = i.weekday - (t + 1),
                                a = o < 0 ? o + 7 : o,
                                d = n + a,
                                r = i.minus({
                                    days: a
                                });
                            return d > 0 ? ([...Array(d).keys()].forEach(t => {
                                let i = l.find(e => Y.ou.fromISO(e.date, {
                                    setZone: !0
                                }).hasSame(r, "day"));
                                e[t] = i || {
                                    startOfDayMs: r.startOf("day").toMillis(),
                                    date: r.toISO() || r.toFormat("yyyy-LL-dd"),
                                    hidden: !0
                                }, r = r.plus({
                                    days: 1
                                })
                            }), e) : void 0
                        }
                    }, [l, t]);
                    return (0, b.tZ)(ea, {
                        className: "calendar-grid__body",
                        children: null == o ? void 0 : o.map((e, t) => (0, b.tZ)(et, {
                            column: t % 7 + 1,
                            row: Math.floor(t / 7) + 1,
                            date: e,
                            onDateClick: i,
                            ...n
                        }, e.date))
                    })
                },
                ea = (0, _.Z)("div", {
                    target: "e1lra7k70"
                })("display:grid;width:fit-content;", e => {
                    var t;
                    let {
                        theme: l
                    } = e, i = null === (t = l.customization.calendar) || void 0 === t ? void 0 : t.body;
                    if (i) return { ...i
                    }
                }),
                ed = e => {
                    let {
                        days: t,
                        dates: l,
                        startDay: i,
                        onDateClick: n,
                        ...o
                    } = e;
                    return (0, b.BX)(er, {
                        "test-id": "CalendarGridComponent",
                        ...o,
                        children: [(0, b.tZ)(V, {
                            startDay: i,
                            days: t
                        }), (0, b.tZ)(eo, {
                            startDay: i,
                            dates: l,
                            onDateClick: n
                        })]
                    })
                },
                er = (0, _.Z)("div", {
                    target: "e1dmvxru0"
                })(e => {
                    var t;
                    let {
                        theme: l
                    } = e, i = null === (t = l.customization.calendar) || void 0 === t ? void 0 : t.container;
                    if (!i) return;
                    let {
                        padding: n,
                        ...o
                    } = i;
                    return {
                        padding: n || "1rem",
                        ...o
                    }
                });
            ed.displayName = "CalendarGrid";
            let es = G(ed),
                ec = e => {
                    var t;
                    let {
                        month: l,
                        onDateClick: i,
                        ...n
                    } = e, o = (0, w.useRef)(null), [a, d] = (0, w.useState)();
                    (0, w.useEffect)(() => {
                        if (o.current) {
                            let {
                                width: e
                            } = o.current.getBoundingClientRect();
                            d(e)
                        }
                    }, []);
                    let r = (t = l.days.length, a ? t * a : 0);
                    return (0, b.tZ)(eu, {
                        children: (0, b.BX)(ev, {
                            children: [l.name && (0, b.tZ)(ep, {
                                "data-testid": "MonthName",
                                $maxWidth: r,
                                children: l.name
                            }), (0, b.tZ)("span", {
                                children: l.days.map((e, t) => (0, b.tZ)("span", {
                                    ref: 0 === t ? o : null,
                                    children: (0, b.tZ)(et, {
                                        date: e,
                                        onDateClick: i,
                                        ...n
                                    })
                                }, e.date))
                            })]
                        })
                    })
                },
                eu = (0, _.Z)("div", {
                    target: "ekjbbdl0"
                })("display:inline-flex;"),
                ev = (0, _.Z)("div", {
                    target: "ekjbbdl1"
                })("display:flex;flex-direction:column;"),
                ep = (0, _.Z)("div", B, {
                    target: "ekjbbdl2"
                })("overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:", e => "".concat(e.$maxWidth, "px"), ";"),
                eh = (0, _.Z)("div", {
                    target: "equyubv0"
                })(e => {
                    var t;
                    let {
                        theme: l
                    } = e, i = null === (t = l.customization.calendar) || void 0 === t ? void 0 : t.container;
                    if (!i) return;
                    let {
                        padding: n,
                        ...o
                    } = i;
                    return {
                        padding: n || "1rem",
                        ...o
                    }
                }),
                em = e => {
                    let {
                        months: t,
                        dates: l,
                        onDateClick: i,
                        ...n
                    } = e, o = (0, w.useMemo)(() => {
                        if (l && l.length > 0) {
                            let e = Y.ou.fromISO(l[0].date),
                                i = Y.ou.fromISO(l[l.length - 1].date).diff(e, "days").days + 1,
                                n = (null == t ? void 0 : t.length) === 12,
                                o = e,
                                a = [...Array(Math.floor(i))].map(() => {
                                    let e = l.find(e => Y.ou.fromISO(e.date).hasSame(o, "day")) || {
                                        date: o.toISODate(),
                                        hidden: !0
                                    };
                                    return o = o.plus({
                                        days: 1
                                    }), e
                                }),
                                d = [],
                                r = e.month - 1,
                                s = [];
                            return a.forEach(e => {
                                let l = Y.ou.fromISO(e.date);
                                l.month - 1 === r ? s.push(e) : (d.push({
                                    name: n ? t[r] : void 0,
                                    days: s
                                }), r = l.month - 1, s = [e])
                            }), d.push({
                                name: n ? t[r] : void 0,
                                days: s
                            }), d
                        }
                    }, [l, t]);
                    return l ? (0, b.tZ)(eh, {
                        "test-id": "CalendarListComponent",
                        ...n,
                        children: null == o ? void 0 : o.map((e, t) => (0, b.tZ)(ec, {
                            month: e,
                            onDateClick: i
                        }, e.name ? e.name : t))
                    }) : null
                };
            em.displayName = "CalendarList", G(em);
            var eg = l(51526),
                ey = l(11610);
            let ef = e => {
                let {
                    open: t,
                    children: l,
                    ...i
                } = e;
                return (0, b.tZ)(b.HY, {
                    children: (0, b.tZ)(eg.M, {
                        initial: !1,
                        children: t && l && (0, b.tZ)(ey.E.div, {
                            initial: {
                                height: 0
                            },
                            animate: {
                                height: "auto"
                            },
                            exit: {
                                height: 0
                            },
                            transition: {
                                ease: "easeOut"
                            },
                            ...i,
                            children: l
                        })
                    })
                })
            };
            ef.displayName = "Collapsible", (0, _.Z)("div", {
                target: "e1h34azq0"
            })("margin-left:auto;margin-right:auto;", e => {
                let {
                    maxWidth: t,
                    theme: l
                } = e;
                return t && Object.entries(t).reduce((e, t) => {
                    let [i, n] = t, o = "number" == typeof n ? "".concat(n, "px") : n, a = l.breakpoints[i];
                    return a ? "\n          ".concat(e, "\n          @media (min-width: ").concat(a, "px) {\n            max-width: ").concat(o, ";\n          }\n        ") : "\n          ".concat(e, "\n          @media (min-width: ").concat(i, ") {\n            max-width: ").concat(o, ";\n          }\n        ")
                }, "")
            }, "  padding:", e => {
                let {
                    padding: t
                } = e;
                return "".concat(O(t))
            }, ";");
            var ex = l(79180),
                eb = e => {
                    let {
                        fonts: t
                    } = e, l = t.map(e => {
                        let t = e.family.replace(/\s/g, "+"),
                            l = "";
                        if (e.weights) {
                            let t = e.weights.join(";");
                            l = ":wght@".concat(t)
                        }
                        return "family=".concat(t).concat(l)
                    }), i = "https://fonts.googleapis.com/css2?".concat(l.join("&"), "&display=swap");
                    return (0, b.BX)(ex.ql, {
                        children: [(0, b.tZ)("link", {
                            rel: "preconnect",
                            href: "https://fonts.googleapis.com"
                        }), (0, b.tZ)("link", {
                            rel: "preconnect",
                            href: "https://fonts.gstatic.com",
                            crossOrigin: ""
                        }), (0, b.tZ)("link", {
                            rel: "stylesheet",
                            href: i
                        })]
                    })
                },
                ew = e => {
                    let {
                        children: t,
                        fonts: l
                    } = e;
                    return (0, b.BX)(ex.B6, {
                        children: [(0, b.tZ)(eb, {
                            fonts: l
                        }), t]
                    })
                };
            let e_ = (0, _.Z)("div", {
                    target: "en91ok10"
                })("box-sizing:border-box;flex-basis:auto;flex-grow:0;min-width:0px;padding:calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2);width:calc(100% * 1 / var(--Grid-columns));"),
                eI = (e, t) => "number" != typeof e && e ? Object.keys(e).find(e => {
                    var l;
                    let i = null !== (l = t.breakpoints[e]) && void 0 !== l ? l : Number(e);
                    return i && window.matchMedia("(min-width: ".concat(i, "px)")).matches
                }) : "",
                eC = e => "number" == typeof e ? e : Math.min(...Object.values(e)),
                eS = (e, t, l, i) => Object.entries(e).filter(n => {
                    let [o] = n;
                    return "object" == typeof e && Number(o) !== (t ? l.breakpoints[t] : i)
                }).sort((e, t) => {
                    var i, n;
                    return (null !== (i = l.breakpoints[e[0]]) && void 0 !== i ? i : Number(e[0])) - (null !== (n = l.breakpoints[t[0]]) && void 0 !== n ? n : Number(t[0]))
                }),
                eT = (e, t) => e.map(e => {
                    var l;
                    let [i, n] = e;
                    return "\n    @media (min-width: ".concat(null !== (l = t.breakpoints[i]) && void 0 !== l ? l : i, "px) {\n      --Grid-columns: ").concat(n, ";\n    }\n  ")
                }).join(""),
                eD = (e, t) => e && t.spacing[e] ? t.spacing[e] : "0px",
                eZ = (0, _.Z)("div", {
                    target: "e7qv2rv0"
                })("flex-flow:row wrap;min-width:0px;box-sizing:border-box;display:flex;margin:calc(var(--Grid-rowSpacing) / -2) calc(var(--Grid-columnSpacing) / -2);", e => {
                    let {
                        columns: t,
                        columnSpacing: l,
                        rowSpacing: i
                    } = e, n = eI(t, F), o = eC(t), a = eT(eS(t, n, F, o), F), d = eD(l, F), r = eD(i, F);
                    return "\n      --Grid-columns: ".concat(n ? t[n] : o, ";\n      --Grid-columnSpacing: ").concat(d, ";\n      --Grid-rowSpacing: ").concat(r, ";\n      ").concat(a, "\n    ")
                });
            var eE = e => {
                    let {
                        children: t,
                        columns: l,
                        columnSpacing: i = 0,
                        rowSpacing: n = 0,
                        ...o
                    } = e;
                    return (0, b.tZ)(eZ, {
                        columns: l,
                        columnSpacing: i,
                        rowSpacing: n,
                        ...o,
                        children: t
                    })
                },
                ek = l(37340);
            let eN = (0, w.createContext)({
                basePaths: {
                    default: ""
                },
                formats: {
                    default: "svg"
                },
                fileNameTemplates: {
                    default: "{name}"
                }
            });
            var eR = l(48403),
                eM = l.n(eR);
            let eF = (e, t) => {
                    let l = {
                        "{{name}}": e => e.toLowerCase(),
                        "{{NAME}}": e => e.toUpperCase(),
                        "{{Name}}": e => eM()(e),
                        "{name}": e => e
                    };
                    return e.replace(/\{\{name\}\}|\{\{NAME\}\}|\{\{Name\}\}|\{name\}/g, e => l[e](t))
                },
                eO = new Map,
                eB = e => {
                    let {
                        basePath: t,
                        iconName: l,
                        format: i,
                        fileNameTemplate: n = "{name}"
                    } = e, o = "".concat(t, ":").concat(l, ":").concat(i, ":").concat(n);
                    if (eO.has(o)) {
                        let e = eO.get(o);
                        if (null != e) return e
                    }
                    let a = eF(n, l),
                        d = "".concat(t, "/").concat(a).concat("auto" !== i ? ".".concat(i) : "");
                    return eO.set(o, d), d
                },
                eL = e => {
                    var t, l, i;
                    let {
                        iconName: n,
                        iconType: o = "default"
                    } = e, a = (0, w.useContext)(eN);
                    if (!a) throw Error("useIcons must be used within an IconsProvider");
                    let {
                        basePaths: d,
                        formats: r,
                        fileNameTemplates: s
                    } = a, c = null !== (t = d[o]) && void 0 !== t ? t : d.default, u = null !== (l = r[o]) && void 0 !== l ? l : r.default, v = null !== (i = null == s ? void 0 : s[o]) && void 0 !== i ? i : null == s ? void 0 : s.default;
                    return {
                        iconFullPath: (0, w.useMemo)(() => eB({
                            basePath: c,
                            iconName: n,
                            format: u,
                            fileNameTemplate: v
                        }), [c, n, u, v]),
                        iconFormat: u
                    }
                },
                ez = (0, _.Z)("img", {
                    target: "eph8xjg0"
                })(e => e.width && "width: ".concat(e.width, "px;"), " ", e => e.height && "height: ".concat(e.height, "px;"), "  vertical-align:bottom;", e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                ej = e => {
                    let {
                        color: t,
                        name: l,
                        width: i,
                        height: n,
                        type: o,
                        tx: a,
                        loading: d = "lazy",
                        ...r
                    } = e, {
                        iconFullPath: s,
                        iconFormat: c
                    } = eL({
                        iconName: l,
                        iconType: o
                    });
                    return 0 === l.length ? null : (0, b.tZ)(ez, {
                        src: s,
                        width: null != i ? i : 24,
                        height: null != n ? n : 24,
                        tx: a,
                        role: "svg" === c ? "img" : void 0,
                        loading: d,
                        ...r
                    })
                };

            function eA() {
                let e = (0, ek._)(["\n      cursor: pointer;\n    "]);
                return eA = function() {
                    return e
                }, e
            }
            let eW = (e, t) => "string" == typeof e || "number" == typeof e ? (0, b.tZ)(eq, {
                    variant: null == t ? void 0 : t.variant,
                    children: e
                }) : (0, w.isValidElement)(e) ? e : null,
                eH = e => {
                    var t, l, i, n, o;
                    let {
                        item: a,
                        checkBox: d,
                        selectedIcon: r,
                        selectedIconAlt: s,
                        onListRowClick: c,
                        ...u
                    } = e, v = (0, w.useCallback)(() => {
                        !a.disabled && c && c(a)
                    }, [a, c]), p = (0, A.u)();
                    return (0, b.tZ)(eP, {
                        onClick: v,
                        $disabled: a.disabled,
                        $selected: a.selected,
                        "data-testid": "ListRow",
                        className: "list__row ".concat(a.selected ? "list__row--active" : "", " ").concat(a.disabled ? "list__row--disabled" : ""),
                        "aria-hidden": !0,
                        ...u,
                        children: (0, b.BX)(eX, {
                            "aria-selected": a.selected,
                            "aria-label": null === (t = a.item) || void 0 === t ? void 0 : t.toString(),
                            children: [d && (0, b.tZ)(eG, {
                                type: "checkbox",
                                checked: a.selected,
                                className: "list__input ".concat(a.selected ? "list__input--active" : "", " ").concat(a.disabled ? "list__input--disabled" : ""),
                                readOnly: !0
                            }), eW(a.item, p.customization.list), r && a.selected && (0, b.tZ)(ej, {
                                name: r,
                                alt: s,
                                title: s,
                                height: null === (i = p.customization.list.item) || void 0 === i ? void 0 : null === (l = i.selectedIcon) || void 0 === l ? void 0 : l.height,
                                width: null === (o = p.customization.list.item) || void 0 === o ? void 0 : null === (n = o.selectedIcon) || void 0 === n ? void 0 : n.width
                            })]
                        })
                    })
                },
                eG = (0, _.Z)("input", {
                    target: "e4bsrdw0"
                })(e => {
                    var t, l;
                    let {
                        theme: i
                    } = e, n = null === (l = i.customization.list) || void 0 === l ? void 0 : null === (t = l.item) || void 0 === t ? void 0 : t.checkBox;
                    if (n) return { ...n
                    }
                }),
                eX = (0, _.Z)("button", {
                    target: "e4bsrdw1"
                })("display:flex;align-items:center;justify-content:space-between;width:100%;background:transparent;cursor:pointer;border:none;"),
                eP = (0, _.Z)("div", {
                    target: "e4bsrdw2"
                })("display:flex;align-items:center;", e => !e.$disabled && (0, W.iv)(eA()), ";", e => {
                    var t, l;
                    let {
                        theme: i
                    } = e, n = null === (l = i.customization.list) || void 0 === l ? void 0 : null === (t = l.item) || void 0 === t ? void 0 : t.global;
                    if (n) return { ...n
                    }
                }, " ", e => {
                    var t, l;
                    let {
                        theme: i,
                        $disabled: n
                    } = e, o = null === (l = i.customization.list) || void 0 === l ? void 0 : null === (t = l.item) || void 0 === t ? void 0 : t.disabled;
                    if (o && n) return { ...o
                    }
                }, " ", e => {
                    var t, l;
                    let {
                        theme: i,
                        $selected: n
                    } = e, o = null === (l = i.customization.list) || void 0 === l ? void 0 : null === (t = l.item) || void 0 === t ? void 0 : t.selected;
                    if (o && n) return { ...o
                    }
                }, "  &:hover{", e => {
                    var t, l;
                    let {
                        theme: i,
                        $disabled: n
                    } = e, o = null === (l = i.customization.list) || void 0 === l ? void 0 : null === (t = l.item) || void 0 === t ? void 0 : t.hover;
                    if (o && !n) return { ...o
                    }
                }, "}"),
                e$ = (0, _.Z)("div", {
                    target: "e1e3nr5o0"
                })(e => {
                    var t;
                    let {
                        theme: l
                    } = e, i = null === (t = l.customization.list) || void 0 === t ? void 0 : t.container;
                    if (i) return { ...i
                    }
                }),
                eU = e => {
                    var t, l, i, n, o, a;
                    let {
                        items: d,
                        noDataMessage: r,
                        checkBox: s,
                        selectedIcon: c,
                        selectedIconAlt: u,
                        onListRowClick: v,
                        ...p
                    } = e, h = (0, A.u)(), m = (null == d ? void 0 : d.length) === 0 && r;
                    return (0, b.BX)(e$, {
                        "test-id": "ListComponent",
                        ...p,
                        children: [m && (0, b.tZ)(eV, {
                            tx: null === (i = h.customization) || void 0 === i ? void 0 : null === (l = i.list) || void 0 === l ? void 0 : null === (t = l.noDataMessage) || void 0 === t ? void 0 : t.global,
                            children: (0, b.tZ)(eq, {
                                variant: null === (a = h.customization) || void 0 === a ? void 0 : null === (o = a.list) || void 0 === o ? void 0 : null === (n = o.noDataMessage) || void 0 === n ? void 0 : n.variant,
                                children: r
                            })
                        }), null == d ? void 0 : d.map(e => (0, b.tZ)(eH, {
                            item: e,
                            checkBox: s,
                            selectedIcon: c,
                            selectedIconAlt: u,
                            onListRowClick: v
                        }, e.id))]
                    })
                },
                eV = (0, _.Z)("div", {
                    target: "e1e3nr5o1"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                eq = (0, _.Z)($, {
                    target: "e1e3nr5o2"
                })("overflow:hidden;text-overflow:ellipsis;", e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                });
            eU.displayName = "List";
            let eY = G(eU);
            var eJ = e => {
                    let t = e.find(e => {
                        let {
                            selected: t
                        } = e;
                        return t
                    });
                    return t ? [t] : []
                },
                eK = (e, t) => e.map(e => e.date === t.date ? { ...e,
                    selected: !0
                } : { ...e,
                    selected: !1
                }),
                eQ = (e, t, l) => {
                    if (l) {
                        let i = "".concat(Y.ou.fromISO(l.date, {
                            setZone: !0
                        }).toFormat(t, {
                            locale: e
                        }));
                        return [{
                            id: i,
                            item: i,
                            selected: l.selected,
                            disabled: l.disabled
                        }]
                    }
                    return []
                };
            let e0 = (0, W.iv)("clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;");
            var e1 = e => {
                let {
                    icon: t,
                    defaultIcon: l
                } = e;
                return t ? (0, b.tZ)(ej, { ...t
                }) : l
            };
            let e2 = (0, _.Z)(ee, B, {
                    target: "e1n1ouwo0"
                })("display:flex;align-items:center;", e => e.$isDisabled && (0, W.iv)("cursor:default;"), " ", e => {
                    var t, l;
                    let {
                        theme: i
                    } = e, n = null === (l = i.customization.select) || void 0 === l ? void 0 : null === (t = l.header) || void 0 === t ? void 0 : t.global;
                    if (!n) return;
                    let {
                        open: o,
                        highlighted: a,
                        ...d
                    } = n;
                    return { ...d
                    }
                }, " ", e => {
                    var t, l, i;
                    let {
                        theme: n,
                        $open: o
                    } = e, a = null === (i = n.customization.select) || void 0 === i ? void 0 : null === (l = i.header) || void 0 === l ? void 0 : null === (t = l.global) || void 0 === t ? void 0 : t.open;
                    if (o && a) return { ...a
                    }
                }, " ", e => {
                    var t;
                    let {
                        theme: l,
                        $isDisabled: i
                    } = e, n = null === (t = l.customization.select) || void 0 === t ? void 0 : t.disabled;
                    if (i && n) return { ...n
                    }
                }, " ", e => {
                    var t, l, i, n;
                    let {
                        theme: o,
                        $highlighted: a
                    } = e;
                    return { ...a ? null === (n = o.customization) || void 0 === n ? void 0 : null === (i = n.select) || void 0 === i ? void 0 : null === (l = i.header) || void 0 === l ? void 0 : null === (t = l.global) || void 0 === t ? void 0 : t.highlighted : void 0
                    }
                }),
                e4 = (0, _.Z)("div", {
                    target: "e1n1ouwo1"
                })("display:inline-flex;align-items:center;justify-content:center;min-width:32px;min-height:32px;", e => {
                    var t, l;
                    let {
                        theme: i
                    } = e, n = null === (l = i.customization.select) || void 0 === l ? void 0 : null === (t = l.header) || void 0 === t ? void 0 : t.iconContainer;
                    if (n) return { ...n
                    }
                }),
                e8 = (0, _.Z)("div", B, {
                    target: "e1n1ouwo2"
                })("overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0px 1%;", e => {
                    var t, l;
                    let {
                        theme: i
                    } = e, n = null === (l = i.customization.select) || void 0 === l ? void 0 : null === (t = l.header) || void 0 === t ? void 0 : t.item;
                    if (n) return { ...n
                    }
                }, " ", e => {
                    var t, l;
                    let {
                        theme: i,
                        $highlighted: n
                    } = e, o = null === (l = i.customization.select) || void 0 === l ? void 0 : null === (t = l.header) || void 0 === t ? void 0 : t.itemFocus;
                    if (o && n) return { ...o
                    }
                }, " ", e => {
                    var t, l;
                    let {
                        theme: i,
                        $placeholder: n
                    } = e;
                    return { ...n ? null === (l = i.customization.select) || void 0 === l ? void 0 : null === (t = l.header) || void 0 === t ? void 0 : t.placeholder : void 0
                    }
                }, ";", e => {
                    let {
                        $visuallyHidden: t
                    } = e;
                    return t ? e0 : void 0
                }, ";");
            var e3 = e => {
                let {
                    open: t,
                    selectedItems: l,
                    placeholder: i,
                    iconOnly: n,
                    iconOpen: o,
                    iconClose: a,
                    disabled: d,
                    highlighted: r,
                    iconClearAllSelectedItems: s,
                    onOpenClose: c,
                    onClearAllSelectedItems: u,
                    forcePlaceholder: v
                } = e, p = (0, w.useCallback)(e => {
                    e.stopPropagation(), u && u()
                }, [u]);
                return (0, b.BX)(e2, {
                    "data-testid": "SelectHeader",
                    onClick: d ? void 0 : c,
                    $open: t,
                    "aria-expanded": t,
                    $highlighted: r,
                    $isDisabled: d,
                    className: "select-header ".concat(t ? "select-header--expanded" : "select-header--collapsed"),
                    children: [!n && (0 === l.length || v) && i && (0, b.tZ)(e8, {
                        $placeholder: !0,
                        $highlighted: r,
                        children: i
                    }), l.map(e => {
                        let {
                            item: t,
                            id: l
                        } = e;
                        return (0, b.tZ)(e8, {
                            $visuallyHidden: !!(null != v ? v : n),
                            $highlighted: r,
                            children: t
                        }, l)
                    }), (0, b.BX)(b.HY, {
                        children: [!n && l.length > 1 && (0, b.BX)(e4, {
                            "data-testid": "X",
                            onClick: p,
                            children: [s && (0, b.tZ)(ej, { ...s
                            }), !s && (0, b.tZ)(ej, {
                                name: "selectClear",
                                alt: "select clear",
                                width: 12,
                                height: 12
                            })]
                        }), (0, b.tZ)(e4, {
                            children: t ? (0, b.tZ)(e1, {
                                icon: a,
                                defaultIcon: (0, b.tZ)(ej, {
                                    name: "selectCollapse",
                                    alt: "select collapse",
                                    width: 12,
                                    height: 12
                                })
                            }) : (0, b.tZ)(e1, {
                                icon: o,
                                defaultIcon: (0, b.tZ)(ej, {
                                    name: "selectExpand",
                                    alt: "select expand",
                                    width: 12,
                                    height: 12
                                })
                            })
                        })]
                    })]
                })
            };
            let e5 = (e, t) => {
                    let l, i, n;
                    if (e) {
                        var o, a, d;
                        let r = e.right > document.documentElement.clientWidth,
                            s = (null !== (o = null == t ? void 0 : t.left) && void 0 !== o ? o : 0) + (null !== (a = null == t ? void 0 : t.width) && void 0 !== a ? a : 0) - e.width < 0;
                        r && s ? l = (document.documentElement.clientWidth - e.width) / 2 - (null !== (d = null == t ? void 0 : t.left) && void 0 !== d ? d : 0) : r ? n = 0 : l = 0, i = null == t ? void 0 : t.height
                    }
                    return {
                        left: l,
                        top: i,
                        right: n
                    }
                },
                e6 = (0, _.Z)(ey.E.div, B, {
                    target: "e9bcpdy0"
                })("position:absolute;overflow:auto;", e => e.width && (0, W.iv)("width:", "".concat(e.width, "px"), ";"), " ", e => e.$bodyPosition && (0, W.iv)("left:", e.$bodyPosition.left && "".concat(e.$bodyPosition.left, "px"), ";top:", e.$bodyPosition.top && "".concat(e.$bodyPosition.top, "px"), ";right:", e.$bodyPosition.right && "".concat(e.$bodyPosition.right, "px"), ";bottom:", e.$bodyPosition.bottom && "".concat(e.$bodyPosition.bottom, "px"), ";"), " ", e => {
                    var t, l, i;
                    let {
                        theme: n
                    } = e, o = null === (i = n.customization) || void 0 === i ? void 0 : null === (l = i.select) || void 0 === l ? void 0 : null === (t = l.body) || void 0 === t ? void 0 : t.global;
                    if (o) return { ...o
                    }
                });
            var e7 = e => {
                let {
                    open: t,
                    width: l,
                    dropDownRef: i,
                    children: n
                } = e, o = (0, w.useRef)(null), [a, d] = (0, w.useState)();
                return (0, w.useEffect)(() => {
                    var e, t;
                    let l = null == i ? void 0 : null === (e = i.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                    d(e5(null === (t = o.current) || void 0 === t ? void 0 : t.getBoundingClientRect(), l))
                }, [t]), (0, b.tZ)(eg.M, {
                    initial: !1,
                    children: t && (0, b.tZ)(e6, {
                        ref: o,
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            ease: "easeOut",
                            duration: .1
                        },
                        $bodyPosition: a,
                        width: l,
                        className: "select-body",
                        children: n
                    }, "visible")
                })
            };
            let e9 = (0, _.Z)("div", {
                target: "e1l27cp70"
            })("position:relative;", e => {
                var t;
                let {
                    theme: l
                } = e, i = null === (t = l.customization.select) || void 0 === t ? void 0 : t.global;
                if (i) return { ...i
                }
            }, " ", e => {
                var t;
                let {
                    theme: l,
                    $highlighted: i
                } = e, n = null === (t = l.customization.select) || void 0 === t ? void 0 : t.focus;
                if (n && i) return { ...n
                }
            });
            var te = e => {
                var t;
                let {
                    open: l,
                    selectedItems: i,
                    forcePlaceholder: n,
                    placeholder: o,
                    iconOnly: a,
                    iconOpen: d,
                    iconClose: r,
                    disabled: s,
                    highlighted: c,
                    iconClearAllSelectedItems: u,
                    onClearAllSelectedItems: v,
                    children: p,
                    ...h
                } = e, [m, g] = (0, w.useState)(l), y = (0, w.useRef)(null);
                (0, w.useEffect)(() => {
                    g(l)
                }, [l]);
                let f = (0, w.useCallback)(e => {
                    e.stopPropagation(), m && y.current && !y.current.contains(e.target) && g(!1)
                }, [m]);
                (0, w.useEffect)(() => (document.addEventListener("mousedown", f), () => {
                    document.removeEventListener("mousedown", f)
                }), [f]);
                let x = (0, w.useCallback)(() => {
                        g(e => !e)
                    }, []),
                    _ = a ? 200 : null === (t = y.current) || void 0 === t ? void 0 : t.clientWidth;
                return (0, b.BX)(e9, {
                    ref: y,
                    ...h,
                    $highlighted: c,
                    children: [(0, b.tZ)(e3, {
                        open: m,
                        selectedItems: i,
                        placeholder: o,
                        forcePlaceholder: n,
                        iconOnly: a,
                        iconOpen: d,
                        iconClose: r,
                        onOpenClose: x,
                        disabled: s,
                        highlighted: c,
                        onClearAllSelectedItems: v,
                        iconClearAllSelectedItems: u
                    }), (0, b.tZ)(e7, {
                        open: m,
                        width: _,
                        dropDownRef: y,
                        children: p
                    })]
                })
            };
            let tt = e => {
                let {
                    dates: t,
                    onDateClick: l,
                    open: i,
                    children: n,
                    locale: o,
                    dateFormat: a,
                    ...d
                } = e, [r, s] = (0, w.useState)(i), [c, u] = (0, w.useState)([]), v = (0, w.useRef)(t);
                (0, w.useEffect)(() => {
                    s(i)
                }, [i]), (0, w.useEffect)(() => {
                    v.current = t, u(eJ(t))
                }, [t]);
                let p = (0, w.useCallback)(e => {
                    e.disabled || e.hidden || (l && l(e), v.current = eK(v.current, e), u([e]), s(e => void 0 !== e && void 0))
                }, [l]);
                return (0, b.tZ)(te, {
                    open: r,
                    selectedItems: eQ(o, a, c[0]),
                    ...d,
                    children: (0, b.BX)(b.HY, {
                        children: [(0, b.tZ)(es, {
                            dates: v.current,
                            onDateClick: p,
                            ...d
                        }), n]
                    })
                })
            };
            tt.displayName = "CalendarGridSingleSelect";
            let tl = G(tt),
                ti = e => {
                    let {
                        currentColumnIndex: t,
                        columnsConfig: l
                    } = e;
                    if (l) {
                        let e = l.find(e => e.columnIndex === t);
                        if (e) {
                            let t = {},
                                i = 0;
                            l.forEach(e => {
                                e.columnSize && (i += e.columnSize)
                            });
                            let n = e.columnSize ? "".concat(e.columnSize / i * 100, "%") : "auto";
                            return t.width = n, t.display = !1 === e.columnVisible ? "none" : "flex", t
                        }
                    }
                    return {}
                },
                tn = (e, t) => {
                    let l = e => e ? Array.isArray(e) ? e.map(e => l(e)).join("_") : "string" == typeof e || "number" == typeof e ? String(e) : (0, w.isValidElement)(e) ? 0 === w.Children.toArray(e.props.children).length ? e.type.displayName || e.type.name || String(e.type) : l(e.props.children) : "object" == typeof e && "children" in e ? l(e.children) : JSON.stringify(e) : "";
                    return "".concat(t, "_").concat(l(e))
                },
                to = (e, t) => {
                    let l = e.filter(e => null != e).map((e, t) => tn(e, t)).join("_");
                    return "".concat(t, "_").concat(l)
                };

            function ta() {
                let e = (0, ek._)(["\n        width: ", ";\n      "]);
                return ta = function() {
                    return e
                }, e
            }

            function td() {
                let e = (0, ek._)(["\n        display: ", ";\n      "]);
                return td = function() {
                    return e
                }, e
            }
            let tr = (0, _.Z)(e => {
                    let {
                        children: t,
                        ...l
                    } = e;
                    return (0, b.tZ)(e_, { ...l,
                        children: t
                    })
                }, {
                    shouldForwardProp: e => "colIndex" !== e && "rowIndex" !== e && "parent" !== e && "totalColumns" !== e,
                    target: "epeqxdy0"
                })("display:flex;min-width:24px;", e => {
                    var t, l, i, n;
                    let o, a, {
                            theme: d,
                            rowIndex: r,
                            colIndex: s,
                            parent: c,
                            depth: u
                        } = e,
                        v = null === (t = d.customization.table) || void 0 === t ? void 0 : t.global;
                    void 0 !== r && void 0 !== s && (o = tc(r, s + 1, c, u, null === (n = d.customization.table) || void 0 === n ? void 0 : n.cellStyles));
                    let p = null === (i = d.customization.table) || void 0 === i ? void 0 : null === (l = i.columnsConfig) || void 0 === l ? void 0 : l[u];
                    void 0 !== s && (a = ti({
                        currentColumnIndex: s,
                        columnsConfig: p
                    }));
                    let {
                        align: h,
                        color: m,
                        fontSize: g,
                        fontFamily: y,
                        fontWeight: f,
                        fontStyle: x,
                        textDecoration: b,
                        textTransform: w,
                        lineHeight: _,
                        textAlign: I,
                        letterSpacing: C,
                        wordSpacing: S,
                        textShadow: T,
                        ...D
                    } = o || {};
                    return (0, W.iv)("align-items:", v && ({
                        top: "flex-start",
                        bottom: "flex-end",
                        center: "center"
                    })[v.valign] || "center", ";justify-content:", {
                        left: "flex-start",
                        right: "flex-end",
                        center: "center"
                    }[null != h ? h : null == v ? void 0 : v.align] || "center", ";", D, ";", (null == a ? void 0 : a.width) && (0, W.iv)(ta(), a.width), " ", (null == a ? void 0 : a.display) && (0, W.iv)(td(), a.display), "      & >:first-of-type{color:", m, ";font-size:", g, ";font-family:", y, ";font-weight:", f, ";font-style:", x, ";text-decoration:", b, ";text-transform:", w, ";line-height:", _, ";text-align:", I, ";letter-spacing:", C, ";word-spacing:", S, ";text-shadow:", T, ";}")
                }),
                ts = e => e[1].column && e[1].row ? 3 : e[1].row ? 2 : 1,
                tc = (e, t, l, i, n) => {
                    if (!n || 0 === t) return;
                    let o = n.filter(n => {
                            let [o, a] = n;
                            if (l && o !== l) return !1;
                            let d = !a.column || a.column === t,
                                r = !a.row || a.row === e,
                                s = void 0 === a.depth || a.depth === i;
                            return d && r && s
                        }),
                        [a] = o,
                        d = null == a ? void 0 : a[1].style;
                    return o.length > 1 && o.forEach(e => {
                        let t = ts(a),
                            l = ts(e);
                        l === t ? d = { ...a[1].style,
                            ...e[1].style
                        } : l > t && (a = e, d = { ...e[1].style
                        })
                    }), d
                },
                tu = (0, _.Z)("div", {
                    target: "epeqxdy1"
                })("display:flex;align-items:center;flex-wrap:wrap;overflow:hidden;text-overflow:ellipsis;"),
                tv = e => void 0 !== e.children;
            var tp = e => {
                let {
                    cells: t,
                    rowIndex: l,
                    parent: i,
                    depth: n
                } = e;
                return (0, b.tZ)(b.HY, {
                    children: t.map((e, t) => (0, b.tZ)(tr, {
                        colIndex: t,
                        parent: i,
                        rowIndex: l,
                        depth: n,
                        children: tv(e) ? (0, b.tZ)(tu, {
                            children: e.children
                        }) : (0, b.tZ)(tu, {
                            children: e
                        })
                    }, tn(e, l + t)))
                })
            };
            let th = (0, _.Z)(eE, {
                target: "efkugq80"
            })("flex-wrap:nowrap;", e => {
                var t;
                let {
                    theme: l
                } = e, i = null === (t = l.customization.table) || void 0 === t ? void 0 : t.global;
                if (!i) return;
                let {
                    classic: n,
                    borderColor: o
                } = i;
                return n ? "& > :not(:first-of-type) {\n      border-left: 1px solid ".concat(o, ";\n    }") : null
            }, " ", e => {
                var t;
                let {
                    theme: l
                } = e, i = null === (t = l.customization.table) || void 0 === t ? void 0 : t.footer;
                if (i) return { ...i
                }
            });
            var tm = e => {
                let {
                    cells: t
                } = e;
                return t ? (0, b.tZ)(th, {
                    columns: t.length,
                    children: (0, b.tZ)(tp, {
                        cells: t,
                        parent: "footer",
                        rowIndex: 0,
                        depth: 0
                    })
                }) : null
            };
            let tg = (0, _.Z)(eE, {
                target: "e1xryj6g0"
            })("flex-wrap:nowrap;", e => {
                var t;
                let {
                    theme: l
                } = e, i = null === (t = l.customization.table) || void 0 === t ? void 0 : t.global;
                if (!i) return;
                let {
                    classic: n,
                    borderColor: o
                } = i;
                return n ? "& > :not(:first-of-type) {\n      border-left: 1px solid ".concat(o, ";\n    }\n    \n    border-bottom: 1px solid ").concat(o, ";\n    ") : null
            }, " ", e => {
                var t;
                let {
                    theme: l
                } = e, i = null === (t = l.customization.table) || void 0 === t ? void 0 : t.header;
                if (i) return { ...i
                }
            });
            var ty = e => {
                let {
                    cells: t
                } = e;
                return t ? (0, b.tZ)(tg, {
                    columns: t.length,
                    children: (0, b.tZ)(tp, {
                        cells: t,
                        parent: "header",
                        rowIndex: 0,
                        depth: 0
                    })
                }) : null
            };
            let tf = (0, _.Z)("div", {
                    target: "eloi7hm0"
                })("overflow:hidden;", e => {
                    var t, l;
                    let {
                        theme: i,
                        depth: n
                    } = e, o = null === (l = i.customization.table) || void 0 === l ? void 0 : null === (t = l.rowContainer) || void 0 === t ? void 0 : t[n];
                    if (!o) return;
                    let {
                        boxShadow: a,
                        border: d,
                        borderRadius: r,
                        margin: s
                    } = o;
                    return {
                        boxShadow: a,
                        border: d,
                        borderRadius: r,
                        margin: s
                    }
                }, "  &:hover{", e => {
                    var t, l;
                    let {
                        theme: i
                    } = e, n = null === (l = i.customization.table) || void 0 === l ? void 0 : null === (t = l.global) || void 0 === t ? void 0 : t.hover;
                    if (n) return { ...n
                    }
                }, "}"),
                tx = (0, _.Z)(eE, {
                    target: "eloi7hm1"
                })("flex-wrap:nowrap;align-items:stretch;position:relative;z-index:", e => 5 - e.depth, ";", e => {
                    var t, l;
                    let {
                        theme: i,
                        depth: n
                    } = e, o = null === (l = i.customization.table) || void 0 === l ? void 0 : null === (t = l.row) || void 0 === t ? void 0 : t[n];
                    if (!o) return;
                    let {
                        height: a,
                        minHeight: d,
                        backgroundColor: r,
                        boxShadow: s,
                        padding: c
                    } = o;
                    return {
                        height: a,
                        minHeight: d,
                        backgroundColor: r,
                        boxShadow: s,
                        padding: c
                    }
                }, " ", e => {
                    var t, l;
                    let {
                        theme: i,
                        depth: n,
                        isExpanded: o
                    } = e, a = null === (l = i.customization.table) || void 0 === l ? void 0 : null === (t = l.row) || void 0 === t ? void 0 : t[n];
                    if (!a) return;
                    let {
                        borderTop: d,
                        borderBottom: r
                    } = a;
                    return n > 0 ? {
                        borderTop: d,
                        borderBottom: r
                    } : 0 === n && o ? {
                        borderBottom: r
                    } : void 0
                });
            var tb = e => {
                let {
                    row: t,
                    isExpanded: l,
                    depth: i,
                    children: n
                } = e;
                return (0, b.BX)(tf, {
                    depth: i,
                    children: [(0, b.tZ)(tx, {
                        isExpanded: l,
                        columns: t.row.length,
                        depth: i,
                        children: (0, b.tZ)(tp, {
                            cells: t.row,
                            parent: "body",
                            rowIndex: t.rowIndex,
                            depth: i
                        })
                    }), n]
                })
            };
            let tw = e => {
                    let {
                        body: t,
                        expandedRows: l,
                        depth: i
                    } = e, n = e => null == l ? void 0 : l.includes(e);
                    return (0, b.tZ)("div", {
                        className: "rows-".concat(i),
                        children: t.map(e => {
                            var t;
                            return (0, b.tZ)(tb, {
                                row: e,
                                isExpanded: n(e.rowIndex),
                                depth: i,
                                children: e.subRows && (0, b.tZ)(ef, {
                                    open: null !== (t = n(e.rowIndex)) && void 0 !== t && t,
                                    children: (0, b.tZ)(tw, {
                                        body: e.subRows,
                                        expandedRows: l,
                                        depth: i + 1
                                    })
                                })
                            }, to(e.row, e.rowIndex))
                        })
                    })
                },
                t_ = (0, _.Z)("div", {
                    target: "edtwv8h0"
                })(e => {
                    var t;
                    let {
                        theme: l
                    } = e, i = null === (t = l.customization.table) || void 0 === t ? void 0 : t.container;
                    if (!i) return;
                    let {
                        padding: n,
                        ...o
                    } = i;
                    return {
                        padding: n,
                        ...o
                    }
                }),
                tI = (0, _.Z)("div", {
                    target: "edtwv8h1"
                })(e => {
                    var t;
                    let {
                        theme: l
                    } = e, i = null === (t = l.customization.table) || void 0 === t ? void 0 : t.global;
                    if (!i) return;
                    let {
                        classic: n,
                        borderColor: o
                    } = i;
                    return {
                        border: n ? "1px solid" : "none",
                        borderColor: o
                    }
                }, " ", e => {
                    var t;
                    let {
                        theme: l
                    } = e, i = null === (t = l.customization.table) || void 0 === t ? void 0 : t.container;
                    if (!i) return;
                    let {
                        border: n,
                        borderColor: o,
                        borderRadius: a,
                        borderLeft: d,
                        borderRight: r,
                        borderBottom: s,
                        borderTop: c
                    } = i;
                    return {
                        border: n,
                        borderColor: o,
                        borderRadius: a,
                        borderLeft: d,
                        borderRight: r,
                        borderBottom: s,
                        borderTop: c
                    }
                }),
                tC = (0, _.Z)("div", {
                    target: "edtwv8h2"
                })(e => {
                    var t;
                    let {
                        theme: l
                    } = e, i = null === (t = l.customization.table) || void 0 === t ? void 0 : t.body;
                    if (i) return { ...i
                    }
                }, " ", e => {
                    var t;
                    let {
                        theme: l
                    } = e;
                    return null === (t = l.customization.table) || void 0 === t ? void 0 : t.extraCSS
                }),
                tS = e => {
                    let {
                        header: t,
                        body: l,
                        footer: i,
                        expandedRows: n
                    } = e;
                    if (!l || 0 === l.length) return null;
                    if (t && t.length !== l[0].row.length || i && i.length !== l[0].row.length) throw Error("Head, rows and footer must have the same length");
                    return (0, b.tZ)(t_, {
                        children: (0, b.BX)(tI, {
                            children: [(0, b.tZ)(ty, {
                                cells: t
                            }), (0, b.tZ)(tC, {
                                children: (0, b.tZ)(tw, {
                                    expandedRows: n,
                                    body: l,
                                    depth: 0
                                })
                            }), (0, b.tZ)(tm, {
                                cells: i
                            })]
                        })
                    })
                };
            tS.displayName = "Table", G(tS);
            let tT = (0, _.Z)("div", B, {
                target: "eulfrug0"
            })(e => {
                var t, l, i, n, o;
                let {
                    theme: a,
                    $isChecked: d,
                    $isDisabled: r
                } = e, s = null === (t = a.customization) || void 0 === t ? void 0 : t.toggle, c = null == s ? void 0 : null === (l = s.slider) || void 0 === l ? void 0 : l.style, u = null == s ? void 0 : null === (i = s.slider) || void 0 === i ? void 0 : i.container, v = null == s ? void 0 : null === (n = s.slider) || void 0 === n ? void 0 : n.checked, p = null == s ? void 0 : null === (o = s.global) || void 0 === o ? void 0 : o.disabled, h = { ...u,
                    ...c
                }, m = { ...h,
                    ...v
                }, g = { ...h,
                    ...p
                };
                return r && p ? { ...g
                } : d && v ? { ...m
                } : { ...h
                }
            });
            var tD = e => {
                let {
                    checked: t,
                    disabled: l
                } = e;
                return (0, b.tZ)(tT, {
                    $isChecked: t,
                    $isDisabled: l
                })
            };
            let tZ = e => {
                    let {
                        checked: t,
                        activeLeft: l,
                        disabled: i,
                        leftIcon: n,
                        rightIcon: o,
                        onToggleChange: a,
                        ...d
                    } = e, r = t ? l ? "flex-start" : "flex-end" : l ? "flex-end" : "flex-start";
                    return (0, b.BX)(tN, {
                        $isChecked: t,
                        alignment: r,
                        $isDisabled: i,
                        onClick: a,
                        className: "toggle__switch ".concat(t ? "toggle__switch--active" : "", " ").concat(i ? "toggle__switch--disabled" : ""),
                        role: "switch",
                        ...d,
                        children: [(0, b.tZ)(tE, {
                            children: n
                        }), (0, b.tZ)(tD, {
                            checked: t,
                            disabled: i
                        }), (0, b.tZ)(tk, {
                            children: o
                        })]
                    })
                },
                tE = (0, _.Z)("div", {
                    target: "eslbx1s0"
                })(e => {
                    var t, l;
                    let {
                        theme: i
                    } = e;
                    return { ...null === (l = i.customization) || void 0 === l ? void 0 : null === (t = l.toggle) || void 0 === t ? void 0 : t.leftIcon
                    }
                }),
                tk = (0, _.Z)("div", {
                    target: "eslbx1s1"
                })(e => {
                    var t, l;
                    let {
                        theme: i
                    } = e;
                    return { ...null === (l = i.customization) || void 0 === l ? void 0 : null === (t = l.toggle) || void 0 === t ? void 0 : t.rightIcon
                    }
                }),
                tN = (0, _.Z)(ee, B, {
                    target: "eslbx1s2"
                })("display:flex;align-items:center;justify-content:", e => e.alignment, ";", e => {
                    var t, l, i, n, o;
                    let {
                        theme: a,
                        $isChecked: d,
                        $isDisabled: r
                    } = e, s = null === (t = a.customization) || void 0 === t ? void 0 : t.toggle, c = null == s ? void 0 : null === (l = s.switch) || void 0 === l ? void 0 : l.style, u = null == s ? void 0 : null === (i = s.switch) || void 0 === i ? void 0 : i.container, v = null == s ? void 0 : null === (n = s.switch) || void 0 === n ? void 0 : n.checked, p = null == s ? void 0 : null === (o = s.global) || void 0 === o ? void 0 : o.disabled, h = { ...u,
                        ...c
                    }, m = { ...h,
                        ...v
                    }, g = { ...h,
                        ...p
                    };
                    return r && p ? { ...g
                    } : d && v ? { ...m
                    } : { ...h
                    }
                }, ";"),
                tR = e => {
                    let {
                        label: t,
                        position: l,
                        disabled: i,
                        checked: n,
                        isActive: o,
                        ...a
                    } = e;
                    return (0, b.tZ)(tM, {
                        position: l,
                        $isChecked: n,
                        $isDisabled: i,
                        className: "toggle__item ".concat(o ? "toggle__item--active" : ""),
                        ...a,
                        children: t
                    })
                },
                tM = (0, _.Z)("div", B, {
                    target: "e1mwc310"
                })("display:flex;align-items:center;", e => "left" === e.position ? (0, W.iv)("justify-content:flex-start;") : (0, W.iv)("justify-content:flex-end;"), " ", e => {
                    let {
                        theme: t,
                        position: l,
                        $isChecked: i,
                        $isDisabled: n
                    } = e;
                    if ("left" === l) {
                        var o, a, d, r, s;
                        let e = null === (o = t.customization) || void 0 === o ? void 0 : o.toggle,
                            l = null == e ? void 0 : null === (a = e.leftLabel) || void 0 === a ? void 0 : a.style,
                            c = null == e ? void 0 : null === (d = e.leftLabel) || void 0 === d ? void 0 : d.container,
                            u = null == e ? void 0 : null === (r = e.leftLabel) || void 0 === r ? void 0 : r.checked,
                            v = null == e ? void 0 : null === (s = e.global) || void 0 === s ? void 0 : s.disabled,
                            p = { ...c,
                                ...l
                            },
                            h = { ...p,
                                ...u
                            },
                            m = { ...p,
                                ...v
                            };
                        return n && v ? { ...m
                        } : !i && u ? { ...h
                        } : { ...p
                        }
                    }
                }, " ", e => {
                    let {
                        theme: t,
                        position: l,
                        $isChecked: i,
                        $isDisabled: n
                    } = e;
                    if ("right" === l) {
                        var o, a, d, r, s;
                        let e = null === (o = t.customization) || void 0 === o ? void 0 : o.toggle,
                            l = null == e ? void 0 : null === (a = e.rightLabel) || void 0 === a ? void 0 : a.style,
                            c = null == e ? void 0 : null === (d = e.rightLabel) || void 0 === d ? void 0 : d.container,
                            u = null == e ? void 0 : null === (r = e.rightLabel) || void 0 === r ? void 0 : r.checked,
                            v = null == e ? void 0 : null === (s = e.global) || void 0 === s ? void 0 : s.disabled,
                            p = { ...c,
                                ...l
                            },
                            h = { ...p,
                                ...u
                            },
                            m = { ...p,
                                ...v
                            };
                        return n && v ? { ...m
                        } : i && u ? { ...h
                        } : { ...p
                        }
                    }
                }),
                tF = e => {
                    let {
                        id: t,
                        checked: l,
                        activeLeft: i,
                        disabled: n,
                        leftLabel: o,
                        rightLabel: a,
                        leftIcon: d,
                        rightIcon: r,
                        onToggleChange: s,
                        ...c
                    } = e, u = (0, w.useCallback)(() => {
                        n || null == s || s({
                            id: t,
                            active: !l
                        })
                    }, [l, n, t, s]);
                    return (0, b.BX)(tO, {
                        className: "toggle",
                        ...c,
                        children: [o && (0, b.tZ)(tR, {
                            label: o,
                            position: "left",
                            checked: i ? !l : l,
                            disabled: n,
                            isActive: i ? l : !l
                        }), (0, b.tZ)(tZ, {
                            checked: l,
                            activeLeft: i,
                            onToggleChange: u,
                            disabled: n,
                            leftIcon: d,
                            rightIcon: r,
                            "data-testid": "Toggle",
                            "aria-label": c["aria-label"]
                        }), a && (0, b.tZ)(tR, {
                            label: a,
                            position: "right",
                            checked: i ? !l : l,
                            disabled: n,
                            isActive: i ? !l : l
                        })]
                    })
                },
                tO = (0, _.Z)("div", {
                    target: "ekjdewx0"
                })("display:flex;align-items:center;", e => {
                    var t, l;
                    let {
                        theme: i
                    } = e, n = null === (l = i.customization.toggle) || void 0 === l ? void 0 : null === (t = l.global) || void 0 === t ? void 0 : t.container;
                    if (n) return { ...n
                    }
                });
            tF.displayName = "Toggle";
            let tB = G(tF);
            (0, _.Z)("div", {
                target: "edqx4m40"
            })(e => {
                let {
                    tx: t
                } = e;
                return { ...null == t ? void 0 : t.container
                }
            }, " ", e => {
                let {
                    tx: t,
                    selected: l
                } = e;
                return { ...l && (null == t ? void 0 : t.selected)
                }
            }, ":hover{cursor:pointer;}");
            var tL = (e, t) => null != e && ("string" != typeof e || e) ? "number" == typeof e ? Number.isFinite(e) ? "".concat(e, "px") : t : e.toString() : t;
            let tz = (0, W.F4)("to{transform:rotate(360deg);}"),
                tj = (0, _.Z)("div", {
                    target: "efblq1f0"
                })(e => {
                    var t, l;
                    let {
                        theme: i
                    } = e, n = tL(null === (l = i.customization) || void 0 === l ? void 0 : null === (t = l.spinner) || void 0 === t ? void 0 : t.size, "24px");
                    return "\n            width: ".concat(n, ";\n            height: ").concat(n, ";\n        ")
                }, " ", e => {
                    var t, l, i, n, o;
                    let {
                        theme: a
                    } = e, d = null !== (o = null === (l = a.customization) || void 0 === l ? void 0 : null === (t = l.spinner) || void 0 === t ? void 0 : t.color) && void 0 !== o ? o : "currentColor", r = tL(null === (n = a.customization) || void 0 === n ? void 0 : null === (i = n.spinner) || void 0 === i ? void 0 : i.spinnerWidth, "4px");
                    return "\n      border: ".concat(r, " solid ").concat(d, ";\n    ")
                }, "  display:inline-block;vertical-align:text-bottom;border-right-color:transparent;border-radius:50%;animation:", tz, " 0.75s linear infinite;& span{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}");
            var tA = G(e => {
                let {
                    customTheme: t,
                    ...l
                } = e;
                return (0, b.tZ)(tj, { ...l,
                    children: (0, b.tZ)("span", {
                        children: "Loading..."
                    })
                })
            });
            let tW = (0, w.forwardRef)((e, t) => {
                    var l;
                    let {
                        previous: i,
                        content: n,
                        next: o,
                        theme: a,
                        selectedItemsId: d,
                        disabledItemsId: r,
                        onItemClick: s,
                        onPreviousClick: c,
                        onNextClick: u,
                        ...v
                    } = e;
                    return (0, b.BX)(J, { ...v,
                        tx: null == a ? void 0 : a.container,
                        children: [(0, b.tZ)(ee, {
                            type: "button",
                            tx: null == a ? void 0 : a.previous,
                            onClick: c,
                            children: i
                        }), (0, b.tZ)(J, {
                            tx: null == a ? void 0 : null === (l = a.items) || void 0 === l ? void 0 : l.container,
                            ref: t,
                            children: n.map(e => {
                                var t;
                                let {
                                    id: l,
                                    item: i
                                } = e, n = null == r ? void 0 : r.includes(l);
                                return (0, b.tZ)(tH, {
                                    tx: null == a ? void 0 : null === (t = a.items) || void 0 === t ? void 0 : t.item,
                                    selected: null == d ? void 0 : d.includes(l),
                                    disabled: n,
                                    onClick: () => {
                                        n || null == s || s(l)
                                    },
                                    children: i
                                }, l)
                            })
                        }), (0, b.tZ)(ee, {
                            type: "button",
                            tx: null == a ? void 0 : a.next,
                            onClick: u,
                            children: o
                        })]
                    })
                }),
                tH = (0, _.Z)("div", {
                    target: "e1fnkgvd0"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...null == t ? void 0 : t.container
                    }
                }, " ", e => {
                    let {
                        disabled: t,
                        tx: l
                    } = e;
                    if (t) return null == l ? void 0 : l.disabled
                }, " ", e => {
                    let {
                        selected: t,
                        tx: l
                    } = e;
                    if (t) return null == l ? void 0 : l.selected
                });
            tW.displayName = "Carousel";
            let tG = e => {
                    let t, {
                        time: l,
                        format: i,
                        setZone: n,
                        zone: o,
                        locale: a
                    } = e;
                    if ("number" == typeof l) t = Y.ou.fromMillis(l, {
                        zone: o
                    });
                    else if ("string" == typeof l) t = Y.ou.fromISO(l, {
                        setZone: n,
                        zone: o
                    });
                    else if (l instanceof Date) t = Y.ou.fromJSDate(l, {
                        zone: o
                    });
                    else {
                        if (!Y.ou.isDateTime(l)) return {
                            status: "error",
                            message: "unsupported time provided: ".concat(String(l))
                        };
                        t = o ? l.setZone(o) : l
                    }
                    return t.isValid ? {
                        status: "ok",
                        value: {
                            dateTime: "string" == typeof l ? l : t.toISO(),
                            text: t.toFormat(null != i ? i : "T D", {
                                locale: a
                            })
                        }
                    } : {
                        status: "error",
                        message: "cannot parse time=".concat(String(l), ", reason: ").concat(t.invalidReason)
                    }
                },
                tX = () => {
                    let [e, t] = (0, w.useState)(!0);
                    return (0, w.useEffect)(() => {
                        t(!1)
                    }, []), e
                },
                tP = e => {
                    let {
                        time: t,
                        format: l,
                        setZone: i,
                        zone: n,
                        locale: o,
                        renderMode: a = "second-render",
                        ...d
                    } = e, r = tX(), s = (0, w.useMemo)(() => tG({
                        time: t,
                        format: l,
                        setZone: i,
                        zone: n,
                        locale: o
                    }), [t, l, i, n, o]);
                    return (w.useEffect(() => {
                        "error" === s.status && console.error("[Time][invalid-props]: ".concat(s.message, "\ntime=").concat(String(t), ", zone=").concat(String(n), ", locale=").concat(o, ", format=").concat(l))
                    }, [s]), "error" === s.status) ? null : (0, b.tZ)(t$, { ...d,
                        dateTime: s.value.dateTime,
                        children: r && "second-render" === a ? "" : s.value.text
                    })
                },
                t$ = (0, _.Z)("time", B, {
                    target: "ei762yq0"
                })("display:inline-flex;justify-content:center;align-items:center;padding:0;margin:0;box-sizing:border-box;", e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }, ";", e => {
                    let {
                        $minWidth: t,
                        $minHeight: l
                    } = e;
                    return "\n      min-width: ".concat(tL(t, "100px"), ";\n      min-height: ").concat(tL(l, "20px"), ";\n    ")
                });
            var tU = l(54714),
                tV = l(87608),
                tq = l(75489),
                tY = l(38187);
            let tJ = (0, _.Z)(tU.Ph, {
                    target: "e16nce970"
                })("position:relative;font-family:inherit;font-size:inherit;box-sizing:border-box;&:is(*::before,*::after,*){box-sizing:border-box;}", e => {
                    var t, l;
                    let {
                        theme: i
                    } = e;
                    return { ...null === (l = i.customization) || void 0 === l ? void 0 : null === (t = l.select) || void 0 === t ? void 0 : t.global
                    }
                }, " ", e => {
                    var t, l;
                    let {
                        theme: i,
                        $highlighted: n
                    } = e;
                    return { ...n ? null === (l = i.customization) || void 0 === l ? void 0 : null === (t = l.select) || void 0 === t ? void 0 : t.focus : void 0
                    }
                }, "  &[data-fluid=\"true\"]{width:100%;}&[data-fluid='true'] > button{width:100%;}&[data-focused]{outline:-webkit-focus-ring-color auto 1px;}"),
                tK = (0, _.Z)(tV.z, {
                    target: "e16nce971"
                })("display:flex;align-items:center;justify-content:space-between;appearance:none;background:transparent;font-family:inherit;font-size:inherit;width:100%;&:not(:disabled){cursor:pointer;}", e => {
                    var t, l, i, n;
                    let {
                        theme: o
                    } = e, {
                        open: a,
                        highlighted: d,
                        ...r
                    } = null !== (n = null === (i = o.customization) || void 0 === i ? void 0 : null === (l = i.select) || void 0 === l ? void 0 : null === (t = l.header) || void 0 === t ? void 0 : t.global) && void 0 !== n ? n : {};
                    return r
                }, "  &[aria-expanded='true']{", e => {
                    var t, l, i, n;
                    let {
                        theme: o
                    } = e;
                    return { ...null === (n = o.customization) || void 0 === n ? void 0 : null === (i = n.select) || void 0 === i ? void 0 : null === (l = i.header) || void 0 === l ? void 0 : null === (t = l.global) || void 0 === t ? void 0 : t.open
                    }
                }, "}&[disabled]{", e => {
                    var t, l;
                    let {
                        theme: i
                    } = e;
                    return { ...null === (l = i.customization) || void 0 === l ? void 0 : null === (t = l.select) || void 0 === t ? void 0 : t.disabled
                    }
                }, "}"),
                tQ = (0, _.Z)("div", {
                    target: "e16nce972"
                })("display:inline-flex;align-items:center;justify-content:center;min-width:32px;min-height:32px;&[hidden]{display:none !important;}", e => {
                    var t, l, i;
                    let {
                        theme: n
                    } = e;
                    return { ...null === (i = n.customization) || void 0 === i ? void 0 : null === (l = i.select) || void 0 === l ? void 0 : null === (t = l.header) || void 0 === t ? void 0 : t.iconContainer
                    }
                }, ";"),
                t0 = (0, _.Z)(tU.ki, {
                    target: "e16nce973"
                })("overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0px 1%;font-family:inherit;font-size:inherit;", e => {
                    var t, l, i;
                    let {
                        theme: n
                    } = e;
                    return { ...null === (i = n.customization) || void 0 === i ? void 0 : null === (l = i.select) || void 0 === l ? void 0 : null === (t = l.header) || void 0 === t ? void 0 : t.item
                    }
                }, ";", e => {
                    var t, l, i;
                    let {
                        theme: n,
                        $highlighted: o
                    } = e;
                    return { ...o ? null === (i = n.customization) || void 0 === i ? void 0 : null === (l = i.select) || void 0 === l ? void 0 : null === (t = l.header) || void 0 === t ? void 0 : t.itemFocus : void 0
                    }
                }),
                t1 = (0, _.Z)(tq.J, {
                    target: "e16nce974"
                })("font-family:inherit;"),
                t2 = (0, _.Z)(tY.wb, {
                    target: "e16nce975"
                })("font-family:inherit;box-shadow:0px 4px 16px rgba(0,0,0,0.1);background:#fff;border-radius:4px;", e => {
                    var t, l, i;
                    let {
                        theme: n
                    } = e;
                    return { ...null === (i = n.customization) || void 0 === i ? void 0 : null === (l = i.select) || void 0 === l ? void 0 : null === (t = l.body) || void 0 === t ? void 0 : t.global
                    }
                }, " ", e => {
                    let {
                        $width: t
                    } = e;
                    return {
                        minWidth: t
                    }
                }, ";"),
                t4 = (0, _.Z)(tY.m9, {
                    target: "e16nce976"
                })("user-select:none;display:flex;outline:none;font-size:inherit;&[data-focus-visible]{outline:none;}&:not([aria-disabled='true']){cursor:pointer;}", e => {
                    var t, l, i, n, o, a;
                    let {
                        theme: d
                    } = e, {
                        disabled: r,
                        hover: s,
                        selected: c,
                        hoverSelected: u,
                        ...v
                    } = null !== (a = null === (o = d.customization) || void 0 === o ? void 0 : null === (n = o.select) || void 0 === n ? void 0 : null === (i = n.body) || void 0 === i ? void 0 : null === (l = i.listSelect) || void 0 === l ? void 0 : null === (t = l.items) || void 0 === t ? void 0 : t.global) && void 0 !== a ? a : {};
                    return v
                }, '  &[data-disabled="true"]{', e => {
                    var t, l, i, n, o, a;
                    let {
                        theme: d
                    } = e;
                    return { ...null === (a = d.customization) || void 0 === a ? void 0 : null === (o = a.select) || void 0 === o ? void 0 : null === (n = o.body) || void 0 === n ? void 0 : null === (i = n.listSelect) || void 0 === i ? void 0 : null === (l = i.items) || void 0 === l ? void 0 : null === (t = l.global) || void 0 === t ? void 0 : t.disabled
                    }
                }, ";}&[aria-selected='true']{", e => {
                    var t, l, i, n, o, a;
                    let {
                        theme: d
                    } = e;
                    return { ...null === (a = d.customization) || void 0 === a ? void 0 : null === (o = a.select) || void 0 === o ? void 0 : null === (n = o.body) || void 0 === n ? void 0 : null === (i = n.listSelect) || void 0 === i ? void 0 : null === (l = i.items) || void 0 === l ? void 0 : null === (t = l.global) || void 0 === t ? void 0 : t.selected
                    }
                }, "}@media (hover:hover){&:not(:disabled):hover[aria-selected='true']{", e => {
                    var t, l, i, n, o, a;
                    let {
                        theme: d
                    } = e;
                    return { ...null === (a = d.customization) || void 0 === a ? void 0 : null === (o = a.select) || void 0 === o ? void 0 : null === (n = o.body) || void 0 === n ? void 0 : null === (i = n.listSelect) || void 0 === i ? void 0 : null === (l = i.items) || void 0 === l ? void 0 : null === (t = l.global) || void 0 === t ? void 0 : t.hoverSelected
                    }
                }, "}&:not(:disabled):hover[aria-selected='false']{", e => {
                    var t, l, i, n, o, a;
                    let {
                        theme: d
                    } = e;
                    return { ...null === (a = d.customization) || void 0 === a ? void 0 : null === (o = a.select) || void 0 === o ? void 0 : null === (n = o.body) || void 0 === n ? void 0 : null === (i = n.listSelect) || void 0 === i ? void 0 : null === (l = i.items) || void 0 === l ? void 0 : null === (t = l.global) || void 0 === t ? void 0 : t.hover
                    }
                }, "}}&[data-focused]{", e => {
                    var t, l, i, n, o, a;
                    let {
                        theme: d
                    } = e;
                    return { ...null === (a = d.customization) || void 0 === a ? void 0 : null === (o = a.select) || void 0 === o ? void 0 : null === (n = o.body) || void 0 === n ? void 0 : null === (i = n.listSelect) || void 0 === i ? void 0 : null === (l = i.items) || void 0 === l ? void 0 : null === (t = l.global) || void 0 === t ? void 0 : t.hover
                    }
                }, "}"),
                t8 = e => {
                    let {
                        highlighted: t,
                        iconClose: l,
                        iconOpen: i,
                        isDisabled: n
                    } = e, o = (0, w.useContext)(tU.J2);
                    return (0, b.BX)(tK, {
                        onPressStart: () => {
                            o.isOpen && o.close()
                        },
                        className: "select-single-value__header ".concat(o.isOpen ? "select-single-value__header--expanded" : "select-single-value__header--collapsed", " ").concat(n ? "select-single-value__header--disabled" : ""),
                        children: [(0, b.tZ)(t0, {
                            $highlighted: t
                        }), (0, b.tZ)(tQ, {
                            "aria-hidden": "true",
                            hidden: !o.isOpen,
                            children: (0, b.tZ)(e1, {
                                icon: l,
                                defaultIcon: (0, b.tZ)(ej, {
                                    name: "selectCollapse",
                                    width: 12,
                                    height: 12
                                })
                            })
                        }), (0, b.tZ)(tQ, {
                            "aria-hidden": "true",
                            hidden: o.isOpen,
                            children: (0, b.tZ)(e1, {
                                icon: i,
                                defaultIcon: (0, b.tZ)(ej, {
                                    name: "selectExpand",
                                    width: 12,
                                    height: 12
                                })
                            })
                        })]
                    })
                };
            var t3 = l(97527),
                t5 = l.n(t3);
            let t6 = (e, t) => {
                    let l = (0, w.useRef)(t);
                    l.current = t, (0, w.useEffect)(() => {
                        let t = "pointerdown",
                            i = t => {
                                let i = l.current,
                                    n = e.current;
                                !n || !i || n.contains(t.target) || i(t)
                            };
                        return window.addEventListener(t, i), () => {
                            window.removeEventListener(t, i)
                        }
                    }, [])
                },
                t7 = (0, w.memo)(e => {
                    let {
                        items: t,
                        width: l,
                        selectedKey: i
                    } = e, n = (0, w.useRef)(null), o = (0, w.useContext)(tU.J2), a = (0, w.useMemo)(() => (0, b.tZ)(b.HY, {
                        children: null == t ? void 0 : t.map(e => (0, b.tZ)(t4, {
                            id: e.id,
                            value: e,
                            isDisabled: e.disabled,
                            className: "select-single-value__body-item ".concat(e.id === i ? "select-single-value__body-item--active" : "", " ").concat(e.disabled ? "select-single-value__body-item--disabled" : ""),
                            children: e.item
                        }, e.id))
                    }), [t, i]);
                    return t6(n, () => {
                        o.close()
                    }), (0, b.tZ)(t1, {
                        ref: n,
                        isNonModal: !0,
                        shouldCloseOnInteractOutside: t5(),
                        children: (0, b.tZ)(t2, {
                            $width: l,
                            items: t,
                            selectionMode: "single",
                            children: a
                        })
                    })
                }),
                t9 = G(e => {
                    let {
                        highlighted: t,
                        items: l,
                        iconClose: i,
                        iconOpen: n,
                        fluid: o = !1,
                        onSelectionChange: a,
                        ...d
                    } = e, r = (0, w.useRef)(null), [s, c] = (0, w.useState)(void 0);
                    return (0, w.useEffect)(() => {
                        if (!r.current) return;
                        let e = 0,
                            t = new ResizeObserver(t => {
                                let [l] = t;
                                e = window.requestAnimationFrame(() => {
                                    c(l.contentRect.width)
                                })
                            });
                        return t.observe(r.current), () => {
                            t.disconnect(), e && window.cancelAnimationFrame(e)
                        }
                    }, []), (0, b.BX)(tJ, {
                        ref: r,
                        $highlighted: t,
                        "data-fluid": o ? String(o) : void 0,
                        onSelectionChange: a,
                        className: "SelectRoot",
                        ...d,
                        children: [(0, b.tZ)(t8, {
                            highlighted: t,
                            iconClose: i,
                            iconOpen: n,
                            isDisabled: d.isDisabled
                        }), (0, b.tZ)(t7, {
                            items: l,
                            width: s,
                            selectedKey: d.selectedKey
                        })]
                    })
                });
            t9.displayName = "ListboxSelect";
            var le = l(26246),
                lt = l(13311),
                ll = l.n(lt);
            class li extends w.Component {
                static getDerivedStateFromError(e) {
                    return {
                        hasError: !0
                    }
                }
                render() {
                    if (this.state.hasError) {
                        var e;
                        return null !== (e = this.props.fallback) && void 0 !== e ? e : null
                    }
                    return this.props.children
                }
                constructor(e) {
                    super(e), this.componentDidCatch = (e, t) => {
                        console.error("".concat(e.message, ": ").concat(this.formatObjectForDisplay(t)))
                    }, this.formatObjectForDisplay = e => JSON.stringify(e, null, 2), this.state = {
                        hasError: !1
                    }
                }
            }
            let ln = Object.freeze({
                status: {
                    cancelled: "CANCELLED",
                    delayed: "DELAYED",
                    interrupted: "INTERRUPTED",
                    postponed: "POSTPONED",
                    scheduled: "SCHEDULED",
                    rescheduled: "RESCHEDULED",
                    finished: "FINISHED"
                },
                states: {
                    filter: "filter",
                    sorting: "sorting",
                    setting: "setting"
                },
                color: {
                    error: "#F55E3F",
                    warning: "#FCBA26"
                },
                icon: {
                    dailyScheduleMedal: "dailyScheduleMedal",
                    dailyScheduleWarning: "dailyScheduleWarning",
                    bookmarkBordered: "bookmarkBordered",
                    bookmarkFilled: "bookmarkFilled",
                    dailyScheduleMenu: "dailyScheduleMenu",
                    unofficialMedalIcon: "unofficialMedal",
                    contextualMenu: "dailyScheduleMenu"
                },
                events: {
                    clickOnCompetitorContextualMenu: "clickOnCompetitorContextualMenu",
                    clickOnScheduleDate: "clickOnScheduleDate",
                    clickOnScheduleDiscipline: "clickOnScheduleDiscipline",
                    clickOnScheduleDateAndDiscipline: "clickOnScheduleDateAndDiscipline",
                    clickOnEventUnitContextualMenu: "clickOnEventUnitContextualMenu",
                    clickOnDisciplineEventContextualMenu: "clickOnDisciplineEventContextualMenu",
                    clickOnMySchedule: "clickOnMySchedule",
                    clickOnMyScheduleFilter: "clickOnMyScheduleFilter",
                    clickOnCompetitorExpansion: "clickOnCompetitorExpansion",
                    clickOnDisciplineExpansion: "clickOnDisciplineExpansion",
                    clickOnOrganisationExpansion: "clickOnOrganisationExpansion"
                },
                medalsTable: {
                    filters: {
                        noc: "medalsTableNocFilter",
                        discipline: "medalsTableDisciplineFilter",
                        eventCategory: "medalsTableEventCategoryFilter"
                    },
                    sorting: "medalsTableSorting"
                },
                medalistTable: {
                    filters: {
                        noc: "medalistTableNocFilter",
                        discipline: "medalistTableDisciplineFilter",
                        event: "medalistTableEventFilter",
                        gender: "medalistTableGenderFilter",
                        day: "medalistTableDayFilter"
                    },
                    sorting: "medalistTableSorting"
                },
                dailySchedule: {
                    knownRowTypes: {
                        competitionDayDivider: "competition-day-divider",
                        endOfOlympicDay: "end-of-olympic-day",
                        dayScheduleUnit: "day-schedule-unit",
                        dayScheduleGroup: "day-schedule-group",
                        olympicDayPlaceholder: "olympic-day-placeholder"
                    },
                    scheduleItemType: {
                        athlete: "H2H_ATH",
                        couple: "H2H_COUP",
                        noc: "H2H_NOC",
                        event: "EVENT"
                    },
                    winnerCompetitorMark: "W",
                    filters: {
                        medal: "dailyScheduleMedalFilter",
                        saved: "dailyScheduleSavedFilter",
                        date: "dailyScheduleDateFilter",
                        discipline: "dailyScheduleDisciplineFilter",
                        event: "dailyScheduleEventFilter",
                        noc: "dailyScheduleNocFilter",
                        venue: "dailyScheduleVenueFilter"
                    },
                    groupEventPosition: {
                        single: "single",
                        start: "start",
                        center: "center",
                        end: "end"
                    },
                    penaltyCards: {
                        s1: "card1Y",
                        s2: "card2Y",
                        s3: "card3Y",
                        x: "card1R",
                        h: "card1R"
                    },
                    defaultCurrentDayStartIndexDelta: 7
                },
                allItems: "allItems",
                themeDisplays: {
                    desktop: "desktop",
                    mobile: "mobile",
                    tablet: "tablet"
                },
                relevantMedals: {
                    gold: "ME_GOLD",
                    silver: "ME_SILVER",
                    bronze: "ME_BRONZE"
                },
                allMedals: "all",
                icons: {
                    expand: "expand",
                    collapse: "collapse"
                },
                timeLabel: {
                    defaultProps: {
                        group: {
                            $width: 44,
                            $height: 24
                        },
                        summary: {
                            $width: 41,
                            $height: 19
                        },
                        competitionDayDivider: {
                            $width: 46.4,
                            $height: 16.4
                        }
                    }
                },
                mobileMaxResolution: 768,
                windowDimensionUpdateRateMs: 80,
                ISODateFormat: "yyyy-LL-dd"
            });
            (i = u || (u = {})).ME_GOLD = "gold", i.ME_SILVER = "silver", i.ME_BRONZE = "bronze", i.all = "all";
            var lo = e => {
                    if ("all" === e) return "all";
                    let t = u[e];
                    if (t) return t;
                    throw Error("Invalid medal key")
                },
                la = (e, t) => {
                    switch (lo(t)) {
                        case u.ME_GOLD:
                            return e.headerGoldAbbr;
                        case u.ME_SILVER:
                            return e.headerSilverAbbr;
                        case u.ME_BRONZE:
                            return e.headerBronzeAbbr
                    }
                };
            let ld = {
                    gold: "medalGold",
                    silver: "medalSilver",
                    bronze: "medalBronze",
                    all: "medalAll"
                },
                lr = e => {
                    let {
                        medalType: t,
                        title: l,
                        styles: i,
                        MedalAbbreviation: n,
                        variant: o,
                        showTitle: a,
                        isSelected: d
                    } = e, r = u[t], s = ld[r] + (d ? "_selected" : "");
                    return (0, b.BX)(ls, {
                        tx: null == i ? void 0 : i.style,
                        children: [(0, b.tZ)(ej, {
                            name: null != s ? s : "",
                            alt: l,
                            title: a && r ? l : void 0,
                            width: null == i ? void 0 : i.width,
                            height: null == i ? void 0 : i.height
                        }), n && (0, b.tZ)(lc, {
                            children: (0, b.tZ)($, {
                                variant: o,
                                children: n
                            })
                        })]
                    })
                },
                ls = (0, _.Z)(J, {
                    target: "e1uhuzof0"
                })("position:relative;display:flex;"),
                lc = (0, _.Z)("div", {
                    target: "e1uhuzof1"
                })("position:absolute;display:flex;align-items:center;justify-content:center;top:2px;left:0;right:0;bottom:0;min-width:24px;"),
                lu = e => {
                    let {
                        title: t,
                        styles: l,
                        containerStyles: i,
                        medalType: n,
                        MedalAbbreviation: o,
                        variant: a,
                        isSelected: d
                    } = e;
                    return (0, b.tZ)(J, {
                        title: t,
                        tx: i,
                        children: (0, b.tZ)(lr, {
                            medalType: n,
                            title: t,
                            MedalAbbreviation: o,
                            variant: a,
                            styles: l,
                            showTitle: !0,
                            isSelected: d
                        })
                    })
                },
                lv = e => {
                    var t, l, i, n, o, a, d, r, s, c, u, v, p, h, m, g, y, f, x, w, _, I, C, S, T;
                    let {
                        showGSBMedals: D,
                        translations: Z,
                        customTheme: E,
                        hideFinalIcon: k,
                        sortedBy: N
                    } = e;
                    return (0, b.BX)(b.HY, {
                        children: [D && (0, b.BX)(b.HY, {
                            children: [(0, b.tZ)(lu, {
                                MedalAbbreviation: Z.headerGoldAbbr,
                                title: Z.headerGold,
                                medalType: ln.relevantMedals.gold,
                                variant: null == E ? void 0 : null === (l = E.header) || void 0 === l ? void 0 : null === (t = l.medalIcon) || void 0 === t ? void 0 : t.typography,
                                styles: null == E ? void 0 : null === (n = E.header) || void 0 === n ? void 0 : null === (i = n.medalIcon) || void 0 === i ? void 0 : i.style,
                                containerStyles: { ...null == E ? void 0 : null === (a = E.header) || void 0 === a ? void 0 : null === (o = a.medalIcon) || void 0 === o ? void 0 : o.container,
                                    display: "flex"
                                },
                                isSelected: "Gold" === N
                            }), (0, b.tZ)(lu, {
                                MedalAbbreviation: Z.headerSilverAbbr,
                                title: Z.headerSilver,
                                medalType: ln.relevantMedals.silver,
                                variant: null == E ? void 0 : null === (r = E.header) || void 0 === r ? void 0 : null === (d = r.medalIcon) || void 0 === d ? void 0 : d.typography,
                                styles: null == E ? void 0 : null === (c = E.header) || void 0 === c ? void 0 : null === (s = c.medalIcon) || void 0 === s ? void 0 : s.style,
                                containerStyles: { ...null == E ? void 0 : null === (v = E.header) || void 0 === v ? void 0 : null === (u = v.medalIcon) || void 0 === u ? void 0 : u.container,
                                    display: "flex"
                                },
                                isSelected: "Silver" === N
                            }), (0, b.tZ)(lu, {
                                MedalAbbreviation: Z.headerBronzeAbbr,
                                title: Z.headerBronze,
                                medalType: ln.relevantMedals.bronze,
                                variant: null == E ? void 0 : null === (h = E.header) || void 0 === h ? void 0 : null === (p = h.medalIcon) || void 0 === p ? void 0 : p.typography,
                                styles: null == E ? void 0 : null === (g = E.header) || void 0 === g ? void 0 : null === (m = g.medalIcon) || void 0 === m ? void 0 : m.style,
                                containerStyles: { ...null == E ? void 0 : null === (f = E.header) || void 0 === f ? void 0 : null === (y = f.medalIcon) || void 0 === y ? void 0 : y.container,
                                    display: "flex"
                                },
                                isSelected: "Bronze" === N
                            })]
                        }), (0, b.tZ)(lu, {
                            title: Z.headerTotal,
                            medalType: ln.allMedals,
                            variant: null == E ? void 0 : null === (w = E.header) || void 0 === w ? void 0 : null === (x = w.medalIcon) || void 0 === x ? void 0 : x.typography,
                            styles: null == E ? void 0 : null === (I = E.header) || void 0 === I ? void 0 : null === (_ = I.medalIcon) || void 0 === _ ? void 0 : _.style,
                            containerStyles: { ...null == E ? void 0 : null === (S = E.header) || void 0 === S ? void 0 : null === (C = S.medalIcon) || void 0 === C ? void 0 : C.container,
                                display: "flex"
                            },
                            isSelected: "Total Medals" === N || "Total" === N
                        }), !k && (0, b.tZ)(J, {
                            tx: null == E ? void 0 : null === (T = E.header) || void 0 === T ? void 0 : T.finalIcon
                        })]
                    })
                };

            function lp() {
                let e = (0, ek._)(["\n      display: flex;\n      min-width: ", ";\n    "]);
                return lp = function() {
                    return e
                }, e
            }
            let lh = (0, _.Z)(J, {
                    target: "ezy2i750"
                })("display:flex;"),
                lm = (0, _.Z)("div", {
                    target: "ezy2i751"
                })(e => e.$hasIndex && e.$indexWidth && (0, W.iv)(lp(), e.$indexWidth));
            var lg = e => {
                let {
                    mark: t,
                    hasIndex: l,
                    indexWidth: i,
                    style: n
                } = e, o = null == t ? void 0 : t[0], a = null == t ? void 0 : t[1], d = null == o ? void 0 : o.includes("[");
                return (0, b.BX)(lh, {
                    tx: n,
                    children: [(0, b.tZ)($, {
                        children: o
                    }), !d && l && (0, b.tZ)(lm, {
                        $hasIndex: l,
                        $indexWidth: i,
                        children: (0, b.tZ)($, {
                            superscript: !0,
                            children: a
                        })
                    })]
                })
            };
            let ly = (e, t) => 1 === t ? e.goldMedalEvent : 2 === t ? e.silverMedalEvent : 3 === t ? e.bronzeMedalEvent : null,
                lf = (e, t) => t === ln.relevantMedals.gold ? e.commonGold : t === ln.relevantMedals.silver ? e.commonSilver : t === ln.relevantMedals.bronze ? e.commonBronze : "",
                lx = (e, t) => "s1" === t ? e.yellowCard1Tooltip : "s2" === t ? e.yellowCard2Tooltip : "s3" === t ? e.yellowCard3Tooltip : "x" === t || "X" === t ? e.redCardTooltip : "";
            var lb = e => {
                var t, l, i, n, o, a, d, r, s, c, u, v, p, h, m, g, y, f, x, w, _, I;
                let {
                    index: C,
                    theme: S,
                    event: T,
                    results: D,
                    translations: Z,
                    columns: E,
                    winnerStyle: k,
                    isWinner: N
                } = e, {
                    resultCode: R,
                    round: M,
                    irmDescription: F,
                    irm: O,
                    mark: B,
                    detailedMark: L,
                    additionalMark: z,
                    penalty: j
                } = null != D ? D : {}, {
                    medalType: A,
                    medalAbbreviation: W
                } = lN({
                    results: D,
                    translations: Z
                }), H = (e, t) => "detailedMark-".concat(e, "-").concat(t), G = lS(null !== (y = T.disciplineCode) && void 0 !== y ? y : "");
                return (0, b.BX)(l_, {
                    columns: E,
                    tx: null == S ? void 0 : S.resultsContainer,
                    className: "results ".concat(N ? "results--winner" : ""),
                    children: [E.hasMedal && (0, b.tZ)("div", {
                        children: A && W && (0, b.tZ)(lr, {
                            medalType: A,
                            title: lf(Z, A),
                            MedalAbbreviation: W,
                            variant: null == S ? void 0 : null === (t = S.medalIcon) || void 0 === t ? void 0 : t.typography,
                            styles: null == S ? void 0 : S.medalIcon
                        })
                    }), E.hasAdditionalResult && (0, b.tZ)(K, {
                        variant: null == S ? void 0 : null === (l = S.additionalResult) || void 0 === l ? void 0 : l.typography,
                        tx: null == S ? void 0 : null === (i = S.additionalResult) || void 0 === i ? void 0 : i.style,
                        children: 0 === C && T.additionalResult
                    }), E.hasIrm && (0, b.tZ)(K, {
                        variant: null !== (f = null == k ? void 0 : k.typography) && void 0 !== f ? f : null == S ? void 0 : null === (n = S.irm) || void 0 === n ? void 0 : n.typography,
                        title: null != F ? F : void 0,
                        tx: { ...null == S ? void 0 : null === (o = S.irm) || void 0 === o ? void 0 : o.style,
                            ...null == k ? void 0 : k.style
                        },
                        children: O
                    }), E.hasResultCode && (0, b.tZ)(K, {
                        variant: null !== (x = null == k ? void 0 : k.typography) && void 0 !== x ? x : null == S ? void 0 : null === (a = S.resultCode) || void 0 === a ? void 0 : a.typography,
                        tx: { ...null == S ? void 0 : null === (d = S.resultCode) || void 0 === d ? void 0 : d.style,
                            ...null == k ? void 0 : k.style
                        },
                        children: R
                    }), E.hasRound && (0, b.tZ)(K, {
                        variant: null !== (w = null == k ? void 0 : k.typography) && void 0 !== w ? w : null == S ? void 0 : null === (r = S.round) || void 0 === r ? void 0 : r.typography,
                        tx: { ...null == S ? void 0 : null === (s = S.round) || void 0 === s ? void 0 : s.style,
                            ...null == k ? void 0 : k.style
                        },
                        children: M
                    }), E.hasMark && (0, b.tZ)(K, {
                        variant: null !== (_ = null == k ? void 0 : k.typography) && void 0 !== _ ? _ : null == S ? void 0 : null === (c = S.score) || void 0 === c ? void 0 : c.typography,
                        tx: { ...null == S ? void 0 : null === (u = S.score) || void 0 === u ? void 0 : u.style,
                            ...null == k ? void 0 : k.style
                        },
                        bold: G.hasBoldMark,
                        children: B
                    }), E.detailedMarksCount && [...Array(E.detailedMarksCount)].map((e, t) => {
                        var l, i, n;
                        return (0, b.tZ)(lg, {
                            mark: null == L ? void 0 : L[t],
                            hasIndex: G.hasDetailedMarksIndex,
                            indexWidth: null == S ? void 0 : null === (l = S.resultsContainer) || void 0 === l ? void 0 : l.detailedScoreIndexWidth,
                            style: { ...null == S ? void 0 : null === (i = S.detailedScore) || void 0 === i ? void 0 : i.style,
                                ...null == k ? void 0 : k.style
                            }
                        }, H(null !== (n = T.id) && void 0 !== n ? n : "", t))
                    }), E.hasAdditionalMark && (0, b.tZ)(K, {
                        variant: null !== (I = null == k ? void 0 : k.typography) && void 0 !== I ? I : null == S ? void 0 : null === (v = S.additionalScore) || void 0 === v ? void 0 : v.typography,
                        tx: { ...null == S ? void 0 : null === (p = S.additionalScore) || void 0 === p ? void 0 : p.style,
                            ...null == k ? void 0 : k.style
                        },
                        hasRoundBrackets: !0,
                        children: z
                    }), E.hasPenalty && (0, b.tZ)(ej, {
                        name: lR(null != j ? j : ""),
                        alt: lx(Z, j),
                        title: lx(Z, j),
                        width: null == S ? void 0 : null === (h = S.penaltyIcon) || void 0 === h ? void 0 : h.width,
                        height: null == S ? void 0 : null === (m = S.penaltyIcon) || void 0 === m ? void 0 : m.height,
                        tx: null == S ? void 0 : null === (g = S.penaltyIcon) || void 0 === g ? void 0 : g.style
                    }), E.hasPenalty && (0, b.tZ)(K, {
                        children: z
                    })]
                })
            };
            let lw = (e, t) => e && t ? "".concat(t, " ") : "",
                l_ = (0, _.Z)("div", {
                    target: "evx4z5e0"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...null == t ? void 0 : t.container
                    }
                }, " ", e => {
                    let {
                        columns: t,
                        tx: l
                    } = e, {
                        hasMedal: i,
                        hasAdditionalResult: n,
                        hasIrm: o,
                        hasResultCode: a,
                        hasRound: d,
                        hasMark: r,
                        hasAdditionalMark: s,
                        hasPenalty: c,
                        detailedMarksCount: u
                    } = t, v = "";
                    if (v += lw(i, null == l ? void 0 : l.medalIconWidth) + lw(n, null == l ? void 0 : l.additionalResultWidth) + lw(o, null == l ? void 0 : l.irmWidth) + lw(a, null == l ? void 0 : l.resultCodeWidth) + lw(d, null == l ? void 0 : l.roundWidth) + lw(r, null == l ? void 0 : l.scoreWidth), u)
                        for (let e = 0; e < u; e += 1) v += lw(!0, null == l ? void 0 : l.detailedScoreWidth);
                    if (v += lw(s, null == l ? void 0 : l.additionalScoreWidth) + lw(c, null == l ? void 0 : l.penaltyWidth)) return {
                        display: "grid",
                        gridTemplateColumns: v
                    }
                });
            (n = v || (v = {})).badminton = "BDM", n.basketball3x3 = "BK3", n.boxing = "BOX", n.breaking = "BKG", n.football = "FBL", n.hockey = "HOC", n.judo = "JUD", n.tennis = "TEN", n.waterPolo = "WPO", n.wrestling = "WRE";
            let lI = [{
                    type: "BOX",
                    result: {
                        hasIrm: !0,
                        hasResultCode: !0,
                        hasRound: !0,
                        hasMark: !0
                    }
                }, {
                    type: "WRE",
                    result: {
                        hasIrm: !0,
                        hasResultCode: !0,
                        hasMark: !0
                    }
                }, {
                    type: "JUD",
                    result: {
                        hasIrm: !0,
                        hasMark: !0,
                        hasPenalty: !0
                    }
                }, {
                    type: "BDM",
                    result: {
                        hasIrm: !0,
                        hasResultCode: !0,
                        hasMark: !0,
                        hasBoldMark: !0,
                        detailedMarksCount: 0
                    }
                }, {
                    type: "TEN",
                    result: {
                        hasIrm: !0,
                        detailedMarksCount: 0,
                        hasDetailedMarksIndex: !0
                    }
                }, {
                    type: "BKG",
                    result: {
                        hasIrm: !0,
                        hasMark: !0,
                        hasAdditionalMark: !0
                    }
                }, {
                    type: "HOC",
                    result: {
                        hasIrm: !0,
                        hasMark: !0,
                        hasAdditionalMark: !0
                    }
                }, {
                    type: "FBL",
                    result: {
                        hasAdditionalResult: !0,
                        hasIrm: !0,
                        hasMark: !0,
                        hasAdditionalMark: !0
                    }
                }, {
                    type: "BK3",
                    result: {
                        hasAdditionalResult: !0,
                        hasIrm: !0,
                        hasMark: !0
                    }
                }, {
                    type: "WPO",
                    result: {
                        hasAdditionalResult: !0,
                        hasIrm: !0,
                        hasMark: !0
                    }
                }],
                lC = {
                    hasIrm: !0,
                    hasMark: !0
                },
                lS = e => {
                    var t, l;
                    return null !== (l = null === (t = lI.find(t => t.type === e)) || void 0 === t ? void 0 : t.result) && void 0 !== l ? l : lC
                },
                lT = (e, t) => e < t ? -1 : e > t ? 1 : 0,
                lD = e => {
                    let {
                        status: t,
                        translations: l
                    } = e;
                    switch (t) {
                        case ln.status.cancelled:
                            return l.eventCancelled;
                        case ln.status.delayed:
                            return l.eventDelayed;
                        case ln.status.interrupted:
                            return l.eventInterrupted;
                        case ln.status.rescheduled:
                            return l.eventRescheduled;
                        default:
                            return l.eventPostponed
                    }
                },
                lZ = new Set([ln.status.postponed, ln.status.cancelled, ln.status.delayed, ln.status.interrupted, ln.status.rescheduled]),
                lE = e => lZ.has(null != e ? e : ""),
                lk = e => e === ln.dailySchedule.scheduleItemType.athlete || e === ln.dailySchedule.scheduleItemType.couple || e === ln.dailySchedule.scheduleItemType.noc,
                lN = e => {
                    var t;
                    let {
                        results: l,
                        translations: i
                    } = e, n = {
                        [ln.relevantMedals.gold]: i.medalGold,
                        [ln.relevantMedals.silver]: i.medalSilver,
                        [ln.relevantMedals.bronze]: i.medalBronze
                    }, o = null !== (t = null == l ? void 0 : l.medalType) && void 0 !== t ? t : "", a = n[o];
                    return {
                        medalType: o,
                        medalAbbreviation: a
                    }
                },
                lR = e => {
                    var t;
                    return null !== (t = ln.dailySchedule.penaltyCards[null == e ? void 0 : e.toLowerCase()]) && void 0 !== t ? t : ""
                },
                lM = (e, t) => !!e && t && t.length > 0,
                lF = (e, t) => {
                    let l = {};
                    return lM(t.hasIrm, e.irm) && (l.hasIrm = !0), lM(t.hasResultCode, e.resultCode) && (l.hasResultCode = !0), lM(t.hasRound, e.round) && (l.hasRound = !0), lM(t.hasMark, e.mark) && (l.hasMark = !0), t.hasBoldMark && (l.hasBoldMark = !0), void 0 !== t.detailedMarksCount && e.detailedMark && (l.detailedMarksCount = e.detailedMark.length), t.hasDetailedMarksIndex && (l.hasDetailedMarksIndex = !0), lM(t.hasAdditionalMark, e.additionalMark) && (l.hasAdditionalMark = !0), lM(t.hasPenalty, e.penalty) && (l.hasPenalty = !0), l
                },
                lO = e => {
                    var t;
                    let {
                        event: l,
                        translations: i
                    } = e, n = {};
                    return null === (t = l.competitors) || void 0 === t || t.forEach(e => {
                        var t;
                        let {
                            results: o
                        } = e, {
                            medalType: a,
                            medalAbbreviation: d
                        } = lN({
                            results: o,
                            translations: i
                        }), r = lS(null !== (t = l.disciplineCode) && void 0 !== t ? t : "");
                        a && d && (n.hasMedal = !0), r.hasAdditionalResult && l.additionalResult && (n.hasAdditionalResult = !0), o && Object.assign(n, lF(o, r))
                    }), n
                },
                lB = e => {
                    var t;
                    let {
                        event: l,
                        results: i,
                        theme: n
                    } = e, o = l.status === ln.status.finished && (null == i ? void 0 : i.winnerLoserTie) === ln.dailySchedule.winnerCompetitorMark, a = o ? null == n ? void 0 : null === (t = n.winner) || void 0 === t ? void 0 : t.text : {};
                    return {
                        isWinner: o,
                        winnerStyle: a
                    }
                },
                lL = e => "object" == typeof e && null !== e && "end-of-olympic-day" === e.type,
                lz = e => "object" == typeof e && null !== e && "competition-day-divider" === e.type,
                lj = e => "object" == typeof e && null !== e && "olympic-day-placeholder" === e.type,
                lA = e => e && "type" in e && e.type && (Object.values(ln.dailySchedule.knownRowTypes).some(t => t === e.type) || lW(e.type)) ? e.type : (null == e ? void 0 : e.unitsCount) ? ln.dailySchedule.knownRowTypes.dayScheduleGroup : ln.dailySchedule.knownRowTypes.dayScheduleUnit,
                lW = e => e.startsWith("custom-row-"),
                lH = e => "object" == typeof e && !!(null == e ? void 0 : e.type) && lW(e.type),
                lG = (e, t) => !!t && e in t,
                lX = (e, t) => {
                    var l, i, n;
                    return null !== (n = null == e ? void 0 : e[t]) && void 0 !== n ? n : null == e ? void 0 : null === (i = e.units) || void 0 === i ? void 0 : null === (l = i[0]) || void 0 === l ? void 0 : l[t]
                },
                lP = e => lX(e, "startDate"),
                l$ = (e, t) => {
                    var l, i, n, o, a, d, r, s, c, u, v;
                    return e.isLive || (null === (l = e.units) || void 0 === l ? void 0 : l.some(e => e.liveFlag)) ? null === (s = t.event) || void 0 === s ? void 0 : null === (r = s.mainRow) || void 0 === r ? void 0 : null === (d = r.status) || void 0 === d ? void 0 : d.live : (null === (i = e.units) || void 0 === i ? void 0 : i.every(e => e.status === ln.status.finished || e.status === ln.status.cancelled)) ? null === (v = t.event) || void 0 === v ? void 0 : null === (u = v.mainRow) || void 0 === u ? void 0 : null === (c = u.status) || void 0 === c ? void 0 : c.finished : null === (a = t.event) || void 0 === a ? void 0 : null === (o = a.mainRow) || void 0 === o ? void 0 : null === (n = o.status) || void 0 === n ? void 0 : n.scheduled
                },
                lU = (e, t, l) => {
                    var i, n, o;
                    if ("mouse" === l.current) return;
                    let a = null === (o = t.current) || void 0 === o ? void 0 : null === (n = o.children.item(0)) || void 0 === n ? void 0 : null === (i = n.firstElementChild) || void 0 === i ? void 0 : i.firstElementChild;
                    if (!a) return;
                    let d = e.target;
                    for (let e of a.children)
                        if (e.contains(d)) {
                            let t = e.children.item(0),
                                l = null == t ? void 0 : t.firstElementChild;
                            if ((null == l ? void 0 : l.tagName) === "A" && "BUTTON" === d.tagName) return;
                            d.scrollIntoView({
                                block: "center"
                            })
                        }
                },
                lV = (e, t) => {
                    let l = t ? "MMM" : "MMMM";
                    switch (e) {
                        case "FRA":
                        case "ITA":
                        case "RUS":
                        case "ENG":
                        case "SPA":
                        default:
                            return "d ".concat(l);
                        case "POR":
                            return t ? "d ".concat(l) : "d 'de' ".concat(l);
                        case "DEU":
                            return t ? "d. LLL." : "d. ".concat(l);
                        case "JPN":
                        case "CHI":
                            return "".concat(l, "月d日");
                        case "KOR":
                            return "L월 d일"
                    }
                },
                lq = () => {
                    let [e, t] = (0, w.useState)(!1), l = (0, w.useRef)(null), i = (0, w.useCallback)(() => {
                        l.current && clearTimeout(l.current), t(!1), l.current = setTimeout(() => {
                            t(!0)
                        }, 500)
                    }, []);
                    return (0, w.useEffect)(() => () => {
                        l.current && clearTimeout(l.current)
                    }, []), {
                        isScrollStable: e,
                        resetStabilityTimer: i
                    }
                },
                lY = () => {
                    let [e, t] = (0, w.useState)(!0);
                    return (0, w.useEffect)(() => {
                        t(!1)
                    }, []), e
                },
                lJ = (e, t) => e !== t,
                lK = (e, t, l) => t.startIndex + Math.max(0, e.slice(t.startIndex, t.startIndex + l).findIndex(lz));
            var lQ = e => {
                let {
                    rows: t,
                    onCompetitionDayChange: l,
                    currentDayStartIndexDelta: i = ln.dailySchedule.defaultCurrentDayStartIndexDelta,
                    currentCompetitionDay: n
                } = e, o = (0, w.useRef)(""), a = (0, w.useRef)(null), d = (0, w.useRef)(!1), {
                    isScrollStable: r,
                    resetStabilityTimer: s
                } = lq(), c = lY();
                return (0, w.useEffect)(() => {
                    n && !c && null === a.current && (null == l || l(n), a.current = n)
                }, [c, n, l]), {
                    handleOnItemsRendered: (0, w.useCallback)(e => {
                        if (s(), c || null === a.current) return;
                        let n = lP(t.slice(lK(t, e, i), e.endIndex).find(lP));
                        if (!n) return;
                        let u = Y.ou.fromISO(n, {
                            setZone: !0
                        });
                        if (!u.isValid) return;
                        let v = u.toFormat(ln.ISODateFormat);
                        if (!d.current && !r) {
                            let e = Y.ou.fromISO(a.current);
                            if (!e.isValid || u < e) return
                        }
                        r && (d.current = !0), lJ(v, o.current) && (null == l || l(n), o.current = v)
                    }, [t, l, i, c, s, r]),
                    initialCurrentDay: a.current,
                    isScrollStable: r
                }
            };
            let l0 = e => {
                let {
                    onElementVisible: t,
                    resetSubscriptionKey: l,
                    enable: i = !1
                } = e, n = (0, w.useRef)(null), o = (0, w.useRef)(t);
                o.current = t;
                let a = !!i;
                return (0, w.useEffect)(() => {
                    if (!n.current || !a) return;
                    let e = new IntersectionObserver(e => {
                        if (e.some(e => e.intersectionRatio >= .7)) {
                            var t;
                            null === (t = o.current) || void 0 === t || t.call(o)
                        }
                    }, {
                        threshold: .7
                    });
                    return e.observe(n.current), () => {
                        e.disconnect()
                    }
                }, [a, l]), n
            };
            var l1 = l(74011),
                l2 = l(63811),
                l4 = l.n(l2),
                l8 = e => l4()(e);
            let l3 = (e, t) => Object.entries(t).reduce((e, t) => {
                let [l, i] = t;
                return e.replace(":".concat(l), i.toString())
            }, e);
            var l5 = (e, t, l) => {
                let {
                    substitutions: i,
                    urls: n,
                    debug: o
                } = l, a = n[e];
                if (!a) return console.error("URL generation strategy not found for urlType: ".concat(e)), "";
                try {
                    let n = a(t, l8);
                    if (!n) return "";
                    let d = i ? l3(n, i) : n;
                    return o && (console.log("URL Generation Details:"), console.log("URL Type:", e), console.log("Data:", t), console.log("URL Config:", l), console.log("Generated URL:", d)), d
                } catch (l) {
                    return console.error("Error in URL generation", {
                        error: l,
                        urlType: e,
                        data: t,
                        urlSubstitutions: i
                    }), ""
                }
            };
            let l6 = (0, _.Z)(Q, B, {
                    target: "eykk3ac0"
                })(e => {
                    let {
                        $status: t
                    } = e;
                    return { ...t
                    }
                }),
                l7 = (0, _.Z)("div", B, {
                    target: "eykk3ac1"
                })(e => {
                    let {
                        $isLive: t,
                        tx: l
                    } = e;
                    if (t) return { ...l
                    }
                });
            var l9 = e => {
                var t, l, i, n, o, a, d, r, s, c, u, v, p, h, m, g, y, f;
                let {
                    event: x,
                    translations: _,
                    eventTarget: I,
                    onEventClick: C,
                    savedEventUnits: S,
                    urlConfig: T,
                    theme: D
                } = e, Z = (0, w.useCallback)(() => {
                    C(x)
                }, [x, C]), E = T && l5("event", x, T), {
                    disciplineName: k,
                    eventUnitName: N,
                    liveFlag: R,
                    medalFlag: M,
                    status: F,
                    hideStartDate: O,
                    startText: B,
                    startDate: L,
                    scheduleItemType: z,
                    id: j,
                    unitNum: A
                } = x;
                return (0, b.BX)(l6, {
                    "data-unit-rsc-code": j,
                    as: E ? void 0 : "div",
                    tx: null === (t = D.event) || void 0 === t ? void 0 : t.container,
                    $status: F === ln.status.finished || F === ln.status.cancelled ? null === (h = D.event) || void 0 === h ? void 0 : null === (p = h.status) || void 0 === p ? void 0 : p.finished : R ? null === (g = D.event) || void 0 === g ? void 0 : null === (m = g.status) || void 0 === m ? void 0 : m.live : null === (f = D.event) || void 0 === f ? void 0 : null === (y = f.status) || void 0 === y ? void 0 : y.scheduled,
                    href: E && "" !== E ? E : void 0,
                    target: E ? I : void 0,
                    title: E ? (0, l1.wT)(_.eventLinkTitle, [{
                        placeholder: "{discipline-name}",
                        replacement: null != k ? k : ""
                    }, {
                        placeholder: "{event-unit-name}",
                        replacement: null != N ? N : ""
                    }]) : void 0,
                    className: "unit ".concat(R ? "unit--live" : ""),
                    children: [(0, b.tZ)(l7, {
                        tx: null === (l = D.event) || void 0 === l ? void 0 : l.indicator,
                        $isLive: R,
                        className: "side-bar-indicator ".concat(R ? "side-bar-indicator--live" : "")
                    }), (0, b.BX)(J, {
                        tx: {
                            display: "flex",
                            flexDirection: "column",
                            width: "100%"
                        },
                        children: [(0, b.BX)(J, {
                            tx: null === (n = D.event) || void 0 === n ? void 0 : null === (i = n.mainRow) || void 0 === i ? void 0 : i.container,
                            onClick: Z,
                            "data-testid": "dailyScheduleEvent",
                            children: [(0, b.tZ)(ih, {
                                hasMedalFlag: 0 !== M,
                                medalFlag: M,
                                hasStatus: lE(F),
                                statusTitle: lD({
                                    status: null != F ? F : "",
                                    translations: _
                                }),
                                hideStartDate: null != O && O,
                                startText: null != B ? B : "",
                                theme: null === (a = D.event) || void 0 === a ? void 0 : null === (o = a.mainRow) || void 0 === o ? void 0 : o.summary,
                                startDate: null != L ? L : "",
                                translations: _,
                                isLive: R
                            }), (0, b.tZ)(ir, {
                                isLive: R,
                                isGroup: !1,
                                title: null != k ? k : "",
                                subTitle: null != N ? N : "",
                                theme: null === (r = D.event) || void 0 === r ? void 0 : null === (d = r.mainRow) || void 0 === d ? void 0 : d.details,
                                unitNum: A ? (0, l1.wT)(_.matchNumber, [{
                                    placeholder: "{unitNum}",
                                    replacement: A
                                }]) : null,
                                translations: _
                            }), (0, b.tZ)(iv, {
                                event: x,
                                theme: null === (c = D.event) || void 0 === c ? void 0 : null === (s = c.mainRow) || void 0 === s ? void 0 : s.icons,
                                translations: _,
                                savedEventUnits: S
                            })]
                        }), (0, b.tZ)(J, {
                            tx: null == D ? void 0 : null === (u = D.event) || void 0 === u ? void 0 : u.competitorsContainer,
                            children: (0, b.tZ)(iu, {
                                event: x,
                                theme: null === (v = D.event) || void 0 === v ? void 0 : v.competitors,
                                isHeadToHead: lk(null != z ? z : ""),
                                translations: _
                            })
                        })]
                    })]
                })
            };
            let ie = () => (0, b.tZ)("div", {
                    style: {
                        height: "1px",
                        visibility: "hidden"
                    }
                }),
                it = e => {
                    let {
                        children: t,
                        width: l,
                        height: i
                    } = e;
                    return (0, b.tZ)("div", {
                        style: {
                            width: l,
                            minHeight: i
                        },
                        children: t
                    })
                },
                il = e => {
                    let {
                        width: t,
                        height: l
                    } = e;
                    return (0, b.tZ)("div", {
                        style: {
                            width: t,
                            height: l
                        }
                    })
                },
                ii = (e, t, l) => {
                    let i = e.type;
                    return (0, b.tZ)(it, {
                        width: e.width,
                        height: e.height,
                        children: (() => {
                            if (!l || !lG(i, l)) return (0, b.tZ)(ie, {});
                            let n = l[i];
                            return e.clientOnly && !t ? (0, b.tZ)(il, { ...e
                            }) : n ? (0, b.tZ)(n, { ...e
                            }) : (0, b.tZ)(ie, {})
                        })()
                    })
                },
                io = w.memo(e => {
                    var t, l, i, n, o, a, d, r, s, c, u, v, p, h, m, g;
                    let {
                        style: y,
                        row: f,
                        onExpandGroup: x,
                        onLastRowVisible: w,
                        onPlaceholderRowVisible: _,
                        savedEventUnits: I,
                        theme: C,
                        translations: S,
                        urlConfig: T,
                        nextEventStartDate: D,
                        isLastRow: Z,
                        customRowRenderers: E,
                        expandableEntities: k,
                        defaultIsExpanded: N,
                        locale: R,
                        ...M
                    } = e, F = lA(f), O = l0({
                        resetSubscriptionKey: F,
                        enable: Z || "olympic-day-placeholder" === F,
                        onElementVisible: () => {
                            if (lj(f)) try {
                                null == _ || _(f)
                            } catch (e) {
                                console.error("onPlaceholderRowVisible", e)
                            }
                            if (Z) try {
                                null == w || w()
                            } catch (e) {
                                console.error("onLastRowVisible", e)
                            }
                        }
                    }), B = tX();
                    return lH(f) ? (0, b.tZ)(li, {
                        children: (0, b.tZ)(ia, {
                            ref: O,
                            $dailyTheme: C,
                            "data-row-type": F,
                            style: y,
                            children: ii(f, !B, E)
                        })
                    }) : (0, b.BX)(ia, {
                        ref: O,
                        $dailyTheme: C,
                        "data-row-type": F,
                        style: y,
                        children: [lL(f) && (0, b.BX)(J, {
                            tx: null === (l = C.text) || void 0 === l ? void 0 : null === (t = l.endOfOlympicDay) || void 0 === t ? void 0 : t.style,
                            className: "olympic-day-divider",
                            children: [(0, b.tZ)(K, {
                                variant: null === (n = C.text) || void 0 === n ? void 0 : null === (i = n.endOfOlympicDay) || void 0 === i ? void 0 : i.typography,
                                children: S.endOfOlympicDay
                            }), (0, b.tZ)(J, {
                                tx: C.olympicDayDivider
                            })]
                        }), lz(f) && D && (0, b.tZ)(J, {
                            tx: null === (a = C.text) || void 0 === a ? void 0 : null === (o = a.competitionDay) || void 0 === o ? void 0 : o.style,
                            className: "competition-day-divider",
                            children: (0, b.tZ)(K, {
                                variant: null === (r = C.text) || void 0 === r ? void 0 : null === (d = r.competitionDay) || void 0 === d ? void 0 : d.typography,
                                children: (0, b.tZ)(tP, {
                                    time: D,
                                    renderMode: "first-render",
                                    format: lV(null != R ? R : "ENG", !1),
                                    $minWidth: null !== (m = null === (u = C.text) || void 0 === u ? void 0 : null === (c = u.competitionDay) || void 0 === c ? void 0 : null === (s = c.style) || void 0 === s ? void 0 : s.minWidth) && void 0 !== m ? m : ln.timeLabel.defaultProps.competitionDayDivider.$width,
                                    $minHeight: null !== (g = null === (h = C.text) || void 0 === h ? void 0 : null === (p = h.competitionDay) || void 0 === p ? void 0 : null === (v = p.style) || void 0 === v ? void 0 : v.minHeight) && void 0 !== g ? g : ln.timeLabel.defaultProps.competitionDayDivider.$height,
                                    setZone: !0,
                                    locale: R
                                })
                            })
                        }), lj(f) && (0, b.tZ)(id, {
                            tx: C.rowPlaceholder
                        }), !lj(f) && !lL(f) && !lz(f) && f && (0, b.tZ)(b.HY, {
                            children: f.unitsCount ? (0, b.tZ)(ib, {
                                group: f,
                                medalFlag: f.medalFlag,
                                expandableEntities: k,
                                defaultIsExpanded: N,
                                onExpandGroup: x,
                                savedEventUnits: I,
                                urlConfig: T,
                                theme: C,
                                translations: S,
                                ...M
                            }) : (0, b.tZ)(l9, {
                                event: f,
                                savedEventUnits: I,
                                theme: C,
                                translations: S,
                                urlConfig: T,
                                ...M
                            })
                        })]
                    })
                });
            io.displayName = "Row";
            let ia = (0, _.Z)(J, B, {
                    target: "e8opopp0"
                })("width:100%;&[data-row-type='competition-day-divider']{", e => {
                    let {
                        $dailyTheme: t
                    } = e;
                    return (0, W.iv)("padding-top:32px;height:", t.listRows.rowHeightCompetitionDayDivider, "px;")
                }, ";}&[data-row-type='end-of-olympic-day']{", e => {
                    let {
                        $dailyTheme: t
                    } = e;
                    return (0, W.iv)("height:", t.listRows.rowHeightOlympicDayDivider, "px;")
                }, ";}&[data-row-type='olympic-day-placeholder']{", e => {
                    let {
                        $dailyTheme: t
                    } = e;
                    return (0, W.iv)("display:flex;flex-flow:row nowrap;align-items:stretch;height:", t.listRows.rowHeightPlaceholder, "px;padding-bottom:", t.listRows.rowGroupGap, "px;")
                }, ";}&[data-row-type='day-schedule-unit']{", e => {
                    let {
                        $dailyTheme: t
                    } = e;
                    return (0, W.iv)("padding-bottom:", t.listRows.rowUnitGap, "px;")
                }, ";}&[data-row-type='day-schedule-group']{", e => {
                    let {
                        $dailyTheme: t
                    } = e;
                    return (0, W.iv)("padding-bottom:", t.listRows.rowGroupGap, "px;")
                }, ";}"),
                id = (0, _.Z)(J, {
                    target: "e8opopp1"
                })("@keyframes skeleton-loading{0%{background-color:#e1e1e1;}100%{background-color:#d1d1d1;}}animation:skeleton-loading 1s linear infinite alternate;");
            var ir = e => {
                    var t, l, i, n, o, a, d;
                    let {
                        isLive: r,
                        isGroup: s,
                        title: c,
                        subTitle: u,
                        unitNum: v,
                        translations: p,
                        theme: h
                    } = e;
                    return (0, b.BX)(J, {
                        tx: null == h ? void 0 : h.container,
                        className: "details ".concat(r ? "details--live" : ""),
                        children: [(0, b.BX)(J, {
                            tx: null == h ? void 0 : h.disciplineContainer,
                            children: [r && !s && (0, b.tZ)(ej, {
                                name: "dailyScheduleLiveDot",
                                alt: null == p ? void 0 : p.liveIcon,
                                title: null == p ? void 0 : p.liveIcon,
                                width: null == h ? void 0 : null === (t = h.liveDotIcon) || void 0 === t ? void 0 : t.width,
                                height: null == h ? void 0 : null === (l = h.liveDotIcon) || void 0 === l ? void 0 : l.height,
                                tx: null == h ? void 0 : null === (i = h.liveDotIcon) || void 0 === i ? void 0 : i.style
                            }), (0, b.tZ)(K, {
                                truncate: !0,
                                variant: null == h ? void 0 : null === (n = h.discipline) || void 0 === n ? void 0 : n.typography,
                                className: "discipline-title ".concat(r ? "discipline-title--live" : ""),
                                tx: null == h ? void 0 : null === (o = h.discipline) || void 0 === o ? void 0 : o.style,
                                children: c
                            })]
                        }), (0, b.BX)(K, {
                            truncate: "multi",
                            variant: null == h ? void 0 : null === (a = h.eventUnit) || void 0 === a ? void 0 : a.typography,
                            className: "discipline-sub-title ".concat(r ? "discipline-sub-title--live" : ""),
                            tx: null == h ? void 0 : null === (d = h.eventUnit) || void 0 === d ? void 0 : d.style,
                            children: [u, " ", v]
                        })]
                    })
                },
                is = e => {
                    var t;
                    let {
                        event: l,
                        isH2HNocEvent: i,
                        columns: n,
                        translations: o,
                        theme: a
                    } = e;
                    return (0, b.tZ)(J, {
                        tx: null == a ? void 0 : a.container,
                        children: null === (t = l.competitors) || void 0 === t ? void 0 : t.map((e, t) => {
                            var d, r, s, c, u, v, p, h, m, g, y, f, x, w, _, I, C, S, T, D, Z, E, k;
                            let {
                                code: N,
                                name: R,
                                noc: M,
                                results: F
                            } = e, O = "".concat(l.eventId, " ").concat(N, " ").concat(R, " ").concat(M);
                            if (null == F ? void 0 : F.byeResultCode) return (0, b.tZ)(K, {
                                variant: null == a ? void 0 : null === (I = a.byeResultCode) || void 0 === I ? void 0 : I.typography,
                                tx: null == a ? void 0 : null === (C = a.byeResultCode) || void 0 === C ? void 0 : C.style,
                                children: F.byeResultCode
                            }, O + F.byeResultCode);
                            let {
                                isWinner: B,
                                winnerStyle: L
                            } = lB({
                                event: l,
                                results: F,
                                theme: a
                            });
                            return (0, b.BX)(J, {
                                tx: null == a ? void 0 : a.row,
                                className: "h2h-competitor ".concat(l.liveFlag ? "h2h-competitor--live" : "", " ").concat(B ? "h2h-competitor--winner" : ""),
                                children: [(0, b.BX)(J, {
                                    tx: null == a ? void 0 : a.iconNocNameContainer,
                                    children: [(0, b.tZ)(J, {
                                        tx: null == a ? void 0 : a.nocIconContainer,
                                        children: (0, b.tZ)(ej, {
                                            type: "flag",
                                            name: null !== (S = null == M ? void 0 : M.toLowerCase()) && void 0 !== S ? S : "",
                                            alt: (0, l1.wT)(null !== (T = o.flagIconTitle) && void 0 !== T ? T : "", [{
                                                placeholder: "{noc-name}",
                                                replacement: null != M ? M : ""
                                            }]),
                                            title: (0, l1.wT)(null !== (D = o.flagIconTitle) && void 0 !== D ? D : "", [{
                                                placeholder: "{noc-name}",
                                                replacement: null != M ? M : ""
                                            }]),
                                            width: null == a ? void 0 : null === (d = a.flagIcon) || void 0 === d ? void 0 : d.width,
                                            height: null == a ? void 0 : null === (r = a.flagIcon) || void 0 === r ? void 0 : r.height,
                                            tx: null == a ? void 0 : null === (s = a.flagIcon) || void 0 === s ? void 0 : s.style
                                        })
                                    }), i && (0, b.tZ)(K, {
                                        variant: null !== (Z = null == L ? void 0 : L.typography) && void 0 !== Z ? Z : null == a ? void 0 : null === (c = a.description) || void 0 === c ? void 0 : c.typography,
                                        tx: { ...null == a ? void 0 : null === (u = a.description) || void 0 === u ? void 0 : u.style,
                                            ...null == L ? void 0 : L.style
                                        },
                                        children: R
                                    }), !i && (0, b.BX)(b.HY, {
                                        children: [(0, b.tZ)(K, {
                                            variant: null !== (E = null == L ? void 0 : L.typography) && void 0 !== E ? E : null == a ? void 0 : null === (v = a.noc) || void 0 === v ? void 0 : v.typography,
                                            tx: { ...null == a ? void 0 : null === (p = a.noc) || void 0 === p ? void 0 : p.style,
                                                ...null == L ? void 0 : L.style
                                            },
                                            children: M
                                        }), (0, b.tZ)(K, {
                                            variant: null !== (k = null == L ? void 0 : L.typography) && void 0 !== k ? k : null == a ? void 0 : null === (h = a.description) || void 0 === h ? void 0 : h.typography,
                                            tx: { ...null == a ? void 0 : null === (m = a.description) || void 0 === m ? void 0 : m.style,
                                                ...null == L ? void 0 : L.style
                                            },
                                            children: R
                                        })]
                                    }), B && (0, b.tZ)(ej, {
                                        name: ln.dailySchedule.winnerCompetitorMark,
                                        alt: o.winnerTooltip,
                                        title: o.winnerTooltip,
                                        width: null == a ? void 0 : null === (y = a.winner) || void 0 === y ? void 0 : null === (g = y.icon) || void 0 === g ? void 0 : g.width,
                                        height: null == a ? void 0 : null === (x = a.winner) || void 0 === x ? void 0 : null === (f = x.icon) || void 0 === f ? void 0 : f.height,
                                        tx: null == a ? void 0 : null === (_ = a.winner) || void 0 === _ ? void 0 : null === (w = _.icon) || void 0 === w ? void 0 : w.style
                                    })]
                                }), (0, b.tZ)(lb, {
                                    index: t,
                                    theme: a,
                                    event: l,
                                    results: F,
                                    translations: o,
                                    columns: n,
                                    winnerStyle: L,
                                    isWinner: B
                                })]
                            }, O)
                        })
                    })
                },
                ic = e => {
                    var t;
                    let {
                        event: l,
                        columns: i,
                        translations: n,
                        theme: o
                    } = e;
                    return (0, b.tZ)(J, {
                        tx: null == o ? void 0 : o.container,
                        className: "competitors",
                        children: null === (t = l.competitors) || void 0 === t ? void 0 : t.map(e => {
                            var t, a, d, r, s, c, u, v, p, h;
                            let {
                                code: m,
                                name: g,
                                noc: y,
                                results: f
                            } = e, {
                                medalType: x,
                                medalAbbreviation: w
                            } = lN({
                                results: f,
                                translations: n
                            });
                            return (0, b.BX)(J, {
                                tx: null == o ? void 0 : o.row,
                                children: [(0, b.BX)(J, {
                                    tx: null == o ? void 0 : o.iconNocNameContainer,
                                    children: [(0, b.tZ)(ej, {
                                        type: "flag",
                                        name: null !== (h = null == y ? void 0 : y.toLowerCase()) && void 0 !== h ? h : "",
                                        width: null == o ? void 0 : null === (t = o.flagIcon) || void 0 === t ? void 0 : t.width,
                                        height: null == o ? void 0 : null === (a = o.flagIcon) || void 0 === a ? void 0 : a.height,
                                        tx: null == o ? void 0 : null === (d = o.flagIcon) || void 0 === d ? void 0 : d.style,
                                        alt: null != y ? y : ""
                                    }), (0, b.tZ)(K, {
                                        variant: null == o ? void 0 : null === (r = o.noc) || void 0 === r ? void 0 : r.typography,
                                        tx: null == o ? void 0 : null === (s = o.noc) || void 0 === s ? void 0 : s.style,
                                        children: y
                                    }), (0, b.tZ)(K, {
                                        variant: null == o ? void 0 : null === (c = o.description) || void 0 === c ? void 0 : c.typography,
                                        tx: null == o ? void 0 : null === (u = o.description) || void 0 === u ? void 0 : u.style,
                                        children: g
                                    })]
                                }), (0, b.tZ)(J, {
                                    tx: null == o ? void 0 : null === (v = o.resultsContainer) || void 0 === v ? void 0 : v.container,
                                    children: i.hasMedal && (0, b.tZ)("div", {
                                        children: x && w && (0, b.tZ)(lr, {
                                            medalType: x,
                                            title: lf(n, x),
                                            MedalAbbreviation: w,
                                            variant: null == o ? void 0 : null === (p = o.medalIcon) || void 0 === p ? void 0 : p.typography,
                                            styles: null == o ? void 0 : o.medalIcon
                                        })
                                    })
                                })]
                            }, "".concat(l.eventId, " ").concat(m, " ").concat(g, " ").concat(y))
                        })
                    })
                },
                iu = e => {
                    var t;
                    let {
                        event: l,
                        theme: i,
                        isHeadToHead: n,
                        translations: o
                    } = e, a = l.scheduleItemType === ln.dailySchedule.scheduleItemType.noc, d = lO({
                        event: l,
                        translations: o
                    });
                    if (null === (t = l.competitors) || void 0 === t ? void 0 : t.length) return n ? (0, b.tZ)(is, {
                        theme: i,
                        event: l,
                        translations: o,
                        isH2HNocEvent: a,
                        columns: d
                    }) : (0, b.tZ)(ic, {
                        theme: i,
                        event: l,
                        translations: o,
                        columns: d
                    })
                },
                iv = e => {
                    var t, l, i, n, o, a, d, r, s, c, u, v, p, h, m;
                    let {
                        event: g,
                        theme: y,
                        translations: f,
                        savedEventUnits: x
                    } = e, w = g.id && (null == x ? void 0 : x.includes(g.id)), _ = "TMRY", I = null !== (d = g.disciplineCode) && void 0 !== d ? d : "", C = g.phaseCode === _ && !["TEN", "TTE", "VBV", "BDM"].includes(I) || "CER" === I, S = () => {
                        let e = {
                                eventUnitID: g.id
                            },
                            t = new CustomEvent(ln.events.clickOnMySchedule, {
                                detail: e
                            });
                        document.dispatchEvent(t)
                    }, T = () => {
                        let e = {
                                disciplineCode: g.disciplineCode,
                                phaseCode: g.phaseCode,
                                disciplineName: g.disciplineName,
                                eventUnitPhaseType: g.phaseType,
                                eventUnitDescription: g.eventUnitName,
                                eventUnitCode: g.id,
                                eventUnitGender: g.genderCode,
                                eventUnitType: g.eventUnitType,
                                eventUnitOlympicDay: g.olympicDay,
                                eventUnitStartDate: g.startDate,
                                eventUnitEndDate: g.endDate,
                                eventUnitHideStartDate: g.hideStartDate,
                                eventUnitHideEndDate: g.hideEndDate,
                                eventUnitStartText: g.startText,
                                eventUnitOrder: g.order,
                                eventUnitVenueCode: g.venue,
                                eventUnitVenueDescription: g.venueDescription,
                                eventUnitLocation: g.location,
                                eventUnitLocationDescription: g.locationDescription,
                                eventUnitStatus: g.status,
                                eventUnitStatusDescription: g.statusDescription,
                                eventUnitMedalFlag: g.medalFlag,
                                eventUnitLiveFlag: g.liveFlag,
                                eventUnitScheduleItemType: g.scheduleItemType,
                                eventUnitExtraData: g.extraData,
                                eventUnitCompetitors: g.competitors,
                                alertMessage: g.alertMessage
                            },
                            t = new CustomEvent(ln.events.clickOnEventUnitContextualMenu, {
                                detail: e
                            });
                        document.dispatchEvent(t)
                    };
                    return (0, b.BX)(J, {
                        tx: null == y ? void 0 : y.container,
                        children: [g.phaseCode !== _ && (0, b.tZ)(ee, {
                            onClick: e => {
                                e.preventDefault(), S()
                            },
                            type: "button",
                            style: {
                                height: "fit-content"
                            },
                            className: "bookmark-button",
                            children: (0, b.tZ)(J, {
                                "data-testid": "dailyScheduleSaveIcon-".concat(g.id),
                                onClick: e => {
                                    e.preventDefault(), e.stopPropagation(), S()
                                },
                                tx: {
                                    cursor: "pointer",
                                    height: "fit-content"
                                },
                                children: (0, b.tZ)(ej, {
                                    name: w ? ln.icon.bookmarkFilled : ln.icon.bookmarkBordered,
                                    alt: (0, l1.wT)(f.saveIconText, [{
                                        placeholder: "{discipline-name}",
                                        replacement: null !== (r = g.disciplineName) && void 0 !== r ? r : ""
                                    }, {
                                        placeholder: "{event-unit-name}",
                                        replacement: null !== (s = g.eventUnitName) && void 0 !== s ? s : ""
                                    }]),
                                    title: (0, l1.wT)(f.saveIconText, [{
                                        placeholder: "{discipline-name}",
                                        replacement: null !== (c = g.disciplineName) && void 0 !== c ? c : ""
                                    }, {
                                        placeholder: "{event-unit-name}",
                                        replacement: null !== (u = g.eventUnitName) && void 0 !== u ? u : ""
                                    }]),
                                    width: null == y ? void 0 : null === (t = y.saveIcon) || void 0 === t ? void 0 : t.width,
                                    height: null == y ? void 0 : null === (l = y.saveIcon) || void 0 === l ? void 0 : l.height,
                                    tx: null == y ? void 0 : null === (i = y.saveIcon) || void 0 === i ? void 0 : i.style,
                                    className: "bookmark-icon ".concat(w ? "bookmark-icon--active" : "")
                                })
                            })
                        }), !C && (0, b.tZ)(ee, {
                            onClick: e => {
                                e.preventDefault(), T()
                            },
                            type: "button",
                            style: {
                                height: "fit-content"
                            },
                            className: "contextualmenu-button",
                            children: (0, b.tZ)(J, {
                                "data-testid": "dailyScheduleMenuIcon",
                                onClick: e => {
                                    e.preventDefault(), e.stopPropagation(), T()
                                },
                                tx: {
                                    cursor: "pointer",
                                    height: "fit-content"
                                },
                                children: (0, b.tZ)(ej, {
                                    name: ln.icon.dailyScheduleMenu,
                                    alt: (0, l1.wT)(f.menuIconText, [{
                                        placeholder: "{discipline-name}",
                                        replacement: null !== (v = g.disciplineName) && void 0 !== v ? v : ""
                                    }, {
                                        placeholder: "{event-unit-name}",
                                        replacement: null !== (p = g.eventUnitName) && void 0 !== p ? p : ""
                                    }]),
                                    title: (0, l1.wT)(f.menuIconText, [{
                                        placeholder: "{discipline-name}",
                                        replacement: null !== (h = g.disciplineName) && void 0 !== h ? h : ""
                                    }, {
                                        placeholder: "{event-unit-name}",
                                        replacement: null !== (m = g.eventUnitName) && void 0 !== m ? m : ""
                                    }]),
                                    width: null == y ? void 0 : null === (n = y.menuIcon) || void 0 === n ? void 0 : n.width,
                                    height: null == y ? void 0 : null === (o = y.menuIcon) || void 0 === o ? void 0 : o.height,
                                    tx: null == y ? void 0 : null === (a = y.menuIcon) || void 0 === a ? void 0 : a.style
                                })
                            })
                        })]
                    })
                };
            let ip = e => {
                var t, l;
                let {
                    isStartTextVisible: i,
                    theme: n,
                    startText: o
                } = e, a = tX();
                return (0, b.tZ)(b.HY, {
                    children: !a && i && (0, b.tZ)(K, {
                        variant: null == n ? void 0 : null === (t = n.startText) || void 0 === t ? void 0 : t.typography,
                        tx: null == n ? void 0 : null === (l = n.startText) || void 0 === l ? void 0 : l.style,
                        truncate: !0,
                        children: o
                    })
                })
            };
            var ih = e => {
                    var t, l, i, n, o, a, d, r, s, c, u, v, p, h, m, g;
                    let {
                        isMobile: y,
                        isGroup: f,
                        hasMedalFlag: x,
                        medalFlag: w,
                        hasStatus: _,
                        statusTitle: I,
                        startDate: C,
                        theme: S,
                        translations: T,
                        hideStartDate: D,
                        startText: Z,
                        isLive: E
                    } = e, k = !!D;
                    return (0, b.BX)(J, {
                        tx: null == S ? void 0 : S.container,
                        className: "start-date ".concat(E ? "start-date--live" : ""),
                        children: [(0, b.tZ)(ip, {
                            isStartTextVisible: k,
                            startText: Z,
                            theme: S
                        }), !k && C && (0, b.tZ)(K, {
                            "data-testid": "startTime",
                            variant: null == S ? void 0 : null === (t = S.startTime) || void 0 === t ? void 0 : t.typography,
                            tx: null == S ? void 0 : null === (l = S.startTime) || void 0 === l ? void 0 : l.style,
                            children: (0, b.tZ)(tP, {
                                time: C,
                                format: "HH:mm",
                                setZone: !0,
                                $minWidth: null !== (p = null == S ? void 0 : null === (n = S.startText) || void 0 === n ? void 0 : null === (i = n.style) || void 0 === i ? void 0 : i.minHeight) && void 0 !== p ? p : ln.timeLabel.defaultProps.summary.$width,
                                $minHeight: null !== (h = null == S ? void 0 : null === (a = S.startText) || void 0 === a ? void 0 : null === (o = a.style) || void 0 === o ? void 0 : o.minWidth) && void 0 !== h ? h : ln.timeLabel.defaultProps.summary.$height
                            })
                        }), (0, b.BX)(J, {
                            tx: null == S ? void 0 : S.icons,
                            children: [!y && x && (0, b.tZ)(ej, {
                                name: ln.icon.dailyScheduleMedal,
                                alt: f ? T.groupWithMedalEvents : null !== (m = ly(T, w)) && void 0 !== m ? m : "medal event",
                                title: f ? T.groupWithMedalEvents : null !== (g = ly(T, w)) && void 0 !== g ? g : "medal event",
                                width: null == S ? void 0 : null === (d = S.medalIcon) || void 0 === d ? void 0 : d.width,
                                height: null == S ? void 0 : null === (r = S.medalIcon) || void 0 === r ? void 0 : r.height,
                                tx: null == S ? void 0 : null === (s = S.medalIcon) || void 0 === s ? void 0 : s.style
                            }), !y && _ && (0, b.tZ)("div", {
                                title: I,
                                children: (0, b.tZ)(ej, {
                                    name: ln.icon.dailyScheduleWarning,
                                    alt: "warning",
                                    width: null == S ? void 0 : null === (c = S.statusIcon) || void 0 === c ? void 0 : c.width,
                                    height: null == S ? void 0 : null === (u = S.statusIcon) || void 0 === u ? void 0 : u.height,
                                    tx: null == S ? void 0 : null === (v = S.statusIcon) || void 0 === v ? void 0 : v.style
                                })
                            })]
                        })]
                    })
                },
                im = e => {
                    var t;
                    let {
                        units: l,
                        savedEventUnits: i,
                        eventTarget: n,
                        urlConfig: o,
                        translations: a,
                        liveEventsTheme: d,
                        competitorsTheme: r
                    } = e, s = null === (t = D().cloneDeep(l)) || void 0 === t ? void 0 : t.filter(e => e.liveFlag).sort((e, t) => {
                        var l, i, n, o;
                        return lT(null !== (l = e.startDate) && void 0 !== l ? l : "", null !== (i = t.startDate) && void 0 !== i ? i : "") || lT(null !== (n = e.order) && void 0 !== n ? n : "", null !== (o = t.order) && void 0 !== o ? o : "")
                    });
                    return s && (0, b.tZ)(J, {
                        tx: null == d ? void 0 : d.container,
                        children: null == s ? void 0 : s.map(e => (0, b.tZ)(ik, {
                            unit: e,
                            savedEventUnits: i,
                            eventTarget: n,
                            urlConfig: o,
                            translations: a,
                            liveEventTheme: null == d ? void 0 : d.liveEvent,
                            competitorsTheme: r
                        }, "live".concat(e.id)))
                    })
                };
            let ig = (e, t) => {
                    var l;
                    let {
                        expandableEntities: i,
                        defaultIsExpanded: n = !1
                    } = t;
                    return !!(null !== (l = null == i ? void 0 : i[e]) && void 0 !== l ? l : n)
                },
                iy = (e, t, l) => ({ ...t.expandableEntities,
                    [e]: "boolean" == typeof l ? l : !ig(e, t)
                }),
                ix = (0, _.Z)(J, B, {
                    target: "e4qf5ud0"
                })(e => {
                    let {
                        $status: t
                    } = e;
                    return { ...t
                    }
                });
            var ib = e => {
                    var t, l, i, n, o, a, d, r, s, c, u, v, p;
                    let {
                        group: h,
                        medalFlag: m,
                        onExpandGroup: g,
                        savedEventUnits: y,
                        eventTarget: f,
                        urlConfig: x,
                        translations: _,
                        theme: I
                    } = e, [C, S] = (0, w.useState)(!1), T = () => {
                        S(!C), h.id && g(h.id)
                    }, D = ig(null !== (u = h.id) && void 0 !== u ? u : "", e), Z = I.display === ln.themeDisplays.mobile;
                    return (0, b.BX)(J, {
                        tx: {
                            display: "flex",
                            flexDirection: "column",
                            width: "100%"
                        },
                        children: [(0, b.BX)(ix, {
                            $status: l$(h, I),
                            tx: null === (t = I.event) || void 0 === t ? void 0 : t.container,
                            "data-group-id": h.id,
                            onClick: T,
                            className: "unit ".concat(h.isLive ? "unit--live" : "", " ").concat(C ? "unit--expanded" : ""),
                            children: [(0, b.tZ)(l7, {
                                tx: null === (l = I.event) || void 0 === l ? void 0 : l.indicator,
                                $isLive: h.isLive,
                                className: "side-bar-indicator ".concat(h.isLive ? "side-bar-indicator--live" : "")
                            }), (0, b.BX)(J, {
                                tx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "100%"
                                },
                                children: [(0, b.BX)(J, {
                                    tx: null === (n = I.event) || void 0 === n ? void 0 : null === (i = n.mainRow) || void 0 === i ? void 0 : i.container,
                                    style: {
                                        cursor: !Z && (null === (o = h.units) || void 0 === o ? void 0 : o.length) ? "pointer" : "auto"
                                    },
                                    onClick: e => {
                                        Z && e.stopPropagation()
                                    },
                                    children: [(0, b.tZ)(ih, {
                                        isMobile: Z,
                                        isGroup: !0,
                                        medalFlag: m,
                                        hasMedalFlag: h.hasMedals,
                                        hasStatus: h.hasWarnings,
                                        statusTitle: _.groupWarning,
                                        startDate: null !== (v = h.startDate) && void 0 !== v ? v : "",
                                        theme: null === (a = I.group) || void 0 === a ? void 0 : a.summary,
                                        translations: _,
                                        isLive: h.isLive
                                    }), (0, b.tZ)(ir, {
                                        title: h.title,
                                        subTitle: null !== (p = h.subTitle) && void 0 !== p ? p : "",
                                        theme: null === (d = I.group) || void 0 === d ? void 0 : d.details,
                                        isLive: h.isLive,
                                        isGroup: !0,
                                        translations: _
                                    }), !Z && (0, b.tZ)(iT, {
                                        isOpen: D,
                                        groupTitle: h.title,
                                        groupSubitle: h.subTitle,
                                        unitsCount: h.unitsCount,
                                        translations: _,
                                        theme: I.group,
                                        handleGroupExpandClick: T
                                    })]
                                }), !D && (0, b.tZ)(im, {
                                    units: h.units,
                                    savedEventUnits: y,
                                    eventTarget: f,
                                    urlConfig: x,
                                    translations: _,
                                    liveEventsTheme: null === (r = I.group) || void 0 === r ? void 0 : r.liveEvents,
                                    competitorsTheme: null === (s = I.event) || void 0 === s ? void 0 : s.competitors
                                }), Z && (0, b.tZ)(iT, {
                                    isOpen: D,
                                    medalFlag: m,
                                    groupTitle: h.title,
                                    groupSubitle: h.subTitle,
                                    hasMedals: h.hasMedals,
                                    hasStatus: h.hasWarnings,
                                    unitsCount: h.unitsCount,
                                    translations: _,
                                    theme: I.group,
                                    handleGroupExpandClick: T
                                })]
                            })]
                        }), D && (0, b.tZ)(iw, {
                            units: h.units,
                            isMobile: Z,
                            theme: I.group,
                            competitorsTheme: null === (c = I.event) || void 0 === c ? void 0 : c.competitors,
                            translations: _,
                            savedEventUnits: y,
                            eventTarget: f,
                            urlConfig: x
                        })]
                    })
                },
                iw = e => {
                    let {
                        units: t,
                        savedEventUnits: l,
                        isMobile: i,
                        eventTarget: n,
                        urlConfig: o,
                        translations: a,
                        theme: d,
                        competitorsTheme: r
                    } = e, s = e => (null == t ? void 0 : t.length) && e === t.length - 1 && 0 === e ? ln.dailySchedule.groupEventPosition.single : 0 === e ? ln.dailySchedule.groupEventPosition.start : (null == t ? void 0 : t.length) && e === t.length - 1 ? ln.dailySchedule.groupEventPosition.end : ln.dailySchedule.groupEventPosition.center;
                    return (0, b.tZ)(J, {
                        tx: null == d ? void 0 : d.eventsContainer,
                        children: null == t ? void 0 : t.map((e, t) => (0, b.tZ)(iC, {
                            unit: e,
                            position: s(t),
                            isMobile: i,
                            eventTarget: n,
                            urlConfig: o,
                            translations: a,
                            theme: null == d ? void 0 : d.event,
                            competitorsTheme: r,
                            savedEventUnits: l
                        }, e.id))
                    })
                };
            let i_ = (0, _.Z)(Q, B, {
                    target: "e1uwuu6e0"
                })(e => {
                    let {
                        $status: t
                    } = e;
                    return { ...t
                    }
                }),
                iI = (0, _.Z)(J, B, {
                    target: "e1uwuu6e1"
                })(e => {
                    let {
                        $isLive: t,
                        $liveBar: l
                    } = e;
                    if (t) return { ...l
                    }
                });
            var iC = e => {
                    var t, l, i, n, o, a, d, r, s;
                    let {
                        unit: c,
                        position: u,
                        savedEventUnits: v,
                        eventTarget: p,
                        urlConfig: h,
                        isMobile: m,
                        translations: g,
                        theme: y,
                        competitorsTheme: f
                    } = e, x = h && l5("event", c, h), {
                        disciplineName: w,
                        eventUnitName: _,
                        id: I,
                        status: C
                    } = c;
                    return (0, b.BX)("div", {
                        style: {
                            display: "flex"
                        },
                        children: [(0, b.tZ)(iE, {
                            position: u,
                            dotStatus: c.status === ln.status.finished || c.status === ln.status.cancelled ? null == y ? void 0 : null === (i = y.statusIndicator) || void 0 === i ? void 0 : null === (l = i.status) || void 0 === l ? void 0 : l.finished : c.liveFlag ? null == y ? void 0 : null === (o = y.statusIndicator) || void 0 === o ? void 0 : null === (n = o.status) || void 0 === n ? void 0 : n.live : null == y ? void 0 : null === (d = y.statusIndicator) || void 0 === d ? void 0 : null === (a = d.status) || void 0 === a ? void 0 : a.scheduled,
                            theme: null == y ? void 0 : y.statusIndicator,
                            unit: c
                        }), (0, b.tZ)(i_, {
                            "data-unit-rsc-code": I,
                            as: x ? void 0 : "div",
                            tx: null == y ? void 0 : y.constainer,
                            $status: C === ln.status.finished || C === ln.status.cancelled ? null == y ? void 0 : null === (r = y.status) || void 0 === r ? void 0 : r.finished : null == y ? void 0 : null === (s = y.status) || void 0 === s ? void 0 : s.scheduled,
                            href: x && "" !== x ? x : void 0,
                            target: x ? p : void 0,
                            title: x ? (0, l1.wT)(g.eventLinkTitle, [{
                                placeholder: "{discipline-name}",
                                replacement: null != w ? w : ""
                            }, {
                                placeholder: "{event-unit-name}",
                                replacement: null != _ ? _ : ""
                            }]) : void 0,
                            children: (0, b.BX)(iI, {
                                "data-unit-rsc-code": c.id,
                                $isLive: c.liveFlag,
                                $liveBar: null == y ? void 0 : y.liveIndicator,
                                children: [(0, b.tZ)(iS, {
                                    unit: c,
                                    savedEventUnits: v,
                                    isMobile: m,
                                    translations: g,
                                    theme: null == y ? void 0 : y.header,
                                    unitNum: c.unitNum ? (0, l1.wT)(g.matchNumber, [{
                                        placeholder: "{unitNum}",
                                        replacement: null !== (t = c.unitNum) && void 0 !== t ? t : ""
                                    }]) : null
                                }), c.competitors && (0, b.tZ)(J, {
                                    tx: null == y ? void 0 : y.competitorsContainer,
                                    children: (0, b.tZ)(iu, {
                                        event: c,
                                        isHeadToHead: lk(c.scheduleItemType),
                                        translations: g,
                                        theme: f
                                    })
                                })]
                            })
                        })]
                    })
                },
                iS = e => {
                    var t, l, i, n, o, a, d, r, s, c, u, v, p, h, m, g, y, f, x, w, _, I, C, S, T, D, Z, E, k, N, R, M, F, O, B, L, z;
                    let {
                        unit: j,
                        savedEventUnits: A,
                        isMobile: W,
                        translations: H,
                        theme: G,
                        unitNum: X
                    } = e, P = 0 !== j.medalFlag, $ = !!j.hideStartDate;
                    return (0, b.BX)(J, {
                        tx: null == G ? void 0 : G.container,
                        className: "unit unit--expanded ".concat(j.liveFlag ? "unit--live" : ""),
                        children: [(0, b.BX)(J, {
                            tx: null == G ? void 0 : null === (t = G.topRow) || void 0 === t ? void 0 : t.container,
                            children: [P && (0, b.tZ)(ej, {
                                name: ln.icon.dailyScheduleMedal,
                                alt: null !== (F = ly(H, j.medalFlag)) && void 0 !== F ? F : "medal event",
                                title: null !== (O = ly(H, j.medalFlag)) && void 0 !== O ? O : "medal event",
                                width: null == G ? void 0 : null === (i = G.topRow) || void 0 === i ? void 0 : null === (l = i.medalIcon) || void 0 === l ? void 0 : l.width,
                                height: null == G ? void 0 : null === (o = G.topRow) || void 0 === o ? void 0 : null === (n = o.medalIcon) || void 0 === n ? void 0 : n.height,
                                tx: null == G ? void 0 : null === (d = G.topRow) || void 0 === d ? void 0 : null === (a = d.medalIcon) || void 0 === a ? void 0 : a.style
                            }), lE(j.status) && (0, b.tZ)("div", {
                                title: lD({
                                    status: null !== (B = j.status) && void 0 !== B ? B : "",
                                    translations: H
                                }),
                                children: (0, b.tZ)(ej, {
                                    name: ln.icon.dailyScheduleWarning,
                                    width: null == G ? void 0 : null === (s = G.topRow) || void 0 === s ? void 0 : null === (r = s.statusIcon) || void 0 === r ? void 0 : r.width,
                                    height: null == G ? void 0 : null === (u = G.topRow) || void 0 === u ? void 0 : null === (c = u.statusIcon) || void 0 === c ? void 0 : c.height,
                                    tx: null == G ? void 0 : null === (p = G.topRow) || void 0 === p ? void 0 : null === (v = p.statusIcon) || void 0 === v ? void 0 : v.style
                                })
                            }), (0, b.BX)(K, {
                                truncate: !0,
                                variant: null == G ? void 0 : null === (m = G.topRow) || void 0 === m ? void 0 : null === (h = m.time) || void 0 === h ? void 0 : h.typography,
                                tx: null == G ? void 0 : null === (y = G.topRow) || void 0 === y ? void 0 : null === (g = y.time) || void 0 === g ? void 0 : g.style,
                                className: "start-date start-date--expanded ".concat(j.liveFlag ? "start-date--live" : ""),
                                children: [$ && j.startText, !$ && j.startDate && (0, b.tZ)(tP, {
                                    time: j.startDate,
                                    format: "HH:mm",
                                    setZone: !0,
                                    $minWidth: null !== (L = null == G ? void 0 : null === (w = G.topRow) || void 0 === w ? void 0 : null === (x = w.time) || void 0 === x ? void 0 : null === (f = x.style) || void 0 === f ? void 0 : f.minHeight) && void 0 !== L ? L : ln.timeLabel.defaultProps.group.$width,
                                    $minHeight: null !== (z = null == G ? void 0 : null === (C = G.topRow) || void 0 === C ? void 0 : null === (I = C.time) || void 0 === I ? void 0 : null === (_ = I.style) || void 0 === _ ? void 0 : _.minWidth) && void 0 !== z ? z : ln.timeLabel.defaultProps.group.$height
                                })]
                            }), !W && (0, b.BX)(K, {
                                variant: null == G ? void 0 : null === (T = G.topRow) || void 0 === T ? void 0 : null === (S = T.eventName) || void 0 === S ? void 0 : S.typography,
                                tx: null == G ? void 0 : null === (Z = G.topRow) || void 0 === Z ? void 0 : null === (D = Z.eventName) || void 0 === D ? void 0 : D.style,
                                className: "details details--expanded ".concat(j.liveFlag ? "details--live" : ""),
                                children: [j.eventUnitName, " ", X]
                            }), (0, b.tZ)(iv, {
                                event: j,
                                savedEventUnits: A,
                                translations: H,
                                theme: null == G ? void 0 : null === (E = G.topRow) || void 0 === E ? void 0 : E.icons
                            })]
                        }), W && (0, b.tZ)(K, {
                            truncate: !0,
                            variant: null == G ? void 0 : null === (N = G.bottomRow) || void 0 === N ? void 0 : null === (k = N.eventName) || void 0 === k ? void 0 : k.typography,
                            tx: null == G ? void 0 : null === (M = G.bottomRow) || void 0 === M ? void 0 : null === (R = M.eventName) || void 0 === R ? void 0 : R.style,
                            className: "details details--expanded ".concat(j.liveFlag ? "details--live" : ""),
                            children: j.eventUnitName
                        })]
                    })
                },
                iT = e => {
                    var t, l, i, n, o, a, d, r, s, c, u, v, p, h, m, g, y, f, x, w, _, I, C, S, T, D, Z, E, k, N, R;
                    let {
                        isOpen: M,
                        medalFlag: F,
                        groupTitle: O,
                        groupSubitle: B,
                        hasMedals: L,
                        hasStatus: z,
                        unitsCount: j,
                        translations: A,
                        theme: W,
                        handleGroupExpandClick: H
                    } = e;
                    return (0, b.BX)(J, {
                        tx: null == W ? void 0 : null === (t = W.expandInfo) || void 0 === t ? void 0 : t.container,
                        style: {
                            cursor: j ? "pointer" : "auto"
                        },
                        children: [L && (0, b.tZ)(ej, {
                            name: ln.icon.dailyScheduleMedal,
                            alt: null !== (N = ly(A, F)) && void 0 !== N ? N : "medal event",
                            title: null !== (R = ly(A, F)) && void 0 !== R ? R : "medal event",
                            width: null == W ? void 0 : null === (i = W.summary) || void 0 === i ? void 0 : null === (l = i.medalIcon) || void 0 === l ? void 0 : l.width,
                            height: null == W ? void 0 : null === (o = W.summary) || void 0 === o ? void 0 : null === (n = o.medalIcon) || void 0 === n ? void 0 : n.height,
                            tx: null == W ? void 0 : null === (d = W.summary) || void 0 === d ? void 0 : null === (a = d.medalIcon) || void 0 === a ? void 0 : a.style
                        }), z && (0, b.tZ)("div", {
                            title: A.groupWarning,
                            children: (0, b.tZ)(ej, {
                                name: ln.icon.dailyScheduleWarning,
                                alt: ln.icon.dailyScheduleWarning,
                                width: null == W ? void 0 : null === (s = W.summary) || void 0 === s ? void 0 : null === (r = s.statusIcon) || void 0 === r ? void 0 : r.width,
                                height: null == W ? void 0 : null === (u = W.summary) || void 0 === u ? void 0 : null === (c = u.statusIcon) || void 0 === c ? void 0 : c.height,
                                tx: null == W ? void 0 : null === (p = W.summary) || void 0 === p ? void 0 : null === (v = p.statusIcon) || void 0 === v ? void 0 : v.style
                            })
                        }), (0, b.tZ)(K, {
                            tx: null == W ? void 0 : null === (m = W.expandInfo) || void 0 === m ? void 0 : null === (h = m.expandGroupText) || void 0 === h ? void 0 : h.style,
                            variant: null == W ? void 0 : null === (y = W.expandInfo) || void 0 === y ? void 0 : null === (g = y.expandGroupText) || void 0 === g ? void 0 : g.typography,
                            className: "groups-counter",
                            children: (() => {
                                if (j) return j > 1 ? (0, l1.wT)(A.groupItems, [{
                                    placeholder: "{unit-items}",
                                    replacement: j.toString()
                                }]) : (0, l1.wT)(A.groupItem, [{
                                    placeholder: "{unit-items}",
                                    replacement: j.toString()
                                }])
                            })()
                        }), (0, b.tZ)(J, {
                            "data-testid": "dailyScheduleGroupExpandIcon",
                            children: M ? (0, b.tZ)(ee, {
                                onClick: e => {
                                    e.stopPropagation(), H()
                                },
                                type: "button",
                                style: {
                                    height: "fit-content"
                                },
                                children: (0, b.tZ)(ej, {
                                    name: ln.icons.collapse,
                                    alt: (0, l1.wT)(A.collapseGroup, [{
                                        placeholder: "{group-title}",
                                        replacement: null != O ? O : ""
                                    }, {
                                        placeholder: "{group-subtitle}",
                                        replacement: null != B ? B : ""
                                    }]),
                                    title: (0, l1.wT)(A.collapseGroup, [{
                                        placeholder: "{group-title}",
                                        replacement: null != O ? O : ""
                                    }, {
                                        placeholder: "{group-subtitle}",
                                        replacement: null != B ? B : ""
                                    }]),
                                    width: null == W ? void 0 : null === (x = W.expandInfo) || void 0 === x ? void 0 : null === (f = x.expandIcon) || void 0 === f ? void 0 : f.width,
                                    height: null == W ? void 0 : null === (_ = W.expandInfo) || void 0 === _ ? void 0 : null === (w = _.expandIcon) || void 0 === w ? void 0 : w.height,
                                    tx: null == W ? void 0 : null === (C = W.expandInfo) || void 0 === C ? void 0 : null === (I = C.expandIcon) || void 0 === I ? void 0 : I.style,
                                    className: "group-collapse"
                                })
                            }) : (0, b.tZ)(ee, {
                                onClick: e => {
                                    e.stopPropagation(), H()
                                },
                                type: "button",
                                style: {
                                    height: "fit-content"
                                },
                                children: (0, b.tZ)(ej, {
                                    name: ln.icons.expand,
                                    alt: (0, l1.wT)(A.expandGroup, [{
                                        placeholder: "{group-title}",
                                        replacement: null != O ? O : ""
                                    }, {
                                        placeholder: "{group-subtitle}",
                                        replacement: null != B ? B : ""
                                    }]),
                                    title: (0, l1.wT)(A.expandGroup, [{
                                        placeholder: "{group-title}",
                                        replacement: null != O ? O : ""
                                    }, {
                                        placeholder: "{group-subtitle}",
                                        replacement: null != B ? B : ""
                                    }]),
                                    width: null == W ? void 0 : null === (T = W.expandInfo) || void 0 === T ? void 0 : null === (S = T.expandIcon) || void 0 === S ? void 0 : S.width,
                                    height: null == W ? void 0 : null === (Z = W.expandInfo) || void 0 === Z ? void 0 : null === (D = Z.expandIcon) || void 0 === D ? void 0 : D.height,
                                    tx: null == W ? void 0 : null === (k = W.expandInfo) || void 0 === k ? void 0 : null === (E = k.expandIcon) || void 0 === E ? void 0 : E.style,
                                    className: "group-expand"
                                })
                            })
                        })]
                    })
                };
            let iD = (0, _.Z)(J, B, {
                    target: "ez91s4i0"
                })(e => {
                    let {
                        $dotStatus: t
                    } = e;
                    return { ...t
                    }
                }),
                iZ = (0, _.Z)(J, B, {
                    target: "ez91s4i1"
                })(e => e.$top && (0, W.iv)("height:", e.$top, ";"), " ", e => e.$color && (0, W.iv)("background-color:", e.$color, ";"));
            var iE = e => {
                    let {
                        position: t,
                        dotStatus: l,
                        theme: i,
                        unit: n
                    } = e;
                    return (0, b.BX)(J, {
                        tx: null == i ? void 0 : i.container,
                        children: [(0, b.tZ)(iZ, {
                            tx: null == i ? void 0 : i.connectorTop,
                            $top: null == i ? void 0 : i.topOffset,
                            $color: "start" === t || "single" === t ? void 0 : null == i ? void 0 : i.connectorColor,
                            className: "start" === t || "single" === t ? void 0 : "group-connector"
                        }), (0, b.tZ)(iD, {
                            tx: null == i ? void 0 : i.dot,
                            $dotStatus: l,
                            className: "group-dot ".concat(n.liveFlag ? "group-dot--live" : "")
                        }), "end" !== t && "single" !== t && (0, b.tZ)(iZ, {
                            tx: null == i ? void 0 : i.connectorBottom,
                            $color: null == i ? void 0 : i.connectorColor,
                            className: "group-connector"
                        })]
                    })
                },
                ik = e => {
                    let {
                        unit: t,
                        savedEventUnits: l,
                        eventTarget: i,
                        urlConfig: n,
                        translations: o,
                        liveEventTheme: a,
                        competitorsTheme: d
                    } = e, r = n && l5("event", t, n), {
                        disciplineName: s,
                        eventUnitName: c,
                        id: u
                    } = t;
                    return (0, b.BX)(Q, {
                        "data-unit-rsc-code": u,
                        as: r ? void 0 : "div",
                        href: r && "" !== r ? r : void 0,
                        target: r ? i : void 0,
                        title: r ? (0, l1.wT)(o.eventLinkTitle, [{
                            placeholder: "{discipline-name}",
                            replacement: null != s ? s : ""
                        }, {
                            placeholder: "{event-unit-name}",
                            replacement: null != c ? c : ""
                        }]) : void 0,
                        onClick: e => {
                            e.stopPropagation()
                        },
                        tx: null == a ? void 0 : a.container,
                        children: [(0, b.tZ)(iN, {
                            unit: t,
                            savedEventUnits: l,
                            translations: o,
                            theme: a
                        }), t.competitors && (0, b.tZ)(J, {
                            tx: null == a ? void 0 : a.competitorsContainer,
                            children: (0, b.tZ)(iu, {
                                event: t,
                                isHeadToHead: lk(t.scheduleItemType),
                                translations: o,
                                theme: d
                            })
                        })]
                    })
                },
                iN = e => {
                    var t, l, i, n, o;
                    let {
                        unit: a,
                        savedEventUnits: d,
                        translations: r,
                        theme: s
                    } = e;
                    return (0, b.BX)(J, {
                        tx: null == s ? void 0 : s.header,
                        children: [(0, b.tZ)(ej, {
                            name: "dailyScheduleLiveDot",
                            alt: null == r ? void 0 : r.liveIcon,
                            title: null == r ? void 0 : r.liveIcon,
                            width: null == s ? void 0 : null === (t = s.liveDotIcon) || void 0 === t ? void 0 : t.width,
                            height: null == s ? void 0 : null === (l = s.liveDotIcon) || void 0 === l ? void 0 : l.height,
                            tx: null == s ? void 0 : null === (i = s.liveDotIcon) || void 0 === i ? void 0 : i.style
                        }), (0, b.tZ)(J, {
                            tx: null == s ? void 0 : null === (n = s.eventName) || void 0 === n ? void 0 : n.style,
                            children: (0, b.tZ)(K, {
                                variant: null == s ? void 0 : null === (o = s.eventName) || void 0 === o ? void 0 : o.typography,
                                children: a.eventUnitName
                            })
                        }), (0, b.tZ)(J, {
                            tx: null == s ? void 0 : s.iconsContainer,
                            children: (0, b.tZ)(iv, {
                                event: a,
                                savedEventUnits: d,
                                translations: r,
                                theme: null == s ? void 0 : s.icons
                            })
                        })]
                    })
                };
            let iR = (0, w.forwardRef)((e, t) => {
                    let {
                        rows: l,
                        theme: i,
                        translations: n,
                        virtualizedOverscan: o = 0,
                        virtualizedIncreaseViewportBy: a,
                        virtualizedInitialTopMostItemIndex: d,
                        onCompetitionDayChange: r,
                        onLastRowVisible: s,
                        urlConfig: c,
                        onPlaceholderRowVisible: u,
                        currentDayStartIndexDelta: v,
                        customRowRenderers: p,
                        onExpandToggle: h,
                        expandableEntities: m,
                        defaultIsExpanded: g,
                        locale: y,
                        currentCompetitionDay: f,
                        ...x
                    } = e, _ = e => {
                        null == h || h(e)
                    }, {
                        handleOnItemsRendered: I
                    } = lQ({
                        rows: l,
                        currentDayStartIndexDelta: v,
                        onCompetitionDayChange: r,
                        currentCompetitionDay: f
                    });
                    (0, w.useEffect)(() => {
                        null == I || I({
                            startIndex: 0,
                            endIndex: l.length
                        })
                    }, []);
                    let C = (0, w.useRef)(null),
                        S = (0, w.useRef)("mouse");
                    if ((0, w.useEffect)(() => {
                            let e = () => {
                                    S.current = "mouse"
                                },
                                t = () => {
                                    S.current = "keyboard"
                                };
                            return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), () => {
                                document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t)
                            }
                        }, []), 0 !== l.length) return (0, b.tZ)("div", {
                        ref: C,
                        children: (0, b.tZ)(iM, {
                            tx: i,
                            data: l,
                            ref: t,
                            initialItemCount: l.length,
                            useWindowScroll: !0,
                            totalCount: l.length,
                            rangeChanged: I,
                            onFocus: e => {
                                lU(e, C, S)
                            },
                            ...void 0 !== o ? {
                                overscan: o
                            } : {},
                            ...void 0 !== a ? {
                                increaseViewportBy: a
                            } : {},
                            ...void 0 !== d ? {
                                initialTopMostItemIndex: d
                            } : {},
                            itemContent: (t, o) => (0, b.tZ)(io, { ...e,
                                ...x,
                                row: o,
                                isLastRow: t === l.length - 1,
                                nextEventStartDate: lP(ll()(l, e => !!lP(e), t + 1)),
                                translations: n,
                                onLastRowVisible: s,
                                onPlaceholderRowVisible: u,
                                expandableEntities: m,
                                defaultIsExpanded: g,
                                onExpandGroup: _,
                                urlConfig: c,
                                theme: i,
                                customRowRenderers: p,
                                locale: y
                            })
                        })
                    })
                }),
                iM = (0, _.Z)(le.OO, B, {
                    target: "e1gvz6q50"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t.container
                    }
                }, " ", e => {
                    var t;
                    let {
                        tx: l
                    } = e;
                    if (null === (t = l.text) || void 0 === t ? void 0 : t.defaultTypography) return { ...F.typography[l.text.defaultTypography]
                    }
                });
            iR.displayName = "DailySchedule";
            var iF = l(23279),
                iO = l.n(iF);
            let iB = (0, _.Z)("a", B, {
                target: "e1hqfern0"
            })("display:flex;align-items:center;justify-content:center;position:relative;", e => {
                var t, l, i;
                let {
                    tx: n
                } = e;
                return { ...null === (i = n.row) || void 0 === i ? void 0 : null === (l = i.cell) || void 0 === l ? void 0 : null === (t = l.global) || void 0 === t ? void 0 : t.global
                }
            }, ";", e => {
                if (e.$row && e.$row > 1) {
                    var t, l, i, n, o, a, d, r, s, c, u, v;
                    return e.$row % 2 == 0 ? e.$isDiscipline ? (0, W.iv)({ ...null === (s = e.tx.row) || void 0 === s ? void 0 : null === (r = s.cell) || void 0 === r ? void 0 : null === (d = r.discipline) || void 0 === d ? void 0 : d.even
                    }) : (0, W.iv)({ ...null === (a = e.tx.row) || void 0 === a ? void 0 : null === (o = a.cell) || void 0 === o ? void 0 : null === (n = o.event) || void 0 === n ? void 0 : n.even
                    }) : e.$isDiscipline ? (0, W.iv)({ ...null === (v = e.tx.row) || void 0 === v ? void 0 : null === (u = v.cell) || void 0 === u ? void 0 : null === (c = u.discipline) || void 0 === c ? void 0 : c.odd
                    }) : (0, W.iv)({ ...null === (i = e.tx.row) || void 0 === i ? void 0 : null === (l = i.cell) || void 0 === l ? void 0 : null === (t = l.event) || void 0 === t ? void 0 : t.odd
                    })
                }
            }, " ", e => {
                var t, l, i, n, o, a;
                return e.$isDiscipline ? (0, W.iv)({ ...null === (i = e.tx.row) || void 0 === i ? void 0 : null === (l = i.cell) || void 0 === l ? void 0 : null === (t = l.discipline) || void 0 === t ? void 0 : t.global
                }) : (0, W.iv)({ ...null === (a = e.tx.row) || void 0 === a ? void 0 : null === (o = a.cell) || void 0 === o ? void 0 : null === (n = o.event) || void 0 === n ? void 0 : n.global
                })
            });
            var iL = e => {
                    let {
                        children: t,
                        row: l,
                        column: i,
                        href: n,
                        onMouseEnter: o,
                        handleCellMouseLeave: a,
                        onClick: d,
                        isDiscipline: r,
                        customTheme: s,
                        ...c
                    } = e, u = {
                        onMouseEnter: (0, w.useCallback)(() => {
                            o && o({
                                row: l,
                                column: i
                            })
                        }, []),
                        onMouseLeave: a,
                        onClick: d,
                        $row: l,
                        $isDiscipline: r,
                        tx: s,
                        "data-testid": "gridItem",
                        ...c
                    };
                    return n ? (0, b.tZ)(iB, {
                        href: n,
                        ...u,
                        children: t
                    }) : (0, b.tZ)(iB, {
                        as: "div",
                        ...u,
                        children: t
                    })
                },
                iz = l(23493),
                ij = l.n(iz);
            let iA = () => {
                let {
                    innerWidth: e,
                    innerHeight: t
                } = window;
                return {
                    width: e,
                    height: t
                }
            };
            var iW = () => {
                    let [e, t] = (0, w.useState)({
                        width: 0,
                        height: 0
                    });
                    return (0, w.useEffect)(() => {
                        t(iA());
                        let e = ij()(() => {
                            t(iA())
                        }, ln.windowDimensionUpdateRateMs);
                        return window.addEventListener("resize", e), () => {
                            window.removeEventListener("resize", e)
                        }
                    }, []), e
                },
                iH = e => {
                    let {
                        hiddenBodyRef: t,
                        customTheme: l
                    } = e, [i, n] = (0, w.useState)(), o = () => {
                        var e, i, o, a, d, r, s, c;
                        let u = null === (e = t.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                            v = null === (i = t.current) || void 0 === i ? void 0 : i.scrollHeight;
                        if (!u) return;
                        let p = null === (a = l.popup) || void 0 === a ? void 0 : null === (o = a.container) || void 0 === o ? void 0 : o.left,
                            h = null === (r = l.popup) || void 0 === r ? void 0 : null === (d = r.container) || void 0 === d ? void 0 : d.top,
                            m = null === (c = l.popup) || void 0 === c ? void 0 : null === (s = c.container) || void 0 === s ? void 0 : s.right;
                        u.right > document.documentElement.clientWidth ? p = "unset" : m = "unset", u.bottom > document.documentElement.clientHeight && (h = v ? "-".concat(v) : h), n({
                            left: p,
                            top: h,
                            right: m
                        })
                    };
                    return (0, w.useEffect)(() => {
                        o()
                    }, []), {
                        bodyPosition: i
                    }
                };
            let iG = {
                    zone: "Europe/Paris",
                    setZone: !0
                },
                iX = (e, t) => {
                    let l = Y.ou.fromJSDate(e, iG).plus({
                            days: 1
                        }),
                        i = Y.ou.fromJSDate(t, iG).plus({
                            days: 1
                        }),
                        n = [];
                    for (; l <= i;) l.isValid && n.push(l.toUTC().toISODate()), l = l.plus({
                        days: 1
                    });
                    return n
                },
                iP = e => {
                    var t;
                    let l = (null === (t = e.disciplines) || void 0 === t ? void 0 : t.filter(e => null !== e)) || [],
                        i = new Set,
                        n = {
                            Ceremonies: 0,
                            TrainingSession: 0,
                            RegularEvent: 0,
                            MedalEvent: 0
                        };
                    l.forEach(e => {
                        var t;
                        null === (t = e.days) || void 0 === t || t.forEach(e => {
                            if (!e.day) return;
                            let t = Y.ou.fromISO(e.day, iG);
                            t.isValid && i.add(t), e.type && e.type in n && (n[e.type] += 1)
                        })
                    });
                    let o = Array.from(i),
                        a = Y.ou.min(...o),
                        d = Y.ou.max(...o);
                    return {
                        discs: l,
                        sDate: null == a ? void 0 : a.toJSDate(),
                        eDate: null == d ? void 0 : d.toJSDate(),
                        legend: n
                    }
                },
                i$ = (e, t) => {
                    let l = Y.ou.fromISO(e, iG),
                        i = l.day,
                        n = l.month - 1,
                        o = t.months[n];
                    return "".concat(i, " ").concat(o)
                },
                iU = e => {
                    var t, l, i, n, o, a, d, r, s, c, u, v;
                    let {
                        data: p,
                        disciplineCode: h,
                        translations: m,
                        customTheme: g
                    } = e, {
                        day: y,
                        type: f,
                        medalEvents: x,
                        disciplineName: _
                    } = p, I = (0, w.useRef)(null), {
                        bodyPosition: C
                    } = iH({
                        hiddenBodyRef: I,
                        customTheme: g
                    });
                    return (0, b.tZ)(b.HY, {
                        children: x && (0, b.BX)(iV, {
                            tx: null === (t = g.popup) || void 0 === t ? void 0 : t.container,
                            ref: I,
                            $bodyPosition: C,
                            children: [(0, b.BX)(iq, {
                                tx: null === (l = g.popup) || void 0 === l ? void 0 : l.header,
                                children: [(0, b.tZ)(iK, {
                                    type: "pictogram",
                                    tx: null === (i = g.popup) || void 0 === i ? void 0 : i.headerIcon,
                                    name: h,
                                    alt: _
                                }), (0, b.tZ)(J, {
                                    tx: null === (o = g.popup) || void 0 === o ? void 0 : null === (n = o.headerText) || void 0 === n ? void 0 : n.style,
                                    children: (0, b.BX)($, {
                                        variant: null == g ? void 0 : null === (d = g.popup) || void 0 === d ? void 0 : null === (a = d.headerText) || void 0 === a ? void 0 : a.typography,
                                        children: [_, "\xa0", (0, b.tZ)("span", {
                                            style: {
                                                fontWeight: 700
                                            },
                                            children: i$(y, m)
                                        })]
                                    })
                                })]
                            }), (0, b.BX)(iY, {
                                tx: null === (r = g.popup) || void 0 === r ? void 0 : r.body,
                                children: [(0, b.tZ)(J, {
                                    tx: null === (c = g.popup) || void 0 === c ? void 0 : null === (s = c.bodyTitle) || void 0 === s ? void 0 : s.style,
                                    children: (0, b.BX)($, {
                                        variant: null == g ? void 0 : null === (v = g.popup) || void 0 === v ? void 0 : null === (u = v.bodyTitle) || void 0 === u ? void 0 : u.typography,
                                        "data-testid": "medal-events-title",
                                        children: [x.length, x.length > 1 ? " ".concat(m.popupMedalEvents, ":") : " ".concat(m.popupMedalEvent, ":")]
                                    })
                                }), null == x ? void 0 : x.map(e => {
                                    var t, l, i;
                                    return (0, b.BX)(iJ, {
                                        tx: null === (t = g.popup) || void 0 === t ? void 0 : t.event,
                                        children: [(0, b.tZ)(ej, {
                                            name: f,
                                            alt: m.eventIcons.medal,
                                            height: 16,
                                            width: 16
                                        }), (0, b.tZ)($, {
                                            variant: null == g ? void 0 : null === (i = g.popup) || void 0 === i ? void 0 : null === (l = i.bodyText) || void 0 === l ? void 0 : l.typography,
                                            children: e.eventUnitName
                                        })]
                                    }, e.eventId)
                                })]
                            })]
                        })
                    })
                },
                iV = (0, _.Z)("div", {
                    target: "e179nrhc0"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }, "  visibility:", e => {
                    let {
                        $bodyPosition: t
                    } = e;
                    return t ? "visible" : "hidden"
                }, ";left:", e => {
                    let {
                        $bodyPosition: t
                    } = e;
                    return (null == t ? void 0 : t.left) && "".concat(t.left)
                }, ";right:", e => {
                    let {
                        $bodyPosition: t
                    } = e;
                    return (null == t ? void 0 : t.right) && "".concat(t.right)
                }, ";top:", e => {
                    let {
                        $bodyPosition: t
                    } = e;
                    return (null == t ? void 0 : t.top) && "".concat(t.top, "px")
                }, ";"),
                iq = (0, _.Z)("div", {
                    target: "e179nrhc1"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                iY = (0, _.Z)("div", {
                    target: "e179nrhc2"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                iJ = (0, _.Z)("div", {
                    target: "e179nrhc3"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                iK = (0, _.Z)(ej, {
                    target: "e179nrhc4"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                iQ = (e, t) => {
                    let l = {
                        Ceremonies: t.eventIcons.ceremony,
                        TrainingSession: t.eventIcons.training,
                        RegularEvent: t.eventIcons.regular,
                        MedalEvent: t.eventIcons.medal
                    };
                    return l[e] || l.MedalEvent
                },
                i0 = (e, t, l, i) => !!(i && e && l && l === e.disciplineName && (null == t ? void 0 : t.type) === "MedalEvent" && (null == t ? void 0 : t.day) === e.day && i === e.day),
                i1 = e => {
                    var t, l, i, n, o, a, d, r, s, c, u;
                    let {
                        discipline: v,
                        daysList: p,
                        rowIndex: h,
                        urlConfig: m,
                        handleCellMouseover: g,
                        handleCellMouseLeave: y,
                        translations: f,
                        customTheme: x
                    } = e, [_, I] = (0, w.useState)(null), C = (0, w.useMemo)(() => {
                        var e;
                        let t = new Map;
                        return null === (e = v.days) || void 0 === e || e.forEach(e => {
                            t.set(e.day, e)
                        }), t
                    }, [v.days]), S = (0, w.useCallback)(e => {
                        let t = new CustomEvent(ln.events.clickOnScheduleDiscipline, {
                            detail: {
                                disciplineCode: e
                            }
                        });
                        document.dispatchEvent(t)
                    }, []), T = (0, w.useCallback)((e, t) => {
                        let l = new CustomEvent(ln.events.clickOnScheduleDateAndDiscipline, {
                            detail: {
                                date: e,
                                disciplineCode: t
                            }
                        });
                        document.dispatchEvent(l)
                    }, []), D = (e, t) => {
                        I(t), g(e)
                    }, Z = () => {
                        I(null), y && y()
                    };
                    return v.code ? (0, b.BX)(i2, {
                        tx: null === (t = x.row) || void 0 === t ? void 0 : t.container,
                        children: [(0, b.BX)(iL, {
                            row: h,
                            column: 0,
                            "data-row": h,
                            href: m && l5("discipline", v, m),
                            onMouseEnter: () => {
                                D({
                                    row: h,
                                    column: 0
                                }, "")
                            },
                            onClick: () => {
                                S(v.code)
                            },
                            isDiscipline: !0,
                            customTheme: x,
                            children: [(0, b.tZ)(ej, {
                                type: "pictogram",
                                name: v.code,
                                alt: null !== (s = v.name) && void 0 !== s ? s : "",
                                title: null !== (c = v.name) && void 0 !== c ? c : "",
                                height: 32,
                                width: 32,
                                tx: null === (l = x.icons) || void 0 === l ? void 0 : l.discipline,
                                "aria-hidden": "true"
                            }), (0, b.tZ)(i4, {
                                tx: null === (n = x.text) || void 0 === n ? void 0 : null === (i = n.discipline) || void 0 === i ? void 0 : i.style,
                                variant: null !== (u = null === (a = x.text) || void 0 === a ? void 0 : null === (o = a.discipline) || void 0 === o ? void 0 : o.typography) && void 0 !== u ? u : null === (r = x.text) || void 0 === r ? void 0 : null === (d = r.global) || void 0 === d ? void 0 : d.typography,
                                "data-testid": "disciplineItem-".concat(h, "-", 0),
                                children: v.name
                            })]
                        }, "".concat(h, "-", 0)), p.map((e, t) => {
                            var l, i;
                            let n = C.get(e),
                                o = !!n,
                                a = null !== (l = null == n ? void 0 : n.medalEvents) && void 0 !== l ? l : [],
                                d = {
                                    day: e,
                                    disciplineName: null !== (i = v.name) && void 0 !== i ? i : "",
                                    type: "MedalEvent",
                                    medalEvents: a
                                },
                                r = i0(d, n, v.name, _);
                            return (0, b.BX)(iL, {
                                row: h,
                                column: t + 1,
                                "data-column": t + 1,
                                "data-row": h,
                                href: (null == n ? void 0 : n.type) && m && l5("day", {
                                    discipline: v,
                                    daysList: p,
                                    day: e
                                }, m),
                                onMouseEnter: () => {
                                    D({
                                        row: h,
                                        column: t + 1
                                    }, e)
                                },
                                handleCellMouseLeave: Z,
                                onClick: () => {
                                    n && T(e, v.code)
                                },
                                "aria-hidden": !o,
                                "aria-label": "".concat(i$(e, f), " ").concat(v.name, " ").concat((null == n ? void 0 : n.type) ? iQ(n.type, f) : ""),
                                customTheme: x,
                                children: [o ? (0, b.tZ)(ej, {
                                    name: n.type,
                                    alt: iQ(n.type, f),
                                    title: iQ(n.type, f),
                                    height: 16,
                                    width: 16
                                }) : (0, b.tZ)("span", {
                                    style: {
                                        width: 0,
                                        height: 0,
                                        overflow: "hidden"
                                    },
                                    children: v.name
                                }), r && (0, b.tZ)(iU, {
                                    data: d,
                                    disciplineCode: v.code,
                                    translations: f,
                                    customTheme: x
                                })]
                            }, "".concat(h, "-").concat(t + 1))
                        })]
                    }) : null
                },
                i2 = (0, _.Z)("div", {
                    target: "ee7sdq30"
                })("display:flex;", e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                i4 = (0, _.Z)($, {
                    target: "ee7sdq31"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                i8 = e => {
                    var t, l, i;
                    let {
                        daysList: n,
                        handleCellMouseover: o,
                        handleCellMouseLeave: a,
                        translations: d,
                        customTheme: r,
                        urlConfig: s
                    } = e, c = (0, w.useMemo)(() => {
                        if (n.length > 0) {
                            let e = [],
                                {
                                    month: t
                                } = Y.ou.fromISO(n[0], iG),
                                l = [],
                                i = 1;
                            return n.forEach((n, o) => {
                                let {
                                    month: a,
                                    day: d
                                } = Y.ou.fromISO(n, iG);
                                0 !== o && a !== t && (e.push({
                                    month: t,
                                    days: l
                                }), l = []), t = a, l.push({
                                    day: d,
                                    colIndex: i
                                }), i += 1
                            }), e.push({
                                month: t,
                                days: l
                            }), e
                        }
                    }, [n]), u = (0, w.useCallback)((e, t) => {
                        let {
                            year: l
                        } = Y.ou.fromISO(n[0], iG), i = Y.ou.fromObject({
                            year: l,
                            month: t,
                            day: e
                        }, iG).toFormat("yyyy-MM-dd"), o = new CustomEvent(ln.events.clickOnScheduleDate, {
                            detail: {
                                date: i
                            }
                        });
                        document.dispatchEvent(o)
                    }, []);
                    return (0, b.BX)(i3, {
                        className: "schedule-grid-date-bar-desktop",
                        tx: r.header,
                        children: [(0, b.BX)(J, {
                            tx: { ...null === (i = r.row) || void 0 === i ? void 0 : null === (l = i.cell) || void 0 === l ? void 0 : null === (t = l.discipline) || void 0 === t ? void 0 : t.global,
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [(0, b.tZ)(iL, {
                                isDiscipline: !0,
                                row: 0,
                                column: 0,
                                customTheme: r
                            }, "0-0"), (0, b.tZ)(iL, {
                                isDiscipline: !0,
                                row: 1,
                                column: 0,
                                customTheme: r
                            }, "0-1")]
                        }), null == c ? void 0 : c.map(e => {
                            var t, l, i, c, v, p, h;
                            return (0, b.BX)(i7, {
                                children: [(0, b.tZ)(i5, {
                                    tx: null === (l = r.text) || void 0 === l ? void 0 : null === (t = l.month) || void 0 === t ? void 0 : t.style,
                                    variant: null !== (h = null === (c = r.text) || void 0 === c ? void 0 : null === (i = c.month) || void 0 === i ? void 0 : i.typography) && void 0 !== h ? h : null === (p = r.text) || void 0 === p ? void 0 : null === (v = p.global) || void 0 === v ? void 0 : v.typography,
                                    "data-testid": "monthName",
                                    children: d.months[e.month - 1].toUpperCase()
                                }), (0, b.tZ)("div", {
                                    style: {
                                        display: "flex"
                                    },
                                    children: e.days.map(t => {
                                        var l, i, d, c, v, p, h;
                                        return (0, b.tZ)(iL, {
                                            onMouseEnter: () => {
                                                o({
                                                    row: 1,
                                                    column: t.colIndex
                                                })
                                            },
                                            handleCellMouseLeave: a,
                                            row: 1,
                                            href: s && l5("month", {
                                                monthDetail: e,
                                                daysList: n,
                                                day: t
                                            }, s),
                                            "data-column": t.colIndex,
                                            column: t.colIndex,
                                            customTheme: r,
                                            onClick: () => {
                                                u(t.day, e.month)
                                            },
                                            children: (0, b.tZ)(i6, {
                                                tx: null === (i = r.text) || void 0 === i ? void 0 : null === (l = i.date) || void 0 === l ? void 0 : l.style,
                                                variant: null !== (h = null === (c = r.text) || void 0 === c ? void 0 : null === (d = c.date) || void 0 === d ? void 0 : d.typography) && void 0 !== h ? h : null === (p = r.text) || void 0 === p ? void 0 : null === (v = p.global) || void 0 === v ? void 0 : v.typography,
                                                "data-testid": "monthDate-".concat(1, "-").concat(t.colIndex),
                                                children: t.day
                                            })
                                        }, "".concat(1, "-").concat(t.colIndex))
                                    })
                                })]
                            }, "m-".concat(e.month))
                        })]
                    })
                },
                i3 = (0, _.Z)("div", {
                    target: "e1j5723h0"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                i5 = (0, _.Z)($, {
                    target: "e1j5723h1"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                i6 = (0, _.Z)($, {
                    target: "e1j5723h2"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                i7 = (0, _.Z)("div", {
                    target: "e1j5723h3"
                })("display:flex;flex-direction:column;"),
                i9 = {
                    Ceremonies: "Ceremonies",
                    TrainingSession: "TrainingSession",
                    RegularEvent: "RegularEvent",
                    MedalEvent: "MedalEvent"
                },
                ne = e => {
                    var t, l, i, n, o, a, d, r, s;
                    let {
                        customTheme: c,
                        translations: u,
                        legendData: v
                    } = e, {
                        Ceremonies: p,
                        TrainingSession: h,
                        RegularEvent: m,
                        MedalEvent: g
                    } = v;
                    return (0, b.BX)(J, {
                        tx: null === (t = c.legend) || void 0 === t ? void 0 : t.container,
                        children: [p > 0 && (0, b.BX)(J, {
                            tx: null === (l = c.legend) || void 0 === l ? void 0 : l.legendItem,
                            children: [(0, b.tZ)(ej, {
                                name: i9.Ceremonies,
                                alt: u.eventIcons.ceremony,
                                title: u.eventIcons.ceremony,
                                height: 16,
                                width: 16
                            }), (0, b.tZ)($, {
                                variant: null == c ? void 0 : null === (i = c.legend) || void 0 === i ? void 0 : i.legendText,
                                children: u.eventIcons.ceremony
                            })]
                        }), h > 0 && (0, b.BX)(J, {
                            tx: null === (n = c.legend) || void 0 === n ? void 0 : n.legendItem,
                            children: [(0, b.tZ)(ej, {
                                name: i9.TrainingSession,
                                alt: u.eventIcons.training,
                                title: u.eventIcons.training,
                                height: 16,
                                width: 16
                            }), (0, b.tZ)($, {
                                variant: null === (o = c.legend) || void 0 === o ? void 0 : o.legendText,
                                children: u.eventIcons.training
                            })]
                        }), m > 0 && (0, b.BX)(J, {
                            tx: null === (a = c.legend) || void 0 === a ? void 0 : a.legendItem,
                            children: [(0, b.tZ)(ej, {
                                name: i9.RegularEvent,
                                alt: u.eventIcons.regular,
                                title: u.eventIcons.regular,
                                height: 16,
                                width: 16
                            }), (0, b.tZ)($, {
                                variant: null === (d = c.legend) || void 0 === d ? void 0 : d.legendText,
                                children: u.eventIcons.regular
                            })]
                        }), g > 0 && (0, b.BX)(J, {
                            tx: null === (r = c.legend) || void 0 === r ? void 0 : r.legendItem,
                            children: [(0, b.tZ)(ej, {
                                name: i9.MedalEvent,
                                alt: u.eventIcons.medal,
                                title: u.eventIcons.medal,
                                height: 16,
                                width: 16
                            }), (0, b.tZ)($, {
                                variant: null === (s = c.legend) || void 0 === s ? void 0 : s.legendText,
                                children: u.eventIcons.medal
                            })]
                        })]
                    })
                },
                nt = {
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        marginBottom: "64px"
                    },
                    header: {
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        marginBottom: "16px",
                        backgroundColor: "".concat(F.colors.white),
                        boxShadow: "".concat(F.elevation[300])
                    },
                    row: {
                        container: {},
                        cell: {
                            global: {
                                global: {
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "48px",
                                    height: "40px",
                                    margin: "2px"
                                },
                                focus: {
                                    backgroundColor: "".concat(F.colors.tertiary300)
                                },
                                colFocus: {
                                    backgroundColor: "".concat(F.colors.tertiary300)
                                },
                                rowFocus: {
                                    backgroundColor: "".concat(F.colors.tertiary300)
                                }
                            },
                            discipline: {
                                global: {
                                    justifyContent: "flex-start",
                                    width: "356px"
                                },
                                even: {
                                    boxShadow: "-2px 0 0 0 ".concat(F.colors.primary900)
                                }
                            },
                            event: {
                                even: {
                                    backgroundColor: "".concat(F.colors.white)
                                },
                                odd: {
                                    backgroundColor: "".concat(F.colors.primary100)
                                }
                            }
                        }
                    },
                    text: {
                        discipline: {
                            typography: "body2"
                        },
                        date: {
                            typography: "body2"
                        },
                        month: {
                            typography: "ui3",
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                height: "40px"
                            }
                        }
                    },
                    icons: {
                        discipline: {
                            padding: "0 8px 0 18px"
                        }
                    },
                    legend: {
                        container: {
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: "32px",
                            marginTop: "32px"
                        },
                        legendItem: {
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            textTransform: "capitalize"
                        },
                        legendText: "ui7"
                    },
                    popup: {
                        container: {
                            position: "absolute",
                            top: "40px",
                            left: "52px",
                            right: "52px",
                            width: "354px",
                            padding: "10px",
                            backgroundColor: "".concat(F.colors.white),
                            zIndex: 1,
                            borderRadius: "4px",
                            boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.06)"
                        },
                        header: {
                            borderBottom: "1px solid ".concat(F.colors.gray300),
                            paddingBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        },
                        headerText: {
                            typography: "ui2",
                            style: {
                                display: "flex",
                                alignItems: "center"
                            }
                        },
                        headerIcon: {
                            width: "24px",
                            height: "24px"
                        },
                        body: {
                            paddingTop: "10px"
                        },
                        bodyTitle: {
                            typography: "ui6",
                            style: {
                                textTransform: "capitalize"
                            }
                        },
                        bodyText: {
                            typography: "ui6"
                        },
                        event: {
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            marginTop: "5px"
                        }
                    }
                },
                nl = e => {
                    let {
                        data: t,
                        translations: l,
                        customTheme: i = nt,
                        urlConfig: n,
                        className: o
                    } = e, {
                        discs: a,
                        sDate: d,
                        eDate: r,
                        legend: s
                    } = (0, w.useMemo)(() => iP(t), [t]), c = (0, w.useMemo)(() => a.length > 0 ? iX(d, r) : [], [a, d, r]), u = (0, w.useMemo)(() => s, [s]), v = (0, w.useRef)(null), p = (0, w.useRef)(iO()(() => {
                        v.current && v.current.querySelectorAll(".hover-row, .hover-column").forEach(e => {
                            e.classList.remove("hover-row", "hover-column")
                        })
                    }, 100)).current, h = (0, w.useCallback)(e => {
                        if (!e) return;
                        let {
                            row: t,
                            column: l
                        } = e;
                        if (v.current) {
                            let e = v.current,
                                i = e.querySelectorAll(".hover-row, .hover-column"),
                                n = e.querySelectorAll('[data-row="'.concat(t, '"]')),
                                o = e.querySelectorAll('[data-column="'.concat(l, '"]'));
                            i.forEach(e => {
                                e.classList.remove("hover-row", "hover-column")
                            }), n.forEach(e => {
                                e.classList.add("hover-row")
                            }), o.forEach(e => {
                                e.classList.add("hover-column")
                            })
                        }
                        p.cancel()
                    }, [p]), m = () => {
                        p()
                    };
                    return (0, w.useEffect)(() => () => {
                        p.cancel()
                    }, [p]), (0, b.tZ)(b.HY, {
                        children: a && (0, b.BX)(ni, {
                            tx: i,
                            "data-testid": "scheduleGrid",
                            ref: v,
                            className: o,
                            children: [(0, b.tZ)(i8, {
                                urlConfig: n,
                                daysList: c,
                                handleCellMouseover: h,
                                handleCellMouseLeave: m,
                                translations: l,
                                customTheme: i
                            }), (0, b.BX)(nn, {
                                tx: i.body,
                                onMouseLeave: m,
                                "data-testid": "scheduleGridBody",
                                children: [a.map((e, t) => (0, b.tZ)(i1, {
                                    urlConfig: n,
                                    discipline: e,
                                    daysList: c,
                                    rowIndex: t + 2,
                                    handleCellMouseover: h,
                                    handleCellMouseLeave: m,
                                    translations: l,
                                    customTheme: i
                                }, e.code)), u && (0, b.tZ)(ne, {
                                    legendData: u,
                                    translations: l,
                                    customTheme: i
                                })]
                            })]
                        })
                    })
                },
                ni = (0, _.Z)("div", {
                    target: "envn5w80"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...null == t ? void 0 : t.container
                    }
                }, "  & .hover-row{", e => {
                    var t, l, i;
                    let {
                        tx: n
                    } = e;
                    return { ...null == n ? void 0 : null === (i = n.row) || void 0 === i ? void 0 : null === (l = i.cell) || void 0 === l ? void 0 : null === (t = l.global) || void 0 === t ? void 0 : t.rowFocus
                    }
                }, "}& .hover-column{", e => {
                    var t, l, i;
                    let {
                        tx: n
                    } = e;
                    return { ...null == n ? void 0 : null === (i = n.row) || void 0 === i ? void 0 : null === (l = i.cell) || void 0 === l ? void 0 : null === (t = l.global) || void 0 === t ? void 0 : t.colFocus
                    }
                }, "}& .hover-row.hover-column{", e => {
                    var t, l, i;
                    let {
                        tx: n
                    } = e;
                    return { ...null == n ? void 0 : null === (i = n.row) || void 0 === i ? void 0 : null === (l = i.cell) || void 0 === l ? void 0 : null === (t = l.global) || void 0 === t ? void 0 : t.focus
                    }
                }, "}"),
                nn = (0, _.Z)("div", {
                    target: "envn5w81"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                });
            nl.displayName = "ScheduleGrid";
            let no = {
                    container: {
                        padding: "28px 16px"
                    },
                    calendar: {
                        calendar: {
                            container: {
                                padding: "16px",
                                backgroundColor: "".concat(F.colors.white),
                                borderRadius: "6px",
                                boxShadow: "".concat(F.elevation[900])
                            },
                            date: {
                                disabled: {
                                    backgroundColor: "grey",
                                    opacity: .2
                                }
                            },
                            global: {
                                width: "36px",
                                margin: "7px 4px"
                            },
                            month: {
                                lineHeight: "10px"
                            },
                            body: {},
                            header: {
                                color: "".concat(F.colors.gray600),
                                borderBottom: "1px solid ".concat(F.colors.gray300)
                            },
                            text: {
                                month: "ui12"
                            }
                        }
                    },
                    disciplines: {
                        list: {
                            item: {
                                global: {}
                            }
                        },
                        discipline: {
                            global: {
                                display: "flex",
                                alignItems: "center",
                                flexGrow: 1,
                                padding: "4px 8px",
                                height: "40px"
                            },
                            even: {
                                backgroundColor: "".concat(F.colors.white),
                                boxShadow: "-2px 0 0 0 ".concat(F.colors.primary900)
                            },
                            icon: {
                                paddingRight: "8px"
                            }
                        }
                    },
                    text: {
                        disciplineTitle: {
                            style: {
                                padding: "20px 0 16px 0"
                            },
                            typography: "title4"
                        },
                        disciplineName: {
                            typography: "body3"
                        }
                    }
                },
                na = e => {
                    var t, l, i, n, o, a, d, r;
                    let {
                        discipline: s,
                        title: c,
                        rowIndex: u,
                        customTheme: v,
                        onClick: p,
                        href: h
                    } = e, m = (0, b.BX)(b.HY, {
                        children: [(0, b.tZ)(ej, {
                            type: "pictogram",
                            name: null !== (r = s.code) && void 0 !== r ? r : "",
                            alt: c,
                            height: 32,
                            width: 32,
                            tx: null == v ? void 0 : null === (l = v.disciplines) || void 0 === l ? void 0 : null === (t = l.discipline) || void 0 === t ? void 0 : t.icon
                        }), (0, b.tZ)(nr, {
                            tx: null == v ? void 0 : null === (n = v.text) || void 0 === n ? void 0 : null === (i = n.disciplineName) || void 0 === i ? void 0 : i.style,
                            children: (0, b.tZ)($, {
                                variant: null == v ? void 0 : null === (a = v.text) || void 0 === a ? void 0 : null === (o = a.disciplineName) || void 0 === o ? void 0 : o.typography,
                                children: s.name
                            })
                        })]
                    }), g = {
                        $rowIndex: u,
                        tx: null == v ? void 0 : null === (d = v.disciplines) || void 0 === d ? void 0 : d.discipline,
                        onClick: p,
                        "data-testid": "disciplineItem-".concat(u)
                    };
                    return h ? (0, b.tZ)(nd, {
                        href: h,
                        ...g,
                        children: m
                    }) : (0, b.tZ)(nd, {
                        as: "div",
                        ...g,
                        children: m
                    })
                },
                nd = (0, _.Z)("a", B, {
                    target: "e1ngxqoq0"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...null == t ? void 0 : t.global
                    }
                }, " ", e => {
                    var t, l;
                    return e.$rowIndex % 2 == 0 ? (0, W.iv)({ ...null === (l = e.tx) || void 0 === l ? void 0 : l.even
                    }) : (0, W.iv)({ ...null === (t = e.tx) || void 0 === t ? void 0 : t.odd
                    })
                }),
                nr = (0, _.Z)("div", {
                    target: "e1ngxqoq1"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                ns = e => {
                    let t = new CustomEvent(ln.events.clickOnScheduleDiscipline, {
                        detail: {
                            disciplineCode: e
                        }
                    });
                    document.dispatchEvent(t)
                },
                nc = e => {
                    var t, l, i, n;
                    let {
                        data: o,
                        urlConfig: a,
                        translations: d,
                        customTheme: r = no,
                        className: s
                    } = e, c = e => e.reduce((e, t, l) => {
                        if (null !== t) {
                            let i = {
                                id: t.code,
                                item: (0, b.tZ)(na, {
                                    discipline: t,
                                    title: t.name,
                                    href: a && l5("discipline", t, a),
                                    rowIndex: l,
                                    customTheme: r,
                                    onClick: () => {
                                        var e;
                                        ns(null !== (e = t.code) && void 0 !== e ? e : "")
                                    }
                                })
                            };
                            e.push(i)
                        }
                        return e
                    }, []), u = (e, t) => {
                        let l = [];
                        return e.forEach(e => {
                            var t;
                            null === (t = e.days) || void 0 === t || t.forEach(e => {
                                if (!e.day) return;
                                let t = Y.ou.fromISO(e.day);
                                t.isValid && !l.some(e => e.hasSame(t, "day")) && l.push(t)
                            })
                        }), l.sort((e, t) => e.toMillis() - t.toMillis()), l.filter(e => e.isValid && null != e.toISODate()).map(e => {
                            let l = e.toISODate(),
                                i = d.months[e.month - 1].toUpperCase();
                            return {
                                date: l,
                                startOfDayMs: e.startOf("day").toMillis(),
                                month: i,
                                href: t && l5("date", {
                                    date: l,
                                    month: i
                                }, t)
                            }
                        })
                    }, [v, p] = (0, w.useMemo)(() => {
                        var e, t;
                        let l = c(null !== (e = o.disciplines) && void 0 !== e ? e : []);
                        return [u(null !== (t = o.disciplines) && void 0 !== t ? t : [], a), l]
                    }, [o, d, r, a]), h = (0, w.useCallback)(e => {
                        let t = {
                                date: e.date
                            },
                            l = new CustomEvent(ln.events.clickOnScheduleDate, {
                                detail: t
                            });
                        document.dispatchEvent(l)
                    }, []), m = v.length > 0 && p.length > 0;
                    return (0, b.tZ)(b.HY, {
                        children: m && (0, b.BX)(nu, {
                            tx: r.container,
                            "data-testid": "scheduleGridMobile",
                            className: s,
                            children: [(0, b.tZ)(es, {
                                days: d.days,
                                dates: v,
                                startDay: 0,
                                onDateClick: h,
                                customTheme: r.calendar
                            }), (0, b.tZ)(nv, {
                                tx: null === (l = r.text) || void 0 === l ? void 0 : null === (t = l.disciplineTitle) || void 0 === t ? void 0 : t.style,
                                children: (0, b.tZ)($, {
                                    variant: null === (n = r.text) || void 0 === n ? void 0 : null === (i = n.disciplineTitle) || void 0 === i ? void 0 : i.typography,
                                    children: d.sportsTitle
                                })
                            }), (0, b.tZ)(eY, {
                                items: p,
                                customTheme: r.disciplines
                            })]
                        })
                    })
                },
                nu = (0, _.Z)("div", {
                    target: "e1m0bwbx0"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                nv = (0, _.Z)("div", {
                    target: "e1m0bwbx1"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                });
            nc.displayName = "ScheduleGridMobile";
            let np = e => {
                let {
                    renderer: t,
                    width: l,
                    height: i,
                    clientOnly: n,
                    breakpoints: o
                } = e, a = tX();
                if (!t) return null;
                let d = o ? Object.entries(o).reduce((e, t) => {
                    let [l, i] = t;
                    return e["@media (min-width: ".concat(l, "px)")] = {
                        width: i.width,
                        minHeight: i.height
                    }, e
                }, {}) : {};
                return (0, b.tZ)(J, {
                    tx: {
                        width: l,
                        minHeight: i,
                        ...d
                    },
                    children: (0, b.tZ)(li, {
                        children: (!n || n && !a) && (0, b.tZ)(t, {})
                    })
                })
            };
            var nh = l(82492),
                nm = l.n(nh);
            let ng = function(e, t) {
                    let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        i = (0, w.useMemo)(() => nm()({}, e, t), [e, t]);
                    return (0, w.useMemo)(() => l ? i : null != e ? e : {}, [l, i])
                },
                ny = e => {
                    let {
                        isExpanded: t,
                        customIconName: l,
                        translationCollapse: i,
                        translationExpand: n
                    } = e, {
                        iconName: o,
                        iconTitle: a
                    } = t ? {
                        iconName: null != l ? l : "collapse",
                        iconTitle: i
                    } : {
                        iconName: null != l ? l : "expand",
                        iconTitle: n
                    };
                    return [o, a]
                },
                nf = e => {
                    var t, l, i, n, o, a, d, r, s, c, u, v, p, h, m, g, y, f, x, w, _, I, C, S, T, D, Z, E, k, N, R, M, F, O, B, L, z, j, A, W, H, G, X, P, $, U, V;
                    let {
                        data: q,
                        eventTarget: Y,
                        urlConfig: Q,
                        translations: et,
                        customTheme: el,
                        showDisciplineEvents: ei,
                        onToggleShowDisciplineEvents: en
                    } = e, eo = ng(null == el ? void 0 : el.athlete, null == el ? void 0 : null === (t = el.athlete) || void 0 === t ? void 0 : t.expanded, ei), [ea, ed] = ny({
                        isExpanded: ei,
                        translationCollapse: et.collapseMedalist,
                        translationExpand: et.expandMedalist,
                        customIconName: null == eo ? void 0 : null === (i = eo.row) || void 0 === i ? void 0 : null === (l = i.expandIcon) || void 0 === l ? void 0 : l.iconName
                    }), er = () => {
                        if (ei) return;
                        let {
                            code: e,
                            fullName: t,
                            initialName: l,
                            tvName: i,
                            tvInitialName: n,
                            gender: o,
                            organisation: a,
                            organisationName: d,
                            medalsGold: r,
                            medalsSilver: s,
                            medalsBronze: c,
                            medalsTotal: u,
                            extraData: v
                        } = q, p = new CustomEvent(ln.events.clickOnCompetitorExpansion, {
                            detail: {
                                competitorCode: e,
                                competitorFullName: t,
                                competitorInitialName: l,
                                competitorTvName: i,
                                competitorTvInitialName: n,
                                competitorGender: o,
                                organisationCode: a,
                                organisationName: d,
                                competitorMedalsGold: r,
                                competitorMedalsSilver: s,
                                competitorMedalsBronze: c,
                                competitorMedalsTotal: u,
                                competitorExtraData: v
                            }
                        });
                        document.dispatchEvent(p)
                    };
                    return (0, b.tZ)(J, {
                        tx: {
                            padding: "0.5rem 0 0"
                        },
                        children: (0, b.BX)(J, {
                            tx: { ...eo.container,
                                ...eo.defaultTypography,
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [(0, b.BX)(J, {
                                tx: null === (n = eo.row) || void 0 === n ? void 0 : n.container,
                                onClick: () => {
                                    if (!(null == q ? void 0 : q.code)) {
                                        console.error("Athlete props.data.code is falsy: ".concat(null == q ? void 0 : q.code));
                                        return
                                    }
                                    ei || er(), null == en || en(q.code)
                                },
                                children: [(0, b.BX)(J, {
                                    tx: { ...null == el ? void 0 : null === (a = el.header) || void 0 === a ? void 0 : null === (o = a.headerNoc) || void 0 === o ? void 0 : o.style,
                                        display: "flex"
                                    },
                                    children: [(0, b.tZ)(ej, {
                                        type: "flag",
                                        name: null !== (X = null === (d = q.organisation) || void 0 === d ? void 0 : d.toLowerCase()) && void 0 !== X ? X : "",
                                        width: null === (s = eo.row) || void 0 === s ? void 0 : null === (r = s.flagIcon) || void 0 === r ? void 0 : r.width,
                                        height: null === (u = eo.row) || void 0 === u ? void 0 : null === (c = u.flagIcon) || void 0 === c ? void 0 : c.height,
                                        alt: (0, l1.wT)(et.flagIconTitle, [{
                                            placeholder: "{noc-name}",
                                            replacement: null !== (P = q.organisationName) && void 0 !== P ? P : ""
                                        }]),
                                        title: (0, l1.wT)(et.flagIconTitle, [{
                                            placeholder: "{noc-name}",
                                            replacement: null !== ($ = q.organisationName) && void 0 !== $ ? $ : ""
                                        }]),
                                        tx: null === (p = eo.row) || void 0 === p ? void 0 : null === (v = p.flagIcon) || void 0 === v ? void 0 : v.style
                                    }), (0, b.tZ)(K, {
                                        tx: { ...null === (m = eo.row) || void 0 === m ? void 0 : null === (h = m.organisation) || void 0 === h ? void 0 : h.style,
                                            display: "flex"
                                        },
                                        children: q.organisation
                                    })]
                                }), (0, b.tZ)(J, {
                                    tx: {
                                        display: "flex"
                                    },
                                    children: (0, b.tZ)(K, {
                                        tx: { ...null === (y = eo.row) || void 0 === y ? void 0 : null === (g = y.name) || void 0 === g ? void 0 : g.style,
                                            ...null == el ? void 0 : el.links
                                        },
                                        children: q.fullName
                                    })
                                }), (null == el ? void 0 : el.display) === "desktop" && (0, b.BX)(b.HY, {
                                    children: [(0, b.tZ)(K, {
                                        tx: { ...null == el ? void 0 : null === (x = el.header) || void 0 === x ? void 0 : null === (f = x.medalIcon) || void 0 === f ? void 0 : f.container,
                                            ...null === (_ = eo.row) || void 0 === _ ? void 0 : null === (w = _.gold) || void 0 === w ? void 0 : w.style
                                        },
                                        children: q.medalsGold
                                    }), (0, b.tZ)(K, {
                                        tx: { ...null == el ? void 0 : null === (C = el.header) || void 0 === C ? void 0 : null === (I = C.medalIcon) || void 0 === I ? void 0 : I.container,
                                            ...null === (T = eo.row) || void 0 === T ? void 0 : null === (S = T.silver) || void 0 === S ? void 0 : S.style
                                        },
                                        children: q.medalsSilver
                                    }), (0, b.tZ)(K, {
                                        tx: { ...null == el ? void 0 : null === (Z = el.header) || void 0 === Z ? void 0 : null === (D = Z.medalIcon) || void 0 === D ? void 0 : D.container,
                                            ...null === (k = eo.row) || void 0 === k ? void 0 : null === (E = k.bronze) || void 0 === E ? void 0 : E.style
                                        },
                                        children: q.medalsBronze
                                    })]
                                }), (0, b.tZ)(K, {
                                    tx: { ...null == el ? void 0 : null === (R = el.header) || void 0 === R ? void 0 : null === (N = R.medalIcon) || void 0 === N ? void 0 : N.container,
                                        ...null === (F = eo.row) || void 0 === F ? void 0 : null === (M = F.total) || void 0 === M ? void 0 : M.style
                                    },
                                    children: q.medalsTotal
                                }), (0, b.tZ)(ee, {
                                    tx: { ...null === (B = eo.row) || void 0 === B ? void 0 : null === (O = B.expandIcon) || void 0 === O ? void 0 : O.container
                                    },
                                    type: "button",
                                    children: (0, b.tZ)(J, {
                                        tx: null === (z = eo.row) || void 0 === z ? void 0 : null === (L = z.expandIcon) || void 0 === L ? void 0 : L.style,
                                        "data-testid": "ExpandAthleteIcon",
                                        children: (0, b.tZ)(ej, {
                                            name: ea,
                                            width: null === (A = eo.row) || void 0 === A ? void 0 : null === (j = A.expandIcon) || void 0 === j ? void 0 : j.width,
                                            height: null === (H = eo.row) || void 0 === H ? void 0 : null === (W = H.expandIcon) || void 0 === W ? void 0 : W.height,
                                            alt: (0, l1.wT)(ed, [{
                                                placeholder: "{medalist}",
                                                replacement: null !== (U = q.fullName) && void 0 !== U ? U : ""
                                            }]),
                                            title: (0, l1.wT)(ed, [{
                                                placeholder: "{medalist}",
                                                replacement: null !== (V = q.fullName) && void 0 !== V ? V : ""
                                            }])
                                        })
                                    })
                                })]
                            }), (0, b.tZ)("div", {
                                style: {
                                    width: "100%",
                                    overflow: "hidden"
                                },
                                children: (0, b.tZ)(ef, {
                                    open: ei,
                                    children: (0, b.tZ)(J, {
                                        tx: { ...eo.collapsible,
                                            width: "100%"
                                        },
                                        children: null == q ? void 0 : null === (G = q.medals) || void 0 === G ? void 0 : G.map(e => e.event && (0, b.tZ)(nx, {
                                            athlete: q,
                                            customTheme: el,
                                            data: e,
                                            eventTarget: Y,
                                            translations: et,
                                            urlConfig: Q
                                        }, e.event + q.code))
                                    })
                                })
                            })]
                        })
                    })
                },
                nx = e => {
                    var t, l, i, n, o, a, d, r, s, c, u, v, p, h, m, g, y, f, x, _, I, C, S, T, D, Z, E, k, N, R, M, F, O, B, L, z, j, A, W, H, G, X, P, $, U, V, q, Y, et, el, ei;
                    let {
                        athlete: en,
                        customTheme: eo,
                        data: ea,
                        eventTarget: ed,
                        translations: er,
                        urlConfig: es
                    } = e, ec = "".concat(ea.event, "_").concat(en.code), eu = (0, w.useCallback)(e => {
                        e.stopPropagation();
                        let t = {
                                competitorCode: en.code,
                                competitorFullName: en.fullName,
                                competitorInitialName: en.initialName,
                                competitorTvName: en.tvName,
                                competitorTvInitialName: en.tvInitialName,
                                competitorGender: en.gender,
                                competitorMedalsGold: en.medalsGold,
                                competitorMedalsSilver: en.medalsSilver,
                                competitorMedalsBronze: en.medalsBronze,
                                competitorMedalsTotal: en.medalsTotal,
                                organisationCode: en.organisation,
                                organisationName: en.organisationName,
                                competitorExtraData: en.extraData,
                                medalType: ea.medalType,
                                medalOfficial: ea.official,
                                medalDate: ea.date,
                                disciplineCode: ea.disciplineCode,
                                disciplineName: ea.disciplineName,
                                eventCode: ea.event,
                                eventDescription: ea.eventName,
                                eventCategory: ea.category,
                                medalExtraData: ea.extraData,
                                medalDetailId: ec
                            },
                            l = new CustomEvent(ln.events.clickOnDisciplineEventContextualMenu, {
                                detail: t
                            });
                        document.dispatchEvent(l)
                    }, []), ev = es && l5("event", ea, es);
                    return (0, b.tZ)(J, {
                        tx: null == eo ? void 0 : null === (t = eo.disciplineEvent) || void 0 === t ? void 0 : t.container,
                        "data-medal-detail-id": ec,
                        children: (0, b.BX)(J, {
                            tx: null == eo ? void 0 : null === (i = eo.disciplineEvent) || void 0 === i ? void 0 : null === (l = i.row) || void 0 === l ? void 0 : l.container,
                            children: [(null == eo ? void 0 : eo.display) === "desktop" && (0, b.tZ)(J, {
                                tx: null == eo ? void 0 : null === (o = eo.header) || void 0 === o ? void 0 : null === (n = o.headerNoc) || void 0 === n ? void 0 : n.style
                            }), (0, b.BX)(J, {
                                tx: { ...null == eo ? void 0 : null === (r = eo.disciplineEvent) || void 0 === r ? void 0 : null === (d = r.row) || void 0 === d ? void 0 : null === (a = d.eventInfo) || void 0 === a ? void 0 : a.container,
                                    ...null == eo ? void 0 : null === (s = eo.disciplineEvent) || void 0 === s ? void 0 : s.defaultTypography,
                                    display: "flex"
                                },
                                children: [ev ? (0, b.tZ)(Q, {
                                    href: ev,
                                    target: ed,
                                    title: ev && (0, l1.wT)(ev, [{
                                        placeholder: "{event name}",
                                        replacement: ea.disciplineName
                                    }]),
                                    tx: { ...null == eo ? void 0 : eo.links,
                                        ...null == eo ? void 0 : null === (p = eo.disciplineEvent) || void 0 === p ? void 0 : null === (v = p.row) || void 0 === v ? void 0 : null === (u = v.eventInfo) || void 0 === u ? void 0 : null === (c = u.eventName) || void 0 === c ? void 0 : c.style
                                    },
                                    children: ea.disciplineName
                                }) : (0, b.tZ)(K, {
                                    tx: null == eo ? void 0 : null === (y = eo.disciplineEvent) || void 0 === y ? void 0 : null === (g = y.row) || void 0 === g ? void 0 : null === (m = g.eventInfo) || void 0 === m ? void 0 : null === (h = m.disciplineName) || void 0 === h ? void 0 : h.style,
                                    children: ea.disciplineName
                                }), (0, b.BX)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [ev ? (0, b.tZ)(Q, {
                                        href: ev,
                                        target: ed,
                                        title: ev && (0, l1.wT)(ev, [{
                                            placeholder: "{event name}",
                                            replacement: ea.disciplineName
                                        }]),
                                        tx: { ...null == eo ? void 0 : eo.links,
                                            ...null == eo ? void 0 : null === (I = eo.disciplineEvent) || void 0 === I ? void 0 : null === (_ = I.row) || void 0 === _ ? void 0 : null === (x = _.eventInfo) || void 0 === x ? void 0 : null === (f = x.eventName) || void 0 === f ? void 0 : f.style
                                        },
                                        children: ea.eventName
                                    }) : (0, b.tZ)(K, {
                                        tx: null == eo ? void 0 : null === (D = eo.disciplineEvent) || void 0 === D ? void 0 : null === (T = D.row) || void 0 === T ? void 0 : null === (S = T.eventInfo) || void 0 === S ? void 0 : null === (C = S.eventName) || void 0 === C ? void 0 : C.style,
                                        children: ea.eventName
                                    }), !ea.official && (0, b.tZ)(ej, {
                                        name: ln.icon.unofficialMedalIcon,
                                        alt: er.unofficialMedalTitle,
                                        width: 20,
                                        height: 20,
                                        title: er.unofficialMedalTitle,
                                        style: {
                                            paddingLeft: "8px"
                                        }
                                    })]
                                })]
                            }), (0, b.tZ)(J, {
                                tx: { ...null == eo ? void 0 : null === (k = eo.disciplineEvent) || void 0 === k ? void 0 : null === (E = k.row) || void 0 === E ? void 0 : null === (Z = E.medalIcon) || void 0 === Z ? void 0 : Z.container,
                                    display: "flex"
                                },
                                children: (0, b.tZ)(lr, {
                                    medalType: ea.medalType,
                                    title: lf(er, ea.medalType),
                                    MedalAbbreviation: la(er, null !== (q = ea.medalType) && void 0 !== q ? q : ""),
                                    showTitle: !0,
                                    styles: null == eo ? void 0 : null === (M = eo.disciplineEvent) || void 0 === M ? void 0 : null === (R = M.row) || void 0 === R ? void 0 : null === (N = R.medalIcon) || void 0 === N ? void 0 : N.style
                                })
                            }), (0, b.tZ)(ee, {
                                "data-testid": "contextualMenuIcon",
                                onClick: e => {
                                    e.stopPropagation(), eu(e)
                                },
                                "aria-label": "Open contextual menu",
                                title: "Open contextual menu",
                                type: "button",
                                tx: null == eo ? void 0 : null === (B = eo.disciplineEvent) || void 0 === B ? void 0 : null === (O = B.row) || void 0 === O ? void 0 : null === (F = O.contextualIcon) || void 0 === F ? void 0 : F.container,
                                className: "contextualmenu-button",
                                children: (0, b.tZ)(ej, {
                                    name: ln.icon.contextualMenu,
                                    alt: (0, l1.wT)(er.openContextualMenu, [{
                                        placeholder: "{discipline-name}",
                                        replacement: null !== (Y = ea.disciplineName) && void 0 !== Y ? Y : ""
                                    }, {
                                        placeholder: "{event-name}",
                                        replacement: null !== (et = ea.eventName) && void 0 !== et ? et : ""
                                    }]),
                                    title: (0, l1.wT)(er.openContextualMenu, [{
                                        placeholder: "{discipline-name}",
                                        replacement: null !== (el = ea.disciplineName) && void 0 !== el ? el : ""
                                    }, {
                                        placeholder: "{event-name}",
                                        replacement: null !== (ei = ea.eventName) && void 0 !== ei ? ei : ""
                                    }]),
                                    width: null == eo ? void 0 : null === (j = eo.disciplineEvent) || void 0 === j ? void 0 : null === (z = j.row) || void 0 === z ? void 0 : null === (L = z.contextualIcon) || void 0 === L ? void 0 : L.width,
                                    height: null == eo ? void 0 : null === (H = eo.disciplineEvent) || void 0 === H ? void 0 : null === (W = H.row) || void 0 === W ? void 0 : null === (A = W.contextualIcon) || void 0 === A ? void 0 : A.height,
                                    color: null == eo ? void 0 : null === (P = eo.disciplineEvent) || void 0 === P ? void 0 : null === (X = P.row) || void 0 === X ? void 0 : null === (G = X.contextualIcon) || void 0 === G ? void 0 : G.color,
                                    tx: null == eo ? void 0 : null === (V = eo.disciplineEvent) || void 0 === V ? void 0 : null === (U = V.row) || void 0 === U ? void 0 : null === ($ = U.contextualIcon) || void 0 === $ ? void 0 : $.style
                                })
                            })]
                        })
                    })
                },
                nb = e => {
                    var t, l, i, n, o, a, d, r, s, c, u, v;
                    let {
                        translations: p,
                        customTheme: h,
                        sortedBy: m
                    } = e, g = "Nocs" === m ? { ...null == h ? void 0 : null === (l = h.header) || void 0 === l ? void 0 : null === (t = l.sortedText) || void 0 === t ? void 0 : t.style
                    } : void 0;
                    return (0, b.BX)(J, {
                        tx: { ...null == h ? void 0 : null === (i = h.header) || void 0 === i ? void 0 : i.container,
                            ...null == h ? void 0 : null === (n = h.header) || void 0 === n ? void 0 : n.defaultTypography
                        },
                        children: [(0, b.tZ)(K, {
                            tx: { ...null == h ? void 0 : null === (a = h.header) || void 0 === a ? void 0 : null === (o = a.headerNoc) || void 0 === o ? void 0 : o.style,
                                ...g,
                                display: "flex"
                            },
                            children: p.headerNoc
                        }), (0, b.tZ)(J, {
                            tx: { ...null == h ? void 0 : null === (r = h.header) || void 0 === r ? void 0 : null === (d = r.headerMedalist) || void 0 === d ? void 0 : d.style,
                                display: "flex"
                            },
                            children: (0, b.tZ)(K, {
                                tx: "AthleteName" === m ? null == h ? void 0 : null === (c = h.header) || void 0 === c ? void 0 : null === (s = c.sortedText) || void 0 === s ? void 0 : s.style : null == h ? void 0 : null === (v = h.header) || void 0 === v ? void 0 : null === (u = v.headerMedalist) || void 0 === u ? void 0 : u.style,
                                children: p.headerMedalist
                            })
                        }), (0, b.tZ)(lv, {
                            showGSBMedals: (null == h ? void 0 : h.display) === "desktop",
                            translations: p,
                            customTheme: h,
                            sortedBy: m
                        })]
                    })
                },
                nw = e => {
                    var t;
                    let {
                        athletes: l,
                        eventTarget: i,
                        urlConfig: n,
                        translations: o,
                        customTheme: a,
                        expandableEntities: d,
                        defaultIsExpanded: r,
                        onExpandToggle: s
                    } = e;
                    return null !== (t = null == l ? void 0 : l.map(e => {
                        var t;
                        return (0, b.tZ)(nf, {
                            data: e,
                            eventTarget: i,
                            urlConfig: n,
                            translations: o,
                            customTheme: a,
                            showDisciplineEvents: ig(null !== (t = e.code) && void 0 !== t ? t : "missing-ath.code", {
                                expandableEntities: d,
                                defaultIsExpanded: r
                            }),
                            onToggleShowDisciplineEvents: s
                        }, e.code)
                    })) && void 0 !== t ? t : []
                },
                n_ = (e, t) => {
                    if (t) {
                        let l = Math.round(t.maxAdvertisements),
                            i = Math.round(t.intervalBetweenAds);
                        if (nI(l, i)) {
                            let n = 0,
                                o = 0;
                            return e.reduce((e, a, d) => {
                                if (n < l && d > 0 && d % i == 0) {
                                    o += 1, n += 1;
                                    let l = (0, l1.wT)(t.adIdFormat, [{
                                        placeholder: "{{id}}",
                                        replacement: o.toString()
                                    }]);
                                    e.push((0, b.tZ)(J, {
                                        tx: {
                                            width: t.adWidth,
                                            height: t.adHeight
                                        },
                                        children: (0, b.tZ)(li, {
                                            children: (0, b.tZ)(t.adRenderer, {
                                                type: "custom-row-adv",
                                                id: l,
                                                width: t.adWidth,
                                                height: t.adHeight
                                            })
                                        })
                                    }))
                                }
                                return e.push(a), e
                            }, [])
                        }
                    }
                    return e
                },
                nI = (e, t) => !!(Number.isFinite(e) && Number.isFinite(t)) && e > 0 && t > 0,
                nC = e => {
                    let {
                        athletes: t,
                        advConfig: l,
                        eventTarget: i,
                        urlConfig: n,
                        translations: o,
                        customTheme: a,
                        onExpandToggle: d,
                        expandableEntities: r,
                        defaultIsExpanded: s
                    } = e, c = (0, w.useMemo)(() => nw({
                        athletes: t,
                        eventTarget: i,
                        urlConfig: n,
                        translations: o,
                        customTheme: a,
                        onExpandToggle: d,
                        expandableEntities: r,
                        defaultIsExpanded: s
                    }), [t, i, n, o, a, d, r, s]);
                    return (0, w.useMemo)(() => n_(c, l), [c, l])
                },
                nS = e => {
                    let {
                        context: t
                    } = e;
                    if (!t) return null;
                    let {
                        translations: l,
                        customTheme: i
                    } = t;
                    return (0, b.tZ)(nb, {
                        translations: l,
                        customTheme: i,
                        sortedBy: t.sortedBy
                    })
                },
                nT = e => {
                    let {
                        context: t,
                        footerBottomStory: l
                    } = e;
                    return t ? (0, b.tZ)(J, {
                        "data-testid": "medalllists-table-footer",
                        children: l
                    }) : null
                },
                nD = e => {
                    let {
                        data: t,
                        eventTarget: l,
                        urlConfig: i,
                        translations: n,
                        customTheme: o,
                        sortedBy: a,
                        virtualized: d,
                        virtualizedOverscan: r,
                        virtualizedIncreaseViewportBy: s,
                        virtualizedInitialItemCount: c,
                        onExpandToggle: u,
                        expandableEntities: v,
                        defaultIsExpanded: p,
                        advConfig: h,
                        disclaimerConfig: m,
                        footerBottomStory: g
                    } = e, y = nC({
                        athletes: null == t ? void 0 : t.athletes,
                        advConfig: h,
                        eventTarget: l,
                        urlConfig: i,
                        translations: n,
                        customTheme: o,
                        onExpandToggle: u,
                        expandableEntities: v,
                        defaultIsExpanded: p
                    }), f = y.length;
                    if (!f) return null;
                    let x = {
                        translations: n,
                        customTheme: o,
                        sortedBy: a
                    };
                    return d ? (0, b.BX)(J, {
                        tx: { ...null == o ? void 0 : o.container,
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: [m && (0, b.tZ)(np, { ...m
                        }), (0, b.tZ)(le.OO, {
                            style: {
                                height: "100%",
                                marginBottom: "1rem"
                            },
                            data: y,
                            initialItemCount: null != c ? c : f,
                            components: {
                                Header: nS,
                                Footer: e => {
                                    let {
                                        context: t
                                    } = e;
                                    return (0, b.tZ)(nT, {
                                        context: t,
                                        footerBottomStory: g
                                    })
                                }
                            },
                            itemContent: (e, t) => t,
                            context: x,
                            useWindowScroll: !0,
                            ...void 0 !== r ? {
                                overscan: r
                            } : {},
                            ...void 0 !== s ? {
                                increaseViewportBy: s
                            } : {}
                        })]
                    }) : (0, b.BX)(J, {
                        tx: null == o ? void 0 : o.container,
                        children: [m && (0, b.tZ)(np, { ...m
                        }), (0, b.tZ)(nS, {
                            context: x
                        }), y]
                    })
                };
            nD.displayName = "MedalistTable";
            let nZ = e => {
                    var t, l, i, n, o, a, d, r, s;
                    let {
                        context: c,
                        footerBottomStory: u
                    } = e;
                    if (!c) return null;
                    console.log("Footer", u);
                    let {
                        customTheme: v,
                        translations: p,
                        eventInfo: h,
                        languageCode: m,
                        hideCompletedEvents: g,
                        hideLastUpdated: y
                    } = c, {
                        totalEvents: f,
                        finishedEvents: x,
                        dateTime: _
                    } = Array.isArray(h) && 1 === h.length ? h[0] : h || {}, I = (null != m ? m : "en").toLowerCase(), [{
                        timeZone: C
                    }] = (0, w.useState)(() => new Intl.DateTimeFormat().resolvedOptions());
                    return (0, b.BX)(J, {
                        tx: { ...null == v ? void 0 : null === (t = v.footer) || void 0 === t ? void 0 : t.container,
                            ...null == v ? void 0 : null === (i = v.footer) || void 0 === i ? void 0 : null === (l = i.typography) || void 0 === l ? void 0 : l.default
                        },
                        "data-testid": "medal-table-footer",
                        children: [!g && f && x && (0, b.BX)("span", {
                            children: [(0, b.tZ)(K, {
                                tx: null == v ? void 0 : null === (o = v.footer) || void 0 === o ? void 0 : null === (n = o.typography) || void 0 === n ? void 0 : n.title,
                                children: p.completedEvents
                            }), x, " ", p.completedEventsOf, " ", f]
                        }), !y && _ && (0, b.BX)("span", {
                            children: [(0, b.tZ)(K, {
                                tx: null == v ? void 0 : null === (d = v.footer) || void 0 === d ? void 0 : null === (a = d.typography) || void 0 === a ? void 0 : a.title,
                                children: p.lastUpdated
                            }), (0, b.tZ)(tP, {
                                time: _,
                                zone: C,
                                format: "DDD 'at' T",
                                locale: I,
                                $minWidth: 150,
                                $minHeight: 19,
                                tx: null == v ? void 0 : null === (s = v.footer) || void 0 === s ? void 0 : null === (r = s.typography) || void 0 === r ? void 0 : r.time
                            }), p.userLocalTime]
                        }), u]
                    })
                },
                nE = (e, t) => {
                    var l, i, n, o, a, d;
                    return "Alphabetical" === t && (null == e ? void 0 : null === (i = e.header) || void 0 === i ? void 0 : null === (l = i.typography) || void 0 === l ? void 0 : l.sortedText) ? { ...null == e ? void 0 : null === (d = e.header) || void 0 === d ? void 0 : null === (a = d.typography) || void 0 === a ? void 0 : a.sortedText
                    } : null == e ? void 0 : null === (o = e.header) || void 0 === o ? void 0 : null === (n = o.typography) || void 0 === n ? void 0 : n.teamsNoc
                },
                nk = e => {
                    var t, l, i, n, o;
                    let {
                        context: a
                    } = e;
                    if (!a) return null;
                    let {
                        translations: d,
                        customTheme: r,
                        hideDisciplineExpansion: s,
                        sortedBy: c
                    } = a;
                    return (0, b.BX)(nN, {
                        tx: { ...null == r ? void 0 : null === (t = r.header) || void 0 === t ? void 0 : t.container,
                            ...null == r ? void 0 : null === (i = r.header) || void 0 === i ? void 0 : null === (l = i.typography) || void 0 === l ? void 0 : l.default
                        },
                        children: [(0, b.BX)(nR, {
                            children: [(0, b.tZ)(K, {
                                tx: null == r ? void 0 : null === (o = r.header) || void 0 === o ? void 0 : null === (n = o.typography) || void 0 === n ? void 0 : n.rank,
                                children: d.headerRank
                            }), (0, b.tZ)(K, {
                                tx: nE(r, c),
                                children: d.headerTeamsNoc
                            })]
                        }), (0, b.tZ)(lv, {
                            translations: d,
                            customTheme: r,
                            showGSBMedals: !0,
                            hideFinalIcon: s,
                            sortedBy: c
                        })]
                    })
                },
                nN = (0, _.Z)(J, {
                    target: "e18tsu920"
                })("display:grid;"),
                nR = (0, _.Z)("div", {
                    target: "e18tsu921"
                })("display:flex;align-items:center;justify-self:left;"),
                nM = e => {
                    var t;
                    return "noc=".concat(null !== (t = null == e ? void 0 : e.organisation) && void 0 !== t ? t : "")
                },
                nF = (e, t) => "".concat(nM(e), "_discipline=").concat(t),
                nO = (e, t) => ig(nM(e), t),
                nB = (e, t, l) => ig(nF(e, t), l);
            var nL = e => {
                let t = [0, 0, 0, 0];
                return e.forEach(e => {
                    e.medalsNumber.forEach(e => {
                        t[0] += e.gold, t[1] += e.silver, t[2] += e.bronze, t[3] += e.total
                    })
                }), {
                    gold: t[0],
                    silver: t[1],
                    bronze: t[2],
                    total: t[3]
                }
            };
            let nz = e => {
                    var t, l, i, n, o, a, d, r, s, c;
                    let {
                        linkToCompetitorURL: u,
                        eventTarget: v,
                        competitorLinkTitle: p,
                        competitorDisplayName: h,
                        unofficial: m,
                        iconTitle: g,
                        customTheme: y
                    } = e;
                    return (0, b.BX)(nj, {
                        children: [u ? (0, b.tZ)(Q, {
                            href: u,
                            target: v,
                            title: u && (0, l1.wT)(p, [{
                                placeholder: "{competitor name}",
                                replacement: h
                            }]),
                            tx: { ...null == y ? void 0 : y.links,
                                ...null == y ? void 0 : null === (l = y.medalWinner) || void 0 === l ? void 0 : null === (t = l.typography) || void 0 === t ? void 0 : t.athlete
                            },
                            children: h
                        }) : (0, b.tZ)(K, {
                            tx: null == y ? void 0 : null === (n = y.medalWinner) || void 0 === n ? void 0 : null === (i = n.typography) || void 0 === i ? void 0 : i.athlete,
                            children: h
                        }), m && (0, b.tZ)(ej, {
                            name: ln.icon.unofficialMedalIcon,
                            alt: ln.icon.unofficialMedalIcon,
                            width: null == y ? void 0 : null === (d = y.medalWinner) || void 0 === d ? void 0 : null === (a = d.row) || void 0 === a ? void 0 : null === (o = a.unofficialIcon) || void 0 === o ? void 0 : o.width,
                            height: null == y ? void 0 : null === (c = y.medalWinner) || void 0 === c ? void 0 : null === (s = c.row) || void 0 === s ? void 0 : null === (r = s.unofficialIcon) || void 0 === r ? void 0 : r.height,
                            title: g,
                            style: {
                                paddingLeft: "8px"
                            }
                        })]
                    })
                },
                nj = (0, _.Z)("div", {
                    target: "e1qok5fm0"
                })("display:flex;align-items:center;"),
                nA = e => {
                    var t, l, i, n, o, a, d, r, s, c, u, v, p, h, m, g, y, f, x, _, I, C, S, T, D, Z, E, k, N;
                    let {
                        data: R,
                        eventTarget: M,
                        urlConfig: F,
                        translations: O,
                        customTheme: B,
                        contextualMenuPayload: L,
                        hideContextualMenuIcon: z
                    } = e, j = F && l5("competitor", R, F), A = "".concat(R.eventCode, "_").concat(R.competitorCode), W = (0, w.useCallback)(e => {
                        e.stopPropagation();
                        let t = { ...L,
                                competitorCode: R.competitorCode,
                                competitorDisplayName: R.competitorDisplayName,
                                competitorType: R.competitorType,
                                competitorExtraData: R.extraData,
                                medalDetailId: A
                            },
                            l = new CustomEvent(ln.events.clickOnCompetitorContextualMenu, {
                                detail: t
                            });
                        document.dispatchEvent(l)
                    }, []), H = e => {
                        W(e)
                    };
                    return (0, b.BX)(nW, {
                        tx: { ...null == B ? void 0 : null === (l = B.medalWinner) || void 0 === l ? void 0 : null === (t = l.row) || void 0 === t ? void 0 : t.style,
                            ...null == B ? void 0 : null === (n = B.medalWinner) || void 0 === n ? void 0 : null === (i = n.typography) || void 0 === i ? void 0 : i.default
                        },
                        "data-medal-detail-id": A,
                        children: [(0, b.BX)(nH, {
                            children: [j ? (0, b.tZ)(Q, {
                                href: j,
                                target: M,
                                title: j && (0, l1.wT)(O.competitorLinkTitle, [{
                                    placeholder: "{competitor name}",
                                    replacement: R.competitorDisplayName
                                }]),
                                tx: { ...null == B ? void 0 : B.links,
                                    ...null == B ? void 0 : null === (a = B.medalWinner) || void 0 === a ? void 0 : null === (o = a.typography) || void 0 === o ? void 0 : o.description
                                },
                                children: R.eventDescription
                            }) : (0, b.tZ)(K, {
                                tx: null == B ? void 0 : null === (r = B.medalWinner) || void 0 === r ? void 0 : null === (d = r.typography) || void 0 === d ? void 0 : d.description,
                                children: R.eventDescription
                            }), (0, b.tZ)(nz, {
                                linkToCompetitorURL: j,
                                eventTarget: M,
                                competitorLinkTitle: O.competitorLinkTitle,
                                competitorDisplayName: R.competitorDisplayName,
                                unofficial: !R.official,
                                iconTitle: O.unofficialMedalTitle,
                                customTheme: B
                            })]
                        }), (0, b.tZ)(lr, {
                            medalType: R.medalType,
                            title: lf(O, R.medalType),
                            MedalAbbreviation: la(O, R.medalType),
                            showTitle: !0,
                            styles: null == B ? void 0 : null === (c = B.medalWinner) || void 0 === c ? void 0 : null === (s = c.row) || void 0 === s ? void 0 : s.medalIcon
                        }), !z && (0, b.tZ)(ee, {
                            onClick: e => {
                                e.stopPropagation(), H(e)
                            },
                            "aria-label": "Open contextual menu",
                            tx: null == B ? void 0 : null === (p = B.medalWinner) || void 0 === p ? void 0 : null === (v = p.row) || void 0 === v ? void 0 : null === (u = v.contextualIcon) || void 0 === u ? void 0 : u.container,
                            type: "button",
                            title: "Open contextual menu",
                            className: "contextualmenu-button",
                            children: (0, b.tZ)(ej, {
                                name: ln.icon.contextualMenu,
                                alt: (0, l1.wT)(O.openContextualMenu, [{
                                    placeholder: "{event-name}",
                                    replacement: null !== (Z = R.eventDescription) && void 0 !== Z ? Z : ""
                                }, {
                                    placeholder: "{competitor-name}",
                                    replacement: null !== (E = R.competitorDisplayName) && void 0 !== E ? E : ""
                                }]),
                                title: (0, l1.wT)(O.openContextualMenu, [{
                                    placeholder: "{event-name}",
                                    replacement: null !== (k = R.eventDescription) && void 0 !== k ? k : ""
                                }, {
                                    placeholder: "{competitor-name}",
                                    replacement: null !== (N = R.competitorDisplayName) && void 0 !== N ? N : ""
                                }]),
                                width: null == B ? void 0 : null === (g = B.medalWinner) || void 0 === g ? void 0 : null === (m = g.row) || void 0 === m ? void 0 : null === (h = m.contextualIcon) || void 0 === h ? void 0 : h.width,
                                height: null == B ? void 0 : null === (x = B.medalWinner) || void 0 === x ? void 0 : null === (f = x.row) || void 0 === f ? void 0 : null === (y = f.contextualIcon) || void 0 === y ? void 0 : y.height,
                                color: null == B ? void 0 : null === (C = B.medalWinner) || void 0 === C ? void 0 : null === (I = C.row) || void 0 === I ? void 0 : null === (_ = I.contextualIcon) || void 0 === _ ? void 0 : _.color,
                                tx: null == B ? void 0 : null === (D = B.medalWinner) || void 0 === D ? void 0 : null === (T = D.row) || void 0 === T ? void 0 : null === (S = T.contextualIcon) || void 0 === S ? void 0 : S.style,
                                "data-testid": "contextual-menu-icon"
                            })
                        })]
                    })
                },
                nW = (0, _.Z)(J, {
                    target: "e1nfau490"
                })("align-items:center;display:grid;justify-items:center;"),
                nH = (0, _.Z)("div", {
                    target: "e1nfau491"
                })("display:grid;grid-template-columns:auto auto 1fr;justify-self:left;max-width:100%;align-items:center;"),
                nG = e => {
                    var t, l, i, n, o, a, d, r, s, c, u, v, p, h, m, g, y, f, x, w, _, I, C;
                    let {
                        data: S,
                        noc: T,
                        eventTarget: D,
                        urlConfig: Z,
                        translations: E,
                        customTheme: k,
                        contextualMenuPayload: N,
                        hideContextualMenuIcon: R,
                        hideMedalistExpansion: M,
                        showMedalWinners: F,
                        onToggleShowMedalWinners: O
                    } = e, B = () => {
                        null == O || O(S.code), W()
                    }, L = nL([S]), z = ng(null == k ? void 0 : k.discipline, null == k ? void 0 : null === (t = k.discipline) || void 0 === t ? void 0 : t.expanded, F), [j, A] = ny({
                        isExpanded: F,
                        translationCollapse: E.collapseDiscipline,
                        translationExpand: E.expandDiscipline,
                        customIconName: null == z ? void 0 : null === (i = z.row) || void 0 === i ? void 0 : null === (l = i.expandIcon) || void 0 === l ? void 0 : l.iconName
                    }), W = () => {
                        if (F) return;
                        let e = { ...N
                            },
                            t = new CustomEvent(ln.events.clickOnDisciplineExpansion, {
                                detail: e
                            });
                        document.dispatchEvent(t)
                    };
                    return (0, b.BX)(b.HY, {
                        children: [(0, b.BX)(nX, {
                            tx: { ...null === (n = z.row) || void 0 === n ? void 0 : n.style,
                                ...null === (o = z.typography) || void 0 === o ? void 0 : o.default
                            },
                            onClick: B,
                            children: [(0, b.tZ)(nP, {
                                tx: null === (a = z.typography) || void 0 === a ? void 0 : a.name,
                                truncate: !0,
                                children: S.name
                            }), (0, b.tZ)(K, {
                                tx: null === (d = z.typography) || void 0 === d ? void 0 : d.gold,
                                children: L.gold
                            }), (0, b.tZ)(K, {
                                tx: null === (r = z.typography) || void 0 === r ? void 0 : r.silver,
                                children: L.silver
                            }), (0, b.tZ)(K, {
                                tx: null === (s = z.typography) || void 0 === s ? void 0 : s.bronze,
                                children: L.bronze
                            }), (0, b.tZ)(K, {
                                tx: null === (c = z.typography) || void 0 === c ? void 0 : c.total,
                                children: L.total
                            }), !M && (0, b.tZ)(ee, {
                                onClick: e => {
                                    e.stopPropagation(), B()
                                },
                                type: "button",
                                tx: null == z ? void 0 : null === (v = z.row) || void 0 === v ? void 0 : null === (u = v.expandIcon) || void 0 === u ? void 0 : u.container,
                                children: (0, b.tZ)(ej, {
                                    name: j,
                                    width: null == k ? void 0 : null === (m = k.noc) || void 0 === m ? void 0 : null === (h = m.row) || void 0 === h ? void 0 : null === (p = h.expandIcon) || void 0 === p ? void 0 : p.width,
                                    height: null == k ? void 0 : null === (f = k.noc) || void 0 === f ? void 0 : null === (y = f.row) || void 0 === y ? void 0 : null === (g = y.expandIcon) || void 0 === g ? void 0 : g.height,
                                    alt: (0, l1.wT)(A, [{
                                        placeholder: "{NOC}",
                                        replacement: null != T ? T : ""
                                    }, {
                                        placeholder: "{discipline}",
                                        replacement: null !== (I = S.name) && void 0 !== I ? I : ""
                                    }]),
                                    title: (0, l1.wT)(A, [{
                                        placeholder: "{NOC}",
                                        replacement: null != T ? T : ""
                                    }, {
                                        placeholder: "{discipline}",
                                        replacement: null !== (C = S.name) && void 0 !== C ? C : ""
                                    }]),
                                    "data-testid": "expand-medal-winners-icon",
                                    tx: null === (w = z.row) || void 0 === w ? void 0 : null === (x = w.expandIcon) || void 0 === x ? void 0 : x.style
                                })
                            })]
                        }), !M && (0, b.tZ)(n$, {
                            open: F,
                            tx: z.collapsible,
                            children: null === (_ = S.medalWinners) || void 0 === _ ? void 0 : _.map(e => (0, b.tZ)(nA, {
                                data: e,
                                eventTarget: D,
                                urlConfig: Z,
                                translations: E,
                                customTheme: k,
                                contextualMenuPayload: { ...N,
                                    medalType: e.medalType,
                                    medalOfficial: e.official,
                                    eventCode: e.eventCode,
                                    eventDescription: e.eventDescription,
                                    eventCategory: e.eventCategory
                                },
                                hideContextualMenuIcon: R
                            }, e.competitorCode))
                        })]
                    })
                },
                nX = (0, _.Z)(J, {
                    target: "elzx0n30"
                })("align-items:center;display:grid;justify-items:center;"),
                nP = (0, _.Z)(K, {
                    target: "elzx0n31"
                })("max-width:100%;justify-self:left;"),
                n$ = (0, _.Z)(ef, B, {
                    target: "elzx0n32"
                })("overflow:hidden;width:100%;", e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                nU = e => {
                    var t, l, i, n, o, a, d, r, s, c, u, v, p, h, m, g, y, f, x, _, I, C, S, T, D, Z, E, k, N, R, M, F, O, B, L, z, j, A;
                    let {
                        data: W,
                        showMedalRank: H,
                        eventTarget: G,
                        urlConfig: X,
                        translations: P,
                        customTheme: $,
                        contextualMenuPayload: U,
                        hideDisciplineExpansion: V,
                        hideContextualMenuIcon: q,
                        hideMedalistExpansion: Y,
                        onExpandToggle: Q
                    } = e, et = () => {
                        null == Q || Q(nM(W)), ed()
                    }, el = nO(W, e), ei = (0, w.useCallback)(e => {
                        Q(nF(W, e))
                    }, [W, Q]), en = ng(null == $ ? void 0 : $.noc, null == $ ? void 0 : null === (t = $.noc) || void 0 === t ? void 0 : t.expanded, el), [eo, ea] = ny({
                        isExpanded: el,
                        translationCollapse: P.collapseNoc,
                        translationExpand: P.expandNoc,
                        customIconName: null == en ? void 0 : null === (i = en.row) || void 0 === i ? void 0 : null === (l = i.expandIcon) || void 0 === l ? void 0 : l.iconName
                    }), ed = () => {
                        if (el) return;
                        let e = { ...U
                            },
                            t = new CustomEvent(ln.events.clickOnOrganisationExpansion, {
                                detail: e
                            });
                        document.dispatchEvent(t)
                    };
                    return (0, b.tZ)(J, {
                        tx: {
                            padding: "0.5rem 0 0"
                        },
                        children: (0, b.BX)(J, {
                            "data-testid": "noc-row",
                            tx: { ...null == en ? void 0 : en.container,
                                ...null == en ? void 0 : null === (n = en.typography) || void 0 === n ? void 0 : n.default
                            },
                            children: [(0, b.BX)(nV, {
                                tx: null == en ? void 0 : null === (o = en.row) || void 0 === o ? void 0 : o.style,
                                onClick: et,
                                children: [(0, b.BX)(nY, {
                                    children: [W.isFavourite && (0, b.tZ)(nq, {
                                        name: "favouriteFilled",
                                        "data-testid": "favourite-noc-icon",
                                        width: null == en ? void 0 : null === (d = en.row) || void 0 === d ? void 0 : null === (a = d.favouriteIcon) || void 0 === a ? void 0 : a.width,
                                        height: null == en ? void 0 : null === (s = en.row) || void 0 === s ? void 0 : null === (r = s.favouriteIcon) || void 0 === r ? void 0 : r.height,
                                        tx: null == en ? void 0 : null === (u = en.row) || void 0 === u ? void 0 : null === (c = u.favouriteIcon) || void 0 === c ? void 0 : c.style,
                                        title: P.favouriteNocIconTitle,
                                        alt: P.favouriteNocIconTitle
                                    }), (0, b.tZ)(K, {
                                        tx: null == en ? void 0 : null === (v = en.typography) || void 0 === v ? void 0 : v.rank,
                                        children: "Total Medals" === H ? W.rankTotal : "Gold" === H ? W.rank : ""
                                    }), (0, b.tZ)(nJ, {
                                        type: "flag",
                                        name: null !== (B = null === (p = W.organisation) || void 0 === p ? void 0 : p.toLowerCase()) && void 0 !== B ? B : "",
                                        width: null == en ? void 0 : null === (m = en.row) || void 0 === m ? void 0 : null === (h = m.flagIcon) || void 0 === h ? void 0 : h.width,
                                        height: null == en ? void 0 : null === (y = en.row) || void 0 === y ? void 0 : null === (g = y.flagIcon) || void 0 === g ? void 0 : g.height,
                                        alt: (0, l1.wT)(P.flagIconTitle, [{
                                            placeholder: "{noc-name}",
                                            replacement: null !== (L = W.description) && void 0 !== L ? L : ""
                                        }]),
                                        title: (0, l1.wT)(P.flagIconTitle, [{
                                            placeholder: "{noc-name}",
                                            replacement: null !== (z = W.description) && void 0 !== z ? z : ""
                                        }]),
                                        tx: null == en ? void 0 : null === (x = en.row) || void 0 === x ? void 0 : null === (f = x.flagIcon) || void 0 === f ? void 0 : f.style
                                    }), (0, b.tZ)(nK, {
                                        tx: null == en ? void 0 : null === (_ = en.typography) || void 0 === _ ? void 0 : _.noc,
                                        children: W.organisation
                                    }), (0, b.tZ)(nQ, {
                                        tx: null == en ? void 0 : null === (I = en.typography) || void 0 === I ? void 0 : I.noc,
                                        children: W.longDescription
                                    })]
                                }), (0, b.tZ)(K, {
                                    tx: null == en ? void 0 : null === (C = en.typography) || void 0 === C ? void 0 : C.gold,
                                    children: W.nocRowMedals.gold
                                }), (0, b.tZ)(K, {
                                    tx: null == en ? void 0 : null === (S = en.typography) || void 0 === S ? void 0 : S.silver,
                                    children: W.nocRowMedals.silver
                                }), (0, b.tZ)(K, {
                                    tx: null == en ? void 0 : null === (T = en.typography) || void 0 === T ? void 0 : T.bronze,
                                    children: W.nocRowMedals.bronze
                                }), (0, b.tZ)(K, {
                                    tx: null == en ? void 0 : null === (D = en.typography) || void 0 === D ? void 0 : D.total,
                                    children: W.nocRowMedals.total
                                }), !V && (0, b.tZ)(ee, {
                                    onClick: e => {
                                        e.stopPropagation(), et()
                                    },
                                    type: "button",
                                    tx: null == en ? void 0 : null === (E = en.row) || void 0 === E ? void 0 : null === (Z = E.expandIcon) || void 0 === Z ? void 0 : Z.container,
                                    children: (0, b.tZ)(ej, {
                                        name: eo,
                                        width: null == en ? void 0 : null === (N = en.row) || void 0 === N ? void 0 : null === (k = N.expandIcon) || void 0 === k ? void 0 : k.width,
                                        height: null == en ? void 0 : null === (M = en.row) || void 0 === M ? void 0 : null === (R = M.expandIcon) || void 0 === R ? void 0 : R.height,
                                        alt: (0, l1.wT)(ea, [{
                                            placeholder: "{NOC}",
                                            replacement: null !== (j = W.description) && void 0 !== j ? j : ""
                                        }]),
                                        title: (0, l1.wT)(ea, [{
                                            placeholder: "{NOC}",
                                            replacement: null !== (A = W.description) && void 0 !== A ? A : ""
                                        }]),
                                        "data-testid": "expand-discipline-icon",
                                        tx: null == en ? void 0 : null === (O = en.row) || void 0 === O ? void 0 : null === (F = O.expandIcon) || void 0 === F ? void 0 : F.style
                                    })
                                })]
                            }), !V && (0, b.tZ)(n0, {
                                open: el,
                                tx: null == en ? void 0 : en.collapsible,
                                children: W.enhancedDisciplines.map(t => (0, b.tZ)(nG, {
                                    data: t,
                                    noc: W.description,
                                    eventTarget: G,
                                    urlConfig: X,
                                    translations: P,
                                    customTheme: $,
                                    contextualMenuPayload: { ...U,
                                        disciplineCode: t.code,
                                        disciplineName: t.name,
                                        disciplineExtraData: t.extraData
                                    },
                                    hideMedalistExpansion: Y,
                                    hideContextualMenuIcon: q,
                                    showMedalWinners: nB(W, t.code, e),
                                    onToggleShowMedalWinners: ei
                                }, t.code))
                            })]
                        })
                    })
                },
                nV = (0, _.Z)(J, {
                    target: "euzfwma0"
                })("align-items:center;display:grid;justify-items:center;"),
                nq = (0, _.Z)(ej, {
                    target: "euzfwma1"
                })("position:absolute;"),
                nY = (0, _.Z)("div", {
                    target: "euzfwma2"
                })("display:grid;grid-template-columns:auto auto 1fr;justify-self:left;max-width:100%;align-items:center;"),
                nJ = (0, _.Z)(ej, {
                    target: "euzfwma3"
                })("overflow:hidden;"),
                nK = (0, _.Z)(K, {
                    target: "euzfwma4"
                })("@media (min-width:", e => {
                    let {
                        theme: t
                    } = e;
                    return t.breakpoints.sm
                }, "px){display:none;}"),
                nQ = (0, _.Z)(K, {
                    target: "euzfwma5"
                })("display:none;@media (min-width:", e => {
                    let {
                        theme: t
                    } = e;
                    return t.breakpoints.sm
                }, "px){display:block;}"),
                n0 = (0, _.Z)(ef, B, {
                    target: "euzfwma6"
                })("overflow:hidden;width:100%;", e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                n1 = e => {
                    var t;
                    let {
                        data: l,
                        showMedalRank: i,
                        eventTarget: n,
                        urlConfig: o,
                        translations: a,
                        customTheme: d,
                        hideDisciplineExpansion: r,
                        hideMedalistExpansion: s,
                        hideContextualMenuIcon: c,
                        onExpandToggle: u,
                        expandableEntities: v,
                        defaultIsExpanded: p
                    } = e;
                    return null !== (t = null == l ? void 0 : l.map(e => (0, b.tZ)(nU, {
                        data: e,
                        showMedalRank: i,
                        eventTarget: n,
                        urlConfig: o,
                        translations: a,
                        customTheme: d,
                        contextualMenuPayload: {
                            organisationCode: e.organisation,
                            organisationName: e.description,
                            organisationRankGold: e.rank,
                            organisationRankTotal: e.rankTotal,
                            organisationExtraData: e.extraData
                        },
                        hideDisciplineExpansion: r,
                        hideMedalistExpansion: s,
                        hideContextualMenuIcon: c,
                        expandableEntities: v,
                        onExpandToggle: u,
                        defaultIsExpanded: p
                    }, e.organisation))) && void 0 !== t ? t : []
                },
                n2 = e => {
                    let {
                        data: t,
                        showMedalRank: l,
                        eventTarget: i,
                        urlConfig: n,
                        translations: o,
                        customTheme: a,
                        hideDisciplineExpansion: d,
                        hideMedalistExpansion: r,
                        hideContextualMenuIcon: s,
                        onExpandToggle: c,
                        expandableEntities: u,
                        defaultIsExpanded: v,
                        advConfig: p
                    } = e, h = (0, w.useMemo)(() => n1({
                        data: t,
                        showMedalRank: l,
                        eventTarget: i,
                        urlConfig: n,
                        translations: o,
                        customTheme: a,
                        hideDisciplineExpansion: d,
                        hideMedalistExpansion: r,
                        hideContextualMenuIcon: s,
                        onExpandToggle: c,
                        expandableEntities: u,
                        defaultIsExpanded: v
                    }), [t, l, i, n, o, a, d, r, s, c, u, v]);
                    return (0, w.useMemo)(() => n_(h, p), [h, p])
                },
                n4 = {
                    container: {
                        maxWidth: "100%",
                        margin: "1rem",
                        paddingBottom: "12rem",
                        ["@media (min-width: ".concat(F.breakpoints.sm, "px) and (max-width: 965px)")]: {
                            padding: "0 2rem 8rem"
                        },
                        ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: {
                            maxWidth: "910px",
                            margin: "2rem auto 0",
                            paddingBottom: "14rem"
                        }
                    },
                    header: {
                        container: {
                            gap: "10px",
                            marginBottom: "1rem",
                            gridTemplateColumns: "4.5fr repeat(4, 1.5fr) 1fr",
                            ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: {
                                alignItems: "center",
                                padding: "4px 20px",
                                gap: "10px",
                                marginBottom: "1rem"
                            }
                        },
                        medalIcon: {
                            container: {
                                justifyContent: "center"
                            },
                            style: {
                                width: 24,
                                height: 24
                            }
                        },
                        finalIcon: {},
                        typography: {
                            default: { ...F.typography.ui2
                            },
                            rank: { ...F.typography.body4,
                                marginLeft: "0.75rem",
                                marginRight: "1rem",
                                textAlign: "center",
                                ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: { ...F.typography.title7,
                                    marginLeft: "0"
                                }
                            },
                            teamsNoc: { ...F.typography.body4,
                                ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: { ...F.typography.title7
                                }
                            },
                            sortedText: {
                                fontWeight: "bold"
                            }
                        }
                    },
                    footer: {
                        container: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                            marginTop: "0.5rem"
                        },
                        typography: {
                            default: { ...F.typography.ui6,
                                ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: { ...F.typography.ui2
                                }
                            },
                            title: {
                                fontWeight: "700",
                                marginRight: "0.5rem"
                            },
                            time: {}
                        }
                    },
                    noc: {
                        container: {
                            background: F.colors.white,
                            boxShadow: F.elevation[100],
                            borderRadius: "4px",
                            gap: "10px",
                            ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: {
                                alignItems: "center"
                            }
                        },
                        collapsible: {
                            borderTop: "1px solid ".concat(F.colors.gray800)
                        },
                        row: {
                            style: {
                                height: "56px",
                                position: "relative",
                                columnGap: "10px",
                                padding: "0 0.75rem 0 0",
                                gridTemplateColumns: "minmax(0, 4.5fr) repeat(4, 1.5fr) 1fr",
                                ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: {
                                    padding: "0 20px",
                                    cursor: "pointer"
                                }
                            },
                            flagIcon: {
                                width: 32,
                                height: 22,
                                style: {
                                    width: "25px",
                                    height: "16px",
                                    boxShadow: "0px 0px 1px ".concat(F.colors.black),
                                    marginRight: "0.5rem",
                                    ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: {
                                        marginRight: "12px",
                                        width: "32px",
                                        height: "22px"
                                    }
                                }
                            },
                            expandIcon: {
                                width: 14,
                                height: 14,
                                style: {
                                    justifySelf: "right"
                                },
                                container: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    justifySelf: "flex-end"
                                }
                            },
                            favouriteIcon: {
                                style: {
                                    top: "calc(50% - 10px)",
                                    left: "-10px",
                                    width: "20px",
                                    height: "20px",
                                    ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: {
                                        top: "calc(50% - 12px)",
                                        left: "-30px",
                                        width: "24px",
                                        height: "24px"
                                    }
                                }
                            }
                        },
                        typography: {
                            default: { ...F.typography.ui2
                            },
                            bronze: {},
                            noc: {},
                            gold: {},
                            rank: { ...F.typography.ui7,
                                minWidth: "12px",
                                textAlign: "center",
                                marginRight: "1rem",
                                marginLeft: "0.5rem",
                                ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: {
                                    marginLeft: "0"
                                }
                            },
                            silver: {},
                            total: {
                                fontWeight: "600"
                            }
                        }
                    },
                    discipline: {
                        collapsible: {},
                        row: {
                            style: {
                                gridTemplateColumns: "minmax(0, 10fr) 1.5fr 1fr",
                                borderTop: "0.5px solid ".concat(F.colors.gray300),
                                columnGap: "10px",
                                height: "50px",
                                padding: "0 0.75rem 0 0",
                                ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: {
                                    gridTemplateColumns: "minmax(0, 4.5fr) repeat(4, 1.5fr) 1fr",
                                    padding: "0 20px",
                                    cursor: "pointer"
                                }
                            },
                            expandIcon: {
                                width: 14,
                                height: 14,
                                style: {
                                    justifySelf: "right"
                                },
                                container: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    justifySelf: "flex-end"
                                }
                            }
                        },
                        typography: {
                            default: {},
                            gold: {
                                display: "none",
                                ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: {
                                    display: "block"
                                }
                            },
                            silver: {
                                display: "none",
                                ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: {
                                    display: "block"
                                }
                            },
                            bronze: {
                                display: "none",
                                ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: {
                                    display: "block"
                                }
                            },
                            total: {
                                fontWeight: "600"
                            },
                            name: {
                                paddingLeft: "0.5rem",
                                ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: {
                                    paddingLeft: "40px"
                                }
                            }
                        }
                    },
                    medalWinner: {
                        row: {
                            style: {
                                alignItems: "center",
                                columnGap: "10px",
                                minHeight: "40px",
                                gridTemplateColumns: "minmax(0, 9.5fr) 1.5fr 1fr",
                                background: F.colors.gray200,
                                borderTop: "1px solid ".concat(F.colors.gray300),
                                "& > div:first-of-type": {
                                    ["@media (max-width: ".concat(F.breakpoints.sm, "px)")]: {
                                        display: "block",
                                        padding: "0.5rem"
                                    }
                                },
                                ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: {
                                    padding: "0 20px"
                                }
                            },
                            medalIcon: {
                                width: 24,
                                height: 24,
                                style: {
                                    ["@media (max-width: ".concat(F.breakpoints.sm, "px)")]: {
                                        marginLeft: "0.4rem"
                                    }
                                }
                            },
                            contextualIcon: {
                                width: 24,
                                height: 24,
                                color: F.colors.black,
                                container: {
                                    marginRight: "10px",
                                    ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: {
                                        marginRight: "0",
                                        justifySelf: "right"
                                    }
                                },
                                style: {
                                    ["@media (max-width: ".concat(F.breakpoints.sm, "px)")]: {
                                        width: "20px",
                                        height: "20px"
                                    }
                                }
                            },
                            unofficialIcon: {
                                width: 20,
                                height: 20,
                                style: {}
                            }
                        },
                        typography: {
                            default: { ...F.typography.ui2
                            },
                            description: {
                                fontWeight: "600",
                                ["@media (min-width: ".concat(F.breakpoints.sm, "px)")]: {
                                    margin: "0px 1rem 0 4.8rem"
                                }
                            },
                            athlete: {}
                        }
                    },
                    links: {
                        textDecoration: "none",
                        color: F.colors.black
                    }
                },
                n8 = e => {
                    let {
                        data: t,
                        eventInfo: l,
                        showMedalRank: i,
                        eventTarget: n,
                        urlConfig: o,
                        translations: a,
                        customTheme: d,
                        languageCode: r,
                        hideFooter: s,
                        hideDisciplineExpansion: c,
                        hideMedalistExpansion: u,
                        hideContextualMenuIcon: v,
                        hideCompletedEvents: p,
                        hideLastUpdated: h,
                        sortedBy: m,
                        virtualized: g,
                        virtualizedOverscan: y,
                        virtualizedInitialItemCount: f,
                        virtualizedIncreaseViewportBy: x,
                        defaultIsExpanded: w,
                        onExpandToggle: _,
                        expandableEntities: I,
                        advConfig: C,
                        disclaimerConfig: S,
                        footerBottomStory: T
                    } = e, D = ng(n4, d), Z = n2({
                        data: t,
                        showMedalRank: i,
                        eventTarget: n,
                        urlConfig: o,
                        translations: a,
                        customTheme: D,
                        hideDisciplineExpansion: c,
                        hideMedalistExpansion: u,
                        hideContextualMenuIcon: v,
                        onExpandToggle: _,
                        expandableEntities: I,
                        defaultIsExpanded: w,
                        advConfig: C
                    });
                    if (!Z.length) return (0, b.tZ)(J, {
                        tx: { ...null == D ? void 0 : D.container,
                            display: "flex",
                            flexDirection: "column"
                        }
                    });
                    let E = {
                        translations: a,
                        customTheme: D,
                        hideDisciplineExpansion: c,
                        sortedBy: m,
                        eventInfo: l,
                        languageCode: r,
                        hideCompletedEvents: p,
                        hideLastUpdated: h,
                        showMedalRank: i
                    };
                    return g ? (0, b.BX)(J, {
                        tx: null == D ? void 0 : D.container,
                        children: [S && (0, b.tZ)(np, { ...S
                        }), (0, b.tZ)(le.OO, {
                            style: {
                                height: "100%",
                                marginBottom: "1rem"
                            },
                            data: Z,
                            initialItemCount: null != f ? f : t.length,
                            components: {
                                Header: nk,
                                Footer: s ? void 0 : e => {
                                    let {
                                        context: t
                                    } = e;
                                    return (0, b.tZ)(nZ, {
                                        context: t,
                                        footerBottomStory: T
                                    })
                                }
                            },
                            itemContent: (e, t) => t,
                            context: E,
                            useWindowScroll: !0,
                            ...void 0 !== y ? {
                                overscan: y
                            } : {},
                            ...void 0 !== x ? {
                                increaseViewportBy: x
                            } : {}
                        })]
                    }) : (0, b.BX)(J, {
                        tx: { ...null == D ? void 0 : D.container,
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: [S && (0, b.tZ)(np, { ...S
                        }), (0, b.tZ)(nk, {
                            context: E
                        }), Z, !s && (0, b.tZ)(nZ, {
                            context: E
                        })]
                    })
                };
            n8.displayName = "MedalTable";
            let n3 = G(e => {
                    let {
                        id: t,
                        iconAlt: l,
                        iconName: i,
                        active: n = !1,
                        onIconButtonClick: o,
                        iconWidth: a,
                        iconHeight: d,
                        iconType: r,
                        ...s
                    } = e, c = (0, w.useCallback)(() => {
                        o({
                            id: t,
                            active: !n
                        })
                    }, [n, o, t]);
                    return (0, b.tZ)(n5, {
                        onClick: c,
                        type: "button",
                        $isActive: n,
                        $iconWidth: a,
                        className: "icon-button ".concat(n ? "icon-button--active" : ""),
                        ...s,
                        children: (0, b.tZ)(ej, {
                            alt: l,
                            title: l,
                            name: i,
                            type: r,
                            width: a,
                            height: d
                        })
                    })
                }),
                n5 = (0, _.Z)("button", B, {
                    target: "e1225jna0"
                })("cursor:pointer;display:flex;justify-content:center;align-items:center;", e => {
                    var t, l, i;
                    let {
                        theme: n
                    } = e;
                    return (null === (i = n.customization) || void 0 === i ? void 0 : null === (l = i.iconButton) || void 0 === l ? void 0 : null === (t = l.container) || void 0 === t ? void 0 : t.default) && { ...n.customization.iconButton.container.default
                    }
                }, "  &:hover{", e => {
                    var t, l, i;
                    let {
                        theme: n
                    } = e;
                    return (null === (i = n.customization) || void 0 === i ? void 0 : null === (l = i.iconButton) || void 0 === l ? void 0 : null === (t = l.container) || void 0 === t ? void 0 : t.hover) && { ...n.customization.iconButton.container.hover
                    }
                }, "}", e => {
                    var t, l, i;
                    let {
                        $isActive: n,
                        theme: o
                    } = e;
                    return n && (null === (i = o.customization) || void 0 === i ? void 0 : null === (l = i.iconButton) || void 0 === l ? void 0 : null === (t = l.container) || void 0 === t ? void 0 : t.active) && { ...o.customization.iconButton.container.active
                    }
                });
            n3.displayName = "IconButton";
            var n6 = l(28487);
            let n7 = e => {
                let {
                    stateName: t,
                    title: l,
                    slice: i,
                    onIconButtonStateClick: n,
                    ...o
                } = e, {
                    filters: a,
                    addFilter: d,
                    removeFilter: r
                } = (0, n6.$J)(), {
                    sortings: s,
                    addSorting: c,
                    removeSorting: u
                } = (0, n6.ec)(), [v, p] = (0, w.useState)(!1);
                (0, w.useEffect)(() => {
                    let e = a.some(e => e.name === t),
                        l = s.some(e => e.name === t);
                    p(e || l)
                }, [a, s, t]);
                let h = (0, w.useCallback)(e => {
                    if (n && n(e), e.id === ln.dailySchedule.filters.saved) {
                        let t = {
                                isActive: e.active
                            },
                            l = new CustomEvent(ln.events.clickOnMyScheduleFilter, {
                                detail: t
                            });
                        document.dispatchEvent(l)
                    }
                    v ? (i === ln.states.filter && r(t), i === ln.states.sorting && u(t)) : (i === ln.states.filter && d({
                        name: t
                    }), i === ln.states.sorting && c({
                        name: t
                    }))
                }, [d, c, v, n, r, u, i, t]);
                return (0, b.tZ)(n3, {
                    active: v,
                    onIconButtonClick: h,
                    iconAlt: l,
                    ...o
                })
            };
            n7.displayName = "IconButtonState";
            var n9 = (e, t) => t ? e.map(e => e.date === t ? { ...e,
                selected: !0
            } : { ...e,
                selected: !1
            }) : e;
            let oe = e => {
                var t;
                let {
                    dates: l,
                    stateName: i,
                    slice: n,
                    children: o,
                    onDateClick: a,
                    locale: d,
                    dateFormat: r,
                    ...s
                } = e, {
                    filters: c,
                    updateFilter: u
                } = (0, n6.$J)(), v = (() => {
                    if (n === ln.states.filter) {
                        var e, t;
                        return null === (t = c.find(e => e.name === i)) || void 0 === t ? void 0 : null === (e = t.values) || void 0 === e ? void 0 : e[0]
                    }
                })(), p = null === (t = l.find(e => e.selected)) || void 0 === t ? void 0 : t.date;
                (0, w.useEffect)(() => {
                    n === ln.states.filter && !v && p && u({
                        name: i,
                        values: [p]
                    })
                }, [u, p, v, n, i]);
                let h = n9(l, v),
                    m = (0, w.useCallback)(e => {
                        a && a(e), n === ln.states.filter && u({
                            name: i,
                            values: [e.date]
                        })
                    }, [a, u, n, i]);
                return (0, b.tZ)(tl, {
                    dates: h,
                    onDateClick: m,
                    locale: null != d ? d : "ENG",
                    dateFormat: null != r ? r : "",
                    ...s,
                    children: o
                })
            };
            oe.displayName = "CalendarGridSingleSelectState";
            let ot = e => {
                    let {
                        icon: t,
                        defaultIcon: l
                    } = e;
                    return t ? (0, b.tZ)(ej, { ...t
                    }) : l
                },
                ol = (0, _.Z)("div", {
                    target: "e1mactvh0"
                })("display:inline-flex;align-items:center;justify-content:center;min-width:24px;min-height:24px;");
            var oi = e => {
                let {
                    open: t,
                    iconOpen: l,
                    iconClose: i
                } = e;
                return (0, b.tZ)(ol, {
                    children: t ? (0, b.tZ)(ot, {
                        icon: i,
                        defaultIcon: (0, b.tZ)(ej, {
                            name: "selectCollapse",
                            alt: ln.icons.collapse,
                            title: "collapse",
                            width: 12,
                            height: 12
                        })
                    }) : (0, b.tZ)(ot, {
                        icon: l,
                        defaultIcon: (0, b.tZ)(ej, {
                            name: "selectExpand",
                            alt: ln.icons.expand,
                            title: "expand",
                            width: 12,
                            height: 12
                        })
                    })
                })
            };
            let on = e => {
                    let {
                        selectedItems: t,
                        open: l,
                        placeholder: i,
                        icon: n,
                        expandIcons: o,
                        disabled: a,
                        onHeaderClick: d,
                        onClearAllClick: r,
                        customTheme: s
                    } = e, c = !(null == n ? void 0 : n.name) && t && t.length > 1, u = e => {
                        if ("string" == typeof e.item || "number" == typeof e.item) {
                            var t, l;
                            return (0, b.tZ)(K, {
                                variant: null == s ? void 0 : null === (l = s.header) || void 0 === l ? void 0 : null === (t = l.item) || void 0 === t ? void 0 : t.typography,
                                children: e.item
                            })
                        }
                        if ((0, w.isValidElement)(e.item)) return (0, b.tZ)(od, {
                            tx: s,
                            children: e.item
                        })
                    }, v = (0, w.useCallback)(() => {
                        a || d()
                    }, [a, d]), p = (0, w.useCallback)(e => {
                        a || r(e)
                    }, [a, r]);
                    return (0, b.BX)(oo, {
                        type: "button",
                        onClick: v,
                        tx: s,
                        "aria-expanded": l,
                        $isOpen: l,
                        $isDisabled: a,
                        "data-testid": "SelectHeader",
                        className: "select-header ".concat(l ? "select-header--expanded" : "select-header--collapsed"),
                        children: [(() => {
                            if (n) return (0, b.tZ)(or, {
                                tx: s,
                                children: (0, b.tZ)(ej, { ...n
                                })
                            });
                            if (t && t.length > 0) return (0, b.tZ)(oa, {
                                children: t.map(e => (0, b.tZ)(od, {
                                    tx: s,
                                    children: u(e)
                                }, e.id))
                            });
                            if (i) {
                                var e, l;
                                return (0, b.tZ)(od, {
                                    tx: s,
                                    children: (0, b.tZ)(K, {
                                        variant: null == s ? void 0 : null === (l = s.header) || void 0 === l ? void 0 : null === (e = l.item) || void 0 === e ? void 0 : e.typography,
                                        children: i
                                    })
                                })
                            }
                        })(), (0, b.BX)("div", {
                            style: {
                                display: "flex"
                            },
                            children: [c && (0, b.tZ)(or, {
                                onClick: e => {
                                    p(e)
                                },
                                tx: s,
                                "data-testid": "SelectHeaderClearAll",
                                children: (0, b.tZ)(ej, {
                                    name: "selectClear",
                                    alt: "select clear",
                                    width: 12,
                                    height: 12
                                })
                            }), (null == o ? void 0 : o.display) && (0, b.tZ)(oi, {
                                open: l,
                                iconOpen: null == o ? void 0 : o.openIcon,
                                iconClose: null == o ? void 0 : o.closeIcon
                            })]
                        })]
                    })
                },
                oo = (0, _.Z)("button", B, {
                    target: "e1eprqlr0"
                })("background:none;color:inherit;border:none;padding:0;font:inherit;display:inline-flex;align-items:center;justify-content:space-between;", e => {
                    var t;
                    let {
                        tx: l
                    } = e;
                    return { ...null == l ? void 0 : null === (t = l.header) || void 0 === t ? void 0 : t.global
                    }
                }, " ", e => {
                    let {
                        tx: t,
                        $isOpen: l
                    } = e;
                    if (l) {
                        var i;
                        return { ...null == t ? void 0 : null === (i = t.header) || void 0 === i ? void 0 : i.open
                        }
                    }
                }, " ", e => {
                    let {
                        tx: t,
                        $isDisabled: l
                    } = e;
                    if (l) {
                        var i;
                        return { ...null == t ? void 0 : null === (i = t.header) || void 0 === i ? void 0 : i.disabled
                        }
                    }
                }),
                oa = (0, _.Z)("div", {
                    target: "e1eprqlr1"
                })("display:flex;overflow:hidden;"),
                od = (0, _.Z)("div", {
                    target: "e1eprqlr2"
                })(e => {
                    var t, l;
                    let {
                        tx: i
                    } = e;
                    return { ...null == i ? void 0 : null === (l = i.header) || void 0 === l ? void 0 : null === (t = l.item) || void 0 === t ? void 0 : t.style
                    }
                }),
                or = (0, _.Z)("div", {
                    target: "e1eprqlr3"
                })("display:inline-flex;align-items:center;justify-content:center;min-width:24px;min-height:24px;", e => {
                    var t;
                    let {
                        tx: l
                    } = e;
                    return { ...null == l ? void 0 : null === (t = l.header) || void 0 === t ? void 0 : t.iconContainer
                    }
                });
            on.displayName = "SelectHeader";
            let os = e => {
                    var t, l;
                    let {
                        open: i,
                        dropDownRef: n,
                        customTheme: o,
                        children: a
                    } = e, d = (0, w.useRef)(null), [r, s] = (0, w.useState)();
                    return (0, w.useEffect)(() => {
                        var e, t;
                        s(e5(null === (e = d.current) || void 0 === e ? void 0 : e.getBoundingClientRect(), null == n ? void 0 : null === (t = n.current) || void 0 === t ? void 0 : t.getBoundingClientRect()))
                    }, [i]), (0, b.tZ)(eg.M, {
                        initial: !1,
                        children: i && (0, b.tZ)(oc, {
                            ref: d,
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                ease: "easeOut",
                                duration: .1
                            },
                            $bodyPosition: r,
                            width: null !== (l = null === (t = n.current) || void 0 === t ? void 0 : t.clientWidth) && void 0 !== l ? l : 0,
                            tx: o,
                            className: "select-body",
                            children: a
                        }, "visible")
                    })
                },
                oc = (0, _.Z)(ey.E.div, B, {
                    target: "e18g60890"
                })("position:absolute;overflow:auto;", e => e.$bodyPosition && (0, W.iv)("left:", e.$bodyPosition.left && "".concat(e.$bodyPosition.left, "px"), ";top:", e.$bodyPosition.top && "".concat(e.$bodyPosition.top, "px"), ";right:", e.$bodyPosition.right && "".concat(e.$bodyPosition.right, "px"), ";width:", e.width, "px;"), " ", e => {
                    let {
                        tx: t
                    } = e;
                    return { ...null == t ? void 0 : t.body
                    }
                }, ";");
            os.displayName = "SelectBody";
            let ou = {
                    global: {},
                    header: {
                        global: {
                            border: "1px solid ".concat(F.colors.gray500),
                            borderRadius: "4px",
                            padding: "3px",
                            minHeight: "32px",
                            minWidth: "32px",
                            cursor: "pointer"
                        },
                        item: {
                            style: {
                                padding: "4px 6px"
                            }
                        },
                        disabled: {
                            backgroundColor: F.colors.gray300,
                            opacity: .5,
                            cursor: "default"
                        }
                    },
                    body: {
                        margin: "4px 0",
                        borderRadius: "4px",
                        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)"
                    },
                    bodyTitle: {
                        style: {
                            padding: "12px"
                        },
                        typography: "title5"
                    }
                },
                ov = e => {
                    let t = (0, w.useRef)();
                    return (0, w.useEffect)(() => {
                        t.current = e
                    }), t.current
                },
                op = e => {
                    var t, l, i;
                    let {
                        children: n,
                        stateName: o,
                        bodyTitle: a,
                        placeholder: d,
                        icon: r,
                        expandIcons: s,
                        disabled: c,
                        onSelectClick: u,
                        onSelectChange: v,
                        customTheme: p = ou,
                        ...h
                    } = e, m = (0, w.useRef)(null), {
                        selects: g,
                        updateSelect: y
                    } = (0, n6.zs)(), {
                        filters: f,
                        updateFilter: x
                    } = (0, n6.$J)(), {
                        sortings: _,
                        updateSorting: I
                    } = (0, n6.ec)(), {
                        settings: C,
                        updateSetting: S
                    } = (0, n6.dB)(), T = g.find(e => e.name === o), D = ov(T), Z = (e, t, l) => {
                        var i;
                        e === ln.states.filter && x({
                            name: t,
                            values: l
                        }), e === ln.states.sorting && I({
                            name: t,
                            sortBy: null !== (i = null == l ? void 0 : l[0]) && void 0 !== i ? i : "asc"
                        }), e === ln.states.setting && S({
                            name: t,
                            values: l
                        })
                    }, E = (0, w.useMemo)(() => {
                        let e = [];
                        return w.Children.forEach(n, t => {
                            (0, w.isValidElement)(t) && "ListWrapper" === t.props.name && e.push(t.props)
                        }), e
                    }, [n]);
                    (0, w.useEffect)(() => {
                        if (w.Children.count(n) > 0) {
                            let e = E.find(e => e.includeInHeader);
                            if (e) {
                                let t = e.items.filter(e => e.selected).map(e => e.id);
                                Z(e.stateDetails.slice, e.stateDetails.name, t), y({
                                    name: o,
                                    values: [e.stateDetails.name],
                                    slice: e.stateDetails.slice,
                                    isOpen: !1
                                })
                            } else y({
                                name: o,
                                values: [],
                                slice: "other",
                                isOpen: !1
                            })
                        }
                    }, [c]);
                    let k = (0, w.useCallback)(e => {
                            var t;
                            e.stopPropagation(), (null == T ? void 0 : null === (t = T.values) || void 0 === t ? void 0 : t[0]) && Z(T.slice, T.values[0], [ln.allItems])
                        }, [x, S, I, T]),
                        N = (0, w.useCallback)(e => {
                            e.stopPropagation(), T && T.isOpen && m.current && !m.current.contains(e.target) && y({ ...T,
                                isOpen: !1
                            })
                        }, [T, y, o]);
                    (0, w.useEffect)(() => (document.addEventListener("mousedown", N), () => {
                        document.removeEventListener("mousedown", N)
                    }), [N]);
                    let R = (0, w.useCallback)(() => {
                        T && y({ ...T,
                            isOpen: !T.isOpen
                        })
                    }, [T, y]);
                    return (0, w.useEffect)(() => {
                        T && D && (null == v || v(T.isOpen))
                    }, [null == T ? void 0 : T.isOpen]), (0, b.BX)(oh, {
                        ref: m,
                        tx: p,
                        ...h,
                        children: [(0, b.tZ)(on, {
                            selectedItems: (() => {
                                if (T) {
                                    var e, t, l;
                                    let {
                                        slice: i,
                                        values: n
                                    } = T, o = E.find(e => e.stateDetails.name === (null == n ? void 0 : n[0]));
                                    if (i === ln.states.filter) {
                                        let t = null === (e = f.find(e => {
                                            var t;
                                            return e.name === (null == T ? void 0 : null === (t = T.values) || void 0 === t ? void 0 : t[0])
                                        })) || void 0 === e ? void 0 : e.values;
                                        return null == o ? void 0 : o.items.filter(e => null == t ? void 0 : t.includes(e.id))
                                    }
                                    if (i === ln.states.sorting) {
                                        let e = null === (t = _.find(e => {
                                            var t;
                                            return e.name === (null == T ? void 0 : null === (t = T.values) || void 0 === t ? void 0 : t[0])
                                        })) || void 0 === t ? void 0 : t.sortBy;
                                        return null == o ? void 0 : o.items.filter(t => e === t.id)
                                    }
                                    if (i === ln.states.setting) {
                                        let e = null === (l = C.find(e => {
                                            var t;
                                            return e.name === (null == T ? void 0 : null === (t = T.values) || void 0 === t ? void 0 : t[0])
                                        })) || void 0 === l ? void 0 : l.values;
                                        return null == o ? void 0 : o.items.filter(t => null == e ? void 0 : e.includes(t.id))
                                    }
                                }
                            })(),
                            open: null !== (l = null == T ? void 0 : T.isOpen) && void 0 !== l && l,
                            placeholder: d,
                            icon: r,
                            expandIcons: s,
                            disabled: c,
                            onHeaderClick: R,
                            onClearAllClick: k,
                            customTheme: p
                        }), (0, b.BX)(os, {
                            open: null !== (i = null == T ? void 0 : T.isOpen) && void 0 !== i && i,
                            dropDownRef: m,
                            customTheme: p,
                            children: [a && (0, b.tZ)(om, {
                                tx: p,
                                children: (0, b.tZ)(og, {
                                    variant: null == p ? void 0 : null === (t = p.bodyTitle) || void 0 === t ? void 0 : t.typography,
                                    tx: p,
                                    children: a
                                })
                            }), n]
                        })]
                    })
                },
                oh = (0, _.Z)("div", {
                    target: "e9kmf270"
                })("position:relative;display:flex;", e => {
                    let {
                        tx: t
                    } = e;
                    return { ...null == t ? void 0 : t.global
                    }
                }),
                om = (0, _.Z)("div", {
                    target: "e9kmf271"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...null == t ? void 0 : t.bodyTitleContainer
                    }
                }),
                og = (0, _.Z)($, {
                    target: "e9kmf272"
                })(e => {
                    var t;
                    let {
                        tx: l
                    } = e;
                    return { ...null == l ? void 0 : null === (t = l.bodyTitle) || void 0 === t ? void 0 : t.style
                    }
                });
            op.displayName = "Select";
            let oy = (e, t, l, i, n) => "filter" === t ? e.map(e => (null == l ? void 0 : l.includes(e.id)) ? { ...e,
                    selected: !0
                } : { ...e,
                    selected: !1
                }) : "sorting" === t ? e.map(e => i === e.id ? { ...e,
                    selected: !0
                } : { ...e,
                    selected: !1
                }) : e.map(e => (null == n ? void 0 : n.includes(e.id)) ? { ...e,
                    selected: !0
                } : { ...e,
                    selected: !1
                }),
                of = e => {
                    let {
                        item: t,
                        filters: l,
                        multi: i,
                        deselectable: n
                    } = e;
                    if (l && i) {
                        if (t.id === ln.allItems) return [ln.allItems];
                        if (l.includes(ln.allItems)) return [t.id];
                        if (!l.includes(t.id)) return [...l, t.id];
                        let e = l.filter(e => e !== t.id);
                        return 0 === e.length ? [ln.allItems] : e
                    }
                    return n && (null == l ? void 0 : l.includes(t.id)) ? [ln.allItems] : [t.id]
                },
                ox = (e, t, l) => t ? t.includes(e.id) ? l ? t.filter(t => t !== e.id) : [e.id] : l ? [...t, e.id] : [e.id] : [e.id],
                ob = e => {
                    var t, l, i, n, o;
                    let {
                        items: a,
                        stateDetails: d,
                        selectStateName: r,
                        includeInHeader: s,
                        title: c,
                        clickToClose: u,
                        noDataMessage: v,
                        multi: p,
                        deselectable: h,
                        checkBox: m,
                        selectedIcon: g,
                        selectedIconAlt: y,
                        onItemClick: f,
                        customTheme: x
                    } = e, {
                        filters: _,
                        updateFilter: I
                    } = (0, n6.$J)(), {
                        sortings: C,
                        updateSorting: S
                    } = (0, n6.ec)(), {
                        settings: T,
                        updateSetting: D
                    } = (0, n6.dB)(), {
                        selects: Z,
                        updateSelect: E
                    } = (0, n6.zs)(), k = null === (t = _.find(e => e.name === d.name)) || void 0 === t ? void 0 : t.values, N = null === (l = C.find(e => e.name === d.name)) || void 0 === l ? void 0 : l.sortBy, R = null === (i = T.find(e => e.name === d.name)) || void 0 === i ? void 0 : i.values, M = null === (n = Z.find(e => e.name === r)) || void 0 === n ? void 0 : n.values, F = (0, w.useCallback)(e => {
                        I({
                            name: d.name,
                            values: of ({
                                item: e,
                                filters: k,
                                multi: p,
                                deselectable: h
                            })
                        })
                    }, [_, I, d]), O = (0, w.useCallback)(e => {
                        S({
                            name: d.name,
                            sortBy: e.id
                        })
                    }, [C, S, d]), B = (0, w.useCallback)(e => {
                        D({
                            name: d.name,
                            values: ox(e, R, p)
                        })
                    }, [T, D, d]), L = (0, w.useCallback)(() => {
                        E({
                            name: r,
                            values: s ? [d.name] : M,
                            slice: d.slice,
                            isOpen: !u
                        })
                    }, [E, r, M, d, s]), z = (0, w.useCallback)(e => {
                        d.slice === ln.states.filter && F(e), d.slice === ln.states.sorting && O(e), d.slice === ln.states.setting && B(e), L(), f && f()
                    }, [F, L, O, B, d]);
                    return (0, b.BX)(b.HY, {
                        children: [c && (0, b.tZ)(ow, {
                            variant: null == x ? void 0 : null === (o = x.wrapperTitle) || void 0 === o ? void 0 : o.typography,
                            tx: x,
                            className: "select-list__title",
                            children: c
                        }), (0, b.tZ)(eY, {
                            items: oy(a, d.slice, k, N, R),
                            noDataMessage: v,
                            checkBox: m,
                            selectedIcon: g,
                            selectedIconAlt: y,
                            onListRowClick: z,
                            customTheme: x
                        })]
                    })
                },
                ow = (0, _.Z)($, {
                    target: "e1g3thad0"
                })(e => {
                    var t;
                    let {
                        tx: l
                    } = e;
                    return { ...null == l ? void 0 : null === (t = l.wrapperTitle) || void 0 === t ? void 0 : t.style
                    }
                });
            ob.displayName = "ListWrapper";
            var o_ = e => {
                let {
                    children: t,
                    theme: l
                } = e;
                return (0, b.tZ)(J, {
                    tx: l,
                    className: "filters-panel",
                    children: (0, b.tZ)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            height: "100%"
                        },
                        children: t
                    })
                })
            };
            let oI = (0, _.Z)(J, {
                target: "e1ucbcbb0"
            })("display:flex;align-items:center;justify-content:space-between;");
            var oC = e => {
                let {
                    children: t,
                    theme: l
                } = e;
                return (0, b.tZ)(oI, {
                    className: "filters-panel__header",
                    tx: l,
                    children: t
                })
            };
            let oS = (0, _.Z)(J, {
                target: "e1i3s7ck0"
            })("display:flex;flex-direction:column;");
            var oT = e => {
                let {
                    children: t,
                    theme: l
                } = e;
                return (0, b.tZ)(oS, {
                    tx: l,
                    children: t
                })
            };
            let oD = (0, _.Z)(J, {
                target: "e1ovq01m0"
            })("display:flex;");
            var oZ = e => {
                let {
                    children: t,
                    theme: l
                } = e;
                return (0, b.tZ)(oD, {
                    tx: l,
                    children: t
                })
            };
            let oE = (0, W.iv)("text-decoration:none;color:inherit;outline:0px;");
            (0, _.Z)("div", {
                target: "e8g52v80"
            })("& a:link{", oE, "}& a:visited{", oE, "}& a:hover{", oE, "}& a:active{", oE, "}", e => {
                let {
                    tx: t
                } = e;
                return { ...t
                }
            });
            var ok = l(81758),
                oN = l(87066),
                oR = l(29204);
            let oM = {
                    Debug: 0,
                    Info: 1,
                    Warn: 2,
                    Error: 3
                },
                oF = {
                    [oM.Debug]: "DEBUG",
                    [oM.Info]: "INFO",
                    [oM.Warn]: "WARN",
                    [oM.Error]: "ERROR"
                },
                oO = {
                    globalLogLevel: oM.Info,
                    isEnabled: !1,
                    prettify: !1,
                    excludedCategories: new Set
                };
            class oB {
                static getInstance() {
                    return oB.instance || (oB.instance = new oB), oB.instance
                }
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (this.isInitialized) return;
                    let {
                        debugEnv: t,
                        logLevelEnv: l,
                        prettify: i = !1,
                        excludedCategories: n = []
                    } = e;
                    oO.isEnabled = "true" === t || "1" === t, oO.prettify = i, oO.excludedCategories = new Set(n), l && l in oM && (oO.globalLogLevel = oM[l]), this.isInitialized = !0
                }
                log(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.isInitialized) {
                        console.warn("Logger not initialized. Call initialize() first.");
                        return
                    }
                    let {
                        level: l = oM.Info,
                        category: i,
                        objectToLog: n,
                        forceEnable: o
                    } = t;
                    if (!((void 0 !== o ? o : oO.isEnabled) && (!i || !oO.excludedCategories.has(i))) || l < oO.globalLogLevel) return;
                    let a = performance.now().toFixed(3),
                        d = "[".concat(a, "] [").concat(oF[l], "]");
                    i && (d += " [".concat(i, "]")), d += " ".concat(e);
                    let r = {
                        [oM.Debug]: console.debug,
                        [oM.Info]: console.log,
                        [oM.Warn]: console.warn,
                        [oM.Error]: console.error
                    };
                    void 0 !== n ? r[l](d, n) : r[l](d)
                }
                getErrorMessage(e) {
                    return e instanceof Error ? e.message : String(e)
                }
                getLogLevelOfFetchError(e) {
                    return e instanceof oR.ty ? oM.Info : oM.Error
                }
                createLogError(e) {
                    return t => {
                        var l;
                        let i = (null !== (l = null == e ? void 0 : e.mapLevel) && void 0 !== l ? l : this.getLogLevelOfFetchError)(t);
                        this.log(this.getErrorMessage(t), {
                            objectToLog: i === oM.Error ? t : void 0,
                            category: null == e ? void 0 : e.category,
                            level: i
                        })
                    }
                }
                constructor() {
                    this.isInitialized = !1
                }
            }
            let oL = oB.getInstance();

            function oz(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                oL.log(e, t)
            }
            let oj = oL.createLogError.bind(oL),
                oA = oL.getLogLevelOfFetchError.bind(oL),
                oW = oN.default.create();
            oW.interceptors.request.use(e => (e.debug && (e.metadata = {
                startTime: new Date
            }), e), async e => await Promise.reject(e)), oW.interceptors.response.use(e => {
                if (e.config.debug) {
                    var t;
                    let {
                        metadata: l
                    } = e.config, i = new Date().getTime() - l.startTime.getTime();
                    oz("[fetcher] ".concat(null === (t = e.config.method) || void 0 === t ? void 0 : t.toUpperCase(), " ").concat(e.config.url, " ").concat(e.status, " in ").concat(i, "ms")), oz("Headers: ".concat(JSON.stringify(e.config.headers)))
                }
                return e
            }, async e => {
                var t, l;
                if (null === (t = e.response) || void 0 === t ? void 0 : t.config.debug) {
                    let {
                        metadata: t
                    } = e.response.config, i = new Date().getTime() - t.startTime.getTime();
                    oz("[fetcher] ".concat(null === (l = e.response.config.method) || void 0 === l ? void 0 : l.toUpperCase(), " ").concat(e.response.config.url, " ").concat(e.response.status, " in ").concat(i, "ms")), oz("Headers: ".concat(JSON.stringify(e.response.config.headers)))
                }
                return await Promise.reject(e)
            });
            let oH = async (e, t) => {
                    try {
                        return await oW(e, t)
                    } catch (t) {
                        throw oz("[fetcher][url=".concat(e, "]: ").concat(String(t)), {
                            level: oA(t)
                        }), t
                    }
                },
                oG = async (e, t, l) => {
                    var i;
                    let n = null !== (i = null == l ? void 0 : l.method) && void 0 !== i ? i : "GET";
                    return await oH(e, { ...l,
                        ...oX(n, null != t ? t : {})
                    })
                },
                oX = (e, t) => {
                    let l = {
                        responseType: "json",
                        validateStatus: e => e >= 200 && e < 300 || !!e && e in t
                    };
                    return "head" !== e.toLowerCase() && (l.transformResponse = (e, l, i) => i && i >= 300 && i in t ? t[i] : JSON.parse(e)), l
                };
            var oP = e => {
                    var t, l;
                    let {
                        endpoint: i,
                        method: n = "get",
                        shouldFetch: o = !0,
                        initialData: a,
                        ...d
                    } = e, r = async () => {
                        try {
                            let e = await oH(i, {
                                method: n
                            });
                            return {
                                data: e.data,
                                headers: e.headers
                            }
                        } catch (e) {
                            throw Error("Fetch error: ".concat(e.message))
                        }
                    }, s = (0, ok.ZP)(o && i ? [n, i] : null, o ? r : null, {
                        fallbackData: {
                            data: a
                        },
                        revalidateOnFocus: !1,
                        ...d
                    });
                    return { ...s,
                        data: null === (t = s.data) || void 0 === t ? void 0 : t.data,
                        headers: null === (l = s.data) || void 0 === l ? void 0 : l.headers,
                        error: s.error
                    }
                },
                o$ = e => {
                    let {
                        previousValue: t,
                        currentValue: l
                    } = e;
                    if ("number" == typeof l) return {
                        isCurrentValueGreaterThanPrevious: l > t,
                        lastValue: l
                    };
                    if ("string" == typeof l) {
                        let e = new Date(l),
                            i = e.getTime();
                        if (!Number.isNaN(i)) return {
                            isCurrentValueGreaterThanPrevious: e > new Date(t),
                            lastValue: i
                        }
                    }
                    return {
                        isCurrentValueGreaterThanPrevious: !1,
                        lastValue: 0
                    }
                };
            let oU = e => {
                    let {
                        children: t,
                        basePaths: l,
                        formats: i,
                        fileNameTemplates: n
                    } = e, o = (0, w.useMemo)(() => ({
                        basePaths: l,
                        formats: i,
                        fileNameTemplates: n
                    }), [l, i, n]);
                    return (0, b.tZ)(eN.Provider, {
                        value: o,
                        children: t
                    })
                },
                oV = (0, w.createContext)({
                    filters: void 0,
                    filterDaysEndpoint: "",
                    filterDisciplinesEndpoint: "",
                    filterEventCategoriesEndpoint: "",
                    filterGendersEndpoint: "",
                    filterNocsEndpoint: "",
                    filterVenuesEndpoint: "",
                    initialFilterDays: void 0,
                    initialFilterDisciplines: void 0,
                    initialFilterEventCategories: void 0,
                    initialFilterGenders: void 0,
                    initialFilterNocs: void 0,
                    initialFilterVenues: void 0
                });
            var oq = l(18446),
                oY = l.n(oq);
            let oJ = Object.freeze(["category", "discipline", "eventCategory", "event", "organisation", "sorting", "gender", "day", "venue", "medalEvents", "venueTimeZone"]);
            var oK = l(17033);
            let {
                eventFiltersForIntegrator: oQ
            } = oK.default, {
                eventCategoryDescriptions: o0
            } = oQ, o1 = {
                [o0.men]: "M",
                [o0.women]: "W",
                [o0.open]: "O",
                [o0.mixed]: "X",
                [o0.total]: "allItems"
            }, o2 = e => o1[e], o4 = e => "string" == typeof e && oJ.includes(e), o8 = e => "object" == typeof e && null !== e && o4(e.type) && "string" == typeof e.code, o3 = /^[MF]$/, o5 = /^\d{4}-\d{2}-\d{2}$/, o6 = {
                gender: e => {
                    let t = e.code.trim().toUpperCase().slice(0, 1);
                    if (o3.test(t)) return { ...e,
                        code: t
                    }
                },
                discipline: e => {
                    let t = e.code.trim().toUpperCase();
                    return { ...e,
                        code: t
                    }
                },
                day: e => {
                    let t = e.code.trim();
                    if (o5.test(t)) return { ...e,
                        code: t
                    }
                },
                organisation: e => {
                    let t = e.code.trim().toUpperCase();
                    return { ...e,
                        code: t
                    }
                },
                event: e => {
                    let t = e.code.trim();
                    return { ...e,
                        code: t
                    }
                },
                eventCategory: e => {
                    let t = e.code.trim();
                    return { ...e,
                        code: t
                    }
                },
                category: e => {
                    let t = o2(e.code);
                    if (t) return { ...e,
                        code: t
                    }
                }
            }, o7 = e => {
                if (!o8(e)) return;
                let t = null == o6 ? void 0 : o6[e.type],
                    l = t ? t(e) : e;
                if ("" !== e.code) return l
            }, o9 = e => {
                var t;
                if (!e) return;
                let l = {
                    mainFilter: o7(e.mainFilter),
                    additionalFilters: null === (t = e.additionalFilters) || void 0 === t ? void 0 : t.map(o7).filter(e => null != e)
                };
                return oY()(l, e) ? e : l
            }, ae = e => {
                let {
                    children: t,
                    filters: l,
                    filterDaysEndpoint: i,
                    filterDisciplinesEndpoint: n,
                    filterEventCategoriesEndpoint: o,
                    filterGendersEndpoint: a,
                    filterNocsEndpoint: d,
                    filterVenuesEndpoint: r,
                    initialFilterDays: s,
                    initialFilterDisciplines: c,
                    initialFilterEventCategories: u,
                    initialFilterGenders: v,
                    initialFilterNocs: p,
                    initialFilterVenues: h
                } = e, m = (0, w.useMemo)(() => ({
                    filters: o9(l),
                    filterDaysEndpoint: i,
                    filterDisciplinesEndpoint: n,
                    filterEventCategoriesEndpoint: o,
                    filterGendersEndpoint: a,
                    filterNocsEndpoint: d,
                    filterVenuesEndpoint: r,
                    initialFilterDays: s,
                    initialFilterDisciplines: c,
                    initialFilterEventCategories: u,
                    initialFilterGenders: v,
                    initialFilterNocs: p,
                    initialFilterVenues: h
                }), [l, i, n, o, a, d, r, s, c, u, v, p, h]);
                return (0, b.tZ)(oV.Provider, {
                    value: m,
                    children: t
                })
            };
            var at = l(98116);
            let al = (0, w.createContext)(at.constants.time.defaultVenueTimeZone),
                ai = () => (0, w.useContext)(al);
            var an = e => {
                let {
                    children: t,
                    venueTimeZone: l
                } = e, i = ai(), n = String(l || i);
                return (0, w.useEffect)(() => {
                    let e = Y.ou.fromMillis(1712667880015, {
                        zone: n
                    });
                    (e.invalidReason || e.invalidExplanation) && oz("[VenueTimeZoneProvider][error]: ".concat(e.invalidReason, " ").concat(e.invalidExplanation), {
                        level: oM.Error
                    })
                }, [n]), (0, b.tZ)(al.Provider, {
                    value: n,
                    children: t
                })
            };
            let ao = {
                    maxAdvertisements: 0,
                    intervalBetweenAds: 0,
                    adWidth: "",
                    adHeight: "",
                    adIdFormat: "",
                    adRenderer: () => null
                },
                aa = (0, w.createContext)({
                    advConfig: ao
                }),
                ad = e => {
                    let {
                        children: t,
                        config: l = ao
                    } = e, i = (0, w.useMemo)(() => ({
                        advConfig: l
                    }), [l]);
                    return (0, b.tZ)(aa.Provider, {
                        value: i,
                        children: t
                    })
                };
            class ar extends w.Component {
                static getDerivedStateFromError() {
                    return {
                        hasError: !0
                    }
                }
                componentDidCatch(e, t) {
                    oz("".concat(e.message, ": }}"), {
                        level: oM.Error,
                        category: "ErrorBoundary",
                        objectToLog: {
                            error: e,
                            info: t
                        }
                    })
                }
                render() {
                    return this.state.hasError ? this.props.fallback : this.props.children
                }
                constructor(e) {
                    super(e), this.state = {
                        hasError: !1
                    }
                }
            }
            var as = e => {
                    let t = t => {
                        let {
                            initialDictionary: l,
                            iconsConfig: i,
                            fonts: n = [],
                            translationDictionary: o,
                            customGlobalTheme: a,
                            filterDaysEndpoint: d,
                            filterDisciplinesEndpoint: r,
                            filterEventCategoriesEndpoint: s,
                            filterGendersEndpoint: c,
                            filterNocsEndpoint: u,
                            filterVenuesEndpoint: v,
                            initialFilterDays: p,
                            initialFilterDisciplines: h,
                            initialFilterEventCategories: m,
                            initialFilterGenders: g,
                            initialFilterNocs: y,
                            initialFilterVenues: f,
                            filters: x,
                            venueTimeZone: w,
                            advConfig: _
                        } = t;
                        return (0, b.tZ)(ar, {
                            children: (0, b.tZ)(ae, {
                                filters: x,
                                filterDaysEndpoint: d,
                                filterDisciplinesEndpoint: r,
                                filterEventCategoriesEndpoint: s,
                                filterGendersEndpoint: c,
                                filterNocsEndpoint: u,
                                filterVenuesEndpoint: v,
                                initialFilterDays: p,
                                initialFilterDisciplines: h,
                                initialFilterEventCategories: m,
                                initialFilterGenders: g,
                                initialFilterNocs: y,
                                initialFilterVenues: f,
                                children: (0, b.tZ)(H, {
                                    theme: a,
                                    children: (e => {
                                        let a = e;
                                        if (i) {
                                            let {
                                                basePaths: e,
                                                formats: l,
                                                fileNameTemplates: i
                                            } = t.iconsConfig;
                                            a = (0, b.tZ)(oU, {
                                                basePaths: e,
                                                formats: null != l ? l : {
                                                    default: "svg"
                                                },
                                                fileNameTemplates: null != i ? i : {
                                                    default: "{name}"
                                                },
                                                children: a
                                            })
                                        }
                                        return (l || o) && (a = (0, b.tZ)(l1.$j, {
                                            serverDictionary: l,
                                            dictionary: o,
                                            children: a
                                        })), w && (a = (0, b.tZ)(an, {
                                            venueTimeZone: w,
                                            children: a
                                        })), n.length > 0 && (a = (0, b.tZ)(ew, {
                                            fonts: n,
                                            children: a
                                        })), _ && (a = (0, b.tZ)(ad, {
                                            config: _,
                                            children: a
                                        })), a
                                    })((0, b.tZ)(e, { ...t
                                    }))
                                })
                            })
                        })
                    };
                    return t.displayName = "WithSportProviders(".concat(e.displayName || e.name || "Component", ")"), t
                },
                ac = l(64529),
                au = l(782);
            let av = {
                    NONE: "NONE",
                    FOUND: "FOUND",
                    APPLIED: "APPLIED"
                },
                ap = e => e === av.NONE,
                ah = e => e === av.FOUND,
                am = e => e === av.APPLIED,
                ag = (0, ac.Ue)((0, au.mW)((e, t) => ({
                    competitionDay: "",
                    previousCompetionDay: "",
                    nocsList: [],
                    disciplinesList: [],
                    expandableGroupsState: {},
                    defaultIsGroupExpanded: !1,
                    showLoadingOverlay: !1,
                    switchToFullSchedule: !1,
                    switchToFilteredSchedule: !1,
                    isFilterBarExpanded: !1,
                    additionalFiltersStatus: av.NONE,
                    isScrollingToCompetitionDayByCalendar: !1,
                    toggleGroup: t => {
                        e(e => ({
                            expandableGroupsState: iy(t, {
                                expandableEntities: e.expandableGroupsState,
                                defaultIsExpanded: e.defaultIsGroupExpanded
                            })
                        }), !1, "toggleGroup")
                    },
                    toggleAllGroups: () => {
                        e(e => ({
                            expandableGroupsState: {},
                            defaultIsGroupExpanded: !e.defaultIsGroupExpanded
                        }), !1, "toggleAllGroups")
                    },
                    updateAdditionalFiltersStatus: t => {
                        e({
                            additionalFiltersStatus: t
                        }, !1, "updateAdditionalFiltersStatus")
                    },
                    updateCompetitionDay: t => {
                        e(e => ({
                            competitionDay: t,
                            previousCompetionDay: e.competitionDay
                        }), !1, "updateCompetitionDay")
                    },
                    updateNocsList: t => {
                        e({
                            nocsList: t
                        }, !1, "updateNocsList")
                    },
                    updateDisciplinesList: t => {
                        e({
                            disciplinesList: t
                        }, !1, "updateDisciplinesList")
                    },
                    updateSwitchToFullSchedule: () => {
                        e(e => ({ ...e,
                            switchToFilteredSchedule: !1,
                            switchToFullSchedule: !0
                        }), !1, "updateSwitchToFullSchedule")
                    },
                    updateSwitchToFilteredSchedule: () => {
                        e(e => ({ ...e,
                            switchToFilteredSchedule: !0,
                            switchToFullSchedule: !1
                        }), !1, "updateSwitchToFilteredSchedule")
                    },
                    resetSwitchTo: () => {
                        e(e => ({ ...e,
                            switchToFilteredSchedule: !1,
                            switchToFullSchedule: !1
                        }), !1, "resetSwitchTo")
                    },
                    setIsScrollingToCompetitionDayByCalendar: t => {
                        e(e => ({ ...e,
                            isScrollingToCompetitionDayByCalendar: t
                        }), !1, "setIsScrollingToCompetitionDayByCalendar")
                    },
                    updateShowLoadingOverlay: t => {
                        e({
                            showLoadingOverlay: t
                        }, !1, "updateShowLoadingOverlay")
                    },
                    updateIsFilterBarExpanded: t => {
                        e({
                            isFilterBarExpanded: t
                        }, !1, "updateIsFilterBarExpanded")
                    },
                    isAdditionalFiltersNone: () => ap(t().additionalFiltersStatus),
                    isAdditionalFiltersFoundButNotApplied: () => ah(t().additionalFiltersStatus),
                    isAdditionalFiltersApplied: () => am(t().additionalFiltersStatus)
                }), {
                    name: "scheduleWidgetStore"
                })),
                ay = (0, ac.Ue)((0, au.mW)((0, au.tJ)(e => ({
                    isVenueTimeZone: !1,
                    updateIsVenueTimeZone: t => {
                        e({
                            isVenueTimeZone: t
                        }, !1, "updateIsVenueTimeZone")
                    }
                }), {
                    name: "scheduleWidgetTimeZone"
                }))),
                af = e => {
                    let {
                        eventName: t,
                        isPayloadEmptyFn: l,
                        currentPayload: i,
                        previousPayload: n,
                        updatePreviousPayloadFn: o
                    } = e;
                    if (!i) return !1;
                    let a = !l(i),
                        d = !!n && !l(n),
                        r = !n || !oY()(i, n);
                    if ((a || d) && r) {
                        let e = new CustomEvent(t, {
                            detail: i
                        });
                        return document.dispatchEvent(e), o(i), !0
                    }
                    return !1
                },
                ax = () => {
                    let e = (0, w.useContext)(oV);
                    if (!e) throw Error("useFiltersState must be used within a FiltersProvider");
                    let {
                        filters: t,
                        filterDaysEndpoint: l,
                        filterDisciplinesEndpoint: i,
                        filterEventCategoriesEndpoint: n,
                        filterGendersEndpoint: o,
                        filterNocsEndpoint: a,
                        filterVenuesEndpoint: d,
                        initialFilterDays: r,
                        initialFilterDisciplines: s,
                        initialFilterEventCategories: c,
                        initialFilterGenders: u,
                        initialFilterNocs: v,
                        initialFilterVenues: p
                    } = e;
                    return {
                        filters: t,
                        filterDaysEndpoint: l,
                        filterDisciplinesEndpoint: i,
                        filterEventCategoriesEndpoint: n,
                        filterGendersEndpoint: o,
                        filterNocsEndpoint: a,
                        filterVenuesEndpoint: d,
                        initialFilterDays: r,
                        initialFilterDisciplines: s,
                        initialFilterEventCategories: c,
                        initialFilterGenders: u,
                        initialFilterNocs: v,
                        initialFilterVenues: p
                    }
                },
                {
                    eventCategoryDescriptions: ab,
                    mainEventName: aw
                } = at.constants.eventFiltersForIntegrator,
                a_ = {
                    M: ab.men,
                    W: ab.women,
                    O: ab.open,
                    X: ab.mixed,
                    allItems: ab.total
                },
                aI = e => !e || Object.entries(e).every(e => {
                    let [t, l] = e;
                    return "object" == typeof l && null !== l ? Object.values(l).every(e => void 0 === e) : void 0 === l
                }),
                aC = {
                    disciplineCode: void 0,
                    disciplineName: void 0,
                    eventCategory: void 0,
                    event: void 0,
                    organisationCode: void 0,
                    organisationName: void 0,
                    sortingCriteria: void 0,
                    gender: void 0,
                    day: void 0,
                    venue: void 0,
                    medalEvents: void 0,
                    selectedFilter: {}
                },
                aS = e => 0 === Object.keys(e.selectedFilter).length ? (console.warn("Payload invalid: selectedFilter is empty"), !1) : void 0 !== e.disciplineCode != (void 0 !== e.disciplineName) ? (console.warn("Payload invalid: Discipline code and name mismatch", {
                    disciplineCode: e.disciplineCode,
                    disciplineName: e.disciplineName
                }), !1) : void 0 !== e.organisationCode == (void 0 !== e.organisationName) || (console.warn("Payload invalid: Organisation code and name mismatch", {
                    organisationCode: e.organisationCode,
                    organisationName: e.organisationName
                }), !1);
            var aT = e => {
                    let {
                        widget: t
                    } = e;
                    if (!["medals", "medallists", "schedule"].includes(t)) throw Error("Unsupported widget: ".concat(t));
                    let {
                        initialFilterDisciplines: l,
                        initialFilterNocs: i
                    } = ax(), {
                        filters: n
                    } = (0, n6.$J)(), {
                        sortings: o
                    } = (0, n6.ec)(), {
                        isVenueTimeZone: a
                    } = ay(), [d, r] = (0, w.useState)(), [s, c] = (0, w.useState)(new Set), u = (0, w.useRef)(), v = (0, w.useMemo)(() => {
                        var e, t, l, i, a, d, r, s, c, u, v, p, h, m, g, y, f, x, b, w, _, I, C, S, T, D, Z, E;
                        return {
                            medals: {
                                noc: null === (t = n.find(e => e.name === at.constants.medalsTable.filters.noc)) || void 0 === t ? void 0 : null === (e = t.values) || void 0 === e ? void 0 : e[0],
                                discipline: null === (i = n.find(e => e.name === at.constants.medalsTable.filters.discipline)) || void 0 === i ? void 0 : null === (l = i.values) || void 0 === l ? void 0 : l[0],
                                eventCategory: null === (d = n.find(e => e.name === at.constants.medalsTable.filters.eventCategory)) || void 0 === d ? void 0 : null === (a = d.values) || void 0 === a ? void 0 : a[0],
                                sorting: null === (r = o.find(e => e.name === at.constants.medalsTable.sorting)) || void 0 === r ? void 0 : r.sortBy
                            },
                            medallists: {
                                noc: null === (c = n.find(e => e.name === at.constants.medallistTable.filters.noc)) || void 0 === c ? void 0 : null === (s = c.values) || void 0 === s ? void 0 : s[0],
                                discipline: null === (v = n.find(e => e.name === at.constants.medallistTable.filters.discipline)) || void 0 === v ? void 0 : null === (u = v.values) || void 0 === u ? void 0 : u[0],
                                event: null === (h = n.find(e => e.name === at.constants.medallistTable.filters.event)) || void 0 === h ? void 0 : null === (p = h.values) || void 0 === p ? void 0 : p[0],
                                gender: null === (g = n.find(e => e.name === at.constants.medallistTable.filters.gender)) || void 0 === g ? void 0 : null === (m = g.values) || void 0 === m ? void 0 : m[0],
                                day: null === (f = n.find(e => e.name === at.constants.medallistTable.filters.day)) || void 0 === f ? void 0 : null === (y = f.values) || void 0 === y ? void 0 : y[0],
                                sorting: null === (x = o.find(e => e.name === at.constants.medallistTable.sorting)) || void 0 === x ? void 0 : x.sortBy
                            },
                            schedule: {
                                noc: null === (w = n.find(e => e.name === at.constants.dailySchedule.filters.noc)) || void 0 === w ? void 0 : null === (b = w.values) || void 0 === b ? void 0 : b[0],
                                event: null === (I = n.find(e => e.name === at.constants.dailySchedule.filters.disciplineEvent)) || void 0 === I ? void 0 : null === (_ = I.values) || void 0 === _ ? void 0 : _[0],
                                venue: null === (S = n.find(e => e.name === at.constants.dailySchedule.filters.venue)) || void 0 === S ? void 0 : null === (C = S.values) || void 0 === C ? void 0 : C[0],
                                discipline: null === (D = n.find(e => e.name === at.constants.dailySchedule.filters.discipline)) || void 0 === D ? void 0 : null === (T = D.values) || void 0 === T ? void 0 : T[0],
                                day: null === (E = n.find(e => e.name === at.constants.dailySchedule.filters.day)) || void 0 === E ? void 0 : null === (Z = E.values) || void 0 === Z ? void 0 : Z[0],
                                medalEvents: -1 !== n.findIndex(e => e.name === at.constants.dailySchedule.filters.medal)
                            }
                        }
                    }, [n, o]), p = e => {
                        c(t => new Set(t).add(e))
                    }, h = (0, w.useCallback)(e => {
                        let t = f(e);
                        aS(t) ? r(t) : oz("Invalid payload!", {
                            level: oM.Warn,
                            objectToLog: t,
                            category: "filterApplied"
                        })
                    }, [v, t, a]);
                    (0, w.useEffect)(() => {
                        s.size > 0 && (h(Array.from(s)), c(new Set))
                    }, [s, h]), (0, w.useEffect)(() => {
                        d && af({
                            eventName: aw,
                            isPayloadEmptyFn: aI,
                            currentPayload: d,
                            previousPayload: u.current,
                            updatePreviousPayloadFn: e => {
                                u.current = e
                            }
                        })
                    }, [d]), (0, w.useEffect)(() => {
                        p("organisation")
                    }, [v.medals.noc, v.medallists.noc, v.schedule.noc]), (0, w.useEffect)(() => {
                        p("discipline")
                    }, [v.medals.discipline, v.medallists.discipline, v.schedule.discipline]), (0, w.useEffect)(() => {
                        p("eventCategory")
                    }, [v.medals.eventCategory]), (0, w.useEffect)(() => {
                        p("sorting")
                    }, [v.medals.sorting, v.medallists.sorting]), (0, w.useEffect)(() => {
                        p("event")
                    }, [v.medallists.event, v.schedule.event]), (0, w.useEffect)(() => {
                        p("gender")
                    }, [v.medallists.gender]), (0, w.useEffect)(() => {
                        p("day")
                    }, [v.medallists.day, v.schedule.day]), (0, w.useEffect)(() => {
                        p("venue")
                    }, [v.schedule.venue]), (0, w.useEffect)(() => {
                        p("medalEvents")
                    }, [v.schedule.medalEvents]), (0, w.useEffect)(() => {
                        p("venueTimeZone")
                    }, [a]);
                    let m = () => {
                            switch (t) {
                                case "medals":
                                    return v.medals;
                                case "medallists":
                                    return v.medallists;
                                case "schedule":
                                    return v.schedule
                            }
                        },
                        g = (e, t) => "boolean" == typeof t && ("resetFilters" === e || "medalEvents" === e) ? t : t === at.constants.allItems ? void 0 : t,
                        y = (e, t) => {
                            if (!t) return;
                            let n = "organisation" === e ? i : l;
                            if (!n) return;
                            let o = "organisation" === e ? n.nocs : n.disciplines,
                                a = null == o ? void 0 : o.find(e => e.id === t);
                            return null == a ? void 0 : a.name
                        },
                        f = e => {
                            let l = m(),
                                {
                                    noc: i,
                                    discipline: n
                                } = l,
                                o = "sorting" in l ? l.sorting : void 0,
                                d = "medallists" === t ? v.medallists.event : v.schedule.event,
                                r = "medallists" === t ? v.medallists.day : v.schedule.day,
                                s = {
                                    disciplineCode: n !== at.constants.allItems ? n : void 0,
                                    disciplineName: n === at.constants.allItems ? void 0 : y("discipline", n),
                                    organisationCode: i !== at.constants.allItems ? i : void 0,
                                    organisationName: i === at.constants.allItems ? void 0 : y("organisation", i),
                                    sortingCriteria: o,
                                    eventCategory: a_[v.medals.eventCategory],
                                    gender: v.medallists.gender !== at.constants.allItems ? v.medallists.gender : void 0,
                                    day: r,
                                    venue: v.schedule.venue !== at.constants.allItems ? v.schedule.venue : void 0,
                                    event: d !== at.constants.allItems ? d : void 0,
                                    medalEvents: v.schedule.medalEvents,
                                    resetFilters: !1,
                                    userTimeZone: !a,
                                    selectedFilter: {}
                                };
                            return e.forEach(e => {
                                switch (e) {
                                    case "organisation":
                                        s.selectedFilter.organisation = g("organisation", i);
                                        break;
                                    case "discipline":
                                        s.selectedFilter.discipline = g("discipline", n);
                                        break;
                                    case "eventCategory":
                                        s.selectedFilter.eventCategory = g("eventCategory", a_[v.medals.eventCategory]);
                                        break;
                                    case "event":
                                        s.selectedFilter.event = g("event", d);
                                        break;
                                    case "sorting":
                                        s.selectedFilter.sortingCriteria = g("sortingCriteria", o);
                                        break;
                                    case "gender":
                                        s.selectedFilter.gender = g("gender", v.medallists.gender);
                                        break;
                                    case "day":
                                        s.selectedFilter.day = g("day", r);
                                        break;
                                    case "venue":
                                        s.selectedFilter.venue = g("venue", v.schedule.venue);
                                        break;
                                    case "medalEvents":
                                        s.selectedFilter.medalEvents = g("medalEvents", v.schedule.medalEvents);
                                        break;
                                    case "venueTimeZone":
                                        s.selectedFilter.userTimeZone = g("userTimeZone", !a)
                                }
                            }), s
                        };
                    return {
                        lastEventPayload: d
                    }
                },
                aD = e => {
                    let [t, l] = (0, w.useState)(0), [i, n] = (0, w.useState)(0), [o, a] = (0, w.useState)(0), d = Object.values(at.constants.medalsTable.filters), r = Object.values(at.constants.medallistTable.filters), s = Object.values(at.constants.dailySchedule.filters).filter(e => e !== at.constants.dailySchedule.filters.day), c = t => e.filter(e => t.includes(e.name)).filter(e => (null == e ? void 0 : e.values) && e.values.length > 0 && !e.values.includes(at.constants.allItems)).length;
                    return (0, w.useEffect)(() => {
                        l(c(d)), n(c(r)), a(c(s))
                    }, [e]), {
                        appliedMedalsFiltersCount: t,
                        appliedMedallistsFiltersCount: i,
                        appliedScheduleFiltersCount: o
                    }
                };
            let aZ = {
                filterBar: {
                    padding: "1rem",
                    width: "100%",
                    "@media (min-width: 768px)": {
                        padding: "2rem",
                        maxWidth: "910px"
                    }
                },
                header: {
                    backgroundColor: "#fff",
                    boxShadow: F.elevation[300]
                },
                mainContainer: {
                    backgroundColor: "#f8f8f9"
                }
            };
            F.breakpoints.sm, F.breakpoints.sm, F.breakpoints.sm, F.breakpoints.sm, F.breakpoints.sm, F.breakpoints.sm, F.breakpoints.sm, F.breakpoints.sm, F.breakpoints.sm, F.breakpoints.sm, F.breakpoints.sm;
            let aE = new Set(["discipline", "organisation", "day", "event"]);
            var ak = e => void 0 !== e && aE.has(e);
            let aN = {
                    header: {
                        alignItems: "center",
                        backgroundColor: "#ffffff",
                        boxShadow: F.elevation[300],
                        display: "flex",
                        justifyContent: "center",
                        position: "sticky",
                        top: 0,
                        width: "100%",
                        zIndex: 1
                    },
                    mainContainer: {
                        alignItems: "center",
                        backgroundColor: "#f8f8f9",
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "100vh",
                        paddingBottom: "8rem"
                    },
                    dailyScheduleWrapper: {
                        paddingTop: "20px",
                        maxWidth: "864px",
                        ["@media (max-width: ".concat(F.breakpoints.sm, "px)")]: {
                            width: "100%"
                        },
                        ["@media (min-width: ".concat(F.breakpoints.sm, "px) and (max-width: ").concat(F.breakpoints.lg, "px)")]: {
                            width: "83.333%"
                        },
                        ["@media (min-width: ".concat(F.breakpoints.lg, "px)")]: {
                            width: "66.666%"
                        }
                    }
                },
                aR = {
                    display: "mobile",
                    listOffset: -105.2,
                    listRows: {
                        rowGroupGap: 11,
                        rowUnitGap: 11,
                        rowHeightPlaceholder: 87,
                        rowHeightOlympicDayDivider: 72,
                        rowHeightCompetitionDayDivider: 64
                    },
                    text: {
                        competitionDay: {
                            typography: "title3",
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                paddingLeft: "16px",
                                color: "".concat(F.colors.white),
                                backgroundImage: "linear-gradient(to right, ".concat(F.colors.primary900, " , ").concat(F.colors.primary500, ")"),
                                height: "48px"
                            }
                        },
                        endOfOlympicDay: {
                            typography: "body2",
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "center",
                                padding: "4px 0 36px 0",
                                color: "".concat(F.colors.black),
                                fontFeatureSettings: "'clig' off, 'liga' off"
                            }
                        }
                    },
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%"
                    },
                    olympicDayDivider: {
                        height: "1px",
                        width: "100%",
                        backgroundColor: F.colors.gray700,
                        marginTop: "8px"
                    },
                    group: {
                        liveEvents: {
                            container: {
                                display: "flex",
                                flexDirection: "column"
                            },
                            liveEvent: {
                                container: {
                                    borderBottom: "1px solid #eaebec",
                                    textDecoration: "none",
                                    color: "inherit"
                                },
                                header: {
                                    display: "flex",
                                    alignItems: "center",
                                    flexGrow: 1,
                                    padding: "0 8px"
                                },
                                liveDotIcon: {
                                    width: 10,
                                    height: 10,
                                    style: {
                                        paddingRight: "8px"
                                    }
                                },
                                iconsContainer: {
                                    display: "flex"
                                },
                                eventName: {
                                    typography: "ui11",
                                    style: {
                                        display: "flex",
                                        flexGrow: 1,
                                        padding: "7px 0"
                                    }
                                },
                                icons: {
                                    container: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    },
                                    menuIcon: {
                                        width: 24,
                                        height: 24,
                                        color: F.colors.gray800
                                    },
                                    saveIcon: {
                                        width: 24,
                                        height: 24,
                                        color: F.colors.gray800
                                    }
                                }
                            }
                        },
                        expandInfo: {
                            container: {
                                display: "flex",
                                gap: "4px",
                                padding: "8px 16px",
                                height: "fit-content",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                color: F.colors.gray800,
                                flexShrink: 0
                            },
                            expandIcon: {
                                width: 14,
                                height: 14,
                                style: {
                                    color: F.colors.gray800
                                }
                            },
                            expandGroupText: {
                                typography: "ui11",
                                style: {}
                            }
                        },
                        details: {
                            container: {
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                padding: "6px 0px",
                                color: F.colors.gray800,
                                borderLeft: "none",
                                gap: "4px"
                            },
                            disciplineContainer: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                            },
                            liveDotIcon: {
                                width: 10,
                                height: 10
                            },
                            discipline: {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    minHeight: 24
                                },
                                typography: "ui5"
                            },
                            eventUnit: {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    minHeight: 24
                                },
                                typography: "body3"
                            }
                        },
                        summary: {
                            container: {
                                display: "flex",
                                flexDirection: "column",
                                minWidth: "47px",
                                gap: "4px",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRight: "1px solid ".concat(F.colors.gray200),
                                paddingLeft: "4px"
                            },
                            icons: {
                                display: "flex",
                                minHeight: 24,
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "2px"
                            },
                            medalIcon: {
                                style: {
                                    width: 24,
                                    height: 24
                                }
                            },
                            statusIcon: {
                                color: "".concat(F.colors.black),
                                style: {
                                    width: 24,
                                    height: 24
                                }
                            },
                            startTime: {
                                typography: "ui10",
                                style: {
                                    color: "".concat(F.colors.black),
                                    fontFeatureSettings: "'clig' off, 'liga' off"
                                }
                            }
                        },
                        eventsContainer: {
                            display: "flex",
                            flexDirection: "column",
                            padding: "4px 0"
                        },
                        event: {
                            constainer: {
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                backgroundColor: F.colors.white,
                                marginBottom: "8px",
                                width: "calc(100% - 24px)",
                                textDecoration: "none"
                            },
                            status: {
                                finished: {
                                    border: "1px solid ".concat(F.colors.black)
                                },
                                scheduled: {
                                    border: "1px solid ".concat(F.colors.gray400)
                                }
                            },
                            competitorsContainer: {
                                borderTop: "1px solid ".concat(F.colors.gray400)
                            },
                            statusIndicator: {
                                container: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: "22px"
                                },
                                dot: {
                                    minWidth: "8px",
                                    minHeight: "8px",
                                    borderRadius: "50%",
                                    margin: "12px"
                                },
                                connectorTop: {
                                    display: "flex",
                                    width: "1px"
                                },
                                connectorBottom: {
                                    display: "flex",
                                    flexGrow: 1,
                                    width: "1px"
                                },
                                topOffset: "4px",
                                connectorColor: F.colors.gray400,
                                status: {
                                    scheduled: {
                                        border: "1px solid ".concat(F.colors.gray700)
                                    },
                                    live: {
                                        backgroundColor: F.colors.secondary500
                                    },
                                    finished: {
                                        backgroundColor: F.colors.black
                                    }
                                }
                            },
                            liveIndicator: {
                                boxShadow: "4px 0 0 inset ".concat(F.colors.secondary500)
                            },
                            header: {
                                container: {
                                    display: "flex",
                                    flexGrow: 1,
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    padding: "6px 16px"
                                },
                                topRow: {
                                    container: {
                                        display: "flex",
                                        alignItems: "center",
                                        flexGrow: 1,
                                        gap: "8px"
                                    },
                                    time: {
                                        typography: "ui11",
                                        style: {
                                            display: "flex",
                                            flexGrow: 1,
                                            color: F.colors.gray800
                                        }
                                    },
                                    medalIcon: {
                                        width: 24,
                                        height: 24,
                                        color: F.colors.gray800
                                    },
                                    statusIcon: {
                                        width: 24,
                                        height: 24,
                                        color: F.colors.gray800
                                    },
                                    icons: {
                                        container: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px"
                                        },
                                        menuIcon: {
                                            width: 24,
                                            height: 24,
                                            color: F.colors.gray800
                                        },
                                        saveIcon: {
                                            width: 24,
                                            height: 24,
                                            color: F.colors.gray800
                                        }
                                    }
                                },
                                bottomRow: {
                                    eventName: {
                                        typography: "ui9",
                                        style: {
                                            color: F.colors.gray800
                                        }
                                    }
                                }
                            }
                        }
                    },
                    rowPlaceholder: {
                        minHeight: "52px",
                        backgroundColor: F.colors.white,
                        borderRadius: "4px",
                        boxShadow: F.elevation[100],
                        width: "100%"
                    },
                    event: {
                        container: {
                            display: "flex",
                            minHeight: "52px",
                            width: "100%",
                            backgroundColor: F.colors.white,
                            borderRadius: "4px",
                            boxShadow: F.elevation[100],
                            textDecoration: "none",
                            overflow: "hidden"
                        },
                        status: {
                            scheduled: {
                                border: "1px solid ".concat(F.colors.gray400)
                            },
                            live: {
                                border: "1px solid ".concat(F.colors.gray400)
                            },
                            finished: {
                                border: "1px solid ".concat(F.colors.black)
                            }
                        },
                        mainRow: {
                            container: {
                                display: "flex",
                                borderBottom: "1px solid ".concat(F.colors.gray300),
                                gap: "8px"
                            },
                            status: {
                                scheduled: {
                                    border: "1px solid ".concat(F.colors.gray400)
                                },
                                live: {
                                    border: "1px solid ".concat(F.colors.gray400)
                                },
                                finished: {
                                    border: "1px solid ".concat(F.colors.black)
                                }
                            },
                            details: {
                                container: {
                                    display: "flex",
                                    flexDirection: "column",
                                    flexGrow: 1,
                                    padding: "16px 0px 16px 0px",
                                    color: F.colors.gray800,
                                    borderLeft: "none",
                                    gap: "8px",
                                    minHeight: "54px",
                                    width: "100%",
                                    overflow: "hidden"
                                },
                                disciplineContainer: {
                                    display: "flex",
                                    gap: "4px",
                                    alignItems: "center"
                                },
                                liveDotIcon: {
                                    width: 10,
                                    height: 10
                                },
                                discipline: {
                                    typography: "ui5"
                                },
                                eventUnit: {
                                    typography: "body3"
                                }
                            },
                            icons: {
                                container: {
                                    display: "flex",
                                    gap: "8px",
                                    padding: "8px 8px 8px 0px"
                                },
                                saveIcon: {
                                    width: 24,
                                    height: 24,
                                    color: F.colors.gray800
                                },
                                menuIcon: {
                                    width: 24,
                                    height: 24,
                                    color: F.colors.gray800
                                }
                            },
                            summary: {
                                container: {
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "2px",
                                    borderRight: "1px solid ".concat(F.colors.gray200),
                                    padding: "0px 8px 0px 12px"
                                },
                                icons: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 24,
                                    height: 24,
                                    gap: "2px"
                                },
                                medalIcon: {
                                    style: {
                                        width: 24,
                                        height: 24
                                    }
                                },
                                statusIcon: {
                                    style: {
                                        width: 24,
                                        height: 24
                                    }
                                },
                                startTime: {
                                    typography: "ui10",
                                    style: {
                                        color: "".concat(F.colors.black),
                                        fontFeatureSettings: "'clig' off, 'liga' off"
                                    }
                                },
                                startText: {
                                    style: {
                                        color: "".concat(F.colors.black),
                                        width: "41.44px"
                                    }
                                }
                            }
                        },
                        competitors: {
                            container: {
                                display: "flex",
                                flexDirection: "column",
                                color: F.colors.gray800,
                                paddingRight: "8px"
                            },
                            row: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            },
                            iconNocNameContainer: {
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "7px 8px",
                                width: "100%",
                                minWidth: 0
                            },
                            winner: {
                                text: {
                                    style: {
                                        color: "#3E9BA5"
                                    }
                                }
                            },
                            resultsContainer: {
                                container: {
                                    alignItems: "center",
                                    textAlign: "right",
                                    gap: 2
                                },
                                medalIconWidth: "24px",
                                additionalResultWidth: "30px",
                                irmWidth: "32px",
                                resultCodeWidth: "50px",
                                roundWidth: "22px",
                                scoreWidth: "35px",
                                detailedScoreWidth: "30px",
                                detailedScoreIndexWidth: "13px",
                                additionalScoreWidth: "30px",
                                penaltyWidth: "32px"
                            },
                            flagIcon: {
                                style: {
                                    border: "1px solid ".concat(F.colors.gray300),
                                    borderRadius: "2px"
                                },
                                height: 16.667
                            },
                            noc: {
                                typography: "ui2",
                                style: {
                                    width: "36px"
                                }
                            },
                            description: {
                                typography: "body3",
                                style: {
                                    fontFeatureSettings: "'clig' off, 'liga' off",
                                    wordWrap: "break-word",
                                    overflow: "hidden"
                                }
                            },
                            additionalResult: {
                                style: {
                                    position: "relative",
                                    top: 16
                                }
                            },
                            byeResultCode: {
                                style: {
                                    width: "100%",
                                    paddingLeft: 8,
                                    paddingBottom: 7
                                }
                            },
                            additionalScore: {
                                style: {
                                    textAlign: "start"
                                }
                            },
                            detailedScore: {
                                style: {
                                    justifyContent: "flex-end"
                                }
                            }
                        },
                        indicator: {
                            backgroundColor: F.colors.secondary500,
                            width: "4px"
                        }
                    }
                },
                aM = {
                    display: "tablet",
                    listOffset: -105.2,
                    listRows: {
                        rowGroupGap: 11,
                        rowUnitGap: 11,
                        rowHeightPlaceholder: 87,
                        rowHeightOlympicDayDivider: 96,
                        rowHeightCompetitionDayDivider: 88
                    },
                    text: {
                        competitionDay: {
                            typography: "title2",
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                paddingLeft: "16px",
                                color: "".concat(F.colors.white),
                                backgroundImage: "linear-gradient(to right, ".concat(F.colors.primary900, " , ").concat(F.colors.primary500, ")"),
                                height: "72px"
                            }
                        },
                        endOfOlympicDay: {
                            typography: "body1",
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "center",
                                padding: "8px 0 48px 0",
                                color: "".concat(F.colors.black),
                                fontFeatureSettings: "'clig' off, 'liga' off"
                            }
                        }
                    },
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%"
                    },
                    olympicDayDivider: {
                        height: "1px",
                        width: "100%",
                        backgroundColor: F.colors.gray700,
                        marginTop: "8px"
                    },
                    group: {
                        liveEvents: {
                            container: {
                                display: "flex",
                                flexDirection: "column"
                            },
                            liveEvent: {
                                container: {
                                    borderBottom: "1px solid #eaebec",
                                    textDecoration: "none",
                                    color: "inherit"
                                },
                                header: {
                                    display: "flex",
                                    alignItems: "center",
                                    flexGrow: 1,
                                    padding: "8px 16px 8px 92px"
                                },
                                liveDotIcon: {
                                    width: 10,
                                    height: 10,
                                    style: {
                                        paddingRight: "8px"
                                    }
                                },
                                iconsContainer: {
                                    display: "flex"
                                },
                                eventName: {
                                    typography: "body2",
                                    style: {
                                        display: "flex",
                                        flexGrow: 1
                                    }
                                },
                                icons: {
                                    container: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    },
                                    menuIcon: {
                                        width: 24,
                                        height: 24,
                                        color: F.colors.gray800
                                    },
                                    saveIcon: {
                                        width: 24,
                                        height: 24,
                                        color: F.colors.gray800
                                    }
                                },
                                competitorsContainer: {
                                    paddingLeft: "76px"
                                }
                            }
                        },
                        expandInfo: {
                            container: {
                                display: "flex",
                                gap: "4px",
                                padding: "16px",
                                height: "fit-content",
                                alignItems: "center",
                                color: F.colors.gray800,
                                flexShrink: 0
                            },
                            expandIcon: {
                                width: 14,
                                height: 14,
                                style: {
                                    color: F.colors.gray800
                                }
                            },
                            expandGroupText: {
                                typography: "body2",
                                style: {}
                            }
                        },
                        details: {
                            container: {
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                padding: "16px 0px",
                                color: F.colors.gray800,
                                borderLeft: "none",
                                gap: "8px"
                            },
                            disciplineContainer: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                            },
                            liveDotIcon: {
                                width: 10,
                                height: 10
                            },
                            discipline: {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    minHeight: 24
                                },
                                typography: "ui3"
                            },
                            eventUnit: {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    minHeight: 24
                                },
                                typography: "body2"
                            }
                        },
                        summary: {
                            container: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "8px",
                                borderRight: "1px solid ".concat(F.colors.gray200),
                                padding: "0px 16px 0px 20px"
                            },
                            icons: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 24,
                                height: 24,
                                gap: "2px"
                            },
                            medalIcon: {
                                style: {
                                    width: 24,
                                    height: 24
                                }
                            },
                            statusIcon: {
                                color: "".concat(F.colors.black),
                                style: {
                                    width: 24,
                                    height: 24
                                }
                            },
                            startTime: {
                                typography: "body2",
                                style: {
                                    color: "".concat(F.colors.black),
                                    fontFeatureSettings: "'clig' off, 'liga' off"
                                }
                            }
                        },
                        eventsContainer: {
                            display: "flex",
                            flexDirection: "column",
                            padding: "8px 0"
                        },
                        event: {
                            constainer: {
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                backgroundColor: F.colors.white,
                                marginBottom: "16px",
                                textDecoration: "none",
                                width: "calc(100% - 106px)"
                            },
                            competitorsContainer: {
                                borderTop: "1px solid ".concat(F.colors.gray400)
                            },
                            status: {
                                finished: {
                                    border: "1px solid ".concat(F.colors.black)
                                },
                                scheduled: {
                                    border: "1px solid ".concat(F.colors.gray400)
                                }
                            },
                            statusIndicator: {
                                container: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    minWidth: "106px"
                                },
                                dot: {
                                    minWidth: "8px",
                                    minHeight: "8px",
                                    borderRadius: "50%",
                                    margin: "12px"
                                },
                                connectorTop: {
                                    display: "flex",
                                    width: "1px"
                                },
                                connectorBottom: {
                                    display: "flex",
                                    flexGrow: 1,
                                    width: "1px"
                                },
                                topOffset: "9px",
                                connectorColor: F.colors.gray400,
                                status: {
                                    scheduled: {
                                        border: "1px solid ".concat(F.colors.gray700)
                                    },
                                    live: {
                                        backgroundColor: F.colors.secondary500
                                    },
                                    finished: {
                                        backgroundColor: F.colors.black
                                    }
                                }
                            },
                            liveIndicator: {
                                boxShadow: "8px 0 0 inset ".concat(F.colors.secondary500)
                            },
                            header: {
                                container: {
                                    display: "flex",
                                    flexGrow: 1,
                                    alignItems: "center",
                                    padding: "11px 16px"
                                },
                                topRow: {
                                    container: {
                                        display: "flex",
                                        alignItems: "center",
                                        flexGrow: 1,
                                        gap: "8px"
                                    },
                                    time: {
                                        style: {
                                            color: F.colors.gray800
                                        },
                                        typography: "ui3"
                                    },
                                    eventName: {
                                        style: {
                                            color: F.colors.gray800,
                                            flexGrow: 1
                                        },
                                        typography: "body2"
                                    },
                                    medalIcon: {
                                        width: 24,
                                        height: 24,
                                        color: F.colors.gray800
                                    },
                                    statusIcon: {
                                        width: 24,
                                        height: 24,
                                        color: F.colors.gray800
                                    },
                                    icons: {
                                        container: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px"
                                        },
                                        menuIcon: {
                                            width: 24,
                                            height: 24,
                                            color: F.colors.gray800
                                        },
                                        saveIcon: {
                                            width: 24,
                                            height: 24,
                                            color: F.colors.gray800
                                        }
                                    }
                                },
                                bottomRow: {
                                    eventName: {
                                        style: {
                                            color: F.colors.gray800
                                        }
                                    }
                                }
                            }
                        }
                    },
                    rowPlaceholder: {
                        minHeight: "52px",
                        backgroundColor: F.colors.white,
                        borderRadius: "4px",
                        boxShadow: F.elevation[100],
                        width: "100%"
                    },
                    event: {
                        container: {
                            display: "flex",
                            width: "100%",
                            backgroundColor: F.colors.white,
                            borderRadius: "4px",
                            boxShadow: F.elevation[100],
                            textDecoration: "none",
                            overflow: "hidden"
                        },
                        status: {
                            scheduled: {
                                border: "1px solid ".concat(F.colors.gray400)
                            },
                            live: {
                                border: "1px solid ".concat(F.colors.gray400)
                            },
                            finished: {
                                border: "1px solid ".concat(F.colors.black)
                            }
                        },
                        mainRow: {
                            container: {
                                display: "flex",
                                borderBottom: "1px solid ".concat(F.colors.gray300),
                                gap: "20px"
                            },
                            status: {
                                scheduled: {
                                    border: "1px solid ".concat(F.colors.gray400)
                                },
                                live: {
                                    border: "1px solid ".concat(F.colors.gray400)
                                },
                                finished: {
                                    border: "1px solid ".concat(F.colors.black)
                                }
                            },
                            details: {
                                container: {
                                    display: "flex",
                                    flexDirection: "column",
                                    flexGrow: 1,
                                    padding: "16px 0px",
                                    color: F.colors.gray800,
                                    borderLeft: "none",
                                    gap: "8px",
                                    minHeight: "54px",
                                    width: "100%",
                                    overflow: "hidden"
                                },
                                disciplineContainer: {
                                    display: "flex",
                                    gap: "4px",
                                    alignItems: "center"
                                },
                                liveDotIcon: {
                                    width: 10,
                                    height: 10
                                },
                                discipline: {
                                    typography: "ui3"
                                },
                                eventUnit: {
                                    typography: "body2"
                                }
                            },
                            icons: {
                                container: {
                                    display: "flex",
                                    gap: "8px",
                                    padding: "16px 16px 16px 0px"
                                },
                                saveIcon: {
                                    width: 24,
                                    height: 24,
                                    color: F.colors.gray800
                                },
                                menuIcon: {
                                    width: 24,
                                    height: 24,
                                    color: F.colors.gray800
                                }
                            },
                            summary: {
                                container: {
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "2px",
                                    borderRight: "1px solid ".concat(F.colors.gray200),
                                    padding: "0px 16px 0px 20px"
                                },
                                icons: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 24,
                                    height: 24,
                                    gap: "2px"
                                },
                                medalIcon: {
                                    style: {
                                        width: 24,
                                        height: 24
                                    }
                                },
                                statusIcon: {
                                    style: {
                                        width: 24,
                                        height: 24
                                    }
                                },
                                startTime: {
                                    typography: "body2",
                                    style: {
                                        color: "".concat(F.colors.black),
                                        fontFeatureSettings: "'clig' off, 'liga' off"
                                    }
                                },
                                startText: {
                                    style: {
                                        color: "".concat(F.colors.black),
                                        width: "44.22px"
                                    }
                                }
                            }
                        },
                        competitorsContainer: {
                            paddingLeft: "82px"
                        },
                        competitors: {
                            container: {
                                display: "flex",
                                flexDirection: "column",
                                color: F.colors.gray800,
                                paddingRight: "16px"
                            },
                            row: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            },
                            iconNocNameContainer: {
                                display: "flex",
                                alignItems: "center",
                                gap: "16px",
                                padding: "12px 16px",
                                width: "100%",
                                minWidth: 0
                            },
                            winner: {
                                text: {
                                    style: {
                                        color: "#3E9BA5"
                                    }
                                }
                            },
                            resultsContainer: {
                                container: {
                                    alignItems: "center",
                                    textAlign: "right",
                                    gap: 8
                                },
                                medalIconWidth: "24px",
                                additionalResultWidth: "32px",
                                irmWidth: "32px",
                                resultCodeWidth: "50px",
                                roundWidth: "22px",
                                scoreWidth: "35px",
                                detailedScoreWidth: "32px",
                                detailedScoreIndexWidth: "13px",
                                additionalScoreWidth: "32px",
                                penaltyWidth: "32px"
                            },
                            flagIcon: {
                                style: {
                                    border: "1px solid ".concat(F.colors.gray300),
                                    borderRadius: "2px"
                                },
                                width: 30,
                                height: 22
                            },
                            noc: {
                                typography: "ui4",
                                style: {
                                    width: "36px"
                                }
                            },
                            description: {
                                typography: "body2",
                                style: {
                                    fontFeatureSettings: "'clig' off, 'liga' off",
                                    wordWrap: "break-word",
                                    overflow: "hidden"
                                }
                            },
                            additionalResult: {
                                style: {
                                    position: "relative",
                                    top: 23.5
                                }
                            },
                            byeResultCode: {
                                style: {
                                    width: "100%",
                                    paddingLeft: 16,
                                    paddingBottom: 12
                                }
                            },
                            additionalScore: {
                                style: {
                                    textAlign: "start"
                                }
                            },
                            detailedScore: {
                                style: {
                                    justifyContent: "flex-end"
                                }
                            }
                        },
                        indicator: {
                            backgroundColor: F.colors.secondary500,
                            width: "8px"
                        }
                    }
                },
                aF = {
                    display: "desktop",
                    listOffset: -105.2,
                    listRows: {
                        rowGroupGap: 11,
                        rowUnitGap: 11,
                        rowHeightPlaceholder: 87,
                        rowHeightOlympicDayDivider: 96,
                        rowHeightCompetitionDayDivider: 88
                    },
                    text: {
                        competitionDay: {
                            typography: "title2",
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                paddingLeft: "16px",
                                color: "".concat(F.colors.white),
                                backgroundImage: "linear-gradient(to right, ".concat(F.colors.primary900, " , ").concat(F.colors.primary500, ")"),
                                height: "72px"
                            }
                        },
                        endOfOlympicDay: {
                            typography: "body1",
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "center",
                                padding: "8px 0 48px 0",
                                color: "".concat(F.colors.black),
                                fontFeatureSettings: "'clig' off, 'liga' off"
                            }
                        }
                    },
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%"
                    },
                    olympicDayDivider: {
                        height: "1px",
                        width: "100%",
                        backgroundColor: F.colors.gray700,
                        marginTop: "8px"
                    },
                    group: {
                        liveEvents: {
                            container: {
                                display: "flex",
                                flexDirection: "column"
                            },
                            liveEvent: {
                                container: {
                                    borderBottom: "1px solid #eaebec",
                                    textDecoration: "none",
                                    color: "inherit"
                                },
                                header: {
                                    display: "flex",
                                    alignItems: "center",
                                    flexGrow: 1,
                                    padding: "8px 16px 8px 92px"
                                },
                                liveDotIcon: {
                                    width: 10,
                                    height: 10,
                                    style: {
                                        paddingRight: "8px"
                                    }
                                },
                                iconsContainer: {
                                    display: "flex"
                                },
                                eventName: {
                                    typography: "body2",
                                    style: {
                                        display: "flex",
                                        flexGrow: 1
                                    }
                                },
                                icons: {
                                    container: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    },
                                    menuIcon: {
                                        width: 24,
                                        height: 24,
                                        color: F.colors.gray800
                                    },
                                    saveIcon: {
                                        width: 24,
                                        height: 24,
                                        color: F.colors.gray800
                                    }
                                },
                                competitorsContainer: {
                                    paddingLeft: "76px"
                                }
                            }
                        },
                        expandInfo: {
                            container: {
                                display: "flex",
                                gap: "4px",
                                padding: "16px",
                                height: "fit-content",
                                alignItems: "center",
                                color: F.colors.gray800,
                                flexShrink: 0
                            },
                            expandIcon: {
                                width: 14,
                                height: 14,
                                style: {
                                    color: F.colors.gray800
                                }
                            },
                            expandGroupText: {
                                typography: "body2",
                                style: {}
                            }
                        },
                        details: {
                            container: {
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                padding: "16px 0px",
                                color: F.colors.gray800,
                                borderLeft: "none",
                                gap: "8px"
                            },
                            disciplineContainer: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                            },
                            liveDotIcon: {
                                width: 10,
                                height: 10
                            },
                            discipline: {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    minHeight: 24
                                },
                                typography: "ui3"
                            },
                            eventUnit: {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    minHeight: 24
                                },
                                typography: "body2"
                            }
                        },
                        summary: {
                            container: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "8px",
                                borderRight: "1px solid ".concat(F.colors.gray200),
                                padding: "0px 16px 0px 20px"
                            },
                            icons: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 24,
                                height: 24,
                                gap: "2px"
                            },
                            medalIcon: {
                                style: {
                                    width: 24,
                                    height: 24
                                }
                            },
                            statusIcon: {
                                color: "".concat(F.colors.black),
                                style: {
                                    width: 24,
                                    height: 24
                                }
                            },
                            startTime: {
                                typography: "body2",
                                style: {
                                    color: "".concat(F.colors.black),
                                    fontFeatureSettings: "'clig' off, 'liga' off"
                                }
                            }
                        },
                        eventsContainer: {
                            display: "flex",
                            flexDirection: "column",
                            padding: "8px 0"
                        },
                        event: {
                            constainer: {
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                backgroundColor: F.colors.white,
                                marginBottom: "16px",
                                textDecoration: "none",
                                width: "calc(100% - 106px)"
                            },
                            status: {
                                finished: {
                                    border: "1px solid ".concat(F.colors.black)
                                },
                                scheduled: {
                                    border: "1px solid ".concat(F.colors.gray400)
                                }
                            },
                            competitorsContainer: {
                                borderTop: "1px solid ".concat(F.colors.gray400)
                            },
                            statusIndicator: {
                                container: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    minWidth: "106px"
                                },
                                dot: {
                                    minWidth: "8px",
                                    minHeight: "8px",
                                    borderRadius: "50%",
                                    margin: "12px"
                                },
                                connectorTop: {
                                    display: "flex",
                                    width: "1px"
                                },
                                connectorBottom: {
                                    display: "flex",
                                    flexGrow: 1,
                                    width: "1px"
                                },
                                topOffset: "9px",
                                connectorColor: F.colors.gray400,
                                status: {
                                    scheduled: {
                                        border: "1px solid ".concat(F.colors.gray700)
                                    },
                                    live: {
                                        backgroundColor: F.colors.secondary500
                                    },
                                    finished: {
                                        backgroundColor: F.colors.black
                                    }
                                }
                            },
                            liveIndicator: {
                                borderLeft: "8px solid ".concat(F.colors.secondary500)
                            },
                            header: {
                                container: {
                                    display: "flex",
                                    flexGrow: 1,
                                    alignItems: "center",
                                    padding: "11px 16px"
                                },
                                topRow: {
                                    container: {
                                        display: "flex",
                                        alignItems: "center",
                                        flexGrow: 1,
                                        gap: "8px"
                                    },
                                    time: {
                                        style: {
                                            color: F.colors.gray800
                                        },
                                        typography: "ui3"
                                    },
                                    eventName: {
                                        style: {
                                            color: F.colors.gray800,
                                            flexGrow: 1
                                        },
                                        typography: "body2"
                                    },
                                    medalIcon: {
                                        width: 24,
                                        height: 24,
                                        color: F.colors.gray800
                                    },
                                    statusIcon: {
                                        width: 24,
                                        height: 24,
                                        color: F.colors.gray800
                                    },
                                    icons: {
                                        container: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px"
                                        },
                                        menuIcon: {
                                            width: 24,
                                            height: 24,
                                            color: F.colors.gray800
                                        },
                                        saveIcon: {
                                            width: 24,
                                            height: 24,
                                            color: F.colors.gray800
                                        }
                                    }
                                },
                                bottomRow: {
                                    eventName: {
                                        style: {
                                            color: F.colors.gray800
                                        }
                                    }
                                }
                            }
                        }
                    },
                    rowPlaceholder: {
                        minHeight: "52px",
                        backgroundColor: F.colors.white,
                        borderRadius: "4px",
                        boxShadow: F.elevation[100],
                        width: "100%"
                    },
                    event: {
                        container: {
                            display: "flex",
                            width: "100%",
                            backgroundColor: F.colors.white,
                            borderRadius: "4px",
                            boxShadow: F.elevation[100],
                            textDecoration: "none",
                            overflow: "hidden"
                        },
                        status: {
                            scheduled: {
                                border: "1px solid ".concat(F.colors.gray400)
                            },
                            live: {
                                border: "1px solid ".concat(F.colors.gray400)
                            },
                            finished: {
                                border: "1px solid ".concat(F.colors.black)
                            }
                        },
                        mainRow: {
                            container: {
                                display: "flex",
                                borderBottom: "1px solid ".concat(F.colors.gray300),
                                gap: "20px"
                            },
                            status: {
                                scheduled: {
                                    border: "1px solid ".concat(F.colors.gray400)
                                },
                                live: {
                                    border: "1px solid ".concat(F.colors.gray400)
                                },
                                finished: {
                                    border: "1px solid ".concat(F.colors.black)
                                }
                            },
                            details: {
                                container: {
                                    display: "flex",
                                    flexDirection: "column",
                                    flexGrow: 1,
                                    padding: "16px 0px",
                                    color: F.colors.gray800,
                                    borderLeft: "none",
                                    gap: "8px",
                                    minHeight: "54px",
                                    width: "100%",
                                    overflow: "hidden"
                                },
                                disciplineContainer: {
                                    display: "flex",
                                    gap: "4px",
                                    alignItems: "center"
                                },
                                liveDotIcon: {
                                    width: 10,
                                    height: 10
                                },
                                discipline: {
                                    typography: "ui3"
                                },
                                eventUnit: {
                                    typography: "body2"
                                }
                            },
                            icons: {
                                container: {
                                    display: "flex",
                                    gap: "8px",
                                    padding: "16px 16px 16px 0px"
                                },
                                saveIcon: {
                                    color: F.colors.gray800,
                                    width: 24,
                                    height: 24
                                },
                                menuIcon: {
                                    color: F.colors.gray800,
                                    width: 24,
                                    height: 24
                                }
                            },
                            summary: {
                                container: {
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "2px",
                                    borderRight: "1px solid ".concat(F.colors.gray200),
                                    padding: "0px 16px 0px 20px"
                                },
                                icons: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 24,
                                    height: 24,
                                    gap: "2px"
                                },
                                medalIcon: {
                                    style: {
                                        width: 24,
                                        height: 24
                                    }
                                },
                                statusIcon: {
                                    style: {
                                        width: 24,
                                        height: 24
                                    }
                                },
                                startTime: {
                                    typography: "body2",
                                    style: {
                                        color: "".concat(F.colors.black),
                                        fontFeatureSettings: "'clig' off, 'liga' off"
                                    }
                                },
                                startText: {
                                    style: {
                                        color: "".concat(F.colors.black),
                                        width: "44.22px"
                                    }
                                }
                            }
                        },
                        competitorsContainer: {
                            paddingLeft: "82px"
                        },
                        competitors: {
                            container: {
                                display: "flex",
                                flexDirection: "column",
                                color: F.colors.gray800,
                                paddingRight: "16px"
                            },
                            row: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            },
                            iconNocNameContainer: {
                                display: "flex",
                                alignItems: "center",
                                gap: "16px",
                                padding: "12px 16px",
                                width: "100%",
                                minWidth: 0
                            },
                            winner: {
                                text: {
                                    style: {
                                        color: "#3E9BA5"
                                    }
                                }
                            },
                            resultsContainer: {
                                container: {
                                    alignItems: "center",
                                    textAlign: "right",
                                    gap: 8
                                },
                                medalIconWidth: "24px",
                                additionalResultWidth: "32px",
                                irmWidth: "32px",
                                resultCodeWidth: "50px",
                                roundWidth: "22px",
                                scoreWidth: "35px",
                                detailedScoreWidth: "32px",
                                detailedScoreIndexWidth: "13px",
                                additionalScoreWidth: "32px",
                                penaltyWidth: "32px"
                            },
                            flagIcon: {
                                style: {
                                    border: "1px solid ".concat(F.colors.gray300),
                                    borderRadius: "2px"
                                },
                                width: 30,
                                height: 22
                            },
                            noc: {
                                typography: "ui4",
                                style: {
                                    width: "36px"
                                }
                            },
                            description: {
                                typography: "body2",
                                style: {
                                    fontFeatureSettings: "'clig' off, 'liga' off",
                                    wordWrap: "break-word",
                                    overflow: "hidden"
                                }
                            },
                            additionalResult: {
                                style: {
                                    position: "relative",
                                    top: 24
                                }
                            },
                            byeResultCode: {
                                style: {
                                    width: "100%",
                                    paddingLeft: 16,
                                    paddingBottom: 12
                                }
                            },
                            additionalScore: {
                                style: {
                                    textAlign: "start"
                                }
                            },
                            detailedScore: {
                                style: {
                                    justifyContent: "flex-end"
                                }
                            }
                        },
                        indicator: {
                            backgroundColor: F.colors.secondary500,
                            width: "8px"
                        }
                    }
                },
                aO = {
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        marginBottom: "64px"
                    },
                    header: {
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        marginBottom: "16px",
                        backgroundColor: "".concat(F.colors.white),
                        boxShadow: "".concat(F.elevation[300]),
                        a: {
                            color: "inherit",
                            textDecoration: "none"
                        }
                    },
                    body: {
                        width: "100%"
                    },
                    row: {
                        container: {
                            justifyContent: "center"
                        },
                        cell: {
                            global: {
                                global: {
                                    justifyContent: "center",
                                    alignItems: "center",
                                    minWidth: "48px",
                                    height: "40px",
                                    margin: "2px"
                                },
                                focus: {
                                    backgroundColor: "".concat(F.colors.tertiary700)
                                },
                                colFocus: {
                                    backgroundColor: "".concat(F.colors.tertiary300)
                                },
                                rowFocus: {
                                    backgroundColor: "".concat(F.colors.gray400)
                                }
                            },
                            discipline: {
                                global: {
                                    justifyContent: "flex-start",
                                    flexGrow: 1,
                                    maxWidth: "356px",
                                    color: "inherit",
                                    textDecoration: "none"
                                },
                                even: {
                                    boxShadow: "-2px 0 0 0 ".concat(F.colors.primary900)
                                }
                            },
                            event: {
                                even: {
                                    backgroundColor: "".concat(F.colors.white)
                                },
                                odd: {
                                    backgroundColor: "".concat(F.colors.primary100)
                                }
                            }
                        }
                    },
                    text: {
                        discipline: {
                            typography: "body2"
                        },
                        date: {
                            typography: "body2"
                        },
                        month: {
                            typography: "ui3",
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                height: "40px"
                            }
                        }
                    },
                    icons: {
                        discipline: {
                            padding: "0 8px 0 18px"
                        }
                    },
                    legend: {
                        container: {
                            display: "flex",
                            justifyContent: "center",
                            gap: "32px",
                            marginTop: "32px"
                        },
                        legendItem: {
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            textTransform: "capitalize"
                        },
                        legendText: "ui7"
                    },
                    popup: {
                        container: {
                            position: "absolute",
                            top: "40px",
                            left: "52px",
                            right: "52px",
                            width: "354px",
                            padding: "10px",
                            backgroundColor: "".concat(F.colors.white),
                            zIndex: 1,
                            borderRadius: "4px",
                            boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.06)",
                            color: "".concat(F.colors.gray800)
                        },
                        header: {
                            borderBottom: "1px solid ".concat(F.colors.gray300),
                            paddingBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        },
                        headerText: {
                            typography: "ui2",
                            style: {
                                display: "flex",
                                alignItems: "center"
                            }
                        },
                        headerIcon: {
                            width: "24px",
                            height: "24px"
                        },
                        body: {
                            paddingTop: "10px"
                        },
                        bodyTitle: {
                            typography: "ui6",
                            style: {
                                textTransform: "capitalize"
                            }
                        },
                        bodyText: {
                            typography: "ui6"
                        },
                        event: {
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            marginTop: "5px"
                        }
                    }
                },
                aB = {
                    container: {
                        padding: "28px 16px"
                    },
                    calendar: {
                        calendar: {
                            container: {
                                padding: "16px",
                                backgroundColor: "".concat(F.colors.white),
                                borderRadius: "6px",
                                boxShadow: "".concat(F.elevation[900]),
                                a: {
                                    color: "inherit",
                                    textDecoration: "none"
                                }
                            },
                            date: {
                                disabled: {
                                    backgroundColor: "grey",
                                    opacity: .2
                                }
                            },
                            global: {
                                width: "36px",
                                margin: "7px 4px"
                            },
                            month: {
                                lineHeight: "10px"
                            },
                            body: {},
                            header: {
                                color: "".concat(F.colors.gray600),
                                borderBottom: "1px solid ".concat(F.colors.gray300)
                            },
                            text: {
                                month: "ui12"
                            }
                        }
                    },
                    disciplines: {
                        list: {
                            item: {
                                global: {}
                            }
                        },
                        discipline: {
                            global: {
                                display: "flex",
                                alignItems: "center",
                                flexGrow: 1,
                                padding: "4px 8px",
                                height: "40px",
                                color: "inherit",
                                textDecoration: "none"
                            },
                            even: {
                                backgroundColor: "".concat(F.colors.white),
                                boxShadow: "-2px 0 0 0 ".concat(F.colors.primary900)
                            },
                            icon: {
                                paddingRight: "8px"
                            }
                        }
                    },
                    text: {
                        disciplineTitle: {
                            style: {
                                padding: "20px 0 16px 0"
                            },
                            typography: "title4"
                        },
                        disciplineName: {
                            typography: "body3"
                        }
                    }
                },
                aL = {
                    header: {
                        global: {
                            border: "1px solid ".concat(F.colors.gray500),
                            borderRadius: "4px",
                            height: "38px",
                            padding: "0px 2px 0px 10px",
                            justifyContent: "space-between",
                            outlineWidth: 0
                        },
                        itemFocus: {
                            fontWeight: "600"
                        }
                    },
                    body: {
                        global: {
                            borderRadius: "4px",
                            boxShadow: F.elevation[500],
                            zIndex: "10",
                            backgroundColor: F.colors.white,
                            maxHeight: "200px",
                            overflowY: "auto",
                            marginTop: "4px"
                        },
                        listSelect: {
                            items: {
                                global: {
                                    fontSize: F.typography.ui8.fontSize,
                                    padding: "4px 4px 4px 12px",
                                    margin: "4px",
                                    disabled: {
                                        opacity: .3
                                    },
                                    hover: {
                                        backgroundColor: "".concat(F.colors.tertiary300, "80"),
                                        borderRadius: "2px"
                                    },
                                    selected: {
                                        backgroundColor: F.colors.tertiary300,
                                        borderRadius: "2px"
                                    },
                                    hoverSelected: {
                                        backgroundColor: F.colors.tertiary300,
                                        borderRadius: "2px"
                                    }
                                }
                            }
                        }
                    },
                    disabled: {
                        opacity: .5,
                        backgroundColor: F.colors.gray300,
                        cursor: "default"
                    },
                    focus: {
                        boxShadow: "inset 0px 0px 0px 3px ".concat(F.colors.tertiary300)
                    }
                },
                az = {
                    select: { ...aL,
                        global: {
                            flex: 1,
                            ...F.typography.ui8
                        }
                    }
                },
                aj = nm()({}, {
                    select: aL
                }, {
                    select: {
                        global: {
                            flex: 1,
                            minWidth: "180px",
                            ...F.typography.ui2
                        },
                        body: {
                            listSelect: {
                                items: {
                                    global: F.typography.ui2
                                }
                            }
                        }
                    }
                }),
                aA = nm()({}, aj, {
                    select: {
                        global: {
                            minWidth: 32,
                            padding: 0
                        },
                        header: {
                            global: {
                                width: 40,
                                height: 40,
                                padding: 0,
                                justifyContent: "center"
                            },
                            item: {
                                width: 0,
                                height: 0,
                                margin: 0,
                                padding: 0,
                                overflow: "hidden"
                            }
                        }
                    }
                });
            F.colors.gray500, F.colors.gray300, F.colors.white, F.typography.title5, F.colors.gray500, F.colors.gray300, F.colors.white, F.colors.tertiary300, F.colors.tertiary300, F.colors.tertiary300, F.typography.body2, F.colors.secondary500, F.colors.tertiary300, F.colors.tertiary300, F.colors.tertiary300;
            let aW = {
                    select: {
                        global: {},
                        header: {
                            global: {
                                border: "1px solid ".concat(F.colors.black),
                                borderRadius: "4px",
                                padding: "3px",
                                minHeight: "32px",
                                minWidth: "32px",
                                cursor: "pointer"
                            },
                            item: {
                                style: {
                                    padding: "4px 6px"
                                }
                            },
                            disabled: {
                                backgroundColor: F.colors.gray300,
                                opacity: .5,
                                cursor: "default"
                            },
                            iconContainer: {
                                width: "32px"
                            }
                        },
                        body: {
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: F.colors.white,
                            margin: "4px 0",
                            padding: "8px",
                            borderRadius: "4px",
                            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
                            zIndex: 10,
                            height: "300px",
                            overflowY: "auto",
                            width: "240px"
                        },
                        bodyTitle: {
                            typography: "ui3",
                            style: {
                                fontWeight: "700"
                            }
                        },
                        bodyTitleContainer: {
                            padding: "4px 8px 4px 12px"
                        }
                    }
                },
                aH = {
                    wrapper: {
                        paddingBottom: "8px"
                    },
                    wrapperTitle: {
                        typography: "body2",
                        style: {
                            padding: "4px 8px 4px 12px",
                            fontWeight: "600"
                        }
                    },
                    list: {
                        item: {
                            global: {
                                padding: "4px 8px 4px 24px",
                                justifyContent: "space-between"
                            },
                            disabled: {
                                opacity: .3
                            },
                            hover: {
                                backgroundColor: "".concat(F.colors.tertiary300, "80"),
                                borderRadius: "2px"
                            },
                            selected: {
                                backgroundColor: F.colors.tertiary300,
                                borderRadius: "2px"
                            },
                            checkBox: {
                                background: F.colors.tertiary300,
                                marginRight: "8px",
                                width: "14px",
                                height: "14px"
                            },
                            selectedIcon: {
                                height: 16,
                                width: 16
                            }
                        },
                        noDataMessage: {
                            global: {
                                opacity: .5,
                                padding: "12px"
                            },
                            variant: "ui8"
                        },
                        variant: "body2"
                    }
                };
            ({
                global: { ...F.typography.ui8
                },
                ...aL,
                header: {
                    global: { ...null === (p = aL.header) || void 0 === p ? void 0 : p.global,
                        height: "40px",
                        width: "48px",
                        padding: "0px",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: F.colors.primary100,
                        border: "none",
                        borderRadius: "2px",
                        open: {
                            boxShadow: "inset 0px 0px 0px 2px ".concat(F.colors.tertiary300)
                        }
                    }
                }
            });
            let aG = {
                    select: {
                        global: { ...F.typography.ui8,
                            userSelect: "none"
                        },
                        header: {
                            global: {
                                border: "1px solid ".concat(F.colors.gray500),
                                borderRadius: "4px",
                                height: "100%",
                                padding: "0px 2px 0px 10px",
                                justifyContent: "space-between",
                                open: {
                                    borderColor: F.colors.tertiary300
                                },
                                highlighted: {
                                    backgroundColor: F.colors.tertiary100,
                                    borderColor: F.colors.tertiary300
                                }
                            },
                            item: {
                                width: "60px"
                            }
                        },
                        body: {
                            global: {
                                width: "fit-content",
                                borderRadius: "4px",
                                boxShadow: F.elevation[500],
                                zIndex: "10",
                                backgroundColor: F.colors.white,
                                overflowY: "auto",
                                marginTop: "4px",
                                padding: "16px",
                                userSelect: "none"
                            }
                        }
                    },
                    calendar: {
                        container: {
                            padding: "0px",
                            borderBottom: "1px solid ".concat(F.colors.gray300)
                        },
                        header: {
                            borderBottom: "1px solid ".concat(F.colors.gray300)
                        },
                        date: {
                            selected: {
                                backgroundColor: "#53CEDC",
                                borderRadius: "6px",
                                color: "white"
                            },
                            disabled: {
                                color: F.colors.gray500
                            }
                        },
                        month: {
                            fontSize: "0.5rem",
                            textTransform: "uppercase"
                        },
                        global: {
                            width: "40px"
                        },
                        text: {
                            date: "ui8",
                            day: "ui8"
                        }
                    }
                },
                aX = nm()({}, aG, {
                    select: {
                        header: {
                            item: {
                                width: "auto"
                            },
                            global: {
                                border: "1px solid ".concat(F.colors.black)
                            }
                        }
                    }
                }),
                aP = {
                    iconButton: {
                        container: {
                            default: {
                                padding: "4px",
                                height: "36px",
                                width: "36px",
                                backgroundColor: F.colors.white,
                                border: "1px solid ".concat(F.colors.black),
                                borderRadius: "4px",
                                borderColor: F.colors.gray500,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        }
                    }
                },
                a$ = {
                    iconButton: {
                        container: {
                            default: {
                                padding: "4px",
                                height: "40px",
                                width: "40px",
                                backgroundColor: F.colors.white,
                                border: "1px solid ".concat(F.colors.black),
                                borderRadius: "4px",
                                borderColor: F.colors.gray500,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            active: {
                                backgroundColor: F.colors.tertiary100,
                                borderColor: F.colors.tertiary300
                            }
                        }
                    },
                    ...aL
                },
                aU = {
                    iconButton: {
                        container: {
                            default: {
                                padding: "4px",
                                height: "40px",
                                width: "40px",
                                backgroundColor: F.colors.white,
                                border: "1px solid ".concat(F.colors.black),
                                borderRadius: "4px",
                                borderColor: F.colors.gray500,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        }
                    },
                    ...aL
                },
                aV = {
                    container: {
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        fontSize: "12px"
                    }
                };
            F.typography.ui8, aL.header, aL.body;
            let aq = {
                    toggle: {
                        global: {
                            container: {
                                justifyContent: "flex-end"
                            }
                        },
                        leftLabel: {
                            style: {
                                opacity: .6,
                                color: F.colors.gray600,
                                whiteSpace: "nowrap"
                            },
                            checked: {
                                opacity: 1,
                                color: F.colors.gray800
                            }
                        },
                        rightLabel: {
                            style: {
                                opacity: .6,
                                color: F.colors.gray600,
                                whiteSpace: "nowrap"
                            },
                            checked: {
                                opacity: 1,
                                color: F.colors.gray800
                            }
                        },
                        switch: {
                            style: {
                                width: 36,
                                height: 18,
                                marginLeft: 8,
                                marginRight: 8,
                                border: "1px solid ".concat(F.colors.gray500),
                                backgroundColor: "transparent",
                                padding: "0 2px"
                            }
                        },
                        slider: {
                            style: {
                                width: 14,
                                height: 14,
                                backgroundColor: F.colors.primary700
                            }
                        }
                    }
                },
                aY = {
                    container: {
                        position: "relative"
                    },
                    iconButton: {
                        container: {
                            default: {
                                height: "40px",
                                width: "48px",
                                padding: "8px 12px",
                                backgroundColor: F.colors.primary100,
                                border: "none",
                                borderRadius: "2px"
                            },
                            active: {
                                boxShadow: "inset 0px 0px 0px 2px ".concat(F.colors.tertiary300)
                            }
                        }
                    },
                    counter: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "12px",
                        height: "12px",
                        background: F.colors.tertiary300,
                        borderRadius: "100%",
                        padding: "5px",
                        position: "absolute",
                        top: "-8px",
                        right: "-8px",
                        fontSize: "13px"
                    }
                },
                aJ = {
                    container: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 100,
                        overflow: "hidden",
                        backgroundColor: F.colors.white
                    },
                    header: {
                        container: {
                            height: "80px",
                            padding: "16px",
                            boxShadow: F.elevation[300],
                            boxSizing: "border-box",
                            width: "100%"
                        },
                        title: {
                            style: {},
                            typography: "title3"
                        },
                        subTitle: {
                            style: {
                                textAlign: "center"
                            },
                            typography: "body3"
                        },
                        iconContainer: {
                            display: "flex",
                            justifyContent: "flex-end",
                            minWidth: "80px"
                        }
                    },
                    body: {
                        container: {
                            padding: "24px 16px 16px 16px",
                            gap: "24px"
                        },
                        divider: {
                            height: "1px",
                            backgroundColor: F.colors.gray400,
                            marginTop: "16px"
                        },
                        reset: {
                            width: "fit-content",
                            height: "40px"
                        },
                        resetContainer: {
                            display: "flex",
                            alignSelf: "flex-end"
                        }
                    },
                    footer: {
                        container: {
                            justifyContent: "center",
                            padding: "16px"
                        },
                        cta: {
                            display: "flex",
                            flexGrow: 1,
                            justifyContent: "center"
                        }
                    }
                },
                aK = (e, t, l) => {
                    var i, n, o, a;
                    return null !== (a = null == t ? void 0 : null === (n = t.find(t => t.name === e)) || void 0 === n ? void 0 : null === (i = n.values) || void 0 === i ? void 0 : i[0]) && void 0 !== a ? a : null == l ? void 0 : null === (o = l.find(e => e.selected)) || void 0 === o ? void 0 : o.id
                };
            var aQ = e => {
                    var t, l, i;
                    let {
                        data: n = {},
                        defaultItemId: o,
                        defaultItemTranslation: a,
                        filterValue: d,
                        filterEventValue: r,
                        resetCount: s,
                        showLongNames: c = !1,
                        dataToExclude: u
                    } = e, v = [], p = null === (t = Object.keys(n)) || void 0 === t ? void 0 : t[0], h = e => (!s || !(s > 0)) && d === e;
                    return p && (null === (i = n[p]) || void 0 === i || null === (l = i.forEach) || void 0 === l || l.call(i, e => {
                        let {
                            id: t,
                            name: l = "",
                            longName: i = "",
                            events: n = []
                        } = e, o = {
                            id: t,
                            item: c ? i : l,
                            selected: h(t)
                        };
                        null != u && u.includes(t) || (n.length > 0 && (o.events = n.map(e => {
                            let {
                                id: t,
                                name: l = ""
                            } = e;
                            return {
                                id: t,
                                item: l,
                                selected: r === t
                            }
                        })), v.push(o))
                    }), v.unshift({
                        id: o,
                        item: a,
                        selected: !!s || !d || d === o
                    })), v
                },
                a0 = e => {
                    var t;
                    let l = null === (t = Object.keys(e)) || void 0 === t ? void 0 : t[0],
                        i = [];
                    return l && e[l].length > 0 && e[l].forEach(e => {
                        let {
                            id: t,
                            name: l = ""
                        } = e;
                        i.push({
                            id: t,
                            item: l
                        })
                    }), i
                };
            let a1 = (0, _.Z)(z, B, {
                    target: "e1vxaih20"
                })(e => {
                    let {
                        tx: t
                    } = e;
                    return { ...t
                    }
                }),
                a2 = (0, _.Z)(J, {
                    target: "e1gznzva0"
                })("display:flex;flex-direction:column;justify-content:space-between;gap:16px;"),
                a4 = (0, _.Z)("div", {
                    target: "e1gznzva1"
                })("display:flex;justify-content:space-between;gap:16px;"),
                a8 = (0, _.Z)("div", {
                    target: "e1gznzva2"
                })("display:", e => {
                    let {
                        isFilterBarExpanded: t
                    } = e;
                    return t ? "block" : "none"
                }, ";"),
                a3 = (0, _.Z)("div", {
                    target: "e1gznzva3"
                })("display:flex;justify-content:flex-start;flex-flow:row wrap;max-width:100%;gap:16px 24px;"),
                a5 = (0, _.Z)("div", {
                    target: "e1gznzva4"
                })("display:flex;gap:16px;"),
                a6 = "d3-overflow-hidden",
                a7 = () => ((0, w.useEffect)(() => (document.body.classList.add(a6), () => {
                    document.body.classList.remove(a6)
                }), []), (0, b.tZ)(W.xB, {
                    styles: [(0, W.iv)(".", a6, "{overflow:hidden !important;}")]
                }));
            var a9 = e => {
                    var t, l;
                    let {
                        initialItems: i,
                        endpoint: n = "",
                        filterName: o,
                        allItemsTranslation: a,
                        updateStore: d,
                        resetCount: r,
                        showLongNames: s,
                        dataToExclude: c
                    } = e, [u, v] = (0, w.useState)([]), {
                        data: p
                    } = oP({
                        endpoint: n,
                        shouldFetch: !i,
                        initialData: i
                    }), {
                        filters: h
                    } = (0, n6.$J)(), m = null === (l = h.find(e => e.name === o)) || void 0 === l ? void 0 : null === (t = l.values) || void 0 === t ? void 0 : t[0], {
                        translate: g
                    } = (0, l1.$G)(), y = g(a);
                    return (0, w.useEffect)(() => {
                        if (p && y) {
                            let e = aQ({
                                data: p,
                                defaultItemId: at.constants.allItems,
                                defaultItemTranslation: y,
                                filterValue: m,
                                resetCount: r,
                                showLongNames: s,
                                dataToExclude: c
                            });
                            null == d || d(e), v(e)
                        }
                    }, [y, p, m, r]), {
                        items: u
                    }
                },
                de = e => {
                    let {
                        initialItems: t,
                        endpoint: l,
                        filterName: i,
                        allItemsTranslation: n,
                        updateStore: o,
                        a11yLabel: a,
                        fluid: d,
                        showLongNames: r,
                        dataToExclude: s
                    } = e, {
                        items: c
                    } = a9({
                        initialItems: t,
                        endpoint: null != l ? l : "",
                        filterName: i,
                        allItemsTranslation: n,
                        updateStore: o,
                        a11yLabel: a,
                        showLongNames: r,
                        dataToExclude: s
                    }), {
                        updateFilter: u
                    } = (0, n6.$J)(), v = (0, w.useMemo)(() => aK(i, void 0, c), [c, i]);
                    return c.length ? (0, b.tZ)(t9, {
                        name: i,
                        items: c,
                        "aria-label": a,
                        fluid: d,
                        customTheme: aj,
                        selectedKey: v,
                        onSelectionChange: e => {
                            u({
                                name: i,
                                values: [e]
                            })
                        }
                    }) : null
                },
                dt = e => {
                    let {
                        disciplinesList: t,
                        nocsList: l
                    } = e, {
                        initialFilterNocs: i,
                        initialFilterDisciplines: n,
                        filterNocsEndpoint: o = "",
                        filterDisciplinesEndpoint: a = ""
                    } = ax(), {
                        data: d
                    } = oP({
                        endpoint: o,
                        shouldFetch: !i,
                        initialData: i
                    }), {
                        data: r
                    } = oP({
                        endpoint: a,
                        shouldFetch: !n,
                        initialData: n
                    });
                    return {
                        nocs: (0, w.useMemo)(() => d ? a0(d) : l, [d]),
                        disciplines: (0, w.useMemo)(() => r ? a0(r) : t, [r]),
                        handleFavouriteButtonClick: e => {
                            console.log(e), document.dispatchEvent(new CustomEvent("login" === e ? at.constants.misc.events.clickOnFavoritesLoginRegister : at.constants.misc.events.clickOnManageFavorites))
                        }
                    }
                };
            let dl = (0, _.Z)(z, {
                    target: "ezevbm50"
                })("display:flex;flex-grow:1;padding:0;"),
                di = (0, _.Z)("div", {
                    target: "ezevbm51"
                })("display:flex;flex-grow:1;align-items:end;"),
                dn = (0, _.Z)("div", {
                    target: "ezevbm52"
                })("display:flex;flex-grow:1;align-items:center;justify-content:center;padding:6px;gap:4px;"),
                da = (0, _.Z)("div", {
                    target: "ezevbm53"
                })("padding:4px 8px 4px 12px;"),
                dd = (0, _.Z)(ob, {
                    target: "ezevbm54"
                })(e => {
                    let {
                        customTheme: t
                    } = e;
                    return { ...null == t ? void 0 : t.wrapper
                    }
                });
            var dr = e => {
                    let {
                        favourites: t,
                        selectStateName: l,
                        nocsInfo: i,
                        disciplinesInfo: n,
                        onFilterClick: o,
                        onButtonClick: a,
                        selectTheme: d,
                        theme: r,
                        clickOnSelectEventName: s
                    } = e, {
                        translate: c
                    } = (0, l1.$G)(), [u, v] = (0, w.useState)(), [p, h] = (0, w.useState)();
                    (0, w.useEffect)(() => {
                        let e = [];
                        t.favNocs.forEach(t => {
                            var l;
                            e.push({
                                id: t.code,
                                item: null === (l = i.list.find(e => e.id === t.code)) || void 0 === l ? void 0 : l.item
                            })
                        }), v(e);
                        let l = [];
                        t.favDisciplines.forEach(e => {
                            if (!e.isPara) {
                                var t;
                                l.push({
                                    id: e.code,
                                    item: null === (t = n.list.find(t => t.id === e.code)) || void 0 === t ? void 0 : t.item
                                })
                            }
                        }), h(l)
                    }, [t, i, n]);
                    let m = (0, w.useCallback)(() => {
                            a("login")
                        }, [a]),
                        g = (0, w.useCallback)(() => {
                            a("manage")
                        }, [a]);
                    return (0, b.BX)(op, {
                        stateName: l,
                        icon: {
                            name: "favorite",
                            alt: c("fav_dropdown_filter_by_favourites_icon"),
                            title: c("fav_dropdown_filter_by_favourites_icon")
                        },
                        expandIcons: {
                            display: !0,
                            openIcon: {
                                name: "selectExpand",
                                alt: c("filter_by_favourites_open_icon"),
                                title: c("filter_by_favourites_open_icon"),
                                width: 12,
                                height: 12
                            },
                            closeIcon: {
                                name: "selectCollapse",
                                alt: c("filter_by_favourites_close_icon"),
                                title: c("filter_by_favourites_close_icon"),
                                width: 12,
                                height: 12
                            }
                        },
                        disabled: "pending" === t.isUserLoggedIn,
                        onSelectClick: o,
                        onSelectChange: e => {
                            let t = new CustomEvent(s, {
                                detail: {
                                    openFavourites: e
                                }
                            });
                            document.dispatchEvent(t)
                        },
                        customTheme: d,
                        children: ["no" === t.isUserLoggedIn && (0, b.BX)(b.HY, {
                            children: [(0, b.tZ)(da, {
                                children: (0, b.tZ)($, {
                                    variant: "body2",
                                    children: c("fav_dropdown_not_logged_text")
                                })
                            }), (0, b.tZ)(di, {
                                children: (0, b.tZ)(dl, {
                                    variant: "outlined",
                                    onClick: m,
                                    "data-testid": "ButtonLogin",
                                    children: (0, b.BX)(dn, {
                                        children: [(0, b.tZ)($, {
                                            variant: "body2",
                                            children: c("fav_dropdown_not_logged_cta_label")
                                        }), (0, b.tZ)(ej, {
                                            name: "arrow_forward",
                                            title: c("fav_dropdown_not_logged_cta_label"),
                                            alt: c("fav_dropdown_not_logged_cta_label"),
                                            "aria-label": c("fav_dropdown_not_logged_cta_label")
                                        })]
                                    })
                                })
                            })]
                        }), "yes" === t.isUserLoggedIn && u && p && (0, b.BX)(b.HY, {
                            children: [(0, b.tZ)(dd, {
                                name: "ListWrapper",
                                items: u,
                                stateDetails: {
                                    name: i.stateName,
                                    slice: "filter"
                                },
                                selectStateName: l,
                                title: c("fav_dropdown_fav_nocs_title"),
                                noDataMessage: c("fav_dropdown_no_fav_teams_text"),
                                onItemClick: o,
                                selectedIcon: "tick",
                                selectedIconAlt: c("fav_dropdown_selected_favourite_icon_label"),
                                deselectable: !0,
                                customTheme: r
                            }), (0, b.tZ)(dd, {
                                name: "ListWrapper",
                                items: p,
                                stateDetails: {
                                    name: n.stateName,
                                    slice: "filter"
                                },
                                selectStateName: l,
                                title: c("fav_dropdown_fav_sports_title"),
                                noDataMessage: c("fav_dropdown_no_fav_sports_text"),
                                onItemClick: o,
                                selectedIcon: "tick",
                                selectedIconAlt: c("fav_dropdown_selected_favourite_icon_label"),
                                deselectable: !0,
                                customTheme: r
                            }), (0, b.tZ)(di, {
                                children: (0, b.tZ)(dl, {
                                    variant: "outlined",
                                    onClick: g,
                                    "data-testid": "ButtonManage",
                                    className: "select-favourites__cta",
                                    children: (0, b.BX)(dn, {
                                        children: [(0, b.tZ)(ej, {
                                            name: "add",
                                            title: c("fav_dropdown_manage_favourites_cta_label"),
                                            alt: c("fav_dropdown_manage_favourites_cta_label"),
                                            "aria-label": c("fav_dropdown_manage_favourites_cta_label")
                                        }), (0, b.tZ)($, {
                                            variant: "body2",
                                            children: c("fav_dropdown_manage_favourites_cta_label")
                                        })]
                                    })
                                })
                            })]
                        })]
                    })
                },
                ds = e => {
                    let {
                        favourites: t
                    } = e, {
                        nocsList: l,
                        nocFilterName: i,
                        disciplinesList: n,
                        disciplineFilterName: o,
                        selectName: a,
                        clickOnSelectEventName: d
                    } = e, {
                        nocs: r,
                        disciplines: s,
                        handleFavouriteButtonClick: c
                    } = dt({
                        nocsList: l,
                        disciplinesList: n
                    });
                    return t && (0, b.tZ)(dr, {
                        favourites: t,
                        selectStateName: a,
                        nocsInfo: {
                            stateName: i,
                            list: r
                        },
                        disciplinesInfo: {
                            stateName: o,
                            list: s
                        },
                        onButtonClick: c,
                        selectTheme: aW.select,
                        theme: aH,
                        clickOnSelectEventName: d
                    })
                },
                dc = e => {
                    var t, l;
                    let {
                        title: i,
                        items: n,
                        sortingName: o,
                        onSelectClick: a,
                        a11yLabel: d = at.constants.sort.a11yLabels.sort
                    } = e, {
                        sortings: r,
                        updateSorting: s
                    } = (0, n6.ec)(), {
                        translate: c
                    } = (0, l1.$G)(), u = Object.freeze({
                        name: "sort",
                        alt: c("sort_by_icon"),
                        title: c("sort_by_icon")
                    }), v = null !== (l = null === (t = r.find(e => e.name === o)) || void 0 === t ? void 0 : t.sortBy) && void 0 !== l ? l : at.constants.medalsDataTotalType, p = () => {
                        let e = new CustomEvent(at.constants.eventSortingForIntegrator.eventNameForClickButton, {});
                        document.dispatchEvent(e)
                    };
                    return (0, b.tZ)("div", {
                        title: i,
                        children: (0, b.tZ)(t9, {
                            onOpenChange: e => {
                                null == a || a(), e && p()
                            },
                            name: o,
                            iconOpen: u,
                            iconClose: u,
                            selectedKey: v,
                            items: n,
                            customTheme: aA,
                            onSelectionChange: e => {
                                s({
                                    name: o,
                                    sortBy: e
                                }), null == a || a()
                            },
                            "aria-label": d
                        })
                    })
                },
                du = e => {
                    let {
                        filterSetting: t,
                        resetCount: l,
                        filterUpdates: i,
                        onItemClick: n,
                        a11yLabel: o,
                        fluid: a,
                        showLongNames: d
                    } = e, {
                        initialItems: r,
                        endpoint: s,
                        filterName: c,
                        allItemsTranslation: u,
                        updateStore: v
                    } = t, {
                        items: p
                    } = a9({
                        initialItems: r,
                        endpoint: s,
                        filterName: c,
                        allItemsTranslation: u,
                        updateStore: v,
                        resetCount: l,
                        a11yLabel: o,
                        showLongNames: d
                    }), h = (0, w.useMemo)(() => aK(c, i, p), [p, i, c]);
                    return p.length ? (0, b.tZ)(t9, {
                        name: c,
                        items: p,
                        "aria-label": o,
                        fluid: a,
                        customTheme: az,
                        selectedKey: h,
                        highlighted: null == i ? void 0 : i.some(e => e.name === c),
                        onSelectionChange: e => {
                            null == n || n([{
                                name: c,
                                values: [e]
                            }])
                        }
                    }) : null
                };
            let dv = (e, t, l, i, n, o) => {
                let a = aQ({
                    data: e,
                    defaultItemId: at.constants.allItems,
                    defaultItemTranslation: t,
                    filterValue: i,
                    filterEventValue: n,
                    resetCount: o
                });
                return a.forEach(e => {
                    let {
                        events: t
                    } = e;
                    (null == t ? void 0 : t.length) && t.unshift({
                        id: at.constants.allItems,
                        item: l,
                        selected: !n || n === at.constants.allItems
                    })
                }), a
            };
            var dp = e => {
                var t, l, i, n;
                let {
                    initialItems: o,
                    endpoint: a = "",
                    filterName: d,
                    allItemsTranslation: r,
                    eventsFilterName: s,
                    allEventsTranslation: c,
                    updateStore: u,
                    resetCount: v
                } = e, [p, h] = (0, w.useState)([]), {
                    data: m
                } = oP({
                    endpoint: a,
                    shouldFetch: !o,
                    initialData: o
                }), {
                    filters: g
                } = (0, n6.$J)(), y = null === (l = g.find(e => e.name === d)) || void 0 === l ? void 0 : null === (t = l.values) || void 0 === t ? void 0 : t[0], f = null === (n = g.find(e => e.name === s)) || void 0 === n ? void 0 : null === (i = n.values) || void 0 === i ? void 0 : i[0], {
                    translate: x
                } = (0, l1.$G)(), b = x(r), _ = x(c);
                return (0, w.useEffect)(() => {
                    if (m && b) {
                        let e = dv(m, b, _, y, f, v);
                        null == u || u(e), h(e)
                    }
                }, [b, _, m, y, f, v]), {
                    disciplines: p
                }
            };
            let dh = e => {
                var t, l;
                return null !== (l = null === (t = e.find(e => e.selected)) || void 0 === t ? void 0 : t.id) && void 0 !== l ? l : oK.default.allItems
            };
            var dm = e => {
                    let {
                        filterSetting: t,
                        resetCount: l,
                        filterUpdates: i,
                        onItemClick: n,
                        fluid: o
                    } = e, [a, d] = (0, w.useState)(0), {
                        translate: r
                    } = (0, l1.$G)(), {
                        initialItems: s,
                        endpoint: c,
                        filterName: u,
                        allItemsTranslation: v,
                        updateStore: p,
                        eventsFilterName: h,
                        allEventsTranslation: m,
                        a11yLabel: g
                    } = t, {
                        disciplines: y
                    } = dp({
                        initialItems: s,
                        endpoint: c,
                        filterName: u,
                        allItemsTranslation: v,
                        eventsFilterName: h,
                        allEventsTranslation: m,
                        updateStore: p,
                        resetCount: l
                    }), [f, x] = (0, w.useState)(() => dh(y));
                    (0, w.useEffect)(() => {
                        x(dh(y))
                    }, [y]);
                    let _ = (0, w.useMemo)(() => {
                            var e;
                            if (f === at.constants.allItems) return [{
                                id: at.constants.allItems,
                                item: r(m),
                                selected: !0
                            }];
                            let t = null === (e = y.find(e => e.id === f)) || void 0 === e ? void 0 : e.events;
                            return 0 !== a && (null == t || t.forEach((e, t) => {
                                e.selected = 0 === t
                            })), t
                        }, [y, f]),
                        I = (0, w.useMemo)(() => aK(h, i, _), [_, i, h]);
                    return (0, b.BX)(b.HY, {
                        children: [(0, b.tZ)(t9, {
                            name: u,
                            fluid: o,
                            selectedKey: f,
                            items: y,
                            onSelectionChange: e => {
                                x(e), d(a + 1), null == n || n([{
                                    name: u,
                                    values: [e]
                                }, {
                                    name: h,
                                    values: [at.constants.allItems]
                                }])
                            },
                            highlighted: null == i ? void 0 : i.some(e => e.name === u),
                            customTheme: az,
                            "aria-label": g
                        }), _ && y.length > 0 && (0, b.tZ)(t9, {
                            name: h,
                            fluid: o,
                            onSelectionChange: e => {
                                null == n || n([{
                                    name: h,
                                    values: [e]
                                }])
                            },
                            selectedKey: I,
                            isDisabled: f === at.constants.allItems,
                            items: _,
                            highlighted: null == i ? void 0 : i.some(e => e.name === h),
                            customTheme: az,
                            "aria-label": at.constants.filters.a11yLabels.events
                        })]
                    })
                },
                dg = e => {
                    var t, l, i, n;
                    let {
                        initialDisciplines: o,
                        disciplinesEndpoint: a,
                        disciplinesFilterName: d,
                        allDisciplinesItemsTranslation: r,
                        eventsFilterName: s,
                        allEventsItemsTranslation: c,
                        updateStore: u
                    } = e, {
                        data: v
                    } = oP({
                        endpoint: a,
                        shouldFetch: !o,
                        initialData: o
                    }), {
                        filters: p,
                        updateFilter: h
                    } = (0, n6.$J)(), m = null === (l = p.find(e => e.name === d)) || void 0 === l ? void 0 : null === (t = l.values) || void 0 === t ? void 0 : t[0], g = null === (n = p.find(e => e.name === s)) || void 0 === n ? void 0 : null === (i = n.values) || void 0 === i ? void 0 : i[0], {
                        translate: y
                    } = (0, l1.$G)(), f = y(r), x = y(c), b = (0, w.useRef)(m), _ = (0, w.useRef)(!0), I = {
                        id: "allItems",
                        item: x,
                        selected: !0
                    }, [C, S] = (0, w.useState)([]), [T, D] = (0, w.useState)([I]);
                    return (0, w.useEffect)(() => {
                        if (v && f) {
                            let e = dv(v, f, x, m, g);
                            null == u || u(e), S(e)
                        }
                    }, [f, x, v, m, g]), (0, w.useEffect)(() => {
                        if (m && x) {
                            var e, t;
                            D(m !== at.constants.allItems ? null !== (t = null === (e = C.find(e => e.id === m)) || void 0 === e ? void 0 : e.events) && void 0 !== t ? t : [] : [I]), _.current || m === b.current || h({
                                name: s,
                                values: [at.constants.allItems]
                            }), _.current && (_.current = !1), b.current = m
                        }
                    }, [m, x, C, h, s]), {
                        disciplines: C,
                        disciplineEvents: T
                    }
                },
                dy = e => {
                    let {
                        initialDisciplines: t,
                        disciplinesEndpoint: l,
                        disciplinesFilterName: i,
                        allDisciplinesItemsTranslation: n,
                        eventsFilterName: o,
                        fluid: a,
                        a11yLabel: d,
                        allEventsItemsTranslation: r,
                        updateStore: s
                    } = e, {
                        disciplines: c,
                        disciplineEvents: u
                    } = dg({
                        initialDisciplines: t,
                        disciplinesEndpoint: null != l ? l : "",
                        disciplinesFilterName: i,
                        allDisciplinesItemsTranslation: n,
                        eventsFilterName: o,
                        allEventsItemsTranslation: r,
                        updateStore: s
                    }), {
                        filters: v,
                        updateFilter: p
                    } = (0, n6.$J)(), h = (0, w.useMemo)(() => aK(i, v, c), [i, v, c]), m = (0, w.useMemo)(() => aK(o, v, u), [u, o, v]);
                    return c.length ? (0, b.BX)(b.HY, {
                        children: [(0, b.tZ)(t9, {
                            name: i,
                            fluid: a,
                            selectedKey: h,
                            items: c,
                            onSelectionChange: e => {
                                p({
                                    name: i,
                                    values: [e]
                                })
                            },
                            customTheme: aj,
                            "aria-label": d
                        }), (0, b.tZ)(t9, {
                            name: o,
                            fluid: a,
                            selectedKey: m,
                            items: u,
                            onSelectionChange: e => {
                                p({
                                    name: o,
                                    values: [e]
                                })
                            },
                            customTheme: aj,
                            "aria-label": oK.default.filters.a11yLabels.events,
                            isDisabled: h === oK.default.allItems
                        })]
                    }) : null
                };
            let df = (0, n6.MT)(e => ({
                    nocsList: [],
                    disciplinesList: [],
                    defaultIsEntityExpanded: !1,
                    expandableEntitiesState: {},
                    toggleEntity: t => {
                        e(e => ({
                            expandableEntitiesState: iy(t, {
                                expandableEntities: e.expandableEntitiesState,
                                defaultIsExpanded: e.defaultIsEntityExpanded
                            })
                        }))
                    },
                    toggleAllEntities: () => {
                        e(e => ({
                            expandableEntitiesState: {},
                            defaultIsEntityExpanded: !e.defaultIsEntityExpanded
                        }))
                    },
                    updateNocsList: t => {
                        e(e => ({ ...e,
                            nocsList: t
                        }))
                    },
                    updateDisciplinesList: t => {
                        e(e => ({ ...e,
                            disciplinesList: t
                        }))
                    }
                })),
                dx = (e, t) => {
                    var l;
                    return null === (l = ({
                        medals: {
                            discipline: oK.default.medalsTable.filters.discipline,
                            category: oK.default.medalsTable.filters.eventCategory,
                            organisation: oK.default.medalsTable.filters.noc
                        },
                        medallist: {
                            day: oK.default.medallistTable.filters.day,
                            discipline: oK.default.medallistTable.filters.discipline,
                            event: oK.default.medallistTable.filters.event,
                            gender: oK.default.medallistTable.filters.gender,
                            organisation: oK.default.medallistTable.filters.noc
                        },
                        schedule: {
                            discipline: oK.default.dailySchedule.filters.discipline,
                            event: oK.default.dailySchedule.filters.disciplineEvent,
                            medalEvents: oK.default.dailySchedule.filters.medal,
                            organisation: oK.default.dailySchedule.filters.noc,
                            venue: oK.default.dailySchedule.filters.venue,
                            day: oK.default.dailySchedule.filters.day,
                            venueTimeZone: oK.default.dailySchedule.filters.venueTimeZone
                        }
                    })[e]) || void 0 === l ? void 0 : l[t]
                },
                db = e => {
                    let {
                        widget: t
                    } = e, {
                        updateFilter: l
                    } = (0, n6.$J)(), {
                        updateSorting: i
                    } = (0, n6.ec)(), {
                        filters: n
                    } = ax(), {
                        updateIsVenueTimeZone: o
                    } = ay(), a = ag(e => e.updateAdditionalFiltersStatus);
                    (0, w.useEffect)(() => {
                        if (null == n ? void 0 : n.mainFilter) {
                            let {
                                type: e,
                                code: i
                            } = n.mainFilter, o = dx(t, e);
                            o && l({
                                name: o,
                                values: [i]
                            })
                        }
                    }, []), (0, w.useEffect)(() => {
                        var e, i;
                        let d = null == n ? void 0 : null === (e = n.additionalFilters) || void 0 === e ? void 0 : e.filter(e => "day" !== e.type && "venueTimeZone" !== e.type);
                        d && d.length >= 1 && a(av.FOUND), null == n || null === (i = n.additionalFilters) || void 0 === i || i.forEach(e => {
                            let {
                                type: i,
                                code: n
                            } = e, a = dx(t, i);
                            a === at.constants.dailySchedule.filters.venueTimeZone ? o("true" === n) : a && n && l({
                                name: a,
                                values: [n]
                            })
                        })
                    }, []), (0, w.useEffect)(() => {
                        "medals" === t && i({
                            name: at.constants.medalsTable.sorting,
                            sortBy: "Gold"
                        })
                    }, []), (0, w.useEffect)(() => {
                        var e, t;
                        let l = null == n ? void 0 : null === (t = n.additionalFilters) || void 0 === t ? void 0 : null === (e = t.find(e => e.type === at.constants.dailySchedule.filters.venueTimeZone)) || void 0 === e ? void 0 : e.code;
                        l && o("true" === l)
                    }, [null == n ? void 0 : n.additionalFilters])
                };
            var dw = l(73935),
                d_ = l(25675),
                dI = l.n(d_),
                dC = e => {
                    let {
                        filterSetting: t,
                        resetCount: l,
                        filterUpdates: i,
                        handleFilterClick: n,
                        fluid: o
                    } = e;
                    return t.type === at.constants.filterTypes.disciplineAndEvent ? (0, b.tZ)(dm, {
                        filterSetting: t,
                        resetCount: l,
                        filterUpdates: i,
                        fluid: o,
                        onItemClick: n
                    }, t.filterName) : (0, b.tZ)(du, {
                        filterSetting: t,
                        resetCount: l,
                        filterUpdates: i,
                        fluid: o,
                        onItemClick: n,
                        a11yLabel: t.a11yLabel,
                        showLongNames: t.showLongNames
                    }, t.filterName)
                },
                dS = l(74257),
                dT = l.n(dS),
                dD = l(52353),
                dZ = l.n(dD);
            let dE = (e, t) => String(e).localeCompare(t, "en"),
                dk = (e, t) => e === t ? 0 : e > t ? 1 : -1,
                dN = function(e, t) {
                    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dk,
                        i = 0,
                        n = e.length - 1;
                    for (; i <= n;) {
                        let o = n + i >> 1,
                            a = l(t, e[o]);
                        if (a > 0) i = o + 1;
                        else {
                            if (!(a < 0)) return o;
                            n = o - 1
                        }
                    }
                    return ~i
                },
                dR = e => new Promise(t => setTimeout(t, e)),
                dM = console.error,
                dF = (e, t, l) => {
                    let {
                        onError: i
                    } = null != l ? l : {}, n = new AbortController, o = null != i ? i : dM, a = () => {
                        n.abort()
                    }, d = {
                        signal: n.signal,
                        stopPolling: a
                    };
                    if ("function" != typeof e) throw TypeError("[poll] expected task to be a function");
                    if (!Number.isFinite(t) || t < 0) throw TypeError("[poll] expected task to be a finite number greater or equal 0. Got ".concat(t, " instead."));
                    return t || a(), (async () => {
                        for (; !n.signal.aborted;) {
                            try {
                                await e(d)
                            } catch (e) {
                                o(e, d)
                            }
                            n.signal.aborted || await dR(t)
                        }
                    })().catch(e => {
                        o(e, d)
                    }), a
                };
            (o = h || (h = {}))[o.before = 1] = "before", o[o.sameDay = 2] = "sameDay", o[o.after = 3] = "after";
            let dO = (e, t, l) => {
                    var i, n;
                    if (!e) return {
                        type: "error",
                        message: "olympicDay is falsy: ".concat(e)
                    };
                    if (!Number.isFinite(t) || t < 0) return {
                        type: "error",
                        message: "instantMs (".concat(t, ") is not a finite number >= 0")
                    };
                    let o = Y.ou.fromMillis(t, {
                            zone: l
                        }),
                        a = Y.ou.fromISO(e, {
                            zone: l
                        }).startOf("day"),
                        d = a.plus({
                            hours: 3
                        }),
                        r = a.plus({
                            days: 1,
                            hours: 3
                        }),
                        s = null !== (n = null !== (i = d.invalidExplanation) && void 0 !== i ? i : o.invalidExplanation) && void 0 !== n ? n : r.invalidExplanation;
                    return s ? {
                        type: "error",
                        message: s
                    } : o < d ? {
                        type: "ok",
                        code: 1
                    } : o >= r ? {
                        type: "ok",
                        code: 3
                    } : {
                        type: "ok",
                        code: 2
                    }
                },
                dB = (e, t) => {
                    if ("string" != typeof e && "number" != typeof e || "" === e) return "";
                    let l = "string" == typeof e ? Y.ou.fromISO(e, {
                        setZone: !0
                    }) : Y.ou.fromMillis(e);
                    return ((null == t ? void 0 : t.timeZone) && (l = l.setZone(t.timeZone)), l.isValid) ? l.toFormat(oK.default.time.ISODateFormat) : ""
                },
                dL = e => {
                    let {
                        event: t,
                        filterUnitPayload: {
                            disciplineEventFilter: l,
                            nocFilter: i,
                            disciplineFilter: n,
                            venueFilter: o,
                            medalFlagFilter: a,
                            savedFlagFilter: d,
                            savedEventUnits: r
                        }
                    } = e;
                    return !((null == n ? void 0 : n.find(e => e !== oK.default.allItems && e !== t.disciplineCode)) || (null == l ? void 0 : l.find(e => e !== oK.default.allItems && e !== t.eventId)) || (null == i ? void 0 : i.find(e => {
                        var l;
                        return e !== oK.default.allItems && !(null === (l = t.competitors) || void 0 === l ? void 0 : l.some(t => t.noc === e))
                    })) || (null == o ? void 0 : o.find(e => e !== oK.default.allItems && e !== t.venue))) && (!a || 0 !== t.medalFlag) && (!d || !!(t.id && (null == r ? void 0 : r.includes(t.id))))
                },
                dz = (e, t) => {
                    var l, i, n;
                    return null !== (n = null == e ? void 0 : e[t]) && void 0 !== n ? n : null == e ? void 0 : null === (i = e.units) || void 0 === i ? void 0 : null === (l = i[0]) || void 0 === l ? void 0 : l[t]
                },
                dj = e => dz(e, "olympicDay"),
                dA = (e, t) => {
                    var l;
                    return null == e ? void 0 : null === (l = e.unitsByCompetitionDay) || void 0 === l ? void 0 : l[t]
                },
                dW = e => dz(e, "startDate"),
                dH = e => dz(e, "status"),
                dG = e => {
                    var t;
                    return !!(null !== (t = null == e ? void 0 : e.liveFlag) && void 0 !== t ? t : null == e ? void 0 : e.isLive)
                },
                dX = e => {
                    let {
                        competitionDays: t,
                        monthLabels: l
                    } = e;
                    return t.map(e => {
                        var t;
                        let i = Y.ou.fromISO(e, {
                                setZone: !0
                            }),
                            n = i.month - 1;
                        return {
                            date: e,
                            startOfDayMs: i.startOf("day").toMillis(),
                            month: null !== (t = l[n]) && void 0 !== t ? t : ""
                        }
                    })
                },
                dP = e => {
                    let t, {
                        items: l,
                        rows: i,
                        competitionDay: n,
                        enableDisabledCalendarDays: o
                    } = e;
                    if (!l.length) return l;
                    let a = e => Y.ou.fromISO(e, {
                            setZone: !0
                        }).toFormat(at.constants.time.ISODateFormat),
                        d = a(n);
                    return o && (t = i.reduce((e, t) => {
                        let l = dW(t);
                        return "string" == typeof l && l && e.add(a(l)), e
                    }, new Set)), l.map(e => {
                        let l = e.date === d,
                            i = o && !l && !(null == t ? void 0 : t.has(e.date));
                        return { ...e,
                            selected: l,
                            disabled: i
                        }
                    })
                },
                d$ = e => {
                    var t, l, i, n;
                    return [null === (t = e.disciplineFilter) || void 0 === t ? void 0 : t[0], null === (l = e.disciplineEventFilter) || void 0 === l ? void 0 : l[0], null === (i = e.nocFilter) || void 0 === i ? void 0 : i[0], null === (n = e.venueFilter) || void 0 === n ? void 0 : n[0], e.medalFlagFilter, e.savedFlagFilter].some(e => e)
                },
                dU = (e, t) => {
                    var l;
                    return !!e && !lz(e) && !lL(e) && !lj(e) && !!(null === (l = dW(e)) || void 0 === l ? void 0 : l.startsWith(t))
                },
                dV = e => {
                    let {
                        eventStartDate: t,
                        rows: l,
                        enablePositionCheck: i,
                        isFullSchedule: n,
                        minutesThresholdLiveEvent: o
                    } = e;
                    if (oz("Starting findIndexOfHighlightedRowOfCompetitionDay", {
                            category: "findIndexOfHighlightedRowOfCompetitionDay",
                            objectToLog: {
                                eventStartDate: t,
                                enablePositionCheck: i,
                                isFullSchedule: n,
                                minutesThresholdLiveEvent: o,
                                rowsCount: l.length
                            }
                        }), i) {
                        oz("Searching for custom row with position 1", {
                            category: "findIndexOfHighlightedRowOfCompetitionDay"
                        });
                        let e = l.findIndex(e => 1 === rd(e));
                        if (e > -1) return oz("Found custom row with position 1", {
                            category: "findIndexOfHighlightedRowOfCompetitionDay",
                            objectToLog: {
                                index: e
                            }
                        }), e
                    }
                    if (!t || !l.length) {
                        oz("Invalid parameters, early exit", {
                            category: "findIndexOfHighlightedRowOfCompetitionDay",
                            objectToLog: {
                                eventStartDate: t,
                                rowsCount: l.length
                            }
                        });
                        return
                    }
                    let a = -1;
                    if (n && o && o >= 0 && Number.isFinite(o)) {
                        oz("Executing full schedule logic", {
                            category: "findIndexOfHighlightedRowOfCompetitionDay",
                            objectToLog: {
                                minutesThresholdLiveEvent: o
                            }
                        });
                        let {
                            indexLiveRowWithValidThreshold: e,
                            indexLastLiveRow: i
                        } = dJ({
                            rows: l,
                            eventStartDate: t,
                            minutesThresholdLiveEvent: o,
                            indexNotFound: -1
                        });
                        if (a = e, oz("Live row search result", {
                                category: "findIndexOfHighlightedRowOfCompetitionDay",
                                objectToLog: {
                                    indexLiveRowWithValidThreshold: e,
                                    indexLastLiveRow: i
                                }
                            }), a > -1) return oz("Found valid live row", {
                            category: "findIndexOfHighlightedRowOfCompetitionDay",
                            objectToLog: {
                                outputIndex: a
                            }
                        }), a;
                        let n = i + 1,
                            d = l.slice(n);
                        if (oz("Searching after last live row", {
                                category: "findIndexOfHighlightedRowOfCompetitionDay",
                                objectToLog: {
                                    indexAfterLastLiveRow: n,
                                    remainingRowsCount: d.length
                                }
                            }), oz("Scheduled row search result", {
                                category: "findIndexOfHighlightedRowOfCompetitionDay",
                                objectToLog: {
                                    outputIndex: a = dY(d, t)
                                }
                            }), oz("Last row with start date search result", {
                                category: "findIndexOfHighlightedRowOfCompetitionDay",
                                objectToLog: {
                                    outputIndex: a = dq({
                                        eventStartDate: t,
                                        rows: d,
                                        indexNotFound: -1
                                    })
                                }
                            }), !dZ()(a)) {
                            let e = a + n;
                            return oz("Final index calculated", {
                                category: "findIndexOfHighlightedRowOfCompetitionDay",
                                objectToLog: {
                                    finalIndex: e
                                }
                            }), e
                        }
                        return oz("No valid row found in full schedule", {
                            category: "findIndexOfHighlightedRowOfCompetitionDay"
                        }), a
                    }
                    return oz("Executing non-full schedule logic", {
                        category: "findIndexOfHighlightedRowOfCompetitionDay"
                    }), oz("Live row search result (non-full schedule)", {
                        category: "findIndexOfHighlightedRowOfCompetitionDay",
                        objectToLog: {
                            outputIndex: a = l.findIndex(e => dU(e, t) && dG(e))
                        }
                    }), -1 === a && oz("Scheduled row search result (non-full schedule)", {
                        category: "findIndexOfHighlightedRowOfCompetitionDay",
                        objectToLog: {
                            outputIndex: a = dY(l, t)
                        }
                    }), -1 === a && (a = dq({
                        eventStartDate: t,
                        rows: l,
                        indexNotFound: -1
                    })), oz("Final result", {
                        category: "findIndexOfHighlightedRowOfCompetitionDay",
                        objectToLog: {
                            outputIndex: a
                        }
                    }), a
                },
                dq = e => {
                    let {
                        eventStartDate: t,
                        rows: l,
                        indexNotFound: i
                    } = e, n = i;
                    if (n === i && (n = l.findIndex(e => dU(e, t))), n > i) return n
                },
                dY = (e, t) => e.findIndex(e => dU(e, t) && dH(e) === at.constants.dailySchedule.scheduleItemStatus.scheduled),
                dJ = e => {
                    let {
                        rows: t,
                        eventStartDate: l,
                        minutesThresholdLiveEvent: i,
                        indexNotFound: n
                    } = e, o = 0, a = t.length, d = n, r = 0;
                    for (; d === n && o < a;) {
                        let e = t[o],
                            n = e.startDate;
                        if (n && dU(e, l) && dG(e)) {
                            let e = Y.ou.fromISO(n, {
                                setZone: !0
                            });
                            if (e.isValid) {
                                let t = e.toUTC(),
                                    l = Date.now(),
                                    n = 6e4 * i;
                                t.toMillis() > l - n && (d = o)
                            }
                            r = o
                        }
                        o += 1
                    }
                    return {
                        indexLiveRowWithValidThreshold: d,
                        indexLastLiveRow: r
                    }
                },
                dK = (e, t, l, i, n) => {
                    var o;
                    let {
                        listRef: a
                    } = e;
                    if (-1 === t) return;
                    oz("ScheduleWidget", {
                        category: "scrollToIndex",
                        objectToLog: {
                            filterBarExpanded: l,
                            index: t
                        }
                    });
                    let d = i ? at.constants.dailySchedule.stickyHeaderOffsets.mobile : at.constants.dailySchedule.stickyHeaderOffsets.desktop,
                        r = 0;
                    "full" === n && t > 0 && (r = i ? at.constants.dailySchedule.stickyADVHeight.mobile : at.constants.dailySchedule.stickyADVHeight.desktop), oz("Sticky Status", {
                        category: "scrollToIndex",
                        objectToLog: {
                            filterBarExpanded: l,
                            index: t
                        }
                    }), null === (o = a.current) || void 0 === o || o.scrollToIndex({
                        index: t,
                        align: "start",
                        offset: l ? d.filterBarExpanded - r : d.filterBarCompressed - r
                    })
                },
                dQ = (e, t, l, i, n) => {
                    dK(e, t, l, i, n)
                },
                d0 = e => (null == e ? void 0 : e.type) === at.constants.dailySchedule.rows.competitionDayDivider,
                d1 = e => (null == e ? void 0 : e.type) === at.constants.dailySchedule.rows.endOfOlympicDay,
                d2 = e => (null == e ? void 0 : e.type) === at.constants.dailySchedule.rows.olympicDayPlaceholder,
                d4 = (e, t) => {
                    if (void 0 === t) return !1;
                    let l = e.current;
                    if (!l) return !1;
                    let i = l[t],
                        n = l[t + 1];
                    return d0(i) && d2(n)
                },
                d8 = e => {
                    var t;
                    let l = "manageOnCompetitionDayClick",
                        {
                            competitionDays: i,
                            loadOlympicDaySchedule: n,
                            selectedDay: o,
                            venueTimeZone: a,
                            isFilterBarExpanded: d,
                            isMobile: r,
                            isFullSchedule: s,
                            minutesThresholdLiveEvent: c
                        } = e;
                    if (!a || !Number.isFinite(o.startOfDayMs)) {
                        oz("invalid args", {
                            level: oM.Warn,
                            category: l,
                            objectToLog: {
                                venueTimeZone: a,
                                selectedDay: o
                            }
                        });
                        return
                    }
                    let u = ro(o.startOfDayMs, a),
                        v = dV({
                            eventStartDate: o.date,
                            rows: e.rowsRef.current,
                            isFullSchedule: s,
                            minutesThresholdLiveEvent: c
                        }),
                        p = d4(e.rowsRef, v);
                    if (oz("should fetch?", {
                            level: oM.Info,
                            category: l,
                            objectToLog: {
                                indexCompetitionDayFoundBefore: v,
                                shouldFetch: p
                            }
                        }), void 0 !== v && !p) {
                        v = rp(e.rowsRef.current, v - 1, v), e.setIsScrollingToCompetitionDayByCalendar(!0), dQ(e, v, d, r), setTimeout(() => {
                            e.setIsScrollingToCompetitionDayByCalendar(!1)
                        }, at.constants.dailySchedule.list.scrollToCalendarDayDelayMs);
                        return
                    }
                    let h = null !== (t = null == i ? void 0 : i.days.map(e => e.id).sort(dE)) && void 0 !== t ? t : [u],
                        m = h.findIndex(e => e === u),
                        g = h.slice(Math.max(0, m - 1), Math.max(0, m + 2));
                    if (!n) {
                        oz("loadOlympicDaySchedule not provided: cannot fetch asynchronously the schedule of the day clicked", {
                            level: oM.Warn,
                            category: l
                        });
                        return
                    }
                    n({
                        olympicDays: g,
                        cache: "preserve"
                    }).then(async () => {
                        await dR(at.constants.dailySchedule.calendar.scrollDelayAfterFetchCompletedMs);
                        let t = dV({
                            eventStartDate: o.date,
                            rows: e.rowsRef.current,
                            isFullSchedule: s,
                            minutesThresholdLiveEvent: c
                        });
                        void 0 !== t ? (t = rp(e.rowsRef.current, t - 1, t), e.setIsScrollingToCompetitionDayByCalendar(!0), dQ(e, t, d, r), setTimeout(() => {
                            e.setIsScrollingToCompetitionDayByCalendar(!1)
                        }, at.constants.dailySchedule.list.scrollToCalendarDayDelayMs)) : oz("row not found after fetching olympicDays=".concat(g.join()), {
                            level: oM.Warn,
                            category: l
                        })
                    })
                },
                d3 = e => {
                    var t, l;
                    let i, {
                            schedule: n,
                            daily: o,
                            olympicDay: a
                        } = e,
                        d = null !== (t = o.units) && void 0 !== t ? t : [],
                        r = o.groups;
                    if (null == r ? void 0 : r.length) {
                        let e = new Map(null === (l = n.groups) || void 0 === l ? void 0 : l.map(e => [e.id, e]));
                        r.forEach(t => {
                            e.set(t.id, t)
                        }), i = Array.from(e.values())
                    }
                    return {
                        groups: (null == i ? void 0 : i.length) ? i : n.groups,
                        unitsByCompetitionDay: { ...n.unitsByCompetitionDay,
                            [a]: d
                        }
                    }
                },
                d5 = e => e ? {
                    groups: e.groups,
                    unitsByCompetitionDay: e.units && dT()(e.units, e => e.olympicDay)
                } : {},
                d6 = (e, t, l) => {
                    let i = null == t ? void 0 : t.days;
                    if (!Array.isArray(i) || !i.length || !e) return;
                    let n = i.map(e => e.id).sort(dE),
                        o = dN(n, e, dE);
                    return o >= 0 ? n[o + (l ? 1 : -1)] : n[~o]
                },
                d7 = async e => {
                    let {
                        olympicDays: t,
                        cache: l,
                        schedule: i,
                        dailyScheduleConfig: n,
                        signal: o,
                        setScheduleData: a
                    } = e;
                    oz("[fetchOlympicDays][request]: ".concat(null == t ? void 0 : t.join()), {
                        level: oM.Info
                    });
                    let d = await Promise.allSettled(t.filter(e => {
                        if ("preserve" === l) {
                            var t;
                            return !(null == i ? void 0 : null === (t = i.unitsByCompetitionDay) || void 0 === t ? void 0 : t[e])
                        }
                        return !0
                    }).map(async e => {
                        let t = re(n.endpointTemplate, e);
                        return {
                            data: (await oG(t, {
                                404: {
                                    units: []
                                }
                            }, {
                                signal: o
                            })).data,
                            olympicDay: e
                        }
                    }));
                    if (null == o ? void 0 : o.aborted) {
                        var r;
                        throw null !== (r = o.reason) && void 0 !== r ? r : Error("AbortError")
                    }
                    d.some(e => "fulfilled" === e.status) && a(e => d.reduce((e, t) => "fulfilled" === t.status ? d3({
                        schedule: e,
                        daily: t.value.data,
                        olympicDay: t.value.olympicDay
                    }) : e, e))
                },
                d9 = async e => {
                    let {
                        olympicDay: t,
                        scheduleData: l,
                        competitionDays: i,
                        dailyScheduleConfig: n,
                        setScheduleData: o,
                        signal: a,
                        filterUnitPayload: d
                    } = e, r = {
                        level: oM.Info,
                        category: "update-schedule",
                        enabled: !1
                    };
                    oz("[loadNextOlympicDaySchedule] Starting with initial Olympic day: ".concat(t), r);
                    let s = [],
                        c = t;
                    for (dA(l, c) && (oz("[loadNextOlympicDaySchedule] Data already exists for ".concat(c, ", moving to next day"), r), c = d6(c, i, !0)); c;) {
                        var u, v, p, h;
                        oz("[loadNextOlympicDaySchedule] Processing Olympic day: ".concat(c), r);
                        let e = dA(l, c);
                        if (e) {
                            if (oz("[loadNextOlympicDaySchedule] Found previously fetched data for ".concat(c), r), e.some(e => dL({
                                    event: e,
                                    filterUnitPayload: d
                                }))) {
                                oz("[loadNextOlympicDaySchedule] Found visible units for ".concat(c, " after filtering, stopping fetch"), r);
                                break
                            }
                            oz("[loadNextOlympicDaySchedule] No visible units for ".concat(c, " after filtering, continuing to next day"), r), c = d6(c, i, !0);
                            continue
                        }
                        oz("[loadNextOlympicDaySchedule] Fetching new data for ".concat(c), r);
                        let t = {
                            olympicDay: c,
                            data: (await oG(re(n.endpointTemplate, c), {
                                404: {
                                    units: []
                                }
                            }, {
                                signal: a
                            })).data
                        };
                        if (s.push(t), oz("[loadNextOlympicDaySchedule] Fetch successful for ".concat(c, ". Units: ").concat(null === (v = t.data) || void 0 === v ? void 0 : null === (u = v.units) || void 0 === u ? void 0 : u.length), r), null === (h = t.data) || void 0 === h ? void 0 : null === (p = h.units) || void 0 === p ? void 0 : p.some(e => dL({
                                event: e,
                                filterUnitPayload: d
                            }))) {
                            oz("[loadNextOlympicDaySchedule] Found visible units for ".concat(c, " after filtering, stopping fetch"), r);
                            break
                        }
                        oz("[loadNextOlympicDaySchedule] No visible units for ".concat(c, " after filtering, continuing to next day"), r), c = d6(c, i, !0)
                    }
                    if (!s.length) {
                        oz("[loadNextOlympicDaySchedule] No schedules fetched, exiting", r);
                        return
                    }
                    oz("[loadNextOlympicDaySchedule] Updating schedule data with ".concat(s.length, " new schedules"), r), o(e => s.reduce((e, t) => d3({
                        schedule: e,
                        olympicDay: t.olympicDay,
                        daily: t.data
                    }), e)), oz("[loadNextOlympicDaySchedule] Schedule update complete", r)
                },
                re = (e, t) => e.replace("{day}", t),
                rt = ij()(e => {
                    let {
                        headerName: t,
                        endpoint: l,
                        logCategory: i
                    } = e;
                    oz("could not find header=".concat(t, " in ").concat(l, " HEAD response"), {
                        level: oM.Warn,
                        category: i
                    })
                }, 1e4),
                rl = e => {
                    let {
                        scheduleEndpoint: t,
                        pollScheduleIntervalMs: l,
                        headerName: i,
                        onScheduleUpdate: n,
                        mutableEndpointUpdatedAtMap: o,
                        onError: a,
                        updateShowLoadingOverlay: d
                    } = e, r = "pollSchedule";
                    return t && l && i ? (oz("starting polling of ".concat(t, ", pollScheduleIntervalMs=").concat(l), {
                        level: oM.Info,
                        category: r
                    }), dF(async e => {
                        let {
                            headers: l
                        } = await oH(t, {
                            signal: e.signal,
                            method: "HEAD"
                        }), a = null == l ? void 0 : l.get(i);
                        if (!a) {
                            rt({
                                logCategory: r,
                                headerName: i,
                                endpoint: t
                            });
                            return
                        }
                        let {
                            lastValue: d,
                            isCurrentValueGreaterThanPrevious: s
                        } = o$({
                            previousValue: o[t] || 0,
                            currentValue: a
                        });
                        if (o[t] = d, !s) return;
                        oz("[fetching]: ".concat(t), {
                            category: r,
                            level: oM.Info
                        });
                        let c = await oG(t, {
                            404: {
                                units: []
                            }
                        }, {
                            signal: e.signal,
                            method: "GET"
                        });
                        ((null == c ? void 0 : c.data.units) || (null == c ? void 0 : c.data.groups)) && n({
                            schedule: c.data,
                            scheduleEndpoint: t
                        })
                    }, l, {
                        onError: a
                    })) : C()
                },
                ri = e => {
                    let {
                        scheduleEndpoint: t,
                        pollScheduleIntervalMs: l,
                        headerName: i,
                        onScheduleUpdate: n,
                        mutableEndpointUpdatedAtMap: o,
                        onError: a
                    } = e, d = "pollSchedule";
                    return t && l && i ? (oz("starting polling of ".concat(t, ", pollScheduleIntervalMs=").concat(l), {
                        level: oM.Info,
                        category: d
                    }), dF(async e => {
                        let {
                            headers: l
                        } = await oH(t, {
                            signal: e.signal,
                            method: "HEAD"
                        }), a = null == l ? void 0 : l.get(i);
                        if (!a) {
                            rt({
                                logCategory: d,
                                headerName: i,
                                endpoint: t
                            });
                            return
                        }
                        let r = o[t] || 0,
                            {
                                lastValue: s,
                                isCurrentValueGreaterThanPrevious: c
                            } = o$({
                                previousValue: r,
                                currentValue: a
                            });
                        if (o[t] = s, !c || !r) return;
                        oz("[fetching]: ".concat(t), {
                            category: d,
                            level: oM.Info
                        });
                        let u = await oG(t, {
                            404: {
                                units: []
                            }
                        }, {
                            signal: e.signal,
                            method: "GET"
                        });
                        ((null == u ? void 0 : u.data.units) || (null == u ? void 0 : u.data.groups)) && n({
                            schedule: u.data,
                            scheduleEndpoint: t
                        })
                    }, l, {
                        onError: a
                    })) : C()
                },
                rn = e => {
                    let {
                        olympicDay: t,
                        pollScheduleIntervalMs: l,
                        endpointTemplate: i,
                        headerName: n,
                        onDailyScheduleUpdate: o,
                        mutableEndpointUpdatedAtMap: a,
                        onError: d
                    } = e, r = t && i ? re(i, t) : "";
                    return t ? ri({
                        scheduleEndpoint: r,
                        onError: d,
                        mutableEndpointUpdatedAtMap: a,
                        pollScheduleIntervalMs: l,
                        headerName: n,
                        onScheduleUpdate(e) {
                            o({ ...e,
                                olympicDay: t
                            })
                        }
                    }) : (oz("cannot poll: invalid olympicDay=".concat(t), {
                        level: oM.Info,
                        category: "pollOlympicDaySchedule"
                    }), C())
                },
                ro = (e, t) => dB(e, {
                    timeZone: t
                }),
                ra = (e, t) => {
                    var l, i, n;
                    let o = [null == t ? void 0 : t.mainFilter].concat(null == t ? void 0 : t.additionalFilters),
                        a = null == o ? void 0 : o.find(e => (null == e ? void 0 : e.type) === "day");
                    if (a) return a.code;
                    let d = e.find(dG);
                    if (d) return null === (i = dW(d)) || void 0 === i ? void 0 : i.split("T")[0];
                    let r = e.find(e => e.status === at.constants.dailySchedule.scheduleItemStatus.scheduled);
                    return r ? null === (n = dW(r)) || void 0 === n ? void 0 : n.split("T")[0] : null === (l = dj(e[0])) || void 0 === l ? void 0 : l.split("T")[0]
                },
                rd = e => {
                    var t, l;
                    return lH(e) ? null === (l = e.customData) || void 0 === l ? void 0 : null === (t = l.infoBox) || void 0 === t ? void 0 : t.position : void 0
                },
                rr = e => {
                    let {
                        labelWithPlaceholder: t,
                        startText: l,
                        isLocalTimeZone: i,
                        venueTimeZone: n
                    } = e;
                    if (!l) return "";
                    let o = /(Not Before) (\d{1,2}:\d{2})/m.exec(l);
                    if ((null == o ? void 0 : o.length) !== 3) return l;
                    let [, , a] = o, d = rs({
                        startTextDate: a,
                        dateFormat: "H:mm",
                        labelWithPlaceholder: t,
                        emptyString: "",
                        isLocalTimeZone: i,
                        venueTimeZone: n
                    });
                    if (d.length) return d;
                    let r = rs({
                        startTextDate: a,
                        dateFormat: "HH:mm",
                        labelWithPlaceholder: t,
                        emptyString: "",
                        isLocalTimeZone: i,
                        venueTimeZone: n
                    });
                    return r.length ? r : ""
                },
                rs = e => {
                    let {
                        startTextDate: t,
                        dateFormat: l,
                        labelWithPlaceholder: i,
                        emptyString: n,
                        isLocalTimeZone: o,
                        venueTimeZone: a
                    } = e, d = Y.ou.fromFormat(t, l, {
                        zone: a
                    });
                    if (!d.isValid) return n;
                    let r = d.toISO(),
                        s = Y.ou.fromISO(r, {
                            zone: o ? void 0 : a
                        });
                    if (!s.isValid) return n;
                    let c = (0, l1.wT)(i, [{
                        placeholder: "{time}",
                        replacement: rc(s)
                    }]);
                    return c === i ? n : c
                },
                rc = e => {
                    let {
                        hour: t,
                        minute: l
                    } = e;
                    return l < 10 ? "".concat(t, ":0").concat(l) : "".concat(t, ":").concat(l)
                },
                ru = e => {
                    let {
                        clonedEvent: t,
                        rows: l,
                        isFirstRender: i
                    } = e;
                    if (i) return;
                    let {
                        startDate: n
                    } = t;
                    n && l.push({
                        type: at.constants.dailySchedule.rows.competitionDayDivider,
                        olympicDay: n
                    })
                },
                rv = e => {
                    for (let l = 0; l < e.length; l += 1) {
                        var t;
                        if (e[l].type === at.constants.dailySchedule.rows.endOfOlympicDay && (null === (t = e[l - 1]) || void 0 === t ? void 0 : t.type) === at.constants.dailySchedule.rows.competitionDayDivider) {
                            let t = e[l - 1];
                            e[l - 1] = e[l], e[l] = t
                        }
                    }
                    return e
                },
                rp = (e, t, l) => {
                    var i;
                    return (null === (i = e[t]) || void 0 === i ? void 0 : i.type) === at.constants.dailySchedule.rows.competitionDayDivider ? t : l
                },
                rh = e => {
                    var t, l, i, n;
                    return null !== (n = null === (t = (null == e ? void 0 : null === (l = e.mainFilter) || void 0 === l ? void 0 : l.type) === "day" ? e.mainFilter : null == e ? void 0 : null === (i = e.additionalFilters) || void 0 === i ? void 0 : i.find(e => "day" === e.type)) || void 0 === t ? void 0 : t.code) && void 0 !== n ? n : Y.ou.local().toFormat("yyyy-MM-dd")
                },
                rm = (e, t) => {
                    (0, w.useEffect)(() => {
                        let {
                            updateCompetitionDay: l,
                            competitionDay: i
                        } = ag.getState(), n = Y.ou.fromISO(i, {
                            zone: t ? e : "local"
                        });
                        n.isValid && l(n.toISO())
                    }, [t, e])
                };
            var rg = l(94885),
                ry = l.n(rg);
            let rf = (e, t) => {
                    var l;
                    let {
                        infoBoxesConfig: i,
                        widgetFilters: n,
                        isFullSchedule: o,
                        minutesThresholdLiveEvent: a
                    } = t, d = rb(i);
                    if (!(null == d ? void 0 : d.length)) return e;
                    let r = e.slice(),
                        s = null !== (l = dV({
                            rows: e,
                            eventStartDate: ra(e, n),
                            isFullSchedule: o,
                            minutesThresholdLiveEvent: a
                        })) && void 0 !== l ? l : 0;
                    for (let t of d) {
                        if (!e.length && !t.enableShowOnEmptySchedule) continue;
                        let l = d0(e[s]),
                            i = s + t.position - (l ? 0 : 1);
                        r.splice(i, 0, rx({
                            infoBox: t,
                            prevRow: e[i - 1],
                            nextRow: e[i]
                        }))
                    }
                    return r
                },
                rx = e => {
                    let {
                        infoBox: t,
                        prevRow: l,
                        nextRow: i
                    } = e, n = {
                        infoBox: t,
                        prevRowOlympicDay: dj(l),
                        prevRowIsLive: dG(l),
                        nextRowOlympicDay: dj(i),
                        nextRowIsLive: dG(i)
                    };
                    return {
                        type: at.constants.dailySchedule.customRows.infoBox,
                        id: t.id,
                        width: t.size.width,
                        height: t.size.height,
                        clientOnly: !!t.clientOnly,
                        customData: n
                    }
                },
                rb = e => {
                    var t;
                    return null == e ? void 0 : null === (t = e.boxes) || void 0 === t ? void 0 : t.filter(r_)
                },
                rw = e => {
                    var t;
                    return null == e ? void 0 : null === (t = e.boxes) || void 0 === t ? void 0 : t.filter(ry()(r_))
                },
                r_ = e => {
                    if (!e || "object" != typeof e) return !1;
                    let {
                        id: t,
                        position: l
                    } = e;
                    return !!t && "string" == typeof t && Number.isFinite(l) && l >= 1
                };
            var rI = l(6557),
                rC = l.n(rI);
            let rS = (0, w.createContext)(void 0),
                rT = () => (0, w.useContext)(rS),
                rD = "infobox",
                rZ = e => {
                    let {
                        infoBoxesConfig: t,
                        children: l
                    } = e, i = rT(), n = (0, S.N)(rC())(null != t ? t : i);
                    return (0, w.useEffect)(() => {
                        let e = rw(t);
                        oz("invalid infoBox configs provided", {
                            category: rD,
                            objectToLog: e,
                            forceEnable: !!(null == e ? void 0 : e.length)
                        }), oz("render function not provided", {
                            category: rD,
                            objectToLog: null == t ? void 0 : t.render,
                            forceEnable: !!t && "function" != typeof t.render
                        })
                    }, [n]), (0, b.tZ)(rS.Provider, {
                        value: n,
                        children: l
                    })
                },
                rE = (0, w.createContext)(null),
                rk = (0, w.createContext)(null),
                rN = () => {
                    let e = (0, w.useContext)(rE);
                    return ! function(e, t) {
                        if (null == e) throw TypeError("expected ".concat(t, " not to be null or undefined, got ").concat(String(e), " instead"))
                    }(e, "ScheduleWidget-props.scheduleByDay"), e
                },
                rR = e => {
                    let {
                        children: t,
                        scheduleByDay: l,
                        scheduleDataSource: i,
                        infoBoxesConfig: n
                    } = e, {
                        isVenueTimeZone: o
                    } = ay();
                    return rm(ai(), o), (0, b.tZ)(rZ, {
                        infoBoxesConfig: n,
                        children: (0, b.tZ)(rk.Provider, {
                            value: i,
                            children: (0, b.tZ)(rE.Provider, {
                                value: l,
                                children: t
                            })
                        })
                    })
                },
                rM = e => ("number" == typeof e ? Y.ou.fromMillis(e) : Y.ou.fromISO(e, {
                    setZone: !0
                })).toLocal().toFormat(oK.default.time.ISODateFormat),
                rF = e => {
                    var t, l, i;
                    return null !== (i = null == e ? void 0 : null === (l = e.days) || void 0 === l ? void 0 : null === (t = l.map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    })) || void 0 === t ? void 0 : t.sort(dE)) && void 0 !== i ? i : []
                },
                rO = e => {
                    let {
                        competitionDays: t,
                        isDisplayingLocalTimeZone: l,
                        firstOlympicEventStartDate: i,
                        lastOlympicEventStartDate: n
                    } = e, o = rF(t);
                    if (!l) return o;
                    if (i) {
                        let e = rM(i),
                            t = dN(o, e, dE); - 1 === t ? o.unshift(e) : t > 0 && o.shift()
                    }
                    if (n) {
                        let e = rM(n),
                            t = dN(o, e, dE),
                            l = o.length - 1;
                        t <= ~l ? o.push(e) : t >= 0 && t < l && o.pop()
                    }
                    return o
                },
                rB = "label_month_",
                rL = "_abbr",
                rz = "label_day_of_week_",
                rj = "_abbr";
            var rA = e => {
                    var t, l, i, n;
                    let {
                        rows: o,
                        initialFilterDays: a,
                        filterDaysEndpoint: d = "",
                        isDisplayingLocalTimeZone: r,
                        enableDisabledCalendarDays: s
                    } = e, c = !!s, {
                        data: u
                    } = oP({
                        endpoint: d,
                        shouldFetch: !a,
                        initialData: a
                    }), {
                        endpointTemplate: v
                    } = rN(), p = null == u ? void 0 : null === (l = u.days) || void 0 === l ? void 0 : null === (t = l[0]) || void 0 === t ? void 0 : t.id, h = null == u ? void 0 : null === (n = u.days) || void 0 === n ? void 0 : null === (i = n[u.days.length - 1]) || void 0 === i ? void 0 : i.id, {
                        data: m
                    } = oP({
                        endpoint: p ? re(v, p) : "",
                        shouldFetch: !!p
                    }), {
                        data: g
                    } = oP({
                        endpoint: h ? re(v, h) : "",
                        shouldFetch: !!h
                    }), {
                        translate: y
                    } = (0, l1.$G)(), f = ag(e => e.competitionDay), {
                        months: x,
                        weekDays: b
                    } = (0, w.useMemo)(() => ({
                        months: [y("".concat(rB, "january").concat(rL)), y("".concat(rB, "february").concat(rL)), y("".concat(rB, "march").concat(rL)), y("".concat(rB, "april").concat(rL)), y("".concat(rB, "may").concat(rL)), y("".concat(rB, "june").concat(rL)), y("".concat(rB, "july").concat(rL)), y("".concat(rB, "august").concat(rL)), y("".concat(rB, "september").concat(rL)), y("".concat(rB, "october").concat(rL)), y("".concat(rB, "november").concat(rL)), y("".concat(rB, "december").concat(rL))].filter(Boolean),
                        weekDays: [y("".concat(rz, "monday").concat(rj)), y("".concat(rz, "tuesday").concat(rj)), y("".concat(rz, "wednesday").concat(rj)), y("".concat(rz, "thursday").concat(rj)), y("".concat(rz, "friday").concat(rj)), y("".concat(rz, "saturday").concat(rj)), y("".concat(rz, "sunday").concat(rj))]
                    }), [y]);
                    return {
                        competitionDays: (0, w.useMemo)(() => {
                            var e, t, l, i;
                            return x.length ? dP({
                                items: dX({
                                    competitionDays: rO({
                                        isDisplayingLocalTimeZone: r,
                                        competitionDays: u,
                                        firstOlympicEventStartDate: null == m ? void 0 : null === (t = m.units) || void 0 === t ? void 0 : null === (e = t.find(e => e.startDate)) || void 0 === e ? void 0 : e.startDate,
                                        lastOlympicEventStartDate: null == g ? void 0 : null === (i = g.units) || void 0 === i ? void 0 : null === (l = i.findLast(e => e.startDate)) || void 0 === l ? void 0 : l.startDate
                                    }),
                                    monthLabels: x
                                }),
                                rows: o,
                                competitionDay: f,
                                enableDisabledCalendarDays: c
                            }) : []
                        }, [x, r, m, g, u, o, f, c]),
                        weekDayLabels: b
                    }
                },
                rW = e => {
                    let {
                        rows: t,
                        initialFilterDays: l,
                        filterDaysEndpoint: i,
                        enableDisabledCalendarDays: n,
                        onCompetitionDayClick: o,
                        isDisplayingLocalTimeZone: a,
                        languageCode: d
                    } = e, {
                        translate: r
                    } = (0, l1.$G)(), {
                        competitionDays: s,
                        weekDayLabels: c
                    } = rA({
                        rows: t,
                        initialFilterDays: l,
                        filterDaysEndpoint: i,
                        isDisplayingLocalTimeZone: a,
                        enableDisabledCalendarDays: n
                    }), u = e => {
                        let t = new CustomEvent(at.constants.misc.events.calendarDaySelected, {
                            detail: e
                        });
                        document.dispatchEvent(t)
                    }, v = r(a ? "daily_schedule_filter_days_user_timezone_note" : "daily_schedule_filter_days_venue_timezone_note");
                    return (0, b.tZ)(tl, {
                        dates: s,
                        startDay: 0,
                        days: c,
                        iconOpen: {
                            name: "selectExpand",
                            width: 12,
                            height: 12,
                            alt: r("filter_by_day_open_icon"),
                            title: r("filter_by_day_open_icon")
                        },
                        iconClose: {
                            name: "selectCollapse",
                            width: 12,
                            height: 12,
                            alt: r("filter_by_day_close_icon"),
                            title: r("filter_by_day_close_icon")
                        },
                        onDateClick: e => {
                            try {
                                null == o || o(e), u(e)
                            } catch (e) {
                                oz("".concat(String(e)), {
                                    category: "handleOnDateClick"
                                })
                            }
                        },
                        customTheme: aG,
                        locale: d,
                        dateFormat: lV(d, !0),
                        children: (0, b.tZ)(rH, {
                            className: "calendar-filter__info",
                            children: v
                        })
                    })
                };
            let rH = (0, _.Z)("div", {
                target: "e1xwu4ey0"
            })("border-top:1px solid ", F.colors.gray300, ";padding-top:5px;font-size:0.875rem;");
            var rG = () => {
                let {
                    translate: e
                } = (0, l1.$G)(), t = e("schedule_timezone_switcher_use_user_local_time"), l = e("schedule_timezone_switcher_use_venue_time"), i = e("schedule_timezone_switcher_label"), {
                    isVenueTimeZone: n,
                    updateIsVenueTimeZone: o
                } = ay();
                return (0, b.tZ)(tB, {
                    id: at.constants.dailySchedule.settings.timeZone,
                    leftLabel: (0, b.tZ)($, {
                        as: "span",
                        variant: "ui2",
                        style: {
                            margin: 0
                        },
                        children: l
                    }),
                    rightLabel: (0, b.tZ)($, {
                        as: "span",
                        variant: "ui2",
                        style: {
                            margin: 0
                        },
                        children: t
                    }),
                    activeLeft: !0,
                    customTheme: aq,
                    checked: n,
                    onToggleChange: e => {
                        o(e.active)
                    },
                    "aria-label": i
                })
            };
            let rX = e => {
                    let {
                        isExpanded: t,
                        onClick: l,
                        hidden: i,
                        expandedI18nKey: n,
                        collapsedI18nKey: o,
                        ...a
                    } = e, {
                        translate: d
                    } = (0, l1.$G)(), r = d(t ? null != n ? n : "daily_schedule_collapse_groupings_button" : null != o ? o : "daily_schedule_expand_groupings_button"), s = t ? "collapse" : "expand";
                    return (0, b.tZ)(n3, {
                        hidden: i,
                        "aria-pressed": t,
                        id: oK.default.dailySchedule.expandAll.buttonId,
                        iconAlt: r,
                        style: i ? {
                            display: "none"
                        } : void 0,
                        title: r,
                        active: t,
                        "aria-label": r,
                        iconName: s,
                        onIconButtonClick: l,
                        ...a
                    })
                },
                rP = () => {
                    let {
                        mainEventName: e
                    } = at.constants.eventFiltersForIntegrator, t = { ...aC,
                        resetFilters: !0,
                        selectedFilter: {
                            resetFilters: !0
                        }
                    }, l = new CustomEvent(e, {
                        detail: t
                    });
                    document.dispatchEvent(l)
                },
                r$ = (0, _.Z)("div", {
                    target: "edproq00"
                })("display:flex;flex-direction:column;justify-content:space-between;padding:32px;gap:16px;@media (max-width:", e => {
                    let {
                        theme: t
                    } = e;
                    return t.breakpoints.sm
                }, "px){width:100%;}@media (min-width:", e => {
                    let {
                        theme: t
                    } = e;
                    return t.breakpoints.sm
                }, "px) and (max-width:", e => {
                    let {
                        theme: t
                    } = e;
                    return t.breakpoints.lg
                }, "px){width:86.333%;}@media (min-width:", e => {
                    let {
                        theme: t
                    } = e;
                    return t.breakpoints.lg
                }, "px){width:69.666%;}");
            var rU = e => {
                let {
                    rows: t = [],
                    isSavedFilterActive: l,
                    showModal: i,
                    favourites: n,
                    headerTx: o,
                    filterModalTx: a,
                    onCompetitionDayClick: d,
                    enableDisabledCalendarDays: r,
                    isDisplayingLocalTimeZone: s,
                    languageCode: c
                } = e, [u, v] = (0, w.useState)(!1), {
                    filters: p,
                    updateFilter: h
                } = (0, n6.$J)(), {
                    appliedScheduleFiltersCount: m
                } = aD(p), {
                    filterDisciplinesEndpoint: g,
                    filterVenuesEndpoint: y,
                    filterNocsEndpoint: f,
                    filterDaysEndpoint: x,
                    initialFilterDisciplines: _,
                    initialFilterNocs: I,
                    initialFilterVenues: C,
                    initialFilterDays: T
                } = ax(), D = ag(e => e.updateDisciplinesList), Z = ag(e => e.updateNocsList), E = ag(e => e.updateIsFilterBarExpanded), {
                    defaultIsGroupExpanded: k,
                    toggleAllGroups: N,
                    nocsList: R,
                    disciplinesList: M
                } = ag((0, S.N)(e => {
                    let {
                        defaultIsGroupExpanded: t,
                        toggleAllGroups: l,
                        nocsList: i,
                        disciplinesList: n
                    } = e;
                    return {
                        defaultIsGroupExpanded: t,
                        toggleAllGroups: l,
                        nocsList: i,
                        disciplinesList: n
                    }
                })), F = (0, w.useCallback)(() => {
                    let e = Object.values(at.constants.dailySchedule.filters);
                    p.filter(t => e.includes(t.name)).forEach(e => {
                        h({
                            name: e.name,
                            values: [at.constants.allItems]
                        })
                    }), rP()
                }, [p]), {
                    translate: O
                } = (0, l1.$G)(), B = () => {
                    v(!u), E(!u)
                }, L = "daily_schedule_filter_label_all_sports", z = "daily_schedule_filter_label_all_events", j = "daily_schedule_filter_label_all_nocs", A = "daily_schedule_filter_label_all_venues", W = p.some(e => e.name === at.constants.dailySchedule.filters.medal), H = O(W ? "daily_schedule_filter_by_medal_remove_label" : "daily_schedule_filter_by_medal_label"), G = O(l ? "daily_schedule_filter_by_my_schedule_remove_label" : "daily_schedule_filter_by_my_schedule_label"), X = O(u ? "filters_panel_collapse_label" : "filters_panel_expand_label"), P = O("filters_panel_applied_filters_number_label");
                return (0, b.BX)(b.HY, {
                    children: [(0, b.tZ)(J, {
                        id: at.constants.dailySchedule.html.filterRootDomId,
                        tx: o,
                        className: "filters-bar",
                        children: (0, b.BX)(r$, {
                            children: [(0, b.BX)(a4, {
                                className: "filters-container",
                                children: [(0, b.BX)(a5, {
                                    className: "left-group",
                                    children: [(0, b.tZ)(rW, {
                                        rows: t,
                                        isDisplayingLocalTimeZone: s,
                                        enableDisabledCalendarDays: r,
                                        onCompetitionDayClick: d,
                                        initialFilterDays: T,
                                        filterDaysEndpoint: x,
                                        languageCode: c
                                    }), (0, b.tZ)(ds, {
                                        favourites: n,
                                        nocsList: R,
                                        nocFilterName: at.constants.dailySchedule.filters.noc,
                                        disciplinesList: M,
                                        disciplineFilterName: at.constants.dailySchedule.filters.discipline,
                                        selectName: at.constants.dailySchedule.favourites,
                                        clickOnSelectEventName: at.constants.misc.events.clickOnFavouriteButton
                                    }), (0, b.tZ)(n7, {
                                        id: at.constants.dailySchedule.filters.medal,
                                        title: H,
                                        "aria-label": H,
                                        "aria-pressed": W,
                                        iconName: at.constants.icons.medal,
                                        stateName: at.constants.dailySchedule.filters.medal,
                                        slice: "filter",
                                        customTheme: a$,
                                        iconWidth: 24,
                                        iconHeight: 24
                                    }), (0, b.tZ)(n7, {
                                        "data-testid": "saveToMyScheduleFilterButton",
                                        id: at.constants.dailySchedule.filters.saved,
                                        title: G,
                                        "aria-label": G,
                                        "aria-pressed": l,
                                        iconName: l ? at.constants.icons.bookmarkFilled : at.constants.icons.bookmarkBordered,
                                        stateName: at.constants.dailySchedule.filters.saved,
                                        slice: "filter",
                                        customTheme: aU,
                                        iconWidth: 24,
                                        iconHeight: 24
                                    })]
                                }), (0, b.BX)(a5, {
                                    className: "right-group",
                                    children: [(0, b.tZ)(rX, {
                                        hidden: i,
                                        isExpanded: k,
                                        onClick: N,
                                        customTheme: a$
                                    }), (0, b.BX)(J, {
                                        tx: aY.container,
                                        children: [!!m && (0, b.tZ)(J, {
                                            tx: aY.counter,
                                            className: "filters-counter",
                                            children: (0, b.tZ)($, {
                                                "aria-label": (0, l1.wT)(P, [{
                                                    placeholder: "{0}",
                                                    replacement: m.toString()
                                                }]),
                                                children: m
                                            })
                                        }), (0, b.tZ)(n3, {
                                            id: at.constants.settings.collapsibleFilterBar,
                                            className: "filterToggle",
                                            iconName: "filterList",
                                            iconAlt: X,
                                            title: X,
                                            "aria-pressed": u,
                                            active: u || !!m,
                                            onIconButtonClick: B,
                                            customTheme: aY,
                                            "data-testid": "extrasettings"
                                        })]
                                    })]
                                })]
                            }), !i && (0, b.tZ)(a8, {
                                isFilterBarExpanded: u,
                                children: (0, b.BX)(a3, {
                                    children: [(0, b.tZ)(dy, {
                                        initialDisciplines: _,
                                        disciplinesEndpoint: g,
                                        disciplinesFilterName: at.constants.dailySchedule.filters.discipline,
                                        disciplinesSelectName: at.constants.dailySchedule.selects.discipline,
                                        allDisciplinesItemsTranslation: L,
                                        eventsFilterName: at.constants.dailySchedule.filters.disciplineEvent,
                                        eventsSelectName: at.constants.dailySchedule.selects.disciplineEvent,
                                        allEventsItemsTranslation: z,
                                        updateStore: D,
                                        a11yLabel: at.constants.filters.a11yLabels.discipline
                                    }), (0, b.tZ)(de, {
                                        initialItems: I,
                                        endpoint: f,
                                        filterName: at.constants.dailySchedule.filters.noc,
                                        selectName: at.constants.dailySchedule.selects.noc,
                                        allItemsTranslation: j,
                                        updateStore: Z,
                                        a11yLabel: at.constants.filters.a11yLabels.noc,
                                        showLongNames: !0
                                    }), (0, b.tZ)(de, {
                                        initialItems: C,
                                        endpoint: y,
                                        filterName: at.constants.dailySchedule.filters.venue,
                                        selectName: at.constants.dailySchedule.selects.venue,
                                        allItemsTranslation: A,
                                        a11yLabel: at.constants.filters.a11yLabels.venue
                                    }), (0, b.tZ)(ee, {
                                        "data-testid": "resetFilters",
                                        tx: { ...aV.container
                                        },
                                        onClick: F,
                                        className: "reset-filters",
                                        children: (0, b.tZ)($, {
                                            variant: "ui10",
                                            children: O("cta_reset_filters")
                                        })
                                    }), (0, b.tZ)(rG, {})]
                                })
                            })]
                        })
                    }), i && u && (0, b.tZ)(r0, {
                        filters: [{
                            type: at.constants.filterTypes.disciplineAndEvent,
                            initialItems: _,
                            endpoint: g,
                            filterName: at.constants.dailySchedule.filters.discipline,
                            allItemsTranslation: L,
                            updateStore: D,
                            eventsFilterName: at.constants.dailySchedule.filters.disciplineEvent,
                            allEventsTranslation: z,
                            a11yLabel: at.constants.filters.a11yLabels.discipline
                        }, {
                            type: at.constants.filterTypes.noc,
                            initialItems: I,
                            endpoint: f,
                            filterName: at.constants.dailySchedule.filters.noc,
                            allItemsTranslation: j,
                            updateStore: Z,
                            a11yLabel: at.constants.filters.a11yLabels.noc,
                            showLongNames: !0
                        }, {
                            type: at.constants.filterTypes.venue,
                            initialItems: C,
                            endpoint: y,
                            filterName: at.constants.dailySchedule.filters.venue,
                            allItemsTranslation: A,
                            a11yLabel: at.constants.filters.a11yLabels.venue
                        }],
                        showTimezone: !0,
                        showExpandAll: !0,
                        theme: aJ,
                        filterModalTx: a,
                        onClose: B
                    })]
                })
            };
            let rV = (0, _.Z)("div", {
                target: "eblze0o0"
            })("display:flex;justify-content:center;align-items:center;padding:8px;color:", F.colors.info500, ";&[data-loading='0']{padding:0;}");
            var rq = e => {
                let {
                    isLoading: t
                } = e;
                return (0, b.tZ)(rV, {
                    "data-loading": Number(t),
                    children: t && (0, b.tZ)(tA, {})
                })
            };
            let rY = (e, t, l) => {
                    var i;
                    if (!t && l !== at.constants.allItems || t && t !== (null === (i = e.values) || void 0 === i ? void 0 : i[0])) return e
                },
                rJ = (e, t) => {
                    var l;
                    let i = e.find(e => e.name === t);
                    if (i && (null === (l = i.values) || void 0 === l ? void 0 : l[0]) !== at.constants.allItems) return {
                        name: t,
                        values: [at.constants.allItems]
                    }
                },
                rK = e => {
                    let {
                        isExpanded: t,
                        onToggleChange: l
                    } = e, {
                        translate: i
                    } = (0, l1.$G)(), n = i("daily_schedule_expand_groupings_switcher");
                    return (0, b.BX)(rQ, {
                        id: at.constants.dailySchedule.expandAll.toggleLabelId,
                        "data-checked": t,
                        htmlFor: at.constants.dailySchedule.expandAll.toggleId,
                        className: "expand-all-toggle",
                        children: [(0, b.tZ)($, {
                            as: "span",
                            variant: "ui2",
                            style: {
                                margin: 0
                            },
                            className: "expand-all-toggle__label ".concat(t ? "expand-all-toggle__label--active" : "").trimEnd(),
                            children: n
                        }), (0, b.tZ)(tB, {
                            id: at.constants.dailySchedule.expandAll.toggleId,
                            activeLeft: !1,
                            onToggleChange: l,
                            checked: t,
                            customTheme: aq,
                            "aria-label": n
                        })]
                    })
                },
                rQ = (0, _.Z)("label", {
                    target: "eti41g00"
                })("box-sizing:border-box;width:100%;overflow:hidden;display:flex;flex:row wrap;justify-content:space-between;&:not([data-checked='true']) > span{color:", F.colors.gray600, ";}");
            var r0 = e => {
                var t, l, i, n, o, a, d, r, s, c, u, v, p, h, m, g, y;
                let {
                    filters: f,
                    showTimezone: x,
                    showExpandAll: _,
                    theme: I,
                    filterModalTx: C,
                    onClose: T
                } = e, {
                    filters: D,
                    updateFilter: Z
                } = (0, n6.$J)(), {
                    translate: E
                } = (0, l1.$G)(), [k, N] = (0, w.useState)([]), [R, M] = (0, w.useState)(0), {
                    initialIsExpandAllChecked: F,
                    toggleAllGroups: O
                } = ag((0, S.N)(e => {
                    let {
                        defaultIsGroupExpanded: t,
                        toggleAllGroups: l
                    } = e;
                    return {
                        initialIsExpandAllChecked: t,
                        toggleAllGroups: l
                    }
                })), [B, L] = (0, w.useState)(F), z = e => {
                    e.forEach(e => {
                        N(t => {
                            var l, i, n;
                            let o = t.filter(t => t.name !== e.name),
                                a = null === (i = D.find(t => t.name === e.name)) || void 0 === i ? void 0 : null === (l = i.values) || void 0 === l ? void 0 : l[0],
                                d = rY(e, a, null === (n = e.values) || void 0 === n ? void 0 : n[0]);
                            return d ? [...o, d] : o
                        })
                    })
                }, j = () => {
                    let e = new CustomEvent(at.constants.eventFiltersForIntegrator.resetFiltersMobileEventName);
                    document.dispatchEvent(e)
                }, A = (0, w.useMemo)(() => {
                    let e = !0;
                    return k.forEach(t => {
                        var l;
                        (null === (l = t.values) || void 0 === l ? void 0 : l[0]) !== at.constants.allItems && (e = !1)
                    }), D.forEach(t => {
                        var l, i, n;
                        t.name !== at.constants.dailySchedule.filters.day && (null === (l = t.values) || void 0 === l ? void 0 : l[0]) !== at.constants.allItems && (null === (n = k.find(e => e.name === t.name)) || void 0 === n ? void 0 : null === (i = n.values) || void 0 === i ? void 0 : i[0]) !== at.constants.allItems && (e = !1)
                    }), e
                }, [k, D]), W = k.length > 0 || B !== F, H = { ...null == I ? void 0 : I.container,
                    ...C
                };
                return (0, b.tZ)(b.HY, {
                    children: (0, dw.createPortal)((0, b.BX)(o_, {
                        theme: H,
                        children: [(0, b.tZ)(a7, {}), (0, b.tZ)(oC, {
                            theme: null == I ? void 0 : null === (t = I.header) || void 0 === t ? void 0 : t.container,
                            children: (0, b.BX)(b.HY, {
                                children: [(0, b.BX)("div", {
                                    className: "filters-panel__title-container",
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        width: "100%"
                                    },
                                    children: [(0, b.tZ)(K, {
                                        variant: null === (i = I.header) || void 0 === i ? void 0 : null === (l = i.title) || void 0 === l ? void 0 : l.typography,
                                        tx: null === (o = I.header) || void 0 === o ? void 0 : null === (n = o.title) || void 0 === n ? void 0 : n.style,
                                        className: "filters-panel__title",
                                        children: E("daily_schedule_filters_panel_title")
                                    }), (0, b.tZ)(K, {
                                        variant: null === (d = I.header) || void 0 === d ? void 0 : null === (a = d.subTitle) || void 0 === a ? void 0 : a.typography,
                                        tx: null === (s = I.header) || void 0 === s ? void 0 : null === (r = s.subTitle) || void 0 === r ? void 0 : r.style,
                                        className: "filters-panel__sub-title",
                                        children: E("daily_schedule_filters_panel_subtitle")
                                    })]
                                }), (0, b.tZ)(J, {
                                    className: "filters-panel__close-icon",
                                    tx: null === (c = I.header) || void 0 === c ? void 0 : c.iconContainer,
                                    children: (0, b.tZ)(n3, {
                                        id: at.constants.icons.selectClear,
                                        iconName: "selectClear",
                                        title: E("filters_panel_close_label"),
                                        onIconButtonClick: T,
                                        customTheme: aP,
                                        "data-testid": "closeFiltersPanel",
                                        autoFocus: !0
                                    })
                                })]
                            })
                        }), (0, b.BX)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                flexGrow: 1
                            },
                            children: [(0, b.BX)(oT, {
                                theme: null == I ? void 0 : null === (u = I.body) || void 0 === u ? void 0 : u.container,
                                children: [(0, b.tZ)(J, {
                                    tx: null === (v = I.body) || void 0 === v ? void 0 : v.resetContainer,
                                    children: (0, b.tZ)(a1, {
                                        onClick: () => {
                                            M(R + 1);
                                            let e = [];
                                            f.forEach(t => {
                                                let {
                                                    filterName: l,
                                                    eventsFilterName: i
                                                } = t, n = rJ(D, l);
                                                n && e.push(n);
                                                let o = rJ(D, i);
                                                o && e.push(o)
                                            }), N(e), B !== F && L(F), j()
                                        },
                                        variant: A ? "outlined" : "contained",
                                        disabled: A,
                                        tx: null === (p = I.body) || void 0 === p ? void 0 : p.reset,
                                        "data-testid": "resetFilters",
                                        className: "reset-filters ".concat(A ? "" : "reset-filters--active").trimEnd(),
                                        children: E("cta_reset_filters")
                                    })
                                }), f.map(e => (0, b.tZ)(dC, {
                                    fluid: !0,
                                    filterSetting: e,
                                    filterUpdates: k,
                                    resetCount: R,
                                    handleFilterClick: z
                                }, e.filterName)), x && (0, b.BX)(b.HY, {
                                    children: [(0, b.tZ)(J, {
                                        tx: null == I ? void 0 : null === (h = I.body) || void 0 === h ? void 0 : h.divider
                                    }), (0, b.tZ)("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "center"
                                        },
                                        children: (0, b.tZ)(rG, {})
                                    })]
                                }), _ && (0, b.BX)(b.HY, {
                                    children: [(0, b.tZ)(J, {
                                        tx: null == I ? void 0 : null === (m = I.body) || void 0 === m ? void 0 : m.divider
                                    }), (0, b.tZ)("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "center"
                                        },
                                        children: (0, b.tZ)(rK, {
                                            isExpanded: B,
                                            onToggleChange: e => {
                                                L(e.active)
                                            }
                                        })
                                    })]
                                })]
                            }), (0, b.tZ)(oZ, {
                                theme: null == I ? void 0 : null === (g = I.footer) || void 0 === g ? void 0 : g.container,
                                children: (0, b.BX)(a1, {
                                    variant: W ? "contained" : "outlined",
                                    onClick: () => {
                                        k.forEach(e => {
                                            Z({
                                                name: e.name,
                                                values: e.values
                                            })
                                        }), B !== F && O(), T()
                                    },
                                    tx: null == I ? void 0 : null === (y = I.footer) || void 0 === y ? void 0 : y.cta,
                                    "data-testid": "applyFilters",
                                    className: "apply-filters ".concat(W ? "apply-filters--active" : "").trimEnd(),
                                    children: [E("cta_apply_filters"), (0, b.tZ)(dI(), {
                                        className: "apply-filters-icon",
                                        width: 41,
                                        height: 48,
                                        alt: E("cta_apply_filters"),
                                        src: "https://gstatic.olympics.com/s1/t_original/static/srm/paris-2024/buttonArrow"
                                    })]
                                })
                            })]
                        })]
                    }), document.body)
                })
            };
            let r1 = () => {
                    let [e, t] = (0, w.useState)(!0);
                    return (0, w.useEffect)(() => {
                        t(!1)
                    }, []), e
                },
                r2 = e => {
                    let t = r1();
                    return (0, b.tZ)(b.HY, {
                        children: !t && e.children
                    })
                };
            var r4 = e => {
                    let {
                        showModal: t,
                        favourites: l,
                        handleCloseRow: i,
                        tx: n,
                        filterModalTx: o
                    } = e, [a, d] = (0, w.useState)(!1), {
                        filters: r,
                        updateFilter: s
                    } = (0, n6.$J)(), {
                        appliedMedalsFiltersCount: c
                    } = aD(r), {
                        filterDisciplinesEndpoint: u,
                        filterEventCategoriesEndpoint: v,
                        filterNocsEndpoint: p,
                        initialFilterDisciplines: h,
                        initialFilterEventCategories: m,
                        initialFilterNocs: g
                    } = ax(), {
                        defaultIsEntityExpanded: y,
                        toggleAllEntities: f,
                        nocsList: x,
                        disciplinesList: _,
                        updateNocsList: I,
                        updateDisciplinesList: C
                    } = df((0, S.N)(e => {
                        let {
                            defaultIsEntityExpanded: t,
                            toggleAllEntities: l,
                            nocsList: i,
                            disciplinesList: n,
                            updateNocsList: o,
                            updateDisciplinesList: a
                        } = e;
                        return {
                            defaultIsEntityExpanded: t,
                            toggleAllEntities: l,
                            nocsList: i,
                            disciplinesList: n,
                            updateNocsList: o,
                            updateDisciplinesList: a
                        }
                    })), {
                        translate: T
                    } = (0, l1.$G)(), D = (0, w.useMemo)(() => [{
                        id: "Gold",
                        item: T("medal_table_sort_by_gold_medals")
                    }, {
                        id: "Total Medals",
                        item: T("medal_table_sort_by_total_medals")
                    }, {
                        id: "Alphabetical",
                        item: T("medal_table_sort_by_alphabetical")
                    }, {
                        id: "Protocol",
                        item: T("medal_table_sort_by_protocol_order")
                    }], [T]), Z = () => {
                        d(e => !e)
                    }, E = (0, w.useCallback)(() => {
                        let e = Object.values(at.constants.medalsTable.filters);
                        r.filter(t => e.includes(t.name)).forEach(e => {
                            s({
                                name: e.name,
                                values: [at.constants.allItems]
                            })
                        }), rP()
                    }, [r]);
                    db({
                        widget: "medals"
                    });
                    let k = "medal_table_filter_label_all_nocs",
                        N = "medal_table_filter_label_all_sports",
                        R = "medal_table_filter_label_all_categories",
                        M = a ? T("filters_panel_collapse_label") : T("filters_panel_expand_label"),
                        F = T("filters_panel_applied_filters_number_label");
                    return (0, b.BX)(b.HY, {
                        children: [(0, b.BX)(a2, {
                            tx: n,
                            className: "filters-bar",
                            children: [(0, b.BX)(a4, {
                                children: [(0, b.tZ)(ds, {
                                    favourites: l,
                                    nocsList: x,
                                    nocFilterName: at.constants.medalsTable.filters.noc,
                                    disciplinesList: _,
                                    disciplineFilterName: at.constants.medalsTable.filters.discipline,
                                    selectName: at.constants.medalsTable.favourites,
                                    clickOnSelectEventName: at.constants.misc.events.clickOnFavouriteButton
                                }), (0, b.BX)(a5, {
                                    children: [(0, b.tZ)(rX, {
                                        collapsedI18nKey: "medal_table_expand_rows",
                                        expandedI18nKey: "medal_table_collapse_rows",
                                        isExpanded: y,
                                        onClick: f,
                                        customTheme: a$
                                    }), (0, b.tZ)(r2, {
                                        children: (0, b.tZ)(dc, {
                                            items: D,
                                            title: T("medal_table_sort_by_label"),
                                            sortingName: at.constants.medalsTable.sorting,
                                            selectName: at.constants.medalsTable.selects.sorting,
                                            defaultPosition: 1,
                                            onSelectClick: i
                                        })
                                    }), (0, b.BX)(J, {
                                        tx: aY.container,
                                        children: [!!c && (0, b.tZ)(J, {
                                            tx: aY.counter,
                                            className: "filters-counter",
                                            children: (0, b.tZ)($, {
                                                "aria-label": (0, l1.wT)(F, [{
                                                    placeholder: "{0}",
                                                    replacement: c.toString()
                                                }]),
                                                children: c
                                            })
                                        }), (0, b.tZ)(n3, {
                                            id: at.constants.settings.collapsibleFilterBar,
                                            iconName: "filterList",
                                            iconAlt: M,
                                            title: M,
                                            "aria-pressed": a,
                                            active: a || !!c,
                                            onIconButtonClick: Z,
                                            customTheme: aY,
                                            "data-testid": "extraSettings"
                                        })]
                                    })]
                                })]
                            }), !t && (0, b.tZ)(a8, {
                                isFilterBarExpanded: a,
                                children: (0, b.BX)(a3, {
                                    children: [(0, b.tZ)(de, {
                                        initialItems: g,
                                        endpoint: p,
                                        filterName: at.constants.medalsTable.filters.noc,
                                        selectName: at.constants.medalsTable.selects.noc,
                                        allItemsTranslation: k,
                                        updateStore: I,
                                        handleCloseRow: i,
                                        a11yLabel: at.constants.filters.a11yLabels.noc,
                                        showLongNames: !0,
                                        dataToExclude: [...at.constants.medalsTable.filtersToExclude.noc]
                                    }), (0, b.tZ)(de, {
                                        initialItems: h,
                                        endpoint: u,
                                        filterName: at.constants.medalsTable.filters.discipline,
                                        selectName: at.constants.medalsTable.selects.discipline,
                                        allItemsTranslation: N,
                                        updateStore: C,
                                        handleCloseRow: i,
                                        a11yLabel: at.constants.filters.a11yLabels.discipline
                                    }), (0, b.tZ)(de, {
                                        initialItems: m,
                                        endpoint: v,
                                        filterName: at.constants.medalsTable.filters.eventCategory,
                                        selectName: at.constants.medalsTable.selects.eventCategory,
                                        allItemsTranslation: R,
                                        handleCloseRow: i,
                                        a11yLabel: at.constants.filters.a11yLabels.events
                                    }), (0, b.tZ)(ee, {
                                        "data-testid": "resetFilters",
                                        tx: { ...aV.container
                                        },
                                        onClick: E,
                                        className: "reset-filters",
                                        children: (0, b.tZ)($, {
                                            variant: "ui10",
                                            children: T("cta_reset_filters")
                                        })
                                    })]
                                })
                            })]
                        }), t && a && (0, b.tZ)(r0, {
                            filters: [{
                                type: at.constants.filterTypes.noc,
                                initialItems: g,
                                endpoint: p,
                                filterName: at.constants.medalsTable.filters.noc,
                                allItemsTranslation: k,
                                updateStore: I,
                                a11yLabel: at.constants.filters.a11yLabels.noc,
                                showLongNames: !0
                            }, {
                                type: at.constants.filterTypes.discipline,
                                initialItems: h,
                                endpoint: u,
                                filterName: at.constants.medalsTable.filters.discipline,
                                allItemsTranslation: N,
                                updateStore: C,
                                a11yLabel: at.constants.filters.a11yLabels.discipline
                            }, {
                                type: at.constants.filterTypes.eventCategory,
                                initialItems: m,
                                endpoint: v,
                                filterName: at.constants.medalsTable.filters.eventCategory,
                                allItemsTranslation: R,
                                a11yLabel: at.constants.filters.a11yLabels.events
                            }],
                            theme: aJ,
                            filterModalTx: o,
                            onClose: () => {
                                i(), Z()
                            }
                        })]
                    })
                },
                r8 = e => {
                    let t = {
                        gold: 0,
                        silver: 0,
                        bronze: 0,
                        total: 0
                    };
                    return e.forEach(e => {
                        e.medalsNumber.forEach(e => {
                            t.gold += e.gold, t.silver += e.silver, t.bronze += e.bronze, t.total += e.total
                        })
                    }), t
                },
                r3 = e => {
                    switch (e) {
                        case "W":
                            return "Women";
                        case "M":
                            return "Men";
                        case "O":
                            return "Open";
                        default:
                            return "Mixed"
                    }
                };
            let r5 = (e, t, l) => {
                    if (!e) return t ? null == l ? void 0 : l.at(0) : at.constants.medalsDataTotalType
                },
                r6 = (e, t, l) => {
                    if (l) {
                        var i, n, o, a, d;
                        let e = l === at.constants.medalsDataTotalType ? at.constants.medalsDataTotalType : r3(l),
                            r = null === (i = t.medalsNumber) || void 0 === i ? void 0 : i.find(t => t.type === e);
                        return {
                            gold: null !== (n = null == r ? void 0 : r.gold) && void 0 !== n ? n : 0,
                            silver: null !== (o = null == r ? void 0 : r.silver) && void 0 !== o ? o : 0,
                            bronze: null !== (a = null == r ? void 0 : r.bronze) && void 0 !== a ? a : 0,
                            total: null !== (d = null == r ? void 0 : r.total) && void 0 !== d ? d : 0
                        }
                    }
                    return r8(e)
                },
                r7 = (e, t, l) => {
                    var i;
                    let n = e && e.length > 0 && !e.includes(at.constants.allItems),
                        o = t && t.length > 0 && !t.includes(at.constants.allItems),
                        a = l && l.length > 0 && !l.includes(at.constants.allItems);
                    return {
                        categoryFilterId: r5(o, a, l),
                        activeFilter: null !== (i = null != n ? n : o) && void 0 !== i ? i : a
                    }
                },
                r9 = e => {
                    var t, l, i;
                    return {
                        nocFilter: null === (t = e.find(e => e.name === at.constants.medalsTable.filters.noc)) || void 0 === t ? void 0 : t.values,
                        disciplineFilter: null === (l = e.find(e => e.name === at.constants.medalsTable.filters.discipline)) || void 0 === l ? void 0 : l.values,
                        eventCategoryFilter: null === (i = e.find(e => e.name === at.constants.medalsTable.filters.eventCategory)) || void 0 === i ? void 0 : i.values
                    }
                },
                se = e => ({
                    sorting: e.find(e => e.name === at.constants.medalsTable.sorting)
                }),
                st = (e, t, l) => {
                    if ((!e || e.includes(at.constants.allItems)) && (!t || t.includes(at.constants.allItems))) return null == l ? void 0 : l.sortBy
                },
                sl = (e, t) => {
                    let {
                        isWideWidget: l
                    } = t, i = e(l ? "medal_table_header_rank_long" : "medal_table_header_rank_short");
                    return {
                        noResultsCourtesyMessage1: e("msg_medals_no_medals_line_1"),
                        noResultsCourtesyMessage2: e("msg_medals_no_medals_line_2"),
                        noFilteredResultsCourtesyMessage1: e("msg_medals_filter_no_results_line_1"),
                        noFilteredResultsCourtesyMessage2: e("msg_medals_filter_no_results_line_2"),
                        favouriteNocIconTitle: e("medal_table_favourite_noc_icon"),
                        headerRank: i,
                        headerTeamsNoc: e("medal_table_header_teams_nocs"),
                        headerGoldAbbr: e("common_gold_abbr"),
                        headerSilverAbbr: e("common_silver_abbr"),
                        headerBronzeAbbr: e("common_bronze_abbr"),
                        headerGold: e("common_gold_medals"),
                        headerSilver: e("common_silver_medals"),
                        headerBronze: e("common_bronze_medals"),
                        headerTotal: e("table_header_total_medals"),
                        competitorLinkTitle: e("medal_table_competitor_link_title"),
                        unofficialMedalTitle: e("medal_unofficial_alert_icon"),
                        completedEvents: e("medal_table_completed_events_label"),
                        completedEventsOf: e("medal_table_completed_events_of_label"),
                        lastUpdated: e("medal_table_last_updated_label"),
                        userLocalTime: e("medal_table_last_updated_user_local_time"),
                        openContextualMenu: e("medal_table_medal_open_contextual_menu"),
                        expandNoc: e("medal_table_expand_noc"),
                        collapseNoc: e("medal_table_collapse_noc"),
                        expandDiscipline: e("medal_table_expand_discipline"),
                        collapseDiscipline: e("medal_table_collapse_discipline"),
                        commonGold: e("common_gold_medal"),
                        commonSilver: e("common_silver_medal"),
                        commonBronze: e("common_bronze_medal"),
                        flagIconTitle: e("flag_icon_title")
                    }
                };
            (a = m || (m = {})).ME_GOLD = "gold", a.ME_SILVER = "silver", a.ME_BRONZE = "bronze";
            let si = e => "bronze" === e ? {
                gold: 0,
                silver: 0,
                bronze: 1,
                total: 1
            } : "silver" === e ? {
                gold: 0,
                silver: 1,
                bronze: 0,
                total: 1
            } : {
                gold: 1,
                silver: 0,
                bronze: 0,
                total: 1
            };
            var sn = e => {
                let {
                    medalsData: t,
                    eventInfoData: l
                } = e, i = [];
                return null == t || t.forEach(e => {
                    var t;
                    let l = [],
                        n = {
                            gold: 0,
                            silver: 0,
                            bronze: 0,
                            total: 0
                        };
                    null == e || null === (t = e.disciplines) || void 0 === t || t.forEach(e => {
                        var t;
                        let i = {
                            Men: {
                                type: "Men",
                                gold: 0,
                                silver: 0,
                                bronze: 0,
                                total: 0
                            },
                            Women: {
                                type: "Women",
                                gold: 0,
                                silver: 0,
                                bronze: 0,
                                total: 0
                            },
                            Open: {
                                type: "Open",
                                gold: 0,
                                silver: 0,
                                bronze: 0,
                                total: 0
                            },
                            Mixed: {
                                type: "Mixed",
                                gold: 0,
                                silver: 0,
                                bronze: 0,
                                total: 0
                            }
                        };
                        null === (t = e.medalWinners) || void 0 === t || t.forEach(e => {
                            if (!e.eventCategory) return;
                            let t = m[e.medalType],
                                l = si(t);
                            i[e.eventCategory][t] += l[t], i[e.eventCategory].total += l[t], n[t] += l[t], n.total += l[t]
                        });
                        let o = [i.Men, i.Women, i.Open, i.Mixed];
                        l.push({ ...e,
                            medalsNumber: o
                        })
                    }), i.push({ ...e,
                        enhancedDisciplines: l,
                        nocRowMedals: n
                    })
                }), {
                    enhancedMedalsData: i,
                    eventInfoData: l
                }
            };
            (d = g || (g = {})).Asc = "Asc", d.Desc = "Desc";
            let so = (e, t, l) => e < t ? "Asc" === l ? -1 : 1 : e > t ? "Asc" === l ? 1 : -1 : 0;
            (r = y || (y = {})).Total = "Total Medals", r.Gold = "Gold", r.Silver = "Silver", r.Bronze = "Bronze", r.Alphabetical = "Alphabetical", r.Protocol = "Protocol";
            let sa = e => e.slice(0).sort((e, t) => so(e.protocolOrder, t.protocolOrder, "Asc")),
                sd = e => e.slice(0).sort((e, t) => so(e.organisation, t.organisation, "Asc")),
                sr = e => e.slice(0).sort((e, t) => {
                    let l = so(e.longNameOrder, t.longNameOrder, "Asc");
                    return 0 === l ? so(e.description, t.description, "Asc") : l
                }),
                ss = e => e.slice(0).sort((e, t) => so(e.nocRowMedals.total, t.nocRowMedals.total, "Desc") || so(e.nocRowMedals.gold, t.nocRowMedals.gold, "Desc") || so(e.nocRowMedals.silver, t.nocRowMedals.silver, "Desc") || so(e.nocRowMedals.bronze, t.nocRowMedals.bronze, "Desc") || so(e.organisation, t.organisation, "Asc")),
                sc = (e, t) => e.slice(0).sort((e, l) => so(e.nocRowMedals[t[0]], l.nocRowMedals[t[0]], "Desc") || so(e.nocRowMedals[t[1]], l.nocRowMedals[t[1]], "Desc") || so(e.nocRowMedals[t[2]], l.nocRowMedals[t[2]], "Desc") || so(e.organisation, l.organisation, "Asc"));
            var su = (e, t, l) => (null == l ? void 0 : l.sortBy) === "Protocol" ? sa(e) : (null == l ? void 0 : l.sortBy) === "Alphabetical" ? t ? sd(e) : sr(e) : (null == l ? void 0 : l.sortBy) === "Total Medals" ? ss(e) : (null == l ? void 0 : l.sortBy) === "Gold" ? sc(e, ["Gold".toLocaleLowerCase(), "Silver".toLocaleLowerCase(), "Bronze".toLocaleLowerCase()]) : (null == l ? void 0 : l.sortBy) === "Silver" ? sc(e, ["Silver".toLocaleLowerCase(), "Gold".toLocaleLowerCase(), "Bronze".toLocaleLowerCase()]) : (null == l ? void 0 : l.sortBy) === "Bronze" ? sc(e, ["Bronze".toLocaleLowerCase(), "Gold".toLocaleLowerCase(), "Silver".toLocaleLowerCase()]) : e,
                sv = e => {
                    let {
                        medalsData: t,
                        disciplineFilter: l,
                        eventCategoryFilter: i
                    } = e, n = (0, w.useCallback)(e => {
                        if ((null == i ? void 0 : i.includes(at.constants.allItems)) || (null == i ? void 0 : i.length) === 0 || !i) {
                            if (r8([e]).total > 0) return e
                        } else {
                            let l = i.map(e => r3(e)),
                                n = e.medalsNumber.filter(e => l.includes(e.type)).filter(e => 0 !== e.total);
                            if (n.length > 0) {
                                var t;
                                let i = { ...e
                                    },
                                    o = null === (t = e.medalWinners) || void 0 === t ? void 0 : t.filter(e => l.includes(e.eventCategory));
                                return i.medalsNumber = n, i.medalWinners = o, i
                            }
                        }
                    }, [i]);
                    return {
                        enhancedMedalsData: (0, w.useMemo)(() => {
                            var e;
                            return (null == t ? void 0 : null === (e = t.medalStandings) || void 0 === e ? void 0 : e.medalsTable) && 0 !== t.medalStandings.medalsTable.length ? sn({
                                medalsData: t.medalStandings.medalsTable
                            }).enhancedMedalsData : []
                        }, [t]),
                        medalsEventInfo: (0, w.useMemo)(() => {
                            var e;
                            return (null == t ? void 0 : null === (e = t.medalStandings) || void 0 === e ? void 0 : e.eventInfo) ? sn({
                                medalsData: [],
                                eventInfoData: t.medalStandings.eventInfo
                            }).eventInfoData : {}
                        }, [t]),
                        getFilteredDisciplines: (0, w.useCallback)(e => {
                            let t = [];
                            return e.enhancedDisciplines.forEach(e => {
                                if ((null == l ? void 0 : l.includes(at.constants.allItems)) || (null == l ? void 0 : l.includes(e.code)) || (null == l ? void 0 : l.length) === 0 || !l) {
                                    let l = n(e);
                                    l && t.push(l)
                                }
                            }), t
                        }, [l, n])
                    }
                },
                sp = e => {
                    let {
                        medalsData: t,
                        nocFilter: l,
                        disciplineFilter: i,
                        eventCategoryFilter: n,
                        categoryFilterId: o,
                        width: a,
                        sorting: d,
                        favouriteNocs: r
                    } = e, {
                        enhancedMedalsData: s,
                        medalsEventInfo: c,
                        getFilteredDisciplines: u
                    } = sv({
                        medalsData: t,
                        disciplineFilter: i,
                        eventCategoryFilter: n
                    }), v = (0, w.useCallback)(e => {
                        let t = [];
                        return e.forEach(e => {
                            var i;
                            if ((null == l ? void 0 : l.includes(at.constants.allItems)) || (null == l ? void 0 : l.includes(e.organisation)) || (null == l ? void 0 : l.length) === 0 || !l || (null === (i = e.organisation) || void 0 === i ? void 0 : i.length) === 0) {
                                let l = u(e);
                                if (l.length > 0) {
                                    let i = r6(l, e, o),
                                        n = { ...e,
                                            enhancedDisciplines: l,
                                            nocRowMedals: i
                                        };
                                    t.push(n)
                                }
                            }
                        }), t
                    }, [u, l]);
                    return {
                        medalsTableData: (0, w.useMemo)(() => {
                            let e = s;
                            return (l || i || n) && (e = v(e)), e = (e = su(e, a < at.constants.mobileMaxResolution, d)).map(e => r.some(t => t.code === e.organisation) ? { ...e,
                                isFavourite: !0
                            } : e)
                        }, [s, l, i, n, o, d, a, r]),
                        medalsEventInfo: c
                    }
                };
            let sh = () => {
                    let e = (0, w.useContext)(aa);
                    if (!e) throw Error("useADV must be used within an ADVProvider");
                    return e.advConfig
                },
                sm = (0, _.Z)("div", {
                    target: "et0a8mi0"
                })("position:absolute;inset:0;background-color:transparent;z-index:10;height:100dvh;"),
                sg = () => {
                    let [e, t] = (0, w.useState)(!1), l = (0, w.useRef)(null), i = '[class*="SelectRoot"]', n = "aria-expanded", o = e => {
                        let t = e.querySelector("button");
                        return (null == t ? void 0 : t.getAttribute(n)) === "true"
                    };
                    return ((0, w.useEffect)(() => {
                        let e = new MutationObserver(() => {
                            Array.from(document.querySelectorAll(i)).some(o) ? (null !== l.current && (clearTimeout(l.current), l.current = null), t(!0)) : l.current = window.setTimeout(() => {
                                t(!1), l.current = null
                            }, 100)
                        });
                        return e.observe(document.body, {
                            subtree: !0,
                            attributes: !0,
                            attributeFilter: [n]
                        }), () => {
                            e.disconnect(), null !== l.current && clearTimeout(l.current)
                        }
                    }, []), e) ? (0, b.tZ)(sm, {
                        onClick: () => {
                            document.querySelectorAll(i).forEach(e => {
                                if (o(e)) {
                                    let t = e.querySelector("button");
                                    null == t || t.click()
                                }
                            })
                        },
                        "aria-hidden": "true",
                        role: "presentation"
                    }) : null
                };
            var sy = as(e => {
                var t, l, i;
                let {
                    medalsEndpoint: n,
                    customTheme: o,
                    pageCustomTheme: a = aZ,
                    initialMedals: d,
                    languageCode: r,
                    favourites: s,
                    urlConfig: c,
                    hideCompletedEvents: u,
                    hideLastUpdated: v,
                    disclaimerConfig: p,
                    footerBottomStory: h
                } = e, {
                    filters: m
                } = e, {
                    width: g
                } = iW(), y = sh(), f = !r1(), {
                    filters: x
                } = (0, n6.$J)(), {
                    sortings: _
                } = (0, n6.ec)(), {
                    nocFilter: I,
                    disciplineFilter: T,
                    eventCategoryFilter: D
                } = r9(x), {
                    categoryFilterId: Z,
                    activeFilter: E
                } = r7(I, T, D), {
                    sorting: k
                } = se(_), {
                    translate: N
                } = (0, l1.$G)(), {
                    noResultsCourtesyMessage1: R,
                    noResultsCourtesyMessage2: M,
                    noFilteredResultsCourtesyMessage1: F,
                    noFilteredResultsCourtesyMessage2: O,
                    ...B
                } = sl(N, {
                    isWideWidget: g > at.constants.mobileMaxResolution
                }), L = g < at.constants.mobileMaxResolution, {
                    data: z
                } = oP({
                    endpoint: n,
                    shouldFetch: !ak(null == m ? void 0 : null === (t = m.mainFilter) || void 0 === t ? void 0 : t.type) && !d,
                    initialData: d
                }), {
                    medalsTableData: j,
                    medalsEventInfo: A
                } = sp({
                    medalsData: z,
                    nocFilter: I,
                    disciplineFilter: T,
                    eventCategoryFilter: D,
                    categoryFilterId: Z,
                    width: g,
                    sorting: k,
                    favouriteNocs: null !== (l = null == s ? void 0 : s.favNocs) && void 0 !== l ? l : []
                }), {
                    toggleEntity: W,
                    eagerExpandableEntitiesState: H,
                    eagerDefaultIsEntityExpanded: G
                } = df((0, S.N)(e => {
                    let {
                        toggleEntity: t,
                        defaultIsEntityExpanded: l,
                        expandableEntitiesState: i
                    } = e;
                    return {
                        toggleEntity: t,
                        eagerDefaultIsEntityExpanded: l,
                        eagerExpandableEntitiesState: i
                    }
                })), X = (0, w.useDeferredValue)(G), P = (0, w.useDeferredValue)(H);
                aT({
                    widget: "medals"
                });
                let $ = (null == k ? void 0 : k.name) === at.constants.medalsTable.sorting ? null == k ? void 0 : k.sortBy : void 0;
                return (0, b.tZ)(ew, {
                    fonts: [{
                        family: "Rubik"
                    }],
                    children: (0, b.BX)(J, {
                        tx: null == a ? void 0 : a.mainContainer,
                        children: [(0, b.tZ)(sg, {}), (0, b.tZ)(sf, {
                            tx: null == a ? void 0 : a.header,
                            children: (0, b.tZ)(r4, {
                                showModal: L,
                                favourites: s,
                                handleCloseRow: C(),
                                tx: null == a ? void 0 : a.filterBar,
                                filterModalTx: null == a ? void 0 : a.filterModal
                            })
                        }), 0 === j.length && (0, b.tZ)(sx, {
                            children: E ? (0, b.BX)(b.HY, {
                                children: [(0, b.tZ)("p", {
                                    children: F
                                }), (0, b.tZ)("p", {
                                    children: O
                                })]
                            }) : (0, b.BX)(b.HY, {
                                children: [(0, b.tZ)("p", {
                                    children: R
                                }), (0, b.tZ)("p", {
                                    children: M
                                })]
                            })
                        }), j.length > 0 && (0, b.tZ)(n8, {
                            data: j,
                            eventInfo: A,
                            showMedalRank: st(T, D, k),
                            translations: B,
                            customTheme: o,
                            languageCode: r,
                            urlConfig: c,
                            hideCompletedEvents: u,
                            hideLastUpdated: v,
                            virtualized: !0,
                            virtualizedIncreaseViewportBy: 300,
                            virtualizedInitialItemCount: 20,
                            sortedBy: $,
                            defaultIsExpanded: X,
                            expandableEntities: P,
                            onExpandToggle: W,
                            advConfig: y && { ...y,
                                adRenderer: f && null !== (i = null == y ? void 0 : y.adRenderer) && void 0 !== i ? i : () => null
                            },
                            disclaimerConfig: p,
                            footerBottomStory: h
                        })]
                    })
                })
            });
            let sf = (0, _.Z)(J, {
                    target: "eqzhnaq0"
                })("display:flex;align-items:center;justify-content:center;width:100%;"),
                sx = (0, _.Z)("div", {
                    target: "eqzhnaq1"
                })("margin:3rem 0 4rem;text-align:center;"),
                sb = (0, n6.MT)(e => ({
                    nocsList: [],
                    disciplinesList: [],
                    updateNocsList: t => {
                        e(e => ({ ...e,
                            nocsList: t
                        }))
                    },
                    updateDisciplinesList: t => {
                        e(e => ({ ...e,
                            disciplinesList: t
                        }))
                    },
                    defaultIsEntityExpanded: !1,
                    expandableEntitiesState: {},
                    toggleEntity: t => {
                        e(e => ({
                            expandableEntitiesState: iy(t, {
                                expandableEntities: e.expandableEntitiesState,
                                defaultIsExpanded: e.defaultIsEntityExpanded
                            })
                        }))
                    },
                    toggleAllEntities: () => {
                        e(e => ({
                            expandableEntitiesState: {},
                            defaultIsEntityExpanded: !e.defaultIsEntityExpanded
                        }))
                    }
                }));
            var sw = e => {
                    let {
                        showModal: t,
                        favourites: l,
                        medallistsData: i,
                        handleCloseRow: n,
                        tx: o,
                        filterModalTx: a
                    } = e, [d, r] = (0, w.useState)(!1), {
                        filters: s,
                        updateFilter: c,
                        removeFilter: u
                    } = (0, n6.$J)(), {
                        appliedMedallistsFiltersCount: v
                    } = aD(s), {
                        filterDaysEndpoint: p,
                        filterDisciplinesEndpoint: h,
                        filterGendersEndpoint: m,
                        filterNocsEndpoint: g,
                        initialFilterDays: y,
                        initialFilterDisciplines: f,
                        initialFilterGenders: x,
                        initialFilterNocs: _
                    } = ax(), {
                        nocsList: I,
                        disciplinesList: C
                    } = sb(e => e), S = sb(e => e.updateNocsList), T = sb(e => e.updateDisciplinesList), {
                        defaultIsEntityExpanded: D,
                        toggleAllEntities: Z
                    } = sb(e => {
                        let {
                            toggleAllEntities: t,
                            defaultIsEntityExpanded: l
                        } = e;
                        return {
                            toggleAllEntities: t,
                            defaultIsEntityExpanded: l
                        }
                    }), {
                        translate: E
                    } = (0, l1.$G)(), k = (0, w.useMemo)(() => [{
                        id: "Total",
                        item: E("medalists_sort_by_total_medals"),
                        selected: !0
                    }, {
                        id: "Gold",
                        item: E("medalists_sort_by_gold_medals")
                    }, {
                        id: "Silver",
                        item: E("medalists_sort_by_silver_medals")
                    }, {
                        id: "Bronze",
                        item: E("medalists_sort_by_bronze_medals")
                    }, {
                        id: "AthleteName",
                        item: E("medalists_sort_by_athlete_names")
                    }, {
                        id: "Nocs",
                        item: E("medalists_sort_by_nocs")
                    }], [E]), N = (0, w.useCallback)(() => {
                        r(e => !e)
                    }, []), R = s.some(e => {
                        var t;
                        return e.name === at.constants.medallistTable.filters.day && (null === (t = e.values) || void 0 === t ? void 0 : t.length)
                    }), M = (0, w.useCallback)(() => {
                        let e = Object.values(at.constants.medallistTable.filters);
                        s.filter(t => e.includes(t.name)).forEach(e => {
                            e.name === at.constants.medallistTable.filters.day ? u(e.name) : c({
                                name: e.name,
                                values: [at.constants.allItems]
                            })
                        }), rP()
                    }, [s]);
                    db({
                        widget: "medallist"
                    });
                    let F = "medalists_filter_label_all_nocs",
                        O = "medalists_filter_label_all_sports",
                        B = "medalists_filter_label_all_events",
                        L = "medalists_filter_label_all_genders",
                        z = d ? E("filters_panel_collapse_label") : E("filters_panel_expand_label"),
                        j = E("filters_panel_applied_filters_number_label");
                    return (0, b.BX)(b.HY, {
                        children: [(0, b.BX)(a2, {
                            tx: o,
                            className: "filters-bar",
                            children: [(0, b.BX)(a4, {
                                children: [(0, b.BX)(a5, {
                                    children: [(0, b.tZ)(ds, {
                                        favourites: l,
                                        nocsList: I,
                                        nocFilterName: at.constants.medallistTable.filters.noc,
                                        disciplinesList: C,
                                        disciplineFilterName: at.constants.medallistTable.filters.discipline,
                                        selectName: at.constants.medallistTable.favourites,
                                        clickOnSelectEventName: at.constants.misc.events.clickOnFavouriteButton
                                    }), (0, b.tZ)(sV, {
                                        highlighted: R,
                                        medallistsData: i,
                                        initialFilterDays: y,
                                        filterDaysEndpoint: p,
                                        handleCloseRow: n,
                                        "data-testid": "DayFilter"
                                    })]
                                }), (0, b.BX)(a5, {
                                    children: [(0, b.tZ)(rX, {
                                        collapsedI18nKey: "medalists_expand_rows",
                                        expandedI18nKey: "medalists_collapse_rows",
                                        isExpanded: D,
                                        onClick: Z,
                                        customTheme: a$
                                    }), (0, b.tZ)(r2, {
                                        children: (0, b.tZ)(dc, {
                                            items: k,
                                            title: E("medalists_sort_by_label"),
                                            sortingName: at.constants.medallistTable.sorting,
                                            selectName: at.constants.medallistTable.selects.sorting,
                                            onSelectClick: n
                                        })
                                    }), (0, b.BX)(J, {
                                        tx: aY.container,
                                        children: [!!v && (0, b.tZ)(J, {
                                            tx: aY.counter,
                                            className: "filters-counter",
                                            children: (0, b.tZ)($, {
                                                "aria-label": (0, l1.wT)(j, [{
                                                    placeholder: "{0}",
                                                    replacement: v.toString()
                                                }]),
                                                children: v
                                            })
                                        }), (0, b.tZ)(n3, {
                                            id: at.constants.settings.collapsibleFilterBar,
                                            iconName: "filterList",
                                            iconAlt: z,
                                            title: z,
                                            "aria-pressed": d,
                                            active: d || !!v,
                                            onIconButtonClick: N,
                                            customTheme: aY,
                                            "data-testid": "extraSettings"
                                        })]
                                    })]
                                })]
                            }), !t && (0, b.tZ)(b.HY, {
                                children: (0, b.tZ)(a8, {
                                    isFilterBarExpanded: d,
                                    children: (0, b.BX)(a3, {
                                        children: [(0, b.tZ)(de, {
                                            initialItems: _,
                                            endpoint: g,
                                            filterName: at.constants.medallistTable.filters.noc,
                                            selectName: at.constants.medallistTable.selects.noc,
                                            allItemsTranslation: F,
                                            updateStore: S,
                                            handleCloseRow: n,
                                            a11yLabel: at.constants.filters.a11yLabels.noc,
                                            showLongNames: !0
                                        }), (0, b.tZ)(dy, {
                                            initialDisciplines: f,
                                            disciplinesEndpoint: h,
                                            disciplinesFilterName: at.constants.medallistTable.filters.discipline,
                                            disciplinesSelectName: at.constants.medallistTable.selects.discipline,
                                            allDisciplinesItemsTranslation: O,
                                            eventsFilterName: at.constants.medallistTable.filters.event,
                                            eventsSelectName: at.constants.medallistTable.selects.event,
                                            allEventsItemsTranslation: B,
                                            updateStore: T,
                                            handleCloseRow: n,
                                            a11yLabel: at.constants.filters.a11yLabels.discipline
                                        }), (0, b.tZ)(de, {
                                            initialItems: x,
                                            endpoint: m,
                                            filterName: at.constants.medallistTable.filters.gender,
                                            selectName: at.constants.medallistTable.selects.gender,
                                            allItemsTranslation: L,
                                            handleCloseRow: n,
                                            a11yLabel: at.constants.filters.a11yLabels.gender
                                        }), (0, b.tZ)(ee, {
                                            "data-testid": "resetFilters",
                                            tx: { ...aV.container
                                            },
                                            onClick: M,
                                            className: "reset-filters",
                                            children: (0, b.tZ)($, {
                                                variant: "ui10",
                                                children: E("cta_reset_filters")
                                            })
                                        })]
                                    })
                                })
                            })]
                        }), t && d && (0, b.tZ)(r0, {
                            filters: [{
                                type: at.constants.filterTypes.noc,
                                initialItems: _,
                                endpoint: g,
                                filterName: at.constants.medallistTable.filters.noc,
                                allItemsTranslation: F,
                                updateStore: S,
                                a11yLabel: at.constants.filters.a11yLabels.noc,
                                showLongNames: !0
                            }, {
                                type: at.constants.filterTypes.disciplineAndEvent,
                                initialItems: f,
                                endpoint: h,
                                filterName: at.constants.medallistTable.filters.discipline,
                                allItemsTranslation: O,
                                updateStore: T,
                                eventsFilterName: at.constants.medallistTable.filters.event,
                                allEventsTranslation: B,
                                a11yLabel: at.constants.filters.a11yLabels.discipline
                            }, {
                                type: at.constants.filterTypes.gender,
                                initialItems: x,
                                endpoint: m,
                                filterName: at.constants.medallistTable.filters.gender,
                                allItemsTranslation: L,
                                a11yLabel: at.constants.filters.a11yLabels.gender
                            }],
                            theme: aJ,
                            filterModalTx: a,
                            onClose: () => {
                                n(), N()
                            }
                        })]
                    })
                },
                s_ = e => {
                    var t;
                    let {
                        dates: l = {},
                        medallistsData: i,
                        venueTimeZone: n
                    } = e, o = [], a = null === (t = Object.keys(l)) || void 0 === t ? void 0 : t[0];
                    return a && (o = l[a].map(e => {
                        var t;
                        let l = null == i ? void 0 : null === (t = i.athletes) || void 0 === t ? void 0 : t.some(t => {
                            var l;
                            return null == t ? void 0 : null === (l = t.medals) || void 0 === l ? void 0 : l.some(t => t.date === e.id)
                        });
                        return {
                            date: e.id,
                            disabled: !l,
                            startOfDayMs: Y.ou.fromISO(e.id, {
                                zone: n
                            }).toMillis()
                        }
                    })), o
                },
                sI = (e, t) => e.map(e => {
                    let l = new Date(e.date).getMonth();
                    return { ...e,
                        month: t[l]
                    }
                }),
                sC = e => {
                    let {
                        initialFilterDays: t,
                        filterDaysEndpoint: l,
                        medallistsData: i
                    } = e, [n, o] = (0, w.useState)([]), a = ai(), {
                        data: d
                    } = oP({
                        endpoint: l,
                        shouldFetch: !t,
                        initialData: t
                    }), {
                        translate: r
                    } = (0, l1.$G)(), s = (0, w.useMemo)(() => [r("label_month_january_abbr"), r("label_month_february_abbr"), r("label_month_march_abbr"), r("label_month_april_abbr"), r("label_month_may_abbr"), r("label_month_june_abbr"), r("label_month_july_abbr"), r("label_month_august_abbr"), r("label_month_september_abbr"), r("label_month_october_abbr"), r("label_month_november_abbr"), r("label_month_december_abbr")].filter(Boolean), [r]);
                    return (0, w.useEffect)(() => {
                        d && i && o(s_({
                            dates: d,
                            medallistsData: i,
                            venueTimeZone: a
                        }))
                    }, [s, i, a]), (0, w.useEffect)(() => {
                        n.length && !n.some(e => e.month) && s.length && o(sI(n, s))
                    }, [n, s]), {
                        calendarDays: n
                    }
                };
            let sS = e => {
                    var t, l, i, n, o;
                    let a = null === (t = e.find(e => e.name === at.constants.medallistTable.filters.noc)) || void 0 === t ? void 0 : t.values,
                        d = null === (l = e.find(e => e.name === at.constants.medallistTable.filters.discipline)) || void 0 === l ? void 0 : l.values,
                        r = null === (i = e.find(e => e.name === at.constants.medallistTable.filters.event)) || void 0 === i ? void 0 : i.values,
                        s = null === (n = e.find(e => e.name === at.constants.medallistTable.filters.gender)) || void 0 === n ? void 0 : n.values,
                        c = null === (o = e.find(e => e.name === at.constants.medallistTable.filters.day)) || void 0 === o ? void 0 : o.values,
                        u = a && a.length > 0 && !a.includes(at.constants.allItems) || d && d.length > 0 && !d.includes(at.constants.allItems) || r && r.length > 0 && !r.includes(at.constants.allItems) || s && s.length > 0 && !s.includes(at.constants.allItems) || c && c.length > 0;
                    return {
                        nocFilter: a,
                        disciplineFilter: d,
                        eventFilter: r,
                        genderFilter: s,
                        dayFilter: c,
                        activeFilter: u
                    }
                },
                sT = e => ({
                    sorting: e.find(e => e.name === at.constants.medallistTable.sorting)
                }),
                sD = e => ({
                    headerMedalist: e("table_header_medalist"),
                    headerNoc: e("medalists_header_noc"),
                    headerGoldAbbr: e("common_gold_abbr"),
                    headerSilverAbbr: e("common_silver_abbr"),
                    headerBronzeAbbr: e("common_bronze_abbr"),
                    headerGold: e("common_gold_medals"),
                    headerSilver: e("common_silver_medals"),
                    headerBronze: e("common_bronze_medals"),
                    headerTotal: e("table_header_total_medals"),
                    athleteLinkTitle: e("medalists_athlete_link_title"),
                    eventLinkTitle: e("medalists_event_link_label"),
                    unofficialMedalTitle: e("medal_unofficial_alert_icon"),
                    noResultsCourtesyMessage1: e("msg_medalists_no_medals_line_1"),
                    noResultsCourtesyMessage2: e("msg_medalists_no_medals_line_2"),
                    noFilteredResultsCourtesyMessage1: e("msg_medalists_filter_no_results_line_1"),
                    noFilteredResultsCourtesyMessage2: e("msg_medalists_filter_no_results_line_2"),
                    openContextualMenu: e("medalists_event_open_contextual_menu"),
                    expandMedalist: e("medalists_expand_medalist"),
                    collapseMedalist: e("medalists_collapse_medalist"),
                    commonGold: e("common_gold_medal"),
                    commonSilver: e("common_silver_medal"),
                    commonBronze: e("common_bronze_medal"),
                    flagIconTitle: e("flag_icon_title")
                });
            var sZ = (e, t, l) => !e || e.includes(t) || e.includes(l) || 0 === e.length,
                sE = e => {
                    let t = {
                        gold: 0,
                        silver: 0,
                        bronze: 0,
                        total: 0
                    };
                    return null == e || e.forEach(e => {
                        e.medalType === at.constants.relevantMedals.gold ? t.gold += 1 : e.medalType === at.constants.relevantMedals.silver ? t.silver += 1 : e.medalType === at.constants.relevantMedals.bronze && (t.bronze += 1), t.total += 1
                    }), t
                },
                sk = (e, t, l) => {
                    var i, n;
                    if (null == t ? void 0 : null === (i = t.medals) || void 0 === i ? void 0 : i.some(e => e.date === l)) {
                        let i = null == t ? void 0 : null === (n = t.medals) || void 0 === n ? void 0 : n.filter(e => e.date === l),
                            o = sE(i),
                            a = { ...t,
                                medals: i,
                                medalsGold: o.gold,
                                medalsSilver: o.silver,
                                medalsBronze: o.bronze,
                                medalsTotal: o.total
                            };
                        e.push(a)
                    }
                },
                sN = l(75472),
                sR = l.n(sN);
            (s = f || (f = {})).Asc = "Asc", s.Desc = "Desc", (c = x || (x = {})).Total = "Total", c.Gold = "Gold", c.Silver = "Silver", c.Bronze = "Bronze", c.AthleteName = "AthleteName", c.Nocs = "Nocs";
            let sM = e => sR()(e.slice(0), ["fullName"], ["asc"]),
                sF = e => sR()(e.slice(0), ["organisation", "fullName"], ["asc", "asc"]),
                sO = e => sR()(e.slice(0), ["medalsTotal", "medalsGold", "medalsSilver", "medalsBronze", "organisation", "fullName"], ["desc", "desc", "desc", "desc", "asc", "asc"]),
                sB = e => sR()(e.slice(0), ["medalsGold", "medalsTotal", "medalsSilver", "medalsBronze", "organisation", "fullName"], ["desc", "desc", "desc", "desc", "asc", "asc"]),
                sL = e => sR()(e.slice(0), ["medalsSilver", "medalsTotal", "medalsGold", "medalsBronze", "organisation", "fullName"], ["desc", "desc", "desc", "desc", "asc", "asc"]),
                sz = e => sR()(e.slice(0), ["medalsBronze", "medalsTotal", "medalsGold", "medalsSilver", "organisation", "fullName"], ["desc", "desc", "desc", "desc", "asc", "asc"]);
            var sj = (e, t) => (null == t ? void 0 : t.sortBy) === "AthleteName" ? sM(e) : (null == t ? void 0 : t.sortBy) === "Nocs" ? sF(e) : (null == t ? void 0 : t.sortBy) === "Total" ? sO(e) : (null == t ? void 0 : t.sortBy) === "Gold" ? sB(e) : (null == t ? void 0 : t.sortBy) === "Silver" ? sL(e) : (null == t ? void 0 : t.sortBy) === "Bronze" ? sz(e) : e,
                sA = e => {
                    let {
                        medallistsData: t,
                        nocFilter: l,
                        disciplineFilter: i,
                        eventFilter: n,
                        genderFilter: o,
                        dayFilter: a,
                        width: d,
                        sorting: r
                    } = e, s = (0, w.useCallback)((e, t, l) => {
                        var i, n;
                        let o = null === (n = null == t ? void 0 : t.includes(at.constants.allItems)) || void 0 === n || n,
                            a = !l || l.includes(at.constants.allItems);
                        if (o) return e;
                        let d = null == e ? void 0 : null === (i = e.medals) || void 0 === i ? void 0 : i.filter(e => null == t ? void 0 : t.includes(e.disciplineCode));
                        if (!a) {
                            let e = null == d ? void 0 : d.slice();
                            d = null == e ? void 0 : e.filter(e => null == l ? void 0 : l.includes(e.event))
                        }
                        if (d && (null == d ? void 0 : d.length) > 0) {
                            let t = sE(d);
                            return { ...e,
                                medals: d,
                                medalsGold: t.gold,
                                medalsSilver: t.silver,
                                medalsBronze: t.bronze,
                                medalsTotal: t.total
                            }
                        }
                    }, []), c = (0, w.useCallback)(e => {
                        let t = [];
                        return e.forEach(e => {
                            if (!e) return;
                            let {
                                organisation: d,
                                gender: r
                            } = e, c = sZ(l, at.constants.allItems, d), u = sZ(o, at.constants.allItems, r);
                            if (!c || !u) return;
                            let v = s(e, i, n);
                            if (v) {
                                if (a && a.length > 0) {
                                    let [e] = a;
                                    sk(t, v, e)
                                } else t.push(v)
                            }
                        }), t
                    }, [l, i, n, o, a, s]);
                    return {
                        medallistsTableData: (0, w.useMemo)(() => {
                            if (!(null == t ? void 0 : t.athletes)) return;
                            let e = null == t ? void 0 : t.athletes;
                            return (l || i || n || o || a) && (e = c(e)), e = sj(e, r), { ...t,
                                athletes: e
                            }
                        }, [l, i, n, o, a, r, d])
                    }
                };
            let sW = {
                    display: "desktop",
                    container: {
                        gap: "8px",
                        marginBottom: "8rem"
                    },
                    header: {
                        container: {
                            display: "grid",
                            alignItems: "center",
                            padding: "12px 20px",
                            gridTemplateColumns: "96px 4fr repeat(5, 1fr)"
                        },
                        medalIcon: {
                            container: {
                                justifySelf: "center"
                            },
                            style: {
                                style: { ...F.typography.ui2
                                },
                                width: 24,
                                height: 24
                            }
                        },
                        sortedText: {
                            style: {
                                fontWeight: "bold"
                            }
                        },
                        defaultTypography: { ...F.typography.ui2
                        },
                        headerNoc: {
                            style: {
                                alignItems: "center"
                            }
                        }
                    },
                    athlete: {
                        container: {
                            alignItems: "flex-start",
                            justifyContent: "center",
                            borderRadius: "4px",
                            boxShadow: F.elevation[100]
                        },
                        row: {
                            container: {
                                display: "grid",
                                alignItems: "center",
                                width: "calc(100% - 40px)",
                                padding: "16px 20px",
                                backgroundColor: F.colors.white,
                                gridTemplateColumns: "96px 4fr repeat(5, 1fr)",
                                cursor: "pointer"
                            },
                            flagIcon: {
                                width: 32,
                                height: 24,
                                style: {
                                    boxShadow: "0px 0px 1px ".concat(F.colors.black),
                                    marginRight: "12px"
                                }
                            },
                            expandIcon: {
                                width: 14,
                                height: 14,
                                style: {
                                    display: "flex"
                                },
                                container: {
                                    justifySelf: "flex-end"
                                }
                            }
                        },
                        defaultTypography: { ...F.typography.ui2
                        }
                    },
                    disciplineEvent: {
                        row: {
                            container: {
                                display: "grid",
                                alignItems: "center",
                                width: "calc(100% - 40px)",
                                padding: "8px 20px",
                                borderTop: "1px solid ".concat(F.colors.gray300),
                                gridTemplateColumns: "96px 7fr repeat(2, 1fr)"
                            },
                            eventInfo: {
                                container: {
                                    gap: "10px"
                                },
                                disciplineName: {
                                    style: {
                                        fontWeight: "600"
                                    }
                                }
                            },
                            medalIcon: {
                                container: {
                                    justifyContent: "center"
                                },
                                style: {
                                    width: 24,
                                    height: 24
                                }
                            },
                            contextualIcon: {
                                width: 24,
                                height: 24,
                                color: F.colors.black,
                                container: {
                                    justifySelf: "flex-end",
                                    cursor: "pointer"
                                }
                            },
                            unofficialIcon: {
                                width: 24,
                                height: 24,
                                color: ""
                            }
                        },
                        defaultTypography: { ...F.typography.ui2
                        }
                    },
                    links: {
                        textDecoration: "none",
                        color: "inherit"
                    }
                },
                sH = {
                    display: "mobile",
                    container: {
                        gap: "8px",
                        marginBottom: "16rem"
                    },
                    header: {
                        container: {
                            display: "grid",
                            alignItems: "center",
                            padding: "12px 8px",
                            gridTemplateColumns: "96px 7fr repeat(2, 1fr)"
                        },
                        medalIcon: {
                            container: {
                                justifySelf: "center"
                            },
                            style: {
                                width: 24,
                                height: 24
                            }
                        },
                        sortedText: {
                            style: {
                                fontWeight: "bold"
                            }
                        },
                        defaultTypography: { ...F.typography.ui2
                        },
                        headerNoc: {
                            style: {
                                alignItems: "center"
                            }
                        }
                    },
                    athlete: {
                        container: {
                            alignItems: "flex-start",
                            justifyContent: "center",
                            borderRadius: "4px",
                            boxShadow: F.elevation[100]
                        },
                        row: {
                            container: {
                                display: "grid",
                                alignItems: "center",
                                width: "calc(100% - 16px)",
                                padding: "16px 8px",
                                backgroundColor: F.colors.white,
                                gridTemplateColumns: "96px 7fr repeat(2, 1fr)"
                            },
                            flagIcon: {
                                width: 32,
                                height: 24,
                                style: {
                                    boxShadow: "0px 0px 1px ".concat(F.colors.black),
                                    marginRight: "12px"
                                }
                            },
                            expandIcon: {
                                width: 14,
                                height: 14,
                                style: {
                                    display: "flex",
                                    cursor: "pointer"
                                },
                                container: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    justifySelf: "flex-end"
                                }
                            }
                        },
                        defaultTypography: { ...F.typography.ui2
                        }
                    },
                    disciplineEvent: {
                        row: {
                            container: {
                                display: "grid",
                                alignItems: "center",
                                width: "calc(100% - 16px)",
                                padding: "8px",
                                borderTop: "1px solid ".concat(F.colors.gray300),
                                gridTemplateColumns: "96px 7fr repeat(2, 1fr)"
                            },
                            eventInfo: {
                                container: {
                                    flexDirection: "column",
                                    gridColumn: "1 / span 2"
                                },
                                disciplineName: {
                                    style: {
                                        fontWeight: "600"
                                    }
                                }
                            },
                            medalIcon: {
                                container: {
                                    justifyContent: "center",
                                    alignSelf: "flex-start"
                                },
                                style: {
                                    width: 24,
                                    height: 24
                                }
                            },
                            contextualIcon: {
                                width: 24,
                                height: 24,
                                color: F.colors.black,
                                style: {
                                    justifyContent: "flex-end",
                                    cursor: "pointer"
                                }
                            },
                            unofficialIcon: {
                                width: 24,
                                height: 24,
                                color: ""
                            }
                        },
                        defaultTypography: { ...F.typography.ui2
                        }
                    },
                    links: {
                        textDecoration: "none",
                        color: "inherit"
                    }
                },
                sG = {
                    filterBar: {
                        padding: "1rem",
                        width: "100%",
                        "@media (min-width: 768px)": {
                            padding: "2rem",
                            maxWidth: "910px"
                        }
                    },
                    header: {
                        backgroundColor: "#fff",
                        boxShadow: F.elevation[300]
                    },
                    mainContainer: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "#f8f8f9"
                    },
                    widgetContainer: {
                        width: "calc(100% - 2rem)",
                        paddingTop: "20px",
                        marginBottom: "20px",
                        "@media (min-width: 768px)": {
                            paddingTop: "1rem",
                            maxWidth: "910px"
                        }
                    }
                };
            var sX = e => {
                let {
                    width: t
                } = iW();
                return (0, w.useMemo)(() => {
                    let l, i;
                    return t < at.constants.mobileMaxResolution ? (l = sH, i = "mobile") : (l = sW, i = "desktop"), nm()({}, l, null == e ? void 0 : e[i])
                }, [t, e])
            };
            let sP = (0, _.Z)("div", {
                    target: "e1lt2qcl0"
                })("display:flex;flex-direction:column;align-items:center;"),
                s$ = (0, _.Z)(z, {
                    target: "e1lt2qcl1"
                })("border:1px solid ", F.colors.gray500, ";padding:8px;border-radius:2px;text-align:center;width:93%;font-weight:bold;margin-top:8px;margin-bottom:8px;:hover{cursor:pointer;background-color:white;color:#4d5175;}"),
                sU = (0, _.Z)("div", {
                    target: "e1lt2qcl2"
                })("border-top:1px solid ", F.colors.gray300, ";padding-top:5px;");
            var sV = e => {
                    let {
                        initialFilterDays: t,
                        filterDaysEndpoint: l,
                        medallistsData: i,
                        handleCloseRow: n,
                        highlighted: o
                    } = e, {
                        removeFilter: a
                    } = (0, n6.$J)(), {
                        translate: d
                    } = (0, l1.$G)(), {
                        calendarDays: r
                    } = sC({
                        initialFilterDays: t,
                        filterDaysEndpoint: null != l ? l : "",
                        medallistsData: i
                    }), [s, c] = (0, w.useState)(0), u = (0, w.useMemo)(() => [d("label_day_of_week_monday_abbr"), d("label_day_of_week_tuesday_abbr"), d("label_day_of_week_wednesday_abbr"), d("label_day_of_week_thursday_abbr"), d("label_day_of_week_friday_abbr"), d("label_day_of_week_saturday_abbr"), d("label_day_of_week_sunday_abbr")], [d]), v = (0, w.useCallback)(() => {
                        a(at.constants.medallistTable.filters.day), c(e => e + 1), n && n()
                    }, [a]);
                    return r && r.length > 0 && (0, b.tZ)(oe, {
                        dates: r,
                        days: u,
                        highlighted: o,
                        startDay: 0,
                        forcePlaceholder: !0,
                        placeholder: (0, b.tZ)(ej, {
                            title: d("medalists_filter_by_day"),
                            alt: d("medalists_filter_by_day"),
                            name: "calendar"
                        }),
                        iconOpen: {
                            name: "selectExpand",
                            width: 12,
                            height: 12,
                            alt: d("filter_by_day_open_icon"),
                            title: d("filter_by_day_open_icon")
                        },
                        iconClose: {
                            name: "selectCollapse",
                            width: 12,
                            height: 12,
                            alt: d("filter_by_day_close_icon"),
                            title: d("filter_by_day_close_icon")
                        },
                        stateName: at.constants.medallistTable.filters.day,
                        slice: "filter",
                        customTheme: aX,
                        onDateClick: e => {
                            let t = new CustomEvent(at.constants.misc.events.calendarDaySelected, {
                                detail: e
                            });
                            document.dispatchEvent(t)
                        },
                        children: (0, b.BX)(sP, {
                            children: [(0, b.tZ)(s$, {
                                onClick: v,
                                "data-testid": "ViewAllDays",
                                className: "calendar-filter__cta",
                                variant: "outlined",
                                children: d("medalists_filter_button_view_all_days")
                            }), (0, b.tZ)(sU, {
                                className: "calendar-filter__info",
                                children: d("medalists_filter_days_note")
                            })]
                        })
                    }, s)
                },
                sq = as(e => {
                    var t, l, i;
                    let {
                        medallistEndpoint: n,
                        customThemes: o,
                        pageCustomTheme: a = sG,
                        initialMedallist: d,
                        favourites: r,
                        urlConfig: s,
                        disclaimerConfig: c,
                        footerBottomStory: u
                    } = e, {
                        width: v
                    } = iW(), {
                        filters: p
                    } = (0, n6.$J)(), {
                        sortings: h
                    } = (0, n6.ec)(), {
                        nocFilter: m,
                        disciplineFilter: g,
                        eventFilter: y,
                        genderFilter: f,
                        dayFilter: x,
                        activeFilter: _
                    } = sS(p), {
                        sorting: I
                    } = sT(h), {
                        translate: T
                    } = (0, l1.$G)(), {
                        noResultsCourtesyMessage1: D,
                        noResultsCourtesyMessage2: Z,
                        noFilteredResultsCourtesyMessage1: E,
                        noFilteredResultsCourtesyMessage2: k,
                        ...N
                    } = sD(T), R = sX(o), M = "mobile" === R.display, {
                        data: F
                    } = oP({
                        endpoint: n,
                        shouldFetch: !d,
                        initialData: d
                    }), {
                        medallistsTableData: O
                    } = sA({
                        medallistsData: F,
                        nocFilter: m,
                        disciplineFilter: g,
                        eventFilter: y,
                        genderFilter: f,
                        dayFilter: x,
                        width: v,
                        sorting: I
                    });
                    aT({
                        widget: "medallists"
                    });
                    let B = sh(),
                        L = !r1(),
                        {
                            toggleEntity: z,
                            eagerExpandableEntitiesState: j,
                            eagerDefaultIsEntityExpanded: A
                        } = sb((0, S.N)(e => {
                            let {
                                toggleEntity: t,
                                defaultIsEntityExpanded: l,
                                expandableEntitiesState: i
                            } = e;
                            return {
                                toggleEntity: t,
                                eagerDefaultIsEntityExpanded: l,
                                eagerExpandableEntitiesState: i
                            }
                        })),
                        W = (0, w.useDeferredValue)(A),
                        H = (0, w.useDeferredValue)(j),
                        G = (null == I ? void 0 : I.name) === at.constants.medallistTable.sorting ? null == I ? void 0 : I.sortBy : "Total";
                    return (0, b.tZ)(ew, {
                        fonts: [{
                            family: "Rubik"
                        }],
                        children: (0, b.BX)(J, {
                            tx: null == a ? void 0 : a.mainContainer,
                            children: [(0, b.tZ)(sg, {}), (0, b.tZ)(sY, {
                                tx: null == a ? void 0 : a.header,
                                children: (0, b.tZ)(sw, {
                                    showModal: M,
                                    favourites: r,
                                    medallistsData: F,
                                    handleCloseRow: C(),
                                    tx: null == a ? void 0 : a.filterBar,
                                    filterModalTx: null == a ? void 0 : a.filterModal
                                })
                            }), (null == O ? void 0 : null === (t = O.athletes) || void 0 === t ? void 0 : t.length) === 0 && (0, b.tZ)(sJ, {
                                children: _ ? (0, b.BX)(b.HY, {
                                    children: [(0, b.tZ)("p", {
                                        children: E
                                    }), (0, b.tZ)("p", {
                                        children: k
                                    })]
                                }) : (0, b.BX)(b.HY, {
                                    children: [(0, b.tZ)("p", {
                                        children: D
                                    }), (0, b.tZ)("p", {
                                        children: Z
                                    })]
                                })
                            }), O && (null == O ? void 0 : null === (l = O.athletes) || void 0 === l ? void 0 : l.length) !== 0 && (0, b.tZ)(J, {
                                tx: null == a ? void 0 : a.widgetContainer,
                                children: (0, b.tZ)(nD, {
                                    data: O,
                                    translations: N,
                                    customTheme: R,
                                    urlConfig: s,
                                    virtualized: !0,
                                    virtualizedIncreaseViewportBy: 300,
                                    virtualizedInitialItemCount: 20,
                                    sortedBy: G,
                                    expandableEntities: H,
                                    defaultIsExpanded: W,
                                    onExpandToggle: z,
                                    advConfig: B && { ...B,
                                        adRenderer: L && null !== (i = null == B ? void 0 : B.adRenderer) && void 0 !== i ? i : () => null
                                    },
                                    disclaimerConfig: c,
                                    footerBottomStory: u
                                })
                            })]
                        })
                    })
                });
            let sY = (0, _.Z)(J, {
                    target: "e18ocb2c0"
                })("display:flex;align-items:center;justify-content:center;width:100%;"),
                sJ = (0, _.Z)("div", {
                    target: "e18ocb2c1"
                })("margin:3rem 0 4rem;text-align:center;"),
                sK = (e, t, l) => t.reduce((e, t, i) => {
                    let n = null == l ? void 0 : l[t.type];
                    return n ? sQ(e, t.code, 0 === i, n) : e
                }, e),
                sQ = (e, t, l, i) => {
                    if (!i) return "";
                    let n = e;
                    return (l || i.concatenable) && (n += "/".concat(i.slug, "/").concat(t)), n
                };
            var s0 = e => {
                    var t;
                    let {
                        filters: l,
                        endpointConfiguration: i,
                        defaultEndpoint: n
                    } = e, o = n;
                    if (!(null == l ? void 0 : l.mainFilter)) return o;
                    let a = null !== (t = null == i ? void 0 : i[l.mainFilter.type]) && void 0 !== t ? t : null;
                    return (null == a ? void 0 : a.customFiltering) || (a && l.mainFilter.code && (o = "".concat(a.mainFilter, "/").concat(l.mainFilter.code)), l.additionalFilters && (null == a ? void 0 : a.additionalFilters) && (o = sK(o, l.additionalFilters, a.additionalFilters))), o
                },
                s1 = l(95444);
            let s2 = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            mouseMovementThreshold: t = 100,
                            interactionTimeThreshold: l = 500
                        } = e,
                        [i, n] = (0, w.useState)(!1),
                        [o, a] = (0, w.useState)({
                            x: 0,
                            y: 0
                        }),
                        [d, r] = (0, w.useState)(0),
                        s = (0, w.useRef)(!0),
                        c = (0, w.useCallback)(() => {
                            s.current && (s.current = !1, oz("Listening stopped manually", {
                                category: "useHasInteracted",
                                level: oM.Info
                            }))
                        }, []),
                        u = (0, w.useCallback)(() => {
                            s.current && !i && (n(!0), c(), oz("User has interacted with the page. Stopping further detection.", {
                                category: "useHasInteracted",
                                level: oM.Info
                            }))
                        }, [i, c]),
                        v = (0, w.useCallback)(e => {
                            if (!s.current) return;
                            let i = Date.now(),
                                {
                                    clientX: n,
                                    clientY: c
                                } = e;
                            if (0 === d) {
                                r(i), a({
                                    x: n,
                                    y: c
                                }), oz("Mouse movement started at (".concat(n, ", ").concat(c, ")"), {
                                    category: "useHasInteracted",
                                    level: oM.Info
                                });
                                return
                            }
                            let v = n - o.x,
                                p = c - o.y,
                                h = Math.sqrt(v * v + p * p);
                            h > t && i - d > l && (oz("Significant mouse movement detected: ".concat(h.toFixed(2), "px"), {
                                category: "useHasInteracted",
                                level: oM.Info
                            }), u())
                        }, [d, o, t, l, u]),
                        p = (0, w.useCallback)(e => {
                            s.current && (oz("Key pressed: ".concat(e.key), {
                                category: "useHasInteracted",
                                level: oM.Info
                            }), u())
                        }, [u]),
                        h = (0, w.useCallback)(e => {
                            s.current && Math.abs(e.deltaY) > 0 && (oz("Vertical wheel movement detected: ".concat(e.deltaY), {
                                category: "useHasInteracted",
                                level: oM.Info
                            }), u())
                        }, [u]),
                        m = (0, w.useCallback)(e => {
                            if (s.current && e.touches.length > 0) {
                                let t = e.touches[0];
                                oz("Touch move detected at (".concat(t.clientX, ", ").concat(t.clientY, ")"), {
                                    category: "useHasInteracted",
                                    level: oM.Info
                                }), v(t)
                            }
                        }, [v]),
                        g = (0, w.useCallback)(e => {
                            s.current && (oz("Click detected at (".concat(e.clientX, ", ").concat(e.clientY, ")"), {
                                category: "useHasInteracted",
                                level: oM.Info
                            }), u())
                        }, [u]);
                    return (0, w.useEffect)(() => (s.current && (oz("Setting up event listeners", {
                        category: "useHasInteracted",
                        level: oM.Info
                    }), window.addEventListener("mousemove", v), window.addEventListener("keydown", p), window.addEventListener("wheel", h), window.addEventListener("touchmove", m), window.addEventListener("click", g)), () => {
                        oz("Removing event listeners", {
                            category: "useHasInteracted",
                            level: oM.Info
                        }), window.removeEventListener("mousemove", v), window.removeEventListener("keydown", p), window.removeEventListener("wheel", h), window.removeEventListener("touchmove", m), window.removeEventListener("click", g)
                    }), [v, p, h, m, g]), {
                        hasInteracted: i,
                        stopListening: c
                    }
                },
                s4 = () => new Date().toISOString().split("T")[0],
                s8 = e => {
                    let {
                        rows: t,
                        onScrollToInitialRowCompleted: l,
                        isRowsStale: i = !1,
                        isFullSchedule: n,
                        minutesThresholdLiveEvent: o
                    } = e, {
                        filters: a
                    } = ax(), {
                        filters: d
                    } = (0, n6.$J)(), {
                        hasInteracted: r,
                        stopListening: s
                    } = s2({
                        mouseMovementThreshold: 150,
                        interactionTimeThreshold: 1e3
                    }), c = ag(e => e.isAdditionalFiltersFoundButNotApplied), u = r1(), v = (0, w.useRef)(!1), p = (0, w.useRef)(null), h = (0, w.useRef)(d), m = (0, s1._)(), g = (0, w.useRef)(null), {
                        width: y
                    } = iW(), f = y < oK.default.tabletMaxResolution, x = ag(e => e.isFilterBarExpanded), b = (0, w.useCallback)(e => e.filter(e => "dailyScheduleDayFilter" !== e.name), []), _ = (0, w.useMemo)(() => b(d), [d, b]), I = (e, i) => {
                        oz("scrollToHighlightedRow called", {
                            category: "useInitialVisibleRowIndex"
                        });
                        let d = t.findIndex(e => e.type === oK.default.dailySchedule.customRows.scrollUp);
                        if (oz("Initial index", {
                                category: "useInitialVisibleRowIndex",
                                objectToLog: {
                                    index: d
                                }
                            }), -1 === d) {
                            var r;
                            let e = ra(t, a);
                            oz("Updated index after findIndexOfHighlightedRowOfCompetitionDay", {
                                category: "useInitialVisibleRowIndex",
                                objectToLog: {
                                    index: d = null !== (r = dV({
                                        rows: t,
                                        eventStartDate: e,
                                        enablePositionCheck: !0,
                                        isFullSchedule: n,
                                        minutesThresholdLiveEvent: o
                                    })) && void 0 !== r ? r : 0,
                                    eventStartDate: e
                                }
                            })
                        }
                        oz("Final index after getIndexOfPreviousCompetitionDayRow", {
                            category: "useInitialVisibleRowIndex",
                            objectToLog: {
                                index: d = rp(t, d - 1, d)
                            }
                        }), dQ({
                            listRef: p
                        }, d, e, f, i), oz("Scroll completed", {
                            category: "useInitialVisibleRowIndex"
                        }), null == l || l()
                    };
                    return (0, w.useEffect)(() => {
                        if ("full" === m && "full" !== g.current) {
                            oz("sticky ADV full", {
                                category: "useInitialVisibleRowIndex",
                                objectToLog: {
                                    stickyStatus: m,
                                    previous: g.current
                                }
                            }), I(x, m), g.current = m;
                            return
                        }
                        if (!r && "full" !== m && "full" === g.current) {
                            s(), oz("sticky ADV not full", {
                                category: "useInitialVisibleRowIndex",
                                objectToLog: {
                                    stickyStatus: m,
                                    previous: g.current
                                }
                            }), I(x, m), g.current = m;
                            return
                        }
                        if (g.current = m, !u && !i) {
                            if (c()) return;
                            let e = h.current;
                            oY()(e, _) && v.current || (oz("Filters changed or first scroll", {
                                category: "useInitialVisibleRowIndex"
                            }), h.current = _, v.current = !0, I(x, m))
                        }
                    }, [u, i, m, r]), {
                        listRef: p,
                        scrollToHighlightedRow: I
                    }
                },
                s3 = e => {
                    let {
                        width: t
                    } = iW();
                    return (0, w.useMemo)(() => {
                        var l, i;
                        let n, o;
                        return t < at.constants.mobileMaxResolution ? (n = aR, o = "mobile") : t < at.constants.tabletMaxResolution ? (n = aM, o = "tablet") : (n = aF, o = "desktop"), {
                            dailySchedule: nm()({}, n, null == e ? void 0 : null === (l = e[o]) || void 0 === l ? void 0 : l.dailySchedule),
                            widget: nm()({}, aN, null == e ? void 0 : null === (i = e[o]) || void 0 === i ? void 0 : i.widget)
                        }
                    }, [t, e])
                },
                s5 = () => {
                    throw Error("invalid_useStableCallback_call: the callback cannot be invoked before the component has mounted.")
                },
                s6 = e => {
                    let t = (0, w.useRef)(s5),
                        l = (0, w.useRef)(null);
                    return l.current || (l.current = function() {
                        return t.current.apply(this, arguments)
                    }), (0, w.useInsertionEffect)(() => {
                        t.current = e
                    }, [e]), l.current
                };
            var s7 = l(76248),
                s9 = l(59242),
                ce = l.n(s9);
            let ct = () => {
                    let {
                        updateFilter: e,
                        filters: t
                    } = (0, n6.$J)(), l = s6(l => {
                        var i;
                        let n = null === (i = t.find(e => e.name === oK.default.dailySchedule.filters.day)) || void 0 === i ? void 0 : i.values,
                            o = [l];
                        (0, s7.X)(n, o) || e({
                            name: oK.default.dailySchedule.filters.day,
                            values: o
                        })
                    });
                    (0, w.useEffect)(() => {
                        let e = ce()(ag.getState, e => e.competitionDay, l);
                        return e(), ag.subscribe((t, l) => {
                            try {
                                if (!t.competitionDay || t.competitionDay === l.competitionDay) return;
                                e()
                            } catch (e) {
                                oz("".concat(String(e)), {
                                    level: oM.Error,
                                    category: "useSynchronizeDayFilter"
                                })
                            }
                        })
                    }, [])
                },
                cl = e => {
                    let t = e("msg_daily_schedule_no_schedule_line_1"),
                        l = e("msg_daily_schedule_no_schedule_line_2"),
                        i = e("msg_daily_schedule_filter_no_results_line_1"),
                        n = e("msg_daily_schedule_filter_no_results_line_2"),
                        o = e("daily_schedule_end_of_olympic_day"),
                        a = e("event_unit_status_cancelled"),
                        d = e("event_unit_status_postponed"),
                        r = e("event_unit_status_delayed"),
                        s = e("event_unit_status_interrupted"),
                        c = e("event_unit_status_rescheduled"),
                        u = e("daily_schedule_group_items"),
                        v = e("daily_schedule_group_item"),
                        p = e("daily_schedule_group_warning"),
                        h = e("common_gold_abbr"),
                        m = e("common_silver_abbr"),
                        g = e("common_bronze_abbr"),
                        y = e("common_gold_medal"),
                        f = e("common_silver_medal"),
                        x = e("common_bronze_medal"),
                        b = e("schedule_event_unit_link_title"),
                        w = e("schedule_event_unit_add_bookmark"),
                        _ = e("schedule_event_unit_open_contextual_menu"),
                        I = e("filters_panel_expand_collapse_label"),
                        C = e("daily_schedule_filters_panel_title"),
                        S = e("daily_schedule_filters_panel_subtitle"),
                        T = e("filters_panel_close_label"),
                        D = e("cta_apply_filters"),
                        Z = e("cta_reset_filters"),
                        E = e("daily_schedule_match_number"),
                        k = e("daily_schedule_expand_group"),
                        N = e("daily_schedule_collapse_group"),
                        R = e("daily_schedule_gold_medal_event"),
                        M = e("daily_schedule_silver_medal_event"),
                        F = e("daily_schedule_bronze_medal_event"),
                        O = e("daily_schedule_winner_icon_tooltip"),
                        B = e("yellow_card_1_tooltip"),
                        L = e("yellow_card_2_tooltip"),
                        z = e("yellow_card_3_tooltip"),
                        j = e("red_card_tooltip");
                    return {
                        noScheduleUnitsCourtesyMessage1: t,
                        noScheduleUnitsCourtesyMessage2: l,
                        noScheduleUnitsFilteredCourtesyMessage1: i,
                        noScheduleUnitsFilteredCourtesyMessage2: n,
                        endOfOlympicDay: o,
                        eventCancelled: a,
                        eventPostponed: d,
                        eventDelayed: r,
                        eventInterrupted: s,
                        eventRescheduled: c,
                        groupItems: u,
                        groupItem: v,
                        groupWarning: p,
                        medalGold: h,
                        medalSilver: m,
                        medalBronze: g,
                        commonGold: y,
                        commonSilver: f,
                        commonBronze: x,
                        eventLinkTitle: b,
                        saveIconText: w,
                        menuIconText: _,
                        panelExpandCollapseLabel: I,
                        resetFilters: Z,
                        matchNumber: E,
                        expandGroup: k,
                        collapseGroup: N,
                        goldMedalEvent: R,
                        silverMedalEvent: M,
                        bronzeMedalEvent: F,
                        winnerTooltip: O,
                        yellowCard1Tooltip: B,
                        yellowCard2Tooltip: L,
                        yellowCard3Tooltip: z,
                        redCardTooltip: j,
                        flagIconTitle: e("flag_icon_title"),
                        groupWithMedalEvents: e("daily_schedule_group_with_medal_events"),
                        liveIcon: e("daily_schedule_now"),
                        filterPanelTranslations: {
                            panelTitle: C,
                            panelSubtitle: S,
                            panelClose: T,
                            applyFilters: D,
                            resetFilters: Z
                        }
                    }
                },
                ci = () => {
                    let {
                        translate: e
                    } = (0, l1.$G)(), t = e("daily_schedule_scroll_up_label");
                    return (0, b.BX)(J, {
                        tx: {
                            height: 50,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "bold",
                            gap: "8px",
                            textAlign: "center",
                            position: "relative",
                            ["@media (max-width: ".concat(F.breakpoints.lg, "px)")]: {
                                bottom: "-0.75rem",
                                marginBottom: "1rem"
                            }
                        },
                        children: [(0, b.tZ)(ej, {
                            name: "arrow-up",
                            alt: t,
                            "aria-hidden": !0
                        }), (0, b.tZ)(K, {
                            tx: {
                                overflowWrap: "break-word",
                                maxWidth: 864
                            },
                            children: t
                        })]
                    })
                },
                cn = e => {
                    let {
                        rows: t,
                        listRef: l,
                        loadOlympicDaySchedule: i,
                        competitionDays: n,
                        isFullSchedule: o,
                        minutesThresholdLiveEvent: a
                    } = e, d = (0, w.useRef)(t);
                    d.current = t;
                    let r = ai(),
                        s = ag(e => e.isFilterBarExpanded),
                        c = ag(e => e.setIsScrollingToCompetitionDayByCalendar),
                        {
                            width: u
                        } = iW(),
                        v = u < at.constants.tabletMaxResolution;
                    return s6(e => {
                        d8({
                            selectedDay: e,
                            venueTimeZone: r,
                            rowsRef: d,
                            loadOlympicDaySchedule: i,
                            listRef: l,
                            offsetElementId: at.constants.dailySchedule.html.filterRootDomId,
                            parisHeaderId: at.constants.dailySchedule.html.parisHeaderId,
                            competitionDays: n,
                            isFilterBarExpanded: s,
                            isMobile: v,
                            setIsScrollingToCompetitionDayByCalendar: c,
                            isFullSchedule: o,
                            minutesThresholdLiveEvent: a
                        })
                    })
                };
            var co = e => {
                var t, l;
                let {
                    savedEventUnits: i,
                    customThemes: n,
                    isLoading: o,
                    onEventClick: a = C(),
                    urlConfig: d,
                    onLastRowVisible: r,
                    onPlaceholderRowVisible: s,
                    rows: c,
                    filterUnitPayload: u,
                    onScrollToInitialRowCompleted: v,
                    currentDayStartIndexDelta: p,
                    isFullSchedule: h,
                    minutesThresholdLiveEvent: m,
                    languageCode: g,
                    loadOlympicDaySchedule: y,
                    initialFilterDays: f,
                    setHandleOnCompetitionDayClick: x
                } = e, {
                    translate: _
                } = (0, l1.$G)(), {
                    noScheduleUnitsCourtesyMessage1: I,
                    noScheduleUnitsCourtesyMessage2: T,
                    noScheduleUnitsFilteredCourtesyMessage1: D,
                    noScheduleUnitsFilteredCourtesyMessage2: Z,
                    ...E
                } = cl(_), k = s3(n), N = d$(u), R = ag(e => e.updateCompetitionDay), {
                    defaultIsGroupExpanded: M,
                    expandableGroupsState: F,
                    toggleGroup: O
                } = ag((0, S.N)(e => {
                    let {
                        defaultIsGroupExpanded: t,
                        expandableGroupsState: l,
                        toggleGroup: i
                    } = e;
                    return {
                        defaultIsGroupExpanded: t,
                        expandableGroupsState: l,
                        toggleGroup: i
                    }
                })), B = ag(e => e.isAdditionalFiltersApplied), L = ag(e => e.isFilterBarExpanded), z = ag(e => e.showLoadingOverlay), j = ag(e => e.updateShowLoadingOverlay);
                db({
                    widget: "schedule"
                });
                let {
                    listRef: A,
                    scrollToHighlightedRow: W
                } = s8({
                    rows: c,
                    onScrollToInitialRowCompleted: v,
                    isRowsStale: o,
                    isFullSchedule: h,
                    minutesThresholdLiveEvent: m
                });
                aT({
                    widget: "schedule"
                });
                let H = cn({
                    listRef: A,
                    rows: c,
                    loadOlympicDaySchedule: y,
                    competitionDays: f,
                    isFullSchedule: h,
                    minutesThresholdLiveEvent: m
                });
                (0, w.useEffect)(() => {
                    null == x || x(H)
                }, [H]);
                let {
                    adRenderer: G
                } = sh(), X = rT();
                ct();
                let P = (0, w.useRef)(null),
                    $ = (0, w.useRef)(null),
                    {
                        filters: U
                    } = ax();
                (0, w.useEffect)(() => {
                    var e, t, l, i, n;
                    let o = null == U ? void 0 : null === (e = U.mainFilter) || void 0 === e ? void 0 : e.type,
                        a = null == U ? void 0 : null === (t = U.mainFilter) || void 0 === t ? void 0 : t.code,
                        d = null == U ? void 0 : null === (i = U.additionalFilters) || void 0 === i ? void 0 : null === (l = i.find(e => "day" === e.type)) || void 0 === l ? void 0 : l.code,
                        r = "day" === o && a || d;
                    P.current = null !== (n = null != r ? r : ra(c, U)) && void 0 !== n ? n : null
                }, []), (0, w.useEffect)(() => {
                    let e = rh(U);
                    e !== $.current && ($.current = e)
                }, [U]);
                let V = (0, w.useRef)(null),
                    [q, Y] = (0, w.useState)(!1);
                (0, w.useEffect)(() => (z && (V.current = setTimeout(() => {
                    Y(!0), j(!1)
                }, 1e3)), () => {
                    V.current && clearTimeout(V.current)
                }), [z, 1e3]);
                let K = (0, w.useMemo)(() => (function(e) {
                    var t, l;
                    let {
                        rows: i,
                        filtersFromUrl: n,
                        isFullSchedule: o
                    } = e, a = i.findIndex(e => e.type === oK.default.dailySchedule.customRows.scrollUp);
                    if (o) {
                        let e = (null == n ? void 0 : null === (l = n.mainFilter) || void 0 === l ? void 0 : l.type) === "day" ? n.mainFilter.code : s4();
                        if (!e || 0 === i.length) return 0;
                        let t = i.find(e => e.olympicDay);
                        if (!t) return 0;
                        let o = new Date(t.olympicDay),
                            d = Math.round((new Date(e).getTime() - o.getTime()) / 864e5);
                        if (-1 !== a) return a - 1;
                        let r = i.findIndex(t => t.olympicDay === e);
                        return -1 !== r ? r + d : 0
                    }
                    if (-1 !== a) return a;
                    let d = null == n ? void 0 : null === (t = n.additionalFilters) || void 0 === t ? void 0 : t.find(e => "day" === e.type),
                        r = d ? d.code : s4(),
                        s = i.findIndex(e => e.olympicDay === r);
                    return -1 !== s ? s : 0
                })({
                    rows: c,
                    filtersFromUrl: U,
                    isFullSchedule: h,
                    minutesThresholdLiveEvent: 30
                }), []);
                return (0, w.useEffect)(() => {
                    B() && W(L)
                }, [h]), (0, b.BX)(b.HY, {
                    children: [(0, b.BX)(J, {
                        tx: { ...k.widget.dailyScheduleWrapper,
                            position: "relative",
                            flex: 1
                        },
                        children: [q && !z && !N && !(null == c ? void 0 : c.length) && (0, b.BX)(cd, {
                            children: [(0, b.tZ)("p", {
                                children: I
                            }), (0, b.tZ)("p", {
                                children: T
                            })]
                        }), q && !z && N && !(null == c ? void 0 : c.length) && (0, b.BX)(cd, {
                            children: [(0, b.tZ)("p", {
                                children: D
                            }), (0, b.tZ)("p", {
                                children: Z
                            })]
                        }), c && c.length > 0 && !z && (0, b.tZ)(iR, {
                            ref: A,
                            rows: c,
                            translations: E,
                            theme: k.dailySchedule,
                            onLastRowVisible: r,
                            onExpandToggle: O,
                            expandableEntities: F,
                            defaultIsExpanded: M,
                            onCompetitionDayChange: R,
                            onPlaceholderRowVisible: s,
                            onEventClick: a,
                            savedEventUnits: i,
                            urlConfig: d,
                            currentDayStartIndexDelta: p,
                            customRowRenderers: {
                                [at.constants.dailySchedule.customRows.advRow]: G,
                                [at.constants.dailySchedule.customRows.infoBox]: null !== (t = null == X ? void 0 : X.render) && void 0 !== t ? t : C(),
                                [at.constants.dailySchedule.customRows.scrollUp]: ci
                            },
                            locale: g,
                            virtualizedInitialTopMostItemIndex: K,
                            currentCompetitionDay: null !== (l = $.current) && void 0 !== l ? l : void 0
                        }), z && (0, b.tZ)(ca, {
                            children: (0, b.tZ)(tA, {})
                        })]
                    }), (0, b.tZ)(rq, {
                        isLoading: o && !z
                    })]
                })
            };
            let ca = (0, _.Z)("div", {
                    target: "e10cf01g0"
                })("width:100%;background:#f8f8f9;position:absolute;top:0;left:-5px;right:5px;bottom:0;display:flex;justify-content:center;padding-top:10rem;"),
                cd = (0, _.Z)("div", {
                    target: "e10cf01g1"
                })("margin-top:4rem;text-align:center;"),
                cr = e => {
                    var t, l, i, n, o, a;
                    let d = null === (t = e.find(e => e.name === oK.default.dailySchedule.filters.discipline)) || void 0 === t ? void 0 : t.values,
                        r = null === (l = e.find(e => e.name === oK.default.dailySchedule.filters.disciplineEvent)) || void 0 === l ? void 0 : l.values,
                        s = null === (i = e.find(e => e.name === oK.default.dailySchedule.filters.noc)) || void 0 === i ? void 0 : i.values;
                    return {
                        disciplineFilter: d,
                        disciplineEventFilter: r,
                        nocFilter: s,
                        venueFilter: null === (n = e.find(e => e.name === oK.default.dailySchedule.filters.venue)) || void 0 === n ? void 0 : n.values,
                        medalFlagFilter: null === (o = e.find(e => e.name === oK.default.dailySchedule.filters.medal)) || void 0 === o ? void 0 : o.name,
                        savedFlagFilter: null === (a = e.find(e => e.name === oK.default.dailySchedule.filters.saved)) || void 0 === a ? void 0 : a.name
                    }
                },
                cs = e => {
                    let {
                        filters: t,
                        savedEventUnits: l,
                        isLocalTimeZone: i
                    } = e, {
                        disciplineFilter: n,
                        disciplineEventFilter: o,
                        nocFilter: a,
                        venueFilter: d,
                        medalFlagFilter: r,
                        savedFlagFilter: s
                    } = cr(t);
                    return {
                        disciplineFilter: n,
                        disciplineEventFilter: o,
                        nocFilter: a,
                        venueFilter: d,
                        medalFlagFilter: r,
                        savedFlagFilter: s,
                        savedEventUnits: l,
                        isLocalTimeZone: i
                    }
                },
                cc = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            isVenueTimeZone: l
                        } = ay(),
                        {
                            filters: i
                        } = (0, n6.$J)(),
                        n = (0, w.useMemo)(() => cs({
                            filters: i,
                            savedEventUnits: e,
                            isLocalTimeZone: !l
                        }), [i, e, l]),
                        o = (0, w.useDeferredValue)(n);
                    return {
                        filterUnitPayload: o,
                        isFilterUnitPayloadDeferred: !t && o !== n
                    }
                },
                cu = e => {
                    let [t, l] = (0, w.useState)(() => d5(e)), [i, n] = (0, w.useState)(!1), o = (0, w.useRef)(new Set), a = s6(async (e, i) => {
                        if (o.current.has(e)) {
                            oz("[setScheduleDataByCompetitionDayAsync][dedupe] skip request with key=".concat(e, ". Another request is in progress"), {
                                level: oM.Info
                            });
                            return
                        }
                        try {
                            o.current.add(e), n(!0), await i(t, l)
                        } catch (t) {
                            throw oj({
                                category: e
                            })(t), t
                        } finally {
                            o.current.delete(e), n(!1)
                        }
                    });
                    return {
                        scheduleDataByCompetitionDay: t,
                        isUpdatingScheduleDataByCompetitionDay: i,
                        setScheduleDataByCompetitionDay: l,
                        setScheduleDataByCompetitionDayAsync: a
                    }
                },
                cv = e => {
                    let {
                        filteredScheduleEndpoint: t,
                        pollingConfig: {
                            headerName: l,
                            pollingIntervalMs: i
                        },
                        onScheduleUpdate: n
                    } = e, o = (0, w.useRef)({}), a = s6(e => {
                        n(e)
                    }), d = ag(e => e.updateShowLoadingOverlay);
                    (0, w.useEffect)(() => (o.current[t] = 0, rl({
                        scheduleEndpoint: t,
                        headerName: l,
                        pollScheduleIntervalMs: i,
                        onScheduleUpdate: a,
                        mutableEndpointUpdatedAtMap: o.current,
                        onError: oj({
                            category: "poll|".concat(t)
                        }),
                        updateShowLoadingOverlay: d
                    })), [t, l, i])
                },
                cp = Object.freeze([at.constants.dailySchedule.rows.endOfOlympicDay, at.constants.dailySchedule.rows.competitionDayDivider, at.constants.dailySchedule.rows.olympicDayPlaceholder, at.constants.dailySchedule.rows.dayScheduleGroup, at.constants.dailySchedule.customRows.infoBox]),
                ch = (e, t) => {
                    if (!e || "object" != typeof e) return !1;
                    let {
                        maxAdvertisements: l,
                        intervalBetweenAds: i
                    } = e;
                    return !!(Number.isFinite(l) && l > 0 && Number.isFinite(i)) && i > 0 || (oz("Invalid config: maxAdvertisements and intervalBetweenAds must be positive finite numbers", {
                        category: "addADVRows",
                        objectToLog: e,
                        forceEnable: t
                    }), !1)
                },
                cm = (e, t, l) => {
                    let {
                        debug: i = !1
                    } = null != l ? l : {};
                    if (!ch(t, i)) return e;
                    let {
                        maxAdvertisements: n,
                        intervalBetweenAds: o,
                        adWidth: a,
                        adHeight: d,
                        adIdFormat: r,
                        excludedRowTypes: s
                    } = t, c = new Set(null != s ? s : cp), u = 0, v = 0, p = -1, h = [], m = {
                        category: "addADVRows",
                        forceEnable: i
                    };
                    for (let t of e) {
                        p += 1, h.push(t);
                        let l = lA(t);
                        if (c.has(l)) {
                            oz("Skipping excluded row ".concat(p, " of type ").concat(l), m);
                            continue
                        }
                        if (v += 1, oz("Valid row count incremented: validRowCount=".concat(v), m), v % o == 0 && u < n) {
                            let l = cg({
                                adIdFormat: r,
                                advCount: u,
                                adWidth: a,
                                adHeight: d,
                                debug: i,
                                position: p,
                                prevRowOlympicDay: dj(t),
                                prevRowStartDate: dW(t),
                                prevRowIsLiveEvent: dG(t)
                            });
                            if (h.push(l), (u += 1) >= n) {
                                oz("Reached maximum advertisements (".concat(n, "). Stopping insertion."), m), h.push(...e.slice(p + 1));
                                break
                            }
                        }
                    }
                    return h
                },
                cg = e => {
                    let {
                        adIdFormat: t,
                        advCount: l,
                        adWidth: i,
                        adHeight: n,
                        position: o,
                        debug: a,
                        prevRowOlympicDay: d,
                        prevRowStartDate: r,
                        prevRowIsLiveEvent: s
                    } = e, c = t.replace("{{id}}", String(l + 1)), u = {
                        type: at.constants.dailySchedule.customRows.advRow,
                        id: c,
                        width: i,
                        height: n,
                        clientOnly: !0,
                        customData: {
                            prevRowOlympicDay: d,
                            prevRowIsLiveEvent: s,
                            prevRowStartDate: r
                        }
                    };
                    return oz("Adding ADV row: id=".concat(c, ", position=").concat(o), {
                        category: "addADVRows",
                        forceEnable: a
                    }), u
                };
            var cy = l(50361),
                cf = l.n(cy);
            let cx = e => {
                    let {
                        rows: t,
                        previousEventRow: l,
                        currentEventRow: i,
                        enableCompetitionDayDivider: n
                    } = e;
                    if (n && (null == l ? void 0 : l.startDate) && i.startDate) {
                        let e = Y.ou.fromISO(l.startDate, {
                                setZone: !0
                            }),
                            n = Y.ou.fromISO(i.startDate, {
                                setZone: !0
                            }),
                            o = oK.default.time.ISODateFormat;
                        if (e.toFormat(o) !== n.toFormat(o)) {
                            let e = i.olympicDay !== n.toFormat(o) ? n.toFormat(o) : i.olympicDay;
                            t.push({
                                type: oK.default.dailySchedule.rows.competitionDayDivider,
                                olympicDay: null != e ? e : void 0
                            })
                        }
                    }
                },
                cb = (e, t) => (null == e ? void 0 : e.length) === 1 && oK.default.dailySchedule.byeResultCodes.includes(t) ? [...e, {
                    results: {
                        byeResultCode: t
                    }
                }] : e,
                cw = e => {
                    let {
                        event: t,
                        hasWinner: l
                    } = e, {
                        competitors: i,
                        resCode: n,
                        round: o
                    } = t;
                    return oK.default.dailySchedule.byeResultCodes.includes(n) ? i : !l && oK.default.dailySchedule.doubleResultCodes.includes(n) ? i.map(e => ({ ...e,
                        results: { ...e.results,
                            resultCode: n,
                            round: o
                        }
                    })) : i.map(e => {
                        var t;
                        return (null === (t = e.results) || void 0 === t ? void 0 : t.winnerLoserTie) === oK.default.dailySchedule.winnerCompetitorMark ? { ...e,
                            results: { ...e.results,
                                resultCode: n,
                                round: o
                            }
                        } : e
                    })
                };
            var c_ = l(89734),
                cI = l.n(c_);
            let cC = e => {
                    let {
                        event: t,
                        nocFilter: l,
                        relevantMedals: i
                    } = e, n = [];
                    if (t.scheduleItemType === oK.default.dailySchedule.scheduleItemType.event) {
                        if (l && l !== oK.default.allItems) n = t.competitors.filter(e => {
                            let {
                                noc: t
                            } = e;
                            return l === t
                        }), n = cI()(n, e => e.order);
                        else {
                            let e = t.competitors.filter(e => {
                                let {
                                    results: t
                                } = e;
                                return (null == t ? void 0 : t.medalType) && i.includes(t.medalType)
                            });
                            n = cI()(e, e => {
                                var t;
                                return null === (t = e.results) || void 0 === t ? void 0 : t.position
                            })
                        }
                    } else n = cI()(t.competitors, e => e.order);
                    return n
                },
                cS = Object.values(oK.default.relevantMedals),
                cT = e => {
                    let {
                        event: t,
                        nocFilter: l
                    } = e, {
                        competitors: i
                    } = t;
                    if (null == i ? void 0 : i.length) {
                        var n, o;
                        if (t.competitors = cC({
                                event: t,
                                nocFilter: l,
                                relevantMedals: cS
                            }), lk(null !== (n = t.scheduleItemType) && void 0 !== n ? n : "")) {
                            let e = null === (o = t.competitors) || void 0 === o ? void 0 : o.some(e => {
                                let {
                                    results: t
                                } = e;
                                return (null == t ? void 0 : t.winnerLoserTie) === oK.default.dailySchedule.winnerCompetitorMark
                            });
                            t.resCode && (t.competitors = cb(t.competitors, t.resCode), t.competitors = cw({
                                event: t,
                                hasWinner: e
                            }))
                        }
                    }
                },
                cD = e => {
                    let {
                        rows: t,
                        previousEventRow: l,
                        currentEventRow: i
                    } = e;
                    if (l && l.olympicDay !== i.olympicDay) {
                        var n;
                        t.push({
                            type: "end-of-olympic-day",
                            olympicDay: null !== (n = null == l ? void 0 : l.olympicDay) && void 0 !== n ? n : void 0
                        })
                    }
                },
                cZ = (e, t, l) => {
                    let i = {
                            type: at.constants.dailySchedule.rows.competitionDayDivider,
                            olympicDay: e
                        },
                        n = {
                            type: at.constants.dailySchedule.rows.endOfOlympicDay,
                            olympicDay: e
                        },
                        o = {
                            type: at.constants.dailySchedule.rows.olympicDayPlaceholder,
                            olympicDay: e,
                            startDate: Y.ou.fromISO(e, {
                                zone: t
                            }).toISO()
                        },
                        a = [i, o, o, o, o, o, o, o, n];
                    return l || a.splice(0, 1), a
                },
                cE = e => {
                    let {
                        rows: t,
                        previousEventRow: l,
                        currentEventRow: i,
                        scheduleDataByCompetitionDay: n,
                        venueTimeZone: o,
                        enablePlaceholders: a,
                        enableCompetitionDayDivider: d
                    } = e, r = null == l ? void 0 : l.olympicDay, s = null == i ? void 0 : i.olympicDay;
                    if (!r || !s || !a) return;
                    let c = Y.ou.fromISO(r, {
                            zone: o
                        }).startOf("day"),
                        u = Y.ou.fromISO(s, {
                            zone: o
                        }).startOf("day"),
                        v = c;
                    for (;
                        (v = v.plus({
                            days: 1
                        })) < u;) {
                        let e = v.toFormat(oK.default.time.ISODateFormat);
                        dA(n, e) || t.push(...cZ(e, o, d))
                    }
                },
                ck = e => cI()(Object.entries(e), e => {
                    let [t] = e;
                    return t
                }).reduce((e, t) => {
                    let [l, i] = t;
                    return e.push(...i), e
                }, []),
                cN = (e, t) => {
                    let l = t.find(t => t.id === e.groupId),
                        i = cf()(l),
                        n = t.filter(t => t.id !== e.groupId);
                    return i && (i.units || (i.units = []), i.units.find(t => t.id === e.id) || (i.units = [...i.units, e]), n.push(i)), n
                },
                cR = e => {
                    let {
                        mutableUnit: t,
                        filterUnitPayload: l,
                        notBeforeLabelWithPlaceholder: i,
                        venueTimeZone: n
                    } = e;
                    l.isLocalTimeZone && (t.startDate = t.startDate && Y.ou.fromISO(t.startDate).toISO(), t.endDate = t.endDate && Y.ou.fromISO(t.endDate).toISO()), t.startText = rr({
                        labelWithPlaceholder: i,
                        startText: t.startText,
                        venueTimeZone: n,
                        isLocalTimeZone: l.isLocalTimeZone
                    })
                },
                cM = e => {
                    let {
                        rows: t,
                        venueTimeZone: l,
                        data: i,
                        competitionDays: n,
                        enablePlaceholders: o,
                        enableCompetitionDayDivider: a
                    } = e;
                    if (!o) return;
                    let d = rF(n),
                        r = dj(t.find(dj)),
                        s = r ? d.filter(e => e < r && !dA(i, e)).reverse() : void 0;
                    null == s || s.forEach(e => {
                        t.unshift(...cZ(e, l, a))
                    })
                },
                cF = e => {
                    let t = [];
                    return null == e || e.forEach(e => {
                        e.eventName && !t.includes(e.eventName) && t.push(e.eventName)
                    }), t.length > 0 ? t.join(", ") : ""
                },
                cO = (e, t) => {
                    var l;
                    e.isLive = !1, e.hasMedals = !1, e.hasWarnings = !1, null === (l = e.units) || void 0 === l || l.forEach(t => {
                        var l;
                        t.liveFlag && (e.isLive = !0), 0 !== t.medalFlag && (e.hasMedals = !0), lE(t.status) && (e.hasWarnings = !0), e.unitsCount = null === (l = e.units) || void 0 === l ? void 0 : l.length
                    }), e.type === oK.default.dailySchedule.property.discipline && (e.subTitle = cF(e.units)), t && (e.startDate = e.startDate && Y.ou.fromISO(e.startDate).toISO())
                },
                cB = (e, t) => {
                    e.forEach(e => {
                        cO(e, t)
                    })
                },
                cL = (e, t) => {
                    var l;
                    return null === (l = e.units) || void 0 === l ? void 0 : l.filter(e => e.id && (null == t ? void 0 : t.includes(e.id)))
                },
                cz = (e, t, l) => {
                    if (e && e.length > 0) {
                        let i = { ...t,
                            units: e,
                            unitsCount: e.length
                        };
                        return cO(i, l), i
                    }
                },
                cj = (e, t, l, i, n, o) => {
                    let a = e.find(e => e.id === t);
                    if (a && !i.includes(t)) {
                        let e = cL(a, o);
                        if (!l) return a; {
                            let t = cz(e, a, n);
                            if (t) return t
                        }
                    }
                },
                cA = (e, t, l, i, n) => {
                    let o = [],
                        a = [];
                    return e.forEach(e => {
                        if ("groupId" in e && e.groupId && t.find(t => t.id === e.groupId)) {
                            let d = cj(t, e.groupId, l, o, i, n);
                            d && a.push(d), o.push(e.groupId)
                        } else a.push(e)
                    }), a
                },
                cW = e => e.includes("T") ? e.split("T")[0] : e,
                cH = (e, t) => {
                    let {
                        isFirstRender: l
                    } = t;
                    if (l) return oz("First render. Skipping validation.", {
                        category: "validateAndFixRows",
                        level: oM.Info
                    }), e;
                    let i = [],
                        n = null,
                        o = new Set,
                        a = new Set,
                        d = [],
                        r = [],
                        s = [];
                    e.forEach(e => {
                        if (d0(e) || d1(e)) {
                            let t = cW(e.olympicDay);
                            t !== e.olympicDay && r.push("".concat(e.olympicDay, " -> ").concat(t)), d0(e) ? o.add(t) : a.add(t)
                        }
                    });
                    for (let t = 0; t < e.length; t++) {
                        let l = e[t],
                            r = l.startDate ? cW(l.startDate) : null;
                        if (d0(l) || d1(l)) {
                            let e = cW(l.olympicDay);
                            e !== l.olympicDay && (l = { ...l,
                                olympicDay: e
                            }), i.push(l), n = e
                        } else r && r !== n && (o.has(r) || s.push(r), n && !a.has(n) && (i.push({
                            type: "end-of-olympic-day",
                            olympicDay: n
                        }), d.push(n), a.add(n)), n = r), i.push(l)
                    }
                    return n && !a.has(n) && (i.push({
                        type: "end-of-olympic-day",
                        olympicDay: n
                    }), d.push(n)), d.length > 0 || r.length > 0 || s.length > 0 ? (oz("Modifications made:", {
                        category: "validateAndFixRows",
                        level: oM.Info
                    }), s.length > 0 && oz("Missing competition day dividers for: ".concat(s.join(", ")), {
                        category: "validateAndFixRows",
                        level: oM.Warn
                    }), d.length > 0 && oz("Added end of olympic day for: ".concat(d.join(", ")), {
                        category: "validateAndFixRows",
                        level: oM.Info
                    }), r.length > 0 && oz("Normalized dates: ".concat(r.join(", ")), {
                        category: "validateAndFixRows",
                        level: oM.Info
                    })) : oz("Validation passed. No modifications were necessary.", {
                        category: "validateAndFixRows",
                        level: oM.Info
                    }), oz("Row comparison:", {
                        category: "validateAndFixRows",
                        level: oM.Info,
                        objectToLog: {
                            fixedRows: i,
                            rows: e
                        }
                    }), i
                },
                cG = e => {
                    var t, l;
                    let {
                        data: i,
                        filterUnitPayload: n,
                        competitionDays: o,
                        venueTimeZone: a,
                        enablePlaceholders: d,
                        enableCompetitionDayDivider: r,
                        notBeforeLabelWithPlaceholder: s
                    } = e, c = [], u = null !== (t = null == i ? void 0 : i.groups) && void 0 !== t ? t : [];
                    if (!(null == i ? void 0 : i.unitsByCompetitionDay)) return c;
                    let v = ck(i.unitsByCompetitionDay),
                        p = null;
                    for (let e of v) {
                        if (!dL({
                                event: e,
                                filterUnitPayload: n
                            })) continue;
                        let t = cf()(e);
                        cR({
                            mutableUnit: t,
                            filterUnitPayload: n,
                            notBeforeLabelWithPlaceholder: s,
                            venueTimeZone: a
                        }), cT({
                            event: t,
                            nocFilter: null === (l = n.nocFilter) || void 0 === l ? void 0 : l[0]
                        });
                        let o = c.length;
                        if (0 === o && ru({
                                clonedEvent: t,
                                rows: c,
                                isFirstRender: !r
                            }), o > 1) {
                            let e = c.findLast(e => !lj(e) && dW(e)),
                                l = {
                                    rows: c,
                                    previousEventRow: e,
                                    currentEventRow: t,
                                    enableCompetitionDayDivider: r
                                };
                            cD(l), cE({ ...l,
                                scheduleDataByCompetitionDay: i,
                                venueTimeZone: a,
                                enablePlaceholders: d
                            }), cx(l)
                        }
                        c.push(t), t.groupId && (u = cN(t, u)), p = t
                    }
                    if (p) {
                        let e = {
                            type: "end-of-olympic-day",
                            olympicDay: p.olympicDay
                        };
                        c.push(e)
                    }
                    return cM({
                        rows: c,
                        venueTimeZone: a,
                        competitionDays: o,
                        data: i,
                        enableCompetitionDayDivider: r,
                        enablePlaceholders: d
                    }), cB(u, n.isLocalTimeZone), rv(cH(cA(c, u, !!n.savedFlagFilter, n.isLocalTimeZone, n.savedEventUnits), {
                        isFirstRender: !r
                    }))
                },
                cX = (e, t, l, i) => {
                    if (-1 !== e.findIndex(e => e.type === at.constants.dailySchedule.customRows.scrollUp)) return e;
                    let n = dV({
                        rows: e,
                        eventStartDate: ra(e, t),
                        isFullSchedule: l,
                        minutesThresholdLiveEvent: i
                    });
                    if (!n) return e;
                    let o = !1;
                    for (let t = 0; t < n; t += 1) e[t].id && (o = !0);
                    if (!o) return e;
                    let a = e.slice(),
                        d = {
                            type: at.constants.dailySchedule.customRows.scrollUp,
                            clientOnly: !0
                        };
                    return a[n - 1].type === at.constants.dailySchedule.customRows.advRow ? a[n - 2].type === at.constants.dailySchedule.rows.competitionDayDivider ? a.splice(n - 2, 0, d) : a.splice(n - 1, 0, d) : a[n - 1].type === at.constants.dailySchedule.rows.competitionDayDivider ? a.splice(n - 1, 0, d) : a.splice(n, 0, d), a
                },
                cP = e => {
                    var t;
                    let [l, i] = (0, w.useState)(null), n = (0, w.useRef)(void 0);
                    if ((0, w.useEffect)(() => {
                            if (!oY()(e, n.current) && (n.current = e, null == e ? void 0 : e.additionalFilters)) {
                                let t = e.additionalFilters.find(e => "day" === e.type);
                                t && !oY()(t, l) && i(t)
                            }
                        }, [e]), e) return { ...e,
                        additionalFilters: [...(null === (t = e.additionalFilters) || void 0 === t ? void 0 : t.filter(e => "day" !== e.type)) || [], ...l ? [l] : []]
                    }
                },
                c$ = e => {
                    let {
                        venueTimeZone: t,
                        data: l,
                        competitionDays: i,
                        advConfig: n,
                        filterUnitPayload: o,
                        enableCompetitionDayDivider: a,
                        enablePlaceholders: d,
                        infoBoxesConfig: r,
                        isFullSchedule: s,
                        minutesThresholdLiveEvent: c
                    } = e, {
                        filters: u
                    } = ax(), {
                        translate: v
                    } = (0, l1.$G)(), p = cP(u), h = v("daily_schedule_not_before_start_text"), m = ag(e => e.updateAdditionalFiltersStatus), g = (0, w.useMemo)(() => cG({
                        data: l,
                        filterUnitPayload: o,
                        venueTimeZone: t,
                        competitionDays: i,
                        enablePlaceholders: d,
                        enableCompetitionDayDivider: a,
                        notBeforeLabelWithPlaceholder: h
                    }), [l, o, t, i, a, d, h]), y = g.filter(e => e.id).length, f = (0, w.useRef)(y);
                    (0, w.useEffect)(() => {
                        y < f.current && m(av.APPLIED)
                    }, [y]);
                    let x = (0, w.useCallback)(e => cX(e, p, s, c), [p, s, c]),
                        b = (0, w.useCallback)(e => rf(e, {
                            infoBoxesConfig: r,
                            widgetFilters: p,
                            isFullSchedule: s,
                            minutesThresholdLiveEvent: c
                        }), [r, p, s, c]),
                        _ = (0, w.useRef)([]);
                    return (0, w.useMemo)(() => {
                        let e = b(x(cm(g, n)));
                        return oY()(e, _.current) ? _.current : (_.current = e, e)
                    }, [g, n, x, b])
                };
            var cU = e => {
                let t = r1(),
                    {
                        savedEventUnits: l,
                        scheduleDataSource: i,
                        filteredSchedulePollingConfig: n,
                        initialFilterDays: o
                    } = e,
                    {
                        scheduleDataByCompetitionDay: a,
                        setScheduleDataByCompetitionDay: d,
                        isUpdatingScheduleDataByCompetitionDay: r
                    } = cu(i.initialSchedule),
                    s = ag(e => e.updateShowLoadingOverlay),
                    c = ag(e => e.switchToFilteredSchedule),
                    u = ag(e => e.resetSwitchTo);
                cv({
                    filteredScheduleEndpoint: i.endpoint,
                    pollingConfig: n,
                    onScheduleUpdate(e) {
                        let {
                            schedule: t
                        } = e;
                        d(d5(t))
                    }
                });
                let {
                    filterUnitPayload: v
                } = cc(l), p = sh(), h = c$({
                    data: a,
                    filterUnitPayload: v,
                    venueTimeZone: ai(),
                    competitionDays: o,
                    enablePlaceholders: !1,
                    enableCompetitionDayDivider: !t,
                    advConfig: p,
                    isFullSchedule: !1,
                    infoBoxesConfig: rT()
                });
                return (0, w.useEffect)(() => {
                    e.setRows(h)
                }, [h]), (0, w.useEffect)(() => {
                    h.length ? s(!1) : s(!0)
                }, [h]), (0, w.useEffect)(() => {
                    !r && c && (s(!1), u())
                }, [r, c, s, u]), (0, b.tZ)(co, { ...e,
                    rows: h,
                    filterUnitPayload: v,
                    isLoading: r
                })
            };
            let cV = (e, t) => {
                    let l = ai(),
                        [i, n] = (0, w.useState)(null);
                    return (0, w.useEffect)(() => dF(() => {
                        let t = dO(e, Date.now(), l);
                        "ok" === t.type ? n(l => {
                            let i = {
                                olympicDay: e,
                                code: t.code
                            };
                            return oY()(i, l) ? l : i
                        }) : (n(null), oz("olympicDay=".concat(e, ", ").concat(t.message), {
                            level: oM.Info,
                            category: "useCompareOlympicDay"
                        }))
                    }, t), [l, t, e]), i
                },
                cq = {
                    [h.sameDay]: "currentDayPollingMs",
                    [h.before]: "upcomingDayPollingMs",
                    [h.after]: "pastDayPollingMs"
                },
                cY = (e, t) => (e ? t.polling[cq[e]] : 0) || 0;
            var cJ = e => {
                let {
                    olympicDay: t,
                    fetchConfig: {
                        endpointTemplate: l,
                        headerName: i
                    },
                    onDailyScheduleUpdate: n
                } = e, o = cV(t, at.constants.dailySchedule.update.compareOlympicDayPollingMs), a = null == o ? void 0 : o.olympicDay, d = cY(null == o ? void 0 : o.code, e.fetchConfig), r = (0, w.useRef)({}), s = s6(e => {
                    n(e)
                });
                (0, w.useDebugValue)("now is ".concat((null == o ? void 0 : o.code) ? h[o.code] : "error", " olympicDay=").concat(a)), (0, w.useEffect)(() => rn({
                    pollScheduleIntervalMs: d,
                    endpointTemplate: l,
                    onDailyScheduleUpdate: s,
                    onError: oj({
                        category: "poll|".concat(a)
                    }),
                    headerName: i,
                    olympicDay: a,
                    mutableEndpointUpdatedAtMap: r.current
                }), [d, a, l, i])
            };
            let cK = () => {
                let e = (0, w.useRef)(null);
                return (0, w.useEffect)(() => ((!e.current || e.current.signal.aborted) && (e.current = new AbortController), () => {
                    var t;
                    null === (t = e.current) || void 0 === t || t.abort()
                }), []), (0, w.useCallback)(() => (e.current || (e.current = new AbortController), e.current.signal), [])
            };
            var cQ = e => {
                var t;
                let {
                    setScheduleDataByCompetitionDayAsync: l,
                    competitionDays: i,
                    scheduleByDay: n,
                    rows: o,
                    filterUnitPayload: a
                } = e, d = o.length > 0, r = cK(), s = (0, S.N)(rC())(a), c = ag(e => e.isScrollingToCompetitionDayByCalendar), u = null === (t = ag(e => e.competitionDay)) || void 0 === t ? void 0 : t.split("T")[0], v = s6(async e => {
                    let t = o.some(e => e.type === at.constants.dailySchedule.rows.olympicDayPlaceholder && u === e.olympicDay);
                    if (c && !t) return;
                    let i = e.olympicDays.slice().sort(dE),
                        a = "".concat(at.constants.dailySchedule.requestKey.loadScheduleOfDayRequest, "=").concat(i.join());
                    await l(a, async (t, l) => {
                        await d7({
                            signal: r(),
                            setScheduleData: l,
                            schedule: t,
                            dailyScheduleConfig: n,
                            ...e
                        })
                    }).catch(oj({
                        category: a
                    }))
                });
                (0, w.useEffect)(() => {
                    var e;
                    if (d) return;
                    let t = null == i ? void 0 : null === (e = i.days) || void 0 === e ? void 0 : e.map(e => e.id).sort(dE)[0],
                        o = at.constants.dailySchedule.requestKey.loadMoreOnEmptyList;
                    t && l(o, async (e, l) => {
                        oz("start", {
                            category: o
                        }), await d9({
                            scheduleData: e,
                            olympicDay: t,
                            competitionDays: i,
                            dailyScheduleConfig: n,
                            setScheduleData: l,
                            filterUnitPayload: s
                        })
                    }).catch(oj({
                        category: o
                    }))
                }, [d, s]);
                let p = s6(() => {
                    let e = dj(o.findLast(e => dj(e)));
                    if (!e) return;
                    let t = at.constants.dailySchedule.requestKey.loadMoreOnEndReached;
                    l(t, async (l, o) => {
                        oz("start", {
                            category: t
                        }), await d9({
                            scheduleData: l,
                            olympicDay: e,
                            competitionDays: i,
                            dailyScheduleConfig: n,
                            setScheduleData: o,
                            filterUnitPayload: s,
                            signal: r()
                        })
                    }).catch(oj({
                        category: t
                    }))
                });
                return {
                    loadMoreOnEndReached: (0, w.useMemo)(() => ij()(p, at.constants.dailySchedule.list.loadMoreOnEndReachedThrottleMs, {
                        leading: !0,
                        trailing: !1
                    }), []),
                    loadOlympicDaySchedule: v
                }
            };
            let c0 = e => {
                    let t = (0, w.useRef)(!1),
                        l = s6(() => {
                            t.current = !0
                        });
                    return {
                        onPlaceholderVisible: s6(l => {
                            let {
                                olympicDay: i
                            } = l, n = "handleOnPlaceholderRowVisible";
                            if (!t.current) {
                                oz("skip fetch of ".concat(i, " schedule: has not scrolled to initial row yet"), {
                                    level: oM.Info,
                                    category: n
                                });
                                return
                            }
                            e({
                                olympicDays: [i],
                                cache: "preserve"
                            }).catch(oj({
                                category: n
                            }))
                        }),
                        onScrollToInitialRowCompleted: l
                    }
                },
                c1 = e => {
                    var t;
                    let l = e[e.length - 1],
                        {
                            filters: i
                        } = (0, n6.$J)(),
                        n = null === (t = i.find(e => e.name === oK.default.dailySchedule.filters.day)) || void 0 === t ? void 0 : t.values;
                    return (0, w.useMemo)(() => {
                        if (!n) return !1;
                        let e = Y.ou.fromISO(n[0]),
                            t = Y.ou.fromISO(l);
                        return !!e.isValid && !!t.isValid && e.hasSame(t, "day")
                    }, [l, n])
                };
            var c2 = e => {
                var t;
                let l = r1(),
                    {
                        scheduleDataSource: i,
                        scheduleByDay: n,
                        initialFilterDays: o,
                        savedEventUnits: a,
                        minutesThresholdLiveEvent: d
                    } = e,
                    {
                        scheduleDataByCompetitionDay: r,
                        setScheduleDataByCompetitionDay: s,
                        setScheduleDataByCompetitionDayAsync: c,
                        isUpdatingScheduleDataByCompetitionDay: u
                    } = cu(i.initialSchedule),
                    v = ag(e => e.competitionDay),
                    p = ai();
                cJ({
                    olympicDay: (0, w.useMemo)(() => ro(v, p), [v, p]),
                    fetchConfig: n,
                    onDailyScheduleUpdate: e => {
                        s(t => d3({
                            schedule: t,
                            olympicDay: e.olympicDay,
                            daily: e.schedule
                        }))
                    }
                });
                let {
                    filterUnitPayload: h,
                    isFilterUnitPayloadDeferred: m
                } = cc(a, c1(Object.keys(null !== (t = r.unitsByCompetitionDay) && void 0 !== t ? t : []))), g = sh(), y = c$({
                    data: r,
                    filterUnitPayload: h,
                    venueTimeZone: p,
                    competitionDays: o,
                    enablePlaceholders: !0,
                    enableCompetitionDayDivider: !l,
                    infoBoxesConfig: rT(),
                    advConfig: g,
                    isFullSchedule: !0,
                    minutesThresholdLiveEvent: d
                }), {
                    loadMoreOnEndReached: f,
                    loadOlympicDaySchedule: x
                } = cQ({
                    scheduleByDay: n,
                    rows: y,
                    filterUnitPayload: h,
                    setScheduleDataByCompetitionDayAsync: c,
                    competitionDays: o
                }), {
                    onPlaceholderVisible: _,
                    onScrollToInitialRowCompleted: I
                } = c0(x), C = m || u, S = ag(e => e.updateShowLoadingOverlay), T = ag(e => e.switchToFullSchedule), D = ag(e => e.resetSwitchTo);
                return (0, w.useEffect)(() => {
                    !C && T && (S(!1), D())
                }, [S]), (0, b.tZ)(co, { ...e,
                    rows: y,
                    filterUnitPayload: h,
                    onLastRowVisible: f,
                    onPlaceholderRowVisible: _,
                    onScrollToInitialRowCompleted: I,
                    loadOlympicDaySchedule: x,
                    isLoading: C,
                    isFullSchedule: !0,
                    minutesThresholdLiveEvent: d
                })
            };
            let c4 = () => {
                    let {
                        width: e
                    } = iW();
                    return e < oK.default.tabletMaxResolution ? oK.default.dailySchedule.scrollOnChangeScheduleTypeOffset.mobile : oK.default.dailySchedule.scrollOnChangeScheduleTypeOffset.desktop
                },
                c8 = e => {
                    let {
                        scrollToOffset: t = 0
                    } = e;
                    oz("Scrolling to ".concat(t), {
                        category: "useScrollOnLoadingOverlay"
                    }), window.scrollTo({
                        top: t,
                        behavior: "instant"
                    })
                },
                c3 = () => {
                    let e = (0, w.useRef)(!0),
                        t = ag(e => e.showLoadingOverlay),
                        l = c4();
                    (0, w.useEffect)(() => ("scrollRestoration" in history && (history.scrollRestoration = "manual"), () => {
                        "scrollRestoration" in history && (history.scrollRestoration = "auto")
                    }), []), (0, w.useEffect)(() => {
                        e.current ? e.current = !1 : t && c8({
                            scrollToOffset: l
                        })
                    }, [t, l])
                },
                c5 = (e, t, l, i) => {
                    let n = null != l ? l : null,
                        o = "function" == typeof t,
                        a = (0, w.useRef)(t),
                        d = (0, w.useRef)(i);
                    (0, w.useInsertionEffect)(() => {
                        a.current = t, d.current = i
                    }), (0, w.useEffect)(() => {
                        if (o && n) {
                            var t;
                            let l = null === (t = d.current) || void 0 === t ? void 0 : t.call(d, e),
                                i = [e, function(e) {
                                    "function" == typeof a.current && a.current(e)
                                }, l];
                            return n.addEventListener(...i), () => {
                                n.removeEventListener(...i)
                            }
                        }
                    }, [e, n, o])
                };

            function c6(e, t, l) {
                c5(e, t, "undefined" != typeof document ? document : null, l)
            }
            let c7 = () => {
                let e = (0, w.useRef)(null),
                    t = (0, w.useRef)({
                        venue: null,
                        medalEvents: !1
                    }),
                    l = r1(),
                    {
                        showLoadingOverlay: i,
                        updateShowLoadingOverlay: n
                    } = ag(e => ({
                        showLoadingOverlay: e.showLoadingOverlay,
                        updateShowLoadingOverlay: e.updateShowLoadingOverlay
                    })),
                    o = c4(),
                    a = (0, w.useCallback)(() => {
                        l || (n(!0), c8({
                            scrollToOffset: o
                        }))
                    }, [o]);
                c6("clickOnMyScheduleFilter", e => {
                    oz("Event received - clickOnMyScheduleFilter", {
                        category: "useScrollOnClientFiltering",
                        objectToLog: {
                            event: e.detail
                        }
                    }), a()
                }), c6(oK.default.eventFiltersForIntegrator.mainEventName, e => {
                    if (l) return;
                    let {
                        selectedFilter: i
                    } = e.detail;
                    if (void 0 !== i.day) return;
                    oz("Event received - FilterEvent", {
                        category: "useScrollOnClientFiltering",
                        objectToLog: {
                            event: e.detail
                        }
                    });
                    let n = i.venue || null,
                        o = !!i.medalEvents;
                    (n !== t.current.venue || o !== t.current.medalEvents) && (a(), t.current = {
                        venue: n,
                        medalEvents: o
                    })
                }), (0, w.useEffect)(() => (i && (e.current = setTimeout(() => {
                    n(!1)
                }, 1e3)), () => {
                    e.current && clearTimeout(e.current)
                }), [i, n])
            };
            oL.initialize({
                debugEnv: "true",
                logLevelEnv: "Debug",
                prettify: !1,
                excludedCategories: ["createDailyScheduleRows", "findIndexOfHighlightedRowOfCompetitionDay", "infobox", "scheduleDataSourceControl", "scrollToIndex", "useHasInteracted", "useInitialVisibleRowIndex", "useScrollOnClientFiltering", "validateAndFixRows"]
            });
            var c9 = as(e => {
                    let {
                        scheduleDataSource: t,
                        infoBoxesConfig: l,
                        minutesThresholdLiveEvent: i,
                        customThemes: n,
                        savedEventUnits: o,
                        favourites: a,
                        languageCode: d,
                        ...r
                    } = e;
                    c3(), c7();
                    let [s, c] = (0, w.useState)([]), u = s3(n), {
                        filterUnitPayload: v
                    } = cc(o), {
                        width: p
                    } = iW(), h = 0 !== p && p < oK.default.mobileMaxResolution, m = (0, w.useRef)(() => {}), g = e => {
                        m.current = e
                    };
                    return (0, b.tZ)(rR, {
                        infoBoxesConfig: l,
                        scheduleByDay: r.scheduleByDay,
                        scheduleDataSource: t,
                        children: (0, b.tZ)(ew, {
                            fonts: [{
                                family: "Rubik",
                                weights: [400, 500]
                            }],
                            children: (0, b.BX)(J, {
                                tx: u.widget.mainContainer,
                                children: [(0, b.tZ)(rU, {
                                    isDisplayingLocalTimeZone: v.isLocalTimeZone,
                                    isSavedFilterActive: !!v.savedFlagFilter,
                                    showModal: h,
                                    favourites: a,
                                    enableDisabledCalendarDays: "filtered" === t.type,
                                    headerTx: u.widget.header,
                                    filterModalTx: u.widget.filterModal,
                                    onCompetitionDayClick: m.current,
                                    languageCode: null != d ? d : "ENG",
                                    rows: s
                                }), "filtered" === t.type ? (0, b.tZ)(cU, { ...r,
                                    savedEventUnits: o,
                                    customThemes: n,
                                    languageCode: d,
                                    scheduleDataSource: t,
                                    setHandleOnCompetitionDayClick: g,
                                    setRows: c
                                }) : (0, b.tZ)(c2, { ...r,
                                    savedEventUnits: o,
                                    customThemes: n,
                                    languageCode: d,
                                    scheduleDataSource: t,
                                    minutesThresholdLiveEvent: i,
                                    setHandleOnCompetitionDayClick: g,
                                    setRows: c
                                })]
                            })
                        })
                    })
                }),
                ue = () => {
                    let {
                        translate: e
                    } = (0, l1.$G)();
                    return {
                        mobileTranslations: (0, w.useMemo)(() => ({
                            sportsTitle: e("schedule_grid_sports_title"),
                            days: [e("label_day_of_week_monday_abbr"), e("label_day_of_week_tuesday_abbr"), e("label_day_of_week_wednesday_abbr"), e("label_day_of_week_thursday_abbr"), e("label_day_of_week_friday_abbr"), e("label_day_of_week_saturday_abbr"), e("label_day_of_week_sunday_abbr")],
                            months: [e("label_month_january_abbr"), e("label_month_february_abbr"), e("label_month_march_abbr"), e("label_month_april_abbr"), e("label_month_may_abbr"), e("label_month_june_abbr"), e("label_month_july_abbr"), e("label_month_august_abbr"), e("label_month_september_abbr"), e("label_month_october_abbr"), e("label_month_november_abbr"), e("label_month_december_abbr")]
                        }), [e]),
                        desktopTranslations: (0, w.useMemo)(() => ({
                            months: [e("label_month_january"), e("label_month_february"), e("label_month_march"), e("label_month_april"), e("label_month_may"), e("label_month_june"), e("label_month_july"), e("label_month_august"), e("label_month_september"), e("label_month_october"), e("label_month_november"), e("label_month_december")],
                            eventIcons: {
                                ceremony: e("schedule_grid_ceremonies_legend"),
                                training: e("schedule_grid_trainingsession_legend"),
                                regular: e("schedule_grid_regularevent_legend"),
                                medal: e("schedule_grid_medalevent_legend")
                            },
                            popupMedalEvent: e("schedule_grid_popup_medal_event"),
                            popupMedalEvents: e("schedule_grid_popup_medal_events")
                        }), [e])
                    }
                },
                ut = as(e => {
                    let {
                        scheduleGridEndpoint: t,
                        customThemes: l,
                        initialScheduleGrid: i,
                        urlConfig: n
                    } = e, o = nm()({}, aB, null == l ? void 0 : l.mobile), a = nm()({}, aO, null == l ? void 0 : l.desktop), {
                        width: d
                    } = iW(), r = d < at.constants.tabletMaxResolution, {
                        data: s
                    } = oP({
                        endpoint: t,
                        shouldFetch: !i,
                        initialData: i
                    }), {
                        mobileTranslations: c,
                        desktopTranslations: u
                    } = ue(), v = r1();
                    return (0, b.tZ)(ew, {
                        fonts: [{
                            family: "Rubik"
                        }],
                        children: (0, b.tZ)(ul, {
                            children: s && (0, b.BX)(b.HY, {
                                children: [(v || r) && (0, b.tZ)(ui, {
                                    data: s,
                                    translations: c,
                                    customTheme: o,
                                    urlConfig: n
                                }), (v || !r) && (0, b.tZ)(un, {
                                    data: s,
                                    translations: u,
                                    customTheme: a,
                                    urlConfig: n
                                })]
                            })
                        })
                    })
                });
            let ul = (0, _.Z)("div", {
                    target: "ezlcc230"
                })("display:flex;flex-direction:column;align-items:center;background-color:#f8f8f9;"),
                ui = (0, _.Z)(nc, {
                    target: "ezlcc231"
                })("display:block;@media (min-width:", at.constants.tabletMaxResolution, "px){display:none;}"),
                un = (0, _.Z)(nl, {
                    target: "ezlcc232"
                })("display:none;@media (min-width:", at.constants.tabletMaxResolution, "px){display:block;}"),
                uo = {
                    isUserLoggedIn: "yes",
                    favNocs: [{
                        code: "USA"
                    }, {
                        code: "ITA"
                    }, {
                        code: "CAN"
                    }],
                    favDisciplines: [{
                        code: "ATH",
                        isPara: !1
                    }, {
                        code: "ATH",
                        isPara: !0
                    }, {
                        code: "SWM",
                        isPara: !1
                    }]
                };
            var ua = e => {
                let {
                    medalsData: t,
                    disciplineFilter: l,
                    activeFilter: i,
                    width: n,
                    itemsNumber: o,
                    includeFavourites: a
                } = e, {
                    enhancedMedalsData: d,
                    medalsEventInfo: r,
                    getFilteredDisciplines: s
                } = sv({
                    medalsData: t,
                    disciplineFilter: l
                }), c = e => {
                    let {
                        favNocs: t
                    } = uo, l = [];
                    return t.forEach(t => {
                        let [i] = e.filter(e => e.organisation === t.code);
                        i && l.push(i)
                    }), l
                }, u = (e, t) => {
                    let l = [...e];
                    for (let e of t) l.some(t => t.organisation === e.organisation) || l.push(e);
                    return l
                }, v = (0, w.useCallback)(e => {
                    let t = [];
                    return e.forEach(e => {
                        let l = s(e);
                        if (l.length > 0) {
                            let i = { ...e
                            };
                            i.enhancedDisciplines = l, i.nocRowMedals = r8(l), t.push(i)
                        }
                    }), t
                }, [s]);
                return {
                    medalsTableData: (0, w.useMemo)(() => {
                        let e = d;
                        return l && (e = v(e)), i || e.forEach(e => {
                            var t;
                            let l = null === (t = e.medalsNumber) || void 0 === t ? void 0 : t.find(e => e.type === at.constants.medalsDataTotalType);
                            l && (e.nocRowMedals = {
                                gold: l.gold,
                                silver: l.silver,
                                bronze: l.bronze,
                                total: l.total
                            })
                        }), o && a && (e = u(e = e.slice(0, o), c(d))), e = su(e, n < at.constants.mobileMaxResolution, {
                            name: at.constants.medalsTable.sorting,
                            sortBy: "Gold"
                        }), o && !a && (e = e.slice(0, o)), e
                    }, [d, l, i, n]),
                    medalsEventInfo: r
                }
            };
            as(e => {
                let {
                    medalsEndpoint: t,
                    customTheme: l,
                    languageCode: i,
                    urlConfig: n,
                    disciplineExpansionEnabled: o,
                    medalistExpansionEnabled: a,
                    hideContextualMenu: d,
                    filterbyDiscipline: r,
                    initialMedals: s,
                    itemsNumber: c,
                    includeFavourites: u
                } = e, {
                    width: v
                } = iW(), {
                    translate: p
                } = (0, l1.$G)(), {
                    noResultsCourtesyMessage1: h,
                    noResultsCourtesyMessage2: m,
                    noFilteredResultsCourtesyMessage1: g,
                    noFilteredResultsCourtesyMessage2: y,
                    ...f
                } = sl(p, {
                    isWideWidget: v > at.constants.mobileMaxResolution
                }), {
                    filters: x,
                    updateFilter: _
                } = (0, n6.$J)(), {
                    disciplineFilter: I
                } = r9(x), {
                    activeFilter: C
                } = r7(I), {
                    data: T
                } = oP({
                    endpoint: t,
                    shouldFetch: !s && (void 0 === c || !!c && c > 0)
                }), {
                    medalsTableData: D,
                    medalsEventInfo: Z
                } = ua({
                    medalsData: T,
                    disciplineFilter: I,
                    activeFilter: C,
                    width: v,
                    itemsNumber: c,
                    includeFavourites: u
                }), {
                    toggleEntity: E,
                    expandableEntitiesState: k,
                    defaultIsEntityExpanded: N
                } = df((0, S.N)(e => {
                    let {
                        toggleEntity: t,
                        defaultIsEntityExpanded: l,
                        expandableEntitiesState: i
                    } = e;
                    return {
                        toggleEntity: t,
                        defaultIsEntityExpanded: l,
                        expandableEntitiesState: i
                    }
                }));
                (0, w.useEffect)(() => {
                    r && _({
                        name: at.constants.medalsTable.filters.discipline,
                        values: [r]
                    })
                }, [r]);
                let R = r ? void 0 : "Gold";
                return (0, b.BX)(ud, {
                    children: [0 === D.length && (C ? (0, b.BX)(b.HY, {
                        children: [(0, b.tZ)("p", {
                            children: g
                        }), (0, b.tZ)("p", {
                            children: y
                        })]
                    }) : (0, b.BX)(b.HY, {
                        children: [(0, b.tZ)("p", {
                            children: h
                        }), (0, b.tZ)("p", {
                            children: m
                        })]
                    })), D.length > 0 && (0, b.tZ)(n8, {
                        data: D,
                        eventInfo: Z,
                        translations: f,
                        customTheme: l,
                        languageCode: i,
                        urlConfig: n,
                        showMedalRank: R,
                        hideFooter: !0,
                        hideContextualMenuIcon: d,
                        hideDisciplineExpansion: !1 === o,
                        hideMedalistExpansion: !1 === a,
                        defaultIsExpanded: N,
                        expandableEntities: k,
                        onExpandToggle: E
                    })]
                })
            });
            let ud = (0, _.Z)("div", {
                    target: "eeycare0"
                })("padding:1rem;background-color:#f8f8f9;"),
                ur = e => {
                    let t = (0, w.useRef)(e);
                    return t.current === e || oY()(t.current, e) || (t.current = e), t.current
                },
                us = ["discipline", "organisation"],
                uc = {
                    discipline: "disciplineCode",
                    organisation: "organisationCode"
                },
                uu = e => {
                    oz("Switching from filtered to full schedule", {
                        category: "scheduleDataSourceControl"
                    }), e({
                        filters: void 0,
                        scheduleDataSource: {
                            type: "full"
                        }
                    })
                },
                uv = async e => {
                    let {
                        filter: t,
                        scheduleByEndpointClientConfig: l,
                        scheduleByEndpointClientDefaultEndpoint: i,
                        setOutputParams: n
                    } = e;
                    oz("Switching to filtered schedule", {
                        category: "scheduleDataSourceControl"
                    });
                    let o = s0({
                        defaultEndpoint: i,
                        filters: {
                            mainFilter: t
                        },
                        endpointConfiguration: l
                    });
                    oz("New endpoint for filtered schedule", {
                        category: "scheduleDataSourceControl",
                        objectToLog: {
                            clientSideScheduleEndpoint: o
                        }
                    }), n({
                        scheduleDataSource: {
                            initialSchedule: await um(o),
                            type: "filtered",
                            endpoint: o
                        },
                        filters: {
                            mainFilter: t
                        }
                    })
                },
                up = e => {
                    oz("Checking for active filters in event detail", {
                        category: "scheduleDataSourceControl",
                        objectToLog: {
                            eventDetail: e
                        }
                    });
                    let t = [];
                    for (let l of us) {
                        let i = e[uc[l]];
                        "string" == typeof i && "" !== i && t.push({
                            type: l,
                            code: i
                        })
                    }
                    return oz("Active filters found", {
                        category: "scheduleDataSourceControl",
                        objectToLog: {
                            activeFilters: t
                        }
                    }), t
                },
                uh = e => {
                    if (oz("Getting highest priority filter", {
                            category: "scheduleDataSourceControl"
                        }), 0 === e.length) return oz("No active filters found", {
                        category: "scheduleDataSourceControl"
                    }), null;
                    let t = e[0];
                    return oz("Highest priority filter", {
                        category: "scheduleDataSourceControl",
                        objectToLog: {
                            highestPriorityFilter: t
                        }
                    }), t
                },
                um = async e => {
                    oz("Fetching initial schedule", {
                        category: "scheduleDataSourceControl"
                    });
                    let t = await fetch(e);
                    return await t.json()
                },
                ug = e => {
                    let t = 0 === e.length;
                    return oz("All filters reset status", {
                        category: "scheduleDataSourceControl",
                        objectToLog: {
                            result: t
                        }
                    }), t
                },
                uy = e => {
                    let {
                        scheduleByEndpointClientConfig: t,
                        scheduleByEndpointClientDefaultEndpoint: l = ""
                    } = e, [i, n] = (0, w.useState)(e), o = ur(e.filters), a = (0, S.N)(rC())(e.scheduleDataSource), d = (0, w.useRef)(o), r = (0, w.useRef)(!1), s = ag(e => e.updateShowLoadingOverlay), c = ag(e => e.updateSwitchToFilteredSchedule), u = ag(e => e.updateSwitchToFullSchedule), v = (0, w.useRef)(!0);
                    return c6(at.constants.eventFiltersForIntegrator.mainEventName, async e => {
                        var a, p, h, m, g;
                        if (v.current && (null == o ? void 0 : null === (a = o.mainFilter) || void 0 === a ? void 0 : a.type) !== "day") {
                            v.current = !1;
                            return
                        }
                        if (1 === Object.keys(e.detail.selectedFilter).length && void 0 !== e.detail.selectedFilter.day) return;
                        oz("Event received", {
                            category: "scheduleDataSourceControl"
                        });
                        let y = up(e.detail),
                            f = uh(y),
                            x = ug(y);
                        if (oz("Current state", {
                                category: "scheduleDataSourceControl",
                                objectToLog: {
                                    outputParamsType: i.scheduleDataSource.type,
                                    isSwitchedToFiltered: r.current,
                                    internalFilters: d.current,
                                    highestPriorityFilter: f
                                }
                            }), x && "filtered" === i.scheduleDataSource.type) oz("All filters reset, switching to full schedule", {
                            category: "scheduleDataSourceControl"
                        }), s(!0), u(), uu(n), d.current = void 0, r.current = !1;
                        else if (f && !r.current) oz("New filter detected, switching to filtered schedule", {
                            category: "scheduleDataSourceControl"
                        }), s(!0), c(), await uv({
                            filter: f,
                            scheduleByEndpointClientConfig: t,
                            scheduleByEndpointClientDefaultEndpoint: l,
                            setOutputParams: n
                        }), r.current = !0, d.current = {
                            mainFilter: f
                        };
                        else if (f && (f.type !== (null === (h = d.current) || void 0 === h ? void 0 : null === (p = h.mainFilter) || void 0 === p ? void 0 : p.type) || f.code !== (null === (g = d.current) || void 0 === g ? void 0 : null === (m = g.mainFilter) || void 0 === m ? void 0 : m.code))) {
                            oz("Highest priority filter changed, updating endpoint", {
                                category: "scheduleDataSourceControl"
                            });
                            let e = s0({
                                defaultEndpoint: l,
                                filters: {
                                    mainFilter: f
                                },
                                endpointConfiguration: t
                            });
                            oz("New endpoint", {
                                category: "scheduleDataSourceControl",
                                objectToLog: {
                                    clientSideScheduleEndpoint: e
                                }
                            }), n(t => ({ ...t,
                                scheduleDataSource: { ...t.scheduleDataSource,
                                    endpoint: e
                                },
                                filters: { ...t.filters,
                                    mainFilter: f
                                }
                            })), d.current = {
                                mainFilter: f
                            }
                        } else oz("No significant changes detected", {
                            category: "scheduleDataSourceControl"
                        });
                        oz("Final state", {
                            category: "scheduleDataSourceControl",
                            objectToLog: {
                                outputParamsType: i.scheduleDataSource.type,
                                isSwitchedToFiltered: r.current,
                                internalFilters: d.current
                            }
                        })
                    }), (0, w.useEffect)(() => {
                        oz("Effect triggered, updating output params", {
                            category: "scheduleDataSourceControl"
                        }), n(e => ({ ...e,
                            filters: o,
                            scheduleDataSource: a
                        }))
                    }, [o, a]), i
                }
        },
        17033: function(e, t) {
            t.default = {
                medalsTable: {
                    filters: {
                        noc: "medalsTableNocFilter",
                        discipline: "medalsTableDisciplineFilter",
                        eventCategory: "medalsTableEventCategoryFilter"
                    },
                    filtersToExclude: {
                        noc: ["AIN"],
                        discipline: [],
                        eventCategory: []
                    },
                    sorting: "medalsTableSorting",
                    favourites: "medalsTableFavourites",
                    selects: {
                        noc: "medalsTableNocSelect",
                        discipline: "medalsTableDisciplineSelect",
                        eventCategory: "medalsTableEventCategorySelect",
                        sorting: "medalsTableSelectSorting"
                    }
                },
                medallistTable: {
                    filters: {
                        noc: "medallistTableNocFilter",
                        discipline: "medallistTableDisciplineFilter",
                        gender: "medallistTableGenderFilter",
                        event: "medallistTableEventFilter",
                        day: "medallistTableDayFilter"
                    },
                    sorting: "medallistTableSorting",
                    favourites: "medallistTableFavourites",
                    selects: {
                        noc: "medallistTableNocSelect",
                        discipline: "medallistTableDisciplineSelect",
                        event: "medallistTableEventSelect",
                        gender: "medallistTableGenderSelect",
                        sorting: "medallistTableSelectSorting"
                    }
                },
                dailySchedule: {
                    customRows: {
                        advRow: "custom-row-adv",
                        infoBox: "custom-row-info-box",
                        scrollUp: "custom-row-scroll-up"
                    },
                    rows: {
                        competitionDayDivider: "competition-day-divider",
                        olympicDayPlaceholder: "olympic-day-placeholder",
                        endOfOlympicDay: "end-of-olympic-day",
                        dayScheduleGroup: "day-schedule-group"
                    },
                    scheduleItemType: {
                        athlete: "H2H_ATH",
                        couple: "H2H_COUP",
                        noc: "H2H_NOC",
                        event: "EVENT"
                    },
                    scheduleItemStatus: {
                        scheduled: "SCHEDULED",
                        running: "RUNNING",
                        finished: "FINISHED"
                    },
                    html: {
                        filterRootDomId: "d3-schedule-filter-root",
                        parisHeaderId: "paris2024-header"
                    },
                    update: {
                        compareOlympicDayPollingMs: 3e4
                    },
                    filters: {
                        medal: "dailyScheduleMedalFilter",
                        saved: "dailyScheduleSavedFilter",
                        discipline: "dailyScheduleDisciplineFilter",
                        disciplineEvent: "dailyScheduleDisciplineEventFilter",
                        noc: "dailyScheduleNocFilter",
                        venue: "dailyScheduleVenueFilter",
                        nocsList: "dailyScheduleNocsList",
                        disciplinesList: "dailyScheduleDisciplinesList",
                        day: "dailyScheduleDayFilter",
                        venueTimeZone: "venueTimeZone"
                    },
                    favourites: "dailyScheduleFavourites",
                    selects: {
                        noc: "dailyScheduleNocSelect",
                        discipline: "dailyScheduleDisciplineSelect",
                        disciplineEvent: "dailyScheduleEventSelect",
                        venue: "dailyScheduleVenueSelect"
                    },
                    requestKey: {
                        loadScheduleOfDayRequest: "loadOlympicDaySchedule",
                        loadMoreOnEmptyList: "load-more-on-empty-list",
                        loadMoreOnEndReached: "load-more-on-end-reached"
                    },
                    events: {
                        clickOnMySchedule: "clickOnMySchedule",
                        clickOnCompetitionDay: "clickOnCompetitionDay"
                    },
                    calendar: {
                        scrollDelayAfterFetchCompletedMs: 250
                    },
                    settings: {
                        timeZone: "dailyScheduleVenueTimeZone",
                        competitionDay: "dailyScheduleCompetitionDay"
                    },
                    list: {
                        loadMoreOnEndReachedThrottleMs: 200,
                        scrollToCalendarDayDelayMs: 1500,
                        initialScrollHideCollapseNavbarIndex: 4
                    },
                    winnerCompetitorMark: "W",
                    doubleResultCodes: ["2DQB", "2VFO", "2VIN", "BDSQ", "DKO"],
                    byeResultCodes: ["BYE", "W/O", "NCT", "NW"],
                    property: {
                        discipline: "discipline"
                    },
                    expandAll: {
                        buttonId: "expand-all-button",
                        toggleId: "expand-all-toggle",
                        toggleLabelId: "expand-all-toggle-label"
                    },
                    stickyHeaderOffsets: {
                        desktop: {
                            filterBarExpanded: -208,
                            filterBarCompressed: -164
                        },
                        mobile: {
                            filterBarExpanded: -208,
                            filterBarCompressed: -135
                        }
                    },
                    stickyADVHeight: {
                        desktop: 122,
                        mobile: 80
                    },
                    scrollOnChangeScheduleTypeOffset: {
                        desktop: 512,
                        mobile: 390
                    },
                    filterBarStickyOffsets: {
                        desktop: {
                            scrollDown: 33,
                            scrollUp: 40
                        },
                        mobile: {
                            scrollDown: -10,
                            scrollUp: 0
                        }
                    }
                },
                misc: {
                    events: {
                        clickOnFavoritesLoginRegister: "clickOnFavoritesLoginRegister",
                        clickOnManageFavorites: "clickOnManageFavorites",
                        clickOnFavouriteButton: "clickOnFavouriteButton",
                        calendarDaySelected: "calendarDaySelected"
                    }
                },
                icons: {
                    medal: "medal",
                    bookmarkBordered: "bookmarkBordered",
                    bookmarkFilled: "bookmarkFilled",
                    selectClear: "selectClear"
                },
                settings: {
                    collapsibleFilterBar: "collapsibleFilterBar"
                },
                time: {
                    ISODateFormat: "yyyy-LL-dd",
                    defaultVenueTimeZone: "Europe/Paris"
                },
                filters: {
                    a11yLabels: {
                        discipline: "sport",
                        noc: "noc",
                        venue: "venue",
                        events: "events",
                        gender: "gender"
                    }
                },
                sort: {
                    a11yLabels: {
                        sort: "sort"
                    }
                },
                allItems: "allItems",
                medalsDataTotalType: "Total",
                mobileMaxResolution: 768,
                tabletMaxResolution: 1280,
                relevantMedals: {
                    gold: "ME_GOLD",
                    silver: "ME_SILVER",
                    bronze: "ME_BRONZE"
                },
                eventFiltersForIntegrator: {
                    mainEventName: "filterApplied",
                    resetFiltersMobileEventName: "clickOnResetFiltersMobile",
                    eventCategoryDescriptions: {
                        men: "MEN",
                        women: "WOMEN",
                        open: "OPEN",
                        mixed: "MIXED",
                        total: "TOTAL"
                    },
                    monthShortNames: {
                        january: "jan",
                        february: "feb",
                        march: "mar",
                        april: "apr",
                        may: "may",
                        june: "jun",
                        july: "jul",
                        august: "aug",
                        september: "sep",
                        october: "oct",
                        november: "nov",
                        december: "dec"
                    }
                },
                eventSortingForIntegrator: {
                    eventNameForClickButton: "clickOnSortingButton"
                },
                filterTypes: {
                    disciplineAndEvent: "disciplineAndEvent",
                    discipline: "discipline",
                    eventCategory: "eventCategory",
                    noc: "noc",
                    gender: "gender",
                    venue: "venue"
                },
                triathlon: {
                    eventUnitTeam: "TEAM",
                    swim: "SWIM",
                    bike: "BIKE",
                    run: "RUN",
                    startAndFinish: "startAndFinish",
                    transition1: "TRANS1",
                    transition2: "TRANS2",
                    mapLeg: {
                        1: "A",
                        2: "B",
                        3: "C",
                        4: "D"
                    },
                    resultStatus: ["OFFICIAL", "UNOFFICIAL", "UNCONFIRMED", "INTERMEDIATE", "PARTIAL", "PROTESTED", "PROVISIONAL"],
                    carouselSegmentStartId: "start",
                    carouselSegmentFinishId: "finish",
                    section: "SECTION",
                    sector: "SECTOR",
                    teamIntermediate: "TEAM_INTERMEDIATE"
                },
                defaultGeneratedAtHeaderName: "x-generated-at"
            }
        },
        98116: function(e, t, l) {
            l.d(t, {
                constants: function() {
                    return i.default
                }
            });
            var i = l(17033)
        }
    }
]);
//# sourceMappingURL=21-0194725ca5c08ab4.js.map