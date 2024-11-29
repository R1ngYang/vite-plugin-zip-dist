//@ts-check
import path from 'path';
import archiver from 'archiver';
import fs from 'fs';

const __dirname =  process.cwd();
export default function zipDist() {
  let outDir;
  return {
    name: 'vite-plugin-zip-dist',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const outputZip = path.resolve(__dirname, outDir, '..', `${outDir}.zip`);

      const output = fs.createWriteStream(outputZip);
      const archive = archiver('zip', { zlib: { level: 9 } });

      output.on('close', () => {
        console.info(archive.pointer() + ' total bytes');
        console.info('zip end:', outputZip);
      });
      archive.on('error', (err) => {
        throw err;
      });
      archive.pipe(output);
      archive.directory(path.resolve(__dirname, outDir), false);
      archive.finalize();
    }
  };
}
