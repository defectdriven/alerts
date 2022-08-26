import React, {useContext} from 'react'
import AlertContext from './context/alert-context'


export function AlertExample () {
  const context = useContext(AlertContext)
  return (
    <div>
      <form id='managerForm' className='managerForm'>
        <label htmlFor='alertTitle'>Alert Title:</label>
        <input type='text' id='alertTitle' name='alertTitle' />
        <label htmlFor='alertType'>Alert Type:</label>
        <select id='alertType'>
          <option value='error'>Error</option>
          <option value='warning'>Warning</option>
          <option value='info'>Info</option>
          <option value='success'>Success</option>
        </select>
        <label htmlFor='alertId'>Alert Id:</label>
        <input type='text' id='alertId' name='alertId' />
        <label htmlFor='alertText'>Alert Text:</label>
        <input type='text' id='alertText' name='alertText' />
        <label htmlFor='alertLink'>Alert Link:</label>
        <input type='text' id='alertLink' name='alertLink' />
        <label htmlFor='alertTimeLimit'>Alert Time Limit:</label>
        <input type='text' id='alertTimeLimit' name='alertTimeLimit' defaultValue='10' />
      </form>
      {/*<form className='container'>*/}
      {/*  <label htmlFor='alertId'>Alert Id to Remove:</label>*/}
      {/*  <input type='text' id='alertId' name='alertId' />*/}
      {/*  <button onClick={() => RemoveAlert(context)}>Remove Alert</button>*/}
      {/*</form>*/}
      <button onClick={() => AddAlert(context)}>Add Alert</button>
      <button onClick={() => RemoveAlert(context)}>Remove Alert with Id</button>
    </div>
  )
}

async function AddAlert(context) {
  let formValues = document.getElementById('managerForm')
  let alert = {
    alertTitle: formValues.elements['alertTitle'].value ? formValues.elements['alertTitle'].value : '',
    alertType: formValues.elements['alertType'].value ? formValues.elements['alertType'].value : '',
    alertId: formValues.elements['alertId'].value ? formValues.elements['alertId'].value : '',
    alertText: formValues.elements['alertText'].value ? formValues.elements['alertText'].value : '',
    alertLink: formValues.elements['alertLink'].value ? formValues.elements['alertLink'].value : '',
    alertTimeLimit: formValues.elements['alertTimeLimit'].value ? formValues.elements['alertTimeLimit'].value : '',
  }
  context.addAlert(alert)
}

async function RemoveAlert(context) {
  let formValues = document.getElementById('managerForm')
  let alertId = formValues.elements['alertId'].value
  context.removeAlert(alertId)
}