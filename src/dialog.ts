import { FileHelper } from "./file-helper";

export class Dialog {

    generate() {
        const fileHelper = new FileHelper();
        const randomNumber = Math.floor(Math.random() * fileHelper.length());
        const randomLine = fileHelper.read(randomNumber);
        console.log(randomLine);
    }
}