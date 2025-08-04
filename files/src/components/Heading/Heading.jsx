import React from "react"
import "./Heading.css"

class Heading extends React.Component {

	render(){

			if(this.props.level === "h1") {
				return(
					<>
						<div className="page__title-wrapper">
							<h1 className="page__title">{this.props.text}</h1>
						</div>
					</>
				)
			}
	}
}

export default Heading