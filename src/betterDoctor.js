export class Doctor{
  constructor(){
    this.name = {};
    this.contact = {};
    this.newPatints = false;
  }

  findMD(search){
    let body;
    let promise = new Promise((resolve,reject)=> {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${search}&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.exports.apikey}`
      request.onload = () =>{
        if(request.status === 200){
          resolve(request.response);
          console.log(request);
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
      $("#doctor").append(body.data[0].profile['first_name']);
      // Object.keys(body.data.practices.name);
    }, (error) => {
      console.log("error out");
    });
  }

}
