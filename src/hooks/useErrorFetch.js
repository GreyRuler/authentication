import { useEffect } from 'react';

export default function useErrorFetch(isError, setToken) {
	useEffect(() => {
		if (isError) {
			localStorage.removeItem('token')
			setToken(null)
		}
	}, [isError, setToken])
}
