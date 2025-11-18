import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Post from './models/Post.js';

dotenv.config();

await mongoose.connect(process.env.MONGODB_URI);
console.log('Connected to MongoDB');

let user = await User.findOne();
if (!user) {
  user = await User.create({ username: 'climateadmin', password: '123456' });
  console.log('Created user: climateadmin');
}

const climatePosts = [
  {
    title: "How Bitcoin Mining is Heating the Planet Ì¥•",
    content: `Bitcoin's proof-of-work consumes more electricity annually than the entire country of Argentina. A single transaction uses as much energy as an average U.S. household in 20 days. New solutions like proof-of-stake (Ethereum 2.0) reduced energy use by 99.95%. The crypto industry must transition faster to avoid climate catastrophe.`,
  },
  {
    title: "AI's Hidden Carbon Footprint is Exploding",
    content: `Training a single large language model like GPT-4 emits as much CO‚ÇÇ as five cars over their entire lifetime ‚Äî including manufacturing. Data centers running 24/7 AI workloads now consume 2-3% of global electricity, expected to reach 8% by 2030. Green AI and efficient algorithms are urgently needed.`,
  },
  {
    title: "The Dark Side of Fast Fashion Apps & E-commerce",
    content: `Shein adds 6,000 new styles daily ‚Äî most worn once and discarded. Ultra-fast fashion fueled by recommendation algorithms has doubled clothing production since 2000 while garment lifespan halved. Returns alone generate millions of tons of emissions yearly.`,
  },
  {
    title: "Good Tech: How Satellites & IoT Are Fighting Climate Change Ìºç",
    content: `Satellite imagery now detects methane leaks in real-time. Smart grids reduce energy waste by 15%. Precision agriculture using drones and sensors cuts fertilizer use by 40%, preventing massive nitrous oxide emissions. Technology isn't only the problem ‚Äî it's also becoming the solution.`,
  },
  {
    title: "Your Smartphone's Dirty Secret",
    content: `70% of a phone's lifetime emissions happen during manufacturing ‚Äî mining rare earth metals in Congo and refining them in China. Planned obsolescence and "unrepairable" designs mean the average phone lasts only 2.5 years. Right-to-repair laws and modular phones (like Fairphone) are pushing back.`,
  },
  {
    title: "The Cloud Isn't Fluffy ‚Äî It's a Climate Beast ‚òÅÔ∏è",
    content: `Streaming HD video for 1 hour = driving a gasoline car for 1 mile in emissions. Data centers + transmission networks = 4% of global emissions (more than aviation). Companies shifting to renewable-powered regions (Sweden, Iceland) show the path forward.`,
  }
];

await Post.deleteMany({}); // clear old posts
for (let p of climatePosts) {
  await Post.create({ ...p, author: user._id });
}

console.log('Ìºø 6 climate-tech posts created successfully!');
console.log('Login with: climateadmin / 123456');
process.exit();
