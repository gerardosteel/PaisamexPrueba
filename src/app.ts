import express, {Application} from "express";
import CharactersRoutes from './routes/characters.routes';

export class App {

    private app: Application;

    constructor(private port: number | string) {
        this.app = express();
        this.port = port;
        this.routes();
    }

    async listen() {
        await this.app.listen(this.port);
        console.log(`listening port`, this.port);
    }

    routes(){
        this.app.use('/characters', CharactersRoutes);
    }
}

