/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Profile | User Profile
 ******************************************/
import { jsonRes, errorRes } from '../../../utils/response'
import { getDbEntry } from '../../../utils/firestore'

class UserProfile {
  GET = async (req, res) => {
    const { email } = req.params
    const { USERS_COLLECTION } = process.env
    try {
      const dbUser = await getDbEntry(USERS_COLLECTION, email)
      return typeof dbUser !== 'undefined'
        ? jsonRes({ res, status: 200, payload: dbUser })
        : errorRes({ res, status: 400, error: { message: 'Cannot get profile.' } })
    } catch (err) {
      errorRes({ res, status: 400, error: { message: err.message } })
    }
  }
}

export const { GET } = new UserProfile()
