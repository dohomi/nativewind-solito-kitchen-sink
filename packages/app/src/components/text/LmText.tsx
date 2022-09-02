import { Text } from 'react-native'
import { styled } from 'nativewind'
import { PropsWithChildren } from 'react'
import { LmColorText, LmFontSizes } from '../../utils/daisyClassNames'
import clsx from 'clsx'

type LmTextProps = PropsWithChildren<{
  className?: string
  color?: LmColorText
  size?: LmFontSizes
}>


function CustomText({ color, size, ...rest }: LmTextProps) {
  return <Text
    style={{
      color: color ? undefined : 'inherit'
    }}
    className={clsx({
      ['text-' + color]: color,
      ['text-' + size]: size
      // 'text-inherit': !color
    })} {...rest} />
}

export const LmText = styled(CustomText, {
  props: {
    size: true,
    color: true
  }
})
LmText.displayName = 'LmText'
