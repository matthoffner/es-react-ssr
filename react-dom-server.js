import'./react.production.min-2585db34.js';import'./_commonjsHelpers-62a4d7f9.js';import'./checkPropTypes-b4910940.js';import {m}from'./index-5cbb7479.js';import stream from'stream';var k = Object.assign;

function r(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var u = "function" === typeof Symbol && Symbol.for,
    ba = u ? Symbol.for("react.portal") : 60106,
    v = u ? Symbol.for("react.fragment") : 60107,
    ca = u ? Symbol.for("react.strict_mode") : 60108,
    da = u ? Symbol.for("react.profiler") : 60114,
    x = u ? Symbol.for("react.provider") : 60109,
    ea = u ? Symbol.for("react.context") : 60110,
    fa = u ? Symbol.for("react.concurrent_mode") : 60111,
    ha = u ? Symbol.for("react.forward_ref") : 60112,
    B = u ? Symbol.for("react.suspense") : 60113,
    ia = u ? Symbol.for("react.suspense_list") : 60120,
    ja = u ? Symbol.for("react.memo") : 60115,
    ka = u ? Symbol.for("react.lazy") : 60116,
    la = u ? Symbol.for("react.fundamental") : 60117,
    ma = u ? Symbol.for("react.scope") : 60119,
    C = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
C.hasOwnProperty("ReactCurrentDispatcher") || (C.ReactCurrentDispatcher = {
  current: null
});
C.hasOwnProperty("ReactCurrentBatchConfig") || (C.ReactCurrentBatchConfig = {
  suspense: null
});

function na(a) {
  if (-1 === a._status) {
    a._status = 0;
    var b = a._ctor;
    b = b();
    a._result = b;
    b.then(function (c) {
      0 === a._status && (c = c.default, a._status = 1, a._result = c);
    }, function (c) {
      0 === a._status && (a._status = 2, a._result = c);
    });
  }
}

function D(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;

  switch (a) {
    case v:
      return "Fragment";

    case ba:
      return "Portal";

    case da:
      return "Profiler";

    case ca:
      return "StrictMode";

    case B:
      return "Suspense";

    case ia:
      return "SuspenseList";
  }

  if ("object" === typeof a) switch (a.$$typeof) {
    case ea:
      return "Context.Consumer";

    case x:
      return "Context.Provider";

    case ha:
      var b = a.render;
      b = b.displayName || b.name || "";
      return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

    case ja:
      return D(a.type);

    case ka:
      if (a = 1 === a._status ? a._result : null) return D(a);
  }
  return null;
}

var oa = {};

function E(a, b) {
  for (var c = a._threadCount | 0; c <= b; c++) a[c] = a._currentValue2, a._threadCount = c + 1;
}

function pa(a, b, c, d) {
  if (d && (d = a.contextType, "object" === typeof d && null !== d)) return E(d, c), d[c];

  if (a = a.contextTypes) {
    c = {};

    for (var f in a) c[f] = b[f];

    b = c;
  } else b = oa;

  return b;
}

for (var F = new Uint16Array(16), H = 0; 15 > H; H++) F[H] = H + 1;

F[15] = 0;
var qa = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ra = Object.prototype.hasOwnProperty,
    sa = {},
    ta = {};

function ua(a) {
  if (ra.call(ta, a)) return !0;
  if (ra.call(sa, a)) return !1;
  if (qa.test(a)) return ta[a] = !0;
  sa[a] = !0;
  return !1;
}

function va(a, b, c, d) {
  if (null !== c && 0 === c.type) return !1;

  switch (typeof b) {
    case "function":
    case "symbol":
      return !0;

    case "boolean":
      if (d) return !1;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;

    default:
      return !1;
  }
}

function wa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || va(a, b, c, d)) return !0;
  if (d) return !1;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;

    case 4:
      return !1 === b;

    case 5:
      return isNaN(b);

    case 6:
      return isNaN(b) || 1 > b;
  }
  return !1;
}

function J(a, b, c, d, f, h) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = f;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = h;
}

