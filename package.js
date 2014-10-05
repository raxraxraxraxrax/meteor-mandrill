Package.describe({
  "summary": "Send email via Mandrill's send-template.json",
  "git": "https://github.com/Wylio/meteor-mandrill",
  "version": "0.1.1",
  "name": "wylio:mandrill"
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.0');
    api.addFiles('mandrill.js', 'server');
});
