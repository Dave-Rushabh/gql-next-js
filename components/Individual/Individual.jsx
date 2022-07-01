import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import styles from "./Individual.module.css";

const Individual = () => {
  const data = useSelector(
    (store) => store.individualCharacterReducer.character
  );
  console.log(data, "data");
  return (
    <>
      <div>Individual</div>
      {Object.keys(data).length > 0 && (
        <Image src={data?.image} height={200} width={200} />
      )}
    </>
  );
};

export default Individual;
