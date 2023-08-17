import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'tets',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
