import React, {useContext} from 'react'
import {StateContext} from '../../Context'

export default () => {
  const { dispatch, state } = useContext(StateContext)

  return (
    <div>
      {console.log(state.data)}
    </div>
  )
}
