import { LmIcon } from './LmIcon'

export default {
  title: 'ui/Icon',
  component: LmIcon
}

const Template = (args) => <LmIcon {...args} />
export const Basic = Template.bind({})
Basic.args = {
  name: 'basketball',
  color: 'red'
}