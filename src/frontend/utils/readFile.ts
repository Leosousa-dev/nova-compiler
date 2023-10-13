import fs from "node:fs";


export default function read(path: string){
    const filesrc = fs.readFileSync(path, 'utf-8')
    const src = filesrc.split(" ")
    return src;
}