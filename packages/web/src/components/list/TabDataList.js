import { hasCustomRenderer } from '@appbaseio/reactivecore/lib/utils/helper';
import types from '@appbaseio/reactivecore/lib/utils/types';
import { bool } from 'prop-types';
import React from 'react';
import { TabLink, TabContainer } from '../../styles/Tabs';
import { connect } from '../../utils';

import SingleDataList from './SingleDataList';

/**
 * Data property has two properties: label and value.
 * `label` is unique and is used for comparison.
 * `value` may not be unique and is used for querying the index.
 *
 * Data List componenents use label as value.
 * This is also added to the `isComponentUsesLabelAsValue` in reactivecore.
 */

const TabDataList = (props) => {
	const {
		renderItem, handleChange, data, value, total,
	} = props;
	const defaultItem = item =>
		`${item.label} ${props.showCount && item.count ? `(${item.count})` : ''}`;

	return (
		<TabContainer vertical={props.displayAsVertical}>
			{props.selectAllLabel ? (
				<TabLink
					onClick={() => handleChange(props.selectAllLabel)}
					selected={props.selectAllLabel === value}
					vertical={props.displayAsVertical}
					key={props.selectAllLabel}
				>
					{defaultItem({
						label: props.selectAllLabel,
						value: props.selectAllLabel,
						count: props.showCount && total,
					})}
				</TabLink>
			) : null}
			{data.map(item => (
				<TabLink
					onClick={() => handleChange(item.label)}
					selected={item.label === value}
					vertical={props.displayAsVertical}
					key={item.label}
				>
					{renderItem
						? renderItem(item.label, item.count, item.label === value)
						: defaultItem(item)}
				</TabLink>
			))}
		</TabContainer>
	);
};

const mapStateToProps = (state, props) => ({
	total: state.hits[props.componentId] && state.hits[props.componentId].total,
});

const ConnectedComponent = connect(
	mapStateToProps,
)(props => <TabDataList {...props} />);


const MainComponent = (props) => {
	if (hasCustomRenderer(props) || props.showRadio) {
		return <SingleDataList {...props} />;
	}
	return (
		<SingleDataList
			{...props}
			showSearch={props.showSearch}
			render={renderProps => (
				<ConnectedComponent {...renderProps} {...props} />
			)}
		/>
	);
};


MainComponent.defaultProps = {
	displayAsVertical: false,
	showRadio: false,
	showSearch: false,
};

MainComponent.propTypes = {
	displayAsVertical: bool,
	children: types.func,
	componentId: types.stringRequired,
	dataField: types.stringRequired,
	onChange: types.func,
	react: types.react,
	title: types.title,
	URLParams: types.bool,
	showCount: types.bool,
	showRadio: types.bool,
	showSearch: types.bool,
	render: types.func,
	renderItem: types.func,
	renderNoResults: types.func,
	index: types.string,
	endpoint: types.endpoint,
	selectAllLabel: types.string,
};

TabDataList.propTypes = {
	...MainComponent.propTypes,
};

export default MainComponent;
