import Layout1 from "../components/Layout/Layout1";

import "../public/css/simplebar.css";
import "../public/css/bootstrap.min.css";
import "../public/css/select2.min.css";
import "../public/css/materialdesignicons.min.css";
import "../public/css/tiny-slider.css";
import "../public/css/remixicon.css";
import "../public/css/tiny-slider.css";
import "../public/css/style.css";
import "../public/asset/wp-content/themes/astra/assets/css/minified/style.min5b75.css";
import "../public/asset/astra-style.css";
import "../public/asset/style.css";

import "../public/asset/wp-content/plugins/elementor/assets/css/frontend.min3d36.css";
import "../public/asset/wp-content/uploads/elementor/css/post-2911d7c5.css";
import GlobalProvider from "../context";

export default function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <GlobalProvider>
        <Layout1>{page}</Layout1>
      </GlobalProvider>
    ));

  return getLayout(
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
