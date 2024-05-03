import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";

import DialogContent from "./dialogContent";
import CloseIcon from '@mui/icons-material/Close';
import myTreeData from './tree.json'
import attributes from './attributes.json'
import catagory from './catagory.json'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



 export default function OrgChartTree () {
    const [data , setData] = useState();
    const[modal , setModal] = useState(false)
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  

    useEffect(()=>{
        modal ? setModal(true): setModal(false)
    },[modal])

    const testLink = (e, nodeDatum) => {
        setTimeout(() => {
          setModal(true);
          setData(nodeDatum);
        }, 0);
      };
      
    const handleClose =() =>{
        setModal(false)
    }
    
    const customNodeShaspe = ({  nodeDatum,toggleNode
     }) => {
        const handleNodeClick = (e) => {
            testLink(e, nodeDatum);
        };
        return (
          <g >
            <rect
              x="-80"
              y="-15"
              width="210"
              height="30"
              fill="#e0f7e4"
              stroke="#e0f7e4"
              strokeWidth="1px"
              rx="5"
              ry="5"
              onClick={handleNodeClick} 
            />
           
            <text
              x="20"
              y="5"
              textAnchor="middle"
              onClick={handleNodeClick} 
              style={{ fontSize: '12px', fill: 'black' }}
            >
              {nodeDatum.name}{nodeDatum?.children?.length > 0 && ('('+nodeDatum?.children?.length+")") }
            </text>
            <text
                x="90"
                y="5"
                onClick={toggleNode}
                textAnchor="middle"
                style={{ fontSize: '20px', fill: 'black' }}
              >
                 {nodeDatum.children && nodeDatum.children?.length > 0 && (
                <>{nodeDatum.__rd3t?.collapsed? '+' : '-'}</>
                             
            )}
                </text> 
            
          </g>
        );
      };
    
  return (



    <div className="App" style={{position:"relative"}}>
<div className="dialog_content">
        {modal&&  <DialogContent data = {data} cancelFun ={handleClose}/>}
       
      </div>

<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Items" {...a11yProps(0)} />
          <Tab label="Attributes" {...a11yProps(1)} />
          <Tab label="Category" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <div id="treeWrapper" style={{ width: "100%", height: "100vh" }}>
        <Tree
          data={myTreeData}
          pathFunc="step"
          separation={{ siblings: 2, nonSiblings: 2 }}
          orientation="horizantal"
          translate={{ x: 650, y: 50 }}   
          allowForeignObjects={true}
          collapsible={true}
          onNodeClick={testLink}
          renderCustomNodeElement={(rd3tProps) =>
            customNodeShaspe({ ...rd3tProps })
          }
          initialDepth={0.1}
        />
      </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div id="treeWrappera" style={{ width: "100%", height: "100vh" }}>
        <Tree
          data={attributes}
          pathFunc="step"
          separation={{ siblings: 2, nonSiblings: 2 }}
          orientation="horizantal"
          translate={{ x: window.innerWidth / 2, y: window.innerHeight / 8 }}
                    allowForeignObjects={true}
          collapsible={true}
          onNodeClick={testLink}
          renderCustomNodeElement={(rd3tProps) =>
            customNodeShaspe({ ...rd3tProps })
          }
          initialDepth={2}
        />
      </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <div id="treeWrappers" style={{ width: "100%", height: "100vh" }}>
        <Tree
          data={catagory}
          pathFunc="step"
          separation={{ siblings: 2, nonSiblings: 2 }}
          orientation="horizantal"
          translate={{ x:500, y: 100 }}
          allowForeignObjects={true}
          collapsible={true}
          onNodeClick={testLink}
          renderCustomNodeElement={(rd3tProps) =>
            customNodeShaspe({ ...rd3tProps })
          }
          initialDepth={0.01}
        />
      </div>
      </CustomTabPanel>
    </Box>




 
      
    
   

    </div>
  );
}







