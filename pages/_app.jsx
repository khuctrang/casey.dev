/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";

import theme from "../src/theme";
import Layout from "../src/components/Layout";

/**
 * @see https://nextjs.org/docs/advanced-features/custom-app
 * @see https://nextjs.org/docs/basic-features/typescript#custom-app
 */
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div
          sx={{
            maxWidth: "container",
            mx: "auto",
            mt: 7,
          }}
        >
          <Component {...pageProps} />
        </div>
      </Layout>
    </ThemeProvider>
  );
}