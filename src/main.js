import $ from 'jquery';
import { Doctor } from './betterDoctor.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let doctor = new Doctor();
  $("form").on("submit", (event) => {
    event.preventDefault();
    let search = $("#search").val();
    let searchType = $("#searchType").val();
    doctor.findMd(search, searchType);
  })
});
