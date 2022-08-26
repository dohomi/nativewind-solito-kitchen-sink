import { Platform } from 'react-native'
import { Provider, ProviderProps } from 'react-native-paper'

export function LmPaperProvider({ children, ...rest }: ProviderProps) {
  console.log(Platform.OS)
  return (
    <>
      {Platform.OS === 'web' ? (
        <style type='text/css'>{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url('${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
        }
      `}</style>
      ) : null}
      <Provider {...rest}>{children}
      </Provider>
    </>
  )
}