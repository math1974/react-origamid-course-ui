import React from 'react'

import UserContext from '../context/UserContext'

function UserHeader() {
	const userInfo = React.useContext(UserContext);

	return (
		<div>
			{userInfo.name}
		</div>
	)
}

export default UserHeader
