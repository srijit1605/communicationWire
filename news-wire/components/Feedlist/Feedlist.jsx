import axios from 'axios'
import { Button } from 'bootstrap'
import React, { useState } from 'react'

const Feedlist = () => {
    const [feedList, setFeedList] = useState([])
    const getFeeds = async () => {
        try {
            const response = await axios.get('http://localhost:8000/fetch_all_entry/')
            console.log(response.data)
            setFeedList(response.data)
        } catch(e) {
            console.log(e)
        }
    }
  return (
    <div >
        <Button onClick={getFeeds}>Feeds list</Button>
    {feedList && feedList.map((feed, key) => (<div key={key}>
        {feed}
    </div>))}
    </div>
  )
}

export default Feedlist