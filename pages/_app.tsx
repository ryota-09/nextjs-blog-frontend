import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/AddButton.css";
import EditorPageProvider from "../providers/EditorPageProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EditorPageProvider>
      <Component {...pageProps} />
    </EditorPageProvider>
  );
}

export default MyApp;
