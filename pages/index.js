import GuitarsFeatured from '@/components/GuitarsFeatured';
import Layout from '@/components/Layout';
import { API_URL } from '../config';

export default function HomePage({ guitars }) {
  return (
    <Layout>
      <GuitarsFeatured guitars={guitars} compTitle='Featured Guitars' />
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
