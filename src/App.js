import React from 'react'
import Table, { SelectColumnFilter } from './Table'  // new

const getData = () => {
  const data = [
    {
      regions: 'Central',
      title: '135',
      newleads: '156',
      close: '82',
      Contacted: 27,

    },
    {
      regions: 'East',

      title: '145',

      newleads: '12',
      close: '12',
      Contacted: 43,

    },

    {
      regions: 'West',
      title: '95',
      newleads: '135',
      close: '16',
      Contacted: 29,

    },
    {
      regions: 'South',
      title: '15',
      newleads: '142',
      close: '25',
      Contacted: 36,

    },
    {
      regions: 'North',
      title: '15',
      newleads: '142',
      close: '25',
      Contacted: 36,

    }

  ]
  return [...data]
}

function App() {

  const columns = React.useMemo(() => [
    {
      Header: "Region",
      accessor: "regions",
    },
    {
      Header: "Total Leads",
      accessor: 'title',
    },
    {
      Header: "New Leads",
      accessor: 'newleads',

    },
    {
      Header: "Contacted",
      accessor: 'Contacted',
    },
    {
      Header: "Close",
      accessor: 'close',
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
