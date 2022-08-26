import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'
import { useColorScheme } from 'nativewind'
import { CombinedDarkTheme, CombinedDefaultTheme } from '../theme/theme'

export function NavigationProvider({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  const { colorScheme } = useColorScheme()
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme}
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              'user-detail': 'user/:id'
            }
          }
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
