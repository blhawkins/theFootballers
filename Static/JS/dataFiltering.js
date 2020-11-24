//Function that initializes the data entries in the table
function initializeTable() {
    d3.json('../Data/scraped_data.json').then((importedData) => {
        var playerData = importedData[0]['players_data']
        playerData.age = +playerData.age
        playerData.overall_rating = +playerData.overall_rating
        playerData.potential_rating = +playerData.potential_rating
        playerData.value_in_millions_of_euros = +playerData.value_in_millions_of_euros
        playerData.wage_in_thousands_of_euros_per_week = +playerData.wage_in_thousands_of_euros_per_week
        playerData.forEach(tablePopulationFun)
    });
};

//Call the initializeTable function
initializeTable()

//Function that appends a row for each data entry
function tablePopulationFun(player) {
    var tbody = d3.select('tbody') //NOTE the data.html file must have this
    var row = tbody.append('tr')
    Object.entries(player).forEach(function([key, value]) {
        var cell = row.append('td')
        cell.text(value)
    });
    //
    d3.select("#filter-btn").on("click", playerFiltering);
}

function nameFilter(dt) {
    let inputSearchName = d3.select("#name"); //MAKE SURE YOU HAVE THIS
    let inputSearchNameValue = inputSearchName.property("value");
    if (inputSearchNameValue)
        return dt.name.includes(inputSearchNameValue);
    return true;
}

function positionFilter(dt) {
    let inputSearchPosition = d3.select("#position"); //MAKE SURE YOU HAVE THIS
    let inputSearchPositionValue = inputSearchPosition.property("value");
    if (inputSearchPositionValue)
        return dt.primary_position == inputSearchPositionValue //Figure out how to return 'includes this'
    return true;
}

function ageFilter(dt) {
    let inputSearchAge = d3.select("#age"); //MAKE SURE YOU HAVE THIS
    let inputSearchAgeValue = inputSearchAge.property("value");
    if (inputSearchAgeValue)
        return dt.age == inputSearchAgeValue //Figure out how to return 'includes this'
    return true;
}

function overallRatingFilter(dt) {
    let inputSearchOverall = d3.select("#overall_rating"); //MAKE SURE YOU HAVE THIS
    let inputSearchOverallValue = inputSearchOverall.property("value");
    if (inputSearchOverallValue)
        return dt.overall_rating == inputSearchOverallValue //Figure out how to return 'includes this'
    return true;
}

function potentialRatingFilter(dt) {
    let inputSearchPotential = d3.select("#potential_rating"); //MAKE SURE YOU HAVE THIS
    let inputSearchPotentialValue = inputSearchPotential.property("value");
    if (inputSearchPotentialValue)
        return dt.potential_rating == inputSearchPotentialValue //Figure out how to return 'includes this'
    return true;
}

function countryFilter(dt) {
    let inputSearchCountry = d3.select("#country"); //MAKE SURE YOU HAVE THIS
    let inputSearchCountryValue = inputSearchCountry.property("value");
    if (inputSearchCountryValue)
        return dt.national_team.includes(inputSearchCountryValue)
    return true;
}

function playerFiltering() {
    //Pull in data
    d3.json("../Data/scraped_data.json").then((importedData) => {
        //Table creation
        var playerData = importedData[0]['players_data'];
        playerData.age = +playerData.age
        playerData.overall_rating = +playerData.overall_rating
        playerData.potential_rating = +playerData.potential_rating
        playerData.value_in_millions_of_euros = +playerData.value_in_millions_of_euros
        playerData.wage_in_thousands_of_euros_per_week = +playerData.wage_in_thousands_of_euros_per_week
        //Remove Table Body
        d3.select("tbody").selectAll("tr").remove();
        //Filter Table based on selections
        let playerFilteredData = playerData.filter(nameFilter);
        playerFilteredData = playerFilteredData.filter(positionFilter);
        playerFilteredData = playerFilteredData.filter(ageFilter);
        playerFilteredData = playerFilteredData.filter(overallRatingFilter);
        playerFilteredData = playerFilteredData.filter(potentialRatingFilter);
        playerFilteredData = playerFilteredData.filter(countryFilter);
        //Reload Filtered Table
        playerFilteredData.forEach(tablePopulationFun)
    });
}