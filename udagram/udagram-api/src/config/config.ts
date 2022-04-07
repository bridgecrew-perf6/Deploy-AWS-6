import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: 'postgres',
  password: '123456789',
  database: 'postgres',
  port: 5432,
  host: 'database-1.c2aeekdi9ywb.us-east-1.rds.amazonaws.com',
  dialect: "postgres",
  aws_region: '',
  aws_profile: '',
  aws_media_bucket: '',
  url: '',
  jwt: {
    secret: '123456789',
  },
};
