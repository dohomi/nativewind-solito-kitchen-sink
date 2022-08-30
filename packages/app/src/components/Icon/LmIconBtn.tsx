import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

type LmIconBtnProps = {
  name: keyof typeof Ionicons.glyphMap;
  onPress: () => any
  size?: number
  color?: string
  backgroundColor?: string
}

export function LmIconBtn(props: LmIconBtnProps) {
  return <Ionicons.Button
    name={props.name}
    size={props.size || 24}
    color={props.color || 'black'}
    backgroundColor={props.backgroundColor || 'lightblue'}
    onPress={props.onPress}
  />
}