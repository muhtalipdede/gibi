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
        const projectRoot = process.cwd();
        const filePath = `${projectRoot}/src/assets/gibi.csv`;
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const parsedFile = this.csvParser(fileContent);
        const randomLine = parsedFile[randomNumber][0].split(';')[1];
        return randomLine;
    }
}