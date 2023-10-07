import { parseISO } from 'date-fns'

export const formatTime = (argument:string) => {
    const result = parseISO(argument)
  return result
}
