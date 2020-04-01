import styled from 'styled-components'

const Title = styled.h2`
	text-transform: uppercase;
	font-size: 40px;
	font-weight: bold;
	letter-spacing: 3px;
	text-shadow: 5px 5px 8px #000;
	color: #fff;
	margin-bottom: 80px;
	@media(max-width: 767px) {
		font-size: 32px;
	}
	@media(max-width: 420px) {
		font-size: 28px;
	} 
`;

export default Title