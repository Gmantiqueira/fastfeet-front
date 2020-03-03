import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '@/services/history';

import api from '@/services/api';

import {
    registerDeliverymanSuccess,
    registerDeliverymanFailure,
    deleteDeliverymanSuccess,
    deleteDeliverymanFailure,
    updateDeliverymanSuccess,
    updateDeliverymanFailure,
} from './actions';

export function* registerDeliveryman({ payload }) {
    try {
        const { data } = payload;

        yield call(api.post, 'deliveryman', data);

        toast.success('Encomenda cadastrada com sucesso!');

        history.push('/deliveryman');

        yield put(registerDeliverymanSuccess());
    } catch (err) {
        toast.error(
            'Erro ao cadastrar encomenda, verifique os dados inseridos!'
        );
        yield put(registerDeliverymanFailure());
    }
}

export function* deleteDeliveryman({ payload }) {
    try {
        const { data } = payload;

        yield call(api.delete, `deliveryman/${data}`);

        toast.success('Encomenda excluída com sucesso!');

        history.push('/deliveryman');

        yield put(deleteDeliverymanSuccess());
    } catch (err) {
        toast.error('Erro ao excluir encomenda, tente novamente!');
        yield put(deleteDeliverymanFailure());
    }
}

export function* updateDeliveryman({ payload }) {
    try {
        const { data } = payload;

        yield call(api.put, `deliveryman/${data.id}`, data);

        toast.success('Encomenda atualizada com sucesso!');

        history.push('/deliveryman');

        yield put(updateDeliverymanSuccess());
    } catch (err) {
        toast.error('Erro ao editar encomenda, tente novamente!');
        yield put(updateDeliverymanFailure());
    }
}

export default all([
    takeLatest(
        '@deliveryman/REGISTER_DELIVERYMAN_REQUEST',
        registerDeliveryman
    ),
    takeLatest('@deliveryman/DELETE_DELIVERYMAN_REQUEST', deleteDeliveryman),
    takeLatest('@deliveryman/UPDATE_DELIVERYMAN_REQUEST', updateDeliveryman),
]);
