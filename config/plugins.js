module.exports = ({ env }) => ({
  // https://github.com/DomDew/strapi-plugin-fuzzy-search/issues/92
  'fuzzy-search': {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: 'api::project.project',
          modelName: 'project',
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: 100,
            keys: [
              {
                name: 'title',
                weight: 200,
              },
              {
                name: 'description',
                weight: 200,
              },
            ],
          },
        },
      ],
    },
  },
});
