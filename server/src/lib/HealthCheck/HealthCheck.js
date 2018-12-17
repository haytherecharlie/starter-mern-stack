/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * HealthCheck | Ensure Availablility
 ******************************************/

import { statusRes } from '../../utils/response'

class HealthCheck {
  GET(req, res) {
    return statusRes({ res, status: 200 })
  }
}

export const { GET } = new HealthCheck()
