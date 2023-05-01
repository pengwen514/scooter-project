const User = require('../src/User')

// User tests here
describe("User", () => {
    const user = new User("phuff110", "password", 19)

    it("should create an instance of User", ()=>{
        expect(user).toBeInstanceOf(User);
    })

// test username, password, age
it("should set values to username, password and age", ()=>{

    expect(user.username).toBe("phuff110")
    expect(user.password).toBe("password")
    expect(user.age).toBe(19)
})
// test login
it("should test if the user logged in", ()=>{
    expect(user.loggedIn).toBe(true);
})
// test logout
it("should test if the user logged out", ()=>{
    expect(user.loggedIn).toBe(false);
})
})