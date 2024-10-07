import Layout from '@/components/shared/Layout';
import { ActiveSectionProvider } from '@/providers/ActiveSectionContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ActiveSectionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ActiveSectionProvider>
  );
}
