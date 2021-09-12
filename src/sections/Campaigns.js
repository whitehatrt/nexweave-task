import React from 'react'
import Table from '../components/Table'
import TableHeader from '../components/TableHeader'
import data from '../data/data.json'

const Campaigns = () => {
    return (
        <>
                  <TableHeader />
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full ">
            <Table people={data}/>
          </div>
        </div>
      </section>
        </>
    )
}

export default Campaigns
