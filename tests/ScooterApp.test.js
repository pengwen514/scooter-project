const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')
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

// ScooterApp tests here

// register user

// log in

// log out

// rent scooter

// dock scooter
