hexo.extend.injector.register('body_end', `
  <div id="aplayer"></div>
  <link defer rel="stylesheet" href="https://cdn.staticfile.org/aplayer/1.10.1/APlayer.min.css">
  <script src="https://cdn.staticfile.org/aplayer/1.10.1/APlayer.min.js"></script>
  <script defer src="/js/aplayer.js"></script>
`);

!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
      oldLoadAp && oldLoadAp();
  
      new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        autoplay: false,
        loop: 'all',
        order: 'random',
        theme: '#b7daff',
        preload: 'none',
        audio: [
          {
            name: 'song1',
            artist: 'artist1',
            url: '/songs/song1.mp3',
            cover: '/img/cover.jpg'
          }
        ]
      });
    }
  })();