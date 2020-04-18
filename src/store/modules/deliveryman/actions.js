export function registerDeliverymanRequest(data) {
    return {
        type: '@deliveryman/REGISTER_DELIVERYMAN_REQUEST',
        payload: { data },
    };
}

export function registerDeliverymanSuccess() {
    return {
        type: '@deliveryman/REGISTER_DELIVERYMAN_SUCCESS',
    };
}

export function registerDeliverymanFailure(data) {
    return {
        type: '@deliveryman/REGISTER_DELIVERYMAN_FAILURE',
        payload: { data },
    };
}

export function deleteDeliverymanRequest(data) {
    return {
        type: '@deliveryman/DELETE_DELIVERYMAN_REQUEST',
        payload: { data },
    };
}

export function deleteDeliverymanSuccess() {
    return {
        type: '@deliveryman/DELETE_DELIVERYMAN_SUCCESS',
    };
}

export function deleteDeliverymanFailure(data) {
    return {
        type: '@deliveryman/DELETE_DELIVERYMAN_FAILURE',
        payload: { data },
    };
}

export function updateDeliverymanRequest(data) {
    return {
        type: '@deliveryman/UPDATE_DELIVERYMAN_REQUEST',
        payload: { data },
    };
}

export function updateDeliverymanSuccess() {
    return {
        type: '@deliveryman/UPDATE_DELIVERYMAN_SUCCESS',
    };
}

export function updateDeliverymanFailure(data) {
    return {
        type: '@deliveryman/UPDATE_DELIVERYMAN_FAILURE',
        payload: { data },
    };
}
