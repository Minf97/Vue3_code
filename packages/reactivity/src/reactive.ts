import { isObject } from "@vue/shared";
import { mutableHandlers } from "./baseHandler";

export const enum ReactiveFlags {
    IS_REACTIVE = "__v_isReactive",
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
    
    // 缓存，防止多次代理
    const existsProxy = reactiveMap.get(target);
    if (existsProxy) {
        return existsProxy;
    }

    // 代理，   通过代理对象操作属性，会去源对象上进行获取
    const proxy = new Proxy(target, mutableHandlers);

    reactiveMap.set(target, proxy);
    return proxy
}