Package.describe({
  summary: "Share login among separate domains.",
  version: "0.0.8",
  name: "lumin:shared-auth",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.2');
  api.use([
    'kadira:flow-router',
    'templating'
    ], 'client');
  api.add_files([
    'lib/routes.js',
    'lib/sharedAuthFrame.html',
    'lib/sharedAuthFrame.js',
    'lib/emptyLayout.html',
    'lib/requestAuth.js'
  ], 'client');
});
