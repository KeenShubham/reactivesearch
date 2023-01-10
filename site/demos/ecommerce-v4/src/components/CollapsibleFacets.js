import { TreeList } from '@appbaseio/reactivesearch';
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
		</Collapse>
	);
}
