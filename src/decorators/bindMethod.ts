import {bindThisForFunction} from "./bind";

function bindMethod(method: string): MethodDecorator {
    return function<T>(
            target: any,
            propertyKey: string,
            descriptor: TypedPropertyDescriptor<T>
    ): TypedPropertyDescriptor<T> | void {
        return {
            configurable: true,
            get(this: any): T {
                const bound = bindThisForFunction(target[method], this);
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

export default bindMethod;