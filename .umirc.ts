import { defineConfig } from 'umi';
const outputPath = 'dist/';

// const env = process.env.NODE_ENV;
// const path = env === 'development' ? 'http://127.0.0.1:8000/' : outputPath;

export default defineConfig({
  alias: {
    'antd-mobile': 'antd-mobile/2x',
  },
  ssr: {
    //   devServerRender: false,
  },
  dva: {
    immer: true,
    // hmr: false,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  outputPath: outputPath,
  // publicPath: path,
});
