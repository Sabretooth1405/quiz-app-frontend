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
import editQuestionRequest from '../utils/PutStats';
import BasicModal from './infoModal';
import { myQuestionDelete } from '../utils/DeleteStats';



export default function EditQuestion(props) {
        const handleDelete= async (id)=>{
          const [flag,status]  = myQuestionDelete(id)
          if(flag===-1){
            return -1;
          }
          return 1;
        }


    const [category, setCategory] = React.useState(props.question.category);
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
                <Typography className='typo' component="h1" variant="h5">
                    Edit
                </Typography>
                <Box component="form" onSubmit={(e)=>{
                    editQuestionRequest(e,props.question.id,props.question)
                }} noValidate sx={{ mt: 1 }}>
        
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
                        defaultValue={props.question.question}
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
                        defaultValue={props.question.answer}
                        autoFocus
                    />
                    <FormControlLabel
                        control={<Checkbox defaultChecked={props.question.used}  value={true} name="used" color="primary" />}
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
                        defaultValue={props.question.used_for}
                        autoFocus
                    />
                    <FormControlLabel
                        control={<Checkbox defaultChecked={props.question.visible_to_friends} value={true} name="visible_to_friends" color="primary" />}
                        label="Visible To friends"
                    />
                    <FormControlLabel
                        control={<Checkbox defaultChecked={props.question.make_answer_visible} value={true} name="make_answer_visible" color="primary" />}
                        label="Make Answer Visible"
                    />
                    <div className='edit-btns'>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Save Changes
                    </Button>
                    <BasicModal   heading="Are You sure you want to delete this question?" buttonText="Delete" 
                    func={()=>{handleDelete(props.question.id)} } notEditable={false} redirect={`/myquestions`} />
                    </div>
                </Box>
            </Box>
        </Container>
  )
}
