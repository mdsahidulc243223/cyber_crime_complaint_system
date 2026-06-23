import express from 'express';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import categoryRoutes from './routes/categoryRoute.js';
import productRoute from './routes/products/index.js';
import cartRoute from './routes/cartRoute.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();

app.use( express.json() );

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/category', categoryRoutes); 
app.use('/product', productRoute);
app.use('/cart', cartRoute);
app.use('/order', orderRoutes);

// handle not found routes
app.use((req, res, next) => {
    res.status(404).json({
        status: 'Not Found',
        message: 'The requested resource was not found'
    });
});

// global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'Error',
        message: 'Something went wrong!'
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
// zod library for validation can be added later as needed
// node --watch index.js to auto-restart server on changes
// Instead of try catch we can use safe parser