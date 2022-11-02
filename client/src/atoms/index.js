import {atom, selector} from 'recoil'

export const bookState = atom({
    key: 'bookState',
    default: 'book'
})