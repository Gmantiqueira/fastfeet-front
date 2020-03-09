import React, { useEffect, useState } from 'react';
import api from '@/services/api';

import Grid from '@/components/Grid';
import ContentHeader from '@/components/ContentHeader';
import TransitionsModal from '@/components/TransitionsModal';

import { useDispatch } from 'react-redux';
import { deleteProblemRequest } from '@/store/modules/problem/actions';

import { Delete, RemoveRedEye } from '@material-ui/icons';

import { Container } from './styles';

export default function Problems() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const handleOpen = data => {
        setOpen(true);
        setModalData(data);
    };

    function handleDelete(data) {
        const confirmed = window.confirm(
            'Você está prestes a excluir um problema. Deseja continuar?'
        );
        if (confirmed == true) {
            dispatch(deleteProblemRequest(data.id));
            loadProblems();
        }
    }

    const [problems, setProblems] = useState([]);

    async function loadProblems(query = '') {
        const { data } = await api.get('problems', {
            params: { page: 1, q: query },
        });

        const problems = [];

        data.forEach(problem => {
            problems.push({
                ...problem,
            });
        });

        setProblems(problems);
    }

    useEffect(() => {
        loadProblems();
    }, []);

    const actions = [
        {
            text: 'Visualizar',
            icon: RemoveRedEye,
            action: data => handleOpen(data),
        },
        {
            text: 'Cancelar encomenda',
            icon: Delete,
            action: data => handleDelete(data),
        },
    ];

    return (
        <Container>
            <ContentHeader title="Problemas na entrega"></ContentHeader>
            <Grid
                settings={gridSettings}
                data={problems}
                actions={actions}
                actionsWidth={200}
            />
            <TransitionsModal
                open={open}
                data={modalData}
                handleClose={() => setOpen(false)}
            />
        </Container>
    );
}

const gridSettings = [
    {
        title: 'Encomenda',
        key: 'delivery_id',
        widthProportion: 2.5,
    },
    {
        title: 'Problema',
        key: 'description',
        widthProportion: 1,
    },
    {
        title: 'Ações',
        key: 'actions',
        widthProportion: 3,
    },
];
