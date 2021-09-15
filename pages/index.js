import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home({ res }) {
	return (
		<Layout page='Crypto Tracker - Accueil'>
			<ul className='justify-around  py-10 md:flex '>
				{res.map((crypto, index) => (
					<li
						key={index}
						className='relative hover:bg-yellow-100
						p-8 border border-yellow-300 rounded-3xl
						bg-gray-100 md:w-auto flex-1 mx-5 my-5'
					>
						<Link href={`${crypto.id}`}>
							<a className='rounded-md'>
								<div className='text-center '>
									<img
										src={crypto.logo_url}
										alt={crypto.name}
										className='w-20 h-20 mx-auto mb-6 '
									/>
								</div>
								<h2 className='text-2xl mb-6 uppercase tracking-wider'>
									{crypto.name}
								</h2>
								<h3 className='font-bold text-2xl mb-4 text-yellow-300'>
									{parseFloat(crypto.price).toFixed(2)} €
								</h3>
								<p>
									1 day :{' '}
									<span className='font-bold'>
										{parseFloat(crypto['1d'].price_change_pct * 100).toFixed(
											2,
										) + '%'}
									</span>
									{crypto['30d'].price_change_pct < 0 ? (
										<span className='text-red-500'> &#x2798;</span>
									) : (
										<span className='text-green-500'> &#x279A;</span>
									)}
								</p>
								<p>
									1 month :{' '}
									<span className='font-bold'>
										{parseFloat(crypto['30d'].price_change_pct * 100).toFixed(
											2,
										) + '%'}
									</span>
									{crypto['1d'].price_change_pct < 0 ? (
										<span className='text-red-500'> &#x2798;</span>
									) : (
										<span className='text-green-500'> &#x279A;</span>
									)}
								</p>
								<p>
									1 year :{' '}
									<span className='font-bold'>
										{parseFloat(crypto['365d'].price_change_pct * 100).toFixed(
											2,
										) + '%'}
									</span>
									{crypto['365d'].price_change_pct < 0 ? (
										<span className='text-red-500'> &#x2798;</span>
									) : (
										<span className='text-green-500'> &#x279A;</span>
									)}
								</p>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</Layout>
	);
}

export async function getStaticProps(context) {
	//server side rendering
	try {
		const res = await fetch(
			'https://api.nomics.com/v1/currencies/ticker?key=5e47500dece0f0fd280d83e709b1a7debfe3a670&ids=BTC,ETH,XRP&interval=1d,30d,365d&convert=EUR&per-page=100&page=1',
		).then((res) => res.json());

		return {
			props: { res },
		};
	} catch (error) {
		console.error(error);
	}
}
