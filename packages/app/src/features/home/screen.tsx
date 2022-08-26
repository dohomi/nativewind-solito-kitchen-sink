import { TextLink } from 'solito/link'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Text as RText, View } from 'react-native'
import { LmText } from '../../components/text/LmText'
import { LmButton } from '../../components/form/button/LmButton'
import { LmIconButton } from '../../components/form/button/IconButton'

export function HomeScreen() {

  return (
    <View>
      <View className={'bg-sky-100 max-w-5xl'}>
        <LmText className={'text-4xl'}>
          Some text
        </LmText>
        <LmButton>Some Button</LmButton>
        <LmIconButton icon={'camera'}></LmIconButton>
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
