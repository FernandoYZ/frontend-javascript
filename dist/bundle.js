(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // libs/numeral.min.js
  var require_numeral_min = __commonJS({
    "libs/numeral.min.js"(exports, module) {
      !function(a, b) {
        "function" == typeof define && define.amd ? define(b) : "object" == typeof module && module.exports ? module.exports = b() : a.numeral = b();
      }(exports, function() {
        function a(a2, b2) {
          this._input = a2, this._value = b2;
        }
        var b, c, d = "2.0.6", e = {}, f = {}, g = { currentLocale: "en", zeroFormat: null, nullFormat: null, defaultFormat: "0,0", scalePercentBy100: true }, h = { currentLocale: g.currentLocale, zeroFormat: g.zeroFormat, nullFormat: g.nullFormat, defaultFormat: g.defaultFormat, scalePercentBy100: g.scalePercentBy100 };
        return b = function(d2) {
          var f2, g2, i, j;
          if (b.isNumeral(d2)) f2 = d2.value();
          else if (0 === d2 || "undefined" == typeof d2) f2 = 0;
          else if (null === d2 || c.isNaN(d2)) f2 = null;
          else if ("string" == typeof d2) if (h.zeroFormat && d2 === h.zeroFormat) f2 = 0;
          else if (h.nullFormat && d2 === h.nullFormat || !d2.replace(/[^0-9]+/g, "").length) f2 = null;
          else {
            for (g2 in e) if (j = "function" == typeof e[g2].regexps.unformat ? e[g2].regexps.unformat() : e[g2].regexps.unformat, j && d2.match(j)) {
              i = e[g2].unformat;
              break;
            }
            i = i || b._.stringToNumber, f2 = i(d2);
          }
          else f2 = Number(d2) || null;
          return new a(d2, f2);
        }, b.version = d, b.isNumeral = function(b2) {
          return b2 instanceof a;
        }, b._ = c = { numberToFormat: function(a2, c2, d2) {
          var e2, g2, h2, i, j, k, l, m = f[b.options.currentLocale], n = false, o = false, p = 0, q = "", r = 1e12, s = 1e9, t = 1e6, u = 1e3, v = "", w = false;
          if (a2 = a2 || 0, g2 = Math.abs(a2), b._.includes(c2, "(") ? (n = true, c2 = c2.replace(/[\(|\)]/g, "")) : (b._.includes(c2, "+") || b._.includes(c2, "-")) && (j = b._.includes(c2, "+") ? c2.indexOf("+") : 0 > a2 ? c2.indexOf("-") : -1, c2 = c2.replace(/[\+|\-]/g, "")), b._.includes(c2, "a") && (e2 = c2.match(/a(k|m|b|t)?/), e2 = e2 ? e2[1] : false, b._.includes(c2, " a") && (q = " "), c2 = c2.replace(new RegExp(q + "a[kmbt]?"), ""), g2 >= r && !e2 || "t" === e2 ? (q += m.abbreviations.trillion, a2 /= r) : r > g2 && g2 >= s && !e2 || "b" === e2 ? (q += m.abbreviations.billion, a2 /= s) : s > g2 && g2 >= t && !e2 || "m" === e2 ? (q += m.abbreviations.million, a2 /= t) : (t > g2 && g2 >= u && !e2 || "k" === e2) && (q += m.abbreviations.thousand, a2 /= u)), b._.includes(c2, "[.]") && (o = true, c2 = c2.replace("[.]", ".")), h2 = a2.toString().split(".")[0], i = c2.split(".")[1], k = c2.indexOf(","), p = (c2.split(".")[0].split(",")[0].match(/0/g) || []).length, i ? (b._.includes(i, "[") ? (i = i.replace("]", ""), i = i.split("["), v = b._.toFixed(a2, i[0].length + i[1].length, d2, i[1].length)) : v = b._.toFixed(a2, i.length, d2), h2 = v.split(".")[0], v = b._.includes(v, ".") ? m.delimiters.decimal + v.split(".")[1] : "", o && 0 === Number(v.slice(1)) && (v = "")) : h2 = b._.toFixed(a2, 0, d2), q && !e2 && Number(h2) >= 1e3 && q !== m.abbreviations.trillion) switch (h2 = String(Number(h2) / 1e3), q) {
            case m.abbreviations.thousand:
              q = m.abbreviations.million;
              break;
            case m.abbreviations.million:
              q = m.abbreviations.billion;
              break;
            case m.abbreviations.billion:
              q = m.abbreviations.trillion;
          }
          if (b._.includes(h2, "-") && (h2 = h2.slice(1), w = true), h2.length < p) for (var x = p - h2.length; x > 0; x--) h2 = "0" + h2;
          return k > -1 && (h2 = h2.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + m.delimiters.thousands)), 0 === c2.indexOf(".") && (h2 = ""), l = h2 + v + (q ? q : ""), n ? l = (n && w ? "(" : "") + l + (n && w ? ")" : "") : j >= 0 ? l = 0 === j ? (w ? "-" : "+") + l : l + (w ? "-" : "+") : w && (l = "-" + l), l;
        }, stringToNumber: function(a2) {
          var b2, c2, d2, e2 = f[h.currentLocale], g2 = a2, i = { thousand: 3, million: 6, billion: 9, trillion: 12 };
          if (h.zeroFormat && a2 === h.zeroFormat) c2 = 0;
          else if (h.nullFormat && a2 === h.nullFormat || !a2.replace(/[^0-9]+/g, "").length) c2 = null;
          else {
            c2 = 1, "." !== e2.delimiters.decimal && (a2 = a2.replace(/\./g, "").replace(e2.delimiters.decimal, "."));
            for (b2 in i) if (d2 = new RegExp("[^a-zA-Z]" + e2.abbreviations[b2] + "(?:\\)|(\\" + e2.currency.symbol + ")?(?:\\))?)?$"), g2.match(d2)) {
              c2 *= Math.pow(10, i[b2]);
              break;
            }
            c2 *= (a2.split("-").length + Math.min(a2.split("(").length - 1, a2.split(")").length - 1)) % 2 ? 1 : -1, a2 = a2.replace(/[^0-9\.]+/g, ""), c2 *= Number(a2);
          }
          return c2;
        }, isNaN: function(a2) {
          return "number" == typeof a2 && isNaN(a2);
        }, includes: function(a2, b2) {
          return -1 !== a2.indexOf(b2);
        }, insert: function(a2, b2, c2) {
          return a2.slice(0, c2) + b2 + a2.slice(c2);
        }, reduce: function(a2, b2) {
          if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
          if ("function" != typeof b2) throw new TypeError(b2 + " is not a function");
          var c2, d2 = Object(a2), e2 = d2.length >>> 0, f2 = 0;
          if (3 === arguments.length) c2 = arguments[2];
          else {
            for (; e2 > f2 && !(f2 in d2); ) f2++;
            if (f2 >= e2) throw new TypeError("Reduce of empty array with no initial value");
            c2 = d2[f2++];
          }
          for (; e2 > f2; f2++) f2 in d2 && (c2 = b2(c2, d2[f2], f2, d2));
          return c2;
        }, multiplier: function(a2) {
          var b2 = a2.toString().split(".");
          return b2.length < 2 ? 1 : Math.pow(10, b2[1].length);
        }, correctionFactor: function() {
          var a2 = Array.prototype.slice.call(arguments);
          return a2.reduce(function(a3, b2) {
            var d2 = c.multiplier(b2);
            return a3 > d2 ? a3 : d2;
          }, 1);
        }, toFixed: function(a2, b2, c2, d2) {
          var e2, f2, g2, h2, i = a2.toString().split("."), j = b2 - (d2 || 0);
          return e2 = 2 === i.length ? Math.min(Math.max(i[1].length, j), b2) : j, g2 = Math.pow(10, e2), h2 = (c2(a2 + "e+" + e2) / g2).toFixed(e2), d2 > b2 - e2 && (f2 = new RegExp("\\.?0{1," + (d2 - (b2 - e2)) + "}$"), h2 = h2.replace(f2, "")), h2;
        } }, b.options = h, b.formats = e, b.locales = f, b.locale = function(a2) {
          return a2 && (h.currentLocale = a2.toLowerCase()), h.currentLocale;
        }, b.localeData = function(a2) {
          if (!a2) return f[h.currentLocale];
          if (a2 = a2.toLowerCase(), !f[a2]) throw new Error("Unknown locale : " + a2);
          return f[a2];
        }, b.reset = function() {
          for (var a2 in g) h[a2] = g[a2];
        }, b.zeroFormat = function(a2) {
          h.zeroFormat = "string" == typeof a2 ? a2 : null;
        }, b.nullFormat = function(a2) {
          h.nullFormat = "string" == typeof a2 ? a2 : null;
        }, b.defaultFormat = function(a2) {
          h.defaultFormat = "string" == typeof a2 ? a2 : "0.0";
        }, b.register = function(a2, b2, c2) {
          if (b2 = b2.toLowerCase(), this[a2 + "s"][b2]) throw new TypeError(b2 + " " + a2 + " already registered.");
          return this[a2 + "s"][b2] = c2, c2;
        }, b.validate = function(a2, c2) {
          var d2, e2, f2, g2, h2, i, j, k;
          if ("string" != typeof a2 && (a2 += "", console.warn && console.warn("Numeral.js: Value is not string. It has been co-erced to: ", a2)), a2 = a2.trim(), a2.match(/^\d+$/)) return true;
          if ("" === a2) return false;
          try {
            j = b.localeData(c2);
          } catch (l) {
            j = b.localeData(b.locale());
          }
          return f2 = j.currency.symbol, h2 = j.abbreviations, d2 = j.delimiters.decimal, e2 = "." === j.delimiters.thousands ? "\\." : j.delimiters.thousands, k = a2.match(/^[^\d]+/), null !== k && (a2 = a2.substr(1), k[0] !== f2) ? false : (k = a2.match(/[^\d]+$/), null !== k && (a2 = a2.slice(0, -1), k[0] !== h2.thousand && k[0] !== h2.million && k[0] !== h2.billion && k[0] !== h2.trillion) ? false : (i = new RegExp(e2 + "{2}"), a2.match(/[^\d.,]/g) ? false : (g2 = a2.split(d2), g2.length > 2 ? false : g2.length < 2 ? !!g2[0].match(/^\d+.*\d$/) && !g2[0].match(i) : 1 === g2[0].length ? !!g2[0].match(/^\d+$/) && !g2[0].match(i) && !!g2[1].match(/^\d+$/) : !!g2[0].match(/^\d+.*\d$/) && !g2[0].match(i) && !!g2[1].match(/^\d+$/))));
        }, b.fn = a.prototype = { clone: function() {
          return b(this);
        }, format: function(a2, c2) {
          var d2, f2, g2, i = this._value, j = a2 || h.defaultFormat;
          if (c2 = c2 || Math.round, 0 === i && null !== h.zeroFormat) f2 = h.zeroFormat;
          else if (null === i && null !== h.nullFormat) f2 = h.nullFormat;
          else {
            for (d2 in e) if (j.match(e[d2].regexps.format)) {
              g2 = e[d2].format;
              break;
            }
            g2 = g2 || b._.numberToFormat, f2 = g2(i, j, c2);
          }
          return f2;
        }, value: function() {
          return this._value;
        }, input: function() {
          return this._input;
        }, set: function(a2) {
          return this._value = Number(a2), this;
        }, add: function(a2) {
          function b2(a3, b3, c2, e2) {
            return a3 + Math.round(d2 * b3);
          }
          var d2 = c.correctionFactor.call(null, this._value, a2);
          return this._value = c.reduce([this._value, a2], b2, 0) / d2, this;
        }, subtract: function(a2) {
          function b2(a3, b3, c2, e2) {
            return a3 - Math.round(d2 * b3);
          }
          var d2 = c.correctionFactor.call(null, this._value, a2);
          return this._value = c.reduce([a2], b2, Math.round(this._value * d2)) / d2, this;
        }, multiply: function(a2) {
          function b2(a3, b3, d2, e2) {
            var f2 = c.correctionFactor(a3, b3);
            return Math.round(a3 * f2) * Math.round(b3 * f2) / Math.round(f2 * f2);
          }
          return this._value = c.reduce([this._value, a2], b2, 1), this;
        }, divide: function(a2) {
          function b2(a3, b3, d2, e2) {
            var f2 = c.correctionFactor(a3, b3);
            return Math.round(a3 * f2) / Math.round(b3 * f2);
          }
          return this._value = c.reduce([this._value, a2], b2), this;
        }, difference: function(a2) {
          return Math.abs(b(this._value).subtract(a2).value());
        } }, b.register("locale", "en", { delimiters: { thousands: ",", decimal: "." }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function(a2) {
          var b2 = a2 % 10;
          return 1 === ~~(a2 % 100 / 10) ? "th" : 1 === b2 ? "st" : 2 === b2 ? "nd" : 3 === b2 ? "rd" : "th";
        }, currency: { symbol: "$" } }), function() {
          b.register("format", "bps", { regexps: { format: /(BPS)/, unformat: /(BPS)/ }, format: function(a2, c2, d2) {
            var e2, f2 = b._.includes(c2, " BPS") ? " " : "";
            return a2 = 1e4 * a2, c2 = c2.replace(/\s?BPS/, ""), e2 = b._.numberToFormat(a2, c2, d2), b._.includes(e2, ")") ? (e2 = e2.split(""), e2.splice(-1, 0, f2 + "BPS"), e2 = e2.join("")) : e2 = e2 + f2 + "BPS", e2;
          }, unformat: function(a2) {
            return +(1e-4 * b._.stringToNumber(a2)).toFixed(15);
          } });
        }(), function() {
          var a2 = { base: 1e3, suffixes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] }, c2 = { base: 1024, suffixes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"] }, d2 = a2.suffixes.concat(c2.suffixes.filter(function(b2) {
            return a2.suffixes.indexOf(b2) < 0;
          })), e2 = d2.join("|");
          e2 = "(" + e2.replace("B", "B(?!PS)") + ")", b.register("format", "bytes", { regexps: { format: /([0\s]i?b)/, unformat: new RegExp(e2) }, format: function(d3, e3, f2) {
            var g2, h2, i, j, k = b._.includes(e3, "ib") ? c2 : a2, l = b._.includes(e3, " b") || b._.includes(e3, " ib") ? " " : "";
            for (e3 = e3.replace(/\s?i?b/, ""), h2 = 0; h2 <= k.suffixes.length; h2++) if (i = Math.pow(k.base, h2), j = Math.pow(k.base, h2 + 1), null === d3 || 0 === d3 || d3 >= i && j > d3) {
              l += k.suffixes[h2], i > 0 && (d3 /= i);
              break;
            }
            return g2 = b._.numberToFormat(d3, e3, f2), g2 + l;
          }, unformat: function(d3) {
            var e3, f2, g2 = b._.stringToNumber(d3);
            if (g2) {
              for (e3 = a2.suffixes.length - 1; e3 >= 0; e3--) {
                if (b._.includes(d3, a2.suffixes[e3])) {
                  f2 = Math.pow(a2.base, e3);
                  break;
                }
                if (b._.includes(d3, c2.suffixes[e3])) {
                  f2 = Math.pow(c2.base, e3);
                  break;
                }
              }
              g2 *= f2 || 1;
            }
            return g2;
          } });
        }(), function() {
          b.register("format", "currency", { regexps: { format: /(\$)/ }, format: function(a2, c2, d2) {
            var e2, f2, g2, h2 = b.locales[b.options.currentLocale], i = { before: c2.match(/^([\+|\-|\(|\s|\$]*)/)[0], after: c2.match(/([\+|\-|\)|\s|\$]*)$/)[0] };
            for (c2 = c2.replace(/\s?\$\s?/, ""), e2 = b._.numberToFormat(a2, c2, d2), a2 >= 0 ? (i.before = i.before.replace(/[\-\(]/, ""), i.after = i.after.replace(/[\-\)]/, "")) : 0 > a2 && !b._.includes(i.before, "-") && !b._.includes(i.before, "(") && (i.before = "-" + i.before), g2 = 0; g2 < i.before.length; g2++) switch (f2 = i.before[g2]) {
              case "$":
                e2 = b._.insert(e2, h2.currency.symbol, g2);
                break;
              case " ":
                e2 = b._.insert(e2, " ", g2 + h2.currency.symbol.length - 1);
            }
            for (g2 = i.after.length - 1; g2 >= 0; g2--) switch (f2 = i.after[g2]) {
              case "$":
                e2 = g2 === i.after.length - 1 ? e2 + h2.currency.symbol : b._.insert(e2, h2.currency.symbol, -(i.after.length - (1 + g2)));
                break;
              case " ":
                e2 = g2 === i.after.length - 1 ? e2 + " " : b._.insert(e2, " ", -(i.after.length - (1 + g2) + h2.currency.symbol.length - 1));
            }
            return e2;
          } });
        }(), function() {
          b.register("format", "exponential", { regexps: { format: /(e\+|e-)/, unformat: /(e\+|e-)/ }, format: function(a2, c2, d2) {
            var e2, f2 = "number" != typeof a2 || b._.isNaN(a2) ? "0e+0" : a2.toExponential(), g2 = f2.split("e");
            return c2 = c2.replace(/e[\+|\-]{1}0/, ""), e2 = b._.numberToFormat(Number(g2[0]), c2, d2), e2 + "e" + g2[1];
          }, unformat: function(a2) {
            function c2(a3, c3, d3, e3) {
              var f3 = b._.correctionFactor(a3, c3), g2 = a3 * f3 * (c3 * f3) / (f3 * f3);
              return g2;
            }
            var d2 = b._.includes(a2, "e+") ? a2.split("e+") : a2.split("e-"), e2 = Number(d2[0]), f2 = Number(d2[1]);
            return f2 = b._.includes(a2, "e-") ? f2 *= -1 : f2, b._.reduce([e2, Math.pow(10, f2)], c2, 1);
          } });
        }(), function() {
          b.register("format", "ordinal", { regexps: { format: /(o)/ }, format: function(a2, c2, d2) {
            var e2, f2 = b.locales[b.options.currentLocale], g2 = b._.includes(c2, " o") ? " " : "";
            return c2 = c2.replace(/\s?o/, ""), g2 += f2.ordinal(a2), e2 = b._.numberToFormat(a2, c2, d2), e2 + g2;
          } });
        }(), function() {
          b.register("format", "percentage", { regexps: { format: /(%)/, unformat: /(%)/ }, format: function(a2, c2, d2) {
            var e2, f2 = b._.includes(c2, " %") ? " " : "";
            return b.options.scalePercentBy100 && (a2 = 100 * a2), c2 = c2.replace(/\s?\%/, ""), e2 = b._.numberToFormat(a2, c2, d2), b._.includes(e2, ")") ? (e2 = e2.split(""), e2.splice(-1, 0, f2 + "%"), e2 = e2.join("")) : e2 = e2 + f2 + "%", e2;
          }, unformat: function(a2) {
            var c2 = b._.stringToNumber(a2);
            return b.options.scalePercentBy100 ? 0.01 * c2 : c2;
          } });
        }(), function() {
          b.register("format", "time", { regexps: { format: /(:)/, unformat: /(:)/ }, format: function(a2, b2, c2) {
            var d2 = Math.floor(a2 / 60 / 60), e2 = Math.floor((a2 - 60 * d2 * 60) / 60), f2 = Math.round(a2 - 60 * d2 * 60 - 60 * e2);
            return d2 + ":" + (10 > e2 ? "0" + e2 : e2) + ":" + (10 > f2 ? "0" + f2 : f2);
          }, unformat: function(a2) {
            var b2 = a2.split(":"), c2 = 0;
            return 3 === b2.length ? (c2 += 60 * Number(b2[0]) * 60, c2 += 60 * Number(b2[1]), c2 += Number(b2[2])) : 2 === b2.length && (c2 += 60 * Number(b2[0]), c2 += Number(b2[1])), Number(c2);
          } });
        }(), b;
      });
    }
  });

  // core/utils/numberUtils.js
  var import_numeral_min = __toESM(require_numeral_min());
  function formatCurrency(value) {
    return (0, import_numeral_min.default)(value).format("$0,0.00");
  }
  function formatPercentage(value) {
    return (0, import_numeral_min.default)(value).format("0.00%");
  }
  function formatNumber(value, format) {
    return (0, import_numeral_min.default)(value).format(format);
  }

  // tests/core/utils/numberUtils.test.js
  describe("numberUtils", function() {
    it("should format currency correctly", function() {
      const formattedCurrency = formatCurrency(1234.56);
      expect(formattedCurrency).toBe("$1,234.56");
    });
    it("should format percentage correctly", function() {
      const formattedPercentage = formatPercentage(0.1234);
      expect(formattedPercentage).toBe("12.34%");
    });
    it("should format number correctly", function() {
      const formattedNumber = formatNumber(1234.56, "0,0.00");
      expect(formattedNumber).toBe("1,234.56");
    });
  });
})();
/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
