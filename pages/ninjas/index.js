import Link from "next/link";
import React from "react";
import styles from "../../styles/Ninja.module.css";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });
  const data = await res.json();
  return {
    props: { ninjas: data },
  };
};
const NinjaLists = ({ ninjas }) => {
  return (
    <div>
      <h1>Ninjas</h1>
      {ninjas?.map((ninja) => (
        <Link href={`ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default NinjaLists;
