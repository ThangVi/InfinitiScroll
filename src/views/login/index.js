import React, { useEffect, useState } from 'react'

import useLogin from '../../state/auth/hooks/useLogin'

import Container from './containers/container'
import Background from './containers/background'
import Form from './containers/form'
import Spinner from '../../components/spinner'

const Login = (props) => {
  const { from } = props.location.state || {from: {pathname: "/"}};
  const [auth, setLogin, isLoading] = useLogin();
  const [usernameValue, setUsernameValue] = useState(false)
  const [passwordValue, setPasswordValue] = useState(false)

  useEffect(() => {
    if (auth.logged) {
      props.history.push(from);
    }
  }, [auth]);

  const checkValues = ({values, actions}) => {
    if(values.username.length > 0 && values.password.length > 0) {
      setLogin({values, actions})
    } else if(values.username.length <= 0 && values.password.length > 0) {
      setUsernameValue(true)
    } else if (values.username.length > 0 && values.password.length <= 0) {
      setPasswordValue(true)
    } else {
      setUsernameValue(true)
      setPasswordValue(true)
    }
  }

  return (
    <Container>
      <Background>
        <Spinner show={isLoading} />
        <Form onSubmit={(values, actions) => checkValues({values, actions})} usernameValue={usernameValue} passwordValue={passwordValue}/>
      </Background>
    </Container>
  )
};

export default Login
