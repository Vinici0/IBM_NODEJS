const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    // this.app(cors());

    this.port = process.env.PORT;

    /*Se recomienda se forma ordenada*/
    this.path = {
      bookPath: "/api/books",
    };

    // Middlewares
    this.middleware();

    //Rutas de mi aplicación
    this.router();
  }

  middleware() {
    //CORS
    this.app.use(cors());

    //lectura y parseo del body
    this.app.use(express.json());

    // Directorio público
    this.app.use(express.static("public")); //-> Para que el servidor pueda servir archivos estáticos
  }

  router() {
    this.app.use(this.path.bookPath, require("../routes/books.js"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${process.env.PORT}!`);
    });
  }
}

module.exports = Server;
