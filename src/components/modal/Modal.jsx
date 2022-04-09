import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import ExtraInfo from '../ExtraInfo';
import { Fade } from '@mui/material';

const style = {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    bgcolor: 'rgba(167, 167, 167, 0.536)',
    color: 'black',
    boxShadow: 0,
    p: 0,
};

export default function BasicModal({ name }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <button onClick={handleOpen}>More Info</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Fade in={open}>
                    <Box sx={style} >
                        <ExtraInfo handleClose={handleClose} name={name} />
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}
