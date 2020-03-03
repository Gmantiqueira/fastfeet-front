import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '@/services/history';

import api from '@/services/api';

import {
    registerDeliverySuccess,
    registerDeliveryFailure,
    deleteDeliverySuccess,
    deleteDeliveryFailure,
    updateDeliverySuccess,
    updateDeliveryFailure,
} from './actions';

export function* registerDelivery({ payload }) {
    try {
        const { data } = payload;

        yield call(api.post, 'delivery', data);

        toast.success('Encomenda cadastrada com sucesso!');

        history.push('/delivery');

        yield put(registerDeliverySuccess());
    } catch (err) {
        toast.error(
            'Erro ao cadastrar encomenda, verifique os dados inseridos!'
        );
        yield put(registerDeliveryFailure());
    }
}

export function* deleteDelivery({ payload }) {
    try {
        const { data } = payload;

        yield call(api.delete, `delivery/${data}`);

        toast.success('Encomenda excluída com sucesso!');

        history.push('/delivery');

        yield put(deleteDeliverySuccess());
    } catch (err) {
        toast.error('Erro ao excluir encomenda, tente novamente!');
        yield put(deleteDeliveryFailure());
    }
}

export function* updateDelivery({ payload }) {
    try {
        const { data } = payload;

        yield call(api.put, `delivery/${data.id}`, data);

        toast.success('Encomenda atualizada com sucesso!');

        history.push('/delivery');

        yield put(updateDeliverySuccess());
    } catch (err) {
        toast.error('Erro ao editar encomenda, tente novamente!');
        yield put(updateDeliveryFailure());
    }
}

export default all([
    takeLatest('@delivery/REGISTER_DELIVERY_REQUEST', registerDelivery),
    takeLatest('@delivery/DELETE_DELIVERY_REQUEST', deleteDelivery),
    takeLatest('@delivery/UPDATE_DELIVERY_REQUEST', updateDelivery),
]);
