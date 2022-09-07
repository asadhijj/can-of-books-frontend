import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import "./style/Welcome.css"
import LoginButton from './LoginButton';

class Welcome extends React.Component {
    render () {
        return (
            <div className='ohaayo'>
            <h2>Welcome to the best Book Shelf in the town!!</h2>
            <p>Please <LoginButton/> to add, look at your Favorite books and have the best book experience!</p>
            </div>

        )
    }
}

export default withAuth0(Welcome);