import {useState, useEffect} from 'react'
import Layout from '../components/Layout/Layout';
import Login from '../components/Login/Login';
import fire from '../firebase/firebase'
export default function Home() {
	const [user, setUser] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('')
	const [hasAccount, setHasAccount] = useState(false);

	const handleLogin = () => {
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
	}
	return (
		<Layout>
			<Login />
		</Layout>
	);
}
