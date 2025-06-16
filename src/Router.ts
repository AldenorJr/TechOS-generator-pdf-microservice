import { Router } from 'express';
import { ControllerOrderServicePDF } from './controller/ControllerOrderServicePDF';

const router = Router();

router.post('/v1/pdf/information', (req, res) => {
    new ControllerOrderServicePDF().handle(req, res);
});

router.post('/v1/pdf/assurance', (req, res) => {
    new ControllerOrderServicePDF().handleAssurance(req, res);
});

export { router };