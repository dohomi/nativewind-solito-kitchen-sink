import DropDown, { DropDownPropsInterface } from 'react-native-paper-dropdown'
import { useState } from 'react'


// type LmSelectProps<T> = (AutocompleteSingleProps<T> | AutocompleteMultipleProps<T>)
type LmSelectProps<T> = DropDownPropsInterface & {
  options: { value: number | string, label: string }[]
}

export function LmSelect<T>({ options }: LmSelectProps<T>) {
  const [showDropDown, setShowDropDown] = useState(false)
  const [v, setV] = useState<string | string[]>('')

  return (

    <DropDown
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
      value={v} setValue={(_value) => {

    }} list={options} />
  )
  // return (
  //   <AutocompleteScrollView>
  //     <Autocomplete
  //       multiple={multiple}
  //       onChange={(newValue) => {
  //         console.log({ newValue })
  //       }}
  //       value={multiple ? (value || []) : (value || null)}
  //       options={options}
  //       inputProps={{
  //         placeholder: 'Select user'
  //         // ...all other props which are available in react native paper
  //       }}
  //     />
  //   </AutocompleteScrollView>
  // )
}