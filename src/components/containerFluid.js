import styled from 'styled-components'
import {isAndroid, isIOS} from 'react-device-detect'

const ContainerFluid = styled.div`
	max-width: calc(100% - 60px);
	width: calc(100% - 60px);
	padding: 20px;
	margin-left: 60px;
	&.android, &.ios {
		margin-left: 0;
		max-width: 100%;
		width: 100%;
	}
	&.ios {
		padding-bottom: 87px;
	}
	&.android {
		padding-top: 87px;
	}
`

export default ContainerFluid