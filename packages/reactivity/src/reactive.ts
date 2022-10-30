import { isObject } from "@vue/shared";


export function reactive(target) {
    // 非对象不处理
    if (!isObject(target)) {
        return target;
    }

    // 代理，   通过代理对象操作属性，会去源对象上进行获取
    const proxy = new Proxy(target, {
        /**
         * 当我取值时，调用该方法
         * @param target 去哪里取，指该对象
         * @param key 取什么属性
         * @param receiver 指的就是当前代理对象 proxy
         * @returns 对象上对应的属性
         */
        get(target, key, receiver) { 
            return target[key];
        },
        /**
         * 当我赋值时，调用该方法
         * @param target 该对象
         * @param key 属性
         * @param value 要赋值的内容
         * @param receiver 当前代理对象 proxy
         * @returns true
         */
        set(target, key, value, receiver) {
            target[key] = value
            return true
        },
    });

    return proxy
}