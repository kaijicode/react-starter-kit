import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import { logIn } from './actions';


export const Login = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(logIn(username, password));
    }

    return (
        <Container fixed>
            <form noValidate onSubmit={handleSubmit}>
                <Grid container direction="column" alignContent="center" spacing={3}>
                    <Grid item xs={6}>
                        <TextField name="username" fullWidth label="Username" onChange={(event) => setUsername(event.target.value)}/>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField name="password" fullWidth label="Password" type="password" autoComplete="on" onChange={(event) => setPassword(event.target.value)}/>
                    </Grid>

                    <Grid container item xs={6} justify="flex-end">
                        <Box marginTop={3}>
                            <Button type="submit" color="primary" variant="contained">Log In</Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}
