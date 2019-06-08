export class Doctor{
  constructor(){
    this.name = {};
    this.contact = {};
    this.newPatints = false;
  }

  findMd(search, searchType){
    let body;
    let promise = new Promise((resolve,reject)=> {
      let request = new XMLHttpRequest();
      let url;
      if("type" === searchType){
        url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${search}&&location=45.516%2C-122.679%2C%2020&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.exports.apikey}`
      }else if("lastName" === searchType){
        url = `https://api.betterdoctor.com/2016-03-01/doctors?last_name=${search}&&location=45.516%2C-122.679%2C%2020&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.exports.apikey}`
      }
      request.onload = () =>{
        if(request.status === 200){
          resolve(request.response);
        }else{
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then((response) => {
      body = JSON.parse(response);
      $("#results").empty();
      if(body.data.length === 0){
        $("#results").append("There are no results to display.")
      }

      Object.keys(body.data).map((doc) => {
        console.log(body.data[doc].practices.length);
        console.log(body.data[doc]);
        if(body.data[doc].practices.length > 1){
          let officeLocations = body.data[doc].practices
          setTimeout(() => {
            for (let i = 0; i <= officeLocations.length -1; i++) {
              if(officeLocations[i]['location_slug'] === 'or-portland'){
                officeLocations.forEach((i) => {
                  
                })
                $("#results").append(body.data[doc].profile['first_name'] + " " + body.data[doc].profile['last_name'] + '<br>' + '&nbsp' + 'Address: ' +  body.data[doc].practices[i].visit_address['street'] + '<br>' + '&nbsp' + 'Phone Number: ' + body.data[doc].practices[i].phones[i]['number'] + '<br>' + '&nbsp' + 'Accepting patients: ' + body.data[doc].practices[i]['accepts_new_patients'] + '<br>' + '<br>');
                if(body.data[doc].practices[i].website) {
                  $("#results").append('-Website ' + body.data[doc].practices[i].website + '<br>' + '<br');
                }
              }
            }
          }, 1000)
        }
      });
    }, (error) => {
      $("#result").html("Server contact error");
    });
  }
}
