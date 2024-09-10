import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'estudai',
  webDir: 'dist',
  server:{
    androidScheme: 'http',
    cleartext: true
  }
};

export default config;
