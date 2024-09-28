(() => {
    var t = {
            3234: (t, e) => {
                for (var r, n = 256, i = []; n--;) i[n] = (n + 256).toString(16).substring(1);
                e.v4 = function() {
                    var t, e = 0,
                        o = "";
                    if (!r || n + 16 > 256) {
                        for (r = Array(e = 256); e--;) r[e] = 256 * Math.random() | 0;
                        e = n = 0
                    }
                    for (; e < 16; e++) t = r[n + e], o += 6 == e ? i[15 & t | 64] : 8 == e ? i[63 & t | 128] : i[t], 1 & e && e > 1 && e < 11 && (o += "-");
                    return n++, o
                }
            },
            1075: (t, e, r) => {
                "use strict";
                var n = r(4331),
                    i = Object.prototype.toString,
                    o = "function" == typeof Array.isArray ? Array.isArray : function(t) {
                        return "[object Array]" === i.call(t)
                    },
                    s = function(t, e) {
                        for (var r = 0; r < e.length && !1 !== t(e[r], r, e); r += 1);
                    },
                    u = function(t, e) {
                        for (var r = n(e), i = 0; i < r.length && !1 !== t(e[r[i]], r[i], e); i += 1);
                    };
                t.exports = function(t, e) {
                    return (r = e, null != r && (o(r) || "function" !== r && function(t) {
                        var e = typeof t;
                        return "number" === e || "object" === e && "[object Number]" === i.call(t)
                    }(r.length)) ? s : u).call(this, t, e);
                    var r
                }
            },
            4331: t => {
                "use strict";
                var e = Object.prototype.hasOwnProperty,
                    r = String.prototype.charAt,
                    n = Object.prototype.toString,
                    i = function(t, e) {
                        return r.call(t, e)
                    },
                    o = function(t, r) {
                        return e.call(t, r)
                    },
                    s = function(t, e) {
                        e = e || o;
                        for (var r = [], n = 0, i = t.length; n < i; n += 1) e(t, n) && r.push(String(n));
                        return r
                    };
                t.exports = function(t) {
                    return null == t ? [] : (e = t, "[object String]" === n.call(e) ? s(t, i) : function(t) {
                        return null != t && "function" != typeof t && "number" == typeof t.length
                    }(t) ? s(t, o) : function(t, e) {
                        e = e || o;
                        var r = [];
                        for (var n in t) e(t, n) && r.push(String(n));
                        return r
                    }(t));
                    var e
                }
            },
            8363: (t, e, r) => {
                "use strict";
                var n = r(4331),
                    i = r(7429).v4,
                    o = {
                        _data: {},
                        length: 0,
                        setItem: function(t, e) {
                            return this._data[t] = e, this.length = n(this._data).length, e
                        },
                        getItem: function(t) {
                            return t in this._data ? this._data[t] : null
                        },
                        removeItem: function(t) {
                            return t in this._data && delete this._data[t], this.length = n(this._data).length, null
                        },
                        clear: function() {
                            this._data = {}, this.length = 0
                        },
                        key: function(t) {
                            return n(this._data)[t]
                        }
                    };
                t.exports.n = function() {
                    try {
                        if (!window.localStorage) return !1;
                        var t = i();
                        window.localStorage.setItem(t, "test_value");
                        var e = window.localStorage.getItem(t);
                        return window.localStorage.removeItem(t), "test_value" === e
                    } catch (t) {
                        return !1
                    }
                }() ? window.localStorage : o, t.exports.g = o
            },
            8029: (t, e, r) => {
                "use strict";
                var n = r(3234).v4,
                    i = r(3669),
                    o = r(1075),
                    s = r(2136),
                    u = r(1127)("localstorage-retry");

                function a(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }

                function l(t, e, r) {
                    "function" == typeof e && (r = e), this.name = t, this.id = n(), this.fn = r, this.maxItems = e.maxItems || 1 / 0, this.maxAttempts = e.maxAttempts || 1 / 0, this.backoff = {
                        MIN_RETRY_DELAY: e.minRetryDelay || 1e3,
                        MAX_RETRY_DELAY: e.maxRetryDelay || 3e4,
                        FACTOR: e.backoffFactor || 2,
                        JITTER: e.backoffJitter || 0
                    }, this.timeouts = {
                        ACK_TIMER: 1e3,
                        RECLAIM_TIMER: 3e3,
                        RECLAIM_TIMEOUT: 1e4,
                        RECLAIM_WAIT: 500
                    }, this.keys = {
                        IN_PROGRESS: "inProgress",
                        QUEUE: "queue",
                        RECLAIM_START: "reclaimStart",
                        RECLAIM_END: "reclaimEnd",
                        ACK: "ack"
                    }, this._schedule = new s, this._processId = 0, this._store = new i(this.name, this.id, this.keys), this._store.set(this.keys.IN_PROGRESS, {}), this._store.set(this.keys.QUEUE, []), this._ack = a(this._ack, this), this._checkReclaim = a(this._checkReclaim, this), this._processHead = a(this._processHead, this), this._running = !1
                }
                r(8767)(l.prototype), l.prototype.start = function() {
                    this._running && this.stop(), this._running = !0, this._ack(), this._checkReclaim(), this._processHead()
                }, l.prototype.stop = function() {
                    this._schedule.cancelAll(), this._running = !1
                }, l.prototype.shouldRetry = function(t, e) {
                    return !(e > this.maxAttempts)
                }, l.prototype.getDelay = function(t) {
                    var e = this.backoff.MIN_RETRY_DELAY * Math.pow(this.backoff.FACTOR, t);
                    if (this.backoff.JITTER) {
                        var r = Math.random(),
                            n = Math.floor(r * this.backoff.JITTER * e);
                        Math.floor(10 * r) < 5 ? e -= n : e += n
                    }
                    return Number(Math.min(e, this.backoff.MAX_RETRY_DELAY).toPrecision(1))
                }, l.prototype.addItem = function(t) {
                    this._enqueue({
                        item: t,
                        attemptNumber: 0,
                        time: this._schedule.now(),
                        id: n()
                    })
                }, l.prototype.requeue = function(t, e, r, i) {
                    this.shouldRetry(t, e, r) ? this._enqueue({
                        item: t,
                        attemptNumber: e,
                        time: this._schedule.now() + this.getDelay(e),
                        id: i || n()
                    }) : this.emit("discard", t, e)
                }, l.prototype._enqueue = function(t) {
                    var e = this._store.get(this.keys.QUEUE) || [];
                    (e = e.slice(-(this.maxItems - 1))).push(t), e = e.sort((function(t, e) {
                        return t.time - e.time
                    })), this._store.set(this.keys.QUEUE, e), this._running && this._processHead()
                }, l.prototype._processHead = function() {
                    var t = this,
                        e = this._store;
                    this._schedule.cancel(this._processId);
                    var r = e.get(this.keys.QUEUE) || [],
                        i = e.get(this.keys.IN_PROGRESS) || {},
                        a = this._schedule.now(),
                        l = [];

                    function c(r, n) {
                        l.push({
                            item: r.item,
                            done: function(i, o) {
                                var s = e.get(t.keys.IN_PROGRESS) || {};
                                delete s[n], e.set(t.keys.IN_PROGRESS, s), t.emit("processed", i, o, r.item), i && t.requeue(r.item, r.attemptNumber + 1, i, r.id)
                            }
                        })
                    }
                    for (var f = Object.keys(i).length; r.length && r[0].time <= a && f++ < t.maxItems;) {
                        var h = r.shift(),
                            d = n();
                        i[d] = {
                            item: h.item,
                            attemptNumber: h.attemptNumber,
                            time: t._schedule.now()
                        }, c(h, d)
                    }
                    e.set(this.keys.QUEUE, r), e.set(this.keys.IN_PROGRESS, i), o((function(e) {
                        try {
                            t.fn(e.item, e.done)
                        } catch (t) {
                            u("Process function threw error: " + t)
                        }
                    }), l), r = e.get(this.keys.QUEUE) || [], this._schedule.cancel(this._processId), r.length > 0 && (this._processId = this._schedule.run(this._processHead, r[0].time - a, s.Modes.ASAP))
                }, l.prototype._ack = function() {
                    this._store.set(this.keys.ACK, this._schedule.now()), this._store.set(this.keys.RECLAIM_START, null), this._store.set(this.keys.RECLAIM_END, null), this._schedule.run(this._ack, this.timeouts.ACK_TIMER, s.Modes.ASAP)
                }, l.prototype._checkReclaim = function() {
                    var t = this;
                    o((function(e) {
                        e.id !== t.id && (t._schedule.now() - e.get(t.keys.ACK) < t.timeouts.RECLAIM_TIMEOUT || function(e) {
                            e.set(t.keys.RECLAIM_START, t.id), e.set(t.keys.ACK, t._schedule.now()), t._schedule.run((function() {
                                e.get(t.keys.RECLAIM_START) === t.id && (e.set(t.keys.RECLAIM_END, t.id), t._schedule.run((function() {
                                    e.get(t.keys.RECLAIM_END) === t.id && e.get(t.keys.RECLAIM_START) === t.id && t._reclaim(e.id)
                                }), t.timeouts.RECLAIM_WAIT, s.Modes.ABANDON))
                            }), t.timeouts.RECLAIM_WAIT, s.Modes.ABANDON)
                        }(e))
                    }), function(e) {
                        for (var r = [], n = t._store.getOriginalEngine(), o = 0; o < n.length; o++) {
                            var s = n.key(o).split(".");
                            3 === s.length && s[0] === e && "ack" === s[2] && r.push(new i(e, s[1], t.keys))
                        }
                        return r
                    }(this.name)), this._schedule.run(this._checkReclaim, this.timeouts.RECLAIM_TIMER, s.Modes.RESCHEDULE)
                }, l.prototype._reclaim = function(t) {
                    var e = this,
                        r = new i(this.name, t, this.keys),
                        s = {
                            queue: this._store.get(this.keys.QUEUE) || []
                        },
                        u = {
                            inProgress: r.get(this.keys.IN_PROGRESS) || {},
                            queue: r.get(this.keys.QUEUE) || []
                        },
                        a = [],
                        l = function(t, r) {
                            o((function(t) {
                                var i = t.id || n();
                                a.indexOf(i) >= 0 ? e.emit("duplication", t.item, t.attemptNumber) : (s.queue.push({
                                    item: t.item,
                                    attemptNumber: t.attemptNumber + r,
                                    time: e._schedule.now(),
                                    id: i
                                }), a.push(i))
                            }), t)
                        };
                    l(u.queue, 0), l(u.inProgress, 1), s.queue = s.queue.sort((function(t, e) {
                        return t.time - e.time
                    })), this._store.set(this.keys.QUEUE, s.queue), r.remove(this.keys.IN_PROGRESS), r.remove(this.keys.QUEUE), r.remove(this.keys.RECLAIM_START), r.remove(this.keys.RECLAIM_END), r.remove(this.keys.ACK), this._processHead()
                }, t.exports = l
            },
            2136: (t, e, r) => {
                "use strict";
                var n = r(1075),
                    i = {
                        setTimeout: function(t, e) {
                            return window.setTimeout(t, e)
                        },
                        clearTimeout: function(t) {
                            return window.clearTimeout(t)
                        },
                        Date: window.Date
                    },
                    o = i,
                    s = {
                        ASAP: 1,
                        RESCHEDULE: 2,
                        ABANDON: 3
                    };

                function u() {
                    this.tasks = {}, this.nextId = 1
                }
                u.prototype.now = function() {
                    return +new o.Date
                }, u.prototype.run = function(t, e, r) {
                    var n = this.nextId++;
                    return this.tasks[n] = o.setTimeout(this._handle(n, t, e, r || s.ASAP), e), n
                }, u.prototype.cancel = function(t) {
                    this.tasks[t] && (o.clearTimeout(this.tasks[t]), delete this.tasks[t])
                }, u.prototype.cancelAll = function() {
                    n(o.clearTimeout, this.tasks), this.tasks = {}
                }, u.prototype._handle = function(t, e, r, n) {
                    var i = this,
                        o = i.now();
                    return function() {
                        if (delete i.tasks[t], !(n >= s.RESCHEDULE && o + 2 * r < i.now())) return e();
                        n === s.RESCHEDULE && i.run(e, r, n)
                    }
                }, u.setClock = function(t) {
                    o = t
                }, u.resetClock = function() {
                    o = i
                }, u.Modes = s, t.exports = u
            },
            3669: (t, e, r) => {
                "use strict";
                var n = r(8363).n,
                    i = r(8363).g,
                    o = r(1075),
                    s = r(4331),
                    u = JSON;

                function a(t, e, r, i) {
                    this.id = e, this.name = t, this.keys = r || {}, this.engine = i || n, this.originalEngine = this.engine
                }
                a.prototype.set = function(t, e) {
                    var r = this._createValidKey(t);
                    if (r) try {
                        this.engine.setItem(r, u.stringify(e))
                    } catch (r) {
                        (function(t) {
                            var e = !1;
                            if (t.code) switch (t.code) {
                                case 22:
                                    e = !0;
                                    break;
                                case 1014:
                                    "NS_ERROR_DOM_QUOTA_REACHED" === t.name && (e = !0)
                            } else -2147024882 === t.number && (e = !0);
                            return e
                        })(r) && (this._swapEngine(), this.set(t, e))
                    }
                }, a.prototype.get = function(t) {
                    try {
                        var e = this.engine.getItem(this._createValidKey(t));
                        return null === e ? null : u.parse(e)
                    } catch (t) {
                        return null
                    }
                }, a.prototype.getOriginalEngine = function() {
                    return this.originalEngine
                }, a.prototype.remove = function(t) {
                    this.engine.removeItem(this._createValidKey(t))
                }, a.prototype._createValidKey = function(t) {
                    var e, r = this.name,
                        n = this.id;
                    return s(this.keys).length ? (o((function(i) {
                        i === t && (e = [r, n, t].join("."))
                    }), this.keys), e) : [r, n, t].join(".")
                }, a.prototype._swapEngine = function() {
                    var t = this;
                    o((function(e) {
                        var r = t.get(e);
                        i.setItem([t.name, t.id, e].join("."), r), t.remove(e)
                    }), this.keys), this.engine = i
                }, t.exports = a
            },
            1127: t => {
                function e(t) {
                    return e.enabled(t) ? function(r) {
                        var n;
                        r = (n = r) instanceof Error ? n.stack || n.message : n;
                        var i = new Date,
                            o = i - (e[t] || i);
                        e[t] = i, r = t + " " + r + " +" + e.humanize(o), window.console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                    } : function() {}
                }
                t.exports = e, e.names = [], e.skips = [], e.enable = function(t) {
                    try {
                        localStorage.debug = t
                    } catch (t) {}
                    for (var r = (t || "").split(/[\s,]+/), n = r.length, i = 0; i < n; i++) "-" === (t = r[i].replace("*", ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$"))
                }, e.disable = function() {
                    e.enable("")
                }, e.humanize = function(t) {
                    var e = 6e4,
                        r = 60 * e;
                    return t >= r ? (t / r).toFixed(1) + "h" : t >= e ? (t / e).toFixed(1) + "m" : t >= 1e3 ? (t / 1e3 | 0) + "s" : t + "ms"
                }, e.enabled = function(t) {
                    for (var r = 0, n = e.skips.length; r < n; r++)
                        if (e.skips[r].test(t)) return !1;
                    for (r = 0, n = e.names.length; r < n; r++)
                        if (e.names[r].test(t)) return !0;
                    return !1
                };
                try {
                    window.localStorage && e.enable(localStorage.debug)
                } catch (t) {}
            },
            3018: (t, e, r) => {
                "use strict";
                var n = r(4836);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var i = n(r(434)),
                    o = n(r(861)),
                    s = n(r(6690)),
                    u = n(r(9728)),
                    a = n(r(1986)),
                    l = n(r(8763)),
                    c = r(617);

                function f() {}

                function h(t, e) {
                    if (!e) return t && t.then ? t.then(f) : Promise.resolve()
                }

                function d(t) {
                    var e = t();
                    if (e && e.then) return e.then(f)
                }

                function p(t, e, r) {
                    return r ? e ? e(t) : t : (t && t.then || (t = Promise.resolve(t)), e ? t.then(e) : t)
                }
                var y = function() {
                    function t(e, r) {
                        (0, s.default)(this, t), this.initialize = !1, this.initQueue = [], this.settings = e, this._user = r, this.eventFactory = new a.default(this.settings, this._user), this.dispatch = new l.default(this.settings), this.middlewareFn = function(t) {
                            var e = t.payload;
                            (0, t.next)(e)
                        }, this.integrations = {}, this.setAnonymousId = null == r ? void 0 : r.anonymousId, this.init()
                    }
                    return (0, u.default)(t, [{
                        key: "init",
                        value: function() {
                            try {
                                var t, e, r = this,
                                    n = window.ddna_library || [];
                                return r.integrations = null !== (t = null === (e = n._loadOptions) || void 0 === e ? void 0 : e.integrations) && void 0 !== t ? t : r.integrations, p(d((function() {
                                    if (n.length && 0 !== n.length) {
                                        for (var t = !1; n && n.length > 0;) {
                                            var e = n.shift(),
                                                i = e.shift();
                                            "function" == typeof r[i] && (t || (t = "ready" === i), r[i].apply(r, (0, o.default)(e)))
                                        }
                                        return d((function() {
                                            if (!t) return h(r.ready((function() {})))
                                        }))
                                    }
                                    return h(r.ready((function() {})))
                                })))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }
                    }, {
                        key: "ready",
                        value: function(t) {
                            try {
                                var e = this,
                                    r = e;
                                return setTimeout((function() {
                                    Promise.all(r.initQueue).then((function(t) {
                                        return t
                                    })).catch((function(t) {
                                        return t
                                    })).finally((function() {
                                        e.initQueue = [], e.initialize = !0, t(!0)
                                    }))
                                }), 0), p()
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }
                    }, {
                        key: "identify",
                        value: function(t, e) {
                            try {
                                var r = this,
                                    n = e || {},
                                    i = null;
                                (0, c.isString)(t) || (0, c.isNumber)(t) ? i = t: (0, c.isPlainObject)(t) && (n = t), r._user.identify(i, n);
                                var o = r.eventFactory.identify(r._user.id(), r._user.traits(), r.integrations);
                                return p(r.dispatchToMiddleware(o, "/i").catch((function(t) {
                                    return new Error(t)
                                })), (function(t) {
                                    return o = t, r.dispatcher(o, "/i")
                                }))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }
                    }, {
                        key: "track",
                        value: function(t, e) {
                            try {
                                var r = this,
                                    n = r.eventFactory.track(t, e, r.integrations);
                                return p(r.dispatchToMiddleware(n, "/t").catch((function(t) {
                                    return new Error(t)
                                })), (function(t) {
                                    return n = t, r.dispatcher(n, "/t")
                                }))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }
                    }, {
                        key: "page",
                        value: function(t, e, r) {
                            try {
                                var n = this,
                                    i = n.eventFactory.page(t, e, r, n.integrations);
                                return p(n.dispatchToMiddleware(i, "/p").catch((function(t) {
                                    return new Error(t)
                                })), (function(t) {
                                    return i = t, n.dispatcher(i, "/p")
                                }))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }
                    }, {
                        key: "user",
                        value: function() {
                            return this._user
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this._user.reset()
                        }
                    }, {
                        key: "dispatchToMiddleware",
                        value: function(t) {
                            try {
                                var e = this;
                                return p(new Promise((function(r) {
                                    e.middlewareFn({
                                        payload: {
                                            obj: t,
                                            raw: (0, i.default)({}, t),
                                            opts: {}
                                        },
                                        next: function(t) {
                                            return r(t.obj)
                                        }
                                    })
                                })))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }
                    }, {
                        key: "dispatchToApi",
                        value: function(t, e) {
                            try {
                                return p(this.dispatch.post(t, e).then((function() {
                                    return t
                                })).catch((function(t) {
                                    throw t
                                })))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }
                    }, {
                        key: "dispatcher",
                        value: function(t, e) {
                            try {
                                var r = this;
                                return r.initialize ? p(r.dispatchToApi(t, e).then((function(t) {
                                    return t
                                })).catch((function(t) {
                                    return new Error(t)
                                }))) : p(r.initQueue.push(r.dispatchToApi(t, e)))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }
                    }, {
                        key: "addSourceMiddleware",
                        value: function(t) {
                            try {
                                return this.middlewareFn = t, p()
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }
                    }]), t
                }();
                e.default = y
            },
            8763: (t, e, r) => {
                "use strict";
                var n = r(4836);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var i = n(r(6690)),
                    o = n(r(9728)),
                    s = n(r(658)),
                    u = function() {
                        function t(e) {
                            (0, i.default)(this, t), this.defaultApiHost = "5hyj07l4qd.execute-api.eu-west-3.amazonaws.com/dev/api/paradigma", this.apiHost = (null == e ? void 0 : e.apiHost) || this.defaultApiHost, this.jwt = null == e ? void 0 : e.jwt, this.jwt_header = null == e ? void 0 : e.jwt_header, this.queue = new s.default
                        }
                        return (0, o.default)(t, [{
                            key: "post",
                            value: function(t, e) {
                                try {
                                    var r = this,
                                        n = {
                                            "Content-Type": "application/json"
                                        };
                                    r.jwt && r.jwt_header && (n[r.jwt_header] = r.jwt);
                                    var i = {
                                        headers: n,
                                        url: "".concat(r.apiHost),
                                        body: t
                                    };
                                    return r.queue.push(i), (o = i) && o.then || (o = Promise.resolve(o)), o
                                } catch (t) {
                                    return Promise.reject(t)
                                }
                                var o
                            }
                        }]), t
                    }();
                e.default = u
            },
            1601: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var n = r(2671),
                    i = r(8369);
                e.default = function(t, e) {
                    e.context = {};
                    var r = e.context;
                    n.pageEnrichment[e.type](e), r.userAgent = window.navigator.userAgent, e.userId = e.userId || (null == t ? void 0 : t.id());
                    var o = navigator.userLanguage || navigator.language;
                    if (r.locale = o, r.library = {
                            name: "Analytics-Olympics",
                            version: "v-".concat(i.version)
                        }, window.location.search.match(/utm_/)) {
                        var s = new URLSearchParams(window.location.search);
                        r.campaign = {
                            name: s.get("utm_campaign") || void 0,
                            source: s.get("utm_source") || void 0,
                            medium: s.get("utm_medium") || void 0,
                            term: s.get("utm_term") || void 0,
                            content: s.get("utm_content") || void 0
                        }
                    }
                    return e.sentAt = new Date, e
                }
            },
            1986: (t, e, r) => {
                "use strict";
                var n = r(4836);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var i = n(r(8416)),
                    o = n(r(434)),
                    s = n(r(6690)),
                    u = n(r(9728)),
                    a = r(3234),
                    l = n(r(8322)),
                    c = n(r(1601)),
                    f = function() {
                        function t(e, r) {
                            (0, s.default)(this, t), this.settings = e, this.user = r
                        }
                        return (0, u.default)(t, [{
                            key: "identify",
                            value: function(t, e, r) {
                                return this.normalize((0, o.default)({}, this.baseEvent(), {
                                    type: "identify",
                                    userId: t,
                                    traits: e,
                                    integrations: (0, o.default)({}, r)
                                }))
                            }
                        }, {
                            key: "track",
                            value: function(t, e, r) {
                                return this.normalize((0, o.default)({}, this.baseEvent(), {
                                    event: t,
                                    type: "track",
                                    properties: e,
                                    integrations: (0, o.default)({}, r)
                                }))
                            }
                        }, {
                            key: "page",
                            value: function(t, e, r, n) {
                                var i = {
                                    type: "page",
                                    properties: (0, o.default)({}, r),
                                    integrations: (0, o.default)({}, n)
                                };
                                return null !== t && (i.category = t, i.properties.category = t), null !== e && (i.name = e), this.normalize((0, o.default)({}, this.baseEvent(), i))
                            }
                        }, {
                            key: "normalize",
                            value: function(t) {
                                var e, r = Object.keys(t.integrations).reduce((function(e, r) {
                                    var n;
                                    return (0, o.default)({}, e, (0, i.default)({}, r, Boolean(null === (n = t.integrations) || void 0 === n ? void 0 : n[r])))
                                }), {});
                                t = (0, c.default)(this.user, t);
                                var n = (0, o.default)({
                                        timestamp: new Date
                                    }, t, {
                                        integrations: r
                                    }),
                                    s = "aoc-".concat(l.default.hash(JSON.stringify(n) + (0, a.v4)())),
                                    u = null === (e = this.settings) || void 0 === e ? void 0 : e.writeKey;
                                return (0, o.default)({}, n, {
                                    messageId: s,
                                    writeKey: u
                                })
                            }
                        }, {
                            key: "baseEvent",
                            value: function() {
                                var t = {
                                        integrations: {}
                                    },
                                    e = this.user.id(),
                                    r = this.user.anonymousId();
                                return e && (t.userId = e), r && (t.anonymousId = r), t
                            }
                        }]), t
                    }();
                e.default = f
            },
            2671: (t, e, r) => {
                "use strict";
                var n = r(4836);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.canonicalUrl = u, e.pageDefaults = a, e.pageEnrichment = void 0;
                var i = n(r(434));

                function o() {
                    var t = document.getElementsByTagName("link"),
                        e = "";
                    return Array.prototype.slice.call(t).forEach((function(t) {
                        "canonical" === t.getAttribute("rel") && (e = t.getAttribute("href"))
                    })), e
                }

                function s() {
                    var t = o();
                    if (!t) return window.location.pathname;
                    var e = document.createElement("a");
                    return e.href = t, e.pathname.startsWith("/") ? e.pathname : "/".concat(e.pathname)
                }

                function u() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = o();
                    if (e) return e.includes("?") ? e : "".concat(e).concat(t);
                    var r = window.location.href,
                        n = r.indexOf("#");
                    return -1 === n ? r : r.slice(0, n)
                }

                function a() {
                    return {
                        path: s(),
                        referrer: document.referrer,
                        search: window.location.search,
                        title: document.title,
                        url: u(window.location.search)
                    }
                }

                function l(t) {
                    var e = t.context || {};
                    return e.page = a(), t.context = e, t
                }
                var c = {
                    page: function(t) {
                        var e;
                        return (t = l(t)).properties = (0, i.default)({}, null === (e = t.context) || void 0 === e ? void 0 : e.page, t.properties), t.name && (t.properties.name = t.name), t
                    },
                    track: l,
                    identify: l
                };
                e.pageEnrichment = c
            },
            8369: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.version = void 0, e.version = "0.0.16"
            },
            658: (t, e, r) => {
                "use strict";
                var n = r(4836);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var i = n(r(6690)),
                    o = n(r(9728)),
                    s = n(r(8029)),
                    u = function() {
                        function t() {
                            (0, i.default)(this, t), this.queueName = "events-queue", this.options = {
                                minRetryDelay: 500
                            }, this.client = new s.default(this.queueName, this.options, this.handler), this.client.start()
                        }
                        return (0, o.default)(t, [{
                            key: "handler",
                            value: function(t, e) {
                                var r = t.headers,
                                    n = t.url,
                                    i = t.body;
                                i.sentAt = new Date, fetch(n, {
                                    headers: r,
                                    body: JSON.stringify(i),
                                    method: "POST"
                                }).then((function(t) {
                                    return e(null, t.json())
                                })).catch((function(t) {
                                    return e(t)
                                }))
                            }
                        }, {
                            key: "start",
                            value: function() {
                                this.client.start()
                            }
                        }, {
                            key: "push",
                            value: function(t) {
                                this.client.addItem(t)
                            }
                        }, {
                            key: "stop",
                            value: function() {
                                this.client.stop()
                            }
                        }]), t
                    }();
                e.default = u
            },
            9890: (t, e, r) => {
                "use strict";
                var n = r(4836);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var i = n(r(6690)),
                    o = n(r(9728)),
                    s = n(r(646)),
                    u = function() {
                        function t() {
                            (0, i.default)(this, t), this.ONE_YEAR = 365, this.options = {
                                maxage: this.ONE_YEAR,
                                domain: window.location.hostname,
                                path: "/",
                                sameSite: "Lax"
                            }
                        }
                        return (0, o.default)(t, [{
                            key: "opts",
                            value: function() {
                                return {
                                    sameSite: this.options.sameSite,
                                    expires: this.options.maxage,
                                    domain: this.options.domain,
                                    path: this.options.path
                                }
                            }
                        }, {
                            key: "get",
                            value: function(t) {
                                try {
                                    var e = s.default.get(t);
                                    if (!e) return null;
                                    try {
                                        return JSON.parse(e)
                                    } catch (t) {
                                        return e
                                    }
                                } catch (t) {
                                    return null
                                }
                            }
                        }, {
                            key: "set",
                            value: function(t, e) {
                                return "string" == typeof e ? s.default.set(t, e, this.opts()) : null === e ? s.default.remove(t, this.opts()) : s.default.set(t, JSON.stringify(e), this.opts()), e
                            }
                        }, {
                            key: "remove",
                            value: function(t) {
                                return s.default.remove(t, this.opts())
                            }
                        }]), t
                    }();
                e.default = u
            },
            1495: (t, e, r) => {
                "use strict";
                var n = r(4836);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var i = n(r(6690)),
                    o = n(r(9728)),
                    s = function() {
                        function t() {
                            (0, i.default)(this, t)
                        }
                        return (0, o.default)(t, [{
                            key: "get",
                            value: function(t) {
                                var e = localStorage.getItem(t);
                                if (e) try {
                                    return JSON.parse(e)
                                } catch (t) {
                                    return JSON.parse(JSON.stringify(e))
                                }
                                return null
                            }
                        }, {
                            key: "set",
                            value: function(t, e) {
                                try {
                                    localStorage.setItem(t, JSON.stringify(e))
                                } catch (e) {
                                    console.warn("Unable to set ".concat(t, " in localStorage, storage may be full."))
                                }
                                return e
                            }
                        }, {
                            key: "remove",
                            value: function(t) {
                                return localStorage.removeItem(t)
                            }
                        }]), t
                    }();
                e.default = s
            },
            9300: (t, e, r) => {
                "use strict";
                var n = r(4836);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var i = n(r(434)),
                    o = n(r(6690)),
                    s = n(r(9728)),
                    u = r(3234),
                    a = n(r(1495)),
                    l = n(r(9890)),
                    c = function() {
                        function t() {
                            var e, r, n, i, s, c, f = this,
                                h = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.defaults;
                            (0, o.default)(this, t), this.defaults = {
                                cookie: {
                                    key: "aoc_user_id"
                                },
                                localStorage: {
                                    key: "aoc_user_traits"
                                },
                                anonKey: "aoc_anonymous_id"
                            }, this.id = function(t) {
                                var e, r = f.chainGet(f.idKey);
                                return void 0 !== t && (f.trySet(f.idKey, t), t !== r && null !== r && null !== t && f.anonymousId(null)), null !== (e = f.chainGet(f.idKey)) && void 0 !== e ? e : null
                            }, this.anonymousId = function(t) {
                                if (void 0 === t) {
                                    var e, r = null !== (e = f.chainGet(f.anonKey)) && void 0 !== e ? e : null;
                                    if (r) return r
                                }
                                return null === t ? (f.trySet(f.anonKey, null), f.chainGet(f.anonKey)) : (f.trySet(f.anonKey, null != t ? t : (0, u.v4)()), f.chainGet(f.anonKey))
                            }, this.traits = function(t) {
                                var e, r;
                                return null === t && (t = {}), t && f.localStorage.set(f.traitsKey, null !== (r = t) && void 0 !== r ? r : {}), null !== (e = f.localStorage.get(f.traitsKey)) && void 0 !== e ? e : {}
                            }, this.options = h, this.idKey = null !== (e = null === (r = this.options) || void 0 === r || null === (r = r.cookie) || void 0 === r ? void 0 : r.key) && void 0 !== e ? e : this.defaults.cookie.key, this.traitsKey = null !== (n = null === (i = this.options) || void 0 === i || null === (i = i.localStorage) || void 0 === i ? void 0 : i.key) && void 0 !== n ? n : this.defaults.localStorage.key, this.anonKey = null !== (s = null === (c = this.options) || void 0 === c ? void 0 : c.anonKey) && void 0 !== s ? s : this.defaults.localStorage.key, this.localStorage = new a.default, this.cookies = new l.default
                        }
                        return (0, s.default)(t, [{
                            key: "chainGet",
                            value: function(t) {
                                var e, r, n = null !== (e = null !== (r = this.localStorage.get(t)) && void 0 !== r ? r : this.cookies.get(t)) && void 0 !== e ? e : null;
                                return this.trySet(t, "number" == typeof n ? n.toString() : n)
                            }
                        }, {
                            key: "trySet",
                            value: function(t, e) {
                                return this.localStorage.set(t, e), this.cookies.set(t, e), e
                            }
                        }, {
                            key: "chainClear",
                            value: function(t) {
                                this.localStorage.remove(t), this.cookies.remove(t)
                            }
                        }, {
                            key: "identify",
                            value: function(t, e) {
                                var r;
                                e = null !== (r = e) && void 0 !== r ? r : {};
                                var n = this.id();
                                null !== n && n !== t || (e = (0, i.default)({}, this.traits(), e)), t && this.id(t), this.traits(e)
                            }
                        }, {
                            key: "logout",
                            value: function() {
                                this.anonymousId(null), this.id(null), this.traits({})
                            }
                        }, {
                            key: "reset",
                            value: function() {
                                this.logout(), this.chainClear(this.idKey), this.chainClear(this.anonKey), this.chainClear(this.traitsKey)
                            }
                        }]), t
                    }();
                e.default = c
            },
            617: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.isFunction = function(t) {
                    return "function" == typeof t
                }, e.isHash = function(t) {
                    return /^[a-zA-Z0-9]{32}$/gi.test(t)
                }, e.isNumber = function(t) {
                    return "number" == typeof t
                }, e.isPlainObject = function(t) {
                    return "object" === Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
                }, e.isString = function(t) {
                    return "string" == typeof t
                }
            },
            2285: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.getUrlWriteKey = i, e.setWritekey = function() {
                    var t, e = i();
                    return (0, n.isHash)(e) ? e : null === (t = window) || void 0 === t || null === (t = t.GlobalConfiguration) || void 0 === t ? void 0 : t.segmentKey
                };
                var n = r(617);

                function i() {
                    var t = (document.currentScript.src || "").split("/");
                    return t[t.length - 2]
                }
            },
            8767: t => {
                function e(t) {
                    if (t) return function(t) {
                        for (var r in e.prototype) t[r] = e.prototype[r];
                        return t
                    }(t)
                }
                t.exports = e, e.prototype.on = e.prototype.addEventListener = function(t, e) {
                    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
                }, e.prototype.once = function(t, e) {
                    function r() {
                        this.off(t, r), e.apply(this, arguments)
                    }
                    return r.fn = e, this.on(t, r), this
                }, e.prototype.off = e.prototype.removeListener = e.prototype.removeAllListeners = e.prototype.removeEventListener = function(t, e) {
                    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                    var r, n = this._callbacks["$" + t];
                    if (!n) return this;
                    if (1 == arguments.length) return delete this._callbacks["$" + t], this;
                    for (var i = 0; i < n.length; i++)
                        if ((r = n[i]) === e || r.fn === e) {
                            n.splice(i, 1);
                            break
                        }
                    return 0 === n.length && delete this._callbacks["$" + t], this
                }, e.prototype.emit = function(t) {
                    this._callbacks = this._callbacks || {};
                    for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    if (r) {
                        n = 0;
                        for (var i = (r = r.slice(0)).length; n < i; ++n) r[n].apply(this, e)
                    }
                    return this
                }, e.prototype.listeners = function(t) {
                    return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
                }, e.prototype.hasListeners = function(t) {
                    return !!this.listeners(t).length
                }
            },
            646: function(t) {
                t.exports = function() {
                    "use strict";

                    function t(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = arguments[e];
                            for (var n in r) t[n] = r[n]
                        }
                        return t
                    }
                    return function e(r, n) {
                        function i(e, i, o) {
                            if ("undefined" != typeof document) {
                                "number" == typeof(o = t({}, n, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)), o.expires && (o.expires = o.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                                var s = "";
                                for (var u in o) o[u] && (s += "; " + u, !0 !== o[u] && (s += "=" + o[u].split(";")[0]));
                                return document.cookie = e + "=" + r.write(i, e) + s
                            }
                        }
                        return Object.create({
                            set: i,
                            get: function(t) {
                                if ("undefined" != typeof document && (!arguments.length || t)) {
                                    for (var e = document.cookie ? document.cookie.split("; ") : [], n = {}, i = 0; i < e.length; i++) {
                                        var o = e[i].split("="),
                                            s = o.slice(1).join("=");
                                        try {
                                            var u = decodeURIComponent(o[0]);
                                            if (n[u] = r.read(s, u), t === u) break
                                        } catch (t) {}
                                    }
                                    return t ? n[t] : n
                                }
                            },
                            remove: function(e, r) {
                                i(e, "", t({}, r, {
                                    expires: -1
                                }))
                            },
                            withAttributes: function(r) {
                                return e(this.converter, t({}, this.attributes, r))
                            },
                            withConverter: function(r) {
                                return e(t({}, this.converter, r), this.attributes)
                            }
                        }, {
                            attributes: {
                                value: Object.freeze(n)
                            },
                            converter: {
                                value: Object.freeze(r)
                            }
                        })
                    }({
                        read: function(t) {
                            return '"' === t[0] && (t = t.slice(1, -1)), t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                        },
                        write: function(t) {
                            return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                        }
                    }, {
                        path: "/"
                    })
                }()
            },
            8322: t => {
                t.exports = function(t) {
                    "use strict";
                    var e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

                    function r(t, e) {
                        var r = t[0],
                            n = t[1],
                            i = t[2],
                            o = t[3];
                        n = ((n += ((i = ((i += ((o = ((o += ((r = ((r += (n & i | ~n & o) + e[0] - 680876936 | 0) << 7 | r >>> 25) + n | 0) & n | ~r & i) + e[1] - 389564586 | 0) << 12 | o >>> 20) + r | 0) & r | ~o & n) + e[2] + 606105819 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & r) + e[3] - 1044525330 | 0) << 22 | n >>> 10) + i | 0, n = ((n += ((i = ((i += ((o = ((o += ((r = ((r += (n & i | ~n & o) + e[4] - 176418897 | 0) << 7 | r >>> 25) + n | 0) & n | ~r & i) + e[5] + 1200080426 | 0) << 12 | o >>> 20) + r | 0) & r | ~o & n) + e[6] - 1473231341 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & r) + e[7] - 45705983 | 0) << 22 | n >>> 10) + i | 0, n = ((n += ((i = ((i += ((o = ((o += ((r = ((r += (n & i | ~n & o) + e[8] + 1770035416 | 0) << 7 | r >>> 25) + n | 0) & n | ~r & i) + e[9] - 1958414417 | 0) << 12 | o >>> 20) + r | 0) & r | ~o & n) + e[10] - 42063 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & r) + e[11] - 1990404162 | 0) << 22 | n >>> 10) + i | 0, n = ((n += ((i = ((i += ((o = ((o += ((r = ((r += (n & i | ~n & o) + e[12] + 1804603682 | 0) << 7 | r >>> 25) + n | 0) & n | ~r & i) + e[13] - 40341101 | 0) << 12 | o >>> 20) + r | 0) & r | ~o & n) + e[14] - 1502002290 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & r) + e[15] + 1236535329 | 0) << 22 | n >>> 10) + i | 0, n = ((n += ((i = ((i += ((o = ((o += ((r = ((r += (n & o | i & ~o) + e[1] - 165796510 | 0) << 5 | r >>> 27) + n | 0) & i | n & ~i) + e[6] - 1069501632 | 0) << 9 | o >>> 23) + r | 0) & n | r & ~n) + e[11] + 643717713 | 0) << 14 | i >>> 18) + o | 0) & r | o & ~r) + e[0] - 373897302 | 0) << 20 | n >>> 12) + i | 0, n = ((n += ((i = ((i += ((o = ((o += ((r = ((r += (n & o | i & ~o) + e[5] - 701558691 | 0) << 5 | r >>> 27) + n | 0) & i | n & ~i) + e[10] + 38016083 | 0) << 9 | o >>> 23) + r | 0) & n | r & ~n) + e[15] - 660478335 | 0) << 14 | i >>> 18) + o | 0) & r | o & ~r) + e[4] - 405537848 | 0) << 20 | n >>> 12) + i | 0, n = ((n += ((i = ((i += ((o = ((o += ((r = ((r += (n & o | i & ~o) + e[9] + 568446438 | 0) << 5 | r >>> 27) + n | 0) & i | n & ~i) + e[14] - 1019803690 | 0) << 9 | o >>> 23) + r | 0) & n | r & ~n) + e[3] - 187363961 | 0) << 14 | i >>> 18) + o | 0) & r | o & ~r) + e[8] + 1163531501 | 0) << 20 | n >>> 12) + i | 0, n = ((n += ((i = ((i += ((o = ((o += ((r = ((r += (n & o | i & ~o) + e[13] - 1444681467 | 0) << 5 | r >>> 27) + n | 0) & i | n & ~i) + e[2] - 51403784 | 0) << 9 | o >>> 23) + r | 0) & n | r & ~n) + e[7] + 1735328473 | 0) << 14 | i >>> 18) + o | 0) & r | o & ~r) + e[12] - 1926607734 | 0) << 20 | n >>> 12) + i | 0, n = ((n += ((i = ((i += ((o = ((o += ((r = ((r += (n ^ i ^ o) + e[5] - 378558 | 0) << 4 | r >>> 28) + n | 0) ^ n ^ i) + e[8] - 2022574463 | 0) << 11 | o >>> 21) + r | 0) ^ r ^ n) + e[11] + 1839030562 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ r) + e[14] - 35309556 | 0) << 23 | n >>> 9) + i | 0, n = ((n += ((i = ((i += ((o = ((o += ((r = ((r += (n ^ i ^ o) + e[1] - 1530992060 | 0) << 4 | r >>> 28) + n | 0) ^ n ^ i) + e[4] + 1272893353 | 0) << 11 | o >>> 21) + r | 0) ^ r ^ n) + e[7] - 155497632 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ r) + e[10] - 1094730640 | 0) << 23 | n >>> 9) + i | 0, n = ((n += ((i = ((i += ((o = ((o += ((r = ((r += (n ^ i ^ o) + e[13] + 681279174 | 0) << 4 | r >>> 28) + n | 0) ^ n ^ i) + e[0] - 358537222 | 0) << 11 | o >>> 21) + r | 0) ^ r ^ n) + e[3] - 722521979 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ r) + e[6] + 76029189 | 0) << 23 | n >>> 9) + i | 0, n = ((n += ((i = ((i += ((o = ((o += ((r = ((r += (n ^ i ^ o) + e[9] - 640364487 | 0) << 4 | r >>> 28) + n | 0) ^ n ^ i) + e[12] - 421815835 | 0) << 11 | o >>> 21) + r | 0) ^ r ^ n) + e[15] + 530742520 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ r) + e[2] - 995338651 | 0) << 23 | n >>> 9) + i | 0, n = ((n += ((o = ((o += (n ^ ((r = ((r += (i ^ (n | ~o)) + e[0] - 198630844 | 0) << 6 | r >>> 26) + n | 0) | ~i)) + e[7] + 1126891415 | 0) << 10 | o >>> 22) + r | 0) ^ ((i = ((i += (r ^ (o | ~n)) + e[14] - 1416354905 | 0) << 15 | i >>> 17) + o | 0) | ~r)) + e[5] - 57434055 | 0) << 21 | n >>> 11) + i | 0, n = ((n += ((o = ((o += (n ^ ((r = ((r += (i ^ (n | ~o)) + e[12] + 1700485571 | 0) << 6 | r >>> 26) + n | 0) | ~i)) + e[3] - 1894986606 | 0) << 10 | o >>> 22) + r | 0) ^ ((i = ((i += (r ^ (o | ~n)) + e[10] - 1051523 | 0) << 15 | i >>> 17) + o | 0) | ~r)) + e[1] - 2054922799 | 0) << 21 | n >>> 11) + i | 0, n = ((n += ((o = ((o += (n ^ ((r = ((r += (i ^ (n | ~o)) + e[8] + 1873313359 | 0) << 6 | r >>> 26) + n | 0) | ~i)) + e[15] - 30611744 | 0) << 10 | o >>> 22) + r | 0) ^ ((i = ((i += (r ^ (o | ~n)) + e[6] - 1560198380 | 0) << 15 | i >>> 17) + o | 0) | ~r)) + e[13] + 1309151649 | 0) << 21 | n >>> 11) + i | 0, n = ((n += ((o = ((o += (n ^ ((r = ((r += (i ^ (n | ~o)) + e[4] - 145523070 | 0) << 6 | r >>> 26) + n | 0) | ~i)) + e[11] - 1120210379 | 0) << 10 | o >>> 22) + r | 0) ^ ((i = ((i += (r ^ (o | ~n)) + e[2] + 718787259 | 0) << 15 | i >>> 17) + o | 0) | ~r)) + e[9] - 343485551 | 0) << 21 | n >>> 11) + i | 0, t[0] = r + t[0] | 0, t[1] = n + t[1] | 0, t[2] = i + t[2] | 0, t[3] = o + t[3] | 0
                    }

                    function n(t) {
                        var e, r = [];
                        for (e = 0; e < 64; e += 4) r[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
                        return r
                    }

                    function i(t) {
                        var e, r = [];
                        for (e = 0; e < 64; e += 4) r[e >> 2] = t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24);
                        return r
                    }

                    function o(t) {
                        var e, i, o, s, u, a, l = t.length,
                            c = [1732584193, -271733879, -1732584194, 271733878];
                        for (e = 64; e <= l; e += 64) r(c, n(t.substring(e - 64, e)));
                        for (i = (t = t.substring(e - 64)).length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e = 0; e < i; e += 1) o[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
                        if (o[e >> 2] |= 128 << (e % 4 << 3), e > 55)
                            for (r(c, o), e = 0; e < 16; e += 1) o[e] = 0;
                        return s = (s = 8 * l).toString(16).match(/(.*?)(.{0,8})$/), u = parseInt(s[2], 16), a = parseInt(s[1], 16) || 0, o[14] = u, o[15] = a, r(c, o), c
                    }

                    function s(t) {
                        var r, n = "";
                        for (r = 0; r < 4; r += 1) n += e[t >> 8 * r + 4 & 15] + e[t >> 8 * r & 15];
                        return n
                    }

                    function u(t) {
                        var e;
                        for (e = 0; e < t.length; e += 1) t[e] = s(t[e]);
                        return t.join("")
                    }

                    function a(t) {
                        return /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))), t
                    }

                    function l(t) {
                        var e, r = [],
                            n = t.length;
                        for (e = 0; e < n - 1; e += 2) r.push(parseInt(t.substr(e, 2), 16));
                        return String.fromCharCode.apply(String, r)
                    }

                    function c() {
                        this.reset()
                    }
                    return u(o("hello")), "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
                        function t(t, e) {
                            return (t = 0 | t || 0) < 0 ? Math.max(t + e, 0) : Math.min(t, e)
                        }
                        ArrayBuffer.prototype.slice = function(e, r) {
                            var n, i, o, s, u = this.byteLength,
                                a = t(e, u),
                                l = u;
                            return undefined !== r && (l = t(r, u)), a > l ? new ArrayBuffer(0) : (n = l - a, i = new ArrayBuffer(n), o = new Uint8Array(i), s = new Uint8Array(this, a, n), o.set(s), i)
                        }
                    }(), c.prototype.append = function(t) {
                        return this.appendBinary(a(t)), this
                    }, c.prototype.appendBinary = function(t) {
                        this._buff += t, this._length += t.length;
                        var e, i = this._buff.length;
                        for (e = 64; e <= i; e += 64) r(this._hash, n(this._buff.substring(e - 64, e)));
                        return this._buff = this._buff.substring(e - 64), this
                    }, c.prototype.end = function(t) {
                        var e, r, n = this._buff,
                            i = n.length,
                            o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        for (e = 0; e < i; e += 1) o[e >> 2] |= n.charCodeAt(e) << (e % 4 << 3);
                        return this._finish(o, i), r = u(this._hash), t && (r = l(r)), this.reset(), r
                    }, c.prototype.reset = function() {
                        return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
                    }, c.prototype.getState = function() {
                        return {
                            buff: this._buff,
                            length: this._length,
                            hash: this._hash.slice()
                        }
                    }, c.prototype.setState = function(t) {
                        return this._buff = t.buff, this._length = t.length, this._hash = t.hash, this
                    }, c.prototype.destroy = function() {
                        delete this._hash, delete this._buff, delete this._length
                    }, c.prototype._finish = function(t, e) {
                        var n, i, o, s = e;
                        if (t[s >> 2] |= 128 << (s % 4 << 3), s > 55)
                            for (r(this._hash, t), s = 0; s < 16; s += 1) t[s] = 0;
                        n = (n = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), i = parseInt(n[2], 16), o = parseInt(n[1], 16) || 0, t[14] = i, t[15] = o, r(this._hash, t)
                    }, c.hash = function(t, e) {
                        return c.hashBinary(a(t), e)
                    }, c.hashBinary = function(t, e) {
                        var r = u(o(t));
                        return e ? l(r) : r
                    }, c.ArrayBuffer = function() {
                        this.reset()
                    }, c.ArrayBuffer.prototype.append = function(t) {
                        var e, n, o, s, u, a = (n = this._buff.buffer, o = t, s = !0, (u = new Uint8Array(n.byteLength + o.byteLength)).set(new Uint8Array(n)), u.set(new Uint8Array(o), n.byteLength), s ? u : u.buffer),
                            l = a.length;
                        for (this._length += t.byteLength, e = 64; e <= l; e += 64) r(this._hash, i(a.subarray(e - 64, e)));
                        return this._buff = e - 64 < l ? new Uint8Array(a.buffer.slice(e - 64)) : new Uint8Array(0), this
                    }, c.ArrayBuffer.prototype.end = function(t) {
                        var e, r, n = this._buff,
                            i = n.length,
                            o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        for (e = 0; e < i; e += 1) o[e >> 2] |= n[e] << (e % 4 << 3);
                        return this._finish(o, i), r = u(this._hash), t && (r = l(r)), this.reset(), r
                    }, c.ArrayBuffer.prototype.reset = function() {
                        return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
                    }, c.ArrayBuffer.prototype.getState = function() {
                        var t, e = c.prototype.getState.call(this);
                        return e.buff = (t = e.buff, String.fromCharCode.apply(null, new Uint8Array(t))), e
                    }, c.ArrayBuffer.prototype.setState = function(t) {
                        return t.buff = function(t, e) {
                            var r, n = t.length,
                                i = new ArrayBuffer(n),
                                o = new Uint8Array(i);
                            for (r = 0; r < n; r += 1) o[r] = t.charCodeAt(r);
                            return e ? o : i
                        }(t.buff, !0), c.prototype.setState.call(this, t)
                    }, c.ArrayBuffer.prototype.destroy = c.prototype.destroy, c.ArrayBuffer.prototype._finish = c.prototype._finish, c.ArrayBuffer.hash = function(t, e) {
                        var n = u(function(t) {
                            var e, n, o, s, u, a, l = t.length,
                                c = [1732584193, -271733879, -1732584194, 271733878];
                            for (e = 64; e <= l; e += 64) r(c, i(t.subarray(e - 64, e)));
                            for (n = (t = e - 64 < l ? t.subarray(e - 64) : new Uint8Array(0)).length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e = 0; e < n; e += 1) o[e >> 2] |= t[e] << (e % 4 << 3);
                            if (o[e >> 2] |= 128 << (e % 4 << 3), e > 55)
                                for (r(c, o), e = 0; e < 16; e += 1) o[e] = 0;
                            return s = (s = 8 * l).toString(16).match(/(.*?)(.{0,8})$/), u = parseInt(s[2], 16), a = parseInt(s[1], 16) || 0, o[14] = u, o[15] = a, r(c, o), c
                        }(new Uint8Array(t)));
                        return e ? l(n) : n
                    }, c
                }()
            },
            7429: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "v4", {
                    enumerable: !0,
                    get: function() {
                        return n.default
                    }
                });
                i(r(3990)), i(r(8237));
                var n = i(r(5355));
                i(r(3764)), i(r(6314)), i(r(8464)), i(r(6435)), i(r(4008)), i(r(8222));

                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
            },
            4163: (t, e) => {
                "use strict";

                function r(t) {
                    return 14 + (t + 64 >>> 9 << 4) + 1
                }

                function n(t, e) {
                    const r = (65535 & t) + (65535 & e);
                    return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r
                }

                function i(t, e, r, i, o, s) {
                    return n((u = n(n(e, t), n(i, s))) << (a = o) | u >>> 32 - a, r);
                    var u, a
                }

                function o(t, e, r, n, o, s, u) {
                    return i(e & r | ~e & n, t, e, o, s, u)
                }

                function s(t, e, r, n, o, s, u) {
                    return i(e & n | r & ~n, t, e, o, s, u)
                }

                function u(t, e, r, n, o, s, u) {
                    return i(e ^ r ^ n, t, e, o, s, u)
                }

                function a(t, e, r, n, o, s, u) {
                    return i(r ^ (e | ~n), t, e, o, s, u)
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                e.default = function(t) {
                    if ("string" == typeof t) {
                        const e = unescape(encodeURIComponent(t));
                        t = new Uint8Array(e.length);
                        for (let r = 0; r < e.length; ++r) t[r] = e.charCodeAt(r)
                    }
                    return function(t) {
                        const e = [],
                            r = 32 * t.length,
                            n = "0123456789abcdef";
                        for (let i = 0; i < r; i += 8) {
                            const r = t[i >> 5] >>> i % 32 & 255,
                                o = parseInt(n.charAt(r >>> 4 & 15) + n.charAt(15 & r), 16);
                            e.push(o)
                        }
                        return e
                    }(function(t, e) {
                        t[e >> 5] |= 128 << e % 32, t[r(e) - 1] = e;
                        let i = 1732584193,
                            l = -271733879,
                            c = -1732584194,
                            f = 271733878;
                        for (let e = 0; e < t.length; e += 16) {
                            const r = i,
                                h = l,
                                d = c,
                                p = f;
                            i = o(i, l, c, f, t[e], 7, -680876936), f = o(f, i, l, c, t[e + 1], 12, -389564586), c = o(c, f, i, l, t[e + 2], 17, 606105819), l = o(l, c, f, i, t[e + 3], 22, -1044525330), i = o(i, l, c, f, t[e + 4], 7, -176418897), f = o(f, i, l, c, t[e + 5], 12, 1200080426), c = o(c, f, i, l, t[e + 6], 17, -1473231341), l = o(l, c, f, i, t[e + 7], 22, -45705983), i = o(i, l, c, f, t[e + 8], 7, 1770035416), f = o(f, i, l, c, t[e + 9], 12, -1958414417), c = o(c, f, i, l, t[e + 10], 17, -42063), l = o(l, c, f, i, t[e + 11], 22, -1990404162), i = o(i, l, c, f, t[e + 12], 7, 1804603682), f = o(f, i, l, c, t[e + 13], 12, -40341101), c = o(c, f, i, l, t[e + 14], 17, -1502002290), l = o(l, c, f, i, t[e + 15], 22, 1236535329), i = s(i, l, c, f, t[e + 1], 5, -165796510), f = s(f, i, l, c, t[e + 6], 9, -1069501632), c = s(c, f, i, l, t[e + 11], 14, 643717713), l = s(l, c, f, i, t[e], 20, -373897302), i = s(i, l, c, f, t[e + 5], 5, -701558691), f = s(f, i, l, c, t[e + 10], 9, 38016083), c = s(c, f, i, l, t[e + 15], 14, -660478335), l = s(l, c, f, i, t[e + 4], 20, -405537848), i = s(i, l, c, f, t[e + 9], 5, 568446438), f = s(f, i, l, c, t[e + 14], 9, -1019803690), c = s(c, f, i, l, t[e + 3], 14, -187363961), l = s(l, c, f, i, t[e + 8], 20, 1163531501), i = s(i, l, c, f, t[e + 13], 5, -1444681467), f = s(f, i, l, c, t[e + 2], 9, -51403784), c = s(c, f, i, l, t[e + 7], 14, 1735328473), l = s(l, c, f, i, t[e + 12], 20, -1926607734), i = u(i, l, c, f, t[e + 5], 4, -378558), f = u(f, i, l, c, t[e + 8], 11, -2022574463), c = u(c, f, i, l, t[e + 11], 16, 1839030562), l = u(l, c, f, i, t[e + 14], 23, -35309556), i = u(i, l, c, f, t[e + 1], 4, -1530992060), f = u(f, i, l, c, t[e + 4], 11, 1272893353), c = u(c, f, i, l, t[e + 7], 16, -155497632), l = u(l, c, f, i, t[e + 10], 23, -1094730640), i = u(i, l, c, f, t[e + 13], 4, 681279174), f = u(f, i, l, c, t[e], 11, -358537222), c = u(c, f, i, l, t[e + 3], 16, -722521979), l = u(l, c, f, i, t[e + 6], 23, 76029189), i = u(i, l, c, f, t[e + 9], 4, -640364487), f = u(f, i, l, c, t[e + 12], 11, -421815835), c = u(c, f, i, l, t[e + 15], 16, 530742520), l = u(l, c, f, i, t[e + 2], 23, -995338651), i = a(i, l, c, f, t[e], 6, -198630844), f = a(f, i, l, c, t[e + 7], 10, 1126891415), c = a(c, f, i, l, t[e + 14], 15, -1416354905), l = a(l, c, f, i, t[e + 5], 21, -57434055), i = a(i, l, c, f, t[e + 12], 6, 1700485571), f = a(f, i, l, c, t[e + 3], 10, -1894986606), c = a(c, f, i, l, t[e + 10], 15, -1051523), l = a(l, c, f, i, t[e + 1], 21, -2054922799), i = a(i, l, c, f, t[e + 8], 6, 1873313359), f = a(f, i, l, c, t[e + 15], 10, -30611744), c = a(c, f, i, l, t[e + 6], 15, -1560198380), l = a(l, c, f, i, t[e + 13], 21, 1309151649), i = a(i, l, c, f, t[e + 4], 6, -145523070), f = a(f, i, l, c, t[e + 11], 10, -1120210379), c = a(c, f, i, l, t[e + 2], 15, 718787259), l = a(l, c, f, i, t[e + 9], 21, -343485551), i = n(i, r), l = n(l, h), c = n(c, d), f = n(f, p)
                        }
                        return [i, l, c, f]
                    }(function(t) {
                        if (0 === t.length) return [];
                        const e = 8 * t.length,
                            n = new Uint32Array(r(e));
                        for (let r = 0; r < e; r += 8) n[r >> 5] |= (255 & t[r / 8]) << r % 32;
                        return n
                    }(t), 8 * t.length))
                }
            },
            4790: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var r = {
                    randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
                };
                e.default = r
            },
            6314: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0, e.default = "00000000-0000-0000-0000-000000000000"
            },
            8222: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var n, i = (n = r(6435)) && n.__esModule ? n : {
                    default: n
                };
                e.default = function(t) {
                    if (!(0, i.default)(t)) throw TypeError("Invalid UUID");
                    let e;
                    const r = new Uint8Array(16);
                    return r[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24, r[1] = e >>> 16 & 255, r[2] = e >>> 8 & 255, r[3] = 255 & e, r[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8, r[5] = 255 & e, r[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8, r[7] = 255 & e, r[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8, r[9] = 255 & e, r[10] = (e = parseInt(t.slice(24, 36), 16)) / 1099511627776 & 255, r[11] = e / 4294967296 & 255, r[12] = e >>> 24 & 255, r[13] = e >>> 16 & 255, r[14] = e >>> 8 & 255, r[15] = 255 & e, r
                }
            },
            58: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0, e.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
            },
            3319: (t, e) => {
                "use strict";
                let r;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = function() {
                    if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                    return r(n)
                };
                const n = new Uint8Array(16)
            },
            3757: (t, e) => {
                "use strict";

                function r(t, e, r, n) {
                    switch (t) {
                        case 0:
                            return e & r ^ ~e & n;
                        case 1:
                        case 3:
                            return e ^ r ^ n;
                        case 2:
                            return e & r ^ e & n ^ r & n
                    }
                }

                function n(t, e) {
                    return t << e | t >>> 32 - e
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                e.default = function(t) {
                    const e = [1518500249, 1859775393, 2400959708, 3395469782],
                        i = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                    if ("string" == typeof t) {
                        const e = unescape(encodeURIComponent(t));
                        t = [];
                        for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r))
                    } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
                    t.push(128);
                    const o = t.length / 4 + 2,
                        s = Math.ceil(o / 16),
                        u = new Array(s);
                    for (let e = 0; e < s; ++e) {
                        const r = new Uint32Array(16);
                        for (let n = 0; n < 16; ++n) r[n] = t[64 * e + 4 * n] << 24 | t[64 * e + 4 * n + 1] << 16 | t[64 * e + 4 * n + 2] << 8 | t[64 * e + 4 * n + 3];
                        u[e] = r
                    }
                    u[s - 1][14] = 8 * (t.length - 1) / Math.pow(2, 32), u[s - 1][14] = Math.floor(u[s - 1][14]), u[s - 1][15] = 8 * (t.length - 1) & 4294967295;
                    for (let t = 0; t < s; ++t) {
                        const o = new Uint32Array(80);
                        for (let e = 0; e < 16; ++e) o[e] = u[t][e];
                        for (let t = 16; t < 80; ++t) o[t] = n(o[t - 3] ^ o[t - 8] ^ o[t - 14] ^ o[t - 16], 1);
                        let s = i[0],
                            a = i[1],
                            l = i[2],
                            c = i[3],
                            f = i[4];
                        for (let t = 0; t < 80; ++t) {
                            const i = Math.floor(t / 20),
                                u = n(s, 5) + r(i, a, l, c) + f + e[i] + o[t] >>> 0;
                            f = c, c = l, l = n(a, 30) >>> 0, a = s, s = u
                        }
                        i[0] = i[0] + s >>> 0, i[1] = i[1] + a >>> 0, i[2] = i[2] + l >>> 0, i[3] = i[3] + c >>> 0, i[4] = i[4] + f >>> 0
                    }
                    return [i[0] >> 24 & 255, i[0] >> 16 & 255, i[0] >> 8 & 255, 255 & i[0], i[1] >> 24 & 255, i[1] >> 16 & 255, i[1] >> 8 & 255, 255 & i[1], i[2] >> 24 & 255, i[2] >> 16 & 255, i[2] >> 8 & 255, 255 & i[2], i[3] >> 24 & 255, i[3] >> 16 & 255, i[3] >> 8 & 255, 255 & i[3], i[4] >> 24 & 255, i[4] >> 16 & 255, i[4] >> 8 & 255, 255 & i[4]]
                }
            },
            4008: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0, e.unsafeStringify = s;
                var n, i = (n = r(6435)) && n.__esModule ? n : {
                    default: n
                };
                const o = [];
                for (let t = 0; t < 256; ++t) o.push((t + 256).toString(16).slice(1));

                function s(t, e = 0) {
                    return o[t[e + 0]] + o[t[e + 1]] + o[t[e + 2]] + o[t[e + 3]] + "-" + o[t[e + 4]] + o[t[e + 5]] + "-" + o[t[e + 6]] + o[t[e + 7]] + "-" + o[t[e + 8]] + o[t[e + 9]] + "-" + o[t[e + 10]] + o[t[e + 11]] + o[t[e + 12]] + o[t[e + 13]] + o[t[e + 14]] + o[t[e + 15]]
                }
                e.default = function(t, e = 0) {
                    const r = s(t, e);
                    if (!(0, i.default)(r)) throw TypeError("Stringified UUID is invalid");
                    return r
                }
            },
            3990: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var n, i = (n = r(3319)) && n.__esModule ? n : {
                        default: n
                    },
                    o = r(4008);
                let s, u, a = 0,
                    l = 0;
                e.default = function(t, e, r) {
                    let n = e && r || 0;
                    const c = e || new Array(16);
                    let f = (t = t || {}).node || s,
                        h = void 0 !== t.clockseq ? t.clockseq : u;
                    if (null == f || null == h) {
                        const e = t.random || (t.rng || i.default)();
                        null == f && (f = s = [1 | e[0], e[1], e[2], e[3], e[4], e[5]]), null == h && (h = u = 16383 & (e[6] << 8 | e[7]))
                    }
                    let d = void 0 !== t.msecs ? t.msecs : Date.now(),
                        p = void 0 !== t.nsecs ? t.nsecs : l + 1;
                    const y = d - a + (p - l) / 1e4;
                    if (y < 0 && void 0 === t.clockseq && (h = h + 1 & 16383), (y < 0 || d > a) && void 0 === t.nsecs && (p = 0), p >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                    a = d, l = p, u = h, d += 122192928e5;
                    const v = (1e4 * (268435455 & d) + p) % 4294967296;
                    c[n++] = v >>> 24 & 255, c[n++] = v >>> 16 & 255, c[n++] = v >>> 8 & 255, c[n++] = 255 & v;
                    const _ = d / 4294967296 * 1e4 & 268435455;
                    c[n++] = _ >>> 8 & 255, c[n++] = 255 & _, c[n++] = _ >>> 24 & 15 | 16, c[n++] = _ >>> 16 & 255, c[n++] = h >>> 8 | 128, c[n++] = 255 & h;
                    for (let t = 0; t < 6; ++t) c[n + t] = f[t];
                    return e || (0, o.unsafeStringify)(c)
                }
            },
            8237: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var n = o(r(7925)),
                    i = o(r(4163));

                function o(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var s = (0, n.default)("v3", 48, i.default);
                e.default = s
            },
            7925: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.URL = e.DNS = void 0, e.default = function(t, e, r) {
                    function n(t, n, s, u) {
                        var a;
                        if ("string" == typeof t && (t = function(t) {
                                t = unescape(encodeURIComponent(t));
                                const e = [];
                                for (let r = 0; r < t.length; ++r) e.push(t.charCodeAt(r));
                                return e
                            }(t)), "string" == typeof n && (n = (0, o.default)(n)), 16 !== (null === (a = n) || void 0 === a ? void 0 : a.length)) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                        let l = new Uint8Array(16 + t.length);
                        if (l.set(n), l.set(t, n.length), l = r(l), l[6] = 15 & l[6] | e, l[8] = 63 & l[8] | 128, s) {
                            u = u || 0;
                            for (let t = 0; t < 16; ++t) s[u + t] = l[t];
                            return s
                        }
                        return (0, i.unsafeStringify)(l)
                    }
                    try {
                        n.name = t
                    } catch (t) {}
                    return n.DNS = s, n.URL = u, n
                };
                var n, i = r(4008),
                    o = (n = r(8222)) && n.__esModule ? n : {
                        default: n
                    };
                const s = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
                e.DNS = s;
                const u = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
                e.URL = u
            },
            5355: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var n = s(r(4790)),
                    i = s(r(3319)),
                    o = r(4008);

                function s(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                e.default = function(t, e, r) {
                    if (n.default.randomUUID && !e && !t) return n.default.randomUUID();
                    const s = (t = t || {}).random || (t.rng || i.default)();
                    if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, e) {
                        r = r || 0;
                        for (let t = 0; t < 16; ++t) e[r + t] = s[t];
                        return e
                    }
                    return (0, o.unsafeStringify)(s)
                }
            },
            3764: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var n = o(r(7925)),
                    i = o(r(3757));

                function o(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var s = (0, n.default)("v5", 80, i.default);
                e.default = s
            },
            6435: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var n, i = (n = r(58)) && n.__esModule ? n : {
                    default: n
                };
                e.default = function(t) {
                    return "string" == typeof t && i.default.test(t)
                }
            },
            8464: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var n, i = (n = r(6435)) && n.__esModule ? n : {
                    default: n
                };
                e.default = function(t) {
                    if (!(0, i.default)(t)) throw TypeError("Invalid UUID");
                    return parseInt(t.slice(14, 15), 16)
                }
            },
            3897: t => {
                t.exports = function(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                    return n
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            3405: (t, e, r) => {
                var n = r(3897);
                t.exports = function(t) {
                    if (Array.isArray(t)) return n(t)
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            6690: t => {
                t.exports = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            9728: (t, e, r) => {
                var n = r(4062);

                function i(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, n(i.key), i)
                    }
                }
                t.exports = function(t, e, r) {
                    return e && i(t.prototype, e), r && i(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), t
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            8416: (t, e, r) => {
                var n = r(4062);
                t.exports = function(t, e, r) {
                    return (e = n(e)) in t ? Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = r, t
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            434: t => {
                function e() {
                    return t.exports = e = Object.assign ? Object.assign.bind() : function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = arguments[e];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                        }
                        return t
                    }, t.exports.__esModule = !0, t.exports.default = t.exports, e.apply(this, arguments)
                }
                t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            4836: t => {
                t.exports = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            9498: t => {
                t.exports = function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            2281: t => {
                t.exports = function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            861: (t, e, r) => {
                var n = r(3405),
                    i = r(9498),
                    o = r(6116),
                    s = r(2281);
                t.exports = function(t) {
                    return n(t) || i(t) || o(t) || s()
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            5036: (t, e, r) => {
                var n = r(8698).default;
                t.exports = function(t, e) {
                    if ("object" !== n(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var i = r.call(t, e || "default");
                        if ("object" !== n(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            4062: (t, e, r) => {
                var n = r(8698).default,
                    i = r(5036);
                t.exports = function(t) {
                    var e = i(t, "string");
                    return "symbol" === n(e) ? e : String(e)
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            8698: t => {
                function e(r) {
                    return t.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r)
                }
                t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            6116: (t, e, r) => {
                var n = r(3897);
                t.exports = function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return n(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, e) : void 0
                    }
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            }
        },
        e = {};

    function r(n) {
        var i = e[n];
        if (void 0 !== i) return i.exports;
        var o = e[n] = {
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r), o.exports
    }(() => {
        "use strict";
        var t, e, n, i, o = r(4836),
            s = o(r(3018)),
            u = o(r(9300)),
            a = (0, r(2285).setWritekey)(),
            l = (null === (t = window) || void 0 === t || null === (t = t.GlobalConfiguration) || void 0 === t ? void 0 : t.options) || {
                cookie: {
                    key: "ajs_user_id"
                },
                localStorage: {
                    key: "ajs_user_traits"
                },
                anonKey: "ajs_anonymous_id"
            },
            c = {
                writeKey: a || void 0,
                apiHost: (null === (e = window) || void 0 === e || null === (e = e.GlobalConfiguration) || void 0 === e ? void 0 : e.apiHost) || "https://segmentreplacement.dev.ocsddna.net/record",
                jwt: null === (n = window) || void 0 === n || null === (n = n.GlobalConfiguration) || void 0 === n ? void 0 : n.jwt,
                jwt_header: null === (i = window) || void 0 === i || null === (i = i.GlobalConfiguration) || void 0 === i ? void 0 : i.jwt_header
            };
        window.ddna_library = new s.default(c, new u.default(l))
    })(), window["ddna-library"] = {}
})();
//# sourceMappingURL=ddna-analytics.js.map?v=fb15928682cac25c322f