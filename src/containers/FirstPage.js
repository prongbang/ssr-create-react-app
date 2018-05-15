import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from '../actions/user'
import { Link } from 'react-router'
import './FirstPage.css'
import API from '../api/Api';
import CallApi from './CallApi';

class FirstPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      cctvs: []
    };
  }

  componentWillMount() {
    // API.getAll()
    // // .then((data)=>data.json())
    // .then((res)=>{
    //   console.log(res);
    //   // this.setState({cctvs: res.data});
    //   this.props.setData(res.data);
    // }).catch((err)=>{
    //   console.log(err);
    // });
  }

  loading(cctvs) {
    return !!cctvs ? cctvs.length == 0 ? <div>Loading...</div> : null : null;
  }

  onResultSecondPage(data) {
    // receive from SecondPage
  }

  onGetDataSuccess(data) {
    this.setState({cctvs: data})
  }

  render() {
    let loading = this.loading(this.state.cctvs);
    return (
      <div className='bold'>
        <CallApi onGetDataSuccess={this.onGetDataSuccess.bind(this)}/>
        <p>
          First Page
        </p>
        <p>{'Email: ' + this.props.user.email}</p>
        <Link to={'/second'}>Second</Link>
        <h1>CCTVS</h1>

        {/* show loading  */}
        {loading}

        {/* render data from api  */}
        <div>
          {
            this.state.cctvs.map((v, i)=>{
              console.log(v);
              return <div>
                <h3>{v.label_en}</h3>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

// map state user เข้าไปใน props
// เพื่อให้เรียกใช้แบบนี้ได้ this.props.user.email
const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstPage)
