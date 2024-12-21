import { twMerge } from 'tailwind-merge'
import classNames from 'classnames'

const cn = (...classes: any[]) => {
   return twMerge(classNames(...classes))
}

export default cn
