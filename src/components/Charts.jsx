import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Navigation } from ".";
import { Chart, ArcElement, Legend, Tooltip, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';
import { Line, Pie, Bar } from 'react-chartjs-2';
import "../styles/charts.css";
import { borderLeft } from "@mui/system";

Chart.register(ArcElement, Legend, Tooltip, CategoryScale, LinearScale, BarElement, PointElement, LineElement);

const Charts = () => {
    const [lineChartData, setLineChartData] = useState({});
    const [chartData, setChartData] = useState({});
    const [barChartData, setBarChartData] = useState({});
    const [haveLineData, setHaveLineData] = useState(false);
    const [haveData, setHaveData] = useState(false);
    const [haveBarData, setHaveBarData] = useState(false);
    const [charSpeciesList, setCharSpeciesList] = useState([]);
    const [charCount, setCharCount] = useState([]);

    
    const barChart = () => {
        let charPers = [];
        let charPersList = [];
        let charPersCount = [];
        Axios.get("https://acnhapi.com/v1/villagers").then(response => {
            charPersList = [
                'Cranky', 'Jock', 'Lazy', 'Normal',
                'Peppy', 'Uchi', 'Smug', 'Snooty'
            ]
            for (var n = 0; n<8; ++n) {
                charPersCount.push(0);
            }
            for(let character in response.data){
                charPers.push(response.data[character].personality);
            }
            for(var i = 0; i < charPers.length; ++i) {
                for (var j = 0; j<8; ++j) {
                    if(charPers[i] === charPersList[j]) {
                        charPersCount[j]++;
                    }
                }
            }
            setBarChartData({
                labels: charPersList,
                datasets: [
                    {
                        label: "Villagers",
                        data: charPersCount,
                        backgroundColor: ['rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(60, 200, 70, 1)'
                            ],
                        borderWidth: 1
                    }
                ]
            });
            setHaveBarData(true);
        })
        .catch(error => {
            console.log(error);
            setHaveBarData(false);
        });
        console.log(charPersList, charPersCount);
    }

    const chart = () => {
        let charSpc = [];
        let charCount = [];
        let charSpeciesList = [];

        Axios.get("https://acnhapi.com/v1/villagers").then(response => {
            charSpeciesList = [
                'Alligator', 'Anteater', 'Bear', 'Bird', 'Bull',
                'Cat', 'Chicken', 'Cow', 'Cub',
                'Deer', 'Dog', 'Duck', 
                'Eagle', 'Elephant', 
                'Frog',
                'Goat', 'Gorilla',
                'Hamster', 'Hippo', 'Horse',
                'Kangaroo', 'Koala', 
                'Lion',
                'Monkey', 'Mouse',
                'Octopus', 'Ostrich',
                'Penguin', 'Pig', 
                'Rabbit', 'Rhino', 
                'Sheep', 'Squirrel', 
                'Tiger',
                'Wolf' ];
            for (var n = 0; n<35; ++n) {
                charCount.push(0);
            }
            for(let character in response.data){
                charSpc.push(response.data[character].species);
            }
            for(var i = 0; i < charSpc.length; ++i) {
                for (var j = 0; j<35; ++j) {
                    if(charSpc[i] === charSpeciesList[j]) {
                        charCount[j]++;
                    }
                }
            }
            //console.log(charCnt);

            setChartData({
                labels: charSpeciesList,
                datasets: [
                    {
                        label: "Species Data",
                        data: charCount,
                        backgroundColor: ['rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(60, 200, 70, 1)',
                        'rgba(15, 82, 186, 1)',
                        'rgba(255, 191, 0, 1)',
                        'rgba(159, 43, 104, 1)',
                        'rgba(9, 121, 105, 1)',
                        'rgba(8, 24, 168, 1)',
                        'rgba(255, 255, 143, 1)',
                        'rgba(222, 49, 99, 1)',
                        'rgba(175, 225, 175, 1)',
                        'rgba(135, 206, 235, 1)',
                        'rgba(228, 208, 10, 1)',
                        'rgba(248, 200, 220, 1)',
                        'rgba(170, 255, 0, 1)',
                        'rgba(0, 71, 171, 1)',
                        'rgba(255, 215, 0, 1)',
                        'rgba(227, 11, 92, 1)',
                        'rgba(2, 48, 32, 1)',
                        'rgba(0, 150, 255, 1)',
                        'rgba(255, 250, 160, 1)',
                        'rgba(227, 115, 131, 1)',
                        'rgba(80, 200, 120, 1)',
                        'rgba(0, 255, 255, 1)',
                        'rgba(244, 196, 48, 1)',
                        'rgba(218, 112, 214, 1)',
                        'rgba(0, 128, 0, 1)',
                        'rgba(0, 0, 139, 1)',
                        'rgba(255, 170, 51, 1)',
                        'rgba(119, 7, 55, 1)',
                        'rgba(76, 187, 23, 1)',
                        'rgba(31, 81, 255, 1)',
                        'rgba(255, 255, 0, 1)',
                        'rgba(248, 131, 121, 1)'],
                        borderWidth: 1
                    }
                ]
            });
            setHaveData(true);
        })
        .catch(error => {
            console.log(error);
            setHaveData(false);
        });
        console.log(charSpeciesList, charCount);
    };
    const lineChart = () => {
        let charBday = [];
        let monthsList = [];
        let charBdayCount = [];
        let bday = null;
        Axios.get("https://acnhapi.com/v1/villagers").then(response => {
            monthsList = [
                'January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August', 'September',
                'October', 'November', 'December'
            ]
            for (var n = 0; n<12; ++n) {
                charBdayCount.push(0);
            }
            for(let character in response.data){
                //let data1 = response.data[character];
                bday = response.data[character].birthday;
                var mon = bday.split("/").pop();
                console.log(mon);
                charBday.push(mon);
            }
            for(var i = 0; i < charBday.length; ++i) {
                for (var j = 0; j<12; ++j) {
                    if((charBday[i] - 1) === j) {
                        charBdayCount[j]++;
                    }
                }
            }
            setLineChartData({
                labels: monthsList,
                datasets: [
                    {
                        label: "Villager Birthdays",
                        data: charBdayCount,
                        fill: true,
                        backgroundColor: ['rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(60, 200, 70, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(60, 200, 70, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(60, 200, 70, 1)'
                            ],
                        tension: 0.1,
                        pointRadius: 5

                    }
                ]
            });
            setHaveLineData(true);
        })
        .catch(error => {
            console.log(error);
            setHaveLineData(false);
        });
        console.log(monthsList, charBdayCount);
    }
    useEffect(() => {
        lineChart();
        chart();
        barChart();
    }, []);

    if (!haveData || !haveBarData || !haveLineData) {
        return <div>Loading...</div>
    }
    else {
        return (
            <div id="chartPage" className="min-vh-100">
                <Navigation />
                <div id="chartsTitle" className="col-lg-12">
                    <h1 id="chartsHeader">Villager Charts</h1>
                </div>
                <div id="chartContainer" className="container">
                    <div className="row align-items-center">
                        <div id="personalityChart" className="col-md-4">
                            <h3 id="persTitle">Personalities</h3>
                            <Bar 
                                data={barChartData}
                                height={"200px"}
                                options={{
                                    scales: {
                                        x: {
                                            ticks: {
                                                font: {
                                                    weight: "bolder"
                                                }
                                            }
                                        }
                                    },
                                    plugins: {
                                        legend: {
                                            display: false,
                                            labels: {
                                                font: {
                                                    weight: "bold"
                                                }
                                            }
                                        }
                                    }
                                }} />
                        </div>
                        
                        <div id="speciesChart" className="col-md-4">
                            <h3 id="speciesTitle">Species</h3>
                            <div>
                                <Pie 
                                    data={chartData} 
                                    height={"500px"}
                                    options={{ 
                                        title: {
                                            display: true,
                                            text: 'Species'
                                        },
                                        responsive: true,
                                        plugins: {
                                            legend: {
                                                position: 'bottom',
                                                labels: {
                                                    font: {
                                                        weight: "bolder"
                                                    }
                                                }
                                            },
                                            title: {
                                                display: true,
                                                text: "Species",
                                                position: 'top'
                                            }
                                        },
                                        maintainAspectRatio: false,
                                        legend: {
                                            display: true
                                        },
                                        tooltip: {
                                            enabled: true,
                                            placement: "node:out",
                                            callbacks: {
                                                label: function(tooltipItem, chart) {
                                                    var dataset = chart.datasets[tooltipItem.datasetIndex];
                                                    var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                                                    var total = meta.total;
                                                    var currentValue = dataset.data[tooltipItem.index];
                                                    var percentage = parseFloat((currentValue/total*100).toFixed(1));
                                                    return currentValue + ' (' + percentage + '%)';
                                                },
                                                title: function(tooltipItem, data) {
                                                    return data.labels[tooltipItem[0].index];
                                                }
                                            }
                                        }
                                    }}
                                />
                            </div>
                            
                        </div>
                        
                        <div id="birthdayChart" className="col-md-4">
                            <h3 id="bdayTitle">Birthdays</h3>
                            <Line 
                                data={lineChartData}
                                height={"200px"}
                                options={{
                                    plugins: {
                                        legend: {
                                            display: false
                                        }
                                    },
                                    scale: {
                                        x: {
                                            ticks: {
                                                font: {
                                                    weight: "bolder"
                                                }
                                            }
                                        }
                                    }
                                    
                                }}
                                />
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
};

export default Charts;

