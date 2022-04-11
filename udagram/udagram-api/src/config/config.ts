import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: `${process.env.USER_NAME}`,
  password: `${process.env.PASSWORD}`,
  database: `${process.env.DATABASE}`,
  port: 5432,
  host: `${process.env.HOST}`,
  dialect: "postgres",
  aws_region: '',
  aws_profile: '',
  aws_media_bucket: '',
  url: '',
  jwt: {
    secret: '123456789',
  },
};
