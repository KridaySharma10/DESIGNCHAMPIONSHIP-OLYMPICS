(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [149], {
        71876: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                AD_DIMENSIONS: function() {
                    return k
                },
                AD_HPREC: function() {
                    return q
                },
                AD_INCONTENT: function() {
                    return U
                },
                AD_MID: function() {
                    return F
                },
                AD_TOP: function() {
                    return W
                },
                AdConfigContext: function() {
                    return x
                },
                default: function() {
                    return j
                },
                getLastAdvIndex: function() {
                    return N
                },
                insertAdsOnList: function() {
                    return T
                },
                parseSizeMap: function() {
                    return z
                },
                useAdConfig: function() {
                    return R
                }
            });
            var n = i(35944),
                r = i(43386),
                s = i(94184),
                o = i.n(s),
                a = i(67294),
                d = i(27856),
                l = i(41143),
                g = i.n(l),
                u = i(10251),
                h = i.n(u),
                c = i(8679),
                p = i.n(c),
                f = {
                    READY: "ready",
                    RENDER: "render",
                    SLOT_RENDER_ENDED: "slotRenderEnded",
                    IMPRESSION_VIEWABLE: "impressionViewable",
                    SLOT_VISIBILITY_CHANGED: "slotVisibilityChanged",
                    SLOT_LOADED: "slotOnload"
                },
                v = i(54146),
                _ = i(58875),
                m = i.n(_);
            let y = ["enableAsyncRendering", "enableSingleRequest", "enableSyncRendering", "disableInitialLoad", "collapseEmptyDivs", "setCentering", "enableLazyLoad"];
            class b extends v.Z {
                get googletag() {
                    return this._googletag
                }
                get isLoaded() {
                    return !!this._isLoaded
                }
                get isReady() {
                    return !!this._isReady
                }
                get apiReady() {
                    return this.googletag && this.googletag.apiReady
                }
                get pubadsReady() {
                    return this.googletag && this.googletag.pubadsReady
                }
                get testMode() {
                    return this._testMode
                }
                set testMode(e) {}
                _processPubadsQueue() {
                    this._pubadsProxyQueue && (Object.keys(this._pubadsProxyQueue).forEach(e => {
                        (this.googletag && !this.googletag.pubadsReady && y.indexOf(e) > -1 || this.pubadsReady) && (this._pubadsProxyQueue[e].forEach(e => this.pubadsProxy(e)), delete this._pubadsProxyQueue[e])
                    }), Object.keys(this._pubadsProxyQueue).length || (this._pubadsProxyQueue = null))
                }
                _callPubads(e) {
                    let {
                        method: t,
                        args: i,
                        resolve: n,
                        reject: r
                    } = e;
                    if ("function" != typeof this.googletag.pubads()[t]) r(Error("googletag.pubads does not support ".concat(t, ", please update pubadsAPI")));
                    else try {
                        let e = this.googletag.pubads()[t](...i);
                        n(e)
                    } catch (e) {
                        r(e)
                    }
                }
                _toggleListener(e) {
                    ["scroll", "resize"].forEach(t => {
                        window[e ? "addEventListener" : "removeEventListener"](t, this._foldCheck)
                    })
                }
                static _getTimer() {
                    return Date.now()
                }
                _listen() {
                    this._listening || ([f.SLOT_RENDER_ENDED, f.IMPRESSION_VIEWABLE, f.SLOT_VISIBILITY_CHANGED, f.SLOT_LOADED].forEach(e => {
                        ["pubads", "companionAds"].forEach(t => {
                            this.googletag[t]().addEventListener(e, this._onEvent.bind(this, e))
                        })
                    }), this._listening = !0)
                }
                _onEvent(e, t) {
                    this.listeners(e) && this.emit(e, t);
                    let i = this.getMountedInstances(),
                        {
                            slot: n
                        } = t,
                        r = "on".concat(e.charAt(0).toUpperCase()).concat(e.substr(1)),
                        s = i.filter(e => n === e.adSlot)[0];
                    s && s.props[r] && s.props[r](t)
                }
                syncCorrelator() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    this._syncCorrelator = e
                }
                generateDivId() {
                    return this._adCnt += 1, "bling-".concat(this._adCnt)
                }
                getMountedInstances() {
                    return this.mountedInstances || (this.mountedInstances = []), this.mountedInstances
                }
                addInstance(e) {
                    let t = this.getMountedInstances(); - 1 === t.indexOf(e) && (0 === t.length && this._toggleListener(!0), this.addMQListener(e, e.props), t.push(e))
                }
                removeInstance(e) {
                    let t = this.getMountedInstances(),
                        i = t.indexOf(e);
                    i >= 0 && (t.splice(i, 1), 0 === t.length && this._toggleListener(!1), this.removeMQListener(e))
                }
                addMQListener(e, t) {
                    let {
                        sizeMapping: i
                    } = t;
                    i && Array.isArray(i) && i.forEach(t => {
                        let i = t.viewport && t.viewport[0];
                        if (i) {
                            if (this._mqls || (this._mqls = {}), !this._mqls[i]) {
                                let e = window.matchMedia("(min-width: ".concat(i, "px)"));
                                e.addListener(this._handleMediaQueryChange), this._mqls[i] = {
                                    mql: e,
                                    listeners: []
                                }
                            } - 1 === this._mqls[i].listeners.indexOf(e) && this._mqls[i].listeners.push(e)
                        }
                    })
                }
                removeMQListener(e) {
                    this._mqls && Object.keys(this._mqls).forEach(t => {
                        let i = this._mqls[t].listeners.indexOf(e);
                        i > -1 && this._mqls[t].listeners.splice(i, 1), 0 === this._mqls[t].listeners.length && (this._mqls[t].mql.removeListener(this._handleMediaQueryChange), delete this._mqls[t])
                    })
                }
                static isInViewport(e, t, i) {
                    return function(e) {
                        let [t, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0, 0], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        if (!e || 1 !== e.nodeType) return !1;
                        let r = e.getBoundingClientRect(),
                            s = {
                                top: r.top,
                                left: r.left,
                                bottom: r.bottom,
                                right: r.right
                            },
                            o = {
                                top: 0,
                                left: 0,
                                bottom: window.innerHeight,
                                right: window.innerWidth
                            };
                        return s.bottom >= o.top + i * n && s.right >= o.left + t * n && s.top <= o.bottom - i * n && s.left <= o.right - t * n
                    }(e, t, i)
                }
                refresh(e, t) {
                    return !!this.pubadsReady && (this._config.refresh ? this._config.refresh.call(this.googletag, e, t) : this.googletag.pubads().refresh(e, t), !0)
                }
                clear(e) {
                    return !!this.pubadsReady && (this.googletag.pubads().clear(e), !0)
                }
                getGPTVersion() {
                    return !!this.apiReady && this.googletag.getVersion()
                }
                getPubadsVersion() {
                    return !!this.pubadsReady && this.googletag.pubads().getVersion()
                }
                updateCorrelator() {
                    return !!this.pubadsReady && ("updateCorrelator" in this.googletag.pubads() ? this.googletag.pubads().updateCorrelator() : console.warn("Ad: `updateCorrelator` has been removed from GPT"), !0)
                }
                configure() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this._config = { ...this._config,
                        ...e
                    }
                }
                load(e) {
                    return this._loadPromise || (this._loadPromise = new Promise((t, i) => {
                        if (this.testMode) {
                            t(this.googletag);
                            return
                        }
                        if (!m().canUseDOM) {
                            i(Error("DOM not available"));
                            return
                        }
                        if (!e) {
                            i(Error("url is missing"));
                            return
                        }
                        let n = () => {
                            window.googletag ? (this._googletag = window.googletag, this.googletag.cmd.push(() => {
                                this._isLoaded = !0, t(this.googletag)
                            })) : i(Error("window.googletag is not available"))
                        };
                        if (window.googletag && window.googletag.apiReady) n();
                        else {
                            let t = document.createElement("script");
                            t.async = !0, t.onload = n, t.onerror = () => {
                                i(Error("failed to load script"))
                            }, t.src = e, document.head.appendChild(t)
                        }
                    }))
                }
                pubadsProxy(e) {
                    let {
                        method: t,
                        args: i = [],
                        resolve: n,
                        reject: r
                    } = e;
                    return n ? (this._callPubads({
                        method: t,
                        args: i,
                        resolve: n,
                        reject: r
                    }), Promise.resolve()) : (y.indexOf(t) > -1 && (this["_".concat(t)] = i && i.length && i[0] || !0), new Promise((e, n) => {
                        let r = {
                            method: t,
                            args: i,
                            resolve: e,
                            reject: n
                        };
                        this.pubadsReady ? this._callPubads(r) : (this._pubadsProxyQueue || (this._pubadsProxyQueue = {}), this._pubadsProxyQueue[t] || (this._pubadsProxyQueue[t] = []), this._pubadsProxyQueue[t].push(r))
                    }))
                }
                constructor(e = {}) {
                    super(), this._config = {
                        refresh: void 0
                    }, this._adCnt = 0, this._initialRender = !0, this._syncCorrelator = !1, this._testMode = !1, this._isLoaded = !1, this._isReady = !1, this._foldCheck = (0, d.P)(20, e => {
                        this.getMountedInstances().forEach(t => {
                            t.getRenderWhenViewable() && t.foldCheck(e)
                        }), this.testMode && b._getTimer()
                    }), this._handleMediaQueryChange = e => {
                        if (this._syncCorrelator) {
                            this.refresh();
                            return
                        }
                        let t = /min-width:\s?(\d+)px/.exec(e.media),
                            i = t && t[1];
                        i && this._mqls[i] && this._mqls[i].listeners.forEach(t => {
                            t.onMediaQueryChange(e)
                        })
                    }, this.render = (0, d.D)(4, () => {
                        let e;
                        if (!this._initialRender) return;
                        let t = this.getMountedInstances(),
                            i = !1;
                        t.forEach(e => {
                            if (!e.notInViewport()) {
                                e.defineSlot();
                                let {
                                    adSlot: t
                                } = e;
                                if (t && t.getServices && "function" == typeof t.getServices) {
                                    let e = t.getServices();
                                    i || (i = e.filter(e => !!e.enableAsyncRendering).length > 0)
                                }
                            }
                        }), i || (e = this.googletag.defineSlot("/", [])).addService(this.googletag.pubads()), this._processPubadsQueue(), this.googletag.enableServices(), this.googletag.cmd.push(() => {
                            e && this.googletag.destroySlots([e]), this._processPubadsQueue(), this._listen(), this._isReady = !0, this.emit(f.READY, this.googletag), t.forEach(e => {
                                e.notInViewport() || e.display()
                            }), this.emit(f.RENDER, this.googletag), this._initialRender = !1
                        })
                    }), this.renderAll = (0, d.D)(4, () => !!this.apiReady && (this.getMountedInstances().forEach((e, t) => {
                        0 === t && this.updateCorrelator(), e.forceUpdate()
                    }), !0)), e.test && (this._testMode = e)
                }
            }
            class S extends a.Component {
                static on(e, t) {
                    S._on("on", e, t)
                }
                static once(e, t) {
                    S._on("once", e, t)
                }
                static removeListener(e) {
                    S._adManager.removeListener(e)
                }
                static removeAllListeners() {
                    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    S._adManager.removeAllListeners(...t)
                }
                static _on(e, t, i) {
                    "function" == typeof i && (t === f.READY && S._adManager.isReady ? i.call(S._adManager, S._adManager.googletag) : S._adManager[e](t, i))
                }
                static configure() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    S._config = { ...S._config,
                        ...e
                    }, S._adManager.configure({
                        refresh: e.refresh
                    })
                }
                static getGPTVersion() {
                    return S._adManager.getGPTVersion()
                }
                static getPubadsVersion() {
                    return S._adManager.getPubadsVersion()
                }
                static syncCorrelator(e) {
                    S._adManager.syncCorrelator(e)
                }
                static render() {
                    S._adManager.renderAll()
                }
                static refresh(e, t) {
                    S._adManager.refresh(e, t)
                }
                static clear(e) {
                    S._adManager.clear(e)
                }
                static updateCorrelator() {
                    S._adManager.updateCorrelator()
                }
                static addCompanionAdService(e, t) {
                    let i = S._adManager.googletag.companionAds();
                    t.addService(i), "object" == typeof e && (Object.prototype.hasOwnProperty.call(e, "enableSyncLoading") && i.enableSyncLoading(), Object.prototype.hasOwnProperty.call(e, "refreshUnfilledSlots") && i.setRefreshUnfilledSlots(e.refreshUnfilledSlots))
                }
                static set testManager(e) {
                    g()(e, "Pass in createManagerTest to mock GPT"), S._adManager = e
                }
                componentDidMount() {
                    S._adManager.addInstance(this), S._adManager.load(S._config.seedFileUrl).then(this.onScriptLoaded.bind(this)).catch(S.onScriptError.bind(this))
                }
                UNSAFE_componentWillReceiveProps(e) {
                    let {
                        propsEqual: t
                    } = S._config, {
                        sizeMapping: i
                    } = this.props;
                    (e.sizeMapping || i) && !t(e.sizeMapping, i) && S._adManager.removeMQListener(this)
                }
                shouldComponentUpdate(e, t) {
                    let {
                        scriptLoaded: i,
                        inViewport: n
                    } = null != t ? t : {
                        scriptLoaded: void 0,
                        inViewport: void 0
                    }, r = this.notInViewport(e, t), {
                        scriptLoaded: s,
                        inViewport: o
                    } = this.state;
                    if (r) return !1;
                    if (o !== n) return !0;
                    let {
                        filterProps: a,
                        propsEqual: d
                    } = S._config, l = a(S.refreshableProps, this.props, e), g = a(S.reRenderProps, this.props, e), u = !this._adSlot || !d(g.props, g.nextProps);
                    return u || d(l.props, l.nextProps) ? !!u || s !== i : (this.configureSlot(this._adSlot, e), this.refresh(), !1)
                }
                componentDidUpdate() {
                    !this.notInViewport(this.props, this.state) && this._divId && (S._adManager._initialRender ? S._adManager.render() : this.renderAd())
                }
                componentWillUnmount() {
                    S._adManager.removeInstance(this), this._adSlot && (S._adManager.googletag.destroySlots([this._adSlot]), this._adSlot = null)
                }
                static onScriptError(e) {
                    console.warn("Ad: Failed to load gpt for ".concat(S._config.seedFileUrl), e)
                }
                static setAttributes(e, t) {
                    e.getAttributeKeys().forEach(t => {
                        e.set(t, null)
                    }), t && Object.keys(t).forEach(i => {
                        e.set(i, t[i])
                    })
                }
                static handleSetNpaFlag(e) {
                    void 0 !== e && S._adManager.pubadsProxy({
                        method: "setRequestNonPersonalizedAds",
                        args: [e ? 1 : 0],
                        resolve: null,
                        reject: null
                    })
                }
                onScriptLoaded() {
                    let {
                        onScriptLoaded: e
                    } = this.props;
                    this.setState(e => ({ ...e,
                        scriptLoaded: !0
                    })), this.getRenderWhenViewable() && this.foldCheck(), this.isAdMounted() && this.setState({
                        scriptLoaded: !0
                    }, e)
                }
                onMediaQueryChange() {
                    this._debouncedRefresh();
                    let {
                        onMediaQueryChange: e
                    } = this.props;
                    e && e(event)
                }
                getSlotSize() {
                    let {
                        slotSize: e,
                        sizeMapping: t
                    } = this.props, i = "";
                    return e ? i = e : t && (i = t[0] && t[0].slot), i
                }
                get adSlot() {
                    return this._adSlot
                }
                get viewableThreshold() {
                    let {
                        viewableThreshold: e
                    } = this.props;
                    return Number.isNaN(e) ? S._config.viewableThreshold : e
                }
                getRenderWhenViewable() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                    return void 0 !== e.renderWhenViewable ? e.renderWhenViewable : S._config.renderWhenViewable
                }
                defineSizeMapping(e, t) {
                    t && S._adManager.googletag.cmd.push(() => {
                        S._adManager.addMQListener(this, this.props);
                        let i = t.reduce((e, t) => e.addSize(t.viewport, t.slot), S._adManager.googletag.sizeMapping()).build();
                        e.defineSizeMapping(i)
                    })
                }
                foldCheck() {
                    if (this.state.inViewport) return;
                    let e = this.getSlotSize();
                    Array.isArray(e) && Array.isArray(e[0]) && (e = e[0]), ("fluid" === e || Array.isArray(e) && "fluid" === e[0]) && (e = [0, 0]), b.isInViewport(this.wrapper.current, e, this.viewableThreshold) && !(() => {
                        let e = this.wrapper.current;
                        return (null == e ? void 0 : e.offsetParent) === null || (null == e ? void 0 : e.style.display) === "none"
                    })() && this.setState({
                        inViewport: !0
                    })
                }
                isAdMounted() {
                    return -1 !== S._adManager.getMountedInstances().indexOf(this)
                }
                notInViewport() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state,
                        {
                            inViewport: i
                        } = t;
                    return this.getRenderWhenViewable(e) && !e.doNotUseViewableThreshold && !i
                }
                defineSlot() {
                    let {
                        adUnitPath: e,
                        outOfPage: t,
                        npa: i,
                        id: n
                    } = this.props, r = this._divId ? this._divId : n, s = this.getSlotSize();
                    S.handleSetNpaFlag(i), this._adSlot || (t ? this._adSlot = S._adManager.googletag.defineOutOfPageSlot(e, S._adManager.googletag.enums.OutOfPageFormat.INTERSTITIAL) : this._adSlot = S._adManager.googletag.defineSlot(e, s || [], r)), this.configureSlot(this._adSlot)
                }
                configureSlot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.props,
                        {
                            sizeMapping: i,
                            attributes: n,
                            targeting: r,
                            companionAdService: s,
                            categoryExclusion: o,
                            collapseEmptyDiv: a,
                            safeFrameConfig: d,
                            clickUrl: l,
                            forceSafeFrame: g
                        } = t;
                    if (this.defineSizeMapping(e, i), void 0 !== a && (Array.isArray(a) ? e.setCollapseEmptyDiv.call(e, ...a) : e.setCollapseEmptyDiv(a)), l && e.setClickUrl(l), o) {
                        let t = o;
                        "string" == typeof t && (t = [t]), e.clearCategoryExclusions(), t.forEach(t => {
                            e.setCategoryExclusion(t)
                        })
                    }
                    S.setAttributes(e, n), this.setTargeting(e, r), d && e.setSafeFrameConfig(d), g && e.setForceSafeFrame(g), s && S.addCompanionAdService(s, e), e.addService(S._adManager.googletag.pubads())
                }
                display() {
                    var e, t;
                    let {
                        content: i
                    } = this.props, n = this._divId, r = null === (t = document) || void 0 === t ? void 0 : null === (e = t.getElementById(n)) || void 0 === e ? void 0 : e.innerHTML;
                    if (i && r) r = i;
                    else {
                        S._adManager._disableInitialLoad || S._adManager._syncCorrelator || S._adManager.updateCorrelator();
                        let {
                            outOfPage: e
                        } = this.props;
                        e || S._adManager.googletag.display(n), S._adManager._disableInitialLoad && !S._adManager._initialRender && this.refresh()
                    }
                }
                clear() {
                    let e = this._adSlot;
                    e && Object.prototype.hasOwnProperty.call(e, "getServices") && S._adManager.clear([e])
                }
                refresh(e) {
                    let t = this._adSlot;
                    t && (this.clear(), S._adManager.refresh([t], e))
                }
                renderAd() {
                    this.defineSlot(), this.display()
                }
                render() {
                    let {
                        scriptLoaded: e
                    } = this.state, {
                        id: t,
                        outOfPage: i,
                        style: r
                    } = this.props, s = this.notInViewport(this.props, this.state);
                    if (!e || s) {
                        let e = this.getSlotSize();
                        i || g()(e, "Either 'slotSize' or 'sizeMapping' prop needs to be set."), Array.isArray(e) && Array.isArray(e[0]) && (e = e[0]), ("fluid" === e || Array.isArray(e) && "fluid" === e[0]) && (e = ["auto", "auto"]);
                        let t = e && {
                            width: e[0],
                            height: e[1]
                        };
                        return (0, n.tZ)("div", {
                            ref: this.wrapper,
                            style: t
                        })
                    }
                    this.clear(), this._adSlot && (S._adManager.googletag.destroySlots([this._adSlot]), this._adSlot = null), this._divId = t || S._adManager.generateDivId();
                    let {
                        outOfPage: o
                    } = this.props;
                    return o ? null : (0, n.tZ)("div", {
                        id: this._divId,
                        style: r
                    })
                }
                constructor(e) {
                    super(e), this._debouncedRefresh = (0, d.D)(50, () => {
                        this.refresh()
                    }), this.setTargeting = (e, t) => {
                        e.clearTargeting(), t && Object.keys(t).forEach(i => {
                            e.setTargeting(i, t[i])
                        })
                    }, this.wrapper = a.createRef(), this.state = {
                        scriptLoaded: !1,
                        inViewport: !1
                    }
                }
            }
            S.refreshableProps = ["targeting", "sizeMapping", "clickUrl", "categoryExclusion", "attributes", "collapseEmptyDiv", "companionAdService", "forceSafeFrame", "safeFrameConfig"], S.reRenderProps = ["adUnitPath", "slotSize", "outOfPage", "content", "npa"], S._adManager = new b(void 0), S._config = {
                seedFileUrl: "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
                renderWhenViewable: !0,
                doNotUseViewableThreshold: !1,
                viewableThreshold: .5,
                filterProps: function(e, t, i) {
                    return e.reduce((e, n) => (e.props[n] = t[n], e.nextProps[n] = i[n], e), {
                        props: {},
                        nextProps: {}
                    })
                },
                propsEqual: h(),
                refresh: void 0
            };
            var E = p()(S, ["enableAsyncRendering", "enableSingleRequest", "enableSyncRendering", "disableInitialLoad", "collapseEmptyDivs", "enableVideoAds", "set", "get", "getAttributeKeys", "setTargeting", "clearTargeting", "setCategoryExclusion", "clearCategoryExclusions", "setCentering", "setCookieOptions", "setLocation", "setPublisherProvidedId", "setTagForChildDirectedTreatment", "clearTagForChildDirectedTreatment", "setVideoContent", "setForceSafeFrame", "enableLazyLoad"].reduce((e, t) => (e[t] = function() {
                    for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                    return S._adManager.pubadsProxy({
                        method: t,
                        args: i
                    })
                }, e), {})),
                I = i(66194),
                M = i(37340),
                A = i(77986),
                w = i(43355);

            function L() {
                let e = (0, M._)(["\n      border-bottom: 0.1rem solid ", ";\n      border-top: 0.1rem solid ", ";\n    "]);
                return L = function() {
                    return e
                }, e
            }

            function C() {
                let e = (0, M._)(["\n      text-align: initial;\n\n      aside {\n        div {\n          margin: auto;\n          text-align: center;\n        }\n      }\n\n      &.event-ad {\n        align-items: center;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n\n        aside {\n          min-width: 300px;\n        }\n      }\n    "]);
                return C = function() {
                    return e
                }, e
            }
            var P = {
                Wrapper: A.styled.section.withConfig({
                    componentId: "sc-1e79b1fe-0"
                })(["", " margin:", "rem auto ", "rem auto;padding-bottom:", "rem;padding-top:", "rem;text-align:center;width:fit-content;", "{margin:auto;&.background{box-sizing:border-box;height:100%;& > div{align-items:flex-start;display:flex;justify-content:center;min-height:100%;}}&.centeredAlignment{display:flex;justify-content:center;}}", "{border:0;margin:auto;padding:0;}", ""], e => {
                    let {
                        $slot: t
                    } = e;
                    return "top" !== t && (0, I.iv)(L(), I.O9.gray86, I.O9.gray86)
                }, I.t8.Spacing01, I.t8.Spacing01, I.t8.Spacing04, I.t8.Spacing04, (0, I.TE)(I.u3.MD), (0, I.TE)(I.u3.LG), e => {
                    let {
                        $showSponsor: t
                    } = e;
                    return t && (0, I.iv)(C())
                }),
                AdvTitle: (0, A.styled)(w.Z).withConfig({
                    componentId: "sc-1e79b1fe-1"
                })(["display:none;margin-bottom:", "rem;text-align:initial;", "{display:block;margin:0 auto;max-width:30rem;padding-bottom:", "rem;}color:", ";"], I.t8.Spacing01, (0, I.TE)(I.u3.LG), I.t8.Spacing01, e => {
                    var t;
                    let {
                        theme: i
                    } = e;
                    return (null == i ? void 0 : null === (t = i.ad) || void 0 === t ? void 0 : t.sponsorTextColor) || I.O9.graphiteGray
                })
            };
            let x = a.createContext({
                    config: {
                        incontentAdvsIds: [],
                        midAdvsIds: [],
                        lazyLoadingDisabled: !1
                    },
                    setConfig: () => {}
                }),
                R = () => a.useContext(x),
                T = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t + 1,
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        r = t,
                        s = 0;
                    return (null == e ? void 0 : e.reduce((e, t, o) => (o === r - 1 && (!n || s < n) && (e.push({
                        __typename: "AdItem",
                        meta: {
                            slug: "AdItem_".concat(o)
                        }
                    }), r += i, s += 1), e.push(t), e), [])) || []
                },
                O = (e, t) => {
                    var i, n, r, s;
                    return t && (null == t ? void 0 : t.length) > 0 ? null == e ? void 0 : null === (n = e.sizeTemplate) || void 0 === n ? void 0 : null === (i = n.find(e => t.toLowerCase().startsWith(e.slot))) || void 0 === i ? void 0 : i.sizeMappings : null == e ? void 0 : null === (s = e.sizeTemplate) || void 0 === s ? void 0 : null === (r = s.at(0)) || void 0 === r ? void 0 : r.sizeMappings
                },
                D = (e, t) => {
                    var i;
                    if ((null == t ? void 0 : t.keyPairs) === void 0) return e;
                    let n = null == t ? void 0 : null === (i = t.keyPairs) || void 0 === i ? void 0 : i.reduce((e, t) => ({ ...e,
                        [t.key]: t.value
                    }), {});
                    return Object.entries(e).reduce((e, t) => {
                        let [i, n] = t;
                        return n || e[i] ? { ...e,
                            [i]: n || e[i]
                        } : e
                    }, n)
                },
                V = e => {
                    var t, i, n;
                    let r = null === (i = document) || void 0 === i ? void 0 : null === (t = i.getElementById(e)) || void 0 === t ? void 0 : t.getElementsByTagName("iframe")[0];
                    return null == r ? void 0 : null === (n = r.contentWindow) || void 0 === n ? void 0 : n.document.getElementsByTagName("body")[0]
                },
                Q = e => e.substring(e.slice(1).indexOf("/") + 2),
                z = e => {
                    var t;
                    let i = [];
                    return null === (t = e.split("|")) || void 0 === t || t.forEach(e => {
                        let t = JSON.parse("[".concat(e, "]"));
                        (null == t ? void 0 : t.length) === 2 && i.push({
                            viewport: t[0],
                            slot: [t[1]]
                        })
                    }), i
                },
                N = e => {
                    var t, i;
                    return null !== (i = null === (t = document.querySelectorAll('[data-ad-type="'.concat(e, '"]'))) || void 0 === t ? void 0 : t.length) && void 0 !== i ? i : 0
                },
                k = {
                    DEFAULT: {
                        MOBILE: [
                            [320, 50]
                        ],
                        DESKTOP: [
                            [728, 90]
                        ]
                    }
                },
                U = "incontent",
                F = "mid",
                W = "top",
                q = "hprec";
            var j = e => {
                let {
                    adsEnabled: t = !0,
                    className: i = "",
                    dimensions: s,
                    sizeMapping: d,
                    isDeferred: l = !0,
                    lazyLoadingDisabled: g = !1,
                    maxPollingTries: u = 5,
                    path: h,
                    pollingTime: c = 1e3,
                    showBackground: p = !1,
                    targeting: f = {},
                    shouldUseDdnaWrapper: v = !0,
                    trackingData: _,
                    onAdRender: m,
                    shouldDisplaySponsorText: y = !0,
                    slot: b
                } = e, {
                    config: S,
                    setConfig: M
                } = R(), A = (0, a.useRef)({}), w = (0, a.useRef)(), [L, C] = (0, a.useState)(0), [x, T] = (0, a.useState)(r.ZY.cookieLoadedTriggered()), [z, N] = (0, a.useState)(!1), k = (0, a.useId)(), U = e => {
                    let {
                        slotId: t,
                        ...i
                    } = e;
                    A.current = {
                        [t]: i
                    }
                }, F = o()({
                    [i]: i.length > 0
                }, {
                    background: p
                });
                if ((0, a.useEffect)(() => (null == b ? void 0 : b.startsWith("incontent")) || (null == b ? void 0 : b.startsWith("mid")) ? (M(e => {
                        let t = { ...e
                        };
                        return (null == b ? void 0 : b.startsWith("mid")) && (null == e ? void 0 : e.midAdvsIds) && (t.midAdvsIds = [...e.midAdvsIds, k]), (null == b ? void 0 : b.startsWith("incontent")) && (null == e ? void 0 : e.incontentAdvsIds) && (t.incontentAdvsIds = [...e.incontentAdvsIds, k]), t
                    }), () => {
                        M(e => {
                            var t, i;
                            return { ...e,
                                incontentAdvsIds: null == e ? void 0 : null === (t = e.incontentAdvsIds) || void 0 === t ? void 0 : t.filter(e => e !== k),
                                midAdvsIds: null == e ? void 0 : null === (i = e.midAdvsIds) || void 0 === i ? void 0 : i.filter(e => e !== k)
                            }
                        })
                    }) : () => null, [b, k, S]), (0, a.useEffect)(() => {
                        if (!x) {
                            T(r.ZY.cookieLoadedTriggered());
                            let e = () => T(!0);
                            return window.addEventListener("cookies-loaded", e), () => {
                                window.removeEventListener("cookies-loaded", e)
                            }
                        }
                    }, []), (0, a.useEffect)(() => (L > 0 && L <= u ? setTimeout(() => {
                        E.refresh([w.current])
                    }, c) : L > u && (E.clear([w.current]), N(!0)), () => {
                        E.clear([w.current])
                    }), [L]), !1 === S.isSet) return (0, n.tZ)(n.HY, {});
                let W = d;
                if (s && (null == s ? void 0 : s.length) !== 0 || W && (null == W ? void 0 : W.length) !== 0 || (W = O(S, b)), (!s || (null == s ? void 0 : s.length) === 0) && !W || !t || z || (null == S ? void 0 : S.disableBanner)) return (0, n.tZ)(n.HY, {});
                let q = e => {
                        var t, i, n;
                        let s = null === (t = (i = e.slot).getSlotElementId) || void 0 === t ? void 0 : t.call(i);
                        if (e.isEmpty) {
                            w.current = e.slot, C(e => e + 1);
                            return
                        }
                        let o = {
                            advertiserId: e.advertiserId,
                            campaignId: e.campaignId,
                            creativeId: e.creativeId,
                            lineItemId: e.lineItemId,
                            size: e.size,
                            slotId: null != b ? b : s,
                            unitName: null !== (n = Q(e.slot.getAdUnitPath())) && void 0 !== n ? n : S.unit
                        };
                        U(o), (0, r.KL)(r.tw.displayAdLoaded, { ..._,
                            ...o,
                            event: "Ad Loaded",
                            nonInteraction: 1
                        }, v);
                        let a = V(s);
                        a && a.addEventListener("click", () => {
                            (0, r.KL)(r.tw.displayAdClicked, { ..._,
                                ...o,
                                event: "Ad Clicked",
                                nonInteraction: 0
                            }, v)
                        }), m && m()
                    },
                    j = e => {
                        let t = e.slot.getSlotElementId();
                        (0, r.KL)(r.tw.displayAdViewed, { ..._,
                            ...A.current[t],
                            event: "Ad Viewed",
                            nonInteraction: 1
                        }, v)
                    },
                    Z = D(f, S);
                if (b) {
                    if ("incontent" === b && (null == S ? void 0 : S.incontentAdvsIds.length) > 0) {
                        let e = S.incontentAdvsIds.indexOf(k);
                        Z.slot = "incontent".concat(e + 1)
                    } else if ("mid" === b && (null == S ? void 0 : S.midAdvsIds.length) > 0) {
                        let e = S.midAdvsIds.indexOf(k);
                        Z.slot = "mid".concat(e + 1)
                    } else Z.slot = b
                }
                return (0, n.tZ)(P.Wrapper, {
                    "data-cy": "ad",
                    "data-ad-type": b,
                    className: F,
                    $showSponsor: y,
                    $slot: b,
                    children: x && l && (0, n.BX)("aside", {
                        children: [y && (W && (null == W ? void 0 : W.length) > 0 || s && (null == s ? void 0 : s.length) > 0) && (0, n.tZ)(P.AdvTitle, {
                            variant: I.El.smBody,
                            tag: "p",
                            children: (null == S ? void 0 : S.displaySponsorText) || ""
                        }), (0, n.tZ)(E, {
                            id: k,
                            adUnitPath: (null == S ? void 0 : S.isSet) ? S.unit : h,
                            slotSize: s,
                            sizeMapping: W,
                            renderWhenViewable: !(S.lazyLoadingDisabled || g),
                            targeting: Z,
                            onSlotRenderEnded: e => q(e),
                            onImpressionViewable: e => j(e)
                        })]
                    })
                })
            }
        },
        43355: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return f
                }
            });
            var n = i(35944),
                r = i(66194),
                s = i(94184),
                o = i.n(s),
                a = i(67294),
                d = i(77986);
            let l = (0, d.css)(["border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline;"]),
                g = d.styled.span.withConfig({
                    shouldForwardProp: e => !["$variant"].includes(e),
                    componentId: "sc-1a26b28d-0"
                })(e => {
                    let {
                        theme: t,
                        $language: i,
                        $variant: n = r.El.DEFAULT
                    } = e, s = (null == t ? void 0 : t.typography[n]) ? t.typography[n] : {
                        base: {
                            xs: {}
                        }
                    }, o = (null == s ? void 0 : s[i]) ? s[i] : {
                        xs: {}
                    }, a = (null == s ? void 0 : s.base) || {
                        xs: {}
                    };
                    return [l, { ...{ ...a.xs,
                            ...null == o ? void 0 : o.xs
                        },
                        [(0, r.TE)(r.u3.SM)({
                            theme: t
                        })]: { ...a.sm,
                            ...null == o ? void 0 : o.sm
                        },
                        [(0, r.TE)(r.u3.MD)({
                            theme: t
                        })]: { ...a.md,
                            ...null == o ? void 0 : o.md
                        },
                        [(0, r.TE)(r.u3.LG)({
                            theme: t
                        })]: { ...a.lg,
                            ...null == o ? void 0 : o.lg
                        },
                        [(0, r.TE)(r.u3.XL)({
                            theme: t
                        })]: { ...a.xl,
                            ...null == o ? void 0 : o.xl
                        }
                    }]
                }),
                u = [r.SQ.EN, r.SQ.FR, r.SQ.DE, r.SQ.IT, r.SQ.PT, r.SQ.ES, r.SQ.JA, r.SQ.AR, r.SQ.ZH, r.SQ.HI, r.SQ.KO, r.SQ.RU],
                h = () => u.find(e => document.documentElement.lang.includes(e)) || null,
                c = e => {
                    let [t, i] = (0, a.useState)(h() || e);
                    return (0, a.useEffect)(() => {
                        i(h() || e);
                        let t = new MutationObserver(() => {
                            i(h() || e)
                        });
                        return t.observe(document, {
                            attributes: !0,
                            attributeFilter: ["lang"],
                            subtree: !0
                        }), () => {
                            t.disconnect()
                        }
                    }, []), t
                },
                p = a.createContext(void 0);
            var f = a.forwardRef((e, t) => {
                let {
                    tag: i,
                    variant: s = r.El.DEFAULT,
                    dataCy: d,
                    className: l,
                    children: u,
                    language: h,
                    ...f
                } = e, v = a.useContext(p), _ = c(r.SQ.DEFAULT), m = null != h ? h : _;
                return v && (m = r.SQ[v.toUpperCase()]), (0, n.tZ)(g, {
                    ref: t,
                    as: i,
                    "data-cy": d,
                    className: o()(l, "text--".concat(s)),
                    $variant: s,
                    $language: m,
                    ...f,
                    children: u
                })
            })
        },
        24654: function() {}
    }
]);
//# sourceMappingURL=149-4c76c83b0da69dc0.js.map