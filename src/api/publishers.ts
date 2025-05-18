export const GET_LIST_OF_VIDEO_GAME_PUBLISHERS = (key: string) => {
    return `publishers?key=${key}`
}

export const GET_DETAILS_OF_PUBLISHERS = (id: string, key: string) => {
    return `publishers/${id}?key${key}`
}