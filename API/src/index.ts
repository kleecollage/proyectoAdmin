import * as express from "express"
import { createConnection } from "typeorm"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import * as cors from 'cors'
import * as helmet from 'helmet'
import routes from './routes';
const PORT = process.env.PORT || 3000

createConnection().then(async() => {

    // create express app
    const app = express();

    //Routes
    app.use('/', routes);

    var helmet = require('helmet');
    app.use(helmet())

    //middle wares
    app.use(cors());
    app.use(express.json());

    // start express server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})

.catch(error => console.log(error))
