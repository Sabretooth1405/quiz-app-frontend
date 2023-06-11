import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Select } from '@mui/material';
import {MenuItem} from '@mui/material';
import {InputLabel} from '@mui/material';
import createQuestionRequest from '../utils/PostStats';
import { useNavigate } from 'react-router-dom';


export default function CreateQuestion() {
        const navigate=useNavigate()


    const [category, setCategory] = React.useState("GEN");
    const categories = ["GEN","MUS","ENT", "LIT","ART", "SPO","SCI", "BIZ",  "TEC",]

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <Container className='edit-cont' component="main" maxWidth="xs">

            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography className='typo' component="h1" variant="h4">
                    Create
                   
                </Typography>
                
                <Box component="form" onSubmit={async (e)=>{
                    const user=localStorage.getItem('user')
                    const [result,_]= await createQuestionRequest(e)
                     if(result===1){
                        navigate(`/myquestions/`)
                     }}} noValidate sx={{ mt: 1 }}>
        
            <InputLabel id="cat-label">Category</InputLabel>
                    <Select
                    labelId="cat-label"
                    id="category-display"
                    value={category}
                    label="Category"
                    name='category'
                    onChange={handleChange}
                >
                    {categories.map((cat)=>(
                        <MenuItem value={cat}>{cat} </MenuItem>
                    ))}
                </Select>
                <TextField
                        margin="normal"
                        multiline
                        rows={5}
                        fullWidth
                        id="question"
                        label="Question"
                        name="question"
                        autoComplete="Question"
                        required
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="answer"
                        label="Answer"
                        name="answer"
                        autoComplete="Answer"
                        autoFocus
                    />
                    <FormControlLabel
                        control={<Checkbox value={true} name="used" color="primary" />}
                        label="Used"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="usedFor"
                        label="Used For"
                        name="used_for"
                        autoComplete="Used For"
                        autoFocus
                    />
                    <FormControlLabel
                        control={<Checkbox  value={true} name="visible_to_friends" color="primary" />}
                        label="Visible To friends"
                    />
                    <div className='edit-btns'>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Create
                    </Button>
                    </div>
                </Box>
            </Box>
        </Container>
  )
}
