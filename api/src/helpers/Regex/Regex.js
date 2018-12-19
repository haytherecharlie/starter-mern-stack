/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Regex | String Validation
 ******************************************/

class Regex {
  constructor() {
    this.regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&;:]{8,}$/
    this.regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  }

  validatePassword = password => {
    return this.regexPassword.test(password)
  }

  validateEmail = email => {
    return this.regexEmail.test(email)
  }
}

export const { validatePassword, validateEmail } = new Regex()
