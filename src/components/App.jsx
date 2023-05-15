import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import users from '../components/user.json';
import data from '../components/data.json';
import friends from '../components/friends.json';
import transactions from '../components/transactions.json';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        backgroundColor: "#E7ECF2",
      }}
    >
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        stats={users.stats}
      />
      {/* <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
    </div>
  );
};
