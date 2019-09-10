/**
 * @see 请参考Echarts官方文档
 * https://github.com/ecomfe/echarts-for-weixin
 */
import * as echarts from "../ec-canvas/echarts";
import geoJson from './mapData.js';

let chart1 = null;//力导向图
let chart2 = null;//地图
let chart3 = null;//曲线图

function initChart1(canvas, width, height) {
    const chart = echarts.init(canvas, null, {
        width: width,
        height: height
    });
    canvas.setChart(chart);
    var option = {
        title: {
            text: '客户关系',
            left: 'left'
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                type: 'graph',
                layout: 'none',
                symbolSize: 50,
                roam: true,
                label: {
                    normal: {
                    show: true
                    }
                },
                edgeSymbol: ['circle', 'arrow'],
                // edgeSymbolSize: [4, 10],
                edgeLabel: {
                    normal: {
                    textStyle: {
                        fontSize: 20
                    }
                    }
                },
                data: [{
                    name: '客户1',
                    x: 300,
                    y: 300,
                    itemStyle: {
                    color: '#37A2DA'
                    }
                }, {
                    name: '客户2',
                    x: 800,
                    y: 300,
                    itemStyle: {
                    color: '#32C5E9'
                    }
                }, {
                    name: '客户3',
                    x: 550,
                    y: 100,
                    itemStyle: {
                    color: '#9FE6B8'
                    }
                }, {
                    name: '客户4',
                    x: 550,
                    y: 500,
                    itemStyle: {
                    color: '#FF9F7F'
                    }
                }],
                links: [{
                    source: 0,
                    target: 1,
                    symbolSize: [5, 20],
                    label: {
                    normal: {
                        show: true
                    }
                    },
                    lineStyle: {
                    normal: {
                        width: 4,
                        curveness: 0.2
                    }
                    }
                }, {
                    source: '客户2',
                    target: '客户1',
                    label: {
                    normal: {
                        show: true
                    }
                    },
                    lineStyle: {
                    normal: { curveness: 0.2 }
                    }
                }, {
                    source: '客户1',
                    target: '客户3'
                }, {
                    source: '客户2',
                    target: '客户3'
                }, {
                    source: '客户2',
                    target: '客户4'
                }, {
                    source: '客户1',
                    target: '客户4'
                }],
                lineStyle: {
                    normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                    }
                }
            }
        ]
    };

    chart.setOption(option);
    chart1=chart;
    return chart;
}

function initChart2(canvas, width, height) {
    const chart = echarts.init(canvas, null, {
        width: width,
        height: height
    });

    canvas.setChart(chart);
    echarts.registerMap('henan', geoJson);
    const option = {
        title: {
            text: '地域分布',
            left: 'left'
        },
        tooltip: {
            trigger: 'item'
        },
        visualMap: {
            min: 0,
            max: 100,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        series: [{
            type: 'map',
            mapType: 'henan',
            label: {
                normal: {
                show: true
                },
                emphasis: {
                textStyle: {
                    color: '#fff'
                }
                }
            },
            itemStyle: {
        
                normal: {
                borderColor: '#389BB7',
                areaColor: '#fff',
                },
                emphasis: {
                areaColor: '#389BB7',
                borderWidth: 0
                }
            },
            animation: false,
        
            data: [
                { name: '郑州市', value: 100 },
                { name: '洛阳市', value: 10 },
                { name: '开封市', value: 20 },
                { name: '信阳市', value: 30 },
                { name: '驻马店市', value: 40 },
                { name: '南阳市', value: 41 },
                { name: '周口市', value: 15 },
                { name: '许昌市', value: 25 },
                { name: '平顶山市', value: 35 },
                { name: '新乡市', value: 35 },
                { name: '漯河市', value: 35 },
                { name: '商丘市', value: 35 },
                { name: '三门峡市', value: 35 },
                { name: '济源市', value: 35 },
                { name: '焦作市', value: 35 },
                { name: '安阳市', value: 35 },
                { name: '鹤壁市', value: 35 },
                { name: '濮阳市', value: 35 },
                { name: '开封市', value: 45 }
            ]
        }],
    };
    
    chart.setOption(option);
    chart2=chart;
    return chart;
}

function initChart3(canvas, width, height) {
    const chart = echarts.init(canvas, null, {
        width: width,
        height: height
    });
    canvas.setChart(chart);
    var option = {
        title: {
            text: '统计数据',
            left: 'left'
        },
        color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
        grid: {
            containLabel: true
        },
        tooltip: {
            show: true,
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            // show: false
        },
        yAxis: {
            x: 'center',
            type: 'value',
            splitLine: {
            lineStyle: {
                type: 'dashed'
            }
            }
            // show: false
        },
        series: [{
            name: 'A',
            type: 'line',
            smooth: true,
            data: [18, 36, 65, 30, 78, 40, 33]
        }, {
            name: 'B',
            type: 'line',
            smooth: true,
            data: [12, 50, 51, 35, 70, 30, 20]
        }, {
            name: 'C',
            type: 'line',
            smooth: true,
            data: [10, 30, 31, 50, 40, 20, 10]
        }]
    };
    chart.setOption(option);
    chart3=chart;
    return chart;
}

Component({
    properties:{
        userId:String
    },
    data: {
        msgs: [
            {
                label:"今日接受",
                count:20
            },
            {
                label:"今日发送",
                count:10
            },
            {
                label:"今日总数",
                count:30
            },
            {
                label:"本月接受",
                count:120
            },
            {
                label:"本月发送",
                count:110
            },
            {
                label:"本月总数",
                count:230
            }
        ],
        ec1: {
            onInit: initChart1
        },
        ec2: {
            onInit: initChart2
        },
        ec3: {
            onInit: initChart3
        }
    },
    methods:{
    },
    ready() {
        setTimeout(function () {
            console.log(chart1);
            console.log(chart2);
            console.log(chart3);
        }, 2000);
    }
})