import { Contato } from "./ContatoInterface";

export interface Client {
    id: string;
    name: string;
    cpf: string;
    contato: Contato;
    updatedAt: Date;
    createdAt: Date;
}