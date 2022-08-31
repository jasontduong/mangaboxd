import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@mui/material';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { getPosts } from '../../actions/posts';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
  //  const classes = useStyles();
    const dispatch = useDispatch();

useEffect(() => {
        dispatch(getPosts());
       
    }, [currentId, dispatch]);
    return ( 
    <Grow in>
    <Container>
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form  currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
        </Grid>
    </Container>
</Grow>
);
};

export default Home