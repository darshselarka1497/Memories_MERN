import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import memories from './images/memories.png'

import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import Post from './components/Posts/Post/Post';

const App = () => {
    return(
        <Container maxWidth='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'> Memories 
                <img src={memories} alt="memories" height="50" width="50"/>
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing='3'>
                        <Grid item xs={12} sm={7}>
                            <Posts>

                            </Posts>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form>

                            </Form>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;