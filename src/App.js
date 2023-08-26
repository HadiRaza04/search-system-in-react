import React, { useState } from 'react'
import { data } from './data.js'
import { SearchOutlined } from '@ant-design/icons'
// import { Table } from 'antd';
// import { columns } from './data.js'

function App() {
  const [search, setSearch] = useState('');
  return (
    <>
      <div className="w-full bg-blue-300 flex justify-center items-center">
        <h1 className='text-4xl text-center p-4 font-extrabold'>Users Data</h1>
        <div className='w-[300px] p-2 bg-white m-4 rounded-full flex items-center'>
          <SearchOutlined />
          <input onChange={(e) => setSearch(e.target.value)} className='border-hidden outline-0 pl-2 h-full' type="text" placeholder='Search by First Name' />
        </div>
      </div>
      {/* <Table dataSource={data} columns={columns} /> */}
      <table className='m-auto mt-1'>
        <thead className='m-[20px]'>
          <tr className='mt-5'>
            <th className='p-4 bg-gray-200'>First Name</th>
            <th className='p-4 bg-gray-200'>Last Name</th>
            <th className='p-4 bg-gray-200'>E-Mail</th>
            <th className='p-4 bg-gray-200'>Contact no</th>
          </tr>
        </thead>
        <tbody>
          {
            data.filter((item) => {
              return search.toLowerCase() === '' ? item : item.first_name.toLowerCase().includes(search)
            }).map((item) => {
              return (
              <tr key={item.id} className='border-2'>
                <td className='p-2 '>{item.first_name}</td>
                <td className='p-2 '>{item.last_name}</td>
                <td className='p-2 '>{item.email}</td>
                <td className='p-2 '>{item.phone}</td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
