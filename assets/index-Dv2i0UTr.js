(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });

  function n(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }

  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = n(i);
    fetch(i.href, r);
  }
})();

function Xn(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Q = {},
  _t = [],
  Be = () => {},
  li = () => !1,
  gn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Qn = (e) => e.startsWith("onUpdate:"),
  le = Object.assign,
  es = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  _r = Object.prototype.hasOwnProperty,
  W = (e, t) => _r.call(e, t),
  F = Array.isArray,
  xt = (e) => Yt(e) === "[object Map]",
  ci = (e) => Yt(e) === "[object Set]",
  Cs = (e) => Yt(e) === "[object Date]",
  j = (e) => typeof e == "function",
  ie = (e) => typeof e == "string",
  Ve = (e) => typeof e == "symbol",
  z = (e) => e !== null && typeof e == "object",
  ai = (e) => (z(e) || j(e)) && j(e.then) && j(e.catch),
  fi = Object.prototype.toString,
  Yt = (e) => fi.call(e),
  xr = (e) => Yt(e).slice(8, -1),
  ui = (e) => Yt(e) === "[object Object]",
  ts = (e) =>
    ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Ft = Xn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  mn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Sr = /-\w/g,
  Ee = mn((e) => e.replace(Sr, (t) => t.slice(1).toUpperCase())),
  Cr = /\B([A-Z])/g,
  mt = mn((e) => e.replace(Cr, "-$1").toLowerCase()),
  di = mn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Tn = mn((e) => (e ? `on${di(e)}` : "")),
  He = (e, t) => !Object.is(e, t),
  En = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  hi = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  wr = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Tr = (e) => {
    const t = ie(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let ws;
const vn = () =>
  ws ||
  (ws =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});

function dt(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        i = ie(s) ? Or(s) : dt(s);
      if (i) for (const r in i) t[r] = i[r];
    }
    return t;
  } else if (ie(e) || z(e)) return e;
}
const Er = /;(?![^(]*\))/g,
  Ar = /:([^]+)/,
  Pr = /\/\*[^]*?\*\//g;

function Or(e) {
  const t = {};
  return (
    e
      .replace(Pr, "")
      .split(Er)
      .forEach((n) => {
        if (n) {
          const s = n.split(Ar);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}

function ht(e) {
  let t = "";
  if (ie(e)) t = e;
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const s = ht(e[n]);
      s && (t += s + " ");
    }
  else if (z(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Mr =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Lr = Xn(Mr);

function pi(e) {
  return !!e || e === "";
}

function Ir(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++) n = ns(e[s], t[s]);
  return n;
}

function ns(e, t) {
  if (e === t) return !0;
  let n = Cs(e),
    s = Cs(t);
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
  if (((n = Ve(e)), (s = Ve(t)), n || s)) return e === t;
  if (((n = F(e)), (s = F(t)), n || s)) return n && s ? Ir(e, t) : !1;
  if (((n = z(e)), (s = z(t)), n || s)) {
    if (!n || !s) return !1;
    const i = Object.keys(e).length,
      r = Object.keys(t).length;
    if (i !== r) return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o),
        a = t.hasOwnProperty(o);
      if ((l && !a) || (!l && a) || !ns(e[o], t[o])) return !1;
    }
  }
  return String(e) === String(t);
}
const gi = (e) => !!(e && e.__v_isRef === !0),
  se = (e) =>
    ie(e)
      ? e
      : e == null
      ? ""
      : F(e) || (z(e) && (e.toString === fi || !j(e.toString)))
      ? gi(e)
        ? se(e.value)
        : JSON.stringify(e, mi, 2)
      : String(e),
  mi = (e, t) =>
    gi(t)
      ? mi(e, t.value)
      : xt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, i], r) => ((n[An(s, r) + " =>"] = i), n),
            {}
          ),
        }
      : ci(t)
      ? {
          [`Set(${t.size})`]: [...t.values()].map((n) => An(n)),
        }
      : Ve(t)
      ? An(t)
      : z(t) && !F(t) && !ui(t)
      ? String(t)
      : t,
  An = (e, t = "") => {
    var n;
    return Ve(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
let ye;
class Fr {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.__v_skip = !0),
      (this.parent = ye),
      !t && ye && (this.index = (ye.scopes || (ye.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ye;
      try {
        return (ye = this), t();
      } finally {
        ye = n;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = ye), (ye = this));
  }
  off() {
    this._on > 0 &&
      --this._on === 0 &&
      ((ye = this.prevScope), (this.prevScope = void 0));
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      this.parent = void 0;
    }
  }
}

function Rr() {
  return ye;
}
let X;
const Pn = new WeakSet();
class vi {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      ye && ye.active && ye.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Pn.has(this) && (Pn.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || yi(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), Ts(this), _i(this);
    const t = X,
      n = Ae;
    (X = this), (Ae = !0);
    try {
      return this.fn();
    } finally {
      xi(this), (X = t), (Ae = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) rs(t);
      (this.deps = this.depsTail = void 0),
        Ts(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? Pn.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    Hn(this) && this.run();
  }
  get dirty() {
    return Hn(this);
  }
}
let bi = 0,
  Rt,
  Nt;

function yi(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = Nt), (Nt = e);
    return;
  }
  (e.next = Rt), (Rt = e);
}

function ss() {
  bi++;
}

function is() {
  if (--bi > 0) return;
  if (Nt) {
    let t = Nt;
    for (Nt = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Rt; ) {
    let t = Rt;
    for (Rt = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}

function _i(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}

function xi(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), rs(s), Nr(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = i);
  }
  (e.deps = t), (e.depsTail = n);
}

function Hn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Si(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}

function Si(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === kt) ||
    ((e.globalVersion = kt),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Hn(e)))
  )
    return;
  e.flags |= 2;
  const t = e.dep,
    n = X,
    s = Ae;
  (X = e), (Ae = !0);
  try {
    _i(e);
    const i = e.fn(e._value);
    (t.version === 0 || He(i, e._value)) &&
      ((e.flags |= 128), (e._value = i), t.version++);
  } catch (i) {
    throw (t.version++, i);
  } finally {
    (X = n), (Ae = s), xi(e), (e.flags &= -3);
  }
}

