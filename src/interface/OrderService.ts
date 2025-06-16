import { Budget } from "./BudgetInterface";
import { Client } from "./ClientInterface";
import { Smartphone } from "./Smartphone";

export interface OrderService {
    id: Number;
    smartphoneId: Smartphone;
    clientId: Client;
    budgetId: Budget;
    departureDate: Date,
    status: StatusOrderService,
    createdAt: Date,
    updatedAt: Date
}

export enum StatusOrderService {
    OPEN = "ABERTO",
    IN_PROGRESS = "EM ANDAMENTO",
    FINISHED = "FINALIZADO",
    CANCELED = "CANCELADO",
    BUDGET = "ORÇAMENTO",
    EQUIPMENT_LEFT = "EQUIPAMENTO DEIXADO",
}
