import StageHome from '../../components/organisms/StageHome';
import TabsContents from '../../components/organisms/TabsContents';
import Layout from '../../components/templates/layout';

const Home = () => {
  return (
    <Layout>
      <StageHome />
      <TabsContents />
    </Layout>
  );
};

export default Home;
