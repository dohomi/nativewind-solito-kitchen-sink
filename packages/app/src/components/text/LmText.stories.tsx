import { LmText } from './LmText'

export default {
  title: 'ui/Text',
  component: LmText
}

const Template = (args) => <LmText {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'some text'
}

export const LargeText = Template.bind({})
LargeText.args = {
  children: 'some text',
  className: 'text-4xl'
}