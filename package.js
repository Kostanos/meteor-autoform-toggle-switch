Package.describe({
  name: 'kostanos:autoform-toggle-switch',
  summary: 'Add support of CSS toggle switch to autoform',
  version: '1.0.0',
  git: 'https://github.com/Kostanos/meteor-autoform-toggle-switch.git'
});

Package.onUse(function(api) {
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');
  api.use('kostanos:meteor-css-toggle-switch@1.0.0');

  api.addFiles([
    'autoform-toggle-switch.js'
  ], 'client');
});
