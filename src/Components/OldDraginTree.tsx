import { Component, useState } from 'react';
import SortableTree, { changeNodeAtPath } from 'react-sortable-tree';
// import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import FileExplorerTheme from 'react-sortable-tree-theme-minimal';

export default class Tree extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      treeData: [
        {
          name: 'Making this a sentence for fun!!!',
          expanded: false,
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
      ],
    };
  }

  render() {
    const externalNodeType = 'draginTodragin';
    const getNodeKey = ({ treeIndex }) => treeIndex;
    return (
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={(treeData) => this.setState({ treeData })}
          dndType={externalNodeType}
          theme={FileExplorerTheme}
          generateNodeProps={({ node, path }) => ({
            title: (
              <input
                style={{ fontSize: '1.1rem' }}
                value={node.name}
                onChange={(event) => {
                  const name = event.target.value;

                  this.setState((state) => ({
                    treeData: changeNodeAtPath({
                      treeData: state.treeData,
                      path,
                      getNodeKey,
                      newNode: { ...node, name },
                    }),
                  }));
                }}
              />
            ),
          })}
        />
      </div>
    );
  }
}
