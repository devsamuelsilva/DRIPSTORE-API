import { Op } from "sequelize";
const Usuario = db.usuarios;
//const Perfil = db.perfil;

import pkg from 'bcryptjs';
//import { secret } from "../config/auth.config.js";
//import jwt from "jsonwebtoken";
import db from "../model/index.js";
//import { Usuarios } from "../model/usuarios.model.js";
//import { Usuarios } from "../model/usuarios.model.js";
const { hashSync, compareSync } = pkg;

export const authService = {
    //cadastrar
    signup: async (req, res) => {
        // Save User to Database
        const { nome, email, senha, perfis } = req.body
        
        try {

            const newUser = await Usuario.create({
                nome,
                email,
                senha: hashSync(senha, 8)
            });

            if (perfis.length >0) {
            // verifica se todos os perfis passados existem dentro do banco
            const perfilsDB = await db.perfil.findAll({
                    where: {
                        nome: {
                            [Op.in]: perfis
                        }
                    }
                })

                if (perfilsDB){
                   await newUser.addPerfils(perfilsDB)
                   return res.status(201).json({
                    msg: `Usuario ${newUser.name} cadastrado com sucesso !!`,
                    data: newUser
                   });
                }
            }

                
            

        } catch (error) {
        
            res.status(500).json({ error: `Erro ao criar o usuario: ${error}` });
        }
    },

    /*   async (req, res) => {
            // Save User to Database
            Usuario.create({
                nome: req.body.nome,
                usuario: req.body.usuario,
                email: req.body.email,
                senha: hashSync(req.body.senha, 8)
            })
                .then(usuario => {
                    if (req.body.perfis) {
                        Perfil.findAll({
                            where: {
                                nome: {
                                    [Op.or]: req.body.perfis
                                }
                            }
                        }).then(perfis => {
                            usuario.setPerfis(perfis).then(() => {
                                res.send({ message: "User was registered successfully!" });
                            });
                        });
                    } else {
                        // user role = 1
                        usuario.setRoles([1]).then(() => {
                            res.send({ message: "User was registered successfully!" });
                        });
                    }
                })
                .catch(err => {
                    res.status(500).send({ message: err.message });
                });
 */
    //logar
    signin: async (req, res) => {
        const usuario = await Usuario.findOne({
            where: {
                nome: req.body.nome
            }
        })

        try {
            if (!usuario) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = compareSync(
                req.body.senha,
                usuario.senha
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            const token = jwt.sign({ id: usuario.id },
                secret,
                {
                    algorithm: 'HS256',
                    allowInsecureKeySizes: true,
                    expiresIn: 86400, // 24 hours
                });

            var authorities = [];
            usuario.getPerfils().then(perfis => {
                for (let i = 0; i < perfis.length; i++) {
                    authorities.push("PERFIL_" + perfis[i].nome.toUpperCase());
                }
                res.status(200).send({
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email,
                    perfis: authorities,
                    accessToken: token
                });
            });
        } catch (error) {
            console.log(`error`, error);
            res.status(500).send({ message: error.message });
        }
    },
    //deslogar
    logout: async (req, res) => {
        const token = req.headers["x-access-token"];
        if (!token) {
            return res.status(403).send({ message: "No token provided!" });
        }

        const decoded = jwt.decode(token);
        const expiration = new Date(decoded.exp * 1000);

        try {
            await RevokedToken.create({
                token: token,
                expiration: expiration
            });

            res.status(200).send({ message: "Logged out successfully!" });
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    },

}