import useJsonFetch from '../hooks/useJsonFetch';
import useErrorFetch from '../hooks/useErrorFetch';

export default function Logout({token, setToken, handleLogout}) {
	const urlLogin = `${process.env.REACT_APP_URL}/private/me`
	const options = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const {data: user, isError, isLoading} = useJsonFetch(urlLogin, options)

	useErrorFetch(isError, setToken)

	return (
		user && <div className="logout">
			<span className="username">Привет, {user.name}</span>
			<img className='avatar' src={user.avatar} alt="avatar"/>
			<button className="btn-logout" onClick={handleLogout}>Выйти</button>
		</div>
	)
}
