'use client'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createFeedStart } from '@/redux/feedsSlice'; // Adjust path as necessary

const AddFeedForm = () => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [newsCount, setNewsCount] = useState(10);
  const [autoDialer, setAutoDialer] = useState(true);
  const [author, setAuthor] = useState('');
  const [categories, setCategories] = useState('');
  const [tags, setTags] = useState('');
  const [delay, setDelay] = useState(5);
  const [serialNumber, setSerialNumber] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const feedData = {
      name: name || `test name ${serialNumber}`,
      url,
      news_count: newsCount || 10,
      auto_dialer: autoDialer,
      author,
      categories: categories.split(',').map(cat => cat.trim()), // Split by comma and trim
      tags: tags.split(',').map(tag => tag.trim()), // Split by comma and trim
      delay: delay || 5
    };

    dispatch(createFeedStart(feedData));
    setSerialNumber(serialNumber + 1);
    setUrl('');
    setName('');
    setNewsCount(10);
    setAutoDialer(true);
    setAuthor('');
    setCategories('');
    setTags('');
    setDelay(5);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Feed URL"
        required
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Feed Name (Optional)"
      />
      <input
        type="number"
        value={newsCount}
        onChange={(e) => setNewsCount(e.target.value)}
        placeholder="News Count (Default: 10)"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <input
        type="text"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        placeholder="Categories (comma-separated)"
      />
      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (comma-separated)"
      />
      <input
        type="number"
        value={delay}
        onChange={(e) => setDelay(e.target.value)}
        placeholder="Delay (Default: 5)"
      />
      <label>
        Auto Dialer:
        <input
          type="checkbox"
          checked={autoDialer}
          onChange={(e) => setAutoDialer(e.target.checked)}
        />
      </label>
      <button type="submit">Add Feed</button>
    </form>
  );
};

export default AddFeedForm;
