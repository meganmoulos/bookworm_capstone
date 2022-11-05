import {atom, selector, selectorFamily} from 'recoil'

export const googleBooksState = selectorFamily({
    key: 'googleBooksState',
    get: query => async () => {
        const response = await fetchAllGoogleBooks(query)
        return response
    }
})

const fetchAllGoogleBooks = async function (query){
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    const books = await res.json()
    books.items = books.items.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.id === value.id
    ))
  )
    return books
} 

export const currentUserState = selector({
    key: 'currentUserState',
    get: async () => {
        const response = await fetchUser()
        return response
    }
})

export const fetchUser = () => fetch('/sessions/current').then(res => res.json())

export const shelvesState = selector({
    key: 'shelvesState',
    get: async () => {
        const response = await fetchShelves()
        return response
    }
})

export const fetchShelves = () => fetch('/shelves').then(res => res.json())