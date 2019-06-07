import $ from 'jquery';
import { Doctor } from './betterDoctor.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let test = new Doctor();
  console.log(test);
  $("#kingButton").on("click", () => {
    let value = "Toothache";
    setTimeout(()=>{
      let results = test.findMD(value);
      // $("#doctor").append(`${body}`);
    }, 5000);
  })
});
