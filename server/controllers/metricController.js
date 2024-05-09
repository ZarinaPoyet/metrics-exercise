import Metric from '../models/Metric.js';

export async function createMetric(req, res) {
  try {
    const metric = new Metric(req.body);
    await metric.save();
    res.status(201).send(metric);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Validation Error',
        errors: err.errors,
      });
    }
    console.error('Error creating metric', err);
    res
      .status(500)
      .json({ message: 'Internal server error', error: err.message });
  }
}

export async function getMetrics(req, res) {
  try {
    const metrics = await Metric.find();
    res.send(metrics);
  } catch (err) {
    console.error('Error fetching metrics', err);
    res
      .status(500)
      .json({ message: 'Internal server error', error: err.message });
  }
}
