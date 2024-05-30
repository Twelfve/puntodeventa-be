import express from "express";
import { Express } from "express";
import cors from "cors";
import colors from "colors";
import { environment } from "../../environments/environment";
import { APP_NAME, APP_VERSION } from "../utils/string_ES";
import ProductRoutes from "../components/product/product.routes";
import StoreRoutes from "../components/store/store.routes";
import ProductIncomeRoutes from "../components/productIncome/productIncome.routes";
import ProductOutRoutes from "../components/productOut/productOut.routes";
import Database from "../classes/database";

class Server {
  private app: Express;
  private port: string | number;

  constructor() {
    this.app = express();
    this.port = environment.PORT;
  }

  public async startServer() {
    this.app.use(cors({}));
    this.app.use(express.static("./public"));
    this.app.use(express.json({ limit: "25mb" }));
    this.app.use(express.urlencoded({ extended: false }));
    this.routes();
    this.listen();
    await this.registerDBConnection();
    // await getAccountDataFromExternalServices(6,"o111920");
  }

  routes() {
    this.app.use("/api/product", ProductRoutes);
    this.app.use("/api/store", StoreRoutes);
    this.app.use("/api/productIncome", ProductIncomeRoutes);
    this.app.use("/api/productOut", ProductOutRoutes);
  }

  private async registerDBConnection() {
    try {
      await Database.init();
      await Database.authenticate();
      console.log("Successful connection to", environment.DB);
      await Database.initModels();
    } catch (error) {
      console.log("Error connecting to database: ", String(error));
    }
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(colors.green.bgBlue(`\n${APP_NAME} v${APP_VERSION}`));
      if (environment.TESTING) {
        console.log(colors.green.bgBlue(`TESTING environment enabled ✔️`));
      } else {
        console.log(colors.green.bgBlue(`TESTING environment disabled ❌`));
      }
      console.log(colors.green.bgBlue(`Server listening on port ${this.port}`));
    });
  }
}

export default Server;
