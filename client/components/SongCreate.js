import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import query from "../queries/fetchSongs";

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songTitle: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props
      .mutate({
        variables: {
          title: this.state.songTitle
        },
        refetchQueries: [
          {
            query
          }
        ]
      })
      .then(() => {
        hashHistory.push("/");
      });
  }
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Add Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
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

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
