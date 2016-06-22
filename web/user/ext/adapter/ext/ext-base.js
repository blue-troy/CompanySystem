/*
 * Ext JS Library 3.0.0
 * Copyright(c) 2006-2009 Ext JS, LLC
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
window.undefined = window.undefined;
Ext = {version: "3.0"};
Ext.apply = function (d, e, b) {
    if (b) {
        Ext.apply(d, b)
    }
    if (d && e && typeof e == "object") {
        for (var a in e) {
            d[a] = e[a]
        }
    }
    return d
};
(function () {
    var g = 0, t = Object.prototype.toString, s = function (e) {
        if (Ext.isArray(e) || e.callee) {
            return true
        }
        if (/NodeList|HTMLCollection/.test(t.call(e))) {
            return true
        }
        return ((e.nextNode || e.item) && Ext.isNumber(e.length))
    }, u = navigator.userAgent.toLowerCase(), z = function (e) {
        return e.test(u)
    }, i = document, l = i.compatMode == "CSS1Compat", B = z(/opera/), h = z(/chrome/), v = z(/webkit/), y = !h && z(/safari/), f = y && z(/applewebkit\/4/), b = y && z(/version\/3/), C = y && z(/version\/4/), r = !B && z(/msie/), p = r && z(/msie 7/), o = r && z(/msie 8/), q = r && !p && !o, n = !v && z(/gecko/), d = n && z(/rv:1\.8/), a = n && z(/rv:1\.9/), w = r && !l, A = z(/windows|win32/), k = z(/macintosh|mac os x/), j = z(/adobeair/), m = z(/linux/), c = /^https/i.test(window.location.protocol);
    if (q) {
        try {
            i.execCommand("BackgroundImageCache", false, true)
        } catch (x) {
        }
    }
    Ext.apply(Ext, {
        SSL_SECURE_URL: "javascript:false",
        isStrict: l,
        isSecure: c,
        isReady: false,
        enableGarbageCollector: true,
        enableListenerCollection: false,
        USE_NATIVE_JSON: false,
        applyIf: function (D, E) {
            if (D) {
                for (var e in E) {
                    if (Ext.isEmpty(D[e])) {
                        D[e] = E[e]
                    }
                }
            }
            return D
        },
        id: function (e, D) {
            return (e = Ext.getDom(e) || {}).id = e.id || (D || "ext-gen") + (++g)
        },
        extend: function () {
            var D = function (F) {
                for (var E in F) {
                    this[E] = F[E]
                }
            };
            var e = Object.prototype.constructor;
            return function (K, H, J) {
                if (Ext.isObject(H)) {
                    J = H;
                    H = K;
                    K = J.constructor != e ? J.constructor : function () {
                        H.apply(this, arguments)
                    }
                }
                var G = function () {
                }, I, E = H.prototype;
                G.prototype = E;
                I = K.prototype = new G();
                I.constructor = K;
                K.superclass = E;
                if (E.constructor == e) {
                    E.constructor = H
                }
                K.override = function (F) {
                    Ext.override(K, F)
                };
                I.superclass = I.supr = (function () {
                    return E
                });
                I.override = D;
                Ext.override(K, J);
                K.extend = function (F) {
                    Ext.extend(K, F)
                };
                return K
            }
        }(),
        override: function (e, E) {
            if (E) {
                var D = e.prototype;
                Ext.apply(D, E);
                if (Ext.isIE && E.toString != e.toString) {
                    D.toString = E.toString
                }
            }
        },
        namespace: function () {
            var D, e;
            Ext.each(arguments, function (E) {
                e = E.split(".");
                D = window[e[0]] = window[e[0]] || {};
                Ext.each(e.slice(1), function (F) {
                    D = D[F] = D[F] || {}
                })
            });
            return D
        },
        urlEncode: function (I, H) {
            var F, D = [], E, G = encodeURIComponent;
            for (E in I) {
                F = !Ext.isDefined(I[E]);
                Ext.each(F ? E : I[E], function (J, e) {
                    D.push("&", G(E), "=", (J != E || !F) ? G(J) : "")
                })
            }
            if (!H) {
                D.shift();
                H = ""
            }
            return H + D.join("")
        },
        urlDecode: function (E, D) {
            var H = {}, G = E.split("&"), I = decodeURIComponent, e, F;
            Ext.each(G, function (J) {
                J = J.split("=");
                e = I(J[0]);
                F = I(J[1]);
                H[e] = D || !H[e] ? F : [].concat(H[e]).concat(F)
            });
            return H
        },
        urlAppend: function (e, D) {
            if (!Ext.isEmpty(D)) {
                return e + (e.indexOf("?") === -1 ? "?" : "&") + D
            }
            return e
        },
        toArray: function () {
            return r ? function (e, F, D, E) {
                E = [];
                Ext.each(e, function (G) {
                    E.push(G)
                });
                return E.slice(F || 0, D || E.length)
            } : function (e, E, D) {
                return Array.prototype.slice.call(e, E || 0, D || e.length)
            }
        }(),
        each: function (G, F, E) {
            if (Ext.isEmpty(G, true)) {
                return
            }
            if (!s(G) || Ext.isPrimitive(G)) {
                G = [G]
            }
            for (var D = 0, e = G.length; D < e; D++) {
                if (F.call(E || G[D], G[D], D, G) === false) {
                    return D
                }
            }
        },
        iterate: function (E, D, e) {
            if (s(E)) {
                Ext.each(E, D, e);
                return
            } else {
                if (Ext.isObject(E)) {
                    for (var F in E) {
                        if (E.hasOwnProperty(F)) {
                            if (D.call(e || E, F, E[F]) === false) {
                                return
                            }
                        }
                    }
                }
            }
        },
        getDom: function (e) {
            if (!e || !i) {
                return null
            }
            return e.dom ? e.dom : (Ext.isString(e) ? i.getElementById(e) : e)
        },
        getBody: function () {
            return Ext.get(i.body || i.documentElement)
        },
        removeNode: r ? function () {
            var e;
            return function (D) {
                if (D && D.tagName != "BODY") {
                    e = e || i.createElement("div");
                    e.appendChild(D);
                    e.innerHTML = ""
                }
            }
        }() : function (e) {
            if (e && e.parentNode && e.tagName != "BODY") {
                e.parentNode.removeChild(e)
            }
        },
        isEmpty: function (D, e) {
            return D === null || D === undefined || ((Ext.isArray(D) && !D.length)) || (!e ? D === "" : false)
        },
        isArray: function (e) {
            return t.apply(e) === "[object Array]"
        },
        isObject: function (e) {
            return e && typeof e == "object"
        },
        isPrimitive: function (e) {
            return Ext.isString(e) || Ext.isNumber(e) || Ext.isBoolean(e)
        },
        isFunction: function (e) {
            return t.apply(e) === "[object Function]"
        },
        isNumber: function (e) {
            return typeof e === "number" && isFinite(e)
        },
        isString: function (e) {
            return typeof e === "string"
        },
        isBoolean: function (e) {
            return typeof e === "boolean"
        },
        isDefined: function (e) {
            return typeof e !== "undefined"
        },
        isOpera: B,
        isWebKit: v,
        isChrome: h,
        isSafari: y,
        isSafari3: b,
        isSafari4: C,
        isSafari2: f,
        isIE: r,
        isIE6: q,
        isIE7: p,
        isIE8: o,
        isGecko: n,
        isGecko2: d,
        isGecko3: a,
        isBorderBox: w,
        isLinux: m,
        isWindows: A,
        isMac: k,
        isAir: j
    });
    Ext.ns = Ext.namespace
})();
Ext.ns("Ext", "Ext.util", "Ext.lib", "Ext.data");
Ext.apply(Function.prototype, {
    createInterceptor: function (b, a) {
        var c = this;
        return !Ext.isFunction(b) ? this : function () {
            var e = this, d = arguments;
            b.target = e;
            b.method = c;
            return (b.apply(a || e || window, d) !== false) ? c.apply(e || window, d) : null
        }
    }, createCallback: function () {
        var a = arguments, b = this;
        return function () {
            return b.apply(window, a)
        }
    }, createDelegate: function (c, b, a) {
        var d = this;
        return function () {
            var f = b || arguments;
            if (a === true) {
                f = Array.prototype.slice.call(arguments, 0);
                f = f.concat(b)
            } else {
                if (Ext.isNumber(a)) {
                    f = Array.prototype.slice.call(arguments, 0);
                    var e = [a, 0].concat(b);
                    Array.prototype.splice.apply(f, e)
                }
            }
            return d.apply(c || window, f)
        }
    }, defer: function (c, e, b, a) {
        var d = this.createDelegate(e, b, a);
        if (c > 0) {
            return setTimeout(d, c)
        }
        d();
        return 0
    }
});
Ext.applyIf(String, {
    format: function (b) {
        var a = Ext.toArray(arguments, 1);
        return b.replace(/\{(\d+)\}/g, function (c, d) {
            return a[d]
        })
    }
});
Ext.applyIf(Array.prototype, {
    indexOf: function (c) {
        for (var b = 0, a = this.length; b < a; b++) {
            if (this[b] == c) {
                return b
            }
        }
        return -1
    }, remove: function (b) {
        var a = this.indexOf(b);
        if (a != -1) {
            this.splice(a, 1)
        }
        return this
    }
});
Ext.ns("Ext.grid", "Ext.dd", "Ext.tree", "Ext.form", "Ext.menu", "Ext.state", "Ext.layout", "Ext.app", "Ext.ux", "Ext.chart", "Ext.direct");
Ext.apply(Ext, function () {
    var b = Ext, a = 0;
    return {
        emptyFn: function () {
        },
        BLANK_IMAGE_URL: Ext.isIE6 || Ext.isIE7 ? "http://extjs.com/s.gif" : "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        extendX: function (c, d) {
            return Ext.extend(c, d(c.prototype))
        },
        getDoc: function () {
            return Ext.get(document)
        },
        isDate: function (c) {
            return Object.prototype.toString.apply(c) === "[object Date]"
        },
        num: function (d, c) {
            d = Number(d === null || typeof d == "boolean" ? NaN : d);
            return isNaN(d) ? c : d
        },
        value: function (e, c, d) {
            return Ext.isEmpty(e, d) ? c : e
        },
        escapeRe: function (c) {
            return c.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
        },
        sequence: function (f, c, e, d) {
            f[c] = f[c].createSequence(e, d)
        },
        addBehaviors: function (g) {
            if (!Ext.isReady) {
                Ext.onReady(function () {
                    Ext.addBehaviors(g)
                })
            } else {
                var d = {}, f, c, e;
                for (c in g) {
                    if ((f = c.split("@"))[1]) {
                        e = f[0];
                        if (!d[e]) {
                            d[e] = Ext.select(e)
                        }
                        d[e].on(f[1], g[c])
                    }
                }
                d = null
            }
        },
        combine: function () {
            var e = arguments, d = e.length, g = [];
            for (var f = 0; f < d; f++) {
                var c = e[f];
                if (Ext.isArray(c)) {
                    g = g.concat(c)
                } else {
                    if (c.length !== undefined && !c.substr) {
                        g = g.concat(Array.prototype.slice.call(c, 0))
                    } else {
                        g.push(c)
                    }
                }
            }
            return g
        },
        copyTo: function (c, d, e) {
            if (typeof e == "string") {
                e = e.split(/[,;\s]/)
            }
            Ext.each(e, function (f) {
                if (d.hasOwnProperty(f)) {
                    c[f] = d[f]
                }
            }, this);
            return c
        },
        destroy: function () {
            Ext.each(arguments, function (c) {
                if (c) {
                    if (Ext.isArray(c)) {
                        this.destroy.apply(this, c)
                    } else {
                        if (Ext.isFunction(c.destroy)) {
                            c.destroy()
                        } else {
                            if (c.dom) {
                                c.remove()
                            }
                        }
                    }
                }
            }, this)
        },
        destroyMembers: function (j, g, e, f) {
            for (var h = 1, d = arguments, c = d.length; h < c; h++) {
                Ext.destroy(j[d[h]]);
                delete j[d[h]]
            }
        },
        clean: function (c) {
            var d = [];
            Ext.each(c, function (e) {
                if (!!e) {
                    d.push(e)
                }
            });
            return d
        },
        unique: function (c) {
            var d = [], e = {};
            Ext.each(c, function (f) {
                if (!e[f]) {
                    d.push(f)
                }
                e[f] = true
            });
            return d
        },
        flatten: function (c) {
            var e = [];

            function d(f) {
                Ext.each(f, function (g) {
                    if (Ext.isArray(g)) {
                        d(g)
                    } else {
                        e.push(g)
                    }
                });
                return e
            }

            return d(c)
        },
        min: function (c, d) {
            var e = c[0];
            d = d || function (g, f) {
                    return g < f ? -1 : 1
                };
            Ext.each(c, function (f) {
                e = d(e, f) == -1 ? e : f
            });
            return e
        },
        max: function (c, d) {
            var e = c[0];
            d = d || function (g, f) {
                    return g > f ? 1 : -1
                };
            Ext.each(c, function (f) {
                e = d(e, f) == 1 ? e : f
            });
            return e
        },
        mean: function (c) {
            return Ext.sum(c) / c.length
        },
        sum: function (c) {
            var d = 0;
            Ext.each(c, function (e) {
                d += e
            });
            return d
        },
        partition: function (c, d) {
            var e = [[], []];
            Ext.each(c, function (g, h, f) {
                e[(d && d(g, h, f)) || (!d && g) ? 0 : 1].push(g)
            });
            return e
        },
        invoke: function (c, d) {
            var f = [], e = Array.prototype.slice.call(arguments, 2);
            Ext.each(c, function (g, h) {
                if (g && typeof g[d] == "function") {
                    f.push(g[d].apply(g, e))
                } else {
                    f.push(undefined)
                }
            });
            return f
        },
        pluck: function (c, e) {
            var d = [];
            Ext.each(c, function (f) {
                d.push(f[e])
            });
            return d
        },
        zip: function () {
            var l = Ext.partition(arguments, function (i) {
                return !Ext.isFunction(i)
            }), g = l[0], k = l[1][0], c = Ext.max(Ext.pluck(g, "length")), f = [];
            for (var h = 0; h < c; h++) {
                f[h] = [];
                if (k) {
                    f[h] = k.apply(k, Ext.pluck(g, h))
                } else {
                    for (var e = 0, d = g.length; e < d; e++) {
                        f[h].push(g[e][h])
                    }
                }
            }
            return f
        },
        getCmp: function (c) {
            return Ext.ComponentMgr.get(c)
        },
        useShims: b.isIE6 || (b.isMac && b.isGecko2),
        type: function (d) {
            if (d === undefined || d === null) {
                return false
            }
            if (d.htmlElement) {
                return "element"
            }
            var c = typeof d;
            if (c == "object" && d.nodeName) {
                switch (d.nodeType) {
                    case 1:
                        return "element";
                    case 3:
                        return (/\S/).test(d.nodeValue) ? "textnode" : "whitespace"
                }
            }
            if (c == "object" || c == "function") {
                switch (d.constructor) {
                    case Array:
                        return "array";
                    case RegExp:
                        return "regexp";
                    case Date:
                        return "date"
                }
                if (typeof d.length == "number" && typeof d.item == "function") {
                    return "nodelist"
                }
            }
            return c
        },
        intercept: function (f, c, e, d) {
            f[c] = f[c].createInterceptor(e, d)
        },
        callback: function (c, f, e, d) {
            if (Ext.isFunction(c)) {
                if (d) {
                    c.defer(d, f, e || [])
                } else {
                    c.apply(f, e || [])
                }
            }
        }
    }
}());
Ext.apply(Function.prototype, {
    createSequence: function (b, a) {
        var c = this;
        return !Ext.isFunction(b) ? this : function () {
            var d = c.apply(this || window, arguments);
            b.apply(a || this || window, arguments);
            return d
        }
    }
});
Ext.applyIf(String, {
    escape: function (a) {
        return a.replace(/('|\\)/g, "\\$1")
    }, leftPad: function (d, b, c) {
        var a = String(d);
        if (!c) {
            c = " "
        }
        while (a.length < b) {
            a = c + a
        }
        return a
    }
});
String.prototype.toggle = function (b, a) {
    return this == b ? a : b
};
String.prototype.trim = function () {
    var a = /^\s+|\s+$/g;
    return function () {
        return this.replace(a, "")
    }
}();
Date.prototype.getElapsed = function (a) {
    return Math.abs((a || new Date()).getTime() - this.getTime())
};
Ext.applyIf(Number.prototype, {
    constrain: function (b, a) {
        return Math.min(Math.max(this, b), a)
    }
});
Ext.util.TaskRunner = function (e) {
    e = e || 10;
    var f = [], a = [], b = 0, g = false, d = function () {
        g = false;
        clearInterval(b);
        b = 0
    }, h = function () {
        if (!g) {
            g = true;
            b = setInterval(i, e)
        }
    }, c = function (j) {
        a.push(j);
        if (j.onStop) {
            j.onStop.apply(j.scope || j)
        }
    }, i = function () {
        var l = a.length, n = new Date().getTime();
        if (l > 0) {
            for (var p = 0; p < l; p++) {
                f.remove(a[p])
            }
            a = [];
            if (f.length < 1) {
                d();
                return
            }
        }
        for (var p = 0, o, k, m, j = f.length; p < j; ++p) {
            o = f[p];
            k = n - o.taskRunTime;
            if (o.interval <= k) {
                m = o.run.apply(o.scope || o, o.args || [++o.taskRunCount]);
                o.taskRunTime = n;
                if (m === false || o.taskRunCount === o.repeat) {
                    c(o);
                    return
                }
            }
            if (o.duration && o.duration <= (n - o.taskStartTime)) {
                c(o)
            }
        }
    };
    this.start = function (j) {
        f.push(j);
        j.taskStartTime = new Date().getTime();
        j.taskRunTime = 0;
        j.taskRunCount = 0;
        h();
        return j
    };
    this.stop = function (j) {
        c(j);
        return j
    };
    this.stopAll = function () {
        d();
        for (var k = 0, j = f.length; k < j; k++) {
            if (f[k].onStop) {
                f[k].onStop()
            }
        }
        f = [];
        a = []
    }
};
Ext.TaskMgr = new Ext.util.TaskRunner();
(function () {
    var b;

    function c(d) {
        if (!b) {
            b = new Ext.Element.Flyweight()
        }
        b.dom = d;
        return b
    }

    (function () {
        var f = document, d = f.compatMode == "CSS1Compat", e = Math.max, g = parseInt;
        Ext.lib.Dom = {
            isAncestor: function (i, j) {
                var h = false;
                i = Ext.getDom(i);
                j = Ext.getDom(j);
                if (i && j) {
                    if (i.contains) {
                        return i.contains(j)
                    } else {
                        if (i.compareDocumentPosition) {
                            return !!(i.compareDocumentPosition(j) & 16)
                        } else {
                            while (j = j.parentNode) {
                                h = j == i || h
                            }
                        }
                    }
                }
                return h
            }, getViewWidth: function (h) {
                return h ? this.getDocumentWidth() : this.getViewportWidth()
            }, getViewHeight: function (h) {
                return h ? this.getDocumentHeight() : this.getViewportHeight()
            }, getDocumentHeight: function () {
                return e(!d ? f.body.scrollHeight : f.documentElement.scrollHeight, this.getViewportHeight())
            }, getDocumentWidth: function () {
                return e(!d ? f.body.scrollWidth : f.documentElement.scrollWidth, this.getViewportWidth())
            }, getViewportHeight: function () {
                return Ext.isIE ? (Ext.isStrict ? f.documentElement.clientHeight : f.body.clientHeight) : self.innerHeight
            }, getViewportWidth: function () {
                return !Ext.isStrict && !Ext.isOpera ? f.body.clientWidth : Ext.isIE ? f.documentElement.clientWidth : self.innerWidth
            }, getY: function (h) {
                return this.getXY(h)[1]
            }, getX: function (h) {
                return this.getXY(h)[0]
            }, getXY: function (j) {
                var i, o, r, u, k, l, t = 0, q = 0, s, h, m = (f.body || f.documentElement), n = [0, 0];
                j = Ext.getDom(j);
                if (j != m) {
                    if (j.getBoundingClientRect) {
                        r = j.getBoundingClientRect();
                        s = c(document).getScroll();
                        n = [r.left + s.left, r.top + s.top]
                    } else {
                        i = j;
                        h = c(j).isStyle("position", "absolute");
                        while (i) {
                            o = c(i);
                            t += i.offsetLeft;
                            q += i.offsetTop;
                            h = h || o.isStyle("position", "absolute");
                            if (Ext.isGecko) {
                                q += u = g(o.getStyle("borderTopWidth"), 10) || 0;
                                t += k = g(o.getStyle("borderLeftWidth"), 10) || 0;
                                if (i != j && !o.isStyle("overflow", "visible")) {
                                    t += k;
                                    q += u
                                }
                            }
                            i = i.offsetParent
                        }
                        if (Ext.isSafari && h) {
                            t -= m.offsetLeft;
                            q -= m.offsetTop
                        }
                        if (Ext.isGecko && !h) {
                            l = c(m);
                            t += g(l.getStyle("borderLeftWidth"), 10) || 0;
                            q += g(l.getStyle("borderTopWidth"), 10) || 0
                        }
                        i = j.parentNode;
                        while (i && i != m) {
                            if (!Ext.isOpera || (i.tagName != "TR" && !c(i).isStyle("display", "inline"))) {
                                t -= i.scrollLeft;
                                q -= i.scrollTop
                            }
                            i = i.parentNode
                        }
                        n = [t, q]
                    }
                }
                return n
            }, setXY: function (i, j) {
                (i = Ext.fly(i, "_setXY")).position();
                var k = i.translatePoints(j), h = i.dom.style, l;
                for (l in k) {
                    if (!isNaN(k[l])) {
                        h[l] = k[l] + "px"
                    }
                }
            }, setX: function (i, h) {
                this.setXY(i, [h, false])
            }, setY: function (h, i) {
                this.setXY(h, [false, i])
            }
        }
    })();
    Ext.lib.Dom.getRegion = function (d) {
        return Ext.lib.Region.getRegion(d)
    };
    Ext.lib.Event = function () {
        var y = false, w = [], g = [], D = 0, q = [], d, G = false, k = window, K = document, l = 200, t = 20, E = 0, s = 1, i = 2, m = 3, u = 3, z = 4, v = "scrollLeft", r = "scrollTop", f = "unload", B = "mouseover", J = "mouseout", e = function () {
            var L;
            if (k.addEventListener) {
                L = function (P, N, O, M) {
                    if (N == "mouseenter") {
                        O = O.createInterceptor(o);
                        P.addEventListener(B, O, (M))
                    } else {
                        if (N == "mouseleave") {
                            O = O.createInterceptor(o);
                            P.addEventListener(J, O, (M))
                        } else {
                            P.addEventListener(N, O, (M))
                        }
                    }
                    return O
                }
            } else {
                if (k.attachEvent) {
                    L = function (P, N, O, M) {
                        P.attachEvent("on" + N, O);
                        return O
                    }
                } else {
                    L = function () {
                    }
                }
            }
            return L
        }(), h = function () {
            var L;
            if (k.removeEventListener) {
                L = function (P, N, O, M) {
                    if (N == "mouseenter") {
                        N = B
                    } else {
                        if (N == "mouseleave") {
                            N = J
                        }
                    }
                    P.removeEventListener(N, O, (M))
                }
            } else {
                if (k.detachEvent) {
                    L = function (O, M, N) {
                        O.detachEvent("on" + M, N)
                    }
                } else {
                    L = function () {
                    }
                }
            }
            return L
        }();
        var F = Ext.isGecko ? function (L) {
            return Object.prototype.toString.call(L) == "[object XULElement]"
        } : function () {
        };
        var p = Ext.isGecko ? function (L) {
            try {
                return L.nodeType == 3
            } catch (M) {
                return false
            }
        } : function (L) {
            return L.nodeType == 3
        };

        function o(M) {
            var L = A.getRelatedTarget(M);
            return !(F(L) || x(M.currentTarget, L))
        }

        function x(L, N) {
            if (L && L.firstChild) {
                while (N) {
                    if (N === L) {
                        return true
                    }
                    try {
                        N = N.parentNode
                    } catch (M) {
                        return false
                    }
                    if (N && (N.nodeType != 1)) {
                        N = null
                    }
                }
            }
            return false
        }

        function C(O, L, N) {
            var M = -1;
            Ext.each(w, function (P, Q) {
                if (P && P[i] == N && P[E] == O && P[s] == L) {
                    M = Q
                }
            });
            return M
        }

        function H() {
            var L = false, O = [], M, N = !y || (D > 0);
            if (!G) {
                G = true;
                Ext.each(q, function (Q, R, P) {
                    if (Q && (M = K.getElementById(Q.id))) {
                        if (!Q.checkReady || y || M.nextSibling || (K && K.body)) {
                            M = Q.override ? (Q.override === true ? Q.obj : Q.override) : M;
                            Q.fn.call(M, Q.obj);
                            q[R] = null
                        } else {
                            O.push(Q)
                        }
                    }
                });
                D = (O.length === 0) ? 0 : D - 1;
                if (N) {
                    n()
                } else {
                    clearInterval(d);
                    d = null
                }
                L = !(G = false)
            }
            return L
        }

        function n() {
            if (!d) {
                var L = function () {
                    H()
                };
                d = setInterval(L, t)
            }
        }

        function I() {
            var L = K.documentElement, M = K.body;
            if (L && (L[r] || L[v])) {
                return [L[v], L[r]]
            } else {
                if (M) {
                    return [M[v], M[r]]
                } else {
                    return [0, 0]
                }
            }
        }

        function j(L, M) {
            L = L.browserEvent || L;
            var N = L["page" + M];
            if (!N && N !== 0) {
                N = L["client" + M] || 0;
                if (Ext.isIE) {
                    N += I()[M == "X" ? 0 : 1]
                }
            }
            return N
        }

        var A = {
            onAvailable: function (N, L, O, M) {
                q.push({id: N, fn: L, obj: O, override: M, checkReady: false});
                D = l;
                n()
            }, addListener: function (O, L, N) {
                var M;
                O = Ext.getDom(O);
                if (O && N) {
                    if (f == L) {
                        M = !!(g[g.length] = [O, L, N])
                    } else {
                        w.push([O, L, N, M = e(O, L, N, false)])
                    }
                }
                return !!M
            }, removeListener: function (Q, M, P) {
                var O = false, N, L;
                Q = Ext.getDom(Q);
                if (!P) {
                    O = this.purgeElement(Q, false, M)
                } else {
                    if (f == M) {
                        Ext.each(g, function (S, T, R) {
                            if (S && S[0] == Q && S[1] == M && S[2] == P) {
                                g.splice(T, 1);
                                O = true
                            }
                        })
                    } else {
                        N = arguments[3] || C(Q, M, P);
                        L = w[N];
                        if (Q && L) {
                            h(Q, M, L[m], false);
                            L[m] = L[i] = null;
                            w.splice(N, 1);
                            O = true
                        }
                    }
                }
                return O
            }, getTarget: function (L) {
                L = L.browserEvent || L;
                return this.resolveTextNode(L.target || L.srcElement)
            }, resolveTextNode: function (L) {
                return L && !F(L) && p(L) ? L.parentNode : L
            }, getRelatedTarget: function (L) {
                L = L.browserEvent || L;
                return this.resolveTextNode(L.relatedTarget || (L.type == J ? L.toElement : L.type == B ? L.fromElement : null))
            }, getPageX: function (L) {
                return j(L, "X")
            }, getPageY: function (L) {
                return j(L, "Y")
            }, getXY: function (L) {
                return [this.getPageX(L), this.getPageY(L)]
            }, stopEvent: function (L) {
                this.stopPropagation(L);
                this.preventDefault(L)
            }, stopPropagation: function (L) {
                L = L.browserEvent || L;
                if (L.stopPropagation) {
                    L.stopPropagation()
                } else {
                    L.cancelBubble = true
                }
            }, preventDefault: function (L) {
                L = L.browserEvent || L;
                if (L.preventDefault) {
                    L.preventDefault()
                } else {
                    L.returnValue = false
                }
            }, getEvent: function (L) {
                L = L || k.event;
                if (!L) {
                    var M = this.getEvent.caller;
                    while (M) {
                        L = M.arguments[0];
                        if (L && Event == L.constructor) {
                            break
                        }
                        M = M.caller
                    }
                }
                return L
            }, getCharCode: function (L) {
                L = L.browserEvent || L;
                return L.charCode || L.keyCode || 0
            }, _load: function (M) {
                y = true;
                var L = Ext.lib.Event;
                if (Ext.isIE && M !== true) {
                    h(k, "load", arguments.callee)
                }
            }, purgeElement: function (M, O, L) {
                var N = this;
                Ext.each(N.getListeners(M, L), function (P) {
                    if (P) {
                        N.removeListener(M, P.type, P.fn)
                    }
                });
                if (O && M && M.childNodes) {
                    Ext.each(M.childNodes, function (P) {
                        N.purgeElement(P, O, L)
                    })
                }
            }, getListeners: function (O, M) {
                var P = this, N = [], L;
                if (M) {
                    L = M == f ? g : w
                } else {
                    L = w.concat(g)
                }
                Ext.each(L, function (Q, R) {
                    if (Q && Q[E] == O && (!M || M == Q[s])) {
                        N.push({type: Q[s], fn: Q[i], obj: Q[u], adjust: Q[z], index: R})
                    }
                });
                return N.length ? N : null
            }, _unload: function (S) {
                var R = Ext.lib.Event, P, O, M, L, N, Q;
                Ext.each(g, function (T) {
                    if (T) {
                        try {
                            Q = T[z] ? (T[z] === true ? T[u] : T[z]) : k;
                            T[i].call(Q, R.getEvent(S), T[u])
                        } catch (U) {
                        }
                    }
                });
                g = null;
                if (w && (O = w.length)) {
                    while (O) {
                        if ((M = w[N = --O])) {
                            R.removeListener(M[E], M[s], M[i], N)
                        }
                    }
                }
                h(k, f, R._unload)
            }
        };
        A.on = A.addListener;
        A.un = A.removeListener;
        if (K && K.body) {
            A._load(true)
        } else {
            e(k, "load", A._load)
        }
        e(k, f, A._unload);
        H();
        return A
    }();
    Ext.lib.Ajax = function () {
        var g = ["MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], d = "Content-Type";

        function h(s) {
            var r = s.conn, t;

            function q(u, v) {
                for (t in v) {
                    if (v.hasOwnProperty(t)) {
                        u.setRequestHeader(t, v[t])
                    }
                }
            }

            if (k.defaultHeaders) {
                q(r, k.defaultHeaders)
            }
            if (k.headers) {
                q(r, k.headers);
                k.headers = null
            }
        }

        function e(t, s, r, q) {
            return {
                tId: t,
                status: r ? -1 : 0,
                statusText: r ? "transaction aborted" : "communication failure",
                isAbort: true,
                isTimeout: true,
                argument: s
            }
        }

        function j(q, r) {
            (k.headers = k.headers || {})[q] = r
        }

        function o(z, x) {
            var r = {}, v, w = z.conn, q, u;
            try {
                v = z.conn.getAllResponseHeaders();
                Ext.each(v.replace(/\r\n/g, "\n").split("\n"), function (s) {
                    q = s.indexOf(":");
                    if (q >= 0) {
                        u = s.substr(0, q).toLowerCase();
                        if (s.charAt(q + 1) == " ") {
                            ++q
                        }
                        r[u] = s.substr(q + 1)
                    }
                })
            } catch (y) {
            }
            return {
                tId: z.tId, status: w.status, statusText: w.statusText, getResponseHeader: function (s) {
                    return r[s.toLowerCase()]
                }, getAllResponseHeaders: function () {
                    return v
                }, responseText: w.responseText, responseXML: w.responseXML, argument: x
            }
        }

        function n(q) {
            q.conn = null;
            q = null
        }

        function f(v, w, r, q) {
            if (!w) {
                n(v);
                return
            }
            var t, s;
            try {
                if (v.conn.status !== undefined && v.conn.status != 0) {
                    t = v.conn.status
                } else {
                    t = 13030
                }
            } catch (u) {
                t = 13030
            }
            if ((t >= 200 && t < 300) || (Ext.isIE && t == 1223)) {
                s = o(v, w.argument);
                if (w.success) {
                    if (!w.scope) {
                        w.success(s)
                    } else {
                        w.success.apply(w.scope, [s])
                    }
                }
            } else {
                switch (t) {
                    case 12002:
                    case 12029:
                    case 12030:
                    case 12031:
                    case 12152:
                    case 13030:
                        s = e(v.tId, w.argument, (r ? r : false), q);
                        if (w.failure) {
                            if (!w.scope) {
                                w.failure(s)
                            } else {
                                w.failure.apply(w.scope, [s])
                            }
                        }
                        break;
                    default:
                        s = o(v, w.argument);
                        if (w.failure) {
                            if (!w.scope) {
                                w.failure(s)
                            } else {
                                w.failure.apply(w.scope, [s])
                            }
                        }
                }
            }
            n(v);
            s = null
        }

        function m(s, v) {
            v = v || {};
            var q = s.conn, u = s.tId, r = k.poll, t = v.timeout || null;
            if (t) {
                k.timeout[u] = setTimeout(function () {
                    k.abort(s, v, true)
                }, t)
            }
            r[u] = setInterval(function () {
                if (q && q.readyState == 4) {
                    clearInterval(r[u]);
                    r[u] = null;
                    if (t) {
                        clearTimeout(k.timeout[u]);
                        k.timeout[u] = null
                    }
                    f(s, v)
                }
            }, k.pollInterval)
        }

        function i(u, r, t, q) {
            var s = l() || null;
            if (s) {
                s.conn.open(u, r, true);
                if (k.useDefaultXhrHeader) {
                    j("X-Requested-With", k.defaultXhrHeader)
                }
                if (q && k.useDefaultHeader && (!k.headers || !k.headers[d])) {
                    j(d, k.defaultPostHeader)
                }
                if (k.defaultHeaders || k.headers) {
                    h(s)
                }
                m(s, t);
                s.conn.send(q || null)
            }
            return s
        }

        function l() {
            var r;
            try {
                if (r = p(k.transactionId)) {
                    k.transactionId++
                }
            } catch (q) {
            } finally {
                return r
            }
        }

        function p(t) {
            var q;
            try {
                q = new XMLHttpRequest()
            } catch (s) {
                for (var r = 0; r < g.length; ++r) {
                    try {
                        q = new ActiveXObject(g[r]);
                        break
                    } catch (s) {
                    }
                }
            } finally {
                return {conn: q, tId: t}
            }
        }

        var k = {
            request: function (q, s, t, u, y) {
                if (y) {
                    var v = this, r = y.xmlData, w = y.jsonData, x;
                    Ext.applyIf(v, y);
                    if (r || w) {
                        x = v.headers;
                        if (!x || !x[d]) {
                            j(d, r ? "text/xml" : "application/json")
                        }
                        u = r || (Ext.isObject(w) ? Ext.encode(w) : w)
                    }
                }
                return i(q || y.method || "POST", s, t, u)
            },
            serializeForm: function (r) {
                var s = r.elements || (document.forms[r] || Ext.getDom(r)).elements, y = false, x = encodeURIComponent, v, z, q, t, u = "", w;
                Ext.each(s, function (A) {
                    q = A.name;
                    w = A.type;
                    if (!A.disabled && q) {
                        if (/select-(one|multiple)/i.test(w)) {
                            Ext.each(A.options, function (B) {
                                if (B.selected) {
                                    u += String.format("{0}={1}&", x(q), (B.hasAttribute ? B.hasAttribute("value") : B.getAttributeNode("value").specified) ? B.value : B.text)
                                }
                            })
                        } else {
                            if (!/file|undefined|reset|button/i.test(w)) {
                                if (!(/radio|checkbox/i.test(w) && !A.checked) && !(w == "submit" && y)) {
                                    u += x(q) + "=" + x(A.value) + "&";
                                    y = /submit/i.test(w)
                                }
                            }
                        }
                    }
                });
                return u.substr(0, u.length - 1)
            },
            useDefaultHeader: true,
            defaultPostHeader: "application/x-www-form-urlencoded; charset=UTF-8",
            useDefaultXhrHeader: true,
            defaultXhrHeader: "XMLHttpRequest",
            poll: {},
            timeout: {},
            pollInterval: 50,
            transactionId: 0,
            abort: function (t, v, q) {
                var s = this, u = t.tId, r = false;
                if (s.isCallInProgress(t)) {
                    t.conn.abort();
                    clearInterval(s.poll[u]);
                    s.poll[u] = null;
                    if (q) {
                        s.timeout[u] = null
                    }
                    f(t, v, (r = true), q)
                }
                return r
            },
            isCallInProgress: function (q) {
                return q.conn && !{0: true, 4: true}[q.conn.readyState]
            }
        };
        return k
    }();
    Ext.lib.Region = function (f, h, d, e) {
        var g = this;
        g.top = f;
        g[1] = f;
        g.right = h;
        g.bottom = d;
        g.left = e;
        g[0] = e
    };
    Ext.lib.Region.prototype = {
        contains: function (e) {
            var d = this;
            return (e.left >= d.left && e.right <= d.right && e.top >= d.top && e.bottom <= d.bottom)
        }, getArea: function () {
            var d = this;
            return ((d.bottom - d.top) * (d.right - d.left))
        }, intersect: function (i) {
            var h = this, f = Math.max(h.top, i.top), g = Math.min(h.right, i.right), d = Math.min(h.bottom, i.bottom), e = Math.max(h.left, i.left);
            if (d >= f && g >= e) {
                return new Ext.lib.Region(f, g, d, e)
            }
        }, union: function (i) {
            var h = this, f = Math.min(h.top, i.top), g = Math.max(h.right, i.right), d = Math.max(h.bottom, i.bottom), e = Math.min(h.left, i.left);
            return new Ext.lib.Region(f, g, d, e)
        }, constrainTo: function (e) {
            var d = this;
            d.top = d.top.constrain(e.top, e.bottom);
            d.bottom = d.bottom.constrain(e.top, e.bottom);
            d.left = d.left.constrain(e.left, e.right);
            d.right = d.right.constrain(e.left, e.right);
            return d
        }, adjust: function (f, e, d, h) {
            var g = this;
            g.top += f;
            g.left += e;
            g.right += h;
            g.bottom += d;
            return g
        }
    };
    Ext.lib.Region.getRegion = function (g) {
        var i = Ext.lib.Dom.getXY(g), f = i[1], h = i[0] + g.offsetWidth, d = i[1] + g.offsetHeight, e = i[0];
        return new Ext.lib.Region(f, h, d, e)
    };
    Ext.lib.Point = function (d, f) {
        if (Ext.isArray(d)) {
            f = d[1];
            d = d[0]
        }
        var e = this;
        e.x = e.right = e.left = e[0] = d;
        e.y = e.top = e.bottom = e[1] = f
    };
    Ext.lib.Point.prototype = new Ext.lib.Region();
    (function () {
        var g = Ext.lib, i = /width|height|opacity|padding/i, f = /^((width|height)|(top|left))$/, d = /width|height|top$|bottom$|left$|right$/i, h = /\d+(em|%|en|ex|pt|in|cm|mm|pc)$/i, j = function (k) {
            return typeof k !== "undefined"
        }, e = function () {
            return new Date()
        };
        g.Anim = {
            motion: function (n, l, o, p, k, m) {
                return this.run(n, l, o, p, k, m, Ext.lib.Motion)
            }, run: function (o, l, q, r, k, n, m) {
                m = m || Ext.lib.AnimBase;
                if (typeof r == "string") {
                    r = Ext.lib.Easing[r]
                }
                var p = new m(o, l, q, r);
                p.animateX(function () {
                    if (Ext.isFunction(k)) {
                        k.call(n)
                    }
                });
                return p
            }
        };
        g.AnimBase = function (l, k, m, n) {
            if (l) {
                this.init(l, k, m, n)
            }
        };
        g.AnimBase.prototype = {
            doMethod: function (k, n, l) {
                var m = this;
                return m.method(m.curFrame, n, l - n, m.totalFrames)
            }, setAttr: function (k, m, l) {
                if (i.test(k) && m < 0) {
                    m = 0
                }
                Ext.fly(this.el, "_anim").setStyle(k, m + l)
            }, getAttr: function (k) {
                var m = Ext.fly(this.el), n = m.getStyle(k), l = f.exec(k) || [];
                if (n !== "auto" && !h.test(n)) {
                    return parseFloat(n)
                }
                return (!!(l[2]) || (m.getStyle("position") == "absolute" && !!(l[3]))) ? m.dom["offset" + l[0].charAt(0).toUpperCase() + l[0].substr(1)] : 0
            }, getDefaultUnit: function (k) {
                return d.test(k) ? "px" : ""
            }, animateX: function (n, k) {
                var l = this, m = function () {
                    l.onComplete.removeListener(m);
                    if (Ext.isFunction(n)) {
                        n.call(k || l, l)
                    }
                };
                l.onComplete.addListener(m, l);
                l.animate()
            }, setRunAttr: function (n) {
                var p = this, q = this.attributes[n], r = q.to, o = q.by, s = q.from, t = q.unit, l = (this.runAttrs[n] = {}), m;
                if (!j(r) && !j(o)) {
                    return false
                }
                var k = j(s) ? s : p.getAttr(n);
                if (j(r)) {
                    m = r
                } else {
                    if (j(o)) {
                        if (Ext.isArray(k)) {
                            m = [];
                            Ext.each(k, function (u, w) {
                                m[w] = u + o[w]
                            })
                        } else {
                            m = k + o
                        }
                    }
                }
                Ext.apply(l, {start: k, end: m, unit: j(t) ? t : p.getDefaultUnit(n)})
            }, init: function (l, p, o, k) {
                var r = this, n = 0, s = g.AnimMgr;
                Ext.apply(r, {
                    isAnimated: false,
                    startTime: null,
                    el: Ext.getDom(l),
                    attributes: p || {},
                    duration: o || 1,
                    method: k || g.Easing.easeNone,
                    useSec: true,
                    curFrame: 0,
                    totalFrames: s.fps,
                    runAttrs: {},
                    animate: function () {
                        var u = this, v = u.duration;
                        if (u.isAnimated) {
                            return false
                        }
                        u.curFrame = 0;
                        u.totalFrames = u.useSec ? Math.ceil(s.fps * v) : v;
                        s.registerElement(u)
                    },
                    stop: function (u) {
                        var v = this;
                        if (u) {
                            v.curFrame = v.totalFrames;
                            v._onTween.fire()
                        }
                        s.stop(v)
                    }
                });
                var t = function () {
                    var v = this, u;
                    v.onStart.fire();
                    v.runAttrs = {};
                    for (u in this.attributes) {
                        this.setRunAttr(u)
                    }
                    v.isAnimated = true;
                    v.startTime = e();
                    n = 0
                };
                var q = function () {
                    var v = this;
                    v.onTween.fire({duration: e() - v.startTime, curFrame: v.curFrame});
                    var w = v.runAttrs;
                    for (var u in w) {
                        this.setAttr(u, v.doMethod(u, w[u].start, w[u].end), w[u].unit)
                    }
                    ++n
                };
                var m = function () {
                    var u = this, w = (e() - u.startTime) / 1000, v = {duration: w, frames: n, fps: n / w};
                    u.isAnimated = false;
                    n = 0;
                    u.onComplete.fire(v)
                };
                r.onStart = new Ext.util.Event(r);
                r.onTween = new Ext.util.Event(r);
                r.onComplete = new Ext.util.Event(r);
                (r._onStart = new Ext.util.Event(r)).addListener(t);
                (r._onTween = new Ext.util.Event(r)).addListener(q);
                (r._onComplete = new Ext.util.Event(r)).addListener(m)
            }
        };
        Ext.lib.AnimMgr = new function () {
            var o = this, m = null, l = [], k = 0;
            Ext.apply(o, {
                fps: 1000, delay: 1, registerElement: function (q) {
                    l.push(q);
                    ++k;
                    q._onStart.fire();
                    o.start()
                }, unRegister: function (r, q) {
                    r._onComplete.fire();
                    q = q || p(r);
                    if (q != -1) {
                        l.splice(q, 1)
                    }
                    if (--k <= 0) {
                        o.stop()
                    }
                }, start: function () {
                    if (m === null) {
                        m = setInterval(o.run, o.delay)
                    }
                }, stop: function (s) {
                    if (!s) {
                        clearInterval(m);
                        for (var r = 0, q = l.length; r < q; ++r) {
                            if (l[0].isAnimated) {
                                o.unRegister(l[0], 0)
                            }
                        }
                        l = [];
                        m = null;
                        k = 0
                    } else {
                        o.unRegister(s)
                    }
                }, run: function () {
                    var q;
                    Ext.each(l, function (r) {
                        if (r && r.isAnimated) {
                            q = r.totalFrames;
                            if (r.curFrame < q || q === null) {
                                ++r.curFrame;
                                if (r.useSec) {
                                    n(r)
                                }
                                r._onTween.fire()
                            } else {
                                o.stop(r)
                            }
                        }
                    }, o)
                }
            });
            var p = function (r) {
                var q = -1;
                Ext.each(l, function (t, s) {
                    if (t == r) {
                        q = s;
                        return false
                    }
                });
                return q
            };
            var n = function (r) {
                var v = r.totalFrames, u = r.curFrame, t = r.duration, s = (u * t * 1000 / v), q = (e() - r.startTime), w = 0;
                if (q < t * 1000) {
                    w = Math.round((q / s - 1) * u)
                } else {
                    w = v - (u + 1)
                }
                if (w > 0 && isFinite(w)) {
                    if (r.curFrame + w >= v) {
                        w = v - (u + 1)
                    }
                    r.curFrame += w
                }
            }
        };
        g.Bezier = new function () {
            this.getPosition = function (p, o) {
                var r = p.length, m = [], q = 1 - o, l, k;
                for (l = 0; l < r; ++l) {
                    m[l] = [p[l][0], p[l][1]]
                }
                for (k = 1; k < r; ++k) {
                    for (l = 0; l < r - k; ++l) {
                        m[l][0] = q * m[l][0] + o * m[parseInt(l + 1, 10)][0];
                        m[l][1] = q * m[l][1] + o * m[parseInt(l + 1, 10)][1]
                    }
                }
                return [m[0][0], m[0][1]]
            }
        };
        g.Easing = {
            easeNone: function (l, k, n, m) {
                return n * l / m + k
            }, easeIn: function (l, k, n, m) {
                return n * (l /= m) * l + k
            }, easeOut: function (l, k, n, m) {
                return -n * (l /= m) * (l - 2) + k
            }
        };
        (function () {
            g.Motion = function (p, o, q, r) {
                if (p) {
                    g.Motion.superclass.constructor.call(this, p, o, q, r)
                }
            };
            Ext.extend(g.Motion, Ext.lib.AnimBase);
            var n = g.Motion.superclass, m = g.Motion.prototype, l = /^points$/i;
            Ext.apply(g.Motion.prototype, {
                setAttr: function (o, s, r) {
                    var q = this, p = n.setAttr;
                    if (l.test(o)) {
                        r = r || "px";
                        p.call(q, "left", s[0], r);
                        p.call(q, "top", s[1], r)
                    } else {
                        p.call(q, o, s, r)
                    }
                }, getAttr: function (o) {
                    var q = this, p = n.getAttr;
                    return l.test(o) ? [p.call(q, "left"), p.call(q, "top")] : p.call(q, o)
                }, doMethod: function (o, r, p) {
                    var q = this;
                    return l.test(o) ? g.Bezier.getPosition(q.runAttrs[o], q.method(q.curFrame, 0, 100, q.totalFrames) / 100) : n.doMethod.call(q, o, r, p)
                }, setRunAttr: function (v) {
                    if (l.test(v)) {
                        var x = this, q = this.el, A = this.attributes.points, t = A.control || [], y = A.from, z = A.to, w = A.by, B = g.Dom, p, s, r, u, o;
                        if (t.length > 0 && !Ext.isArray(t[0])) {
                            t = [t]
                        } else {
                        }
                        Ext.fly(q, "_anim").position();
                        B.setXY(q, j(y) ? y : B.getXY(q));
                        p = x.getAttr("points");
                        if (j(z)) {
                            r = k.call(x, z, p);
                            for (s = 0, u = t.length; s < u; ++s) {
                                t[s] = k.call(x, t[s], p)
                            }
                        } else {
                            if (j(w)) {
                                r = [p[0] + w[0], p[1] + w[1]];
                                for (s = 0, u = t.length; s < u; ++s) {
                                    t[s] = [p[0] + t[s][0], p[1] + t[s][1]]
                                }
                            }
                        }
                        o = this.runAttrs[v] = [p];
                        if (t.length > 0) {
                            o = o.concat(t)
                        }
                        o[o.length] = r
                    } else {
                        n.setRunAttr.call(this, v)
                    }
                }
            });
            var k = function (o, q) {
                var p = g.Dom.getXY(this.el);
                return [o[0] - p[0] + q[0], o[1] - p[1] + q[1]]
            }
        })()
    })();
    (function () {
        var d = Math.abs, i = Math.PI, h = Math.asin, g = Math.pow, e = Math.sin, f = Ext.lib;
        Ext.apply(f.Easing, {
            easeBoth: function (k, j, m, l) {
                return ((k /= l / 2) < 1) ? m / 2 * k * k + j : -m / 2 * ((--k) * (k - 2) - 1) + j
            }, easeInStrong: function (k, j, m, l) {
                return m * (k /= l) * k * k * k + j
            }, easeOutStrong: function (k, j, m, l) {
                return -m * ((k = k / l - 1) * k * k * k - 1) + j
            }, easeBothStrong: function (k, j, m, l) {
                return ((k /= l / 2) < 1) ? m / 2 * k * k * k * k + j : -m / 2 * ((k -= 2) * k * k * k - 2) + j
            }, elasticIn: function (l, j, q, o, k, n) {
                if (l == 0 || (l /= o) == 1) {
                    return l == 0 ? j : j + q
                }
                n = n || (o * 0.3);
                var m;
                if (k >= d(q)) {
                    m = n / (2 * i) * h(q / k)
                } else {
                    k = q;
                    m = n / 4
                }
                return -(k * g(2, 10 * (l -= 1)) * e((l * o - m) * (2 * i) / n)) + j
            }, elasticOut: function (l, j, q, o, k, n) {
                if (l == 0 || (l /= o) == 1) {
                    return l == 0 ? j : j + q
                }
                n = n || (o * 0.3);
                var m;
                if (k >= d(q)) {
                    m = n / (2 * i) * h(q / k)
                } else {
                    k = q;
                    m = n / 4
                }
                return k * g(2, -10 * l) * e((l * o - m) * (2 * i) / n) + q + j
            }, elasticBoth: function (l, j, q, o, k, n) {
                if (l == 0 || (l /= o / 2) == 2) {
                    return l == 0 ? j : j + q
                }
                n = n || (o * (0.3 * 1.5));
                var m;
                if (k >= d(q)) {
                    m = n / (2 * i) * h(q / k)
                } else {
                    k = q;
                    m = n / 4
                }
                return l < 1 ? -0.5 * (k * g(2, 10 * (l -= 1)) * e((l * o - m) * (2 * i) / n)) + j : k * g(2, -10 * (l -= 1)) * e((l * o - m) * (2 * i) / n) * 0.5 + q + j
            }, backIn: function (k, j, n, m, l) {
                l = l || 1.70158;
                return n * (k /= m) * k * ((l + 1) * k - l) + j
            }, backOut: function (k, j, n, m, l) {
                if (!l) {
                    l = 1.70158
                }
                return n * ((k = k / m - 1) * k * ((l + 1) * k + l) + 1) + j
            }, backBoth: function (k, j, n, m, l) {
                l = l || 1.70158;
                return ((k /= m / 2) < 1) ? n / 2 * (k * k * (((l *= (1.525)) + 1) * k - l)) + j : n / 2 * ((k -= 2) * k * (((l *= (1.525)) + 1) * k + l) + 2) + j
            }, bounceIn: function (k, j, m, l) {
                return m - f.Easing.bounceOut(l - k, 0, m, l) + j
            }, bounceOut: function (k, j, m, l) {
                if ((k /= l) < (1 / 2.75)) {
                    return m * (7.5625 * k * k) + j
                } else {
                    if (k < (2 / 2.75)) {
                        return m * (7.5625 * (k -= (1.5 / 2.75)) * k + 0.75) + j
                    } else {
                        if (k < (2.5 / 2.75)) {
                            return m * (7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375) + j
                        }
                    }
                }
                return m * (7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375) + j
            }, bounceBoth: function (k, j, m, l) {
                return (k < l / 2) ? f.Easing.bounceIn(k * 2, 0, m, l) * 0.5 + j : f.Easing.bounceOut(k * 2 - l, 0, m, l) * 0.5 + m * 0.5 + j
            }
        })
    })();
    (function () {
        var h = Ext.lib;
        h.Anim.color = function (p, n, q, r, m, o) {
            return h.Anim.run(p, n, q, r, m, o, h.ColorAnim)
        };
        h.ColorAnim = function (n, m, o, p) {
            h.ColorAnim.superclass.constructor.call(this, n, m, o, p)
        };
        Ext.extend(h.ColorAnim, h.AnimBase);
        var j = h.ColorAnim.superclass, i = /color$/i, f = /^transparent|rgba\(0, 0, 0, 0\)$/, l = /^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i, d = /^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i, e = /^#?([0-9A-F]{1})([0-9A-F]{1})([0-9A-F]{1})$/i, g = function (m) {
            return typeof m !== "undefined"
        };

        function k(n) {
            var p = parseInt, o, m = null, q;
            if (n.length == 3) {
                return n
            }
            Ext.each([d, l, e], function (s, r) {
                o = (r % 2 == 0) ? 16 : 10;
                q = s.exec(n);
                if (q && q.length == 4) {
                    m = [p(q[1], o), p(q[2], o), p(q[3], o)];
                    return false
                }
            });
            return m
        }

        Ext.apply(h.ColorAnim.prototype, {
            getAttr: function (m) {
                var o = this, n = o.el, p;
                if (i.test(m)) {
                    while (n && f.test(p = Ext.fly(n).getStyle(m))) {
                        n = n.parentNode;
                        p = "fff"
                    }
                } else {
                    p = j.getAttr.call(o, m)
                }
                return p
            }, doMethod: function (m, r, n) {
                var p = this, q, o = Math.floor;
                if (i.test(m)) {
                    q = [];
                    Ext.each(r, function (s, t) {
                        q[t] = j.doMethod.call(p, m, s, n[t])
                    });
                    q = "rgb(" + o(q[0]) + "," + o(q[1]) + "," + o(q[2]) + ")"
                } else {
                    q = j.doMethod.call(p, m, r, n)
                }
                return q
            }, setRunAttr: function (m) {
                var p = this, o = p.attributes[m], t = o.to, q = o.by, r;
                j.setRunAttr.call(p, m);
                r = p.runAttrs[m];
                if (i.test(m)) {
                    var s = k(r.start), n = k(r.end);
                    if (!g(t) && g(q)) {
                        n = k(q);
                        Ext.each(s, function (v, u) {
                            n[u] = v + n[u]
                        })
                    }
                    r.start = s;
                    r.end = n
                }
            }
        })
    })();
    (function () {
        var d = Ext.lib;
        d.Anim.scroll = function (j, h, k, l, g, i) {
            return d.Anim.run(j, h, k, l, g, i, d.Scroll)
        };
        d.Scroll = function (h, g, i, j) {
            if (h) {
                d.Scroll.superclass.constructor.call(this, h, g, i, j)
            }
        };
        Ext.extend(d.Scroll, d.ColorAnim);
        var f = d.Scroll.superclass, e = "scroll";
        Ext.apply(d.Scroll.prototype, {
            doMethod: function (g, m, h) {
                var k, j = this, l = j.curFrame, i = j.totalFrames;
                if (g == e) {
                    k = [j.method(l, m[0], h[0] - m[0], i), j.method(l, m[1], h[1] - m[1], i)]
                } else {
                    k = f.doMethod.call(j, g, m, h)
                }
                return k
            }, getAttr: function (g) {
                var h = this;
                if (g == e) {
                    return [h.el.scrollLeft, h.el.scrollTop]
                } else {
                    return f.getAttr.call(h, g)
                }
            }, setAttr: function (g, j, i) {
                var h = this;
                if (g == e) {
                    h.el.scrollLeft = j[0];
                    h.el.scrollTop = j[1]
                } else {
                    f.setAttr.call(h, g, j, i)
                }
            }
        })
    })();
    if (Ext.isIE) {
        function a() {
            var d = Function.prototype;
            delete d.createSequence;
            delete d.defer;
            delete d.createDelegate;
            delete d.createCallback;
            delete d.createInterceptor;
            window.detachEvent("onunload", a)
        }

        window.attachEvent("onunload", a)
    }
})();