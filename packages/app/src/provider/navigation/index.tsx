import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'
import { useColorScheme } from 'nativewind'

export function NavigationProvider({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  const { colorScheme } = useColorScheme()
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              'components-overview': 'components-overview',
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
