import React from 'react';
import ReactDOM from 'react-dom';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import { ReactiveGoogleMap, ReactiveOpenStreetMap } from '@appbaseio/reactivemaps';
import Dropdown from '@appbaseio/reactivesearch/lib/components/shared/Dropdown';

import './index.css';

const providers = [
	{
		label: 'Google Map',
		value: 'googleMap',
	},
	{
		label: 'OpenStreet Map',
		value: 'openstreetMap',
	},
];
class App extends React.Component {
	constructor() {
		super();

		this.state = {
			mapProvider: providers[0],
		};

		this.setProvider = this.setProvider.bind(this);
	}

	setProvider(mapProvider) {
		this.setState({
			mapProvider,
		});
	}

	render() {
		const mapProps = {
			dataField: 'address.location',
			defaultMapStyle: 'Light Monochrome',
			title: 'Reactive Maps',
			searchAsMove: true,
			defaultZoom: 3,
			index: 'custom',
			showMarkerClusters: true,
			size: 50,
			onPopoverClick: (item) => (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'flex-start',
					}}
				>
					<div style={{ margin: '3px 0' }}>
						<b>Name: </b>
						{item.name}
					</div>
					<div style={{ margin: '3px 0' }}>
						<b>Room Type: </b>
						{item.room_type}
					</div>
					<div style={{ margin: '3px 0' }}>
						<b>Property Type: </b>
						{item.property_type}
					</div>
				</div>
			),
			showMapStyles: true,
			renderData: (result) => ({
				custom: (
					<div
						style={{
							background: 'dodgerblue',
							color: '#fff',
							paddingLeft: 5,
							paddingRight: 5,
							borderRadius: 3,
							padding: 10,
						}}
					>
						<i className="fas fa-user-friends" />
						&nbsp;{result.accommodates}
					</div>
				),
			}),
		};
		return (
			<ReactiveBase
				app="custom"
				url="https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/public-demo-skxjb/service/http_endpoint/incoming_webhook/reactivesearch"
				mongodb={{
					db: 'sample_airbnb',
					collection: 'listingsAndReviews',
				}}
				enableAppbase
			>
				<div>
					<h3>Search Properties</h3>

					<div
						style={{
							marginTop: '20px',
							marginBottom: '5px',
							fontSize: '1 rem',
							padding: '1rem',
						}}
					>
						<b>Select Map Provider</b>
					</div>
					<Dropdown
						items={providers}
						onChange={this.setProvider}
						selectedItem={this.state.mapProvider}
						keyField="label"
						returnsObject
					/>
					{this.state.mapProvider.value === 'googleMap' ? (
						<ReactiveGoogleMap
							style={{ height: '90vh', marginTop: '5px', padding: '1rem' }}
							componentId="googleMap"
							{...mapProps}
						/>
					) : (
						<ReactiveOpenStreetMap
							style={{ height: '90vh', marginTop: '5px', padding: '1rem' }}
							componentId="openstreetMap"
							{...mapProps}
						/>
					)}
				</div>
			</ReactiveBase>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));