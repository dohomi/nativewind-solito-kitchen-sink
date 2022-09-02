import { TextLink } from 'solito/link'
import { Text as RText, View } from 'react-native'
import { LmText } from '../../components/text/LmText'
import { LmButton } from '../../components/button/LmButton'
import { LmIconButton } from '../../components/button/LmIconButton'

export function HomeScreen() {

  return (
    <View>
      <View className={'bg-sky-100 max-w-5xl'}>
        <LmText size={'lg'}>
          Some text
        </LmText>
        <LmButton label={'Some Button'} />
        <LmIconButton iconName={'camera'} />
        <RText className={'bg-sky-100'}>Blue text bg</RText>
      </View>
      <View />
      <TextLink
        href='/user/fernando'
      >
        Regular Link
      </TextLink>

      <View />
      <View>
        <TextLink
          href='/components-overview'>
          Component overview
        </TextLink>
      </View>
    </View>
  )
}
