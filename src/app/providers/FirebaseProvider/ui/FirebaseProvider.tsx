import { initializeApp } from 'firebase/app';

import { firebaseConfig } from '../config/config';

export const FirebaseProvider = initializeApp(firebaseConfig);
