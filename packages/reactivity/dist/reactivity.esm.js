// packages/reactivity/src/effect.ts
function effect() {
}

// packages/shared/src/index.ts
function isObject(value) {
  return value !== null && typeof value === "object";
}

// packages/reactivity/src/reactive.ts
var ReactiveFlags = /* @__PURE__ */ ((ReactiveFlags2) => {
  ReactiveFlags2["IS_REACTIVE"] = "__v_isReactive";
  return ReactiveFlags2;
})(ReactiveFlags || {});
var mutableHandlers = {
  get(target, key, receiver) {
    if ("__v_isReactive" /* IS_REACTIVE */ == key) {
      return true;
    }
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    return Reflect.set(target, key, value, receiver);
  }
};
var reactiveMap = /* @__PURE__ */ new WeakMap();
function reactive(target) {
  if (!isObject(target)) {
    return target;
  }
  if (target["__v_isReactive" /* IS_REACTIVE */]) {
    return target;
  }
  const existsProxy = reactiveMap.get(target);
  if (existsProxy) {
    return existsProxy;
  }
  const proxy = new Proxy(target, mutableHandlers);
  reactiveMap.set(target, proxy);
  return proxy;
}
export {
  ReactiveFlags,
  effect,
  reactive
};
//# sourceMappingURL=reactivity.esm.js.map
