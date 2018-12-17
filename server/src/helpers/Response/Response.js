/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Response | Configured HTTP Responses
 ******************************************/

class Response {
  statusRes(obj) {
    const { res, status } = obj
    return res.status(status).end()
  }

  jsonRes(obj) {
    const { res, status, payload } = obj
    return res.status(status).json({ payload })
  }

  errorRes(obj) {
    const { res, status, error } = obj
    return res.status(status).json({ error })
  }
}

export const { statusRes, jsonRes, errorRes } = new Response()
