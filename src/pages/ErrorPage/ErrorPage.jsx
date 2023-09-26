import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center my-6 gap-3'>
            <img className='object-center' src="https://i.ibb.co/k0KXXrR/404-page-cover.jpg" alt="" />
            <Link to='/'> <button className='bg-red-500 text-white p-1 rounded-md'>Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;