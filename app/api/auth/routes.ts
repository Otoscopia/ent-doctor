import { createSession, getAccount } from "../appwrite";

export const login = async (loginBody: LoginInterface) => {
  try {
    const session = await createSession(loginBody);
    if (session) {
      const account = await getAccount();
      if (account.labels.includes("doctor")) {
        return account;
      } else {
        throw new Error("You are not a doctor");
      }
    }
  } catch (error) {
    console.error("Error occurred during login:", error);
    throw error;
  }
};

export const getSession = async () => {
  try {
    const account = await getAccount();
    return account;
  } catch (error) {
    console.error("Error occurred during getSession:", error);
  }
};
