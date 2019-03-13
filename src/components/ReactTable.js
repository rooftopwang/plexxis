const columns = [
    {
        Header: 'ID',
        accessor: 'id'
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
]
export default columns