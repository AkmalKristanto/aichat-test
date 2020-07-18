import React from 'react';
import SearchFormComponent from './SearchFormComponent.jsx';

class HomeComponent extends React.Component {
    render() {
        return (
            <div className="container search-form-container">
                <div className="row search-form">
                    <SearchFormComponent colClass={'home'} />
                    <section className="container favourite-movie" id="#favourite-movie" style={{ paddingTop: '150px' }}>
                        <h5>My Favourite Movie</h5>
                        <table class="table responsive">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col" style={styles.head}>Tittle Movie</th>
                                    <th scope="col" style={ styles.row1 }>Year</th>
                                    <th scope="col" style={ styles.row2 }>Type</th>
                                    <th scope="col">imDB ID</th>
                                    <th scope="col">Favourite</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>-</th>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
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


export default HomeComponent;