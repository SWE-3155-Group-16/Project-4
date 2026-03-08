"use strict";

import React from "react";
import "./states.css";

/**
 * States - Displays an alphabetically sorted list of US state names
 * that contain a user-supplied substring (case-insensitive).
 * All states are shown when the substring is empty.
 * Uses model data from window.models.states.
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      substring: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ substring: event.target.value });
  }

  render() {
    const { substring } = this.state;
    const allStates = window.models.states;

    const filtered = allStates
      .filter((s) => s.toLowerCase().includes(substring.toLowerCase()))
      .sort();

    let listContent;
    if (filtered.length === 0) {
      listContent = (
        <p className="states-no-results">
          No states found matching &ldquo;{substring}&rdquo;.
        </p>
      );
    } else {
      listContent = (
        <ul className="states-list">
          {filtered.map((state) => (
            <li key={state} className="states-list-item">
              {state}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div className="states-container">
        <h2 className="states-heading">U.S. State Finder</h2>

        <div className="states-search-section">
          <label htmlFor="states-input" className="states-label">
            Filter by substring:
          </label>
          <input
            id="states-input"
            className="states-input"
            type="text"
            value={substring}
            onChange={this.handleChange}
            placeholder="e.g. al"
          />
        </div>

        <p className="states-filter-display">
          {substring ? (
            <span>
              Showing states containing: <strong>&ldquo;{substring}&rdquo;</strong>
            </span>
          ) : (
            <span>Showing all states</span>
          )}
        </p>

        {listContent}
      </div>
    );
  }
}

export default States;
