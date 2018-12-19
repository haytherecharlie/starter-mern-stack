/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Edit | Edit User Account
 ******************************************/

import bcrypt from 'bcrypt'
import { jsonRes, errorRes } from '../../../helpers/Response/Response'
import { getDbEntry, setDbEntry } from '../../../helpers/Firestore/Firestore'
import { validateEmail, validatePassword } from '../../../helpers/Regex/Regex'

class UserEdit {
  PUT = async (req, res) => {
    const {
      user,
      user: { email, password }
    } = req.body
    const { USERS_COLLECTION } = process.env
    try {
      if (validateEmail(email) && validatePassword(password)) {
        const databaseUser = await getDbEntry(USERS_COLLECTION, email)
        if (typeof databaseUser !== 'undefined') {
          user.password = await this.encryptPassword(password)
          await setDbEntry(USERS_COLLECTION, email, user)
          return jsonRes({ res, status: 200, payload: { message: 'User saved successfully' } })
        }
        return errorRes({ res, status: 402, error: { message: 'User does not exist' } })
      }
      throw Error('Error 104: Unknown error. Please try again.')
    } catch (err) {
      return errorRes({ res, status: 400, error: err.message })
    }
  }

  encryptPassword = async password => {
    const encryptedPassword = await bcrypt.hash(password, 10)
    return encryptedPassword
  }
}

export const { PUT } = new UserEdit()
