// auth.js

/************************************
 * Top-Level Declarations
 ************************************/
let auth;
let db;
let firebase;

// Note: Double-check your storageBucket if you plan to use Cloud Storage.
// Firebase projects typically have buckets like "<project-id>.appspot.com".
// If "tiktokrescue-b1657.firebasestorage.app" is correct, leave it as is.
// Otherwise, update it to match your Firebase Console's bucket name.
const firebaseConfig = {
  apiKey: "AIzaSyAUMUhiYqLvcRdr3Bruu6vW_eR5NIOey_8",
  authDomain: "tiktokrescue-b1657.firebaseapp.com",
  projectId: "tiktokrescue-b1657",
  storageBucket: "tiktokrescue-b1657.firebasestorage.app",
  messagingSenderId: "854599213395",
  appId: "1:854599213395:web:c4a53d76294e65136f01a6",
  measurementId: "G-TS5SBFV0ZC"
};

/************************************
  * Single DOMContentLoaded Listener
  ************************************/
document.addEventListener('DOMContentLoaded', () => {
  // Make sure Firebase SDK is available on window
  firebase = window.firebase;
  if (!firebase) {
    console.error("Firebase SDK not found on window. Make sure the Firebase scripts are loaded first.");
    return;
  }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  // Create messages collection if it doesn't exist
  db.collection('messages').get().then((snapshot) => {
      if (snapshot.empty) {
          console.log('Messages collection ready');
      }
  });

  auth = firebase.auth();

  // Initialize UI after Firebase setup
  initializeAuthUI();

  // Attach the global auth state listener
  auth.onAuthStateChanged(handleAuthStateChange);
});

/************************************
 * Authentication UI Initialization
 ************************************/
let isSignUp = true; // Tracks whether we're signing up or signing in

function initializeAuthUI() {
  const authUI = document.getElementById('authUI');
  if (!authUI) {
    console.warn("No element with ID 'authUI' found. UI won't render here.");
    return;
  }

  authUI.innerHTML = `
    <button class="auth-button google-button" onclick="signInWithGoogle()">
      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
           alt="Google logo" 
           width="18" 
           height="18">
      Continue with Google
    </button>
    <div class="auth-separator">
      <span>or</span>
    </div>
    <div id="emailAuth">
      <input type="email" id="email" placeholder="Email" class="input-field">
      <input type="password" id="password" placeholder="Password" class="input-field">
      <button class="auth-button email-button" onclick="handleEmailAuth()">
        ${isSignUp ? 'Sign Up with Email' : 'Sign In with Email'}
      </button>
    </div>
    <div class="auth-toggle" onclick="toggleAuthMode()">
      ${isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
    </div>
  `;
}

/************************************
 * Toggle Between Sign Up / Sign In
 ************************************/
function toggleAuthMode() {
  isSignUp = !isSignUp;
  initializeAuthUI();
}

/************************************
 * Google Sign-In
 ************************************/
async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await auth.signInWithPopup(provider);
    // Check if this is a new user
    const isNewUser = result.additionalUserInfo.isNewUser;
    if (isNewUser) {
      await createUserProfile(result.user);
    }
    handleSuccessfulAuth(result.user);
  } catch (error) {
    console.error('Google auth error:', error);
    alert(error.message);
  }
}

/************************************
 * Email Authentication
 ************************************/
async function handleEmailAuth() {
  const email = document.getElementById('email')?.value;
  const password = document.getElementById('password')?.value;

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  try {
    let userCredential;
    if (isSignUp) {
      // Create new account
      userCredential = await auth.createUserWithEmailAndPassword(email, password);
      // Create user profile
      await createUserProfile(userCredential.user);
    } else {
      // Sign in to existing account
      userCredential = await auth.signInWithEmailAndPassword(email, password);
    }
    handleSuccessfulAuth(userCredential.user);
  } catch (error) {
    console.error('Authentication error:', error);
    alert(error.message);
  }
}

/************************************
 * Create User Profile in Firestore
 ************************************/
async function createUserProfile(user) {
  try {
    await db.collection('users').doc(user.uid).set({
      email: user.email,
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
}

/************************************
 * Handle Successful Auth
 ************************************/
async function handleSuccessfulAuth(user) {
  try {
    // Update last login timestamp
    await db.collection('users').doc(user.uid).update({
      lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    });

    // Store user info in session storage (ephemeral)
    sessionStorage.setItem('user', JSON.stringify({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    }));

    // Redirect to dashboard (customize path as needed)
    window.location.href = '/dashboard.html';
  } catch (error) {
    console.error('Error in post-authentication:', error);
  }
}

/************************************
 * Auth State Change Listener
 ************************************/
function handleAuthStateChange(user) {
  if (user) {
    // User is signed in
    console.log('User is signed in:', user);

    // Retrieve profile
    db.collection('users').doc(user.uid).get()
      .then((userDoc) => {
        if (userDoc.exists) {
          const userData = userDoc.data();
          console.log('User profile:', userData);
          // Update UI
          updateUIForAuthenticatedUser(userData);
        }
      })
      .catch((error) => {
        console.error('Error getting user profile:', error);
      });
  } else {
    // User is signed out
    console.log('User is signed out');
    updateUIForUnauthenticatedUser();
  }
}

/************************************
 * Update UI for Authenticated User
 ************************************/
function updateUIForAuthenticatedUser(userData) {
  const authNav = document.querySelector('#auth-nav');
  if (authNav) {
    authNav.innerHTML = `
      <div class="flex items-center gap-2">
        <img src="${userData.photoURL || '/img/default-avatar.png'}" 
             alt="Profile" 
             class="w-8 h-8 rounded-full">
        <span>${userData.displayName || userData.email}</span>
        <button onclick="signOut()" class="text-sm text-red-500">Sign Out</button>
      </div>
    `;
  }
}

/************************************
 * Update UI for Unauthenticated User
 ************************************/
function updateUIForUnauthenticatedUser() {
  const authNav = document.querySelector('#auth-nav');
  if (authNav) {
    authNav.innerHTML = `
      <a href="/auth.html" class="flex items-center gap-1 hover:text-tiktok-blue transition-colors">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" 
             stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        Sign In
      </a>
    `;
  }
}

/************************************
 * Sign Out Function
 ************************************/
async function signOut() {
  try {
    await auth.signOut();
    sessionStorage.removeItem('user');
    window.location.href = '/';
  } catch (error) {
    console.error('Error signing out:', error);
    alert(error.message);
  }
}