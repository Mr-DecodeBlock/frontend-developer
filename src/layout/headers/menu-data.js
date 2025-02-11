const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "inicio",
    link: "/",
    active: "active",
    sub_menus: [
      { link: "/", title: "Data analytics" },
      { link: "/home-2", title: "Payment Gateway" },
      { link: "/home-3", title: "CRM Software" },
      { link: "/home-4", title: "Security Software" },
      { link: "/home-5", title: "Saas" },
    ],
  },

  // PANEL DE CONTROL: Menu
  /* {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "Pages",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/about", title: "About" },
      { link: "/service", title: "Service" },
      { link: "/service-details", title: "Service Details" },
      { link: "/team", title: "Team" },
      { link: "/team-details", title: "Team Details" },
      { link: "/career", title: "Career" },
      { link: "/career-details", title: "Career Details" },
      { link: "/integrations", title: "Integrations" },
      { link: "/price", title: "Price" },
      { link: "/register", title: "Register" },
      { link: "/sign-in", title: "Signin" },
      { link: "/404", title: "404" }, 
    ],
  },
  
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Projects",
    link: "/project",
    active: "",
    sub_menus: [
      { link: "/project", title: "Project" },
      { link: "/project-details", title: "Project Details" }, 
    ],
  },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Blog",
    link: "/blog",
    active: "",
    sub_menus: [
      { link: "/blog", title: "Blog" },
      { link: "/blog-list", title: "Blog List" },
      { link: "/blog-details", title: "Blog Details" },
      { link: "/blog-details-2", title: "Blog Details 02" },
    ],
  }, */

  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "Recursos",
    link: "/privacy-policies",
    active: "",
    sub_menus: [
      { link: "/privacy-policies", title: "privacy" },
      { link: "/terms", title: "TermsUse" },
      { link: "/commissions", title: "commissions" },
      { link: "/cookies-policy", title: "testimonialPrivaceName15"},
      { link: "/kyc-aml-policy", title: "testimonialPrivaceName17"},
      { link: "/community-rules", title: "communityRulesoverview_title"},
      { link: "/legal-notices", title: "legalNoticesoverview_title"},
      { link: "/helpCenter-whistleblower", title: "whistleblower"},
      { link: "/helpCenter-request-guide", title: "requestGuide"}

      // { link: "/wallet", title: "Wallet" },
      
    ],
  },
  
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contacto",
    link: "/contact",
    active: "",
  },
  

];
export default menu_data;
