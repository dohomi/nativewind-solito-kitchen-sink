import { styled } from 'nativewind'
import { View } from 'react-native'
import { LmButtonColor, LmButtonSize } from '../../utils/daisyClassNames'
import clsx from 'clsx'
import { LmButton } from './LmButton'

const className = 'btn-group'
const LmViewStyled = styled(View, className)

type LmButtonGroupProps = {
  buttonLabels: string[]
  color?: LmButtonColor
  size?: LmButtonSize
  outlined?: boolean
  vertical?: boolean
  classNames?: string
}

export function LmButtonGroup({ buttonLabels, color, size, outlined, vertical=false, classNames }: LmButtonGroupProps) {
  const btnArgs = {
    outlined,
    size,
    color
  }

  return (
    <LmViewStyled
      style={{flexDirection: vertical ? 'column' : 'row'}}
      className={clsx(className, {
        'btn-group-vertical': vertical
      }, classNames)}
    >
      {
        buttonLabels.map((l, i) => (
          <LmButton key={`btn-${i}`} label={l} {...btnArgs} />
        ))
      }
    </LmViewStyled>
  )
}