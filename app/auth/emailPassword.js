import * as firebase from "firebase";

export const createUserWithEmailAndPassword = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signInWithEmailAndPassword = (email, password, navigation) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user);
      () => navigation.push("Jobs");
      // ...
    })
    .catch((error) => {
      console.log(error);
    });
};
