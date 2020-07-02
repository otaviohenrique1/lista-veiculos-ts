import { Request, Response } from "express";
import knex from "./../database/connection";

class VeiculosController {
    async create(request: Request, response: Response) {
        const {
            nome,
            paisOrigem,
            tipo,
            fabricante,
            utilizadores,
            quantidadeProduzida,
            peridoServico,
            massa,
            comprimento,
            altura,
            largura,
            tripulacao,
            custoUnitario,
            armamento
        } = request.body;

        const trx = await knex.transaction();
        
        const veiculo = {
            nome,
            paisOrigem,
            tipo,
            imagem: request.file.filename,
            fabricante,
            utilizadores,
            quantidadeProduzida,
            peridoServico,
            massa,
            comprimento,
            altura,
            largura,
            tripulacao,
            custoUnitario,
            armamento
        };

        const insertedIds = await trx('veiculos').insert(veiculo);

        const veiculo_id = insertedIds[0];

        await trx.commit();

        return response.json({
            id: veiculo_id,
            ...veiculo
        });
    }
    
    async index(request: Request, response: Response) {
        const veiculos = await knex('veiculos').select('*');
        const serializedVeiculos = veiculos.map(veiculo => {
            return {
                ...veiculo,
                image_url: `http://192.168.0.12:3333/uploads/${veiculo.image}`
            };
        });
        return response.json(serializedVeiculos);
    }
    
    async show(request: Request, response: Response) {
        const { id } = request.params;

        const veiculo = await knex('veiculos').where('id', id).first();

        if (!veiculo) {
            return response.status(400).json({
                message: 'Veiculo nao encontrado'
            });
        }

        const serializedVeiculo = {
            ...veiculo,
            image_url: `http://192.168.0.12:3333/uploads/${veiculo.image}`
        };
        
        return response.json({
            veiculo: serializedVeiculo
        });
    }
}

export default VeiculosController;