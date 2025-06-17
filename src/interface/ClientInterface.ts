import { Contato } from "./ContatoInterface";

export interface Client {
    id: string;
    name: string;
    cpf: string;
    contact: Contato;
    updatedAt: Date;
    createdAt: Date;
}