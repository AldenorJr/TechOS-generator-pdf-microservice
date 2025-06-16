import { Technical } from "./TechnicalInterface"

export interface Budget {
    id: string,
    value: number,
    technical: Technical,
    description: string,
    observation: string,
    approved: boolean,
    createdAt: Date,
    updatedAt: Date
}