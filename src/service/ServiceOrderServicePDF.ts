import puppeteer from "puppeteer";
import ejs from "ejs";
import path from "path";
import { OrderService } from "../interface/OrderService";
import fs from "fs";
import util from "util";

const readFile = util.promisify(fs.readFile);

export class ServiceOrderServicePDF {
    async generateInformationPDF(orderService: OrderService): Promise<Buffer> {
        const templatePath = path.join(__dirname, '../template/templateInformationOS.ejs');
        
        const templateContent = await readFile(templatePath, 'utf8');
        const renderedHtml = ejs.render(templateContent, { orderService });

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent(renderedHtml, { waitUntil: 'networkidle0' });

        const pdfData = await page.pdf({
            printBackground: true,
            width: "2.9in",
            height: "5.0in",
            margin: {
                top: "0.2in",
                bottom: "0.1in",
                right: "0.1in",
                left: "0.1in"
            }
        });

        await browser.close();
        
        return Buffer.from(pdfData);
    }

    async generateAssurencePDF(orderService: OrderService): Promise<Buffer> {
        const templatePath = path.join(__dirname, '../template/templateAssuranceOS.ejs');
        
        const templateContent = await readFile(templatePath, 'utf8');
        const renderedHtml = ejs.render(templateContent, { orderService });

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent(renderedHtml, { waitUntil: 'networkidle0' });

        const pdfData = await page.pdf({
            printBackground: true,
            width: "8.27in",
            height: "11.69in",
            margin: {
                top: "0.05in",
                bottom: "0.1in",
            }
        });

        await browser.close();
        
        return Buffer.from(pdfData);
    }
}