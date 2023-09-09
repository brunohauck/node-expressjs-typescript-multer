import express from "express";
import { router } from "./router";
import mongoose from "mongoose";

export class App{
    public server: express.Application = express();
    constructor(){
        this.server;
        this.middleware();
        this.connectDatabase();
        this.router();
    }

    private middleware(){
        this.server.use(express.json());
    }

    private router(){
        this.server.use(router);
    }
    private async connectDatabase() {
        let urlDB = ''
        try {
            await mongoose.connect(urlDB)
            .then(result => 
                console.log('connected to the database'), 
                () => console.log('App is running on port -> 3001 ')
            );
        } catch (error) {
            console.error("Erro in the database connection MongoDB:", error)
            
        }
    }
}