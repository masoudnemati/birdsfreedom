import Head from "next/head";
import Hero from "../components/pages-componets/home/Hero";
import Reasons from "../components/pages-componets/home/Reasons";

export default function Home() {
  return (
    <>
      <Head>
        <title>آزادی پرندگان</title>
        <meta name="description" content="حق آزادی پرندگان" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Reasons />
    </>
  );
}
