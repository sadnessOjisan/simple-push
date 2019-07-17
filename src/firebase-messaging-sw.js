importScripts("https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.2.4/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "315975119135"
});

const messaging = firebase.messaging();

/**
 * background時の通知の扱い
 */
messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  var notificationTitle = "Background Message Title";
  var notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png"
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

/**
 * foreground時の通知の扱い
 */
self.addEventListener("push", function(event) {
  const title = "ONIAI";
  const options = {
    body: "あなたのプロフィールがイイねされました",
    // 通知の右にでる画像
    icon:
      "https://www.gstatic.com/devrel-devsite/va3a0eb1ff00a004a87e2f93101f27917d794beecfd23556fc6d8627bba2ff3cf/firebase/images/lockup.png",
    badge: "https://www.fnordware.com/superpng/pnggrad8rgb.png"
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
