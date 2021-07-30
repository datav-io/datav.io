const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

var githubUrl = "https://github.com/datav-io/datav"
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Datav',
  tagline: 'Dinosaurs are cool',
  url: 'https://datav.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'datav-io', // Usually your GitHub org/user name.
  projectName: 'datav.io', // Usually your repo name.
  plugins: ["@chatwoot/docusaurus-plugin"],
  themeConfig: {
    chatwoot: {
      websiteToken: "xwxqmct4bznshbQAjmLwBxfu",
      baseURL: "https://app.chatwoot.com",  // optional
      enableInDevelopment: false,  // optional
    },
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
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
          label: 'GitHub',
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
      copyright: `Copyright © ${new Date().getFullYear()} APM.AI, Inc. `,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      apiKey: 'eb68816ed36896bea6dd2faf8b0d62c7',
      indexName: 'datav',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: 'BH4D9OD16A',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'fr'],
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
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
