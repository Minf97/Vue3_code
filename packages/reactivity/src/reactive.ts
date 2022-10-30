import { isObject } from "@vue/shared";

export const enum ReactiveFlags {
    IS_REACTIVE = "__v_isReactive",
}

// 将处理方法抽象出来
const mutableHandlers = {
    get(target, key, receiver) {
        if (ReactiveFlags.IS_REACTIVE == key) {
            return true;
        }
        return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
        return Reflect.set(target, key, value, receiver)
    },
}

const reactiveMap = new WeakMap();  // key只能是对象
export function reactive(target) {
    // 非对象不处理
    if (!isObject(target)) {
        return target;
    }

    // 此时如果有 get 会走 get函数
    if (target[ReactiveFlags.IS_REACTIVE]) {
        return target
    }
    
    // 已代理的对象直接返回
    const existsProxy = reactiveMap.get(target);
    if (existsProxy) {
        return existsProxy;
    }

    // 代理，   通过代理对象操作属性，会去源对象上进行获取
    const proxy = new Proxy(target, mutableHandlers);

    reactiveMap.set(target, proxy);
    return proxy
}