import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

type LmIconProps = {
  name: keyof typeof Ionicons.glyphMap;
  size?: number
  color?: string
}

export function LmIcon(props: LmIconProps) {
  return <Ionicons name={props.name} size={props.size || 24} color={props.color || 'black'} />
}