import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import PostEdit from './components/PostEdit';
import UserList from './components/UserList';
import UserCreate from './components/UserCreate';
import UserEdit from './components/UserEdit';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';

const Dashboard = () => <div>Hello, welcome to the admin panel!</div>;

function App() {
  return (
    <Admin dashboard={Dashboard} dataProvider={restProvider('http://localhost:3000')}>
      <Resource icon={BookIcon} name="Posts" list={PostList} create={PostCreate} edit={PostEdit}/>
      <Resource icon={PersonIcon}  name="Users" list={UserList} create={UserCreate} edit={UserEdit}/>
    </Admin>
  );
}

export default App;
