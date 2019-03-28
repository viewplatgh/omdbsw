import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromWatchlist } from '../actions';

class Watchlist extends Component {
  keywordRef;
  searchRef;

  render() {
    return (
      <>
        <section className="section">
          <table
            class="table"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            <thead>
              <tr>
                <th>
                  <b />
                </th>
                <th>
                  <b>Poster</b>
                </th>
                <th>
                  <b>Title</b>
                </th>
                <th>
                  <b>Year</b>
                </th>
                <th>
                  <b>Type</b>
                </th>
                <th>
                  <b>IMDB ID</b>
                </th>
                <th>
                  <b />
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.watchlist.length > 0 ? (
                this.props.watchlist.map((item, idx) => {
                  return (
                    <tr key={`${item.imdbID}`}>
                      <td>{idx}</td>
                      <td>
                        <figure className="image is-48x48">
                          <img src={item.Poster} alt={item.Title} />
                        </figure>
                      </td>
                      <td>{item.Title}</td>
                      <td>{item.Year}</td>
                      <td>{item.Type}</td>
                      <td>{item.imdbID}</td>
                      <td>
                        <button
                          className="button is-danger"
                          onClick={e => {
                            this.props.onRemoveFromWatchlist(idx);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <>
                  <tr>
                    <td>
                      <p />
                    </td>
                    <td>
                      <p>Empty watchlist</p>
                    </td>
                    <td>
                      <p />
                    </td>
                    <td>
                      <p />
                    </td>
                    <td>
                      <p />
                    </td>
                    <td>
                      <p />
                    </td>
                    <td>
                      <p />
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </section>
      </>
    );
  }
}

const mapWatchlistStateToProps = state => {
  return {
    watchlist: state.watchlist
  };
};

const mapWatchlistStateToDispatch = dispatch => {
  return {
    onRemoveFromWatchlist: index => dispatch(removeFromWatchlist(index))
  };
};

const ConnectedWatchlist = connect(
  mapWatchlistStateToProps,
  mapWatchlistStateToDispatch
)(Watchlist);

export default ConnectedWatchlist;
