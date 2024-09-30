import { useDispatch } from 'react-redux';
import { createFeed } from '@/redux/feedsSlice'; // Adjust path as necessary

const AddFeedForm = () => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createFeed({ url })); // Adjust payload as necessary
    setUrl(''); // Reset the input
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
      <button type="submit">Add Feed</button>
    </form>
  );
};

export default AddFeedForm;
