import GuitarItem from '@/components/GuitarItem';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import qs from 'qs';

export default function search({ guitars }) {
  return (
    <Layout>
      <section className='py-6 sm:py-12 bg-coolGray-100 text-coolGray-800'>
        <div className='container p-6 mx-auto space-y-8'>
          <div className='space-y-2 text-center'>
            <h2 className='text-3xl font-bold'>Guitars</h2>
            <p className='font-serif text-sm text-coolGray-600'>
              a list of beautiful guitars
            </p>
          </div>

          {guitars.length === 0 && <h3>No Guitars to show</h3>}

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

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { model_contains: term },
        { producer_contains: term },
        { description_contains: term },
        { nut_width_contains: term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/guitars?${query}`);

  const guitars = await res.json();

  return {
    props: { guitars },
  };
}
