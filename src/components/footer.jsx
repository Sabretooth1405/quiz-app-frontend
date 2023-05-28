import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
function IconRow(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>

            <Link  href="#" sx={{mx:1}} >
                <GitHubIcon fontSize="large" />
            </Link>
            <Link  href="#" sx={{ mx: 1 }} >
                <GoogleIcon fontSize="large" />
            </Link>
            <Link  href="#" sx={{ mx: 1 }} >

                <TwitterIcon fontSize="large" />
            </Link>
        </Typography>

    );
}

function Footer() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '35vh'
            }}
        >
            <Box
                component="footer"
                sx={{
                    py: 2,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <IconRow />
                    <Copyright />
                </Container>
            </Box>
        </Box>
    )
}

export default Footer;