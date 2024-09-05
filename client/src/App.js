import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/PostList';

const Dashboard = () => <div>Hello, welcome to the admin panel!</div>;

function App() {
  return (
    <Admin dashboard={Dashboard} dataProvider={restProvider('http://localhost:3000')}>
      <Resource name="posts" list={PostList} />
    </Admin>
  );
}

export default App;
