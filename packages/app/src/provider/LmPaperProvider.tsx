import { Platform } from 'react-native'
import { Provider, ProviderProps } from 'react-native-paper'
// @ts-ignore
// import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf'
/*

{Platform.OS === 'web' ? (
        <style type='text/css'>{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${iconFont}) format('truetype');
        }
      `}</style>
      ) : null}
 */
export function LmPaperProvider({ children, ...rest }: ProviderProps) {
  console.log(Platform.OS)
  return (
    <>

      <Provider {...rest}>{children}
      </Provider>
    </>
  )
}