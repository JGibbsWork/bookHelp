import React from 'React';
import { Link, useHistory } from 'react-router-dom'

export default function Home () {
  let history = useHistory();
  return (
    <div className="homeMain">
      <div className="Title">
        <a>TRENDS</a>
      </div>
      <div className="topBox">
        <h5 className="boxTitle">About</h5>
        <br/>
        <div className="textBox">
          <p>Thanks for checking out Trends. This platform is used to simply and efficiently display trends on google search and comparing different locales. Want to know if people in New York search for "jazz" more or less than the average American? Want to see if Nashville is still the country music capitol? All of that is easy to navigate on this page.</p>
        </div>
      </div>
      <div className="midBox">
        <h5 className="boxTitle">The Feed</h5>
        <br/>
        <div className="textBox">
          <p>Check out our feed page to see previous searches made by visiors. From here you can see the city the trend is compared to and the state and national averages. If you click on any of the options in the legend of each chart you can toggle the results. If you want to see how Chicago compares only to the United States, simply toggle the state options off.</p>
        </div>
        <br/>
        <div className="searchBox">
          <p className="submit" onClick={()=>history.push('/feed')} >FEED</p>
        </div>
      </div>
      <div className="bottomBox">
        <h5 className="boxTitle">New Searches</h5>
        <br/>
        <div className="textBox">
          <p>Head over to our new search tab to do a new comparison. Use the drop down selector to choose your city and type your search term, we'll take care of the rest. This will return the search frequency and popularity of google users in the selected city, the city's state, and the country. The results will automatically return the past 12 months and display them in a handy little graph.</p>
        </div>
        <br/>
        <div className="searchBox">
          <p className="submit" onClick={()=>history.push('/post')}>New Search</p>
        </div>
      </div>
    </div>
  )
}