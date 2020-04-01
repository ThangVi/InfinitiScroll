import React, {useEffect} from 'react'
import {Route, Redirect} from 'react-router-dom'

import { useStateValue } from '../../state'

const PrivateRoute = ({component: Component, location, ...rest}) => {
  const [{auth}] = useStateValue()

  const user = JSON.parse(localStorage.getItem('user'))
  
  useEffect(() => {
    if(user) {
      auth.logged = true
    } else {
      auth.logged = false
    }
  }, [auth])
    
    return (
      <Route {...rest}
       render={props => (
          auth.logged && location.pathname != "/login" ?
            <Component {...props} />
           :
            <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
       )}
    />
    )
};

export default PrivateRoute