import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

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
  try {
    const poolRegs = await getDocs(query(collection(db,'pool_registrations'), where('name','==',"Siddarth Sanghvi")));
    poolRegs.forEach(d => console.log(d.id, d.data()));
  } catch(e) { console.error(e); }
  process.exit();
}
run();
