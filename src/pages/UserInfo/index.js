import React from 'react'

import './style.css';

import UserContext from '../../context/UserContext'
import UserHeader from '../../components/UserHeader';

function UserInfo() {
	const [data, setData] = React.useState({
		id: 2,
		name: 'Matheus',
		born: '20/07/2002',
		file: {
			thumbUrl: 'https://praxis-teste.s3.amazonaws.com/thumbnail/1633953682564.jpg?AWSAccessKeyId=AKIA6EFIVJ2KB7LA4HJE&Expires=1640184559&Signature=i%2FleS%2B%2B%2BL7KwmnneDRs2SHLE4Yk%3D'
		}
	});

    return (
        <>
			<UserContext.Provider value={data}>
				<UserHeader />
			</UserContext.Provider>
        </>
    )
}

export default UserInfo
