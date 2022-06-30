import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./List.module.css";

const List = () => {
  const data = useSelector((store) => store.charactersReducer.characters);
  const listGenerator = data?.characters?.results;
  return (
    <>
      <div>The below data is fetched from GraphQL and Redux Thunk</div>
      {listGenerator?.map((item) => {
        return (
          <div key={item?.id}>
            <Link href={`/characters/${item.id}`}>
              <a>
                <div>
                  <Image src={item?.image} height={50} width={50} />
                </div>
                <div>{item?.name}</div>
              </a>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default List;
