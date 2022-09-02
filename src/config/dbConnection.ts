
import Umzug = require("umzug");
// require('pg').defaults.parseInt8 = true
import sequelize = require('sequelize')
import path = require('path')

import databaseInstance from "./db";

const migrate = new Umzug({
  migrations: {
    // indicates the folder containing the migration .js files
    path: path.join(__dirname, '../migrations'),
    pattern: /\.js$/,
    // inject sequelize's QueryInterface in the migrations
    params: [databaseInstance.getQueryInterface(), sequelize],
  },
  // indicates that the migration data should be store in the database
  // itself through sequelize. The default configuration creates a table
  // named `SequelizeMeta`.
  storage: 'sequelize',
  storageOptions: {
    sequelize: databaseInstance,
  },
})

const seed = new Umzug({
  migrations: {
    // indicates the folder containing the migration .js files
    path: path.join(__dirname, '../seeders'),
    pattern: /\.js$/,
    // inject sequelize's QueryInterface in the migrations
    params: [databaseInstance.getQueryInterface(), sequelize],
  },
  // indicates that the migration data should be store in the database
  // itself through sequelize. The default configuration creates a table
  // named `SequelizeMeta`.
  storage: 'sequelize',
  storageOptions: {
    sequelize: databaseInstance,
  },
})

const connectPSQlDb = async () => {
  try {
    const result : any = await databaseInstance.authenticate()
      .then(async () => {
        console.log('Connection has been established successfully ( DB ) .')
        await migrate.up()
          .then(async() => {
            console.log('All migrations performed successfully ( DB )')
            await seed.up()
              .then((onSeed) => {
                console.log('Data seed successfull. ( DB )')
                return Promise.resolve()
              }).catch((err) => {
                console.log(err)
                console.log('Seeder failed ( DB )');
                return Promise.reject()
              })
            return Promise.resolve()
          }).catch((err) => {
            console.log(err)
            console.log('Migration failed ( DB )');
            return Promise.reject()

          })
        return Promise.resolve()
      }).catch((err) => {
        console.log('Unable to connect to the database: ( DB )',err);
        return Promise.reject()
      })
    return Promise.resolve()
  } 
  catch (err) {
    console.log('Failed to connect with PSQL db')
    return Promise.reject()
  }
}

export default connectPSQlDb