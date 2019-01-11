import React, { Component } from 'react';
import Falls from '../components/Falls';
//props入参{fallwidth：瀑布每一列宽}
export default class Hello extends Component {
    constructor(props) {
        super(props)
        //数据源
        this.basic = [];
        for (let a = 0; a < 20; a++)
            this.basic.push(this.RndNum());
    }
    //==============随机数================
    RndNum() {
        var rnd = "";
        for (var i = 0; i < 3; i++)
            rnd += Math.floor(Math.random() * 10);
        return rnd / 2;
    }
    onChange(){
        console.log(this.basic)
        for (let a = 0; a < 20; a++)
        this.basic.push(this.RndNum());
        console.log(this.basic)
        this.setState({
            mark:this.RndNum()
        })
    }

    render() {
        let param={fallwidth:300,basic:this.basic,onChange:this.onChange.bind(this)}
        return (
            <Falls  {...param}></Falls>
        )
    }
}