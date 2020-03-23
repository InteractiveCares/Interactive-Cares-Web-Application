import firebase from 'firebase';

  const firebaseConfig = {
  apiKey: "AIzaSyBlGGVOrAc203ypGEI_GYJYo1hc2sid9go",
  authDomain: "interactive-cares-4166b.firebaseapp.com",
  databaseURL: "https://interactive-cares-4166b.firebaseio.com",
  projectId: "interactive-cares-4166b",
  storageBucket: "interactive-cares-4166b.appspot.com",
  messagingSenderId: "864360991471",
  appId: "1:864360991471:web:5a52b66cc97ea9be44691a",
  measurementId: "G-H5X209V4F7"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;