import React, {useContext} from 'react'
import AlertContext from './context/alert-context'
import { Alert } from '@mui/material'
import { Stack } from '@mui/system'

const AlertManager = props => {
  const context = useContext(AlertContext)
  return (
    <div className='header'>
      <h2>Alert Manager Dashboard</h2>
      <Stack sx={{ width: '50%' }} spacing={2}>
        {context.alerts && context.alerts.map((alert) => {
          return (
            <Alert severity={alert.alertType} id={alert.id} key={alert.id}>{alert.alertTitle}</Alert>
          )
        })}
      </Stack>
    </div>
  )
}
export default AlertManager