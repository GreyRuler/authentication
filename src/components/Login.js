export default function Login({onChangeLogin, onChangePassword, handleLogin}) {
	return (
		<div className="login">
			<input type="text" placeholder="Логин" onChange={onChangeLogin}/>
			<input type="text" placeholder="Пароль" onChange={onChangePassword}/>
			<button className="btn-login" onClick={handleLogin}>Войти</button>
		</div>
	)
}
