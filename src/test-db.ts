// const { Pool } = require('pg')
// const pool = new Pool({
//   user: 'user',
//   host: 'localhost',
//   database: 'db',
//   password: 'password',
//   port: 5432,
// })

// app.get('/users', async (req: any, res) => {
//   pool.query('SELECT * FROM "Product"', (err: any, resFromDb: any) => {
//     return res.send(resFromDb?.rows || [])
//   })
//
//   pool.end()
// })