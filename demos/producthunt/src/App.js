import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';

import Header from './components/Header';
import SearchFilters from './components/SearchFilters';
import Results from './components/Results';

import theme from './styles/theme';
import Container, { appContainer, resultsContainer } from './styles/Container';
import Flex, { FlexChild } from './styles/Flex';
import FilterContainer from './styles/FilterContainer';
import { ToggleButton } from './styles/Button';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
	}

	toggleFilters = () => {
		const { visible } = this.state;
		this.setState({
			visible: !visible,
		});
	};

	render() {
		return (
			<Container>
				<ReactiveBase
					app="ph-dataset"
					url="https://IkwcRqior:cda6348c-37c9-40f6-a144-de3cb18b57a0@arc-cluster-appbase-tryout-k8dsnj.searchbase.io"
					enableAppbase
					type="ph-dataset"
					theme={theme}
				>
					<Header />
					<Flex className={appContainer}>
						<FilterContainer visible={this.state.visible}>
							<SearchFilters />
						</FilterContainer>
						<FlexChild className={resultsContainer}>
							<Results />
						</FlexChild>
					</Flex>
					<ToggleButton onClick={this.toggleFilters}>
						{this.state.visible ? '😻 SHOW PRODUCTS' : '📂 SHOW FILTERS'}
					</ToggleButton>
				</ReactiveBase>
			</Container>
		);
	}
}

export default App;