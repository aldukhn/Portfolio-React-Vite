const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_API_KEY_auth,
  projectId: import.meta.env.VITE_API_KEY_projectId,
  storageBucket: import.meta.env.VITE_API_KEY_storageBucket,
  messagingSenderId: import.meta.env.VITE_API_KEY_messagingSenderId,
  appId: import.meta.env.VITE_API_KEY_appId,
  measurementId: import.meta.env.VITE_API_KEY_measurementId,
};

export default firebaseConfig;
