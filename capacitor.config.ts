import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.brexton.erealty',
  appName: 'BREXTON eRealty',
  webDir: 'www',
  server: {
    // Keep eRealty and Hatchable sign-in pages inside the app WebView.
    allowNavigation: ['public-figure.hatchable.site', 'hatchable.com', 'www.hatchable.com']
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1800,
      backgroundColor: '#050D2A',
      showSpinner: false,
      androidScaleType: 'CENTER_INSIDE',
      splashFullScreen: true,
      splashImmersive: true
    }
  },
  android: {
    allowMixedContent: false,
    captureInput: true
  }
};

export default config;
