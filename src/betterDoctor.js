export class Doctor{
  constructor(){
    this.name = {};
    this.contact = {};
    this.newPatints = false;
  }





  findMd(search, searchType){
    console.log("made it");
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
          console.log("status 200");
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
      $("#doctor").empty();
      console.log(searchType);
      if("type" === searchType){
        Object.keys(body.data).map((doc) => {
          $("#results").append(body.data[doc].profile['first_name'] + " " + body.data[doc].profile['last_name'] + '<br>' + '&nbsp' + 'Address: ' +  body.data[doc].practices[0].visit_address['street'] + '<br>' + '&nbsp' + 'Phone Number: ' + body.data[doc].practices[0].phones[0]['number'] + '<br>');
          console.log(body);
        });
      }else if("lastName" === searchType){
        Object.keys(body.data).map((doc) => {
          $("#results").append(body.data[doc].profile['first_name'] + " " + body.data[doc].profile['last_name'] + '<br>' + '&nbsp' + 'Address: ' +  body.data[doc].practices[0].visit_address['street'] + '<br>' + '&nbsp' + 'Phone Number: ' + body.data[doc].practices[0].phones[0]['number'] + '<br>');
        });
      }
    }, (error) => {
      console.log("error out");
    });
  }

}
