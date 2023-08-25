import Image from "next/image";
import { useRouter } from "next/router";

// @Images
import github from "@/public/assets/img/footer/github.svg";
import discord from "@/public/assets/img/footer/discord.svg";
import facebook from "@/public/assets/img/footer/facebook.svg";
import twitter from "@/public/assets/img/footer/twitter.svg";
import instagram from "@/public/assets/img/footer/instagram.svg";
import linkedin from "@/public/assets/img/footer/linkedin.svg";
import tiktok from "@/public/assets/img/footer/tiktok.svg";
import youtube from "@/public/assets/img/footer/youtube.svg";
import medium from "@/public/assets/img/footer/medium.svg";

import styles from "./styles.module.scss";

const communityItems = [
  {
    route: "https://github.com/BusinessShop",
    image: github,
    name: "github",
  },
  {
    route: "/",
    image: discord,
    name: "discord",
  },
  {
    route: "https://www.linkedin.com/in/businessshop",
    image: linkedin,
    name: "linkedin",
  },

  {
    route: "/",
    image: twitter,
    name: "twitter",
  },
  {
    route: "https://www.facebook.com/people/Business-Shop/100092842603129",
    image: facebook,
    name: "facebook",
  },
  {
    route: "https://www.instagram.com/businessshop.aa",
    image: instagram,
    name: "instagram",
  },

  {
    route: "/",
    image: tiktok,
    name: "tiktok",
  },
  {
    route: "/",
    image: youtube,
    name: "youtube",
  },
  {
    route: "/",
    image: medium,
    name: "medium",
  },
];

export const CommunityBlock = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.comunity}>
        <div className={styles.community__block}>
          {communityItems.map((communitItem, index) => (
            <div
              key={index}
              onClick={() => {
                router.push(communitItem.route);
              }}
              className={styles.img}
            >
              <Image src={communitItem.image} alt={communitItem.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
