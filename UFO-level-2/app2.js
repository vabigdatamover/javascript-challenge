//from data.js
var tableData = data;

//get table reference 
var tbody = d3.select("tbody");

function buildTable(data) {
  //First clear out any old data
  tbody.html("");
  //Loop and append
  data.forEach((dataRow) => {
    var row  = tBody.append("tr");
    //Loop through Data Row
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
      cell.text(val);
    });
  });
}

//Filter variable

var filters = {};

function updateFilter() {

  //Save the elements
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var filterId = changedElement.attr("id");

  //filter arguements
  if(elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filter[filterId];
  }
  //Call filters
  filterTable();

}

//Attach an event to listen to changes to each filter
d3.selectAll(".filter").on("change", updateFilter);

function filterTable(){

  //Set the filterData to the tableData
  let filterData = tableData;

  //Loop through all filters and keep matches
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] == value);
  });
  //Rebuild table using filtered data
  buildTable(filterData);
}
//Build the table when the page loads
buildTable(tableData);


// Variables
// var button = d3.select("#filter-btn");
// var inputField1 = d3.select("#datetime");
// //Bonus
// var inputField2 = d3.select("#city");
// var inputField3 = d3.select("#state");
// var inputField4 = d3.select("#country");
// var inputField5 = d3.select("#shape");
// //End Bonus
// var tbody = d3.select("tbody");
// var resetbtn = d3.select("#reset-btn");
// var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// var populate = (dataInput) => {

//   dataInput.forEach(ufo_sightings => {
//     var row = tbody.append("tr");
//     columns.forEach(column => row.append("td").text(ufo_sightings[column])
//     )
//   });
// }

// //Populate table
// populate(data);

// // Filter by attribute
// button.on("click", () => {
//   d3.event.preventDefault();
//   var inputDate = inputField1.property("value").trim();
//   //Bonus Add On
//   var inputCity = inputField2.property("value").toLowerCase().trim();
//   var inputState = inputField3.property("value").toLowerCase().trim();
//   var inputCountry = inputField4.property("value").toLowerCase().trim();
//   var inputShape = inputField5.property("value").toLowerCase().trim();

//   // Filter by field matching input value
//   var filterDate = data.filter(data => date.datetime === inputDate);
//   console.log(filterDate)
//   //Add On Bonus
//   var filterCity = data.filter(data => data.city === inputCity);
//   console.log(filterCity)
//   var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity);
//   console.log(filterStata)
//   var filterState = data.filter(data => data.state === inputState);
//   console.log(filterState)
//   var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity && data.state === inputState);
//   console.log(filterData)
//   var filterCountry = data.filter(data => data.country === inputCountry);
//   console.log(filterCountry)
//   var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity && data.state === inputState);
//   console.log(filterData)
//   var filterShape = data.filter(data => data.shape === inputShape);
//   console.log(filterShape)
//   var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity && data.state === inputState && data.country === inputCountry && data.shape === inputShape);
//   console.log(filterData)
  

//   // Add filtered sighting to table
//   tbody.html("");

//   let response = {
//     filterData, filterCity, filterDate, filterState, filterCountry, filterShape
//   }

//   if (response.filterData.length !== 0) {
//     populate(filterData);
//   }
//     // else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0))){
//     //   populate(filterCity) || populate(filterDate);
  
//     // }

//     else if (response.filterData.length === 0 && (( response.filterShape.length !== 0 || response.filterCountry.length !== 0 || response.filterState.length !== 0 || response.filterCity.length !== 0 || response.filterDate.length !== 0))){
//         populate(filterCity) || populate(filterDate) || populate(filterState) || populate(filterCountry) || populate(filterShape);
    
//     }


//     else {
//       tbody.append("tr").append("td").text("No results found!"); 
//     }
// })

// resetbtn.on("click", () => {
//   tbody.html("");
//   populate(data)
//   console.log("Table reset")
// })