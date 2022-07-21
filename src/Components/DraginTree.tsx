import { Component, useState } from 'react';
import SortableTree, { changeNodeAtPath } from 'react-sortable-tree';
// import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import FileExplorerTheme from 'react-sortable-tree-theme-minimal';

export default function DraginTree() {
  const [treeData, setTreeData] = useState([
    {
      name: 'Making this a sentence for fun!!!',
      children: [
        { name: 'This is a smaller sentence.' },
        { name: 'Smaller still!' },
      ],
    },
    {
      name: 'Fish',
      expanded: false,
      children: [{ name: 'Kelp' }],
    },
  ]);

  const externalNodeType = 'draginTodragin';
  const getNodeKey = ({ treeIndex }) => treeIndex;
  return (
    <div style={{ height: 400 }}>
      <SortableTree
        treeData={treeData}
        onChange={(treeData2: any) => setTreeData([treeData2])}
        dndType={externalNodeType}
        theme={FileExplorerTheme}
        generateNodeProps={({ node, path }) => ({
          title: (
            <input
              style={{ fontSize: '1.1rem' }}
              value={node.name}
              onChange={(event) => {
                const name = event.target.value;

                setTreeData((treeData) => {
                  changeNodeAtPath({
                    treeData,
                    path,
                    getNodeKey,
                    newNode: { ...node, name }
                  })
                });
              }}
            />
          ),
        })}
      />
    </div>
  );
}
