import React, { useEffect, useState } from 'react';
import api from '@/services/api';

import Grid from '@/components/Grid';
import ContentHeader from '@/components/ContentHeader';
import TransitionsModal from './TransitionsModal';
import { toast } from 'react-toastify';

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
        if (confirmed) {
            dispatch(deleteProblemRequest(data.id));
            loadProblems();
        }
    }

    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadProblems() {
        setLoading(true);
        try {
            const { data } = await api.get('problems', {
                params: { page: 1 },
            });

            const problems = [];

            data.forEach(problem => {
                problems.push({
                    ...problem,
                });
            });

            setProblems(problems);
            setLoading(false);
        } catch {
            toast.error('Falha ao trazer as informações dos problemas.');
            setLoading(false);
        }
    }

    useEffect(() => {
        loadProblems();
    }, []);

    const actions = [
        {
            text: 'Visualizar',
            color: '#8E5BE8',
            icon: RemoveRedEye,
            action: data => handleOpen(data),
        },
        {
            text: 'Cancelar encomenda',
            color: '#DE3B3B',
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
                loading={loading}
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
        widthProportion: 3,
    },
    {
        title: 'Problema',
        key: 'description',
        widthProportion: 10,
    },
    {
        title: 'Ações',
        key: 'actions',
        widthProportion: 1,
    },
];
