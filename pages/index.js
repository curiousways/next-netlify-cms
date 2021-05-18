import Head from "next/head";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";

export default function Home() {
  let { author, date } = attributes;
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <div>
        <h1>{author}</h1>
        <p>{date}</p>
        <hr />
        <HomeContent />
      </div>
    </>
  );
}
