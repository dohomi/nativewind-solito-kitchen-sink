import { styled } from 'nativewind'
import { Pressable } from 'react-native'
import { ioniconIconNames, LmIcon } from '../Icon/LmIcon'
import { LmColorText, LmButtonSize } from '../../utils/daisyClassNames'
import clsx from 'clsx'

const LmIconButtonStyled = styled(Pressable, 'btn btn-circle')

type LmIconButtonProps = {
  iconName: ioniconIconNames
  iconColor?: LmColorText
  size?: LmButtonSize
  outlined?: boolean
  classNames?: string
}

export function LmIconButton({ iconName, iconColor, size, outlined, classNames }: LmIconButtonProps) {

  return (
    <LmIconButtonStyled className={clsx({
      ['btn-' + size]: size,
      'btn-outline': outlined
    }, classNames)
    }>
      <LmIcon name={iconName} color={iconColor} size={size} />
    </LmIconButtonStyled>
  )
}