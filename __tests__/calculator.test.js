import { add, divide } from "../src/calculator"

describe('add', () => {
    it('adds two positive numbers', () => {
        expect(add(2,3)).toBe(5)
    })
    it("adds negative numbers", () => {
        expect(add(-2, -3)).toBe(-5)
    })
    it("throws when inputs are not numbers", () => {
        expect(() => add('2', 3)).toThrow("add expects two numbers")
    })
})

describe('divide', () => {
    it("divides positive numbers", () => {
        expect(divide(2, 1)).toBe(2)
    })
    it("throws when input a is not a number", () => {
        expect(() => divide('2', 1)).toThrow("Both arguments must be numbers")
    })
    it("throws when input b is not a number", () => {
        expect(() => divide(2, '1')).toThrow("Both arguments must be numbers")
    })
    it("throws when inputs are NaN", () => {
        expect(() => divide(NaN, 1)).toThrow("Arguments cannot be NaN")
    })
    it("throws when divided by zero", () => {
        expect(() => divide(2, 0)).toThrow("Division by zero is not allowed")
    })
})