//import { Layout, Questions as QuestionsContainer } from "containers";
import auth0 from "../../lib/auth0";

export default function Questions({ user }) {
  return (
    <Layout>
      <QuestionsContainer user={user}/>
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req);

  if (!session || !session.user) {
    res.writeHead(302, {
      Location: "/api/login",
    });
    res.end();
    return {};
  }

  return { props: { user: session.user } };
}
