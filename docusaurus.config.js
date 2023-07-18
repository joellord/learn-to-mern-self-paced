// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// Change here to customise config

// Name of the Github Repo
const workshopName = 'learn-to-mern-self-paced';

// Main page config
const title = "MERN Workshop";
const tagLine = "Build a MERN app with MongoDB, Express, React and Node.js";
const startButtonTitle = "Get MERNing!";

// Main Page Features
const featureList = [
  {
    title: 'Learn how to build a MERN app',
    illustration: 'img/docu.svg',
    description: `
        In this self-paced workshop, you will learn everything you need to get started with the MERN stack.
    `,
  },
  {
    title: 'Self Paced',
    illustration: 'img/typing.gif',
    description: `
        Do the workshop at your own pace. You can stop and start at any time.
    `,
  },
  {
    title: 'Follow Along',
    illustration: 'img/expanded-leafy.png',
    description: `
        Or follow along as the instructor builds the app.
    `,
  },
];

// UTM stuff

const utmAdvocateName = `joel.lord`;
const utmWorkshopName = 'mern_workshop'

const utmParams = `?utm_campaign=devrel&utm_source=workshop&utm_medium=cta&utm_content=${utmWorkshopName}&utm_term=${utmAdvocateName}`;

// Footer links (probably no need to change them)

const footerLinks = [
  {
    label: 'Try MongoDB Atlas',
    href: `https://www.mongodb.com/try/${utmParams}`,
  },
  {
    label: 'Forums',
    href: `https://www.mongodb.com/community/forums/${utmParams}`,
  },
  {
    label: 'Developer Center',
    href: `https://www.mongodb.com/developer/${utmParams}`,
  },
  {
    label: 'MongoDB University',
    href: `https://learn.mongodb.com/${utmParams}`,
  },
  {
    label: `© ${new Date().getFullYear()} MongoDB, Inc.`,
    href: "#",
  },
];

///////////////////////////////////////////////////////////////////////////////
// DON'T CHANGE ANYTHING BELOW UNLESS YOU KNOW WHAT YOU'RE DOING             //
///////////////////////////////////////////////////////////////////////////////

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `${title}`,
  tagline: `${tagLine}`,
  url: `https://joellord.github.io`,
  baseUrl: `/${workshopName}/`,
  projectName: 'joellord.github.io',
  organizationName: 'joellord',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  customFields: {
    startButtonTitle: `${startButtonTitle}`,
    featureList: featureList,
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `https://github.com/mongodb-developer/${workshopName}/blob/main`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-ZJ28V71VTQ',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        }
      },
      navbar: {
        logo: {
          alt: 'MongoDB Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
          className: 'navbar-logo',
          width: '135px',
          height: '100%'
        },
        items: [
          {
            href: `https://github.com/mongodb-developer/${workshopName}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: footerLinks,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'swift', 'kotlin'],
      },
    }),
};

module.exports = config;
