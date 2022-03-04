import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Navigation } from ".";
import { Chart, ArcElement, Legend, Tooltip, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import "../styles/charts.css";

Chart.register(ArcElement, Legend, Tooltip, CategoryScale, LinearScale, BarElement);

const Charts = () => {
    const [chartData, setChartData] = useState({});
    const [barChartData, setBarChartData] = useState({});
    const [haveData, setHaveData] = useState(false);
    const [haveBarData, setHaveBarData] = useState(false);
    const [charSpeciesList, setCharSpeciesList] = useState([]);
    const [charCount, setCharCount] = useState([]);

    const chart = () => {
        let charSpc = [];
        let charCount = [];
        let charSpeciesList = [];

        Axios.get("https://acnhapi.com/v1/villagers").then(response => {
            //console.log(response);
            /*
            for (const dataObj of response.data.data) {
                charSpc.push(dataObj.species);
            }
            */
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
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(60, 200, 70, 1)',
                        'rgba(83, 102, 255, 1)',
                        'rgba(234, 74, 2, 1)',
                        'rgba(148, 241, 19, 1)',
                        'rgba(78, 52, 199, 1)',
                        'rgba(232, 72, 245, 1)',
                        'rgba(102, 0, 245, 1)',
                        'rgba(245, 99, 132, 1)',
                        'rgba(55, 192, 192, 1)',
                        'rgba(143, 102, 255, 1)',
                        'rgba(143, 37, 17, 1)',
                        'rgba(254, 124, 0, 1)',
                        'rgba(73, 102, 255, 1)',
                        'rgba(30, 159, 64, 1)',
                        'rgba(82, 181, 249, 1)',
                        'rgba(68, 52, 199, 1)',
                        'rgba(127, 221, 198, 1)',
                        'rgba(254, 13, 0, 1)',
                        'rgba(229, 254, 0, 1)',
                        'rgba(142, 42, 79, 1)',
                        'rgba(196, 125, 153, 1)',
                        'rgba(19, 45, 187, 1)',
                        'rgba(155, 206, 86, 1)',
                        'rgba(51, 157, 14, 1)',
                        'rgba(101, 114, 145, 1)',
                        'rgba(224, 160, 57, 1)',
                        'rgba(110, 27, 219, 1)',
                        'rgba(203, 31, 166, 1)',
                        'rgba(54, 195, 133, 1)'],
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

    useEffect(() => {
        chart();
        barChart();
    }, []);

    if (!haveData || !haveBarData) {
        return <div>Loading...</div>
    }
    else {
        return (
            <div>
                <Navigation />
                <div id="chartsDiv" className="ChartsPage min-vh-100">
                    <div className="container">
                        <div className="row align-items-center my-5">
                            <div id="chartsTitle" className="col-lg-12">
                                <h1 id="chartsHeader">Villager Charts</h1>
                            </div>
                            <div id="speciesChart" className="col-md-4">
                                <Pie 
                                    data={chartData} 
                                    height={"500px"}
                                    options={{ 
                                        maintainAspectRatio: false,
                                        legend: {
                                            display: true,
                                            fontWeight: "bolder"
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
                            <div id="personalityChart" className="col-md-4">
                                <Bar 
                                    data={barChartData}
                                    height={"200px"}
                                    options={{
                                        plugins: {
                                            legend: {
                                                display: false
                                            }
                                        }
                                    }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Charts;

