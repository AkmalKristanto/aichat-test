import React from 'react';

import { Link } from 'react-router';

export default class MovieItemComponent extends React.Component {
    image() {
        if (!this.props.data.Poster || this.props.data.Poster != 'N/A') {
            return <img src={ this.props.data.Poster } className="img-fluid" alt="" />
        } else {
            return;
        }
    }

    render() {
        return (
                    <div className="card">
                        <div className="card-block">
                            <table class="table responsive">
                                <tbody>
                                    <tr>
                                        <th style={ styles.head }>
                                            <Link to={ `/detail/${this.props.data.imdbID}` }>{ this.props.data.Title }</Link>
                                        </th>
                                        <td style={ styles.row1 }>{ this.props.data.Year }</td>
                                        <td style={ styles.row2 }>{ this.props.data.Type }</td>
                                        <td>{ this.props.data.imdbID }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
