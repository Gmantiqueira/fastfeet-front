import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '@/services/history';

import api from '@/services/api';

import { deleteProblemSuccess, deleteProblemFailure } from './actions';

export function* deleteProblem({ payload }) {
    try {
        const { data } = payload;

        yield call(api.delete, `problem/${data}`);

        toast.success('Encomenda excluída com sucesso!');

        history.push('/problem');

        yield put(deleteProblemSuccess());
    } catch (err) {
        toast.error('Erro ao excluir encomenda, tente novamente!');
        yield put(deleteProblemFailure());
    }
}

export default all([
    takeLatest('@problem/DELETE_PROBLEM_REQUEST', deleteProblem),
]);
