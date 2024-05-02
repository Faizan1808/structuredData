import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const DialogContent = (props) => {
    const [data, setData] = useState(null);
    console.log(props.data);

    useEffect(() => {
        setData(props.data);
    }, [props.data]);

    return (
        <div style={{ position: "relative" }} className='dev_parent'>
            <p className='close_ocp' onClick={props.cancelFun}><CloseIcon /></p>
            <p><b>{data?.name}</b></p>
            <div className='duv_sec'>
                {data && Object.entries(data.attributes).map(([key, value]) => (
                    <div key={key}>
                        <strong></strong> {value}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DialogContent;
