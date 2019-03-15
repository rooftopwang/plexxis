import React from 'react'
import Btn from './Btn.js'

const columns = [
    {
        Header: 'ID',
        accessor: '_id'
    },
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Code',
        accessor: 'code'
    },
    {
        Header: 'Profession',
        accessor: 'profession'
    },
    {
        Header: 'Color',
        accessor: 'color'
    },
    {
        Header: 'City',
        accessor: 'city'
    },
    {
        Header: 'Branch',
        accessor: 'branch'
    },
    {
        id: 'ra',
        Header: 'Assigned',
        accessor: d => d.assigned.toString()
    },
    // {
    //     id: "del",
    //     Header: 'Option',
    //     Cell: ({row}) => (<button onClick={()=>{
    //         deleteuser(row._id);
    //     }}>Delete</button>)
    // }
    {
        id: "del",
        Header: 'Option',
        Cell: ({row}) => (
                <Btn usrid={row._id}/>
            )
    }
]
export default columns