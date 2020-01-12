module.exports = {
  // username: process.env.USERNAMEDATABASE,
  // password: process.env.PASSDATABASE,
  // database: process.env.DATABASENAME,
  // host: process.env.HOSTDATABASE,
  username: "postgres",
  password: "nopass",
  database: "db_bombocado",
  host: "localhost",
  dialect: 'postgres',
  timezone: '00:00',
  define: {
    timestamps: false,
    freezeTableName: true
  },
}