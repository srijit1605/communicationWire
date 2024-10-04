'use client'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createFeedStart } from '@/redux/feedsSlice';
import styles from './AddFeedForm.module.css';
import { Button, Form } from 'react-bootstrap';

const AddFeedForm = () => {
  // const dispatch = useDispatch();
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [newsCount, setNewsCount] = useState(10);
  const [author, setAuthor] = useState('');
  const [categories, setCategories] = useState('');
  const [tags, setTags] = useState('');
  const [delay, setDelay] = useState(5);
  const [autoDialer, setAutoDialer] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) {
      setFormError('Feed URL is required');
      return;
    }
    setFormError('');
    const serialNumber = Math.floor(Math.random() * 1000);
    const feedName = name || `test name ${serialNumber}`;
    const categoriesArray = categories.split(',').map((category) => category.trim());
    const tagsArray = tags.split(',').map((tag) => tag.trim());

    const newFeed = {
      name: feedName,
      url,
      news_count: newsCount || 10,
      auto_dialer: autoDialer,
      author,
      categories: categoriesArray,
      tags: tagsArray,
      delay: delay || 5,
    };

    // dispatch(createFeedStart(newFeed));
    console.log('newFeed', newFeed)
    setUrl('');
    setName('');
    setNewsCount(10);
    setAuthor('');
    setCategories('');
    setTags('');
    setDelay(5);
    setAutoDialer(false);
  };

  return (
    <div className={styles.formContainer}>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className={styles.inputLabel}>Feed URL *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter feed URL"
                value={url}
                className={styles.inputField}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className={styles.inputLabel}>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter feed name"
                className={styles.inputField}
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                placeholder="Enter author name"
                className={styles.inputField}
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className={styles.inputLabel}>News Count</Form.Label>
              <Form.Control
                type="number"
                value={newsCount}
                className={styles.inputField}
                onChange={(e) => setNewsCount(Number(e.target.value))}
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
                placeholder="Enter categories (comma-separated)"
                className={styles.inputField}
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className={styles.inputLabel}>Tags</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter tags (comma-separated)"
                className={styles.inputField}
                value={tags}
                onChange={(e) => setTags(e.target.value)}
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
                value={delay}
                onChange={(e) => setDelay(Number(e.target.value))}
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
                className={styles.inputLabel}
                label=" Auto Dialer"
                checked={autoDialer}
                onChange={(e) => setAutoDialer(e.target.checked)}
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
