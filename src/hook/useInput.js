import { useState } from 'react'

export const useInput = (init = '') => {
    const [value, setValue] = useState(init)

    const reset = () => setValue('')

    const setValueInput = (input) => setValue(input)

    const bind = {
        value,
        onChangeText: (text) => setValue(text),
    }

    return [value, bind, reset, setValueInput]
}
