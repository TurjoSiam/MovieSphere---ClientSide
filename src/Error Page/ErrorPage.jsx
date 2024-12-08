import error from '../../src/assets/error.jpg'

const ErrorPage = () => {
    return (
        <div className="w-full flex justify-center my-12">
            <img src={error} alt="error page" />
        </div>
    );
};

export default ErrorPage;