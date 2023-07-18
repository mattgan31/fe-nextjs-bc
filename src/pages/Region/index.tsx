import React, { useEffect, useState } from 'react'
import RegionApi from '@/api/region';

export default function Region() {
    const [region, setRegion] = useState<any[]>([]);
    useEffect(() => {
        RegionApi.GetRegion().then(
            data => {
                setRegion(data)
            }
        )
    })
  return (
    <div>
      <h2>List Region</h2>
      <table>
        <thead>
          <tr>
            <th>Region ID</th>
            <th>Region Name</th>
            <th>Region Photo</th>
          </tr>
        </thead>
        <tbody>
          {
            region && region.map((item: any) => {
              return (
                <>
                  <tr>
                    <td>{item.regionId}</td>
                    <td>{item.regionName}</td>
                    <td>{item.photo}</td>
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
