import React from "react";
import axios from "axios";

class SearchBox  extends React.Component {
  constructor() {
    super()
    this.state = {
      searchInput: ""
    }
  }

  render() {
    return (
      <div className="searchbox_input">
      <form onSubmit={this.props.searchCoordinates}>
      <input value={this.props.searchInput} name="searchInput" onChange={this.props.handleSearchInput} />
      <button type="submit" >Search</button>
      </form>
      </div>
    )
  }
}

export default SearchBox
