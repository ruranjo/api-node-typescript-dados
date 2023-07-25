import express, { Application } from "express"
import config from "../config";

class Server{
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = config.port as string;
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Server running in port : ${this.port}`);
        })
    }

}

export default Server;