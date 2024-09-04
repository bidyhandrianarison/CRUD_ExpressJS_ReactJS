import React from 'react'
import 'axios'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { useEffect } from 'react';
// Remove the unused import statement
// import { use } from '../../../back/routes/user';
export default function Form({validate}) {
    const navigate= useNavigate();
    const [values, setValues]=useState({
        name:'',
        email:'',
        id:''
    });
    const {id} = useParams();
    
    const handleInput= (e) => {
        setValues(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    useEffect(() => {
        if (validate === 'update') {
            axios.get(`http://localhost:3005/user/${id}`)
                .then(result => {
                    setValues({ name: result.data.name, email: result.data.email, id: result.data.id });
                })
                .catch(err => console.log(err));
        }
    }, [validate, id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        if (validate === 'add') {
            axios.post('http://localhost:3005/user', values)
                .then(result => {
                    console.log(result)
                    navigate('/')
                })
                .catch(err => console.log(err))
        } else if (validate === 'update') {
            axios.put(`http://localhost:3005/user/${id}`, values)
                .then(result => {
                    console.log(result)
                    navigate('/')
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='flex flex-col w-screen !justify-center items-center'>
            <div className='font-bold text-4xl'>{validate} an user</div>
            <div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div>
                        <label htmlForfor="name">Name</label>
                        <input className='p-2 bg-[#f2f8fc] outline-none' onChange={handleInput} type="text" name='name' value={values.name} />
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input className='p-2 bg-[#f2f8fc] outline-none' onChange={handleInput} type="email" name='email' value={values.email} />
                    </div>
                    <div className='flex flex-row-reverse'>
                        <button type='submit' className='p-2 rounded-lg bg-green-600 text-white font-medium'>{validate}</button>
                    </div>
                </form>
            </div>
        </div>
            )
}
