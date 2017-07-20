function bindThisForFunction(fn: Function, instance: any): Function {
    return function() {
        fn.call(instance);
    }
}

function bind<T extends Function>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void {
    return {
        configurable: true,
        get(this: T): T {
            const bound: T = bindThisForFunction(descriptor.value!, this) as T;
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: false,
                writable: false
            });
            return bound;
        }
    };
}

export {bindThisForFunction};

export default bind;