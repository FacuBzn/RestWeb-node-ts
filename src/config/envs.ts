import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  /* DB_HOST: get('DB_HOST').required().asString(), */
  PORT: get('PORT').required().asPortNumber(),
  PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(),
}
