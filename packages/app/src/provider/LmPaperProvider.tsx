import { Provider, ProviderProps } from 'react-native-paper'
import { useColorScheme } from 'nativewind'
import { useEffect } from 'react'
import { ColorSchemeSystem } from 'nativewind/dist/style-sheet/color-scheme'
import { CombinedDarkTheme, CombinedDefaultTheme } from './theme/theme'

type LmPaperProviderProps = Omit<ProviderProps, 'theme'> & {
  storybookBackground?: ColorSchemeSystem
}

export function LmPaperProvider({ children, storybookBackground, ...rest }: LmPaperProviderProps) {
  const { colorScheme, setColorScheme } = useColorScheme()
  useEffect(() => {
    setColorScheme(storybookBackground || colorScheme)
  }, [storybookBackground])
  console.log(colorScheme)
  return (
    <>
      <Provider {...rest} theme={colorScheme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme}>{children}
      </Provider>
    </>
  )
}