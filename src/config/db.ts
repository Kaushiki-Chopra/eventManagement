import sequelize = require("sequelize");
require('pg').defaults.parseInt8 = true


class Database {
    db : string;
    user : string;
    password : string;
    host : string;
    port : number;
    maxPool : number;
    minPool : number;
    database : sequelize.Sequelize
  constructor() {
    this.db = 'employee'
    this.user = 'kaushiki'
    this.password = 'rgbXYZ@9182'
    this.host = 'localhost'
    this.port = 5432
    this.maxPool = 100
    this.minPool = 1

    this.database = new sequelize(this.db, this.user, this.password, {
      host: this.host,
      ssl: true,
      dialect: 'postgres',
      dialectOptions: {
        encrypt: true,
      },
      port: this.port,
      logging: false,
      pool: {
        max: this.maxPool,
        min: this.minPool,
        acquire: 100000,
        idle: 50000,
      },
    })
  }
}
let databaseInstance = new Database().database

export default databaseInstance