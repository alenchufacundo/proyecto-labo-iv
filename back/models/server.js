const express = require('express')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.rutas()
  }

  middleware () {
    this.app.use(express.static('public'))
  }

  // 3 paso.
  // definimos la ruta -> es la que va ir en el navegador ->/peliculas
  rutas () {
    this.app.use('/popular', require('../routes/popular')) // Rios Facundo
    this.app.use('/puntuados', require('../routes/puntuados')) // Bayon Marcos
    this.app.use('/api/v1/tv', require('../routes/tvShows')) // Hernandez Joaquin
    this.app.use('/upcoming', require('../routes/upcoming')) // Eros Marziani
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API está escuchando en el puerto ${this.port}`)
    })
  }
}

module.exports = Server
