import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'estudAI',
  webDir: 'dist',
  server:{
    androidScheme: 'http',
    cleartext: true
  }
};

export default config;
