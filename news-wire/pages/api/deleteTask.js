import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.query;

    try {
      const response = await axios.delete(`http://localhost:8000/tasks/${id}`);
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Only DELETE requests are allowed' });
  }
}
