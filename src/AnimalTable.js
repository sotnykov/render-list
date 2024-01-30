import React from 'react';

class AnimalTable extends React.Component {
  state = {
    borderColor: '#adaba7',
    borderWidth: '2px',
    listIndex: [...Array(this.props.animals.length).keys()],
    list: this.props.animals.map((item) => ({ ...item, active: false })),
  };

  componentDidMount() {
    const activeItems = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * this.state.listIndex.length);
      let randomItem = this.state.listIndex[randomIndex];

      const updatedList = [...this.state.list];
      updatedList[randomItem].active = true;
      this.state.listIndex.splice(randomIndex, 1);

      if (this.state.listIndex.length === Math.floor(this.state.list.length / 2)) {
        this.setState({ borderColor: '#a6ecd1', borderWidth: '10px' });
      }

      if (!this.state.listIndex.length) {
        clearInterval(activeItems);
        this.setState({ borderColor: '#f0bd7a', borderWidth: '20px' });
      }
      this.setState({ list: updatedList });
    }, 2000);
  }

  render() {
    return (
      <table style={{ borderWidth: this.state.borderWidth, borderStyle: 'solid', borderColor: this.state.borderColor }}>
        <tbody>
          {this.state.list.map((item, index) => (
            <tr
              className={item.active ? 'active' : ''}
              style={{ color: item.active ? 'green' : 'black', fontWeight: item.active ? 'bold' : 'normal' }}
              key={index}
            >
              <td>{item.type}</td>
              <td>{item.icon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default AnimalTable;