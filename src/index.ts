type InputObj = {
    [index: string]: unknown
}
export function toPaths(input: unknown) {
    const paths: string[] = [];
    if(input instanceof Object) {
        Object.keys(input).forEach((key) => addPaths(input as InputObj, key, "", paths))
    }
    return paths;
}
const addPaths  = (obj: InputObj, key: string, acc: string, paths: string[]) => {
    const value = obj[key];
    if(value instanceof Object) {
        Object.keys(value).forEach((entryKey) => {
            addPaths(value as InputObj, entryKey, acc ? `${acc}.${key}`: key, paths)
        })
    } else {
        paths.push(acc ? `${acc}.${key}=${value}`: `${key}=${value}`)
    }
}
