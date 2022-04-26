import app from './src/app.js'
import 'dotenv/config'

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server initialized in http://localhost:${port}`);
});