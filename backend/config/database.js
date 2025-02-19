// connect MongoDB
import connect from 'mongoose';
import { green, red } from "colors";

require("dotenv").config();
export function connect() {
  connect(process.env.MONGO_URL, {
  })
  .then(() => console.log(green('Database Connected Successfully')))
  .catch((error) => {
      console.log(red.underline('Database Connection Filed'))
      confirm.error(error);
      process.exit(1);
  })
}
