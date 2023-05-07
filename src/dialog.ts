import { FileHelper } from "./file-helper";

export class Dialog {

    generate() {
        const fileHelper = new FileHelper();
        const randomNumber = Math.floor(Math.random() * 15);
        const randomLine = fileHelper.read(randomNumber);
        console.log(randomLine);
    }
}