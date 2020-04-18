export function deleteProblemRequest(data) {
    return {
        type: '@problem/DELETE_PROBLEM_REQUEST',
        payload: { data },
    };
}

export function deleteProblemSuccess() {
    return {
        type: '@problem/DELETE_PROBLEM_SUCCESS',
    };
}

export function deleteProblemFailure(data) {
    return {
        type: '@problem/DELETE_PROBLEM_FAILURE',
        payload: { data },
    };
}
