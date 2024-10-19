import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

export const createUser = async (email, password) => {
  try {
    // Create user with email and password in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
