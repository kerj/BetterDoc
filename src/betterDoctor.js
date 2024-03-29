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
        $("#results").append(body.data[doc].profile['first_name'] + " " + body.data[doc].profile['last_name'] + '<br>' + '&nbsp' + 'Address: ' +  body.data[doc].practices[0].visit_address['street'] + '<br>' + '&nbsp' + 'Phone Number: ' + body.data[doc].practices[0].phones[0]['number'] + '<br>' + '&nbsp' + 'Accepting patients: ' + body.data[doc].practices[0]['accepts_new_patients'] + '<br>');
        if(body.data[doc].practices[0].website) {
          $("#results").append('-Website ' + body.data[doc].practices[0].website + '<br>');
        }
      });
    }, (error) => {
      $("#result").html("Server contact error");
    });
  }
}
