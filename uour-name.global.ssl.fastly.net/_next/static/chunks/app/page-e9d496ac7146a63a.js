(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8974], {
        178: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = (0, s(4531).A)("settings", [
                ["path", {
                    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
                    key: "1qme2f"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3",
                    key: "1v7zrd"
                }]
            ])
        },
        369: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = (0, s(4531).A)("x", [
                ["path", {
                    d: "M18 6 6 18",
                    key: "1bl5f8"
                }],
                ["path", {
                    d: "m6 6 12 12",
                    key: "d8bk6v"
                }]
            ])
        },
        478: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => n
            });
            var a = s(5351),
                l = s(2063),
                r = s(575),
                i = s(3558);

            function n() {
                let [e, t] = (0, r.useState)([]), [s, n] = (0, r.useState)([]), [c, o] = (0, r.useState)(!0), d = e => {
                    n(e)
                };
                return ((0, r.useEffect)(() => {
                    (async () => {
                        let e = await fetch("/api/random/a/"),
                            s = await e.json();
                        t(s), d(s), o(!1)
                    })()
                }, []), c) ? (0, a.jsx)(r.Suspense, {
                    fallback: (0, a.jsx)(i.A, {}),
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-row gap-5 mt-5 no-scrollbar",
                        id: "suspence-wrapper",
                        children: [(0, a.jsx)(i.A, {}), (0, a.jsx)(i.A, {}), (0, a.jsx)(i.A, {}), (0, a.jsx)(i.A, {}), (0, a.jsx)(i.A, {})]
                    })
                }) : (0, a.jsx)("div", {
                    className: "flex flex-row gap-5 mt-5 no-scrollbar",
                    id: "g",
                    children: s.map(e => (0, a.jsx)(l.A, {
                        href: e.href,
                        id: e.id,
                        image: e.image,
                        title: e.title,
                        desc: e.makers,
                        type: "browse"
                    }, e.name))
                })
            }
        },
        649: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = (0, s(4531).A)("shapes", [
                ["path", {
                    d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",
                    key: "1bo67w"
                }],
                ["rect", {
                    x: "3",
                    y: "14",
                    width: "7",
                    height: "7",
                    rx: "1",
                    key: "1bkyp8"
                }],
                ["circle", {
                    cx: "17.5",
                    cy: "17.5",
                    r: "3.5",
                    key: "w3z12y"
                }]
            ])
        },
        833: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = (0, s(4531).A)("circle-user", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["circle", {
                    cx: "12",
                    cy: "10",
                    r: "3",
                    key: "ilqhr7"
                }],
                ["path", {
                    d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",
                    key: "154egf"
                }]
            ])
        },
        1412: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = (0, s(4531).A)("bot", [
                ["path", {
                    d: "M12 8V4H8",
                    key: "hb8ula"
                }],
                ["rect", {
                    width: "16",
                    height: "12",
                    x: "4",
                    y: "8",
                    rx: "2",
                    key: "enze0r"
                }],
                ["path", {
                    d: "M2 14h2",
                    key: "vft8re"
                }],
                ["path", {
                    d: "M20 14h2",
                    key: "4cs60a"
                }],
                ["path", {
                    d: "M15 13v2",
                    key: "1xurst"
                }],
                ["path", {
                    d: "M9 13v2",
                    key: "rq6x2g"
                }]
            ])
        },
        2063: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            var a = s(5351),
                l = s(4603),
                r = s(5104);

            function i(e) {
                let t = (0, r.useRouter)();
                return (0, a.jsx)("div", {
                    className: "w-full sm:w-[48%] md:w-[18%] bg-[#4E71FF]/20 hover:bg-gray-300/20 hover:transform hover:-translate-y-2 transition duration-150 ease-in-out rounded-2xl p-4 cursor-pointer animate-[loadIn_.7s] border border-gray-700",
                    onClick: () => {
                        if ("browse" === e.type) return t.push("/browser/?callback=" + btoa(e.href));
                        localStorage.setItem("g", e.href), t.push("/p-mode?callback=A8jd2&ref=home")
                    },
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col gap-4 w-full z-200 relative",
                        children: [(0, a.jsx)("div", {
                            className: "relative w-full h-[150px]",
                            children: (0, a.jsx)(l.default, {
                                src: e.image,
                                fill: !0,
                                alt: e.title,
                                className: "rounded-2xl object-cover"
                            })
                        }), (0, a.jsx)("h1", {
                            className: "text-lg font-bold truncate",
                            children: e.title
                        }), (0, a.jsx)("p", {
                            className: "text-gray-400 text-sm line-clamp-3",
                            children: e.desc
                        })]
                    })
                })
            }
        },
        2703: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => o
            });
            var a = s(5351),
                l = s(833);
            let r = (0, s(4531).A)("shield-user", [
                ["path", {
                    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                    key: "oel41y"
                }],
                ["path", {
                    d: "M6.376 18.91a6 6 0 0 1 11.249.003",
                    key: "hnjrf2"
                }],
                ["circle", {
                    cx: "12",
                    cy: "11",
                    r: "4",
                    key: "1gt34v"
                }]
            ]);
            var i = s(575),
                n = s(4603),
                c = s(4802);

            function o() {
                let [e, t] = (0, i.useState)(null), [s, o] = (0, i.useState)("profile");
                return (0, i.useEffect)(() => {
                    let e = localStorage.getItem("_ghost.session");
                    if (e) {
                        let s = JSON.parse(e || "");
                        if (!s) return;
                        "/cdn-images/users/default.png" === s.img_src && (s.img_src = "/cdn-images/users/default.svg"), t(s)
                    }
                }, []), (0, a.jsxs)("div", {
                    style: {
                        display: "none"
                    },
                    className: "flex flex-row border border-zinc-800 w-fit p-5 h-fit bg-black animate-[grow_.7s_ease-in-out] z-[1000] rounded-lg",
                    id: "user-settings",
                    children: [(0, a.jsxs)("div", {
                        className: "flex flex-col h-[400px] border-r border-zinc-700 p-3 gap-5 bg-[#060C0C]",
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, a.jsx)("h1", {
                                className: "text-2xl font-bold",
                                children: "Account"
                            }), (0, a.jsx)("p", {
                                className: "text-md",
                                children: "Manage your account info."
                            })]
                        }), (0, a.jsxs)("button", {
                            className: "rounded-lg cursor-pointer p-3 hover:bg-zinc-700 flex flex-row gap-3 transition delay-100 ease-in-out ".concat("profile" === s ? "bg-[#e35252]" : ""),
                            onClick: () => o("profile"),
                            children: [(0, a.jsx)(l.A, {}), "Profile"]
                        }), (0, a.jsxs)("button", {
                            className: "rounded-lg cursor-pointer p-3 hover:bg-zinc-700 flex flex-row gap-3 transition delay-100 ease-in-out ".concat("security" === s ? "bg-[#e35252]" : ""),
                            onClick: () => o("security"),
                            children: [(0, a.jsx)(r, {}), "Security"]
                        })]
                    }), "profile" === s ? (0, a.jsxs)("div", {
                        className: "flex flex-col h-[400px] p-3 bg-black gap-2",
                        id: "user-innerContent",
                        children: [(0, a.jsx)("h2", {
                            className: "text-lg",
                            children: "Profile Details"
                        }), (0, a.jsx)("div", {
                            className: "w-full h-[1px] bg-zinc-800"
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-row gap-3 items-center",
                            children: [(0, a.jsx)("p", {
                                className: "ml-auto",
                                children: "Profile"
                            }), (0, a.jsxs)("div", {
                                id: "user-innerProfile",
                                className: "flex flex-row gap-3",
                                children: [e ? (0, a.jsx)(n.default, {
                                    src: e.img_src || "/cdn-images/users/default.svg",
                                    height: 24,
                                    width: 24,
                                    alt: "profile-pic"
                                }) : (0, a.jsx)(a.Fragment, {}), (0, a.jsx)("p", {
                                    children: null == e ? void 0 : e.username
                                }), (0, a.jsx)("button", {
                                    className: "bg-transparent text-zinc-500 cursor-pointer transition delay-100 ease-in-out hover:text-zinc-400",
                                    onClick: () => {
                                        let e = document.getElementById("user-settings"),
                                            t = document.getElementById("pfp-c");
                                        e && (e.classList.remove("animate-[grow_.7s_ease-in-out]"), e.classList.add("animate-[shrink]_.4s_ease-in-out"), setTimeout(() => {
                                            e.style.display = "none", t && (t.style.display = "flex")
                                        }, 400))
                                    },
                                    children: "Edit Profile"
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "w-full h-[1px] bg-zinc-800 mt-3"
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-row gap-3",
                            id: "user-innerEmail",
                            children: [(0, a.jsx)("p", {
                                className: "ml-auto",
                                children: "Email Address"
                            }), (0, a.jsx)("p", {
                                className: "text-gray-400",
                                children: null == e ? void 0 : e.email
                            })]
                        })]
                    }) : (0, a.jsxs)("div", {
                        className: "flex flex-col h-[400px] p-3 bg-black gap-10 items-center",
                        id: "user-innerSecurity",
                        children: [(0, a.jsx)("h2", {
                            children: "Security"
                        }), (0, a.jsxs)("button", {
                            className: "flex flex-row gap-5 active rounded-lg p-3 w-[150px] cursor-pointer",
                            children: [(0, a.jsx)(c.default, {}), " Log Out"]
                        })]
                    })]
                })
            }
        },
        3558: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => l
            });
            var a = s(5351);

            function l() {
                return (0, a.jsx)("div", {
                    children: (0, a.jsx)("div", {
                        className: "w-[30%] h-[20%] md:w-[20%] md:h-[10%] transition duration-150 ease-in-out rounded-2xl p-5 pb-8 cursor-pointer basis-[calc(15%-15px)] animate-pulse",
                        children: (0, a.jsxs)("div", {
                            className: "flex flex-col gap-5 h-full",
                            children: [(0, a.jsx)("div", {
                                className: "rounded-2xl h-[150px] w-[250px] bg-gray-300"
                            }), (0, a.jsx)("h1", {
                                className: "text-xl text-transparent font-bold truncate bg-gray-300 rounded-full w-full",
                                children: "Loading..."
                            }), (0, a.jsx)("p", {
                                className: "text-transparent text-sm line-clamp-3 bg-gray-300 rounded-full w-full",
                                children: "Loading..."
                            })]
                        })
                    })
                })
            }
        },
        4802: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => r
            });
            var a = s(5351),
                l = s(575);

            function r() {
                let [e, t] = (0, l.useState)(!1), s = async () => {
                    if (!0 === e) return;
                    let s = await fetch("/api/skynet/auth/logout"),
                        a = document.getElementById("logout-button");
                    a && (a.style.backgroundColor = "#27272a", a.style.cursor = "not-allowed"), t(!0), !s.ok && (t(!1), a && (a.style.backgroundColor = "#e35252", a.style.cursor = "pointer")), localStorage.removeItem("_ghost.session"), window.location.href = "/"
                };
                return (0, a.jsxs)("div", {
                    style: {
                        display: "none"
                    },
                    className: "flex flex-col gap-3 absolute top-0 left-0 z-1000 bg-black p-3",
                    id: "logout",
                    children: [(0, a.jsx)("h1", {
                        className: "text-lg ",
                        children: "Are you sure you want to log Out?"
                    }), (0, a.jsx)("p", {
                        children: "You will need to log back in to have your saved data!"
                    }), (0, a.jsxs)("div", {
                        className: "flex flex-row itemss-center justify-center gap-3",
                        children: [(0, a.jsx)("button", {
                            className: "bg-transparent text-[#e35252] mr-auto cursor-pointer",
                            onClick: () => {
                                let e = document.getElementById("logout"),
                                    t = document.getElementById("settings-wrapper"),
                                    s = document.getElementById("settings-bg");
                                t && s && e && (e.style.display = "none", t.style.display = "none", s.style.display = "none")
                            },
                            children: "Nevermind."
                        }), (0, a.jsx)("button", {
                            className: "bg-[#e35252] text-white rounded-lg p-3 cursor-pointer transition delay-100 ease-in-out",
                            onClick: s,
                            id: "logout-button",
                            children: "Log me out!"
                        })]
                    })]
                })
            }
        },
        5050: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = (0, s(4531).A)("log-out", [
                ["path", {
                    d: "m16 17 5-5-5-5",
                    key: "1bji2h"
                }],
                ["path", {
                    d: "M21 12H9",
                    key: "dn1m92"
                }],
                ["path", {
                    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
                    key: "1uf3rs"
                }]
            ])
        },
        5187: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => n
            });
            var a = s(5351),
                l = s(2063),
                r = s(575),
                i = s(3558);

            function n() {
                let [e, t] = (0, r.useState)([]), [s, n] = (0, r.useState)([]), [c, o] = (0, r.useState)(!0), d = e => {
                    n(e)
                };
                return ((0, r.useEffect)(() => {
                    (async () => {
                        let e = await fetch("/api/random/g/"),
                            s = await e.json();
                        t(s), d(s), o(!1)
                    })()
                }, []), c) ? (0, a.jsx)(r.Suspense, {
                    fallback: (0, a.jsx)(i.A, {}),
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-row gap-5 mt-5 no-scrollbar",
                        id: "suspence-wrapper",
                        children: [(0, a.jsx)(i.A, {}), (0, a.jsx)(i.A, {}), (0, a.jsx)(i.A, {}), (0, a.jsx)(i.A, {}), (0, a.jsx)(i.A, {})]
                    })
                }) : (0, a.jsx)("div", {
                    className: "flex flex-row gap-5 mt-5 no-scrollbar mb-5",
                    id: "g",
                    children: s.map(e => (0, a.jsx)(l.A, {
                        href: e.href,
                        id: e.id,
                        image: e.image,
                        title: e.title,
                        desc: e.makers
                    }, e.name))
                })
            }
        },
        6873: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = (0, s(4531).A)("gamepad-2", [
                ["line", {
                    x1: "6",
                    x2: "10",
                    y1: "11",
                    y2: "11",
                    key: "1gktln"
                }],
                ["line", {
                    x1: "8",
                    x2: "8",
                    y1: "9",
                    y2: "13",
                    key: "qnk9ow"
                }],
                ["line", {
                    x1: "15",
                    x2: "15.01",
                    y1: "12",
                    y2: "12",
                    key: "krot7o"
                }],
                ["line", {
                    x1: "18",
                    x2: "18.01",
                    y1: "10",
                    y2: "10",
                    key: "1lcuu1"
                }],
                ["path", {
                    d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
                    key: "mfqc10"
                }]
            ])
        },
        7541: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => d
            });
            var a = s(5351),
                l = s(4531);
            let r = (0, l.A)("arrow-right", [
                    ["path", {
                        d: "M5 12h14",
                        key: "1ays0h"
                    }],
                    ["path", {
                        d: "m12 5 7 7-7 7",
                        key: "xquz4c"
                    }]
                ]),
                i = (0, l.A)("square-pen", [
                    ["path", {
                        d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
                        key: "1m0v6g"
                    }],
                    ["path", {
                        d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
                        key: "ohrbg2"
                    }]
                ]),
                n = (0, l.A)("trash-2", [
                    ["path", {
                        d: "M3 6h18",
                        key: "d0wm0j"
                    }],
                    ["path", {
                        d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
                        key: "4alrt4"
                    }],
                    ["path", {
                        d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
                        key: "v07s0e"
                    }],
                    ["line", {
                        x1: "10",
                        x2: "10",
                        y1: "11",
                        y2: "17",
                        key: "1uufr5"
                    }],
                    ["line", {
                        x1: "14",
                        x2: "14",
                        y1: "11",
                        y2: "17",
                        key: "xtxkd"
                    }]
                ]);
            var c = s(4603),
                o = s(575);

            function d() {
                let [e, t] = (0, o.useState)(null), [s, l] = (0, o.useState)("change"), [d, u] = (0, o.useState)("");
                (0, o.useEffect)(() => {
                    let e = localStorage.getItem("_ghost.session");
                    if (e) {
                        let s = JSON.parse(e);
                        "/cdn-images/users/default.png" === s.img_src && (s.img_src = "/cdn-images/users/default.svg"), t(s)
                    }
                }, []);
                let f = async () => {
                    u("/cdn-images/users/default.svg"), l("profile-changing"), (await fetch("/api/skynet/auth/remove-pfp", {
                        method: "POST"
                    })).ok || setTimeout(() => {
                        l("change")
                    }, 2e3), setTimeout(() => {
                        let e = localStorage.getItem("_ghost.session");
                        if (e) {
                            let s = JSON.parse(e),
                                a = {
                                    username: s.username,
                                    email: s.email,
                                    id: s.id,
                                    img_src: "/cdn-images/users/default.svg",
                                    display_name: s.display_name ? s.display_name : null
                                };
                            s.img_src = "/cdn-images/users/default.svg", t(a), localStorage.setItem("_ghost.session", JSON.stringify(a)), l("change")
                        }
                    }, 2e3)
                };
                return (0, a.jsx)("div", {
                    style: {
                        display: "none"
                    },
                    className: "flex flex-col justify-center items-center border gap-5 border-zinc-800 w-fit p-5 h-fit bg-black animate-[grow_.4s_ease-in-out] z-[1000] rounded-lg",
                    id: "pfp-c",
                    children: "removepfp" === s ? (0, a.jsxs)("div", {
                        className: "flex flex-col justify-center items-center gap-5 ",
                        children: [(0, a.jsxs)("div", {
                            id: "pfp-container",
                            className: "flex flex-row gap-3 justify-center items-center",
                            children: [(0, a.jsx)(c.default, {
                                src: (null == e ? void 0 : e.img_src) ? e.img_src : "/cdn-images/users/default.svg",
                                alt: "Profile Picture",
                                width: 128,
                                height: 128,
                                className: "rounded-full"
                            }), (0, a.jsx)(r, {}), (0, a.jsx)(c.default, {
                                src: "/cdn-images/users/default.svg",
                                alt: "default-picture",
                                width: 128,
                                height: 128,
                                className: "rounded-full"
                            })]
                        }), (0, a.jsx)("h2", {
                            className: "text-lg font-bold",
                            children: "Remove profile picture?"
                        }), (0, a.jsx)("p", {
                            children: "Your profile picture will be reset to the default image"
                        }), (0, a.jsxs)("div", {
                            id: "button-container-remove",
                            className: "flex flex-row gap-0 w-full",
                            children: [(0, a.jsx)("button", {
                                className: "rounded-full bg-transparent hover:bg-[#26292d] transition delay-100 ease-in-out p-3 cursor-pointer text-[#c2e7ff]",
                                onClick: () => {
                                    l("change")
                                },
                                children: "Cancel"
                            }), (0, a.jsx)("button", {
                                className: "rounded-full bg-[#10344c] hover:bg-[#0f5682] transition delay-100 ease-in-out p-3 cursor-pointer text-[#c2e7ff] border border-zinc-800 ml-auto",
                                onClick: f,
                                children: "Remove"
                            })]
                        })]
                    }) : "profile-changing" === s ? (0, a.jsx)("div", {
                        id: "pfp-container",
                        className: "flex flex-row gap-3 justify-center items-center",
                        children: (0, a.jsxs)("div", {
                            className: "relative w-[120px] h-[120px]",
                            children: [(0, a.jsx)(c.default, {
                                src: d,
                                alt: "default-picture",
                                width: 128,
                                height: 128,
                                className: "rounded-full object-cover block"
                            }), (0, a.jsxs)("svg", {
                                className: "absolute inset-0 h-[100%] w-[100%] overflow-visible ",
                                viewBox: "0 0 50 50",
                                "aria-hidden": "true",
                                children: [(0, a.jsx)("defs", {
                                    children: (0, a.jsxs)("linearGradient", {
                                        id: "ring-gradient",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "0%",
                                        children: [(0, a.jsx)("stop", {
                                            offset: "0%",
                                            "stop-color": "#ff5959ff"
                                        }), (0, a.jsx)("stop", {
                                            offset: "25%",
                                            "stop-color": "#e65e5eff"
                                        }), (0, a.jsx)("stop", {
                                            offset: "50%",
                                            "stop-color": "#d06363ff"
                                        }), (0, a.jsx)("stop", {
                                            offset: "75%",
                                            "stop-color": "#b14b4bff"
                                        }), (0, a.jsx)("stop", {
                                            offset: "100%",
                                            "stop-color": "#9b4242ff"
                                        })]
                                    })
                                }), (0, a.jsxs)("circle", {
                                    cx: "25",
                                    cy: "25",
                                    r: "22",
                                    fill: "none",
                                    stroke: "url(#ring-gradient)",
                                    "stroke-width": "4",
                                    "stroke-linecap": "round",
                                    "stroke-dasharray": "80 125",
                                    children: [(0, a.jsx)("animateTransform", {
                                        attributeName: "transform",
                                        type: "rotate",
                                        from: "0 25 25",
                                        to: "360 25 25",
                                        dur: "1.2s",
                                        repeatCount: "indefinite"
                                    }), (0, a.jsx)("animate", {
                                        attributeName: "stroke-dasharray",
                                        values: "10 195; 80 125; 10 195",
                                        dur: "1.2s",
                                        repeatCount: "indefinite"
                                    })]
                                })]
                            })]
                        })
                    }) : (0, a.jsxs)("div", {
                        className: "flex flex-col justify-center items-center gap-5",
                        children: [(0, a.jsx)(c.default, {
                            src: (null == e ? void 0 : e.img_src) ? e.img_src : "/cdn-images/users/default.svg",
                            alt: "Profile Picture",
                            width: 128,
                            height: 128,
                            className: "rounded-full"
                        }), (0, a.jsx)("h2", {
                            className: "text-lg font-bold",
                            children: "Profile Picture"
                        }), (0, a.jsxs)("div", {
                            className: "text-zinc-700",
                            children: [(0, a.jsx)("p", {
                                children: "A picture helps people recognize you and lets you know"
                            }), (0, a.jsx)("p", {
                                children: "when you're signed in to your account"
                            })]
                        }), (0, a.jsxs)("div", {
                            id: "button-container",
                            className: "flex flex-row gap-5",
                            children: [(0, a.jsxs)("label", {
                                className: "bg-[#10344c] hover:bg-[#0f5682] transition delay-100 ease-in-out rounded-full w-[150px] p-2 cursor-pointer text-[#c2e7ff] border border-zinc-800 flex flex-row gap-3 items-center justify-center",
                                children: [(0, a.jsx)(i, {
                                    className: "mr-2"
                                }), "Change", (0, a.jsx)("input", {
                                    type: "file",
                                    accept: ".png",
                                    className: "hidden",
                                    onChange: s => {
                                        var a;
                                        let r = null == (a = s.target.files) ? void 0 : a[0];
                                        if (r) {
                                            u(URL.createObjectURL(r)), l("profile-changing");
                                            let s = new FormData;
                                            s.append("image", r), fetch("/api/skynet/acc/changepfp", {
                                                method: "POST",
                                                body: s
                                            }).then(async s => {
                                                if (!s.ok) return void l("change");
                                                let a = await s.json();
                                                if (e) {
                                                    let s = { ...e,
                                                        img_src: a.img_url
                                                    };
                                                    localStorage.setItem("_ghost.session", JSON.stringify(s)), t(s)
                                                }
                                                setTimeout(() => {
                                                    l("change")
                                                }, 2e3)
                                            })
                                        }
                                    }
                                })]
                            }), (0, a.jsxs)("button", {
                                className: "justify-center items-center bg-[#10344c] hover:bg-[#0f5682] transition delay-100 ease-in-out rounded-full w-[150px] p-2 cursor-pointer text-[#c2e7ff] border border-zinc-800 flex flex-row gap-3",
                                onClick: () => {
                                    l("removepfp")
                                },
                                children: [(0, a.jsx)(n, {}), " Remove"]
                            })]
                        })]
                    })
                })
            }
        },
        7632: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = (0, s(4531).A)("menu", [
                ["path", {
                    d: "M4 12h16",
                    key: "1lakjw"
                }],
                ["path", {
                    d: "M4 18h16",
                    key: "19g7jn"
                }],
                ["path", {
                    d: "M4 6h16",
                    key: "1o0s65"
                }]
            ])
        },
        9312: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => i
            });
            var a = s(5351);
            let l = (0, s(4531).A)("rocket", [
                ["path", {
                    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
                    key: "m3kijz"
                }],
                ["path", {
                    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
                    key: "1fmvmk"
                }],
                ["path", {
                    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
                    key: "1f8sc4"
                }],
                ["path", {
                    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
                    key: "qeys4"
                }]
            ]);
            var r = s(2516);

            function i() {
                return (0, a.jsxs)("button", {
                    className: "rounded-lg text-white p-3 bg-[#d95657] font-bold text-xl sm:text-2xl flex flex-row gap-3 justify-center items-center cursor-pointer hover:translate-y-1 transition-all duration-200",
                    "data-change-this": !0,
                    onClick: r.h,
                    children: [(0, a.jsx)(l, {}), " ", (0, r.q)(15)]
                })
            }
        },
        9395: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 7541)), Promise.resolve().then(s.bind(s, 4802)), Promise.resolve().then(s.bind(s, 2703)), Promise.resolve().then(s.bind(s, 478)), Promise.resolve().then(s.bind(s, 9312)), Promise.resolve().then(s.bind(s, 5187)), Promise.resolve().then(s.bind(s, 9082)), Promise.resolve().then(s.bind(s, 4725)), Promise.resolve().then(s.t.bind(s, 4511, 23))
        },
        9968: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => a
            });
            let a = (0, s(4531).A)("globe", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
                    key: "13o1zl"
                }],
                ["path", {
                    d: "M2 12h20",
                    key: "9i4pu4"
                }]
            ])
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [1914, 6508, 8441, 5117, 7358], () => t(9395)), _N_E = e.O()
    }
]);