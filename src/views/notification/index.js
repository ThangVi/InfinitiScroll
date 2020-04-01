import React, { useEffect } from 'react'
import classnames from 'classnames'
import {isAndroid, isIOS} from 'react-device-detect'

import ContainerFluid from '../../components/containerFluid'

const Notification = (props) => {
  return (
    <ContainerFluid className={classnames({ android: isAndroid == true, ios: isIOS == true})}>
      Notifications Page
    </ContainerFluid>
  )
};

export default Notification
