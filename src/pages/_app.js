import {localFonts} from "@/utils/helpers/localFonts";
import "@/styles/globals.css";

export default function App({Component, pageProps}) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <style jsx global>{`
        :root {
          /* ... */
          --local-font: ${localFonts.style.fontFamily};
        }
      `}</style>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
