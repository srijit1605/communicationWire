'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createFeedStart } from '@/redux/feedsSlice';
import styles from './AddFeedForm.module.css';
import { Button, Form } from 'react-bootstrap';

const AddFeedForm = () => {
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    url: '',
    name: '',
    newsCount: 10,
    author: '',
    categories: '',
    tags: '',
    delay: 5,
    autoDialer: false,
  });
  const [formError, setFormError] = useState('');

  // Handle input changes for each field
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const resetForm = () => {
    setFormData({
      url: '',
      name: '',
      newsCount: 10,
      author: '',
      categories: '',
      tags: '',
      delay: 5,
      autoDialer: false,
    });
    setFormError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.url) {
      setFormError('Feed URL is required');
      return;
    }

    const serialNumber = Math.floor(Math.random() * 1000);
    const feedName = formData.name || `test name ${serialNumber}`;
    const categoriesArray = formData.categories.split(',').map((category) => category.trim());
    const tagsArray = formData.tags.split(',').map((tag) => tag.trim());

    const newFeed = {
      name: feedName,
      url: formData.url,
      news_count: formData.newsCount || 10,
      auto_dialer: formData.autoDialer,
      author: formData.author,
      categories: categoriesArray,
      tags: tagsArray,
      delay: formData.delay || 5,
    };

    dispatch(createFeedStart(newFeed));
    console.log('newFeed', newFeed);
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add New Feed</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className={styles.inputLabel}>Feed URL *</Form.Label>
              <Form.Control
                type="text"
                name="url"
                placeholder="Enter feed URL"
                value={formData.url}
                className={styles.inputField}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className={styles.inputLabel}>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter feed name"
                className={styles.inputField}
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className={styles.inputLabel}>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                placeholder="Enter author name"
                className={styles.inputField}
                value={formData.author}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className={styles.inputLabel}>News Count</Form.Label>
              <Form.Control
                type="number"
                name="newsCount"
                value={formData.newsCount}
                className={styles.inputField}
                onChange={handleChange}
                min="1"
                defaultValue={10}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className={styles.inputLabel}>Categories</Form.Label>
              <Form.Control
                type="text"
                name="categories"
                placeholder="Enter categories (comma-separated)"
                className={styles.inputField}
                value={formData.categories}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className={styles.inputLabel}>Tags</Form.Label>
              <Form.Control
                type="text"
                name="tags"
                placeholder="Enter tags (comma-separated)"
                className={styles.inputField}
                value={formData.tags}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className={styles.inputLabel}>Delay (in minutes)</Form.Label>
              <Form.Control
                type="number"
                name="delay"
                value={formData.delay}
                onChange={handleChange}
                className={styles.inputField}
                min="1"
                defaultValue={5}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="autoDialer"
                className={styles.inputLabel}
                label=" Auto Dialer"
                checked={formData.autoDialer}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        {formError && <p className={styles.error}>{formError}</p>}

        <Button className={styles.submitButton} type="submit">
          Add Feed
        </Button>
      </Form>
    </div>
  );
};

export default AddFeedForm;