var K = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
  K[a] = new J(a, 0, !1, a, null, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
  var b = a[0];
  K[b] = new J(b, 1, !1, a[1], null, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
  K[a] = new J(a, 2, !1, a.toLowerCase(), null, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
  K[a] = new J(a, 2, !1, a, null, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
  K[a] = new J(a, 3, !1, a.toLowerCase(), null, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function (a) {
  K[a] = new J(a, 3, !0, a, null, !1);
});
["capture", "download"].forEach(function (a) {
  K[a] = new J(a, 4, !1, a, null, !1);
});
["cols", "rows", "size", "span"].forEach(function (a) {
  K[a] = new J(a, 6, !1, a, null, !1);
});
["rowSpan", "start"].forEach(function (a) {
  K[a] = new J(a, 5, !1, a.toLowerCase(), null, !1);
});
var L = /[\-:]([a-z])/g;

function M(a) {
  return a[1].toUpperCase();
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
  var b = a.replace(L, M);
  K[b] = new J(b, 1, !1, a, null, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
  var b = a.replace(L, M);
  K[b] = new J(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
  var b = a.replace(L, M);
  K[b] = new J(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1);
});
["tabIndex", "crossOrigin"].forEach(function (a) {
  K[a] = new J(a, 1, !1, a.toLowerCase(), null, !1);
});
K.xlinkHref = new J("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0);
["src", "href", "action", "formAction"].forEach(function (a) {
  K[a] = new J(a, 1, !1, a.toLowerCase(), null, !0);
});
var xa = /["'&<>]/;

function N(a) {
  if ("boolean" === typeof a || "number" === typeof a) return "" + a;
  a = "" + a;
  var b = xa.exec(a);

  if (b) {
    var c = "",
        d,
        f = 0;

    for (d = b.index; d < a.length; d++) {
      switch (a.charCodeAt(d)) {
        case 34:
          b = "&quot;";
          break;

        case 38:
          b = "&amp;";
          break;

        case 39:
          b = "&#x27;";
          break;

        case 60:
          b = "&lt;";
          break;

        case 62:
          b = "&gt;";
          break;

        default:
          continue;
      }

      f !== d && (c += a.substring(f, d));
      f = d + 1;
      c += b;
    }

    a = f !== d ? c + a.substring(f, d) : c;
  }

  return a;
}

function ya(a, b) {
  var c = K.hasOwnProperty(a) ? K[a] : null;
  var d;
  if (d = "style" !== a) d = null !== c ? 0 === c.type : !(2 < a.length) || "o" !== a[0] && "O" !== a[0] || "n" !== a[1] && "N" !== a[1] ? !1 : !0;
  if (d || wa(a, b, c, !1)) return "";

  if (null !== c) {
    a = c.attributeName;
    d = c.type;
    if (3 === d || 4 === d && !0 === b) return a + '=""';
    c.sanitizeURL && (b = "" + b);
    return a + "=" + ('"' + N(b) + '"');
  }

  return ua(a) ? a + "=" + ('"' + N(b) + '"') : "";
}

function za(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}

var Aa = "function" === typeof Object.is ? Object.is : za,
    O = null,
    P = null,
    Q = null,
    R = !1,
    S = !1,
    U = null,
    V = 0;

function W() {
  if (null === O) throw Error(r(321));
  return O;
}

function Ba() {
  if (0 < V) throw Error(r(312));
  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function Ca() {
  null === Q ? null === P ? (R = !1, P = Q = Ba()) : (R = !0, Q = P) : null === Q.next ? (R = !1, Q = Q.next = Ba()) : (R = !0, Q = Q.next);
  return Q;
}

function Da(a, b, c, d) {
  for (; S;) S = !1, V += 1, Q = null, c = a(b, d);

  P = O = null;
  V = 0;
  Q = U = null;
  return c;
}

function Ea(a, b) {
  return "function" === typeof b ? b(a) : b;
}

function Fa(a, b, c) {
  O = W();
  Q = Ca();

  if (R) {
    var d = Q.queue;
    b = d.dispatch;

    if (null !== U && (c = U.get(d), void 0 !== c)) {
      U.delete(d);
      d = Q.memoizedState;

      do d = a(d, c.action), c = c.next; while (null !== c);

      Q.memoizedState = d;
      return [d, b];
    }

    return [Q.memoizedState, b];
  }

  a = a === Ea ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
  Q.memoizedState = a;
  a = Q.queue = {
    last: null,
    dispatch: null
  };
  a = a.dispatch = Ga.bind(null, O, a);
  return [Q.memoizedState, a];
}

function Ga(a, b, c) {
  if (!(25 > V)) throw Error(r(301));
  if (a === O) if (S = !0, a = {
    action: c,
    next: null
  }, null === U && (U = new Map()), c = U.get(b), void 0 === c) U.set(b, a);else {
    for (b = c; null !== b.next;) b = b.next;

    b.next = a;
  }
}

function Ha() {}

var X = 0,
    Ia = {
  readContext: function (a) {
    var b = X;
    E(a, b);
    return a[b];
  },
  useContext: function (a) {
    W();
    var b = X;
    E(a, b);
    return a[b];
  },
  useMemo: function (a, b) {
    O = W();
    Q = Ca();
    b = void 0 === b ? null : b;

    if (null !== Q) {
      var c = Q.memoizedState;

      if (null !== c && null !== b) {
        a: {
          var d = c[1];
          if (null === d) d = !1;else {
            for (var f = 0; f < d.length && f < b.length; f++) if (!Aa(b[f], d[f])) {
              d = !1;
              break a;
            }

            d = !0;
          }
        }

        if (d) return c[0];
      }
    }

    a = a();
    Q.memoizedState = [a, b];
    return a;
  },
  useReducer: Fa,
  useRef: function (a) {
    O = W();
    Q = Ca();
    var b = Q.memoizedState;
    return null === b ? (a = {
      current: a
    }, Q.memoizedState = a) : b;
  },
  useState: function (a) {
    return Fa(Ea, a);
  },
  useLayoutEffect: function () {},
  useCallback: function (a) {
    return a;
  },
  useImperativeHandle: Ha,
  useEffect: Ha,
  useDebugValue: Ha,
  useResponder: function (a, b) {
    return {
      props: b,
      responder: a
    };
  },
  useDeferredValue: function (a) {
    W();
    return a;
  },
  useTransition: function () {
    W();
    return [function (a) {
      a();
    }, !1];
  }
},
    Ja = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg"
};

function Ka(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";

    case "math":
      return "http://www.w3.org/1998/Math/MathML";

    default:
      return "http://www.w3.org/1999/xhtml";
  }
}

var La = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
},
    Ma = k({
  menuitem: !0
}, La),
    Y = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
},
    Na = ["Webkit", "ms", "Moz", "O"];
Object.keys(Y).forEach(function (a) {
  Na.forEach(function (b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    Y[b] = Y[a];
  });
});
var Oa = /([A-Z])/g,
    Pa = /^ms-/,
    Z = m.Children.toArray,
    Qa = C.ReactCurrentDispatcher,
    Ra = {
  listing: !0,
  pre: !0,
  textarea: !0
},
    Sa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    Ta = {},
    Ua = {};

function Va(a) {
  if (void 0 === a || null === a) return a;
  var b = "";
  m.Children.forEach(a, function (a) {
    null != a && (b += a);
  });
  return b;
}

var Wa = Object.prototype.hasOwnProperty,
    Xa = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function Ya(a, b) {
  if (void 0 === a) throw Error(r(152, D(b) || "Component"));
}

function Za(a, b, c) {
  function d(d, h) {
    var e = h.prototype && h.prototype.isReactComponent,
        f = pa(h, b, c, e),
        p = [],
        g = !1,
        l = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {
        if (null === p) return null;
      },
      enqueueReplaceState: function (a, c) {
        g = !0;
        p = [c];
      },
      enqueueSetState: function (a, c) {
        if (null === p) return null;
        p.push(c);
      }
    };

    if (e) {
      if (e = new h(d.props, f, l), "function" === typeof h.getDerivedStateFromProps) {
        var w = h.getDerivedStateFromProps.call(null, d.props, e.state);
        null != w && (e.state = k({}, e.state, w));
      }
    } else if (O = {}, e = h(d.props, f, l), e = Da(h, d.props, e, f), null == e || null == e.render) {
      a = e;
      Ya(a, h);
      return;
    }

    e.props = d.props;
    e.context = f;
    e.updater = l;
    l = e.state;
    void 0 === l && (e.state = l = null);
    if ("function" === typeof e.UNSAFE_componentWillMount || "function" === typeof e.componentWillMount) if ("function" === typeof e.componentWillMount && "function" !== typeof h.getDerivedStateFromProps && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && "function" !== typeof h.getDerivedStateFromProps && e.UNSAFE_componentWillMount(), p.length) {
      l = p;
      var t = g;
      p = null;
      g = !1;
      if (t && 1 === l.length) e.state = l[0];else {
        w = t ? l[0] : e.state;
        var y = !0;

        for (t = t ? 1 : 0; t < l.length; t++) {
          var q = l[t];
          q = "function" === typeof q ? q.call(e, w, d.props, f) : q;
          null != q && (y ? (y = !1, w = k({}, w, q)) : k(w, q));
        }

        e.state = w;
      }
    } else p = null;
    a = e.render();
    Ya(a, h);

    if ("function" === typeof e.getChildContext && (d = h.childContextTypes, "object" === typeof d)) {
      var A = e.getChildContext();

      for (var T in A) if (!(T in d)) throw Error(r(108, D(h) || "Unknown", T));
    }

    A && (b = k({}, b, A));
  }

  for (; m.isValidElement(a);) {
    var f = a,
        h = f.type;
    if ("function" !== typeof h) break;
    d(f, h);
  }

  return {
    child: a,
    context: b
  };
}

var $a = function () {
  function a(a, b) {
    m.isValidElement(a) ? a.type !== v ? a = [a] : (a = a.props.children, a = m.isValidElement(a) ? [a] : Z(a)) : a = Z(a);
    a = {
      type: null,
      domNamespace: Ja.html,
      children: a,
      childIndex: 0,
      context: oa,
      footer: ""
    };
    var c = F[0];

    if (0 === c) {
      var d = F;
      c = d.length;
      var p = 2 * c;
      if (!(65536 >= p)) throw Error(r(304));
      var g = new Uint16Array(p);
      g.set(d);
      F = g;
      F[0] = c + 1;

      for (d = c; d < p - 1; d++) F[d] = d + 1;

      F[p - 1] = 0;
    } else F[0] = F[c];

    this.threadID = c;
    this.stack = [a];
    this.exhausted = !1;
    this.currentSelectValue = null;
    this.previousWasTextNode = !1;
    this.makeStaticMarkup = b;
    this.suspenseDepth = 0;
    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = [];
  }

  var b = a.prototype;

  b.destroy = function () {
    if (!this.exhausted) {
      this.exhausted = !0;
      this.clearProviders();
      var a = this.threadID;
      F[a] = F[0];
      F[0] = a;
    }
  };

  b.pushProvider = function (a) {
    var b = ++this.contextIndex,
        c = a.type._context,
        h = this.threadID;
    E(c, h);
    var p = c[h];
    this.contextStack[b] = c;
    this.contextValueStack[b] = p;
    c[h] = a.props.value;
  };

  b.popProvider = function () {
    var a = this.contextIndex,
        b = this.contextStack[a],
        f = this.contextValueStack[a];
    this.contextStack[a] = null;
    this.contextValueStack[a] = null;
    this.contextIndex--;
    b[this.threadID] = f;
  };

  b.clearProviders = function () {
    for (var a = this.contextIndex; 0 <= a; a--) this.contextStack[a][this.threadID] = this.contextValueStack[a];
  };

  b.read = function (a) {
    if (this.exhausted) return null;
    var b = X;
    X = this.threadID;
    var c = Qa.current;
    Qa.current = Ia;

    try {
      for (var h = [""], p = !1; h[0].length < a;) {
        if (0 === this.stack.length) {
          this.exhausted = !0;
          var g = this.threadID;
          F[g] = F[0];
          F[0] = g;
          break;
        }

        var e = this.stack[this.stack.length - 1];

        if (p || e.childIndex >= e.children.length) {
          var I = e.footer;
          "" !== I && (this.previousWasTextNode = !1);
          this.stack.pop();
          if ("select" === e.type) this.currentSelectValue = null;else if (null != e.type && null != e.type.type && e.type.type.$$typeof === x) this.popProvider(e.type);else if (e.type === B) {
            this.suspenseDepth--;
            var G = h.pop();

            if (p) {
              p = !1;
              var n = e.fallbackFrame;
              if (!n) throw Error(r(303));
              this.stack.push(n);
              h[this.suspenseDepth] += "\x3c!--$!--\x3e";
              continue;
            } else h[this.suspenseDepth] += G;
          }
          h[this.suspenseDepth] += I;
        } else {
          var l = e.children[e.childIndex++],
              w = "";

          try {
            w += this.render(l, e.context, e.domNamespace);
          } catch (t) {
            if (null != t && "function" === typeof t.then) throw Error(r(294));
            throw t;
          } finally {}

          h.length <= this.suspenseDepth && h.push("");
          h[this.suspenseDepth] += w;
        }
      }

      return h[0];
    } finally {
      Qa.current = c, X = b;
    }
  };

  b.render = function (a, b, f) {
    if ("string" === typeof a || "number" === typeof a) {
      f = "" + a;
      if ("" === f) return "";
      if (this.makeStaticMarkup) return N(f);
      if (this.previousWasTextNode) return "\x3c!-- --\x3e" + N(f);
      this.previousWasTextNode = !0;
      return N(f);
    }

    b = Za(a, b, this.threadID);
    a = b.child;
    b = b.context;
    if (null === a || !1 === a) return "";

    if (!m.isValidElement(a)) {
      if (null != a && null != a.$$typeof) {
        f = a.$$typeof;
        if (f === ba) throw Error(r(257));
        throw Error(r(258, f.toString()));
      }

      a = Z(a);
      this.stack.push({
        type: null,
        domNamespace: f,
        children: a,
        childIndex: 0,
        context: b,
        footer: ""
      });
      return "";
    }

    var c = a.type;
    if ("string" === typeof c) return this.renderDOM(a, b, f);

    switch (c) {
      case ca:
      case fa:
      case da:
      case ia:
      case v:
        return a = Z(a.props.children), this.stack.push({
          type: null,
          domNamespace: f,
          children: a,
          childIndex: 0,
          context: b,
          footer: ""
        }), "";

      case B:
        throw Error(r(294));
    }

    if ("object" === typeof c && null !== c) switch (c.$$typeof) {
      case ha:
        O = {};
        var d = c.render(a.props, a.ref);
        d = Da(c.render, a.props, d, a.ref);
        d = Z(d);
        this.stack.push({
          type: null,
          domNamespace: f,
          children: d,
          childIndex: 0,
          context: b,
          footer: ""
        });
        return "";

      case ja:
        return a = [m.createElement(c.type, k({
          ref: a.ref
        }, a.props))], this.stack.push({
          type: null,
          domNamespace: f,
          children: a,
          childIndex: 0,
          context: b,
          footer: ""
        }), "";

      case x:
        return c = Z(a.props.children), f = {
          type: a,
          domNamespace: f,
          children: c,
          childIndex: 0,
          context: b,
          footer: ""
        }, this.pushProvider(a), this.stack.push(f), "";

      case ea:
        c = a.type;
        d = a.props;
        var g = this.threadID;
        E(c, g);
        c = Z(d.children(c[g]));
        this.stack.push({
          type: a,
          domNamespace: f,
          children: c,
          childIndex: 0,
          context: b,
          footer: ""
        });
        return "";

      case la:
        throw Error(r(338));

      case ka:
        switch (c = a.type, na(c), c._status) {
          case 1:
            return a = [m.createElement(c._result, k({
              ref: a.ref
            }, a.props))], this.stack.push({
              type: null,
              domNamespace: f,
              children: a,
              childIndex: 0,
              context: b,
              footer: ""
            }), "";

          case 2:
            throw c._result;

          default:
            throw Error(r(295));
        }

      case ma:
        throw Error(r(343));
    }
    throw Error(r(130, null == c ? c : typeof c, ""));
  };

  b.renderDOM = function (a, b, f) {
    var c = a.type.toLowerCase();

    if (!Ta.hasOwnProperty(c)) {
      if (!Sa.test(c)) throw Error(r(65, c));
      Ta[c] = !0;
    }

    var d = a.props;
    if ("input" === c) d = k({
      type: void 0
    }, d, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: null != d.value ? d.value : d.defaultValue,
      checked: null != d.checked ? d.checked : d.defaultChecked
    });else if ("textarea" === c) {
      var g = d.value;

      if (null == g) {
        g = d.defaultValue;
        var e = d.children;

        if (null != e) {
          if (null != g) throw Error(r(92));

          if (Array.isArray(e)) {
            if (!(1 >= e.length)) throw Error(r(93));
            e = e[0];
          }

          g = "" + e;
        }

        null == g && (g = "");
      }

      d = k({}, d, {
        value: void 0,
        children: "" + g
      });
    } else if ("select" === c) this.currentSelectValue = null != d.value ? d.value : d.defaultValue, d = k({}, d, {
      value: void 0
    });else if ("option" === c) {
      e = this.currentSelectValue;
      var I = Va(d.children);

      if (null != e) {
        var G = null != d.value ? d.value + "" : I;
        g = !1;
        if (Array.isArray(e)) for (var n = 0; n < e.length; n++) {
          if ("" + e[n] === G) {
            g = !0;
            break;
          }
        } else g = "" + e === G;
        d = k({
          selected: void 0,
          children: void 0
        }, d, {
          selected: g,
          children: I
        });
      }
    }

    if (g = d) {
      if (Ma[c] && (null != g.children || null != g.dangerouslySetInnerHTML)) throw Error(r(137, c, ""));

      if (null != g.dangerouslySetInnerHTML) {
        if (null != g.children) throw Error(r(60));
        if (!("object" === typeof g.dangerouslySetInnerHTML && "__html" in g.dangerouslySetInnerHTML)) throw Error(r(61));
      }

      if (null != g.style && "object" !== typeof g.style) throw Error(r(62, ""));
    }

    g = d;
    e = this.makeStaticMarkup;
    I = 1 === this.stack.length;
    G = "<" + a.type;

    for (z in g) if (Wa.call(g, z)) {
      var l = g[z];

      if (null != l) {
        if ("style" === z) {
          n = void 0;
          var w = "",
              t = "";

          for (n in l) if (l.hasOwnProperty(n)) {
            var y = 0 === n.indexOf("--"),
                q = l[n];

            if (null != q) {
              if (y) var A = n;else if (A = n, Ua.hasOwnProperty(A)) A = Ua[A];else {
                var T = A.replace(Oa, "-$1").toLowerCase().replace(Pa, "-ms-");
                A = Ua[A] = T;
              }
              w += t + A + ":";
              t = n;
              y = null == q || "boolean" === typeof q || "" === q ? "" : y || "number" !== typeof q || 0 === q || Y.hasOwnProperty(t) && Y[t] ? ("" + q).trim() : q + "px";
              w += y;
              t = ";";
            }
          }

          l = w || null;
        }

        n = null;

        b: if (y = c, q = g, -1 === y.indexOf("-")) y = "string" === typeof q.is;else switch (y) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            y = !1;
            break b;

          default:
            y = !0;
        }

        y ? Xa.hasOwnProperty(z) || (n = z, n = ua(n) && null != l ? n + "=" + ('"' + N(l) + '"') : "") : n = ya(z, l);
        n && (G += " " + n);
      }
    }

    e || I && (G += ' data-reactroot=""');
    var z = G;
    g = "";
    La.hasOwnProperty(c) ? z += "/>" : (z += ">", g = "</" + a.type + ">");

    a: {
      e = d.dangerouslySetInnerHTML;

      if (null != e) {
        if (null != e.__html) {
          e = e.__html;
          break a;
        }
      } else if (e = d.children, "string" === typeof e || "number" === typeof e) {
        e = N(e);
        break a;
      }

      e = null;
    }

    null != e ? (d = [], Ra[c] && "\n" === e.charAt(0) && (z += "\n"), z += e) : d = Z(d.children);
    a = a.type;
    f = null == f || "http://www.w3.org/1999/xhtml" === f ? Ka(a) : "http://www.w3.org/2000/svg" === f && "foreignObject" === a ? "http://www.w3.org/1999/xhtml" : f;
    this.stack.push({
      domNamespace: f,
      type: c,
      children: d,
      childIndex: 0,
      context: b,
      footer: g
    });
    this.previousWasTextNode = !1;
    return z;
  };

  return a;
}();

function ab(a, b) {
  a.prototype = Object.create(b.prototype);
  a.prototype.constructor = a;
  a.__proto__ = b;
}

var bb = function (a) {
  function b(b, c) {
    var d = a.call(this, {}) || this;
    d.partialRenderer = new $a(b, c);
    return d;
  }

  ab(b, a);
  var c = b.prototype;

  c._destroy = function (a, b) {
    this.partialRenderer.destroy();
    b(a);
  };

  c._read = function (a) {
    try {
      this.push(this.partialRenderer.read(a));
    } catch (f) {
      this.destroy(f);
    }
  };

  return b;
}(stream.Readable),
    cb = {
  renderToString: function (a) {
    a = new $a(a, !1);

    try {
      return a.read(Infinity);
    } finally {
      a.destroy();
    }
  },
  renderToStaticMarkup: function (a) {
    a = new $a(a, !0);

    try {
      return a.read(Infinity);
    } finally {
      a.destroy();
    }
  },
  renderToNodeStream: function (a) {
    return new bb(a, !1);
  },
  renderToStaticNodeStream: function (a) {
    return new bb(a, !0);
  },
  version: "16.12.0"
},
    db = {
  default: cb
},
    eb = db && cb || db;

var reactDomServer_node_production_min = eb.default || eb;const {
  renderToString,
  renderToStaticMarkup,
  renderToNodeStream,
  renderToStaticNodeStream,
  version
} = reactDomServer_node_production_min;export default reactDomServer_node_production_min;export{renderToNodeStream,renderToStaticMarkup,renderToStaticNodeStream,renderToString,version};