import { LmCard, LmCardBody, LmCardTitle, LmCardWithAction } from './LmCard'
import { Text } from 'react-native'

export default {
  title: 'ui/Card',
  component: LmCard
}

const Template = (args) => <LmCard {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: (
    <LmCardBody>
      <LmCardTitle>Some Title</LmCardTitle>
      <Text>some text</Text>
    </LmCardBody>
  )
}

export const CardWithAction = () => <LmCardWithAction title={'Title'} buttonText={'Some Action'} description={'This is legit description'} />