import { Request, Response } from "express";
import { getCustomRepository, RepositoryNotTreeError } from "typeorm";
import { PokesRepository } from "../repositories/PokesRepository";

class PokeController {
    async create(request: Request, response: Response){
        const {name, id} = request.body;
        const pokesRepository = getCustomRepository(PokesRepository);
        const alreadyExists = await pokesRepository.findOne({
            id,
        });

        if (alreadyExists){
            return response.status(400).json({
                error: "Pokemon already exists!",
            });
        }

        const poke = pokesRepository.create({
            name, id
        })
        
        await pokesRepository.save(poke);
        return response.status(201).json(poke);
    }

    async show(request: Request, response: Response){
        const {id} = request.body;
        const pokesRepository = getCustomRepository(PokesRepository);
        const alreadyExists = await pokesRepository.findOne({
            id,
        });

        if (alreadyExists){
            return response.json({
                error: "Já Obtido",
            });
        }
        return response.json({
            error: "Não Obtido",
        });
    }
}

export { PokeController };
