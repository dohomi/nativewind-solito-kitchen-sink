import { LmIcon } from './LmIcon'

export default {
  title: 'ui/LmIcon',
  component: LmIcon
}

const Template = (args) => <LmIcon {...args} />

export const Basic = Template.bind({})
Basic.args = {
  name: 'basketball',
  color: 'red'
}

export const Size = Template.bind({})
Size.args = {
  name: 'albums',
  color: 'green',
  size: 55
}