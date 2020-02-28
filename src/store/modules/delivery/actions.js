export function registerDeliveryRequest(data) {
    return {
        type: '@delivery/REGISTER_DELIVERY_REQUEST',
        payload: { data }
    }
}

export function registerDeliverySuccess() {
    return {
        type: '@delivery/REGISTER_DELIVERY_SUCCESS',
    }
}

export function registerDeliveryFailure(data) {
    return {
        type: '@delivery/REGISTER_DELIVERY_FAILURE',
        payload: { data }
    }
}
