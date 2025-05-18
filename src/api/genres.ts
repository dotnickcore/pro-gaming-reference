export const GET_LIST_OF_VIDEO_GAME_GENRES = (key: string) => {
    return `genres?key=${key}`;
}

export const GET_DETAILS_OF_GENRE = (id: string, key: string) => {
    return `genres/${id}/?key=${key}`;
}