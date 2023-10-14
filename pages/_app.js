import "tailwindcss/tailwind.css";
import { roboto } from "../utils/font";
import Layout from "../components/layout/default";

function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>

      )}

    </main>
  );
}

export default MyApp;
