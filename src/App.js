import React from 'react'
import Table, { AvatarCell,SelectColumnFilter } from './Table'  // new

const getData = () => {
  const data = [
    {
      regions: 'central',
      email:'Central',
      title: '135',
      department: 'Optimization',
      status: '156',
      role: '82',
      age: 27,

    },
    {
      regions: 'East',
      email: 'East',
      title: '145',
      department: 'Intranet',
      status: '12',
      role: '12',
      age: 43,

    },

    {
      regions: 'West',
      email: 'South',
      title: '95',
      department: 'Program',
      status: '135',
      role: '16',
      age: 29,

    },
    {
      regions: 'South',
      email: 'West',
      title: '15',
      department: 'Mobility',
      status: '142',
      role: '25',
      age: 36,

    },
    {
      regions: 'North',
      email: 'North',
      title: '15',
      department: 'Mobility',
      status: '142',
      role: '25',
      age: 36,

    }

  ]
  return [...data]
}

function App() {

  const columns = React.useMemo(() => [
    {
      Header: "Region",
      accessor: 'name',
      Cell: AvatarCell,
      imgAccessor: "imgUrl",
      regions: "regions",
    },
    {
      Header: "Total Leads",
      accessor: 'title',
    },
    {
      Header: "New Leads",
      accessor: 'status',

    },
    {
      Header: "Contacted",
      accessor: 'age',
    },
    {
      Header: "Close",
      accessor: 'role',
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
    },
  ], [])

  const data = React.useMemo(() => getData(), [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div >
          <h1 className="text-xl font-semibold"> Head Office</h1>
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
