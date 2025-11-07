interface IDatabase {
  save(data: string): void;
}

class MySqlDatabase implements IDatabase {
  constructor() {}

  save(data: string): void {
    console.log("Storing data to the MySql DB.", data);
  }
}

class MongoDB implements IDatabase {
  constructor() {}

  save(data: string): void {
    console.log("Storing data to the Mongo DB.", data);
  }
}

class HighLevelModule {
  constructor(private readonly database: IDatabase) {
    this.database = database;
  }

  execute(data: string): void {
    this.database.save(data);
  }
}

const mySql: MySqlDatabase = new MySqlDatabase();
const mongoDB: MongoDB = new MongoDB();

const post: HighLevelModule = new HighLevelModule(mySql);
post.execute("Blog Post-1");

const news: HighLevelModule = new HighLevelModule(mongoDB);
news.execute("News Post-1");
