import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const res = await axios.get('http://localhost:3003/users');
        setUsers(res.data.reverse());
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }
    return (
        <div className="container mx-auto m-5">
            <Table striped>
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className="btn btn-primary mr-2" >
                                    View
                                </Link>
                                <Link
                                    className="btn btn-outline-primary mr-2"
                                    to={`/editUser/${user.id}`}
                                >
                                    Edit
                                </Link>
                                <Button
                                    className="btn btn-danger"
                                    onClick={() => deleteUser(user.id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </Table>
        </div >
    )
}

export default Home;