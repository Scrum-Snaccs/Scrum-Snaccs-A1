import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      selection: "title",
    };
  }

  onChangeText = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  onSelected = (e) => {
    this.setState({
      selection: e.target.value,
    });
  };

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          aria-label="Text input with segmented dropdown button"
          value={this.state.searchText}
          onChange={this.onChangeText}
          placeholder="Type an article..."
        />

  <Button variant="primary" size="lg" block>
    Search
  </Button>
        


        

        <div className="input-group-append">
          <select
            className="btn btn-outline-secondary"
            required
            value={this.state.selection}
            onChange={this.onSelected}>
            <option key={"title"} value={"title"}>
              Name of field
            </option>
            <option key={"author"} value={"author"}>
              Method 
            </option>
            <option key={"publisher"} value={"publisher"}>
              Participants
            </option>
            <option key={"method"} value={"method"}>
              Title
            </option>
            <option key={"participants"} value={"participants"}>
              Author
            </option>
            <option key={"journal"} value={"journal"}>
              Source
            </option>
          </select>
          {/* <Link
            className="btn btn-outline-secondary"
            type="button"
            to={{
              pathname: "/article/role=searcher",
              state: {
                searchText: this.state.searchText,
                searchField: this.state.selection,
              },
            }}>
            Search Articles
          </Link> */}
        </div>
        <div className="input-group-append">
          <select
            className="btn btn-outline-secondary"
            required
            value={this.state.selection}
            onChange={this.onSelected}>
            <option key={"title"} value={"title"}>
              Operator
            </option>
            <option key={"author"} value={"author"}>
              contains
            </option>
            <option key={"publisher"} value={"publisher"}>
              does not contain
            </option>
            <option key={"method"} value={"method"}>
              begins with
            </option>
            <option key={"participants"} value={"participants"}>
              ends with 
            </option>
            <option key={"journal"} value={"journal"}>
              is equal to
            </option>
          </select>
          {/* <Link
            className="btn btn-outline-secondary"
            type="button"
            to={{
              pathname: "/article/role=searcher",
              state: {
                searchText: this.state.searchText,
                searchField: this.state.selection,
              },
            }}>
            Search Articles
          </Link> */}
        </div>
        <div className="input-group-append">
          <select
            className="btn btn-outline-secondary"
            required
            value={this.state.selection}
            onChange={this.onSelected}>
            <option key={"title"} value={"title"}>
              Value
            </option>
          
          </select>
          {/* <Link
            className="btn btn-outline-secondary"
            type="button"
            to={{
              pathname: "/article/role=searcher",
              state: {
                searchText: this.state.searchText,
                searchField: this.state.selection,
              },
            }}>
            Search Articles
          </Link> */}
        </div>
      </div>
    );
  }
}
