import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint(process.env.NEXT_PROJECT_END_POINT)
  .setProject(process.env.NEXT_PROJECT_ID);

export const account = new Account(client);
export { ID } from "appwrite";
