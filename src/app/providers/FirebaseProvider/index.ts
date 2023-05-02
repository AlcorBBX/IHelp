import { initializeApp } from 'firebase/app';

//
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: process.env.APP_API_KEY,
  authDomain: process.env.APP_AUTH_DOMAIN,
  projectId: process.env.APP_PROJECT_ID,
  storageBucket: process.env.APP_STORAGE_BUCKET,
  messagingSenderId: process.env.APP_MESSAGING_SENDER_I,
  appId: process.env.APP_APP_ID,
  measurementId: process.env.APP_MEASUREMENT_ID,
};

// const app = initializeApp(initConfig)
const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// @ts-ignore
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }

export {};
