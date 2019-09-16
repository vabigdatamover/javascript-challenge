// Variables
var button = d3.select("#filter-btn");
var inputField1 = d3.select("#datetime");
var tbody = d3.select("tbody");
var resetbtn = d3.select("#reset-btn");
var columns = ["datetime", "durationMinutes", "comments"]

var populate = (dataInput) => {

  dataInput.forEach(ufo_sightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo_sightings[column])
    )
  });
}

//Populate table
populate(data);

// Filter by attribute
button.on("click", () => {
  d3.event.preventDefault();
  var inputDate = inputField1.property("value").trim();
  

  // Filter by field matching input value
  var filterDate = data.filter(data => date.datetime === inputDate);
  console.log(filterDate)
 
  

  // Add filtered sighting to table
  tbody.html("");

  let response = {
    filterData, filterDate,
  }

  if (response.filterData.length !== 0) {
    populate(filterData);
  }
    

    else if (response.filterData.length === 0 && (( response.filterShape.length !== 0 || response.filterCountry.length !== 0 || response.filterState.length !== 0 || response.filterCity.length !== 0 || response.filterDate.length !== 0))){
        populate(filterCity) || populate(filterDate) || populate(filterState) || populate(filterCountry) || populate(filterShape);
    
    }


    else {
      tbody.append("tr").append("td").text("No results found!"); 
    }
})

resetbtn.on("click", () => {
  tbody.html("");
  populate(data)
  console.log("Table reset")
})