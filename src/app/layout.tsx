import { ThemeProvider } from '@/theme'
import { defaultMetadata } from '@/utils'

export const metadata = defaultMetadata

export default async function LocaleLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
