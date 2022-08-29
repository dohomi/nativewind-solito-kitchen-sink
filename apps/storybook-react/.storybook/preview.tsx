import '../global.css'
// import { LmPaperProvider } from 'app/src/provider/LmPaperProvider'
// import * as NextImage from 'next/image'


// const OriginalNextImage = NextImage.default
//
// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => <OriginalNextImage {...props} unoptimized />
// })


export const decorators = [(Story, props) => {
  console.log(props.globals)
  const light = props.globals.backgrounds?.value === '#fff'
  return (
    <Story />
  )
}]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#000'
      },
      {
        name: 'light',
        value: '#fff'
      }
    ]
  }
}
