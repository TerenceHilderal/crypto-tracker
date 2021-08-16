import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Layout({ children, page }) {
	return (
		<div className='bg-black text-center min-h-screen'>
			<Head>
				<title>{page}</title>
			</Head>
			<header className='container-lg'>
				<Link href='/'>
					<a href='/'>
						<h1 className='text-5xl mb-2 text-yellow-300'>Crypto Tracker</h1>
					</a>
				</Link>

				<div>
					<Image
						src='/crypto.webp'
						alt='header-pic'
						width='500'
						height='100'
						className='rounded-3xl object-cover'
						quality={100}
					/>
				</div>
			</header>

			<main className='pt-4 mx-20 '>{children}</main>

			<footer className='p-10'>
				<Image
					src='/crypto.webp'
					alt='footer-pic'
					width='1000'
					height='50'
					className='rounded-3xl object-cover'
					quality={100}
				/>
				<ul className='pt-10 pb-4 flex justify-around text-yellow-300 '>
					<li>A propos</li>
					<li>Qui sommes-nous</li>
					<li>Terence_Hdl</li>
				</ul>
			</footer>
		</div>
	);
}
