

(() => {
  var om = Object.create;
  var Fr = Object.defineProperty;
  var am = Object.getOwnPropertyDescriptor;
  var sm = Object.getOwnPropertyNames;
  var um = Object.getPrototypeOf,
    cm = Object.prototype.hasOwnProperty;
  var me = (e, t) => () => (e && (t = e((e = 0))), t);
  var g = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    De = (e, t) => {
      for (var r in t) Fr(e, r, { get: t[r], enumerable: !0 });
    },
    ya = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of sm(t))
          !cm.call(e, i) &&
            i !== r &&
            Fr(e, i, {
              get: () => t[i],
              enumerable: !(n = am(t, i)) || n.enumerable,
            });
      return e;
    };
  var de = (e, t, r) => (
      (r = e != null ? om(um(e)) : {}),
      ya(
        t || !e || !e.__esModule
          ? Fr(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    Qe = (e) => ya(Fr({}, "__esModule", { value: !0 }), e);
  var Zn = g(() => {
    "use strict";
    window.tram = (function (e) {
      function t(d, x) {
        var R = new p.Bare();
        return R.init(d, x);
      }
      function r(d) {
        return d.replace(/[A-Z]/g, function (x) {
          return "-" + x.toLowerCase();
        });
      }
      function n(d) {
        var x = parseInt(d.slice(1), 16),
          R = (x >> 16) & 255,
          M = (x >> 8) & 255,
          S = 255 & x;
        return [R, M, S];
      }
      function i(d, x, R) {
        return (
          "#" + ((1 << 24) | (d << 16) | (x << 8) | R).toString(16).slice(1)
        );
      }
      function o() {}
      function a(d, x) {
        l("Type warning: Expected: [" + d + "] Got: [" + typeof x + "] " + x);
      }
      function u(d, x, R) {
        l("Units do not match [" + d + "]: " + x + ", " + R);
      }
      function s(d, x, R) {
        if ((x !== void 0 && (R = x), d === void 0)) return R;
        var M = R;
        return (
          Ie.test(d) || !Ae.test(d)
            ? (M = parseInt(d, 10))
            : Ae.test(d) && (M = 1e3 * parseFloat(d)),
          0 > M && (M = 0),
          M === M ? M : R
        );
      }
      function l(d) {
        ie.debug && window && window.console.warn(d);
      }
      function b(d) {
        for (var x = -1, R = d ? d.length : 0, M = []; ++x < R; ) {
          var S = d[x];
          S && M.push(S);
        }
        return M;
      }
      var f = (function (d, x, R) {
          function M(ae) {
            return typeof ae == "object";
          }
          function S(ae) {
            return typeof ae == "function";
          }
          function X() {}
          function ne(ae, he) {
            function Z() {
              var Re = new ue();
              return S(Re.init) && Re.init.apply(Re, arguments), Re;
            }
            function ue() {}
            he === R && ((he = ae), (ae = Object)), (Z.Bare = ue);
            var ce,
              _e = (X[d] = ae[d]),
              Ye = (ue[d] = Z[d] = new X());
            return (
              (Ye.constructor = Z),
              (Z.mixin = function (Re) {
                return (ue[d] = Z[d] = ne(Z, Re)[d]), Z;
              }),
              (Z.open = function (Re) {
                if (
                  ((ce = {}),
                  S(Re) ? (ce = Re.call(Z, Ye, _e, Z, ae)) : M(Re) && (ce = Re),
                  M(ce))
                )
                  for (var ir in ce) x.call(ce, ir) && (Ye[ir] = ce[ir]);
                return S(Ye.init) || (Ye.init = ae), Z;
              }),
              Z.open(he)
            );
          }
          return ne;
        })("prototype", {}.hasOwnProperty),
        E = {
          ease: [
            "ease",
            function (d, x, R, M) {
              var S = (d /= M) * d,
                X = S * d;
              return (
                x +
                R * (-2.75 * X * S + 11 * S * S + -15.5 * X + 8 * S + 0.25 * d)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (d, x, R, M) {
              var S = (d /= M) * d,
                X = S * d;
              return x + R * (-1 * X * S + 3 * S * S + -3 * X + 2 * S);
            },
          ],
          "ease-out": [
            "ease-out",
            function (d, x, R, M) {
              var S = (d /= M) * d,
                X = S * d;
              return (
                x +
                R * (0.3 * X * S + -1.6 * S * S + 2.2 * X + -1.8 * S + 1.9 * d)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (d, x, R, M) {
              var S = (d /= M) * d,
                X = S * d;
              return x + R * (2 * X * S + -5 * S * S + 2 * X + 2 * S);
            },
          ],
          linear: [
            "linear",
            function (d, x, R, M) {
              return (R * d) / M + x;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (d, x, R, M) {
              return R * (d /= M) * d + x;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (d, x, R, M) {
              return -R * (d /= M) * (d - 2) + x;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (d, x, R, M) {
              return (d /= M / 2) < 1
                ? (R / 2) * d * d + x
                : (-R / 2) * (--d * (d - 2) - 1) + x;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (d, x, R, M) {
              return R * (d /= M) * d * d + x;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (d, x, R, M) {
              return R * ((d = d / M - 1) * d * d + 1) + x;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (d, x, R, M) {
              return (d /= M / 2) < 1
                ? (R / 2) * d * d * d + x
                : (R / 2) * ((d -= 2) * d * d + 2) + x;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (d, x, R, M) {
              return R * (d /= M) * d * d * d + x;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (d, x, R, M) {
              return -R * ((d = d / M - 1) * d * d * d - 1) + x;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (d, x, R, M) {
              return (d /= M / 2) < 1
                ? (R / 2) * d * d * d * d + x
                : (-R / 2) * ((d -= 2) * d * d * d - 2) + x;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (d, x, R, M) {
              return R * (d /= M) * d * d * d * d + x;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (d, x, R, M) {
              return R * ((d = d / M - 1) * d * d * d * d + 1) + x;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (d, x, R, M) {
              return (d /= M / 2) < 1
                ? (R / 2) * d * d * d * d * d + x
                : (R / 2) * ((d -= 2) * d * d * d * d + 2) + x;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (d, x, R, M) {
              return -R * Math.cos((d / M) * (Math.PI / 2)) + R + x;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (d, x, R, M) {
              return R * Math.sin((d / M) * (Math.PI / 2)) + x;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (d, x, R, M) {
              return (-R / 2) * (Math.cos((Math.PI * d) / M) - 1) + x;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (d, x, R, M) {
              return d === 0 ? x : R * Math.pow(2, 10 * (d / M - 1)) + x;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (d, x, R, M) {
              return d === M
                ? x + R
                : R * (-Math.pow(2, (-10 * d) / M) + 1) + x;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (d, x, R, M) {
              return d === 0
                ? x
                : d === M
                ? x + R
                : (d /= M / 2) < 1
                ? (R / 2) * Math.pow(2, 10 * (d - 1)) + x
                : (R / 2) * (-Math.pow(2, -10 * --d) + 2) + x;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (d, x, R, M) {
              return -R * (Math.sqrt(1 - (d /= M) * d) - 1) + x;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (d, x, R, M) {
              return R * Math.sqrt(1 - (d = d / M - 1) * d) + x;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (d, x, R, M) {
              return (d /= M / 2) < 1
                ? (-R / 2) * (Math.sqrt(1 - d * d) - 1) + x
                : (R / 2) * (Math.sqrt(1 - (d -= 2) * d) + 1) + x;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (d, x, R, M, S) {
              return (
                S === void 0 && (S = 1.70158),
                R * (d /= M) * d * ((S + 1) * d - S) + x
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (d, x, R, M, S) {
              return (
                S === void 0 && (S = 1.70158),
                R * ((d = d / M - 1) * d * ((S + 1) * d + S) + 1) + x
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (d, x, R, M, S) {
              return (
                S === void 0 && (S = 1.70158),
                (d /= M / 2) < 1
                  ? (R / 2) * d * d * (((S *= 1.525) + 1) * d - S) + x
                  : (R / 2) *
                      ((d -= 2) * d * (((S *= 1.525) + 1) * d + S) + 2) +
                    x
              );
            },
          ],
        },
        m = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        y = document,
        T = window,
        A = "bkwld-tram",
        w = /[\-\.0-9]/g,
        N = /[A-Z]/,
        L = "number",
        F = /^(rgb|#)/,
        k = /(em|cm|mm|in|pt|pc|px)$/,
        q = /(em|cm|mm|in|pt|pc|px|%)$/,
        j = /(deg|rad|turn)$/,
        K = "unitless",
        Q = /(all|none) 0s ease 0s/,
        te = /^(width|height)$/,
        z = " ",
        C = y.createElement("a"),
        I = ["Webkit", "Moz", "O", "ms"],
        P = ["-webkit-", "-moz-", "-o-", "-ms-"],
        G = function (d) {
          if (d in C.style) return { dom: d, css: d };
          var x,
            R,
            M = "",
            S = d.split("-");
          for (x = 0; x < S.length; x++)
            M += S[x].charAt(0).toUpperCase() + S[x].slice(1);
          for (x = 0; x < I.length; x++)
            if (((R = I[x] + M), R in C.style))
              return { dom: R, css: P[x] + d };
        },
        V = (t.support = {
          bind: Function.prototype.bind,
          transform: G("transform"),
          transition: G("transition"),
          backface: G("backface-visibility"),
          timing: G("transition-timing-function"),
        });
      if (V.transition) {
        var ee = V.timing.dom;
        if (((C.style[ee] = E["ease-in-back"][0]), !C.style[ee]))
          for (var re in m) E[re][0] = m[re];
      }
      var W = (t.frame = (function () {
          var d =
            T.requestAnimationFrame ||
            T.webkitRequestAnimationFrame ||
            T.mozRequestAnimationFrame ||
            T.oRequestAnimationFrame ||
            T.msRequestAnimationFrame;
          return d && V.bind
            ? d.bind(T)
            : function (x) {
                T.setTimeout(x, 16);
              };
        })()),
        H = (t.now = (function () {
          var d = T.performance,
            x = d && (d.now || d.webkitNow || d.msNow || d.mozNow);
          return x && V.bind
            ? x.bind(d)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        h = f(function (d) {
          function x(oe, fe) {
            var Ee = b(("" + oe).split(z)),
              pe = Ee[0];
            fe = fe || {};
            var Ce = Y[pe];
            if (!Ce) return l("Unsupported property: " + pe);
            if (!fe.weak || !this.props[pe]) {
              var Ue = Ce[0],
                Ne = this.props[pe];
              return (
                Ne || (Ne = this.props[pe] = new Ue.Bare()),
                Ne.init(this.$el, Ee, Ce, fe),
                Ne
              );
            }
          }
          function R(oe, fe, Ee) {
            if (oe) {
              var pe = typeof oe;
              if (
                (fe ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                pe == "number" && fe)
              )
                return (
                  (this.timer = new $({
                    duration: oe,
                    context: this,
                    complete: X,
                  })),
                  void (this.active = !0)
                );
              if (pe == "string" && fe) {
                switch (oe) {
                  case "hide":
                    Z.call(this);
                    break;
                  case "stop":
                    ne.call(this);
                    break;
                  case "redraw":
                    ue.call(this);
                    break;
                  default:
                    x.call(this, oe, Ee && Ee[1]);
                }
                return X.call(this);
              }
              if (pe == "function") return void oe.call(this, this);
              if (pe == "object") {
                var Ce = 0;
                Ye.call(
                  this,
                  oe,
                  function (be, im) {
                    be.span > Ce && (Ce = be.span), be.stop(), be.animate(im);
                  },
                  function (be) {
                    "wait" in be && (Ce = s(be.wait, 0));
                  }
                ),
                  _e.call(this),
                  Ce > 0 &&
                    ((this.timer = new $({ duration: Ce, context: this })),
                    (this.active = !0),
                    fe && (this.timer.complete = X));
                var Ue = this,
                  Ne = !1,
                  Mr = {};
                W(function () {
                  Ye.call(Ue, oe, function (be) {
                    be.active && ((Ne = !0), (Mr[be.name] = be.nextStyle));
                  }),
                    Ne && Ue.$el.css(Mr);
                });
              }
            }
          }
          function M(oe) {
            (oe = s(oe, 0)),
              this.active
                ? this.queue.push({ options: oe })
                : ((this.timer = new $({
                    duration: oe,
                    context: this,
                    complete: X,
                  })),
                  (this.active = !0));
          }
          function S(oe) {
            return this.active
              ? (this.queue.push({ options: oe, args: arguments }),
                void (this.timer.complete = X))
              : l(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function X() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var oe = this.queue.shift();
              R.call(this, oe.options, !0, oe.args);
            }
          }
          function ne(oe) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var fe;
            typeof oe == "string"
              ? ((fe = {}), (fe[oe] = 1))
              : (fe = typeof oe == "object" && oe != null ? oe : this.props),
              Ye.call(this, fe, Re),
              _e.call(this);
          }
          function ae(oe) {
            ne.call(this, oe), Ye.call(this, oe, ir, rm);
          }
          function he(oe) {
            typeof oe != "string" && (oe = "block"),
              (this.el.style.display = oe);
          }
          function Z() {
            ne.call(this), (this.el.style.display = "none");
          }
          function ue() {
            this.el.offsetHeight;
          }
          function ce() {
            ne.call(this),
              e.removeData(this.el, A),
              (this.$el = this.el = null);
          }
          function _e() {
            var oe,
              fe,
              Ee = [];
            this.upstream && Ee.push(this.upstream);
            for (oe in this.props)
              (fe = this.props[oe]), fe.active && Ee.push(fe.string);
            (Ee = Ee.join(",")),
              this.style !== Ee &&
                ((this.style = Ee), (this.el.style[V.transition.dom] = Ee));
          }
          function Ye(oe, fe, Ee) {
            var pe,
              Ce,
              Ue,
              Ne,
              Mr = fe !== Re,
              be = {};
            for (pe in oe)
              (Ue = oe[pe]),
                pe in le
                  ? (be.transform || (be.transform = {}),
                    (be.transform[pe] = Ue))
                  : (N.test(pe) && (pe = r(pe)),
                    pe in Y ? (be[pe] = Ue) : (Ne || (Ne = {}), (Ne[pe] = Ue)));
            for (pe in be) {
              if (((Ue = be[pe]), (Ce = this.props[pe]), !Ce)) {
                if (!Mr) continue;
                Ce = x.call(this, pe);
              }
              fe.call(this, Ce, Ue);
            }
            Ee && Ne && Ee.call(this, Ne);
          }
          function Re(oe) {
            oe.stop();
          }
          function ir(oe, fe) {
            oe.set(fe);
          }
          function rm(oe) {
            this.$el.css(oe);
          }
          function Ge(oe, fe) {
            d[oe] = function () {
              return this.children
                ? nm.call(this, fe, arguments)
                : (this.el && fe.apply(this, arguments), this);
            };
          }
          function nm(oe, fe) {
            var Ee,
              pe = this.children.length;
            for (Ee = 0; pe > Ee; Ee++) oe.apply(this.children[Ee], fe);
            return this;
          }
          (d.init = function (oe) {
            if (
              ((this.$el = e(oe)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ie.keepInherited && !ie.fallback)
            ) {
              var fe = B(this.el, "transition");
              fe && !Q.test(fe) && (this.upstream = fe);
            }
            V.backface &&
              ie.hideBackface &&
              _(this.el, V.backface.css, "hidden");
          }),
            Ge("add", x),
            Ge("start", R),
            Ge("wait", M),
            Ge("then", S),
            Ge("next", X),
            Ge("stop", ne),
            Ge("set", ae),
            Ge("show", he),
            Ge("hide", Z),
            Ge("redraw", ue),
            Ge("destroy", ce);
        }),
        p = f(h, function (d) {
          function x(R, M) {
            var S = e.data(R, A) || e.data(R, A, new h.Bare());
            return S.el || S.init(R), M ? S.start(M) : S;
          }
          d.init = function (R, M) {
            var S = e(R);
            if (!S.length) return this;
            if (S.length === 1) return x(S[0], M);
            var X = [];
            return (
              S.each(function (ne, ae) {
                X.push(x(ae, M));
              }),
              (this.children = X),
              this
            );
          };
        }),
        v = f(function (d) {
          function x() {
            var X = this.get();
            this.update("auto");
            var ne = this.get();
            return this.update(X), ne;
          }
          function R(X, ne, ae) {
            return ne !== void 0 && (ae = ne), X in E ? X : ae;
          }
          function M(X) {
            var ne = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(X);
            return (ne ? i(ne[1], ne[2], ne[3]) : X).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var S = { duration: 500, ease: "ease", delay: 0 };
          (d.init = function (X, ne, ae, he) {
            (this.$el = X), (this.el = X[0]);
            var Z = ne[0];
            ae[2] && (Z = ae[2]),
              J[Z] && (Z = J[Z]),
              (this.name = Z),
              (this.type = ae[1]),
              (this.duration = s(ne[1], this.duration, S.duration)),
              (this.ease = R(ne[2], this.ease, S.ease)),
              (this.delay = s(ne[3], this.delay, S.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = te.test(this.name)),
              (this.unit = he.unit || this.unit || ie.defaultUnit),
              (this.angle = he.angle || this.angle || ie.defaultAngle),
              ie.fallback || he.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    z +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? z + E[this.ease][0] : "") +
                    (this.delay ? z + this.delay + "ms" : "")));
          }),
            (d.set = function (X) {
              (X = this.convert(X, this.type)), this.update(X), this.redraw();
            }),
            (d.transition = function (X) {
              (this.active = !0),
                (X = this.convert(X, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  X == "auto" && (X = x.call(this))),
                (this.nextStyle = X);
            }),
            (d.fallback = function (X) {
              var ne =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (X = this.convert(X, this.type)),
                this.auto &&
                  (ne == "auto" && (ne = this.convert(this.get(), this.type)),
                  X == "auto" && (X = x.call(this))),
                (this.tween = new O({
                  from: ne,
                  to: X,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (d.get = function () {
              return B(this.el, this.name);
            }),
            (d.update = function (X) {
              _(this.el, this.name, X);
            }),
            (d.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                _(this.el, this.name, this.get()));
              var X = this.tween;
              X && X.context && X.destroy();
            }),
            (d.convert = function (X, ne) {
              if (X == "auto" && this.auto) return X;
              var ae,
                he = typeof X == "number",
                Z = typeof X == "string";
              switch (ne) {
                case L:
                  if (he) return X;
                  if (Z && X.replace(w, "") === "") return +X;
                  ae = "number(unitless)";
                  break;
                case F:
                  if (Z) {
                    if (X === "" && this.original) return this.original;
                    if (ne.test(X))
                      return X.charAt(0) == "#" && X.length == 7 ? X : M(X);
                  }
                  ae = "hex or rgb string";
                  break;
                case k:
                  if (he) return X + this.unit;
                  if (Z && ne.test(X)) return X;
                  ae = "number(px) or string(unit)";
                  break;
                case q:
                  if (he) return X + this.unit;
                  if (Z && ne.test(X)) return X;
                  ae = "number(px) or string(unit or %)";
                  break;
                case j:
                  if (he) return X + this.angle;
                  if (Z && ne.test(X)) return X;
                  ae = "number(deg) or string(angle)";
                  break;
                case K:
                  if (he || (Z && q.test(X))) return X;
                  ae = "number(unitless) or string(unit or %)";
              }
              return a(ae, X), X;
            }),
            (d.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        c = f(v, function (d, x) {
          d.init = function () {
            x.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), F));
          };
        }),
        D = f(v, function (d, x) {
          (d.init = function () {
            x.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (d.get = function () {
              return this.$el[this.name]();
            }),
            (d.update = function (R) {
              this.$el[this.name](R);
            });
        }),
        U = f(v, function (d, x) {
          function R(M, S) {
            var X, ne, ae, he, Z;
            for (X in M)
              (he = le[X]),
                (ae = he[0]),
                (ne = he[1] || X),
                (Z = this.convert(M[X], ae)),
                S.call(this, ne, Z, ae);
          }
          (d.init = function () {
            x.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                le.perspective &&
                  ie.perspective &&
                  ((this.current.perspective = ie.perspective),
                  _(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (d.set = function (M) {
              R.call(this, M, function (S, X) {
                this.current[S] = X;
              }),
                _(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (d.transition = function (M) {
              var S = this.values(M);
              this.tween = new se({
                current: this.current,
                values: S,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var X,
                ne = {};
              for (X in this.current) ne[X] = X in S ? S[X] : this.current[X];
              (this.active = !0), (this.nextStyle = this.style(ne));
            }),
            (d.fallback = function (M) {
              var S = this.values(M);
              this.tween = new se({
                current: this.current,
                values: S,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (d.update = function () {
              _(this.el, this.name, this.style(this.current));
            }),
            (d.style = function (M) {
              var S,
                X = "";
              for (S in M) X += S + "(" + M[S] + ") ";
              return X;
            }),
            (d.values = function (M) {
              var S,
                X = {};
              return (
                R.call(this, M, function (ne, ae, he) {
                  (X[ne] = ae),
                    this.current[ne] === void 0 &&
                      ((S = 0),
                      ~ne.indexOf("scale") && (S = 1),
                      (this.current[ne] = this.convert(S, he)));
                }),
                X
              );
            });
        }),
        O = f(function (d) {
          function x(Z) {
            ae.push(Z) === 1 && W(R);
          }
          function R() {
            var Z,
              ue,
              ce,
              _e = ae.length;
            if (_e)
              for (W(R), ue = H(), Z = _e; Z--; )
                (ce = ae[Z]), ce && ce.render(ue);
          }
          function M(Z) {
            var ue,
              ce = e.inArray(Z, ae);
            ce >= 0 &&
              ((ue = ae.slice(ce + 1)),
              (ae.length = ce),
              ue.length && (ae = ae.concat(ue)));
          }
          function S(Z) {
            return Math.round(Z * he) / he;
          }
          function X(Z, ue, ce) {
            return i(
              Z[0] + ce * (ue[0] - Z[0]),
              Z[1] + ce * (ue[1] - Z[1]),
              Z[2] + ce * (ue[2] - Z[2])
            );
          }
          var ne = { ease: E.ease[1], from: 0, to: 1 };
          (d.init = function (Z) {
            (this.duration = Z.duration || 0), (this.delay = Z.delay || 0);
            var ue = Z.ease || ne.ease;
            E[ue] && (ue = E[ue][1]),
              typeof ue != "function" && (ue = ne.ease),
              (this.ease = ue),
              (this.update = Z.update || o),
              (this.complete = Z.complete || o),
              (this.context = Z.context || this),
              (this.name = Z.name);
            var ce = Z.from,
              _e = Z.to;
            ce === void 0 && (ce = ne.from),
              _e === void 0 && (_e = ne.to),
              (this.unit = Z.unit || ""),
              typeof ce == "number" && typeof _e == "number"
                ? ((this.begin = ce), (this.change = _e - ce))
                : this.format(_e, ce),
              (this.value = this.begin + this.unit),
              (this.start = H()),
              Z.autoplay !== !1 && this.play();
          }),
            (d.play = function () {
              this.active ||
                (this.start || (this.start = H()), (this.active = !0), x(this));
            }),
            (d.stop = function () {
              this.active && ((this.active = !1), M(this));
            }),
            (d.render = function (Z) {
              var ue,
                ce = Z - this.start;
              if (this.delay) {
                if (ce <= this.delay) return;
                ce -= this.delay;
              }
              if (ce < this.duration) {
                var _e = this.ease(ce, 0, 1, this.duration);
                return (
                  (ue = this.startRGB
                    ? X(this.startRGB, this.endRGB, _e)
                    : S(this.begin + _e * this.change)),
                  (this.value = ue + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ue = this.endHex || this.begin + this.change),
                (this.value = ue + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (d.format = function (Z, ue) {
              if (((ue += ""), (Z += ""), Z.charAt(0) == "#"))
                return (
                  (this.startRGB = n(ue)),
                  (this.endRGB = n(Z)),
                  (this.endHex = Z),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ce = ue.replace(w, ""),
                  _e = Z.replace(w, "");
                ce !== _e && u("tween", ue, Z), (this.unit = ce);
              }
              (ue = parseFloat(ue)),
                (Z = parseFloat(Z)),
                (this.begin = this.value = ue),
                (this.change = Z - ue);
            }),
            (d.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ae = [],
            he = 1e3;
        }),
        $ = f(O, function (d) {
          (d.init = function (x) {
            (this.duration = x.duration || 0),
              (this.complete = x.complete || o),
              (this.context = x.context),
              this.play();
          }),
            (d.render = function (x) {
              var R = x - this.start;
              R < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        se = f(O, function (d, x) {
          (d.init = function (R) {
            (this.context = R.context),
              (this.update = R.update),
              (this.tweens = []),
              (this.current = R.current);
            var M, S;
            for (M in R.values)
              (S = R.values[M]),
                this.current[M] !== S &&
                  this.tweens.push(
                    new O({
                      name: M,
                      from: this.current[M],
                      to: S,
                      duration: R.duration,
                      delay: R.delay,
                      ease: R.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (d.render = function (R) {
              var M,
                S,
                X = this.tweens.length,
                ne = !1;
              for (M = X; M--; )
                (S = this.tweens[M]),
                  S.context &&
                    (S.render(R), (this.current[S.name] = S.value), (ne = !0));
              return ne
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (d.destroy = function () {
              if ((x.destroy.call(this), this.tweens)) {
                var R,
                  M = this.tweens.length;
                for (R = M; R--; ) this.tweens[R].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ie = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !V.transition,
          agentTests: [],
        });
      (t.fallback = function (d) {
        if (!V.transition) return (ie.fallback = !0);
        ie.agentTests.push("(" + d + ")");
        var x = new RegExp(ie.agentTests.join("|"), "i");
        ie.fallback = x.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (d) {
          return new O(d);
        }),
        (t.delay = function (d, x, R) {
          return new $({ complete: x, duration: d, context: R });
        }),
        (e.fn.tram = function (d) {
          return t.call(null, this, d);
        });
      var _ = e.style,
        B = e.css,
        J = { transform: V.transform && V.transform.css },
        Y = {
          color: [c, F],
          background: [c, F, "background-color"],
          "outline-color": [c, F],
          "border-color": [c, F],
          "border-top-color": [c, F],
          "border-right-color": [c, F],
          "border-bottom-color": [c, F],
          "border-left-color": [c, F],
          "border-width": [v, k],
          "border-top-width": [v, k],
          "border-right-width": [v, k],
          "border-bottom-width": [v, k],
          "border-left-width": [v, k],
          "border-spacing": [v, k],
          "letter-spacing": [v, k],
          margin: [v, k],
          "margin-top": [v, k],
          "margin-right": [v, k],
          "margin-bottom": [v, k],
          "margin-left": [v, k],
          padding: [v, k],
          "padding-top": [v, k],
          "padding-right": [v, k],
          "padding-bottom": [v, k],
          "padding-left": [v, k],
          "outline-width": [v, k],
          opacity: [v, L],
          top: [v, q],
          right: [v, q],
          bottom: [v, q],
          left: [v, q],
          "font-size": [v, q],
          "text-indent": [v, q],
          "word-spacing": [v, q],
          width: [v, q],
          "min-width": [v, q],
          "max-width": [v, q],
          height: [v, q],
          "min-height": [v, q],
          "max-height": [v, q],
          "line-height": [v, K],
          "scroll-top": [D, L, "scrollTop"],
          "scroll-left": [D, L, "scrollLeft"],
        },
        le = {};
      V.transform &&
        ((Y.transform = [U]),
        (le = {
          x: [q, "translateX"],
          y: [q, "translateY"],
          rotate: [j],
          rotateX: [j],
          rotateY: [j],
          scale: [L],
          scaleX: [L],
          scaleY: [L],
          skew: [j],
          skewX: [j],
          skewY: [j],
        })),
        V.transform &&
          V.backface &&
          ((le.z = [q, "translateZ"]),
          (le.rotateZ = [j]),
          (le.scaleZ = [L]),
          (le.perspective = [k]));
      var Ie = /ms/,
        Ae = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var ba = g(($F, _a) => {
    "use strict";
    var lm = window.$,
      fm = Zn() && lm.tram;
    _a.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        u = r.concat,
        s = n.toString,
        l = n.hasOwnProperty,
        b = r.forEach,
        f = r.map,
        E = r.reduce,
        m = r.reduceRight,
        y = r.filter,
        T = r.every,
        A = r.some,
        w = r.indexOf,
        N = r.lastIndexOf,
        L = Array.isArray,
        F = Object.keys,
        k = i.bind,
        q =
          (e.each =
          e.forEach =
            function (I, P, G) {
              if (I == null) return I;
              if (b && I.forEach === b) I.forEach(P, G);
              else if (I.length === +I.length) {
                for (var V = 0, ee = I.length; V < ee; V++)
                  if (P.call(G, I[V], V, I) === t) return;
              } else
                for (var re = e.keys(I), V = 0, ee = re.length; V < ee; V++)
                  if (P.call(G, I[re[V]], re[V], I) === t) return;
              return I;
            });
      (e.map = e.collect =
        function (I, P, G) {
          var V = [];
          return I == null
            ? V
            : f && I.map === f
            ? I.map(P, G)
            : (q(I, function (ee, re, W) {
                V.push(P.call(G, ee, re, W));
              }),
              V);
        }),
        (e.find = e.detect =
          function (I, P, G) {
            var V;
            return (
              j(I, function (ee, re, W) {
                if (P.call(G, ee, re, W)) return (V = ee), !0;
              }),
              V
            );
          }),
        (e.filter = e.select =
          function (I, P, G) {
            var V = [];
            return I == null
              ? V
              : y && I.filter === y
              ? I.filter(P, G)
              : (q(I, function (ee, re, W) {
                  P.call(G, ee, re, W) && V.push(ee);
                }),
                V);
          });
      var j =
        (e.some =
        e.any =
          function (I, P, G) {
            P || (P = e.identity);
            var V = !1;
            return I == null
              ? V
              : A && I.some === A
              ? I.some(P, G)
              : (q(I, function (ee, re, W) {
                  if (V || (V = P.call(G, ee, re, W))) return t;
                }),
                !!V);
          });
      (e.contains = e.include =
        function (I, P) {
          return I == null
            ? !1
            : w && I.indexOf === w
            ? I.indexOf(P) != -1
            : j(I, function (G) {
                return G === P;
              });
        }),
        (e.delay = function (I, P) {
          var G = a.call(arguments, 2);
          return setTimeout(function () {
            return I.apply(null, G);
          }, P);
        }),
        (e.defer = function (I) {
          return e.delay.apply(e, [I, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (I) {
          var P, G, V;
          return function () {
            P ||
              ((P = !0),
              (G = arguments),
              (V = this),
              fm.frame(function () {
                (P = !1), I.apply(V, G);
              }));
          };
        }),
        (e.debounce = function (I, P, G) {
          var V,
            ee,
            re,
            W,
            H,
            h = function () {
              var p = e.now() - W;
              p < P
                ? (V = setTimeout(h, P - p))
                : ((V = null), G || ((H = I.apply(re, ee)), (re = ee = null)));
            };
          return function () {
            (re = this), (ee = arguments), (W = e.now());
            var p = G && !V;
            return (
              V || (V = setTimeout(h, P)),
              p && ((H = I.apply(re, ee)), (re = ee = null)),
              H
            );
          };
        }),
        (e.defaults = function (I) {
          if (!e.isObject(I)) return I;
          for (var P = 1, G = arguments.length; P < G; P++) {
            var V = arguments[P];
            for (var ee in V) I[ee] === void 0 && (I[ee] = V[ee]);
          }
          return I;
        }),
        (e.keys = function (I) {
          if (!e.isObject(I)) return [];
          if (F) return F(I);
          var P = [];
          for (var G in I) e.has(I, G) && P.push(G);
          return P;
        }),
        (e.has = function (I, P) {
          return l.call(I, P);
        }),
        (e.isObject = function (I) {
          return I === Object(I);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var K = /(.)^/,
        Q = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        te = /\\|'|\r|\n|\u2028|\u2029/g,
        z = function (I) {
          return "\\" + Q[I];
        },
        C = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (I, P, G) {
          !P && G && (P = G), (P = e.defaults({}, P, e.templateSettings));
          var V = RegExp(
              [
                (P.escape || K).source,
                (P.interpolate || K).source,
                (P.evaluate || K).source,
              ].join("|") + "|$",
              "g"
            ),
            ee = 0,
            re = "__p+='";
          I.replace(V, function (p, v, c, D, U) {
            return (
              (re += I.slice(ee, U).replace(te, z)),
              (ee = U + p.length),
              v
                ? (re +=
                    `'+
((__t=(` +
                    v +
                    `))==null?'':_.escape(__t))+
'`)
                : c
                ? (re +=
                    `'+
((__t=(` +
                    c +
                    `))==null?'':__t)+
'`)
                : D &&
                  (re +=
                    `';
` +
                    D +
                    `
__p+='`),
              p
            );
          }),
            (re += `';
`);
          var W = P.variable;
          if (W) {
            if (!C.test(W))
              throw new Error("variable is not a bare identifier: " + W);
          } else
            (re =
              `with(obj||{}){
` +
              re +
              `}
`),
              (W = "obj");
          re =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            re +
            `return __p;
`;
          var H;
          try {
            H = new Function(P.variable || "obj", "_", re);
          } catch (p) {
            throw ((p.source = re), p);
          }
          var h = function (p) {
            return H.call(this, p, e);
          };
          return (
            (h.source =
              "function(" +
              W +
              `){
` +
              re +
              "}"),
            h
          );
        }),
        e
      );
    })();
  });
  var Oe = g((ZF, Ra) => {
    "use strict";
    var ge = {},
      St = {},
      Rt = [],
      ei = window.Webflow || [],
      lt = window.jQuery,
      Ve = lt(window),
      dm = lt(document),
      $e = lt.isFunction,
      We = (ge._ = ba()),
      Ta = (ge.tram = Zn() && lt.tram),
      kr = !1,
      ti = !1;
    Ta.config.hideBackface = !1;
    Ta.config.keepInherited = !0;
    ge.define = function (e, t, r) {
      St[e] && xa(St[e]);
      var n = (St[e] = t(lt, We, r) || {});
      return wa(n), n;
    };
    ge.require = function (e) {
      return St[e];
    };
    function wa(e) {
      ge.env() &&
        ($e(e.design) && Ve.on("__wf_design", e.design),
        $e(e.preview) && Ve.on("__wf_preview", e.preview)),
        $e(e.destroy) && Ve.on("__wf_destroy", e.destroy),
        e.ready && $e(e.ready) && pm(e);
    }
    function pm(e) {
      if (kr) {
        e.ready();
        return;
      }
      We.contains(Rt, e.ready) || Rt.push(e.ready);
    }
    function xa(e) {
      $e(e.design) && Ve.off("__wf_design", e.design),
        $e(e.preview) && Ve.off("__wf_preview", e.preview),
        $e(e.destroy) && Ve.off("__wf_destroy", e.destroy),
        e.ready && $e(e.ready) && gm(e);
    }
    function gm(e) {
      Rt = We.filter(Rt, function (t) {
        return t !== e.ready;
      });
    }
    ge.push = function (e) {
      if (kr) {
        $e(e) && e();
        return;
      }
      ei.push(e);
    };
    ge.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var qr = navigator.userAgent.toLowerCase(),
      Aa = (ge.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      hm = (ge.env.chrome =
        /chrome/.test(qr) &&
        /Google/.test(navigator.vendor) &&
        parseInt(qr.match(/chrome\/(\d+)\./)[1], 10)),
      vm = (ge.env.ios = /(ipod|iphone|ipad)/.test(qr));
    ge.env.safari = /safari/.test(qr) && !hm && !vm;
    var Jn;
    Aa &&
      dm.on("touchstart mousedown", function (e) {
        Jn = e.target;
      });
    ge.validClick = Aa
      ? function (e) {
          return e === Jn || lt.contains(e, Jn);
        }
      : function () {
          return !0;
        };
    var Oa = "resize.webflow orientationchange.webflow load.webflow",
      mm = "scroll.webflow " + Oa;
    ge.resize = ri(Ve, Oa);
    ge.scroll = ri(Ve, mm);
    ge.redraw = ri();
    function ri(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = We.throttle(function (i) {
          We.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (We.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = We.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ge.location = function (e) {
      window.location = e;
    };
    ge.env() && (ge.location = function () {});
    ge.ready = function () {
      (kr = !0), ti ? Em() : We.each(Rt, Ia), We.each(ei, Ia), ge.resize.up();
    };
    function Ia(e) {
      $e(e) && e();
    }
    function Em() {
      (ti = !1), We.each(St, wa);
    }
    var yt;
    ge.load = function (e) {
      yt.then(e);
    };
    function Sa() {
      yt && (yt.reject(), Ve.off("load", yt.resolve)),
        (yt = new lt.Deferred()),
        Ve.on("load", yt.resolve);
    }
    ge.destroy = function (e) {
      (e = e || {}),
        (ti = !0),
        Ve.triggerHandler("__wf_destroy"),
        e.domready != null && (kr = e.domready),
        We.each(St, xa),
        ge.resize.off(),
        ge.scroll.off(),
        ge.redraw.off(),
        (Rt = []),
        (ei = []),
        yt.state() === "pending" && Sa();
    };
    lt(ge.ready);
    Sa();
    Ra.exports = window.Webflow = ge;
  });
  var Pa = g((JF, La) => {
    "use strict";
    var Ca = Oe();
    Ca.define(
      "brand",
      (La.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          u = /PhantomJS/i.test(navigator.userAgent),
          s =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          l;
        t.ready = function () {
          var m = n.attr("data-wf-status"),
            y = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(y) && a.hostname !== y && (m = !0),
            m &&
              !u &&
              ((l = l || f()),
              E(),
              setTimeout(E, 500),
              e(r).off(s, b).on(s, b));
        };
        function b() {
          var m =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(l).attr("style", m ? "display: none !important;" : "");
        }
        function f() {
         
        }
        function E() {
          var m = i.children(o),
            y = m.length && m.get(0) === l,
            T = Ca.env("editor");
          if (y) {
            T && m.remove();
            return;
          }
          m.length && m.remove(), T || i.append(l);
        }
        return t;
      })
    );
  });
  var Da = g((e1, Na) => {
    "use strict";
    var ni = Oe();
    ni.define(
      "edit",
      (Na.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (ni.env("test") || ni.env("frame")) && !r.fixture && !ym())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          u = "hashchange",
          s,
          l = r.load || E,
          b = !1;
        try {
          b =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        b
          ? l()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            l()
          : i.on(u, f).triggerHandler(u);
        function f() {
          s || (/\?edit/.test(a.hash) && l());
        }
        function E() {
          (s = !0),
            (window.WebflowEditor = !0),
            i.off(u, f),
            N(function (F) {
              e.ajax({
                url: w("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: m(F),
              });
            });
        }
        function m(F) {
          return function (k) {
            if (!k) {
              console.error("Could not load editor data");
              return;
            }
            (k.thirdPartyCookiesSupported = F),
              y(A(k.scriptPath), function () {
                window.WebflowEditor(k);
              });
          };
        }
        function y(F, k) {
          e.ajax({ type: "GET", url: F, dataType: "script", cache: !0 }).then(
            k,
            T
          );
        }
        function T(F, k, q) {
          throw (console.error("Could not load editor script: " + k), q);
        }
        function A(F) {
          return F.indexOf("//") >= 0
            ? F
            : w("https://editor-api.webflow.com" + F);
        }
        function w(F) {
          return F.replace(/([^:])\/\//g, "$1/");
        }
        function N(F) {
          var k = window.document.createElement("iframe");
          (k.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (k.style.display = "none"),
            (k.sandbox = "allow-scripts allow-same-origin");
          var q = function (j) {
            j.data === "WF_third_party_cookies_unsupported"
              ? (L(k, q), F(!1))
              : j.data === "WF_third_party_cookies_supported" &&
                (L(k, q), F(!0));
          };
          (k.onerror = function () {
            L(k, q), F(!1);
          }),
            window.addEventListener("message", q, !1),
            window.document.body.appendChild(k);
        }
        function L(F, k) {
          window.removeEventListener("message", k, !1), F.remove();
        }
        return n;
      })
    );
    function ym() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Fa = g((t1, Ma) => {
    "use strict";
    var _m = Oe();
    _m.define(
      "focus-visible",
      (Ma.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function u(L) {
            return !!(
              L &&
              L !== document &&
              L.nodeName !== "HTML" &&
              L.nodeName !== "BODY" &&
              "classList" in L &&
              "contains" in L.classList
            );
          }
          function s(L) {
            var F = L.type,
              k = L.tagName;
            return !!(
              (k === "INPUT" && a[F] && !L.readOnly) ||
              (k === "TEXTAREA" && !L.readOnly) ||
              L.isContentEditable
            );
          }
          function l(L) {
            L.getAttribute("data-wf-focus-visible") ||
              L.setAttribute("data-wf-focus-visible", "true");
          }
          function b(L) {
            L.getAttribute("data-wf-focus-visible") &&
              L.removeAttribute("data-wf-focus-visible");
          }
          function f(L) {
            L.metaKey ||
              L.altKey ||
              L.ctrlKey ||
              (u(r.activeElement) && l(r.activeElement), (n = !0));
          }
          function E() {
            n = !1;
          }
          function m(L) {
            u(L.target) && (n || s(L.target)) && l(L.target);
          }
          function y(L) {
            u(L.target) &&
              L.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              b(L.target));
          }
          function T() {
            document.visibilityState === "hidden" && (i && (n = !0), A());
          }
          function A() {
            document.addEventListener("mousemove", N),
              document.addEventListener("mousedown", N),
              document.addEventListener("mouseup", N),
              document.addEventListener("pointermove", N),
              document.addEventListener("pointerdown", N),
              document.addEventListener("pointerup", N),
              document.addEventListener("touchmove", N),
              document.addEventListener("touchstart", N),
              document.addEventListener("touchend", N);
          }
          function w() {
            document.removeEventListener("mousemove", N),
              document.removeEventListener("mousedown", N),
              document.removeEventListener("mouseup", N),
              document.removeEventListener("pointermove", N),
              document.removeEventListener("pointerdown", N),
              document.removeEventListener("pointerup", N),
              document.removeEventListener("touchmove", N),
              document.removeEventListener("touchstart", N),
              document.removeEventListener("touchend", N);
          }
          function N(L) {
            (L.target.nodeName && L.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), w());
          }
          document.addEventListener("keydown", f, !0),
            document.addEventListener("mousedown", E, !0),
            document.addEventListener("pointerdown", E, !0),
            document.addEventListener("touchstart", E, !0),
            document.addEventListener("visibilitychange", T, !0),
            A(),
            r.addEventListener("focus", m, !0),
            r.addEventListener("blur", y, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Xa = g((r1, ka) => {
    "use strict";
    var qa = Oe();
    qa.define(
      "focus",
      (ka.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var u = a.target,
            s = u.tagName;
          return (
            (/^a$/i.test(s) && u.href != null) ||
            (/^(button|textarea)$/i.test(s) && u.disabled !== !0) ||
            (/^input$/i.test(s) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(u.type) &&
              !u.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(s) &&
              !Number.isNaN(Number.parseFloat(u.tabIndex))) ||
            /^audio$/i.test(s) ||
            (/^video$/i.test(s) && u.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var u = e.pop();
                u.target.dispatchEvent(new MouseEvent(u.type, u));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            qa.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var Wa = g((n1, Ua) => {
    "use strict";
    var ii = window.jQuery,
      Ze = {},
      Xr = [],
      Ga = ".w-ix",
      Gr = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), ii(t).triggerHandler(Ze.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), ii(t).triggerHandler(Ze.types.OUTRO));
        },
      };
    Ze.triggers = {};
    Ze.types = { INTRO: "w-ix-intro" + Ga, OUTRO: "w-ix-outro" + Ga };
    Ze.init = function () {
      for (var e = Xr.length, t = 0; t < e; t++) {
        var r = Xr[t];
        r[0](0, r[1]);
      }
      (Xr = []), ii.extend(Ze.triggers, Gr);
    };
    Ze.async = function () {
      for (var e in Gr) {
        var t = Gr[e];
        Gr.hasOwnProperty(e) &&
          (Ze.triggers[e] = function (r, n) {
            Xr.push([t, n]);
          });
      }
    };
    Ze.async();
    Ua.exports = Ze;
  });
  var Ct = g((i1, Ba) => {
    "use strict";
    var oi = Wa();
    function Va(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var bm = window.jQuery,
      Ur = {},
      Ha = ".w-ix",
      Im = {
        reset: function (e, t) {
          oi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          oi.triggers.intro(e, t), Va(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          oi.triggers.outro(e, t), Va(t, "COMPONENT_INACTIVE");
        },
      };
    Ur.triggers = {};
    Ur.types = { INTRO: "w-ix-intro" + Ha, OUTRO: "w-ix-outro" + Ha };
    bm.extend(Ur.triggers, Im);
    Ba.exports = Ur;
  });
  var ai = g((o1, za) => {
    var Tm =
      typeof global == "object" && global && global.Object === Object && global;
    za.exports = Tm;
  });
  var He = g((a1, Ka) => {
    var wm = ai(),
      xm = typeof self == "object" && self && self.Object === Object && self,
      Am = wm || xm || Function("return this")();
    Ka.exports = Am;
  });
  var Lt = g((s1, ja) => {
    var Om = He(),
      Sm = Om.Symbol;
    ja.exports = Sm;
  });
  var Za = g((u1, $a) => {
    var Ya = Lt(),
      Qa = Object.prototype,
      Rm = Qa.hasOwnProperty,
      Cm = Qa.toString,
      or = Ya ? Ya.toStringTag : void 0;
    function Lm(e) {
      var t = Rm.call(e, or),
        r = e[or];
      try {
        e[or] = void 0;
        var n = !0;
      } catch {}
      var i = Cm.call(e);
      return n && (t ? (e[or] = r) : delete e[or]), i;
    }
    $a.exports = Lm;
  });
  var es = g((c1, Ja) => {
    var Pm = Object.prototype,
      Nm = Pm.toString;
    function Dm(e) {
      return Nm.call(e);
    }
    Ja.exports = Dm;
  });
  var ft = g((l1, ns) => {
    var ts = Lt(),
      Mm = Za(),
      Fm = es(),
      qm = "[object Null]",
      km = "[object Undefined]",
      rs = ts ? ts.toStringTag : void 0;
    function Xm(e) {
      return e == null
        ? e === void 0
          ? km
          : qm
        : rs && rs in Object(e)
        ? Mm(e)
        : Fm(e);
    }
    ns.exports = Xm;
  });
  var si = g((f1, is) => {
    function Gm(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    is.exports = Gm;
  });
  var ui = g((d1, os) => {
    var Um = si(),
      Wm = Um(Object.getPrototypeOf, Object);
    os.exports = Wm;
  });
  var ot = g((p1, as) => {
    function Vm(e) {
      return e != null && typeof e == "object";
    }
    as.exports = Vm;
  });
  var ci = g((g1, us) => {
    var Hm = ft(),
      Bm = ui(),
      zm = ot(),
      Km = "[object Object]",
      jm = Function.prototype,
      Ym = Object.prototype,
      ss = jm.toString,
      Qm = Ym.hasOwnProperty,
      $m = ss.call(Object);
    function Zm(e) {
      if (!zm(e) || Hm(e) != Km) return !1;
      var t = Bm(e);
      if (t === null) return !0;
      var r = Qm.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && ss.call(r) == $m;
    }
    us.exports = Zm;
  });
  var cs = g((li) => {
    "use strict";
    Object.defineProperty(li, "__esModule", { value: !0 });
    li.default = Jm;
    function Jm(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var ls = g((di, fi) => {
    "use strict";
    Object.defineProperty(di, "__esModule", { value: !0 });
    var eE = cs(),
      tE = rE(eE);
    function rE(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Pt;
    typeof self < "u"
      ? (Pt = self)
      : typeof window < "u"
      ? (Pt = window)
      : typeof global < "u"
      ? (Pt = global)
      : typeof fi < "u"
      ? (Pt = fi)
      : (Pt = Function("return this")());
    var nE = (0, tE.default)(Pt);
    di.default = nE;
  });
  var pi = g((ar) => {
    "use strict";
    ar.__esModule = !0;
    ar.ActionTypes = void 0;
    ar.default = gs;
    var iE = ci(),
      oE = ps(iE),
      aE = ls(),
      fs = ps(aE);
    function ps(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var ds = (ar.ActionTypes = { INIT: "@@redux/INIT" });
    function gs(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(gs)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        u = a,
        s = !1;
      function l() {
        u === a && (u = a.slice());
      }
      function b() {
        return o;
      }
      function f(T) {
        if (typeof T != "function")
          throw new Error("Expected listener to be a function.");
        var A = !0;
        return (
          l(),
          u.push(T),
          function () {
            if (A) {
              (A = !1), l();
              var N = u.indexOf(T);
              u.splice(N, 1);
            }
          }
        );
      }
      function E(T) {
        if (!(0, oE.default)(T))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof T.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (s) throw new Error("Reducers may not dispatch actions.");
        try {
          (s = !0), (o = i(o, T));
        } finally {
          s = !1;
        }
        for (var A = (a = u), w = 0; w < A.length; w++) A[w]();
        return T;
      }
      function m(T) {
        if (typeof T != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = T), E({ type: ds.INIT });
      }
      function y() {
        var T,
          A = f;
        return (
          (T = {
            subscribe: function (N) {
              if (typeof N != "object")
                throw new TypeError("Expected the observer to be an object.");
              function L() {
                N.next && N.next(b());
              }
              L();
              var F = A(L);
              return { unsubscribe: F };
            },
          }),
          (T[fs.default] = function () {
            return this;
          }),
          T
        );
      }
      return (
        E({ type: ds.INIT }),
        (n = { dispatch: E, subscribe: f, getState: b, replaceReducer: m }),
        (n[fs.default] = y),
        n
      );
    }
  });
  var hi = g((gi) => {
    "use strict";
    gi.__esModule = !0;
    gi.default = sE;
    function sE(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var ms = g((vi) => {
    "use strict";
    vi.__esModule = !0;
    vi.default = dE;
    var hs = pi(),
      uE = ci(),
      E1 = vs(uE),
      cE = hi(),
      y1 = vs(cE);
    function vs(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function lE(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function fE(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: hs.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                hs.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function dE(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var u;
      try {
        fE(r);
      } catch (s) {
        u = s;
      }
      return function () {
        var l =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          b = arguments[1];
        if (u) throw u;
        if (!1) var f;
        for (var E = !1, m = {}, y = 0; y < o.length; y++) {
          var T = o[y],
            A = r[T],
            w = l[T],
            N = A(w, b);
          if (typeof N > "u") {
            var L = lE(T, b);
            throw new Error(L);
          }
          (m[T] = N), (E = E || N !== w);
        }
        return E ? m : l;
      };
    }
  });
  var ys = g((mi) => {
    "use strict";
    mi.__esModule = !0;
    mi.default = pE;
    function Es(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function pE(e, t) {
      if (typeof e == "function") return Es(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = Es(a, t));
      }
      return n;
    }
  });
  var yi = g((Ei) => {
    "use strict";
    Ei.__esModule = !0;
    Ei.default = gE;
    function gE() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var _s = g((_i) => {
    "use strict";
    _i.__esModule = !0;
    var hE =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    _i.default = yE;
    var vE = yi(),
      mE = EE(vE);
    function EE(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function yE() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var u = n(i, o, a),
            s = u.dispatch,
            l = [],
            b = {
              getState: u.getState,
              dispatch: function (E) {
                return s(E);
              },
            };
          return (
            (l = t.map(function (f) {
              return f(b);
            })),
            (s = mE.default.apply(void 0, l)(u.dispatch)),
            hE({}, u, { dispatch: s })
          );
        };
      };
    }
  });
  var bi = g((Xe) => {
    "use strict";
    Xe.__esModule = !0;
    Xe.compose =
      Xe.applyMiddleware =
      Xe.bindActionCreators =
      Xe.combineReducers =
      Xe.createStore =
        void 0;
    var _E = pi(),
      bE = Nt(_E),
      IE = ms(),
      TE = Nt(IE),
      wE = ys(),
      xE = Nt(wE),
      AE = _s(),
      OE = Nt(AE),
      SE = yi(),
      RE = Nt(SE),
      CE = hi(),
      w1 = Nt(CE);
    function Nt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Xe.createStore = bE.default;
    Xe.combineReducers = TE.default;
    Xe.bindActionCreators = xE.default;
    Xe.applyMiddleware = OE.default;
    Xe.compose = RE.default;
  });
  var Be,
    Ii,
    Je,
    LE,
    PE,
    Wr,
    NE,
    Ti = me(() => {
      "use strict";
      (Be = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Ii = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (Je = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (LE = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (PE = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Wr = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (NE = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Me,
    DE,
    Vr = me(() => {
      "use strict";
      (Me = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (DE = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var ME,
    bs = me(() => {
      "use strict";
      ME = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var FE,
    qE,
    kE,
    XE,
    GE,
    UE,
    WE,
    wi,
    Is = me(() => {
      "use strict";
      Vr();
      ({
        TRANSFORM_MOVE: FE,
        TRANSFORM_SCALE: qE,
        TRANSFORM_ROTATE: kE,
        TRANSFORM_SKEW: XE,
        STYLE_SIZE: GE,
        STYLE_FILTER: UE,
        STYLE_FONT_VARIATION: WE,
      } = Me),
        (wi = {
          [FE]: !0,
          [qE]: !0,
          [kE]: !0,
          [XE]: !0,
          [GE]: !0,
          [UE]: !0,
          [WE]: !0,
        });
    });
  var Te = {};
  De(Te, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => oy,
    IX2_ANIMATION_FRAME_CHANGED: () => JE,
    IX2_CLEAR_REQUESTED: () => QE,
    IX2_ELEMENT_STATE_CHANGED: () => iy,
    IX2_EVENT_LISTENER_ADDED: () => $E,
    IX2_EVENT_STATE_CHANGED: () => ZE,
    IX2_INSTANCE_ADDED: () => ty,
    IX2_INSTANCE_REMOVED: () => ny,
    IX2_INSTANCE_STARTED: () => ry,
    IX2_MEDIA_QUERIES_DEFINED: () => sy,
    IX2_PARAMETER_CHANGED: () => ey,
    IX2_PLAYBACK_REQUESTED: () => jE,
    IX2_PREVIEW_REQUESTED: () => KE,
    IX2_RAW_DATA_IMPORTED: () => VE,
    IX2_SESSION_INITIALIZED: () => HE,
    IX2_SESSION_STARTED: () => BE,
    IX2_SESSION_STOPPED: () => zE,
    IX2_STOP_REQUESTED: () => YE,
    IX2_TEST_FRAME_RENDERED: () => uy,
    IX2_VIEWPORT_WIDTH_CHANGED: () => ay,
  });
  var VE,
    HE,
    BE,
    zE,
    KE,
    jE,
    YE,
    QE,
    $E,
    ZE,
    JE,
    ey,
    ty,
    ry,
    ny,
    iy,
    oy,
    ay,
    sy,
    uy,
    Ts = me(() => {
      "use strict";
      (VE = "IX2_RAW_DATA_IMPORTED"),
        (HE = "IX2_SESSION_INITIALIZED"),
        (BE = "IX2_SESSION_STARTED"),
        (zE = "IX2_SESSION_STOPPED"),
        (KE = "IX2_PREVIEW_REQUESTED"),
        (jE = "IX2_PLAYBACK_REQUESTED"),
        (YE = "IX2_STOP_REQUESTED"),
        (QE = "IX2_CLEAR_REQUESTED"),
        ($E = "IX2_EVENT_LISTENER_ADDED"),
        (ZE = "IX2_EVENT_STATE_CHANGED"),
        (JE = "IX2_ANIMATION_FRAME_CHANGED"),
        (ey = "IX2_PARAMETER_CHANGED"),
        (ty = "IX2_INSTANCE_ADDED"),
        (ry = "IX2_INSTANCE_STARTED"),
        (ny = "IX2_INSTANCE_REMOVED"),
        (iy = "IX2_ELEMENT_STATE_CHANGED"),
        (oy = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (ay = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (sy = "IX2_MEDIA_QUERIES_DEFINED"),
        (uy = "IX2_TEST_FRAME_RENDERED");
    });
  var Se = {};
  De(Se, {
    ABSTRACT_NODE: () => a_,
    AUTO: () => Yy,
    BACKGROUND: () => Vy,
    BACKGROUND_COLOR: () => Wy,
    BAR_DELIMITER: () => Zy,
    BORDER_COLOR: () => Hy,
    BOUNDARY_SELECTOR: () => py,
    CHILDREN: () => Jy,
    COLON_DELIMITER: () => $y,
    COLOR: () => By,
    COMMA_DELIMITER: () => Qy,
    CONFIG_UNIT: () => by,
    CONFIG_VALUE: () => my,
    CONFIG_X_UNIT: () => Ey,
    CONFIG_X_VALUE: () => gy,
    CONFIG_Y_UNIT: () => yy,
    CONFIG_Y_VALUE: () => hy,
    CONFIG_Z_UNIT: () => _y,
    CONFIG_Z_VALUE: () => vy,
    DISPLAY: () => zy,
    FILTER: () => ky,
    FLEX: () => Ky,
    FONT_VARIATION_SETTINGS: () => Xy,
    HEIGHT: () => Uy,
    HTML_ELEMENT: () => i_,
    IMMEDIATE_CHILDREN: () => e_,
    IX2_ID_DELIMITER: () => cy,
    OPACITY: () => qy,
    PARENT: () => r_,
    PLAIN_OBJECT: () => o_,
    PRESERVE_3D: () => n_,
    RENDER_GENERAL: () => u_,
    RENDER_PLUGIN: () => l_,
    RENDER_STYLE: () => c_,
    RENDER_TRANSFORM: () => s_,
    ROTATE_X: () => Ly,
    ROTATE_Y: () => Py,
    ROTATE_Z: () => Ny,
    SCALE_3D: () => Cy,
    SCALE_X: () => Oy,
    SCALE_Y: () => Sy,
    SCALE_Z: () => Ry,
    SIBLINGS: () => t_,
    SKEW: () => Dy,
    SKEW_X: () => My,
    SKEW_Y: () => Fy,
    TRANSFORM: () => Iy,
    TRANSLATE_3D: () => Ay,
    TRANSLATE_X: () => Ty,
    TRANSLATE_Y: () => wy,
    TRANSLATE_Z: () => xy,
    WF_PAGE: () => ly,
    WIDTH: () => Gy,
    WILL_CHANGE: () => jy,
    W_MOD_IX: () => dy,
    W_MOD_JS: () => fy,
  });
  var cy,
    ly,
    fy,
    dy,
    py,
    gy,
    hy,
    vy,
    my,
    Ey,
    yy,
    _y,
    by,
    Iy,
    Ty,
    wy,
    xy,
    Ay,
    Oy,
    Sy,
    Ry,
    Cy,
    Ly,
    Py,
    Ny,
    Dy,
    My,
    Fy,
    qy,
    ky,
    Xy,
    Gy,
    Uy,
    Wy,
    Vy,
    Hy,
    By,
    zy,
    Ky,
    jy,
    Yy,
    Qy,
    $y,
    Zy,
    Jy,
    e_,
    t_,
    r_,
    n_,
    i_,
    o_,
    a_,
    s_,
    u_,
    c_,
    l_,
    ws = me(() => {
      "use strict";
      (cy = "|"),
        (ly = "data-wf-page"),
        (fy = "w-mod-js"),
        (dy = "w-mod-ix"),
        (py = ".w-dyn-item"),
        (gy = "xValue"),
        (hy = "yValue"),
        (vy = "zValue"),
        (my = "value"),
        (Ey = "xUnit"),
        (yy = "yUnit"),
        (_y = "zUnit"),
        (by = "unit"),
        (Iy = "transform"),
        (Ty = "translateX"),
        (wy = "translateY"),
        (xy = "translateZ"),
        (Ay = "translate3d"),
        (Oy = "scaleX"),
        (Sy = "scaleY"),
        (Ry = "scaleZ"),
        (Cy = "scale3d"),
        (Ly = "rotateX"),
        (Py = "rotateY"),
        (Ny = "rotateZ"),
        (Dy = "skew"),
        (My = "skewX"),
        (Fy = "skewY"),
        (qy = "opacity"),
        (ky = "filter"),
        (Xy = "font-variation-settings"),
        (Gy = "width"),
        (Uy = "height"),
        (Wy = "backgroundColor"),
        (Vy = "background"),
        (Hy = "borderColor"),
        (By = "color"),
        (zy = "display"),
        (Ky = "flex"),
        (jy = "willChange"),
        (Yy = "AUTO"),
        (Qy = ","),
        ($y = ":"),
        (Zy = "|"),
        (Jy = "CHILDREN"),
        (e_ = "IMMEDIATE_CHILDREN"),
        (t_ = "SIBLINGS"),
        (r_ = "PARENT"),
        (n_ = "preserve-3d"),
        (i_ = "HTML_ELEMENT"),
        (o_ = "PLAIN_OBJECT"),
        (a_ = "ABSTRACT_NODE"),
        (s_ = "RENDER_TRANSFORM"),
        (u_ = "RENDER_GENERAL"),
        (c_ = "RENDER_STYLE"),
        (l_ = "RENDER_PLUGIN");
    });
  var xs = {};
  De(xs, {
    ActionAppliesTo: () => DE,
    ActionTypeConsts: () => Me,
    EventAppliesTo: () => Ii,
    EventBasedOn: () => Je,
    EventContinuousMouseAxes: () => LE,
    EventLimitAffectedElements: () => PE,
    EventTypeConsts: () => Be,
    IX2EngineActionTypes: () => Te,
    IX2EngineConstants: () => Se,
    InteractionTypeConsts: () => ME,
    QuickEffectDirectionConsts: () => NE,
    QuickEffectIds: () => Wr,
    ReducedMotionTypes: () => wi,
  });
  var Fe = me(() => {
    "use strict";
    Ti();
    Vr();
    bs();
    Is();
    Ts();
    ws();
    Vr();
    Ti();
  });
  var f_,
    As,
    Os = me(() => {
      "use strict";
      Fe();
      ({ IX2_RAW_DATA_IMPORTED: f_ } = Te),
        (As = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case f_:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Dt = g((ye) => {
    "use strict";
    Object.defineProperty(ye, "__esModule", { value: !0 });
    var d_ =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    ye.clone = Br;
    ye.addLast = Cs;
    ye.addFirst = Ls;
    ye.removeLast = Ps;
    ye.removeFirst = Ns;
    ye.insert = Ds;
    ye.removeAt = Ms;
    ye.replaceAt = Fs;
    ye.getIn = zr;
    ye.set = Kr;
    ye.setIn = jr;
    ye.update = ks;
    ye.updateIn = Xs;
    ye.merge = Gs;
    ye.mergeDeep = Us;
    ye.mergeIn = Ws;
    ye.omit = Vs;
    ye.addDefaults = Hs;
    var Ss = "INVALID_ARGS";
    function Rs(e) {
      throw new Error(e);
    }
    function xi(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var p_ = {}.hasOwnProperty;
    function Br(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = xi(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function qe(e, t, r) {
      var n = r;
      n == null && Rs(Ss);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), u = 3;
        u < o;
        u++
      )
        a[u - 3] = arguments[u];
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        if (l != null) {
          var b = xi(l);
          if (b.length)
            for (var f = 0; f <= b.length; f++) {
              var E = b[f];
              if (!(e && n[E] !== void 0)) {
                var m = l[E];
                t && Hr(n[E]) && Hr(m) && (m = qe(e, t, n[E], m)),
                  !(m === void 0 || m === n[E]) &&
                    (i || ((i = !0), (n = Br(n))), (n[E] = m));
              }
            }
        }
      }
      return n;
    }
    function Hr(e) {
      var t = typeof e > "u" ? "undefined" : d_(e);
      return e != null && (t === "object" || t === "function");
    }
    function Cs(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Ls(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Ps(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Ns(e) {
      return e.length ? e.slice(1) : e;
    }
    function Ds(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Ms(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Fs(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function zr(e, t) {
      if ((!Array.isArray(t) && Rs(Ss), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Kr(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Br(i);
      return (o[t] = r), o;
    }
    function qs(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          Hr(e) && Hr(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = qs(a, t, r, n + 1);
      }
      return Kr(e, o, i);
    }
    function jr(e, t, r) {
      return t.length ? qs(e, t, r, 0) : r;
    }
    function ks(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Kr(e, t, i);
    }
    function Xs(e, t, r) {
      var n = zr(e, t),
        i = r(n);
      return jr(e, t, i);
    }
    function Gs(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? qe.call.apply(qe, [null, !1, !1, e, t, r, n, i, o].concat(u))
        : qe(!1, !1, e, t, r, n, i, o);
    }
    function Us(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? qe.call.apply(qe, [null, !1, !0, e, t, r, n, i, o].concat(u))
        : qe(!1, !0, e, t, r, n, i, o);
    }
    function Ws(e, t, r, n, i, o, a) {
      var u = zr(e, t);
      u == null && (u = {});
      for (
        var s = void 0,
          l = arguments.length,
          b = Array(l > 7 ? l - 7 : 0),
          f = 7;
        f < l;
        f++
      )
        b[f - 7] = arguments[f];
      return (
        b.length
          ? (s = qe.call.apply(qe, [null, !1, !1, u, r, n, i, o, a].concat(b)))
          : (s = qe(!1, !1, u, r, n, i, o, a)),
        jr(e, t, s)
      );
    }
    function Vs(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (p_.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = xi(e), u = 0; u < a.length; u++) {
        var s = a[u];
        r.indexOf(s) >= 0 || (o[s] = e[s]);
      }
      return o;
    }
    function Hs(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? qe.call.apply(qe, [null, !0, !1, e, t, r, n, i, o].concat(u))
        : qe(!0, !1, e, t, r, n, i, o);
    }
    var g_ = {
      clone: Br,
      addLast: Cs,
      addFirst: Ls,
      removeLast: Ps,
      removeFirst: Ns,
      insert: Ds,
      removeAt: Ms,
      replaceAt: Fs,
      getIn: zr,
      set: Kr,
      setIn: jr,
      update: ks,
      updateIn: Xs,
      merge: Gs,
      mergeDeep: Us,
      mergeIn: Ws,
      omit: Vs,
      addDefaults: Hs,
    };
    ye.default = g_;
  });
  var zs,
    h_,
    v_,
    m_,
    E_,
    y_,
    Bs,
    Ks,
    js = me(() => {
      "use strict";
      Fe();
      (zs = de(Dt())),
        ({
          IX2_PREVIEW_REQUESTED: h_,
          IX2_PLAYBACK_REQUESTED: v_,
          IX2_STOP_REQUESTED: m_,
          IX2_CLEAR_REQUESTED: E_,
        } = Te),
        (y_ = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Bs = Object.create(null, {
          [h_]: { value: "preview" },
          [v_]: { value: "playback" },
          [m_]: { value: "stop" },
          [E_]: { value: "clear" },
        })),
        (Ks = (e = y_, t) => {
          if (t.type in Bs) {
            let r = [Bs[t.type]];
            return (0, zs.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Le,
    __,
    b_,
    I_,
    T_,
    w_,
    x_,
    A_,
    O_,
    S_,
    R_,
    Ys,
    C_,
    Qs,
    $s = me(() => {
      "use strict";
      Fe();
      (Le = de(Dt())),
        ({
          IX2_SESSION_INITIALIZED: __,
          IX2_SESSION_STARTED: b_,
          IX2_TEST_FRAME_RENDERED: I_,
          IX2_SESSION_STOPPED: T_,
          IX2_EVENT_LISTENER_ADDED: w_,
          IX2_EVENT_STATE_CHANGED: x_,
          IX2_ANIMATION_FRAME_CHANGED: A_,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: O_,
          IX2_VIEWPORT_WIDTH_CHANGED: S_,
          IX2_MEDIA_QUERIES_DEFINED: R_,
        } = Te),
        (Ys = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (C_ = 20),
        (Qs = (e = Ys, t) => {
          switch (t.type) {
            case __: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Le.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case b_:
              return (0, Le.set)(e, "active", !0);
            case I_: {
              let {
                payload: { step: r = C_ },
              } = t;
              return (0, Le.set)(e, "tick", e.tick + r);
            }
            case T_:
              return Ys;
            case A_: {
              let {
                payload: { now: r },
              } = t;
              return (0, Le.set)(e, "tick", r);
            }
            case w_: {
              let r = (0, Le.addLast)(e.eventListeners, t.payload);
              return (0, Le.set)(e, "eventListeners", r);
            }
            case x_: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Le.setIn)(e, ["eventState", r], n);
            }
            case O_: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Le.setIn)(e, ["playbackState", r], n);
            }
            case S_: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: u, min: s, max: l } = n[a];
                if (r >= s && r <= l) {
                  o = u;
                  break;
                }
              }
              return (0, Le.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case R_:
              return (0, Le.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Js = g((H1, Zs) => {
    function L_() {
      (this.__data__ = []), (this.size = 0);
    }
    Zs.exports = L_;
  });
  var Yr = g((B1, eu) => {
    function P_(e, t) {
      return e === t || (e !== e && t !== t);
    }
    eu.exports = P_;
  });
  var sr = g((z1, tu) => {
    var N_ = Yr();
    function D_(e, t) {
      for (var r = e.length; r--; ) if (N_(e[r][0], t)) return r;
      return -1;
    }
    tu.exports = D_;
  });
  var nu = g((K1, ru) => {
    var M_ = sr(),
      F_ = Array.prototype,
      q_ = F_.splice;
    function k_(e) {
      var t = this.__data__,
        r = M_(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : q_.call(t, r, 1), --this.size, !0;
    }
    ru.exports = k_;
  });
  var ou = g((j1, iu) => {
    var X_ = sr();
    function G_(e) {
      var t = this.__data__,
        r = X_(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    iu.exports = G_;
  });
  var su = g((Y1, au) => {
    var U_ = sr();
    function W_(e) {
      return U_(this.__data__, e) > -1;
    }
    au.exports = W_;
  });
  var cu = g((Q1, uu) => {
    var V_ = sr();
    function H_(e, t) {
      var r = this.__data__,
        n = V_(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    uu.exports = H_;
  });
  var ur = g(($1, lu) => {
    var B_ = Js(),
      z_ = nu(),
      K_ = ou(),
      j_ = su(),
      Y_ = cu();
    function Mt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Mt.prototype.clear = B_;
    Mt.prototype.delete = z_;
    Mt.prototype.get = K_;
    Mt.prototype.has = j_;
    Mt.prototype.set = Y_;
    lu.exports = Mt;
  });
  var du = g((Z1, fu) => {
    var Q_ = ur();
    function $_() {
      (this.__data__ = new Q_()), (this.size = 0);
    }
    fu.exports = $_;
  });
  var gu = g((J1, pu) => {
    function Z_(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    pu.exports = Z_;
  });
  var vu = g((e2, hu) => {
    function J_(e) {
      return this.__data__.get(e);
    }
    hu.exports = J_;
  });
  var Eu = g((t2, mu) => {
    function eb(e) {
      return this.__data__.has(e);
    }
    mu.exports = eb;
  });
  var et = g((r2, yu) => {
    function tb(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    yu.exports = tb;
  });
  var Ai = g((n2, _u) => {
    var rb = ft(),
      nb = et(),
      ib = "[object AsyncFunction]",
      ob = "[object Function]",
      ab = "[object GeneratorFunction]",
      sb = "[object Proxy]";
    function ub(e) {
      if (!nb(e)) return !1;
      var t = rb(e);
      return t == ob || t == ab || t == ib || t == sb;
    }
    _u.exports = ub;
  });
  var Iu = g((i2, bu) => {
    var cb = He(),
      lb = cb["__core-js_shared__"];
    bu.exports = lb;
  });
  var xu = g((o2, wu) => {
    var Oi = Iu(),
      Tu = (function () {
        var e = /[^.]+$/.exec((Oi && Oi.keys && Oi.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function fb(e) {
      return !!Tu && Tu in e;
    }
    wu.exports = fb;
  });
  var Si = g((a2, Au) => {
    var db = Function.prototype,
      pb = db.toString;
    function gb(e) {
      if (e != null) {
        try {
          return pb.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Au.exports = gb;
  });
  var Su = g((s2, Ou) => {
    var hb = Ai(),
      vb = xu(),
      mb = et(),
      Eb = Si(),
      yb = /[\\^$.*+?()[\]{}|]/g,
      _b = /^\[object .+?Constructor\]$/,
      bb = Function.prototype,
      Ib = Object.prototype,
      Tb = bb.toString,
      wb = Ib.hasOwnProperty,
      xb = RegExp(
        "^" +
          Tb.call(wb)
            .replace(yb, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function Ab(e) {
      if (!mb(e) || vb(e)) return !1;
      var t = hb(e) ? xb : _b;
      return t.test(Eb(e));
    }
    Ou.exports = Ab;
  });
  var Cu = g((u2, Ru) => {
    function Ob(e, t) {
      return e?.[t];
    }
    Ru.exports = Ob;
  });
  var dt = g((c2, Lu) => {
    var Sb = Su(),
      Rb = Cu();
    function Cb(e, t) {
      var r = Rb(e, t);
      return Sb(r) ? r : void 0;
    }
    Lu.exports = Cb;
  });
  var Qr = g((l2, Pu) => {
    var Lb = dt(),
      Pb = He(),
      Nb = Lb(Pb, "Map");
    Pu.exports = Nb;
  });
  var cr = g((f2, Nu) => {
    var Db = dt(),
      Mb = Db(Object, "create");
    Nu.exports = Mb;
  });
  var Fu = g((d2, Mu) => {
    var Du = cr();
    function Fb() {
      (this.__data__ = Du ? Du(null) : {}), (this.size = 0);
    }
    Mu.exports = Fb;
  });
  var ku = g((p2, qu) => {
    function qb(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    qu.exports = qb;
  });
  var Gu = g((g2, Xu) => {
    var kb = cr(),
      Xb = "__lodash_hash_undefined__",
      Gb = Object.prototype,
      Ub = Gb.hasOwnProperty;
    function Wb(e) {
      var t = this.__data__;
      if (kb) {
        var r = t[e];
        return r === Xb ? void 0 : r;
      }
      return Ub.call(t, e) ? t[e] : void 0;
    }
    Xu.exports = Wb;
  });
  var Wu = g((h2, Uu) => {
    var Vb = cr(),
      Hb = Object.prototype,
      Bb = Hb.hasOwnProperty;
    function zb(e) {
      var t = this.__data__;
      return Vb ? t[e] !== void 0 : Bb.call(t, e);
    }
    Uu.exports = zb;
  });
  var Hu = g((v2, Vu) => {
    var Kb = cr(),
      jb = "__lodash_hash_undefined__";
    function Yb(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = Kb && t === void 0 ? jb : t),
        this
      );
    }
    Vu.exports = Yb;
  });
  var zu = g((m2, Bu) => {
    var Qb = Fu(),
      $b = ku(),
      Zb = Gu(),
      Jb = Wu(),
      eI = Hu();
    function Ft(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Ft.prototype.clear = Qb;
    Ft.prototype.delete = $b;
    Ft.prototype.get = Zb;
    Ft.prototype.has = Jb;
    Ft.prototype.set = eI;
    Bu.exports = Ft;
  });
  var Yu = g((E2, ju) => {
    var Ku = zu(),
      tI = ur(),
      rI = Qr();
    function nI() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Ku(),
          map: new (rI || tI)(),
          string: new Ku(),
        });
    }
    ju.exports = nI;
  });
  var $u = g((y2, Qu) => {
    function iI(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Qu.exports = iI;
  });
  var lr = g((_2, Zu) => {
    var oI = $u();
    function aI(e, t) {
      var r = e.__data__;
      return oI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Zu.exports = aI;
  });
  var ec = g((b2, Ju) => {
    var sI = lr();
    function uI(e) {
      var t = sI(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Ju.exports = uI;
  });
  var rc = g((I2, tc) => {
    var cI = lr();
    function lI(e) {
      return cI(this, e).get(e);
    }
    tc.exports = lI;
  });
  var ic = g((T2, nc) => {
    var fI = lr();
    function dI(e) {
      return fI(this, e).has(e);
    }
    nc.exports = dI;
  });
  var ac = g((w2, oc) => {
    var pI = lr();
    function gI(e, t) {
      var r = pI(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    oc.exports = gI;
  });
  var $r = g((x2, sc) => {
    var hI = Yu(),
      vI = ec(),
      mI = rc(),
      EI = ic(),
      yI = ac();
    function qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    qt.prototype.clear = hI;
    qt.prototype.delete = vI;
    qt.prototype.get = mI;
    qt.prototype.has = EI;
    qt.prototype.set = yI;
    sc.exports = qt;
  });
  var cc = g((A2, uc) => {
    var _I = ur(),
      bI = Qr(),
      II = $r(),
      TI = 200;
    function wI(e, t) {
      var r = this.__data__;
      if (r instanceof _I) {
        var n = r.__data__;
        if (!bI || n.length < TI - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new II(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    uc.exports = wI;
  });
  var Ri = g((O2, lc) => {
    var xI = ur(),
      AI = du(),
      OI = gu(),
      SI = vu(),
      RI = Eu(),
      CI = cc();
    function kt(e) {
      var t = (this.__data__ = new xI(e));
      this.size = t.size;
    }
    kt.prototype.clear = AI;
    kt.prototype.delete = OI;
    kt.prototype.get = SI;
    kt.prototype.has = RI;
    kt.prototype.set = CI;
    lc.exports = kt;
  });
  var dc = g((S2, fc) => {
    var LI = "__lodash_hash_undefined__";
    function PI(e) {
      return this.__data__.set(e, LI), this;
    }
    fc.exports = PI;
  });
  var gc = g((R2, pc) => {
    function NI(e) {
      return this.__data__.has(e);
    }
    pc.exports = NI;
  });
  var vc = g((C2, hc) => {
    var DI = $r(),
      MI = dc(),
      FI = gc();
    function Zr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new DI(); ++t < r; ) this.add(e[t]);
    }
    Zr.prototype.add = Zr.prototype.push = MI;
    Zr.prototype.has = FI;
    hc.exports = Zr;
  });
  var Ec = g((L2, mc) => {
    function qI(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    mc.exports = qI;
  });
  var _c = g((P2, yc) => {
    function kI(e, t) {
      return e.has(t);
    }
    yc.exports = kI;
  });
  var Ci = g((N2, bc) => {
    var XI = vc(),
      GI = Ec(),
      UI = _c(),
      WI = 1,
      VI = 2;
    function HI(e, t, r, n, i, o) {
      var a = r & WI,
        u = e.length,
        s = t.length;
      if (u != s && !(a && s > u)) return !1;
      var l = o.get(e),
        b = o.get(t);
      if (l && b) return l == t && b == e;
      var f = -1,
        E = !0,
        m = r & VI ? new XI() : void 0;
      for (o.set(e, t), o.set(t, e); ++f < u; ) {
        var y = e[f],
          T = t[f];
        if (n) var A = a ? n(T, y, f, t, e, o) : n(y, T, f, e, t, o);
        if (A !== void 0) {
          if (A) continue;
          E = !1;
          break;
        }
        if (m) {
          if (
            !GI(t, function (w, N) {
              if (!UI(m, N) && (y === w || i(y, w, r, n, o))) return m.push(N);
            })
          ) {
            E = !1;
            break;
          }
        } else if (!(y === T || i(y, T, r, n, o))) {
          E = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), E;
    }
    bc.exports = HI;
  });
  var Tc = g((D2, Ic) => {
    var BI = He(),
      zI = BI.Uint8Array;
    Ic.exports = zI;
  });
  var xc = g((M2, wc) => {
    function KI(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    wc.exports = KI;
  });
  var Oc = g((F2, Ac) => {
    function jI(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Ac.exports = jI;
  });
  var Pc = g((q2, Lc) => {
    var Sc = Lt(),
      Rc = Tc(),
      YI = Yr(),
      QI = Ci(),
      $I = xc(),
      ZI = Oc(),
      JI = 1,
      eT = 2,
      tT = "[object Boolean]",
      rT = "[object Date]",
      nT = "[object Error]",
      iT = "[object Map]",
      oT = "[object Number]",
      aT = "[object RegExp]",
      sT = "[object Set]",
      uT = "[object String]",
      cT = "[object Symbol]",
      lT = "[object ArrayBuffer]",
      fT = "[object DataView]",
      Cc = Sc ? Sc.prototype : void 0,
      Li = Cc ? Cc.valueOf : void 0;
    function dT(e, t, r, n, i, o, a) {
      switch (r) {
        case fT:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case lT:
          return !(e.byteLength != t.byteLength || !o(new Rc(e), new Rc(t)));
        case tT:
        case rT:
        case oT:
          return YI(+e, +t);
        case nT:
          return e.name == t.name && e.message == t.message;
        case aT:
        case uT:
          return e == t + "";
        case iT:
          var u = $I;
        case sT:
          var s = n & JI;
          if ((u || (u = ZI), e.size != t.size && !s)) return !1;
          var l = a.get(e);
          if (l) return l == t;
          (n |= eT), a.set(e, t);
          var b = QI(u(e), u(t), n, i, o, a);
          return a.delete(e), b;
        case cT:
          if (Li) return Li.call(e) == Li.call(t);
      }
      return !1;
    }
    Lc.exports = dT;
  });
  var Jr = g((k2, Nc) => {
    function pT(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Nc.exports = pT;
  });
  var we = g((X2, Dc) => {
    var gT = Array.isArray;
    Dc.exports = gT;
  });
  var Pi = g((G2, Mc) => {
    var hT = Jr(),
      vT = we();
    function mT(e, t, r) {
      var n = t(e);
      return vT(e) ? n : hT(n, r(e));
    }
    Mc.exports = mT;
  });
  var qc = g((U2, Fc) => {
    function ET(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Fc.exports = ET;
  });
  var Ni = g((W2, kc) => {
    function yT() {
      return [];
    }
    kc.exports = yT;
  });
  var Di = g((V2, Gc) => {
    var _T = qc(),
      bT = Ni(),
      IT = Object.prototype,
      TT = IT.propertyIsEnumerable,
      Xc = Object.getOwnPropertySymbols,
      wT = Xc
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                _T(Xc(e), function (t) {
                  return TT.call(e, t);
                }));
          }
        : bT;
    Gc.exports = wT;
  });
  var Wc = g((H2, Uc) => {
    function xT(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Uc.exports = xT;
  });
  var Hc = g((B2, Vc) => {
    var AT = ft(),
      OT = ot(),
      ST = "[object Arguments]";
    function RT(e) {
      return OT(e) && AT(e) == ST;
    }
    Vc.exports = RT;
  });
  var fr = g((z2, Kc) => {
    var Bc = Hc(),
      CT = ot(),
      zc = Object.prototype,
      LT = zc.hasOwnProperty,
      PT = zc.propertyIsEnumerable,
      NT = Bc(
        (function () {
          return arguments;
        })()
      )
        ? Bc
        : function (e) {
            return CT(e) && LT.call(e, "callee") && !PT.call(e, "callee");
          };
    Kc.exports = NT;
  });
  var Yc = g((K2, jc) => {
    function DT() {
      return !1;
    }
    jc.exports = DT;
  });
  var en = g((dr, Xt) => {
    var MT = He(),
      FT = Yc(),
      Zc = typeof dr == "object" && dr && !dr.nodeType && dr,
      Qc = Zc && typeof Xt == "object" && Xt && !Xt.nodeType && Xt,
      qT = Qc && Qc.exports === Zc,
      $c = qT ? MT.Buffer : void 0,
      kT = $c ? $c.isBuffer : void 0,
      XT = kT || FT;
    Xt.exports = XT;
  });
  var tn = g((j2, Jc) => {
    var GT = 9007199254740991,
      UT = /^(?:0|[1-9]\d*)$/;
    function WT(e, t) {
      var r = typeof e;
      return (
        (t = t ?? GT),
        !!t &&
          (r == "number" || (r != "symbol" && UT.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Jc.exports = WT;
  });
  var rn = g((Y2, el) => {
    var VT = 9007199254740991;
    function HT(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= VT;
    }
    el.exports = HT;
  });
  var rl = g((Q2, tl) => {
    var BT = ft(),
      zT = rn(),
      KT = ot(),
      jT = "[object Arguments]",
      YT = "[object Array]",
      QT = "[object Boolean]",
      $T = "[object Date]",
      ZT = "[object Error]",
      JT = "[object Function]",
      ew = "[object Map]",
      tw = "[object Number]",
      rw = "[object Object]",
      nw = "[object RegExp]",
      iw = "[object Set]",
      ow = "[object String]",
      aw = "[object WeakMap]",
      sw = "[object ArrayBuffer]",
      uw = "[object DataView]",
      cw = "[object Float32Array]",
      lw = "[object Float64Array]",
      fw = "[object Int8Array]",
      dw = "[object Int16Array]",
      pw = "[object Int32Array]",
      gw = "[object Uint8Array]",
      hw = "[object Uint8ClampedArray]",
      vw = "[object Uint16Array]",
      mw = "[object Uint32Array]",
      ve = {};
    ve[cw] =
      ve[lw] =
      ve[fw] =
      ve[dw] =
      ve[pw] =
      ve[gw] =
      ve[hw] =
      ve[vw] =
      ve[mw] =
        !0;
    ve[jT] =
      ve[YT] =
      ve[sw] =
      ve[QT] =
      ve[uw] =
      ve[$T] =
      ve[ZT] =
      ve[JT] =
      ve[ew] =
      ve[tw] =
      ve[rw] =
      ve[nw] =
      ve[iw] =
      ve[ow] =
      ve[aw] =
        !1;
    function Ew(e) {
      return KT(e) && zT(e.length) && !!ve[BT(e)];
    }
    tl.exports = Ew;
  });
  var il = g(($2, nl) => {
    function yw(e) {
      return function (t) {
        return e(t);
      };
    }
    nl.exports = yw;
  });
  var al = g((pr, Gt) => {
    var _w = ai(),
      ol = typeof pr == "object" && pr && !pr.nodeType && pr,
      gr = ol && typeof Gt == "object" && Gt && !Gt.nodeType && Gt,
      bw = gr && gr.exports === ol,
      Mi = bw && _w.process,
      Iw = (function () {
        try {
          var e = gr && gr.require && gr.require("util").types;
          return e || (Mi && Mi.binding && Mi.binding("util"));
        } catch {}
      })();
    Gt.exports = Iw;
  });
  var nn = g((Z2, cl) => {
    var Tw = rl(),
      ww = il(),
      sl = al(),
      ul = sl && sl.isTypedArray,
      xw = ul ? ww(ul) : Tw;
    cl.exports = xw;
  });
  var Fi = g((J2, ll) => {
    var Aw = Wc(),
      Ow = fr(),
      Sw = we(),
      Rw = en(),
      Cw = tn(),
      Lw = nn(),
      Pw = Object.prototype,
      Nw = Pw.hasOwnProperty;
    function Dw(e, t) {
      var r = Sw(e),
        n = !r && Ow(e),
        i = !r && !n && Rw(e),
        o = !r && !n && !i && Lw(e),
        a = r || n || i || o,
        u = a ? Aw(e.length, String) : [],
        s = u.length;
      for (var l in e)
        (t || Nw.call(e, l)) &&
          !(
            a &&
            (l == "length" ||
              (i && (l == "offset" || l == "parent")) ||
              (o &&
                (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
              Cw(l, s))
          ) &&
          u.push(l);
      return u;
    }
    ll.exports = Dw;
  });
  var on = g((eq, fl) => {
    var Mw = Object.prototype;
    function Fw(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || Mw;
      return e === r;
    }
    fl.exports = Fw;
  });
  var pl = g((tq, dl) => {
    var qw = si(),
      kw = qw(Object.keys, Object);
    dl.exports = kw;
  });
  var an = g((rq, gl) => {
    var Xw = on(),
      Gw = pl(),
      Uw = Object.prototype,
      Ww = Uw.hasOwnProperty;
    function Vw(e) {
      if (!Xw(e)) return Gw(e);
      var t = [];
      for (var r in Object(e)) Ww.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    gl.exports = Vw;
  });
  var _t = g((nq, hl) => {
    var Hw = Ai(),
      Bw = rn();
    function zw(e) {
      return e != null && Bw(e.length) && !Hw(e);
    }
    hl.exports = zw;
  });
  var hr = g((iq, vl) => {
    var Kw = Fi(),
      jw = an(),
      Yw = _t();
    function Qw(e) {
      return Yw(e) ? Kw(e) : jw(e);
    }
    vl.exports = Qw;
  });
  var El = g((oq, ml) => {
    var $w = Pi(),
      Zw = Di(),
      Jw = hr();
    function ex(e) {
      return $w(e, Jw, Zw);
    }
    ml.exports = ex;
  });
  var bl = g((aq, _l) => {
    var yl = El(),
      tx = 1,
      rx = Object.prototype,
      nx = rx.hasOwnProperty;
    function ix(e, t, r, n, i, o) {
      var a = r & tx,
        u = yl(e),
        s = u.length,
        l = yl(t),
        b = l.length;
      if (s != b && !a) return !1;
      for (var f = s; f--; ) {
        var E = u[f];
        if (!(a ? E in t : nx.call(t, E))) return !1;
      }
      var m = o.get(e),
        y = o.get(t);
      if (m && y) return m == t && y == e;
      var T = !0;
      o.set(e, t), o.set(t, e);
      for (var A = a; ++f < s; ) {
        E = u[f];
        var w = e[E],
          N = t[E];
        if (n) var L = a ? n(N, w, E, t, e, o) : n(w, N, E, e, t, o);
        if (!(L === void 0 ? w === N || i(w, N, r, n, o) : L)) {
          T = !1;
          break;
        }
        A || (A = E == "constructor");
      }
      if (T && !A) {
        var F = e.constructor,
          k = t.constructor;
        F != k &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof F == "function" &&
            F instanceof F &&
            typeof k == "function" &&
            k instanceof k
          ) &&
          (T = !1);
      }
      return o.delete(e), o.delete(t), T;
    }
    _l.exports = ix;
  });
  var Tl = g((sq, Il) => {
    var ox = dt(),
      ax = He(),
      sx = ox(ax, "DataView");
    Il.exports = sx;
  });
  var xl = g((uq, wl) => {
    var ux = dt(),
      cx = He(),
      lx = ux(cx, "Promise");
    wl.exports = lx;
  });
  var Ol = g((cq, Al) => {
    var fx = dt(),
      dx = He(),
      px = fx(dx, "Set");
    Al.exports = px;
  });
  var qi = g((lq, Sl) => {
    var gx = dt(),
      hx = He(),
      vx = gx(hx, "WeakMap");
    Sl.exports = vx;
  });
  var sn = g((fq, Ml) => {
    var ki = Tl(),
      Xi = Qr(),
      Gi = xl(),
      Ui = Ol(),
      Wi = qi(),
      Dl = ft(),
      Ut = Si(),
      Rl = "[object Map]",
      mx = "[object Object]",
      Cl = "[object Promise]",
      Ll = "[object Set]",
      Pl = "[object WeakMap]",
      Nl = "[object DataView]",
      Ex = Ut(ki),
      yx = Ut(Xi),
      _x = Ut(Gi),
      bx = Ut(Ui),
      Ix = Ut(Wi),
      bt = Dl;
    ((ki && bt(new ki(new ArrayBuffer(1))) != Nl) ||
      (Xi && bt(new Xi()) != Rl) ||
      (Gi && bt(Gi.resolve()) != Cl) ||
      (Ui && bt(new Ui()) != Ll) ||
      (Wi && bt(new Wi()) != Pl)) &&
      (bt = function (e) {
        var t = Dl(e),
          r = t == mx ? e.constructor : void 0,
          n = r ? Ut(r) : "";
        if (n)
          switch (n) {
            case Ex:
              return Nl;
            case yx:
              return Rl;
            case _x:
              return Cl;
            case bx:
              return Ll;
            case Ix:
              return Pl;
          }
        return t;
      });
    Ml.exports = bt;
  });
  var Vl = g((dq, Wl) => {
    var Vi = Ri(),
      Tx = Ci(),
      wx = Pc(),
      xx = bl(),
      Fl = sn(),
      ql = we(),
      kl = en(),
      Ax = nn(),
      Ox = 1,
      Xl = "[object Arguments]",
      Gl = "[object Array]",
      un = "[object Object]",
      Sx = Object.prototype,
      Ul = Sx.hasOwnProperty;
    function Rx(e, t, r, n, i, o) {
      var a = ql(e),
        u = ql(t),
        s = a ? Gl : Fl(e),
        l = u ? Gl : Fl(t);
      (s = s == Xl ? un : s), (l = l == Xl ? un : l);
      var b = s == un,
        f = l == un,
        E = s == l;
      if (E && kl(e)) {
        if (!kl(t)) return !1;
        (a = !0), (b = !1);
      }
      if (E && !b)
        return (
          o || (o = new Vi()),
          a || Ax(e) ? Tx(e, t, r, n, i, o) : wx(e, t, s, r, n, i, o)
        );
      if (!(r & Ox)) {
        var m = b && Ul.call(e, "__wrapped__"),
          y = f && Ul.call(t, "__wrapped__");
        if (m || y) {
          var T = m ? e.value() : e,
            A = y ? t.value() : t;
          return o || (o = new Vi()), i(T, A, r, n, o);
        }
      }
      return E ? (o || (o = new Vi()), xx(e, t, r, n, i, o)) : !1;
    }
    Wl.exports = Rx;
  });
  var Hi = g((pq, zl) => {
    var Cx = Vl(),
      Hl = ot();
    function Bl(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Hl(e) && !Hl(t))
        ? e !== e && t !== t
        : Cx(e, t, r, n, Bl, i);
    }
    zl.exports = Bl;
  });
  var jl = g((gq, Kl) => {
    var Lx = Ri(),
      Px = Hi(),
      Nx = 1,
      Dx = 2;
    function Mx(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var u = r[i];
        if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        u = r[i];
        var s = u[0],
          l = e[s],
          b = u[1];
        if (a && u[2]) {
          if (l === void 0 && !(s in e)) return !1;
        } else {
          var f = new Lx();
          if (n) var E = n(l, b, s, e, t, f);
          if (!(E === void 0 ? Px(b, l, Nx | Dx, n, f) : E)) return !1;
        }
      }
      return !0;
    }
    Kl.exports = Mx;
  });
  var Bi = g((hq, Yl) => {
    var Fx = et();
    function qx(e) {
      return e === e && !Fx(e);
    }
    Yl.exports = qx;
  });
  var $l = g((vq, Ql) => {
    var kx = Bi(),
      Xx = hr();
    function Gx(e) {
      for (var t = Xx(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, kx(i)];
      }
      return t;
    }
    Ql.exports = Gx;
  });
  var zi = g((mq, Zl) => {
    function Ux(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Zl.exports = Ux;
  });
  var ef = g((Eq, Jl) => {
    var Wx = jl(),
      Vx = $l(),
      Hx = zi();
    function Bx(e) {
      var t = Vx(e);
      return t.length == 1 && t[0][2]
        ? Hx(t[0][0], t[0][1])
        : function (r) {
            return r === e || Wx(r, e, t);
          };
    }
    Jl.exports = Bx;
  });
  var vr = g((yq, tf) => {
    var zx = ft(),
      Kx = ot(),
      jx = "[object Symbol]";
    function Yx(e) {
      return typeof e == "symbol" || (Kx(e) && zx(e) == jx);
    }
    tf.exports = Yx;
  });
  var cn = g((_q, rf) => {
    var Qx = we(),
      $x = vr(),
      Zx = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Jx = /^\w*$/;
    function e0(e, t) {
      if (Qx(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        $x(e)
        ? !0
        : Jx.test(e) || !Zx.test(e) || (t != null && e in Object(t));
    }
    rf.exports = e0;
  });
  var af = g((bq, of) => {
    var nf = $r(),
      t0 = "Expected a function";
    function Ki(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(t0);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (Ki.Cache || nf)()), r;
    }
    Ki.Cache = nf;
    of.exports = Ki;
  });
  var uf = g((Iq, sf) => {
    var r0 = af(),
      n0 = 500;
    function i0(e) {
      var t = r0(e, function (n) {
          return r.size === n0 && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    sf.exports = i0;
  });
  var lf = g((Tq, cf) => {
    var o0 = uf(),
      a0 =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      s0 = /\\(\\)?/g,
      u0 = o0(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(a0, function (r, n, i, o) {
            t.push(i ? o.replace(s0, "$1") : n || r);
          }),
          t
        );
      });
    cf.exports = u0;
  });
  var ji = g((wq, ff) => {
    function c0(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    ff.exports = c0;
  });
  var mf = g((xq, vf) => {
    var df = Lt(),
      l0 = ji(),
      f0 = we(),
      d0 = vr(),
      p0 = 1 / 0,
      pf = df ? df.prototype : void 0,
      gf = pf ? pf.toString : void 0;
    function hf(e) {
      if (typeof e == "string") return e;
      if (f0(e)) return l0(e, hf) + "";
      if (d0(e)) return gf ? gf.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -p0 ? "-0" : t;
    }
    vf.exports = hf;
  });
  var yf = g((Aq, Ef) => {
    var g0 = mf();
    function h0(e) {
      return e == null ? "" : g0(e);
    }
    Ef.exports = h0;
  });
  var mr = g((Oq, _f) => {
    var v0 = we(),
      m0 = cn(),
      E0 = lf(),
      y0 = yf();
    function _0(e, t) {
      return v0(e) ? e : m0(e, t) ? [e] : E0(y0(e));
    }
    _f.exports = _0;
  });
  var Wt = g((Sq, bf) => {
    var b0 = vr(),
      I0 = 1 / 0;
    function T0(e) {
      if (typeof e == "string" || b0(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -I0 ? "-0" : t;
    }
    bf.exports = T0;
  });
  var ln = g((Rq, If) => {
    var w0 = mr(),
      x0 = Wt();
    function A0(e, t) {
      t = w0(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[x0(t[r++])];
      return r && r == n ? e : void 0;
    }
    If.exports = A0;
  });
  var fn = g((Cq, Tf) => {
    var O0 = ln();
    function S0(e, t, r) {
      var n = e == null ? void 0 : O0(e, t);
      return n === void 0 ? r : n;
    }
    Tf.exports = S0;
  });
  var xf = g((Lq, wf) => {
    function R0(e, t) {
      return e != null && t in Object(e);
    }
    wf.exports = R0;
  });
  var Of = g((Pq, Af) => {
    var C0 = mr(),
      L0 = fr(),
      P0 = we(),
      N0 = tn(),
      D0 = rn(),
      M0 = Wt();
    function F0(e, t, r) {
      t = C0(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = M0(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && D0(i) && N0(a, i) && (P0(e) || L0(e)));
    }
    Af.exports = F0;
  });
  var Rf = g((Nq, Sf) => {
    var q0 = xf(),
      k0 = Of();
    function X0(e, t) {
      return e != null && k0(e, t, q0);
    }
    Sf.exports = X0;
  });
  var Lf = g((Dq, Cf) => {
    var G0 = Hi(),
      U0 = fn(),
      W0 = Rf(),
      V0 = cn(),
      H0 = Bi(),
      B0 = zi(),
      z0 = Wt(),
      K0 = 1,
      j0 = 2;
    function Y0(e, t) {
      return V0(e) && H0(t)
        ? B0(z0(e), t)
        : function (r) {
            var n = U0(r, e);
            return n === void 0 && n === t ? W0(r, e) : G0(t, n, K0 | j0);
          };
    }
    Cf.exports = Y0;
  });
  var dn = g((Mq, Pf) => {
    function Q0(e) {
      return e;
    }
    Pf.exports = Q0;
  });
  var Yi = g((Fq, Nf) => {
    function $0(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Nf.exports = $0;
  });
  var Mf = g((qq, Df) => {
    var Z0 = ln();
    function J0(e) {
      return function (t) {
        return Z0(t, e);
      };
    }
    Df.exports = J0;
  });
  var qf = g((kq, Ff) => {
    var eA = Yi(),
      tA = Mf(),
      rA = cn(),
      nA = Wt();
    function iA(e) {
      return rA(e) ? eA(nA(e)) : tA(e);
    }
    Ff.exports = iA;
  });
  var pt = g((Xq, kf) => {
    var oA = ef(),
      aA = Lf(),
      sA = dn(),
      uA = we(),
      cA = qf();
    function lA(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? sA
        : typeof e == "object"
        ? uA(e)
          ? aA(e[0], e[1])
          : oA(e)
        : cA(e);
    }
    kf.exports = lA;
  });
  var Qi = g((Gq, Xf) => {
    var fA = pt(),
      dA = _t(),
      pA = hr();
    function gA(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!dA(t)) {
          var o = fA(r, 3);
          (t = pA(t)),
            (r = function (u) {
              return o(i[u], u, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Xf.exports = gA;
  });
  var $i = g((Uq, Gf) => {
    function hA(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Gf.exports = hA;
  });
  var Wf = g((Wq, Uf) => {
    var vA = /\s/;
    function mA(e) {
      for (var t = e.length; t-- && vA.test(e.charAt(t)); );
      return t;
    }
    Uf.exports = mA;
  });
  var Hf = g((Vq, Vf) => {
    var EA = Wf(),
      yA = /^\s+/;
    function _A(e) {
      return e && e.slice(0, EA(e) + 1).replace(yA, "");
    }
    Vf.exports = _A;
  });
  var pn = g((Hq, Kf) => {
    var bA = Hf(),
      Bf = et(),
      IA = vr(),
      zf = 0 / 0,
      TA = /^[-+]0x[0-9a-f]+$/i,
      wA = /^0b[01]+$/i,
      xA = /^0o[0-7]+$/i,
      AA = parseInt;
    function OA(e) {
      if (typeof e == "number") return e;
      if (IA(e)) return zf;
      if (Bf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Bf(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = bA(e);
      var r = wA.test(e);
      return r || xA.test(e) ? AA(e.slice(2), r ? 2 : 8) : TA.test(e) ? zf : +e;
    }
    Kf.exports = OA;
  });
  var Qf = g((Bq, Yf) => {
    var SA = pn(),
      jf = 1 / 0,
      RA = 17976931348623157e292;
    function CA(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = SA(e)), e === jf || e === -jf)) {
        var t = e < 0 ? -1 : 1;
        return t * RA;
      }
      return e === e ? e : 0;
    }
    Yf.exports = CA;
  });
  var Zi = g((zq, $f) => {
    var LA = Qf();
    function PA(e) {
      var t = LA(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    $f.exports = PA;
  });
  var Jf = g((Kq, Zf) => {
    var NA = $i(),
      DA = pt(),
      MA = Zi(),
      FA = Math.max;
    function qA(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : MA(r);
      return i < 0 && (i = FA(n + i, 0)), NA(e, DA(t, 3), i);
    }
    Zf.exports = qA;
  });
  var Ji = g((jq, ed) => {
    var kA = Qi(),
      XA = Jf(),
      GA = kA(XA);
    ed.exports = GA;
  });
  var nd = {};
  De(nd, {
    ELEMENT_MATCHES: () => UA,
    FLEX_PREFIXED: () => eo,
    IS_BROWSER_ENV: () => ze,
    TRANSFORM_PREFIXED: () => gt,
    TRANSFORM_STYLE_PREFIXED: () => hn,
    withBrowser: () => gn,
  });
  var rd,
    ze,
    gn,
    UA,
    eo,
    gt,
    td,
    hn,
    vn = me(() => {
      "use strict";
      (rd = de(Ji())),
        (ze = typeof window < "u"),
        (gn = (e, t) => (ze ? e() : t)),
        (UA = gn(() =>
          (0, rd.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (eo = gn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (gt = gn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (td = gt.split("transform")[0]),
        (hn = td ? td + "TransformStyle" : "transformStyle");
    });
  var to = g((Yq, ud) => {
    var WA = 4,
      VA = 0.001,
      HA = 1e-7,
      BA = 10,
      Er = 11,
      mn = 1 / (Er - 1),
      zA = typeof Float32Array == "function";
    function id(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function od(e, t) {
      return 3 * t - 6 * e;
    }
    function ad(e) {
      return 3 * e;
    }
    function En(e, t, r) {
      return ((id(t, r) * e + od(t, r)) * e + ad(t)) * e;
    }
    function sd(e, t, r) {
      return 3 * id(t, r) * e * e + 2 * od(t, r) * e + ad(t);
    }
    function KA(e, t, r, n, i) {
      var o,
        a,
        u = 0;
      do
        (a = t + (r - t) / 2), (o = En(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > HA && ++u < BA);
      return a;
    }
    function jA(e, t, r, n) {
      for (var i = 0; i < WA; ++i) {
        var o = sd(t, r, n);
        if (o === 0) return t;
        var a = En(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    ud.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = zA ? new Float32Array(Er) : new Array(Er);
      if (t !== r || n !== i)
        for (var a = 0; a < Er; ++a) o[a] = En(a * mn, t, n);
      function u(s) {
        for (var l = 0, b = 1, f = Er - 1; b !== f && o[b] <= s; ++b) l += mn;
        --b;
        var E = (s - o[b]) / (o[b + 1] - o[b]),
          m = l + E * mn,
          y = sd(m, t, n);
        return y >= VA ? jA(s, m, t, n) : y === 0 ? m : KA(s, l, l + mn, t, n);
      }
      return function (l) {
        return t === r && n === i
          ? l
          : l === 0
          ? 0
          : l === 1
          ? 1
          : En(u(l), r, i);
      };
    };
  });
  var _r = {};
  De(_r, {
    bounce: () => CO,
    bouncePast: () => LO,
    ease: () => YA,
    easeIn: () => QA,
    easeInOut: () => ZA,
    easeOut: () => $A,
    inBack: () => bO,
    inCirc: () => mO,
    inCubic: () => rO,
    inElastic: () => wO,
    inExpo: () => gO,
    inOutBack: () => TO,
    inOutCirc: () => yO,
    inOutCubic: () => iO,
    inOutElastic: () => AO,
    inOutExpo: () => vO,
    inOutQuad: () => tO,
    inOutQuart: () => sO,
    inOutQuint: () => lO,
    inOutSine: () => pO,
    inQuad: () => JA,
    inQuart: () => oO,
    inQuint: () => uO,
    inSine: () => fO,
    outBack: () => IO,
    outBounce: () => _O,
    outCirc: () => EO,
    outCubic: () => nO,
    outElastic: () => xO,
    outExpo: () => hO,
    outQuad: () => eO,
    outQuart: () => aO,
    outQuint: () => cO,
    outSine: () => dO,
    swingFrom: () => SO,
    swingFromTo: () => OO,
    swingTo: () => RO,
  });
  function JA(e) {
    return Math.pow(e, 2);
  }
  function eO(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function tO(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function rO(e) {
    return Math.pow(e, 3);
  }
  function nO(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function iO(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function oO(e) {
    return Math.pow(e, 4);
  }
  function aO(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function sO(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function uO(e) {
    return Math.pow(e, 5);
  }
  function cO(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function lO(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function fO(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function dO(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function pO(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function gO(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function hO(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function vO(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function mO(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function EO(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function yO(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function _O(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function bO(e) {
    let t = at;
    return e * e * ((t + 1) * e - t);
  }
  function IO(e) {
    let t = at;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function TO(e) {
    let t = at;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function wO(e) {
    let t = at,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function xO(e) {
    let t = at,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function AO(e) {
    let t = at,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function OO(e) {
    let t = at;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function SO(e) {
    let t = at;
    return e * e * ((t + 1) * e - t);
  }
  function RO(e) {
    let t = at;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function CO(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function LO(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var yr,
    at,
    YA,
    QA,
    $A,
    ZA,
    ro = me(() => {
      "use strict";
      (yr = de(to())),
        (at = 1.70158),
        (YA = (0, yr.default)(0.25, 0.1, 0.25, 1)),
        (QA = (0, yr.default)(0.42, 0, 1, 1)),
        ($A = (0, yr.default)(0, 0, 0.58, 1)),
        (ZA = (0, yr.default)(0.42, 0, 0.58, 1));
    });
  var ld = {};
  De(ld, {
    applyEasing: () => NO,
    createBezierEasing: () => PO,
    optimizeFloat: () => br,
  });
  function br(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function PO(e) {
    return (0, cd.default)(...e);
  }
  function NO(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : br(r ? (t > 0 ? r(t) : t) : t > 0 && e && _r[e] ? _r[e](t) : t);
  }
  var cd,
    no = me(() => {
      "use strict";
      ro();
      cd = de(to());
    });
  var pd = {};
  De(pd, {
    createElementState: () => dd,
    ixElements: () => KO,
    mergeActionState: () => io,
  });
  function dd(e, t, r, n, i) {
    let o =
      r === DO ? (0, Vt.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, Vt.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function io(e, t, r, n, i) {
    let o = YO(i);
    return (0, Vt.mergeIn)(e, [t, zO, r], n, o);
  }
  function YO(e) {
    let { config: t } = e;
    return jO.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        u = t[o];
      return a != null && u != null && (r[o] = u), r;
    }, {});
  }
  var Vt,
    $q,
    DO,
    Zq,
    MO,
    FO,
    qO,
    kO,
    XO,
    GO,
    UO,
    WO,
    VO,
    HO,
    BO,
    fd,
    zO,
    KO,
    jO,
    gd = me(() => {
      "use strict";
      Vt = de(Dt());
      Fe();
      ({
        HTML_ELEMENT: $q,
        PLAIN_OBJECT: DO,
        ABSTRACT_NODE: Zq,
        CONFIG_X_VALUE: MO,
        CONFIG_Y_VALUE: FO,
        CONFIG_Z_VALUE: qO,
        CONFIG_VALUE: kO,
        CONFIG_X_UNIT: XO,
        CONFIG_Y_UNIT: GO,
        CONFIG_Z_UNIT: UO,
        CONFIG_UNIT: WO,
      } = Se),
        ({
          IX2_SESSION_STOPPED: VO,
          IX2_INSTANCE_ADDED: HO,
          IX2_ELEMENT_STATE_CHANGED: BO,
        } = Te),
        (fd = {}),
        (zO = "refState"),
        (KO = (e = fd, t = {}) => {
          switch (t.type) {
            case VO:
              return fd;
            case HO: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: u } = o,
                s = e;
              return (
                (0, Vt.getIn)(s, [r, n]) !== n && (s = dd(s, n, a, r, o)),
                io(s, r, u, i, o)
              );
            }
            case BO: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return io(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      jO = [
        [MO, XO],
        [FO, GO],
        [qO, UO],
        [kO, WO],
      ];
    });
  var hd = g((oo) => {
    "use strict";
    Object.defineProperty(oo, "__esModule", { value: !0 });
    function QO(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    QO(oo, {
      clearPlugin: function () {
        return nS;
      },
      createPluginInstance: function () {
        return tS;
      },
      getPluginConfig: function () {
        return $O;
      },
      getPluginDestination: function () {
        return eS;
      },
      getPluginDuration: function () {
        return ZO;
      },
      getPluginOrigin: function () {
        return JO;
      },
      renderPlugin: function () {
        return rS;
      },
    });
    var $O = (e) => e.value,
      ZO = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let r = parseFloat(e.getAttribute("data-duration"));
        return r > 0
          ? r * 1e3
          : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      JO = (e) => e || { value: 0 },
      eS = (e) => ({ value: e.value }),
      tS = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      rS = (e, t, r) => {
        if (!e) return;
        let n = t[r.actionTypeId].value / 100;
        e.goToFrame(e.frames * n);
      },
      nS = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var md = g((ao) => {
    "use strict";
    Object.defineProperty(ao, "__esModule", { value: !0 });
    function iS(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    iS(ao, {
      clearPlugin: function () {
        return gS;
      },
      createPluginInstance: function () {
        return dS;
      },
      getPluginConfig: function () {
        return uS;
      },
      getPluginDestination: function () {
        return fS;
      },
      getPluginDuration: function () {
        return cS;
      },
      getPluginOrigin: function () {
        return lS;
      },
      renderPlugin: function () {
        return pS;
      },
    });
    var oS = (e) => document.querySelector(`[data-w-id="${e}"]`),
      aS = () => window.Webflow.require("spline"),
      sS = (e, t) => e.filter((r) => !t.includes(r)),
      uS = (e, t) => e.value[t],
      cS = () => null,
      vd = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      lS = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = sS(n, o);
          return a.length ? a.reduce((s, l) => ((s[l] = vd[l]), s), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = vd[a]), o), {});
      },
      fS = (e) => e.value,
      dS = (e, t) => {
        let r = t?.config?.target?.pluginElement;
        return r ? oS(r) : null;
      },
      pS = (e, t, r) => {
        let n = aS(),
          i = n.getInstance(e),
          o = r.config.target.objectId,
          a = (u) => {
            if (!u)
              throw new Error("Invalid spline app passed to renderSpline");
            let s = o && u.findObjectById(o);
            if (!s) return;
            let { PLUGIN_SPLINE: l } = t;
            l.positionX != null && (s.position.x = l.positionX),
              l.positionY != null && (s.position.y = l.positionY),
              l.positionZ != null && (s.position.z = l.positionZ),
              l.rotationX != null && (s.rotation.x = l.rotationX),
              l.rotationY != null && (s.rotation.y = l.rotationY),
              l.rotationZ != null && (s.rotation.z = l.rotationZ),
              l.scaleX != null && (s.scale.x = l.scaleX),
              l.scaleY != null && (s.scale.y = l.scaleY),
              l.scaleZ != null && (s.scale.z = l.scaleZ);
          };
        i ? a(i.spline) : n.setLoadHandler(e, a);
      },
      gS = () => null;
  });
  var Ed = g((co) => {
    "use strict";
    Object.defineProperty(co, "__esModule", { value: !0 });
    function hS(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    hS(co, {
      clearPlugin: function () {
        return wS;
      },
      createPluginInstance: function () {
        return IS;
      },
      getPluginConfig: function () {
        return ES;
      },
      getPluginDestination: function () {
        return bS;
      },
      getPluginDuration: function () {
        return yS;
      },
      getPluginOrigin: function () {
        return _S;
      },
      renderPlugin: function () {
        return TS;
      },
    });
    var so = "--wf-rive-fit",
      uo = "--wf-rive-alignment",
      vS = (e) => document.querySelector(`[data-w-id="${e}"]`),
      mS = () => window.Webflow.require("rive"),
      ES = (e, t) => e.value.inputs[t],
      yS = () => null,
      _S = (e, t) => {
        if (e) return e;
        let r = {},
          { inputs: n = {} } = t.config.value;
        for (let i in n) n[i] == null && (r[i] = 0);
        return r;
      },
      bS = (e) => e.value.inputs ?? {},
      IS = (e, t) => {
        let r = t?.config?.target?.pluginElement;
        return r ? vS(r) : null;
      },
      TS = (e, { PLUGIN_RIVE: t }, r) => {
        let n = mS(),
          i = n.getInstance(e),
          o = n.rive.StateMachineInputType,
          { name: a, inputs: u = {} } = r.config.value || {};
        function s(l) {
          if (l.loaded) b();
          else {
            let f = () => {
              b(), l?.off("load", f);
            };
            l?.on("load", f);
          }
          function b() {
            let f = l.stateMachineInputs(a);
            if (f != null) {
              if ((l.isPlaying || l.play(a, !1), so in u || uo in u)) {
                let E = l.layout,
                  m = u[so] ?? E.fit,
                  y = u[uo] ?? E.alignment;
                (m !== E.fit || y !== E.alignment) &&
                  (l.layout = E.copyWith({ fit: m, alignment: y }));
              }
              for (let E in u) {
                if (E === so || E === uo) continue;
                let m = f.find((y) => y.name === E);
                if (m != null)
                  switch (m.type) {
                    case o.Boolean: {
                      if (u[E] != null) {
                        let y = !!u[E];
                        m.value = y;
                      }
                      break;
                    }
                    case o.Number: {
                      let y = t[E];
                      y != null && (m.value = y);
                      break;
                    }
                    case o.Trigger: {
                      u[E] && m.fire();
                      break;
                    }
                  }
              }
            }
          }
        }
        i?.rive ? s(i.rive) : n.setLoadHandler(e, s);
      },
      wS = (e, t) => null;
  });
  var fo = g((lo) => {
    "use strict";
    Object.defineProperty(lo, "__esModule", { value: !0 });
    Object.defineProperty(lo, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return xS;
      },
    });
    var yd = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function xS(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        u = (typeof yd[o] == "string" ? yd[o].toLowerCase() : null) || o;
      if (u.startsWith("#")) {
        let s = u.substring(1);
        s.length === 3 || s.length === 4
          ? ((t = parseInt(s[0] + s[0], 16)),
            (r = parseInt(s[1] + s[1], 16)),
            (n = parseInt(s[2] + s[2], 16)),
            s.length === 4 && (i = parseInt(s[3] + s[3], 16) / 255))
          : (s.length === 6 || s.length === 8) &&
            ((t = parseInt(s.substring(0, 2), 16)),
            (r = parseInt(s.substring(2, 4), 16)),
            (n = parseInt(s.substring(4, 6), 16)),
            s.length === 8 && (i = parseInt(s.substring(6, 8), 16) / 255));
      } else if (u.startsWith("rgba")) {
        let s = u.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (r = parseInt(s[1], 10)),
          (n = parseInt(s[2], 10)),
          (i = parseFloat(s[3]));
      } else if (u.startsWith("rgb")) {
        let s = u.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (r = parseInt(s[1], 10)),
          (n = parseInt(s[2], 10));
      } else if (u.startsWith("hsla")) {
        let s = u.match(/hsla\(([^)]+)\)/)[1].split(","),
          l = parseFloat(s[0]),
          b = parseFloat(s[1].replace("%", "")) / 100,
          f = parseFloat(s[2].replace("%", "")) / 100;
        i = parseFloat(s[3]);
        let E = (1 - Math.abs(2 * f - 1)) * b,
          m = E * (1 - Math.abs(((l / 60) % 2) - 1)),
          y = f - E / 2,
          T,
          A,
          w;
        l >= 0 && l < 60
          ? ((T = E), (A = m), (w = 0))
          : l >= 60 && l < 120
          ? ((T = m), (A = E), (w = 0))
          : l >= 120 && l < 180
          ? ((T = 0), (A = E), (w = m))
          : l >= 180 && l < 240
          ? ((T = 0), (A = m), (w = E))
          : l >= 240 && l < 300
          ? ((T = m), (A = 0), (w = E))
          : ((T = E), (A = 0), (w = m)),
          (t = Math.round((T + y) * 255)),
          (r = Math.round((A + y) * 255)),
          (n = Math.round((w + y) * 255));
      } else if (u.startsWith("hsl")) {
        let s = u.match(/hsl\(([^)]+)\)/)[1].split(","),
          l = parseFloat(s[0]),
          b = parseFloat(s[1].replace("%", "")) / 100,
          f = parseFloat(s[2].replace("%", "")) / 100,
          E = (1 - Math.abs(2 * f - 1)) * b,
          m = E * (1 - Math.abs(((l / 60) % 2) - 1)),
          y = f - E / 2,
          T,
          A,
          w;
        l >= 0 && l < 60
          ? ((T = E), (A = m), (w = 0))
          : l >= 60 && l < 120
          ? ((T = m), (A = E), (w = 0))
          : l >= 120 && l < 180
          ? ((T = 0), (A = E), (w = m))
          : l >= 180 && l < 240
          ? ((T = 0), (A = m), (w = E))
          : l >= 240 && l < 300
          ? ((T = m), (A = 0), (w = E))
          : ((T = E), (A = 0), (w = m)),
          (t = Math.round((T + y) * 255)),
          (r = Math.round((A + y) * 255)),
          (n = Math.round((w + y) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var _d = g((po) => {
    "use strict";
    Object.defineProperty(po, "__esModule", { value: !0 });
    function AS(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    AS(po, {
      clearPlugin: function () {
        return DS;
      },
      createPluginInstance: function () {
        return PS;
      },
      getPluginConfig: function () {
        return SS;
      },
      getPluginDestination: function () {
        return LS;
      },
      getPluginDuration: function () {
        return RS;
      },
      getPluginOrigin: function () {
        return CS;
      },
      renderPlugin: function () {
        return NS;
      },
    });
    var OS = fo(),
      SS = (e, t) => e.value[t],
      RS = () => null,
      CS = (e, t) => {
        if (e) return e;
        let r = t.config.value,
          n = t.config.target.objectId,
          i = getComputedStyle(document.documentElement).getPropertyValue(n);
        if (r.size != null) return { size: parseInt(i, 10) };
        if (r.red != null && r.green != null && r.blue != null)
          return (0, OS.normalizeColor)(i);
      },
      LS = (e) => e.value,
      PS = () => null,
      NS = (e, t, r) => {
        let n = r.config.target.objectId,
          i = r.config.value.unit,
          { PLUGIN_VARIABLE: o } = t,
          { size: a, red: u, green: s, blue: l, alpha: b } = o,
          f;
        a != null && (f = a + i),
          u != null &&
            l != null &&
            s != null &&
            b != null &&
            (f = `rgba(${u}, ${s}, ${l}, ${b})`),
          f != null && document.documentElement.style.setProperty(n, f);
      },
      DS = (e, t) => {
        let r = t.config.target.objectId;
        document.documentElement.style.removeProperty(r);
      };
  });
  var Id = g((go) => {
    "use strict";
    Object.defineProperty(go, "__esModule", { value: !0 });
    Object.defineProperty(go, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return XS;
      },
    });
    var yn = (Fe(), Qe(xs)),
      MS = _n(hd()),
      FS = _n(md()),
      qS = _n(Ed()),
      kS = _n(_d());
    function bd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (bd = function (n) {
        return n ? r : t;
      })(e);
    }
    function _n(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = bd(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    var XS = new Map([
      [yn.ActionTypeConsts.PLUGIN_LOTTIE, { ...MS }],
      [yn.ActionTypeConsts.PLUGIN_SPLINE, { ...FS }],
      [yn.ActionTypeConsts.PLUGIN_RIVE, { ...qS }],
      [yn.ActionTypeConsts.PLUGIN_VARIABLE, { ...kS }],
    ]);
  });
  var Td = {};
  De(Td, {
    clearPlugin: () => _o,
    createPluginInstance: () => US,
    getPluginConfig: () => vo,
    getPluginDestination: () => Eo,
    getPluginDuration: () => GS,
    getPluginOrigin: () => mo,
    isPluginType: () => It,
    renderPlugin: () => yo,
  });
  function It(e) {
    return ho.pluginMethodMap.has(e);
  }
  var ho,
    Tt,
    vo,
    mo,
    GS,
    Eo,
    US,
    yo,
    _o,
    bo = me(() => {
      "use strict";
      vn();
      ho = de(Id());
      (Tt = (e) => (t) => {
        if (!ze) return () => null;
        let r = ho.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (vo = Tt("getPluginConfig")),
        (mo = Tt("getPluginOrigin")),
        (GS = Tt("getPluginDuration")),
        (Eo = Tt("getPluginDestination")),
        (US = Tt("createPluginInstance")),
        (yo = Tt("renderPlugin")),
        (_o = Tt("clearPlugin"));
    });
  var xd = g((ak, wd) => {
    function WS(e, t) {
      return e == null || e !== e ? t : e;
    }
    wd.exports = WS;
  });
  var Od = g((sk, Ad) => {
    function VS(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    Ad.exports = VS;
  });
  var Rd = g((uk, Sd) => {
    function HS(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), u = a.length; u--; ) {
          var s = a[e ? u : ++i];
          if (r(o[s], s, o) === !1) break;
        }
        return t;
      };
    }
    Sd.exports = HS;
  });
  var Ld = g((ck, Cd) => {
    var BS = Rd(),
      zS = BS();
    Cd.exports = zS;
  });
  var Io = g((lk, Pd) => {
    var KS = Ld(),
      jS = hr();
    function YS(e, t) {
      return e && KS(e, t, jS);
    }
    Pd.exports = YS;
  });
  var Dd = g((fk, Nd) => {
    var QS = _t();
    function $S(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!QS(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Nd.exports = $S;
  });
  var To = g((dk, Md) => {
    var ZS = Io(),
      JS = Dd(),
      eR = JS(ZS);
    Md.exports = eR;
  });
  var qd = g((pk, Fd) => {
    function tR(e, t, r, n, i) {
      return (
        i(e, function (o, a, u) {
          r = n ? ((n = !1), o) : t(r, o, a, u);
        }),
        r
      );
    }
    Fd.exports = tR;
  });
  var Xd = g((gk, kd) => {
    var rR = Od(),
      nR = To(),
      iR = pt(),
      oR = qd(),
      aR = we();
    function sR(e, t, r) {
      var n = aR(e) ? rR : oR,
        i = arguments.length < 3;
      return n(e, iR(t, 4), r, i, nR);
    }
    kd.exports = sR;
  });
  var Ud = g((hk, Gd) => {
    var uR = $i(),
      cR = pt(),
      lR = Zi(),
      fR = Math.max,
      dR = Math.min;
    function pR(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = lR(r)), (i = r < 0 ? fR(n + i, 0) : dR(i, n - 1))),
        uR(e, cR(t, 3), i, !0)
      );
    }
    Gd.exports = pR;
  });
  var Vd = g((vk, Wd) => {
    var gR = Qi(),
      hR = Ud(),
      vR = gR(hR);
    Wd.exports = vR;
  });
  function Hd(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function mR(e, t) {
    if (Hd(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!Object.hasOwn(t, r[i]) || !Hd(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var wo,
    Bd = me(() => {
      "use strict";
      wo = mR;
    });
  var cp = {};
  De(cp, {
    cleanupHTMLElement: () => gC,
    clearAllStyles: () => pC,
    clearObjectCache: () => DR,
    getActionListProgress: () => vC,
    getAffectedElements: () => Ro,
    getComputedStyle: () => WR,
    getDestinationValues: () => YR,
    getElementId: () => kR,
    getInstanceId: () => FR,
    getInstanceOrigin: () => BR,
    getItemConfigByKey: () => jR,
    getMaxDurationItemIndex: () => up,
    getNamespacedParameterId: () => yC,
    getRenderType: () => op,
    getStyleProp: () => QR,
    mediaQueriesEqual: () => bC,
    observeStore: () => UR,
    reduceListToGroup: () => mC,
    reifyState: () => XR,
    renderHTMLElement: () => $R,
    shallowEqual: () => wo,
    shouldAllowMediaQuery: () => _C,
    shouldNamespaceEventParameter: () => EC,
    stringifyTarget: () => IC,
  });
  function DR() {
    bn.clear();
  }
  function FR() {
    return "i" + MR++;
  }
  function kR(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + qR++;
  }
  function XR({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, xn.default)(
        e,
        (a, u) => {
          let { eventTypeId: s } = u;
          return a[s] || (a[s] = {}), (a[s][u.id] = u), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function UR({ store: e, select: t, onChange: r, comparator: n = GR }) {
    let { getState: i, subscribe: o } = e,
      a = o(s),
      u = t(i());
    function s() {
      let l = t(i());
      if (l == null) {
        a();
        return;
      }
      n(l, u) || ((u = l), r(u, e));
    }
    return a;
  }
  function jd(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: u,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: u,
      };
    }
    return {};
  }
  function Ro({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (C, I) =>
          C.concat(
            Ro({
              config: { target: I },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: u,
        queryDocument: s,
        getChildElements: l,
        getSiblingElements: b,
        matchSelector: f,
        elementContains: E,
        isSiblingNode: m,
      } = i,
      { target: y } = e;
    if (!y) return [];
    let {
      id: T,
      objectId: A,
      selector: w,
      selectorGuids: N,
      appliesTo: L,
      useEventTarget: F,
    } = jd(y);
    if (A) return [bn.has(A) ? bn.get(A) : bn.set(A, {}).get(A)];
    if (L === Ii.PAGE) {
      let C = a(T);
      return C ? [C] : [];
    }
    let q = (t?.action?.config?.affectedElements ?? {})[T || w] || {},
      j = !!(q.id || q.selector),
      K,
      Q,
      te,
      z = t && u(jd(t.target));
    if (
      (j
        ? ((K = q.limitAffectedElements), (Q = z), (te = u(q)))
        : (Q = te = u({ id: T, selector: w, selectorGuids: N })),
      t && F)
    ) {
      let C = r && (te || F === !0) ? [r] : s(z);
      if (te) {
        if (F === LR) return s(te).filter((I) => C.some((P) => E(I, P)));
        if (F === zd) return s(te).filter((I) => C.some((P) => E(P, I)));
        if (F === Kd) return s(te).filter((I) => C.some((P) => m(P, I)));
      }
      return C;
    }
    return Q == null || te == null
      ? []
      : ze && n
      ? s(te).filter((C) => n.contains(C))
      : K === zd
      ? s(Q, te)
      : K === CR
      ? l(s(Q)).filter(f(te))
      : K === Kd
      ? b(s(Q)).filter(f(te))
      : s(te);
  }
  function WR({ element: e, actionItem: t }) {
    if (!ze) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case jt:
      case Yt:
      case Qt:
      case $t:
      case On:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function BR(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (It(a)) return mo(a)(t[a], n);
    switch (n.actionTypeId) {
      case Bt:
      case zt:
      case Kt:
      case xr:
        return t[n.actionTypeId] || Co[n.actionTypeId];
      case Ar:
        return VR(t[n.actionTypeId], n.config.filters);
      case Or:
        return HR(t[n.actionTypeId], n.config.fontVariations);
      case rp:
        return { value: (0, st.default)(parseFloat(o(e, Tn)), 1) };
      case jt: {
        let u = o(e, tt),
          s = o(e, rt),
          l,
          b;
        return (
          n.config.widthUnit === ht
            ? (l = Yd.test(u) ? parseFloat(u) : parseFloat(r.width))
            : (l = (0, st.default)(parseFloat(u), parseFloat(r.width))),
          n.config.heightUnit === ht
            ? (b = Yd.test(s) ? parseFloat(s) : parseFloat(r.height))
            : (b = (0, st.default)(parseFloat(s), parseFloat(r.height))),
          { widthValue: l, heightValue: b }
        );
      }
      case Yt:
      case Qt:
      case $t:
        return lC({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case On:
        return { value: (0, st.default)(o(e, wn), r.display) };
      case NR:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function YR({ element: e, actionItem: t, elementApi: r }) {
    if (It(t.actionTypeId)) return Eo(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case Bt:
      case zt:
      case Kt:
      case xr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case jt: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: u } = t.config,
          { widthValue: s, heightValue: l } = t.config;
        if (!ze) return { widthValue: s, heightValue: l };
        if (a === ht) {
          let b = n(e, tt);
          i(e, tt, ""), (s = o(e, "offsetWidth")), i(e, tt, b);
        }
        if (u === ht) {
          let b = n(e, rt);
          i(e, rt, ""), (l = o(e, "offsetHeight")), i(e, rt, b);
        }
        return { widthValue: s, heightValue: l };
      }
      case Yt:
      case Qt:
      case $t: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: u,
        } = t.config;
        if (u && u.startsWith("--")) {
          let { getStyle: s } = r,
            l = s(e, u),
            b = (0, Zd.normalizeColor)(l);
          return {
            rValue: b.red,
            gValue: b.green,
            bValue: b.blue,
            aValue: b.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Ar:
        return t.config.filters.reduce(zR, {});
      case Or:
        return t.config.fontVariations.reduce(KR, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function op(e) {
    if (/^TRANSFORM_/.test(e)) return ep;
    if (/^STYLE_/.test(e)) return Oo;
    if (/^GENERAL_/.test(e)) return Ao;
    if (/^PLUGIN_/.test(e)) return tp;
  }
  function QR(e, t) {
    return e === Oo ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function $R(e, t, r, n, i, o, a, u, s) {
    switch (u) {
      case ep:
        return rC(e, t, r, i, a);
      case Oo:
        return fC(e, t, r, i, o, a);
      case Ao:
        return dC(e, i, a);
      case tp: {
        let { actionTypeId: l } = i;
        if (It(l)) return yo(l)(s, t, i);
      }
    }
  }
  function rC(e, t, r, n, i) {
    let o = tC
        .map((u) => {
          let s = Co[u],
            {
              xValue: l = s.xValue,
              yValue: b = s.yValue,
              zValue: f = s.zValue,
              xUnit: E = "",
              yUnit: m = "",
              zUnit: y = "",
            } = t[u] || {};
          switch (u) {
            case Bt:
              return `${_R}(${l}${E}, ${b}${m}, ${f}${y})`;
            case zt:
              return `${bR}(${l}${E}, ${b}${m}, ${f}${y})`;
            case Kt:
              return `${IR}(${l}${E}) ${TR}(${b}${m}) ${wR}(${f}${y})`;
            case xr:
              return `${xR}(${l}${E}, ${b}${m})`;
            default:
              return "";
          }
        })
        .join(" "),
      { setStyle: a } = i;
    wt(e, gt, i), a(e, gt, o), oC(n, r) && a(e, hn, AR);
  }
  function nC(e, t, r, n) {
    let i = (0, xn.default)(t, (a, u, s) => `${a} ${s}(${u}${eC(s, r)})`, ""),
      { setStyle: o } = n;
    wt(e, Ir, n), o(e, Ir, i);
  }
  function iC(e, t, r, n) {
    let i = (0, xn.default)(
        t,
        (a, u, s) => (a.push(`"${s}" ${u}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    wt(e, Tr, n), o(e, Tr, i);
  }
  function oC({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === Bt && n !== void 0) ||
      (e === zt && n !== void 0) ||
      (e === Kt && (t !== void 0 || r !== void 0))
    );
  }
  function cC(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function lC({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = So[t],
      o = n(e, i),
      a = sC.test(o) ? o : r[i],
      u = cC(uC, a).split(wr);
    return {
      rValue: (0, st.default)(parseInt(u[0], 10), 255),
      gValue: (0, st.default)(parseInt(u[1], 10), 255),
      bValue: (0, st.default)(parseInt(u[2], 10), 255),
      aValue: (0, st.default)(parseFloat(u[3]), 1),
    };
  }
  function fC(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case jt: {
        let { widthUnit: u = "", heightUnit: s = "" } = n.config,
          { widthValue: l, heightValue: b } = r;
        l !== void 0 && (u === ht && (u = "px"), wt(e, tt, o), a(e, tt, l + u)),
          b !== void 0 &&
            (s === ht && (s = "px"), wt(e, rt, o), a(e, rt, b + s));
        break;
      }
      case Ar: {
        nC(e, r, n.config, o);
        break;
      }
      case Or: {
        iC(e, r, n.config, o);
        break;
      }
      case Yt:
      case Qt:
      case $t: {
        let u = So[n.actionTypeId],
          s = Math.round(r.rValue),
          l = Math.round(r.gValue),
          b = Math.round(r.bValue),
          f = r.aValue;
        wt(e, u, o),
          a(e, u, f >= 1 ? `rgb(${s},${l},${b})` : `rgba(${s},${l},${b},${f})`);
        break;
      }
      default: {
        let { unit: u = "" } = n.config;
        wt(e, i, o), a(e, i, r.value + u);
        break;
      }
    }
  }
  function dC(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case On: {
        let { value: i } = t.config;
        i === OR && ze ? n(e, wn, eo) : n(e, wn, i);
        return;
      }
    }
  }
  function wt(e, t, r) {
    if (!ze) return;
    let n = ip[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Ht);
    if (!a) {
      o(e, Ht, n);
      return;
    }
    let u = a.split(wr).map(np);
    u.indexOf(n) === -1 && o(e, Ht, u.concat(n).join(wr));
  }
  function ap(e, t, r) {
    if (!ze) return;
    let n = ip[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Ht);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        Ht,
        a
          .split(wr)
          .map(np)
          .filter((u) => u !== n)
          .join(wr)
      );
  }
  function pC({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: u } = a.action,
        { actionListId: s } = u,
        l = i[s];
      l && Qd({ actionList: l, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Qd({ actionList: i[o], elementApi: t });
      });
  }
  function Qd({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        $d({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((u) => {
            $d({ actionGroup: u, event: t, elementApi: r });
          });
        });
  }
  function $d({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        u;
      It(o)
        ? (u = (s) => _o(o)(s, i))
        : (u = sp({ effect: hC, actionTypeId: o, elementApi: r })),
        Ro({ config: a, event: t, elementApi: r }).forEach(u);
    });
  }
  function gC(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === jt) {
      let { config: a } = t;
      a.widthUnit === ht && n(e, tt, ""), a.heightUnit === ht && n(e, rt, "");
    }
    i(e, Ht) && sp({ effect: ap, actionTypeId: o, elementApi: r })(e);
  }
  function hC(e, t, r) {
    let { setStyle: n } = r;
    ap(e, t, r), n(e, t, ""), t === gt && n(e, hn, "");
  }
  function up(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function vC(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      u = 0;
    return (
      r.forEach((s, l) => {
        if (n && l === 0) return;
        let { actionItems: b } = s,
          f = b[up(b)],
          { config: E, actionTypeId: m } = f;
        i.id === f.id && (u = a + o);
        let y = op(m) === Ao ? 0 : E.duration;
        a += E.delay + y;
      }),
      a > 0 ? br(u / a) : 0
    );
  }
  function mC({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (u) => (
        o.push((0, An.mergeIn)(u, ["config"], { delay: 0, duration: 0 })),
        u.id === t
      );
    return (
      n && n.some(({ actionItems: u }) => u.some(a)),
      i &&
        i.some((u) => {
          let { continuousActionGroups: s } = u;
          return s.some(({ actionItems: l }) => l.some(a));
        }),
      (0, An.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function EC(e, { basedOn: t }) {
    return (
      (e === Be.SCROLLING_IN_VIEW && (t === Je.ELEMENT || t == null)) ||
      (e === Be.MOUSE_MOVE && t === Je.ELEMENT)
    );
  }
  function yC(e, t) {
    return e + PR + t;
  }
  function _C(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function bC(e, t) {
    return wo(e && e.sort(), t && t.sort());
  }
  function IC(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + xo + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + xo + r + xo + n;
  }
  var st,
    xn,
    In,
    An,
    Zd,
    ER,
    yR,
    _R,
    bR,
    IR,
    TR,
    wR,
    xR,
    AR,
    OR,
    Tn,
    Ir,
    Tr,
    tt,
    rt,
    Jd,
    SR,
    RR,
    zd,
    CR,
    Kd,
    LR,
    wn,
    Ht,
    ht,
    wr,
    PR,
    xo,
    ep,
    Ao,
    Oo,
    tp,
    Bt,
    zt,
    Kt,
    xr,
    rp,
    Ar,
    Or,
    jt,
    Yt,
    Qt,
    $t,
    On,
    NR,
    np,
    So,
    ip,
    bn,
    MR,
    qR,
    GR,
    Yd,
    VR,
    HR,
    zR,
    KR,
    jR,
    Co,
    ZR,
    JR,
    eC,
    tC,
    aC,
    sC,
    uC,
    sp,
    lp = me(() => {
      "use strict";
      (st = de(xd())), (xn = de(Xd())), (In = de(Vd())), (An = de(Dt()));
      Fe();
      Bd();
      no();
      Zd = de(fo());
      bo();
      vn();
      ({
        BACKGROUND: ER,
        TRANSFORM: yR,
        TRANSLATE_3D: _R,
        SCALE_3D: bR,
        ROTATE_X: IR,
        ROTATE_Y: TR,
        ROTATE_Z: wR,
        SKEW: xR,
        PRESERVE_3D: AR,
        FLEX: OR,
        OPACITY: Tn,
        FILTER: Ir,
        FONT_VARIATION_SETTINGS: Tr,
        WIDTH: tt,
        HEIGHT: rt,
        BACKGROUND_COLOR: Jd,
        BORDER_COLOR: SR,
        COLOR: RR,
        CHILDREN: zd,
        IMMEDIATE_CHILDREN: CR,
        SIBLINGS: Kd,
        PARENT: LR,
        DISPLAY: wn,
        WILL_CHANGE: Ht,
        AUTO: ht,
        COMMA_DELIMITER: wr,
        COLON_DELIMITER: PR,
        BAR_DELIMITER: xo,
        RENDER_TRANSFORM: ep,
        RENDER_GENERAL: Ao,
        RENDER_STYLE: Oo,
        RENDER_PLUGIN: tp,
      } = Se),
        ({
          TRANSFORM_MOVE: Bt,
          TRANSFORM_SCALE: zt,
          TRANSFORM_ROTATE: Kt,
          TRANSFORM_SKEW: xr,
          STYLE_OPACITY: rp,
          STYLE_FILTER: Ar,
          STYLE_FONT_VARIATION: Or,
          STYLE_SIZE: jt,
          STYLE_BACKGROUND_COLOR: Yt,
          STYLE_BORDER: Qt,
          STYLE_TEXT_COLOR: $t,
          GENERAL_DISPLAY: On,
          OBJECT_VALUE: NR,
        } = Me),
        (np = (e) => e.trim()),
        (So = Object.freeze({ [Yt]: Jd, [Qt]: SR, [$t]: RR })),
        (ip = Object.freeze({
          [gt]: yR,
          [Jd]: ER,
          [Tn]: Tn,
          [Ir]: Ir,
          [tt]: tt,
          [rt]: rt,
          [Tr]: Tr,
        })),
        (bn = new Map());
      MR = 1;
      qR = 1;
      GR = (e, t) => e === t;
      (Yd = /px/),
        (VR = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = ZR[n.type]), r),
            e || {}
          )),
        (HR = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = JR[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (zR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (KR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (jR = (e, t, r) => {
          if (It(e)) return vo(e)(r, t);
          switch (e) {
            case Ar: {
              let n = (0, In.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Or: {
              let n = (0, In.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Co = {
        [Bt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [zt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Kt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [xr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (ZR = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (JR = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (eC = (e, t) => {
          let r = (0, In.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (tC = Object.keys(Co));
      (aC = "\\(([^)]+)\\)"), (sC = /^rgb/), (uC = RegExp(`rgba?${aC}`));
      sp =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case Bt:
            case zt:
            case Kt:
            case xr:
              e(n, gt, r);
              break;
            case Ar:
              e(n, Ir, r);
              break;
            case Or:
              e(n, Tr, r);
              break;
            case rp:
              e(n, Tn, r);
              break;
            case jt:
              e(n, tt, r), e(n, rt, r);
              break;
            case Yt:
            case Qt:
            case $t:
              e(n, So[t], r);
              break;
            case On:
              e(n, wn, r);
              break;
          }
        };
    });
  var xt = g((Lo) => {
    "use strict";
    Object.defineProperty(Lo, "__esModule", { value: !0 });
    function TC(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    TC(Lo, {
      IX2BrowserSupport: function () {
        return wC;
      },
      IX2EasingUtils: function () {
        return AC;
      },
      IX2Easings: function () {
        return xC;
      },
      IX2ElementsReducer: function () {
        return OC;
      },
      IX2VanillaPlugins: function () {
        return SC;
      },
      IX2VanillaUtils: function () {
        return RC;
      },
    });
    var wC = Zt((vn(), Qe(nd))),
      xC = Zt((ro(), Qe(_r))),
      AC = Zt((no(), Qe(ld))),
      OC = Zt((gd(), Qe(pd))),
      SC = Zt((bo(), Qe(Td))),
      RC = Zt((lp(), Qe(cp)));
    function fp(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (fp = function (n) {
        return n ? r : t;
      })(e);
    }
    function Zt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = fp(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
  });
  var Rn,
    ut,
    CC,
    LC,
    PC,
    NC,
    DC,
    MC,
    Sn,
    dp,
    FC,
    qC,
    Po,
    kC,
    XC,
    GC,
    UC,
    pp,
    gp = me(() => {
      "use strict";
      Fe();
      (Rn = de(xt())),
        (ut = de(Dt())),
        ({
          IX2_RAW_DATA_IMPORTED: CC,
          IX2_SESSION_STOPPED: LC,
          IX2_INSTANCE_ADDED: PC,
          IX2_INSTANCE_STARTED: NC,
          IX2_INSTANCE_REMOVED: DC,
          IX2_ANIMATION_FRAME_CHANGED: MC,
        } = Te),
        ({
          optimizeFloat: Sn,
          applyEasing: dp,
          createBezierEasing: FC,
        } = Rn.IX2EasingUtils),
        ({ RENDER_GENERAL: qC } = Se),
        ({
          getItemConfigByKey: Po,
          getRenderType: kC,
          getStyleProp: XC,
        } = Rn.IX2VanillaUtils),
        (GC = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: u,
              actionTypeId: s,
              customEasingFn: l,
              skipMotion: b,
              skipToValue: f,
            } = e,
            { parameters: E } = t.payload,
            m = Math.max(1 - a, 0.01),
            y = E[n];
          y == null && ((m = 1), (y = u));
          let T = Math.max(y, 0) || 0,
            A = Sn(T - r),
            w = b ? f : Sn(r + A * m),
            N = w * 100;
          if (w === r && e.current) return e;
          let L, F, k, q;
          for (let K = 0, { length: Q } = i; K < Q; K++) {
            let { keyframe: te, actionItems: z } = i[K];
            if ((K === 0 && (L = z[0]), N >= te)) {
              L = z[0];
              let C = i[K + 1],
                I = C && N !== te;
              (F = I ? C.actionItems[0] : null),
                I && ((k = te / 100), (q = (C.keyframe - te) / 100));
            }
          }
          let j = {};
          if (L && !F)
            for (let K = 0, { length: Q } = o; K < Q; K++) {
              let te = o[K];
              j[te] = Po(s, te, L.config);
            }
          else if (L && F && k !== void 0 && q !== void 0) {
            let K = (w - k) / q,
              Q = L.config.easing,
              te = dp(Q, K, l);
            for (let z = 0, { length: C } = o; z < C; z++) {
              let I = o[z],
                P = Po(s, I, L.config),
                ee = (Po(s, I, F.config) - P) * te + P;
              j[I] = ee;
            }
          }
          return (0, ut.merge)(e, { position: w, current: j });
        }),
        (UC = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: u,
              actionItem: s,
              destination: l,
              destinationKeys: b,
              pluginDuration: f,
              instanceDelay: E,
              customEasingFn: m,
              skipMotion: y,
            } = e,
            T = s.config.easing,
            { duration: A, delay: w } = s.config;
          f != null && (A = f),
            (w = E ?? w),
            a === qC ? (A = 0) : (o || y) && (A = w = 0);
          let { now: N } = t.payload;
          if (r && n) {
            let L = N - (i + w);
            if (u) {
              let K = N - i,
                Q = A + w,
                te = Sn(Math.min(Math.max(0, K / Q), 1));
              e = (0, ut.set)(e, "verboseTimeElapsed", Q * te);
            }
            if (L < 0) return e;
            let F = Sn(Math.min(Math.max(0, L / A), 1)),
              k = dp(T, F, m),
              q = {},
              j = null;
            return (
              b.length &&
                (j = b.reduce((K, Q) => {
                  let te = l[Q],
                    z = parseFloat(n[Q]) || 0,
                    I = (parseFloat(te) - z) * k + z;
                  return (K[Q] = I), K;
                }, {})),
              (q.current = j),
              (q.position = F),
              F === 1 && ((q.active = !1), (q.complete = !0)),
              (0, ut.merge)(e, q)
            );
          }
          return e;
        }),
        (pp = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case CC:
              return t.payload.ixInstances || Object.freeze({});
            case LC:
              return Object.freeze({});
            case PC: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: u,
                  actionListId: s,
                  groupIndex: l,
                  isCarrier: b,
                  origin: f,
                  destination: E,
                  immediate: m,
                  verbose: y,
                  continuous: T,
                  parameterId: A,
                  actionGroups: w,
                  smoothing: N,
                  restingValue: L,
                  pluginInstance: F,
                  pluginDuration: k,
                  instanceDelay: q,
                  skipMotion: j,
                  skipToValue: K,
                } = t.payload,
                { actionTypeId: Q } = i,
                te = kC(Q),
                z = XC(te, Q),
                C = Object.keys(E).filter(
                  (P) => E[P] != null && typeof E[P] != "string"
                ),
                { easing: I } = i.config;
              return (0, ut.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: E,
                destinationKeys: C,
                immediate: m,
                verbose: y,
                current: null,
                actionItem: i,
                actionTypeId: Q,
                eventId: o,
                eventTarget: a,
                eventStateKey: u,
                actionListId: s,
                groupIndex: l,
                renderType: te,
                isCarrier: b,
                styleProp: z,
                continuous: T,
                parameterId: A,
                actionGroups: w,
                smoothing: N,
                restingValue: L,
                pluginInstance: F,
                pluginDuration: k,
                instanceDelay: q,
                skipMotion: j,
                skipToValue: K,
                customEasingFn:
                  Array.isArray(I) && I.length === 4 ? FC(I) : void 0,
              });
            }
            case NC: {
              let { instanceId: r, time: n } = t.payload;
              return (0, ut.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case DC: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let u = i[a];
                u !== r && (n[u] = e[u]);
              }
              return n;
            }
            case MC: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  u = e[a],
                  s = u.continuous ? GC : UC;
                r = (0, ut.set)(r, a, s(u, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var WC,
    VC,
    HC,
    hp,
    vp = me(() => {
      "use strict";
      Fe();
      ({
        IX2_RAW_DATA_IMPORTED: WC,
        IX2_SESSION_STOPPED: VC,
        IX2_PARAMETER_CHANGED: HC,
      } = Te),
        (hp = (e = {}, t) => {
          switch (t.type) {
            case WC:
              return t.payload.ixParameters || {};
            case VC:
              return {};
            case HC: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var yp = {};
  De(yp, { default: () => zC });
  var mp,
    Ep,
    BC,
    zC,
    _p = me(() => {
      "use strict";
      mp = de(bi());
      Os();
      js();
      $s();
      Ep = de(xt());
      gp();
      vp();
      ({ ixElements: BC } = Ep.IX2ElementsReducer),
        (zC = (0, mp.combineReducers)({
          ixData: As,
          ixRequest: Ks,
          ixSession: Qs,
          ixElements: BC,
          ixInstances: pp,
          ixParameters: hp,
        }));
    });
  var Ip = g((Dk, bp) => {
    var KC = ft(),
      jC = we(),
      YC = ot(),
      QC = "[object String]";
    function $C(e) {
      return typeof e == "string" || (!jC(e) && YC(e) && KC(e) == QC);
    }
    bp.exports = $C;
  });
  var wp = g((Mk, Tp) => {
    var ZC = Yi(),
      JC = ZC("length");
    Tp.exports = JC;
  });
  var Ap = g((Fk, xp) => {
    var eL = "\\ud800-\\udfff",
      tL = "\\u0300-\\u036f",
      rL = "\\ufe20-\\ufe2f",
      nL = "\\u20d0-\\u20ff",
      iL = tL + rL + nL,
      oL = "\\ufe0e\\ufe0f",
      aL = "\\u200d",
      sL = RegExp("[" + aL + eL + iL + oL + "]");
    function uL(e) {
      return sL.test(e);
    }
    xp.exports = uL;
  });
  var Mp = g((qk, Dp) => {
    var Sp = "\\ud800-\\udfff",
      cL = "\\u0300-\\u036f",
      lL = "\\ufe20-\\ufe2f",
      fL = "\\u20d0-\\u20ff",
      dL = cL + lL + fL,
      pL = "\\ufe0e\\ufe0f",
      gL = "[" + Sp + "]",
      No = "[" + dL + "]",
      Do = "\\ud83c[\\udffb-\\udfff]",
      hL = "(?:" + No + "|" + Do + ")",
      Rp = "[^" + Sp + "]",
      Cp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Lp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      vL = "\\u200d",
      Pp = hL + "?",
      Np = "[" + pL + "]?",
      mL = "(?:" + vL + "(?:" + [Rp, Cp, Lp].join("|") + ")" + Np + Pp + ")*",
      EL = Np + Pp + mL,
      yL = "(?:" + [Rp + No + "?", No, Cp, Lp, gL].join("|") + ")",
      Op = RegExp(Do + "(?=" + Do + ")|" + yL + EL, "g");
    function _L(e) {
      for (var t = (Op.lastIndex = 0); Op.test(e); ) ++t;
      return t;
    }
    Dp.exports = _L;
  });
  var qp = g((kk, Fp) => {
    var bL = wp(),
      IL = Ap(),
      TL = Mp();
    function wL(e) {
      return IL(e) ? TL(e) : bL(e);
    }
    Fp.exports = wL;
  });
  var Xp = g((Xk, kp) => {
    var xL = an(),
      AL = sn(),
      OL = _t(),
      SL = Ip(),
      RL = qp(),
      CL = "[object Map]",
      LL = "[object Set]";
    function PL(e) {
      if (e == null) return 0;
      if (OL(e)) return SL(e) ? RL(e) : e.length;
      var t = AL(e);
      return t == CL || t == LL ? e.size : xL(e).length;
    }
    kp.exports = PL;
  });
  var Up = g((Gk, Gp) => {
    var NL = "Expected a function";
    function DL(e) {
      if (typeof e != "function") throw new TypeError(NL);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Gp.exports = DL;
  });
  var Mo = g((Uk, Wp) => {
    var ML = dt(),
      FL = (function () {
        try {
          var e = ML(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Wp.exports = FL;
  });
  var Fo = g((Wk, Hp) => {
    var Vp = Mo();
    function qL(e, t, r) {
      t == "__proto__" && Vp
        ? Vp(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Hp.exports = qL;
  });
  var zp = g((Vk, Bp) => {
    var kL = Fo(),
      XL = Yr(),
      GL = Object.prototype,
      UL = GL.hasOwnProperty;
    function WL(e, t, r) {
      var n = e[t];
      (!(UL.call(e, t) && XL(n, r)) || (r === void 0 && !(t in e))) &&
        kL(e, t, r);
    }
    Bp.exports = WL;
  });
  var Yp = g((Hk, jp) => {
    var VL = zp(),
      HL = mr(),
      BL = tn(),
      Kp = et(),
      zL = Wt();
    function KL(e, t, r, n) {
      if (!Kp(e)) return e;
      t = HL(t, e);
      for (var i = -1, o = t.length, a = o - 1, u = e; u != null && ++i < o; ) {
        var s = zL(t[i]),
          l = r;
        if (s === "__proto__" || s === "constructor" || s === "prototype")
          return e;
        if (i != a) {
          var b = u[s];
          (l = n ? n(b, s, u) : void 0),
            l === void 0 && (l = Kp(b) ? b : BL(t[i + 1]) ? [] : {});
        }
        VL(u, s, l), (u = u[s]);
      }
      return e;
    }
    jp.exports = KL;
  });
  var $p = g((Bk, Qp) => {
    var jL = ln(),
      YL = Yp(),
      QL = mr();
    function $L(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          u = jL(e, a);
        r(u, a) && YL(o, QL(a, e), u);
      }
      return o;
    }
    Qp.exports = $L;
  });
  var Jp = g((zk, Zp) => {
    var ZL = Jr(),
      JL = ui(),
      eP = Di(),
      tP = Ni(),
      rP = Object.getOwnPropertySymbols,
      nP = rP
        ? function (e) {
            for (var t = []; e; ) ZL(t, eP(e)), (e = JL(e));
            return t;
          }
        : tP;
    Zp.exports = nP;
  });
  var tg = g((Kk, eg) => {
    function iP(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    eg.exports = iP;
  });
  var ng = g((jk, rg) => {
    var oP = et(),
      aP = on(),
      sP = tg(),
      uP = Object.prototype,
      cP = uP.hasOwnProperty;
    function lP(e) {
      if (!oP(e)) return sP(e);
      var t = aP(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !cP.call(e, n))) || r.push(n);
      return r;
    }
    rg.exports = lP;
  });
  var og = g((Yk, ig) => {
    var fP = Fi(),
      dP = ng(),
      pP = _t();
    function gP(e) {
      return pP(e) ? fP(e, !0) : dP(e);
    }
    ig.exports = gP;
  });
  var sg = g((Qk, ag) => {
    var hP = Pi(),
      vP = Jp(),
      mP = og();
    function EP(e) {
      return hP(e, mP, vP);
    }
    ag.exports = EP;
  });
  var cg = g(($k, ug) => {
    var yP = ji(),
      _P = pt(),
      bP = $p(),
      IP = sg();
    function TP(e, t) {
      if (e == null) return {};
      var r = yP(IP(e), function (n) {
        return [n];
      });
      return (
        (t = _P(t)),
        bP(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    ug.exports = TP;
  });
  var fg = g((Zk, lg) => {
    var wP = pt(),
      xP = Up(),
      AP = cg();
    function OP(e, t) {
      return AP(e, xP(wP(t)));
    }
    lg.exports = OP;
  });
  var pg = g((Jk, dg) => {
    var SP = an(),
      RP = sn(),
      CP = fr(),
      LP = we(),
      PP = _t(),
      NP = en(),
      DP = on(),
      MP = nn(),
      FP = "[object Map]",
      qP = "[object Set]",
      kP = Object.prototype,
      XP = kP.hasOwnProperty;
    function GP(e) {
      if (e == null) return !0;
      if (
        PP(e) &&
        (LP(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          NP(e) ||
          MP(e) ||
          CP(e))
      )
        return !e.length;
      var t = RP(e);
      if (t == FP || t == qP) return !e.size;
      if (DP(e)) return !SP(e).length;
      for (var r in e) if (XP.call(e, r)) return !1;
      return !0;
    }
    dg.exports = GP;
  });
  var hg = g((eX, gg) => {
    var UP = Fo(),
      WP = Io(),
      VP = pt();
    function HP(e, t) {
      var r = {};
      return (
        (t = VP(t, 3)),
        WP(e, function (n, i, o) {
          UP(r, i, t(n, i, o));
        }),
        r
      );
    }
    gg.exports = HP;
  });
  var mg = g((tX, vg) => {
    function BP(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    vg.exports = BP;
  });
  var yg = g((rX, Eg) => {
    var zP = dn();
    function KP(e) {
      return typeof e == "function" ? e : zP;
    }
    Eg.exports = KP;
  });
  var bg = g((nX, _g) => {
    var jP = mg(),
      YP = To(),
      QP = yg(),
      $P = we();
    function ZP(e, t) {
      var r = $P(e) ? jP : YP;
      return r(e, QP(t));
    }
    _g.exports = ZP;
  });
  var Tg = g((iX, Ig) => {
    var JP = He(),
      eN = function () {
        return JP.Date.now();
      };
    Ig.exports = eN;
  });
  var Ag = g((oX, xg) => {
    var tN = et(),
      qo = Tg(),
      wg = pn(),
      rN = "Expected a function",
      nN = Math.max,
      iN = Math.min;
    function oN(e, t, r) {
      var n,
        i,
        o,
        a,
        u,
        s,
        l = 0,
        b = !1,
        f = !1,
        E = !0;
      if (typeof e != "function") throw new TypeError(rN);
      (t = wg(t) || 0),
        tN(r) &&
          ((b = !!r.leading),
          (f = "maxWait" in r),
          (o = f ? nN(wg(r.maxWait) || 0, t) : o),
          (E = "trailing" in r ? !!r.trailing : E));
      function m(q) {
        var j = n,
          K = i;
        return (n = i = void 0), (l = q), (a = e.apply(K, j)), a;
      }
      function y(q) {
        return (l = q), (u = setTimeout(w, t)), b ? m(q) : a;
      }
      function T(q) {
        var j = q - s,
          K = q - l,
          Q = t - j;
        return f ? iN(Q, o - K) : Q;
      }
      function A(q) {
        var j = q - s,
          K = q - l;
        return s === void 0 || j >= t || j < 0 || (f && K >= o);
      }
      function w() {
        var q = qo();
        if (A(q)) return N(q);
        u = setTimeout(w, T(q));
      }
      function N(q) {
        return (u = void 0), E && n ? m(q) : ((n = i = void 0), a);
      }
      function L() {
        u !== void 0 && clearTimeout(u), (l = 0), (n = s = i = u = void 0);
      }
      function F() {
        return u === void 0 ? a : N(qo());
      }
      function k() {
        var q = qo(),
          j = A(q);
        if (((n = arguments), (i = this), (s = q), j)) {
          if (u === void 0) return y(s);
          if (f) return clearTimeout(u), (u = setTimeout(w, t)), m(s);
        }
        return u === void 0 && (u = setTimeout(w, t)), a;
      }
      return (k.cancel = L), (k.flush = F), k;
    }
    xg.exports = oN;
  });
  var Sg = g((aX, Og) => {
    var aN = Ag(),
      sN = et(),
      uN = "Expected a function";
    function cN(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(uN);
      return (
        sN(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        aN(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    Og.exports = cN;
  });
  var Cg = {};
  De(Cg, {
    actionListPlaybackChanged: () => er,
    animationFrameChanged: () => Ln,
    clearRequested: () => DN,
    elementStateChanged: () => Bo,
    eventListenerAdded: () => Cn,
    eventStateChanged: () => Wo,
    instanceAdded: () => Vo,
    instanceRemoved: () => Ho,
    instanceStarted: () => Pn,
    mediaQueriesDefined: () => Ko,
    parameterChanged: () => Jt,
    playbackRequested: () => PN,
    previewRequested: () => LN,
    rawDataImported: () => ko,
    sessionInitialized: () => Xo,
    sessionStarted: () => Go,
    sessionStopped: () => Uo,
    stopRequested: () => NN,
    testFrameRendered: () => MN,
    viewportWidthChanged: () => zo,
  });
  var Rg,
    lN,
    fN,
    dN,
    pN,
    gN,
    hN,
    vN,
    mN,
    EN,
    yN,
    _N,
    bN,
    IN,
    TN,
    wN,
    xN,
    AN,
    ON,
    SN,
    RN,
    CN,
    ko,
    Xo,
    Go,
    Uo,
    LN,
    PN,
    NN,
    DN,
    Cn,
    MN,
    Wo,
    Ln,
    Jt,
    Vo,
    Pn,
    Ho,
    Bo,
    er,
    zo,
    Ko,
    Nn = me(() => {
      "use strict";
      Fe();
      (Rg = de(xt())),
        ({
          IX2_RAW_DATA_IMPORTED: lN,
          IX2_SESSION_INITIALIZED: fN,
          IX2_SESSION_STARTED: dN,
          IX2_SESSION_STOPPED: pN,
          IX2_PREVIEW_REQUESTED: gN,
          IX2_PLAYBACK_REQUESTED: hN,
          IX2_STOP_REQUESTED: vN,
          IX2_CLEAR_REQUESTED: mN,
          IX2_EVENT_LISTENER_ADDED: EN,
          IX2_TEST_FRAME_RENDERED: yN,
          IX2_EVENT_STATE_CHANGED: _N,
          IX2_ANIMATION_FRAME_CHANGED: bN,
          IX2_PARAMETER_CHANGED: IN,
          IX2_INSTANCE_ADDED: TN,
          IX2_INSTANCE_STARTED: wN,
          IX2_INSTANCE_REMOVED: xN,
          IX2_ELEMENT_STATE_CHANGED: AN,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: ON,
          IX2_VIEWPORT_WIDTH_CHANGED: SN,
          IX2_MEDIA_QUERIES_DEFINED: RN,
        } = Te),
        ({ reifyState: CN } = Rg.IX2VanillaUtils),
        (ko = (e) => ({ type: lN, payload: { ...CN(e) } })),
        (Xo = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: fN,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Go = () => ({ type: dN })),
        (Uo = () => ({ type: pN })),
        (LN = ({ rawData: e, defer: t }) => ({
          type: gN,
          payload: { defer: t, rawData: e },
        })),
        (PN = ({
          actionTypeId: e = Me.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: u,
          rawData: s,
        }) => ({
          type: hN,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: u,
            rawData: s,
          },
        })),
        (NN = (e) => ({ type: vN, payload: { actionListId: e } })),
        (DN = () => ({ type: mN })),
        (Cn = (e, t) => ({
          type: EN,
          payload: { target: e, listenerParams: t },
        })),
        (MN = (e = 1) => ({ type: yN, payload: { step: e } })),
        (Wo = (e, t) => ({ type: _N, payload: { stateKey: e, newState: t } })),
        (Ln = (e, t) => ({ type: bN, payload: { now: e, parameters: t } })),
        (Jt = (e, t) => ({ type: IN, payload: { key: e, value: t } })),
        (Vo = (e) => ({ type: TN, payload: { ...e } })),
        (Pn = (e, t) => ({ type: wN, payload: { instanceId: e, time: t } })),
        (Ho = (e) => ({ type: xN, payload: { instanceId: e } })),
        (Bo = (e, t, r, n) => ({
          type: AN,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (er = ({ actionListId: e, isPlaying: t }) => ({
          type: ON,
          payload: { actionListId: e, isPlaying: t },
        })),
        (zo = ({ width: e, mediaQueries: t }) => ({
          type: SN,
          payload: { width: e, mediaQueries: t },
        })),
        (Ko = () => ({ type: RN }));
    });
  var Pe = {};
  De(Pe, {
    elementContains: () => Qo,
    getChildElements: () => BN,
    getClosestElement: () => Sr,
    getProperty: () => GN,
    getQuerySelector: () => Yo,
    getRefType: () => $o,
    getSiblingElements: () => zN,
    getStyle: () => XN,
    getValidDocument: () => WN,
    isSiblingNode: () => HN,
    matchSelector: () => UN,
    queryDocument: () => VN,
    setStyle: () => kN,
  });
  function kN(e, t, r) {
    e.style[t] = r;
  }
  function XN(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function GN(e, t) {
    return e[t];
  }
  function UN(e) {
    return (t) => t[jo](e);
  }
  function Yo({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Lg) !== -1) {
        let n = e.split(Lg),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Ng)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function WN(e) {
    return e == null || e === document.documentElement.getAttribute(Ng)
      ? document
      : null;
  }
  function VN(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function Qo(e, t) {
    return e.contains(t);
  }
  function HN(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function BN(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function zN(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function $o(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? FN
        : qN
      : null;
  }
  var Pg,
    jo,
    Lg,
    FN,
    qN,
    Ng,
    Sr,
    Dg = me(() => {
      "use strict";
      Pg = de(xt());
      Fe();
      ({ ELEMENT_MATCHES: jo } = Pg.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Lg,
          HTML_ELEMENT: FN,
          PLAIN_OBJECT: qN,
          WF_PAGE: Ng,
        } = Se);
      Sr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[jo] && r[jo](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var Zo = g((cX, Fg) => {
    var KN = et(),
      Mg = Object.create,
      jN = (function () {
        function e() {}
        return function (t) {
          if (!KN(t)) return {};
          if (Mg) return Mg(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Fg.exports = jN;
  });
  var Dn = g((lX, qg) => {
    function YN() {}
    qg.exports = YN;
  });
  var Fn = g((fX, kg) => {
    var QN = Zo(),
      $N = Dn();
    function Mn(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Mn.prototype = QN($N.prototype);
    Mn.prototype.constructor = Mn;
    kg.exports = Mn;
  });
  var Wg = g((dX, Ug) => {
    var Xg = Lt(),
      ZN = fr(),
      JN = we(),
      Gg = Xg ? Xg.isConcatSpreadable : void 0;
    function eD(e) {
      return JN(e) || ZN(e) || !!(Gg && e && e[Gg]);
    }
    Ug.exports = eD;
  });
  var Bg = g((pX, Hg) => {
    var tD = Jr(),
      rD = Wg();
    function Vg(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = rD), i || (i = []); ++o < a; ) {
        var u = e[o];
        t > 0 && r(u)
          ? t > 1
            ? Vg(u, t - 1, r, n, i)
            : tD(i, u)
          : n || (i[i.length] = u);
      }
      return i;
    }
    Hg.exports = Vg;
  });
  var Kg = g((gX, zg) => {
    var nD = Bg();
    function iD(e) {
      var t = e == null ? 0 : e.length;
      return t ? nD(e, 1) : [];
    }
    zg.exports = iD;
  });
  var Yg = g((hX, jg) => {
    function oD(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    jg.exports = oD;
  });
  var Zg = g((vX, $g) => {
    var aD = Yg(),
      Qg = Math.max;
    function sD(e, t, r) {
      return (
        (t = Qg(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = Qg(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var u = Array(t + 1); ++i < t; ) u[i] = n[i];
          return (u[t] = r(a)), aD(e, this, u);
        }
      );
    }
    $g.exports = sD;
  });
  var eh = g((mX, Jg) => {
    function uD(e) {
      return function () {
        return e;
      };
    }
    Jg.exports = uD;
  });
  var nh = g((EX, rh) => {
    var cD = eh(),
      th = Mo(),
      lD = dn(),
      fD = th
        ? function (e, t) {
            return th(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: cD(t),
              writable: !0,
            });
          }
        : lD;
    rh.exports = fD;
  });
  var oh = g((yX, ih) => {
    var dD = 800,
      pD = 16,
      gD = Date.now;
    function hD(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = gD(),
          i = pD - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= dD) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    ih.exports = hD;
  });
  var sh = g((_X, ah) => {
    var vD = nh(),
      mD = oh(),
      ED = mD(vD);
    ah.exports = ED;
  });
  var ch = g((bX, uh) => {
    var yD = Kg(),
      _D = Zg(),
      bD = sh();
    function ID(e) {
      return bD(_D(e, void 0, yD), e + "");
    }
    uh.exports = ID;
  });
  var dh = g((IX, fh) => {
    var lh = qi(),
      TD = lh && new lh();
    fh.exports = TD;
  });
  var gh = g((TX, ph) => {
    function wD() {}
    ph.exports = wD;
  });
  var Jo = g((wX, vh) => {
    var hh = dh(),
      xD = gh(),
      AD = hh
        ? function (e) {
            return hh.get(e);
          }
        : xD;
    vh.exports = AD;
  });
  var Eh = g((xX, mh) => {
    var OD = {};
    mh.exports = OD;
  });
  var ea = g((AX, _h) => {
    var yh = Eh(),
      SD = Object.prototype,
      RD = SD.hasOwnProperty;
    function CD(e) {
      for (
        var t = e.name + "", r = yh[t], n = RD.call(yh, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    _h.exports = CD;
  });
  var kn = g((OX, bh) => {
    var LD = Zo(),
      PD = Dn(),
      ND = 4294967295;
    function qn(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = ND),
        (this.__views__ = []);
    }
    qn.prototype = LD(PD.prototype);
    qn.prototype.constructor = qn;
    bh.exports = qn;
  });
  var Th = g((SX, Ih) => {
    function DD(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    Ih.exports = DD;
  });
  var xh = g((RX, wh) => {
    var MD = kn(),
      FD = Fn(),
      qD = Th();
    function kD(e) {
      if (e instanceof MD) return e.clone();
      var t = new FD(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = qD(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    wh.exports = kD;
  });
  var Sh = g((CX, Oh) => {
    var XD = kn(),
      Ah = Fn(),
      GD = Dn(),
      UD = we(),
      WD = ot(),
      VD = xh(),
      HD = Object.prototype,
      BD = HD.hasOwnProperty;
    function Xn(e) {
      if (WD(e) && !UD(e) && !(e instanceof XD)) {
        if (e instanceof Ah) return e;
        if (BD.call(e, "__wrapped__")) return VD(e);
      }
      return new Ah(e);
    }
    Xn.prototype = GD.prototype;
    Xn.prototype.constructor = Xn;
    Oh.exports = Xn;
  });
  var Ch = g((LX, Rh) => {
    var zD = kn(),
      KD = Jo(),
      jD = ea(),
      YD = Sh();
    function QD(e) {
      var t = jD(e),
        r = YD[t];
      if (typeof r != "function" || !(t in zD.prototype)) return !1;
      if (e === r) return !0;
      var n = KD(r);
      return !!n && e === n[0];
    }
    Rh.exports = QD;
  });
  var Dh = g((PX, Nh) => {
    var Lh = Fn(),
      $D = ch(),
      ZD = Jo(),
      ta = ea(),
      JD = we(),
      Ph = Ch(),
      eM = "Expected a function",
      tM = 8,
      rM = 32,
      nM = 128,
      iM = 256;
    function oM(e) {
      return $D(function (t) {
        var r = t.length,
          n = r,
          i = Lh.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(eM);
          if (i && !a && ta(o) == "wrapper") var a = new Lh([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var u = ta(o),
            s = u == "wrapper" ? ZD(o) : void 0;
          s &&
          Ph(s[0]) &&
          s[1] == (nM | tM | rM | iM) &&
          !s[4].length &&
          s[9] == 1
            ? (a = a[ta(s[0])].apply(a, s[3]))
            : (a = o.length == 1 && Ph(o) ? a[u]() : a.thru(o));
        }
        return function () {
          var l = arguments,
            b = l[0];
          if (a && l.length == 1 && JD(b)) return a.plant(b).value();
          for (var f = 0, E = r ? t[f].apply(this, l) : b; ++f < r; )
            E = t[f].call(this, E);
          return E;
        };
      });
    }
    Nh.exports = oM;
  });
  var Fh = g((NX, Mh) => {
    var aM = Dh(),
      sM = aM();
    Mh.exports = sM;
  });
  var kh = g((DX, qh) => {
    function uM(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    qh.exports = uM;
  });
  var Gh = g((MX, Xh) => {
    var cM = kh(),
      ra = pn();
    function lM(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ra(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ra(t)), (t = t === t ? t : 0)),
        cM(ra(e), t, r)
      );
    }
    Xh.exports = lM;
  });
  var Yh,
    Qh,
    $h,
    Zh,
    fM,
    dM,
    pM,
    gM,
    hM,
    vM,
    mM,
    EM,
    yM,
    _M,
    bM,
    IM,
    TM,
    wM,
    xM,
    Jh,
    ev,
    AM,
    OM,
    SM,
    tv,
    RM,
    CM,
    rv,
    LM,
    na,
    nv,
    Uh,
    Wh,
    iv,
    Cr,
    PM,
    nt,
    ov,
    NM,
    ke,
    Ke,
    Lr,
    av,
    ia,
    Vh,
    oa,
    DM,
    Rr,
    MM,
    FM,
    qM,
    sv,
    Hh,
    kM,
    Bh,
    XM,
    GM,
    UM,
    zh,
    Gn,
    Un,
    Kh,
    jh,
    uv,
    cv = me(() => {
      "use strict";
      (Yh = de(Fh())), (Qh = de(fn())), ($h = de(Gh()));
      Fe();
      aa();
      Nn();
      (Zh = de(xt())),
        ({
          MOUSE_CLICK: fM,
          MOUSE_SECOND_CLICK: dM,
          MOUSE_DOWN: pM,
          MOUSE_UP: gM,
          MOUSE_OVER: hM,
          MOUSE_OUT: vM,
          DROPDOWN_CLOSE: mM,
          DROPDOWN_OPEN: EM,
          SLIDER_ACTIVE: yM,
          SLIDER_INACTIVE: _M,
          TAB_ACTIVE: bM,
          TAB_INACTIVE: IM,
          NAVBAR_CLOSE: TM,
          NAVBAR_OPEN: wM,
          MOUSE_MOVE: xM,
          PAGE_SCROLL_DOWN: Jh,
          SCROLL_INTO_VIEW: ev,
          SCROLL_OUT_OF_VIEW: AM,
          PAGE_SCROLL_UP: OM,
          SCROLLING_IN_VIEW: SM,
          PAGE_FINISH: tv,
          ECOMMERCE_CART_CLOSE: RM,
          ECOMMERCE_CART_OPEN: CM,
          PAGE_START: rv,
          PAGE_SCROLL: LM,
        } = Be),
        (na = "COMPONENT_ACTIVE"),
        (nv = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Uh } = Se),
        ({ getNamespacedParameterId: Wh } = Zh.IX2VanillaUtils),
        (iv = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (Cr = iv(({ element: e, nativeEvent: t }) => e === t.target)),
        (PM = iv(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (nt = (0, Yh.default)([Cr, PM])),
        (ov = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !DM[i.eventTypeId]) return i;
          }
          return null;
        }),
        (NM = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!ov(e, n);
        }),
        (ke = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: u, autoStopEventId: s } = o.config,
            l = ov(e, s);
          return (
            l &&
              tr({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: s + Uh + n.split(Uh)[1],
                actionListId: (0, Qh.default)(l, "action.config.actionListId"),
              }),
            tr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: u,
            }),
            Pr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: u,
            }),
            i
          );
        }),
        (Ke = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (Lr = { handler: Ke(nt, ke) }),
        (av = { ...Lr, types: [na, nv].join(" ") }),
        (ia = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Vh = "mouseover mouseout"),
        (oa = { types: ia }),
        (DM = { PAGE_START: rv, PAGE_FINISH: tv }),
        (Rr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, $h.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (MM = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (FM = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (qM = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = Rr(),
            o = r.scrollOffsetValue,
            s = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return MM(t.getBoundingClientRect(), {
            left: 0,
            top: s,
            right: n,
            bottom: i - s,
          });
        }),
        (sv = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [na, nv].indexOf(n) !== -1 ? n === na : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Hh = (e) => (t, r) => {
          let n = { elementHovered: FM(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (kM = (e) => (t, r) => {
          let n = { ...r, elementVisible: qM(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Bh =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = Rr(),
              {
                event: { config: a, eventTypeId: u },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: l } = a,
              b = l === "PX",
              f = i - o,
              E = Number((n / f).toFixed(2));
            if (r && r.percentTop === E) return r;
            let m = (b ? s : (o * (s || 0)) / 100) / f,
              y,
              T,
              A = 0;
            r &&
              ((y = E > r.percentTop),
              (T = r.scrollingDown !== y),
              (A = T ? E : r.anchorTop));
            let w = u === Jh ? E >= A + m : E <= A - m,
              N = {
                ...r,
                percentTop: E,
                inBounds: w,
                anchorTop: A,
                scrollingDown: y,
              };
            return (r && w && (T || N.inBounds !== r.inBounds) && e(t, N)) || N;
          }),
        (XM = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (GM = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (UM = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (zh =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (Gn = (e = !0) => ({
          ...av,
          handler: Ke(
            e ? nt : Cr,
            sv((t, r) => (r.isActive ? Lr.handler(t, r) : r))
          ),
        })),
        (Un = (e = !0) => ({
          ...av,
          handler: Ke(
            e ? nt : Cr,
            sv((t, r) => (r.isActive ? r : Lr.handler(t, r)))
          ),
        })),
        (Kh = {
          ...oa,
          handler: kM((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === ev) === r
              ? (ke(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (jh = 0.05),
        (uv = {
          [yM]: Gn(),
          [_M]: Un(),
          [EM]: Gn(),
          [mM]: Un(),
          [wM]: Gn(!1),
          [TM]: Un(!1),
          [bM]: Gn(),
          [IM]: Un(),
          [CM]: { types: "ecommerce-cart-open", handler: Ke(nt, ke) },
          [RM]: { types: "ecommerce-cart-close", handler: Ke(nt, ke) },
          [fM]: {
            types: "click",
            handler: Ke(
              nt,
              zh((e, { clickCount: t }) => {
                NM(e) ? t === 1 && ke(e) : ke(e);
              })
            ),
          },
          [dM]: {
            types: "click",
            handler: Ke(
              nt,
              zh((e, { clickCount: t }) => {
                t === 2 && ke(e);
              })
            ),
          },
          [pM]: { ...Lr, types: "mousedown" },
          [gM]: { ...Lr, types: "mouseup" },
          [hM]: {
            types: Vh,
            handler: Ke(
              nt,
              Hh((e, t) => {
                t.elementHovered && ke(e);
              })
            ),
          },
          [vM]: {
            types: Vh,
            handler: Ke(
              nt,
              Hh((e, t) => {
                t.elementHovered || ke(e);
              })
            ),
          },
          [xM]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: u,
                  continuousParameterGroupId: s,
                  reverse: l,
                  restingState: b = 0,
                } = r,
                {
                  clientX: f = o.clientX,
                  clientY: E = o.clientY,
                  pageX: m = o.pageX,
                  pageY: y = o.pageY,
                } = n,
                T = u === "X_AXIS",
                A = n.type === "mouseout",
                w = b / 100,
                N = s,
                L = !1;
              switch (a) {
                case Je.VIEWPORT: {
                  w = T
                    ? Math.min(f, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                }
                case Je.PAGE: {
                  let {
                    scrollLeft: F,
                    scrollTop: k,
                    scrollWidth: q,
                    scrollHeight: j,
                  } = Rr();
                  w = T ? Math.min(F + m, q) / q : Math.min(k + y, j) / j;
                  break;
                }
                case Je.ELEMENT:
                default: {
                  N = Wh(i, s);
                  let F = n.type.indexOf("mouse") === 0;
                  if (F && nt({ element: t, nativeEvent: n }) !== !0) break;
                  let k = t.getBoundingClientRect(),
                    { left: q, top: j, width: K, height: Q } = k;
                  if (!F && !XM({ left: f, top: E }, k)) break;
                  (L = !0), (w = T ? (f - q) / K : (E - j) / Q);
                  break;
                }
              }
              return (
                A && (w > 1 - jh || w < jh) && (w = Math.round(w)),
                (a !== Je.ELEMENT || L || L !== o.elementHovered) &&
                  ((w = l ? 1 - w : w), e.dispatch(Jt(N, w))),
                {
                  elementHovered: L,
                  clientX: f,
                  clientY: E,
                  pageX: m,
                  pageY: y,
                }
              );
            },
          },
          [LM]: {
            types: ia,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = Rr(),
                u = i / (o - a);
              (u = n ? 1 - u : u), e.dispatch(Jt(r, u));
            },
          },
          [SM]: {
            types: ia,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: u,
                  scrollHeight: s,
                  clientHeight: l,
                } = Rr(),
                {
                  basedOn: b,
                  selectedAxis: f,
                  continuousParameterGroupId: E,
                  startsEntering: m,
                  startsExiting: y,
                  addEndOffset: T,
                  addStartOffset: A,
                  addOffsetValue: w = 0,
                  endOffsetValue: N = 0,
                } = r,
                L = f === "X_AXIS";
              if (b === Je.VIEWPORT) {
                let F = L ? o / u : a / s;
                return (
                  F !== i.scrollPercent && t.dispatch(Jt(E, F)),
                  { scrollPercent: F }
                );
              } else {
                let F = Wh(n, E),
                  k = e.getBoundingClientRect(),
                  q = (A ? w : 0) / 100,
                  j = (T ? N : 0) / 100;
                (q = m ? q : 1 - q), (j = y ? j : 1 - j);
                let K = k.top + Math.min(k.height * q, l),
                  te = k.top + k.height * j - K,
                  z = Math.min(l + te, s),
                  I = Math.min(Math.max(0, l - K), z) / z;
                return (
                  I !== i.scrollPercent && t.dispatch(Jt(F, I)),
                  { scrollPercent: I }
                );
              }
            },
          },
          [ev]: Kh,
          [AM]: Kh,
          [Jh]: {
            ...oa,
            handler: Bh((e, t) => {
              t.scrollingDown && ke(e);
            }),
          },
          [OM]: {
            ...oa,
            handler: Bh((e, t) => {
              t.scrollingDown || ke(e);
            }),
          },
          [tv]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Ke(Cr, GM(ke)),
          },
          [rv]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Ke(Cr, UM(ke)),
          },
        });
    });
  var Av = {};
  De(Av, {
    observeRequests: () => sF,
    startActionGroup: () => Pr,
    startEngine: () => Kn,
    stopActionGroup: () => tr,
    stopAllActionGroups: () => Tv,
    stopEngine: () => jn,
  });
  function sF(e) {
    At({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: lF }),
      At({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: fF }),
      At({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: dF }),
      At({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: pF });
  }
  function uF(e) {
    At({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        jn(e),
          yv({ store: e, elementApi: Pe }),
          Kn({ store: e, allowEvents: !0 }),
          _v();
      },
    });
  }
  function cF(e, t) {
    let r = At({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function lF({ rawData: e, defer: t }, r) {
    let n = () => {
      Kn({ store: r, rawData: e, allowEvents: !0 }), _v();
    };
    t ? setTimeout(n, 0) : n();
  }
  function _v() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function fF(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: u,
        testManual: s,
        verbose: l = !0,
      } = e,
      { rawData: b } = e;
    if (n && i && b && u) {
      let f = b.actionLists[n];
      f && (b = QM({ actionList: f, actionItemId: i, rawData: b }));
    }
    if (
      (Kn({ store: t, rawData: b, allowEvents: a, testManual: s }),
      (n && r === Me.GENERAL_START_ACTION) || sa(r))
    ) {
      tr({ store: t, actionListId: n }),
        Iv({ store: t, actionListId: n, eventId: o });
      let f = Pr({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: u,
        verbose: l,
      });
      l && f && t.dispatch(er({ actionListId: n, isPlaying: !u }));
    }
  }
  function dF({ actionListId: e }, t) {
    e ? tr({ store: t, actionListId: e }) : Tv({ store: t }), jn(t);
  }
  function pF(e, t) {
    jn(t), yv({ store: t, elementApi: Pe });
  }
  function Kn({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(ko(t)),
      i.active ||
        (e.dispatch(
          Xo({
            hasBoundaryNodes: !!document.querySelector(Vn),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (yF(e), gF(), e.getState().ixSession.hasDefinedMediaQueries && uF(e)),
        e.dispatch(Go()),
        hF(e, n));
  }
  function gF() {
    let { documentElement: e } = document;
    e.className.indexOf(lv) === -1 && (e.className += ` ${lv}`);
  }
  function hF(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(Ln(n, o)), t ? cF(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function jn(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(vF), eF(), e.dispatch(Uo());
    }
  }
  function vF({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function mF({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: u,
    restingValue: s,
  }) {
    let { ixData: l, ixSession: b } = e.getState(),
      { events: f } = l,
      E = f[n],
      { eventTypeId: m } = E,
      y = {},
      T = {},
      A = [],
      { continuousActionGroups: w } = a,
      { id: N } = a;
    $M(m, i) && (N = ZM(t, N));
    let L = b.hasBoundaryNodes && r ? Sr(r, Vn) : null;
    w.forEach((F) => {
      let { keyframe: k, actionItems: q } = F;
      q.forEach((j) => {
        let { actionTypeId: K } = j,
          { target: Q } = j.config;
        if (!Q) return;
        let te = Q.boundaryMode ? L : null,
          z = tF(Q) + ua + K;
        if (((T[z] = EF(T[z], k, j)), !y[z])) {
          y[z] = !0;
          let { config: C } = j;
          Hn({
            config: C,
            event: E,
            eventTarget: r,
            elementRoot: te,
            elementApi: Pe,
          }).forEach((I) => {
            A.push({ element: I, key: z });
          });
        }
      });
    }),
      A.forEach(({ element: F, key: k }) => {
        let q = T[k],
          j = (0, ct.default)(q, "[0].actionItems[0]", {}),
          { actionTypeId: K } = j,
          Q = zn(K) ? la(K)(F, j) : null,
          te = ca({ element: F, actionItem: j, elementApi: Pe }, Q);
        fa({
          store: e,
          element: F,
          eventId: n,
          actionListId: o,
          actionItem: j,
          destination: te,
          continuous: !0,
          parameterId: N,
          actionGroups: q,
          smoothing: u,
          restingValue: s,
          pluginInstance: Q,
        });
      });
  }
  function EF(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function yF(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    bv(e),
      (0, rr.default)(r, (i, o) => {
        let a = uv[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        xF({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && bF(e);
  }
  function bF(e) {
    let t = () => {
      bv(e);
    };
    _F.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(Cn(window, [r, t]));
    }),
      t();
  }
  function bv(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(zo({ width: n, mediaQueries: i }));
    }
  }
  function xF({ logic: e, store: t, events: r }) {
    AF(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      u = IF(r, wF);
    if (!(0, pv.default)(u)) return;
    (0, rr.default)(u, (f, E) => {
      let m = r[E],
        { action: y, id: T, mediaQueries: A = o.mediaQueryKeys } = m,
        { actionListId: w } = y.config;
      rF(A, o.mediaQueryKeys) || t.dispatch(Ko()),
        y.actionTypeId === Me.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(m.config) ? m.config : [m.config]).forEach((L) => {
            let { continuousParameterGroupId: F } = L,
              k = (0, ct.default)(a, `${w}.continuousParameterGroups`, []),
              q = (0, dv.default)(k, ({ id: Q }) => Q === F),
              j = (L.smoothing || 0) / 100,
              K = (L.restingState || 0) / 100;
            q &&
              f.forEach((Q, te) => {
                let z = T + ua + te;
                mF({
                  store: t,
                  eventStateKey: z,
                  eventTarget: Q,
                  eventId: T,
                  eventConfig: L,
                  actionListId: w,
                  parameterGroup: q,
                  smoothing: j,
                  restingValue: K,
                });
              });
          }),
        (y.actionTypeId === Me.GENERAL_START_ACTION || sa(y.actionTypeId)) &&
          Iv({ store: t, actionListId: w, eventId: T });
    });
    let s = (f) => {
        let { ixSession: E } = t.getState();
        TF(u, (m, y, T) => {
          let A = r[y],
            w = E.eventState[T],
            { action: N, mediaQueries: L = o.mediaQueryKeys } = A;
          if (!Bn(L, E.mediaQueryKey)) return;
          let F = (k = {}) => {
            let q = i(
              {
                store: t,
                element: m,
                event: A,
                eventConfig: k,
                nativeEvent: f,
                eventStateKey: T,
              },
              w
            );
            nF(q, w) || t.dispatch(Wo(T, q));
          };
          N.actionTypeId === Me.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(A.config) ? A.config : [A.config]).forEach(F)
            : F();
        });
      },
      l = (0, mv.default)(s, aF),
      b = ({ target: f = document, types: E, throttle: m }) => {
        E.split(" ")
          .filter(Boolean)
          .forEach((y) => {
            let T = m ? l : s;
            f.addEventListener(y, T), t.dispatch(Cn(f, [y, T]));
          });
      };
    Array.isArray(n) ? n.forEach(b) : typeof n == "string" && b(e);
  }
  function AF(e) {
    if (!oF) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = Yo(o);
      t[a] ||
        ((i === Be.MOUSE_CLICK || i === Be.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function Iv({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      u = a[r],
      s = o[t];
    if (s && s.useFirstGroupAsInitialState) {
      let l = (0, ct.default)(s, "actionItemGroups[0].actionItems", []),
        b = (0, ct.default)(u, "mediaQueries", n.mediaQueryKeys);
      if (!Bn(b, i.mediaQueryKey)) return;
      l.forEach((f) => {
        let { config: E, actionTypeId: m } = f,
          y =
            E?.target?.useEventTarget === !0 && E?.target?.objectId == null
              ? { target: u.target, targets: u.targets }
              : E,
          T = Hn({ config: y, event: u, elementApi: Pe }),
          A = zn(m);
        T.forEach((w) => {
          let N = A ? la(m)(w, f) : null;
          fa({
            destination: ca({ element: w, actionItem: f, elementApi: Pe }, N),
            immediate: !0,
            store: e,
            element: w,
            eventId: r,
            actionItem: f,
            actionListId: t,
            pluginInstance: N,
          });
        });
      });
    }
  }
  function Tv({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, rr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        da(r, e), i && e.dispatch(er({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function tr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      u = a.hasBoundaryNodes && r ? Sr(r, Vn) : null;
    (0, rr.default)(o, (s) => {
      let l = (0, ct.default)(s, "actionItem.config.target.boundaryMode"),
        b = n ? s.eventStateKey === n : !0;
      if (s.actionListId === i && s.eventId === t && b) {
        if (u && l && !Qo(u, s.element)) return;
        da(s, e),
          s.verbose && e.dispatch(er({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function Pr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: u,
  }) {
    let { ixData: s, ixSession: l } = e.getState(),
      { events: b } = s,
      f = b[t] || {},
      { mediaQueries: E = s.mediaQueryKeys } = f,
      m = (0, ct.default)(s, `actionLists.${i}`, {}),
      { actionItemGroups: y, useFirstGroupAsInitialState: T } = m;
    if (!y || !y.length) return !1;
    o >= y.length && (0, ct.default)(f, "config.loop") && (o = 0),
      o === 0 && T && o++;
    let w =
        (o === 0 || (o === 1 && T)) && sa(f.action?.actionTypeId)
          ? f.config.delay
          : void 0,
      N = (0, ct.default)(y, [o, "actionItems"], []);
    if (!N.length || !Bn(E, l.mediaQueryKey)) return !1;
    let L = l.hasBoundaryNodes && r ? Sr(r, Vn) : null,
      F = KM(N),
      k = !1;
    return (
      N.forEach((q, j) => {
        let { config: K, actionTypeId: Q } = q,
          te = zn(Q),
          { target: z } = K;
        if (!z) return;
        let C = z.boundaryMode ? L : null;
        Hn({
          config: K,
          event: f,
          eventTarget: r,
          elementRoot: C,
          elementApi: Pe,
        }).forEach((P, G) => {
          let V = te ? la(Q)(P, q) : null,
            ee = te ? iF(Q)(P, q) : null;
          k = !0;
          let re = F === j && G === 0,
            W = jM({ element: P, actionItem: q }),
            H = ca({ element: P, actionItem: q, elementApi: Pe }, V);
          fa({
            store: e,
            element: P,
            actionItem: q,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: re,
            computedStyle: W,
            destination: H,
            immediate: a,
            verbose: u,
            pluginInstance: V,
            pluginDuration: ee,
            instanceDelay: w,
          });
        });
      }),
      k
    );
  }
  function fa(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: u,
        continuous: s,
        restingValue: l,
        eventId: b,
      } = n,
      f = !s,
      E = BM(),
      { ixElements: m, ixSession: y, ixData: T } = t.getState(),
      A = HM(m, i),
      { refState: w } = m[A] || {},
      N = $o(i),
      L = y.reducedMotion && wi[o.actionTypeId],
      F;
    if (L && s)
      switch (T.events[b]?.eventTypeId) {
        case Be.MOUSE_MOVE:
        case Be.MOUSE_MOVE_IN_VIEWPORT:
          F = l;
          break;
        default:
          F = 0.5;
          break;
      }
    let k = YM(i, w, r, o, Pe, u);
    if (
      (t.dispatch(
        Vo({
          instanceId: E,
          elementId: A,
          origin: k,
          refType: N,
          skipMotion: L,
          skipToValue: F,
          ...n,
        })
      ),
      wv(document.body, "ix2-animation-started", E),
      a)
    ) {
      OF(t, E);
      return;
    }
    At({ store: t, select: ({ ixInstances: q }) => q[E], onChange: xv }),
      f && t.dispatch(Pn(E, y.tick));
  }
  function da(e, t) {
    wv(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === Ev && JM(o, n, Pe), t.dispatch(Ho(e.id));
  }
  function wv(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function OF(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(Pn(t, 0)), e.dispatch(Ln(performance.now(), r));
    let { ixInstances: n } = e.getState();
    xv(n[t], e);
  }
  function xv(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: u,
        renderType: s,
        current: l,
        groupIndex: b,
        eventId: f,
        eventTarget: E,
        eventStateKey: m,
        actionListId: y,
        isCarrier: T,
        styleProp: A,
        verbose: w,
        pluginInstance: N,
      } = e,
      { ixData: L, ixSession: F } = t.getState(),
      { events: k } = L,
      q = k && k[f] ? k[f] : {},
      { mediaQueries: j = L.mediaQueryKeys } = q;
    if (Bn(j, F.mediaQueryKey) && (n || r || i)) {
      if (l || (s === VM && i)) {
        t.dispatch(Bo(o, u, l, a));
        let { ixElements: K } = t.getState(),
          { ref: Q, refType: te, refState: z } = K[o] || {},
          C = z && z[u];
        (te === Ev || zn(u)) && zM(Q, z, C, f, a, A, Pe, s, N);
      }
      if (i) {
        if (T) {
          let K = Pr({
            store: t,
            eventId: f,
            eventTarget: E,
            eventStateKey: m,
            actionListId: y,
            groupIndex: b + 1,
            verbose: w,
          });
          w && !K && t.dispatch(er({ actionListId: y, isPlaying: !1 }));
        }
        da(e, t);
      }
    }
  }
  var dv,
    ct,
    pv,
    gv,
    hv,
    vv,
    rr,
    mv,
    Wn,
    WM,
    sa,
    ua,
    Vn,
    Ev,
    VM,
    lv,
    Hn,
    HM,
    ca,
    At,
    BM,
    zM,
    yv,
    KM,
    jM,
    YM,
    QM,
    $M,
    ZM,
    Bn,
    JM,
    eF,
    tF,
    rF,
    nF,
    zn,
    la,
    iF,
    fv,
    oF,
    aF,
    _F,
    IF,
    TF,
    wF,
    aa = me(() => {
      "use strict";
      (dv = de(Ji())),
        (ct = de(fn())),
        (pv = de(Xp())),
        (gv = de(fg())),
        (hv = de(pg())),
        (vv = de(hg())),
        (rr = de(bg())),
        (mv = de(Sg()));
      Fe();
      Wn = de(xt());
      Nn();
      Dg();
      cv();
      (WM = Object.keys(Wr)),
        (sa = (e) => WM.includes(e)),
        ({
          COLON_DELIMITER: ua,
          BOUNDARY_SELECTOR: Vn,
          HTML_ELEMENT: Ev,
          RENDER_GENERAL: VM,
          W_MOD_IX: lv,
        } = Se),
        ({
          getAffectedElements: Hn,
          getElementId: HM,
          getDestinationValues: ca,
          observeStore: At,
          getInstanceId: BM,
          renderHTMLElement: zM,
          clearAllStyles: yv,
          getMaxDurationItemIndex: KM,
          getComputedStyle: jM,
          getInstanceOrigin: YM,
          reduceListToGroup: QM,
          shouldNamespaceEventParameter: $M,
          getNamespacedParameterId: ZM,
          shouldAllowMediaQuery: Bn,
          cleanupHTMLElement: JM,
          clearObjectCache: eF,
          stringifyTarget: tF,
          mediaQueriesEqual: rF,
          shallowEqual: nF,
        } = Wn.IX2VanillaUtils),
        ({
          isPluginType: zn,
          createPluginInstance: la,
          getPluginDuration: iF,
        } = Wn.IX2VanillaPlugins),
        (fv = navigator.userAgent),
        (oF = fv.match(/iPad/i) || fv.match(/iPhone/)),
        (aF = 12);
      _F = ["resize", "orientationchange"];
      (IF = (e, t) => (0, gv.default)((0, vv.default)(e, t), hv.default)),
        (TF = (e, t) => {
          (0, rr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + ua + o;
              t(i, n, a);
            });
          });
        }),
        (wF = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Hn({ config: t, elementApi: Pe });
        });
    });
  var Rv = g((ga) => {
    "use strict";
    Object.defineProperty(ga, "__esModule", { value: !0 });
    function SF(e, t) {
      for (var r in t)
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    SF(ga, {
      actions: function () {
        return LF;
      },
      destroy: function () {
        return Sv;
      },
      init: function () {
        return MF;
      },
      setEnv: function () {
        return DF;
      },
      store: function () {
        return Yn;
      },
    });
    var RF = bi(),
      CF = PF((_p(), Qe(yp))),
      pa = (aa(), Qe(Av)),
      LF = NF((Nn(), Qe(Cg)));
    function PF(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Ov(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Ov = function (n) {
        return n ? r : t;
      })(e);
    }
    function NF(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var r = Ov(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    var Yn = (0, RF.createStore)(CF.default);
    function DF(e) {
      e() && (0, pa.observeRequests)(Yn);
    }
    function MF(e) {
      Sv(), (0, pa.startEngine)({ store: Yn, rawData: e, allowEvents: !0 });
    }
    function Sv() {
      (0, pa.stopEngine)(Yn);
    }
  });
  var Nv = g((BX, Pv) => {
    "use strict";
    var Cv = Oe(),
      Lv = Rv();
    Lv.setEnv(Cv.env);
    Cv.define(
      "ix2",
      (Pv.exports = function () {
        return Lv;
      })
    );
  });
  var Mv = g((zX, Dv) => {
    "use strict";
    var nr = Oe();
    nr.define(
      "links",
      (Dv.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = nr.env(),
          a = window.location,
          u = document.createElement("a"),
          s = "w--current",
          l = /index\.(html|php)$/,
          b = /\/$/,
          f,
          E;
        r.ready = r.design = r.preview = m;
        function m() {
          (i = o && nr.env("design")),
            (E = nr.env("slug") || a.pathname || ""),
            nr.scroll.off(T),
            (f = []);
          for (var w = document.links, N = 0; N < w.length; ++N) y(w[N]);
          f.length && (nr.scroll.on(T), T());
        }
        function y(w) {
          if (!w.getAttribute("hreflang")) {
            var N =
              (i && w.getAttribute("href-disabled")) || w.getAttribute("href");
            if (((u.href = N), !(N.indexOf(":") >= 0))) {
              var L = e(w);
              if (
                u.hash.length > 1 &&
                u.host + u.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                var F = e(u.hash);
                F.length && f.push({ link: L, sec: F, active: !1 });
                return;
              }
              if (!(N === "#" || N === "")) {
                var k =
                  u.href === a.href || N === E || (l.test(N) && b.test(E));
                A(L, s, k);
              }
            }
          }
        }
        function T() {
          var w = n.scrollTop(),
            N = n.height();
          t.each(f, function (L) {
            if (!L.link.attr("hreflang")) {
              var F = L.link,
                k = L.sec,
                q = k.offset().top,
                j = k.outerHeight(),
                K = N * 0.5,
                Q = k.is(":visible") && q + j - K >= w && q + K <= w + N;
              L.active !== Q && ((L.active = Q), A(F, s, Q));
            }
          });
        }
        function A(w, N, L) {
          var F = w.hasClass(N);
          (L && F) || (!L && !F) || (L ? w.addClass(N) : w.removeClass(N));
        }
        return r;
      })
    );
  });
  var qv = g((KX, Fv) => {
    "use strict";
    var Qn = Oe();
    Qn.define(
      "scroll",
      (Fv.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = y() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          u =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (C) {
              window.setTimeout(C, 15);
            },
          s = Qn.env("editor") ? ".w-editor-body" : "body",
          l =
            "header, " +
            s +
            " > .header, " +
            s +
            " > .w-nav:not([data-no-scroll])",
          b = 'a[href="#"]',
          f = 'a[href*="#"]:not(.w-tab-link):not(' + b + ")",
          E = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          m = document.createElement("style");
        m.appendChild(document.createTextNode(E));
        function y() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var T = /^#[a-zA-Z0-9][\w:.-]*$/;
        function A(C) {
          return T.test(C.hash) && C.host + C.pathname === r.host + r.pathname;
        }
        let w =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function N() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            w.matches
          );
        }
        function L(C, I) {
          var P;
          switch (I) {
            case "add":
              (P = C.attr("tabindex")),
                P
                  ? C.attr("data-wf-tabindex-swap", P)
                  : C.attr("tabindex", "-1");
              break;
            case "remove":
              (P = C.attr("data-wf-tabindex-swap")),
                P
                  ? (C.attr("tabindex", P),
                    C.removeAttr("data-wf-tabindex-swap"))
                  : C.removeAttr("tabindex");
              break;
          }
          C.toggleClass("wf-force-outline-none", I === "add");
        }
        function F(C) {
          var I = C.currentTarget;
          if (
            !(
              Qn.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(I.className))
            )
          ) {
            var P = A(I) ? I.hash : "";
            if (P !== "") {
              var G = e(P);
              G.length &&
                (C && (C.preventDefault(), C.stopPropagation()),
                k(P, C),
                window.setTimeout(
                  function () {
                    q(G, function () {
                      L(G, "add"),
                        G.get(0).focus({ preventScroll: !0 }),
                        L(G, "remove");
                    });
                  },
                  C ? 0 : 300
                ));
            }
          }
        }
        function k(C) {
          if (
            r.hash !== C &&
            n &&
            n.pushState &&
            !(Qn.env.chrome && r.protocol === "file:")
          ) {
            var I = n.state && n.state.hash;
            I !== C && n.pushState({ hash: C }, "", C);
          }
        }
        function q(C, I) {
          var P = i.scrollTop(),
            G = j(C);
          if (P !== G) {
            var V = K(C, P, G),
              ee = Date.now(),
              re = function () {
                var W = Date.now() - ee;
                window.scroll(0, Q(P, G, W, V)),
                  W <= V ? u(re) : typeof I == "function" && I();
              };
            u(re);
          }
        }
        function j(C) {
          var I = e(l),
            P = I.css("position") === "fixed" ? I.outerHeight() : 0,
            G = C.offset().top - P;
          if (C.data("scroll") === "mid") {
            var V = i.height() - P,
              ee = C.outerHeight();
            ee < V && (G -= Math.round((V - ee) / 2));
          }
          return G;
        }
        function K(C, I, P) {
          if (N()) return 0;
          var G = 1;
          return (
            a.add(C).each(function (V, ee) {
              var re = parseFloat(ee.getAttribute("data-scroll-time"));
              !isNaN(re) && re >= 0 && (G = re);
            }),
            (472.143 * Math.log(Math.abs(I - P) + 125) - 2e3) * G
          );
        }
        function Q(C, I, P, G) {
          return P > G ? I : C + (I - C) * te(P / G);
        }
        function te(C) {
          return C < 0.5
            ? 4 * C * C * C
            : (C - 1) * (2 * C - 2) * (2 * C - 2) + 1;
        }
        function z() {
          var { WF_CLICK_EMPTY: C, WF_CLICK_SCROLL: I } = t;
          o.on(I, f, F),
            o.on(C, b, function (P) {
              P.preventDefault();
            }),
            document.head.insertBefore(m, document.head.firstChild);
        }
        return { ready: z };
      })
    );
  });
  var Xv = g((jX, kv) => {
    "use strict";
    var FF = Oe();
    FF.define(
      "touch",
      (kv.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            u = !1,
            s = Math.min(Math.round(window.innerWidth * 0.04), 40),
            l,
            b;
          o.addEventListener("touchstart", f, !1),
            o.addEventListener("touchmove", E, !1),
            o.addEventListener("touchend", m, !1),
            o.addEventListener("touchcancel", y, !1),
            o.addEventListener("mousedown", f, !1),
            o.addEventListener("mousemove", E, !1),
            o.addEventListener("mouseup", m, !1),
            o.addEventListener("mouseout", y, !1);
          function f(A) {
            var w = A.touches;
            (w && w.length > 1) ||
              ((a = !0),
              w ? ((u = !0), (l = w[0].clientX)) : (l = A.clientX),
              (b = l));
          }
          function E(A) {
            if (a) {
              if (u && A.type === "mousemove") {
                A.preventDefault(), A.stopPropagation();
                return;
              }
              var w = A.touches,
                N = w ? w[0].clientX : A.clientX,
                L = N - b;
              (b = N),
                Math.abs(L) > s &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", A, { direction: L > 0 ? "right" : "left" }), y());
            }
          }
          function m(A) {
            if (a && ((a = !1), u && A.type === "mouseup")) {
              A.preventDefault(), A.stopPropagation(), (u = !1);
              return;
            }
          }
          function y() {
            a = !1;
          }
          function T() {
            o.removeEventListener("touchstart", f, !1),
              o.removeEventListener("touchmove", E, !1),
              o.removeEventListener("touchend", m, !1),
              o.removeEventListener("touchcancel", y, !1),
              o.removeEventListener("mousedown", f, !1),
              o.removeEventListener("mousemove", E, !1),
              o.removeEventListener("mouseup", m, !1),
              o.removeEventListener("mouseout", y, !1),
              (o = null);
          }
          this.destroy = T;
        }
        function i(o, a, u) {
          var s = e.Event(o, { originalEvent: a });
          e(a.target).trigger(s, u);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var Wv = g((YX, Uv) => {
    "use strict";
    var Ot = Oe(),
      qF = Ct(),
      je = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      Gv = !0,
      kF = /^#[a-zA-Z0-9\-_]+$/;
    Ot.define(
      "dropdown",
      (Uv.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = Ot.env(),
          o = !1,
          a,
          u = Ot.env.touch,
          s = ".w-dropdown",
          l = "w--open",
          b = qF.triggers,
          f = 900,
          E = "focusout" + s,
          m = "keydown" + s,
          y = "mouseenter" + s,
          T = "mousemove" + s,
          A = "mouseleave" + s,
          w = (u ? "click" : "mouseup") + s,
          N = "w-close" + s,
          L = "setting" + s,
          F = e(document),
          k;
        (n.ready = q),
          (n.design = function () {
            o && I(), (o = !1), q();
          }),
          (n.preview = function () {
            (o = !0), q();
          });
        function q() {
          (a = i && Ot.env("design")), (k = F.find(s)), k.each(j);
        }
        function j(c, D) {
          var U = e(D),
            O = e.data(D, s);
          O ||
            (O = e.data(D, s, {
              open: !1,
              el: U,
              config: {},
              selectedIdx: -1,
            })),
            (O.toggle = O.el.children(".w-dropdown-toggle")),
            (O.list = O.el.children(".w-dropdown-list")),
            (O.links = O.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (O.complete = V(O)),
            (O.mouseLeave = re(O)),
            (O.mouseUpOutside = G(O)),
            (O.mouseMoveOutside = W(O)),
            K(O);
          var $ = O.toggle.attr("id"),
            se = O.list.attr("id");
          $ || ($ = "w-dropdown-toggle-" + c),
            se || (se = "w-dropdown-list-" + c),
            O.toggle.attr("id", $),
            O.toggle.attr("aria-controls", se),
            O.toggle.attr("aria-haspopup", "menu"),
            O.toggle.attr("aria-expanded", "false"),
            O.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            O.toggle.prop("tagName") !== "BUTTON" &&
              (O.toggle.attr("role", "button"),
              O.toggle.attr("tabindex") || O.toggle.attr("tabindex", "0")),
            O.list.attr("id", se),
            O.list.attr("aria-labelledby", $),
            O.links.each(function (_, B) {
              B.hasAttribute("tabindex") || B.setAttribute("tabindex", "0"),
                kF.test(B.hash) && B.addEventListener("click", C.bind(null, O));
            }),
            O.el.off(s),
            O.toggle.off(s),
            O.nav && O.nav.off(s);
          var ie = te(O, Gv);
          a && O.el.on(L, Q(O)),
            a ||
              (i && ((O.hovering = !1), C(O)),
              O.config.hover && O.toggle.on(y, ee(O)),
              O.el.on(N, ie),
              O.el.on(m, H(O)),
              O.el.on(E, v(O)),
              O.toggle.on(w, ie),
              O.toggle.on(m, p(O)),
              (O.nav = O.el.closest(".w-nav")),
              O.nav.on(N, ie));
        }
        function K(c) {
          var D = Number(c.el.css("z-index"));
          (c.manageZ = D === f || D === f + 1),
            (c.config = {
              hover: c.el.attr("data-hover") === "true" && !u,
              delay: c.el.attr("data-delay"),
            });
        }
        function Q(c) {
          return function (D, U) {
            (U = U || {}),
              K(c),
              U.open === !0 && z(c, !0),
              U.open === !1 && C(c, { immediate: !0 });
          };
        }
        function te(c, D) {
          return r(function (U) {
            if (c.open || (U && U.type === "w-close"))
              return C(c, { forceClose: D });
            z(c);
          });
        }
        function z(c) {
          if (!c.open) {
            P(c),
              (c.open = !0),
              c.list.addClass(l),
              c.toggle.addClass(l),
              c.toggle.attr("aria-expanded", "true"),
              b.intro(0, c.el[0]),
              Ot.redraw.up(),
              c.manageZ && c.el.css("z-index", f + 1);
            var D = Ot.env("editor");
            a || F.on(w, c.mouseUpOutside),
              c.hovering && !D && c.el.on(A, c.mouseLeave),
              c.hovering && D && F.on(T, c.mouseMoveOutside),
              window.clearTimeout(c.delayId);
          }
        }
        function C(c, { immediate: D, forceClose: U } = {}) {
          if (c.open && !(c.config.hover && c.hovering && !U)) {
            c.toggle.attr("aria-expanded", "false"), (c.open = !1);
            var O = c.config;
            if (
              (b.outro(0, c.el[0]),
              F.off(w, c.mouseUpOutside),
              F.off(T, c.mouseMoveOutside),
              c.el.off(A, c.mouseLeave),
              window.clearTimeout(c.delayId),
              !O.delay || D)
            )
              return c.complete();
            c.delayId = window.setTimeout(c.complete, O.delay);
          }
        }
        function I() {
          F.find(s).each(function (c, D) {
            e(D).triggerHandler(N);
          });
        }
        function P(c) {
          var D = c.el[0];
          k.each(function (U, O) {
            var $ = e(O);
            $.is(D) || $.has(D).length || $.triggerHandler(N);
          });
        }
        function G(c) {
          return (
            c.mouseUpOutside && F.off(w, c.mouseUpOutside),
            r(function (D) {
              if (c.open) {
                var U = e(D.target);
                if (!U.closest(".w-dropdown-toggle").length) {
                  var O = e.inArray(c.el[0], U.parents(s)) === -1,
                    $ = Ot.env("editor");
                  if (O) {
                    if ($) {
                      var se =
                          U.parents().length === 1 &&
                          U.parents("svg").length === 1,
                        ie = U.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (se || ie) return;
                    }
                    C(c);
                  }
                }
              }
            })
          );
        }
        function V(c) {
          return function () {
            c.list.removeClass(l),
              c.toggle.removeClass(l),
              c.manageZ && c.el.css("z-index", "");
          };
        }
        function ee(c) {
          return function () {
            (c.hovering = !0), z(c);
          };
        }
        function re(c) {
          return function () {
            (c.hovering = !1), c.links.is(":focus") || C(c);
          };
        }
        function W(c) {
          return r(function (D) {
            if (c.open) {
              var U = e(D.target),
                O = e.inArray(c.el[0], U.parents(s)) === -1;
              if (O) {
                var $ = U.parents(".w-editor-bem-EditorHoverControls").length,
                  se = U.parents(".w-editor-bem-RTToolbar").length,
                  ie = e(".w-editor-bem-EditorOverlay"),
                  _ =
                    ie.find(".w-editor-edit-outline").length ||
                    ie.find(".w-editor-bem-RTToolbar").length;
                if ($ || se || _) return;
                (c.hovering = !1), C(c);
              }
            }
          });
        }
        function H(c) {
          return function (D) {
            if (!(a || !c.open))
              switch (
                ((c.selectedIdx = c.links.index(document.activeElement)),
                D.keyCode)
              ) {
                case je.HOME:
                  return c.open
                    ? ((c.selectedIdx = 0), h(c), D.preventDefault())
                    : void 0;
                case je.END:
                  return c.open
                    ? ((c.selectedIdx = c.links.length - 1),
                      h(c),
                      D.preventDefault())
                    : void 0;
                case je.ESCAPE:
                  return C(c), c.toggle.focus(), D.stopPropagation();
                case je.ARROW_RIGHT:
                case je.ARROW_DOWN:
                  return (
                    (c.selectedIdx = Math.min(
                      c.links.length - 1,
                      c.selectedIdx + 1
                    )),
                    h(c),
                    D.preventDefault()
                  );
                case je.ARROW_LEFT:
                case je.ARROW_UP:
                  return (
                    (c.selectedIdx = Math.max(-1, c.selectedIdx - 1)),
                    h(c),
                    D.preventDefault()
                  );
              }
          };
        }
        function h(c) {
          c.links[c.selectedIdx] && c.links[c.selectedIdx].focus();
        }
        function p(c) {
          var D = te(c, Gv);
          return function (U) {
            if (!a) {
              if (!c.open)
                switch (U.keyCode) {
                  case je.ARROW_UP:
                  case je.ARROW_DOWN:
                    return U.stopPropagation();
                }
              switch (U.keyCode) {
                case je.SPACE:
                case je.ENTER:
                  return D(), U.stopPropagation(), U.preventDefault();
              }
            }
          };
        }
        function v(c) {
          return r(function (D) {
            var { relatedTarget: U, target: O } = D,
              $ = c.el[0],
              se = $.contains(U) || $.contains(O);
            return se || C(c), D.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var Vv = g((ha) => {
    "use strict";
    Object.defineProperty(ha, "__esModule", { value: !0 });
    Object.defineProperty(ha, "default", {
      enumerable: !0,
      get: function () {
        return XF;
      },
    });
    function XF(e, t, r, n, i, o, a, u, s, l, b, f, E) {
      return function (m) {
        e(m);
        var y = m.form,
          T = {
            name: y.attr("data-name") || y.attr("name") || "Untitled Form",
            pageId: y.attr("data-wf-page-id") || "",
            elementId: y.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              y.html()
            ),
            trackingCookies: n(),
          };
        let A = y.attr("data-wf-flow");
        A && (T.wfFlow = A), i(m);
        var w = o(y, T.fields);
        if (w) return a(w);
        if (((T.fileUploads = u(y)), s(m), !l)) {
          b(m);
          return;
        }
        f.ajax({
          url: E,
          type: "POST",
          data: T,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (N) {
            N && N.code === 200 && (m.success = !0), b(m);
          })
          .fail(function () {
            b(m);
          });
      };
    }
  });
  var Bv = g(($X, Hv) => {
    "use strict";
    var $n = Oe();
    $n.define(
      "forms",
      (Hv.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          u = ".w-form",
          s,
          l = /e(-)?mail/i,
          b = /^\S+@\S+$/,
          f = window.alert,
          E = $n.env(),
          m,
          y,
          T,
          A = /list-manage[1-9]?.com/i,
          w = t.debounce(function () {
            f(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
               !E && !m && F();
            };
        
        function L(W, H) {
          var h = e(H),
            p = e.data(H, u);
          p || (p = e.data(H, u, { form: h })), k(p);
          var v = h.closest("div.w-form");
          (p.done = v.find("> .w-form-done")),
            (p.fail = v.find("> .w-form-fail")),
            (p.fileUploads = v.find(".w-file-upload")),
            p.fileUploads.each(function (U) {
              V(U, p);
            });
          var c =
            p.form.attr("aria-label") || p.form.attr("data-name") || "Form";
          p.done.attr("aria-label") || p.form.attr("aria-label", c),
            p.done.attr("tabindex", "-1"),
            p.done.attr("role", "region"),
            p.done.attr("aria-label") ||
              p.done.attr("aria-label", c + " success"),
            p.fail.attr("tabindex", "-1"),
            p.fail.attr("role", "region"),
            p.fail.attr("aria-label") ||
              p.fail.attr("aria-label", c + " failure");
          var D = (p.action = h.attr("action"));
          if (
            ((p.handler = null),
            (p.redirect = h.attr("data-redirect")),
            A.test(D))
          ) {
            p.handler = I;
            return;
          }
          if (!D) {
            if (s) {
              p.handler = (() => {
                let U = Vv().default;
                return U(k, o, $n, te, G, j, f, K, q, s, P, e, y);
              })();
              return;
            }
            w();
          }
        }
        function F() {
          (m = !0),
            n.on("submit", u + " form", function (U) {
              var O = e.data(this, u);
              O.handler && ((O.evt = U), O.handler(O));
            });
          let W = ".w-checkbox-input",
            H = ".w-radio-input",
            h = "w--redirected-checked",
            p = "w--redirected-focus",
            v = "w--redirected-focus-visible",
            c = ":focus-visible, [data-wf-focus-visible]",
            D = [
              ["checkbox", W],
              ["radio", H],
            ];
          n.on(
            "change",
            u + ' form input[type="checkbox"]:not(' + W + ")",
            (U) => {
              e(U.target).siblings(W).toggleClass(h);
            }
          ),
            n.on("change", u + ' form input[type="radio"]', (U) => {
              e(`input[name="${U.target.name}"]:not(${W})`).map(($, se) =>
                e(se).siblings(H).removeClass(h)
              );
              let O = e(U.target);
              O.hasClass("w-radio-input") || O.siblings(H).addClass(h);
            }),
            D.forEach(([U, O]) => {
              n.on(
                "focus",
                u + ` form input[type="${U}"]:not(` + O + ")",
                ($) => {
                  e($.target).siblings(O).addClass(p),
                    e($.target).filter(c).siblings(O).addClass(v);
                }
              ),
                n.on(
                  "blur",
                  u + ` form input[type="${U}"]:not(` + O + ")",
                  ($) => {
                    e($.target).siblings(O).removeClass(`${p} ${v}`);
                  }
                );
            });
        }
        function k(W) {
          var H = (W.btn = W.form.find(':input[type="submit"]'));
          (W.wait = W.btn.attr("data-wait") || null),
            (W.success = !1),
            H.prop("disabled", !1),
            W.label && H.val(W.label);
        }
        function q(W) {
          var H = W.btn,
            h = W.wait;
          H.prop("disabled", !0), h && ((W.label = H.val()), H.val(h));
        }
        function j(W, H) {
          var h = null;
          return (
            (H = H || {}),
            W.find(':input:not([type="submit"]):not([type="file"])').each(
              function (p, v) {
                var c = e(v),
                  D = c.attr("type"),
                  U =
                    c.attr("data-name") || c.attr("name") || "Field " + (p + 1);
                U = encodeURIComponent(U);
                var O = c.val();
                if (D === "checkbox") O = c.is(":checked");
                else if (D === "radio") {
                  if (H[U] === null || typeof H[U] == "string") return;
                  O =
                    W.find(
                      'input[name="' + c.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof O == "string" && (O = e.trim(O)),
                  (H[U] = O),
                  (h = h || z(c, D, U, O));
              }
            ),
            h
          );
        }
        function K(W) {
          var H = {};
          return (
            W.find(':input[type="file"]').each(function (h, p) {
              var v = e(p),
                c = v.attr("data-name") || v.attr("name") || "File " + (h + 1),
                D = v.attr("data-value");
              typeof D == "string" && (D = e.trim(D)), (H[c] = D);
            }),
            H
          );
        }
        let Q = { _mkto_trk: "marketo" };
        function te() {
          return document.cookie.split("; ").reduce(function (H, h) {
            let p = h.split("="),
              v = p[0];
            if (v in Q) {
              let c = Q[v],
                D = p.slice(1).join("=");
              H[c] = D;
            }
            return H;
          }, {});
        }
        function z(W, H, h, p) {
          var v = null;
          return (
            H === "password"
              ? (v = "Passwords cannot be submitted.")
              : W.attr("required")
              ? p
                ? l.test(W.attr("type")) &&
                  (b.test(p) ||
                    (v = "Please enter a valid email address for: " + h))
                : (v = "Please fill out the required field: " + h)
              : h === "g-recaptcha-response" &&
                !p &&
                (v = "Please confirm you\u2019re not a robot."),
            v
          );
        }
        function C(W) {
          G(W), P(W);
        }
        function I(W) {
          k(W);
          var H = W.form,
            h = {};
          if (/^https/.test(o.href) && !/^https/.test(W.action)) {
            H.attr("method", "post");
            return;
          }
          G(W);
          var p = j(H, h);
          if (p) return f(p);
          q(W);
          var v;
          t.each(h, function (O, $) {
            l.test($) && (h.EMAIL = O),
              /^((full[ _-]?)?name)$/i.test($) && (v = O),
              /^(first[ _-]?name)$/i.test($) && (h.FNAME = O),
              /^(last[ _-]?name)$/i.test($) && (h.LNAME = O);
          }),
            v &&
              !h.FNAME &&
              ((v = v.split(" ")),
              (h.FNAME = v[0]),
              (h.LNAME = h.LNAME || v[1]));
          var c = W.action.replace("/post?", "/post-json?") + "&c=?",
            D = c.indexOf("u=") + 2;
          D = c.substring(D, c.indexOf("&", D));
          var U = c.indexOf("id=") + 3;
          (U = c.substring(U, c.indexOf("&", U))),
            (h["b_" + D + "_" + U] = ""),
            e
              .ajax({ url: c, data: h, dataType: "jsonp" })
              .done(function (O) {
                (W.success = O.result === "success" || /already/.test(O.msg)),
                  W.success || console.info("MailChimp error: " + O.msg),
                  P(W);
              })
              .fail(function () {
                P(W);
              });
        }
        function P(W) {
          var H = W.form,
            h = W.redirect,
            p = W.success;
          if (p && h) {
            $n.location(h);
            return;
          }
          W.done.toggle(p),
            W.fail.toggle(!p),
            p ? W.done.focus() : W.fail.focus(),
            H.toggle(!p),
            k(W);
        }
        function G(W) {
          W.evt && W.evt.preventDefault(), (W.evt = null);
        }
        function V(W, H) {
          if (!H.fileUploads || !H.fileUploads[W]) return;
          var h,
            p = e(H.fileUploads[W]),
            v = p.find("> .w-file-upload-default"),
            c = p.find("> .w-file-upload-uploading"),
            D = p.find("> .w-file-upload-success"),
            U = p.find("> .w-file-upload-error"),
            O = v.find(".w-file-upload-input"),
            $ = v.find(".w-file-upload-label"),
            se = $.children(),
            ie = U.find(".w-file-upload-error-msg"),
            _ = D.find(".w-file-upload-file"),
            B = D.find(".w-file-remove-link"),
            J = _.find(".w-file-upload-file-name"),
            Y = ie.attr("data-w-size-error"),
            le = ie.attr("data-w-type-error"),
            Ie = ie.attr("data-w-generic-error");
          if (
            (E ||
              $.on("click keydown", function (S) {
                (S.type === "keydown" && S.which !== 13 && S.which !== 32) ||
                  (S.preventDefault(), O.click());
              }),
            $.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            E)
          )
            O.on("click", function (S) {
              S.preventDefault();
            }),
              $.on("click", function (S) {
                S.preventDefault();
              }),
              se.on("click", function (S) {
                S.preventDefault();
              });
          else {
            B.on("click keydown", function (S) {
              if (S.type === "keydown") {
                if (S.which !== 13 && S.which !== 32) return;
                S.preventDefault();
              }
              O.removeAttr("data-value"),
                O.val(""),
                J.html(""),
                v.toggle(!0),
                D.toggle(!1),
                $.focus();
            }),
              O.on("change", function (S) {
                (h = S.target && S.target.files && S.target.files[0]),
                  h &&
                    (v.toggle(!1),
                    U.toggle(!1),
                    c.toggle(!0),
                    c.focus(),
                    J.text(h.name),
                    M() || q(H),
                    (H.fileUploads[W].uploading = !0),
                    ee(h, x));
              });
            var Ae = $.outerHeight();
            O.height(Ae), O.width(1);
          }
          function d(S) {
            var X = S.responseJSON && S.responseJSON.msg,
              ne = Ie;
            typeof X == "string" && X.indexOf("InvalidFileTypeError") === 0
              ? (ne = le)
              : typeof X == "string" &&
                X.indexOf("MaxFileSizeError") === 0 &&
                (ne = Y),
              ie.text(ne),
              O.removeAttr("data-value"),
              O.val(""),
              c.toggle(!1),
              v.toggle(!0),
              U.toggle(!0),
              U.focus(),
              (H.fileUploads[W].uploading = !1),
              M() || k(H);
          }
          function x(S, X) {
            if (S) return d(S);
            var ne = X.fileName,
              ae = X.postData,
              he = X.fileId,
              Z = X.s3Url;
            O.attr("data-value", he), re(Z, ae, h, ne, R);
          }
          function R(S) {
            if (S) return d(S);
            c.toggle(!1),
              D.css("display", "inline-block"),
              D.focus(),
              (H.fileUploads[W].uploading = !1),
              M() || k(H);
          }
          function M() {
            var S = (H.fileUploads && H.fileUploads.toArray()) || [];
            return S.some(function (X) {
              return X.uploading;
            });
          }
        }
        function ee(W, H) {
          var h = new URLSearchParams({ name: W.name, size: W.size });
          e.ajax({ type: "GET", url: `${T}?${h}`, crossDomain: !0 })
            .done(function (p) {
              H(null, p);
            })
            .fail(function (p) {
              H(p);
            });
        }
        function re(W, H, h, p, v) {
          var c = new FormData();
          for (var D in H) c.append(D, H[D]);
          c.append("file", h, p),
            e
              .ajax({
                type: "POST",
                url: W,
                data: c,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                v(null);
              })
              .fail(function (U) {
                v(U);
              });
        }
        return r;
      })
    );
  });
  var jv = g((ZX, Kv) => {
    "use strict";
    var va = Oe(),
      zv = "w-condition-invisible",
      GF = "." + zv;
    function UF(e) {
      return e.filter(function (t) {
        return !Dr(t);
      });
    }
    function Dr(e) {
      return !!(e.$el && e.$el.closest(GF).length);
    }
    function ma(e, t) {
      for (var r = e; r >= 0; r--) if (!Dr(t[r])) return r;
      return -1;
    }
    function Ea(e, t) {
      for (var r = e; r <= t.length - 1; r++) if (!Dr(t[r])) return r;
      return -1;
    }
    function WF(e, t) {
      return ma(e - 1, t) === -1;
    }
    function VF(e, t) {
      return Ea(e + 1, t) === -1;
    }
    function Nr(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t);
    }
    function HF(e, t, r, n) {
      var i = r.tram,
        o = Array.isArray,
        a = "w-lightbox",
        u = a + "-",
        s = /(^|\s+)/g,
        l = [],
        b,
        f,
        E,
        m = [];
      function y(p, v) {
        return (
          (l = o(p) ? p : [p]),
          f || y.build(),
          UF(l).length > 1 &&
            ((f.items = f.empty),
            l.forEach(function (c, D) {
              var U = H("thumbnail"),
                O = H("item")
                  .prop("tabIndex", 0)
                  .attr("aria-controls", "w-lightbox-view")
                  .attr("role", "tab")
                  .append(U);
              Nr(O, `show item ${D + 1} of ${l.length}`),
                Dr(c) && O.addClass(zv),
                (f.items = f.items.add(O)),
                te(c.thumbnailUrl || c.url, function ($) {
                  $.prop("width") > $.prop("height")
                    ? V($, "wide")
                    : V($, "tall"),
                    U.append(V($, "thumbnail-image"));
                });
            }),
            f.strip.empty().append(f.items),
            V(f.content, "group")),
          i(ee(f.lightbox, "hide").trigger("focus"))
            .add("opacity .3s")
            .start({ opacity: 1 }),
          V(f.html, "noscroll"),
          y.show(v || 0)
        );
      }
      (y.build = function () {
        return (
          y.destroy(),
          (f = { html: r(t.documentElement), empty: r() }),
          (f.arrowLeft = H("control left inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (f.arrowRight = H("control right inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (f.close = H("control close").attr("role", "button")),
          Nr(f.arrowLeft, "previous image"),
          Nr(f.arrowRight, "next image"),
          Nr(f.close, "close lightbox"),
          (f.spinner = H("spinner")
            .attr("role", "progressbar")
            .attr("aria-live", "polite")
            .attr("aria-hidden", !1)
            .attr("aria-busy", !0)
            .attr("aria-valuemin", 0)
            .attr("aria-valuemax", 100)
            .attr("aria-valuenow", 0)
            .attr("aria-valuetext", "Loading image")),
          (f.strip = H("strip").attr("role", "tablist")),
          (E = new I(f.spinner, P("hide"))),
          (f.content = H("content").append(
            f.spinner,
            f.arrowLeft,
            f.arrowRight,
            f.close
          )),
          (f.container = H("container").append(f.content, f.strip)),
          (f.lightbox = H("backdrop hide").append(f.container)),
          f.strip.on("click", G("item"), L),
          f.content
            .on("swipe", F)
            .on("click", G("left"), A)
            .on("click", G("right"), w)
            .on("click", G("close"), N)
            .on("click", G("image, caption"), w),
          f.container.on("click", G("view"), N).on("dragstart", G("img"), q),
          f.lightbox.on("keydown", j).on("focusin", k),
          r(n).append(f.lightbox),
          y
        );
      }),
        (y.destroy = function () {
          f && (ee(f.html, "noscroll"), f.lightbox.remove(), (f = void 0));
        }),
        (y.show = function (p) {
          if (p !== b) {
            var v = l[p];
            if (!v) return y.hide();
            if (Dr(v)) {
              if (p < b) {
                var c = ma(p - 1, l);
                p = c > -1 ? c : p;
              } else {
                var D = Ea(p + 1, l);
                p = D > -1 ? D : p;
              }
              v = l[p];
            }
            var U = b;
            (b = p),
              f.spinner
                .attr("aria-hidden", !1)
                .attr("aria-busy", !0)
                .attr("aria-valuenow", 0)
                .attr("aria-valuetext", "Loading image"),
              E.show();
            var O = (v.html && h(v.width, v.height)) || v.url;
            return (
              te(O, function ($) {
                if (p !== b) return;
                var se = H("figure", "figure").append(V($, "image")),
                  ie = H("frame").append(se),
                  _ = H("view")
                    .prop("tabIndex", 0)
                    .attr("id", "w-lightbox-view")
                    .append(ie),
                  B,
                  J;
                v.html &&
                  ((B = r(v.html)),
                  (J = B.is("iframe")),
                  J && B.on("load", Y),
                  se.append(V(B, "embed"))),
                  v.caption &&
                    se.append(H("caption", "figcaption").text(v.caption)),
                  f.spinner.before(_),
                  J || Y();
                function Y() {
                  if (
                    (f.spinner
                      .attr("aria-hidden", !0)
                      .attr("aria-busy", !1)
                      .attr("aria-valuenow", 100)
                      .attr("aria-valuetext", "Loaded image"),
                    E.hide(),
                    p !== b)
                  ) {
                    _.remove();
                    return;
                  }
                  let le = WF(p, l);
                  re(f.arrowLeft, "inactive", le),
                    W(f.arrowLeft, le),
                    le && f.arrowLeft.is(":focus") && f.arrowRight.focus();
                  let Ie = VF(p, l);
                  if (
                    (re(f.arrowRight, "inactive", Ie),
                    W(f.arrowRight, Ie),
                    Ie && f.arrowRight.is(":focus") && f.arrowLeft.focus(),
                    f.view
                      ? (i(f.view)
                          .add("opacity .3s")
                          .start({ opacity: 0 })
                          .then(z(f.view)),
                        i(_)
                          .add("opacity .3s")
                          .add("transform .3s")
                          .set({ x: p > U ? "80px" : "-80px" })
                          .start({ opacity: 1, x: 0 }))
                      : _.css("opacity", 1),
                    (f.view = _),
                    f.view.prop("tabIndex", 0),
                    f.items)
                  ) {
                    ee(f.items, "active"), f.items.removeAttr("aria-selected");
                    var Ae = f.items.eq(p);
                    V(Ae, "active"), Ae.attr("aria-selected", !0), C(Ae);
                  }
                }
              }),
              f.close.prop("tabIndex", 0),
              r(":focus").addClass("active-lightbox"),
              m.length === 0 &&
                (r("body")
                  .children()
                  .each(function () {
                    r(this).hasClass("w-lightbox-backdrop") ||
                      r(this).is("script") ||
                      (m.push({
                        node: r(this),
                        hidden: r(this).attr("aria-hidden"),
                        tabIndex: r(this).attr("tabIndex"),
                      }),
                      r(this).attr("aria-hidden", !0).attr("tabIndex", -1));
                  }),
                f.close.focus()),
              y
            );
          }
        }),
        (y.hide = function () {
          return (
            i(f.lightbox).add("opacity .3s").start({ opacity: 0 }).then(Q), y
          );
        }),
        (y.prev = function () {
          var p = ma(b - 1, l);
          p > -1 && y.show(p);
        }),
        (y.next = function () {
          var p = Ea(b + 1, l);
          p > -1 && y.show(p);
        });
      function T(p) {
        return function (v) {
          this === v.target && (v.stopPropagation(), v.preventDefault(), p());
        };
      }
      var A = T(y.prev),
        w = T(y.next),
        N = T(y.hide),
        L = function (p) {
          var v = r(this).index();
          p.preventDefault(), y.show(v);
        },
        F = function (p, v) {
          p.preventDefault(),
            v.direction === "left"
              ? y.next()
              : v.direction === "right" && y.prev();
        },
        k = function () {
          this.focus();
        };
      function q(p) {
        p.preventDefault();
      }
      function j(p) {
        var v = p.keyCode;
        v === 27 || K(v, "close")
          ? y.hide()
          : v === 37 || K(v, "left")
          ? y.prev()
          : v === 39 || K(v, "right")
          ? y.next()
          : K(v, "item") && r(":focus").click();
      }
      function K(p, v) {
        if (p !== 13 && p !== 32) return !1;
        var c = r(":focus").attr("class"),
          D = P(v).trim();
        return c.includes(D);
      }
      function Q() {
        f &&
          (f.strip.scrollLeft(0).empty(),
          ee(f.html, "noscroll"),
          V(f.lightbox, "hide"),
          f.view && f.view.remove(),
          ee(f.content, "group"),
          V(f.arrowLeft, "inactive"),
          V(f.arrowRight, "inactive"),
          (b = f.view = void 0),
          m.forEach(function (p) {
            var v = p.node;
            v &&
              (p.hidden
                ? v.attr("aria-hidden", p.hidden)
                : v.removeAttr("aria-hidden"),
              p.tabIndex
                ? v.attr("tabIndex", p.tabIndex)
                : v.removeAttr("tabIndex"));
          }),
          (m = []),
          r(".active-lightbox").removeClass("active-lightbox").focus());
      }
      function te(p, v) {
        var c = H("img", "img");
        return (
          c.one("load", function () {
            v(c);
          }),
          c.attr("src", p),
          c
        );
      }
      function z(p) {
        return function () {
          p.remove();
        };
      }
      function C(p) {
        var v = p.get(0),
          c = f.strip.get(0),
          D = v.offsetLeft,
          U = v.clientWidth,
          O = c.scrollLeft,
          $ = c.clientWidth,
          se = c.scrollWidth - $,
          ie;
        D < O
          ? (ie = Math.max(0, D + U - $))
          : D + U > $ + O && (ie = Math.min(D, se)),
          ie != null &&
            i(f.strip).add("scroll-left 500ms").start({ "scroll-left": ie });
      }
      function I(p, v, c) {
        (this.$element = p),
          (this.className = v),
          (this.delay = c || 200),
          this.hide();
      }
      (I.prototype.show = function () {
        var p = this;
        p.timeoutId ||
          (p.timeoutId = setTimeout(function () {
            p.$element.removeClass(p.className), delete p.timeoutId;
          }, p.delay));
      }),
        (I.prototype.hide = function () {
          var p = this;
          if (p.timeoutId) {
            clearTimeout(p.timeoutId), delete p.timeoutId;
            return;
          }
          p.$element.addClass(p.className);
        });
      function P(p, v) {
        return p.replace(s, (v ? " ." : " ") + u);
      }
      function G(p) {
        return P(p, !0);
      }
      function V(p, v) {
        return p.addClass(P(v));
      }
      function ee(p, v) {
        return p.removeClass(P(v));
      }
      function re(p, v, c) {
        return p.toggleClass(P(v), c);
      }
      function W(p, v) {
        return p.attr("aria-hidden", v).attr("tabIndex", v ? -1 : 0);
      }
      function H(p, v) {
        return V(r(t.createElement(v || "div")), p);
      }
      function h(p, v) {
        var c =
          '<svg xmlns="http://www.w3.org/2000/svg" width="' +
          p +
          '" height="' +
          v +
          '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(c);
      }
      return (
        (function () {
          var p = e.navigator.userAgent,
            v = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
            c = p.match(v),
            D = p.indexOf("Android ") > -1 && p.indexOf("Chrome") === -1;
          if (!D && (!c || c[2] > 7)) return;
          var U = t.createElement("style");
          t.head.appendChild(U), e.addEventListener("resize", O, !0);
          function O() {
            var $ = e.innerHeight,
              se = e.innerWidth,
              ie =
                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                $ +
                "px}.w-lightbox-view {width:" +
                se +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.86 * $ +
                "px}.w-lightbox-image {max-width:" +
                se +
                "px;max-height:" +
                $ +
                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                0.86 * $ +
                "px}.w-lightbox-strip {padding: 0 " +
                0.01 * $ +
                "px}.w-lightbox-item {width:" +
                0.1 * $ +
                "px;padding:" +
                0.02 * $ +
                "px " +
                0.01 * $ +
                "px}.w-lightbox-thumbnail {height:" +
                0.1 * $ +
                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                0.96 * $ +
                "px}.w-lightbox-content {margin-top:" +
                0.02 * $ +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.84 * $ +
                "px}.w-lightbox-image {max-width:" +
                0.96 * se +
                "px;max-height:" +
                0.96 * $ +
                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                0.823 * se +
                "px;max-height:" +
                0.84 * $ +
                "px}}";
            U.textContent = ie;
          }
          O();
        })(),
        y
      );
    }
    va.define(
      "lightbox",
      (Kv.exports = function (e) {
        var t = {},
          r = va.env(),
          n = HF(window, document, e, r ? "#lightbox-mountpoint" : "body"),
          i = e(document),
          o,
          a,
          u = ".w-lightbox",
          s;
        t.ready = t.design = t.preview = l;
        function l() {
          (a = r && va.env("design")),
            n.destroy(),
            (s = {}),
            (o = i.find(u)),
            o.webflowLightBox(),
            o.each(function () {
              Nr(e(this), "open lightbox"),
                e(this).attr("aria-haspopup", "dialog");
            });
        }
        jQuery.fn.extend({
          webflowLightBox: function () {
            var m = this;
            e.each(m, function (y, T) {
              var A = e.data(T, u);
              A ||
                (A = e.data(T, u, {
                  el: e(T),
                  mode: "images",
                  images: [],
                  embed: "",
                })),
                A.el.off(u),
                b(A),
                a
                  ? A.el.on("setting" + u, b.bind(null, A))
                  : A.el.on("click" + u, f(A)).on("click" + u, function (w) {
                      w.preventDefault();
                    });
            });
          },
        });
        function b(m) {
          var y = m.el.children(".w-json").html(),
            T,
            A;
          if (!y) {
            m.items = [];
            return;
          }
          try {
            y = JSON.parse(y);
          } catch (w) {
            console.error("Malformed lightbox JSON configuration.", w);
          }
          E(y),
            y.items.forEach(function (w) {
              w.$el = m.el;
            }),
            (T = y.group),
            T
              ? ((A = s[T]),
                A || (A = s[T] = []),
                (m.items = A),
                y.items.length &&
                  ((m.index = A.length), A.push.apply(A, y.items)))
              : ((m.items = y.items), (m.index = 0));
        }
        function f(m) {
          return function () {
            m.items.length && n(m.items, m.index || 0);
          };
        }
        function E(m) {
          m.images &&
            (m.images.forEach(function (y) {
              y.type = "image";
            }),
            (m.items = m.images)),
            m.embed && ((m.embed.type = "video"), (m.items = [m.embed])),
            m.groupId && (m.group = m.groupId);
        }
        return t;
      })
    );
  });
  var Qv = g((JX, Yv) => {
    "use strict";
    var vt = Oe(),
      BF = Ct(),
      xe = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    vt.define(
      "navbar",
      (Yv.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          u,
          s,
          l,
          b,
          f = vt.env(),
          E = '<div class="w-nav-overlay" data-wf-ignore />',
          m = ".w-nav",
          y = "w--open",
          T = "w--nav-dropdown-open",
          A = "w--nav-dropdown-toggle-open",
          w = "w--nav-dropdown-list-open",
          N = "w--nav-link-open",
          L = BF.triggers,
          F = e();
        (r.ready = r.design = r.preview = k),
          (r.destroy = function () {
            (F = e()), q(), s && s.length && s.each(te);
          });
        function k() {
          (l = f && vt.env("design")),
            (b = vt.env("editor")),
            (u = e(document.body)),
            (s = o.find(m)),
            s.length && (s.each(Q), q(), j());
        }
        function q() {
          vt.resize.off(K);
        }
        function j() {
          vt.resize.on(K);
        }
        function K() {
          s.each(v);
        }
        function Q(_, B) {
          var J = e(B),
            Y = e.data(B, m);
          Y ||
            (Y = e.data(B, m, {
              open: !1,
              el: J,
              config: {},
              selectedIdx: -1,
            })),
            (Y.menu = J.find(".w-nav-menu")),
            (Y.links = Y.menu.find(".w-nav-link")),
            (Y.dropdowns = Y.menu.find(".w-dropdown")),
            (Y.dropdownToggle = Y.menu.find(".w-dropdown-toggle")),
            (Y.dropdownList = Y.menu.find(".w-dropdown-list")),
            (Y.button = J.find(".w-nav-button")),
            (Y.container = J.find(".w-container")),
            (Y.overlayContainerId = "w-nav-overlay-" + _),
            (Y.outside = h(Y));
          var le = J.find(".w-nav-brand");
          le &&
            le.attr("href") === "/" &&
            le.attr("aria-label") == null &&
            le.attr("aria-label", "home"),
            Y.button.attr("style", "-webkit-user-select: text;"),
            Y.button.attr("aria-label") == null &&
              Y.button.attr("aria-label", "menu"),
            Y.button.attr("role", "button"),
            Y.button.attr("tabindex", "0"),
            Y.button.attr("aria-controls", Y.overlayContainerId),
            Y.button.attr("aria-haspopup", "menu"),
            Y.button.attr("aria-expanded", "false"),
            Y.el.off(m),
            Y.button.off(m),
            Y.menu.off(m),
            I(Y),
            l
              ? (z(Y), Y.el.on("setting" + m, P(Y)))
              : (C(Y),
                Y.button.on("click" + m, W(Y)),
                Y.menu.on("click" + m, "a", H(Y)),
                Y.button.on("keydown" + m, G(Y)),
                Y.el.on("keydown" + m, V(Y))),
            v(_, B);
        }
        function te(_, B) {
          var J = e.data(B, m);
          J && (z(J), e.removeData(B, m));
        }
        function z(_) {
          _.overlay && (ie(_, !0), _.overlay.remove(), (_.overlay = null));
        }
        function C(_) {
          _.overlay ||
            ((_.overlay = e(E).appendTo(_.el)),
            _.overlay.attr("id", _.overlayContainerId),
            (_.parent = _.menu.parent()),
            ie(_, !0));
        }
        function I(_) {
          var B = {},
            J = _.config || {},
            Y = (B.animation = _.el.attr("data-animation") || "default");
          (B.animOver = /^over/.test(Y)),
            (B.animDirect = /left$/.test(Y) ? -1 : 1),
            J.animation !== Y && _.open && t.defer(re, _),
            (B.easing = _.el.attr("data-easing") || "ease"),
            (B.easing2 = _.el.attr("data-easing2") || "ease");
          var le = _.el.attr("data-duration");
          (B.duration = le != null ? Number(le) : 400),
            (B.docHeight = _.el.attr("data-doc-height")),
            (_.config = B);
        }
        function P(_) {
          return function (B, J) {
            J = J || {};
            var Y = i.width();
            I(_),
              J.open === !0 && $(_, !0),
              J.open === !1 && ie(_, !0),
              _.open &&
                t.defer(function () {
                  Y !== i.width() && re(_);
                });
          };
        }
        function G(_) {
          return function (B) {
            switch (B.keyCode) {
              case xe.SPACE:
              case xe.ENTER:
                return W(_)(), B.preventDefault(), B.stopPropagation();
              case xe.ESCAPE:
                return ie(_), B.preventDefault(), B.stopPropagation();
              case xe.ARROW_RIGHT:
              case xe.ARROW_DOWN:
              case xe.HOME:
              case xe.END:
                return _.open
                  ? (B.keyCode === xe.END
                      ? (_.selectedIdx = _.links.length - 1)
                      : (_.selectedIdx = 0),
                    ee(_),
                    B.preventDefault(),
                    B.stopPropagation())
                  : (B.preventDefault(), B.stopPropagation());
            }
          };
        }
        function V(_) {
          return function (B) {
            if (_.open)
              switch (
                ((_.selectedIdx = _.links.index(document.activeElement)),
                B.keyCode)
              ) {
                case xe.HOME:
                case xe.END:
                  return (
                    B.keyCode === xe.END
                      ? (_.selectedIdx = _.links.length - 1)
                      : (_.selectedIdx = 0),
                    ee(_),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case xe.ESCAPE:
                  return (
                    ie(_),
                    _.button.focus(),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case xe.ARROW_LEFT:
                case xe.ARROW_UP:
                  return (
                    (_.selectedIdx = Math.max(-1, _.selectedIdx - 1)),
                    ee(_),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case xe.ARROW_RIGHT:
                case xe.ARROW_DOWN:
                  return (
                    (_.selectedIdx = Math.min(
                      _.links.length - 1,
                      _.selectedIdx + 1
                    )),
                    ee(_),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
              }
          };
        }
        function ee(_) {
          if (_.links[_.selectedIdx]) {
            var B = _.links[_.selectedIdx];
            B.focus(), H(B);
          }
        }
        function re(_) {
          _.open && (ie(_, !0), $(_, !0));
        }
        function W(_) {
          return a(function () {
            _.open ? ie(_) : $(_);
          });
        }
        function H(_) {
          return function (B) {
            var J = e(this),
              Y = J.attr("href");
            if (!vt.validClick(B.currentTarget)) {
              B.preventDefault();
              return;
            }
            Y && Y.indexOf("#") === 0 && _.open && ie(_);
          };
        }
        function h(_) {
          return (
            _.outside && o.off("click" + m, _.outside),
            function (B) {
              var J = e(B.target);
              (b && J.closest(".w-editor-bem-EditorOverlay").length) || p(_, J);
            }
          );
        }
        var p = a(function (_, B) {
          if (_.open) {
            var J = B.closest(".w-nav-menu");
            _.menu.is(J) || ie(_);
          }
        });
        function v(_, B) {
          var J = e.data(B, m),
            Y = (J.collapsed = J.button.css("display") !== "none");
          if ((J.open && !Y && !l && ie(J, !0), J.container.length)) {
            var le = D(J);
            J.links.each(le), J.dropdowns.each(le);
          }
          J.open && se(J);
        }
        var c = "max-width";
        function D(_) {
          var B = _.container.css(c);
          return (
            B === "none" && (B = ""),
            function (J, Y) {
              (Y = e(Y)), Y.css(c, ""), Y.css(c) === "none" && Y.css(c, B);
            }
          );
        }
        function U(_, B) {
          B.setAttribute("data-nav-menu-open", "");
        }
        function O(_, B) {
          B.removeAttribute("data-nav-menu-open");
        }
        function $(_, B) {
          if (_.open) return;
          (_.open = !0),
            _.menu.each(U),
            _.links.addClass(N),
            _.dropdowns.addClass(T),
            _.dropdownToggle.addClass(A),
            _.dropdownList.addClass(w),
            _.button.addClass(y);
          var J = _.config,
            Y = J.animation;
          (Y === "none" || !n.support.transform || J.duration <= 0) && (B = !0);
          var le = se(_),
            Ie = _.menu.outerHeight(!0),
            Ae = _.menu.outerWidth(!0),
            d = _.el.height(),
            x = _.el[0];
          if (
            (v(0, x),
            L.intro(0, x),
            vt.redraw.up(),
            l || o.on("click" + m, _.outside),
            B)
          ) {
            S();
            return;
          }
          var R = "transform " + J.duration + "ms " + J.easing;
          if (
            (_.overlay &&
              ((F = _.menu.prev()), _.overlay.show().append(_.menu)),
            J.animOver)
          ) {
            n(_.menu)
              .add(R)
              .set({ x: J.animDirect * Ae, height: le })
              .start({ x: 0 })
              .then(S),
              _.overlay && _.overlay.width(Ae);
            return;
          }
          var M = d + Ie;
          n(_.menu).add(R).set({ y: -M }).start({ y: 0 }).then(S);
          function S() {
            _.button.attr("aria-expanded", "true");
          }
        }
        function se(_) {
          var B = _.config,
            J = B.docHeight ? o.height() : u.height();
          return (
            B.animOver
              ? _.menu.height(J)
              : _.el.css("position") !== "fixed" && (J -= _.el.outerHeight(!0)),
            _.overlay && _.overlay.height(J),
            J
          );
        }
        function ie(_, B) {
          if (!_.open) return;
          (_.open = !1), _.button.removeClass(y);
          var J = _.config;
          if (
            ((J.animation === "none" ||
              !n.support.transform ||
              J.duration <= 0) &&
              (B = !0),
            L.outro(0, _.el[0]),
            o.off("click" + m, _.outside),
            B)
          ) {
            n(_.menu).stop(), x();
            return;
          }
          var Y = "transform " + J.duration + "ms " + J.easing2,
            le = _.menu.outerHeight(!0),
            Ie = _.menu.outerWidth(!0),
            Ae = _.el.height();
          if (J.animOver) {
            n(_.menu)
              .add(Y)
              .start({ x: Ie * J.animDirect })
              .then(x);
            return;
          }
          var d = Ae + le;
          n(_.menu).add(Y).start({ y: -d }).then(x);
          function x() {
            _.menu.height(""),
              n(_.menu).set({ x: 0, y: 0 }),
              _.menu.each(O),
              _.links.removeClass(N),
              _.dropdowns.removeClass(T),
              _.dropdownToggle.removeClass(A),
              _.dropdownList.removeClass(w),
              _.overlay &&
                _.overlay.children().length &&
                (F.length ? _.menu.insertAfter(F) : _.menu.prependTo(_.parent),
                _.overlay.attr("style", "").hide()),
              _.el.triggerHandler("w-close"),
              _.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var Jv = g((eG, Zv) => {
    "use strict";
    var mt = Oe(),
      zF = Ct(),
      it = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      $v =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    mt.define(
      "slider",
      (Zv.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          u = mt.env(),
          s = ".w-slider",
          l = '<div class="w-slider-dot" data-wf-ignore />',
          b =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          f = "w-slider-force-show",
          E = zF.triggers,
          m,
          y = !1;
        (r.ready = function () {
          (a = mt.env("design")), T();
        }),
          (r.design = function () {
            (a = !0), setTimeout(T, 1e3);
          }),
          (r.preview = function () {
            (a = !1), T();
          }),
          (r.redraw = function () {
            (y = !0), T(), (y = !1);
          }),
          (r.destroy = A);
        function T() {
          (o = i.find(s)), o.length && (o.each(L), !m && (A(), w()));
        }
        function A() {
          mt.resize.off(N), mt.redraw.off(r.redraw);
        }
        function w() {
          mt.resize.on(N), mt.redraw.on(r.redraw);
        }
        function N() {
          o.filter(":visible").each(V);
        }
        function L(h, p) {
          var v = e(p),
            c = e.data(p, s);
          c ||
            (c = e.data(p, s, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: v,
              config: {},
            })),
            (c.mask = v.children(".w-slider-mask")),
            (c.left = v.children(".w-slider-arrow-left")),
            (c.right = v.children(".w-slider-arrow-right")),
            (c.nav = v.children(".w-slider-nav")),
            (c.slides = c.mask.children(".w-slide")),
            c.slides.each(E.reset),
            y && (c.maskWidth = 0),
            v.attr("role") === void 0 && v.attr("role", "region"),
            v.attr("aria-label") === void 0 && v.attr("aria-label", "carousel");
          var D = c.mask.attr("id");
          if (
            (D || ((D = "w-slider-mask-" + h), c.mask.attr("id", D)),
            !a && !c.ariaLiveLabel && (c.ariaLiveLabel = e(b).appendTo(c.mask)),
            c.left.attr("role", "button"),
            c.left.attr("tabindex", "0"),
            c.left.attr("aria-controls", D),
            c.left.attr("aria-label") === void 0 &&
              c.left.attr("aria-label", "previous slide"),
            c.right.attr("role", "button"),
            c.right.attr("tabindex", "0"),
            c.right.attr("aria-controls", D),
            c.right.attr("aria-label") === void 0 &&
              c.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            c.left.hide(), c.right.hide(), c.nav.hide(), (m = !0);
            return;
          }
          c.el.off(s),
            c.left.off(s),
            c.right.off(s),
            c.nav.off(s),
            F(c),
            a
              ? (c.el.on("setting" + s, I(c)), C(c), (c.hasTimer = !1))
              : (c.el.on("swipe" + s, I(c)),
                c.left.on("click" + s, K(c)),
                c.right.on("click" + s, Q(c)),
                c.left.on("keydown" + s, j(c, K)),
                c.right.on("keydown" + s, j(c, Q)),
                c.nav.on("keydown" + s, "> div", I(c)),
                c.config.autoplay &&
                  !c.hasTimer &&
                  ((c.hasTimer = !0), (c.timerCount = 1), z(c)),
                c.el.on("mouseenter" + s, q(c, !0, "mouse")),
                c.el.on("focusin" + s, q(c, !0, "keyboard")),
                c.el.on("mouseleave" + s, q(c, !1, "mouse")),
                c.el.on("focusout" + s, q(c, !1, "keyboard"))),
            c.nav.on("click" + s, "> div", I(c)),
            u ||
              c.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var U = v.filter(":hidden");
          U.addClass(f);
          var O = v.parents(":hidden");
          O.addClass(f), y || V(h, p), U.removeClass(f), O.removeClass(f);
        }
        function F(h) {
          var p = {};
          (p.crossOver = 0),
            (p.animation = h.el.attr("data-animation") || "slide"),
            p.animation === "outin" &&
              ((p.animation = "cross"), (p.crossOver = 0.5)),
            (p.easing = h.el.attr("data-easing") || "ease");
          var v = h.el.attr("data-duration");
          if (
            ((p.duration = v != null ? parseInt(v, 10) : 500),
            k(h.el.attr("data-infinite")) && (p.infinite = !0),
            k(h.el.attr("data-disable-swipe")) && (p.disableSwipe = !0),
            k(h.el.attr("data-hide-arrows"))
              ? (p.hideArrows = !0)
              : h.config.hideArrows && (h.left.show(), h.right.show()),
            k(h.el.attr("data-autoplay")))
          ) {
            (p.autoplay = !0),
              (p.delay = parseInt(h.el.attr("data-delay"), 10) || 2e3),
              (p.timerMax = parseInt(h.el.attr("data-autoplay-limit"), 10));
            var c = "mousedown" + s + " touchstart" + s;
            a ||
              h.el.off(c).one(c, function () {
                C(h);
              });
          }
          var D = h.right.width();
          (p.edge = D ? D + 40 : 100), (h.config = p);
        }
        function k(h) {
          return h === "1" || h === "true";
        }
        function q(h, p, v) {
          return function (c) {
            if (p) h.hasFocus[v] = p;
            else if (
              e.contains(h.el.get(0), c.relatedTarget) ||
              ((h.hasFocus[v] = p),
              (h.hasFocus.mouse && v === "keyboard") ||
                (h.hasFocus.keyboard && v === "mouse"))
            )
              return;
            p
              ? (h.ariaLiveLabel.attr("aria-live", "polite"),
                h.hasTimer && C(h))
              : (h.ariaLiveLabel.attr("aria-live", "off"), h.hasTimer && z(h));
          };
        }
        function j(h, p) {
          return function (v) {
            switch (v.keyCode) {
              case it.SPACE:
              case it.ENTER:
                return p(h)(), v.preventDefault(), v.stopPropagation();
            }
          };
        }
        function K(h) {
          return function () {
            G(h, { index: h.index - 1, vector: -1 });
          };
        }
        function Q(h) {
          return function () {
            G(h, { index: h.index + 1, vector: 1 });
          };
        }
        function te(h, p) {
          var v = null;
          p === h.slides.length && (T(), ee(h)),
            t.each(h.anchors, function (c, D) {
              e(c.els).each(function (U, O) {
                e(O).index() === p && (v = D);
              });
            }),
            v != null && G(h, { index: v, immediate: !0 });
        }
        function z(h) {
          C(h);
          var p = h.config,
            v = p.timerMax;
          (v && h.timerCount++ > v) ||
            (h.timerId = window.setTimeout(function () {
              h.timerId == null || a || (Q(h)(), z(h));
            }, p.delay));
        }
        function C(h) {
          window.clearTimeout(h.timerId), (h.timerId = null);
        }
        function I(h) {
          return function (p, v) {
            v = v || {};
            var c = h.config;
            if (a && p.type === "setting") {
              if (v.select === "prev") return K(h)();
              if (v.select === "next") return Q(h)();
              if ((F(h), ee(h), v.select == null)) return;
              te(h, v.select);
              return;
            }
            if (p.type === "swipe")
              return c.disableSwipe || mt.env("editor")
                ? void 0
                : v.direction === "left"
                ? Q(h)()
                : v.direction === "right"
                ? K(h)()
                : void 0;
            if (h.nav.has(p.target).length) {
              var D = e(p.target).index();
              if (
                (p.type === "click" && G(h, { index: D }), p.type === "keydown")
              )
                switch (p.keyCode) {
                  case it.ENTER:
                  case it.SPACE: {
                    G(h, { index: D }), p.preventDefault();
                    break;
                  }
                  case it.ARROW_LEFT:
                  case it.ARROW_UP: {
                    P(h.nav, Math.max(D - 1, 0)), p.preventDefault();
                    break;
                  }
                  case it.ARROW_RIGHT:
                  case it.ARROW_DOWN: {
                    P(h.nav, Math.min(D + 1, h.pages)), p.preventDefault();
                    break;
                  }
                  case it.HOME: {
                    P(h.nav, 0), p.preventDefault();
                    break;
                  }
                  case it.END: {
                    P(h.nav, h.pages), p.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function P(h, p) {
          var v = h.children().eq(p).focus();
          h.children().not(v);
        }
        function G(h, p) {
          p = p || {};
          var v = h.config,
            c = h.anchors;
          h.previous = h.index;
          var D = p.index,
            U = {};
          D < 0
            ? ((D = c.length - 1),
              v.infinite &&
                ((U.x = -h.endX), (U.from = 0), (U.to = c[0].width)))
            : D >= c.length &&
              ((D = 0),
              v.infinite &&
                ((U.x = c[c.length - 1].width),
                (U.from = -c[c.length - 1].x),
                (U.to = U.from - U.x))),
            (h.index = D);
          var O = h.nav
            .children()
            .eq(D)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          h.nav
            .children()
            .not(O)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            v.hideArrows &&
              (h.index === c.length - 1 ? h.right.hide() : h.right.show(),
              h.index === 0 ? h.left.hide() : h.left.show());
          var $ = h.offsetX || 0,
            se = (h.offsetX = -c[h.index].x),
            ie = { x: se, opacity: 1, visibility: "" },
            _ = e(c[h.index].els),
            B = e(c[h.previous] && c[h.previous].els),
            J = h.slides.not(_),
            Y = v.animation,
            le = v.easing,
            Ie = Math.round(v.duration),
            Ae = p.vector || (h.index > h.previous ? 1 : -1),
            d = "opacity " + Ie + "ms " + le,
            x = "transform " + Ie + "ms " + le;
          if (
            (_.find($v).removeAttr("tabindex"),
            _.removeAttr("aria-hidden"),
            _.find("*").removeAttr("aria-hidden"),
            J.find($v).attr("tabindex", "-1"),
            J.attr("aria-hidden", "true"),
            J.find("*").attr("aria-hidden", "true"),
            a || (_.each(E.intro), J.each(E.outro)),
            p.immediate && !y)
          ) {
            n(_).set(ie), S();
            return;
          }
          if (h.index === h.previous) return;
          if (
            (a || h.ariaLiveLabel.text(`Slide ${D + 1} of ${c.length}.`),
            Y === "cross")
          ) {
            var R = Math.round(Ie - Ie * v.crossOver),
              M = Math.round(Ie - R);
            (d = "opacity " + R + "ms " + le),
              n(B).set({ visibility: "" }).add(d).start({ opacity: 0 }),
              n(_)
                .set({ visibility: "", x: se, opacity: 0, zIndex: h.depth++ })
                .add(d)
                .wait(M)
                .then({ opacity: 1 })
                .then(S);
            return;
          }
          if (Y === "fade") {
            n(B).set({ visibility: "" }).stop(),
              n(_)
                .set({ visibility: "", x: se, opacity: 0, zIndex: h.depth++ })
                .add(d)
                .start({ opacity: 1 })
                .then(S);
            return;
          }
          if (Y === "over") {
            (ie = { x: h.endX }),
              n(B).set({ visibility: "" }).stop(),
              n(_)
                .set({
                  visibility: "",
                  zIndex: h.depth++,
                  x: se + c[h.index].width * Ae,
                })
                .add(x)
                .start({ x: se })
                .then(S);
            return;
          }
          v.infinite && U.x
            ? (n(h.slides.not(B))
                .set({ visibility: "", x: U.x })
                .add(x)
                .start({ x: se }),
              n(B).set({ visibility: "", x: U.from }).add(x).start({ x: U.to }),
              (h.shifted = B))
            : (v.infinite &&
                h.shifted &&
                (n(h.shifted).set({ visibility: "", x: $ }),
                (h.shifted = null)),
              n(h.slides).set({ visibility: "" }).add(x).start({ x: se }));
          function S() {
            (_ = e(c[h.index].els)),
              (J = h.slides.not(_)),
              Y !== "slide" && (ie.visibility = "hidden"),
              n(J).set(ie);
          }
        }
        function V(h, p) {
          var v = e.data(p, s);
          if (v) {
            if (W(v)) return ee(v);
            a && H(v) && ee(v);
          }
        }
        function ee(h) {
          var p = 1,
            v = 0,
            c = 0,
            D = 0,
            U = h.maskWidth,
            O = U - h.config.edge;
          O < 0 && (O = 0),
            (h.anchors = [{ els: [], x: 0, width: 0 }]),
            h.slides.each(function (se, ie) {
              c - v > O &&
                (p++,
                (v += U),
                (h.anchors[p - 1] = { els: [], x: c, width: 0 })),
                (D = e(ie).outerWidth(!0)),
                (c += D),
                (h.anchors[p - 1].width += D),
                h.anchors[p - 1].els.push(ie);
              var _ = se + 1 + " of " + h.slides.length;
              e(ie).attr("aria-label", _), e(ie).attr("role", "group");
            }),
            (h.endX = c),
            a && (h.pages = null),
            h.nav.length && h.pages !== p && ((h.pages = p), re(h));
          var $ = h.index;
          $ >= p && ($ = p - 1), G(h, { immediate: !0, index: $ });
        }
        function re(h) {
          var p = [],
            v,
            c = h.el.attr("data-nav-spacing");
          c && (c = parseFloat(c) + "px");
          for (var D = 0, U = h.pages; D < U; D++)
            (v = e(l)),
              v
                .attr("aria-label", "Show slide " + (D + 1) + " of " + U)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              h.nav.hasClass("w-num") && v.text(D + 1),
              c != null && v.css({ "margin-left": c, "margin-right": c }),
              p.push(v);
          h.nav.empty().append(p);
        }
        function W(h) {
          var p = h.mask.width();
          return h.maskWidth !== p ? ((h.maskWidth = p), !0) : !1;
        }
        function H(h) {
          var p = 0;
          return (
            h.slides.each(function (v, c) {
              p += e(c).outerWidth(!0);
            }),
            h.slidesWidth !== p ? ((h.slidesWidth = p), !0) : !1
          );
        }
        return r;
      })
    );
  });
  var tm = g((tG, em) => {
    "use strict";
    var Et = Oe(),
      KF = Ct();
    Et.define(
      "tabs",
      (em.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = Et.env,
          u = a.safari,
          s = a(),
          l = "data-w-tab",
          b = "data-w-pane",
          f = ".w-tabs",
          E = "w--current",
          m = "w--tab-active",
          y = KF.triggers,
          T = !1;
        (t.ready = t.design = t.preview = A),
          (t.redraw = function () {
            (T = !0), A(), (T = !1);
          }),
          (t.destroy = function () {
            (i = n.find(f)), i.length && (i.each(L), w());
          });
        function A() {
          (o = s && Et.env("design")),
            (i = n.find(f)),
            i.length &&
              (i.each(F), Et.env("preview") && !T && i.each(L), w(), N());
        }
        function w() {
          Et.redraw.off(t.redraw);
        }
        function N() {
          Et.redraw.on(t.redraw);
        }
        function L(z, C) {
          var I = e.data(C, f);
          I &&
            (I.links && I.links.each(y.reset),
            I.panes && I.panes.each(y.reset));
        }
        function F(z, C) {
          var I = f.substr(1) + "-" + z,
            P = e(C),
            G = e.data(C, f);
          if (
            (G || (G = e.data(C, f, { el: P, config: {} })),
            (G.current = null),
            (G.tabIdentifier = I + "-" + l),
            (G.paneIdentifier = I + "-" + b),
            (G.menu = P.children(".w-tab-menu")),
            (G.links = G.menu.children(".w-tab-link")),
            (G.content = P.children(".w-tab-content")),
            (G.panes = G.content.children(".w-tab-pane")),
            G.el.off(f),
            G.links.off(f),
            G.menu.attr("role", "tablist"),
            G.links.attr("tabindex", "-1"),
            k(G),
            !o)
          ) {
            G.links.on("click" + f, j(G)), G.links.on("keydown" + f, K(G));
            var V = G.links.filter("." + E),
              ee = V.attr(l);
            ee && Q(G, { tab: ee, immediate: !0 });
          }
        }
        function k(z) {
          var C = {};
          C.easing = z.el.attr("data-easing") || "ease";
          var I = parseInt(z.el.attr("data-duration-in"), 10);
          I = C.intro = I === I ? I : 0;
          var P = parseInt(z.el.attr("data-duration-out"), 10);
          (P = C.outro = P === P ? P : 0),
            (C.immediate = !I && !P),
            (z.config = C);
        }
        function q(z) {
          var C = z.current;
          return Array.prototype.findIndex.call(
            z.links,
            (I) => I.getAttribute(l) === C,
            null
          );
        }
        function j(z) {
          return function (C) {
            C.preventDefault();
            var I = C.currentTarget.getAttribute(l);
            I && Q(z, { tab: I });
          };
        }
        function K(z) {
          return function (C) {
            var I = q(z),
              P = C.key,
              G = {
                ArrowLeft: I - 1,
                ArrowUp: I - 1,
                ArrowRight: I + 1,
                ArrowDown: I + 1,
                End: z.links.length - 1,
                Home: 0,
              };
            if (P in G) {
              C.preventDefault();
              var V = G[P];
              V === -1 && (V = z.links.length - 1),
                V === z.links.length && (V = 0);
              var ee = z.links[V],
                re = ee.getAttribute(l);
              re && Q(z, { tab: re });
            }
          };
        }
        function Q(z, C) {
          C = C || {};
          var I = z.config,
            P = I.easing,
            G = C.tab;
          if (G !== z.current) {
            z.current = G;
            var V;
            z.links.each(function (v, c) {
              var D = e(c);
              if (C.immediate || I.immediate) {
                var U = z.panes[v];
                c.id || (c.id = z.tabIdentifier + "-" + v),
                  U.id || (U.id = z.paneIdentifier + "-" + v),
                  (c.href = "#" + U.id),
                  c.setAttribute("role", "tab"),
                  c.setAttribute("aria-controls", U.id),
                  c.setAttribute("aria-selected", "false"),
                  U.setAttribute("role", "tabpanel"),
                  U.setAttribute("aria-labelledby", c.id);
              }
              c.getAttribute(l) === G
                ? ((V = c),
                  D.addClass(E)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(y.intro))
                : D.hasClass(E) &&
                  D.removeClass(E)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(y.outro);
            });
            var ee = [],
              re = [];
            z.panes.each(function (v, c) {
              var D = e(c);
              c.getAttribute(l) === G
                ? ee.push(c)
                : D.hasClass(m) && re.push(c);
            });
            var W = e(ee),
              H = e(re);
            if (C.immediate || I.immediate) {
              W.addClass(m).each(y.intro),
                H.removeClass(m),
                T || Et.redraw.up();
              return;
            } else {
              var h = window.scrollX,
                p = window.scrollY;
              V.focus(), window.scrollTo(h, p);
            }
            H.length && I.outro
              ? (H.each(y.outro),
                r(H)
                  .add("opacity " + I.outro + "ms " + P, { fallback: u })
                  .start({ opacity: 0 })
                  .then(() => te(I, H, W)))
              : te(I, H, W);
          }
        }
        function te(z, C, I) {
          if (
            (C.removeClass(m).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            I.addClass(m).each(y.intro),
            Et.redraw.up(),
            !z.intro)
          )
            return r(I).set({ opacity: 1 });
          r(I)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + z.intro + "ms " + z.easing, { fallback: u })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Pa();
  Da();
  Fa();
  Xa();
  Ct();
  Nv();
  Mv();
  qv();
  Xv();
  Wv();
  Bv();
  jv();
  Qv();
  Jv();
  tm();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a022d179893cd50e0dd24444",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676976164835,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a022d179893cd50e0dd24444",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676976164835,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a022d179893cd50e0dd24444",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1676976164835,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a022d179893cd50e0dd24444",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676976164835,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-17",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a036b3d84f090ba9238d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676976183509,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a036b3d84f090ba9238d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676976183509,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a036b3d84f090ba9238d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1676976183509,
    },
    "e-20": {
      id: "e-20",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-19",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a036b3d84f090ba9238d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676976183509,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676976203606,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-21",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676976203606,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1676976203606,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676976203606,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-27",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676976501822,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-26",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676976501822,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1676976501822,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676976501822,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a1a2596f1aa29b03deee",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676976547394,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-31",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a1a2596f1aa29b03deee",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676976547394,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a1a2596f1aa29b03deee",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1676976547394,
    },
    "e-34": {
      id: "e-34",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-35",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4a1a2596f1aa29b03deee",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676976547394,
    },
    "e-36": {
      id: "e-36",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4ac6c1dc16270b9744228",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4ac6c1dc16270b9744228",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676979311145,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4ac6c1dc16270b9744228",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4ac6c1dc16270b9744228",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676979311145,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4ac6c1dc16270b9744228",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4ac6c1dc16270b9744228",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1676979311145,
    },
    "e-40": {
      id: "e-40",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4ac6c1dc16270b9744228",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4ac6c1dc16270b9744228",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676979311145,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-42",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4ae3771b287635eeec754",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4ae3771b287635eeec754",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676979769864,
    },
    "e-42": {
      id: "e-42",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-41",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4ae3771b287635eeec754",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4ae3771b287635eeec754",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676979769864,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4ae3771b287635eeec754",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4ae3771b287635eeec754",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1676979769864,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-44",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4ae3771b287635eeec754",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4ae3771b287635eeec754",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676979769864,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-47",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4afe9d179891cab0f3bb2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4afe9d179891cab0f3bb2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676980203266,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4afe9d179891cab0f3bb2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4afe9d179891cab0f3bb2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676980203266,
    },
    "e-48": {
      id: "e-48",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4afe9d179891cab0f3bb2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4afe9d179891cab0f3bb2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1676980203266,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4afe9d179891cab0f3bb2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4afe9d179891cab0f3bb2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676980203266,
    },
    "e-53": {
      id: "e-53",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4b1146c014c72f4c7e837",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4b1146c014c72f4c7e837",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1676980501398,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-54",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4b1146c014c72f4c7e837",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4b1146c014c72f4c7e837",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676980501398,
    },
    "e-58": {
      id: "e-58",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4b14a1c14d83f62065d38",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4b14a1c14d83f62065d38",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1676980554584,
    },
    "e-60": {
      id: "e-60",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-59",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4b14a1c14d83f62065d38",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4b14a1c14d83f62065d38",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676980554584,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4b1678ae2840b74a4a48e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4b1678ae2840b74a4a48e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676980584435,
    },
    "e-62": {
      id: "e-62",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-61",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4b1678ae2840b74a4a48e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4b1678ae2840b74a4a48e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676980584435,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4b1678ae2840b74a4a48e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4b1678ae2840b74a4a48e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1676980584435,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4b1678ae2840b74a4a48e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4b1678ae2840b74a4a48e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676980584435,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-82",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4b26425dd0fc23a671037",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4b26425dd0fc23a671037",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676980836408,
    },
    "e-82": {
      id: "e-82",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-81",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4b26425dd0fc23a671037",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4b26425dd0fc23a671037",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676980836408,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4b26425dd0fc23a671037",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4b26425dd0fc23a671037",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1676980836408,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-84",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4b26425dd0fc23a671037",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4b26425dd0fc23a671037",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676980836408,
    },
    "e-86": {
      id: "e-86",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-87",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4b27171b2874cdbef3ef2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4b27171b2874cdbef3ef2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676980849541,
    },
    "e-87": {
      id: "e-87",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-86",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4b27171b2874cdbef3ef2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4b27171b2874cdbef3ef2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676980849541,
    },
    "e-88": {
      id: "e-88",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4b27171b2874cdbef3ef2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4b27171b2874cdbef3ef2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1676980849541,
    },
    "e-90": {
      id: "e-90",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-89",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f4b27171b2874cdbef3ef2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4b27171b2874cdbef3ef2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676980849541,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-92",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f5f1b3ba3b8a0bdae0f66c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f5f1b3ba3b8a0bdae0f66c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677062578257,
    },
    "e-92": {
      id: "e-92",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-91",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f5f1b3ba3b8a0bdae0f66c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f5f1b3ba3b8a0bdae0f66c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677062578257,
    },
    "e-93": {
      id: "e-93",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f5f1b3ba3b8a0bdae0f66c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f5f1b3ba3b8a0bdae0f66c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1677062578257,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-94",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f5f1b3ba3b8a0bdae0f66c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f5f1b3ba3b8a0bdae0f66c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677062578257,
    },
    "e-96": {
      id: "e-96",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-97",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f5f657c9e0137aa8cc5379",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f5f657c9e0137aa8cc5379",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677063766066,
    },
    "e-97": {
      id: "e-97",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-96",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f5f657c9e0137aa8cc5379",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f5f657c9e0137aa8cc5379",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677063766066,
    },
    "e-98": {
      id: "e-98",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f5f657c9e0137aa8cc5379",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f5f657c9e0137aa8cc5379",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1677063766066,
    },
    "e-100": {
      id: "e-100",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-99",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f5f657c9e0137aa8cc5379",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f5f657c9e0137aa8cc5379",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677063766066,
    },
    "e-101": {
      id: "e-101",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-102",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069172648,
    },
    "e-102": {
      id: "e-102",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-101",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069172648,
    },
    "e-103": {
      id: "e-103",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1677069172648,
    },
    "e-105": {
      id: "e-105",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-104",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069172648,
    },
    "e-106": {
      id: "e-106",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-107",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60b87c822843eb46debef",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069189162,
    },
    "e-107": {
      id: "e-107",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-106",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60b87c822843eb46debef",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069189162,
    },
    "e-108": {
      id: "e-108",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60b87c822843eb46debef",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1677069189162,
    },
    "e-110": {
      id: "e-110",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-109",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60b87c822843eb46debef",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069189162,
    },
    "e-111": {
      id: "e-111",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-112",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60bad586454e39821ebb8",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60bad586454e39821ebb8",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069226394,
    },
    "e-112": {
      id: "e-112",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-111",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60bad586454e39821ebb8",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60bad586454e39821ebb8",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069226394,
    },
    "e-113": {
      id: "e-113",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60bad586454e39821ebb8",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60bad586454e39821ebb8",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1677069226394,
    },
    "e-115": {
      id: "e-115",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-114",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60bad586454e39821ebb8",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60bad586454e39821ebb8",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069226394,
    },
    "e-116": {
      id: "e-116",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-117",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60bbd13aa71558b35052b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60bbd13aa71558b35052b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069243047,
    },
    "e-117": {
      id: "e-117",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-116",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60bbd13aa71558b35052b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60bbd13aa71558b35052b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069243047,
    },
    "e-118": {
      id: "e-118",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60bbd13aa71558b35052b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60bbd13aa71558b35052b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1677069243047,
    },
    "e-120": {
      id: "e-120",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-119",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60bbd13aa71558b35052b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60bbd13aa71558b35052b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069243047,
    },
    "e-121": {
      id: "e-121",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-122",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60c15ac4bff8ee9409bc9",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60c15ac4bff8ee9409bc9",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069330922,
    },
    "e-122": {
      id: "e-122",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-121",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60c15ac4bff8ee9409bc9",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60c15ac4bff8ee9409bc9",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069330922,
    },
    "e-123": {
      id: "e-123",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60c15ac4bff8ee9409bc9",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60c15ac4bff8ee9409bc9",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1677069330922,
    },
    "e-125": {
      id: "e-125",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-124",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60c15ac4bff8ee9409bc9",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60c15ac4bff8ee9409bc9",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069330922,
    },
    "e-126": {
      id: "e-126",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-127",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60d997e73e55f17be7e4e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60d997e73e55f17be7e4e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069719023,
    },
    "e-127": {
      id: "e-127",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-126",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60d997e73e55f17be7e4e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60d997e73e55f17be7e4e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069719023,
    },
    "e-128": {
      id: "e-128",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60d997e73e55f17be7e4e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60d997e73e55f17be7e4e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1677069719023,
    },
    "e-130": {
      id: "e-130",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-129",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60d997e73e55f17be7e4e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60d997e73e55f17be7e4e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677069719023,
    },
    "e-131": {
      id: "e-131",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-132",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0|81a01ce7-94f1-f226-fe1e-79cf46624ed8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0|81a01ce7-94f1-f226-fe1e-79cf46624ed8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677377966942,
    },
    "e-132": {
      id: "e-132",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-131",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0|81a01ce7-94f1-f226-fe1e-79cf46624ed8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0|81a01ce7-94f1-f226-fe1e-79cf46624ed8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677377966980,
    },
    "e-133": {
      id: "e-133",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-134",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0|4a3e6aad-9c3e-7c0b-edec-79ba8ceb0356",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0|4a3e6aad-9c3e-7c0b-edec-79ba8ceb0356",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677378931342,
    },
    "e-134": {
      id: "e-134",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-133",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0|4a3e6aad-9c3e-7c0b-edec-79ba8ceb0356",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0|4a3e6aad-9c3e-7c0b-edec-79ba8ceb0356",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677378931345,
    },
    "e-135": {
      id: "e-135",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-136",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0|4f8939dd-1cc3-597d-c96d-507139b86ff4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0|4f8939dd-1cc3-597d-c96d-507139b86ff4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677378943799,
    },
    "e-136": {
      id: "e-136",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-135",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0|4f8939dd-1cc3-597d-c96d-507139b86ff4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0|4f8939dd-1cc3-597d-c96d-507139b86ff4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677378943802,
    },
    "e-145": {
      id: "e-145",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-146",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0|420bb65d-6acf-5e64-7512-c26a2620dec6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0|420bb65d-6acf-5e64-7512-c26a2620dec6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677379123044,
    },
    "e-146": {
      id: "e-146",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-145",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0|420bb65d-6acf-5e64-7512-c26a2620dec6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0|420bb65d-6acf-5e64-7512-c26a2620dec6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677379123046,
    },
    "e-147": {
      id: "e-147",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-148",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0|b2a5fc67-a6e8-092b-b001-8453da628260",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0|b2a5fc67-a6e8-092b-b001-8453da628260",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677379143522,
    },
    "e-148": {
      id: "e-148",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-147",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0|b2a5fc67-a6e8-092b-b001-8453da628260",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0|b2a5fc67-a6e8-092b-b001-8453da628260",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677379143524,
    },
    "e-149": {
      id: "e-149",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-150",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0|ec862c6e-6a3e-883f-ea74-0155ded34e53",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0|ec862c6e-6a3e-883f-ea74-0155ded34e53",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677379164654,
    },
    "e-150": {
      id: "e-150",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-149",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0|ec862c6e-6a3e-883f-ea74-0155ded34e53",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0|ec862c6e-6a3e-883f-ea74-0155ded34e53",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677379164655,
    },
    "e-151": {
      id: "e-151",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-152",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0|1add15ca-7b25-755a-aa4d-653c49cf7bdc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0|1add15ca-7b25-755a-aa4d-653c49cf7bdc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677379186128,
    },
    "e-152": {
      id: "e-152",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-151",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0|1add15ca-7b25-755a-aa4d-653c49cf7bdc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0|1add15ca-7b25-755a-aa4d-653c49cf7bdc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677379186132,
    },
    "e-172": {
      id: "e-172",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-173",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60c15ac4bff8ee9409bc9|d9228056-5443-329b-e690-e288acaecb2f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60c15ac4bff8ee9409bc9|d9228056-5443-329b-e690-e288acaecb2f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677551965032,
    },
    "e-173": {
      id: "e-173",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-172",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60c15ac4bff8ee9409bc9|d9228056-5443-329b-e690-e288acaecb2f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60c15ac4bff8ee9409bc9|d9228056-5443-329b-e690-e288acaecb2f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677551965035,
    },
    "e-174": {
      id: "e-174",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-175",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60c15ac4bff8ee9409bc9|beee2c4e-40de-a0c1-4c36-4ef75d31cbc6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60c15ac4bff8ee9409bc9|beee2c4e-40de-a0c1-4c36-4ef75d31cbc6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677552519972,
    },
    "e-175": {
      id: "e-175",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-174",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60c15ac4bff8ee9409bc9|beee2c4e-40de-a0c1-4c36-4ef75d31cbc6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60c15ac4bff8ee9409bc9|beee2c4e-40de-a0c1-4c36-4ef75d31cbc6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677552519972,
    },
    "e-176": {
      id: "e-176",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-177",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60c15ac4bff8ee9409bc9|640be85b-18e3-79ba-3253-eb7504b0c4fb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60c15ac4bff8ee9409bc9|640be85b-18e3-79ba-3253-eb7504b0c4fb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677552520559,
    },
    "e-177": {
      id: "e-177",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-176",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60c15ac4bff8ee9409bc9|640be85b-18e3-79ba-3253-eb7504b0c4fb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60c15ac4bff8ee9409bc9|640be85b-18e3-79ba-3253-eb7504b0c4fb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677552520559,
    },
    "e-178": {
      id: "e-178",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-179",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60c15ac4bff8ee9409bc9|26be8129-3779-acad-7004-a7d69ec815b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60c15ac4bff8ee9409bc9|26be8129-3779-acad-7004-a7d69ec815b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677552521075,
    },
    "e-179": {
      id: "e-179",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-178",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60c15ac4bff8ee9409bc9|26be8129-3779-acad-7004-a7d69ec815b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60c15ac4bff8ee9409bc9|26be8129-3779-acad-7004-a7d69ec815b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677552521075,
    },
    "e-180": {
      id: "e-180",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-181",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60c15ac4bff8ee9409bc9|b7ce96c5-bee2-52cb-d984-17e73550bb02",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60c15ac4bff8ee9409bc9|b7ce96c5-bee2-52cb-d984-17e73550bb02",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677552521516,
    },
    "e-181": {
      id: "e-181",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-180",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60c15ac4bff8ee9409bc9|b7ce96c5-bee2-52cb-d984-17e73550bb02",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60c15ac4bff8ee9409bc9|b7ce96c5-bee2-52cb-d984-17e73550bb02",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677552521516,
    },
    "e-208": {
      id: "e-208",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-209",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|34f046a9-cb7b-0422-659a-dd290882b196",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|34f046a9-cb7b-0422-659a-dd290882b196",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678255797436,
    },
    "e-209": {
      id: "e-209",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-208",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|34f046a9-cb7b-0422-659a-dd290882b196",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|34f046a9-cb7b-0422-659a-dd290882b196",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678255797436,
    },
    "e-244": {
      id: "e-244",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-245",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba64d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba64d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678332952093,
    },
    "e-245": {
      id: "e-245",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-244",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba64d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba64d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678332952093,
    },
    "e-246": {
      id: "e-246",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-247",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba671",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba671",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678332952093,
    },
    "e-247": {
      id: "e-247",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-246",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba671",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba671",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678332952093,
    },
    "e-248": {
      id: "e-248",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-249",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba695",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba695",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678332952093,
    },
    "e-249": {
      id: "e-249",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-248",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba695",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba695",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678332952093,
    },
    "e-250": {
      id: "e-250",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-251",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba6b9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba6b9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678332952093,
    },
    "e-251": {
      id: "e-251",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-250",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba6b9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba6b9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678332952093,
    },
    "e-252": {
      id: "e-252",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-253",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba6dd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba6dd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678332952093,
    },
    "e-253": {
      id: "e-253",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-252",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba6dd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba6dd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678332952093,
    },
    "e-254": {
      id: "e-254",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-255",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba701",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba701",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678332952093,
    },
    "e-255": {
      id: "e-255",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-254",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba701",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba701",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678332952093,
    },
    "e-256": {
      id: "e-256",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-257",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba725",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba725",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678332952093,
    },
    "e-257": {
      id: "e-257",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-256",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba725",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee|16b8c631-0146-c8e3-b6a3-2d21514ba725",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678332952093,
    },
    "e-258": {
      id: "e-258",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-11", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-11-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1678348287176,
    },
    "e-259": {
      id: "e-259",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-260",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b76b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b76b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678350556871,
    },
    "e-260": {
      id: "e-260",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-259",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b76b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b76b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678350556871,
    },
    "e-261": {
      id: "e-261",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-262",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b78f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b78f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678350556871,
    },
    "e-262": {
      id: "e-262",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-261",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b78f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b78f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678350556871,
    },
    "e-263": {
      id: "e-263",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-264",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b7b3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b7b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678350556871,
    },
    "e-264": {
      id: "e-264",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-263",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b7b3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b7b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678350556871,
    },
    "e-265": {
      id: "e-265",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-266",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b7d7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b7d7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678350556871,
    },
    "e-266": {
      id: "e-266",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-265",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b7d7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b7d7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678350556871,
    },
    "e-267": {
      id: "e-267",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-268",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b7fb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b7fb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678350556871,
    },
    "e-268": {
      id: "e-268",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-267",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b7fb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b7fb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678350556871,
    },
    "e-269": {
      id: "e-269",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-270",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b81f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b81f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678350556871,
    },
    "e-270": {
      id: "e-270",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-269",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b81f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b81f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678350556871,
    },
    "e-271": {
      id: "e-271",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-272",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b843",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b843",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678350556871,
    },
    "e-272": {
      id: "e-272",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-271",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b843",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b843",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678350556871,
    },
    "e-273": {
      id: "e-273",
      name: "",
      animationType: "custom",
      eventTypeId: "NAVBAR_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-274",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "3cc49a08-02d3-b728-f2b0-f033692a371b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3cc49a08-02d3-b728-f2b0-f033692a371b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678420978833,
    },
    "e-274": {
      id: "e-274",
      name: "",
      animationType: "custom",
      eventTypeId: "NAVBAR_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-273",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "3cc49a08-02d3-b728-f2b0-f033692a371b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3cc49a08-02d3-b728-f2b0-f033692a371b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678420978837,
    },
    "e-280": {
      id: "e-280",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-279",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "6407589885986d6b042493f8",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678434531342,
    },
    "e-281": {
      id: "e-281",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-282",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|3684c569-ec07-5523-b276-b4516f546036",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|3684c569-ec07-5523-b276-b4516f546036",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536212904,
    },
    "e-282": {
      id: "e-282",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-281",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|3684c569-ec07-5523-b276-b4516f546036",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|3684c569-ec07-5523-b276-b4516f546036",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536212904,
    },
    "e-283": {
      id: "e-283",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-284",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|c5b510c9-630f-84d7-7269-44f152854de3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|c5b510c9-630f-84d7-7269-44f152854de3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536222064,
    },
    "e-284": {
      id: "e-284",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-283",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|c5b510c9-630f-84d7-7269-44f152854de3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|c5b510c9-630f-84d7-7269-44f152854de3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536222064,
    },
    "e-285": {
      id: "e-285",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-286",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|51385a57-cfde-3d17-1761-f32a1cd84b03",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|51385a57-cfde-3d17-1761-f32a1cd84b03",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536321276,
    },
    "e-286": {
      id: "e-286",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-285",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|51385a57-cfde-3d17-1761-f32a1cd84b03",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|51385a57-cfde-3d17-1761-f32a1cd84b03",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536321276,
    },
    "e-287": {
      id: "e-287",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-288",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|b8aab0b4-a67f-cffe-5a07-9262b2a6e491",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|b8aab0b4-a67f-cffe-5a07-9262b2a6e491",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536321571,
    },
    "e-288": {
      id: "e-288",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-287",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|b8aab0b4-a67f-cffe-5a07-9262b2a6e491",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|b8aab0b4-a67f-cffe-5a07-9262b2a6e491",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536321571,
    },
    "e-289": {
      id: "e-289",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-290",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|8e6f5ab5-9785-e93a-b465-0966cddd7865",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|8e6f5ab5-9785-e93a-b465-0966cddd7865",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536321863,
    },
    "e-290": {
      id: "e-290",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-289",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|8e6f5ab5-9785-e93a-b465-0966cddd7865",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|8e6f5ab5-9785-e93a-b465-0966cddd7865",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536321863,
    },
    "e-291": {
      id: "e-291",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-292",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|d960342c-52a4-2118-d276-85ba3d082a52",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|d960342c-52a4-2118-d276-85ba3d082a52",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536322489,
    },
    "e-292": {
      id: "e-292",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-291",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|d960342c-52a4-2118-d276-85ba3d082a52",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|d960342c-52a4-2118-d276-85ba3d082a52",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536322489,
    },
    "e-293": {
      id: "e-293",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-294",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|04f749fc-1fe6-95b4-8d32-10e0007ed387",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|04f749fc-1fe6-95b4-8d32-10e0007ed387",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536322821,
    },
    "e-294": {
      id: "e-294",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-293",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|04f749fc-1fe6-95b4-8d32-10e0007ed387",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|04f749fc-1fe6-95b4-8d32-10e0007ed387",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536322821,
    },
    "e-295": {
      id: "e-295",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-296",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|c6ad61ae-a4cf-00b8-bb79-b8224730b620",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|c6ad61ae-a4cf-00b8-bb79-b8224730b620",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536323077,
    },
    "e-296": {
      id: "e-296",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-295",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|c6ad61ae-a4cf-00b8-bb79-b8224730b620",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|c6ad61ae-a4cf-00b8-bb79-b8224730b620",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536323077,
    },
    "e-297": {
      id: "e-297",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-298",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|f861ca40-28ea-ea29-a1e2-bdefa3e069f4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|f861ca40-28ea-ea29-a1e2-bdefa3e069f4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536328076,
    },
    "e-298": {
      id: "e-298",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-297",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|f861ca40-28ea-ea29-a1e2-bdefa3e069f4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|f861ca40-28ea-ea29-a1e2-bdefa3e069f4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536328076,
    },
    "e-299": {
      id: "e-299",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-300",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|d08a247d-b93c-f0a3-adc4-ffd1c12f48ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|d08a247d-b93c-f0a3-adc4-ffd1c12f48ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536328629,
    },
    "e-300": {
      id: "e-300",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-299",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|d08a247d-b93c-f0a3-adc4-ffd1c12f48ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|d08a247d-b93c-f0a3-adc4-ffd1c12f48ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536328629,
    },
    "e-301": {
      id: "e-301",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-302",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|7b6b7ecf-f5a3-4c68-b9d2-927298c5ac2c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|7b6b7ecf-f5a3-4c68-b9d2-927298c5ac2c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536329216,
    },
    "e-302": {
      id: "e-302",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-301",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|7b6b7ecf-f5a3-4c68-b9d2-927298c5ac2c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|7b6b7ecf-f5a3-4c68-b9d2-927298c5ac2c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536329216,
    },
    "e-303": {
      id: "e-303",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-304",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|13785aef-17a3-558f-dfe7-c407537bf966",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|13785aef-17a3-558f-dfe7-c407537bf966",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536329585,
    },
    "e-304": {
      id: "e-304",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-303",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|13785aef-17a3-558f-dfe7-c407537bf966",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|13785aef-17a3-558f-dfe7-c407537bf966",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536329585,
    },
    "e-305": {
      id: "e-305",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-306",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|3592b96d-1150-7b76-98b7-023b95fcc5b5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|3592b96d-1150-7b76-98b7-023b95fcc5b5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536329990,
    },
    "e-306": {
      id: "e-306",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-305",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|3592b96d-1150-7b76-98b7-023b95fcc5b5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|3592b96d-1150-7b76-98b7-023b95fcc5b5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536329990,
    },
    "e-307": {
      id: "e-307",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-308",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|5ee45ff6-30e3-0918-2064-6e48862c9f68",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|5ee45ff6-30e3-0918-2064-6e48862c9f68",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536330248,
    },
    "e-308": {
      id: "e-308",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-307",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|5ee45ff6-30e3-0918-2064-6e48862c9f68",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|5ee45ff6-30e3-0918-2064-6e48862c9f68",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536330248,
    },
    "e-309": {
      id: "e-309",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-310",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|c33fb089-ab2f-58be-27ba-b051a0977895",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|c33fb089-ab2f-58be-27ba-b051a0977895",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536429401,
    },
    "e-310": {
      id: "e-310",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-309",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|c33fb089-ab2f-58be-27ba-b051a0977895",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|c33fb089-ab2f-58be-27ba-b051a0977895",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678536429401,
    },
    "e-311": {
      id: "e-311",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-312" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|65a36a9c-2a30-35f7-4f5a-70cb5dd48c8a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|65a36a9c-2a30-35f7-4f5a-70cb5dd48c8a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1678590024434,
    },
    "e-313": {
      id: "e-313",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-314" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|2a135480-6b14-6ca5-f22c-e14d467709f7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|2a135480-6b14-6ca5-f22c-e14d467709f7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1678590081541,
    },
    "e-315": {
      id: "e-315",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-316" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|b56cac7c-9941-53ab-41fd-37d89ef3467f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|b56cac7c-9941-53ab-41fd-37d89ef3467f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1678590089104,
    },
    "e-317": {
      id: "e-317",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-318" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|25a259e3-3223-6a25-6301-59c49ec4cd78",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|25a259e3-3223-6a25-6301-59c49ec4cd78",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678590120580,
    },
    "e-319": {
      id: "e-319",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-320" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|88cea45f-d59e-9192-b760-ba3b990ff3ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|88cea45f-d59e-9192-b760-ba3b990ff3ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678590132186,
    },
    "e-321": {
      id: "e-321",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-322" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|be3ff030-821b-c322-457b-1cc4eae6bd2b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|be3ff030-821b-c322-457b-1cc4eae6bd2b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678590146520,
    },
    "e-323": {
      id: "e-323",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-324" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|53d18a6e-08ca-54ee-d582-e1ad34a7e1fe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|53d18a6e-08ca-54ee-d582-e1ad34a7e1fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678590226755,
    },
    "e-325": {
      id: "e-325",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-326" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|f588fbea-c6e1-924a-b005-a87f19c8e039",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|f588fbea-c6e1-924a-b005-a87f19c8e039",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678590286635,
    },
    "e-327": {
      id: "e-327",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-328" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|76283f48-2a3c-1238-dca3-502bed172db4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|76283f48-2a3c-1238-dca3-502bed172db4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678590294024,
    },
    "e-329": {
      id: "e-329",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-330" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|25641ba0-388c-94f2-8896-709b98e80399",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|25641ba0-388c-94f2-8896-709b98e80399",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678590547065,
    },
    "e-331": {
      id: "e-331",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-332" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|48ecea0b-1634-3f06-64ba-01d03765a30d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|48ecea0b-1634-3f06-64ba-01d03765a30d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678590558916,
    },
    "e-333": {
      id: "e-333",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-334" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|2d62f7f4-baf2-0763-8f1d-097836197d70",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|2d62f7f4-baf2-0763-8f1d-097836197d70",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678590610891,
    },
    "e-335": {
      id: "e-335",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-336" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|3072ee37-c547-cbb6-a661-c3a2c1f60df7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|3072ee37-c547-cbb6-a661-c3a2c1f60df7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678590621772,
    },
    "e-337": {
      id: "e-337",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-338" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|a5d23d42-6eb8-ac3f-379a-470f95513ec6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|a5d23d42-6eb8-ac3f-379a-470f95513ec6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678590631296,
    },
    "e-339": {
      id: "e-339",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-340" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|a8febecf-4c9d-68d9-c2e5-cf715e1a4516",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|a8febecf-4c9d-68d9-c2e5-cf715e1a4516",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678590640797,
    },
    "e-341": {
      id: "e-341",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-342" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|85432317-31b7-1541-6da0-d4e79de13914",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|85432317-31b7-1541-6da0-d4e79de13914",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678590655387,
    },
    "e-343": {
      id: "e-343",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-344" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|0947ff99-22b7-03e7-1bf7-26a74eaba316",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|0947ff99-22b7-03e7-1bf7-26a74eaba316",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678590667837,
    },
    "e-345": {
      id: "e-345",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-346" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|fdc6a67e-2476-9f30-20f1-8b476be31d3b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|fdc6a67e-2476-9f30-20f1-8b476be31d3b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678590677389,
    },
    "e-347": {
      id: "e-347",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-348" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|fdc35ef3-d79b-1332-7df3-c9c14d9827a5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|fdc35ef3-d79b-1332-7df3-c9c14d9827a5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678590685132,
    },
    "e-349": {
      id: "e-349",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-350" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c77db456-8968-bdfa-b676-daab664e7d78",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c77db456-8968-bdfa-b676-daab664e7d78",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678590699387,
    },
    "e-355": {
      id: "e-355",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-356" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|b472bc2c-64f9-a065-9102-4f7222b21d9b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|b472bc2c-64f9-a065-9102-4f7222b21d9b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1678591285412,
    },
    "e-357": {
      id: "e-357",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-358" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|b472bc2c-64f9-a065-9102-4f7222b21da1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|b472bc2c-64f9-a065-9102-4f7222b21da1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1678591341047,
    },
    "e-359": {
      id: "e-359",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-360" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|b472bc2c-64f9-a065-9102-4f7222b21d9e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|b472bc2c-64f9-a065-9102-4f7222b21d9e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1678591350710,
    },
    "e-361": {
      id: "e-361",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-362" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|3fb1dc83-0da4-bc82-547e-512df4da6280",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|3fb1dc83-0da4-bc82-547e-512df4da6280",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591649446,
    },
    "e-363": {
      id: "e-363",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-364" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|b23b006f-7b83-8abf-d5eb-4a006a1d39c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|b23b006f-7b83-8abf-d5eb-4a006a1d39c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591658928,
    },
    "e-365": {
      id: "e-365",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-366" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|b60374e3-fa5c-e2c7-57ec-43ddeeff68d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|b60374e3-fa5c-e2c7-57ec-43ddeeff68d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591669151,
    },
    "e-369": {
      id: "e-369",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-370" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|7e1ac5f8-6e0b-a5ca-b2b9-60d79eb21964",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|7e1ac5f8-6e0b-a5ca-b2b9-60d79eb21964",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591700451,
    },
    "e-371": {
      id: "e-371",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-372" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|41233729-8e55-a9af-57fb-27527f1360c9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|41233729-8e55-a9af-57fb-27527f1360c9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591720061,
    },
    "e-373": {
      id: "e-373",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-374" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|41233729-8e55-a9af-57fb-27527f1360d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|41233729-8e55-a9af-57fb-27527f1360d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591728259,
    },
    "e-375": {
      id: "e-375",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-376" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|3e726969-9e43-49d0-eafa-3aa7d4ad681f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|3e726969-9e43-49d0-eafa-3aa7d4ad681f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591735432,
    },
    "e-377": {
      id: "e-377",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-378" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|3e726969-9e43-49d0-eafa-3aa7d4ad6828",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|3e726969-9e43-49d0-eafa-3aa7d4ad6828",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591745548,
    },
    "e-379": {
      id: "e-379",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-380" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|8a53ae4d-97bf-5f8a-959d-5ee19bffb9b6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|8a53ae4d-97bf-5f8a-959d-5ee19bffb9b6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591760258,
    },
    "e-381": {
      id: "e-381",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-382" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|10645ca0-a8b9-d7bb-cb12-317a8b0bb5c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|10645ca0-a8b9-d7bb-cb12-317a8b0bb5c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591780564,
    },
    "e-383": {
      id: "e-383",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-384" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|f34b163c-1ee6-410d-e5c6-966e15454734",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|f34b163c-1ee6-410d-e5c6-966e15454734",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591797947,
    },
    "e-385": {
      id: "e-385",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-386" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|f34b163c-1ee6-410d-e5c6-966e1545473d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|f34b163c-1ee6-410d-e5c6-966e1545473d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591806902,
    },
    "e-387": {
      id: "e-387",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-388" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|f34b163c-1ee6-410d-e5c6-966e15454753",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|f34b163c-1ee6-410d-e5c6-966e15454753",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591813733,
    },
    "e-389": {
      id: "e-389",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-390" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|793d87e0-66a0-6d0b-76d7-78737fd6cfdc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|793d87e0-66a0-6d0b-76d7-78737fd6cfdc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591829409,
    },
    "e-391": {
      id: "e-391",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-392" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|793d87e0-66a0-6d0b-76d7-78737fd6cfe0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|793d87e0-66a0-6d0b-76d7-78737fd6cfe0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591846295,
    },
    "e-393": {
      id: "e-393",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-394" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|76504607-78a4-fe45-48a1-235088e0a679",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|76504607-78a4-fe45-48a1-235088e0a679",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591871406,
    },
    "e-395": {
      id: "e-395",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-396" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|b395b1bc-4362-983f-e411-1f1172cb53d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|b395b1bc-4362-983f-e411-1f1172cb53d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1678591894588,
    },
    "e-397": {
      id: "e-397",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-398" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|b395b1bc-4362-983f-e411-1f1172cb53d5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|b395b1bc-4362-983f-e411-1f1172cb53d5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1678591918836,
    },
    "e-399": {
      id: "e-399",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-400" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|b395b1bc-4362-983f-e411-1f1172cb53d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|b395b1bc-4362-983f-e411-1f1172cb53d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591931765,
    },
    "e-401": {
      id: "e-401",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-402" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|c04e3126-b896-dfa6-7e83-2c5952eac47b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|c04e3126-b896-dfa6-7e83-2c5952eac47b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678591942495,
    },
    "e-403": {
      id: "e-403",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-404" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|69f7f6a6-f9da-b30b-5de1-2b077c001964",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|69f7f6a6-f9da-b30b-5de1-2b077c001964",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1678591962777,
    },
    "e-405": {
      id: "e-405",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-406" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|b797a51a-d076-b5d2-2c7f-e4e4f58ef151",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|b797a51a-d076-b5d2-2c7f-e4e4f58ef151",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592043010,
    },
    "e-407": {
      id: "e-407",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-408" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|54d10550-0066-31a7-52ef-4a383d55a8bc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|54d10550-0066-31a7-52ef-4a383d55a8bc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592052366,
    },
    "e-409": {
      id: "e-409",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-410" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|7353df1e-6f0a-574e-2428-66daee6fb01e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|7353df1e-6f0a-574e-2428-66daee6fb01e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592064446,
    },
    "e-411": {
      id: "e-411",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-412" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|7353df1e-6f0a-574e-2428-66daee6fb027",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|7353df1e-6f0a-574e-2428-66daee6fb027",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592074166,
    },
    "e-413": {
      id: "e-413",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-414" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|0117c9fc-4e7e-47d8-beb0-7a45bbcae0ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|0117c9fc-4e7e-47d8-beb0-7a45bbcae0ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592092083,
    },
    "e-415": {
      id: "e-415",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-416" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|004cad00-d9c1-4eda-14b3-6d84c01db909",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|004cad00-d9c1-4eda-14b3-6d84c01db909",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592103019,
    },
    "e-417": {
      id: "e-417",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-418" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|36a511c3-587d-5b12-196d-d43fe5584d23",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|36a511c3-587d-5b12-196d-d43fe5584d23",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592110178,
    },
    "e-419": {
      id: "e-419",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-420" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|c1ffe3ca-b29a-4ee9-737f-5c134bbeddc1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|c1ffe3ca-b29a-4ee9-737f-5c134bbeddc1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592124125,
    },
    "e-421": {
      id: "e-421",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-422" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|288df143-892a-33d3-3c89-06450a0b21c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|288df143-892a-33d3-3c89-06450a0b21c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592133724,
    },
    "e-423": {
      id: "e-423",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-424" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|47aa239f-cefa-71dc-c871-f7135f9779b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|47aa239f-cefa-71dc-c871-f7135f9779b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592146846,
    },
    "e-425": {
      id: "e-425",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-426" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|12d40812-edb1-eedf-6561-690fb4f15e6b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|12d40812-edb1-eedf-6561-690fb4f15e6b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592160284,
    },
    "e-427": {
      id: "e-427",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-428" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|4a1d6968-ddb8-f3f8-ff73-24e6ab42792d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|4a1d6968-ddb8-f3f8-ff73-24e6ab42792d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592171558,
    },
    "e-429": {
      id: "e-429",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-430" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|73507769-cecc-1fb9-f22f-38dac51de7c9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|73507769-cecc-1fb9-f22f-38dac51de7c9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592190067,
    },
    "e-431": {
      id: "e-431",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-432" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|73507769-cecc-1fb9-f22f-38dac51de7d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|73507769-cecc-1fb9-f22f-38dac51de7d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592197889,
    },
    "e-433": {
      id: "e-433",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-434" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|73507769-cecc-1fb9-f22f-38dac51de815",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|73507769-cecc-1fb9-f22f-38dac51de815",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592212686,
    },
    "e-435": {
      id: "e-435",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-436" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|dfbf38ee-49cf-7f0f-fa87-6e33c83e39a5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|dfbf38ee-49cf-7f0f-fa87-6e33c83e39a5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592221093,
    },
    "e-437": {
      id: "e-437",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-438" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|093ad699-d204-0669-4e28-f4a9706c0a71",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|093ad699-d204-0669-4e28-f4a9706c0a71",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592230609,
    },
    "e-439": {
      id: "e-439",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-440" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a04a2ff7a7c8e6d18ec5|26ade3d9-542b-6066-37fa-f6a42795f4e3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a04a2ff7a7c8e6d18ec5|26ade3d9-542b-6066-37fa-f6a42795f4e3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592261966,
    },
    "e-441": {
      id: "e-441",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-442" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|b60374e3-fa5c-e2c7-57ec-43ddeeff68da",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|b60374e3-fa5c-e2c7-57ec-43ddeeff68da",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592290657,
    },
    "e-443": {
      id: "e-443",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-444" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|6dccf83e-576f-141c-8151-2e89050c5410",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|6dccf83e-576f-141c-8151-2e89050c5410",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592300468,
    },
    "e-445": {
      id: "e-445",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-446" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a036b3d84f090ba9238d|72ae32d0-8a8b-f02b-63f9-9abc2fe4e300",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a036b3d84f090ba9238d|72ae32d0-8a8b-f02b-63f9-9abc2fe4e300",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592308578,
    },
    "e-447": {
      id: "e-447",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-448" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|1e6006e7-f161-fe86-baa9-196bd98a2a0c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|1e6006e7-f161-fe86-baa9-196bd98a2a0c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592350115,
    },
    "e-449": {
      id: "e-449",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-450" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|132ad117-661b-6775-c151-6ba363adb34d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|132ad117-661b-6775-c151-6ba363adb34d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592369018,
    },
    "e-451": {
      id: "e-451",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-452" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a022d179893cd50e0dd24444|75d3f933-1a2e-c8d4-84de-13f45398deae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a022d179893cd50e0dd24444|75d3f933-1a2e-c8d4-84de-13f45398deae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592377626,
    },
    "e-455": {
      id: "e-455",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-456" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0|fb6b767f-2878-307d-0270-2c5b8609540d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0|fb6b767f-2878-307d-0270-2c5b8609540d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592429969,
    },
    "e-457": {
      id: "e-457",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-458" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1749ea24e3f1bafb3d0|2ba5666b-e6da-2bd2-df5e-1b0c75ae00cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1749ea24e3f1bafb3d0|2ba5666b-e6da-2bd2-df5e-1b0c75ae00cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592439707,
    },
    "e-461": {
      id: "e-461",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-462" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1a2596f1aa29b03deee|e8bac7ac-e048-a58a-d463-91befe401b41",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee|e8bac7ac-e048-a58a-d463-91befe401b41",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592466049,
    },
    "e-463": {
      id: "e-463",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-464" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4a1a2596f1aa29b03deee|e8bac7ac-e048-a58a-d463-91befe401b65",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4a1a2596f1aa29b03deee|e8bac7ac-e048-a58a-d463-91befe401b65",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592480649,
    },
    "e-467": {
      id: "e-467",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-468" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4ac6c1dc16270b9744228|be993ddd-c888-95bc-1f82-53e7e9947eb4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4ac6c1dc16270b9744228|be993ddd-c888-95bc-1f82-53e7e9947eb4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592512700,
    },
    "e-469": {
      id: "e-469",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-470" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4ac6c1dc16270b9744228|3f8184e4-2683-c365-8090-12fa33c67e85",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4ac6c1dc16270b9744228|3f8184e4-2683-c365-8090-12fa33c67e85",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592521044,
    },
    "e-471": {
      id: "e-471",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-472" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4ac6c1dc16270b9744228|99288c6b-ddbb-056e-c729-cad8139fcc41",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4ac6c1dc16270b9744228|99288c6b-ddbb-056e-c729-cad8139fcc41",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592534033,
    },
    "e-473": {
      id: "e-473",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-474" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4ac6c1dc16270b9744228|d9b2f1aa-6e6e-c315-9eaf-fc8111617f1b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4ac6c1dc16270b9744228|d9b2f1aa-6e6e-c315-9eaf-fc8111617f1b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592544148,
    },
    "e-475": {
      id: "e-475",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-476" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4ae3771b287635eeec754|1ce73ed8-3785-8e3d-918e-da5de958071a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4ae3771b287635eeec754|1ce73ed8-3785-8e3d-918e-da5de958071a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592560330,
    },
    "e-477": {
      id: "e-477",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-478" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4ae3771b287635eeec754|46758155-f2c3-6811-0538-e716ebb31e70",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4ae3771b287635eeec754|46758155-f2c3-6811-0538-e716ebb31e70",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592568218,
    },
    "e-479": {
      id: "e-479",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-480" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4ae3771b287635eeec754|bd9ec2ea-563d-5409-f3a4-9ea82f5aa1d9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4ae3771b287635eeec754|bd9ec2ea-563d-5409-f3a4-9ea82f5aa1d9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592576512,
    },
    "e-481": {
      id: "e-481",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-482" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4ae3771b287635eeec754|0af51fad-7570-a984-a7e5-3a673da461ff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4ae3771b287635eeec754|0af51fad-7570-a984-a7e5-3a673da461ff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592590173,
    },
    "e-485": {
      id: "e-485",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-486" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4afe9d179891cab0f3bb2|a0fae06d-8f82-2d13-706d-41c23b0d25d1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4afe9d179891cab0f3bb2|a0fae06d-8f82-2d13-706d-41c23b0d25d1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592612691,
    },
    "e-487": {
      id: "e-487",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-488" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f4afe9d179891cab0f3bb2|7b45dc40-0ad2-e2c8-7e78-5a5091ca8dbb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f4afe9d179891cab0f3bb2|7b45dc40-0ad2-e2c8-7e78-5a5091ca8dbb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592622501,
    },
    "e-491": {
      id: "e-491",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-492" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f5f1b3ba3b8a0bdae0f66c|218fe344-ff00-5b4e-4bcc-fb9d6ce03ebe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f5f1b3ba3b8a0bdae0f66c|218fe344-ff00-5b4e-4bcc-fb9d6ce03ebe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592645096,
    },
    "e-493": {
      id: "e-493",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-494" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f5f1b3ba3b8a0bdae0f66c|5d22dfe3-66e8-157c-1689-3ce6a05eab05",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f5f1b3ba3b8a0bdae0f66c|5d22dfe3-66e8-157c-1689-3ce6a05eab05",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592651798,
    },
    "e-497": {
      id: "e-497",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-498" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f5f657c9e0137aa8cc5379|8e1f4a23-dd38-ae73-f621-116f66e45064",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f5f657c9e0137aa8cc5379|8e1f4a23-dd38-ae73-f621-116f66e45064",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592676691,
    },
    "e-499": {
      id: "e-499",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-500" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f5f657c9e0137aa8cc5379|a8fbf0aa-7909-6e3c-4730-efa28e6342ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f5f657c9e0137aa8cc5379|a8fbf0aa-7909-6e3c-4730-efa28e6342ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592683741,
    },
    "e-503": {
      id: "e-503",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-504" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60d997e73e55f17be7e4e|8e1f4a23-dd38-ae73-f621-116f66e45064",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60d997e73e55f17be7e4e|8e1f4a23-dd38-ae73-f621-116f66e45064",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592720668,
    },
    "e-505": {
      id: "e-505",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-506" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60d997e73e55f17be7e4e|10e4c0c4-52a1-840f-2e97-c39734f62c21",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60d997e73e55f17be7e4e|10e4c0c4-52a1-840f-2e97-c39734f62c21",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592732262,
    },
    "e-507": {
      id: "e-507",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-508" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60d997e73e55f17be7e4e|c88666e4-2b46-c12a-0649-5ebec4fc1853",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60d997e73e55f17be7e4e|c88666e4-2b46-c12a-0649-5ebec4fc1853",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592739803,
    },
    "e-509": {
      id: "e-509",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-510" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60d997e73e55f17be7e4e|a8fbf0aa-7909-6e3c-4730-efa28e6342ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60d997e73e55f17be7e4e|a8fbf0aa-7909-6e3c-4730-efa28e6342ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592748316,
    },
    "e-511": {
      id: "e-511",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-512" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|197bec96-eede-4fb3-a622-18f7637f46b0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|197bec96-eede-4fb3-a622-18f7637f46b0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1678592780117,
    },
    "e-513": {
      id: "e-513",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-514" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|197bec96-eede-4fb3-a622-18f7637f46b3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|197bec96-eede-4fb3-a622-18f7637f46b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1678592797672,
    },
    "e-515": {
      id: "e-515",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-516" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|38f94d56-4992-28a9-9afd-f4940e574fc5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|38f94d56-4992-28a9-9afd-f4940e574fc5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592811070,
    },
    "e-517": {
      id: "e-517",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-518" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|6c49d507-21d0-47d8-654d-5ba2d3581c66",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|6c49d507-21d0-47d8-654d-5ba2d3581c66",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592822453,
    },
    "e-519": {
      id: "e-519",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-520" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|1b30d613-d4aa-f358-3fc6-5a977eac1d12",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|1b30d613-d4aa-f358-3fc6-5a977eac1d12",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592834465,
    },
    "e-521": {
      id: "e-521",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-522" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|ccbe798c-1bde-7d38-1472-19cacfcce0b6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|ccbe798c-1bde-7d38-1472-19cacfcce0b6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592842408,
    },
    "e-523": {
      id: "e-523",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-524" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|04f38fd6-980c-6ccb-7caf-1cfb233cf8cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|04f38fd6-980c-6ccb-7caf-1cfb233cf8cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592851117,
    },
    "e-525": {
      id: "e-525",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-526" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|197bec96-eede-4fb3-a622-18f7637f46b9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|197bec96-eede-4fb3-a622-18f7637f46b9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592897011,
    },
    "e-527": {
      id: "e-527",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-528" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|197bec96-eede-4fb3-a622-18f7637f46bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|197bec96-eede-4fb3-a622-18f7637f46bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592909586,
    },
    "e-529": {
      id: "e-529",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-530" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|197bec96-eede-4fb3-a622-18f7637f46bb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|197bec96-eede-4fb3-a622-18f7637f46bb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678592919671,
    },
    "e-531": {
      id: "e-531",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-532" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|072b5ba6-f683-4361-0c4f-69ea703aaef6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|072b5ba6-f683-4361-0c4f-69ea703aaef6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593010748,
    },
    "e-533": {
      id: "e-533",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-534" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|e718baab-47b0-65fe-e5ad-ef3c2d9b4f26",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|e718baab-47b0-65fe-e5ad-ef3c2d9b4f26",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593020053,
    },
    "e-535": {
      id: "e-535",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-536" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|e718baab-47b0-65fe-e5ad-ef3c2d9b4f2e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|e718baab-47b0-65fe-e5ad-ef3c2d9b4f2e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593037719,
    },
    "e-537": {
      id: "e-537",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-538" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|e718baab-47b0-65fe-e5ad-ef3c2d9b4f37",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|e718baab-47b0-65fe-e5ad-ef3c2d9b4f37",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593045332,
    },
    "e-539": {
      id: "e-539",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-540" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|e718baab-47b0-65fe-e5ad-ef3c2d9b4f40",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|e718baab-47b0-65fe-e5ad-ef3c2d9b4f40",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593064252,
    },
    "e-541": {
      id: "e-541",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-542" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|55dc2e26-554a-b827-bceb-6a520be93886",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|55dc2e26-554a-b827-bceb-6a520be93886",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593080813,
    },
    "e-543": {
      id: "e-543",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-544" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|cc11618d-0388-2f9a-3c06-d9241a222ee3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|cc11618d-0388-2f9a-3c06-d9241a222ee3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593107189,
    },
    "e-545": {
      id: "e-545",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-546" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|ef6d6aa3-3d85-4910-89a9-91d2076fa7a9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|ef6d6aa3-3d85-4910-89a9-91d2076fa7a9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593115006,
    },
    "e-547": {
      id: "e-547",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-548" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|f402fb38-da97-acee-9825-85c320ee074a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|f402fb38-da97-acee-9825-85c320ee074a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593127614,
    },
    "e-549": {
      id: "e-549",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-550" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|f9c0d7e6-2e24-6625-aab8-b80dda761d6f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|f9c0d7e6-2e24-6625-aab8-b80dda761d6f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593136945,
    },
    "e-551": {
      id: "e-551",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-552" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|d6ff2a66-de40-d8bb-7727-1853647ca2ca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|d6ff2a66-de40-d8bb-7727-1853647ca2ca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593145970,
    },
    "e-553": {
      id: "e-553",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-554" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|e727a645-a3ec-057f-df4c-654717d32d21",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|e727a645-a3ec-057f-df4c-654717d32d21",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593158461,
    },
    "e-555": {
      id: "e-555",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-556" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b77ba3b8a6b03e271ce|7190740a-117d-c8bf-5d13-51cc507e57f9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b77ba3b8a6b03e271ce|7190740a-117d-c8bf-5d13-51cc507e57f9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593168533,
    },
    "e-557": {
      id: "e-557",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-558" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd36",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd36",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1678593189352,
    },
    "e-559": {
      id: "e-559",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-560" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd39",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd39",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1678593199351,
    },
    "e-561": {
      id: "e-561",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-562" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd3c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd3c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593213776,
    },
    "e-563": {
      id: "e-563",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-564" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd3e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd3e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593231040,
    },
    "e-565": {
      id: "e-565",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-566" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd43",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd43",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593250411,
    },
    "e-567": {
      id: "e-567",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-568" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd48",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd48",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593260055,
    },
    "e-569": {
      id: "e-569",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-570" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd4d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd4d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593275959,
    },
    "e-571": {
      id: "e-571",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-572" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd55",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd55",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593308043,
    },
    "e-573": {
      id: "e-573",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-574" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd53",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd53",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593317516,
    },
    "e-575": {
      id: "e-575",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-576" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|5fb1372f-9049-b3a2-9153-645ba2abb456",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|5fb1372f-9049-b3a2-9153-645ba2abb456",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593326122,
    },
    "e-577": {
      id: "e-577",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-578" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd57",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|f12af6f4-decf-5f99-6a25-82e9595ffd57",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593333425,
    },
    "e-579": {
      id: "e-579",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-580" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|3d08d35b-30a0-aeee-a74e-bc5a224413a4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|3d08d35b-30a0-aeee-a74e-bc5a224413a4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593369169,
    },
    "e-581": {
      id: "e-581",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-582" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|c18cdacc-d6e6-41e2-e15c-1dfe096bb4e0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|c18cdacc-d6e6-41e2-e15c-1dfe096bb4e0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593381117,
    },
    "e-583": {
      id: "e-583",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-584" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|3d08d35b-30a0-aeee-a74e-bc5a224413bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|3d08d35b-30a0-aeee-a74e-bc5a224413bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593388660,
    },
    "e-585": {
      id: "e-585",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-586" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|3d08d35b-30a0-aeee-a74e-bc5a224413c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|3d08d35b-30a0-aeee-a74e-bc5a224413c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593405969,
    },
    "e-587": {
      id: "e-587",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-588" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|3d08d35b-30a0-aeee-a74e-bc5a224413cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|3d08d35b-30a0-aeee-a74e-bc5a224413cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593417892,
    },
    "e-589": {
      id: "e-589",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-590" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|3d08d35b-30a0-aeee-a74e-bc5a224413d4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|3d08d35b-30a0-aeee-a74e-bc5a224413d4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593426925,
    },
    "e-591": {
      id: "e-591",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-592" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|3d08d35b-30a0-aeee-a74e-bc5a224413dd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|3d08d35b-30a0-aeee-a74e-bc5a224413dd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593437504,
    },
    "e-593": {
      id: "e-593",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-594" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|aa5edf99-b09a-105d-b7d4-e8716cfa9971",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|aa5edf99-b09a-105d-b7d4-e8716cfa9971",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593448377,
    },
    "e-595": {
      id: "e-595",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-596" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|aa5edf99-b09a-105d-b7d4-e8716cfa998a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|aa5edf99-b09a-105d-b7d4-e8716cfa998a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593456995,
    },
    "e-597": {
      id: "e-597",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-598" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|54a6a6d0-358e-ad49-878b-78bcb4055054",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|54a6a6d0-358e-ad49-878b-78bcb4055054",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593472257,
    },
    "e-599": {
      id: "e-599",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-600" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|bf59a4b3-38e6-121e-57dc-3e4f0f37fd13",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|bf59a4b3-38e6-121e-57dc-3e4f0f37fd13",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593483188,
    },
    "e-601": {
      id: "e-601",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-602" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60b87c822843eb46debef|8abc7cf4-5636-c12d-64db-0d648c870767",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60b87c822843eb46debef|8abc7cf4-5636-c12d-64db-0d648c870767",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593493045,
    },
    "e-605": {
      id: "e-605",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-606" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60bad586454e39821ebb8|06dec4a0-5ce2-f66b-a4a9-bc407e238efc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60bad586454e39821ebb8|06dec4a0-5ce2-f66b-a4a9-bc407e238efc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593548587,
    },
    "e-607": {
      id: "e-607",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-608" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60bad586454e39821ebb8|5a10c3b5-ee6c-2085-9977-48367a945668",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60bad586454e39821ebb8|5a10c3b5-ee6c-2085-9977-48367a945668",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593562093,
    },
    "e-611": {
      id: "e-611",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-612" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60bbd13aa71558b35052b|79d976b4-12f7-a5bb-0f4a-35ccbd857e44",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60bbd13aa71558b35052b|79d976b4-12f7-a5bb-0f4a-35ccbd857e44",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593594884,
    },
    "e-615": {
      id: "e-615",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-616" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60c15ac4bff8ee9409bc9|11856567-0940-5625-09c8-89cc17b74319",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60c15ac4bff8ee9409bc9|11856567-0940-5625-09c8-89cc17b74319",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593625527,
    },
    "e-617": {
      id: "e-617",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-618" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63f60c15ac4bff8ee9409bc9|462e2e5f-9873-6a04-6cae-b1cdfe98bd46",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63f60c15ac4bff8ee9409bc9|462e2e5f-9873-6a04-6cae-b1cdfe98bd46",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593633924,
    },
    "e-621": {
      id: "e-621",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-622" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b763",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b763",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593674789,
    },
    "e-623": {
      id: "e-623",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-624" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b766",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5|dc99c8cd-381d-d256-fac1-4a3d4015b766",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593681947,
    },
    "e-627": {
      id: "e-627",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-628" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64088004b78d3f1cf2fef3f766666|faf893fc-85de-68ed-db8e-fddcebeb5e75",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64088004b78d3f1cf2fef3f766666|faf893fc-85de-68ed-db8e-fddcebeb5e75",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593802533,
    },
    "e-629": {
      id: "e-629",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-630" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64088004b78d3f1cf2fef3f766666|faf893fc-85de-68ed-db8e-fddcebeb5e85",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64088004b78d3f1cf2fef3f766666|faf893fc-85de-68ed-db8e-fddcebeb5e85",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593811744,
    },
    "e-633": {
      id: "e-633",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-634" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64087d5b1f0d8be55f7e59a1|d04fdd3b-cd73-cf14-7b57-e47aa0d36825",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64087d5b1f0d8be55f7e59a1|d04fdd3b-cd73-cf14-7b57-e47aa0d36825",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593840245,
    },
    "e-635": {
      id: "e-635",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-636" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64087d5b1f0d8be55f7e59a1|d04fdd3b-cd73-cf14-7b57-e47aa0d36855",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64087d5b1f0d8be55f7e59a1|d04fdd3b-cd73-cf14-7b57-e47aa0d36855",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678593847572,
    },
    "e-637": {
      id: "e-637",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-638" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|2dc8dac3-8a2b-d703-3619-4e0586481abb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|2dc8dac3-8a2b-d703-3619-4e0586481abb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1678608846125,
    },
    "e-639": {
      id: "e-639",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-640" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|2dc8dac3-8a2b-d703-3619-4e0586481abe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|2dc8dac3-8a2b-d703-3619-4e0586481abe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1678608855039,
    },
    "e-641": {
      id: "e-641",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-642" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|6d2206d1-c8eb-43d3-aed0-31210ddc7198",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|6d2206d1-c8eb-43d3-aed0-31210ddc7198",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678608870763,
    },
    "e-643": {
      id: "e-643",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-644" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|8c792b8e-89d9-be6e-559f-978adac8ce61",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|8c792b8e-89d9-be6e-559f-978adac8ce61",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678608878783,
    },
    "e-645": {
      id: "e-645",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-646" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|4c080526-92fb-b572-a3b4-cb0535f06b3e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|4c080526-92fb-b572-a3b4-cb0535f06b3e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678608888788,
    },
    "e-647": {
      id: "e-647",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-648" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|d63121d7-249a-2ee6-36f6-05f41332c055",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|d63121d7-249a-2ee6-36f6-05f41332c055",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1678608997541,
    },
    "e-649": {
      id: "e-649",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-650" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|80874af4-6dd5-d1d0-6a1f-19642605e135",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|80874af4-6dd5-d1d0-6a1f-19642605e135",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678609110230,
    },
    "e-651": {
      id: "e-651",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-652" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|8ef53312-f0e5-2a32-bf04-993fd036ab71",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|8ef53312-f0e5-2a32-bf04-993fd036ab71",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678609118066,
    },
    "e-653": {
      id: "e-653",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-654" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|6556e47d-debc-de3b-4c3f-e1d1dbd3bbb6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|6556e47d-debc-de3b-4c3f-e1d1dbd3bbb6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678609141125,
    },
    "e-655": {
      id: "e-655",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-656" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|350a9fe3-414a-5224-4090-e9831469bbfd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|350a9fe3-414a-5224-4090-e9831469bbfd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678609150553,
    },
    "e-657": {
      id: "e-657",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-658" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|d4d1d745-e0aa-bdc6-efbd-5bfaf22589d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|d4d1d745-e0aa-bdc6-efbd-5bfaf22589d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678609158909,
    },
    "e-659": {
      id: "e-659",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-660" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|3cc8e5a9-48b3-89f1-ad8c-d02dc4348444",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|3cc8e5a9-48b3-89f1-ad8c-d02dc4348444",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678609168831,
    },
    "e-661": {
      id: "e-661",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-662" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|c840b83b-2c2f-d768-2a6b-d8f4ceb81591",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|c840b83b-2c2f-d768-2a6b-d8f4ceb81591",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678609176752,
    },
    "e-663": {
      id: "e-663",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-664" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|646b2374-9abe-e7a1-1a50-6168349a629e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|646b2374-9abe-e7a1-1a50-6168349a629e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678609190226,
    },
    "e-665": {
      id: "e-665",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-666" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|b40e6da3-cb50-8f99-c373-1c47b141f051",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|b40e6da3-cb50-8f99-c373-1c47b141f051",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678609228395,
    },
    "e-667": {
      id: "e-667",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-668" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|9063f608-3eb4-b7cb-3288-788a13013d80",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|9063f608-3eb4-b7cb-3288-788a13013d80",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678609268337,
    },
    "e-669": {
      id: "e-669",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-670" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|9063f608-3eb4-b7cb-3288-788a13013d86",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|9063f608-3eb4-b7cb-3288-788a13013d86",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678609276394,
    },
    "e-671": {
      id: "e-671",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-672" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|bd742eb5-07f7-f444-1cdd-a4516bb9237e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|bd742eb5-07f7-f444-1cdd-a4516bb9237e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678609290890,
    },
    "e-673": {
      id: "e-673",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-674" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|bd742eb5-07f7-f444-1cdd-a4516bb92384",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|bd742eb5-07f7-f444-1cdd-a4516bb92384",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678609298222,
    },
    "e-675": {
      id: "e-675",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-676" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|bee6dc8e-2ae5-8c4a-fddb-0fec5b9812f4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|bee6dc8e-2ae5-8c4a-fddb-0fec5b9812f4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678609317863,
    },
    "e-677": {
      id: "e-677",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-678" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|031fe68d-479c-cf5d-3b8c-4ceffb658e82",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|031fe68d-479c-cf5d-3b8c-4ceffb658e82",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678609324381,
    },
    "e-679": {
      id: "e-679",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-680" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|ae05839d-f8d4-b857-e2fb-fc45193b45fd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|ae05839d-f8d4-b857-e2fb-fc45193b45fd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678609351697,
    },
    "e-681": {
      id: "e-681",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-682" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|ae05839d-f8d4-b857-e2fb-fc45193b45f1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|ae05839d-f8d4-b857-e2fb-fc45193b45f1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678609374345,
    },
    "e-683": {
      id: "e-683",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-684",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "6409954be1bc757869f7d6f5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609707175,
    },
    "e-684": {
      id: "e-684",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-683",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "6409954be1bc757869f7d6f5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609707211,
    },
    "e-685": {
      id: "e-685",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6409954be1bc757869f7d6f5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1678609722919,
    },
    "e-687": {
      id: "e-687",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-686",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "6409954be1bc757869f7d6f5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6409954be1bc757869f7d6f5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609736784,
    },
    "e-688": {
      id: "e-688",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-689",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "64088004b78d3f1cf2fef3f766666",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64088004b78d3f1cf2fef3f766666",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609754618,
    },
    "e-689": {
      id: "e-689",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-688",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "64088004b78d3f1cf2fef3f766666",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64088004b78d3f1cf2fef3f766666",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609754625,
    },
    "e-690": {
      id: "e-690",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "64088004b78d3f1cf2fef3f766666",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64088004b78d3f1cf2fef3f766666",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1678609770289,
    },
    "e-692": {
      id: "e-692",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-691",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "64088004b78d3f1cf2fef3f766666",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64088004b78d3f1cf2fef3f766666",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609782349,
    },
    "e-693": {
      id: "e-693",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-694",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "64087d5b1f0d8be55f7e59a1",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64087d5b1f0d8be55f7e59a1",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609802094,
    },
    "e-694": {
      id: "e-694",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-693",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "64087d5b1f0d8be55f7e59a1",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64087d5b1f0d8be55f7e59a1",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609802134,
    },
    "e-695": {
      id: "e-695",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "64087d5b1f0d8be55f7e59a1",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64087d5b1f0d8be55f7e59a1",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1678609816602,
    },
    "e-697": {
      id: "e-697",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-696",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "64087d5b1f0d8be55f7e59a1",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64087d5b1f0d8be55f7e59a1",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609831134,
    },
    "e-698": {
      id: "e-698",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-699",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63e1fd2039035aad31f6a63b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e1fd2039035aad31f6a63b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609851678,
    },
    "e-699": {
      id: "e-699",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-698",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63e1fd2039035aad31f6a63b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e1fd2039035aad31f6a63b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609851714,
    },
    "e-700": {
      id: "e-700",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "63e1fd2039035aad31f6a63b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e1fd2039035aad31f6a63b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1678609866735,
    },
    "e-702": {
      id: "e-702",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-701",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63e1fd2039035aad31f6a63b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e1fd2039035aad31f6a63b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609875530,
    },
    "e-703": {
      id: "e-703",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-704",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "6406b28bff03d99b6316be3f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6406b28bff03d99b6316be3f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609893243,
    },
    "e-704": {
      id: "e-704",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-703",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "6406b28bff03d99b6316be3f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6406b28bff03d99b6316be3f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609893281,
    },
    "e-705": {
      id: "e-705",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6406b28bff03d99b6316be3f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6406b28bff03d99b6316be3f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1678609903981,
    },
    "e-707": {
      id: "e-707",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-706",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "6406b28bff03d99b6316be3f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6406b28bff03d99b6316be3f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609914656,
    },
    "e-708": {
      id: "e-708",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-709",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "640874c354b6ca5cf4fb3341",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "640874c354b6ca5cf4fb3341",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609933274,
    },
    "e-709": {
      id: "e-709",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-708",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "640874c354b6ca5cf4fb3341",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "640874c354b6ca5cf4fb3341",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609933313,
    },
    "e-710": {
      id: "e-710",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "640874c354b6ca5cf4fb3341",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "640874c354b6ca5cf4fb3341",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1678609944250,
    },
    "e-712": {
      id: "e-712",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-711",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "640874c354b6ca5cf4fb3341",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "640874c354b6ca5cf4fb3341",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1678609956027,
    },
    "e-713": {
      id: "e-713",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-714" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6407589885986d6b042493f8|2af0d74d-413d-fb78-8f82-b588f4e8d280",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6407589885986d6b042493f8|2af0d74d-413d-fb78-8f82-b588f4e8d280",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1678610313676,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "💻☝️ Navbar Scrolled Up",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 800,
                target: { id: "3cc49a08-02d3-b728-f2b0-f033692a371b" },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1676100011866,
    },
    "a-2": {
      id: "a-2",
      title: "💻👇 Navbar Scrolled Down",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 300,
                target: { id: "3cc49a08-02d3-b728-f2b0-f033692a371b" },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 800,
                target: { id: "3cc49a08-02d3-b728-f2b0-f033692a371b" },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1676100011866,
    },
    "a-3": {
      id: "a-3",
      title: "💻🖱️ Navbar on Scroll",
      continuousParameterGroups: [
        {
          id: "a-3-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-3-n",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "3cc49a08-02d3-b728-f2b0-f033692a371b" },
                    globalSwatchId: "",
                    rValue: 251,
                    bValue: 255,
                    gValue: 250,
                    aValue: 0,
                  },
                },
              ],
            },
            {
              keyframe: 1,
              actionItems: [
                {
                  id: "a-3-n-3",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "3cc49a08-02d3-b728-f2b0-f033692a371b" },
                    globalSwatchId: "87100a41",
                    rValue: 251,
                    bValue: 255,
                    gValue: 250,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-3-n-2",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "3cc49a08-02d3-b728-f2b0-f033692a371b" },
                    globalSwatchId: "87100a41",
                    rValue: 251,
                    bValue: 255,
                    gValue: 250,
                    aValue: 1,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1676100381082,
    },
    "a-4": {
      id: "a-4",
      title: "💻 Navbar Transparent",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "3cc49a08-02d3-b728-f2b0-f033692a371b" },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1676273849061,
    },
    "a-5": {
      id: "a-5",
      title: "🙄 Map Item Drops On Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-item-popup",
                  selectorGuids: ["acab1567-a45a-b2e7-dee4-cf5e4f2f58ca"],
                },
                value: "none",
              },
            },
            {
              id: "a-5-n-10",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-item-tooltips-arrow",
                  selectorGuids: ["17c90d9b-b0fa-ec04-499a-43f7acd12c5f"],
                },
                globalSwatchId: "b388ccc3",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-9",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-item-tooltips-arrow",
                  selectorGuids: ["17c90d9b-b0fa-ec04-499a-43f7acd12c5f"],
                },
                value: "none",
              },
            },
            {
              id: "a-5-n-8",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".svg-icon._20x20.color-lavender-100",
                  selectorGuids: [
                    "26c0dbe2-0ce5-5fc8-87e9-2fcd7b5a66cf",
                    "f9c80d1a-cd53-b2a5-1197-b1db9652b7df",
                    "6a89b201-c6ea-aed9-ba3f-480c4f6f4d82",
                  ],
                },
                globalSwatchId: "03250217",
                rValue: 181,
                bValue: 255,
                gValue: 146,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-5",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-item-tooltips",
                  selectorGuids: ["433f814c-838f-44ae-9be5-049784958a95"],
                },
                globalSwatchId: "2ef0df65",
                rValue: 25,
                bValue: 35,
                gValue: 26,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-item-tooltips",
                  selectorGuids: ["433f814c-838f-44ae-9be5-049784958a95"],
                },
                globalSwatchId: "b388ccc3",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-item-popup",
                  selectorGuids: ["acab1567-a45a-b2e7-dee4-cf5e4f2f58ca"],
                },
                value: "block",
              },
            },
            {
              id: "a-5-n-12",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-item-tooltips-arrow",
                  selectorGuids: ["17c90d9b-b0fa-ec04-499a-43f7acd12c5f"],
                },
                globalSwatchId: "2ef0df65",
                rValue: 25,
                bValue: 35,
                gValue: 26,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-11",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-item-tooltips-arrow",
                  selectorGuids: ["17c90d9b-b0fa-ec04-499a-43f7acd12c5f"],
                },
                value: "block",
              },
            },
            {
              id: "a-5-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".svg-icon._20x20.color-lavender-100",
                  selectorGuids: [
                    "26c0dbe2-0ce5-5fc8-87e9-2fcd7b5a66cf",
                    "f9c80d1a-cd53-b2a5-1197-b1db9652b7df",
                    "6a89b201-c6ea-aed9-ba3f-480c4f6f4d82",
                  ],
                },
                globalSwatchId: "b388ccc3",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-item-tooltips",
                  selectorGuids: ["433f814c-838f-44ae-9be5-049784958a95"],
                },
                globalSwatchId: "b388ccc3",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-item-tooltips",
                  selectorGuids: ["433f814c-838f-44ae-9be5-049784958a95"],
                },
                globalSwatchId: "2ef0df65",
                rValue: 25,
                bValue: 35,
                gValue: 26,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1677377977410,
    },
    "a-6": {
      id: "a-6",
      title: "😴 Map Item Drops On Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-item-popup",
                  selectorGuids: ["acab1567-a45a-b2e7-dee4-cf5e4f2f58ca"],
                },
                value: "none",
              },
            },
            {
              id: "a-6-n-10",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-item-tooltips-arrow",
                  selectorGuids: ["17c90d9b-b0fa-ec04-499a-43f7acd12c5f"],
                },
                globalSwatchId: "b388ccc3",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-6-n-9",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-item-tooltips-arrow",
                  selectorGuids: ["17c90d9b-b0fa-ec04-499a-43f7acd12c5f"],
                },
                value: "none",
              },
            },
            {
              id: "a-6-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".svg-icon._20x20.color-lavender-100",
                  selectorGuids: [
                    "26c0dbe2-0ce5-5fc8-87e9-2fcd7b5a66cf",
                    "f9c80d1a-cd53-b2a5-1197-b1db9652b7df",
                    "6a89b201-c6ea-aed9-ba3f-480c4f6f4d82",
                  ],
                },
                globalSwatchId: "03250217",
                rValue: 181,
                bValue: 255,
                gValue: 146,
                aValue: 1,
              },
            },
            {
              id: "a-6-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-item-tooltips",
                  selectorGuids: ["433f814c-838f-44ae-9be5-049784958a95"],
                },
                globalSwatchId: "2ef0df65",
                rValue: 25,
                bValue: 35,
                gValue: 26,
                aValue: 1,
              },
            },
            {
              id: "a-6-n-8",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".map-item-tooltips",
                  selectorGuids: ["433f814c-838f-44ae-9be5-049784958a95"],
                },
                globalSwatchId: "b388ccc3",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1677377977410,
    },
    "a-7": {
      id: "a-7",
      title: "➕ Dropdown Menu Opens",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-toggle-plus-icon.animated",
                  selectorGuids: [
                    "692a37a0-1f4a-3cd7-db76-5b2eccdb2cd9",
                    "8e95c5e5-c9e1-3c10-661a-c02033de7265",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-toggle-plus-icon.animated",
                  selectorGuids: [
                    "692a37a0-1f4a-3cd7-db76-5b2eccdb2cd9",
                    "8e95c5e5-c9e1-3c10-661a-c02033de7265",
                  ],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1677552029465,
    },
    "a-8": {
      id: "a-8",
      title: "➖ Dropdown Menu Closes",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-toggle-plus-icon.animated",
                  selectorGuids: [
                    "692a37a0-1f4a-3cd7-db76-5b2eccdb2cd9",
                    "8e95c5e5-c9e1-3c10-661a-c02033de7265",
                  ],
                },
                zValue: 180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-8-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-toggle-plus-icon.animated",
                  selectorGuids: [
                    "692a37a0-1f4a-3cd7-db76-5b2eccdb2cd9",
                    "8e95c5e5-c9e1-3c10-661a-c02033de7265",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1677552029465,
    },
    "a-14": {
      id: "a-14",
      title: "🙄 Page Preview On Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".page-preview-image-wrap",
                  selectorGuids: ["b19a20bc-7bd3-80b4-812d-b8d518da336b"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".page-preview-image-wrap",
                  selectorGuids: ["b19a20bc-7bd3-80b4-812d-b8d518da336b"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".page-preview-image-wrap",
                  selectorGuids: ["b19a20bc-7bd3-80b4-812d-b8d518da336b"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1678431158316,
    },
    "a-15": {
      id: "a-15",
      title: "😴 Page Preview On Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".page-preview-image-wrap",
                  selectorGuids: ["b19a20bc-7bd3-80b4-812d-b8d518da336b"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1678431292805,
    },
    "a-11": {
      id: "a-11",
      title: "💻🖱️ About Us V1 Hero On Scroll",
      continuousParameterGroups: [
        {
          id: "a-11-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-11-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "outQuad",
                    duration: 500,
                    target: {
                      id: "63f60b77ba3b8a6b03e271ce|197bec96-eede-4fb3-a622-18f7637f46b9",
                    },
                    xValue: null,
                    yValue: 0,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "63f60b77ba3b8a6b03e271ce|197bec96-eede-4fb3-a622-18f7637f46bd",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "63f60b77ba3b8a6b03e271ce|197bec96-eede-4fb3-a622-18f7637f46bb",
                    },
                    xValue: 0,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 25,
              actionItems: [
                {
                  id: "a-11-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "outQuad",
                    duration: 500,
                    target: {
                      id: "63f60b77ba3b8a6b03e271ce|197bec96-eede-4fb3-a622-18f7637f46b9",
                    },
                    xValue: null,
                    yValue: 86,
                    xUnit: "px",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "63f60b77ba3b8a6b03e271ce|197bec96-eede-4fb3-a622-18f7637f46bd",
                    },
                    yValue: -40,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "63f60b77ba3b8a6b03e271ce|197bec96-eede-4fb3-a622-18f7637f46bb",
                    },
                    xValue: -50,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1678348296762,
    },
    "a-12": {
      id: "a-12",
      title: "📱Navbar Opens",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".svg-icon.navbar-menu-button-icon",
                  selectorGuids: [
                    "26c0dbe2-0ce5-5fc8-87e9-2fcd7b5a66cf",
                    "9d2bd8cd-206c-d272-0a16-baabf9631669",
                  ],
                },
                value: "flex",
              },
            },
            {
              id: "a-12-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".svg-icon.navbar-close-button-icon",
                  selectorGuids: [
                    "26c0dbe2-0ce5-5fc8-87e9-2fcd7b5a66cf",
                    "4675b9f5-f059-3de5-331e-4f68c536b011",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-12-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "3cc49a08-02d3-b728-f2b0-f033692a371b",
                },
                globalSwatchId: "87100a41",
                rValue: 251,
                bValue: 255,
                gValue: 250,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".svg-icon.navbar-menu-button-icon",
                  selectorGuids: [
                    "26c0dbe2-0ce5-5fc8-87e9-2fcd7b5a66cf",
                    "9d2bd8cd-206c-d272-0a16-baabf9631669",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-12-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".svg-icon.navbar-close-button-icon",
                  selectorGuids: [
                    "26c0dbe2-0ce5-5fc8-87e9-2fcd7b5a66cf",
                    "4675b9f5-f059-3de5-331e-4f68c536b011",
                  ],
                },
                value: "flex",
              },
            },
            {
              id: "a-12-n-6",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: true,
                  id: "3cc49a08-02d3-b728-f2b0-f033692a371b",
                },
                globalSwatchId: "b4d836a2",
                rValue: 247,
                bValue: 255,
                gValue: 242,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1678420991149,
    },
    "a-13": {
      id: "a-13",
      title: "📱Navbar Closes",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".svg-icon.navbar-close-button-icon",
                  selectorGuids: [
                    "26c0dbe2-0ce5-5fc8-87e9-2fcd7b5a66cf",
                    "4675b9f5-f059-3de5-331e-4f68c536b011",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-13-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".svg-icon.navbar-menu-button-icon",
                  selectorGuids: [
                    "26c0dbe2-0ce5-5fc8-87e9-2fcd7b5a66cf",
                    "9d2bd8cd-206c-d272-0a16-baabf9631669",
                  ],
                },
                value: "flex",
              },
            },
            {
              id: "a-13-n-6",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: true,
                  id: "3cc49a08-02d3-b728-f2b0-f033692a371b",
                },
                globalSwatchId: "87100a41",
                rValue: 251,
                bValue: 255,
                gValue: 250,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1678420991149,
    },
    "a-16": {
      id: "a-16",
      title: "💻 Hero Preview Marquee",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-preview-marquee-inner-wrap",
                  selectorGuids: ["fd3f88e6-1e63-fea3-a030-6bf96a0263d8"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  selector: ".hero-preview-marquee-inner-wrap",
                  selectorGuids: ["fd3f88e6-1e63-fea3-a030-6bf96a0263d8"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".hero-preview-marquee-inner-wrap",
                  selectorGuids: ["fd3f88e6-1e63-fea3-a030-6bf96a0263d8"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1678434568515,
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    growIn: {
      id: "growIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0.7500000000000001,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    fadeIn: {
      id: "fadeIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInTop: {
      id: "slideInTop",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: -100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInRight: {
      id: "slideInRight",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInLeft: {
      id: "slideInLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
