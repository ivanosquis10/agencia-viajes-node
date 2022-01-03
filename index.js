import express from "express"; // Nueva forma.
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

// Conexion a la base de datos
db.authenticate()
  .then(() => console.log("Base de datos conectado"))
  .catch((error) => console.log(error));

// Definir el puerto
const port = process.env.PORT || 4000;

// Habilitar pug
app.set("view engine", "pug");

// Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();

  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia de Viaje";
  next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta public (imagenes, css, etc)
app.use(express.static("public"));

// Agregar router
app.use("/", router);

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
