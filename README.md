# timesete-back

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDMMRLFWltiU63LOOjwXAjNvTeJ8GALGqw",
    authDomain: "backend-timesete-mundo-diverso.firebaseapp.com",
    projectId: "backend-timesete-mundo-diverso",
    storageBucket: "backend-timesete-mundo-diverso.appspot.com",
    messagingSenderId: "829666527582",
    appId: "1:829666527582:web:ab9410bc0a052bb5f427cf",
    measurementId: "G-DQQR2YWZFG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
<!--  -->

service firebase.storage {
match /b/{bucket}/o {
match /{allPaths=\*\*} {
allow read, write: if request.auth != null;
}
}
}
[X] User
[X] Token
[X] Background
[X] CoverPhoto
[X] Category
[X] Shape
[X] Color
[X] Character
[X] Part
[X] Member
[X] Content
[X] Article
[.] Challenge
[.] Goal
[.] Questionpass
[.] alter table users
https://www.getpostman.com/collections/3cff4e1af5ff24405c0d
heroku config:set S3_KEY=8N029N81 S3_SECRET=9s83109d3+583493190

[V] [find all] parts com category, color, shape
[V] [find all 2 formato] parts com category, color, shape
[V] [find all] user com lista character, member, part, category, content, article
[V] [find/id] user com character, member, part, category, content, article
[V] [find] content com article, category
[V] [create] personagem {parts:[1,2,3,4], ispublic}

Qual o sobrenome da avó,
Qual o nome do primeiro animal de estimação
cor favorita
