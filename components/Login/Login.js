import Image from 'next/image';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import loginImage from '../../public/Girl.svg';
import { LoginWrapper, LoginContainer, LoginImageWrapper, LoginFormWrapper, FormInputWrapper } from './Login.styles.js';
export default function Login() {
	return (
		<LoginWrapper>
			<LoginContainer>
				<LoginImageWrapper>
					<Image src={loginImage} />
				</LoginImageWrapper>
				<LoginFormWrapper>
					<h1>Welcome Back to Budgetfy</h1>
					<h2>Login to your account</h2>
					<form>
						<FormInputWrapper>
							<label htmlFor="email-address">Enter Your Email address</label>

							<input id="email-address" type="text" name="email-address" />
						</FormInputWrapper>
						<FormInputWrapper>
							<label html="password"> Enter your password</label>

							<input id="password" type="password" name="passowrd" />
						</FormInputWrapper>
						<div>
							<button className="link-animated" type="submit">
								Login
							</button>
						</div>
					</form>
					<div>
						<p>Or sign in with</p>
						<div>
							<FaGoogle />
							<FaFacebookF />
						</div>
					</div>
				</LoginFormWrapper>
			</LoginContainer>
		</LoginWrapper>
	);
}
