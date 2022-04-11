import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <h1>Ninja Lists</h1>
      <nav>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
        <Link href={"/ninjas"}>
          <a>Ninja Listing</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
