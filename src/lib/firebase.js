import { initializeApp } from "firebase/app";
import { getAnalytics,logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXSYX8T4iNNjRI_I-9ryD3nyYeIPCJ17w",
  authDomain: "qalamger0.firebaseapp.com",
  projectId: "qalamger0",
  storageBucket: "qalamger0.appspot.com",
  messagingSenderId: "576394838124",
  appId: "1:576394838124:web:f3407c5091c560a3d59849",
  measurementId: "G-7T1HMXSLKL"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
logEvent(analytics, 'puck in');