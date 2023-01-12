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
			<CollapsePanel header={<h3>Color</h3>} key="Color">
				<ReactiveChart
					componentId="Color"
					dataField="color.keyword"
					chartType="pie"
					type="term"
					URLParams
					useAsFilter
					loader="Loading..."
					react={{ and: ['Category', 'SubCategory', 'SearchBox'] }}
				/>
			</CollapsePanel>
		</Collapse>
	);
}
