import { Layout, Question as QuestionContainer } from "containers";
import auth0 from "lib/auth0";

export default function Questions({ user, id }) {
    return (
        <Layout>
            <QuestionContainer user={ user } id={ id } />
        </Layout>
    );
}

export async function getServerSideProps({ req, res, params }) {
    const { id } = params; //Obtengo el id de la pregunta
    const session = await auth0.getSession(req);
    if (!session || !session.user) {
        res.writeHead(302, {
            Location: "/api/login",
        });
        res.end();
        return {};
    }

    return { props: { user: session.user, id } };
}
