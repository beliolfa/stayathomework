# stayathomework

> Stay at Homework

## Firebase Setup
- Sign In into Firebase
- Enable email/password Sign Up method
- Enable database
- Add security rules

```js
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read;
      allow write: if request.auth.token.email == request.resource.data.classroom + '@stayathomework.app';
    }
  }
}
```

## Build Setup

```bash
# install dependencies
$ yarn install

# copy env and fill it out with your firebase settings
$ cp .env.example .env

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
