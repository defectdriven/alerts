export const ADD_ALERT = 'ADD_ALERT'
export const REMOVE_ALERT = 'REMOVE_ALERT'

const addAlert = (alert, state) => {
  let updatedAlerts = [...state.alerts]
  if (!alert.alertId || alert.alertId === '') {
    alert.alertId = updatedAlerts.length + 1
  }
  updatedAlerts.push(alert)
  return {...state, alerts: updatedAlerts}
}

const removeAlert = (id, state) => {
  let updatedAlerts = [...state.alerts]
  updatedAlerts = updatedAlerts.filter((alert) => alert.alertId !== id)
  return {...state, alerts: updatedAlerts}
}

export const alertReducer = (state, action) => {
  switch(action.type) {
    case ADD_ALERT:
      return addAlert(action.alert, state)
    case REMOVE_ALERT:
      return removeAlert(action.alertId, state)
    default:
      return state
  }
}