import React, {useState} from 'react'
import './FlibbableCard.css'

function ProfileCard({children}) {
	const [flipped, setFlipped] = useState(false)
	return (
		<div className="profile-card">
			<div className={`card-inner ${flipped ? 'card-inner-flipped' : ''}`} onClick={()=>setFlipped(!flipped)}>
				<div className={`card-face card-front ${flipped ? 'back' :''}`}>
					{children[0]}
				</div>
				<div className={`card-face card-back ${!flipped ? 'back' :''}`}>
					{children[1]}
				</div>
			</div>
		</div>
	)
}

export default ProfileCard