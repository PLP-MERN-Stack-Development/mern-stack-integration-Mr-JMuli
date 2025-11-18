import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Post from './models/Post.js';

dotenv.config();
await mongoose.connect(process.env.MONGODB_URI);

let user = await User.findOne() || await User.create({ username: 'climateadmin', password: '123456' });

const postsWithImages = [
  { title: "How Bitcoin Mining is Heating the Planet Ì¥•", content: "Bitcoin's proof-of-work consumes more electricity annually than the entire country of Argentina...", featuredImage: "https://ceepr.mit.edu/wp-content/uploads/2023/06/2023-11-fig-scaled.jpg" },
  { title: "AI's Hidden Carbon Footprint is Exploding", content: "Training a single large language model like GPT-4 emits as much CO‚ÇÇ as five cars...", featuredImage: "https://assets.aboutamazon.com/20/be/bd215460424f8c9cf5c648782c08/1920x1080-carbon-reduction-vf-2x.png" },
  { title: "The Dark Side of Fast Fashion Apps & E-commerce", content: "Shein adds 6,000 new styles daily ‚Äî most worn once and discarded...", featuredImage: "https://publicinterestnetwork.org/wp-content/uploads/2021/03/waste_is_out_of_fashion_shutterstock.jpg" },
  { title: "Good Tech: How Satellites & IoT Are Fighting Climate Change Ìºç", content: "Satellite imagery now detects methane leaks in real-time...", featuredImage: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/I4LGQNXVMVN3HC5CYFUMMKLJSU.jpg" },
  { title: "Your Smartphone's Dirty Secret", content: "70% of a phone's lifetime emissions happen during manufacturing...", featuredImage: "https://images.theconversation.com/files/233880/original/file-20180828-86144-6niftm.jpg" },
  { title: "The Cloud Isn't Fluffy ‚Äî It's a Climate Beast ‚òÅÔ∏è", content: "Streaming HD video for 1 hour = driving a gasoline car for 1 mile in emissions...", featuredImage: "https://cdn.prod.website-files.com/6059f5c31023d640c475b7db/62710ea978e2daa3d1c3b092_Cloud%20Computing%20Series-part1-emissions-datacentres.jpg" },
];

await Post.deleteMany({});
for (let p of postsWithImages) {
  await Post.create({ ...p, author: user._id });
}

console.log('Ìæâ 6 posts with stunning images created!');
process.exit();
