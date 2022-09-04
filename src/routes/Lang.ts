import {app} from "..";
import {pt, en} from "../languages/_path";

const apiAcessKey: string = "token123456";

export default class Lang {
    public run(): void {
        app.post("/lang", (req, res) => {
            if (req.body.key == apiAcessKey) {
                console.log("- Request languages in API.");
                return res.json({pt, en});
            }

            else {
                console.log("- Request access denied.");
                return res.json({Token: "Invalid"});
            }
        });
    }
}