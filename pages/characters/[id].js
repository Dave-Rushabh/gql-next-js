import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { character } from "../../STORE/reducers/character";
import { useDispatch } from "react-redux";
import Individual from "../../components/Individual/Individual";

const char = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const id = parseInt(router.query.id);

  useEffect(() => {
    if (id) {
      dispatch(character(id));
    }
  });

  return (
    <>
      <Individual />
    </>
  );
};

export default char;
