import Head from "next/head";

import "../styles/Home.module.css";
import Navbar from "../Components/Navbar/Index";
import Page from "../Components/Page";
import "antd/dist/antd.css";
export default function Home() {
  return (
    <div >
      <Navbar />
      <Page />
    </div>
  );
}
