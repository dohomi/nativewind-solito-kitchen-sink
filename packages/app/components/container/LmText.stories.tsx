import { LmText } from './LmText'

export default {
  title: 'test/Container',
  component: LmText
}

const Template = (args) => <LmText {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'some text'
}