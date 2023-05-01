const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('Scooter', () => {
  const scooter = new Scooter("1")
  const user = new User ("phuff110", "password", 19)

  it("should create an instance of Scooter", ()=>{
    expect(scooter).toBeInstanceOf(Scooter)
  })
    // edit this to be a real test!
    it("should set values to username, password, and age", ()=>{

    expect(scooter.station).toBe("1");
    expect(user.username).toBe("phuff110")
    expect(scooter.serial).toBe(null)
    expect(scooter.isBroken).toBe(false)
  }
)
})



