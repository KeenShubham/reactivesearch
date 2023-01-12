import { ReactiveChart, TreeList } from '@appbaseio/reactivesearch';
import { Collapse } from 'antd';

const { Panel: CollapsePanel } = Collapse;

export default function CollapsibleFacets({ isMobile }) {
	return (
		<Collapse defaultActiveKey={['Category']}>
			<CollapsePanel header={<h3>Category</h3>} key="Category">
				<TreeList
					componentId="Category"
					showCount
					title="TreeList UI"
					showCheckbox
					mode="multiple"
					URLParams
					dataField={['class.keyword', 'subclass.keyword']}
				/>
			</CollapsePanel>
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
