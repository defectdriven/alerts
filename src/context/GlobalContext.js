import React, {useReducer} from 'react'

import AlertContext from './alert-context'
import {alertReducer, ADD_ALERT, REMOVE_ALERT} from './reducers'

const GlobalContext = props => {
  const alerts = []
  const [alertState, dispatch] = useReducer(alertReducer, {alerts: alerts})

  const addAlert = alert => {
    setTimeout(() => {
      dispatch({type: ADD_ALERT, alert: alert})
    })
    let timeOut = alert.alertTimeLimit ? alert.alertTimeLimit * 1000 : 30000
    setTimeout(() => {
      dispatch({type: REMOVE_ALERT, alertId: alert.alertId})
    },
    timeOut)
  }
  const removeAlert = id => {
    setTimeout(() => {
      dispatch({type: REMOVE_ALERT, alertId: id})
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