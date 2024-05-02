import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";

import DialogContent from "./dialogContent";
import CloseIcon from '@mui/icons-material/Close';
import myTreeData from './tree.json'



 export default function OrgChartTree () {
    const [data , setData] = useState();
    const[modal , setModal] = useState(false)

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
              x="0"
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
      <h1>Tree Chart POC</h1>
      <div className="dialog_content">
        {modal&&  <DialogContent data = {data} cancelFun ={handleClose}/>}
       
      </div>
      <div id="treeWrapper" style={{ width: "100%", height: "100vh" }}>
        <Tree
          data={myTreeData}
          pathFunc="step"
          separation={{ siblings: 2, nonSiblings: 2 }}
          orientation="horizantal"
          translate={{ x:600, y: 200 }}
          allowForeignObjects={true}
          collapsible={true}
          onNodeClick={testLink}
          renderCustomNodeElement={(rd3tProps) =>
            customNodeShaspe({ ...rd3tProps })
          }
          initialDepth={0.01}
        />
      </div>
    </div>
  );
}


