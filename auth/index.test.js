const index = require("./index")
// @ponicode
describe("index.signToken", () => {
    test("0", () => {
        let callFunction = () => {
            index.signToken("user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.signToken("username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.signToken("user-name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.signToken("user name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.signToken(123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.signToken(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
