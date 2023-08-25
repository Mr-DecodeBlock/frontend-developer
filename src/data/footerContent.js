import facebook from "@/public/assets/img/footer/facebook.svg";
import twitter from "@/public/assets/img/footer/twitter.svg";
import instagram from "@/public/assets/img/footer/instagram.svg";
import linkedin from "@/public/assets/img/footer/linkedin.svg";

export const footerContent = {
  address: "footerAddress",
  phone: "+52(229)9203324",
  phoneForHref: "522299203324",
  email: "hola@businessshop.ai",
  download: "footerTitle3",
  footerlinks: [
    {
      id: 1,
      cls: "footer-col-2-2",
      title: "footerTitle1",
      delay: ".5s",
      links: [
        {
          name: "Twitter",
          link: "https://twitter.com/BUSINESSSHOP_?T=eg6EIWDDA0SiQdB8dqP3hQ&s=09",
        },
        {
          name: "Facebook",
          link: "https://www.facebook.com/people/Business-Shop/100092842603129",
        },
        { name: "Discord", link: "https://discord.com/" },
        { name: "Github", link: "https://github.com/BusinessShop" },
        { name: " Linkedin", link: "https://www.linkedin.com/in/businessshop" },
        { name: "Medium", link: "https://medium.com/@businessshop.aa" },
        { name: "Bug Bounty", link: "https://businessshop.gitbook.io/esp" },
      ],
    },
    {
      id: 2,
      cls: "footer-col-2-3",
      title: "footerTitle2",
      delay: ".7s",
      links: [
        { name: "Nosotros", link: "#" },
        // { name: "Developers", link: "#" },
        { name: "Comisión", link: "/commissions" },
        { name: "Wallet", link: "/wallet" },
        { name: "Documentación", link: "https://docs.bspexplorer.com/" },
        { name: "Privacidad", link: "/privacy-policies" },
        { name: "Términos", link: "/termsOfUse" },
        { name: "Cookies", link: "/cookies-policies" },
      ],
    },
  ],
  socialLinks: [
    {
      link: "https://www.linkedin.com/in/businessshop",
      target: "_blank",
      icon: linkedin,
    },
    {
      link: "https://twitter.com/BUSINESSSHOP_?T=eg6EIWDDA0SiQdB8dqP3hQ&s=09",
      target: "_blank",
      icon: twitter,
    },
    {
      link: "https://www.facebook.com/people/Business-Shop/100092842603129",
      target: "_blank",
      icon: facebook,
    },
    {
      link: "https://www.instagram.com/businessshop.aa",
      target: "_blank",
      icon: instagram,
    },
  ],
};
