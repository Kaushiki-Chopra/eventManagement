import database from '../config/db'
import sequelize from 'sequelize'

import { DataTypes } from "sequelize";


// Database connection instance
let databaseInstance = database

export interface CalenderInterface {

  id?: string
  title: string
  description: string
  startDate: Date 
  endDate: Date
  startTime: Date
  endTime: Date
}
export interface ICalenderInterface
  extends sequelize.Instance<CalenderInterface>,
  CalenderInterface { }

// Sequelize Model
export const Calender: sequelize.Model<
ICalenderInterface,
CalenderInterface
> = databaseInstance.define<ICalenderInterface, CalenderInterface>(
  'calender',
  {
    id: {
      type: sequelize.UUID,
      defaultValue: sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    title:{
      type: sequelize.STRING,
      allowNull: true,

    },

    description: {
      type: sequelize.STRING,
      allowNull: true,
    },

    startDate: {
      type: sequelize.DATEONLY,
      allowNull: true,
    },

    endDate: {
        type: sequelize.DATEONLY,
        allowNull: true,
    },
    startTime: {
        type: sequelize.TIME,
        allowNull: true,
    },

    endTime: {
        type: sequelize.TIME,
        allowNull: true,
    },
    

    
  },
  {
    tableName: 'calender',
    // Auto-create timestamps
    timestamps: true,
    // Enable soft deletes
    paranoid: true,
  },


)



