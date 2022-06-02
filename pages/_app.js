import "../styles/globals.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

const store = createStore(() => [], {}, applyMiddleware())

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
