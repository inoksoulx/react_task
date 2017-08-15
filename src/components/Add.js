import React from 'react';
import ReactDOM from 'react-dom';

export default class AddItem extends React.Component {
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
  add() {
    let list = this.state.list;
    let val = ReactDOM.findDOMNode(this.refs.value).value;
    let pattern = /^\S+$/;
    let newItem = {
      value: val,
      _id: Math.random()
    };

    val.length > 0 && pattern.test(val)
      ? list.push(newItem)
      : alert('Write correct item');

    this.setState({
      list: list
    });

    localStorage.setItem('DB', JSON.stringify(list));
  }
  render() {
    return (
      <div>
        <input type='text' ref='value' />
        <button onClick={::this.add}>Add</button>
      </div>
    );
  }
}
