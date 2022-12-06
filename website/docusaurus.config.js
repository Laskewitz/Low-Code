// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Low Code & Fusion Dev',
  tagline: 'Power Platform - Cloud Integrations - Developer Tools',
  url: 'https://microsoft.github.io',
  baseUrl: '/Low-Code/',
  favicon: 'img/favicon.ico',

  // GitHub Pages Config
  organizationName: 'microsoft', 
  projectName: 'Low-Code', 
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({

        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },

        blog: {
          blogTitle: '#30DaysOfLowCode',
          blogDescription: 'Jumpstart your #LowCode and #FusionDev learning journey with #30Days of content and resources',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Recent Articles',
          tagsBasePath: 'tags',
          archiveBasePath: 'archive',
          postsPerPage: 1,
          showReadingTime: true,
          sortPosts: 'descending'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      navbar: {
        title: 'Low Code |',
        logo: {
          alt: 'Low Code Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/lowcode-february', label: '#LowCodeFeb ♥️', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Workshops',
          },
          {to: '/calendar', label: 'Calendar', position: 'right'},
          {
            href: 'https://github.com/microsoft/Low-Code',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },

      footer: {
        style: 'dark',

        /*
        logo: {
          alt: 'LowCode February Logo',
          src: 'img/???.png',
          href: 'https://aka.ms/lowcode-february',
          width: 280,
          height: 100,
        },
        */

        links: [

          {
            label: `🔖 Resources`,
            to: 'https://aka.ms/lowcode-february/collection'
          },
          {
            label: `Power Platforms`,
            to: 'https://learn.microsoft.com/en-us/power-platform/developer/get-started?WT.mc_id=javascript-82212-ninarasi'
          },
          {
            label: `Power Virtual Agents`,
            to: 'https://learn.microsoft.com/en-us/power-virtual-agents/fundamentals-what-is-power-virtual-agents?WT.mc_id=javascript-82212-ninarasi'
          },
          {
            label: `Power Automate`,
            to: 'https://learn.microsoft.com/en-us/power-automate/getting-started?WT.mc_id=javascript-82212-ninarasi'
          },
          {
            label: `Power Apps`,
            to: 'https://learn.microsoft.com/en-us/power-apps/powerapps-overview?WT.mc_id=javascript-82212-ninarasi'
          },
          {
            label: `Power BI`,
            to: 'https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-service-overview?WT.mc_id=javascript-82212-ninarasi'
          },
          {
            label: `Power Pages`,
            to: 'https://learn.microsoft.com/en-us/power-pages/introduction?WT.mc_id=javascript-82212-ninarasi'
          },
          {
            label: 'Privacy Statement ',
            to: 'https://privacy.microsoft.com/privacystatement',
          },
          { 
           label: `Copyright © ${new Date().getFullYear()} Microsoft`,
           to: 'https://microsoft.com'
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      // TODO: Configure to provide default OpenGraph Metadata 
      image: 'img/logo.png',
      metadata: [
        { 
          name: 'twitter:url', 
          content: 'https://aka.ms/lowcode-february'
        },
        { 
          name: 'twitter:title', 
          content: '#LowCodeFebruary is here!'
        },
        { 
          name: 'twitter:description', 
          content: 'Explore Low Code Development and Fusion Teams with Power Platforms, Azure and Developer Tools - with resources for self-study'
        },
        { 
          name: 'twitter:image', 
          content: 'img/logo.png' // TODO: Add URL to image
        },
        { 
          name: 'twitter:card', 
          content: 'summary_large_image'
        },
        { 
          name: 'twitter:creator', 
          content: '@nitya'
        },
        { 
          name: 'twitter:site', 
          content: '@AzureAdvocates'
        },
      ],

      /* Banner Announcements */
      announcementBar: {
        id: 'LowCode February kicks off Feb 1, 2022!',
        content:
          '<b> Join our Cloud Skills Challenge! | Give us <a href="https://github.com/microsoft/Low-Code"><b> a 🌟 on GitHub</b></a> </b> ',
        backgroundColor: '#050D20',
        textColor: '#4DC7B2',
        isCloseable: false,
      },

      /* Clarity Config *
      clarity: {
        ID: "", // Instructions below
      }
      */

    }),


  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. 
        steps: 2, // #images b/w min and max (inclusive)
        disableInDev: false,
      },
    ],

    /*
    [
      'docusaurus-plugin-clarity',
      {
      }
    ],
    */
  ],
};

module.exports = config;
