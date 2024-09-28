! function() {
    "use strict";

    function n(n, e) {
        if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function e(n) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }, e(n)
    }

    function t(n) {
        var t = function(n, t) {
            if ("object" !== e(n) || null === n) return n;
            var r = n[Symbol.toPrimitive];
            if (void 0 !== r) {
                var o = r.call(n, "string");
                if ("object" !== e(o)) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(n)
        }(n);
        return "symbol" === e(t) ? t : String(t)
    }

    function r(n, e) {
        for (var r = 0; r < e.length; r++) {
            var o = e[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, t(o.key), o)
        }
    }

    function o(n, e, t) {
        return e && r(n.prototype, e), t && r(n, t), Object.defineProperty(n, "prototype", {
            writable: !1
        }), n
    }

    function i(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r
    }

    function a(n) {
        return function(n) {
            if (Array.isArray(n)) return i(n)
        }(n) || function(n) {
            if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
        }(n) || function(n, e) {
            if (n) {
                if ("string" == typeof n) return i(n, e);
                var t = Object.prototype.toString.call(n).slice(8, -1);
                return "Object" === t && n.constructor && (t = n.constructor.name), "Map" === t || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? i(n, e) : void 0
            }
        }(n) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(n, e, r) {
        return (e = t(e)) in n ? Object.defineProperty(n, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[e] = r, n
    }

    function s(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r
    }
    var c = function() {
        function e() {
            n(this, e), d(this, "enabled", !1)
        }
        return o(e, [{
            key: "getCookie",
            value: function(n) {
                var e, t = n + "=",
                    r = document.cookie.split(";").map((function(n) {
                        return n.includes("_gig_llu") ? escape(n) : n
                    })).join(";"),
                    o = function(n, e) {
                        var t = "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                        if (!t) {
                            if (Array.isArray(n) || (t = function(n, e) {
                                    if (n) {
                                        if ("string" == typeof n) return s(n, e);
                                        var t = Object.prototype.toString.call(n).slice(8, -1);
                                        return "Object" === t && n.constructor && (t = n.constructor.name), "Map" === t || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? s(n, e) : void 0
                                    }
                                }(n)) || e && n && "number" == typeof n.length) {
                                t && (n = t);
                                var r = 0,
                                    o = function() {};
                                return {
                                    s: o,
                                    n: function() {
                                        return r >= n.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: n[r++]
                                        }
                                    },
                                    e: function(n) {
                                        throw n
                                    },
                                    f: o
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var i, a = !0,
                            d = !1;
                        return {
                            s: function() {
                                t = t.call(n)
                            },
                            n: function() {
                                var n = t.next();
                                return a = n.done, n
                            },
                            e: function(n) {
                                d = !0, i = n
                            },
                            f: function() {
                                try {
                                    a || null == t.return || t.return()
                                } finally {
                                    if (d) throw i
                                }
                            }
                        }
                    }(decodeURIComponent(r).split(";"));
                try {
                    for (o.s(); !(e = o.n()).done;) {
                        var i = e.value;
                        if (-1 !== i.indexOf(t)) return i.substring(i.indexOf(t) + t.length, i.length)
                    }
                } catch (n) {
                    o.e(n)
                } finally {
                    o.f()
                }
                return ""
            }
        }, {
            key: "log",
            value: function(n) {
                if (this.enabled) {
                    for (var e, t = Date.now() - window.ddnawrapper.diagnostic.startTime, r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                    var d = null != o ? o : [];
                    d = d.length > 0 ? d.flat() : "", (e = console).debug.apply(e, [t + " ms. DDNA WRAPPER - " + n].concat(a(d)))
                }
            }
        }, {
            key: "init",
            value: function() {
                window.ddnawrapper = window.ddnawrapper || {};
                var n = window.ddnawrapper.diagnostic || {
                    initialized: !1
                };
                if (!n.initialized) {
                    var e = this.getCookie("d3Debug");
                    this.enabled = e.length > 0, n.enabled = this.enabled, n.initialized = !0, n.startTime = Date.now(), n.log = this.log, window.ddnawrapper = window.ddnawrapper || {}, window.ddnawrapper.diagnostic = window.ddnawrapper.diagnostic || {}, window.ddnawrapper.diagnostic = n, n.log("Diagnostic enabled by cookie")
                }
            }
        }]), e
    }();

    function l(n) {
        return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
            return n.__proto__ || Object.getPrototypeOf(n)
        }, l(n)
    }

    function u(n, e) {
        for (; !Object.prototype.hasOwnProperty.call(n, e) && null !== (n = l(n)););
        return n
    }

    function p() {
        return p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(n, e, t) {
            var r = u(n, e);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, e);
                return o.get ? o.get.call(arguments.length < 3 ? n : t) : o.value
            }
        }, p.apply(this, arguments)
    }

    function w(n, e) {
        return w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, e) {
            return n.__proto__ = e, n
        }, w(n, e)
    }

    function g(n, t) {
        if (t && ("object" === e(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function(n) {
            if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return n
        }(n)
    }

    function f(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r
    }

    function v(n) {
        var e = new URLSearchParams(window.location.search),
            t = Object.fromEntries(e.entries());
        return n && t && t.length > 0 ? t[n] : t
    }

    function y(n) {
        return new URLSearchParams(window.location.search).get(n)
    }

    function m() {
        return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
    }

    function h() {
        var n = document.querySelector("script[src*='ddna-wrapper']").getAttribute("src");
        try {
            var e = new URL(n),
                t = e.hostname,
                r = e.port;
            return 0 !== r && (t += ":".concat(r)), t
        } catch (n) {
            return "olympics.com"
        }
    }

    function b(n) {
        var e, t = n + "=",
            r = document.cookie.split(";").map((function(n) {
                return n.includes("_gig_llu") ? escape(n) : n
            })).join(";"),
            o = function(n, e) {
                var t = "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                if (!t) {
                    if (Array.isArray(n) || (t = function(n, e) {
                            if (n) {
                                if ("string" == typeof n) return f(n, e);
                                var t = Object.prototype.toString.call(n).slice(8, -1);
                                return "Object" === t && n.constructor && (t = n.constructor.name), "Map" === t || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? f(n, e) : void 0
                            }
                        }(n)) || e && n && "number" == typeof n.length) {
                        t && (n = t);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= n.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: n[r++]
                                }
                            },
                            e: function(n) {
                                throw n
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    d = !1;
                return {
                    s: function() {
                        t = t.call(n)
                    },
                    n: function() {
                        var n = t.next();
                        return a = n.done, n
                    },
                    e: function(n) {
                        d = !0, i = n
                    },
                    f: function() {
                        try {
                            a || null == t.return || t.return()
                        } finally {
                            if (d) throw i
                        }
                    }
                }
            }(decodeURIComponent(r).split(";"));
        try {
            for (o.s(); !(e = o.n()).done;) {
                var i = e.value;
                if (-1 !== i.indexOf(t)) return i.substring(i.indexOf(t) + t.length, i.length)
            }
        } catch (n) {
            o.e(n)
        } finally {
            o.f()
        }
        return ""
    }

    function C(n, e, t) {
        b(n) && (document.cookie = n + "=" + (e ? ";path=" + e : "") + (t ? ";domain=" + t : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT")
    }

    function k() {
        return "true" == new URLSearchParams(window.location.search.toLowerCase()).get("displayaswebview")
    }
    var S = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",
        O = ["C0001", "C0002", "C0003", "C0004", "C0005"],
        A = function() {
            function e() {
                n(this, e), this.isLoaded = !1, this.hasOptanonBoxClosedCookie = !1, this.isOptOutMode = !1, window.ddnawrapper.consent = window.ddnawrapper.consent || {}, window.ddnawrapper.consent.fillD3ConsentVariablesFromOneTrustCookie = this.fillD3ConsentVariablesFromOneTrustCookie, window.ddnawrapper.events = window.ddnawrapper.events || {}
            }
            return o(e, [{
                key: "triggerCookieLoadedEvent",
                value: function() {
                    if (window.ddnawrapper = window.ddnawrapper || {}, window.ddnawrapper.events = window.ddnawrapper.events || {}, !window.ddnawrapper.events.cookieLoadedTriggered) {
                        var n = new CustomEvent("cookies-loaded");
                        window.dispatchEvent(n), window.ddnawrapper.events.cookieLoadedTriggered = !0
                    }
                }
            }, {
                key: "initFunctionsForThirdParties",
                value: function() {
                    var n = window.ddnawrapper.diagnostic || {},
                        e = window.GlobalConfiguration || {};
                    n.log("Init consent object"), window.ddnawrapper = window.ddnawrapper || {}, window.ddnawrapper.consent = window.ddnawrapper.consent || {}, window.ddnawrapper.consent.isSpecialTerritory = function() {
                        var t = e.segmentSpecialMarkets || "",
                            r = window.deltatre.userNation;
                        if (void 0 === r) return console.warn("User nation not yet ready"), null;
                        var o = y("user_nation");
                        return o && (n.log("User nation overwritten by query string parameter. Was: ".concat(r, " and has been set to ").concat(o)), ("string" == typeof o || o instanceof String) && (r = o.toUpperCase())), n.log("Current user nation is: ".concat(r, ". Special territories is: ").concat(t)), -1 !== t.indexOf(r)
                    };
                    var t = function() {
                        var t, r, o;
                        ddnawrapper.consent.fillD3ConsentVariablesFromOneTrustCookie(), n.log("Checking if marketing/tracking consent has been given");
                        var i = e.segmentCookieCategory || "C0004";
                        return void 0 !== (null === (t = ddnawrapper.consent) || void 0 === t ? void 0 : t.consentCategories) && (null === (r = ddnawrapper.consent) || void 0 === r ? void 0 : r.consentCategories[i]) && "1" === (null === (o = ddnawrapper.consent) || void 0 === o ? void 0 : o.consentCategories[i])
                    };
                    window.ddnawrapper.consent.isTrackingConsentGiven = function() {
                        return t()
                    }, window.ddnawrapper.consent.isMarketingConsentGiven = function() {
                        return t()
                    }, window.ddnawrapper.consent.isSocialMediaConsentGiven = function() {
                        var t, r, o;
                        ddnawrapper.consent.fillD3ConsentVariablesFromOneTrustCookie(), n.log("Checking if social media consent has been given");
                        var i = e.socialMediaCookieCategory || "C0005";
                        return void 0 !== (null === (t = ddnawrapper.consent) || void 0 === t ? void 0 : t.consentCategories) && (null === (r = ddnawrapper.consent) || void 0 === r ? void 0 : r.consentCategories[i]) && "1" === (null === (o = ddnawrapper.consent) || void 0 === o ? void 0 : o.consentCategories[i])
                    }, window.ddnawrapper.consent.isPerformanceConsentGiven = function() {
                        var t, r, o;
                        ddnawrapper.consent.fillD3ConsentVariablesFromOneTrustCookie(), n.log("Checking if performances consent has been given");
                        var i = e.performancesCookieCategory || "C0002";
                        return void 0 !== (null === (t = ddnawrapper.consent) || void 0 === t ? void 0 : t.consentCategories) && (null === (r = ddnawrapper.consent) || void 0 === r ? void 0 : r.consentCategories[i]) && "1" === (null === (o = ddnawrapper.consent) || void 0 === o ? void 0 : o.consentCategories[i])
                    }, window.ddnawrapper.consent.getConsentFromCookie = function() {
                        var n = b("OptanonConsent");
                        if (n.length > 0) return ddnawrapper.consent.decodeOptanonConsentCookie(n).groups
                    }, window.ddnawrapper.consent.isConsentGiven = function() {
                        var n;
                        return !(null === (n = window.ddnawrapper.events) || void 0 === n || !n.cookieLoadedTriggered) && window.ddnawrapper.events.cookieLoadedTriggered
                    }
                }
            }, {
                key: "init",
                value: function(n) {
                    var t;
                    window.ddnawrapper = window.ddnawrapper || {}, window.ddnawrapper.consent = window.ddnawrapper.consent || {}, n && (e.externalConsent = n), window.ddnawrapper.consent.decodeOptanonConsentCookie = function(n) {
                        var e = {};
                        return n.split("&").forEach((function(n) {
                            var t = n.split("=");
                            2 === t.length && (e[t[0]] = t[1])
                        })), e
                    }, this.initFunctionsForThirdParties(), window.ddnawrapper.consent.fillD3ConsentVariablesFromOneTrustCookie(n) && (this.hasOptanonBoxClosedCookie = !!n || b("OptanonAlertBoxClosed").length > 0, this.isOptOutMode = (null === (t = ddnawrapper.consent) || void 0 === t ? void 0 : t.consentCategories) && ddnawrapper.consent.consentCategories.length > 1, (this.hasOptanonBoxClosedCookie || this.isOptOutMode) && this.triggerCookieLoadedEvent())
                }
            }, {
                key: "fillD3ConsentVariablesFromOneTrustCookie",
                value: function() {
                    var n = b("OptanonConsent");
                    if (e.externalConsent) return ddnawrapper.consent.consentCategories = e.externalConsent, !0;
                    if (n.length > 0) {
                        var t, r = ddnawrapper.consent.decodeOptanonConsentCookie(n).groups;
                        return r && (ddnawrapper.consent.consentCategories = (null === (t = ddnawrapper.consent) || void 0 === t ? void 0 : t.consentCategories) || {}, r.split(",").forEach((function(n) {
                            var e = n.split(":");
                            2 === e.length && (ddnawrapper.consent.consentCategories[e[0]] = e[1])
                        }))), !0
                    }
                    return !1
                }
            }]), e
        }();
    d(A, "externalConsent", void 0);
    var E = function(e) {
        ! function(n, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            n.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: n,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(n, "prototype", {
                writable: !1
            }), e && w(n, e)
        }(a, e);
        var t, r, i = (t = a, r = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (n) {
                return !1
            }
        }(), function() {
            var n, e = l(t);
            if (r) {
                var o = l(this).constructor;
                n = Reflect.construct(e, arguments, o)
            } else n = e.apply(this, arguments);
            return g(this, n)
        });

        function a() {
            return n(this, a), i.apply(this, arguments)
        }
        return o(a, [{
            key: "init",
            value: function() {
                try {
                    window.ddnawrapper = window.ddnawrapper || {};
                    var n, e = window.ddnawrapper.diagnostic || {
                        initialized: !1
                    };
                    return p(l(a.prototype), "init", this).call(this), window.addEventListener("cookies-loaded", (function() {
                        e.log("triggered cookies-loaded");
                        var n = !!window.OptanonActiveGroups && ddnawrapper.consent.isPerformanceConsentGiven();
                        window["ga-disable-@googleAnalyticsId"] = !n
                    })), "function" == typeof window.OptanonWrapper && (n = window.OptanonWrapper), window.OptanonWrapper = function() {
                        e.log("OptanonWrapper - Entered"), window.dataLayer.push({
                            event: "OneTrustGroupsUpdated"
                        });
                        var t = "opt-in";
                        try {
                            t = Optanon.GetDomainData().ConsentModel.Name
                        } catch (n) {}
                        if (Optanon.IsAlertBoxClosedAndValid() || "opt-out" === t) {
                            var r, o;
                            e.log("OptanonWrapper - IsAlertBoxClosedAndValid");
                            var i = JSON.stringify(ddnawrapper.consent.consentCategories);
                            null === (r = ddnawrapper) || void 0 === r || null === (o = r.consent) || void 0 === o || o.fillD3ConsentVariablesFromOneTrustCookie();
                            var a = JSON.stringify(ddnawrapper.consent.consentCategories);
                            if ("opt-out" !== t || ddnawrapper.consent.consentCategories || (ddnawrapper.consent.consentCategories = {
                                    C0001: "1",
                                    C0002: "1",
                                    C0003: "1",
                                    C0004: "1",
                                    C0005: "1"
                                }), window.ddnawrapper.events.cookieLoadedTriggered)
                                if (i === a) e.log("OptanonWrapper - cookie consent unchanged");
                                else {
                                    e.log("OptanonWrapper - triggering cookie consent updated");
                                    var d = new CustomEvent("cookies-consent-updated");
                                    window.dispatchEvent(d)
                                }
                            else {
                                e.log("OptanonWrapper - triggering cookie loaded");
                                var s = new CustomEvent("cookies-loaded");
                                window.dispatchEvent(s), window.ddnawrapper.events.cookieLoadedTriggered = !0
                            }
                        } else if (window.ddnawrapper.events.cookieBannerShownTriggered) window.ddnawrapper.diagnostic.log("Opt in mode, consent not yet ready and cookies banner shown event already triggered");
                        else {
                            window.ddnawrapper.diagnostic.log("Opt in mode, consent not yet ready -> triggering cookies banner shown event");
                            var c = new CustomEvent("cookies-banner-shown");
                            window.dispatchEvent(c), window.ddnawrapper.events.cookieBannerShownTriggered = !0
                        }
                        "function" == typeof n && n();
                        var l = document.getElementsByClassName("ot-pc-refuse-all-handler");
                        l.length > 0 && l[0].setAttribute("data-cy", "onetrust-reject-button");
                        var u = document.getElementsByClassName("save-preference-btn-handler onetrust-close-btn-handler");
                        u.length > 0 && u[0].setAttribute("data-cy", "onetrust-confirm-choice-button"), window.setTimeout((function n() {
                            var e, t = 0,
                                r = document.getElementById("onetrust-consent-sdk");
                            if (r) {
                                var o = document.getElementById("onetrust-accept-btn-handler"),
                                    i = document.getElementById("onetrust-reject-all-handler"),
                                    a = document.getElementById("onetrust-pc-btn-handler"),
                                    d = document.getElementById("onetrust-button-group");
                                if (d) {
                                    d.style.display = "flex", d.style.alignItems = "center", d.style.justifyContent = "center", o && (o.style.order = 1, o.style.height = "70px"), i && (i.style.order = 2, i.style.height = "70px"), a && (a.style.order = 3, a.style.height = "70px");
                                    var s = document.querySelector(".onetrust-pc-dark-filter");
                                    s && (s.style.width = "100%", s.style.height = "100%");
                                    var c = document.querySelector("#onetrust-banner-sdk");
                                    c && (c.style.height = "auto"), r.style.display = "block"
                                }
                            } else t < 5 && (t++, window.setTimeout(n, 500));
                            null === (e = document.querySelector("#one-trust-hide-consent")) || void 0 === e || e.remove()
                        }), 500)
                    }, t && t.then || (t = Promise.resolve(t)), t
                } catch (n) {
                    return Promise.reject(n)
                }
                var t
            }
        }, {
            key: "externalConsentGiven",
            value: function(n) {
                var e, t, r = JSON.stringify(ddnawrapper.consent.consentCategories);
                p(l(a.prototype), "init", this).call(this, n), window.ddnawrapper.diagnostic.log("Consent - received external consent. Populating categories"), null === (e = window.ddnawrapper) || void 0 === e || null === (t = e.consent) || void 0 === t || t.fillD3ConsentVariablesFromOneTrustCookie();
                var o = JSON.stringify(ddnawrapper.consent.consentCategories);
                if (window.ddnawrapper.events.cookieLoadedTriggered)
                    if (r === o) window.ddnawrapper.diagnostic.log("Consent - cookie consent unchanged");
                    else {
                        window.ddnawrapper.diagnostic.log("Consent - triggering cookie consent updated");
                        var i = new CustomEvent("cookies-consent-updated");
                        window.dispatchEvent(i)
                    }
                else {
                    window.ddnawrapper.diagnostic.log("Consent - triggering cookie loaded");
                    var d = new CustomEvent("cookies-loaded");
                    window.dispatchEvent(d), window.ddnawrapper.events.cookieLoadedTriggered = !0
                }
            }
        }, {
            key: "initFunctionsForThirdParties",
            value: function() {
                p(l(a.prototype), "initFunctionsForThirdParties", this).call(this)
            }
        }]), a
    }(A);

    function I(n) {
        throw new TypeError('"' + n + '" is read-only')
    }

    function P(n, e, t) {
        new IntersectionObserver((function(n, e) {
            n.forEach((function(n) {
                t(n, e)
            }))
        }), e).observe(n)
    }

    function j(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r
    }

    function T(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r
    }

    function G(n) {
        var e, t, r;
        return void 0 !== (null === (e = ddnawrapper.consent) || void 0 === e ? void 0 : e.consentCategories) && (null === (t = ddnawrapper.consent) || void 0 === t ? void 0 : t.consentCategories[n]) && "1" === (null === (r = ddnawrapper.consent) || void 0 === r ? void 0 : r.consentCategories[n])
    }

    function x(n) {
        var e, t, r, o, i, a, d = n ? null === (e = window.GlobalConfiguration.segmentGranularConsentConfiguration.specialTerritories) || void 0 === e ? void 0 : e.purposesCategories : null === (t = window.GlobalConfiguration.segmentGranularConsentConfiguration.nonSpecialTerritories) || void 0 === t ? void 0 : t.purposesCategories;
        return G(null == d || null === (r = d.analytics) || void 0 === r ? void 0 : r.category) || G(null == d || null === (o = d.marketing) || void 0 === o ? void 0 : o.category) || G(null == d || null === (i = d.profiling) || void 0 === i ? void 0 : i.category) || G(null == d || null === (a = d.retargeting) || void 0 === a ? void 0 : a.category)
    }

    function _(n) {
        window.ddnawrapper.diagnostic.log("check if user is in a special market");
        var e = window.deltatre.userNation,
            t = y("user_nation");
        return t && (window.ddnawrapper.diagnostic.log("User nation overwritten by query string parameter. Was: " + e + " and has been set to " + t), ("string" == typeof t || t instanceof String) && (e = t.toUpperCase())), window.ddnawrapper.diagnostic.log("Current user nation is: " + e + ". Special territories is: " + n), -1 !== n.indexOf(e)
    }

    function W() {
        return window.GlobalConfiguration.externalLibrary.includes("paradigma")
    }

    function M() {
        return window.GlobalConfiguration.externalLibrary.includes("segment")
    }

    function B() {
        return window.OCSMobileAppBridge && "true" === window.GlobalConfiguration.activateNewWebViewLogic
    }
    var L = !1,
        D = !1,
        F = !1,
        R = !1,
        N = "anonymous_user",
        U = !1,
        V = 30;

    function J(n) {
        x() && !D ? (window.ddnawrapper.diagnostic.log("tracking consent given - proceed with Segment setup"), function(n) {
            if (!window.segmentInit) {
                var e = z();
                window.AnalyticsWrapper.load(n, {
                    integrations: e
                }), window.segmentInit = !0, L ? $() : (window.ddnawrapper.diagnostic.log("regular territory - tracking consent given - fire identify (accepted)"), window.ddnawrapper.analytics.identify({
                    gdpr_privacy: "accepted",
                    is_special_market: !1,
                    purposes: (t = window.GlobalConfiguration.segmentGranularConsentConfiguration.nonSpecialTerritories.purposesCategories, {
                        analytics: G(t.analytics.category),
                        retargeting: G(t.retargeting.category),
                        profiling: G(t.profiling.category),
                        marketing: G(t.marketing.category)
                    })
                }))
            }
            var t
        }(n)) : (L ? window.segmentInit ? H() : q(n, Q) : window.ddnawrapper.diagnostic.log("tracking consent not given - segment not loaded"), window.segmentInitializationCompleted = !0)
    }

    function z() {
        var n = L ? Z().specialTerritories.destinationPreferences : Z().nonSpecialTerritories.destinationPreferences,
            e = {};
        for (var t in n) e[t] = G(n[t]);
        return e
    }

    function q(n, e) {
        var t, r;
        if (window.ddnawrapper.diagnostic.log("special market - proceed with Segment setup"), t = b("ajs_anonymous_id"), r = b("dl_anonymous_id"), t && r && "anonymous_user" !== r && "anonymous_user" === t && (window.ddnawrapper.diagnostic.log("special market - cookie override delete"), C("dl_anonymous_id", "/", ".olympics.com"), C("dl_anonymous_id", "/", ".stg-www.olympic-channelservices.org")), !window.segmentInit) {
            var o = z();
            window.AnalyticsWrapper.load(n, {
                integrations: o
            }), e(), window.segmentInit = !0
        }
    }

    function H() {
        x() ? $() : Q()
    }

    function K() {
        window.ddnawrapper.diagnostic.log("special market - fire identify (pending)");
        var n = Z().specialTerritories.purposesCategories;
        window.ddnawrapper.analytics.identify({
            gdpr_privacy: "pending",
            is_special_market: !0,
            purposes: {
                analytics: n.analytics.valueOnPendingConsent,
                retargeting: n.retargeting.valueOnPendingConsent,
                profiling: n.profiling.valueOnPendingConsent,
                marketing: n.marketing.valueOnPendingConsent
            }
        })
    }

    function $() {
        var n;
        window.ddnawrapper.diagnostic.log("special market - tracking consent given - fire identify (accepted)"), window.ddnawrapper.analytics.identify({
            gdpr_privacy: "accepted",
            is_special_market: !0,
            purposes: (n = window.GlobalConfiguration.segmentGranularConsentConfiguration.specialTerritories.purposesCategories, {
                analytics: G(n.analytics.category),
                retargeting: G(n.retargeting.category),
                profiling: G(n.profiling.category),
                marketing: G(n.marketing.category)
            })
        })
    }

    function Q() {
        var n;
        window.ddnawrapper.diagnostic.log("special market - tracking consent not given - set generic anonymous id - fire identify (rejected)"), window.AnalyticsWrapper.setAnonymousId(N), window.ddnawrapper.analytics.identify({
            gdpr_privacy: "rejected",
            is_special_market: !0,
            purposes: (n = window.GlobalConfiguration.segmentGranularConsentConfiguration.specialTerritories.purposesCategories, {
                analytics: n.analytics.valueOnPendingConsent,
                retargeting: n.retargeting.valueOnPendingConsent,
                profiling: n.profiling.valueOnPendingConsent,
                marketing: n.marketing.valueOnPendingConsent
            })
        })
    }

    function X() {
        var n;
        if (window.dataLayer) {
            var e = null === (n = window.AnalyticsWrapper.user()) || void 0 === n ? void 0 : n.anonymousId();
            window.dataLayer.push({
                anonymousId: e
            })
        }
    }

    function Y() {
        var n = M(),
            e = W(),
            t = function(t) {
                if ("segment" === t && (D = !0), "paradigma" === t && (F = !0), n && e ? R = D && F : n ? R = D : e && (R = F), R && (X(), window.ddnawrapper = window.ddnawrapper || {}, window.ddnawrapper.events = window.ddnawrapper.events || {}, !window.ddnawrapper.events.analyticsReady)) {
                    var r = new CustomEvent("analytics-ready");
                    window.dispatchEvent(r), window.ddnawrapper.events.analyticsReady = !0
                }
            };
        n && function(n) {
            if (!window.setupAnalytics) {
                window.setupAnalytics = !0;
                var e = window.analytics = window.analytics || [];
                if (e.initialize) return;
                if (e.invoked) return void(window.console && console.error && console.error("Segment snippet included twice."));
                e.invoked = !0, e.methods = ["setAnonymousId", "identify", "track", "ready", "page"], e.factory = function(n) {
                    return function() {
                        var t = Array.prototype.slice.call(arguments);
                        return t.unshift(n), e.push(t), e
                    }
                };
                var t, r = function(n, e) {
                    var t = "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (!t) {
                        if (Array.isArray(n) || (t = function(n, e) {
                                if (n) {
                                    if ("string" == typeof n) return j(n, e);
                                    var t = Object.prototype.toString.call(n).slice(8, -1);
                                    return "Object" === t && n.constructor && (t = n.constructor.name), "Map" === t || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? j(n, e) : void 0
                                }
                            }(n)) || e && n && "number" == typeof n.length) {
                            t && (n = t);
                            var r = 0,
                                o = function() {};
                            return {
                                s: o,
                                n: function() {
                                    return r >= n.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: n[r++]
                                    }
                                },
                                e: function(n) {
                                    throw n
                                },
                                f: o
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var i, a = !0,
                        d = !1;
                    return {
                        s: function() {
                            t = t.call(n)
                        },
                        n: function() {
                            var n = t.next();
                            return a = n.done, n
                        },
                        e: function(n) {
                            d = !0, i = n
                        },
                        f: function() {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (d) throw i
                            }
                        }
                    }
                }(e.methods);
                try {
                    for (r.s(); !(t = r.n()).done;) {
                        var o = t.value;
                        e[o] = e.factory(o)
                    }
                } catch (n) {
                    r.e(n)
                } finally {
                    r.f()
                }
                e.load = function(t, r) {
                    (window.ddnawrapper.diagnostic || {}).log("SEGMENT - library load" + (void 0 === r ? "" : " - options: " + JSON.stringify(r.integrations)));
                    var o = document.createElement("script");
                    o.type = "text/javascript", o.async = !1, e.ready((function() {
                        return n("segment")
                    })), o.src = "https://cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js", e._loadOptions = r;
                    var i = document.getElementsByTagName("script")[0];
                    i.parentNode.insertBefore(o, i)
                }, e.SNIPPET_VERSION = "4.1.0"
            }
        }(t), e && function(n) {
            if (!window.setupParadigmaAnalytics) {
                window.setupParadigmaAnalytics = !0;
                var e = window.ddna_library = window.ddna_library || [];
                if (e.initialize) return;
                if (e.invoked) return void(window.console && console.error && console.error("Segment snippet included twice."));
                e.invoked = !0, e.methods = ["setAnonymousId", "identify", "track", "ready", "page"], e.factory = function(n) {
                    return function() {
                        var t = Array.prototype.slice.call(arguments);
                        return t.unshift(n), e.push(t), e
                    }
                };
                var t, r = function(n, e) {
                    var t = "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (!t) {
                        if (Array.isArray(n) || (t = function(n, e) {
                                if (n) {
                                    if ("string" == typeof n) return T(n, e);
                                    var t = Object.prototype.toString.call(n).slice(8, -1);
                                    return "Object" === t && n.constructor && (t = n.constructor.name), "Map" === t || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? T(n, e) : void 0
                                }
                            }(n)) || e && n && "number" == typeof n.length) {
                            t && (n = t);
                            var r = 0,
                                o = function() {};
                            return {
                                s: o,
                                n: function() {
                                    return r >= n.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: n[r++]
                                    }
                                },
                                e: function(n) {
                                    throw n
                                },
                                f: o
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var i, a = !0,
                        d = !1;
                    return {
                        s: function() {
                            t = t.call(n)
                        },
                        n: function() {
                            var n = t.next();
                            return a = n.done, n
                        },
                        e: function(n) {
                            d = !0, i = n
                        },
                        f: function() {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (d) throw i
                            }
                        }
                    }
                }(e.methods);
                try {
                    for (r.s(); !(t = r.n()).done;) {
                        var o = t.value;
                        e[o] = e.factory(o)
                    }
                } catch (n) {
                    r.e(n)
                } finally {
                    r.f()
                }
                e.load = function(t, r) {
                    (window.ddnawrapper.diagnostic || {}).log("PARADIGMA - library load" + (void 0 === r ? "" : " - options: " + JSON.stringify(r.integrations)));
                    var o = document.createElement("script");
                    o.type = "text/javascript", o.async = !1, e.ready((function() {
                        return n("paradigma")
                    })), o.src = window.GlobalConfiguration.paradigmaEndpoint, e._loadOptions = r;
                    var i = document.getElementsByTagName("script")[0];
                    i.parentNode.insertBefore(o, i)
                }, e.SNIPPET_VERSION = "4.1.0"
            }
        }(t)
    }

    function Z() {
        return window.GlobalConfiguration.segmentGranularConsentConfiguration
    }
    var nn = function() {
            function e() {
                var t = this;
                n(this, e), d(this, "getSegmentAnonymousIdQueryParam", (function() {
                    var n = v();
                    return n.segment_anonymousid || n.AnonymousID
                })), d(this, "invokeSpecialMarketExternalManagement", (function() {
                    var n, e, r, o;
                    return window.addEventListener("analytics-configuration", t.setSpecialMarketsExternal, !0), window.dispatchEvent(new CustomEvent("analytics-configuration-ready")), window.ddnawrapper.diagnostic.log("Sent analytics-configuration-ready for external special market management"), setTimeout((function() {
                        window.ddnawrapper.diagnostic.log("Waiting for analytics-configuration event to be passed"), window.removeEventListener("analytics-configuration", t.setSpecialMarketsExternal, !0)
                    }), null !== (n = parseInt(null === (e = window.GlobalConfiguration) || void 0 === e ? void 0 : e.specialMarketsConfigurationTimeout)) && void 0 !== n ? n : 500), null !== (r = null === (o = window.GlobalConfiguration) || void 0 === o ? void 0 : o.specialMarketsDisabled) && void 0 !== r && r
                }))
            }
            return o(e, [{
                key: "init",
                value: function() {
                    try {
                        var n, e = this,
                            t = window.GlobalConfiguration || {};
                        if (void 0 !== window.DdnaOverrideConfiguration && void 0 !== window.DdnaOverrideConfiguration.isEmbeddedWidget && (t.isEmbeddedWidget = null === (n = window.DdnaOverrideConfiguration) || void 0 === n ? void 0 : n.isEmbeddedWidget), k() || t.isDisplayedAsWebView || t.isAppView) {
                            var r = e.getSegmentAnonymousIdQueryParam();
                            if (r && t.segmentKeyAppsIos && t.segmentKeyAppsAndroid) {
                                var o = m() ? t.segmentKeyAppsIos : t.segmentKeyAppsAndroid;
                                window.ddnawrapper.diagnostic.log("Initialize segment as web view"),
                                    function(n, e) {
                                        if (!window.GlobalConfiguration || !window.GlobalConfiguration.disableAnalytics) {
                                            var t = function() {
                                                x() && (Y(), window.AnalyticsWrapper.setAnonymousId(e), window.segmentInit || (window.AnalyticsWrapper.load(n), window.segmentInit = !0))
                                            };
                                            window.cookieLoadedTriggered ? t() : (window.ddnawrapper.diagnostic.log("awaiting 'cookies-loaded' event"), window.addEventListener("cookies-loaded", (function() {
                                                window.ddnawrapper.diagnostic.log("received cookies loaded event"), t()
                                            })))
                                        }
                                    }(o, r)
                            }
                        } else if (t.isEmbeddedWidget) {
                            var i = t.segmentKeyEmbeds || "",
                                a = t.segmentSpecialMarkets || "";
                            window.ddnawrapper.diagnostic.log("Initialize segment as embedded widget"), e.invokeSpecialMarketExternalManagement() && (window.ddnawrapper.diagnostic.log("Special markets disabled by external party!"), I("segmentSpecialMarkets")),
                                function(n, e) {
                                    if (!window.GlobalConfiguration || !window.GlobalConfiguration.disableAnalytics) {
                                        var t = v(),
                                            r = t.marketingConsent && "true" === t.marketingConsent,
                                            o = t.performanceConsent && "true" === t.performanceConsent,
                                            i = t.consent_given && "true" === t.consent_given;
                                        window.ddnawrapper.diagnostic.log("Embedded Widget - set cookie consent variable.\n    Performance consent: ".concat(o, ", marketing consent: ").concat(r)), void 0 === r && void 0 === o && void 0 !== i ? (window.ddnawrapper.diagnostic.log("Embedded Widget - set cookie consent variable.\n      Using old consent parameter as a fallback: ".concat(i)), r = i, o = i) : (void 0 === r && (r = !1), void 0 === o && (o = !1)), window.ddnawrapper = window.ddnawrapper || {}, window.ddnawrapper.consent = window.ddnawrapper.consent || {}, window.ddnawrapper.consent.consentCategories = {
                                                C0001: "1",
                                                C0002: o ? "1" : "0",
                                                C0003: "0",
                                                C0004: r ? "1" : "0",
                                                C0005: "0"
                                            },
                                            function(n, e) {
                                                var t = {
                                                    rootMargin: "0px",
                                                    threshold: 1
                                                };
                                                window.ddnawrapper.diagnostic.log("embedded widget => check for intersection with parent before setup");
                                                var r = !1,
                                                    o = function(n, e) {
                                                        n.isIntersecting && !r ? (window.ddnawrapper.diagnostic.log("embedded widget => start timed tracking"), function() {
                                                            var n;
                                                            U || (U = setInterval((n = function() {
                                                                var n, e, t = {
                                                                    seconds: V,
                                                                    nonInteraction: 1
                                                                };
                                                                return e = function() {
                                                                    V += 30
                                                                }, (n = window.ddnawrapper.analytics.track("Pageview Heartbeat", t)) && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n
                                                            }, function() {
                                                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                                                try {
                                                                    return Promise.resolve(n.apply(this, e))
                                                                } catch (n) {
                                                                    return Promise.reject(n)
                                                                }
                                                            }).bind(this), 3e4))
                                                        }(), r = !0) : r && (window.ddnawrapper.diagnostic.log("embedded widget => stop timed tracking"), function() {
                                                            clearInterval(this.trackTimedAction), U = !1
                                                        }(), r = !1)
                                                    };
                                                P(document.documentElement, t, (function(r, i) {
                                                    r.isIntersecting && (window.ddnawrapper.diagnostic.log("embedded widget => intersecting, run segment"), Y(), L = _(e), J(n), i.unobserve(r.target), P(document.documentElement, t, o))
                                                }))
                                            }(n, e)
                                    }
                                }(i, a)
                        } else {
                            var d = t.segmentKey || "",
                                s = t.segmentSpecialMarkets || "";
                            window.ddnawrapper.diagnostic.log("Initialize segment"), e.invokeSpecialMarketExternalManagement() && (window.ddnawrapper.diagnostic.log("Special markets disabled by external party!"), I("segmentSpecialMarkets")),
                                function(n, e) {
                                    window.GlobalConfiguration && window.GlobalConfiguration.disableAnalytics || (Y(), L = _(e), window.cookieLoadedTriggered ? (window.ddnawrapper.diagnostic.log("onetrust cookie is present"), J(n)) : (L && (window.ddnawrapper.diagnostic.log("special market - onetrust cookie not present"), q(n, K), window.ddnawrapper.diagnostic.log("awaiting 'cookies-consent-updated' event"), window.addEventListener("cookies-consent-updated", (function() {
                                        window.ddnawrapper.diagnostic.log("received cookies consent updated"), L && H()
                                    }))), window.ddnawrapper.diagnostic.log("awaiting 'cookies-loaded' event"), window.addEventListener("cookies-loaded", (function() {
                                        window.ddnawrapper.diagnostic.log("received cookies loaded event"), J(n)
                                    }))), window.addEventListener("cookies-consent-updated", (function() {
                                        window.ddnawrapper.diagnostic.log("received 'cookies-consent-updated' event => init segment again if needed"),
                                            function() {
                                                function n() {
                                                    window.AnalyticsWrapper.user().anonymousId() === N && (window.ddnawrapper.diagnostic.log("resetting anonymousId"), window.AnalyticsWrapper.reset(), X())
                                                }
                                                x() && (window.AnalyticsWrapper.userIsReady() ? n() : window.AnalyticsWrapper.ready(n, !0))
                                            }()
                                    })))
                                }(d, s)
                        }
                        return c && c.then || (c = Promise.resolve(c)), c
                    } catch (n) {
                        return Promise.reject(n)
                    }
                    var c
                }
            }, {
                key: "setSpecialMarketsExternal",
                value: function(n) {
                    var e, t;
                    window.ddnawrapper.diagnostic.log("Received special markets external configuration: ", null == n ? void 0 : n.detail), window.GlobalConfiguration = window.GlobalConfiguration || {}, window.GlobalConfiguration.specialMarketsDisabled = null !== (e = null == n || null === (t = n.detail) || void 0 === t ? void 0 : t.specialMarketsDisabled) && void 0 !== e && e
                }
            }]), e
        }(),
        en = function() {
            function e() {
                n(this, e)
            }
            return o(e, [{
                key: "init",
                value: function() {
                    try {
                        return (n = new Promise((function(n, e) {
                            try {
                                var t;
                                if (null === (t = window.deltatre) || void 0 === t ? void 0 : t.userNation) return n();
                                var r = h(),
                                    o = new URL("https://".concat(r, "/"));
                                o.pathname = "/en/api/js/usernation", console.log("user-nation not provided, try to read from " + o.toString());
                                var i = document.createElement("script");
                                i.setAttribute("type", "text/javascript"), i.setAttribute("src", o.toString()), document.head.appendChild(i), i.addEventListener("load", (function() {
                                    return n()
                                }))
                            } catch (n) {
                                return e(n)
                            }
                        }))) && n.then || (n = Promise.resolve(n)), n
                    } catch (n) {
                        return Promise.reject(n)
                    }
                    var n
                }
            }]), e
        }(),
        tn = function(n) {
            return "[object Object]" === toString.call(n)
        },
        rn = function(n) {
            return "[object String]" === toString.call(n)
        };

    function on(n, e) {
        ! function(n, e) {
            if (e.has(n)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(n, e), e.add(n)
    }

    function an(n, e, t) {
        if (!e.has(n)) throw new TypeError("attempted to get private field on non-instance");
        return t
    }
    var dn = new WeakSet,
        sn = new WeakSet,
        cn = function() {
            function e() {
                n(this, e), on(this, sn), on(this, dn)
            }
            return o(e, [{
                key: "getAnalyticsInstance",
                value: function() {
                    return window.analytics
                }
            }, {
                key: "getUser",
                value: function() {
                    var n, e, t, r, o = window.GlobalConfiguration.anonymousIdFunctionToUse;
                    return "segment" === o ? null === (e = window.analytics) || void 0 === e ? void 0 : e.user : "ddna_analytics" === o ? null !== (t = window.ddna_library) && void 0 !== t && t.user ? null === (r = window.ddna_library) || void 0 === r ? void 0 : r.user() : void 0 : null === (n = window.analytics) || void 0 === n ? void 0 : n.user
                }
            }, {
                key: "callFuncOnInstances",
                value: function(n) {
                    try {
                        for (var e, t, r = function(e) {
                                console.error("Function ".concat(n, " is undefined on ").concat(e))
                            }, o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = arguments[a];
                        M() && (window.ddnawrapper.diagnostic.log("Call ".concat(n, " on Segment")), window.analytics[n] ? (e = window.analytics)[n].apply(e, i) : r("window.analytics")), W() && (window.ddnawrapper.diagnostic.log("Call ".concat(n, " on Paradigma")), window.ddna_library[n] ? (t = window.ddna_library)[n].apply(t, i) : r("window.ddna_library"))
                    } catch (n) {
                        console.log(n)
                    }
                }
            }, {
                key: "load",
                value: function(n, e) {
                    return window.ddnawrapper.diagnostic.log("load called"), this.callFuncOnInstances("load", n, e)
                }
            }, {
                key: "ready",
                value: function(n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (window.ddnawrapper.diagnostic.log("ready called"), e) {
                        var t = M(),
                            r = W();
                        if (t && r) return window.analytics.ready(n)
                    }
                    return this.callFuncOnInstances("ready", n)
                }
            }, {
                key: "reset",
                value: function() {
                    return window.ddnawrapper.diagnostic.log("reset called"), this.callFuncOnInstances("reset")
                }
            }, {
                key: "anonymousId",
                value: function() {
                    return window.ddnawrapper.diagnostic.log("anonymousId called"), this.getUser().anonymousId()
                }
            }, {
                key: "setAnonymousId",
                value: function(n) {
                    return window.ddnawrapper.diagnostic.log("setAnonymousId called"), this.callFuncOnInstances("setAnonymousId", n)
                }
            }, {
                key: "userIsReady",
                value: function() {
                    var n;
                    return window.ddnawrapper.diagnostic && (null === (n = window.ddnawrapper.diagnostic) || void 0 === n || n.log("userIsReady called")), this.getUser()
                }
            }, {
                key: "user",
                value: function() {
                    window.ddnawrapper.diagnostic.log("user called");
                    var n = this.getUser();
                    return "function" == typeof n ? n() : n
                }
            }, {
                key: "page",
                value: function(n, e) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (window.ddnawrapper.diagnostic.log("page called"), tn(n) && (t = n, e = n = void 0), tn(e) && (t = e, e = n, n = void 0), rn(n) && !rn(e) && (e = n, n = void 0), t.test_id = crypto.randomUUID(), t.viewport = an(this, dn, ln).call(this), t.screen_resolution = an(this, sn, un).call(this), B()) {
                        window.ddnawrapper.diagnostic.log("sending data to trackScreen on OCSMobileAppBridge", t);
                        var r = JSON.stringify(t);
                        return window.OCSMobileAppBridge.callbacks.trackScreenCallback = this.trackScreenCallback, window.OCSMobileAppBridge.callHandler("trackScreen", r, "trackScreenCallback")
                    }
                    return this.callFuncOnInstances("page", n, e, t)
                }
            }, {
                key: "track",
                value: function(n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (window.ddnawrapper.diagnostic.log("track called"), window.GlobalConfiguration.disabledEvents && "" !== window.GlobalConfiguration.disabledEvents) {
                        var t = window.GlobalConfiguration.disabledEvents.split(";");
                        if (null != t && t.includes(n)) return
                    }
                    if (e.test_id = crypto.randomUUID(), e.viewport = an(this, dn, ln).call(this), e.screen_resolution = an(this, sn, un).call(this), B()) {
                        e.event = n, window.ddnawrapper.diagnostic.log("sending data to trackEvent on OCSMobileAppBridge", e);
                        var r = JSON.stringify(e);
                        return window.OCSMobileAppBridge.callbacks.trackEventCallback = this.trackEventCallback, window.OCSMobileAppBridge.callHandler("trackEvent", r, "trackEventCallback")
                    }
                    return this.callFuncOnInstances("track", n, e)
                }
            }, {
                key: "trackScreenCallback",
                value: function(n) {
                    n ? window.ddnawrapper.diagnostic.log(":::trackScreenCallback::::", n) : window.ddnawrapper.diagnostic.log("trackScreenCallback fired: Response not found")
                }
            }, {
                key: "trackEventCallback",
                value: function(n) {
                    n ? window.ddnawrapper.diagnostic.log(":::trackEventCallback::::", n) : window.ddnawrapper.diagnostic.log("trackEventCallback fired: Response not found")
                }
            }, {
                key: "identify",
                value: function(n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!B()) return window.ddnawrapper.diagnostic.log("identify called"), tn(n) && (t = e, e = n), t.test_id = crypto.randomUUID(), t.viewport = an(this, dn, ln).call(this), t.screen_resolution = an(this, sn, un).call(this), this.callFuncOnInstances("identify", n, e, t)
                }
            }, {
                key: "addSourceMiddleware",
                value: function(n) {
                    return window.ddnawrapper.diagnostic.log("addSourceMiddleware called"), this.callFuncOnInstances("addSourceMiddleware", n)
                }
            }]), e
        }();

    function ln() {
        var n = document.documentElement.clientWidth || 0,
            e = document.documentElement.clientHeight || 0;
        return "".concat(n, " x ").concat(e)
    }

    function un() {
        var n = window.screen.width,
            e = window.screen.height;
        return "".concat(n, " x ").concat(e)
    }

    function pn(n, e, t) {
        return t ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n)
    }
    var wn = !1;

    function gn() {}
    var fn = [];

    function vn(n, e) {
        if (!e) return n && n.then ? n.then(gn) : Promise.resolve()
    }
    var yn = [];

    function mn(n) {
        var e = n();
        if (e && e.then) return e.then(gn)
    }
    var hn = [];

    function bn(n, e) {
        var t = n();
        return t && t.then ? t.then(e) : e(t)
    }
    var Cn = void 0;

    function kn(n) {
        return function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            try {
                return Promise.resolve(n.apply(this, e))
            } catch (n) {
                return Promise.reject(n)
            }
        }
    }

    function Sn(n, e, t) {
        if (!n.s) {
            if (t instanceof An) {
                if (!t.s) return void(t.o = Sn.bind(null, n, e));
                1 & e && (e = t.s), t = t.v
            }
            if (t && t.then) return void t.then(Sn.bind(null, n, e), Sn.bind(null, n, 2));
            n.s = e, n.v = t;
            var r = n.o;
            r && r(n)
        }
    }
    var On = !1;
    const An = function() {
        function n() {}
        return n.prototype.then = function(e, t) {
            const r = new n,
                o = this.s;
            if (o) {
                const n = 1 & o ? e : t;
                if (n) {
                    try {
                        Sn(r, 1, n(this.v))
                    } catch (n) {
                        Sn(r, 2, n)
                    }
                    return r
                }
                return this
            }
            return this.o = function(n) {
                try {
                    const o = n.v;
                    1 & n.s ? Sn(r, 1, e ? e(o) : o) : t ? Sn(r, 1, t(o)) : Sn(r, 2, o)
                } catch (n) {
                    Sn(r, 2, n)
                }
            }, r
        }, n
    }();

    function En(n) {
        return n instanceof An && 1 & n.s
    }

    function In(n, e, t) {
        for (var r;;) {
            var o = n();
            if (En(o) && (o = o.v), !o) return i;
            if (o.then) {
                r = 0;
                break
            }
            var i = t();
            if (i && i.then) {
                if (!En(i)) {
                    r = 1;
                    break
                }
                i = i.s
            }
            if (e) {
                var a = e();
                if (a && a.then && !En(a)) {
                    r = 2;
                    break
                }
            }
        }
        var d = new An,
            s = Sn.bind(null, d, 2);
        return (0 === r ? o.then(l) : 1 === r ? i.then(c) : a.then(u)).then(void 0, s), d;

        function c(r) {
            i = r;
            do {
                if (e && (a = e()) && a.then && !En(a)) return void a.then(u).then(void 0, s);
                if (!(o = n()) || En(o) && !o.v) return void Sn(d, 1, i);
                if (o.then) return void o.then(l).then(void 0, s);
                En(i = t()) && (i = i.v)
            } while (!i || !i.then);
            i.then(c).then(void 0, s)
        }

        function l(n) {
            n ? (i = t()) && i.then ? i.then(c).then(void 0, s) : c(i) : Sn(d, 1, i)
        }

        function u() {
            (o = n()) ? o.then ? o.then(l).then(void 0, s) : l(o): Sn(d, 1, i)
        }
    }

    function Pn(n) {
        if (n && n.then) return n.then(gn)
    }
    var jn = function() {
        function t() {
            n(this, t), window.AnalyticsWrapper = new cn
        }
        return o(t, [{
            key: "readConfiguration",
            value: function() {
                try {
                    return pn(fetch((n = h(), "https://".concat(n, "/en/api/v1/ddna-configuration/"))), (function(n) {
                        return pn(n.json(), (function(n) {
                            window.GlobalConfiguration ? window.GlobalConfiguration = Object.assign(n, window.GlobalConfiguration) : window.GlobalConfiguration = n
                        }))
                    }))
                } catch (n) {
                    return Promise.reject(n)
                }
                var n
            }
        }, {
            key: "init",
            value: function() {
                try {
                    var n = this;
                    return window.ddnawrapper = window.ddnawrapper || {}, window.ddnawrapper.isReady = n.isReady, window.ddnawrapper.analytics = window.ddnawrapper.analytics || {}, window.ddnawrapper.analytics.track = n.track, window.ddnawrapper.analytics.page = n.page, window.ddnawrapper.analytics.identify = n.identify, window.ddnawrapper.analytics.reset = n.reset, window.ddnawrapper.analytics.sendCachedEventsWithTraits = n.sendCachedEventsWithTraits, window.ddnawrapper.analytics.consentGiven = n.consentGiven, window.ddnawrapper.analytics.setImplementationProvider = n.setImplementationProvider, window.ddnawrapper.user = window.ddnawrapper.user || {}, window.ddnawrapper.user.anonymousId = n.anonymousId, (new c).init(), window.addEventListener("analytics-ready", kn((function() {
                        return vn(n.setTraitsForAllEvents())
                    }))), pn(n.readConfiguration(), (function() {
                        return pn((new en).init(), (function() {
                            return pn((new nn).init(), (function() {
                                var e, t;
                                (Cn = new E).initFunctionsForThirdParties();
                                var r = window.GlobalConfiguration.injectOneTrust;
                                return null === (e = window.ddnawrapper) || void 0 === e || null === (t = e.diagnostic) || void 0 === t || t.log("Inject one trust: ".concat(r)), bn((function() {
                                    if (r) return mn((function() {
                                        return k() ? vn(n.handleWebviewConsent()) : pn(Cn.init(), (function() {
                                            return pn(n.loadCookiesBannerHideStylesScript(), (function() {
                                                return vn(n.loadConsentScript())
                                            }))
                                        }))
                                    }))
                                }), (function() {
                                    var n, e;
                                    On = !0, window.dispatchEvent(new CustomEvent("ddna-wrapper-ready")), null === (n = window.ddnawrapper) || void 0 === n || null === (e = n.diagnostic) || void 0 === e || e.log("ddna wrapper is ready")
                                }))
                            }))
                        }))
                    }))
                } catch (n) {
                    return Promise.reject(n)
                }
            }
        }, {
            key: "handleWebviewConsent",
            value: function() {
                try {
                    return pn(B() ? (null === (n = window.ddnawrapper) || void 0 === n || null === (t = n.diagnostic) || void 0 === t || t.log("OCSMobileAppBridge: handle new webview logic"), new Promise((function(n) {
                        window.getConsentsCallback = kn((function(t) {
                            var r, o;
                            return null === (r = window.ddnawrapper) || void 0 === r || null === (o = r.diagnostic) || void 0 === o || o.log("OCSMobileAppBridge: received response in consents callback: ".concat(t)), mn((function() {
                                if (t) {
                                    var r = function(n) {
                                            return "string" == typeof n ? JSON.parse(n) : "object" === e(n) ? n : void 0
                                        }(t),
                                        o = {};
                                    return O.forEach((function(n) {
                                        var e = r[n];
                                        o[n] = void 0 !== e && !0 === e ? "1" : "0"
                                    })), pn(window.ddnawrapper.analytics.consentGiven(o), (function() {
                                        n()
                                    }))
                                }
                                var i, a;
                                return null === (i = window.ddnawrapper) || void 0 === i || null === (a = i.diagnostic) || void 0 === a || a.log("OCSMobileAppBridge: consents not well formed -> pass fallback"), pn(window.ddnawrapper.analytics.consentGiven({
                                    C0001: "1",
                                    C0002: "1",
                                    C0003: "0",
                                    C0004: "0",
                                    C0005: "0"
                                }), (function() {
                                    n()
                                }))
                            }))
                        })), window.OCSMobileAppBridge.callbacks.getConsentsCallback = window.getConsentsCallback, window.OCSMobileAppBridge.callHandler("getConsents", null, "getConsentsCallback")
                    }))) : vn(this.consentGiven({
                        C0001: "1",
                        C0002: "1",
                        C0003: "0",
                        C0004: "0",
                        C0005: "0"
                    })))
                } catch (n) {
                    return Promise.reject(n)
                }
                var n, t
            }
        }, {
            key: "isReady",
            value: function() {
                return On
            }
        }, {
            key: "anonymousId",
            value: function() {
                var n = function() {
                    var n, e, t;
                    return null === (n = window.ddnawrapper) || void 0 === n || null === (e = n.diagnostic) || void 0 === e || e.log("'anonymousId' method invoked"), null === (t = window.AnalyticsWrapper) || void 0 === t ? void 0 : t.user().anonymousId()
                };
                return new Promise((function(e, t) {
                    try {
                        if (window.AnalyticsWrapper.userIsReady()) return e(n());
                        window.addEventListener("analytics-ready", (function() {
                            return e(n())
                        }))
                    } catch (n) {
                        t(n)
                    }
                }))
            }
        }, {
            key: "sendCachedEventsWithTraits",
            value: function() {
                try {
                    var n = this;
                    return pn(mn((function() {
                        if (wn) return bn((function() {
                            if (hn.length > 0) return vn(n.sendIdentifyCachedEvents())
                        }), (function() {
                            return bn((function() {
                                if (yn.length > 0) return vn(n.sendPageCachedEvents())
                            }), (function() {
                                return mn((function() {
                                    if (fn.length > 0) return vn(n.sendTrackCachedEvents())
                                }))
                            }))
                        }))
                    })))
                } catch (n) {
                    return Promise.reject(n)
                }
            }
        }, {
            key: "sendPageCachedEvents",
            value: function() {
                try {
                    return pn(Pn(In((function() {
                        return (null == yn ? void 0 : yn.length) > 0
                    }), void 0, (function() {
                        var n, e = yn.pop();
                        return vn(null === (n = window.AnalyticsWrapper) || void 0 === n ? void 0 : n.page(e.category, e.name, e.properties))
                    }))))
                } catch (n) {
                    return Promise.reject(n)
                }
            }
        }, {
            key: "sendTrackCachedEvents",
            value: function() {
                try {
                    return pn(Pn(In((function() {
                        return (null == fn ? void 0 : fn.length) > 0
                    }), void 0, (function() {
                        var n, e = fn.pop();
                        return vn(null === (n = window.AnalyticsWrapper) || void 0 === n ? void 0 : n.track(e.event, e.properties))
                    }))))
                } catch (n) {
                    return Promise.reject(n)
                }
            }
        }, {
            key: "sendIdentifyCachedEvents",
            value: function() {
                try {
                    return pn(Pn(In((function() {
                        return (null == hn ? void 0 : hn.length) > 0
                    }), void 0, (function() {
                        var n, e = hn.pop();
                        return vn(null === (n = window.AnalyticsWrapper) || void 0 === n ? void 0 : n.identify(e.userId, e.traits))
                    }))))
                } catch (n) {
                    return Promise.reject(n)
                }
            }
        }, {
            key: "track",
            value: function(n, e) {
                try {
                    var t, r;
                    return null === (t = window.ddnawrapper) || void 0 === t || null === (r = t.diagnostic) || void 0 === r || r.log("'track' method invoked, with event name '".concat(n, "'.")), pn(function() {
                        var t;
                        if (wn) return pn(null === (t = window.AnalyticsWrapper) || void 0 === t ? void 0 : t.track(n, e));
                        fn.push({
                            event: n,
                            properties: e
                        })
                    }())
                } catch (n) {
                    return Promise.reject(n)
                }
            }
        }, {
            key: "page",
            value: function(n, e, t) {
                try {
                    var r, o;
                    return null === (r = window.ddnawrapper) || void 0 === r || null === (o = r.diagnostic) || void 0 === o || o.log("'page' method invoked with event name '".concat(e, "'")), pn(function() {
                        var r;
                        if (wn) return pn(null === (r = window.AnalyticsWrapper) || void 0 === r ? void 0 : r.page(n, e, t));
                        yn.push({
                            category: n,
                            name: e,
                            properties: t
                        })
                    }())
                } catch (n) {
                    return Promise.reject(n)
                }
            }
        }, {
            key: "consentGiven",
            value: function(n) {
                try {
                    var e, t;
                    return null === (e = window.ddnawrapper) || void 0 === e || null === (t = e.diagnostic) || void 0 === t || t.log("'consentGiven' method invoked, with data '".concat(JSON.stringify(n), "'.")), n && Cn.externalConsentGiven(n), pn()
                } catch (n) {
                    return Promise.reject(n)
                }
            }
        }, {
            key: "identify",
            value: function(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                try {
                    var t, r;
                    return null === (t = window.ddnawrapper) || void 0 === t || null === (r = t.diagnostic) || void 0 === r || r.log("'identify' method invoked, with userId '".concat(JSON.stringify(n), "'")), pn(function() {
                        var t;
                        if (wn) return pn(null === (t = window.AnalyticsWrapper) || void 0 === t ? void 0 : t.identify(n, e));
                        hn.push({
                            userId: n,
                            traits: e
                        })
                    }())
                } catch (n) {
                    return Promise.reject(n)
                }
            }
        }, {
            key: "reset",
            value: function() {
                try {
                    var n, e, t;
                    return null === (n = window.ddnawrapper) || void 0 === n || null === (e = n.diagnostic) || void 0 === e || e.log("'reset' method invoked"), pn(null === (t = window.AnalyticsWrapper) || void 0 === t ? void 0 : t.reset())
                } catch (n) {
                    return Promise.reject(n)
                }
            }
        }, {
            key: "setTraitsForAllEvents",
            value: function() {
                try {
                    var n = this;
                    return wn = !0, window.AnalyticsWrapper.addSourceMiddleware((function(e) {
                        var t = e.payload,
                            r = e.next;
                        e.integrations, t.obj.properties = t.obj.properties || {}, t.obj.properties.traits = window.AnalyticsWrapper.user().traits(), t.obj.properties.authenticated = n.isAuthenticationCookieExists(), t.obj.context.os = t.obj.context.os || {}, t.obj.context.os.name = n.getOsName(), r(t)
                    })), pn(vn(n.sendCachedEventsWithTraits()))
                } catch (n) {
                    return Promise.reject(n)
                }
            }
        }, {
            key: "setImplementationProvider",
            value: function(n) {
                window.AnalyticsWrapper.addSourceMiddleware((function(e) {
                    var t = e.payload,
                        r = e.next;
                    e.integrations, t.obj.properties.implementation_provider = n, r(t)
                }))
            }
        }, {
            key: "getOsName",
            value: function() {
                return k() ? m() ? "iOS" : "android" : null
            }
        }, {
            key: "isAuthenticationCookieExists",
            value: function() {
                var n, e, t, r;
                return null !== (n = null === (e = document) || void 0 === e || null === (t = e.cookie) || void 0 === t || null === (r = t.split(";")) || void 0 === r ? void 0 : r.some((function(n) {
                    var e;
                    return null === (e = n.trim()) || void 0 === e ? void 0 : e.startsWith("glt")
                }))) && void 0 !== n && n
            }
        }, {
            key: "loadConsentScript",
            value: function() {
                try {
                    var n = window.GlobalConfiguration || {};
                    if (0 == document.querySelectorAll('script[src="'.concat(S, '"]')).length) {
                        var e = document.createElement("script");
                        e.setAttribute("type", "text/javascript"), e.setAttribute("src", S), e.setAttribute("charset", "UTF-8"), e.setAttribute("crossorigin", "anonymous"), e.setAttribute("data-domain-script", n.oneTrustDataDomainScript), document.head.appendChild(e)
                    } else {
                        var t, r;
                        null === (t = window.ddnawrapper) || void 0 === t || null === (r = t.diagnostic) || void 0 === r || r.log("Consent script '".concat(S, "' was preloaded before init on wrapper."))
                    }
                    return pn()
                } catch (n) {
                    return Promise.reject(n)
                }
            }
        }, {
            key: "loadCookiesBannerHideStylesScript",
            value: function() {
                try {
                    var n = "#onetrust-consent-sdk { display: none; }",
                        e = document.createElement("style");
                    return e.setAttribute("type", "text/css"), e.setAttribute("id", "one-trust-hide-consent"), e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n)), document.head.appendChild(e), pn()
                } catch (n) {
                    return Promise.reject(n)
                }
            }
        }]), t
    }();
    (new jn).init()
}();
//# sourceMappingURL=ddna-wrapper.js.map?v=682bf734f53a977b