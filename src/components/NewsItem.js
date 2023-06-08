export default function NewsItem({ item}) {
	return (
		<li className='news-item'>
			<img src={item.image} alt={item.title} width='400px'/>
			<h3 className='title'>{item.title}</h3>
			<div className='content'>{item.content}</div>
		</li>
	)
}
