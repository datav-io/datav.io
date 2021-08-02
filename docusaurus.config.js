const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

var githubUrl = "https://github.com/datav-io/datav"
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Datav',
  tagline: 'Data visualization and monitoring',
  url: 'https://datav.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'datav-io', // Usually your GitHub org/user name.
  projectName: 'datav.io', // Usually your repo name.
  plugins: ["@chatwoot/docusaurus-plugin"],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
  themeConfig: {
    chatwoot: {
      websiteToken: "xwxqmct4bznshbQAjmLwBxfu",
      baseURL: "https://app.chatwoot.com",  // optional
      enableInDevelopment: false,  // optional
    },
    prism: {
      theme: require("prism-react-renderer/themes/vsDark"),
    },
    // prism: {
    //   theme: lightCodeTheme,
    //   darkTheme: darkCodeTheme,
    // },
    algolia: {
      apiKey: 'eb68816ed36896bea6dd2faf8b0d62c7',
      indexName: 'datav',
      // Optional: Algolia search parameters
      searchParameters: {},
    },
    navbar: {
      title: 'Datav',
      logo: {
        alt: 'logo',
        src: 'img/logo/logo-xs.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: githubUrl,
          // label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: githubUrl,
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} APM.AI, Inc. `,
    },
    colorMode: {
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "🌑",
        lightIcon: "💡",
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/index.css'),
        },
      },
    ],
  ],
};
