export const GET_LIST_OF_STORES = (key: string) => {
    return `stores?key=${key}`
}

export const GET_DETAILS_OF_STORES = (id: string, key: string) => {
    return `stores/${id}?key${key}`
}