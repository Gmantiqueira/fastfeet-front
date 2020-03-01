import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '@/services/history';

import api from '@/services/api';

import { registerDeliverySuccess, registerDeliveryFailure } from './actions';

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

export default all([
    takeLatest('@delivery/REGISTER_DELIVERY_REQUEST', registerDelivery),
]);
