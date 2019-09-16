// Variables
var button = d3.select("#filter-btn");
var inputField1 = d3.select("#date");
//Bonus
var inputField2 = d3.select("#city");
var inputField3 = d3.select("#country");
var inputField4 = d3.select("#shape");
//End Bonus
var tbody = d3.select("tbody");
var resetbtn = d3.select("#reset-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

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
  //Bonus Add On
  var inputCity = inputField2.property("value").toLowerCase().trim();
  var inputState = inputField3.property("value").trim();
  var inputCountry = inputField4.property("value").trim();
  var inputShape = inputField5.property("value").trim();

  // Filter by field matching input value
  var filterDate = data.filter(data => data.date === inputDate);
  console.log(filterDate)
  //Add On Bonus
  var filterCity = data.filter(data => data.city === inputCity);
  console.log(filterCity)
  //var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity);
  //console.log(filterStata)
  var filterState = data.filter(data => data.state === inputState);
  console.log(filterState)
  //var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity && data.state === inputState);
  //console.log(filterData)
  var filterCountry = data.filter(data => data.country === inputCountry);
  console.log(filterCountry)
  //var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity && data.state === inputState);
  //console.log(filterData)
  var filterShape = data.filter(data => data.shape === inputShape);
  console.log(filterShape)
  var filterData = data.filter(data => data.date === inputDate && data.city === inputCity && data.state === inputState && data.country === inputCountry && data.shape === inputShape);
  console.log(filterData)
  

  // Add filtered sighting to table
  tbody.html("");

  let response = {
    filterData, filterCity, filterDate, filterState, filterCountry, filterShape
  }

  if (response.filterData.length !== 0) {
    populate(filterData);
  }
    //else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0))){
      //populate(filterCity) || populate(filterDate);
  
    //}

    else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0))){
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