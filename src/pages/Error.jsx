import {Link, useRouteError} from "react-router-dom";
// import "../assets/sass/pages/_error.scss";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <main className='error_container'>
                <h1>Erreur 404</h1>
                <h2>Oups ! La page que vous demandez n'existe pas.</h2>
                <Link to='/'>Retourner sur la page d’accueil</Link>
            </main>
        </>
    );
};
export default ErrorPage;
