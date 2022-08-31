import '../global.css'
import { useColorScheme } from 'nativewind'
import { useEffect } from 'react'
// import { LmPaperProvider } from 'app/src/provider/LmPaperProvider'
// import * as NextImage from 'next/image'


// const OriginalNextImage = NextImage.default
//
// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => <OriginalNextImage {...props} unoptimized />
// })

const ThemeMap = {
  '#fff': 'light',
  '#000': 'dark',
  '#50C878': 'emerald'
}

export const decorators = [(Story, props) => {
  const theme = props.globals.backgrounds?.value ? (ThemeMap[props.globals.backgrounds?.value] || 'dark') : 'dark'
  const { setColorScheme } = useColorScheme()
  useEffect(
    () => {
      let active = true
      if (active) {
        const rootEl = document.documentElement
        rootEl?.setAttribute('data-scheme', theme)
        setColorScheme(theme)
      }
      return () => {
        active = false
      }
    },
    [theme, setColorScheme]
  )
  return (
    <>
      <Story />
    </>
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
      },
      {
        name: 'emerald',
        value: '#50C878'
      }
    ]
  }
}
