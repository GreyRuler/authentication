import useJsonFetch from '../hooks/useJsonFetch';
import NewsItem from './NewsItem';
import useErrorFetch from '../hooks/useErrorFetch';

export default function News({token, setToken}) {
	const urlLogin = `${process.env.REACT_APP_URL}/private/news`
	const options = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const {data: news, isError, isLoading} = useJsonFetch(urlLogin, options)
	useErrorFetch(isError, setToken)
	return (
		<ul className='news'>
			{news.map(item => <NewsItem key={item.id} item={item}/>)}
		</ul>
	)
}
