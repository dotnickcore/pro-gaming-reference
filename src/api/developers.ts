export const GET_LIST_OF_VIDEO_GAME_DEVELOPERS = (key: string) => {
    return `developers?key=${key}`;
}

export const GET_DETAILS_OF_DEVELOPER = (id: string, key: string) => {
    return `developers/${id}/?key=${key}`;
}