export const GET_LIST_OF_CREATORS = (key: string) => {
    return `creators?key=${key}`;
}

export const GET_DETAILS_OF_CREATOR = (id: string, key: string) => {
    return `creators/${id}/?key=${key}`;
}

export const GET_LIST_OF_CREATORS_ROLES = (key: string) => {
    return `creator-roles?key=${key}`;
}