import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Spirit } from '../../styles/spirit-styles';
import Logo from './Logo';
import DropdownLink from './DropdownLink';
import Icon from './Icon';
import Search from './search/HomeSearch';
import MobileNav from './MobileNav';

const NavBar = ({ theme }) => {
	// Theme definitions
	const themeClasses = {
		dark: {
			menuItem: `middarkgrey-l1 link hover-blue nowrap`,
			logoTheme: `light`,
			docsTitleClass: `blue`,
			searchBox: `bg-darkgrey-searchbar middarkgrey dark-placeholder`,
			icon: `fill-midlightgrey`,
		},
		light: {
			menuItem: Spirit.link.white,
			logoTheme: `dark`,
			docsTitleClass: `white`,
			searchBox: `bg-white-10 white white-placeholder`,
			icon: `fill-white`,
		},
	};

	return (
		<nav
			className={`${
				Spirit.page.xl
			} flex flex-auto flex-nowrap items-center justify-between pt2 pb2`}
			data-cy="header-navigation"
		>
			<div className="flex items-center pt3 pb3 nudge-bottom--2 w-sidebar-l pr8">
				<Link to="/" className="nudge-top--3">
					<Logo theme="light" />
				</Link>
			</div>
			{/* navbar-container wrapper element and bottom padding is needed to hide the horizontal scrollbar on smaller screensizes */}
			<div className="navbar-container">
				<div className="dn flex-ns flex-auto items-center overflow-x-auto mr12 mr0-l ml5 ml0-l pb20">
					<DropdownLink>
						<DropdownLink.Item>
							{value => (
								<React.Fragment>
									<span
										className={`${
											themeClasses[theme].menuItem
										} nowrap f8 pa3 mr1 mr3-l nl3 ${
											value.selectedKey === 'guides' ? 'fw6 darkgrey' : 'fw3'
										}`}
										onMouseEnter={() => {
											value.handleKey('guides');
										}}
									>
										Guides
									</span>

									{value.selectedKey === 'guides' ? (
										<div
											className="dropdown-content"
											onMouseLeave={() => value.handleKey(null)}
										>
											<div
												className={`${
													Spirit.page.xl
												} pt2 pb2 grid-dropdown grid-dropdown-4`}
											>
												<div>
													<h2 className="f2 lh-h5 lh-h4-l fw6 ma0 pa0  mt0 mt2-ns darkgrey">
														Guides
													</h2>
													<p className="f5 lh-h5 lh-h4-l fw4 ma0 pa0 mt0 mt2-ns middarkgrey mb2">
														Discover how to integrate and adapt
														Appbaseio's technology into popular
														frameworks and platforms.
													</p>
												</div>
												<div>
													{/* <h2 className="f3 lh-h5 lh-h4-l fw6 ma0 pa0  mt0 mt2-ns middarkgrey mb2">
														Clients
													</h2> */}
													<Link
														to="/docs/gettingstarted/QuickStart/"
														className={`${
															themeClasses[theme].menuItem
														} nowrap f5 pa3 mr1 mr3-l nl3 dropdown-link`}
													>
														<Icon
															name="gettingStarted"
															className="dropdown-content-icon mr2"
														/>
														Getting Started
													</Link>
													<Link
														to="/docs/data/model"
														className={`${
															themeClasses[theme].menuItem
														} nowrap f5 pa3 mr1 mr3-l nl3 dropdown-link`}
													>
														<Icon
															name="importData"
															className="dropdown-content-icon mr2"
														/>
														Managing Data
													</Link>
												</div>
												<div>
													<Link
														to="/docs/search/Preview/"
														className={`${
															themeClasses[theme].menuItem
														} nowrap f5 pa3 mr1 mr3-l nl3 dropdown-link`}
													>
														<Icon
															name="searchRelevancy"
															className="dropdown-content-icon mr2"
														/>
														Search Relevancy
													</Link>
													<Link
														to="/docs/reactivesearch/v3/overview/quickstart/"
														className={`${
															themeClasses[theme].menuItem
														} nowrap f5 pa3 mr1 mr3-l nl3 dropdown-link`}
													>
														<Icon
															name="buildingUI"
															className="dropdown-content-icon mr2"
														/>
														Building UI
													</Link>
												</div>
												<div>
													<Link
														to="/docs/analytics/Overview"
														className={`${
															themeClasses[theme].menuItem
														} nowrap f5 pa3 mr1 mr3-l nl3 dropdown-link`}
													>
														<Icon
															name="analytics"
															className="dropdown-content-icon mr2"
														/>
														Actionable Analytics
													</Link>
													<Link
														to="/docs/security/Credentials"
														className={`${
															themeClasses[theme].menuItem
														} nowrap f5 pa3 mr1 mr3-l nl3 dropdown-link`}
													>
														<Icon
															name="security"
															className="dropdown-content-icon mr2"
														/>
														Security
													</Link>
												</div>
											</div>
										</div>
									) : null}
								</React.Fragment>
							)}
						</DropdownLink.Item>
						<DropdownLink.Item>
							{value => (
								<React.Fragment>
									<span
										className={`${
											themeClasses[theme].menuItem
										} nowrap f8 pa3 mr1 mr3-l nl3 ${
											value.selectedKey === 'api' ? 'fw6 darkgrey' : 'fw3'
										}`}
										onMouseEnter={() => {
											value.handleKey('api');
										}}
									>
										API Reference
									</span>

									{value.selectedKey === 'api' ? (
										<div
											className="dropdown-content"
											onMouseLeave={() => value.handleKey(null)}
										>
											<div
												className={`${
													Spirit.page.xl
												} pt2 pb2 grid-dropdown grid-dropdown-4`}
											>
												<div>
													<h2 className="f2 lh-h5 lh-h4-l fw6 ma0 pa0  mt0 mt2-ns darkgrey">
														API Reference
													</h2>
													<p className="f5 lh-h5 lh-h4-l fw4 ma0 pa0 mt0 mt2-ns middarkgrey mb2">
														Discover how to integrate and adapt
														Appbaseio's technology into popular
														frameworks and platforms.
													</p>
												</div>
												<div>
													<h2 className="f4 lh-h5 lh-h4-l fw6 ma0 pa0  mt0 mt2-ns darkgrey mb2">
														Reactivesearch
													</h2>
													<Link
														to="/docs/reactivesearch/v3/overview/quickstart/"
														className={`${
															themeClasses[theme].menuItem
														} nowrap f5 pa3 mr1 mr3-l nl3 dropdown-link`}
													>
														<img
															className="dropdown-content-icon mr2"
															src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
															alt="React"
															style={{
																filter:
																	'grayscale(1) saturate(1) hue-rotate(180deg)',
															}}
														/>
														React
													</Link>
													<Link
														to="/docs/reactivesearch/vue/overview/QuickStart/"
														className={`${
															themeClasses[theme].menuItem
														} nowrap f5 pa3 mr1 mr3-l nl3 dropdown-link`}
													>
														<Icon
															name="vue-bw"
															className="dropdown-content-icon mr2"
														/>
														Vue
													</Link>
													<Link
														to="/docs/reactivesearch/native/overview/QuickStart/"
														className={`${
															themeClasses[theme].menuItem
														} nowrap f5 pa3 mr1 mr3-l nl3 dropdown-link`}
													>
														<img
															className="dropdown-content-icon mr2"
															src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
															alt="React"
															style={{
																filter:
																	'grayscale(1) saturate(1) hue-rotate(180deg)',
															}}
														/>
														Native
													</Link>
												</div>
												<div>
													<h2 className="f4 lh-h5 lh-h4-l fw6 ma0 pa0  mt0 mt2-ns darkgrey mb2">
														Clients
													</h2>
													<Link
														to="/api/javascript/quickstart/"
														className={`${
															themeClasses[theme].menuItem
														} nowrap f5 pa3 mr1 mr3-l nl3 dropdown-link`}
													>
														<Icon
															name="js-bw"
															className="dropdown-content-icon mr2"
														/>
														Javascript
													</Link>
													<Link
														to="/api/go/quickstart/"
														className={`${
															themeClasses[theme].menuItem
														} nowrap f5 pa3 mr1 mr3-l nl3 dropdown-link`}
													>
														<Icon
															name="go-bw"
															className="dropdown-content-icon mr2"
														/>
														Golang
													</Link>
													<Link
														to="/api/rest/quickstart/"
														className={`${
															themeClasses[theme].menuItem
														} nowrap f5 pa3 mr1 mr3-l nl3 dropdown-link`}
													>
														<Icon
															name="rest"
															className="dropdown-content-icon mr2"
														/>
														REST
													</Link>
												</div>
												<div>
													<h2 className="f4 lh-h5 lh-h4-l fw6 ma0 pa0  mt0 mt2-ns darkgrey mb2">
														Examples
													</h2>
													<Link
														to="/api/examples/python/"
														className={`${
															themeClasses[theme].menuItem
														} nowrap f5 pa3 mr1 mr3-l nl3 dropdown-link`}
													>
														<Icon
															name="python-bw"
															className="dropdown-content-icon mr2"
														/>
														Python
													</Link>
													<Link
														to="/api/examples/js/"
														className={`${
															themeClasses[theme].menuItem
														} nowrap f5 pa3 mr1 mr3-l nl3 dropdown-link`}
													>
														<Icon
															name="js-bw"
															className="dropdown-content-icon mr2"
														/>
														Javascript
													</Link>
													<Link
														to="/api/examples/go/"
														className={`${
															themeClasses[theme].menuItem
														} nowrap f5 pa3 mr1 mr3-l nl3 dropdown-link`}
													>
														<Icon
															name="go-bw"
															className="dropdown-content-icon mr2"
														/>
														Go
													</Link>
													<Link
														to="/api/examples/php/"
														className={`${
															themeClasses[theme].menuItem
														} nowrap f5 pa3 mr1 mr3-l nl3 dropdown-link`}
													>
														<Icon
															name="php-bw"
															className="dropdown-content-icon mr2"
														/>
														PHP
													</Link>
												</div>
											</div>
										</div>
									) : null}
								</React.Fragment>
							)}
						</DropdownLink.Item>
					</DropdownLink>
				</div>
			</div>
			<div className="relative home-search-container">
				<Search />
			</div>
			<MobileNav />
		</nav>
	);
};

NavBar.defaultProps = {
	theme: `dark`,
};

NavBar.propTypes = {
	theme: PropTypes.oneOf([`dark`, `light`]),
};

export default NavBar;