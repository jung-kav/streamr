import React from "react";
import App from "next/app";
import Head from "next/head";
import { AppProvider as PolarisProvider } from "@shopify/polaris";
import { Provider as AppBridgeProvider } from "@shopify/app-bridge-react";
import "@shopify/polaris/dist/styles.css";
import translations from "@shopify/polaris/locales/en.json";

class StreamrAdminApp extends App {
  render() {
    const { Component, pageProps, host } = this.props;
    const config = { apiKey: API_KEY, host, forceRedirect: true };

    return (
      <React.Fragment>
        <Head>
          <title>Streamr Admin</title>
          <meta charSet="utf-8" />
        </Head>
        <AppBridgeProvider config={config}>
          <PolarisProvider i18n={translations}>
            <Component {...pageProps} />
          </PolarisProvider>
        </AppBridgeProvider>
      </React.Fragment>
    );
  }
}

StreamrAdminApp.getInitialProps = async ({ ctx }) => {
  return {
    host: ctx.query.host,
  };
};

export default StreamrAdminApp;
