import React, { Component } from 'react';

export default class Hello extends Component {
    constructor(props) {
        super(props)
        //
        this.fallWidth = props.fallwidth ? props.fallwidth : 300;
        //数据源
        this.basic = [];
        for (let a = 0; a < 20; a++)
            this.basic.push(this.RndNum());
        this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        //滚动事件
        window.onscroll = () => {
            console.log(this.scrollHeight = document.documentElement.scrollTop || document.body.scrollTop)
        }
        console.log(Math.round(document.documentElement.clientWidth / this.fallWidth))
    }
    //=============判断当前页面列数===========

    getColumn = () => {
        let result = [];
        let mark = Math.round(document.documentElement.clientWidth / this.fallWidth)
        for (let a = 0; a < mark; a++) {
            result.push((<div key={a} style={{ width: document.documentElement.clientWidth, display: "flex", flexWrap: "nowrap", flexDirection: "column" }}>
                {this.getMoudel(this.basic)}
            </div>))
        }
        return result;
    }
    //=============根据数据渲染model
    getMoudel = (basic) => {
        return [...new Set(basic)].map(a => (<div key={a} style={{ margin: 5, height: a, width: '300px', backgroundColor: "black" }}></div>))

    }
    //==============随机数================
    RndNum() {
        var rnd = "";
        for (var i = 0; i < 3; i++)
            rnd += Math.floor(Math.random() * 10);
        return rnd / 2;
    }

    render() {
        return (
            <div style={{ display: "flex", flexWrap: "nowrap", flexDirection: "row" }}>
                {this.getColumn()}

            </div>
        )
    }
}