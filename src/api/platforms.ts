export const GET_LIST_OF_VIDEO_GAME_PLATFORMS = (key: string) => {
    return `platforms?key=${key}`
}

export const GET_LIST_OF_PARENTS_PLATFORMS = (key: string) => {
    return `platforms/lists/parents?key=${key}`
}

export const GET_DETAILS_OF_PLATFORMS = (id: string, key: string) => {
    return `platforms/${id}?key${key}`
}