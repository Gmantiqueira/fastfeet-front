import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '@/services/history';

import api from '@/services/api';

import {
    registerRecipientSuccess,
    registerRecipientFailure,
    deleteRecipientSuccess,
    deleteRecipientFailure,
    updateRecipientSuccess,
    updateRecipientFailure,
} from './actions';

export function* registerRecipient({ payload }) {
    try {
        const { data } = payload;

        yield call(api.post, 'recipient', data);

        toast.success('Encomenda cadastrada com sucesso!');

        history.push('/recipient');

        yield put(registerRecipientSuccess());
    } catch (err) {
        toast.error(
            'Erro ao cadastrar encomenda, verifique os dados inseridos!'
        );
        yield put(registerRecipientFailure());
    }
}

export function* deleteRecipient({ payload }) {
    try {
        const { data } = payload;

        yield call(api.delete, `recipient/${data}`);

        toast.success('Encomenda excluída com sucesso!');

        history.push('/recipient');

        yield put(deleteRecipientSuccess());
    } catch (err) {
        toast.error('Erro ao excluir encomenda, tente novamente!');
        yield put(deleteRecipientFailure());
    }
}

export function* updateRecipient({ payload }) {
    try {
        const { data } = payload;

        yield call(api.put, `recipient/${data.id}`, data);

        toast.success('Encomenda atualizada com sucesso!');

        history.push('/recipient');

        yield put(updateRecipientSuccess());
    } catch (err) {
        toast.error('Erro ao editar encomenda, tente novamente!');
        yield put(updateRecipientFailure());
    }
}

export default all([
    takeLatest('@recipient/REGISTER_RECIPIENT_REQUEST', registerRecipient),
    takeLatest('@recipient/DELETE_RECIPIENT_REQUEST', deleteRecipient),
    takeLatest('@recipient/UPDATE_RECIPIENT_REQUEST', updateRecipient),
]);
