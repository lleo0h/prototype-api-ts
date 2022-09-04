import express, {Express} from "express";
import {readdirSync} from "fs";

class App {
    public app: Express;

    constructor(app: Express) {
        this.app = app;
    }
    
    private config(): void {
        this.app.use(express.json())
    }

    private routes(): void {
        readdirSync(`${__dirname}/routes/`).forEach(async route => {
            const routes = await import("./routes/" + route);
            new routes.default().run();
        });
    }

    public start(): this {
        this.config();
        this.routes();

        this.app.listen(3000, () => console.log("Started - Status @"));
        return this;
    }
}

const {app} = new App(express()).start();
export {app};