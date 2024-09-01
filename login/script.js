import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTXsk0MQ3qr6Yb4WIw-eyb5bQhPvJBbKk",
    authDomain: "kisan-bazaar-d49cc.firebaseapp.com",
    projectId: "kisan-bazaar-d49cc",
    storageBucket: "kisan-bazaar-d49cc.appspot.com",
    messagingSenderId: "991371459927",
    appId: "1:991371459927:web:6d81ba7635ea36b672d212",
    measurementId: "G-EWJT0NFE6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Set up Google Provider
const provider = new GoogleAuthProvider();

// Function to handle Google Sign-In
document.getElementById("googleSignIn").addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("User signed in: ", user);
            // Redirect to your desired page after sign-in
            window.location.href = "../index.html";
        })
        .catch((error) => {
            console.error("Error during sign-in: ", error);
        });
});

// Function to handle Email/Password Sign-Up
document.getElementById("signUpForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User signed up: ", user);
        // Redirect or perform actions
        window.location.href = "../index.html";
    } catch (error) {
        console.error("Error during sign-up: ", error);
    }
});
