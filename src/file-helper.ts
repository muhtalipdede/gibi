import * as fs from 'fs';

export class FileHelper {
    csvParser(fileContent: string) {
        const lines = fileContent.split('\n');
        const parsedLines = lines.map(line => {
            return line.split('\r');
        });
        return parsedLines;
    }

    read(randomNumber: number) {
        const filePath = __dirname + `/assets/gibi.csv`;
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const parsedFile = this.csvParser(fileContent);
        const randomLine = parsedFile[randomNumber][0].split(';')[1];
        return randomLine;
    }

    length() {
        const filePath = __dirname + `/assets/gibi.csv`;
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const parsedFile = this.csvParser(fileContent);
        return parsedFile.length;
    }
}