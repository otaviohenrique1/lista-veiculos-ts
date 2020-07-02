import express from "express";
import VeiculosController from "./controllers/VeiculosController";
import multer from "multer";
import multerConfig from "./config/multer";
import { celebrate, Joi } from "celebrate";

const routes = express.Router();
const upload = multer(multerConfig);

const veiculosController = new VeiculosController();

routes.get('/veiculos', veiculosController.index);
routes.get('/veiculos/:id', veiculosController.show);
routes.post(
    '/veiculos',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            nome: Joi.string().required(),
            paisOrigem: Joi.string().required(),
            tipo: Joi.string().required(),
            fabricante: Joi.string().required(),
            utilizadores: Joi.string().required(),
            quantidadeProduzida: Joi.number().required(),
            peridoServico: Joi.string().required(),
            massa: Joi.number().required(),
            comprimento: Joi.number().required(),
            altura: Joi.number().required(),
            largura: Joi.number().required(),
            tripulacao: Joi.number().required(),
            custoUnitario: Joi.number().required(),
            armament: Joi.string().required()
        })
    }, {
        abortEarly: false
    }),
    veiculosController.create
);

export default routes;