import { LmRating } from './LmRating'

export default {
  title: 'ui/form/Rating',
  component: LmRating
}

const Template = (args) => <LmRating {...args} />

export const Basic = Template.bind({})
Basic.args = {
  name: 'rating'
}