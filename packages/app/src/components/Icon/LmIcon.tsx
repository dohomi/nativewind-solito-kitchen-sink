import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { styled } from 'nativewind'
import { LmColorText, LmCoreSizes } from '../../utils/daisyClassNames'
import clsx from 'clsx'

export type ioniconIconNames = keyof typeof Ionicons.glyphMap;

type LmIconProps = {
  name: ioniconIconNames;
  size?: LmCoreSizes
  color?: LmColorText
}

const IconStyled = styled(Ionicons, '')
const SizeMap: {[k in LmCoreSizes]: number} = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 28,
  xl: 36
}

export function LmIcon({ color, name, size }: LmIconProps) {
  return (
    <IconStyled name={name} className={clsx({ ['text-' + color]: color })} size={SizeMap[size || 'md']} />
  )
}