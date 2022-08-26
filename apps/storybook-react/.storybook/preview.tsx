import '../global.css'
import { LmPaperProvider } from 'app/src/provider/LmPaperProvider'
// import * as NextImage from 'next/image'


// const OriginalNextImage = NextImage.default
//
// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => <OriginalNextImage {...props} unoptimized />
// })

const InjectCss = (Story) => (
  <LmPaperProvider>
    <Story />
  </LmPaperProvider>
)

export const decorators = [InjectCss]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
