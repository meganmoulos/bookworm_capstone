import {atom, selector} from 'recoil'

export const fictionBooksState = selector({
    key: 'fictionBooksState',
    get: async () => {
        const response = await fetchAllFictionBooks()
        return response
    }
})

const fetchAllFictionBooks = () => fetch('https://www.googleapis.com/books/v1/volumes?q=london+subject:fiction').then(res => res.json())

export const nonfictionBooksState = selector({
    key: 'nonfictionBooksState',
    get: async () => {
        const response = await fetchAllNonfictionBooks()
        return response
    }
})

const fetchAllNonfictionBooks = () => fetch('https://www.googleapis.com/books/v1/volumes?q=london').then(res => res.json())