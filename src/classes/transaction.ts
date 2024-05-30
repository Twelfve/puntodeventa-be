import Database from "./database";

class Transaction {
  public static start() {
    return Database.instance.query("START TRANSACTION;");
  }
  public static commit() {
    return Database.instance.query("COMMIT;");
  }
  public static rollback() {
    return Database.instance.query("ROLLBACK;");
  }
}

export default Transaction;
