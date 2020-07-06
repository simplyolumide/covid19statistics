import React from 'react';
import classes from './Covidresult.module.css'
const covidresultdisplay = (props) => {
   return (
    <div className={classes.Wrapper}>

{/*{props.error && <small className={classes.Small}>Please enter a valid country starting with capital letter.</small>}*/}
{props.loading && <div className={classes.Loader} />}
           {props.responseObj.statusCode === 200 ?
               <div>
            <h3>Total Covid 19 statistics for <p><strong>{props.responseObj.data.location}  is:</strong></p></h3><hr></hr>
                  <h3>Recovered: <p><strong>{props.responseObj.data.recovered}</strong></p></h3><hr></hr>
                  <h3>Deaths:  <p><strong>{props.responseObj.data.deaths}</strong></p></h3><hr></hr>
                  <h3>Confirmed:  <p><strong>{props.responseObj.data.confirmed}</strong></p></h3><hr></hr>
     
               </div>
           : null
           }
       </div>
          )
        }
        export default covidresultdisplay;