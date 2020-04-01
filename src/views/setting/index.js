import React, { useEffect } from 'react'
import classnames from 'classnames'
import {isAndroid, isIOS} from 'react-device-detect'

import ContainerFluid from '../../components/containerFluid'

const Setting = (props) => {
  return (
    <ContainerFluid className={classnames({ android: isAndroid == true, ios: isIOS == true})}>
      Settings Page
    </ContainerFluid>
  )
};

export default Setting
