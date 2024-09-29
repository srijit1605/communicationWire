import { useState, useEffect } from 'react';
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function NewsManager({ session }) {
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

  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Redirect to login if the user is not authenticated
  useEffect(() => {
    if (!session) {
      router.push('/api/auth/signin');
    }
  }, [session]);

  if (!session) {
    return <p>Redirecting...</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formattedData = {
      ...formData,
      categories: formData.categories.split(',').map((cat) => cat.trim()),
      tags: formData.tags.split(',').map((tag) => tag.trim()),
    };

    try {
      const response = await fetch('/api/createNews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Task created:', data);
        fetchFeeds();
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

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/getTasks');
      const data = await response.json();
      setTasks(data);
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

  const handleExecuteTask = async (taskId) => {
    try {
      const response = await fetch(`/api/executeTask?id=${taskId}`, { method: 'POST' });
      if (response.ok) {
        console.log('Task executed successfully');
        fetchTasks();
        fetchFeeds();
      } else {
        console.error('Error executing task');
      }
    } catch (error) {
      console.error('Error executing task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(`/api/deleteTask?id=${taskId}`, { method: 'DELETE' });
      if (response.ok) {
        console.log('Task deleted successfully');
        fetchTasks();
        fetchFeeds();
      } else {
        console.error('Error deleting task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchFeeds();
  }, []);

  return (
    <div>
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

      <h2>Task List</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>ID:</strong> {task.id} | <strong>Name:</strong> {task.name} | <strong>Status:</strong> {task.auto_dialer ? 'Scheduled' : 'Unscheduled'} | <strong>Delay:</strong> {task.delay} minutes
              <div>
                {!task.auto_dialer && (
                  <button onClick={() => handleExecuteTask(task.id)}>Execute Task</button>
                )}
                <button onClick={() => handleDeleteTask(task.id)}>Delete Task</button>
                <button>Edit Task</button>
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

// Guard the page using `getServerSideProps` to handle authentication
export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
