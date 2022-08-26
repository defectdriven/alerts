import React from 'react'

export default React.createContext({
  alerts: [
    {id: 1, title: 'Alert One', link: 'http://whois.com'},
    {id: 2, title: 'Alert Two', link: 'http://whoitis.com'},
  ],
  addAlert: alert => {},
  removeAlert: alertId => {}
})