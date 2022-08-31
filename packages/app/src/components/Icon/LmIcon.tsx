import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { styled } from 'nativewind'

type LmIconProps = {
  name: keyof typeof Ionicons.glyphMap;
  size?: number
  color?: 'text-primary-content' | 'text-secondary-content' | 'text-accent-content' | 'text-neutral-content' | 'text-base-content' | 'text-warning-content' | 'text-error-content'
}

const IonStyled = styled(Ionicons)

export function LmIcon({ color, name, size }: LmIconProps) {
  return (
    <IonStyled name={name} size={size || 24}
               className={color} />
  )
}