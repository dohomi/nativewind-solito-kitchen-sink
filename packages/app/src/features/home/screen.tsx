import { TextLink } from 'solito/link'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Text as RText, View } from 'react-native'
import { LmText } from '../../components/text/LmText'

export function HomeScreen() {

  return (
    <View>
      <View className={'bg-sky-100 max-w-5xl'}>
        <LmText className={'text-4xl'}>
          Some text
        </LmText>

        <RText className={'bg-sky-100'}>Blue text bg</RText>
      </View>
      <View />
      <TextLink
        href='/user/fernando'
      >
        Regular Link
      </TextLink>

    </View>
  )
}
