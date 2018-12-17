/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Index | Express Application
 ******************************************/

import express, { Router } from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import parser from 'body-parser'
import * as HealthCheck from './lib/HealthCheck/HealthCheck'
import * as UserLogIn from './lib/User/Login/Login'
import * as UserSignUp from './lib/User/SignUp/SignUp'
import * as UserProfile from './lib/User/Profile/Profile'
import * as UserEdit from './lib/User/Edit/Edit'

class Server {
  constructor() {
    config()
    this.app = express()
    this.port = process.env.PORT || 8080
    this.routes = Router()
    this.configureRoutes()
    this.configureApp()
    this.startServer()
  }

  configureRoutes = () => {
    this.routes.get('/', HealthCheck.GET) // Health Check
    this.routes.post('/user/log-in', UserLogIn.POST) // User Log In
    this.routes.post('/user/sign-up', UserSignUp.POST) // User Sign Up
    this.routes.get('/user/profile/:email', UserProfile.GET) // User Profile
    this.routes.put('/user/edit', UserEdit.PUT) // User Edit
  }

  configureApp() {
    this.app.use(cors())
    this.app.use(parser.json({ type: 'application/json' }))
    this.app.use(morgan('dev'))
    this.app.use(this.routes)
  }

  startServer() {
    this.app.listen(this.port, () => console.log(`Server started on port: ${this.port}`))
  }
}

export default new Server()
