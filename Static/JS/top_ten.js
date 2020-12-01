//var tableData;
var players = [];
// Function to get the data
d3.json("../Data/secondary_scraped_data.json").then((scraped_data) => {
    console.log(scraped_data);
    var players_data = scraped_data[0]["players_data"];
    console.log(players_data)
    var playersdataslice = players_data.slice(0, 10)
    for (i = 0; i < playersdataslice.length; i++) {
        // console.log(i)
        players.push(playersdataslice[i]);
     };
     console.log(players);
   // tableData = players;
});
let tableData = players;
let tbody = d3.select("#tbody");
function uploadTable(tableData) {
    // First, clear out any existing data
    tbody.html("");
  console.log(tableData)
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    tableData.forEach((playerRow) => {
        console.log(playerRow)
      // Append a row to the table body
      var row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.entries(playerRow).forEach(([key,value]) => {
        var cell = row.append("td");
          cell.text(`${value}`);
        });
    });
  }
  uploadTable(tableData);
function runFilter() {
    // jQuery method for emptying the existing table each time
    // a new query is performed
    $("#tbody").empty();
    var tableData = players
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#name");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // Only return values that match with input date
    var filteredData = tableData.filter(data => data.name === inputValue);
    // Prevent the page from refreshing after form submission
    d3.event.preventDefault();
    console.log(filteredData);
uploadTable(filteredData);
// // jQuery method for emptying the input field after click
//$("#name").val('');
};
var button = d3.select("#filter-btn");
var form = d3.select("form");
button.on("click", runFilter);
form.on("submit", runFilter);