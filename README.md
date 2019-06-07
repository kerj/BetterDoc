# _Better Doctor_

#### _User can find nearby Portland Doctors, 6/7/19_

#### By _**Justin Kerntz**_

## Description

_This program will take in a search parameter from a user and call an api with it. Users can search based on symptoms or for specific doctors._

## Setup/Installation Requirements

* _Instructions assume you are using node package manager._
* _Clone repo to directory on your computer._
* _Using your favorite CLI open to the project directory._
* _Once in the project directory run npm i._
* _then, npm run start should open your web browser_

## Specs

| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| User inputs search term | "sore toe" | "foot doctor list" |
| User may search for Doctors by names  | "Dr.Octopus" | "Dr.Octopus, MD ###-#### @123 address St." |
| App handles empty returned API calls with a message to user | "Sore pretendix" | "no search criteria found" |
| App handles non 200 API returns gracefully  | "sore toe" | "server error please try again in a 2 minutes" |

Using api calls to return specific, relevant information to the user. The goal of this project is to utilize best practices throughout. Behind the scenes we are using promise chains to make async code synchronous to keep our API calls running smoothly. 


## Known Bugs

_NONE_

## Support and contact details

_email @ kerntzj@gmail.com_

## Technologies Used

_Shout outs to jest, istanbul, and eslint for a wonderful testing environments. es6 standards are used throughout. Bundling service provided by Webpack. Couldn't have done this without Babel. _

### License

*MIT*

Copyright (c) 2019 **_Justin Kerntz_**
