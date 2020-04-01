import styled from 'styled-components'
import theme from "./theme";

const CustomButton = styled.button`
    transition: all .3s ease;
    background: ${props => theme.colors[Object.keys(props).find(p => theme.colors[p])] || theme.colors.primary};
    text-transform: ${props => props.upper ? 'uppercase' : 'none'};
    font-weight: 600;
    color: ${theme.colors.default};
    padding: 15px 50px;
    margin: 30px 0 15px;
    border: none;
    text-transform: uppercase;
    border-radius: 999px;
    cursor: pointer;
    &:hover {
        opacity: .8;
    }
`;

export default CustomButton