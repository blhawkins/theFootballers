//------------------------------------------------------------------------------//
//------------------------------Players.html JS Code------------------------------//
//------------------------------------------------------------------------------//

//----------Definition of Functions----------

//----------Function: Initialization of Webpage----------
//-------------------------------------------------------

//This function runs when the page first loads and populates the dropdown menu and initializes the graphics
window.onload = function playerListFun() {
    //Select the 'Select dataset' dropdown
    var playerDropDown = d3.select('#selDataset');
    //Append a dropdown element for each player; It also assigns the cooresponding index value to the element's 'value' tag
    d3.json('../Data/scraped_data.json').then((importedData) => {
        importedData[0]['players_data'].forEach((element, index) => {
            var player = playerDropDown.append('option');
            player.text(`${element['name']}`);
            player.property('value', index)
        })
    })
    // Call updateGraphicsFun() when a change takes place to the DOM
    d3.selectAll("#selDataset").on("change", updateGraphicsFun);
    //Initialize the webpage's graphics with the first player in the dataset
    createGraphicsFun(0)
}

//----------Function: Creation of Visualizations----------
//--------------------------------------------------------

//This function creates the graphics shown on the webpage
function createGraphicsFun(index) {
    d3.json('../Data/scraped_data.json').then((importedData) => {
        var playerData = importedData[0]['players_data'][index]
        //-----Demographic Info Table Creation-----
        //Select the #player-data id from the players.html file
        var demographicsTable = d3.select('#player-data');
        //For each of the player demographic categories from the players_data object, create a new line in the demographic table and print the cooresponding value
        // var playerImage = demographicsTable.append('img');
        //     playerImage.property('src', `${playerData['image']}`);
        var row = demographicsTable.append('p');
            row.text(`Name: ${playerData['name']}`);
        var row = demographicsTable.append('p');
            row.text(`Age: ${playerData['age']}`);
        var row = demographicsTable.append('p');
            row.text(`Position: ${playerData['primary_position']}`)
        var row = demographicsTable.append('p');
            row.text(`Club Team: ${playerData['club_team']}`);
        var row = demographicsTable.append('p');
            row.text(`National Team: ${playerData['national_team']}`);
        var row = demographicsTable.append('p');
            row.text(`Overall Rating: ${playerData['overall_rating']}`);
        var row = demographicsTable.append('p');
            row.text(`Potential Rating: ${playerData['potential_rating']}`);
        var row = demographicsTable.append('p');
            row.text(`Value: €${playerData['value_in_millions_of_euros']}M`);
        var row = demographicsTable.append('p');
            row.text(`Wage: €${playerData['wage_in_thousands_of_euros_per_week']}K`);
        var moreInfoLink = demographicsTable.append('a');
            moreInfoLink.text(`More Information`);
            moreInfoLink.property('href', `${playerData['url_extension']}`);
        
        //----------Overall Rating Gauge Chart----------
        var overallGaugeData = [
            {
                domain: {x: [0, 1], y: [0, 1]},
                value: playerData['overall_rating'],
                title: {text: `${playerData['name']}'s Overall Rating`},
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    axis: {range: [70, 100]},
                    steps: [
                        {range: [70, 75], color: "F8F1E9"},
                        {range: [75, 80], color: "F3EFE1"},
                        {range: [80, 85], color: "E7E3C2"},
                        {range: [85, 90], color: "E2E5A8"},
                        {range: [90, 95], color: "CFE38F"},
                        {range: [95, 100], color: "ADC785"},
                        //{range: [6, 7], color: "7CBA7B"},
                        //{range: [7, 8], color: "79B583"},
                        //{range: [8, 9], color: "75AD7E"},
                    ],
                    threshold: {
                        line: {color: "7D0004", width:4},
                        value: playerData['overall_rating']
                    },
                }
            }
        ];
        //Define the layout of the figure
        var overallGaugeLayout = {
            width: 400, 
            height: 300, 
            margin: { t: 0, b: 0 },
        };
        //Create the figure at the 'overall-gauge' tag
        Plotly.newPlot('overall-gauge', overallGaugeData, overallGaugeLayout);

        //----------Potential Rating Gauge Chart----------
        var potentialGaugeData = [
            {
                domain: {x: [0, 1], y: [0, 1]},
                value: playerData['potential_rating'],
                title: {text: `${playerData['name']}'s Potential Rating`},
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    axis: {range: [70, 100]},
                    steps: [
                        {range: [70, 75], color: "F8F1E9"},
                        {range: [75, 80], color: "F3EFE1"},
                        {range: [80, 85], color: "E7E3C2"},
                        {range: [85, 90], color: "E2E5A8"},
                        {range: [90, 95], color: "CFE38F"},
                        {range: [95, 100], color: "ADC785"},
                        //{range: [6, 7], color: "7CBA7B"},
                        //{range: [7, 8], color: "79B583"},
                        //{range: [8, 9], color: "75AD7E"},
                    ],
                    threshold: {
                        line: {color: "7D0004", width:4},
                        value: playerData['potential_rating']
                    },
                }
            }
        ];
        //Define the layout of the figure
        var potentialGaugeLayout = {
            width: 400, 
            height: 300, 
            margin: { t: 0, b: 0 },
        };
        //Create the figure at the 'potential-gauge' tag
        Plotly.newPlot('potential-gauge', potentialGaugeData, potentialGaugeLayout);

        //----------Player Value Gauge Chart----------
        var valueGaugeData = [
            {
                domain: {x: [0, 1], y: [0, 1]},
                value: playerData['value_in_millions_of_euros'],
                title: {text: `Value (Millions of Euros)`},
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    axis: {range: [0, 190]},
                    steps: [
                        {range: [0, 30], color: "F8F1E9"},
                        {range: [30, 60], color: "F3EFE1"},
                        {range: [60, 90], color: "E7E3C2"},
                        {range: [90, 120], color: "E2E5A8"},
                        {range: [120, 150], color: "CFE38F"},
                        {range: [150, 190], color: "ADC785"},
                        //{range: [6, 7], color: "7CBA7B"},
                        //{range: [7, 8], color: "79B583"},
                        //{range: [8, 9], color: "75AD7E"},
                    ],
                    threshold: {
                        line: {color: "7D0004", width:4},
                        value: playerData['value_in_millions_of_euros']
                    },
                }
            }
        ];
        //Define the layout of the figure
        var valueGaugeLayout = {
            width: 400, 
            height: 300, 
            margin: { t: 0, b: 0 },
        };
        //Create the figure at the 'value-gauge' tag
        Plotly.newPlot('value-gauge', valueGaugeData, valueGaugeLayout);
        //----------Player Wage Gauge Chart----------
        var wageGaugeData = [
            {
                domain: {x: [0, 1], y: [0, 1]},
                value: playerData['wage_in_thousands_of_euros_per_week'],
                title: {text: `Wage (Thousands of Euros Per Week)`},
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    axis: {range: [0, 600]},
                    steps: [
                        {range: [0, 100], color: "F8F1E9"},
                        {range: [100, 200], color: "F3EFE1"},
                        {range: [200, 300], color: "E7E3C2"},
                        {range: [300, 400], color: "E2E5A8"},
                        {range: [400, 500], color: "CFE38F"},
                        {range: [500, 600], color: "ADC785"},
                        //{range: [6, 7], color: "7CBA7B"},
                        //{range: [7, 8], color: "79B583"},
                        //{range: [8, 9], color: "75AD7E"},
                    ],
                    threshold: {
                        line: {color: "7D0004", width:4},
                        value: playerData['wage_in_thousands_of_euros_per_week']
                    },
                }
            }
        ];
        //Define the layout of the figure
        var wageGaugeLayout = {
            width: 400, 
            height: 300, 
            margin: { t: 0, b: 0 },
        };
        //Create the figure at the 'wage-gauge' tag
        Plotly.newPlot('wage-gauge', wageGaugeData, wageGaugeLayout);
});
};

//----------Function: Updating of Visualizations----------
//--------------------------------------------------------

//This function updates the visualizations according to the player name chosen from the dropdown menu
function updateGraphicsFun() {
    console.log('you got here')
    //Use D3 to select the dropdown menu
    var dropdownMenu = d3.select('#selDataset');
    //Assign the value of the dropdown menu option to a variable playerIndex
    var playerIndex = dropdownMenu.property("value");
    //Clear the Player Demographics table in preparation for new values to be printed
    var demographicsTable = d3.select('#player-data');
    demographicsTable.html('')
    //Call the createGraphicsFun and input the desired playerIndex
    createGraphicsFun(playerIndex)
};