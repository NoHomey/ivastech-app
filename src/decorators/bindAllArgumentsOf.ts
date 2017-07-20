function bindAllArgumentsOfFunction(fn: Function, instance: any, args: any[]): Function {
    return function() {
        fn.apply(instance, args);
    }
}

function bindAllArgumentsOf(method: string, args: any[]): MethodDecorator {
    return function<T>(
            target: any,
            propertyKey: string,
            descriptor: TypedPropertyDescriptor<T>
    ): TypedPropertyDescriptor<T> | void {
        return {
            configurable: true,
            get(this: any): T {
                const bound = bindAllArgumentsOfFunction(target[method], this, args);
                Object.defineProperty(this, propertyKey, {
                    configurable: false,
                    writable: false,
                    value: bound
                });
                return bound as any as T;
            }
        };
    };
}

export {bindAllArgumentsOfFunction};

export default bindAllArgumentsOf;