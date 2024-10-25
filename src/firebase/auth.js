import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// export const doCreateUserWithEmailAndPassword = async (email, password) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

export const doCreateUserWithEmailAndPassword = async (email, password, role) => {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user role to Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      role: role,
      createdAt: new Date(),
    });

    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; // Propagate the error to the calling function
  }
};


export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // Save user role in Firestore if needed after Google sign-in (you can modify this based on your requirements)
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
