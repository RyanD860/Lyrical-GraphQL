import React, { Component } from "react";

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songTitle: ""
    };
  }
  render() {
    return (
      <div>
        <h3>Add Song</h3>
        <form>
          <label>Song Title:</label>
          <input
            type="text"
            onChange={e => this.setState({ songTitle: e.target.value })}
            value={this.state.songTitle}
          />
        </form>
      </div>
    );
  }
}

export default SongCreate;
