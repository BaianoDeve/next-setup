import Head from 'next/head';
import { NextPage } from 'next';

import { Header } from '~/components/Header';
import { Container, Title } from '~/styles/pages/home';

const PageComponent: NextPage = () => {
  return (
    <>
      <Head>
        <title>Séries | Brotheragem Scan</title>
      </Head>
      <Header />
      <Container
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Title>Séries</Title>
      </Container>
    </>
  );
};

export default PageComponent;
