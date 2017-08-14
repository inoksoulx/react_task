import React from 'react';
import { Link } from 'react-router-dom';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        {this.props.item}
        <button onClick={() => this.props.remove(this.props.keyIndex)}>
          Remove
        </button>
        <button>
          <Link to={`/change/${this.props.keyIndex}`}>Change</Link>
        </button>
      </li>
    );
  }
}

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentWillMount() {
    if (!localStorage.DB) {
      localStorage.setItem('DB', JSON.stringify(this.state.list));
    } else {
      let list = JSON.parse(localStorage.getItem('DB'));

      this.setState({
        list: list
      });
    }
  }
  remove(id) {
    let list = this.state.list;

    let filteredList = list.filter(item => {
      return item._id != id;
    });

    this.setState({
      list: filteredList
    });

    localStorage.setItem('DB', JSON.stringify(filteredList));
  }
  render() {
    return (
      <div className='app'>
        <ul>
          {this.state.list.map(
            function(item, index) {
              return (
                <ListItem
                  item={item.value}
                  key={`item-${index}`}
                  keyIndex={item._id}
                  remove={::this.remove}
                />
              );
            }.bind(this)
          )}
        </ul>
      </div>
    );
  }
}
