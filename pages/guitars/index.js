import Layout from '@/components/Layout';
import GuitarItem from '@/components/GuitarItem';
import { API_URL } from '@/config/index';

export default function EventsPage({ guitars }) {
  return (
    <Layout title='Guitars List'>
      <section className='py-6 sm:py-12 bg-coolGray-100 text-coolGray-800'>
        <div className='container p-6 mx-auto space-y-8'>
          <div className='space-y-2 text-center'>
            <h2 className='text-3xl font-bold'>Guitars</h2>
            <p className='font-serif text-sm text-coolGray-600'>
              a list of beautiful guitars
            </p>
          </div>

          <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4'>
            {guitars.map((guitar) => (
              <GuitarItem key={guitar.id} guitar={guitar} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/guitars?_sort=updated_at:DESC`);
  const guitars = await res.json();

  return {
    props: { guitars },
    revalidate: 1,
  };
}
