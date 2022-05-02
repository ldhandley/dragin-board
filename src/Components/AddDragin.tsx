import Dragin from './Dragin';
import React from 'react';

interface draginInterface {
  draginProps: {
    draginList: { rendered: any };
    setDraginList: { rendered: any };
  };
}

export default class AddDragin extends React.Component<draginInterface> {
  render() {
    const {
      draginProps: { draginList, setDraginList },
    } = this.props;
    if (draginList != undefined) {
      {
        const createDragin = () => {
          setDraginList.rendered(draginList.rendered.concat(<Dragin />));
        };

        return (
          <div className="buttonMenu">
            <button
              type="button"
              className="btn btn-info"
              onClick={createDragin}
            >
              AddDragin
            </button>
          </div>
        );
      }
    }
  }
}
