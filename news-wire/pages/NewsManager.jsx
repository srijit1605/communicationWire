import { useState, useEffect } from 'react';

export default function NewsManager() {
  // State for the form data
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    news_count: 0,
    auto_dialer: false,
    author: '',
    categories: '',
    tags: '',
    delay: 0,
  });

  // State to manage tasks
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission to create a news entry and then a task
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formattedData = {
      ...formData,
      categories: formData.categories.split(',').map((cat) => cat.trim()), // Convert string to array
      tags: formData.tags.split(',').map((tag) => tag.trim()), // Convert string to array
    };

    try {
      // Step 1: Create the task
      const response = await fetch('/api/createNews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Task created:', data);
        fetchFeeds();
        // Step 2: After the task is created, fetch the updated task list
        fetchTasks();
      } else {
        console.error('Error creating task');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch the list of tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/getTasks');
      const data = await response.json();
    //   setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchFeeds = async () => {
    try {
      const response = await fetch('/api/getFeeds');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Handle manual task execution
  const handleExecuteTask = async (taskId) => {
    try {
      const response = await fetch(`/api/executeTask?id=${taskId}`, { method: 'POST' });
      if (response.ok) {
        console.log('Task executed successfully');
        fetchTasks(); // Refresh task list
        fetchFeeds();
      } else {
        console.error('Error executing task');
      }
    } catch (error) {
      console.error('Error executing task:', error);
    }
  };

  // Handle task deletion
  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(`/api/deleteTask?id=${taskId}`, { method: 'DELETE' });
      if (response.ok) {
        console.log('Task deleted successfully');
        fetchTasks(); // Refresh task list
        fetchFeeds();
      } else {
        console.error('Error deleting task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Fetch tasks when the component mounts
  useEffect(() => {
    fetchTasks();
    fetchFeeds();
  }, []);

  return (
    <div>
      {/* Form for creating task */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <h2>Create a Task</h2>
        <div>
          <input type="text" name="name" placeholder="Task Name" onChange={handleChange} required />
        </div>
        <div>
          <input type="text" name="url" placeholder="URL" onChange={handleChange} required />
        </div>
        <div>
          <input type="number" name="news_count" placeholder="News Count" onChange={handleChange} required />
        </div>
        <div>
          <input type="text" name="author" placeholder="Author" onChange={handleChange} required />
        </div>
        <div>
          <input type="text" name="categories" placeholder="Categories (comma separated)" onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="tags" placeholder="Tags (comma separated)" onChange={handleChange} />
        </div>
        <div>
          <input type="number" name="delay" placeholder="Delay (in minutes)" onChange={handleChange} required />
        </div>
        <div>
          <label>
            Auto Dialer:
            <input
              type="checkbox"
              name="auto_dialer"
              checked={formData.auto_dialer}
              onChange={(e) => setFormData({ ...formData, auto_dialer: e.target.checked })}
            />
          </label>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating Task...' : 'Create Task'}
        </button>
      </form>

      {/* Display the list of tasks */}
      <h2>Task List</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>ID:</strong> {task.id} | <strong>Name:</strong> {task.name} | <strong>Status:</strong> {task.auto_dialer ? 'Scheduled' : 'Unscheduled'} | <strong>Delay:</strong> {task.delay} minutes
              <div>
                {/* Only show manual execute button for unscheduled tasks */}
                {!task.auto_dialer && (
                  <button onClick={() => handleExecuteTask(task.id)}>Execute Task</button>
                )}
                <button onClick={() => handleDeleteTask(task.id)}>Delete Task</button>
                <button>Edit Task</button> {/* Placeholder for editing */}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
}
