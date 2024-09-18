import { Variables } from 'src/model/variable'

let _throw = (m: string) => {throw new Error(m)}

export function validateVariables(variables: Variables) {
    Object.entries(variables).forEach(([key, value]) => {
        if (value.value) {
            return
        }
        if (value.mandatory) {
            _throw(`Variable ${key} is mandatory`)
        } else {
            value.value = variables[key].default
        }
    })
}