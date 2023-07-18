import React, { useEffect, useState } from 'react'
import { GetRegionReq, DeleteRegionReq } from '@/redux-saga/action/regionAction';
import { useDispatch, useSelector } from 'react-redux';
import FormCreate from './FormCreate';
import FormUpdate from './FormUpdate';

export default function RegionSaga() {
    const dispatch = useDispatch()
  const { regions } = useSelector((state: any) => state.regionState)
  const [display, setDisplay] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [update, setUpdate] = useState({
    open: false,
    region: {}
  })
    useEffect(() => {
        dispatch(GetRegionReq());
    }, [refresh])

  const onDelete = async (id: any) => {
    window.confirm("Delete ?");
    dispatch(DeleteRegionReq(id))
    window.alert("Data deleted successfully");
    setRefresh(true);
  }

  return (
    <div>
      {display ? (
        <FormCreate setDisplay={setDisplay} setRefresh={setRefresh} />
      ) : update.open === true ? (
          <FormUpdate setRefresh={setRefresh} update={update} setUpdate={setUpdate} />
        ) : (
          <>
            <h2>List Region</h2>
            <button className='rounded-md bg-green-600 text-white w-24 mx-2' onClick={() => setDisplay(true)}>Add Region</button>
      <table>
        <thead>
          <tr>
            <th>Region ID</th>
            <th>Region Name</th>
            <th>Region Photo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            regions && regions.map((item: any) =>
            (
                <React.Fragment key={item.regionId}>
                  <tr>
                    <td>{item.regionId}</td>
                    <td>{item.regionName}</td>
                  <td>{item.photo}</td>
                  <td>
                    <button className='rounded-md bg-red-600 text-white w-20 mx-1' onClick={()=> onDelete(item.regionId)}>Delete</button>
                    <button className='rounded-md bg-blue-600 text-white w-14 mx-1' onClick={()=> setUpdate({open: true, region: item})}>Edit</button>
                  </td>
                  </tr>
                </React.Fragment>
              )
            )
          }
        </tbody>
      </table>
        </>
      )}
    </div>
  )
}
