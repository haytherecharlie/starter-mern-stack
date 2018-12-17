/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Redux | Global State
/******************************************/

import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

class Redux {
  constructor() {
    this.state = this.initialState()
  }

  initialState = () => ({
    value: 'wow!'
  })

  types = {
    ACTION: 'ACTION'
  }

  action = status => ({
    type: this.types.ACTION,
    status
  })

  reducers = (state = this.state, action) => {
    switch (action.type) {
      case this.types.ACTION:
        return { ...state }
      default:
        return state
    }
  }
}

const { reducers, state } = new Redux()
export const store = createStore(reducers, state, composeWithDevTools())
