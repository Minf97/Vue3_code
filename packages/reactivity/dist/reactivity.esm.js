// packages/reactivity/src/effect.ts
function effect() {
}

// packages/shared/src/index.ts
function isObject(value) {
  return value !== null && typeof value === "object";
}

// packages/reactivity/src/reactive.ts
function reactive(target) {
  if (!isObject(target)) {
    return target;
  }
  const proxy = new Proxy(target, {
    get(target2, key, receiver) {
      return target2[key];
    },
    set(target2, key, value, receiver) {
      target2[key] = value;
      return true;
    }
  });
  return proxy;
}
export {
  effect,
  reactive
};
//# sourceMappingURL=reactivity.esm.js.map
