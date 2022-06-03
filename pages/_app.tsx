import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/AddButton.css";
import EditorPageProvider from "../providers/EditorPageProvider";
import UserProvider from "../providers/UserProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <EditorPageProvider>
        <Component {...pageProps} />
      </EditorPageProvider>
    </UserProvider>
  );
}

export default MyApp;
