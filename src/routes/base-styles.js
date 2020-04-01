import { createGlobalStyle  } from 'styled-components'
import reset from 'styled-reset'

const BaseStyles = createGlobalStyle`
	${reset}
	body { margin: 0;};
	html { font-family: 'Montserrat', sans-serif; font-size: 15px;}
	* { box-sizing: border-box; };
	.my-masonry-grid {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		margin-left: -10px;
		width: auto;
	}
	.my-masonry-grid_column {
		padding-left: 10px;
		background-clip: padding-box;
	}
	.my-masonry-grid_column > div {
		margin-bottom: 10px;
	}
`;

export default BaseStyles