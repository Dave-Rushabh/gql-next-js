import store from "../STORE/store";
import { Provider } from "react-redux";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
