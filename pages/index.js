import Head from "next/head";

import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar/Index";
import Page from "../Components/Page";
import "antd/dist/antd.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Page />
    </div>
  );
}
