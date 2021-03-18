import { EntityRepository, Repository } from "typeorm";
import { Poke } from "../models/Poke";

@EntityRepository(Poke)
class PokesRepository extends Repository<Poke> {



}

export { PokesRepository };

