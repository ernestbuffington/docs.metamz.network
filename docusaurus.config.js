// const versions = require('./versions.json');

module.exports = { 
  title: 'Meta MZ Network Documentation',
  tagline: 'Your source of information for the Meta MZ Network',
  url: 'https://docs.metamz.network',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'ernestbuffington', // Usually your GitHub org/user name.
  projectName: 'The Meta MZ Network', // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ['php'],
    },
    algolia: {
      apiKey: '0000hidden0000',
      indexName: 'metamz',
    },
    navbar: {
      title: 'Meta MZ Network Documentation',
      logo: {
        alt: 'metamz',
        src: 'img/logo.svg',
      },
      hideOnScroll: true,
      items: [
        /*{
          to: 'versions',
          label: `${versions[0].substr(6)}`,
          position: 'left',
          style: {
            whiteSpace: 'nowrap',
            padding: '0.25rem 0.5rem 0.2rem 0.25rem',
            fontSize: 'calc(0.9 * var(--ifm-font-size-base))',
            textDecoration: 'underline',
          },
        },*/
        {
          label: 'About',
          position: 'left',
          activeBasePath: 'docs/about',
          items: [
            {label: 'The Meta MZ Network', to: 'docs/about/metamz'},
            {label: 'Release Notes', to: 'docs/about/releasenotes/release_notes'},
            {label: 'Contribution', to: 'docs/about/contribution'},
            {label: 'Support', to: 'docs/about/support'},
            {label: 'License', href: 'https://www.metamz.network/en/licences'},
          ]},
       // {to: 'docs/about/metamz', activeBasePath: 'docs/about',  label: 'About', position: 'left'},
        {to: 'docs/admin/introduction', activeBasePath: 'docs/admin',  label: 'Administration', position: 'left'},
        {to: 'docs/theme/overview', activeBasePath: 'docs/theme',  label: 'Theming', position: 'left'},
        {to: 'docs/develop/overview', activeBasePath: 'docs/develop', label: 'Development', position: 'left'},
        {to: 'docs/professional-edition/pe-intro', activeBasePath: 'docs/professional', label: 'Professional Edition', position: 'left'},
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ernestbuffington/docs.metamz.network',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'About',
              to: 'docs/about/metamz',
            },
            {
              label: 'Administration',
              to: 'docs/admin/introduction',
            },
            {
              label: 'Theming',
              to: 'docs/theme/overview',
            },
            {
              label: 'Development',
              to: 'docs/develop/overview',
            },
            {
              label: 'Professional Edition',
              to: 'docs/professional-edition/pe-intro',
            },
           /* {
              label: 'Models and APIs',
              href: '#',
            },
            {
              label: 'User Guide',
              href: '#',
            },*/
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'The Meta MZ Network Community',
              href: 'https://community.metamz.network/dashboard',
            },
            {
              label: 'The Meta MZ Network Translations',
              href: 'https://translate.metamz.network',
            },
          ],
        },
        {
          title: 'Social',
          items: [
           /* {
              label: 'Blog',
              to: 'blog',
            },*/
            {
              label: 'GitHub',
              href: 'https://github.com/ernestbuffington/metamz.network',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/metamz',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/metamz'
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Homepage',
              href: 'https://www.metamz.network',
            },
            {
              label: 'Marketplace',
              href: 'https://marketplace.metamz.network',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PHP-AN602. All rights reserved.  `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/ernestbuffington/docs.metamz.network/docs/documentation/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
