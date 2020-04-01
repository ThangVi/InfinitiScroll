import React, {useState} from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import {Link} from 'react-router-dom'
import {isAndroid, isIOS} from 'react-device-detect'
import {Icon} from 'semantic-ui-react'

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
    font-size: 1.2rem;
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
    font-size: 1.2rem;
    margin-bottom: 1rem;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    margin-right: 12px;
    i {
      font-size: 1.2rem;
    }
  }
`;

const OtherDeviceMenu = styled.div`
  display: inline-flex;
  position: fixed;
  left: 0;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  &.top-menu {
    top: 0;
  }
  &.bottom-menu {
    bottom: 0;
  }
  >a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    position: relative;
    width: 25%;
    align-items: center;
    i {
      margin-right: 0;
      margin-bottom: 7px;
      font-size: 1.5rem;
    }
    &:hover, &:active {
      opacity: 0.8;
      color: #fff;
    }
    @media(max-width: 767px) {
      width: auto;
    }
  }
`;

const Header = () => {
  const [{auth}, dispatch] = useStateValue()

  const [activeClass, setActiveClass] = useState(false);

  const handleLogout = async () => {
    localStorage.clear();
    setActiveClass(!activeClass);
    await dispatch(logout());
  }

  let menu = 
    <>
      <MenuWrapper>
        <Menu className={classnames({ active: activeClass == true})} id='menu'>
          <Link to={`/`} onClick={() => setActiveClass(!activeClass)}>Home</Link>
          <Link to={`/notification`} onClick={() => setActiveClass(!activeClass)}>Notifications</Link>
          <Link to={`/setting`} onClick={() => setActiveClass(!activeClass)}>Settings</Link>
          {auth.logged && <a onClick={() => handleLogout()}>Logout</a>}
          <SocialWrapper>
            <a href="https://www.facebook.com/thang.vitat"><Icon name='facebook f' /></a>
            <a href="#"><Icon name='twitter' /></a>
            <a href="https://www.instagram.com/vitatthang/?hl=vi"><Icon name='instagram' /></a>
            <a href="#"><Icon name='google plus g' /></a>
          </SocialWrapper>
        </Menu>
      </MenuWrapper>
      <MenuToggler onClick={() => setActiveClass(!activeClass)} className={classnames({ active: activeClass == true})}><span></span></MenuToggler>
    </>
  if (isIOS) {
    menu = 
      <OtherDeviceMenu className="bottom-menu">
        <Link to={`/`}>
          <Icon name='home' />
          <p>Home</p>
        </Link>
        <Link to={`/notification`}>
          <Icon name='info' />
          <p>Notifications</p>
        </Link>
        <Link to={`/setting`}>
          <Icon name='setting' />
          <p>Settings</p>
        </Link>
        <a onClick={() => handleLogout()}>
          <Icon name='power off' />
          <p>Logout</p>
        </a>
      </OtherDeviceMenu>
  } else if (isAndroid) {
    menu = 
      <OtherDeviceMenu className='top-menu'>
        <Link to={`/`}>
          <Icon name='home' />
          <p>Home</p>
        </Link>
        <Link to={`/notification`}>
          <Icon name='info' />
          <p>Notifications</p>
        </Link>
        <Link to={`/setting`}>
          <Icon name='setting' />
          <p>Settings</p>
        </Link>
        <a onClick={() => handleLogout()}>
          <Icon name='power off' />
          <p>Logout</p>
        </a>
      </OtherDeviceMenu>
  }

  return (
    auth.logged ? 
      <>
        {menu}
      </>
      : ''
  )
}

export default Header