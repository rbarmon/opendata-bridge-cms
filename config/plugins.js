module.exports = ({ env }) => ({
  i18n: true,
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
  upload: {
    config: {
      provider: 'strapi-provider-upload-azure-storage',
      providerOptions: {
        account: env('STORAGE_ACCOUNT'),
        accountKey: env('STORAGE_ACCOUNT_KEY'), //either account key or sas token is enough to make authentication
        sasToken: env('STORAGE_ACCOUNT_SAS_TOKEN'),
        serviceBaseURL: env('STORAGE_URL'), // optional
        containerName: env('STORAGE_ACCOUNT_CONTAINER'),
        defaultPath: 'assets',
        cdnBaseURL: env('STORAGE_CDN_URL'), // optional
        defaultCacheControl: env('STORAGE_CACHE_CONTROL'), // optional
        removeCN: env('REMOVE_CONTAINER_NAME'), // optional, if you want to remove container name from the URL
      },
    },
  },
});
