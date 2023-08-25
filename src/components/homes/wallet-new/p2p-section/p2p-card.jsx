import classNames from "classnames/bind";
import styles from './p2p-card.module.scss'
import Image from "next/image";

const P2pCard = ({type, image, title, paragraph}) => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('p2p-card')}>
      <div className={cx('p2p-card__left')}>
        <Image src={image}/>
      </div>
      <div className={cx('p2p-card__right')}>
        <h5>{title}</h5>
        <div>{paragraph}</div>
      </div>
    </div>
  );
};

export default P2pCard;
