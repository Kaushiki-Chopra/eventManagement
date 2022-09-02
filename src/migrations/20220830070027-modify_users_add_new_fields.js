module.exports = {
  up: (query, Sequelize) => {
    return Promise.all([
      query.changeColumn('calender','endDate', {
        type: Sequelize.DATEONLY,
        allowNull: false
      }),
    ]);
  },

  down: (query) => {
    return Promise.all([query.changeColumn('calender', 'endDate', )]);
  },
};



