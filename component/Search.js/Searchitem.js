import React, { useEffect, useState } from 'react'

const Searchitem = () => {
    const [data, setData] = useState([])
    const [searchname, setSearchname] = useState('')
    const API = "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1"
    const callApi = async (URL) => {
        const res = await fetch(URL)
        const data = await res.json()
        setData(data.results)
        // console.log(data.results)
    }

    useEffect(() => {
        callApi(API)
    })

    const onChange = (e) => {
        e.preventDefault()
        setSearchname(e.target.value)
    }

    const onClick = (item) => {
        setSearchname(item)
    }

    return (
        <div>
            <input type="search" placeholder='search here!' onChange={onChange} value={searchname} />
            {data
                .filter((item) => {
                    const searchvalue = searchname.toLowerCase()
                    const searchdata = item.title.toLowerCase()
                    return searchdata && searchdata.startsWith(searchvalue) && searchdata !== searchvalue
                })
                .map((item) => {
                    return <>
                        <li onClick={() => onClick(item.title)}>{item.title} </li>
                    </>
                })}</div>
    )
}

export default Searchitem