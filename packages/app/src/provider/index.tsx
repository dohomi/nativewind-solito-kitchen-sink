import { NavigationProvider } from './navigation'
import { LmPaperProvider } from './LmPaperProvider'

export function LmProvider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <LmPaperProvider>
        {children}
      </LmPaperProvider>
    </NavigationProvider>
  )
}
