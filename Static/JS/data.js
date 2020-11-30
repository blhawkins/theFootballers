//------------------------------------------------------------------------------//
//------------------------------Data.html JS Code------------------------------//
//------------------------------------------------------------------------------//

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
        return dt.name.toLowerCase().includes(inputSearchNameValue.toLowerCase());
        //https://stackoverflow.com/questions/47785624/filter-and-includes-to-filter-array-with-array
        //https://www.google.com/search?q=How+to+change+to+lowercase+in+Javascript&oq=How+to+change+to+lowercase+in+Javascript&aqs=chrome..69i57.9364j0j7&sourceid=chrome&ie=UTF-8
    return true;
}

function positionFilter(dt) {
    let inputSearchPosition = d3.select("#position");
    let inputSearchPositionValue = inputSearchPosition.property("value");
    if (inputSearchPositionValue)
        return dt.primary_position.toLowerCase() == inputSearchPositionValue.toLowerCase()
    return true;
}

function ageFilter(dt) {
    let inputSearchAge = d3.select("#age");
    let inputSearchAgeValue = inputSearchAge.property("value");
    if (inputSearchAgeValue)
        return dt.age == inputSearchAgeValue
    return true;
}

function overallRatingFilter(dt) {
    let inputSearchOverall = d3.select("#overall_rating");
    let inputSearchOverallValue = inputSearchOverall.property("value");
    if (inputSearchOverallValue)
        return dt.overall_rating == inputSearchOverallValue
    return true;
}

function potentialRatingFilter(dt) {
    let inputSearchPotential = d3.select("#potential_rating");
    let inputSearchPotentialValue = inputSearchPotential.property("value");
    if (inputSearchPotentialValue)
        return dt.potential_rating == inputSearchPotentialValue
    return true;
}

function countryFilter(dt) {
    let inputSearchCountry = d3.select("#country");
    let inputSearchCountryValue = inputSearchCountry.property("value");
    if (inputSearchCountryValue)
        return dt.national_team.toLowerCase().includes(inputSearchCountryValue.toLowerCase())
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