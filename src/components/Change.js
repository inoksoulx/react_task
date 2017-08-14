import React from 'react';

export default class NewVal extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if (!localStorage.DB) {
      localStorage.setItem('DB', JSON.stringify(this.state.list));
    } else {
      let list = JSON.parse(localStorage.getItem('DB'));
      let filteredList = list.filter(item => {
        return item._id == this.props.match.params.itemId;
      });

      this.setState({
        list: list,
        fList: filteredList
      });
    }
  }
  componentWillUpdate() {
    let filteredList = this.state.list.filter(item => {
      return item._id == this.props.match.params.itemId;
    });

    this.setState({
      fList: filteredList
    });
  }
  change() {
    this.state.list.forEach(item => {
      if (item._id == this.props.match.params.itemId) {
        item.value = this.refs.val.value.toString();
      }
    });

    this.setState({
      list: this.state.list
    });

    localStorage.setItem('DB', JSON.stringify(this.state.list));
  }
  render() {
    return (
      <div>
        <span>
          {this.state.fList[0].value}
        </span>
        <input type='text' ref='val' />
        <button onClick={::this.change}>Change</button>
      </div>
    );
  }
}
