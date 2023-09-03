import {SessionProvider} from "next-auth/react";
import {localFonts} from "@/utils/helpers/localFonts";
import "@/styles/globals.css";
import {Provider} from "react-redux";
import {store} from "@/app/store";

export default function App({Component, pageProps: {session, ...pageProps}}) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <style jsx global>{`
          :root {
            /* ... */
            --local-font: ${localFonts.style.fontFamily};
          }
        `}</style>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </SessionProvider>
  );
}
