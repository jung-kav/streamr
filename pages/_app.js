import React from "react";
import App from "next/app";
import Head from "next/head";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/dist/styles.css";
import translations from "@shopify/polaris/locales/en.json";

class StreamrAdminApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Streamr Admin</title>
          <meta charSet="utf-8" />
        </Head>
        <AppProvider i18n={translations}>
          <Component {...pageProps} />
        </AppProvider>
      </React.Fragment>
    );
  }
}

StreamrAdminApp.getInitialProps = async ({ ctx }) => {
  return {
    shopOrigin: ctx.query.shop,
  };
};

export default StreamrAdminApp;
