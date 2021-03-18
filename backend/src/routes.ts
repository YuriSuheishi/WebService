import { Router } from 'express';
import { PokeController } from './controllers/PokeController';

const router = Router();
const pokeController = new PokeController();

router.post("/poke", pokeController.create);
router.get("/poke", pokeController.show);

export { router };