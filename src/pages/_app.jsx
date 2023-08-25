import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { I18nextProvider } from "react-i18next";
import i18n from "../translations/i18n"
// import "normalize.css/normalize.css";
import "@/src/styles/index.scss";
import "@/src/styles/global.css";
import { Toaster } from "react-hot-toast";


export default function App({ Component, pageProps }) {
  const { t } = useTranslation()

  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }

  useEffect(() => {
    const userLanguage = navigator.language;
    i18n.changeLanguage(userLanguage);
  }, []);

  return (
    <Provider store={store}>
      <Toaster
        toastOptions={{
          style: {
            background: '#292828',
            color: '#fff',
            border: '1px solid rgba(255, 168, 15, 0.98)',
            padding: '1rem',
          },
          error: {
            icon: '⚠️',
          },
          success: {
            icon: '👏',
          },
          duration: 3000,
        }}
      />
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </Provider>
  );
}



