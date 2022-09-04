import { NavigationProvider } from './navigation'

export function LmProvider({ children }: { children: React.ReactNode }) {
  // const { setColorScheme, colorScheme } = useColorScheme()
  // console.log(colorScheme)
  // useEffect(
  //   () => {
  //     setColorScheme('light')
  //   }
  // )
  return (
    <NavigationProvider>
      {children}
    </NavigationProvider>
  )
}
