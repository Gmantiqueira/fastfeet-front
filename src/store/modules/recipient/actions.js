export function registerRecipientRequest(data) {
    return {
        type: '@recipient/REGISTER_RECIPIENT_REQUEST',
        payload: { data },
    };
}

export function registerRecipientSuccess() {
    return {
        type: '@recipient/REGISTER_RECIPIENT_SUCCESS',
    };
}

export function registerRecipientFailure(data) {
    return {
        type: '@recipient/REGISTER_RECIPIENT_FAILURE',
        payload: { data },
    };
}

export function deleteRecipientRequest(data) {
    return {
        type: '@recipient/DELETE_RECIPIENT_REQUEST',
        payload: { data },
    };
}

export function deleteRecipientSuccess() {
    return {
        type: '@recipient/DELETE_RECIPIENT_SUCCESS',
    };
}

export function deleteRecipientFailure(data) {
    return {
        type: '@recipient/DELETE_RECIPIENT_FAILURE',
        payload: { data },
    };
}

export function updateRecipientRequest(data) {
    return {
        type: '@recipient/UPDATE_RECIPIENT_REQUEST',
        payload: { data },
    };
}

export function updateRecipientSuccess() {
    return {
        type: '@recipient/UPDATE_RECIPIENT_SUCCESS',
    };
}

export function updateRecipientFailure(data) {
    return {
        type: '@recipient/UPDATE_RECIPIENT_FAILURE',
        payload: { data },
    };
}
