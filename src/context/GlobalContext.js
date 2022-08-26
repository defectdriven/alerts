import React, {useState, useReducer} from 'react'

import AlertContext from './alert-context'
import {alertReducer, ADD_ALERT, REMOVE_ALERT} from './reducers'

const GlobalContext = props => {
  const alerts = [{id: 1, alertTitle: 'This is a title'}]
  const [alertState, dispatch] = useReducer(alertReducer, {alerts: alerts})

  const addAlert = alert => {
    setTimeout(() => {
      dispatch({type: ADD_ALERT, alert: alert})
    })
    let timeOut = alert.timeLimit ? alert.timeLimit : 30000
    setTimeout(() => {
      dispatch({type: REMOVE_ALERT, id: alert.id})
    },
    timeOut)
  }
  const removeAlert = id => {
    setTimeout(() => {
      dispatch(id)
    })
  }
  return (
    <AlertContext.Provider
      value={({
        alerts: alertState.alerts,
        addAlert: addAlert,
        removeAlert: removeAlert
      })}
    >
      {props.children}
    </AlertContext.Provider>
  )
}
export default GlobalContext