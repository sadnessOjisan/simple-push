# push4me

push test

```
yarn install

yarn run start:local

yarn run deploy:prd
```

```
curl -X POST -H "Authorization: key=FIREBASE_API_KEY" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "ONIAI",
    "body": "あなたのプロフィールがイイねされました",
    "icon": "firebase-logo.png",
    "click_action": "https://webpush2me.firebaseapp.com"
  },
  "to": "TOKEN"
}' "https://fcm.googleapis.com/fcm/send"
```
