(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7177], {
        384: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = (0, n(4531).A)("skip-back", [
                ["polygon", {
                    points: "19 20 9 12 19 4 19 20",
                    key: "o2sva"
                }],
                ["line", {
                    x1: "5",
                    x2: "5",
                    y1: "19",
                    y2: "5",
                    key: "1ocqjk"
                }]
            ])
        },
        1981: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "setAttributesFromProps", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = {
                    acceptCharset: "accept-charset",
                    className: "class",
                    htmlFor: "for",
                    httpEquiv: "http-equiv",
                    noModule: "noModule"
                },
                r = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"];

            function i(e) {
                return ["async", "defer", "noModule"].includes(e)
            }

            function a(e, t) {
                for (let [a, l] of Object.entries(t)) {
                    if (!t.hasOwnProperty(a) || r.includes(a) || void 0 === l) continue;
                    let s = n[a] || a.toLowerCase();
                    "SCRIPT" === e.tagName && i(s) ? e[s] = !!l : e.setAttribute(s, String(l)), (!1 === l || "SCRIPT" === e.tagName && i(s) && (!l || "false" === l)) && (e.setAttribute(s, ""), e.removeAttribute(s))
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        2920: (e, t, n) => {
            "use strict";
            let r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GoogleAnalytics = function(e) {
                let {
                    gaId: t,
                    debugMode: n,
                    dataLayerName: s = "dataLayer",
                    nonce: c
                } = e;
                return void 0 === r && (r = s), (0, a.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-ga"
                        }
                    })
                }, []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(l.default, {
                        id: "_next-ga-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n          window['".concat(s, "'] = window['").concat(s, "'] || [];\n          function gtag(){window['").concat(s, "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t, "' ").concat(n ? ",{ 'debug_mode': true }" : "", ");")
                        },
                        nonce: c
                    }), (0, i.jsx)(l.default, {
                        id: "_next-ga",
                        src: "https://www.googletagmanager.com/gtag/js?id=".concat(t),
                        nonce: c
                    })]
                })
            }, t.sendGAEvent = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (void 0 === r) return void console.warn("@next/third-parties: GA has not been initialized");
                window[r] ? window[r].push(arguments) : console.warn("@next/third-parties: GA dataLayer ".concat(r, " does not exist"))
            };
            let i = n(5351),
                a = n(575),
                l = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(7005))
        },
        3075: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 5999)), Promise.resolve().then(n.t.bind(n, 9774, 23)), Promise.resolve().then(n.bind(n, 2920)), Promise.resolve().then(n.bind(n, 4446)), Promise.resolve().then(n.bind(n, 6257)), Promise.resolve().then(n.bind(n, 2376)), Promise.resolve().then(n.t.bind(n, 3358, 23)), Promise.resolve().then(n.t.bind(n, 6575, 23))
        },
        3099: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = (0, n(4531).A)("pause", [
                ["rect", {
                    x: "14",
                    y: "4",
                    width: "4",
                    height: "16",
                    rx: "1",
                    key: "zuxfzm"
                }],
                ["rect", {
                    x: "6",
                    y: "4",
                    width: "4",
                    height: "16",
                    rx: "1",
                    key: "1okwgv"
                }]
            ])
        },
        3358: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                default: function() {
                    return x
                },
                handleClientScriptLoad: function() {
                    return y
                },
                initScriptLoader: function() {
                    return h
                }
            });
            let r = n(2916),
                i = n(5953),
                a = n(5351),
                l = r._(n(8078)),
                s = i._(n(575)),
                c = n(6381),
                o = n(1981),
                d = n(6625),
                u = new Map,
                f = new Set,
                p = e => {
                    if (l.default.preinit) return void e.forEach(e => {
                        l.default.preinit(e, {
                            as: "style"
                        })
                    }); {
                        let t = document.head;
                        e.forEach(e => {
                            let n = document.createElement("link");
                            n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n)
                        })
                    }
                },
                m = e => {
                    let {
                        src: t,
                        id: n,
                        onLoad: r = () => {},
                        onReady: i = null,
                        dangerouslySetInnerHTML: a,
                        children: l = "",
                        strategy: s = "afterInteractive",
                        onError: c,
                        stylesheets: d
                    } = e, m = n || t;
                    if (m && f.has(m)) return;
                    if (u.has(t)) {
                        f.add(m), u.get(t).then(r, c);
                        return
                    }
                    let y = () => {
                            i && i(), f.add(m)
                        },
                        h = document.createElement("script"),
                        g = new Promise((e, t) => {
                            h.addEventListener("load", function(t) {
                                e(), r && r.call(this, t), y()
                            }), h.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            c && c(e)
                        });
                    a ? (h.innerHTML = a.__html || "", y()) : l ? (h.textContent = "string" == typeof l ? l : Array.isArray(l) ? l.join("") : "", y()) : t && (h.src = t, u.set(t, g)), (0, o.setAttributesFromProps)(h, e), "worker" === s && h.setAttribute("type", "text/partytown"), h.setAttribute("data-nscript", s), d && p(d), document.body.appendChild(h)
                };

            function y(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, d.requestIdleCallback)(() => m(e))
                }) : m(e)
            }

            function h(e) {
                e.forEach(y), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    f.add(t)
                })
            }

            function g(e) {
                let {
                    id: t,
                    src: n = "",
                    onLoad: r = () => {},
                    onReady: i = null,
                    strategy: o = "afterInteractive",
                    onError: u,
                    stylesheets: p,
                    ...y
                } = e, {
                    updateScripts: h,
                    scripts: g,
                    getIsSsr: x,
                    appDir: w,
                    nonce: b
                } = (0, s.useContext)(c.HeadManagerContext), v = (0, s.useRef)(!1);
                (0, s.useEffect)(() => {
                    let e = t || n;
                    v.current || (i && e && f.has(e) && i(), v.current = !0)
                }, [i, t, n]);
                let _ = (0, s.useRef)(!1);
                if ((0, s.useEffect)(() => {
                        if (!_.current) {
                            if ("afterInteractive" === o) m(e);
                            else "lazyOnload" === o && ("complete" === document.readyState ? (0, d.requestIdleCallback)(() => m(e)) : window.addEventListener("load", () => {
                                (0, d.requestIdleCallback)(() => m(e))
                            }));
                            _.current = !0
                        }
                    }, [e, o]), ("beforeInteractive" === o || "worker" === o) && (h ? (g[o] = (g[o] || []).concat([{
                        id: t,
                        src: n,
                        onLoad: r,
                        onReady: i,
                        onError: u,
                        ...y
                    }]), h(g)) : x && x() ? f.add(t || n) : x && !x() && m(e)), w) {
                    if (p && p.forEach(e => {
                            l.default.preinit(e, {
                                as: "style"
                            })
                        }), "beforeInteractive" === o)
                        if (!n) return y.dangerouslySetInnerHTML && (y.children = y.dangerouslySetInnerHTML.__html, delete y.dangerouslySetInnerHTML), (0, a.jsx)("script", {
                            nonce: b,
                            dangerouslySetInnerHTML: {
                                __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...y,
                                    id: t
                                }]) + ")"
                            }
                        });
                        else return l.default.preload(n, y.integrity ? {
                            as: "script",
                            integrity: y.integrity,
                            nonce: b,
                            crossOrigin: y.crossOrigin
                        } : {
                            as: "script",
                            nonce: b,
                            crossOrigin: y.crossOrigin
                        }), (0, a.jsx)("script", {
                            nonce: b,
                            dangerouslySetInnerHTML: {
                                __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n, { ...y,
                                    id: t
                                }]) + ")"
                            }
                        });
                    "afterInteractive" === o && n && l.default.preload(n, y.integrity ? {
                        as: "script",
                        integrity: y.integrity,
                        nonce: b,
                        crossOrigin: y.crossOrigin
                    } : {
                        as: "script",
                        nonce: b,
                        crossOrigin: y.crossOrigin
                    })
                }
                return null
            }
            Object.defineProperty(g, "__nextScript", {
                value: !0
            });
            let x = g;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        4304: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = (0, n(4531).A)("skip-forward", [
                ["polygon", {
                    points: "5 4 15 12 5 20 5 4",
                    key: "16p6eg"
                }],
                ["line", {
                    x1: "19",
                    x2: "19",
                    y1: "5",
                    y2: "19",
                    key: "futhcm"
                }]
            ])
        },
        4446: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGTMEvent = void 0, t.GoogleTagManager = function(e) {
                let {
                    gtmId: t,
                    gtmScriptUrl: n = "https://www.googletagmanager.com/gtm.js",
                    dataLayerName: s = "dataLayer",
                    auth: c,
                    preview: o,
                    dataLayer: d,
                    nonce: u
                } = e;
                l = s;
                let f = "dataLayer" !== s ? "&l=".concat(s) : "";
                return (0, i.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-gtm"
                        }
                    })
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(a.default, {
                        id: "_next-gtm-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(d ? "w[l].push(".concat(JSON.stringify(d), ")") : "", "\n      })(window,'").concat(s, "');")
                        },
                        nonce: u
                    }), (0, r.jsx)(a.default, {
                        id: "_next-gtm",
                        "data-ntpc": "GTM",
                        src: "".concat(n, "?id=").concat(t).concat(f).concat(c ? "&gtm_auth=".concat(c) : "").concat(o ? "&gtm_preview=".concat(o, "&gtm_cookies_win=x") : ""),
                        nonce: u
                    })]
                })
            };
            let r = n(5351),
                i = n(575),
                a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(7005)),
                l = "dataLayer";
            t.sendGTMEvent = (e, t) => {
                let n = t || l;
                window[n] = window[n] || [], window[n].push(e)
            }
        },
        5874: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = (0, n(4531).A)("mic-vocal", [
                ["path", {
                    d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",
                    key: "80a601"
                }],
                ["path", {
                    d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",
                    key: "j0ngtp"
                }],
                ["circle", {
                    cx: "16",
                    cy: "7",
                    r: "5",
                    key: "d08jfb"
                }]
            ])
        },
        5999: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => m
            });
            var r = n(5351),
                i = n(4603),
                a = n(8254);
            let l = (0, n(4531).A)("ellipsis", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "1",
                    key: "41hilf"
                }],
                ["circle", {
                    cx: "19",
                    cy: "12",
                    r: "1",
                    key: "1wjl8i"
                }],
                ["circle", {
                    cx: "5",
                    cy: "12",
                    r: "1",
                    key: "1pcz8c"
                }]
            ]);
            var s = n(384),
                c = n(3099),
                o = n(485),
                d = n(4304),
                u = n(5874),
                f = n(8905),
                p = n(575);

            function m() {
                let [e, t] = (0, p.useState)({
                    x: 0,
                    y: 0
                }), [n, m] = (0, p.useState)(!1), [y, h] = (0, p.useState)(!1), g = (0, p.useRef)({
                    x: 0,
                    y: 0
                }), x = (0, p.useRef)(null), w = () => {
                    h(!1)
                };
                return (0, p.useEffect)(() => {
                    if (localStorage.getItem("currentSong")) {
                        let e = JSON.parse(localStorage.getItem("currentSong") || "");
                        if (!e) return;
                        let t = document.getElementById("minplayer"),
                            n = document.getElementById("miniplayer-image"),
                            r = document.getElementById("miniplayer-time"),
                            i = document.getElementById("miniplayer-time-end");
                        t && n && r && i && (n.src = "/api/ytimages?id=".concat(e.videoId), r.innerText = e.currentTime || "0:00", i.innerText = e.endTime || "0:00", t.style.display = "flex", m(!0))
                    }
                }, []), (0, r.jsxs)("div", {
                    className: "rounded-[8px] w-fit p-3 absolute z-1000 bg-[#1f1f1f] border border-[#2f2f2f] flex flex-col max-w-[350px] max-h-[150px]",
                    ref: x,
                    style: {
                        left: e.x,
                        top: e.y,
                        display: "none"
                    },
                    id: "miniplayer",
                    onMouseDown: t => {
                        h(!0), g.current = {
                            x: t.clientX - e.x,
                            y: t.clientY - e.y
                        }
                    },
                    onMouseMove: e => {
                        y && t({
                            x: e.clientX - g.current.x,
                            y: e.clientY - g.current.y
                        })
                    },
                    onMouseUp: w,
                    onMouseLeave: w,
                    children: [(0, r.jsxs)("div", {
                        className: "flex flex-row gap-5 items-center mb-5",
                        children: [(0, r.jsx)(i.default, {
                            className: "rounded-lg",
                            src: "/api/ytimages?id=Bmg_TEvEX00",
                            height: 64,
                            width: 64,
                            id: "miniplayer-image",
                            alt: "miniplayer-image"
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col gap-1 justify-center items-start ml-[15%]",
                            children: [(0, r.jsx)("h1", {
                                className: "font-bold text-md text-[#dddddd] self-center",
                                children: "HOPE"
                            }), (0, r.jsx)("p", {
                                className: "text-sm text-[#929292]",
                                children: "NF — HOPE"
                            })]
                        })]
                    }), (0, r.jsx)("div", {
                        className: "lyric-hidden",
                        id: "lyric-container"
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col justify-center items-center",
                        id: "controls",
                        children: [(0, r.jsxs)("div", {
                            className: "flex flex-row gap-5 justify-center items-center",
                            children: [(0, r.jsx)("p", {
                                id: "miniplayer-time",
                                className: "text-sm text-[#696969]",
                                children: "0:00"
                            }), (0, r.jsx)("div", {
                                className: "w-50 h-1 bg-[#454545] rounded-full",
                                children: (0, r.jsx)("div", {
                                    className: "h-full bg-white rounded-full",
                                    style: {
                                        width: "0px"
                                    },
                                    id: "miniplayer-width-bar"
                                })
                            }), (0, r.jsx)("p", {
                                id: "miniplayer-time-end",
                                className: "text-sm text-[#696969]",
                                children: "4:25"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-row gap-5 justify-center items-center w-full",
                            children: [(0, r.jsx)("button", {
                                className: "rounded-lg hover:bg-[#2c2c2c] transition delay-100 ease-in-out cursor-pointer p-1",
                                children: (0, r.jsx)(a.A, {
                                    color: "#7c7c7c",
                                    width: 20
                                })
                            }), (0, r.jsx)("button", {
                                className: "rounded-lg hover:bg-[#2c2c2c] transition delay-100 ease-in-out cursor-pointer p-1",
                                children: (0, r.jsx)(l, {
                                    color: "#7c7c7c",
                                    width: 20
                                })
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-row gap-4 justify-center items-center",
                                children: [(0, r.jsx)("button", {
                                    className: "rounded-lg hover:bg-[#2c2c2c] transition delay-100 ease-in-out cursor-pointer p-1",
                                    children: (0, r.jsx)(s.A, {
                                        fill: "white",
                                        width: 20
                                    })
                                }), n ? (0, r.jsx)("button", {
                                    className: "rounded-lg hover:bg-[#2c2c2c] transition delay-100 ease-in-out cursor-pointer p-1",
                                    onClick: () => m(!1),
                                    children: (0, r.jsx)(c.A, {
                                        fill: "white",
                                        width: 20
                                    })
                                }) : (0, r.jsx)("button", {
                                    className: "rounded-lg hover:bg-[#2c2c2c] transition delay-100 ease-in-out cursor-pointer p-1",
                                    onClick: () => m(!0),
                                    children: (0, r.jsx)(o.A, {
                                        fill: "white",
                                        width: 20
                                    })
                                }), (0, r.jsx)("button", {
                                    className: "rounded-lg hover:bg-[#2c2c2c] transition delay-100 ease-in-out cursor-pointer p-1",
                                    children: (0, r.jsx)(d.A, {
                                        fill: "white",
                                        width: 20
                                    })
                                })]
                            }), (0, r.jsx)("button", {
                                className: "rounded-lg hover:bg-[#2c2c2c] transition delay-100 ease-in-out cursor-pointer p-1",
                                children: (0, r.jsx)(u.A, {
                                    color: "#7c7c7c",
                                    width: 20
                                })
                            }), (0, r.jsx)("button", {
                                className: "rounded-lg hover:bg-[#2c2c2c] transition delay-100 ease-in-out cursor-pointer p-1",
                                children: (0, r.jsx)(f.A, {
                                    color: "#7c7c7c",
                                    width: 20
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        6257: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    html: t,
                    height: n = null,
                    width: a = null,
                    children: l,
                    dataNtpc: s = ""
                } = e;
                return (0, i.useEffect)(() => {
                    s && performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-".concat(s)
                        }
                    })
                }, [s]), (0, r.jsxs)(r.Fragment, {
                    children: [l, t ? (0, r.jsx)("div", {
                        style: {
                            height: null != n ? "".concat(n, "px") : "auto",
                            width: null != a ? "".concat(a, "px") : "auto"
                        },
                        "data-ntpc": s,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }) : null]
                })
            };
            let r = n(5351),
                i = n(575)
        },
        6575: e => {
            e.exports = {
                style: {
                    fontFamily: "'localFontc', 'localFontc Fallback'"
                },
                className: "__className_649f29"
            }
        },
        6625: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                cancelIdleCallback: function() {
                    return r
                },
                requestIdleCallback: function() {
                    return n
                }
            });
            let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
                    let t = Date.now();
                    return self.setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }, 1)
                },
                r = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        7005: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => i.a
            });
            var r = n(3358),
                i = n.n(r),
                a = {};
            for (let e in r) "default" !== e && (a[e] = () => r[e]);
            n.d(t, a)
        },
        8254: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = (0, n(4531).A)("volume-2", [
                ["path", {
                    d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
                    key: "uqj9uw"
                }],
                ["path", {
                    d: "M16 9a5 5 0 0 1 0 6",
                    key: "1q6k2b"
                }],
                ["path", {
                    d: "M19.364 18.364a9 9 0 0 0 0-12.728",
                    key: "ijwkga"
                }]
            ])
        },
        8905: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = (0, n(4531).A)("list-music", [
                ["path", {
                    d: "M21 15V6",
                    key: "h1cx4g"
                }],
                ["path", {
                    d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
                    key: "8saifv"
                }],
                ["path", {
                    d: "M12 12H3",
                    key: "18klou"
                }],
                ["path", {
                    d: "M16 6H3",
                    key: "1wxfjs"
                }],
                ["path", {
                    d: "M12 18H3",
                    key: "11ftsu"
                }]
            ])
        },
        9774: () => {}
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [9542, 1914, 8441, 5117, 7358], () => t(3075)), _N_E = e.O()
    }
]);