import Head from 'next/head';
import Header from './Header';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Hero from './Hero';

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div className='container mx-auto'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />

      {router.pathname === '/' && <Hero />}
      <div>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'My Favorites Guitars',
  description: 'Find and list your favorites guitars',
  keywords: 'music, guitar',
};
