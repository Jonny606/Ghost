"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6508], {
        1607: e => {
            e.exports = JSON.parse('[{"title":"key","note":"This is the assorted key for the text.json","key":{"topNav":"1-7","homepage":"8-11 and 15","sidenav":"10-14","ai":"16-31","music":"32-40"}},{"id":1,"text":"hqvmx"},{"id":2,"text":"mlgzdq hgalm, gyym, anmwd gfe avzl..."},{"id":3,"text":"mwhf wf"},{"id":4,"text":"mlxxwfhm"},{"id":5,"text":"rvh vnx"},{"id":6,"text":"fv zlmnrxm bvnfe."},{"id":7,"text":"oqgx ev ivn ogfx xv yrgi?"},{"id":8,"text":"olrdval xv hqvmx!"},{"id":9,"text":"mlgzdq mvalxqwfh"},{"id":10,"text":"hgalm"},{"id":11,"text":"gyym"},{"id":12,"text":"gw"},{"id":13,"text":"anmwd"},{"id":14,"text":"jzvomlz"},{"id":15,"text":"vylf wf gjvnx:jrgfk"},{"id":16,"text":"qvo agi w qlry ivn xvegi?"},{"id":17,"text":"jzgwfmxvza"},{"id":18,"text":"dvel"},{"id":19,"text":"hlx geuwdl"},{"id":20,"text":"qlry al ozwxl"},{"id":21,"text":"mnaalzwpl"},{"id":22,"text":"gmk gfixqwfh.."},{"id":23,"text":"hlawfw 2.5 brgmq"},{"id":24,"text":"hlawfw 2.5 yzv"},{"id":25,"text":"rrgag-3-8j-wfmxzndx"},{"id":26,"text":"hqvmx dgf agkl awmxgklm. dqldk wayvzxgfx wfbv."},{"id":27,"text":"ivn qgul zlgdqle xql almmghlm rwawx bvz xvegi."},{"id":28,"text":"ivn dgf zlmlx xqwm ji rvhhwfh wf vz ogwxwfh nfxwr"},{"id":29,"text":"12 nxd"},{"id":30,"text":"ivn qgul"},{"id":31,"text":"almmghlm rlbx owxq xqwm avelr."},{"id":32,"text":"xzi mlgzdqwfh xv hlx mxgzxle"},{"id":33,"text":"cnwdk ywdkm"},{"id":34,"text":"fvx yrgiwfh"},{"id":35,"text":"cnlnl"},{"id":36,"text":"rizwdm"},{"id":37,"text":"fv rizwdm gugwrgjrl bvz xqwm mvfh."},{"id":38,"text":"xvy zlmnrx"},{"id":39,"text":"mvfhm"},{"id":40,"text":"bvz ivn"},{"id":41,"text":"hgi blajvim, wfd"},{"id":42,"text":"u"},{"id":43,"text":"rvhwf"},{"id":44,"text":"mwhf wf xv hqvmx"},{"id":45,"text":"olrdval jgdk! yrlgml mwhf wf xv dvfxwfnl"},{"id":46,"text":"ewmdvze"},{"id":47,"text":"hvvhrl"},{"id":48,"text":"vz"},{"id":49,"text":"lagwr geezlmm / nmlzfgal"},{"id":50,"text":"ygmmovze"},{"id":51,"text":"dvfxwfnl"},{"id":52,"text":"mwhf ny"},{"id":53,"text":"mldnzle ji hqvmx"},{"id":54,"text":"mwhag"}]')
        },
        2516: (e, t, l) => {
            l.d(t, {
                h: () => a,
                q: () => s
            });
            var i = l(1607);

            function s(e) {
                let t = i.find(t => t.id === e);
                return t ? t.text : ""
            }

            function a() {
                var e, t;
                if ("about:blank" === (null == (e = top) ? void 0 : e.location.href));
                else {
                    let e = window.open();
                    if (!e) return void alert("Please allow popups and redirects in settings!");
                    try {
                        let t = e.document.createElement("iframe");
                        t.style.position = "fixed", t.style.top = "0", t.style.bottom = "0", t.style.left = "0", t.style.right = "0", t.style.border = "none", t.style.outline = "none", t.style.width = "100%", t.style.height = "100%", t.src = "/", e.document.body.appendChild(t)
                    } catch (e) {
                        console.error("Failed to access win.document:", e)
                    }
                    null == (t = top) || t.location.replace("https://google.com")
                }
            }
        },
        4725: (e, t, l) => {
            l.d(t, {
                default: () => h
            });
            var i = l(5351),
                s = l(4603),
                a = l(575),
                n = l(2376),
                r = l(485),
                d = l(5104);

            function o(e) {
                let t = (0, d.useRouter)();
                console.log(e);
                let l = l => {
                    if ("app" === e.type) t.push("/browser?callback=" + btoa(e.redir));
                    else {
                        if ("music" === e.type) return;
                        "search" === e.type ? t.push("/browser?callback=" + btoa(e.redir)) : "game" === e.type && (localStorage.setItem("g", e.redir), t.push("/p-mode?callback=/p-021/&token=9294j1ngnm492323j2r.304235&passive=1209600"))
                    }
                };
                if ("music" === e.type) {
                    var a;
                    return (0, i.jsxs)("div", {
                        className: "flex flex-col gap-5 bg-black rounded-lg h-fit w-full p-2 cursor-pointer hover:bg-gray-300/30 transition duration-150 ease-in-out z-100 font-nunitodefault",
                        children: [(0, i.jsx)("h1", {
                            className: "font-bold text-lg",
                            children: e.title
                        }), (0, i.jsxs)("div", {
                            className: "flex flex-row gap-10",
                            children: [(0, i.jsx)(s.default, {
                                src: "/api/ytimages?id=" + e.id,
                                width: 64,
                                height: 32,
                                alt: "music_image",
                                className: "rounded-lg"
                            }), (0, i.jsx)("button", {
                                id: "play_button",
                                "data-v-id": e.id,
                                className: "text-white bg-[#ed4c4c] rounded-lg cursor-pointer p-3",
                                children: (0, i.jsx)(r.A, {})
                            })]
                        }), (0, i.jsxs)("p", {
                            className: "text-zinc-500 font-small",
                            children: [e.artist ? null == (a = e.artist[0]) ? void 0 : a.name : "", " ● ", e.views + " views"]
                        })]
                    })
                }
                return "search" === e.type ? (0, i.jsxs)("div", {
                    className: "flex flex-col gap-5 bg-black h-fit rounded-lg w-fit p-2 cursor-pointer hover:bg-gray-300/30 transition duration-150 ease-in-out z-100 font-nunitodefault",
                    onClick: l,
                    children: [(0, i.jsxs)("div", {
                        className: "flex flex-row gap-5",
                        children: [(0, i.jsx)(s.default, {
                            src: e.image,
                            width: 64,
                            height: 32,
                            alt: "search_image",
                            className: "rounded-lg"
                        }), (0, i.jsx)("h1", {
                            className: "font-bold text-lg",
                            children: e.title
                        })]
                    }), (0, i.jsx)("p", {
                        className: "text-zinc-500 font-small",
                        children: e.link
                    })]
                }) : "game" === e.type ? (0, i.jsxs)("div", {
                    className: "flex flex-col gap-5 bg-black rounded-lg h-fit w-full p-2 cursor-pointer hover:bg-gray-300/30 transition duration-150 ease-in-out z-100",
                    onClick: l,
                    children: [(0, i.jsxs)("div", {
                        className: "flex flex-row gap-5 ",
                        children: [(0, i.jsx)(s.default, {
                            src: e.image,
                            width: 64,
                            height: 32,
                            alt: "search_image",
                            className: "rounded-lg"
                        }), (0, i.jsx)("h1", {
                            className: "font-bold text-lg",
                            children: e.title
                        })]
                    }), (0, i.jsx)("p", {
                        className: "text-zinc-500 font-small",
                        children: e.maker
                    })]
                }) : "app" === e.type ? (0, i.jsxs)("div", {
                    className: "flex flex-col gap-5 bg-black rounded-lg h-fit w-full p-2 cursor-pointer hover:bg-gray-300/30 transition duration-150 ease-in-out z-100",
                    onClick: l,
                    children: [(0, i.jsxs)("div", {
                        className: "flex flex-row gap-5 ",
                        children: [(0, i.jsx)(s.default, {
                            src: e.image,
                            width: 64,
                            height: 32,
                            alt: "search_image",
                            className: "rounded-lg"
                        }), (0, i.jsx)("h1", {
                            className: "font-bold text-lg",
                            children: e.title
                        })]
                    }), (0, i.jsx)("p", {
                        className: "text-zinc-500 font-small",
                        children: e.maker
                    })]
                }) : (0, i.jsx)("div", {})
            }
            var c = l(833),
                x = l(178),
                g = l(5050),
                m = l(1607);

            function h(e) {
                let t, l = (0, d.useRouter)(),
                    [r, h] = (0, a.useState)([]),
                    [u, f] = (0, a.useState)(!1),
                    [p, w] = (0, a.useState)(null),
                    y = async e => {
                        if (clearTimeout(t), "Enter" === e.key) return;
                        let l = document.getElementById("text-input"),
                            i = document.getElementById("search-results");
                        l && (t = setTimeout(async () => {
                            i && (i.style.display = "block");
                            let e = await fetch("/api/search?query=" + l.value);
                            200 === e.status && (h(await e.json()), i && (i.hasAttribute("tabindex") || i.setAttribute("tabindex", "0"), i.focus(), l.blur(), i.addEventListener("blur", () => {
                                i.style.display = "none"
                            })))
                        }, 1e3))
                    };
                (0, a.useEffect)(() => {
                    let e = localStorage.getItem("_ghost.session");
                    if (e) {
                        let t = JSON.parse(e);
                        "/cdn-images/users/default.png" === t.img_src && (t.img_src = "/cdn-images/users/default.svg"), f(!0), w(t)
                    } else f(!1);
                    !async function() {
                        if ((await fetch("/api/skynet/auth/check-domain")).ok);
                        else {
                            let e = document.getElementById("user-section");
                            e && (e.style.display = "none")
                        }
                    }()
                }, []);
                let b = e => {
                    let t = m.find(t => t.id === e);
                    return t ? t.text : ""
                };
                return (0, i.jsxs)("div", {
                    className: "fixed top-0 right-0 h-[60px] bg-black border-b border-zinc-800 flex items-center px-4 z-50",
                    style: {
                        width: "calc(100% - 5rem)"
                    },
                    id: "top-nav",
                    children: [(0, i.jsx)("div", {
                        className: "flex items-center gap-3",
                        children: (0, i.jsxs)(n.N, {
                            href: "/",
                            className: "flex items-center gap-2",
                            children: [(0, i.jsx)(s.default, {
                                height: 32,
                                width: 32,
                                src: "/ghost.webp",
                                alt: "Ghost Logo",
                                className: "hover:-rotate-5"
                            }), (0, i.jsx)("h1", {
                                className: "text-white text-lg font-bold",
                                children: b(1)
                            })]
                        })
                    }), (0, i.jsxs)("div", {
                        className: "flex-1 flex justify-center items-center relative",
                        children: [e.music ? (0, i.jsx)("input", {
                            id: "music-input",
                            onKeyUp: e => {
                                if ("Enter" !== e.key) return;
                                let t = document.getElementById("music-input");
                                l.push("/m-library/search?q=" + encodeURIComponent(t.value))
                            },
                            type: "text",
                            placeholder: "What do you want to play?",
                            className: "h-10 w-full max-w-[400px] px-4 rounded-2xl border border-gray-500 bg-black text-white placeholder-gray-400 focus:outline-none font-nunitodefault"
                        }) : (0, i.jsx)("input", {
                            id: "text-input",
                            onKeyUp: y,
                            type: "text",
                            placeholder: "search...",
                            className: "h-10 w-full max-w-[400px] px-4 rounded-2xl border border-gray-500 bg-black text-white placeholder-gray-400 focus:outline-none focus:bg-zinc-500/20 hover:bg-zinc-500/20 transition ease-in-out font-nunitodefault"
                        }), e.music ? (0, i.jsx)("div", {
                            id: "search-results",
                            style: {
                                padding: "5px",
                                display: "none",
                                width: r.length > 0 ? "500px" : "200px",
                                height: r.length > 0 ? "500px" : "50px"
                            },
                            className: "absolute top-12 w-full max-w-[800px] bg-black text-white rounded-lg border border-gray-600 z-50"
                        }) : (0, i.jsx)("div", {
                            id: "search-results",
                            style: {
                                padding: "5px",
                                display: "none",
                                width: r.length > 0 ? "500px" : "200px",
                                height: r.length > 0 ? "500px" : "50px",
                                animation: "searchRise ease-in-out 0.3s"
                            },
                            className: "absolute top-12 w-full max-w-[800px] bg-black text-white rounded-lg border border-zinc-800 z-50 transition ease-in-out focus:border-none",
                            children: r.length > 0 ? r.map((e, t) => (0, i.jsx)(o, {
                                type: e.type,
                                title: e.title,
                                image: e.image,
                                id: e.videoId,
                                maker: e.makers,
                                redir: e.href,
                                artist: e.artists,
                                views: e.views
                            }, t)) : (0, i.jsx)("div", {
                                className: "text-center text-sm text-gray-400 p-4",
                                children: b(6)
                            })
                        })]
                    }), (0, i.jsx)("div", {
                        className: "sm:flex items-center gap-4 ml-auto",
                        id: "user-section",
                        children: u ? (0, i.jsx)("div", {
                            onClick: () => {
                                let e = document.getElementById("ghost-profile");
                                e && (e.style.display = "block", e.hasAttribute("tabindex") || e.setAttribute("tabindex", "0"), e.focus())
                            },
                            className: "cursor-pointer",
                            children: p && (0, i.jsx)(s.default, {
                                src: p.img_src,
                                height: 32,
                                width: 32,
                                alt: "user-image"
                            })
                        }) : (0, i.jsxs)(n.N, {
                            href: "/login",
                            className: "flex flex-row gap-3 items-center justify-center border border-zinc-800 rounded-full p-2 hover:bg-zinc-700 transition delay-150 ease-in-out",
                            children: [(0, i.jsx)(c.A, {}), " ", b(3)]
                        })
                    }), u ? (0, i.jsxs)("div", {
                        id: "ghost-profile",
                        onBlur: () => {
                            document.getElementById("ghost-profile").style.display = "none"
                        },
                        className: "flex flex-col gap-0 rounded-lg bg-black w-fit absolute top-12 right-0 border border-zinc-800",
                        style: {
                            display: "none"
                        },
                        children: [(0, i.jsxs)("div", {
                            className: "flex flex-row gap-3 p-3",
                            children: [(0, i.jsx)(s.default, {
                                src: p ? p.img_src : "/cdn-images/users/default.svg",
                                height: 32,
                                width: 32,
                                alt: "user-image"
                            }), null == p ? void 0 : p.username]
                        }), (0, i.jsxs)("button", {
                            className: "bg-black w-[400px] h-20 flex flex-row gap-3 border-t border-zinc-800 cursor-pointer p-3 hover:bg-zinc-700",
                            onMouseDown: () => {
                                let e = document.getElementById("user-settings"),
                                    t = document.getElementById("settings-wrapper"),
                                    l = document.getElementById("settings-bg");
                                console.log("the city of angels"), e && t && l && (l.style.display = "block", t.style.display = "flex", e.style.display = "flex")
                            },
                            children: [(0, i.jsx)(x.A, {}), " ", b(4)]
                        }), (0, i.jsxs)("button", {
                            className: "bg-black w-[400px] h-20 flex flex-row gap-3 border-t border-zinc-800 cursor-pointer p-3 hover:bg-zinc-700 rounded-b-lg",
                            onMouseDown: () => {
                                let e = document.getElementById("logout"),
                                    t = document.getElementById("settings-wrapper"),
                                    l = document.getElementById("settings-bg");
                                console.log("the city of angels"), e && t && l && (l.style.display = "block", t.style.display = "flex", e.style.display = "flex")
                            },
                            children: [(0, i.jsx)(g.A, {}), " ", b(5)]
                        })]
                    }) : (0, i.jsx)(i.Fragment, {})]
                })
            }
        },
        9082: (e, t, l) => {
            l.d(t, {
                default: () => m
            });
            var i = l(5351),
                s = l(575),
                a = l(369),
                n = l(7632),
                r = l(6873),
                d = l(649),
                o = l(1412),
                c = l(9968),
                x = l(2376),
                g = l(2516);

            function m() {
                let [e, t] = (0, s.useState)(!1);
                return (0, i.jsxs)("div", {
                    className: "h-screen ".concat(e ? "w-48" : "w-16 md:w-20", " flex flex-col gap-5 fixed bg-black py-4 items-center transition-all duration-200 border-r border-zinc-800"),
                    children: [(0, i.jsx)("button", {
                        className: "text-white rounded-3xl bg-transparent mt-0 p-3 hover:bg-gray-300/30 transition duration-150 ease-in-out cursor-pointer self-start ml-[20%]",
                        onClick: () => (function() {
                            if (!0 === e) {
                                t(!1);
                                let e = document.getElementById("top-nav");
                                e && (e.style.width = "calc(100% - 5rem)")
                            } else {
                                t(!0);
                                let e = document.getElementById("top-nav");
                                e && (e.style.width = "calc(100% - 12rem)")
                            }
                        })(),
                        "aria-label": "Toggle sidebar",
                        children: e ? (0, i.jsx)(a.A, {
                            className: "w-7 h-7"
                        }) : (0, i.jsx)(n.A, {
                            className: "w-7 h-7"
                        })
                    }), (0, i.jsxs)("nav", {
                        id: "side-links",
                        className: "flex flex-col items-center justify-center gap-6 mt-4 w-full",
                        style: e ? {
                            marginRight: "20px"
                        } : {},
                        children: [(0, i.jsxs)(x.N, {
                            href: "/g-library",
                            className: e ? "flex items-center gap-2 text-white hover:bg-gray-300/30 transition duration-150 ease-in-out rounded-lg p-3 w-fit min-w-[75%]" : "flex items-center gap-2 text-white hover:bg-gray-300/30 transition duration-150 ease-in-out rounded-lg p-3 w-fit min-w-[50%]",
                            children: [(0, i.jsx)(r.A, {
                                className: "w-6 h-6"
                            }), e && (0, i.jsx)("span", {
                                className: "text-md",
                                children: (0, g.q)(10)
                            })]
                        }), (0, i.jsxs)(x.N, {
                            href: "/a-library",
                            className: e ? "flex items-center gap-2 text-white hover:bg-gray-300/30 transition duration-150 ease-in-out rounded-lg p-3 w-fit min-w-[75%]" : "flex items-center gap-2 text-white hover:bg-gray-300/30 transition duration-150 ease-in-out rounded-lg p-3 w-fit min-w-[50%]",
                            children: [(0, i.jsx)(d.A, {
                                className: "w-6 h-6"
                            }), e && (0, i.jsx)("span", {
                                className: "text-md",
                                children: (0, g.q)(11)
                            })]
                        }), (0, i.jsxs)(x.N, {
                            href: "/ia",
                            className: e ? "flex items-center gap-2 text-white hover:bg-gray-300/30 transition duration-150 ease-in-out rounded-lg p-3 w-fit min-w-[75%]" : "flex items-center gap-2 text-white hover:bg-gray-300/30 transition duration-150 ease-in-out rounded-lg p-3 w-fit min-w-[50%]",
                            children: [(0, i.jsx)(o.A, {
                                className: "w-6 h-6"
                            }), e && (0, i.jsx)("span", {
                                className: "text-md",
                                children: (0, g.q)(12)
                            })]
                        }), (0, i.jsxs)("a", {
                            href: "/browser/",
                            className: e ? "flex items-center gap-2 text-white hover:bg-gray-300/30 transition duration-150 ease-in-out rounded-lg p-3 w-fit min-w-[75%]" : "flex items-center gap-2 text-white hover:bg-gray-300/30 transition duration-150 ease-in-out rounded-lg p-3 w-fit min-w-[50%]",
                            children: [(0, i.jsx)(c.A, {
                                className: "w-6 h-6"
                            }), e && (0, i.jsx)("span", {
                                className: "text-md",
                                children: (0, g.q)(14)
                            })]
                        })]
                    })]
                })
            }
        }
    }
]);