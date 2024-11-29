## Install

zip `build.outDir` Under the same level path

```
npm install vite-plugin-zip-dist --save-dev
```

## Usage

```js
import { defineConfig } from 'vite';
import zipDist from 'vite-plugin-zip-dist';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [zipDist()]
});
```
