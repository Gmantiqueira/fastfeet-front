import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Content } from './styles';

const useStyles = makeStyles(theme =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    })
);

export default function TransitionsModal({ open, data, handleClose }) {
    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Content>
                        <p>Informações da encomenda</p>
                        <h4>Rua Beethoven, 1729</h4>
                        <h4>Diadema - SP</h4>
                        <h4>09960-580</h4>
                        <hr />
                        <p>Datas</p>
                        <h4>
                            <b>Retirada:</b> 25/01/2020
                        </h4>
                        <h4>
                            <b>Entrega:</b> 25/01/2020
                        </h4>
                        <hr />
                        <p>Assinatura do destinatário</p>
                    </Content>
                </Fade>
            </Modal>
        </div>
    );
}
