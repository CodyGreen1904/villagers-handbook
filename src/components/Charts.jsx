import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Navigation } from ".";
import { Chart, ArcElement, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "../styles/stats.css";

Chart.register(ArcElement, Legend);

const Charts = () => {
    const [chartData, setChartData] = useState({});
    const [haveData, setHaveData] = useState(false);
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
                        'rgba(199, 199, 199, 1)',
                        'rgba(83, 102, 255, 1)',
                        'rgba(40, 159, 64, 1)',
                        'rgba(210, 199, 199, 1)',
                        'rgba(78, 52, 199, 1)',
                        'rgba(44, 162, 235, 1)',
                        'rgba(245, 206, 86, 1)',
                        'rgba(245, 99, 132, 1)',
                        'rgba(55, 192, 192, 1)',
                        'rgba(143, 102, 255, 1)',
                        'rgba(245, 159, 64, 1)',
                        'rgba(189, 199, 199, 1)',
                        'rgba(73, 102, 255, 1)',
                        'rgba(30, 159, 64, 1)',
                        'rgba(200, 199, 199, 1)',
                        'rgba(68, 52, 199, 1)',
                        'rgba(189, 189, 199, 1)',
                        'rgba(73, 92, 255, 1)',
                        'rgba(30, 149, 64, 1)',
                        'rgba(200, 189, 199, 1)',
                        'rgba(68, 42, 199, 1)',
                        'rgba(64, 162, 235, 1)',
                        'rgba(155, 206, 86, 1)',
                        'rgba(155, 99, 132, 1)',
                        'rgba(65, 192, 192, 1)',
                        'rgba(163, 102, 255, 1)',
                        'rgba(155, 159, 64, 1)',
                        'rgba(99, 199, 199, 1)',
                        'rgba(93, 102, 255, 1)'],
                        borderWidth: 4
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

    useEffect(() => {
        chart();
    }, []);

    if (!haveData) {
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
                                <Pie data={chartData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Charts;

