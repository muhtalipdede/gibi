import { isCancel, outro, select, spinner } from "@clack/prompts";
import { FileHelper } from "./file-helper";
import { setTimeout as sleep } from 'node:timers/promises';

export class Dialog {
    async generate() {
        const type = await select({
            message: 'İlkkan sen misin?',
            options: [
                { value: 'yilmaz', label: 'Yılmaz' },
                { value: 'ilkkan', label: 'İlkkan' },
                { value: 'ersoy', label: 'Ersoy' },
            ],
        });

        if(isCancel(type)) {
            outro("Görüşürüz!");
            return;
        }
        
        const s = spinner();
        s.start("Geliyor..." + type.toString());
        await sleep(3000);
        const fileHelper = new FileHelper();
        const randomNumber = Math.floor(Math.random() * fileHelper.length());
        const randomLine = fileHelper.read(randomNumber);
        s.stop(randomLine);
    }
}