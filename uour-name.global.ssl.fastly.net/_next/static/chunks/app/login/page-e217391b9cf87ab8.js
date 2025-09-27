(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4520], {
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
        2075: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => d
            });
            var a = s(5351);

            function l() {
                let e = () => {
                        document.getElementById("email").value ? document.getElementById("continue").classList.add("active") : document.getElementById("continue").classList.remove("active")
                    },
                    t = async () => {
                        let e;
                        if (!document.getElementById("continue").classList.contains("active")) return;
                        let t = document.getElementById("email"),
                            s = document.getElementById("password"),
                            a = t.value,
                            l = s.value;
                        if (!l || !a) return;
                        e = a.includes("@") ? {
                            email: a,
                            password: l
                        } : {
                            username: a,
                            password: l
                        };
                        let i = await fetch("/api/skynet/auth/login", {
                                method: "POST",
                                body: JSON.stringify(e),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }),
                            r = await i.json();
                        if (!i.ok) return;
                        let n = {
                            id: r.id,
                            username: r.user.username,
                            img_url: r.user.img_url || "/cdn-images/users/default.png",
                            display_name: null,
                            email: r.user.email
                        };
                        localStorage.setItem("_ghost.session", JSON.stringify(n)), localStorage.removeItem("amount-left"), window.location.href = "/"
                    };
                return (0, a.jsx)("div", {
                    className: "min-h-screen flex items-center justify-center bg-black",
                    children: (0, a.jsxs)("div", {
                        className: "w-full max-w-md bg-black border border-zinc-800 rounded-2xl shadow-lg p-8 space-y-6",
                        children: [(0, a.jsxs)("div", {
                            className: "text-center",
                            children: [(0, a.jsx)("h2", {
                                className: "text-2xl font-bold text-white",
                                children: "Sign in to Ghost"
                            }), (0, a.jsx)("p", {
                                className: "mt-1 text-sm text-gray-500",
                                children: "Welcome back! Please sign in to continue"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-row justify-center items-center gap-3 mb-10",
                            children: [(0, a.jsxs)("button", {
                                disabled: !0,
                                className: "cursor-not-allowed w-[50%] flex items-center justify-center gap-2 rounded-lg border border-zinc-600 bg-black px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-[#27272a] transition delay-100 ease-in-out",
                                children: [(0, a.jsx)("img", {
                                    src: "/discord.svg",
                                    alt: "Discord",
                                    className: "w-5 h-5"
                                }), "Discord"]
                            }), (0, a.jsxs)("button", {
                                disabled: !0,
                                className: "cursor-not-allowed w-[50%] flex items-center justify-center gap-2 rounded-lg border border-zinc-600 bg-black px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-[#27272a] transition delay-100 ease-in-out",
                                children: [(0, a.jsx)("img", {
                                    src: "/google.svg",
                                    alt: "Google",
                                    className: "w-5 h-5"
                                }), "Google"]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex items-center mb-10",
                            children: [(0, a.jsx)("div", {
                                className: "flex-grow border-t border-gray-500"
                            }), (0, a.jsx)("span", {
                                className: "mx-3 text-xs text-gray-500",
                                children: "or"
                            }), (0, a.jsx)("div", {
                                className: "flex-grow border-t border-gray-500"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "space-y-1 mb-8",
                            children: [(0, a.jsx)("label", {
                                htmlFor: "email",
                                className: "block text-sm font-medium text-gray-500",
                                children: "Email Address / Username"
                            }), (0, a.jsx)("input", {
                                id: "email",
                                type: "text",
                                onKeyDown: e,
                                className: "block w-full rounded-lg border border-gray-300 text-white px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "space-y-1 mb-8",
                            children: [(0, a.jsx)("label", {
                                htmlFor: "password",
                                className: "block text-sm font-medium text-gray-500",
                                children: "Password"
                            }), (0, a.jsx)("input", {
                                id: "password",
                                type: "password",
                                onKeyDown: e,
                                className: "block w-full rounded-lg border border-gray-300 text-white px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                            })]
                        }), (0, a.jsx)("button", {
                            className: "w-full cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition delay-100 ease-in-out bg-[#404040]",
                            id: "continue",
                            onClick: t,
                            children: "Continue"
                        }), (0, a.jsxs)("div", {
                            className: "text-center text-sm text-gray-500",
                            children: ["Don't have an account?", " ", (0, a.jsx)("a", {
                                href: "/sign-up",
                                className: "text-[#e35252] hover:underline hover:text-[#ff665c] transition delay-100 ease-in-out",
                                children: "Sign up"
                            })]
                        }), (0, a.jsx)("p", {
                            className: "text-center text-xs text-gray-400",
                            children: "secured by ghost"
                        })]
                    })
                })
            }
            var i = s(4725),
                r = s(9082),
                n = s(575),
                c = s(2516);

            function d() {
                return (0, n.useEffect)(() => {
                    if (async function() {
                            let e = await fetch("/api/skynet/auth/check-domain");
                            (await e.json()).success || (window.location.href = "/")
                        }(), "loginForce" === new URLSearchParams(window.location.search).get("callback")) {
                        let e = document.getElementById("notice");
                        e && (e.style.display = "block")
                    }
                }, []), (0, a.jsxs)("div", {
                    className: "flex min-h-screen",
                    children: [(0, a.jsx)(r.default, {}), (0, a.jsxs)("div", {
                        className: "flex-1 flex flex-col",
                        children: [(0, a.jsx)(i.default, {}), (0, a.jsxs)("div", {
                            className: "flex flex-col justify-center items-center flex-1",
                            id: "content",
                            children: [(0, a.jsx)("div", {
                                className: "rounded-full w-fit h-fit p-3 bg-[#e35252] flex justify-center items-center fixed top-[10%]",
                                id: "notice",
                                style: {
                                    display: "none"
                                },
                                children: "You must be logged in to continue!!"
                            }), (0, a.jsx)("div", {
                                className: "flex flex-row gap-50",
                                children: (0, a.jsx)("h1", {
                                    className: "text-2xl font-bold mb-10",
                                    children: (0, c.q)(43)
                                })
                            })]
                        }), (0, a.jsx)(l, {})]
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
        8049: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 2075))
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
        e.O(0, [1914, 6508, 8441, 5117, 7358], () => t(8049)), _N_E = e.O()
    }
]);