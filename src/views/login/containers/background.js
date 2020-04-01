import styled from 'styled-components'
import BGLogin from '../../../assets/images/bg-login.png'

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: url(${BGLogin}) center center / cover no-repeat scroll #fff;
  z-index: -1;
`

export default Background