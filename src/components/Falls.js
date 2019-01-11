import React, { Component } from 'react';
//props入参{fallwidth：瀑布每一列宽，basic:数据源}
export default class Falls extends Component {
    constructor(props) {
        super(props)
        //item宽度
        this.fallWidth = props.fallwidth ? props.fallwidth : 300;
        //数据源
        this.basic = props.basic ? props.basic : [];
        //展示几列
        this.mark = parseInt(document.documentElement.clientWidth / this.fallWidth)
        //数据列
        this.sortItem = []
        //每组数据列高度
        this.itemLength = []
        for (let a = 0; a < this.mark; a++) {
            this.sortItem.push([])
            this.itemLength[a] = 0
        }
        //初始排序
        this.listItem()

    }
    //=============排序数据列,将basic中的数据源散布到sortItem的各个子数组中
    listItem = (basic = this.basic) => {
        //几层，层数大于1就开始循环,将basic中的数据源散布到sortItem的各个子数组中,并将此列高度放入itemLength中
        let loopMark = parseInt(basic.length / this.mark)
        if (loopMark > 0) {
            for (let a = 0; a < this.mark; a++) {
                let g = basic.shift();
                this.sortItem[a].push(g)
                this.itemLength[a] = g
            }

        } else {
            for (let a = 0; a < this.basic.length; a++) {
                let g = basic.shift();
                this.sortItem[a].push(g)
                this.itemLength[a] = g
            }
        }
        this.itemUpdate();

    }
    //=============把获取的数据放入列高最小的数组中
    itemUpdate = () => {
        let min = this.itemLength[0];
        let minIndex = 0;
        for (let a = 0; a < this.mark; a++) {
            if (min > this.itemLength[a]) {
                minIndex = a;
            }
        }
        let temp = this.basic.shift()
        this.sortItem[minIndex].push(temp)
        this.itemLength[minIndex] = this.itemLength[minIndex] + temp;
        if (this.basic.length && this.basic.length > 0) {
            this.itemUpdate()
        }
    }

    //=============渲染当前页面列数===========
    getColumn = () => {
        let result = [];
        for (let a = 0; a < this.mark; a++) {
            result.push((<div key={a} style={{ width: document.documentElement.clientWidth, display: "flex", flexWrap: "nowrap", flexDirection: "column" }}>
                {this.getMoudel(this.sortItem[a])}
            </div>))
        }
        return result;
    }
    //=============渲染每一页===================
    getMoudel = (basic) => {
        return basic.map(a => (<div key={a} style={{ margin: 5, height: a, width: this.fallWidth, backgroundColor: "black" }}></div>))

    }

    componentDidMount() {
        window.onscroll = () => {
            //屏幕高度
            this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
            //被卷部分高度
            this.scollTop = document.body.scrollTop || document.documentElement.scrollTop
            //网页高度
            this.contentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            if (this.contentHeight == (this.clientHeight + this.scollTop)) {
                if (window.timer) {
                    clearTimeout(window.timer)
                }
                window.timer = setTimeout(() => {
                    this.props.onChange()
                    this.itemUpdate()
                }, 500);
            }
        }
    }

    render() {
     
        return (
            <div style={{ display: "flex", flexWrap: "nowrap", flexDirection: "row" }}>
                {this.getColumn()}
            </div>
        )
    }
}