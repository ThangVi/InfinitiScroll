import styled from 'styled-components'

const formGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-width: 400px;
	@media(max-width: 767px) {
		min-width: 320px;
		max-width: calc(100% - 30px);
	} 
`;

export default formGroup