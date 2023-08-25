import Head from "next/head";

// PANEL DE CONTROL: SEO

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>{`${pageTitle ? pageTitle + ' | ' : ''}BusinessShop: Pagos en línea rápidos y seguros`}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="BusinessShop ofrece pagos en línea rápidos y seguros para el comercio en línea. Descubre cómo realizar transacciones de forma eficiente y segura en nuestra cadena de bloques." />
      <meta name="keywords" content="blockchain, cadena de bloques, ethereum, binance, criptomonedas, crypto, bitcoin, tether, usdt, exchange, pagos en línea rápidos, pagos seguros, métodos de pago en línea, plataforma de pagos, pagos electrónicos, wallet electrónica, transacciones seguras, intercambio de criptomonedas, México, Estados Unidos, Latinoamérica, Colombia, Argentina, Brasil, Chile, Perú, Ecuador, Venezuela, Uruguay, Paraguay, Bolivia, Canadá, nueva blockchain, soluciones de pago, comercio electrónico seguro, seguridad en transacciones, inversión en criptomonedas" />
      <meta name="author" content="BusinessShop" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta property="og:site_name" content="BusinessShop" />
      <meta property="og:title" content="BusinessShop: Pagos en línea rápidos y seguros" />
      <meta property="og:description" content="BusinessShop ofrece pagos en línea rápidos y seguros para el comercio en línea. Descubre cómo realizar transacciones de forma eficiente y segura en nuestra cadena de bloques." />
      <meta property="og:image" content="https://frotend-bsp-chain-gjb09spr5-businessshopdev.vercel.app/cardredes.png" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <link rel="icon" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon/android-chrome-192x192.png" />
      {/* <link rel="manifest" href="/manifest.json" /> */}
    </Head>
  </>
);

export default SEO;
