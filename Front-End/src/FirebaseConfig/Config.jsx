import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyB0W0CwJbY4TsrxJG9Hcr_0T29d59LTspY",
  authDomain: "imageuploadnicheve.firebaseapp.com",
  projectId: "imageuploadnicheve",
  storageBucket: "imageuploadnicheve.appspot.com",
  messagingSenderId: "233692548368",
  appId: "1:233692548368:web:2029da0e8ad15cb103e995",
  measurementId: "G-L68GFHHQVQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app)
export default storage;
// const analytics = getAnalytics(app);