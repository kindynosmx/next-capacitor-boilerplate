import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.kindynos.boilerplate',
  appName: 'Next.js Capacitor Boilerplate',
  bundledWebRuntime: false,
  plugins: {
    FirebaseAuthentication: {
      providers: [],
      skipNativeAuth: false,
    },
  },
  webDir: 'out',
}

export default config
