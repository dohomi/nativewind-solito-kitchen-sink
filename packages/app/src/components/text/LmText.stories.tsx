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

export const CustomLarge = Template.bind({})
CustomLarge.args = {
  children: 'some text',
  classNames: 'text-4xl'
}

export const TextLg = Template.bind({})
TextLg.args = {
  children: 'some text',
  classNames: 'text-lg'
}


export const Primary = Template.bind({})
Primary.args = {
  children: 'some text',
  color: 'primary'
}