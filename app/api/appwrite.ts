import { Account, Client, Databases, Storage, Teams } from "appwrite";

const ENDPOINT = process.env.PROJECT_ENDPOINT!;
const PROJECT_ID = process.env.PROJECT_ID!;
export const DATABASE_ID = process.env.DATABASE_ID!;
export const PATIENT_COLLECTION = process.env.PATIENT_COLLECTION!;
export const SCREENING_COLLECTION = process.env.SCREENING_COLLECTION!;
export const NURSE_COLLECTION = process.env.NURSE_COLLECTION!;
export const FOLLOW_UPS_COLLECTION = process.env.FOLLOW_UPS_COLLECTION!;

export const client = new Client();

client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const teams = new Teams(client);

export const getAccount = () => account.get();

export const createSession = (loginBody: LoginInterface) =>
  account.createEmailSession(loginBody.email, loginBody.password);

export const deleteCurrentSession = () => account.deleteSession("current");

export const fetchSchoolCollection = () =>
  databases.listDocuments(DATABASE_ID, NURSE_COLLECTION);
export const fetchPatientCollection = () =>
  databases.listDocuments(DATABASE_ID, PATIENT_COLLECTION);
export const fetchScreeningCollection = () =>
  databases.listDocuments(DATABASE_ID, SCREENING_COLLECTION);
export const fetchFollowUpCollection = () =>
  databases.listDocuments(DATABASE_ID, SCREENING_COLLECTION);
