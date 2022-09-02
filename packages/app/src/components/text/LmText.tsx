import { Text, TextProps } from 'react-native'
import { PropsWithChildren } from 'react'
import { LmColorTextClasses, LmFontSizes } from '../../utils/daisyClassNames'
import clsx from 'clsx'
import { styled } from 'nativewind'

type LmTextProps = PropsWithChildren<{
  className?: string
  color?: LmColorTextClasses
  size?: LmFontSizes
}>

const StyledText = styled(Text)

export function LmText({ color, size, ...rest }: LmTextProps) {
  const customProps: TextProps = {}
  if (!color) {
    customProps.style = {
      color: 'inherit'
    }
  }
  return <StyledText
    {...rest}
    {...customProps}
    className={clsx(size, color)
    } />
}

