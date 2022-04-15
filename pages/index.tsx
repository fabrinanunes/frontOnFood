import type { NextPage } from "next";
import Head from "next/head";
import { PageTemplate, Search, Character } from "@/components";
import Styles from "../styles/internal.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Front On Food</title>
        <meta name="description" content="Front on Food by Fabrina Nunes" />
      </Head>
      <PageTemplate>
        <div className={Styles.content}>
          <h1>Encontre opções em Delivery próximos a você.</h1>
          <Search />
          <h2>
            Descubra seu novo Delivery favorito. Milhares de opções a um clique.
          </h2>
          <Character />
        </div>
      </PageTemplate>
    </>
  );
};

export default Home;