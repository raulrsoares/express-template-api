import './loadEnv';
import { config } from './config/config';
import app from './app';

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
