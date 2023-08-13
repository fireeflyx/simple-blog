import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const createPath = (fileName: string): string => {
  return resolve(__dirname, '..', 'views', fileName);
};

export default createPath;
