<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My App</title>

    <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet">

    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList"></script>

    <!-- update the version number as needed -->
    <script defer src="/__/firebase/7.24.0/firebase-app.js"></script>
    <!-- include only the Firebase features as you need -->
    <script defer src="/__/firebase/7.24.0/firebase-auth.js"></script>
    <script defer src="/__/firebase/7.24.0/firebase-database.js"></script>
    <script defer src="/__/firebase/7.24.0/firebase-storage.js"></script>
    <script defer src="/__/firebase/7.24.0/firebase-remote-config.js"></script>
    <script defer src="/__/firebase/7.24.0/firebase-performance.js"></script>
    
    <!-- initialize the SDK after all desired features are loaded -->
    <script defer src="/__/firebase/init.js"></script>

    
  </head>
  <body>
    <div id='root'></div>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const loadEl = document.querySelector('#load');
        try {
          let app = firebase.app();
          let features = [
            'auth', 
            'database', 
            'messaging', 
            'storage', 
            'analytics', 
            'remoteConfig',
            'performance',
          ].filter(feature => typeof app[feature] === 'function');
          loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
        } catch (e) {
          console.error(e);
          loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
        }
      });
    </script>
  <script src="/static/js/bundle.js"></script><script src="/static/js/1.chunk.js"></script><script src="/static/js/main.chunk.js"></script><script src="/main.97a29d635679e666eb8c.hot-update.js"></script></body>
</html>
