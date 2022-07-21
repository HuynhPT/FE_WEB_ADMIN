import Router from "./Routers/Router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNk_LnhRdshk5b1BMVxgyqSbEPZqtg35E",
  authDomain: "cms-fashion.firebaseapp.com",
  projectId: "cms-fashion",
  storageBucket: "cms-fashion.appspot.com",
  messagingSenderId: "1017704379456",
  appId: "1:1017704379456:web:004ed19c4e3fa3fe7d5ba5",
  measurementId: "G-2CGX6GN8BM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Router />
    </div>
  );
}
//gfh
//sdsd
export default App;
