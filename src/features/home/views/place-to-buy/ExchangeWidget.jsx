import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'

const ExchangeWidget = () => {
  const { i18n } = useTranslation()
  const isSpanish = i18n.language === 'es'

  const srcSpanish = 'https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=false&amount=0.01&amountFiat=1500&backgroundColor=171717&darkMode=true&from=btc&fromFiat=eur&horizontal=false&isFiat&lang=es-ES&link_id=837afb07dcf6a9&locales=false&logo=false&primaryColor=FFA80F&to=eth&toFiat=eth&toTheMoon=true'

  const srcEnglish = 'https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=false&amount=0.01&amountFiat=1500&backgroundColor=171717&darkMode=true&from=btc&fromFiat=eur&horizontal=false&isFiat&lang=en-US&link_id=837afb07dcf6a9&locales=false&logo=false&primaryColor=FFA80F&to=eth&toFiat=eth&toTheMoon=true'

  useEffect(() => {
    const script = document.createElement('script');
    script.defer = true;
    script.type = 'text/javascript';
    script.src = 'https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <iframe
      id='iframe-widget'
      src={isSpanish ? srcSpanish : srcEnglish}
      style={{ height: '356px', width: '100%', border: 'none' }}
    ></iframe>
  );
};

export default ExchangeWidget;