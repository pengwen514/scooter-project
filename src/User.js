class User {
  constructor(username, password, age){
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
    this.passwords = ["password"]
  }

  login(password){
    if(this.passwords[0]===this.password){
      return this.loggedIn = true
    }
    else{
      return false;
    }
  }

  logout(){
    
  }
}

module.exports = User
