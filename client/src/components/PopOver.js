import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography'

function PopOver({book, setAnchorEl, anchorEl}) {

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
            >
                <Typography sx={{ p: 1 }}>
                    Description: {book.volumeInfo.description}
                </Typography>
                <Typography sx={{ p: 1 }}>
                    Page Count: {book.volumeInfo.pageCount}
                </Typography>
                <Typography sx={{ p: 1 }}>
                    Published: {book.volumeInfo.publishedDate}
                </Typography>
            </Popover>
        </div>
    );
}

export default PopOver;