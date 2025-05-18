export const GET_LIST_OF_TAGS = (key: string) => {
    return `tags?key=${key}`
}

export const GET_DETAILS_OF_TAGS = (id: string, key: string) => {
    return `tags/${id}?key${key}`
}