import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

// Login function
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user; // Return user object if login is successful
  } catch (error) {
    throw new Error(error.message); // Throw the error to handle it in the component
  }
};
