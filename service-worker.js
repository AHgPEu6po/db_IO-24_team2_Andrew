/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "cb5f301c1d327ad1309273f60d61d6ae"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "3f53657b5cbe89b2ab5397394cd8b99c"
  },
  {
    "url": "assets/css/0.styles.c1d1875c.css",
    "revision": "2a505d985c9c7f326236af42d459b899"
  },
  {
    "url": "assets/img/create.aac03c42.png",
    "revision": "aac03c424970ecf57c8539a30dfb20f2"
  },
  {
    "url": "assets/img/create2.a05a46d1.png",
    "revision": "a05a46d161a2ee89245de3e1bec23f13"
  },
  {
    "url": "assets/img/delete.59ad0950.png",
    "revision": "59ad0950223ca2bd4b92ca9f3571d176"
  },
  {
    "url": "assets/img/main1.3224f155.png",
    "revision": "3224f1550a976a8d84d2dce8510efe7f"
  },
  {
    "url": "assets/img/main2.3a5f1d15.png",
    "revision": "3a5f1d15684bf9c0e53f6bb2e0d3da54"
  },
  {
    "url": "assets/img/main3.cc1e5e74.png",
    "revision": "cc1e5e74ace4a787ce5474d88e95cde8"
  },
  {
    "url": "assets/img/main4.802f90b4.png",
    "revision": "802f90b4a04cfebebf3b2166c1538881"
  },
  {
    "url": "assets/img/read.ef29760c.png",
    "revision": "ef29760cb744ea71bd951887e04e9eae"
  },
  {
    "url": "assets/img/relation_scheme.94590443.png",
    "revision": "9459044361aadcdd25fe8aa59afec3ea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update.d7ad6462.png",
    "revision": "d7ad64627264fe601d4ccba28b9c2cbb"
  },
  {
    "url": "assets/js/10.c2d6dd61.js",
    "revision": "8f4057e904de8901a9080ca2e7942b29"
  },
  {
    "url": "assets/js/11.441c91ce.js",
    "revision": "8e2bcb3bf680a0f58bf3c74f11b9ba46"
  },
  {
    "url": "assets/js/12.c1d64cde.js",
    "revision": "423728ab885fd31ebf6d69834ae9cd1c"
  },
  {
    "url": "assets/js/13.7c4b8e13.js",
    "revision": "35a69dfbf8ca25d427ff3e2988698eff"
  },
  {
    "url": "assets/js/14.feec8449.js",
    "revision": "a92d34174fdfc7015174ba7721b7d889"
  },
  {
    "url": "assets/js/15.2fd3d02a.js",
    "revision": "f139e857ec666f4703acbce4d11121cc"
  },
  {
    "url": "assets/js/16.014006cc.js",
    "revision": "674e60b6e3f0fd5bef4da819be47034b"
  },
  {
    "url": "assets/js/17.c8feaac9.js",
    "revision": "2f9f9373f053050a5da46cbc5d55c09c"
  },
  {
    "url": "assets/js/18.e7eabc24.js",
    "revision": "1b0d63c04d2a1886d67a16d060a12e4d"
  },
  {
    "url": "assets/js/19.d77c5342.js",
    "revision": "44b3de3515068da0d444fe9753c8a692"
  },
  {
    "url": "assets/js/2.be0fdd33.js",
    "revision": "e987c7d6ffc0022038c9ec0723492141"
  },
  {
    "url": "assets/js/20.1f6bd6a8.js",
    "revision": "d592fba4274287b97d4d3e79f202a82f"
  },
  {
    "url": "assets/js/21.517956c6.js",
    "revision": "6ad19dbfff221debb82bdf45454b01a6"
  },
  {
    "url": "assets/js/22.354c2bf4.js",
    "revision": "645c74043074395dc03ca24c40e2bd57"
  },
  {
    "url": "assets/js/24.752b1791.js",
    "revision": "8b61f9ae3b067ff16636e074298561de"
  },
  {
    "url": "assets/js/3.06328954.js",
    "revision": "7d34bcf769e4a6c8dc9cb547d44c9a54"
  },
  {
    "url": "assets/js/4.0955b6ce.js",
    "revision": "b4800ba10b94df085c26412801fe34d0"
  },
  {
    "url": "assets/js/5.125f3ffb.js",
    "revision": "e85c8cf6fbdce593550ad6eddd9ef42d"
  },
  {
    "url": "assets/js/6.65b9069a.js",
    "revision": "6b693a26c955af53c77a1b13f910a30e"
  },
  {
    "url": "assets/js/7.8183665d.js",
    "revision": "556d70021e8853d389fafead5f6e8655"
  },
  {
    "url": "assets/js/8.1764375e.js",
    "revision": "0be00e955ad1ab792169e4e915ac4a84"
  },
  {
    "url": "assets/js/9.d1d13638.js",
    "revision": "c0bb7ce4390d88414a1f20be9212799d"
  },
  {
    "url": "assets/js/app.4192741b.js",
    "revision": "59bb626c895a196f6bed958afab09870"
  },
  {
    "url": "conclusion/index.html",
    "revision": "785350629e94eee2e796a9f4fce979f3"
  },
  {
    "url": "design/index.html",
    "revision": "bcffa4f9bec20ae754196d5c61f7bc68"
  },
  {
    "url": "index.html",
    "revision": "1c537c7c1e177dccde67254b23ba8afd"
  },
  {
    "url": "intro/index.html",
    "revision": "ce1c459b55f2580defc55bc7a0acac01"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "3663ecd7c1ef34c1e4c5e5420ce9653d"
  },
  {
    "url": "software/index.html",
    "revision": "acc5d3082fde8c91d8513f603f372eec"
  },
  {
    "url": "test/index.html",
    "revision": "30b5ef0218191dd76d568406a2998ae5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
