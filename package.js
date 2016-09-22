Package.describe({
  summary: 'Share login among separate domains.',
  version: '0.0.9',
  name: 'lumin:shared-auth',
  documentation: 'README.md',
  git: 'https://github.com/bavuongco10/lumin-shared-auth.git'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.2');
  api.use([
    'kadira:flow-router',
    'templating',
    'kadira:blaze-layout',
    ], 'client');
  api.add_files([
    'lib/routes.js',
    'client/sharedAuthFrame.html',
    'client/sharedAuthFrame.js',
    'client/emptyLayout.html',
    'client/requestAuth.js'
  ], 'client');
});
