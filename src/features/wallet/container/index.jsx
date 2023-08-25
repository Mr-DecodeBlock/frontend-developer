// @Layouts
import { MainLayout } from "../../../layout/main";
import { RevolutionCommerce, SectionArchitecture, OperationsP2P, AllPaymentMethods, SectionCryptoTrading, SectionWallet, BoostYourCapital } from "../views";

export function WalletContainer() {
  return (
    <MainLayout>
      <BoostYourCapital/>
      <SectionWallet/>
      <SectionCryptoTrading />
      <AllPaymentMethods />
      <RevolutionCommerce />
      <SectionArchitecture />
      <OperationsP2P />
    </MainLayout>
  )
}
