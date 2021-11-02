import * as dotenv from "dotenv";
import * as server from './server';

dotenv.config();

const PORT = parseInt(process.env.PORT || '4041');

server.start(PORT)
  .then(() => {
    console.log(`Server running on port ${PORT}`);
  })
  .catch(error => {
    // Bug reporter
    console.error(error);
    server.shutdown();
  });





