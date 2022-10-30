let person = {
    name: '小鱼',
    get aliasName() {
        return '**' + this.name + '**'
    }
}

// 创建一个proxy
const proxy = new Proxy(person, {
    /**
     * 当我取值时，调用该方法
     * @param target 去哪里取，指该对象
     * @param key 取什么属性
     * @param receiver 指的就是当前代理对象 proxy
     * @returns 对象上对应的属性
     */
    get(target, key, receiver) {
        console.log("调用get方法");
        return Reflect.get(target, key, receiver)
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
        console.log("调用set方法");
        return Reflect.set(target, key, value, receiver)
    }
})

console.log(person.name, person.aliasName);
proxy.name = 'ddd';
console.log(person.name, person.aliasName);
