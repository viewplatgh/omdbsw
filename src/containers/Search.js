import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchOMDB } from '../actions';

class Search extends Component {
  keywordRef;

  render() {
    let chunks = [];
    let i, j;
    for (i = 0, j = this.props.result.length; i < j; i += 3) {
      chunks.push(this.props.result.slice(i, i + 3));
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
                  />
                </p>
                <p className="control">
                  <button
                    className="button is-primary"
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
          <div className="tile is-ancestor">
            {chunks.map(tiles => {
              return (
                <div className="tile is-parent is-12">
                  {tiles.map(tile => {
                    return (
                      <div className="tile is-parent is-4">
                        <article className="tile is-child notification is-info">
                          <p className="title">Middle tile</p>
                          <p className="subtitle">With an image</p>
                          <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png" />
                          </figure>
                        </article>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
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
