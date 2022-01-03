import express from "express"; // Nueva forma.
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje,
} from "../controllers/paginasControler.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

// - req = es lo que enviamos // res = es lo que nos responde express
router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);

router.get("/viajes/:slug", paginaDetalleViaje);

router.get("/testimoniales", paginaTestimoniales);

router.post("/testimoniales", guardarTestimonial);

export default router;
