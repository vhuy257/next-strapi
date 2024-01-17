module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com', 'trusty-desk-8c3c7017fe.strapiapp.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com', 'trusty-desk-8c3c7017fe.strapiapp.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
