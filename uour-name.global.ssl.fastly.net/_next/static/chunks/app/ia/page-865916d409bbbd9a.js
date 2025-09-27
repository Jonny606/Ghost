(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5357], {
        3807: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => j
            });
            var l = n(5351),
                a = n(5384),
                i = n(1015),
                o = n(870),
                s = n(4027),
                r = n(2986);

            function c(e) {
                return (0, l.jsxs)("div", {
                    className: "flex flex-row gap-3 rounded-full p-3 text-white border-zinc-800 border hover:bg-zinc-700 transition delay-100 ease-in-out cursor-pointer",
                    onClick: () => {
                        let t = document.getElementById("main-textbox");
                        if (t) {
                            switch (e.text) {
                                case "Brainstorm":
                                    t.value = "Brainstorm ideas ";
                                    break;
                                case "Code":
                                    t.value = "Help me code ";
                                    break;
                                case "Get advice":
                                    t.value = "Give me advice on ";
                                    break;
                                case "Help me write":
                                    t.value = "Help me write ";
                                    break;
                                case "Summarize":
                                    t.value = "Summarize "
                            }
                            t.focus()
                        }
                    },
                    children: [e.icon, e.text]
                })
            }
            var d = n(9082),
                m = n(4725);
            n(8974);
            var u = n(525),
                f = n(4031),
                g = n(1682);
            async function p() {
                let e = crypto.randomUUID();
                return (await fetch("/api/completions/gettoken", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify({
                        uuid: e
                    })
                })).ok || localStorage.setItem("err", "This is a suspicious request, please login."), e
            }
            async function x(e) {
                return (await (0, u.V)().use(g.A).use(f.A).process(e)).toString()
            }
            new(n(6564)).PrismaClient, n(3818);
            var h = n(575),
                y = n(369),
                b = n(2516);

            function v() {
                let [e, t] = (0, h.useState)(20), [n, a] = (0, h.useState)(!1);
                (0, h.useEffect)(() => {
                    let e = localStorage.getItem("amount-left");
                    if (e) {
                        let n = Number(e);
                        n >= 20 && a(!0), t(20 - n)
                    }
                });
                let i = () => {
                    document.getElementById("limit-container").remove()
                };
                return !0 === n ? (0, l.jsxs)("div", {
                    className: "flex flex-col gap-3 rounded-2xl bg-black p-5 border border-gray-500 border-[.5px] ",
                    id: "limit-container",
                    children: [(0, l.jsxs)("div", {
                        className: "flex flex-row gap-3 justify-center items-center",
                        children: [(0, l.jsx)("h1", {
                            className: "text-lg",
                            children: (0, b.q)(27)
                        }), (0, l.jsx)("div", {
                            className: "self-end rounded-full hover:bg-gray-400 transition delay-300 ease-in-out p-2 cursor-pointer",
                            onClick: i,
                            children: (0, l.jsx)(y.A, {})
                        })]
                    }), (0, l.jsxs)("p", {
                        children: [(0, b.q)(28), " ", (0, l.jsx)("span", {
                            className: "font-bold",
                            children: (0, b.q)(29)
                        })]
                    })]
                }) : (0, l.jsxs)("div", {
                    className: "flex flex-col gap-3 rounded-2xl bg-black p-5 border border-gray-500 border-[.5px] ",
                    id: "limit-container",
                    children: [(0, l.jsxs)("div", {
                        className: "flex flex-row gap-3 justify-center items-center",
                        children: [(0, l.jsxs)("h1", {
                            className: "text-lg",
                            children: [(0, b.q)(30), " ", (0, l.jsx)("span", {
                                className: "font-bold text-lg",
                                id: "amount-left-num",
                                children: e || "20"
                            }), " ", (0, b.q)(31)]
                        }), (0, l.jsx)("div", {
                            className: "self-end rounded-full hover:bg-gray-400 transition delay-300 ease-in-out p-2 cursor-pointer",
                            onClick: i,
                            children: (0, l.jsx)(y.A, {})
                        })]
                    }), (0, l.jsxs)("p", {
                        children: [(0, b.q)(28), " ", (0, l.jsx)("span", {
                            className: "font-bold",
                            children: (0, b.q)(29)
                        })]
                    })]
                })
            }

            function j() {
                let [e, t] = (0, h.useState)("gemini-2.5-flash"), n = async t => {
                    if (t.shiftKey || "Enter" !== t.key) return;
                    let n = document.getElementById("main-section"),
                        l = document.getElementById("main-textbox"),
                        a = document.getElementById("chat-container"),
                        i = document.getElementById("chat-wrapper"),
                        o = l.value;
                    n && (n.classList.add("animate-[dissapear-.3s-ease_in_out]"), setTimeout(() => {
                        n.remove()
                    }, 300)), setTimeout(async () => {
                        let t, n = document.createElement("div"),
                            s = document.createElement("div");
                        if (document.getElementById("main-input").style.display = "flex", s.className = "max-w-[65%] bg-blue-900 text-white rounded-xl p-4 msg self-start font-nunitodefault", s.id = "first-msg", n.className = "max-w-[60%] bg-zinc-800 text-white rounded-xl p-4 h-fit w-fit self-end font-nunitodefault", n.innerText = o, a.appendChild(n), a.appendChild(s), i.style.display = "block", !localStorage.getItem("uuid")) {
                            let e = await p();
                            localStorage.setItem("uuid", e)
                        }
                        switch (e) {
                            case "gemini-2.5-flash":
                            default:
                                t = "/api/completions/endpoint1";
                                break;
                            case "gemini-2.5-pro":
                                t = "/api/completions/endpoint2";
                                break;
                            case "llama-3-8b-instruct":
                                t = "/api/completions/endpoint3"
                        }
                        let r = await fetch(t, {
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                content: o
                            }),
                            method: "POST"
                        });
                        if (!r.ok) try {
                            let e = await r.json();
                            if ("Expired or invalid token" === e.error) {
                                if (!(await fetch("/api/skynet/auth/refresh", {
                                        method: "POST"
                                    })).ok) return;
                                let e = await fetch(t, {
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            content: o
                                        }),
                                        method: "POST"
                                    }),
                                    n = (await e.json()).content,
                                    i = document.getElementById("first-msg");
                                if (!i) return;
                                if (i.innerHTML = await x(n), localStorage.getItem("amount-left")) {
                                    let e = Number(localStorage.getItem("amount-left")) || 0,
                                        t = document.getElementById("amount-left-num"),
                                        n = document.getElementById("limit-container");
                                    e >= 20 && n && (n.innerHTML = '\n                     <div className="flex flex-row gap-3 justify-center items-center">\n                <h1 className="text-lg">You have Reached the messages limit for today.</h1>\n                <div className="self-end rounded-full hover:bg-gray-400 transition delay-300 ease-in-out p-2 cursor-pointer" onClick={removeSelf}>\n                    <X />\n                </div>\n            </div>\n            <p>You can reset this by logging in or waiting until <span className="font-bold">12 UTC</span></p>\n                    ', l.setAttribute("disabled", ""));
                                    let a = e + 1;
                                    t && (t.innerText = (a - 20).toString()), localStorage.setItem("amount-left", a.toString())
                                } else localStorage.setItem("amount-left", "1");
                                a.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                    inline: "center"
                                })
                            }
                        } catch (e) {
                            console.error(e)
                        }
                        let c = (await r.json()).content,
                            d = document.getElementById("first-msg");
                        if (d) {
                            if (d.innerHTML = await x(c), localStorage.getItem("amount-left")) {
                                let e = Number(localStorage.getItem("amount-left")) || 0,
                                    t = document.getElementById("amount-left-num"),
                                    n = document.getElementById("limit-container");
                                e >= 20 && n && (n.innerHTML = '\n                     <div className="flex flex-row gap-3 justify-center items-center">\n                <h1 className="text-lg">You have Reached the messages limit for today.</h1>\n                <div className="self-end rounded-full hover:bg-gray-400 transition delay-300 ease-in-out p-2 cursor-pointer" onClick={removeSelf}>\n                    <X />\n                </div>\n            </div>\n            <p>You can reset this by logging in or waiting until <span className="font-bold">12 UTC</span></p>\n                    ', l.setAttribute("disabled", ""));
                                let a = e + 1;
                                t && (t.innerText = (20 - a).toString()), localStorage.setItem("amount-left", a.toString())
                            } else localStorage.setItem("amount-left", "1");
                            a.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                                inline: "center"
                            })
                        }
                    }, 300)
                }, u = async t => {
                    let n;
                    if ("Enter" !== t.key) return;
                    let l = document.getElementById("main-textboxa"),
                        a = document.getElementById("main-input"),
                        i = document.getElementById("chat-container");
                    if ("" === l.value.trim()) {
                        a.style.display = "none", i.classList.add("hidden");
                        return
                    }
                    let o = l.value,
                        s = document.createElement("div"),
                        r = document.createElement("div");
                    r.className = "max-w-[65%] bg-blue-900 text-white rounded-xl p-4 msg self-start font-nunitodefault", r.id = "first-msg", s.className = "max-w-[60%] bg-zinc-800 text-white rounded-xl p-4 h-fit w-fit self-end font-nunitodefault", s.innerText = o;
                    let c = document.getElementById("chat-container");
                    switch (c.appendChild(s), s.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    }), l.value = "", e) {
                        case "gemini-2.5-flash":
                        default:
                            n = "/api/completions/endpoint1";
                            break;
                        case "gemini-2.5-pro":
                            n = "/api/completions/endpoint2";
                            break;
                        case "llama-3-8b-instruct":
                            n = "/api/completions/endpoint3"
                    }
                    let d = await fetch(n, {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            content: o
                        }),
                        method: "POST"
                    });
                    if (!d.ok) try {
                        let e = await d.json();
                        if ("Expired or invalid token" === e.error) {
                            if (!(await fetch("/api/skynet/auth/refresh", {
                                    method: "POST"
                                })).ok) return;
                            let e = await fetch(n, {
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        content: o
                                    }),
                                    method: "POST"
                                }),
                                t = (await e.json()).content;
                            if (r.innerHTML = await x(t), c.appendChild(r), localStorage.getItem("amount-left")) {
                                let e = Number(localStorage.getItem("amount-left")) || 0,
                                    t = document.getElementById("amount-left-num"),
                                    n = document.getElementById("limit-container");
                                e >= 20 && n && (n.innerHTML = '\n                     <div className="flex flex-row gap-3 justify-center items-center">\n                <h1 className="text-lg">You have Reached the messages limit for today.</h1>\n                <div className="self-end rounded-full hover:bg-gray-400 transition delay-300 ease-in-out p-2 cursor-pointer" onClick={removeSelf}>\n                    <X />\n                </div>\n            </div>\n            <p>You can reset this by logging in or waiting until <span className="font-bold">12 UTC</span></p>\n                    ', l.setAttribute("disabled", ""));
                                let a = e + 1;
                                t && (t.innerText = (a - 20).toString()), localStorage.setItem("amount-left", a.toString())
                            } else localStorage.setItem("amount-left", "1");
                            c.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })
                        }
                    } catch (e) {
                        l.value = o, console.error(e)
                    }
                    let m = (await d.json()).content;
                    if (r.innerHTML = await x(m), c.appendChild(r), localStorage.getItem("amount-left")) {
                        let e = Number(localStorage.getItem("amount-left")) || 0,
                            t = document.getElementById("amount-left-num"),
                            n = document.getElementById("limit-container");
                        e >= 20 && n && (n.innerHTML = '\n                     <div className="flex flex-row gap-3 justify-center items-center">\n                <h1 className="text-lg">You have Reached the messages limit for today.</h1>\n                <div className="self-end rounded-full hover:bg-gray-400 transition delay-300 ease-in-out p-2 cursor-pointer" onClick={removeSelf}>\n                    <X />\n                </div>\n            </div>\n            <p>You can reset this by logging in or waiting until <span className="font-bold">12 UTC</span></p>\n                    ', l.setAttribute("disabled", ""));
                        let a = e + 1;
                        t && (t.innerText = (20 - a).toString()), localStorage.setItem("amount-left", a.toString())
                    } else localStorage.setItem("amount-left", "1");
                    c.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "center"
                    })
                };
                return (0, h.useEffect)(() => {
                    if (localStorage.getItem("_ghost.session")) {
                        let e = document.getElementById("acc-locked-1"),
                            t = document.getElementById("acc-locked-2");
                        e.removeAttribute("disabled"), t.removeAttribute("disabled")
                    }
                }, []), (0, l.jsxs)("div", {
                    className: "flex flex-col min-h-screen",
                    children: [(0, l.jsx)(m.default, {}), (0, l.jsxs)("main", {
                        className: "flex flex-1",
                        children: [(0, l.jsx)(d.default, {}), (0, l.jsx)("section", {
                            className: "flex-1 flex items-center justify-center mt-20",
                            children: (0, l.jsx)("div", {
                                id: "chat-wrapper",
                                className: "w-full h-full flex items-center justify-center px-4 md:px-8 py-4",
                                style: {
                                    display: "none",
                                    minHeight: "60vh"
                                },
                                children: (0, l.jsx)("div", {
                                    id: "chat-container",
                                    className: "flex flex-col gap-10 w-full max-w-4xl mx-auto overflow-y-auto justify-center items-center",
                                    style: {
                                        minHeight: "40vh"
                                    }
                                })
                            })
                        })]
                    }), (0, l.jsx)("div", {
                        className: "flex justify-center items-center min-h-screen w-full",
                        children: (0, l.jsx)("div", {
                            className: "flex flex-col justify-center items-center px-4 md:px-8 py-4",
                            id: "main-section",
                            children: (0, l.jsxs)("div", {
                                className: "flex flex-col gap-3 items-center text-center top-[40%] fixed",
                                children: [(0, l.jsx)("h1", {
                                    className: "text-2xl font-bold",
                                    children: (0, b.q)(16)
                                }), (0, l.jsx)("textarea", {
                                    autoFocus: !0,
                                    placeholder: "Ask Anything..",
                                    onKeyDown: n,
                                    id: "main-textbox",
                                    className: "rounded-full w-[80%] resize-none max-w-[750px] border border-zinc-800 p-4 pb-0 focus:outline-none font-nunitodefault"
                                }), (0, l.jsxs)("div", {
                                    className: "flex flex-row items-center justify-center gap-3 mt-2",
                                    children: [(0, l.jsx)(c, {
                                        icon: (0, l.jsx)(a.A, {
                                            color: "yellow"
                                        }),
                                        text: (0, b.q)(17)
                                    }), (0, l.jsx)(c, {
                                        icon: (0, l.jsx)(i.A, {
                                            color: "#677bf7"
                                        }),
                                        text: (0, b.q)(18)
                                    }), (0, l.jsx)(c, {
                                        icon: (0, l.jsx)(o.A, {
                                            color: "lightblue"
                                        }),
                                        text: (0, b.q)(19)
                                    }), (0, l.jsx)(c, {
                                        icon: (0, l.jsx)(s.A, {
                                            color: "orange"
                                        }),
                                        text: (0, b.q)(20)
                                    }), (0, l.jsx)(c, {
                                        icon: (0, l.jsx)(r.A, {
                                            color: "pink"
                                        }),
                                        text: (0, b.q)(20)
                                    })]
                                })]
                            })
                        })
                    }), (0, l.jsxs)("div", {
                        className: "flex flex-col gap-5 justify-center items-center bottom-20 fixed w-full",
                        id: "main-input",
                        style: {
                            display: "none"
                        },
                        children: [(0, l.jsx)(v, {}), (0, l.jsxs)("div", {
                            className: "flex flex-row gap-3 items-center w-full justify-center",
                            children: [(0, l.jsxs)("select", {
                                onChange: e => {
                                    let n = e.target.value;
                                    console.log("user switched model to ".concat(n, "!")), t(n)
                                },
                                className: "rounded-lg border border-zinc-800 p-4 w-[10%] focus:outline-none bg-black cursor-pointer",
                                children: [(0, l.jsx)("option", {
                                    value: "gemini-2.5-flash",
                                    children: (0, b.q)(23)
                                }), (0, l.jsx)("option", {
                                    value: "gemini-2.5-pro",
                                    disabled: !0,
                                    id: "acc-locked-1",
                                    children: (0, b.q)(24)
                                }), (0, l.jsx)("option", {
                                    value: "llama-3-8b-instruct",
                                    disabled: !0,
                                    id: "acc-locked-2",
                                    children: (0, b.q)(25)
                                })]
                            }), (0, l.jsx)("input", {
                                type: "text",
                                placeholder: "Ask Anything..",
                                id: "main-textboxa",
                                onKeyDown: u,
                                className: "rounded-lg w-[20%] border border-zinc-800 p-4 focus:outline-none font-nunitodefault"
                            })]
                        }), (0, l.jsx)("p", {
                            className: "fixed bottom-5",
                            children: (0, b.q)(26)
                        })]
                    })]
                })
            }
        },
        8592: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 3807))
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [9268, 1914, 5618, 6508, 8441, 5117, 7358], () => t(8592)), _N_E = e.O()
    }
]);