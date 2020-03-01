export function registerDeliveryRequest(data) {
    return {
        type: '@delivery/REGISTER_DELIVERY_REQUEST',
        payload: { data },
    };
}

export function registerDeliverySuccess() {
    return {
        type: '@delivery/REGISTER_DELIVERY_SUCCESS',
    };
}

export function registerDeliveryFailure(data) {
    return {
        type: '@delivery/REGISTER_DELIVERY_FAILURE',
        payload: { data },
    };
}

export function deleteDeliveryRequest(data) {
    return {
        type: '@delivery/DELETE_DELIVERY_REQUEST',
        payload: { data },
    };
}

export function deleteDeliverySuccess(data) {
    return {
        type: '@delivery/DELETE_DELIVERY_SUCCESS',
        payload: { data },
    };
}

export function deleteDeliveryFailure(data) {
    return {
        type: '@delivery/DELETE_DELIVERY_FAILURE',
        payload: { data },
    };
}
