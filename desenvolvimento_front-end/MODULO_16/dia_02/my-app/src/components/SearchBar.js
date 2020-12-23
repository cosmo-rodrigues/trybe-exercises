import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <div className="col-sm-12 align-self-center fixed-top">
        <div class="input-group input-group-lg">
          <input
            type="text"
            class="form-control"                 aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
          />
          <div class="input-group-prepend">
            <button type="submit" class="bg-primary text-light input-group-text rounded border border-primary" id="inputGroup-sizing-lg">Pesquisar</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar;
