import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '@/services/history';

import api from '@/services/api';

import { deleteProblemSuccess, deleteProblemFailure } from './actions';

export function* deleteProblem({ payload }) {
    try {
        const { data } = payload;

        yield call(api.delete, `problem/${data}/cancel-delivery`);

        toast.success('Encomenda cancelada com sucesso!');

        history.push('/problems');

        yield put(deleteProblemSuccess());
    } catch (err) {
        toast.error('Erro ao cancelar encomenda, tente novamente!');
        yield put(deleteProblemFailure());
    }
}

export default all([
    takeLatest('@problem/DELETE_PROBLEM_REQUEST', deleteProblem),
]);
