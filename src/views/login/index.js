import React, { useEffect } from 'react'

import useLogin from '../../state/auth/hooks/useLogin'

import Container from './containers/container'
import Background from './containers/background'
import Form from './containers/form'
import Spinner from '../../components/spinner'

const Login = (props) => {
  const { from } = props.location.state || {from: {pathname: "/"}};
  const [auth, setLogin, isLoading] = useLogin();

  useEffect(() => {
    if (auth.logged) {
      props.history.push(from);
    }
  }, [auth]);

  return (
    <Container>
      <Background>
        <Spinner show={isLoading} />
        <Form onSubmit={(values, actions) => setLogin({values, actions})} />
      </Background>
    </Container>
  )
};

export default Login
