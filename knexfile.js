// Update with your config settings.
require("dotenv").load()
module.exports = {

  development: {
    client: 'pg',
    connection: "postgres:///games"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
}