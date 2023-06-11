import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  outline: 0,
};

export default function BasicModal(props) {
    const navigate=useNavigate()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const mb=(props.mb||props.mb===0)?props.mb:2
  return (
    <div style={{width:'100%'}}>
      <Button type="button"
                        fullWidth
                        disabled={props.notEditable? true: false}
                        variant="contained"
                        color={props.color?props.color:"error"}
                        sx={{ mt: 3, mb:mb  }}
                        onClick={handleOpen}>{props.buttonText}
                
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.heading}
          </Typography>
           <Button
                        type="button"
                        fullWidth
                        onClick={()=>{
                           const flag= props.func()
                           if(flag!==-1){
                            navigate(props.redirect)
                            console.log('here')
                           }
                            handleClose()
                            return flag}}
                        variant="contained"
                        color={props.color?props.color:"error"}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {props.buttonText}
        </Button>
        </Box>
      </Modal>
    </div>
  );
}