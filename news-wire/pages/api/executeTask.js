import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id } = req.query;

    try {
      const response = await axios.post(`http://localhost:8000/fetch_feed/${id}`);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
