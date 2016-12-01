/**
 * Created by shoeab on 9/7/16.
 */
import React from "react";

export const Footer = (props)=> {
		return(
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<ul className="nav navbar-nav">
							<li><a href="#">{props.footerText}</a></li>
						</ul>
					</div>
				</div>
			</nav>
		);
};