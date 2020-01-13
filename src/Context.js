import React, { createContext, useReducer } from 'react'

let reducer = (state, action) => {
  switch (action.type) {
    case "updateData":
      const { pinky, ring, middle, index, thumb, x, y, z} = state.data
      pinky.push(action.payload.pinky)
      ring.push(action.payload.ring)
      middle.push(action.payload.middle)
      index.push(action.payload.index)
      thumb.push(action.payload.thumb)
      x.push(action.payload.x)
      y.push(action.payload.y)
      z.push(action.payload.z)

      const data = { pinky, ring, middle, index, thumb, x, y, z }
      return { ...state, data }
    default:
      return
  }
}

const initialState = {
  loading: true,
  data: {
    pinky: [],
    ring: [],
    middle: [],
    index: [],
    thumb: [],
    x: [],
    y: [],
    z: []
  },
}

const StateContext = createContext(initialState)

const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StateContext.Provider>
  )
}

export { StateContext, StateProvider }