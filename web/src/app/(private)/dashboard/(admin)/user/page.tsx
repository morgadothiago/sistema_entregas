'use client'

import { useAuth } from '@/app/context';
import api from '@/app/services/api';
import { IUserPaginate } from '@/app/types/User';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

const User: React.FC = () => {
    const [users, setUsers] = useState<IUserPaginate[]>({} as IUserPaginate[])
    const [isLoading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [total, setTotal] = useState(1)
    const [lastPage, setLastPage] = useState(1)
    const [email, setemail] = useState() 
    const [role, setRole] = useState() 
    const [status, setStatus] = useState()
    const { token } = useAuth()

    function nextPage() {
        setPage(currentPage => currentPage < lastPage ? currentPage + 1 : lastPage)
    }

    function previousPage() {
        setPage((currentPage) => (currentPage - 1) > 0 ? currentPage - 1: currentPage)
    }

    useEffect(() => {
        if (!token) return;
        
        setLoading(true);
        
        const fetchUsers = async () => {
            try {
                const response = await api.getUsers({page, email, limit, role, status}, token);
                
                if ('status' in response) {
                    if (response.status === 401) {
                        console.log(response);
                    }
                    
                    return;
                }

                setUsers(response.data);
                setPage(response.currentPage);
                setLastPage(response.totalPage);
                setTotal(response.total);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
                toast.error("Erro ao carregar usuários");
            } finally {
                setLoading(false);
            }
        };
        
        fetchUsers();
    }, [page, email, limit, role, status, token])

  return (
        <div>
            <h1>Users: {total}</h1>
            <button onClick={previousPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
            <span>Page: {page}</span>
            {
                isLoading
                ? <span>Loading...</span>
                : users.length ? <table>
                    <thead>
                    <tr>
                        <th>codigo</th>
                        <th>email</th>
                        <th>status</th>
                        <th>role</th>
                    </tr>
                    </thead>
                    {
                        <tbody>{users.map((user) => (
                            <tr key={user.id} className=''>
                                <td>{`#${user.id}`}</td>
                                <td>{user.email}</td>
                                <td>{user.status}</td>
                                <td>{user.role}</td>
                            </tr>
                        ))}</tbody>
                    }
                    </table>
                    : <span>Nenhum usuário encontrado</span>
            }
        </div>
    );
}

export default User;