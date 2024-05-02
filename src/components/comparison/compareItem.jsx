import { useState } from 'react';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import comparedata  from './compare.json'


const CompareItem = ({item , expand , id , onToggle}) =>{
    const [data, setData] = useState(comparedata);

    const dataHide =() =>{
        onToggle(id)
    }
    return(
        <table >
            <thead >
                <tr className='no_pad'>
                    <th colSpan={12}>
                        <div className='bx_copmare_title'>
                            <p> {item?.title}</p>
                            <p onClick={dataHide}><AspectRatioIcon/></p>
                        </div>
                        </th>
                </tr>
                {!expand &&
                
                
                <tr>
                <th>Attribute Name</th>
                <th>Data Type</th>
                <th>Data Type Length</th>
                <th>UOM</th>
                <th>UOM Name</th>
                <th>UOM Type</th>

                
            </tr>
                }
               

                    
              
            </thead>
            {!expand &&
            
            <tbody>
            {item?.data.map((item, index) => (
                  <tr key={index}>
                    <td >
                        {item.Attribute_Name} 
                    </td>
                    <td>
                        {item.Data_Type}
                    </td>
                    <td>
                        {item.Data_Type_Length}
                    </td>
                    <td>
                        {item.UOM}
                    </td>
                    <td>
                        {item.UOM_Name}
                    </td>
                    <td>
                        {item.UOM_Type}
                    </td>
                    {/* {Object.values(item).map((value, index) => (
                      <td key={index} >{value}</td>
                    ))} */}
                  </tr>
                ))}
            </tbody>
            }
            
        </table>
    )

}
export default CompareItem