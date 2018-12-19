/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * LogIn | Log In User
 ******************************************/

import jsonwebtoken from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { jsonRes, errorRes } from '../../../helpers/Response/Response'
import { getDbEntry } from '../../../helpers/Firestore/Firestore'
import { validateEmail, validatePassword } from '../../../helpers/Regex/Regex'

class UserLogin {
  POST = async (req, res) => {
    const {
      user: { email, password }
    } = req.body
    const { USERS_COLLECTION } = process.env
    try {
      if (validateEmail(email) && validatePassword(password)) {
        const databaseUser = await getDbEntry(USERS_COLLECTION, email)
        return (await bcrypt.compare(password, databaseUser.password))
          ? jsonRes({
              res,
              status: 200,
              payload: {
                message: 'Login Successful',
                redirect: '/profile',
                user: this.parseUser(databaseUser)
              }
            })
          : errorRes({ res, status: 400, error: { message: 'Email or password incorrect' } })
      }
      throw Error('Email or password incorrect')
    } catch (err) {
      return errorRes({ res, status: 400, error: { message: err.message } })
    }
  }

  parseUser = user => {
    const { JWT_SECRET, JWT_EXPIRES } = process.env
    const jwt = jsonwebtoken.sign({ email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES })
    return {
      fullName: user.fullName,
      email: user.email,
      jwt
    }
  }
}

export const { POST } = new UserLogin()
