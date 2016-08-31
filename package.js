Package.describe({
    name: 'lancelotsmith:validatejs',
    summary: 'OHIF Validatejs temporary',
    version: '0.0.1',
    git:"https://github.com/lancelotsmith/validatejs.git"
});

Package.onUse(function(api) {
    api.versionsFrom('1.3.5.1');

    api.use('ecmascript');

    api.addFiles('lib/validate.js', 'client');
    api.addFiles('load.js', 'client');

    api.export('validate', 'client');
});
