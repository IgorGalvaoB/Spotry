import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css'


export const SearchBar = () => {
    const [search, setSearch] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                className='inputSearch'
                type="input"
                placeholder="Search for music, artists or tracks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Link to={{
                pathname: `/search/?q=${search}`
            }}>
                <button style={{ display: 'none' }} onClick={() => setSearch('')}></button>
            </Link>
        </form>

    );
}


export const SearchBarMain = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const [search, setSearch] = useState('')
    return (
        <form className='inputFormSearch' onSubmit={handleSubmit}>
            <input
                className='inputSearchMain'
                type="input"
                placeholder="Search for music, artists or tracks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Link to={{
                pathname: `/search/?q=${search}`
            }}>
                <button style={{ display: 'none' }} onClick={() => setSearch('')}></button>
            </Link>
        </form>

    );
}