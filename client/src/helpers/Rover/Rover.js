/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Rover | Timed Fetches
 ******************************************/
class Rover {
  request = (url, options, timeout = 5000) => {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeout))
    ])
  }

  post = (url, data) =>
    this.request(url, {
      method: 'POST', // POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })

  userSignUp = async data => {
    const { REACT_APP_USER_SIGN_UP: url } = process.env
    const request = await this.post(url, { user: data })
    const response = await request.json()
    return response.error
      ? window.notification.show('red', response.error.message)
      : window.notification.show('green', response.payload.message)
  }

  userLogin = async (data, history) => {
    const { REACT_APP_USER_LOG_IN: url } = process.env
    const request = await this.post(url, { user: data })
    const response = await request.json()
    return response.error
      ? window.notification.show('red', response.error.message)
      : history.push(response.payload.redirect)
  }
}

export const { userSignUp, userLogin } = new Rover()
