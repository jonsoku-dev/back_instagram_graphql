// data 모델에 있는 이름과 같아야한다 : User
export const USER_FRAGMENT = `
    id
    username
`;
export const COMMENT_FRAGMENT = `
    id
    text
    user {
        id
        username
    }
`;

export const FILE_FRAGMENT = `
    id
    url
`;

export const FULL_POST_FRAGMENT = `
fragment PostParts on Post{
    id
    location
    caption
    files {
        ${FILE_FRAGMENT}
    }
    comments { 
        ${COMMENT_FRAGMENT}
    }
    user {
        ${USER_FRAGMENT}
    }
}
`;
