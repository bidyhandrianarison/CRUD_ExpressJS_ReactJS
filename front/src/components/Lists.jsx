import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

export default function Lists() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3005/user')
            .then(result => {
                setUsers(result.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleDelete= (id) => {
        axios.delete(`http://localhost:3005/user/${id}`);
        window.location.reload();
    }
    return (
        <div>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className='font-bold'>Name</th>
                        <th className='font-bold'>Email</th>
                        <th className='font-bold'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, id) => (
                            <tr key={id}>
                                <td className="border px-4 py-2">{user.name}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2 flex gap-5">
                                    <div className='bg-green-600 text-white p-2 rounded-lg'><Link to={`/userupdate/${user.id}`}>Update</Link></div>
                                    <button onClick={()=>{handleDelete(user.id)}} className='bg-red-600 text-white p-2 rounded-lg'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
