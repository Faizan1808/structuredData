import React, { useState } from 'react';
import comparedata from './compare.json';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';

const Compare = () => {
  const [expanded, setExpanded] = useState({});
  const [data, setData] = useState(comparedata);
  


  const onHideToggle = (indx) => {
    setExpanded(prevExpanded => ({
      ...prevExpanded,
      [indx]: !prevExpanded[indx]
    }));
  };
  


  const getData = (index, name, dataindex) => {
    const values = [];
    for (let i = 0; i < data.length; i++) {
        values.push(data[i].data[dataindex][name]);
    }
     const isEqual = values.every((val, i, arr) => val === arr[0]);
    return isEqual
}

 

  return (
    <div className='box_parent'>
      {data.map((item, index) => (
        <div key={index} className={`box_3 ${expanded[index] ? 'expanded' : ''}`}>
          <table>
            <thead>
              <tr className='no_pad'>
                <th colSpan={12}>
                  <div className='bx_copmare_title'>
                    <p>{item?.title}</p>
                    <p onClick={() => onHideToggle(index)}><AspectRatioIcon/></p>
                  </div>
                </th>
              </tr>
              {!expanded[index] && (
                <tr>
                  <th>Attribute Name</th>
                  <th>Data Type</th>
                  <th>Data Type Length</th>
                  <th>UOM</th>
                  <th>UOM Name</th>
                  <th>UOM Type</th>
                </tr>
              )}
            </thead>
            {!expanded[index] && (
              <tbody>
                {item?.data.map((dataItem, dataIndex) => (
                  <tr key={index}>
                        <td style={{ backgroundColor: getData(index, 'attribute_name', dataIndex) ? "" : "yellow" }}>
                      {dataItem.attribute_name} 
                  </td>
                  <td style={{ backgroundColor: getData(index, 'data_type', dataIndex) ? "" : "yellow" }}>
                      {dataItem.data_type}
                  </td>
                  <td style={{ backgroundColor: getData(index, 'data_type_length', dataIndex) ? "" : "yellow" }}>
                      {dataItem.data_type_length}
                  </td>
                  <td style={{ backgroundColor: getData(index, 'uom', dataIndex) ? "" : "yellow" }}>
                      {dataItem?.uom}
                  </td>
                  <td style={{ backgroundColor: getData(index, 'uom_name', dataIndex) ? "" : "yellow" }}>
                      {dataItem.uom_name}
                  </td>
                  <td style={{ backgroundColor: getData(index, 'uom_type', dataIndex) ? "" : "yellow" }}>
                      {dataItem.uom_type}
                  </td>
                 
                </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      ))}
    </div>
  );
};

export default Compare;
