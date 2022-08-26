import { LmDatePicker } from './LmDatePicker'

export default {
  title: 'ui/form/DatePicker',
  component: LmDatePicker
}


const Template = (args) => <LmDatePicker {...args} />

export const Basic = Template.bind({})
Basic.args = {
  name: 'test'
}