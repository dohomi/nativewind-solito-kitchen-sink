import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react'
import { Platform } from 'react-native'
import { Button } from 'react-native-paper'
import { LmText } from '../../text/LmText'

type LmDatePickerProps = {}

export function LmDatePicker({}: LmDatePickerProps) {
  const [date, setDate] = useState(new Date(1598051730000))
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate
    setShow(false)
    setDate(currentDate)
  }

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false)
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
  }

  const showTimepicker = () => {
    showMode('time')
  }
  return (
    <>
      <Button onPress={showDatepicker}>Show date picker</Button>
      <Button onPress={showTimepicker}>Show time picker</Button>
      <LmText>selected: {date.toLocaleString()}</LmText>
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </>
  )
}
