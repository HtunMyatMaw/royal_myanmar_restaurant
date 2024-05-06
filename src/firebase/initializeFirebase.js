import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCG1CyN2Z90Um5QzhsEsyz0zy8vZ3gQXxg",
    authDomain: "royal-myanmar-restaurant.firebaseapp.com",
    projectId: "royal-myanmar-restaurant",
    storageBucket: "royal-myanmar-restaurant.appspot.com",
    messagingSenderId: "351421881569",
    appId: "1:351421881569:web:6520a583cb57044e3feba0",
    measurementId: "G-DS71YQJL6F"
};

const app = initializeApp(firebaseConfig)

export default app
