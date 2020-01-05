module.exports = {
  username: process.env.USERNAMEDATABASE,
  password: process.env.PASSDATABASE,
  database: process.env.DATABASENAME,
  host: process.env.HOSTDATABASE,
  dialect: 'postgres',
  timezone: '00:00',
  define: {
    timestamps: false,
    freezeTableName: true
  },
}