import { LmIconBtn } from './LmIconBtn'

export default {
  title: 'ui/LmIconBtn',
  component: LmIconBtn
}

const Template = (args) => <LmIconBtn {...args} onPress={() => console.log('Pressed')}/>

export const Basic = Template.bind({})
Basic.args = {
  name: 'basketball',
  color: 'red'
}

export const BG = Template.bind({})
BG.args = {
  name: 'book',
  color: 'black',
  backgroundColor: 'yellow'
}
