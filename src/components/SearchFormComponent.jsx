import React from 'react';

import { withRouter } from 'react-router' ;
import { connect } from "react-redux";
import { getMovieList } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        getMovieList: payload => dispatch(getMovieList(payload))
    };
}

class SearchForm extends React.Component {
    search(e) {
        e.preventDefault();
        if (this.refs.q.value.length != 0 && this.props.location.query.q != this.refs.q.value) {
            this.props.router.push(`/movies?q=${this.refs.q.value}`);
            if (this.props.caller == 'list-page') this.props.getMovieList({q: this.refs.q.value, page: 1});
        }
    }

    componentDidMount() {
        this.refs.q.value = this.props.location.query.q || '';
    }

    render() {
        return (
            <div className={`col-md-12 ${this.props.colClass}`}>
                <h2 className="page-title">Search Movie</h2>
                <div className="input-search">  
                    <i className="fa fa-search icon" aria-hidden="true"></i>
                    <input type="text" placeholder="Enter Movie Title..." ref="q" style={{ borderBottom: '0px', paddingTop: '5px' }} />
                </div>
                <button className="btn btn-primary btn-sm submit1" type="submit" onClick={this.search.bind(this)} >Submit</button>
            </div>
        );
    }
}


const SearchFormComponent = connect(null, mapDispatchToProps)(SearchForm);
export default withRouter(SearchFormComponent);