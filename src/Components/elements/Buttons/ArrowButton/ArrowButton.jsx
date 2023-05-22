import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ReactComponent as RightArrow } from "../../../../assets/img/right-arrow-no-circle.svg";

import "./ArrowButton.scss"

function ArrowButton({classesToAdd, arrowLocation, fillColor, onClick, text, url,...rest}) {
	const navigate = useNavigate()
	const clickToNavigate = () => {
		navigate(url,{state: {canGoBack: true}})
	}

	const getStyle = () => {
		switch (arrowLocation) {
			case 'up':
				return 'arrow-up';
			case 'down':
				return 'arrow-down';
			case 'left':
				return 'arrow-left';
			case 'hidden':
				return 'arrow-hidden';
			default:
				return "arrow-right";
		}
	}

	const styles = `${getStyle()} ${Array.isArray(classesToAdd) ? classesToAdd.join(" ") : classesToAdd || ''}`

	let onButtonClick = onClick ? onClick : url ? clickToNavigate : undefined
	return (
		<button className={styles} onClick={onButtonClick}>
          {text}
					<RightArrow
            className="svg-right"
            width={25}
            height={25}
            fill={fillColor}
          />
        </button>
	)
}

export default ArrowButton