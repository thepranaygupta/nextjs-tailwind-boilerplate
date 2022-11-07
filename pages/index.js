import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is the home page" />
      </Head>
      <h1 className="text-center text-3xl font-bold underline">Home</h1>
    </>
  );
}
