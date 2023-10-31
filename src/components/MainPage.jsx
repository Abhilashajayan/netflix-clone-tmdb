import React from 'react'
import Main from '../components/Main'
import Row from './Row'
import requests from '../constants/constants';

function Home() {
  return (
    <div>
        <Main/>
        <Row rowID="2" title="Popular" fetchURL={requests.requests.requestPopular} />
        <Row rowID="3" title="Trending" fetchURL={requests.requests.requestTrending} />
        <Row rowID="4" title="Top Rated" fetchURL={requests.requests.requestTopRated} />
        <Row rowID="5" title="Horror" fetchURL={requests.requests.requestHorror} />
    </div>
  )
}

export default Home;