import { Button } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeedsStart } from '@/redux/feedsSlice';
import { fetchRSSTasksStart, scheduleTasksStart } from '@/redux/tasksSlice';

const Feedlist = () => {
    const dispatch = useDispatch();
    const { feeds, loading, error } = useSelector((state) => state.feeds);
    const { tasks, articles, loader, err } = useSelector((state) => state.tasks);
    
    useEffect(() => {
        dispatch(fetchFeedsStart()); 
      }, [dispatch]);

      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }

      if (loader) {
        return <div>Loading...</div>;
      }

      if (err) {
        return <div>Error: {error}</div>;
      }

      console.log(feeds)

  return (
    <div style={{width: '100%'}}>
        <h2>Feeds list</h2>
        {feeds.data && feeds.data.map((feed, key) => (<div key={key} style={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', padding: '10px 20px', border: '1px solid #e8e8e8', margin: '10px'}}>
        <div style={{minWidth: '500px'}}>{feed.name} <strong> url:</strong>{feed.url}</div>
        <div style={{display: 'flex', }}>
        <Button onClick={() => {
            dispatch(fetchRSSTasksStart(feed.id))
            console.log(JSON.parse(articles.data))
            }} style={{margin: '10px'}}>Fetch</Button>
        <Button onClick={() => {
            dispatch(scheduleTasksStart(feed.id))
            console.log(tasks)
            }} style={{margin: '10px'}}>Schedule</Button>
        <Button style={{margin: '10px'}}>Update</Button>
        <Button style={{margin: '10px'}}>Delete</Button>
        </div>
    </div>))}
    </div>
  )
}

export default Feedlist