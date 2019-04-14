let express = require('express')
let path = require('path')
let app = express()

//configure app to serve static files from public folder
app.use(express.static('public'))
app.listen(3000 || process.env.PORT, () => {
  console.log("Server listening on port 3000")
})
