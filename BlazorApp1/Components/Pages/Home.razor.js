import tool from '/test-tool.js'

export function logToConsoleHi(instance) {
    instance.invokeMethodAsync('PrintText', tool.hi);
}
