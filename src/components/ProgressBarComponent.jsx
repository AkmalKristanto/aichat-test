import React from 'react';

import { connect } from "react-redux";

const mapStateToProps = state => {
    return { isLoading: state.isLoading };
};

class ProgressBar extends React.Component {
    render() {
        return (
            <div className="header">
                <div>
                    { this.props.isLoading && 
                        <div className="progress"><div className="indeterminate"></div></div>
                    }
                </div>
                <nav className="navbar fixed top navbar-expand-md bg-dark navbardark" >
                    <div style={{ marginLeft: '2%', height: '50px;' }} class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item" style={ styles.menuLi}> 
                                <a className="text-white nav-link" href="/">Search Movie</a>
                            </li>
                            <li className="nav-item" style={ styles.menuLi}> 
                                <a className="text-white nav-link" href="/">My Favourite Movie</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

const styles = {
        menuLi: {
            display: 'inline-block',
            padding: '10px'
        }
    }

const ProgressBarComponent = connect(mapStateToProps)(ProgressBar);
export default ProgressBarComponent;