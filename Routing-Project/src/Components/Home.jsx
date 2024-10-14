
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({data}) {
  return (
    <>
    <center>
        <br /><br />
        <h1 >CRUD-Router Project</h1>
        <br /><br />
        <Link to={"/Create"} id='l1'>Create</Link>
        <Link to={"/Delete"} id='l1'>Delete</Link>
        <Link to={"/Update"} id='l1'>Update</Link> <br /><br /><br />
        <table border={'2'} width={"65%"}>
            <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile-No</th>
            </thead>
            <tbody>
                {
                    data && 

                    data.map((e,i)=>{
                        return <tr   key={i}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.num}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </center>  
    </>
  )
}

