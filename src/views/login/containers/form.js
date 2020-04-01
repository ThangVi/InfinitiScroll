import React from 'react'
import styled from 'styled-components'
import {Formik} from 'formik'
import Button from '../../../components/button'
import FormGroup from '../../../components/form/formGroup'
import Input from '../../../components/form/input'
import Design from '../../../components/form/design'
import Title from '../../../components/form/title'
import ErrorText from "../../../components/form/error"

const LoginForm = props => (
  <>
    <Title>Online Login Form</Title>
    <Formik
      initialValues={{username: '', password: ''}}
      {...props}
    >
      {({handleChange, handleBlur, values, handleSubmit, isSubmitting, errors, touched}) => (
        <FormGroup>
          {errors.genericError &&
            <ErrorText>{errors.genericError}</ErrorText>
          }
          <Input
            name='username'
            id='username'
            placeholder={'Username'}
            onChange={handleChange('username')}
            onBlur={handleBlur('username')}
            error={errors.username}
            value={values.username}
            autocomplete='off'
          />
          <Input
            id='password'
            name='password'
            type={'password'}
            placeholder={'Password'}
            onChange={handleChange('password')}
            onBlur={handleBlur('password')}
            error={errors.password}
            value={values.password}
            autocomplete='off'
          />
          <Button primary onClick={handleSubmit} type="submit" >Login</Button>
        </FormGroup>
      )}
    </Formik>
    <Design>© 2020 Online Login Form. Design by <a href="https://www.facebook.com/thang.vitat" target="_blank">ThangVi</a></Design>
  </>
);

export default LoginForm;
