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
    const [loadingPage, setLoadingPage] = useState(false);
    const [haveMoreData, setHaveMoreData] = useState(true);
    const [page, setPagination] = useState(1);

    async function loadProblems(resetPagination) {
        if (page > 1) {
            setLoadingPage(true);
        } else {
            setLoading(true);
        }
        try {
            const { data } = await api.get('problems', {
                params: { page },
            });

            setProblems(
                resetPagination || page === 1
                    ? data
                    : oldElements => [...oldElements, ...data]
            );

            if (data.length === 0) {
                setHaveMoreData(false);
            }

            setLoading(false);
            setLoadingPage(false);
        } catch {
            toast.error('Falha ao trazer as informações dos problemas.');
            setLoading(false);
            setLoadingPage(false);
        }
    }

    useEffect(() => {
        setPagination(1);
        loadProblems();
    }, []);

    useEffect(() => {
        if (haveMoreData) {
            loadProblems();
        }
    }, [page]);

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
                setPagination={setPagination}
                loading={loading}
                loadingPage={loadingPage}
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
        widthProportion: 2,
    },
];
