import React from 'react';

import UsersList from '../components/UsersList';

const Users =() => {
    const USERS = [{id:'9990579707',name:'Sarthak Vashistha', image:'https://media-exp3.licdn.com/dms/image/C5103AQFeGcRbDhXpIg/profile-displayphoto-shrink_200_200/0/1516713032582?e=1629936000&v=beta&t=PDgl45aArP5jQ6pKJBk6WADUyxcxSevAQBNa8PYQF2g',places: 3
}
];

    return <UsersList items ={USERS} />;
}

export default Users;