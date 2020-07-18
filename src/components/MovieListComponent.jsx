import React from 'react';

import MovieItemComponent from './MovieItemComponent.jsx';
import PaginationComponent from './PaginationComponent.jsx';
import SearchFormComponent from './SearchFormComponent.jsx';

import { connect } from "react-redux";
import { getMovieList } from '../actions';

const mapStateToProps = state => {
    return { page: state.page, items: state.items };
};

const mapDispatchToProps = dispatch => {
    return {
        getMovieList: payload => dispatch(getMovieList(payload))
    };
}

class MovieList extends React.Component {
    componentDidMount() {
        this.props.getMovieList({q: this.props.location.query.q, page: this.props.page});
    }

    render() {
        let movieList;
        if (this.props.items.Search) {
            movieList = this.props.items.Search.map((item, i) => <MovieItemComponent key={i} data={item} /> );
        } else {
            movieList = <div className="alert alert-info" role="alert">Not Found!</div> 
        }

        return (
            <div>
                <div className="row search-form movie-list">
                    <SearchFormComponent colClass={'home'} caller={'list-page'} />
                </div>
                <table class="table responsive">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col" style={styles.head}>Tittle Movie</th>
                            <th scope="col" style={ styles.row1 }>Year</th>
                            <th scope="col" style={ styles.row2 }>Type</th>
                            <th scope="col">imDB ID</th>
                        </tr>
                    </thead>
                </table>
                
                { movieList }

                <PaginationComponent q={this.props.location.query.q} page={this.props.page} />
            </div>
        );
    }
}

const styles = {
        head: {
            width: '40%'
        },
        row1: {
            width: '17%'
        },
        row2: {
            width: '19%'
        }
    }

const MovieListComponent = connect(mapStateToProps, mapDispatchToProps)(MovieList);
export default MovieListComponent;