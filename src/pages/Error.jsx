import {useRouteError} from "react-router-dom";
// import "../assets/sass/pages/_error.scss";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <main className="main error-page" id="error-page">
            <p className="error-page__404">404</p>
            <p className="error-page__text">
                Oups! La page que vous demandez n'existe pas
            </p>
            <a className="error-page__link " href="/">
                Retourner sur la page d'acceuil
            </a>

        </main>
    );
};
export default ErrorPage;
