import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import { LmInputSize } from '../../../utils/daisyClassNames'
import { LmView } from '../../layout/LmView'
import { LmText } from '../../text/LmText'
import { LmTextInput } from './LmInput'

type LmInputGroupProps = PropsWithChildren<{
  label?: string
  size?: LmInputSize
  bordered?: boolean
  vertical?: boolean
  classNames?: string
}>

export function LmInputGroup(
  {
    label,
    classNames,
    size = 'md',
    vertical,
    bordered = true

  }: LmInputGroupProps) {
  return (
    <LmView className={clsx('form-control', classNames)}>
      {
        label && <LmView className={clsx('label')}>
          <LmText classNames={clsx('label-text')}>{label}</LmText>
        </LmView>
      }
      <LmText classNames={clsx('input-group', {
        ['input-group-' + size]: size,
        ['input-group-vertical']: vertical
      })}>
        <LmText size={size}>{size?.toUpperCase()}</LmText>
        <LmTextInput bordered={bordered} size={size} />
      </LmText>
    </LmView>
  )
}
