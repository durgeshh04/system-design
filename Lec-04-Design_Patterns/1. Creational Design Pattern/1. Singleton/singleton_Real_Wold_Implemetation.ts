class Logger {
  private static instance: Logger;
  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public showMessage(message: string): void {
    console.warn("This is message from Higher authority");
  }

  public databaseLogs(): void {
    console.log("This method is responsible for collecting database logs");
    console.log(
      `Timestamp: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    );
  }

  public applicationLogs(): void {
    console.log("This method is responsible for application logs");
    console.log(
      `Timestamp: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    );
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.showMessage("Hello, databaseLogs...");
logger1.databaseLogs();
logger2.showMessage("Hello, databaseLogs...");
logger2.applicationLogs();

console.log(logger1 == logger2);
