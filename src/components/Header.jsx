import React from "react";
import ReactDOM from "react-dom";
import Tree from "react-d3-tree";

// import "./styles.css";

const myTreeData = [
  {
    name: "Gaurang Torvekar",
    attributes: {
      keyA: "val A",
      keyB: "val B",
      keyC: "val C"
    },
    children: [
      {
        name: "Avadhoot",
        attributes: {
          keyA: "val A",
          keyB: "val B",
          keyC: "val C"
        },
        children: [
          {
            name: "Richard"
          },
          {
            name: "Constantine",
            children: [
              {
                name: "Mia"
              }
            ]
          },
          {
            name: "Daniel"
          }
        ]
      },
      {
        name: "Mia"
      },
      {
        name: "Varun",
        attributes: {
          keyA: "val A",
          keyB: "val B",
          keyC: "val C"
        },
        children: [
          {
            name: "Ivo",
            attributes: {
              keyA: "val A",
              keyB: "val B",
              keyC: "val C"
            },
            children: [
              {
                name: "Level 2: A",
                attributes: {
                  keyA: "val A",
                  keyB: "val B",
                  keyC: "val C"
                },
                children: [
                  {
                    name: "Level 2: A",
                    attributes: {
                      keyA: "val A",
                      keyB: "val B",
                      keyC: "val C"
                    }
                  },
                  {
                    name: "Level 2: B"
                  }
                ]
              },
              {
                name: "Level 2: B"
              }
            ]
          },
          {
            name: "Vijay"
          }
        ]
      },
      {
        name: "Mohit",
        children: [
          {
            name: "Rohit",
            attributes: {
              keyA: "val A",
              keyB: "val B",
              keyC: "val C"
            },
            children: [
              {
                name: "Level 2: A",
                attributes: {
                  keyA: "val A",
                  keyB: "val B",
                  keyC: "val C"
                },
                children: [
                  {
                    name: "Level 2: A",
                    attributes: {
                      keyA: "val A",
                      keyB: "val B",
                      keyC: "val C"
                    }
                  },
                  {
                    name: "Level 2: B"
                  }
                ]
              }
            ]
          },
          {
            name: "Pranav"
          }
        ]
      }
    ]
  }
];





const nodeSvgShape = {
    shape: 'diamond',
    shapeProps: {
      r: 10,
      fill: 'green',
    },
  };
  
  


class NodeLabel extends React.PureComponent {
  render() {
    const { className, nodeData } = this.props;
    return (
      <div
        className={className}
        style={{
          background: "#ffffff",
          height: "70px",
          borderTop: "2px solid #2F80ED",
          textAlign: "center",
          // position: "fixed",
          zIndex: "1000",
          // left: "-10px",
          boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
          padding: "5px 0",
          borderRadius: "5px"
          
        }}
      >
        {nodeData.name}
      </div>
    );
  }
}

const customNodeShaspe = ({ nodeDatum, toggleNode }) => {
    console.log(nodeDatum)
    return (
      <g onClick={toggleNode}>
        
        <rect
          x="-80"
          y="-15"
          width="160"
          height="30"
          fill="#efefef"
          stroke="#ccc"
          strokeWidth="1px"
          rx="5"
          ry="5"
        />
       
        <text
          x="0"
          y="5"
          textAnchor="middle"
          style={{ fontSize: '14px', fill: 'black' }}
        >
          {nodeDatum.name}  {nodeDatum.children && nodeDatum.children.length > 0 && (
            <>{nodeDatum.__rd3t.collapsed? '+' : '-'}</>
           
              
          
        )}
        </text>
        
      </g>
    );
  };

const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
    <>
   { console.log(nodeDatum)}
    <g>
      <rect width="20" height="20" x="-10" onClick={toggleNode} ></rect>
    {nodeDatum.children?.length &&   <text fill="black" strokeWidth="1" x="-5" y={15} onClick={toggleNode}>{nodeDatum.__rd3t.collapsed ? '+' : '-'}</text>}
      <text fill="black" strokeWidth="1" x="20" y={15}>
        {nodeDatum.name}
      </text>
      {/* {nodeDatum.attributes?.department && (
        <text fill="black" x="20" dy="20" strokeWidth="1">
          Department: {nodeDatum.attributes?.department}
        </text>
      )} */}
    </g>
    </>
  );
  


const testLink =(event)=>{
    console.log(event)
}
 export default function OrgChartTree () {
  return (
    <div className="App">
      <h1>ORG Chart POC</h1>
      <div id="treeWrapper" style={{ width: "100%", height: "100vh" }}>
        <Tree
          data={myTreeData}
          nodeSvgShape={nodeSvgShape}
          pathFunc="step"
          separation={{ siblings: 2, nonSiblings: 2 }}
          orientation="horizantal"
          translate={{ x:500, y: 200 }}
          allowForeignObjects={true}
          collapsible={true}
          onNodeClick = {testLink}
          renderCustomNodeElement={customNodeShaspe}

        //   nodeLabelComponent={{
        //     render: <NodeLabel className="myLabelComponentInSvg" />,
        //     foreignObjectWrapper: {
        //       width: 220,
        //       height: 200,
        //       y: -50,
        //       x: -100
        //     }
        //   }}
        // RenderCustomNodeElementFn={customNodeShape} 

          initialDepth={0.01}
        />
      </div>
    </div>
  );
}


