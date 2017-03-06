import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

// export var TodoSearch = React.createClass({
//   render: function() {
//     var {dispatch, showCompleted, searchText} = this.props;
//
//     return (
//       <div className="container__header">
//         <div>
//           <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
//             var searchText = this.refs.searchText.value;
//             dispatch(actions.setSearchText(searchText));
//           }}/>
//         </div>
//         <div>
//           <label>
//             <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
//               dispatch(actions.toggleShowCompleted());
//             }}/>
//             Show completed todos
//           </label>
//         </div>
//       </div>
//     );
//   }
// });

export class TodoSearch {
  render () {
    var {dispatch, showCompleted, searchText} = this.props;

    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
            var searchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText));
          }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
              dispatch(actions.toggleShowCompleted());
            }}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}

//the return of the arrow function gets added to the componet as props
export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    };
  }
)(TodoSearch);
