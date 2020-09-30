import {toPaths} from "./index";

describe("function to extract paths from object", () => {
    it("should return correct paths array", () => {
        expect(
            toPaths({})
        ).toStrictEqual([])

        expect(
            toPaths({ a: 1 })
        ).toStrictEqual(["a=1"])

        expect(
            toPaths({ a: 1, b: {c: 2} })
        ).toStrictEqual(["a=1", "b.c=2"])

        expect(
            toPaths({ a: 1, b: {c: 2, d: {e: 3}} })
        ).toStrictEqual(["a=1", "b.c=2", "b.d.e=3"])
    })

    it("should handle malformed input", () => {
        expect(
            toPaths(null)
        ).toStrictEqual([])

        expect(
            toPaths(undefined)
        ).toStrictEqual([])

        expect(
            toPaths( function(){})
        ).toStrictEqual([])

        expect(
            toPaths(Symbol(1))
        ).toStrictEqual([])
    })
})