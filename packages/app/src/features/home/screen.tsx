import { TextLink } from 'solito/link'
import { Text as RText, View } from 'react-native'
import { LmText } from '../../components/text/LmText'
import { LmButton } from '../../components/form/button/LmButton'
import { LmIconButton } from '../../components/form/button/LmIconButton'

export function HomeScreen() {

  return (
    <View>
      <View className={'bg-sky-100 max-w-5xl'}>
        <LmText className={'text-4xl'}>
          Some text
        </LmText>
        <LmButton title={'Some Button'} />
        <LmIconButton icon={'camera'} title={''} />
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
