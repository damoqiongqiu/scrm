/**
 * @see 请参考Echarts官方文档
 * https://github.com/ecomfe/echarts-for-weixin
 */
import * as echarts from "../ec-canvas/echarts";

let chart3 = null;//曲线图

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
        ec3: {
            onInit: initChart3
        }
    },
    methods:{
    },
    ready() {
        setTimeout(function () {
            console.log(chart3);
        }, 2000);
    }
})