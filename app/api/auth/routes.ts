import { createSession, getAccount, teams } from "../appwrite";

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

export const getTeams = async () => {
  try {
    const team = await teams.list();
    return team;
  } catch (error) {
    console.log("Error fetching teams");
  }
};
