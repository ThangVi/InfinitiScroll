import React, {useState} from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import { useStateValue } from '../state'
import { logout } from '../state/auth/actions'

import Button from './button'

const MenuToggler = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 999;
  height: 28px;
  width: 28px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  span,
  span::before,
  span::after {
    position: absolute;
    content: '';
    width: 28px;
    height: 2.5px;
    background: #000;
    border-radius: 20px;
    transition: all 500ms ease;
  }
  
  span::before {
    top: -8px;
  }
  
  span::after {
    top: 8px;
  }
  &.active > span {
    background: transparent;
  }

  &.active > span::before,
  &.active > span::after {
    background: #fff;
    top: 0px;
  }

  &.active > span::before  {
    transform: rotate(-225deg);
  }

  &.active > span::after  {
    transform: rotate(225deg);
  }
`;

const MenuWrapper = styled.div`
  height: 100vh;
  width: 300px;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
`;

const Menu = styled.div`
  position: fixed;
  left: -300px;
  z-index: 20;
  background: rgba(0, 0, 0, .7);
  width: 300px;
  height: 200vh;
  border-bottom-right-radius: 100%;
  padding: 100px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: all 300ms ease;
  a {
    color: #fff;
    font-size: 1.4rem;
    margin-bottom: 2rem !important;
    &:hover {
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 250px;
    left: -250px;
    padding: 50px;
  }
  &.active {
    left: 0;
  }
  a {
    color: #fff;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Header = () => {
  const [{auth}, dispatch] = useStateValue()

  const [activeClass, setActiveClass] = useState(false);

  const handleLogout = async () => {
    await dispatch(logout())
  }

  return (
    auth.logged ? 
      <>
        <MenuWrapper>
          <Menu className={classnames({ active: activeClass == true})}>
            <Link to={`/home`} onClick={() => setActiveClass(!activeClass)}>Home</Link>
            <Link to={`/notification`} onClick={() => setActiveClass(!activeClass)}>Notifications</Link>
            <Link to={`/setting`} onClick={() => setActiveClass(!activeClass)}>Settings</Link>
            {auth.logged && <a onClick={() => handleLogout()}>Logout</a>}
          </Menu>
        </MenuWrapper>
        <MenuToggler onClick={() => setActiveClass(!activeClass)} className={classnames({ active: activeClass == true})}><span></span></MenuToggler>
      </>
      : ''
  )
}

export default Header