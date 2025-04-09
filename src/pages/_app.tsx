import { Theme } from "@radix-ui/themes";
import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme accentColor="teal" grayColor="mauve" radius="small">
      <Component {...pageProps} />
    </Theme>
  );
}
