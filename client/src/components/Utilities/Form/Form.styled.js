import styled from "styled-components";

export const FormGroup = styled.div`
	color: ${(props) => props.theme.colors.BLACK};
    display: block;
    width: 41%;
    margin: 10px 7%;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	font-family: 'open-san',sans-serif;
	color: ${(props) => props.theme.colors.BLACK};
    display: block;
`;


export const Input = styled.input`
	padding: 0.5em;
	color: ${(props) => props.theme.colors.BLACK};
	background: ${(props) => props.theme.colors.INPUT_COLOR};
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: ${(props) => props.theme.colors.BLACK};
    display: block;
`;