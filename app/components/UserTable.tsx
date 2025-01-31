"use client"
import React, { useState } from 'react';


interface UserData {
    id: number;
    nickname: string;
    email: string;
    birthDate: string;
    gender: string;
    residence: string;
    registrationDate: string;
}

interface UserTableProps {
    users: UserData[];
}

const UserTable = ({ users }: UserTableProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const usersPerPage = 10;
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users
        .filter(user => user.email.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(currentUsers.length / usersPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        setSearchQuery(event.target.value);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    };

    return (
        <div>
            <div className="flex justify-between mb-4 ml-2">
                <h1 className="user-list">登録ユーザー一覧</h1>
                <div className="relative flex items-center">
                    <input
                        type="search"
                        className="px-5 py-2 pl-10 rounded w-[340px] border border-gray-300 outline-none search-bar"
                        placeholder="ニックネーム / メールアドレスで検索"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ml-2 text-gray-500 cursor-pointer" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.4993 18.0001L13.916 14.4167" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            {isLoading ? (
                <div className="flex justify-center items-center" style={{ minHeight: '200px' }}>
                    <div className="spinner"></div>
                </div>
            ) : currentUsers.length === 0 ? (
                <div className="flex justify-center items-center" style={{ minHeight: '200px' }}>
                    <p className='empty'>表示するデータがありません</p>
                </div>
            ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }} className='rounded-xl'>
                    <thead className='border-b'>
                        <tr>
                            <th className='p-3 t-headers'>No.</th>
                            <th className='p-3 t-headers'>ニックネーム</th>
                            <th className='p-3 t-headers'>メールアドレス</th>
                            <th className='p-3 t-headers'>生年月</th>
                            <th className='p-3 t-headers'>性別</th>
                            <th className='p-3 t-headers'>居住地</th>
                            <th className='p-3 t-headers'>登録日</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map(user => (
                            <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
                                <td className='p-3 t-content'>{user.id}</td>
                                <td className='p-3 t-content'>{user.nickname}</td>
                                <td className='p-3 t-content' style={{
                                    maxWidth: '200px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {user.email}
                                </td>
                                <td className='p-3 t-content'>{user.birthDate}</td>
                                <td className='p-3 t-content'>{user.gender}</td>
                                <td className='p-3 t-content'>{user.residence}</td>
                                <td className='p-3 t-content'>{user.registrationDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {currentUsers.length > 0 && (
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                    <button
                        onClick={goToPreviousPage}
                        style={{
                            padding: '5px 10px',
                            borderRadius: '4px',
                            backgroundColor: "white",
                            color: currentPage === 1 ? '#ccc' : 'black',
                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                        }}
                    >
                        &lt;
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            style={{
                                margin: '0 5px',
                                padding: '5px 10px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                backgroundColor: currentPage === page ? 'rgb(255, 149, 0)' : 'white',
                                color: currentPage === page ? 'white' : 'black',
                                cursor: 'pointer',
                            }}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={goToNextPage}
                        style={{
                            padding: '5px 10px',
                            borderRadius: '4px',
                            backgroundColor: "white",
                            color: currentPage === 1 ? '#ccc' : 'black',
                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                        }}
                    >
                        &gt;
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserTable;
