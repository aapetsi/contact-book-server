const express = require('express')
const path = require('path')

const app = express()

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server running on port ${port}`))
