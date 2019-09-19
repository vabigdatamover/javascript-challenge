//from data.js
var tableData = data;

//get table reference 
var tbody = d3.select("tbody");

function buildTable(data) {
  //First clear out any old data
  tbody.html("");
  //Loop and append
  data.forEach((dataRow) => {
    var row  = tbody.append("tr");
    //Loop through Data Row
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
      cell.text(val);
    });
  });
}

//Filter variable

var filters = {};

function updateFilters() {

  //Save the elements
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var filterId = changedElement.attr("id");

  //filter arguements
  if(elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }
  //Call filters
  filterTable();

}

//Attach an event to listen to changes to each filter
d3.selectAll(".filter").on("change", updateFilters);
          //function filteredTable():void 

function filterTable(){

  //Set the filterData to the tableData
  let filteredData = tableData;

  //Loop through all filters and keep matches
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] == value);
  });
  //Rebuild table using filtered data
  buildTable(filteredData);
}
//Build the table when the page loads
buildTable(tableData);