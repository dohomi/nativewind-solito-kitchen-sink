import { NavigationProvider } from './navigation'

export function LmProvider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      {children}
    </NavigationProvider>
  )
}
