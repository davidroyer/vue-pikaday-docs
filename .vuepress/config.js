module.exports = {
  base: '/vue-pikaday/',
  title: 'VuePikaday',
  head: [
    ['link', {
      rel: 'stylesheet',
      href: '//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600|Roboto Mono'
    }]
  ],
  markdown: {
    config: md => {
      md.use(require('markdown-it-include'));
      md.use(require('markdown-it-attrs'));
    }
  },
  themeConfig: {
    repo: 'enrian/vue-pikaday',
    nav: [
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Config Reference',
        link: '/config/#props'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'installation',
            ['usage', 'Usage']
          ]
        }
      ],
      '/config/': [
        {
          title: 'Config Reference',
          collapsable: false,
          children: [
            ['#props', 'Props'],
            ['#directives', 'Directives']
          ]
        }
      ]
    }
  }
};
