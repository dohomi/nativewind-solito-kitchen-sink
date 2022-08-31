import { styled } from 'nativewind'
import { TouchableOpacity } from 'react-native'
import { ioniconIconNames, LmIcon } from '../Icon/LmIcon'
import { LmColorText, LmCoreBtnSizes } from '../../utils/daisyClassNames'
import clsx from 'clsx'

const LmIconButtonStyled = styled(TouchableOpacity, 'btn btn-circle')

type LmIconButtonProps = {
  iconName: ioniconIconNames
  iconColor: LmColorText
  size?: LmCoreBtnSizes
  outlined?: boolean
}

export function LmIconButton({ iconName, iconColor, size, outlined }: LmIconButtonProps) {

  return (
    <LmIconButtonStyled className={clsx({
      ['btn-' + size]: size,
      'btn-outline': outlined
    })
    }>
      <LmIcon name={iconName} color={iconColor} size={size} />
    </LmIconButtonStyled>
  )
}