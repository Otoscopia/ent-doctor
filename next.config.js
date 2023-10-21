/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PROJECT_ENDPOINT: process.env.PROJECT_ENDPOINT,
    PROJECT_ID: process.env.PROJECT_ID,
    DATABASE_ID: process.env.DATABASE_ID,
    PATIENT_COLLECTION: process.env.PATIENT_COLLECTION,
    SCREENING_COLLECTION: process.env.SCREENING_COLLECTION,
    NURSE_COLLECTION: process.env.NURSE_COLLECTION,
    FOLLOW_UPS_COLLECTION: process.env.FOLLOW_UPS_COLLECTION,
  },
};

module.exports = nextConfig;
