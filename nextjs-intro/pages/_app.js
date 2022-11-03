import Layout from "../components/Layout";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import { Router } from "next/router";

Router.events.on("routeChangeStart", () => {
  //경로가 변경되기 시작할때 발생
  NProgress.start();
});
Router.events.on("routeChangeError", () => {
  //경로 변경시 오류가 발생하거나 경로 전환 취소시 발생 (err.cancelled - 탐색이 취소되었는지 여부)
  NProgress.done();
});
Router.events.on("routeChangeComplete", () => {
  //경로가 완전히 변경되면 발생
  console.log("완료");
  NProgress.done();
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
