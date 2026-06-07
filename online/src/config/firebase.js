import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDVPuTDi9shJbkNXOwSqoyYEeQearaH9Pk',
  authDomain: 'umkemon-quiz.firebaseapp.com',
  databaseURL: 'https://umkemon-quiz-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'umkemon-quiz',
  storageBucket: 'umkemon-quiz.firebasestorage.app',
  messagingSenderId: '437349864350',
  appId: '1:437349864350:web:9051969480025170373c8f',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);
export const auth = getAuth(firebaseApp);

export function signInAnonymousUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        unsubscribe();
        resolve(user);
      }
    }, reject);

    signInAnonymously(auth).catch(reject);
  });
}