function rs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (
    (s && ((s.nextSub = i), (e.prevSub = void 0)),
    i && ((i.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep) rs(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}

function Nr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Ae = !0;
const Ci = [];

function Ge() {
  Ci.push(Ae), (Ae = !1);
}

function Je() {
  const e = Ci.pop();
  Ae = e === void 0 ? !0 : e;
}

function Ts(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = X;
    X = void 0;
    try {
      t();
    } finally {
      X = n;
    }
  }
}
let kt = 0;
class Dr {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class os {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0);
  }
  track(t) {
    if (!X || !Ae || X === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== X)
      (n = this.activeLink = new Dr(X, this)),
        X.deps
          ? ((n.prevDep = X.depsTail),
            (X.depsTail.nextDep = n),
            (X.depsTail = n))
          : (X.deps = X.depsTail = n),
        wi(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      (s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = X.depsTail),
        (n.nextDep = void 0),
        (X.depsTail.nextDep = n),
        (X.depsTail = n),
        X.deps === n && (X.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, kt++, this.notify(t);
  }
  notify(t) {
    ss();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      is();
    }
  }
}

function wi(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) wi(s);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const kn = new WeakMap(),
  pt = Symbol(""),
  Bn = Symbol(""),
  Bt = Symbol("");

function ae(e, t, n) {
  if (Ae && X) {
    let s = kn.get(e);
    s || kn.set(e, (s = new Map()));
    let i = s.get(n);
    i || (s.set(n, (i = new os())), (i.map = s), (i.key = n)), i.track();
  }
}

function qe(e, t, n, s, i, r) {
  const o = kn.get(e);
  if (!o) {
    kt++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if ((ss(), t === "clear")) o.forEach(l);
  else {
    const a = F(e),
      d = a && ts(n);
    if (a && n === "length") {
      const f = Number(s);
      o.forEach((h, _) => {
        (_ === "length" || _ === Bt || (!Ve(_) && _ >= f)) && l(h);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && l(o.get(n)), d && l(o.get(Bt)), t)
      ) {
        case "add":
          a ? d && l(o.get("length")) : (l(o.get(pt)), xt(e) && l(o.get(Bn)));
          break;
        case "delete":
          a || (l(o.get(pt)), xt(e) && l(o.get(Bn)));
          break;
        case "set":
          xt(e) && l(o.get(pt));
          break;
      }
  }
  is();
}

function vt(e) {
  const t = U(e);
  return t === e ? t : (ae(t, "iterate", Bt), we(e) ? t : t.map(Pe));
}

function bn(e) {
  return ae((e = U(e)), "iterate", Bt), e;
}

function je(e, t) {
  return Ze(e) ? wt(gt(e) ? Pe(t) : t) : Pe(t);
}
const jr = {
  __proto__: null,
  [Symbol.iterator]() {
    return On(this, Symbol.iterator, (e) => je(this, e));
  },
  concat(...e) {
    return vt(this).concat(...e.map((t) => (F(t) ? vt(t) : t)));
  },
  entries() {
    return On(this, "entries", (e) => ((e[1] = je(this, e[1])), e));
  },
  every(e, t) {
    return Ke(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ke(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => je(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ke(this, "find", e, t, (n) => je(this, n), arguments);
  },
  findIndex(e, t) {
    return Ke(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ke(this, "findLast", e, t, (n) => je(this, n), arguments);
  },
  findLastIndex(e, t) {
    return Ke(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Ke(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Mn(this, "includes", e);
  },
  indexOf(...e) {
    return Mn(this, "indexOf", e);
  },
  join(e) {
    return vt(this).join(e);
  },
  lastIndexOf(...e) {
    return Mn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ke(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Pt(this, "pop");
  },
  push(...e) {
    return Pt(this, "push", e);
  },
  reduce(e, ...t) {
    return Es(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Es(this, "reduceRight", e, t);
  },
  shift() {
    return Pt(this, "shift");
  },
  some(e, t) {
    return Ke(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Pt(this, "splice", e);
  },
  toReversed() {
    return vt(this).toReversed();
  },
  toSorted(e) {
    return vt(this).toSorted(e);
  },
  toSpliced(...e) {
    return vt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Pt(this, "unshift", e);
  },
  values() {
    return On(this, "values", (e) => je(this, e));
  },
};

function On(e, t, n) {
  const s = bn(e),
    i = s[t]();
  return (
    s !== e &&
      !we(e) &&
      ((i._next = i.next),
      (i.next = () => {
        const r = i._next();
        return r.done || (r.value = n(r.value)), r;
      })),
    i
  );
}
const $r = Array.prototype;

function Ke(e, t, n, s, i, r) {
  const o = bn(e),
    l = o !== e && !we(e),
    a = o[t];
  if (a !== $r[t]) {
    const h = a.apply(e, r);
    return l ? Pe(h) : h;
  }
  let d = n;
  o !== e &&
    (l
      ? (d = function (h, _) {
          return n.call(this, je(e, h), _, e);
        })
      : n.length > 2 &&
        (d = function (h, _) {
          return n.call(this, h, _, e);
        }));
  const f = a.call(o, d, s);
  return l && i ? i(f) : f;
}

function Es(e, t, n, s) {
  const i = bn(e),
    r = i !== e && !we(e);
  let o = n,
    l = !1;
  i !== e &&
    (r
      ? ((l = s.length === 0),
        (o = function (d, f, h) {
          return (
            l && ((l = !1), (d = je(e, d))), n.call(this, d, je(e, f), h, e)
          );
        }))
      : n.length > 3 &&
        (o = function (d, f, h) {
          return n.call(this, d, f, h, e);
        }));
  const a = i[t](o, ...s);
  return l ? je(e, a) : a;
}

function Mn(e, t, n) {
  const s = U(e);
  ae(s, "iterate", Bt);
  const i = s[t](...n);
  return (i === -1 || i === !1) && fs(n[0])
    ? ((n[0] = U(n[0])), s[t](...n))
    : i;
}

function Pt(e, t, n = []) {
  Ge(), ss();
  const s = U(e)[t].apply(e, n);
  return is(), Je(), s;
}
const Hr = Xn("__proto__,__v_isRef,__isVue"),
  Ti = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Ve)
  );

function kr(e) {
  Ve(e) || (e = String(e));
  const t = U(this);
  return ae(t, "has", e), t.hasOwnProperty(e);
}
class Ei {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly,
      r = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw")
      return s === (i ? (r ? Jr : Mi) : r ? Oi : Pi).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const o = F(t);
    if (!i) {
      let a;
      if (o && (a = jr[n])) return a;
      if (n === "hasOwnProperty") return kr;
    }
    const l = Reflect.get(t, n, ue(t) ? t : s);
    if ((Ve(n) ? Ti.has(n) : Hr(n)) || (i || ae(t, "get", n), r)) return l;
    if (ue(l)) {
      const a = o && ts(n) ? l : l.value;
      return i && z(a) ? Un(a) : a;
    }
    return z(l) ? (i ? Un(l) : cs(l)) : l;
  }
}
class Ai extends Ei {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const o = F(t) && ts(n);
    if (!this._isShallow) {
      const d = Ze(r);
      if ((!we(s) && !Ze(s) && ((r = U(r)), (s = U(s))), !o && ue(r) && !ue(s)))
        return d || (r.value = s), !0;
    }
    const l = o ? Number(n) < t.length : W(t, n),
      a = Reflect.set(t, n, s, ue(t) ? t : i);
    return (
      t === U(i) && (l ? He(s, r) && qe(t, "set", n, s) : qe(t, "add", n, s)), a
    );
  }
  deleteProperty(t, n) {
    const s = W(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && qe(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ve(n) || !Ti.has(n)) && ae(t, "has", n), s;
  }
  ownKeys(t) {
    return ae(t, "iterate", F(t) ? "length" : pt), Reflect.ownKeys(t);
  }
}
class Br extends Ei {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Vr = new Ai(),
  Ur = new Br(),
  Kr = new Ai(!0);
const Vn = (e) => e,
  Xt = (e) => Reflect.getPrototypeOf(e);

function Wr(e, t, n) {
  return function (...s) {
    const i = this.__v_raw,
      r = U(i),
      o = xt(r),
      l = e === "entries" || (e === Symbol.iterator && o),
      a = e === "keys" && o,
      d = i[e](...s),
      f = n ? Vn : t ? wt : Pe;
    return (
      !t && ae(r, "iterate", a ? Bn : pt),
      le(Object.create(d), {
        next() {
          const { value: h, done: _ } = d.next();
          return _
            ? {
                value: h,
                done: _,
              }
            : {
                value: l ? [f(h[0]), f(h[1])] : f(h),
                done: _,
              };
        },
      })
    );
  };
}

function Qt(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}

function zr(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw,
        o = U(r),
        l = U(i);
      e || (He(i, l) && ae(o, "get", i), ae(o, "get", l));
      const { has: a } = Xt(o),
        d = t ? Vn : e ? wt : Pe;
      if (a.call(o, i)) return d(r.get(i));
      if (a.call(o, l)) return d(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ae(U(i), "iterate", pt), i.size;
    },
    has(i) {
      const r = this.__v_raw,
        o = U(r),
        l = U(i);
      return (
        e || (He(i, l) && ae(o, "has", i), ae(o, "has", l)),
        i === l ? r.has(i) : r.has(i) || r.has(l)
      );
    },
    forEach(i, r) {
      const o = this,
        l = o.__v_raw,
        a = U(l),
        d = t ? Vn : e ? wt : Pe;
      return (
        !e && ae(a, "iterate", pt),
        l.forEach((f, h) => i.call(r, d(f), d(h), o))
      );
    },
  };
  return (
    le(
      n,
      e
        ? {
            add: Qt("add"),
            set: Qt("set"),
            delete: Qt("delete"),
            clear: Qt("clear"),
          }
        : {
            add(i) {
              const r = U(this),
                o = Xt(r),
                l = U(i),
                a = !t && !we(i) && !Ze(i) ? l : i;
              return (
                o.has.call(r, a) ||
                  (He(i, a) && o.has.call(r, i)) ||
                  (He(l, a) && o.has.call(r, l)) ||
                  (r.add(a), qe(r, "add", a, a)),
                this
              );
            },
            set(i, r) {
              !t && !we(r) && !Ze(r) && (r = U(r));
              const o = U(this),
                { has: l, get: a } = Xt(o);
              let d = l.call(o, i);
              d || ((i = U(i)), (d = l.call(o, i)));
              const f = a.call(o, i);
              return (
                o.set(i, r),
                d ? He(r, f) && qe(o, "set", i, r) : qe(o, "add", i, r),
                this
              );
            },
            delete(i) {
              const r = U(this),
                { has: o, get: l } = Xt(r);
              let a = o.call(r, i);
              a || ((i = U(i)), (a = o.call(r, i))), l && l.call(r, i);
              const d = r.delete(i);
              return a && qe(r, "delete", i, void 0), d;
            },
            clear() {
              const i = U(this),
                r = i.size !== 0,
                o = i.clear();
              return r && qe(i, "clear", void 0, void 0), o;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      n[i] = Wr(i, e, t);
    }),
    n
  );
}

function ls(e, t) {
  const n = zr(e, t);
  return (s, i, r) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
      ? e
      : i === "__v_raw"
      ? s
      : Reflect.get(W(n, i) && i in s ? n : s, i, r);
}
const Yr = {
    get: ls(!1, !1),
  },
  qr = {
    get: ls(!1, !0),
  },
  Gr = {
    get: ls(!0, !1),
  };
const Pi = new WeakMap(),
  Oi = new WeakMap(),
  Mi = new WeakMap(),
  Jr = new WeakMap();

function Zr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}

function Xr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Zr(xr(e));
}

function cs(e) {
  return Ze(e) ? e : as(e, !1, Vr, Yr, Pi);
}

function Qr(e) {
  return as(e, !1, Kr, qr, Oi);
}

function Un(e) {
  return as(e, !0, Ur, Gr, Mi);
}

function as(e, t, n, s, i) {
  if (!z(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const r = Xr(e);
  if (r === 0) return e;
  const o = i.get(e);
  if (o) return o;
  const l = new Proxy(e, r === 2 ? s : n);
  return i.set(e, l), l;
}

function gt(e) {
  return Ze(e) ? gt(e.__v_raw) : !!(e && e.__v_isReactive);
}

function Ze(e) {
  return !!(e && e.__v_isReadonly);
}

function we(e) {
  return !!(e && e.__v_isShallow);
}

function fs(e) {
  return e ? !!e.__v_raw : !1;
}

function U(e) {
  const t = e && e.__v_raw;
  return t ? U(t) : e;
}

function eo(e) {
  return (
    !W(e, "__v_skip") && Object.isExtensible(e) && hi(e, "__v_skip", !0), e
  );
}
const Pe = (e) => (z(e) ? cs(e) : e),
  wt = (e) => (z(e) ? Un(e) : e);

function ue(e) {
  return e ? e.__v_isRef === !0 : !1;
}

function bt(e) {
  return to(e, !1);
}

function to(e, t) {
  return ue(e) ? e : new no(e, t);
}
class no {
  constructor(t, n) {
    (this.dep = new os()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : U(t)),
      (this._value = n ? t : Pe(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || we(t) || Ze(t);
    (t = s ? t : U(t)),
      He(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : Pe(t)),
        this.dep.trigger());
  }
}

function so(e) {
  return ue(e) ? e.value : e;
}
const io = {
  get: (e, t, n) => (t === "__v_raw" ? e : so(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const i = e[t];
    return ue(i) && !ue(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, s);
  },
};

function Li(e) {
  return gt(e) ? e : new Proxy(e, io);
}
class ro {
  constructor(t, n, s) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new os(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = kt - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && X !== this))
      return yi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Si(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}

function oo(e, t, n = !1) {
  let s, i;
  return j(e) ? (s = e) : ((s = e.get), (i = e.set)), new ro(s, i, n);
}
const en = {},
  ln = new WeakMap();
let ft;

function lo(e, t = !1, n = ft) {
  if (n) {
    let s = ln.get(n);
    s || ln.set(n, (s = [])), s.push(e);
  }
}

function co(e, t, n = Q) {
  const {
      immediate: s,
      deep: i,
      once: r,
      scheduler: o,
      augmentJob: l,
      call: a,
    } = n,
    d = (O) => (i ? O : we(O) || i === !1 || i === 0 ? nt(O, 1) : nt(O));
  let f,
    h,
    _,
    T,
    R = !1,
    L = !1;
  if (
    (ue(e)
      ? ((h = () => e.value), (R = we(e)))
      : gt(e)
      ? ((h = () => d(e)), (R = !0))
      : F(e)
      ? ((L = !0),
        (R = e.some((O) => gt(O) || we(O))),
        (h = () =>
          e.map((O) => {
            if (ue(O)) return O.value;
            if (gt(O)) return d(O);
            if (j(O)) return a ? a(O, 2) : O();
          })))
      : j(e)
      ? t
        ? (h = a ? () => a(e, 2) : e)
        : (h = () => {
            if (_) {
              Ge();
              try {
                _();
              } finally {
                Je();
              }
            }
            const O = ft;
            ft = f;
            try {
              return a ? a(e, 3, [T]) : e(T);
            } finally {
              ft = O;
            }
          })
      : (h = Be),
    t && i)
  ) {
    const O = h,
      Y = i === !0 ? 1 / 0 : i;
    h = () => nt(O(), Y);
  }
  const G = Rr(),
    H = () => {
      f.stop(), G && G.active && es(G.effects, f);
    };
  if (r && t) {
    const O = t;
    t = (...Y) => {
      O(...Y), H();
    };
  }
  let $ = L ? new Array(e.length).fill(en) : en;
  const B = (O) => {
    if (!(!(f.flags & 1) || (!f.dirty && !O)))
      if (t) {
        const Y = f.run();
        if (i || R || (L ? Y.some((V, C) => He(V, $[C])) : He(Y, $))) {
          _ && _();
          const V = ft;
          ft = f;
          try {
            const C = [Y, $ === en ? void 0 : L && $[0] === en ? [] : $, T];
            ($ = Y), a ? a(t, 3, C) : t(...C);
          } finally {
            ft = V;
          }
        }
      } else f.run();
  };
  return (
    l && l(B),
    (f = new vi(h)),
    (f.scheduler = o ? () => o(B, !1) : B),
    (T = (O) => lo(O, !1, f)),
    (_ = f.onStop =
      () => {
        const O = ln.get(f);
        if (O) {
          if (a) a(O, 4);
          else for (const Y of O) Y();
          ln.delete(f);
        }
      }),
    t ? (s ? B(!0) : ($ = f.run())) : o ? o(B.bind(null, !0), !0) : f.run(),
    (H.pause = f.pause.bind(f)),
    (H.resume = f.resume.bind(f)),
    (H.stop = H),
    H
  );
}

function nt(e, t = 1 / 0, n) {
  if (
    t <= 0 ||
    !z(e) ||
    e.__v_skip ||
    ((n = n || new Map()), (n.get(e) || 0) >= t)
  )
    return e;
  if ((n.set(e, t), t--, ue(e))) nt(e.value, t, n);
  else if (F(e)) for (let s = 0; s < e.length; s++) nt(e[s], t, n);
  else if (ci(e) || xt(e))
    e.forEach((s) => {
      nt(s, t, n);
    });
  else if (ui(e)) {
    for (const s in e) nt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && nt(e[s], t, n);
  }
  return e;
}

function qt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    yn(i, t, n);
  }
}

function Oe(e, t, n, s) {
  if (j(e)) {
    const i = qt(e, t, n, s);
    return (
      i &&
        ai(i) &&
        i.catch((r) => {
          yn(r, t, n);
        }),
      i
    );
  }
  if (F(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++) i.push(Oe(e[r], t, n, s));
    return i;
  }
}

function yn(e, t, n, s = !0) {
  const i = t ? t.vnode : null,
    { errorHandler: r, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || Q;
  if (t) {
    let l = t.parent;
    const a = t.proxy,
      d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let h = 0; h < f.length; h++) if (f[h](e, a, d) === !1) return;
      }
      l = l.parent;
    }
    if (r) {
      Ge(), qt(r, null, 10, [e, a, d]), Je();
      return;
    }
  }
  ao(e, n, i, s, o);
}

function ao(e, t, n, s = !0, i = !1) {
  if (i) throw e;
  console.error(e);
}
const he = [];
let Ne = -1;
const St = [];
let tt = null,
  yt = 0;
const Ii = Promise.resolve();
let cn = null;

function fo(e) {
  const t = cn || Ii;
  return e ? t.then(this ? e.bind(this) : e) : t;
}

function uo(e) {
  let t = Ne + 1,
    n = he.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      i = he[s],
      r = Vt(i);
    r < e || (r === e && i.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}

function us(e) {
  if (!(e.flags & 1)) {
    const t = Vt(e),
      n = he[he.length - 1];
    !n || (!(e.flags & 2) && t >= Vt(n)) ? he.push(e) : he.splice(uo(t), 0, e),
      (e.flags |= 1),
      Fi();
  }
}

function Fi() {
  cn || (cn = Ii.then(Ni));
}

function ho(e) {
  F(e)
    ? St.push(...e)
    : tt && e.id === -1
    ? tt.splice(yt + 1, 0, e)
    : e.flags & 1 || (St.push(e), (e.flags |= 1)),
    Fi();
}

function As(e, t, n = Ne + 1) {
  for (; n < he.length; n++) {
    const s = he[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      he.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2);
    }
  }
}

function Ri(e) {
  if (St.length) {
    const t = [...new Set(St)].sort((n, s) => Vt(n) - Vt(s));
    if (((St.length = 0), tt)) {
      tt.push(...t);
      return;
    }
    for (tt = t, yt = 0; yt < tt.length; yt++) {
      const n = tt[yt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (tt = null), (yt = 0);
  }
}
const Vt = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);

function Ni(e) {
  try {
    for (Ne = 0; Ne < he.length; Ne++) {
      const t = he[Ne];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        qt(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ne < he.length; Ne++) {
      const t = he[Ne];
      t && (t.flags &= -2);
    }
    (Ne = -1),
      (he.length = 0),
      Ri(),
      (cn = null),
      (he.length || St.length) && Ni();
  }
}
let ke = null,
  Di = null;

function an(e) {
  const t = ke;
  return (ke = e), (Di = (e && e.type.__scopeId) || null), t;
}

function Kn(e, t = ke, n) {
  if (!t || e._n) return e;
  const s = (...i) => {
    s._d && dn(-1);
    const r = an(t);
    let o;
    try {
      o = e(...i);
    } finally {
      an(r), s._d && dn(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}

function ot(e, t, n, s) {
  const i = e.dirs,
    r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[s];
    a && (Ge(), Oe(a, n, 8, [e.el, l, e, t]), Je());
  }
}

function po(e, t) {
  if (ge) {
    let n = ge.provides;
    const s = ge.parent && ge.parent.provides;
    s === n && (n = ge.provides = Object.create(s)), (n[e] = t);
  }
}

function nn(e, t, n = !1) {
  const s = hr();
  if (s || Ct) {
    let i = Ct
      ? Ct._context.provides
      : s
      ? s.parent == null || s.ce
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : void 0;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && j(t) ? t.call(s && s.proxy) : t;
  }
}
const go = Symbol.for("v-scx"),
  mo = () => nn(go);

function Ln(e, t, n) {
  return ji(e, t, n);
}

function ji(e, t, n = Q) {
  const { immediate: s, deep: i, flush: r, once: o } = n,
    l = le({}, n),
    a = (t && s) || (!t && r !== "post");
  let d;
  if (Wt) {
    if (r === "sync") {
      const T = mo();
      d = T.__watcherHandles || (T.__watcherHandles = []);
    } else if (!a) {
      const T = () => {};
      return (T.stop = Be), (T.resume = Be), (T.pause = Be), T;
    }
  }
  const f = ge;
  l.call = (T, R, L) => Oe(T, f, R, L);
  let h = !1;
  r === "post"
    ? (l.scheduler = (T) => {
        be(T, f && f.suspense);
      })
    : r !== "sync" &&
      ((h = !0),
      (l.scheduler = (T, R) => {
        R ? T() : us(T);
      })),
    (l.augmentJob = (T) => {
      t && (T.flags |= 4),
        h && ((T.flags |= 2), f && ((T.id = f.uid), (T.i = f)));
    });
  const _ = co(e, t, l);
  return Wt && (d ? d.push(_) : a && _()), _;
}

function vo(e, t, n) {
  const s = this.proxy,
    i = ie(e) ? (e.includes(".") ? $i(s, e) : () => s[e]) : e.bind(s, s);
  let r;
  j(t) ? (r = t) : ((r = t.handler), (n = t));
  const o = Gt(this),
    l = ji(i, r.bind(s), n);
  return o(), l;
}

function $i(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
const bo = Symbol("_vte"),
  Hi = (e) => e.__isTeleport,
  De = Symbol("_leaveCb"),
  Ot = Symbol("_enterCb");

function yo() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    ds(() => {
      e.isMounted = !0;
    }),
    hs(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Se = [Function, Array],
  ki = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Se,
    onEnter: Se,
    onAfterEnter: Se,
    onEnterCancelled: Se,
    onBeforeLeave: Se,
    onLeave: Se,
    onAfterLeave: Se,
    onLeaveCancelled: Se,
    onBeforeAppear: Se,
    onAppear: Se,
    onAfterAppear: Se,
    onAppearCancelled: Se,
  },
  Bi = (e) => {
    const t = e.subTree;
    return t.component ? Bi(t.component) : t;
  },
  _o = {
    name: "BaseTransition",
    props: ki,
    setup(e, { slots: t }) {
      const n = hr(),
        s = yo();
      return () => {
        const i = t.default && Ki(t.default(), !0);
        if (!i || !i.length) return;
        const r = Vi(i),
          o = U(e),
          { mode: l } = o;
        if (s.isLeaving) return In(r);
        const a = Ps(r);
        if (!a) return In(r);
        let d = Wn(a, o, s, n, (h) => (d = h));
        a.type !== pe && Ut(a, d);
        let f = n.subTree && Ps(n.subTree);
        if (f && f.type !== pe && !ut(f, a) && Bi(n).type !== pe) {
          let h = Wn(f, o, s, n);
          if ((Ut(f, h), l === "out-in" && a.type !== pe))
            return (
              (s.isLeaving = !0),
              (h.afterLeave = () => {
                (s.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete h.afterLeave,
                  (f = void 0);
              }),
              In(r)
            );
          l === "in-out" && a.type !== pe
            ? (h.delayLeave = (_, T, R) => {
                const L = Ui(s, f);
                (L[String(f.key)] = f),
                  (_[De] = () => {
                    T(), (_[De] = void 0), delete d.delayedLeave, (f = void 0);
                  }),
                  (d.delayedLeave = () => {
                    R(), delete d.delayedLeave, (f = void 0);
                  });
              })
            : (f = void 0);
        } else f && (f = void 0);
        return r;
      };
    },
  };

function Vi(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== pe) {
        t = n;
        break;
      }
  }
  return t;
}
const xo = _o;

function Ui(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}

function Wn(e, t, n, s, i) {
  const {
      appear: r,
      mode: o,
      persisted: l = !1,
      onBeforeEnter: a,
      onEnter: d,
      onAfterEnter: f,
      onEnterCancelled: h,
      onBeforeLeave: _,
      onLeave: T,
      onAfterLeave: R,
      onLeaveCancelled: L,
      onBeforeAppear: G,
      onAppear: H,
      onAfterAppear: $,
      onAppearCancelled: B,
    } = t,
    O = String(e.key),
    Y = Ui(n, e),
    V = (D, K) => {
      D && Oe(D, s, 9, K);
    },
    C = (D, K) => {
      const te = K[1];
      V(D, K),
        F(D) ? D.every((A) => A.length <= 1) && te() : D.length <= 1 && te();
    },
    P = {
      mode: o,
      persisted: l,
      beforeEnter(D) {
        let K = a;
        if (!n.isMounted)
          if (r) K = G || a;
          else return;
        D[De] && D[De](!0);
        const te = Y[O];
        te && ut(e, te) && te.el[De] && te.el[De](), V(K, [D]);
      },
      enter(D) {
        if (Y[O] === e) return;
        let K = d,
          te = f,
          A = h;
        if (!n.isMounted)
          if (r) (K = H || d), (te = $ || f), (A = B || h);
          else return;
        let ee = !1;
        D[Ot] = (Ue) => {
          ee ||
            ((ee = !0),
            Ue ? V(A, [D]) : V(te, [D]),
            P.delayedLeave && P.delayedLeave(),
            (D[Ot] = void 0));
        };
        const ce = D[Ot].bind(null, !1);
        K ? C(K, [D, ce]) : ce();
      },
      leave(D, K) {
        const te = String(e.key);
        if ((D[Ot] && D[Ot](!0), n.isUnmounting)) return K();
        V(_, [D]);
        let A = !1;
        D[De] = (ce) => {
          A ||
            ((A = !0),
            K(),
            ce ? V(L, [D]) : V(R, [D]),
            (D[De] = void 0),
            Y[te] === e && delete Y[te]);
        };
        const ee = D[De].bind(null, !1);
        (Y[te] = e), T ? C(T, [D, ee]) : ee();
      },
      clone(D) {
        const K = Wn(D, t, n, s, i);
        return i && i(K), K;
      },
    };
  return P;
}

function In(e) {
  if (_n(e)) return (e = st(e)), (e.children = null), e;
}

function Ps(e) {
  if (!_n(e)) return Hi(e.type) && e.children ? Vi(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && j(n.default)) return n.default();
  }
}

function Ut(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Ut(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}

function Ki(e, t = !1, n) {
  let s = [],
    i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === oe
      ? (o.patchFlag & 128 && i++, (s = s.concat(Ki(o.children, t, l))))
      : (t || o.type !== pe) &&
        s.push(
          l != null
            ? st(o, {
                key: l,
              })
            : o
        );
  }
  if (i > 1) for (let r = 0; r < s.length; r++) s[r].patchFlag = -2;
  return s;
}

function Wi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}

function Os(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const fn = new WeakMap();

function Dt(e, t, n, s, i = !1) {
  if (F(e)) {
    e.forEach((L, G) => Dt(L, t && (F(t) ? t[G] : t), n, s, i));
    return;
  }
  if (jt(s) && !i) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      Dt(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? vs(s.component) : s.el,
    o = i ? null : r,
    { i: l, r: a } = e,
    d = t && t.r,
    f = l.refs === Q ? (l.refs = {}) : l.refs,
    h = l.setupState,
    _ = U(h),
    T = h === Q ? li : (L) => (Os(f, L) ? !1 : W(_, L)),
    R = (L, G) => !(G && Os(f, G));
  if (d != null && d !== a) {
    if ((Ms(t), ie(d))) (f[d] = null), T(d) && (h[d] = null);
    else if (ue(d)) {
      const L = t;
      R(d, L.k) && (d.value = null), L.k && (f[L.k] = null);
    }
  }
  if (j(a)) qt(a, l, 12, [o, f]);
  else {
    const L = ie(a),
      G = ue(a);
    if (L || G) {
      const H = () => {
        if (e.f) {
          const $ = L ? (T(a) ? h[a] : f[a]) : R() || !e.k ? a.value : f[e.k];
          if (i) F($) && es($, r);
          else if (F($)) $.includes(r) || $.push(r);
          else if (L) (f[a] = [r]), T(a) && (h[a] = f[a]);
          else {
            const B = [r];
            R(a, e.k) && (a.value = B), e.k && (f[e.k] = B);
          }
        } else
          L
            ? ((f[a] = o), T(a) && (h[a] = o))
            : G && (R(a, e.k) && (a.value = o), e.k && (f[e.k] = o));
      };
      if (o) {
        const $ = () => {
          H(), fn.delete(e);
        };
        ($.id = -1), fn.set(e, $), be($, n);
      } else Ms(e), H();
    }
  }
}

function Ms(e) {
  const t = fn.get(e);
  t && ((t.flags |= 8), fn.delete(e));
}
vn().requestIdleCallback;
vn().cancelIdleCallback;
const jt = (e) => !!e.type.__asyncLoader,
  _n = (e) => e.type.__isKeepAlive;

function So(e, t) {
  zi(e, "a", t);
}

function Co(e, t) {
  zi(e, "da", t);
}

function zi(e, t, n = ge) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return e();
    });
  if ((xn(t, s, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      _n(i.parent.vnode) && wo(s, t, n, i), (i = i.parent);
  }
}

function wo(e, t, n, s) {
  const i = xn(t, e, s, !0);
  Yi(() => {
    es(s[t], i);
  }, n);
}

function xn(e, t, n = ge, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...o) => {
          Ge();
          const l = Gt(n),
            a = Oe(t, n, e, o);
          return l(), Je(), a;
        });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const Xe =
    (e) =>
    (t, n = ge) => {
      (!Wt || e === "sp") && xn(e, (...s) => t(...s), n);
    },
  To = Xe("bm"),
  ds = Xe("m"),
  Eo = Xe("bu"),
  Ao = Xe("u"),
  hs = Xe("bum"),
  Yi = Xe("um"),
  Po = Xe("sp"),
  Oo = Xe("rtg"),
  Mo = Xe("rtc");

function Lo(e, t = ge) {
  xn("ec", e, t);
}
const Io = Symbol.for("v-ndc");

function Qe(e, t, n, s) {
  let i;
  const r = n,
    o = F(e);
  if (o || ie(e)) {
    const l = o && gt(e);
    let a = !1,
      d = !1;
    l && ((a = !we(e)), (d = Ze(e)), (e = bn(e))), (i = new Array(e.length));
    for (let f = 0, h = e.length; f < h; f++)
      i[f] = t(a ? (d ? wt(Pe(e[f])) : Pe(e[f])) : e[f], f, void 0, r);
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++) i[l] = t(l + 1, l, void 0, r);
  } else if (z(e))
    if (e[Symbol.iterator]) i = Array.from(e, (l, a) => t(l, a, void 0, r));
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, d = l.length; a < d; a++) {
        const f = l[a];
        i[a] = t(e[f], f, a, r);
      }
    }
  else i = [];
  return i;
}
const zn = (e) => (e ? (pr(e) ? vs(e) : zn(e.parent)) : null),
  $t = le(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => zn(e.parent),
    $root: (e) => zn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Gi(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        us(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = fo.bind(e.proxy)),
    $watch: (e) => vo.bind(e),
  }),
  Fn = (e, t) => e !== Q && !e.__isScriptSetup && W(e, t),
  Fo = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: i,
        props: r,
        accessCache: o,
        type: l,
        appContext: a,
      } = e;
      if (t[0] !== "$") {
        const _ = o[t];
        if (_ !== void 0)
          switch (_) {
            case 1:
              return s[t];
            case 2:
              return i[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (Fn(s, t)) return (o[t] = 1), s[t];
          if (i !== Q && W(i, t)) return (o[t] = 2), i[t];
          if (W(r, t)) return (o[t] = 3), r[t];
          if (n !== Q && W(n, t)) return (o[t] = 4), n[t];
          Yn && (o[t] = 0);
        }
      }
      const d = $t[t];
      let f, h;
      if (d) return t === "$attrs" && ae(e.attrs, "get", ""), d(e);
      if ((f = l.__cssModules) && (f = f[t])) return f;
      if (n !== Q && W(n, t)) return (o[t] = 4), n[t];
      if (((h = a.config.globalProperties), W(h, t))) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: i, ctx: r } = e;
      return Fn(i, t)
        ? ((i[t] = n), !0)
        : s !== Q && W(s, t)
        ? ((s[t] = n), !0)
        : W(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: i,
          props: r,
          type: o,
        },
      },
      l
    ) {
      let a;
      return !!(
        n[l] ||
        (e !== Q && l[0] !== "$" && W(e, l)) ||
        Fn(t, l) ||
        W(r, l) ||
        W(s, l) ||
        W($t, l) ||
        W(i.config.globalProperties, l) ||
        ((a = o.__cssModules) && a[l])
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : W(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };

function Ls(e) {
  return F(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Yn = !0;

function Ro(e) {
  const t = Gi(e),
    n = e.proxy,
    s = e.ctx;
  (Yn = !1), t.beforeCreate && Is(t.beforeCreate, e, "bc");
  const {
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: d,
    created: f,
    beforeMount: h,
    mounted: _,
    beforeUpdate: T,
    updated: R,
    activated: L,
    deactivated: G,
    beforeDestroy: H,
    beforeUnmount: $,
    destroyed: B,
    unmounted: O,
    render: Y,
    renderTracked: V,
    renderTriggered: C,
    errorCaptured: P,
    serverPrefetch: D,
    expose: K,
    inheritAttrs: te,
    components: A,
    directives: ee,
    filters: ce,
  } = t;
  if ((d && No(d, s, null), o))
    for (const ne in o) {
      const J = o[ne];
      j(J) && (s[ne] = J.bind(n));
    }
  if (i) {
    const ne = i.call(n, n);
    z(ne) && (e.data = cs(ne));
  }
  if (((Yn = !0), r))
    for (const ne in r) {
      const J = r[ne],
        it = j(J) ? J.bind(n, n) : j(J.get) ? J.get.bind(n, n) : Be,
        Jt = !j(J) && j(J.set) ? J.set.bind(n) : Be,
        rt = It({
          get: it,
          set: Jt,
        });
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => rt.value,
        set: (Me) => (rt.value = Me),
      });
    }
  if (l) for (const ne in l) qi(l[ne], s, n, ne);
  if (a) {
    const ne = j(a) ? a.call(n) : a;
    Reflect.ownKeys(ne).forEach((J) => {
      po(J, ne[J]);
    });
  }
  f && Is(f, e, "c");

  function re(ne, J) {
    F(J) ? J.forEach((it) => ne(it.bind(n))) : J && ne(J.bind(n));
  }
  if (
    (re(To, h),
    re(ds, _),
    re(Eo, T),
    re(Ao, R),
    re(So, L),
    re(Co, G),
    re(Lo, P),
    re(Mo, V),
    re(Oo, C),
    re(hs, $),
    re(Yi, O),
    re(Po, D),
    F(K))
  )
    if (K.length) {
      const ne = e.exposed || (e.exposed = {});
      K.forEach((J) => {
        Object.defineProperty(ne, J, {
          get: () => n[J],
          set: (it) => (n[J] = it),
          enumerable: !0,
        });
      });
    } else e.exposed || (e.exposed = {});
  Y && e.render === Be && (e.render = Y),
    te != null && (e.inheritAttrs = te),
    A && (e.components = A),
    ee && (e.directives = ee),
    D && Wi(e);
}

function No(e, t, n = Be) {
  F(e) && (e = qn(e));
  for (const s in e) {
    const i = e[s];
    let r;
    z(i)
      ? "default" in i
        ? (r = nn(i.from || s, i.default, !0))
        : (r = nn(i.from || s))
      : (r = nn(i)),
      ue(r)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (o) => (r.value = o),
          })
        : (t[s] = r);
  }
}

function Is(e, t, n) {
  Oe(F(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}

function qi(e, t, n, s) {
  let i = s.includes(".") ? $i(n, s) : () => n[s];
  if (ie(e)) {
    const r = t[e];
    j(r) && Ln(i, r);
  } else if (j(e)) Ln(i, e.bind(n));
  else if (z(e))
    if (F(e)) e.forEach((r) => qi(r, t, n, s));
    else {
      const r = j(e.handler) ? e.handler.bind(n) : t[e.handler];
      j(r) && Ln(i, r, e);
    }
}

function Gi(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: i,
      optionsCache: r,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = r.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !i.length && !n && !s
      ? (a = t)
      : ((a = {}), i.length && i.forEach((d) => un(a, d, o, !0)), un(a, t, o)),
    z(t) && r.set(t, a),
    a
  );
}

function un(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && un(e, r, n, !0), i && i.forEach((o) => un(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Do[o] || (n && n[o]);
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Do = {
  data: Fs,
  props: Rs,
  emits: Rs,
  methods: Lt,
  computed: Lt,
  beforeCreate: de,
  created: de,
  beforeMount: de,
  mounted: de,
  beforeUpdate: de,
  updated: de,
  beforeDestroy: de,
  beforeUnmount: de,
  destroyed: de,
  unmounted: de,
  activated: de,
  deactivated: de,
  errorCaptured: de,
  serverPrefetch: de,
  components: Lt,
  directives: Lt,
  watch: $o,
  provide: Fs,
  inject: jo,
};

function Fs(e, t) {
  return t
    ? e
      ? function () {
          return le(
            j(e) ? e.call(this, this) : e,
            j(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}

function jo(e, t) {
  return Lt(qn(e), qn(t));
}

function qn(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}

function de(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}

function Lt(e, t) {
  return e ? le(Object.create(null), e, t) : t;
}

function Rs(e, t) {
  return e
    ? F(e) && F(t)
      ? [...new Set([...e, ...t])]
      : le(Object.create(null), Ls(e), Ls(t ?? {}))
    : t;
}

function $o(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = le(Object.create(null), e);
  for (const s in t) n[s] = de(e[s], t[s]);
  return n;
}

function Ji() {
  return {
    app: null,
    config: {
      isNativeTag: li,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Ho = 0;

function ko(e, t) {
  return function (s, i = null) {
    j(s) || (s = le({}, s)), i != null && !z(i) && (i = null);
    const r = Ji(),
      o = new WeakSet(),
      l = [];
    let a = !1;
    const d = (r.app = {
      _uid: Ho++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: xl,
      get config() {
        return r.config;
      },
      set config(f) {},
      use(f, ...h) {
        return (
          o.has(f) ||
            (f && j(f.install)
              ? (o.add(f), f.install(d, ...h))
              : j(f) && (o.add(f), f(d, ...h))),
          d
        );
      },
      mixin(f) {
        return r.mixins.includes(f) || r.mixins.push(f), d;
      },
      component(f, h) {
        return h ? ((r.components[f] = h), d) : r.components[f];
      },
      directive(f, h) {
        return h ? ((r.directives[f] = h), d) : r.directives[f];
      },
      mount(f, h, _) {
        if (!a) {
          const T = d._ceVNode || fe(s, i);
          return (
            (T.appContext = r),
            _ === !0 ? (_ = "svg") : _ === !1 && (_ = void 0),
            e(T, f, _),
            (a = !0),
            (d._container = f),
            (f.__vue_app__ = d),
            vs(T.component)
          );
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        a &&
          (Oe(l, d._instance, 16),
          e(null, d._container),
          delete d._container.__vue_app__);
      },
      provide(f, h) {
        return (r.provides[f] = h), d;
      },
      runWithContext(f) {
        const h = Ct;
        Ct = d;
        try {
          return f();
        } finally {
          Ct = h;
        }
      },
    });
    return d;
  };
}
let Ct = null;
const Bo = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Ee(t)}Modifiers`] || e[`${mt(t)}Modifiers`];

function Vo(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Q;
  let i = n;
  const r = t.startsWith("update:"),
    o = r && Bo(s, t.slice(7));
  o &&
    (o.trim && (i = n.map((f) => (ie(f) ? f.trim() : f))),
    o.number && (i = n.map(wr)));
  let l,
    a = s[(l = Tn(t))] || s[(l = Tn(Ee(t)))];
  !a && r && (a = s[(l = Tn(mt(t)))]), a && Oe(a, e, 6, i);
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Oe(d, e, 6, i);
  }
}
const Uo = new WeakMap();

function Zi(e, t, n = !1) {
  const s = n ? Uo : t.emitsCache,
    i = s.get(e);
  if (i !== void 0) return i;
  const r = e.emits;
  let o = {},
    l = !1;
  if (!j(e)) {
    const a = (d) => {
      const f = Zi(d, t, !0);
      f && ((l = !0), le(o, f));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !r && !l
    ? (z(e) && s.set(e, null), null)
    : (F(r) ? r.forEach((a) => (o[a] = null)) : le(o, r),
      z(e) && s.set(e, o),
      o);
}

function Sn(e, t) {
  return !e || !gn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      W(e, t[0].toLowerCase() + t.slice(1)) || W(e, mt(t)) || W(e, t));
}

function Ns(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: i,
      propsOptions: [r],
      slots: o,
      attrs: l,
      emit: a,
      render: d,
      renderCache: f,
      props: h,
      data: _,
      setupState: T,
      ctx: R,
      inheritAttrs: L,
    } = e,
    G = an(e);
  let H, $;
  try {
    if (n.shapeFlag & 4) {
      const O = i || s,
        Y = O;
      (H = $e(d.call(Y, O, f, h, T, _, R))), ($ = l);
    } else {
      const O = t;
      (H = $e(
        O.length > 1
          ? O(h, {
              attrs: l,
              slots: o,
              emit: a,
            })
          : O(h, null)
      )),
        ($ = t.props ? l : Ko(l));
    }
  } catch (O) {
    (Ht.length = 0), yn(O, e, 1), (H = fe(pe));
  }
  let B = H;
  if ($ && L !== !1) {
    const O = Object.keys($),
      { shapeFlag: Y } = B;
    O.length &&
      Y & 7 &&
      (r && O.some(Qn) && ($ = Wo($, r)), (B = st(B, $, !1, !0)));
  }
  return (
    n.dirs &&
      ((B = st(B, null, !1, !0)),
      (B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Ut(B, n.transition),
    (H = B),
    an(G),
    H
  );
}
const Ko = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || gn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Wo = (e, t) => {
    const n = {};
    for (const s in e) (!Qn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };

function zo(e, t, n) {
  const { props: s, children: i, component: r } = e,
    { props: o, children: l, patchFlag: a } = t,
    d = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return s ? Ds(s, o, d) : !!o;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const _ = f[h];
        if (Xi(o, s, _) && !Sn(d, _)) return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable)
      ? !0
      : s === o
      ? !1
      : s
      ? o
        ? Ds(s, o, d)
        : !0
      : !!o;
  return !1;
}

function Ds(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (Xi(t, e, r) && !Sn(n, r)) return !0;
  }
  return !1;
}

function Xi(e, t, n) {
  const s = e[n],
    i = t[n];
  return n === "style" && z(s) && z(i) ? !ns(s, i) : s !== i;
}

function Yo({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Qi = {},
  er = () => Object.create(Qi),
  tr = (e) => Object.getPrototypeOf(e) === Qi;

function qo(e, t, n, s = !1) {
  const i = {},
    r = er();
  (e.propsDefaults = Object.create(null)), nr(e, t, i, r);
  for (const o in e.propsOptions[0]) o in i || (i[o] = void 0);
  n ? (e.props = s ? i : Qr(i)) : e.type.props ? (e.props = i) : (e.props = r),
    (e.attrs = r);
}

function Go(e, t, n, s) {
  const {
      props: i,
      attrs: r,
      vnode: { patchFlag: o },
    } = e,
    l = U(i),
    [a] = e.propsOptions;
  let d = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        let _ = f[h];
        if (Sn(e.emitsOptions, _)) continue;
        const T = t[_];
        if (a)
          if (W(r, _)) T !== r[_] && ((r[_] = T), (d = !0));
          else {
            const R = Ee(_);
            i[R] = Gn(a, l, R, T, e, !1);
          }
        else T !== r[_] && ((r[_] = T), (d = !0));
      }
    }
  } else {
    nr(e, t, i, r) && (d = !0);
    let f;
    for (const h in l)
      (!t || (!W(t, h) && ((f = mt(h)) === h || !W(t, f)))) &&
        (a
          ? n &&
            (n[h] !== void 0 || n[f] !== void 0) &&
            (i[h] = Gn(a, l, h, void 0, e, !0))
          : delete i[h]);
    if (r !== l) for (const h in r) (!t || !W(t, h)) && (delete r[h], (d = !0));
  }
  d && qe(e.attrs, "set", "");
}

function nr(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let a in t) {
      if (Ft(a)) continue;
      const d = t[a];
      let f;
      i && W(i, (f = Ee(a)))
        ? !r || !r.includes(f)
          ? (n[f] = d)
          : ((l || (l = {}))[f] = d)
        : Sn(e.emitsOptions, a) ||
          ((!(a in s) || d !== s[a]) && ((s[a] = d), (o = !0)));
    }
  if (r) {
    const a = U(n),
      d = l || Q;
    for (let f = 0; f < r.length; f++) {
      const h = r[f];
      n[h] = Gn(i, a, h, d[h], e, !W(d, h));
    }
  }
  return o;
}

function Gn(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = W(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && j(a)) {
        const { propsDefaults: d } = i;
        if (n in d) s = d[n];
        else {
          const f = Gt(i);
          (s = d[n] = a.call(null, t)), f();
        }
      } else s = a;
      i.ce && i.ce._setProp(n, s);
    }
    o[0] &&
      (r && !l ? (s = !1) : o[1] && (s === "" || s === mt(n)) && (s = !0));
  }
  return s;
}
const Jo = new WeakMap();

function sr(e, t, n = !1) {
  const s = n ? Jo : t.propsCache,
    i = s.get(e);
  if (i) return i;
  const r = e.props,
    o = {},
    l = [];
  let a = !1;
  if (!j(e)) {
    const f = (h) => {
      a = !0;
      const [_, T] = sr(h, t, !0);
      le(o, _), T && l.push(...T);
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  if (!r && !a) return z(e) && s.set(e, _t), _t;
  if (F(r))
    for (let f = 0; f < r.length; f++) {
      const h = Ee(r[f]);
      js(h) && (o[h] = Q);
    }
  else if (r)
    for (const f in r) {
      const h = Ee(f);
      if (js(h)) {
        const _ = r[f],
          T = (o[h] =
            F(_) || j(_)
              ? {
                  type: _,
                }
              : le({}, _)),
          R = T.type;
        let L = !1,
          G = !0;
        if (F(R))
          for (let H = 0; H < R.length; ++H) {
            const $ = R[H],
              B = j($) && $.name;
            if (B === "Boolean") {
              L = !0;
              break;
            } else B === "String" && (G = !1);
          }
        else L = j(R) && R.name === "Boolean";
        (T[0] = L), (T[1] = G), (L || W(T, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return z(e) && s.set(e, d), d;
}

function js(e) {
  return e[0] !== "$" && !Ft(e);
}
const ps = (e) => e === "_" || e === "_ctx" || e === "$stable",
  gs = (e) => (F(e) ? e.map($e) : [$e(e)]),
  Zo = (e, t, n) => {
    if (t._n) return t;
    const s = Kn((...i) => gs(t(...i)), n);
    return (s._c = !1), s;
  },
  ir = (e, t, n) => {
    const s = e._ctx;
    for (const i in e) {
      if (ps(i)) continue;
      const r = e[i];
      if (j(r)) t[i] = Zo(i, r, s);
      else if (r != null) {
        const o = gs(r);
        t[i] = () => o;
      }
    }
  },
  rr = (e, t) => {
    const n = gs(t);
    e.slots.default = () => n;
  },
  or = (e, t, n) => {
    for (const s in t) (n || !ps(s)) && (e[s] = t[s]);
  },
  Xo = (e, t, n) => {
    const s = (e.slots = er());
    if (e.vnode.shapeFlag & 32) {
      const i = t._;
      i ? (or(s, t, n), n && hi(s, "_", i, !0)) : ir(t, s);
    } else t && rr(e, t);
  },
  Qo = (e, t, n) => {
    const { vnode: s, slots: i } = e;
    let r = !0,
      o = Q;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (r = !1)
          : or(i, t, n)
        : ((r = !t.$stable), ir(t, i)),
        (o = t);
    } else
      t &&
        (rr(e, t),
        (o = {
          default: 1,
        }));
    if (r) for (const l in i) !ps(l) && o[l] == null && delete i[l];
  },
  be = il;

function el(e) {
  return tl(e);
}

function tl(e, t) {
  const n = vn();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: i,
      patchProp: r,
      createElement: o,
      createText: l,
      createComment: a,
      setText: d,
      setElementText: f,
      parentNode: h,
      nextSibling: _,
      setScopeId: T = Be,
      insertStaticContent: R,
    } = e,
    L = (
      c,
      u,
      p,
      y = null,
      m = null,
      v = null,
      w = void 0,
      S = null,
      x = !!u.dynamicChildren
    ) => {
      if (c === u) return;
      c && !ut(c, u) && ((y = Zt(c)), Me(c, m, v, !0), (c = null)),
        u.patchFlag === -2 && ((x = !1), (u.dynamicChildren = null));
      const { type: b, ref: I, shapeFlag: E } = u;
      switch (b) {
        case Cn:
          G(c, u, p, y);
          break;
        case pe:
          H(c, u, p, y);
          break;
        case sn:
          c == null && $(u, p, y, w);
          break;
        case oe:
          A(c, u, p, y, m, v, w, S, x);
          break;
        default:
          E & 1
            ? Y(c, u, p, y, m, v, w, S, x)
            : E & 6
            ? ee(c, u, p, y, m, v, w, S, x)
            : (E & 64 || E & 128) && b.process(c, u, p, y, m, v, w, S, x, Et);
      }
      I != null && m
        ? Dt(I, c && c.ref, v, u || c, !u)
        : I == null && c && c.ref != null && Dt(c.ref, null, v, c, !0);
    },
    G = (c, u, p, y) => {
      if (c == null) s((u.el = l(u.children)), p, y);
      else {
        const m = (u.el = c.el);
        u.children !== c.children && d(m, u.children);
      }
    },
    H = (c, u, p, y) => {
      c == null ? s((u.el = a(u.children || "")), p, y) : (u.el = c.el);
    },
    $ = (c, u, p, y) => {
      [c.el, c.anchor] = R(c.children, u, p, y, c.el, c.anchor);
    },
    B = ({ el: c, anchor: u }, p, y) => {
      let m;
      for (; c && c !== u; ) (m = _(c)), s(c, p, y), (c = m);
      s(u, p, y);
    },
    O = ({ el: c, anchor: u }) => {
      let p;
      for (; c && c !== u; ) (p = _(c)), i(c), (c = p);
      i(u);
    },
    Y = (c, u, p, y, m, v, w, S, x) => {
      if (
        (u.type === "svg" ? (w = "svg") : u.type === "math" && (w = "mathml"),
        c == null)
      )
        V(u, p, y, m, v, w, S, x);
      else {
        const b = c.el && c.el._isVueCE ? c.el : null;
        try {
          b && b._beginPatch(), D(c, u, m, v, w, S, x);
        } finally {
          b && b._endPatch();
        }
      }
    },
    V = (c, u, p, y, m, v, w, S) => {
      let x, b;
      const { props: I, shapeFlag: E, transition: M, dirs: N } = c;
      if (
        ((x = c.el = o(c.type, v, I && I.is, I)),
        E & 8
          ? f(x, c.children)
          : E & 16 && P(c.children, x, null, y, m, Rn(c, v), w, S),
        N && ot(c, null, y, "created"),
        C(x, c, c.scopeId, w, y),
        I)
      ) {
        for (const Z in I) Z !== "value" && !Ft(Z) && r(x, Z, null, I[Z], v, y);
        "value" in I && r(x, "value", null, I.value, v),
          (b = I.onVnodeBeforeMount) && Re(b, y, c);
      }
      N && ot(c, null, y, "beforeMount");
      const k = nl(m, M);
      k && M.beforeEnter(x),
        s(x, u, p),
        ((b = I && I.onVnodeMounted) || k || N) &&
          be(() => {
            b && Re(b, y, c), k && M.enter(x), N && ot(c, null, y, "mounted");
          }, m);
    },
    C = (c, u, p, y, m) => {
      if ((p && T(c, p), y)) for (let v = 0; v < y.length; v++) T(c, y[v]);
      if (m) {
        let v = m.subTree;
        if (
          u === v ||
          (fr(v.type) && (v.ssContent === u || v.ssFallback === u))
        ) {
          const w = m.vnode;
          C(c, w, w.scopeId, w.slotScopeIds, m.parent);
        }
      }
    },
    P = (c, u, p, y, m, v, w, S, x = 0) => {
      for (let b = x; b < c.length; b++) {
        const I = (c[b] = S ? Ye(c[b]) : $e(c[b]));
        L(null, I, u, p, y, m, v, w, S);
      }
    },
    D = (c, u, p, y, m, v, w) => {
      const S = (u.el = c.el);
      let { patchFlag: x, dynamicChildren: b, dirs: I } = u;
      x |= c.patchFlag & 16;
      const E = c.props || Q,
        M = u.props || Q;
      let N;
      if (
        (p && lt(p, !1),
        (N = M.onVnodeBeforeUpdate) && Re(N, p, u, c),
        I && ot(u, c, p, "beforeUpdate"),
        p && lt(p, !0),
        ((E.innerHTML && M.innerHTML == null) ||
          (E.textContent && M.textContent == null)) &&
          f(S, ""),
        b
          ? K(c.dynamicChildren, b, S, p, y, Rn(u, m), v)
          : w || J(c, u, S, null, p, y, Rn(u, m), v, !1),
        x > 0)
      ) {
        if (x & 16) te(S, E, M, p, m);
        else if (
          (x & 2 && E.class !== M.class && r(S, "class", null, M.class, m),
          x & 4 && r(S, "style", E.style, M.style, m),
          x & 8)
        ) {
          const k = u.dynamicProps;
          for (let Z = 0; Z < k.length; Z++) {
            const q = k[Z],
              me = E[q],
              ve = M[q];
            (ve !== me || q === "value") && r(S, q, me, ve, m, p);
          }
        }
        x & 1 && c.children !== u.children && f(S, u.children);
      } else !w && b == null && te(S, E, M, p, m);
      ((N = M.onVnodeUpdated) || I) &&
        be(() => {
          N && Re(N, p, u, c), I && ot(u, c, p, "updated");
        }, y);
    },
    K = (c, u, p, y, m, v, w) => {
      for (let S = 0; S < u.length; S++) {
        const x = c[S],
          b = u[S],
          I =
            x.el && (x.type === oe || !ut(x, b) || x.shapeFlag & 198)
              ? h(x.el)
              : p;
        L(x, b, I, null, y, m, v, w, !0);
      }
    },
    te = (c, u, p, y, m) => {
      if (u !== p) {
        if (u !== Q)
          for (const v in u) !Ft(v) && !(v in p) && r(c, v, u[v], null, m, y);
        for (const v in p) {
          if (Ft(v)) continue;
          const w = p[v],
            S = u[v];
          w !== S && v !== "value" && r(c, v, S, w, m, y);
        }
        "value" in p && r(c, "value", u.value, p.value, m);
      }
    },
    A = (c, u, p, y, m, v, w, S, x) => {
      const b = (u.el = c ? c.el : l("")),
        I = (u.anchor = c ? c.anchor : l(""));
      let { patchFlag: E, dynamicChildren: M, slotScopeIds: N } = u;
      N && (S = S ? S.concat(N) : N),
        c == null
          ? (s(b, p, y), s(I, p, y), P(u.children || [], p, I, m, v, w, S, x))
          : E > 0 &&
            E & 64 &&
            M &&
            c.dynamicChildren &&
            c.dynamicChildren.length === M.length
          ? (K(c.dynamicChildren, M, p, m, v, w, S),
            (u.key != null || (m && u === m.subTree)) && lr(c, u, !0))
          : J(c, u, p, I, m, v, w, S, x);
    },
    ee = (c, u, p, y, m, v, w, S, x) => {
      (u.slotScopeIds = S),
        c == null
          ? u.shapeFlag & 512
            ? m.ctx.activate(u, p, y, w, x)
            : ce(u, p, y, m, v, w, x)
          : Ue(c, u, x);
    },
    ce = (c, u, p, y, m, v, w) => {
      const S = (c.component = pl(c, y, m));
      if ((_n(c) && (S.ctx.renderer = Et), gl(S, !1, w), S.asyncDep)) {
        if ((m && m.registerDep(S, re, w), !c.el)) {
          const x = (S.subTree = fe(pe));
          H(null, x, u, p), (c.placeholder = x.el);
        }
      } else re(S, c, u, p, m, v, w);
    },
    Ue = (c, u, p) => {
      const y = (u.component = c.component);
      if (zo(c, u, p))
        if (y.asyncDep && !y.asyncResolved) {
          ne(y, u, p);
          return;
        } else (y.next = u), y.update();
      else (u.el = c.el), (y.vnode = u);
    },
    re = (c, u, p, y, m, v, w) => {
      const S = () => {
        if (c.isMounted) {
          let { next: E, bu: M, u: N, parent: k, vnode: Z } = c;
          {
            const Ie = cr(c);
            if (Ie) {
              E && ((E.el = Z.el), ne(c, E, w)),
                Ie.asyncDep.then(() => {
                  be(() => {
                    c.isUnmounted || b();
                  }, m);
                });
              return;
            }
          }
          let q = E,
            me;
          lt(c, !1),
            E ? ((E.el = Z.el), ne(c, E, w)) : (E = Z),
            M && En(M),
            (me = E.props && E.props.onVnodeBeforeUpdate) && Re(me, k, E, Z),
            lt(c, !0);
          const ve = Ns(c),
            Le = c.subTree;
          (c.subTree = ve),
            L(Le, ve, h(Le.el), Zt(Le), c, m, v),
            (E.el = ve.el),
            q === null && Yo(c, ve.el),
            N && be(N, m),
            (me = E.props && E.props.onVnodeUpdated) &&
              be(() => Re(me, k, E, Z), m);
        } else {
          let E;
          const { el: M, props: N } = u,
            { bm: k, m: Z, parent: q, root: me, type: ve } = c,
            Le = jt(u);
          lt(c, !1),
            k && En(k),
            !Le && (E = N && N.onVnodeBeforeMount) && Re(E, q, u),
            lt(c, !0);
          {
            me.ce &&
              me.ce._hasShadowRoot() &&
              me.ce._injectChildStyle(ve, c.parent ? c.parent.type : void 0);
            const Ie = (c.subTree = Ns(c));
            L(null, Ie, p, y, c, m, v), (u.el = Ie.el);
          }
          if ((Z && be(Z, m), !Le && (E = N && N.onVnodeMounted))) {
            const Ie = u;
            be(() => Re(E, q, Ie), m);
          }
          (u.shapeFlag & 256 ||
            (q && jt(q.vnode) && q.vnode.shapeFlag & 256)) &&
            c.a &&
            be(c.a, m),
            (c.isMounted = !0),
            (u = p = y = null);
        }
      };
      c.scope.on();
      const x = (c.effect = new vi(S));
      c.scope.off();
      const b = (c.update = x.run.bind(x)),
        I = (c.job = x.runIfDirty.bind(x));
      (I.i = c), (I.id = c.uid), (x.scheduler = () => us(I)), lt(c, !0), b();
    },
    ne = (c, u, p) => {
      u.component = c;
      const y = c.vnode.props;
      (c.vnode = u),
        (c.next = null),
        Go(c, u.props, y, p),
        Qo(c, u.children, p),
        Ge(),
        As(c),
        Je();
    },
    J = (c, u, p, y, m, v, w, S, x = !1) => {
      const b = c && c.children,
        I = c ? c.shapeFlag : 0,
        E = u.children,
        { patchFlag: M, shapeFlag: N } = u;
      if (M > 0) {
        if (M & 128) {
          Jt(b, E, p, y, m, v, w, S, x);
          return;
        } else if (M & 256) {
          it(b, E, p, y, m, v, w, S, x);
          return;
        }
      }
      N & 8
        ? (I & 16 && Tt(b, m, v), E !== b && f(p, E))
        : I & 16
        ? N & 16
          ? Jt(b, E, p, y, m, v, w, S, x)
          : Tt(b, m, v, !0)
        : (I & 8 && f(p, ""), N & 16 && P(E, p, y, m, v, w, S, x));
    },
    it = (c, u, p, y, m, v, w, S, x) => {
      (c = c || _t), (u = u || _t);
      const b = c.length,
        I = u.length,
        E = Math.min(b, I);
      let M;
      for (M = 0; M < E; M++) {
        const N = (u[M] = x ? Ye(u[M]) : $e(u[M]));
        L(c[M], N, p, null, m, v, w, S, x);
      }
      b > I ? Tt(c, m, v, !0, !1, E) : P(u, p, y, m, v, w, S, x, E);
    },
    Jt = (c, u, p, y, m, v, w, S, x) => {
      let b = 0;
      const I = u.length;
      let E = c.length - 1,
        M = I - 1;
      for (; b <= E && b <= M; ) {
        const N = c[b],
          k = (u[b] = x ? Ye(u[b]) : $e(u[b]));
        if (ut(N, k)) L(N, k, p, null, m, v, w, S, x);
        else break;
        b++;
      }
      for (; b <= E && b <= M; ) {
        const N = c[E],
          k = (u[M] = x ? Ye(u[M]) : $e(u[M]));
        if (ut(N, k)) L(N, k, p, null, m, v, w, S, x);
        else break;
        E--, M--;
      }
      if (b > E) {
        if (b <= M) {
          const N = M + 1,
            k = N < I ? u[N].el : y;
          for (; b <= M; )
            L(null, (u[b] = x ? Ye(u[b]) : $e(u[b])), p, k, m, v, w, S, x), b++;
        }
      } else if (b > M) for (; b <= E; ) Me(c[b], m, v, !0), b++;
      else {
        const N = b,
          k = b,
          Z = new Map();
        for (b = k; b <= M; b++) {
          const _e = (u[b] = x ? Ye(u[b]) : $e(u[b]));
          _e.key != null && Z.set(_e.key, b);
        }
        let q,
          me = 0;
        const ve = M - k + 1;
        let Le = !1,
          Ie = 0;
        const At = new Array(ve);
        for (b = 0; b < ve; b++) At[b] = 0;
        for (b = N; b <= E; b++) {
          const _e = c[b];
          if (me >= ve) {
            Me(_e, m, v, !0);
            continue;
          }
          let Fe;
          if (_e.key != null) Fe = Z.get(_e.key);
          else
            for (q = k; q <= M; q++)
              if (At[q - k] === 0 && ut(_e, u[q])) {
                Fe = q;
                break;
              }
          Fe === void 0
            ? Me(_e, m, v, !0)
            : ((At[Fe - k] = b + 1),
              Fe >= Ie ? (Ie = Fe) : (Le = !0),
              L(_e, u[Fe], p, null, m, v, w, S, x),
              me++);
        }
        const _s = Le ? sl(At) : _t;
        for (q = _s.length - 1, b = ve - 1; b >= 0; b--) {
          const _e = k + b,
            Fe = u[_e],
            xs = u[_e + 1],
            Ss = _e + 1 < I ? xs.el || ar(xs) : y;
          At[b] === 0
            ? L(null, Fe, p, Ss, m, v, w, S, x)
            : Le && (q < 0 || b !== _s[q] ? rt(Fe, p, Ss, 2) : q--);
        }
      }
    },
    rt = (c, u, p, y, m = null) => {
      const { el: v, type: w, transition: S, children: x, shapeFlag: b } = c;
      if (b & 6) {
        rt(c.component.subTree, u, p, y);
        return;
      }
      if (b & 128) {
        c.suspense.move(u, p, y);
        return;
      }
      if (b & 64) {
        w.move(c, u, p, Et);
        return;
      }
      if (w === oe) {
        s(v, u, p);
        for (let E = 0; E < x.length; E++) rt(x[E], u, p, y);
        s(c.anchor, u, p);
        return;
      }
      if (w === sn) {
        B(c, u, p);
        return;
      }
      if (y !== 2 && b & 1 && S)
        if (y === 0) S.beforeEnter(v), s(v, u, p), be(() => S.enter(v), m);
        else {
          const { leave: E, delayLeave: M, afterLeave: N } = S,
            k = () => {
              c.ctx.isUnmounted ? i(v) : s(v, u, p);
            },
            Z = () => {
              v._isLeaving && v[De](!0),
                E(v, () => {
                  k(), N && N();
                });
            };
          M ? M(v, k, Z) : Z();
        }
      else s(v, u, p);
    },
    Me = (c, u, p, y = !1, m = !1) => {
      const {
        type: v,
        props: w,
        ref: S,
        children: x,
        dynamicChildren: b,
        shapeFlag: I,
        patchFlag: E,
        dirs: M,
        cacheIndex: N,
      } = c;
      if (
        (E === -2 && (m = !1),
        S != null && (Ge(), Dt(S, null, p, c, !0), Je()),
        N != null && (u.renderCache[N] = void 0),
        I & 256)
      ) {
        u.ctx.deactivate(c);
        return;
      }
      const k = I & 1 && M,
        Z = !jt(c);
      let q;
      if ((Z && (q = w && w.onVnodeBeforeUnmount) && Re(q, u, c), I & 6))
        yr(c.component, p, y);
      else {
        if (I & 128) {
          c.suspense.unmount(p, y);
          return;
        }
        k && ot(c, null, u, "beforeUnmount"),
          I & 64
            ? c.type.remove(c, u, p, Et, y)
            : b && !b.hasOnce && (v !== oe || (E > 0 && E & 64))
            ? Tt(b, u, p, !1, !0)
            : ((v === oe && E & 384) || (!m && I & 16)) && Tt(x, u, p),
          y && bs(c);
      }
      ((Z && (q = w && w.onVnodeUnmounted)) || k) &&
        be(() => {
          q && Re(q, u, c), k && ot(c, null, u, "unmounted");
        }, p);
    },
    bs = (c) => {
      const { type: u, el: p, anchor: y, transition: m } = c;
      if (u === oe) {
        br(p, y);
        return;
      }
      if (u === sn) {
        O(c);
        return;
      }
      const v = () => {
        i(p), m && !m.persisted && m.afterLeave && m.afterLeave();
      };
      if (c.shapeFlag & 1 && m && !m.persisted) {
        const { leave: w, delayLeave: S } = m,
          x = () => w(p, v);
        S ? S(c.el, v, x) : x();
      } else v();
    },
    br = (c, u) => {
      let p;
      for (; c !== u; ) (p = _(c)), i(c), (c = p);
      i(u);
    },
    yr = (c, u, p) => {
      const { bum: y, scope: m, job: v, subTree: w, um: S, m: x, a: b } = c;
      $s(x),
        $s(b),
        y && En(y),
        m.stop(),
        v && ((v.flags |= 8), Me(w, c, u, p)),
        S && be(S, u),
        be(() => {
          c.isUnmounted = !0;
        }, u);
    },
    Tt = (c, u, p, y = !1, m = !1, v = 0) => {
      for (let w = v; w < c.length; w++) Me(c[w], u, p, y, m);
    },
    Zt = (c) => {
      if (c.shapeFlag & 6) return Zt(c.component.subTree);
      if (c.shapeFlag & 128) return c.suspense.next();
      const u = _(c.anchor || c.el),
        p = u && u[bo];
      return p ? _(p) : u;
    };
  let wn = !1;
  const ys = (c, u, p) => {
      let y;
      c == null
        ? u._vnode && (Me(u._vnode, null, null, !0), (y = u._vnode.component))
        : L(u._vnode || null, c, u, null, null, null, p),
        (u._vnode = c),
        wn || ((wn = !0), As(y), Ri(), (wn = !1));
    },
    Et = {
      p: L,
      um: Me,
      m: rt,
      r: bs,
      mt: ce,
      mc: P,
      pc: J,
      pbc: K,
      n: Zt,
      o: e,
    };
  return {
    render: ys,
    hydrate: void 0,
    createApp: ko(ys),
  };
}

function Rn({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}

function lt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}

function nl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}

function lr(e, t, n = !1) {
  const s = e.children,
    i = t.children;
  if (F(s) && F(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = i[r] = Ye(i[r])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && lr(o, l)),
        l.type === Cn &&
          (l.patchFlag === -1 && (l = i[r] = Ye(l)), (l.el = o.el)),
        l.type === pe && !l.el && (l.el = o.el);
    }
}

function sl(e) {
  const t = e.slice(),
    n = [0];
  let s, i, r, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const d = e[s];
    if (d !== 0) {
      if (((i = n[n.length - 1]), e[i] < d)) {
        (t[s] = i), n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        (l = (r + o) >> 1), e[n[l]] < d ? (r = l + 1) : (o = l);
      d < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), (n[r] = s));
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; ) (n[r] = o), (o = t[o]);
  return n;
}

function cr(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : cr(t);
}

function $s(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}

function ar(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? ar(t.subTree) : null;
}
const fr = (e) => e.__isSuspense;

function il(e, t) {
  t && t.pendingBranch
    ? F(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : ho(e);
}
const oe = Symbol.for("v-fgt"),
  Cn = Symbol.for("v-txt"),
  pe = Symbol.for("v-cmt"),
  sn = Symbol.for("v-stc"),
  Ht = [];
let xe = null;

function Ce(e = !1) {
  Ht.push((xe = e ? null : []));
}

function rl() {
  Ht.pop(), (xe = Ht[Ht.length - 1] || null);
}
let Kt = 1;

function dn(e, t = !1) {
  (Kt += e), e < 0 && xe && t && (xe.hasOnce = !0);
}

function ur(e) {
  return (
    (e.dynamicChildren = Kt > 0 ? xe || _t : null),
    rl(),
    Kt > 0 && xe && xe.push(e),
    e
  );
}

function Te(e, t, n, s, i, r) {
  return ur(g(e, t, n, s, i, r, !0));
}

function ol(e, t, n, s, i) {
  return ur(fe(e, t, n, s, i, !0));
}

function hn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}

function ut(e, t) {
  return e.type === t.type && e.key === t.key;
}
const dr = ({ key: e }) => e ?? null,
  rn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? ie(e) || ue(e) || j(e)
        ? {
            i: ke,
            r: e,
            k: t,
            f: !!n,
          }
        : e
      : null
  );

function g(
  e,
  t = null,
  n = null,
  s = 0,
  i = null,
  r = e === oe ? 0 : 1,
  o = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && dr(t),
    ref: t && rn(t),
    scopeId: Di,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ke,
  };
  return (
    l
      ? (ms(a, n), r & 128 && e.normalize(a))
      : n && (a.shapeFlag |= ie(n) ? 8 : 16),
    Kt > 0 &&
      !o &&
      xe &&
      (a.patchFlag > 0 || r & 6) &&
      a.patchFlag !== 32 &&
      xe.push(a),
    a
  );
}
const fe = ll;

function ll(e, t = null, n = null, s = 0, i = null, r = !1) {
  if (((!e || e === Io) && (e = pe), hn(e))) {
    const l = st(e, t, !0);
    return (
      n && ms(l, n),
      Kt > 0 &&
        !r &&
        xe &&
        (l.shapeFlag & 6 ? (xe[xe.indexOf(e)] = l) : xe.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((yl(e) && (e = e.__vccOpts), t)) {
    t = cl(t);
    let { class: l, style: a } = t;
    l && !ie(l) && (t.class = ht(l)),
      z(a) && (fs(a) && !F(a) && (a = le({}, a)), (t.style = dt(a)));
  }
  const o = ie(e) ? 1 : fr(e) ? 128 : Hi(e) ? 64 : z(e) ? 4 : j(e) ? 2 : 0;
  return g(e, t, n, s, i, o, r, !0);
}

function cl(e) {
  return e ? (fs(e) || tr(e) ? le({}, e) : e) : null;
}

function st(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e,
    d = t ? ul(i || {}, t) : i,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: d,
      key: d && dr(d),
      ref:
        t && t.ref
          ? n && r
            ? F(r)
              ? r.concat(rn(t))
              : [r, rn(t)]
            : rn(t)
          : r,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== oe ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && st(e.ssContent),
      ssFallback: e.ssFallback && st(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return a && s && Ut(f, a.clone(f)), f;
}

function al(e = " ", t = 0) {
  return fe(Cn, null, e, t);
}

function fl(e, t) {
  const n = fe(sn, null, e);
  return (n.staticCount = t), n;
}

function Hs(e = "", t = !1) {
  return t ? (Ce(), ol(pe, null, e)) : fe(pe, null, e);
}

function $e(e) {
  return e == null || typeof e == "boolean"
    ? fe(pe)
    : F(e)
    ? fe(oe, null, e.slice())
    : hn(e)
    ? Ye(e)
    : fe(Cn, null, String(e));
}

function Ye(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : st(e);
}

function ms(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (F(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), ms(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !tr(t)
        ? (t._ctx = ke)
        : i === 3 &&
          ke &&
          (ke.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    j(t)
      ? ((t = {
          default: t,
          _ctx: ke,
        }),
        (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [al(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}

function ul(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = ht([t.class, s.class]));
      else if (i === "style") t.style = dt([t.style, s.style]);
      else if (gn(i)) {
        const r = t[i],
          o = s[i];
        o &&
          r !== o &&
          !(F(r) && r.includes(o)) &&
          (t[i] = r ? [].concat(r, o) : o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}

function Re(e, t, n, s = null) {
  Oe(e, t, 7, [n, s]);
}
const dl = Ji();
let hl = 0;

function pl(e, t, n) {
  const s = e.type,
    i = (t ? t.appContext : e.appContext) || dl,
    r = {
      uid: hl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Fr(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: sr(s, i),
      emitsOptions: Zi(s, i),
      emit: null,
      emitted: null,
      propsDefaults: Q,
      inheritAttrs: s.inheritAttrs,
      ctx: Q,
      data: Q,
      props: Q,
      attrs: Q,
      slots: Q,
      refs: Q,
      setupState: Q,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (r.ctx = {
      _: r,
    }),
    (r.root = t ? t.root : r),
    (r.emit = Vo.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let ge = null;
const hr = () => ge || ke;
let pn, Jn;
{
  const e = vn(),
    t = (n, s) => {
      let i;
      return (
        (i = e[n]) || (i = e[n] = []),
        i.push(s),
        (r) => {
          i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
        }
      );
    };
  (pn = t("__VUE_INSTANCE_SETTERS__", (n) => (ge = n))),
    (Jn = t("__VUE_SSR_SETTERS__", (n) => (Wt = n)));
}
const Gt = (e) => {
    const t = ge;
    return (
      pn(e),
      e.scope.on(),
      () => {
        e.scope.off(), pn(t);
      }
    );
  },
  ks = () => {
    ge && ge.scope.off(), pn(null);
  };

function pr(e) {
  return e.vnode.shapeFlag & 4;
}
let Wt = !1;

function gl(e, t = !1, n = !1) {
  t && Jn(t);
  const { props: s, children: i } = e.vnode,
    r = pr(e);
  qo(e, s, r, t), Xo(e, i, n || t);
  const o = r ? ml(e, t) : void 0;
  return t && Jn(!1), o;
}

function ml(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Fo));
  const { setup: s } = n;
  if (s) {
    Ge();
    const i = (e.setupContext = s.length > 1 ? bl(e) : null),
      r = Gt(e),
      o = qt(s, e, 0, [e.props, i]),
      l = ai(o);
    if ((Je(), r(), (l || e.sp) && !jt(e) && Wi(e), l)) {
      if ((o.then(ks, ks), t))
        return o
          .then((a) => {
            Bs(e, a);
          })
          .catch((a) => {
            yn(a, e, 0);
          });
      e.asyncDep = o;
    } else Bs(e, o);
  } else gr(e);
}

function Bs(e, t, n) {
  j(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : z(t) && (e.setupState = Li(t)),
    gr(e);
}

function gr(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Be);
  {
    const i = Gt(e);
    Ge();
    try {
      Ro(e);
    } finally {
      Je(), i();
    }
  }
}
const vl = {
  get(e, t) {
    return ae(e, "get", ""), e[t];
  },
};

function bl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, vl),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}

function vs(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Li(eo(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in $t) return $t[n](e);
          },
          has(t, n) {
            return n in t || n in $t;
          },
        }))
    : e.proxy;
}

function yl(e) {
  return j(e) && "__vccOpts" in e;
}
const It = (e, t) => oo(e, t, Wt);

function _l(e, t, n) {
  try {
    dn(-1);
    const s = arguments.length;
    return s === 2
      ? z(t) && !F(t)
        ? hn(t)
          ? fe(e, null, [t])
          : fe(e, t)
        : fe(e, null, t)
      : (s > 3
          ? (n = Array.prototype.slice.call(arguments, 2))
          : s === 3 && hn(n) && (n = [n]),
        fe(e, t, n));
  } finally {
    dn(1);
  }
}
const xl = "3.5.30";
let Zn;
const Vs = typeof window < "u" && window.trustedTypes;
if (Vs)
  try {
    Zn = Vs.createPolicy("vue", {
      createHTML: (e) => e,
    });
  } catch {}
const mr = Zn ? (e) => Zn.createHTML(e) : (e) => e,
  Sl = "http://www.w3.org/2000/svg",
  Cl = "http://www.w3.org/1998/Math/MathML",
  ze = typeof document < "u" ? document : null,
  Us = ze && ze.createElement("template"),
  wl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const i =
        t === "svg"
          ? ze.createElementNS(Sl, e)
          : t === "mathml"
          ? ze.createElementNS(Cl, e)
          : n
          ? ze.createElement(e, {
              is: n,
            })
          : ze.createElement(e);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          i.setAttribute("multiple", s.multiple),
        i
      );
    },
    createText: (e) => ze.createTextNode(e),
    createComment: (e) => ze.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ze.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, i, r) {
      const o = n ? n.previousSibling : t.lastChild;
      if (i && (i === r || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === r || !(i = i.nextSibling));

        );
      else {
        Us.innerHTML = mr(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const l = Us.content;
        if (s === "svg" || s === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  et = "transition",
  Mt = "animation",
  zt = Symbol("_vtc"),
  vr = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: !0,
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Tl = le({}, ki, vr),
  El = (e) => ((e.displayName = "Transition"), (e.props = Tl), e),
  Ks = El((e, { slots: t }) => _l(xo, Al(e), t)),
  ct = (e, t = []) => {
    F(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Ws = (e) => (e ? (F(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);

function Al(e) {
  const t = {};
  for (const A in e) A in vr || (t[A] = e[A]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: s,
      duration: i,
      enterFromClass: r = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: a = r,
      appearActiveClass: d = o,
      appearToClass: f = l,
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: _ = `${n}-leave-active`,
      leaveToClass: T = `${n}-leave-to`,
    } = e,
    R = Pl(i),
    L = R && R[0],
    G = R && R[1],
    {
      onBeforeEnter: H,
      onEnter: $,
      onEnterCancelled: B,
      onLeave: O,
      onLeaveCancelled: Y,
      onBeforeAppear: V = H,
      onAppear: C = $,
      onAppearCancelled: P = B,
    } = t,
    D = (A, ee, ce, Ue) => {
      (A._enterCancelled = Ue),
        at(A, ee ? f : l),
        at(A, ee ? d : o),
        ce && ce();
    },
    K = (A, ee) => {
      (A._isLeaving = !1), at(A, h), at(A, T), at(A, _), ee && ee();
    },
    te = (A) => (ee, ce) => {
      const Ue = A ? C : $,
        re = () => D(ee, A, ce);
      ct(Ue, [ee, re]),
        zs(() => {
          at(ee, A ? a : r), We(ee, A ? f : l), Ws(Ue) || Ys(ee, s, L, re);
        });
    };
  return le(t, {
    onBeforeEnter(A) {
      ct(H, [A]), We(A, r), We(A, o);
    },
    onBeforeAppear(A) {
      ct(V, [A]), We(A, a), We(A, d);
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(A, ee) {
      A._isLeaving = !0;
      const ce = () => K(A, ee);
      We(A, h),
        A._enterCancelled ? (We(A, _), Js(A)) : (Js(A), We(A, _)),
        zs(() => {
          A._isLeaving && (at(A, h), We(A, T), Ws(O) || Ys(A, s, G, ce));
        }),
        ct(O, [A, ce]);
    },
    onEnterCancelled(A) {
      D(A, !1, void 0, !0), ct(B, [A]);
    },
    onAppearCancelled(A) {
      D(A, !0, void 0, !0), ct(P, [A]);
    },
    onLeaveCancelled(A) {
      K(A), ct(Y, [A]);
    },
  });
}

function Pl(e) {
  if (e == null) return null;
  if (z(e)) return [Nn(e.enter), Nn(e.leave)];
  {
    const t = Nn(e);
    return [t, t];
  }
}

function Nn(e) {
  return Tr(e);
}

function We(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[zt] || (e[zt] = new Set())).add(t);
}

function at(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[zt];
  n && (n.delete(t), n.size || (e[zt] = void 0));
}

function zs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ol = 0;

function Ys(e, t, n, s) {
  const i = (e._endId = ++Ol),
    r = () => {
      i === e._endId && s();
    };
  if (n != null) return setTimeout(r, n);
  const { type: o, timeout: l, propCount: a } = Ml(e, t);
  if (!o) return s();
  const d = o + "end";
  let f = 0;
  const h = () => {
      e.removeEventListener(d, _), r();
    },
    _ = (T) => {
      T.target === e && ++f >= a && h();
    };
  setTimeout(() => {
    f < a && h();
  }, l + 1),
    e.addEventListener(d, _);
}

function Ml(e, t) {
  const n = window.getComputedStyle(e),
    s = (R) => (n[R] || "").split(", "),
    i = s(`${et}Delay`),
    r = s(`${et}Duration`),
    o = qs(i, r),
    l = s(`${Mt}Delay`),
    a = s(`${Mt}Duration`),
    d = qs(l, a);
  let f = null,
    h = 0,
    _ = 0;
  t === et
    ? o > 0 && ((f = et), (h = o), (_ = r.length))
    : t === Mt
    ? d > 0 && ((f = Mt), (h = d), (_ = a.length))
    : ((h = Math.max(o, d)),
      (f = h > 0 ? (o > d ? et : Mt) : null),
      (_ = f ? (f === et ? r.length : a.length) : 0));
  const T =
    f === et &&
    /\b(?:transform|all)(?:,|$)/.test(s(`${et}Property`).toString());
  return {
    type: f,
    timeout: h,
    propCount: _,
    hasTransform: T,
  };
}

function qs(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => Gs(n) + Gs(e[s])));
}

function Gs(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}

function Js(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}

function Ll(e, t, n) {
  const s = e[zt];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Zs = Symbol("_vod"),
  Il = Symbol("_vsh"),
  Fl = Symbol(""),
  Rl = /(?:^|;)\s*display\s*:/;

function Nl(e, t, n) {
  const s = e.style,
    i = ie(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (ie(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && on(s, l, "");
        }
      else for (const o in t) n[o] == null && on(s, o, "");
    for (const o in n) o === "display" && (r = !0), on(s, o, n[o]);
  } else if (i) {
    if (t !== n) {
      const o = s[Fl];
      o && (n += ";" + o), (s.cssText = n), (r = Rl.test(n));
    }
  } else t && e.removeAttribute("style");
  Zs in e && ((e[Zs] = r ? s.display : ""), e[Il] && (s.display = "none"));
}
const Xs = /\s*!important$/;

function on(e, t, n) {
  if (F(n)) n.forEach((s) => on(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Dl(e, t);
    Xs.test(n)
      ? e.setProperty(mt(s), n.replace(Xs, ""), "important")
      : (e[s] = n);
  }
}
const Qs = ["Webkit", "Moz", "ms"],
  Dn = {};

function Dl(e, t) {
  const n = Dn[t];
  if (n) return n;
  let s = Ee(t);
  if (s !== "filter" && s in e) return (Dn[t] = s);
  s = di(s);
  for (let i = 0; i < Qs.length; i++) {
    const r = Qs[i] + s;
    if (r in e) return (Dn[t] = r);
  }
  return t;
}
const ei = "http://www.w3.org/1999/xlink";

function ti(e, t, n, s, i, r = Lr(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(ei, t.slice(6, t.length))
      : e.setAttributeNS(ei, t, n)
    : n == null || (r && !pi(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, r ? "" : Ve(n) ? String(n) : n);
}

function ni(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? mr(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value,
      a = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (l !== a || !("_value" in e)) && (e.value = a),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (n = pi(n))
      : n == null && l === "string"
      ? ((n = ""), (o = !0))
      : l === "number" && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(i || t);
}

function jl(e, t, n, s) {
  e.addEventListener(t, n, s);
}

function $l(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const si = Symbol("_vei");

function Hl(e, t, n, s, i = null) {
  const r = e[si] || (e[si] = {}),
    o = r[t];
  if (s && o) o.value = s;
  else {
    const [l, a] = kl(t);
    if (s) {
      const d = (r[t] = Ul(s, i));
      jl(e, l, d, a);
    } else o && ($l(e, l, o, a), (r[t] = void 0));
  }
}
const ii = /(?:Once|Passive|Capture)$/;

function kl(e) {
  let t;
  if (ii.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(ii)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : mt(e.slice(2)), t];
}
let jn = 0;
const Bl = Promise.resolve(),
  Vl = () => jn || (Bl.then(() => (jn = 0)), (jn = Date.now()));

function Ul(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Oe(Kl(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Vl()), n;
}

function Kl(e, t) {
  if (F(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (i) => !i._stopped && s && s(i))
    );
  } else return t;
}
const ri = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Wl = (e, t, n, s, i, r) => {
    const o = i === "svg";
    t === "class"
      ? Ll(e, s, o)
      : t === "style"
      ? Nl(e, n, s)
      : gn(t)
      ? Qn(t) || Hl(e, t, n, s, r)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : zl(e, t, s, o)
        )
      ? (ni(e, t, s),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          ti(e, t, s, o, r, t !== "value"))
      : e._isVueCE &&
        (Yl(e, t) || (e._def.__asyncLoader && (/[A-Z]/.test(t) || !ie(s))))
      ? ni(e, Ee(t), s, r, t)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        ti(e, t, s, o));
  };

function zl(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && ri(t) && j(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "autocorrect" ||
    (t === "sandbox" && e.tagName === "IFRAME") ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return ri(t) && ie(n) ? !1 : t in e;
}

function Yl(e, t) {
  const n = e._def.props;
  if (!n) return !1;
  const s = Ee(t);
  return Array.isArray(n)
    ? n.some((i) => Ee(i) === s)
    : Object.keys(n).some((i) => Ee(i) === s);
}
const ql = le(
  {
    patchProp: Wl,
  },
  wl
);
let oi;

function Gl() {
  return oi || (oi = el(ql));
}
const Jl = (...e) => {
  const t = Gl().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const i = Xl(s);
      if (!i) return;
      const r = t._component;
      !j(r) && !r.render && !r.template && (r.template = i.innerHTML),
        i.nodeType === 1 && (i.textContent = "");
      const o = n(i, !1, Zl(i));
      return (
        i instanceof Element &&
          (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
        o
      );
    }),
    t
  );
};

function Zl(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}

function Xl(e) {
  return ie(e) ? document.querySelector(e) : e;
}
const $n = "/logo.png",
  Ql = {
    key: 0,
    class: "boot-overlay",
    role: "status",
    "aria-live": "polite",
    "aria-label": "Loading interface",
  },
  ec = {
    id: "bridge",
    class: "command-bar",
  },
  tc = {
    class: "status-cluster",
  },
  nc = {
    class: "social-links social-links--command",
    role: "list",
    "aria-label": "Social links",
  },
  sc = ["href", "aria-label"],
  ic = ["innerHTML"],
  rc = {
    class: "sr-only",
  },
  oc = {
    class: "clock-panel",
  },
  lc = {
    class: "status-line",
    role: "list",
    "aria-label": "Project status",
  },
  cc = {
    class: "main-stage",
  },
  ac = {
    class: "hero-panel",
  },
  fc = {
    class: "hero-console",
  },
  uc = {
    class: "pulse-head",
  },
  dc = {
    class: "pulse-meter",
  },
  hc = {
    id: "signal",
    class: "telemetry-grid",
  },
  pc = {
    class: "telemetry-title",
  },
  gc = {
    class: "telemetry-value",
  },
  mc = {
    class: "telemetry-detail",
  },
  vc = {
    id: "gallery",
    class: "gallery-section",
  },
  bc = {
    class: "gallery-particles",
    "aria-hidden": "true",
  },
  yc = {
    class: "focus-media",
  },
  _c = ["src", "alt"],
  xc = {
    class: "focus-copy",
  },
  Sc = {
    class: "window-grid",
  },
  Cc = ["onMouseenter", "onFocusin"],
  wc = {
    class: "window-head",
  },
  Tc = {
    class: "window-media",
  },
  Ec = ["src", "alt"],
  Ac = {
    class: "window-copy",
  },
  Pc = {
    id: "archive",
    class: "archive-section",
  },
  Oc = {
    class: "archive-list",
  },
  Mc = {
    class: "dock-stack",
  },
  Lc = {
    class: "contract-dock",
  },
  Ic = ["aria-label", "title"],
  Fc = {
    key: 0,
    class: "copy-feedback",
    role: "status",
    "aria-live": "polite",
  },
  Rc = {
    class: "deck-dock",
    "aria-label": "Section navigation",
  },
  Nc = {
    class: "social-links social-links--dock",
    role: "list",
    "aria-label": "Social links quick access",
  },
  Dc = ["href", "aria-label"],
  jc = ["innerHTML"],
  $c = {
    class: "sr-only",
  },
  tn = "0xcomingsoon",
  Hc = {
    __name: "App",
    setup(e) {
      const t = [
          {
            label: "Network",
            value: "Ethereum",
          },
          // {
          //   label: "Launchpad",
          //   value: "Pump.fun Origin",
          // },
          {
            label: "Protocol",
            value: "Steady Face Runtime",
          },
        ],
        n = [
          {
            platform: "twitter",
            label: "Twitter", 
            url: "https://x.com/SPCX4200_x",
            iconSvg:
              '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.901 1.153h3.68l-8.039 9.188L24 22.847h-7.406l-5.8-7.584-6.634 7.584H.479l8.597-9.826L0 1.154h7.594l5.243 6.932L18.901 1.153Zm-1.29 19.494h2.038L6.486 3.24H4.298l13.313 17.407Z"/></svg>',
          },
          {
            platform: "telegram",
            label: "telegram",
            url: "https://t.me/SPCX4200",
            iconSvg:
              '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="white"><path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/></svg>',
          },
          {
            platform: "dexscreener",
            label: "dexscreener",
            url: "https://dexscreener.com/ethereum/0xcomingsoon",
            iconSvg:
              '<svg viewBox="0 0 252 300" aria-hidden="true"><path fill="currentColor" d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197"/><path fill="currentColor" d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z"/></svg>',
          },
        ],
        s = [
          {
            title: "Calm Engine",
            value: "ONLINE",
            detail: "Keeps conviction stable while timelines turn noisy.",
            accent: "yellow",
            level: 96,
          },
          {
            title: "Meme Velocity",
            value: "ELEVATED",
            detail:
              "Visual identity and lore are synchronized for rapid cultural spread.",
            accent: "gold",
            level: 89,
          },
          {
            title: "Community Sync",
            value: "LOCKED",
            detail:
              "Every scene reinforces one voice: hold posture, execute with patience.",
            accent: "cream",
            level: 93,
          },
          {
            title: "Uplink Status",
            value: "PENDING",
            detail:
              "Contract and social routes are intentionally reserved for the next update.",
            accent: "purple",
            level: 61,
          },
        ],
        i = [
          "No panic-loop messaging, no empty hype copy, no filler sections.",
          "Every image is wired into the interface as a narrative checkpoint.",
          "Color hierarchy is sampled from logo DNA to keep the brand unmistakable.",
        ],
        r = [
          {
            id: "zen-bootstrap",
            title: "Zen Bootstrap",
            subtitle:
              "The deck opens in calm mode before every high-voltage run.",
            image: "/media/yepe-meditation.png",
            zone: "hero",
            accent: "yellow",
          },
          {
            id: "chain-investigation",
            title: "Chain Investigation",
            subtitle:
              "SPACEX4200 scans market shadows and hunts for honest signal.",
            image: "/media/yepe-detective.jpg",
            zone: "scene",
            accent: "ink",
          },
          {
            id: "velocity-dive",
            title: "Velocity Dive",
            subtitle:
              "Momentum mode engages when conviction outruns hesitation.",
            image: "/media/yepe-flight.jpg",
            zone: "hero",
            accent: "gold",
          },
          {
            id: "sofa-observer",
            title: "Sofa Observer",
            subtitle: "Silent chart watching is still part of the strategy.",
            image: "/media/yepe-couch.jpg",
            zone: "scene",
            accent: "cream",
          },
          {
            id: "night-patrol",
            title: "Night Patrol",
            subtitle: "Late hours, clear roads, unchanged mission.",
            image: "/media/yepe-nightroad.jpg",
            zone: "scene",
            accent: "ink",
          },
          {
            id: "pool-warden",
            title: "Pool Warden",
            subtitle: "Liquidity watch with lifeguard-level discipline.",
            image: "/media/yepe-poolguard.jpg",
            zone: "scene",
            accent: "cream",
          },
          {
            id: "capsule-launch",
            title: "Capsule Launch",
            subtitle: "Pump.fun origin sealed into the project memory core.",
            image: "/media/yepe-capsule.jpg",
            zone: "archive",
            accent: "purple",
          },
          {
            id: "orbit-shift",
            title: "Orbit Shift",
            subtitle:
              "Perspective widens when SPACEX4200 exits gravity and noise.",
            image: "/media/yepe-spacewalk.jpg",
            zone: "hero",
            accent: "gold",
          },
          {
            id: "precision-lock",
            title: "Precision Lock",
            subtitle: "Targeting tools stay focused on clean execution.",
            image: "/media/yepe-sniper.jpg",
            zone: "scene",
            accent: "ink",
          },
          {
            id: "cash-geometry",
            title: "Cash Geometry",
            subtitle: "Flex visuals represent confidence, not chaos.",
            image: "/media/yepe-cashfan.jpg",
            zone: "scene",
            accent: "yellow",
          },
          {
            id: "bullrun-terminal",
            title: "Bullrun Terminal",
            subtitle: "Patience at the waiting area until market gates open.",
            image: "/media/yepe-bullrun.jpg",
            zone: "scene",
            accent: "cream",
          },
          {
            id: "royal-protocol",
            title: "Royal Protocol",
            subtitle: "Legacy posture, raised hand, zero overreaction.",
            image: "/media/yepe-royalwave.jpg",
            zone: "archive",
            accent: "purple",
          },
          {
            id: "lockin-rig",
            title: "Lock-In Rig",
            subtitle: "Focus station where distractions are denied at entry.",
            image: "/media/yepe-lockin.jpg",
            zone: "scene",
            accent: "ink",
          },
          {
            id: "arrival-suite",
            title: "Arrival Suite",
            subtitle: "Peak exposure handled with controlled body language.",
            image: "/media/yepe-limo.jpg",
            zone: "scene",
            accent: "gold",
          },
          {
            id: "board-dominance",
            title: "Board Dominance",
            subtitle: "One move ahead while everyone else chases noise.",
            image: "/media/yepe-chessboss.jpg",
            zone: "scene",
            accent: "purple",
          },
          {
            id: "fuel-break",
            title: "Fuel Break",
            subtitle: "Even legends recharge before the next sprint.",
            image: "/media/yepe-burger.jpg",
            zone: "scene",
            accent: "cream",
          },
          {
            id: "diamond-grin",
            title: "Diamond Grin",
            subtitle: "Conviction turns into visible armor.",
            image: "/media/yepe-diamondsmile.jpg",
            zone: "archive",
            accent: "yellow",
          },
          {
            id: "bridge-alliance",
            title: "Bridge Alliance",
            subtitle: "Meme tribes linked in one shared story frame.",
            image: "/media/yepe-friendship.jpg",
            zone: "archive",
            accent: "cream",
          },
          {
            id: "paper-to-code",
            title: "Paper to Code",
            subtitle:
              "Raw drafts are shredded into final narrative architecture.",
            image: "/media/yepe-barcode.jpg",
            zone: "archive",
            accent: "ink",
          },
        ],
        o = bt(!0),
        l = bt(r[0].id),
        a = bt(new Date()),
        d = bt(54),
        f = bt(32),
        h = bt(!1);
      let _ = null,
        T = null,
        R = null;
      const L = It(() =>
          a.value.toLocaleTimeString("en-US", {
            hour12: !1,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })
        ),
        G = It(() =>
          a.value.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        ),
        H = It(() => r.find((V) => V.id === l.value) ?? r[0]),
        $ = It(() => ({
          "--cursor-x": `${d.value}%`,
          "--cursor-y": `${f.value}%`,
        })),
        B = (V) => {
          l.value = V;
        },
        O = (V) => {
          const C = V.currentTarget.getBoundingClientRect();
          !C.width ||
            !C.height ||
            ((d.value = Math.min(
              100,
              Math.max(0, ((V.clientX - C.left) / C.width) * 100)
            )),
            (f.value = Math.min(
              100,
              Math.max(0, ((V.clientY - C.top) / C.height) * 100)
            )));
        },
        Y = async () => {
          let V = !1;
          try {
            navigator?.clipboard?.writeText &&
              (await navigator.clipboard.writeText(tn), (V = !0));
          } catch {
            V = !1;
          }
          if (!V) {
            const C = document.createElement("textarea");
            (C.value = tn),
              C.setAttribute("readonly", ""),
              (C.style.position = "absolute"),
              (C.style.opacity = "0"),
              (C.style.pointerEvents = "none"),
              document.body.appendChild(C),
              C.select(),
              C.setSelectionRange(0, tn.length),
              (V = document.execCommand("copy")),
              document.body.removeChild(C);
          }
          V &&
            ((h.value = !0),
            R && window.clearTimeout(R),
            (R = window.setTimeout(() => {
              h.value = !1;
            }, 1200)));
        };
      return (
        ds(() => {
          (_ = window.setInterval(() => {
            a.value = new Date();
          }, 1e3)),
            (T = window.setTimeout(() => {
              o.value = !1;
            }, 2200));
        }),
        hs(() => {
          _ && window.clearInterval(_),
            T && window.clearTimeout(T),
            R && window.clearTimeout(R);
        }),
        (V, C) => (
          Ce(),
          Te(
            "div",
            {
              class: "app-shell",
              style: dt($.value),
              onPointermove: O,
            },
            [
              C[18] ||
                (C[18] = g(
                  "div",
                  {
                    class: "ambient-grid",
                    "aria-hidden": "true",
                  },
                  null,
                  -1
                )),
              C[19] ||
                (C[19] = g(
                  "div",
                  {
                    class: "ambient-orbs",
                    "aria-hidden": "true",
                  },
                  null,
                  -1
                )),
              C[20] ||
                (C[20] = g(
                  "div",
                  {
                    class: "scanline-layer",
                    "aria-hidden": "true",
                  },
                  null,
                  -1
                )),
              fe(
                Ks,
                {
                  name: "boot-fade",
                },
                {
                  default: Kn(() => [
                    o.value
                      ? (Ce(),
                        Te("div", Ql, [
                          ...(C[0] ||
                            (C[0] = [
                              g(
                                "div",
                                {
                                  class: "boot-halo",
                                  "aria-hidden": "true",
                                },
                                null,
                                -1
                              ),
                              g(
                                "div",
                                {
                                  class: "boot-core",
                                  "aria-hidden": "true",
                                },
                                [
                                  g("div", {
                                    class: "boot-ring boot-ring--outer",
                                  }),
                                  g("div", {
                                    class: "boot-ring boot-ring--inner",
                                  }),
                                  g("img", {
                                    src: $n,
                                    alt: "",
                                    class: "boot-logo",
                                  }),
                                ],
                                -1
                              ),
                              g(
                                "div",
                                {
                                  class: "boot-meter",
                                  "aria-hidden": "true",
                                },
                                [g("span")],
                                -1
                              ),
                              g(
                                "div",
                                {
                                  class: "boot-dots",
                                  "aria-hidden": "true",
                                },
                                [
                                  g("span"),
                                  g("span"),
                                  g("span"),
                                  g("span"),
                                  g("span"),
                                  g("span"),
                                ],
                                -1
                              ),
                            ])),
                        ]))
                      : Hs("", !0),
                  ]),
                  _: 1,
                }
              ),
              g("header", ec, [
                C[1] ||
                  (C[1] = g(
                    "div",
                    {
                      class: "brand-pack",
                    },
                    [
                      g("img", {
                        src: $n,
                        alt: "SPACEX4200 logo",
                        class: "brand-logo",
                      }),
                      g("div", null, [
                        g(
                          "p",
                          {
                            class: "brand-overline",
                          },
                          "SPACEX4200 $SPACEX"
                        ),
                        g("h1", null, "SPACEX4200"),
                      ]),
                    ],
                    -1
                  )),
                g("div", tc, [
                  g("div", nc, [
                    (Ce(),
                    Te(
                      oe,
                      null,
                      Qe(n, (P) =>
                        g(
                          "a",
                          {
                            key: `command-${P.platform}`,
                            href: P.url,
                            class: "social-link",
                            "aria-label": P.label,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            role: "listitem",
                          },
                          [
                            g(
                              "span",
                              {
                                class: "social-link__icon",
                                innerHTML: P.iconSvg,
                                "aria-hidden": "true",
                              },
                              null,
                              8,
                              ic
                            ),
                            g("span", rc, se(P.label), 1),
                          ],
                          8,
                          sc
                        )
                      ),
                      64
                    )),
                  ]),
                  g("div", oc, [
                    g("p", null, se(G.value), 1),
                    g("strong", null, se(L.value), 1),
                  ]),
                  g("div", lc, [
                    (Ce(),
                    Te(
                      oe,
                      null,
                      Qe(t, (P) =>
                        g(
                          "span",
                          {
                            key: P.label,
                            class: "status-chip",
                            role: "listitem",
                          },
                          [
                            g("strong", null, se(P.label), 1),
                            g("em", null, se(P.value), 1),
                          ]
                        )
                      ),
                      64
                    )),
                  ]),
                ]),
              ]),
              g("main", cc, [
                g("section", ac, [
                  C[4] ||
                    (C[4] = g(
                      "div",
                      {
                        class: "hero-copy",
                      },
                      [
                        g(
                          "p",
                          {
                            class: "hero-tag",
                          },
                          "SOLANA $SPACEX CENTER"
                        ),
                        g(
                          "h2",
                          null,
                          " Mars is the limit. we are going to space together! "
                        ),
                        g(
                          "p",
                          null,
                          " SPACEX4200, with ticker $SPACEX, is based on SpaceX's pre-IPO stock, currently trading at $116, and taps into the memetic love of Asuka and the world’s answer of '42.' Built on blockchain technology, $SPACEX brings the excitement of SpaceX’s $11.9 billion funding journey across 30 rounds directly to the public, bypassing traditional investment barriers. "
                        ),
                        g(
                          "p",
                          null,
                          "With an eye on a potential $1 billion valuation, $SPACEX serves as a decentralized reflection of SpaceX’s growth, allowing enthusiasts to engage in the company’s journey through a unique, crypto-fueled lens."
                        ),
                      ],
                      -1
                    )),
                  g("aside", fc, [
                    C[2] ||
                      (C[2] = g(
                        "p",
                        {
                          class: "console-label",
                        },
                        "Live Pulse Matrix",
                        -1
                      )),
                    (Ce(),
                    Te(
                      oe,
                      null,
                      Qe(s, (P) =>
                        g(
                          "div",
                          {
                            key: P.title,
                            class: "pulse-line",
                          },
                          [
                            g("div", uc, [
                              g("span", null, se(P.title), 1),
                              g("strong", null, se(P.value), 1),
                            ]),
                            g("div", dc, [
                              g(
                                "span",
                                {
                                  style: dt({
                                    width: `${P.level}%`,
                                  }),
                                },
                                null,
                                4
                              ),
                            ]),
                          ]
                        )
                      ),
                      64
                    )),
                    C[3] ||
                      (C[3] = g(
                        "button",
                        {
                          type: "button",
                          class: "ghost-button",
                        },
                        "Uplink Pending",
                        -1
                      )),
                  ]),
                ]),
                g("section", hc, [
                  (Ce(),
                  Te(
                    oe,
                    null,
                    Qe(s, (P) =>
                      g(
                        "article",
                        {
                          key: P.title,
                          class: ht(["telemetry-card", `accent-${P.accent}`]),
                          style: dt({
                            "--panel-level": `${P.level}%`,
                          }),
                        },
                        [
                          g("p", pc, se(P.title), 1),
                          g("p", gc, se(P.value), 1),
                          g("p", mc, se(P.detail), 1),
                          C[5] ||
                            (C[5] = g(
                              "div",
                              {
                                class: "telemetry-meter",
                              },
                              [g("span")],
                              -1
                            )),
                        ],
                        6
                      )
                    ),
                    64
                  )),
                ]),
                g("section", vc, [
                  C[13] ||
                    (C[13] = g(
                      "div",
                      {
                        class: "gallery-frame",
                        "aria-hidden": "true",
                      },
                      null,
                      -1
                    )),
                  g("div", bc, [
                    (Ce(),
                    Te(
                      oe,
                      null,
                      Qe(14, (P) =>
                        g("span", {
                          key: `particle-${P}`,
                        })
                      ),
                      64
                    )),
                  ]),
                  C[14] ||
                    (C[14] = g(
                      "div",
                      {
                        class: "section-heading",
                      },
                      [
                        g("p", null, "Scene Registry"),
                        g(
                          "h3",
                          null,
                          "Twenty visual checkpoints, one unified SPACEX4200 narrative."
                        ),
                      ],
                      -1
                    )),
                  g(
                    "article",
                    {
                      class: ht(["focus-console", `accent-${H.value.accent}`]),
                    },
                    [
                      g("figure", yc, [
                        g(
                          "img",
                          {
                            src: H.value.image,
                            alt: H.value.title,
                            loading: "lazy",
                          },
                          null,
                          8,
                          _c
                        ),
                        C[6] ||
                          (C[6] = g(
                            "div",
                            {
                              class: "focus-visuals",
                              "aria-hidden": "true",
                            },
                            [
                              g("span", {
                                class: "focus-reticle",
                              }),
                              g("span", {
                                class: "focus-wave",
                              }),
                            ],
                            -1
                          )),
                      ]),
                      g("div", xc, [
                        g("p", null, "Focus Window // " + se(H.value.id), 1),
                        g("h4", null, se(H.value.title), 1),
                        g(
                          "span",
                          null,
                          se(H.value.zone.toUpperCase()) + " MODE",
                          1
                        ),
                        g("p", null, se(H.value.subtitle), 1),
                      ]),
                    ],
                    2
                  ),
                  g("div", Sc, [
                    (Ce(),
                    Te(
                      oe,
                      null,
                      Qe(r, (P, D) =>
                        g(
                          "article",
                          {
                            key: P.id,
                            class: ht([
                              "window-card",
                              [
                                `accent-${P.accent}`,
                                P.id === "fogline-map"
                                  ? "window-card--panorama"
                                  : "",
                                l.value === P.id ? "is-active" : "",
                              ],
                            ]),
                            style: dt({
                              "--card-index": D,
                            }),
                            tabindex: "0",
                            onMouseenter: (K) => B(P.id),
                            onFocusin: (K) => B(P.id),
                          },
                          [
                            g("div", wc, [
                              C[7] || (C[7] = g("span", null, null, -1)),
                              C[8] || (C[8] = g("span", null, null, -1)),
                              C[9] || (C[9] = g("span", null, null, -1)),
                              g(
                                "p",
                                null,
                                se(P.zone.toUpperCase()) + " // " + se(P.id),
                                1
                              ),
                            ]),
                            g("figure", Tc, [
                              g(
                                "img",
                                {
                                  src: P.image,
                                  alt: P.title,
                                  loading: "lazy",
                                },
                                null,
                                8,
                                Ec
                              ),
                              C[10] ||
                                (C[10] = g(
                                  "div",
                                  {
                                    class: "media-overlay media-overlay--scan",
                                    "aria-hidden": "true",
                                  },
                                  null,
                                  -1
                                )),
                              C[11] ||
                                (C[11] = g(
                                  "div",
                                  {
                                    class:
                                      "media-overlay media-overlay--corners",
                                    "aria-hidden": "true",
                                  },
                                  null,
                                  -1
                                )),
                              C[12] ||
                                (C[12] = g(
                                  "div",
                                  {
                                    class:
                                      "media-overlay media-overlay--reticle",
                                    "aria-hidden": "true",
                                  },
                                  null,
                                  -1
                                )),
                            ]),
                            g("div", Ac, [
                              g("h4", null, se(P.title), 1),
                              g("p", null, se(P.subtitle), 1),
                            ]),
                          ],
                          46,
                          Cc
                        )
                      ),
                      64
                    )),
                  ]),
                ]),
                g("section", Pc, [
                  C[16] ||
                    (C[16] = g(
                      "article",
                      {
                        class: "archive-core",
                      },
                      [
                        g("img", {
                          src: $n,
                          alt: "SPACEX4200 emblem",
                          class: "archive-logo",
                        }),
                        g("div", null, [
                          g(
                            "p",
                            {
                              class: "archive-tag",
                            },
                            "Narrative Kernel"
                          ),
                          g(
                            "h3",
                            null,
                            "The brand speaks in one voice across every panel."
                          ),
                          g(
                            "p",
                            null,
                            " SPACEX4200 does not chase generic crypto templates. Every block, caption, and texture here is tuned to one identity: calm expression, high signal, memorable meme energy. "
                          ),
                        ]),
                      ],
                      -1
                    )),
                  g("article", Oc, [
                    C[15] ||
                      (C[15] = g(
                        "p",
                        {
                          class: "archive-tag",
                        },
                        "Build Notes",
                        -1
                      )),
                    g("ul", null, [
                      (Ce(),
                      Te(
                        oe,
                        null,
                        Qe(i, (P) =>
                          g(
                            "li",
                            {
                              key: P,
                            },
                            se(P),
                            1
                          )
                        ),
                        64
                      )),
                    ]),
                  ]),
                ]),
              ]),
              g("div", Mc, [
                g("div", Lc, [
                  g(
                    "button",
                    {
                      type: "button",
                      class: ht([
                        "contract-copy",
                        {
                          "is-copied": h.value,
                        },
                      ]),
                      "aria-label": h.value
                        ? "Contract copied"
                        : "Copy contract address",
                      title: h.value ? "Copied" : "Click to copy",
                      onClick: Y,
                    },
                    se(tn),
                    10,
                    Ic
                  ),
                  fe(
                    Ks,
                    {
                      name: "copy-flash",
                    },
                    {
                      default: Kn(() => [
                        h.value ? (Ce(), Te("div", Fc, "COPIED")) : Hs("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                g("nav", Rc, [
                  C[17] ||
                    (C[17] = fl(
                      '<div class="dock-links"><a href="#bridge"><span></span>Bridge</a><a href="#signal"><span></span>Signal</a><a href="#gallery"><span></span>Scenes</a><a href="#archive"><span></span>Archive</a></div>',
                      1
                    )),
                  g("div", Nc, [
                    (Ce(),
                    Te(
                      oe,
                      null,
                      Qe(n, (P) =>
                        g(
                          "a",
                          {
                            key: `dock-${P.platform}`,
                            href: P.url,
                            class: "social-link social-link--dock",
                            "aria-label": P.label,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            role: "listitem",
                          },
                          [
                            g(
                              "span",
                              {
                                class: "social-link__icon",
                                innerHTML: P.iconSvg,
                                "aria-hidden": "true",
                              },
                              null,
                              8,
                              jc
                            ),
                            g("span", $c, se(P.label), 1),
                          ],
                          8,
                          Dc
                        )
                      ),
                      64
                    )),
                  ]),
                ]),
              ]),
            ],
            36
          )
        )
      );
    },
  };
Jl(Hc).mount("#app");
