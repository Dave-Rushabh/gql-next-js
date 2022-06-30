import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../../components/List/List";
import { allCharacters } from "../../STORE/reducers/characters";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCharacters());
  }, []);

  return (
    <>
      <Head>
        <title>GQL - RD</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8" />
        <meta name="keywords" content="GraphQL in NextJs For Beginners by RD" />
        <meta name="author" content="RD" />
      </Head>
      <div>
        <List />
      </div>
    </>
  );
}
