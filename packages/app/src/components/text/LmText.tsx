import { Text } from 'react-native'
import { styled } from 'nativewind'
import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { LmColorText, LmCoreSizes, LmFontSizes } from '../../utils/daisyClassNames'

type LmTextProps = PropsWithChildren<{
  classNames?: string
  color?: LmColorText
  size?: LmFontSizes
}>

const LmTextStyled = styled(Text)

export function LmText({ children, classNames, color, size }: LmTextProps) {
  return <LmTextStyled className={clsx( classNames, {
    ['text-' + color]: color,
    ['text-' + size]: size,
    'text-inherit': !color
  })}>{children}</LmTextStyled>
}


