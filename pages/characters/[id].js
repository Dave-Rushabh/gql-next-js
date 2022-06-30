// import React from "react";
// import { getCharactersData } from "../../GraphQL";
// import { useRouter } from "next/router";

// export const getStaticPaths = async () => {
//   const router = useRouter();
//   const { id } = router.query;

//   console.log(id, "id");
// };

// export const getStaticProps = async () => {
//   const data = await fetch(`https://rickandmortyapi.com/api/character/201`);

//   return {
//     props: {
//       individualCharacter: data,
//     },
//   };
// };

// const char = ({ individualCharacter }) => {
//   console.log(individualCharacter);
//   return <div>char</div>;
// };

// export default char;
