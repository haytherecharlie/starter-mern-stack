/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * SignUp | Register User.
 ******************************************/
import bcrypt from 'bcrypt'
import { jsonRes, errorRes } from '../../../utils/response'
import { getDbEntry, setDbEntry } from '../../../utils/firestore'
import { validateEmail, validatePassword } from '../../../utils/regex'

class UserSignUp {
  POST = async (req, res) => {
    const {
      user,
      user: { email, password }
    } = req.body
    const { USERS_COLLECTION } = process.env
    try {
      if (validateEmail(email) && validatePassword(password)) {
        const databaseUser = await getDbEntry(USERS_COLLECTION, email)
        if (typeof databaseUser === 'undefined') {
          user.password = await this.encryptPassword(password)
          await setDbEntry(USERS_COLLECTION, email, user)
          return jsonRes({ res, status: 200, payload: { message: 'User registered successfully' } })
        }
        return errorRes({
          res,
          status: 400,
          error: { message: 'Email already registered, please log in' }
        })
      }
      throw Error('Invalid Email or Password')
    } catch (err) {
      return errorRes({ res, status: 400, error: { message: err.message } })
    }
  }

  encryptPassword = async password => {
    const encryptedPassword = await bcrypt.hash(password, 10)
    return encryptedPassword
  }
}

export const { POST } = new UserSignUp()
