import Layout1 from "../components/Layout/Layout1";

import "../public/css/simplebar.css";
import "../public/css/bootstrap.min.css";
import "../public/css/select2.min.css";
import "../public/css/materialdesignicons.min.css";
import "../public/css/tiny-slider.css";
import "../public/css/remixicon.css";
import "../public/css/tiny-slider.css";
import "../public/css/style.css";
import "../public/asset/wp-content/themes/astra/assets/css/minified/style.min5b75.css?ver=3.0.2";
import "../public/asset/astra-style.css";
import "../public/asset/style.css";
import "../public/asset/wp-content/uploads/elementor/css/post-2911d7c5.css?ver=1638804915";
import "../public/asset/wp-content/plugins/elementor/assets/css/frontend.min3d36.css?ver=3.3.1";
import GlobalProvider from "../context";

export default function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <Layout1>{page}</Layout1>);

  return getLayout(
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
