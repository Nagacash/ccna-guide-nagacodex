import React, { useRef, useEffect, useState } from 'react';
import { Network, DataSet } from 'vis-network/standalone';

interface NetworkSimulatorProps {
  onClose: () => void;
}

const NetworkSimulator: React.FC<NetworkSimulatorProps> = ({ onClose }) => {
  const networkRef = useRef<HTMLDivElement>(null);
  const [network, setNetwork] = useState<Network | null>(null);
  const [nodes, setNodes] = useState(new DataSet<any>([]));
  const [edges, setEdges] = useState(new DataSet<any>([]));
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  useEffect(() => {
    if (networkRef.current) {
      const options = {
        width: '100%',
        height: '100%',
        physics: {
          enabled: false,
        },
        interaction: {
          dragNodes: true,
          zoomView: true,
          dragView: true,
        },
        manipulation: {
          enabled: true,
          addNode: false, // Disable default addNode behavior
          addEdge: (edgeData: any, callback: (edgeData: any) => void) => {
            if (edgeData.from === edgeData.to) {
              alert("Cannot connect a node to itself.");
              callback(null);
              return;
            }
            callback(edgeData);
          },
          deleteNode: true,
          deleteEdge: true,
        },
        nodes: {
          shape: 'box',
          size: 20,
          color: {
            background: '#4299E1', // Blue background for nodes
            border: '#2B6CB0', // Darker blue border
            highlight: {
              background: '#63B3ED',
              border: '#3182CE',
            },
          },
          font: {
            color: '#FFFFFF', // White font color
            size: 14,
          },
        },
        edges: {
          color: '#A0AEC0', // Light gray for edges
          width: 2,
        },
      };

      const net = new Network(networkRef.current, { nodes, edges }, options);
      setNetwork(net);

      net.on("selectNode", (params) => {
        if (params.nodes.length > 0) {
          setSelectedNode(params.nodes[0]);
        } else {
          setSelectedNode(null);
        }
      });

      // Cleanup function to destroy the network instance when component unmounts
      return () => {
        if (net) {
          net.destroy();
        }
      };
    }
  }, []); // Empty dependency array: runs only once on mount

  // Effect to update network data when nodes or edges change
  useEffect(() => {
    if (network) {
      network.setData({ nodes, edges });
      network.fit(); // Fit the view to the new data
      network.redraw(); // Explicitly redraw the network
    }
  }, [network, nodes, edges]);

  const addNode = (type: string) => {
    const id = (nodes.length + 1).toString();
    const newNodes = new DataSet(nodes.get()); // Create a new DataSet instance
    newNodes.add({ id, label: type, shape: 'box', color: '#4299E1', font: { color: '#FFFFFF' } }); // Use explicit colors
    setNodes(newNodes);
  };

  const addEdge = () => {
    const from = prompt("Enter 'from' node ID:");
    const to = prompt("Enter 'to' node ID:");
    if (from && to && nodes.get(from) && nodes.get(to)) {
      const newEdges = new DataSet(edges.get()); // Create a new DataSet instance
      newEdges.add({ from, to, color: { color: '#84888C' } }); // Add default color
      setEdges(newEdges);
    } else {
      alert("Invalid node IDs.");
    }
  };

  const simulatePing = () => {
    if (!network || !selectedNode) {
      alert("Please select a node to simulate ping from.");
      return;
    }
    const targetNodeId = prompt(`Simulate ping from ${selectedNode} to which node ID?`);
    if (targetNodeId && nodes.get(targetNodeId)) {
      // This is a visual simulation, not actual network traffic
      // We'll just highlight the path for a brief moment
      const pathEdges = edges.get({
        filter: (edge: any) => (edge.from === selectedNode && edge.to === targetNodeId) || (edge.from === targetNodeId && edge.to === selectedNode)
      });

      if (pathEdges.length > 0) {
        pathEdges.forEach((edge: any) => {
          edges.update({ id: edge.id, color: { color: 'lime', highlight: 'lime' }, width: 3 });
        });
        setTimeout(() => {
          pathEdges.forEach((edge: any) => {
            edges.update({ id: edge.id, color: { color: '#84888C', highlight: '#7C7F83' }, width: 1 });
          });
        }, 1000);
      } else {
        alert("No direct path found between selected nodes for visual ping simulation.");
      }
    } else {
      alert("Invalid target node ID.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-dark-card rounded-lg shadow-xl w-full max-w-5xl h-5/6 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-dark-border">
          <h2 className="text-lg font-bold text-dark-foreground">Network Simulator</h2>
          <button
            onClick={onClose}
            className="text-dark-muted-foreground hover:text-dark-foreground text-2xl leading-none"
          >
            &times;
          </button>
        </div>
        <div className="flex-grow p-4 flex">
          <div className="w-1/4 pr-4 border-r border-dark-border">
            <h3 className="text-md font-semibold text-dark-foreground mb-3">Tools</h3>
            <button onClick={() => addNode('Router')} className="mb-2 w-full bg-dark-secondary text-dark-secondary-foreground hover:bg-dark-secondary/80 py-2 px-3 rounded-md text-sm">Add Router</button>
            <button onClick={() => addNode('Switch')} className="mb-2 w-full bg-dark-secondary text-dark-secondary-foreground hover:bg-dark-secondary/80 py-2 px-3 rounded-md text-sm">Add Switch</button>
            <button onClick={() => addNode('PC')} className="mb-4 w-full bg-dark-secondary text-dark-secondary-foreground hover:bg-dark-secondary/80 py-2 px-3 rounded-md text-sm">Add PC</button>
            <button onClick={addEdge} className="mb-4 w-full bg-dark-primary text-dark-primary-foreground hover:bg-dark-primary/80 py-2 px-3 rounded-md text-sm">Add Connection</button>
            <button onClick={simulatePing} className="w-full bg-green-600 text-white hover:bg-green-700 py-2 px-3 rounded-md text-sm">Simulate Ping</button>
          </div>
          <div className="w-3/4 pl-4">
            <div className="mb-4 p-3 bg-dark-background rounded-md text-dark-muted-foreground text-sm">
              <h4 className="font-bold text-dark-foreground mb-2">How to Use:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Click 'Add Router', 'Switch', or 'PC' to place devices.</li>
                <li>Drag devices to arrange them.</li>
                <li>Click 'Add Connection', then enter device IDs (e.g., '1', '2') to connect them.</li>
                <li>Select a device (click it), then click 'Simulate Ping' and enter a target device ID to see a visual path.</li>
                <li>Use the manipulation tools (top-left of canvas) to delete nodes/edges.</li>
              </ul>
            </div>
            <div ref={networkRef} className="w-full h-full border border-dark-border rounded-md bg-gray-800" style={{ height: '400px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkSimulator;
