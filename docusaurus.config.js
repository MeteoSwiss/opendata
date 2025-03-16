// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Data Documentation',
  tagline: 'Open Data Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://meteoswiss.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/opendata/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MeteoSwiss', // Usually your GitHub org/user name.
  projectName: 'opendata', // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'it'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        /*
        blog: {
          routeBasePath: '/',
          blogTitle: 'Open Data Documentation',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        */
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/mch_logo_en.png',
      colorMode: {
          defaultMode: 'light',
          disableSwitch: true,
          respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Open Data Documentation',
        logo: {
          alt: 'MeteoSwiss - Logo',
          src: 'img/mch_logo_$locale$.png',
          //svg: ['img/logo.svg', 'img/admin_text.svg'],
        },
        items: [
          /*
          {
            type: 'docSidebar',
            sidebarId: 'dataSidebar',
            position: 'left',
            label: 'Data Documentation',
          },
          */
         /*
          {
            type: 'custom-myAwesomeNavbarItem',
            sidebarId: 'mchLogo',
            position: 'left',
            label: 'Data Documentation',
          },
          */
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/MeteoSwiss/opendata',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contact',
            items: [
              {
                label: 'MeteoSwiss',
                href: 'https://www.meteoschweiz.admin.ch/ueber-uns/kontakt.html',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/MeteoSwiss/opendata',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Federal Office of Meteorology and Climatology MeteoSwiss.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
