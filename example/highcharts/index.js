Highcharts.chart('container', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: '2014 年世界各地碳排放量'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.y}m CO<sub>2</sub>'
    },
    plotOptions: {
        packedbubble: {
            minSize: '30%',
            maxSize: '120%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: '欧洲',
        data: [{
            name: '德国',
            value: 767.1
        }, {
            name: '克罗地亚',
            value: 20.7
        },
        {
            name: "比利时",
            value: 97.2
        },
        {
            name: "捷克共和国",
            value: 111.7
        },
        {
            name: "荷兰",
            value: 158.1
        },
        {
            name: "西班牙",
            value: 241.6
        },
        {
            name: "乌克兰",
            value: 249.1
        },
        {
            name: "波兰",
            value: 298.1
        },
        {
            name: "法国",
            value: 323.7
        },
        {
            name: "罗马尼亚",
            value: 78.3
        },
        {
            name: "英国",
            value: 415.4
        }, {
            name: "土耳其",
            value: 353.2
        }, {
            name: "意大利",
            value: 337.6
        },
        {
            name: "希腊",
            value: 71.1
        },
        {
            name: "奥地利",
            value: 69.8
        },
        {
            name: "白俄罗斯",
            value: 67.7
        },
        {
            name: "塞尔维亚",
            value: 59.3
        },
        {
            name: "芬兰",
            value: 54.8
        },
        {
            name: "保加利亚",
            value: 51.2
        },
        {
            name: "葡萄牙",
            value: 48.3
        },
        {
            name: "挪威",
            value: 44.4
        },
        {
            name: "瑞典",
            value: 44.3
        },
        {
            name: "匈牙利",
            value: 43.7
        },
        {
            name: "瑞士",
            value: 40.2
        },
        {
            name: "丹麦",
            value: 40
        },
        {
            name: "斯洛伐克",
            value: 34.7
        },
        {
            name: "爱尔兰",
            value: 34.6
        },
        {
            name: "克罗地亚",
            value: 20.7
        },
        {
            name: "爱沙尼亚",
            value: 19.4
        },
        {
            name: "斯洛文尼亚",
            value: 16.7
        },
        {
            name: "立陶宛",
            value: 12.3
        },
        {
            name: "卢森堡",
            value: 10.4
        },
        {
            name: "马其顿",
            value: 9.5
        },
        {
            name: "摩尔多瓦",
            value: 7.8
        },
        {
            name: "拉脱维亚",
            value: 7.5
        },
        {
            name: "塞浦路斯",
            value: 7.2
        }]
    }, {
        name: '非洲',
        data: [{
            name: "塞内加尔",
            value: 8.2
        },
        {
            name: "喀麦隆",
            value: 9.2
        },
        {
            name: "津巴布韦",
            value: 13.1
        },
        {
            name: "加纳",
            value: 14.1
        },
        {
            name: "肯尼亚",
            value: 14.1
        },
        {
            name: "苏丹",
            value: 17.3
        },
        {
            name: "突尼斯",
            value: 24.3
        },
        {
            name: "安哥拉",
            value: 25
        },
        {
            name: "利比亚",
            value: 50.6
        },
        {
            name: "象牙海岸",
            value: 7.3
        },
        {
            name: "摩洛哥",
            value: 60.7
        },
        {
            name: "埃塞俄比亚",
            value: 8.9
        },
        {
            name: "桑坦尼亚",
            value: 9.1
        },
        {
            name: "尼日利亚",
            value: 93.9
        },
        {
            name: "南非",
            value: 392.7
        }, {
            name: "埃及",
            value: 225.1
        }, {
            name: "阿尔及利亚",
            value: 141.5
        }]
    }, {
        name: '大洋洲',
        data: [{
            name: "澳大利亚",
            value: 409.4
        },
        {
            name: "新西兰",
            value: 34.1
        },
        {
            name: "巴布亚新几内亚",
            value: 7.1
        }]
    }, {
        name: '北美洲',
        data: [{
            name: "哥斯达黎加",
            value: 7.6
        },
        {
            name: "洪都拉斯",
            value: 8.4
        },
        {
            name: "牙买加",
            value: 8.3
        },
        {
            name: "巴拿马",
            value: 10.2
        },
        {
            name: "危地马拉",
            value: 12
        },
        {
            name: "多米尼加",
            value: 23.4
        },
        {
            name: "古巴",
            value: 30.2
        },
        {
            name: "美国",
            value: 5334.5
        }, {
            name: "加拿大",
            value: 566
        }, {
            name: "墨西哥",
            value: 456.3
        }]
    }, {
        name: '南美洲',
        data: [{
            name: "萨尔瓦多",
            value: 7.2
        },
        {
            name: "乌拉圭",
            value: 8.1
        },
        {
            name: "玻利维亚",
            value: 17.8
        },
        {
            name: "特利尼亚和多巴哥",
            value: 34
        },
        {
            name: "厄瓜多尔",
            value: 43
        },
        {
            name: "智利",
            value: 78.6
        },
        {
            name: "秘鲁",
            value: 52
        },
        {
            name: "哥伦比亚",
            value: 74.1
        },
        {
            name: "巴西",
            value: 501.1
        }, {
            name: "阿根廷",
            value: 199
        },
        {
            name: "委内瑞拉",
            value: 195.2
        }]
    }, {
        name: '亚洲',
        data: [{
            name: "尼泊尔",
            value: 6.5
        },
        {
            name: "格鲁吉亚",
            value: 6.5
        },
        {
            name: "文莱",
            value: 7.4
        },
        {
            name: "吉尔吉斯斯坦",
            value: 7.4
        },
        {
            name: "阿富汗",
            value: 7.9
        },
        {
            name: "缅甸",
            value: 9.1
        },
        {
            name: "蒙古",
            value: 14.7
        },
        {
            name: "斯里兰卡",
            value: 16.6
        },
        {
            name: "巴林",
            value: 20.5
        },
        {
            name: "也门",
            value: 22.6
        },
        {
            name: "约旦",
            value: 22.3
        },
        {
            name: "黎巴嫩",
            value: 21.1
        },
        {
            name: "阿塞拜疆",
            value: 31.7
        },
        {
            name: "新加坡",
            value: 47.8
        },
        // {
        //     name: "香港",
        //     value: 49.9
        // },
        {
            name: "叙利亚",
            value: 52.7
        },
        {
            name: "朝鲜",
            value: 59.9
        },
        {
            name: "以色列",
            value: 64.8
        },
        {
            name: "土库曼斯坦",
            value: 70.6
        },
        {
            name: "阿曼",
            value: 74.3
        },
        {
            name: "卡塔尔",
            value: 88.8
        },
        {
            name: "菲律宾",
            value: 96.9
        },
        {
            name: "科威特",
            value: 98.6
        },
        {
            name: "乌兹别克斯坦",
            value: 122.6
        },
        {
            name: "伊拉克",
            value: 139.9
        },
        {
            name: "巴基斯坦",
            value: 158.1
        },
        {
            name: "越南",
            value: 190.2
        },
        {
            name: "阿拉伯联合酋长国",
            value: 201.1
        },
        {
            name: "马来西亚",
            value: 227.5
        },
        {
            name: "哈萨克斯坦",
            value: 236.2
        },
        {
            name: "泰国",
            value: 272
        },
        
        {
            name: "印尼",
            value: 453
        },
        {
            name: "沙特阿拉伯",
            value: 494.8
        },
        {
            name: "日本",
            value: 1278.9
        },
        // {
        //     name: "中国",
        //     value: 10540.8
        // },
        {
            name: "中国",
            value: 10590.7
        },
        {
            name: "印度",
            value: 2341.9
        },
        {
            name: "俄罗斯",
            value: 1766.4
        },
        {
            name: "伊朗",
            value: 618.2
        },
        {
            name: "韩国",
            value: 610.1
        }]
    }]
});