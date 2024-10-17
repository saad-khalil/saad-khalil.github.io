// "use server"
//
// import { promises as fs } from 'fs'
//
// export const getCompanies = async (): Promise<{ name: string }[]> => {
//     const data = await fs.readFile('data/companies2aug.txt', 'utf8');
//     return data.split('\n').map((line) => {
//         const [name, code] = line.split(';');
//         return { name}; // Or customize the object structure as needed
//     });
// };
//
