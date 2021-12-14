'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6fb36731382891d149e73bc58be1b7d4",
".git/config": "b936f7f31a9981d1f898571742a2dac7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fe6bc4c4ed948700c7b4d511e8668c49",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c1ebbb2f283b5c3ce99f4b8bf90a87ce",
".git/logs/refs/heads/master": "c1ebbb2f283b5c3ce99f4b8bf90a87ce",
".git/logs/refs/remotes/origin/master": "b6cde2b9430da69650646b3af45401e8",
".git/objects/09/422ca5fab03847b59e35bdb2b968debdbb2334": "885f25552f947d954ddccfc8402ef348",
".git/objects/0b/26872bb62b437e383202fb457b5b96703b3cf0": "550af1d13f39983711131b1f75f0ac39",
".git/objects/0b/5ed87fbab6fbf5acf4649539763130d7b18801": "cc23e9e18d8fdbcf2c6d316218648917",
".git/objects/11/f3bf8b0c96edbc833fb5d4e1c84753bb944eda": "1c524510a670797b7c2427f691cae3c2",
".git/objects/12/95f7f0f2fdac5ee43b4bd93231a49b563ba277": "c216bc4e4fd5b7d0186410380b6939f0",
".git/objects/1b/85020b60af1fd1382f0dd0ea850ba555f93d94": "b72141ba0aff0a948c6e17db8d5e07f9",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/835a90a37474585b733f91066ad393cb064b09": "19c453793c5e5de7d425f19a9aa8a37e",
".git/objects/36/e389b1f2cc74ce5cd13de67df2464bdd7cb55a": "2dca5c9ecadd627ec626fa85cb6516b5",
".git/objects/37/87cfd304f655016c33fba1b9af7f00aa1d6363": "ffa962f4ef050e56d690538aa5c71791",
".git/objects/37/c588bc34f684dd6924a4679616f30b796d3c80": "65d0bda8ce6d675f5c8e08a8cdb8fa0e",
".git/objects/40/c786adfd0650fa7b69d77f7b22b58e3e655749": "3eb491ec366f35f87385b6eb6f28a2b0",
".git/objects/43/4f0b82853d5dee3cd12a77a21fc9ac7fa0c03e": "da8485967d28ab172810f3c5d4383c68",
".git/objects/43/dd750faf5092aca858ae96ec4abd919928f5eb": "f053c53c5f4493b94a742cd4b0fbc0c0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/5dc28c8c1a1818afc567a9959578d230428469": "03dbebeb9fc21039e4ee91c6c7e31604",
".git/objects/4f/9374ce08f3f47f9ee5d162725f47f75ded3fbd": "ee485ec9bca3b6bb43a2efa5f45ae007",
".git/objects/53/fc7b8ccf4b42730767c355a6b6e9a12b93d675": "d5d610ba8aae33ef8e986ace1253817b",
".git/objects/56/332bd65912d723f881d81cf66a6c9d05c93df2": "8506d8c19b5238b013ab46eb1acaf3ea",
".git/objects/56/50a45c5293ff248be032b48e7bd2c3b51e7ae3": "3dc0c3b5ad1423e9b3b659f2c0860306",
".git/objects/59/747db7c2f69b0d16651cce8410acaf6af81bd1": "dfb7b00213e20515a852f9d882060956",
".git/objects/5a/1e6ab593c93f5a564cd052d363a33f5b8deaa2": "25cff1ae58d8d46f652c0918cb288c31",
".git/objects/5c/26f093a63926db6668b3b0dc3fbc66856352eb": "9054431aefe2ff82a602718bd0726bc6",
".git/objects/61/68f696a61361b8efa7ad699d3cb5035c03fd4d": "dc8f59f2bb0a68eac82f19e0c4601841",
".git/objects/68/2b3efae95aa78ba9caa99296db35a9799045d4": "27350afb826a439326135cf21b84f952",
".git/objects/6b/3aace0f0db23c4d8990ed0c328dd4e849f0a18": "449d4eb0bea1c70ca9236c9cd2951d8a",
".git/objects/6d/8ce2668b05bc31ad3df13054c53ddd44798b93": "fb16e088b6bd73bcbb10b9c2b2b58234",
".git/objects/76/5b37dff844a8da9786db157fcb369905768724": "5670349d0aee611ac35f8f7c78a0e0c4",
".git/objects/77/6bdf455eaf60f1a07e56086c252a180a718859": "1201bed05298ffd8ee8cfeb81cdea80c",
".git/objects/77/edd4d5c594bdd876cbc2a44f55c9d0e5909d8c": "e5aff609f000c099d6b770c356f39e11",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fbe226abede62eb33ce8dd3c674fcbba98350a": "251fc7216180088a79cabc9449e4bf86",
".git/objects/81/930117bd85af38744d212c7d481adcf2386591": "e9a222c1866264893615d5427021ed9d",
".git/objects/86/e2264b4497e7c439c719bd48619870c3cd2f00": "67021a391204fbd9b297414a46d215b4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e8c9ff1b637203a2ec91c60aafc35d40e10b70": "282cfa48793b34a0335fd1bdca2449bc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/dd7f3ab588fbd74ba31933e7b785947ce992dd": "be6c62005946d7bfbf1767b11b6daa8c",
".git/objects/93/5d23734ddec434cf7cf73dce8b91de05342c53": "d6e355da79d97709a1e9996e0cc939a9",
".git/objects/94/f234390eee5e80789f4c2699964ace08522a24": "74e30b111f684a862921659ae03fc5e8",
".git/objects/9c/766fa85950442ad7b599d6cd98b8bd34afa247": "5c31da723e46df7ccbee118c465e63d9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/fb52304c6f16f789b3b9dc9e3135a819555db0": "51383515579dd3dec6bb146578c381d4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/3a11a885f8e6c0f1628a8cfb78ced27dd6b765": "bb616b34f1f1120da826391ea15c6fe7",
".git/objects/af/b779d521599de353c58554118ce0fe44e6dd7e": "beb7409fa6ba8bd58bb057ea613c5305",
".git/objects/b0/fa3a0cb39c092d4af3f65032d12d1166379759": "302653cb70552c302cca5dc285ee0dfc",
".git/objects/b1/b08af2b559ba4f5089f1154fee44d7afca60c7": "ed4e62cb550d61429fb4b7d0422d8700",
".git/objects/b3/755df1578e56866259e0196e9e24c0dbb6d616": "38a608141f4734e34b6573e98a74bb35",
".git/objects/b6/d1463f879c3f20ab6acec570088c7c322ff75d": "c9a513e8e6c7ceb238fa2dfd83beb997",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/b350d61f285ba4695ef36269c7794143bbd453": "404796f6dae6c43580400255e90faf9f",
".git/objects/c0/a386544d18b1ce16eb47904d0d58c293ee17c2": "6cdf9744b30be97b782c66f834e17912",
".git/objects/c6/43b4be5de454e590491b94e9818386da11b2b9": "a6f84afa950ae5333a1af9b5336fa6e1",
".git/objects/c6/f4f70d9d3d68c43c08ec34a9316d8f757a0312": "d8218f82d9e58d310797e8e9a3f9e47c",
".git/objects/cd/24b7033414a1ebd0cd18d889ae75ae77b52455": "4d2357e8dd0ccd0370c5e9f08d1c5084",
".git/objects/d1/c7aa4f0251610a9e5e05cd6a570b56ca33e8d3": "c4582ea44f5cf97ebe64ce0364d51009",
".git/objects/d1/d5f1b1d572fc614ab6ad44c0726478c725e334": "862276adb3689cf1030da053390ac9d4",
".git/objects/d5/bb32168fd4c15c7e75e7f4211d5b21f0314fe4": "cac3c78061f1389e9bfe51e912c8ffd8",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/51f514eb897c96c8d0cfb6dd92202de68bfa0e": "72f2996ef4861b5eaa88f96f45c2b253",
".git/objects/e8/33d91eb565da48e13d90d74ae1f72e20e668f6": "8e8b5f28289ed4423f065f778949382c",
".git/objects/e9/effa61fb35af537f127eda5c3a3a15d7a0c177": "3bb104b67ac8d6d164a5dea9a4aeb5c2",
".git/objects/eb/0afcc6e20ff3c8176d98b1202a7a5e1e6b27b8": "9d4f81d498fa485e9510c6ad805d635d",
".git/objects/ed/fc3aac07e23cb95b5b40e33ed0b35f93410c6d": "d867bf3b14bfd851bc0102f8acff02ec",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f7/5ea93babd34e43899ec71e3602bcf2f7511987": "50ca272790d6f00cd0293fd24b442836",
".git/objects/f7/c6c11030a8eed8a666feb70420af1929fcbf16": "9194e03cbd5ac213a7f346f3df67979c",
".git/objects/f8/ad40b72c353fcb3425690c78bbc32680b6a7e0": "97984f42fa113c922821048fa9879078",
".git/refs/heads/master": "165b64586c131d0bf88091b56ee6280b",
".git/refs/remotes/origin/master": "165b64586c131d0bf88091b56ee6280b",
"assets/AssetManifest.json": "1e0fdef46bdf045656da5bc623dca564",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/img/code.svg": "2674344054f420405633ff475cf86826",
"assets/img/english.svg": "e5564902e2642c5e6e2e98e68a7d41f5",
"assets/img/github.svg": "567e5d3d4b2dad49c4c6c50d7f203171",
"assets/img/how.svg": "b58796375c832b984fb4101eb1302c10",
"assets/img/info.svg": "4dac6c6a54af43af4c48a0bbacbfd59a",
"assets/img/information.svg": "a450706d0f7ed38632278cda8c51f3d3",
"assets/img/queen.svg": "24dcd8a43f961d0fcc31baa88e59c7d2",
"assets/img/rules.svg": "3c4c36966d597ca1ed68ffba1a568069",
"assets/img/spanish.svg": "36938bbe277961386e7e309dcb30cbd8",
"assets/NOTICES": "2cc700085472de96b7e88aa3c0c8dde6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "19172ed8d2fbc85d6999835691fbded0",
"/": "19172ed8d2fbc85d6999835691fbded0",
"main.dart.js": "c206fe3f39193a3ee58ab57b40bdd7fe",
"manifest.json": "20101aaf354164fe28444c2012849ba8",
"version.json": "1a39475e3b1e69eead39c78fc6723e51"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
