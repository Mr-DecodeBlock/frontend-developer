import P2pBlock from './p2p-block'
import P2pCards from './p2p-cards'
import P2pSellBuy from './p2p-sell-buy';
import { P2pSellBuyContext } from './p2p-sell-buy-context';

const P2pArea = () => {
  return (
    <div>
      <P2pBlock/>
      <P2pSellBuyContext>
        <P2pSellBuy/>
        <P2pCards/>
      </P2pSellBuyContext>
    </div>
  )
}

export default P2pArea
