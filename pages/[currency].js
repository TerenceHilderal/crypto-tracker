import Layout from '../components/Layout';

export default function Currency({ res }) {
	console.log(res);
	return (
		<Layout page={res.name + ' Informations'}>
			<div className='relative hover:shadow md p-8 border border-yellow-300 sm:rounded-3xl bg-white md:w-auto flex-1 mx-5'>
				<div className='text-center'>
					<img
						src={res.logo_url}
						alt={res.name}
						className='mx-auto h-20 w-20 mb-6'
					/>
				</div>
				<h2 className='text-2xl mb-6 uppercase tracking-wider'>{res.name}</h2>
				<p>{res.description}</p>
				<p className='pt-5 text-blue-500'>
					<a href={res.reddit_url} target='_blank'>
						{res.reddit_url}
					</a>
				</p>
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ query }) {
	try {
		console.log(query);
		const res = await fetch(
			`https://api.nomics.com/v1/currencies?key=5e47500dece0f0fd280d83e709b1a7debfe3a670&ids=${query.currency}&attributes=id,name,logo_url,description,reddit_url`,
		);
		const result = await res.json();

		return {
			props: { res: result[0] },
		};
	} catch (error) {
		console.error(error);
	}
}
