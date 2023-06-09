import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'e13f5b4d15ab4abcab12c990c0cbdb69',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Идущий к крипте',
  domain: 'igotocrypto.online',
  author: 'Идущий к крипте',

  // open graph metadata (optional)
  description: 'Изучаем как можно заработать на криптовалюте, разбираемся в лаунчпадах, ICO и IDO, что такое биткоин и блокчейн, где же деньги в крипте и как на этом заработать.',

  // social usernames (optional)
  twitter: 'igotocrypto',
  //github: 'vlafriday',
  //linkedin: 'vlafriday',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  youtube: '@igotocrypto', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'af7bd9afcfda4fde805684ad76f4e26d' //my
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: 'a92d3439695b41c0b813724811e2edb8' //my
  //   }
  // ]
})
