import React from 'react';
import './home.styles.scss';
import { connect } from 'react-redux';
import SideBar from '../../components/sidebar/siderbar.component';


const Home = ({user}) => {
    return(<SideBar/>);
}

const mapStateToProps = state => ({
    user: state.currentUser
})

export default connect(mapStateToProps, null)(Home);