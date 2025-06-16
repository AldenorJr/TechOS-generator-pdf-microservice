import { Request, Response } from "express";
import { ServiceOrderServicePDF } from "../service/ServiceOrderServicePDF";
import { OrderService } from "../interface/OrderService";

export class ControllerOrderServicePDF {
    async handle(req: Request, res: Response) {
        try {
            if (!req.body || !req.body.orderService) {
                return res.status(400).json({ message: 'Missing required information' });
            }

            const orderService: OrderService = req.body.orderService;
            
            const serviceOrderServicePDF = new ServiceOrderServicePDF();
            const pdf = await serviceOrderServicePDF.generateInformationPDF(orderService);
            
            res.set({
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="ordem-servico-${orderService.id}.pdf"`,
            });
            
            return res.send(pdf);
        } catch (error) {
            console.error("Error generating PDF:", error);
            return res.status(500).json({ message: 'Erro ao gerar PDF' });
        }
    }

    async handleAssurance(req: Request, res: Response) {
        try {
            if (!req.body || !req.body.orderService) {
                return res.status(400).json({ message: 'Missing required information' });
            }

            const orderService: OrderService = req.body.orderService;

            if(!orderService.budgetId.approved) {
                return res.status(400).json({ message: 'Ordem de serviço não aprovada' });
            }
            
            const serviceOrderServicePDF = new ServiceOrderServicePDF();
            const pdf = await serviceOrderServicePDF.generateAssurencePDF(orderService);
            
            res.set({
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="ordem-servico-${orderService.id}.pdf"`,
            });
            
            return res.send(pdf);
        } catch (error) {
            console.error("Error generating PDF:", error);
            return res.status(500).json({ message: 'Erro ao gerar PDF' });
        }
    }

}