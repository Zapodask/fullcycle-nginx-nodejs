import express from 'express'
import mysql from 'mysql2/promise'

class App {
  port = 3333
  dbConfig = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'app-db'
  }

  constructor() {
    this.app = express()
    this.app.get('/', async (req, res) => {
      const [people] = await this.dbConnection.query('SELECT name FROM people')

      res.send(
        `<h1>Full Cycle Rocks!</h1>\
        <ul>${people.map(({ name }) => `<li>${name}</li>`).join('')}</ul>`)
    })
  }

  async start() {
    this.dbConnection = await mysql.createConnection(this.dbConfig)

    await this.dbConnection.query('INSERT INTO people (name) VALUES ("John Doe")')

    this.app.listen(this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`)
    })
  }
}

new App().start()