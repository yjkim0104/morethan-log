const CONFIG = {
  // profile setting (required)
  profile: {
    name: "james",
    image: "/myAvatar.svg",
    role: "Cloud/Application Architect",
    bio: "I am someone who loves all aspects of IT",
    email: "amofaith@gmail.com",
    linkedin: "amfaith",
    github: "amofaith",
    instagram: "",
  },
  projects: [
    {
      name: `Tach Talk Talk`,
      href: "https://github.com/amofaith",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Tech Talk Talk",
    description: "welcome to IT blog!",
    theme: "dark", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://amofaith.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Dev", "개발", "Architect", "Architure", "Cloud", "AWS", "MSA", "마이크로서비스", "클라우드", "Java", "자바", "Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },
  
  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "yjkim0104/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
