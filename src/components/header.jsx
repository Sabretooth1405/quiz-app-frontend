import * as React from 'react';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CameraAltOutlined } from '@mui/icons-material';

function Header(){
     let token = localStorage.getItem('myToken')
    return(
        <AppBar position='relative'>
            <Toolbar>
                <CameraAltOutlined sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    Quiz
                </Typography>
            </Toolbar>
        </AppBar>
    )

}

export default Header