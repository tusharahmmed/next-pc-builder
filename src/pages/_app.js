import {localFonts} from "@/utils/helpers/localFonts";
import "@/styles/globals.css";
import {Provider} from "react-redux";
import {store} from "@/app/store";

export default function App({Component, pageProps}) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <style jsx global>{`
        :root {
          /* ... */
          --local-font: ${localFonts.style.fontFamily};
        }
      `}</style>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}
