import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchOMDB } from '../actions';

const chunkLength = 4;

class Search extends Component {
  keywordRef;
  searchRef;

  render() {
    let chunks = [];
    let i;
    for (i = 0; i < this.props.result.length; i += chunkLength) {
      chunks.push(this.props.result.slice(i, i + chunkLength));
    }
    return (
      <>
        <section className="section">
          <nav className="level">
            <div className="level-item">
              <div className="field has-addons">
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Type anything to search..."
                    ref={node => (this.keywordRef = node)}
                    size="50"
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        this.searchRef.click();
                      }
                    }}
                  />
                </p>
                <p className="control">
                  <button
                    className="button is-primary"
                    ref={node => (this.searchRef = node)}
                    onClick={e => {
                      if (!this.keywordRef.value.trim()) {
                        return;
                      }

                      this.props.onDispatchSearch(this.keywordRef.value.trim());
                    }}
                  >
                    Search
                  </button>
                </p>
              </div>
            </div>
          </nav>
        </section>
        <section className="section">
          {chunks.map((tiles, idx0) => {
            return (
              <div className="tile is-ancestor" key={`anc-${idx0}`}>
                {tiles.map((tile, idx1) => {
                  return (
                    <div
                      className={`tile is-parent is-${12 / chunkLength}`}
                      key={`par-${idx0}-${idx1}`}
                    >
                      <article className="tile is-child notification">
                        <p className="subtitle is-5">{tile.Title}</p>
                        <p className="subtitle is-6">
                          {tile.Type}, {tile.Year}, {tile.imdbID}
                        </p>
                        <figure className="image is-3by4">
                          <img src={tile.Poster} alt={tile.Title} />
                        </figure>
                      </article>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </section>
      </>
    );
  }
}

const mapSearchStateToProps = state => {
  return {
    keyword: state.keyword,
    result: state.result
  };
};

const mapSearchStateToDispatch = dispatch => {
  return {
    onDispatchSearch: keyword => dispatch(searchOMDB(keyword))
  };
};

const ConnectedSearch = connect(
  mapSearchStateToProps,
  mapSearchStateToDispatch
)(Search);

export default ConnectedSearch;
