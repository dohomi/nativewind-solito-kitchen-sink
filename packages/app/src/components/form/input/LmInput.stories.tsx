import { LmTextInput } from './LmInput'

export default {
  title: 'ui/form/TextInput',
  component: LmTextInput
}

const Template = (args) => <LmTextInput {...args}/>

export const Basic = Template.bind({})
Basic.args = {
  name: 'test',
}

export const Primary = Template.bind({})
Primary.args = {
  name: 'test',
  color: 'primary'
}

export const Size = Template.bind({})
Size.args = {
  name: 'test',
  size: 'lg'
}

export const Margin = Template.bind({})
Margin.args = {
  name: 'test',
  size: 'md',
  classNames: 'mt-8'
}
