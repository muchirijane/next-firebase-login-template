import styled from 'styled-components';

export const LoginWrapper = styled.section`
	height: 80vh;
	background-color: var(--colour-white);
`;
export const LoginContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(630px, 1fr));
	grid-gap: 2rem;
	height: 100%;
`;

export const LoginImageWrapper = styled.div`
	background-color: var(--light-orange);
	display: flex;
	justify-content: center;
	align-content: center;
`;

export const LoginFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const FormInputWrapper = styled.div`
	margin: 3rem 0;
	height: 4rem;
	width: 30rem;
	padding: 2rem 0;
    form{
      display: grid;
    }
	label {
		font-size: 1.8rem;
	}
	input {
		height: 4rem;
		width: 100%;
		padding: .6rem .3rem;
		font-size: 1.8rem;
      margin-top: 1rem;
      background-color: var(--colour-white);
      border: 0;
	}
`;
export const ButtonWrapper = styled.div`

margin-top: 2rem;
`;