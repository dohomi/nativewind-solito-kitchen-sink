import { LmTextInput } from './LmInput'

export default {
  title: 'ui/form/TextInput',
  component: LmTextInput
}

const Template = (args) => <LmTextInput {...args}/>

export const Basic = Template.bind({})
Basic.args = {
  name: 'test'
}

export const Small = Template.bind({})
Small.args = {
  name: 'test',
  className: 'input-xs'
}