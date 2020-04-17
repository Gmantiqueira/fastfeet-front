import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Content } from './styles';
import { format } from 'date-fns';

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
                    {data && (
                        <Content>
                            <p>Informações da encomenda</p>
                            <h4>{`${data.recipient.street}, ${data.recipient.number}`}</h4>
                            <h4>{`${data.recipient.city} - ${data.recipient.state}`}</h4>
                            <h4>{data.recipient.zip_code}</h4>
                            <hr />
                            <p>Datas</p>
                            <h4>
                                <b>Retirada:</b>{' '}
                                {data.start_date
                                    ? format(
                                          new Date(data.start_date),
                                          'dd/MM/yyyy'
                                      )
                                    : 'N/A'}
                            </h4>
                            <h4>
                                <b>Entrega:</b>{' '}
                                {data.end_date
                                    ? format(
                                          new Date(data.end_date),
                                          'dd/MM/yyyy'
                                      )
                                    : 'N/A'}
                            </h4>
                            <hr />
                            <p>Assinatura do destinatário</p>
                            {data.signature && (
                                <img
                                    src={data.signature.url}
                                    alt="Assinatura da encomenda"
                                />
                            )}
                        </Content>
                    )}
                </Fade>
            </Modal>
        </div>
    );
}
