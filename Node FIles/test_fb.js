import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcBGrOG5cfRRSrIsSFykV8BNo2Gc0VVcU",
  authDomain: "sind-society.firebaseapp.com",
  projectId: "sind-society",
  storageBucket: "sind-society.firebasestorage.app",
  messagingSenderId: "821689204364",
  appId: "1:821689204364:web:68aa0db383e84b051145a9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function run() {
  const docs = await getDocs(collection(db, 'bookings'));
  docs.forEach(d => console.log(d.id, d.data()));
  process.exit();
}
run();
