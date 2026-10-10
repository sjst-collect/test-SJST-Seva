
/**
 * Public frontend configuration.
 * Never store OAuth secrets, access tokens, or other secrets here.
 */
export const FRONTEND_CONFIG = {
  appName: 'SJST Seva',
  environment: 'TEST',

  // Used only to retrieve the public configuration.
  configBootstrapUrl:
    'https://script.google.com/macros/s/AKfycbxjh5zGEfC_Ny22DYwpGFUWMiKW4iknI-y4gXomz3WK5ezLIDpHmwLQC4rfltthYuca/exec',

  assets: {
    logoPath: 'images/Logo.jpeg',
    watermarkPath: 'images/Watermark.jpeg',
  },
} as const;
