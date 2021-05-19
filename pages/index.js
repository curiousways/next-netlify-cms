import Head from "next/head";
import { attributes, react as HomeContent } from "../content/home.md";

export default function Home() {
  let { title, date } = attributes;
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <div>
        <h1>{title}</h1>
        <br />
        <HomeContent />
      </div>
    </>
  );
}
