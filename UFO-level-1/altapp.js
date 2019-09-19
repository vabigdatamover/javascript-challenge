// Filter Button Variable
var button = d3.select("#filter-btn");
//Input Field 1 for Date Time Variable
var inputField1 = d3.select("#datetime");
//TBODY in HTML
var tbody = d3.select("tbody");
//Reset Buttom Variable
var resetbtn = d3.select("#reset-btn");
//Column Variable
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
//Populate Table
var populate = (dataInput) => {

  dataInput.forEach(ufo_sightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo_sightings[column])
    )
  });
}

//Populate table
populate(data);

// Filter tables with click
button.on("click", () => {
  d3.event.preventDefault();
  var inputDate = inputField1.property("value").trim();
  // Filter by field matching input value
  var filterDate = data.filter(data => data.datetime === inputDate);
  console.log(filterDate)
  var filterData = data.filter(data => data.datetime === inputDate);
  console.log(filterData)

  // Add Data to table
  tbody.html("");
  //Filter Data and Filter Date response
  let response = {
    filterData, filterDate
  }

  if (response.filterData.length !== 0) {
    populate(filterData);
  }
    else if (response.filterData.length === 0 && ((response.filterDate.length !== 0))){
      populate(filterDate);
  
    }
    else {
      tbody.append("tr").append("td").text("Encounter results not found!"); 
    }
})
//Reset Button Code
resetbtn.on("click", () => {
  tbody.html("");
  populate(data)
  console.log("Table reset")
})