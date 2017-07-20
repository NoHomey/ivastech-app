function bindAllArgumentsExceptOneOfFunction(fn: Function, instance: any, args: any[]): Function {
    return function(arg: any) {
        args.push(arg);
        fn.apply(instance, args);
        args.pop();
    }
}

function bindAllArgumentsExceptOneOf(method: string, args: any[] = []): MethodDecorator {
    return function<T>(
            target: any,
            propertyKey: string,
            descriptor: TypedPropertyDescriptor<T>
    ): TypedPropertyDescriptor<T> | void {
        return {
            configurable: true,
            get(this: any): T {
                const bound = bindAllArgumentsExceptOneOfFunction(target[method], this, args);
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

export {bindAllArgumentsExceptOneOfFunction}

export default bindAllArgumentsExceptOneOf;