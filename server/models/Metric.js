import mongoose from 'mongoose';

const metricSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model('Metric', metricSchema);
