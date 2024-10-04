import axios from 'axios'
import { Button } from 'react-bootstrap'
import React, { useState } from 'react'

const Feedlist = () => {
    const [feedList, setFeedList] = useState([])
    const getFeeds = async () => {
        try {
            const response = await axios.get('http://localhost:8000/fetch_all_entry/')
            console.log(response.data)
            setFeedList(response.data.data)
        } catch(e) {
            console.log(e)
        }
    }
  return (
    <div style={{width: '100%'}}>
        <Button onClick={getFeeds}>Feeds list</Button>
    {feedList && feedList.map((feed, key) => (<div key={key} style={{display: 'flex', justifyContinent: 'space-between'}}>
        <div>{feed}</div>
        <div style={{display: 'flex', }}>
        <Button>Fetch</Button>
        <Button>Schedule</Button>
        <Button>Update</Button>
        <Button>Delete</Button>
        </div>
    </div>))}
    </div>
  )
}

export default Feedlist