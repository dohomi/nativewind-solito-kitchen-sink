import { View } from 'react-native'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { LmText } from '../../components/text/LmText'


const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <View className={'flex-1 justify-center'}>
      <LmText>{`User ID: ${id}`}</LmText>

      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
