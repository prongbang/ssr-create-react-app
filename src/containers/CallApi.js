import React, {Component} from 'react';
import API from '../api/Api';

export default class CallApi extends Component {

    constructor(props) {
        super(props);
        this.call();
    }

    call() {
        API.getAll()
        // .then((data)=>data.json())
        .then((res)=>{
        console.log(res);
            // this.setState({cctvs: res.data});
            this.props.onGetDataSuccess(res.data);
        }).catch((err)=>{
            console.log(err);
            
        });
    }

    render() {
        return(
            null
        );
    }

}