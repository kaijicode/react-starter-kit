import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchUsers } from './actions';


export const Users = (props) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const isLoading = useSelector(state => state.users.isLoading);


    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <React.Fragment>
            <h3>Users</h3>

            <pre>
                {JSON.stringify(users, null, 8)}
            </pre>

            {
                isLoading &&
                <div>loading...</div>
            }
        </React.Fragment>
    )
}
