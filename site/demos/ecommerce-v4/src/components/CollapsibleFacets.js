import { ReactiveChart } from '@appbaseio/reactivesearch';
import { Collapse } from 'antd';

const { Panel: CollapsePanel } = Collapse;

export default function CollapsibleFacets({ isMobile }) {
	return (
		<Collapse
			defaultActiveKey={
				isMobile ? ['Category'] : ['Category', 'Sub-Category', 'Ratings', 'Color']
			}
		>
			<CollapsePanel header={<h3>Category</h3>} key="Sub-Category">
				<ReactiveChart
					componentId="SubCategory"
					dataField="categoryPath.name.keyword"
					chartType="bar"
					type="term"
					URLParams
					useAsFilter
					loader="Loading..."
					setOption={(data) => {
						let options = ReactiveChart.getOption(data);
						let xAxis = options && options.xAxis;
						let yAxis = options && options.yAxis;
						xAxis.axisLabel = {
							rotate: 90,
							fontSize: 7,
						};
						yAxis.axisLabel = {
							fontSize: 8,
						};
						options.xAxis = xAxis;
						return options;
					}}
					react={{ and: ['Category', 'Color', 'SearchBox'] }}
				/>
			</CollapsePanel>
		</Collapse>
	);
}
