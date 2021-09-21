import Count from './components/Count'
import ReduxCount from './components/redux_count'
import './App.less';
import {
  Button,
  Select,
  Switch
} from 'antd';
import {
  SyncOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.less'
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
function onChange (checked) {
  console.log(`checked`, checked);
}
function App() {
  return (
    <div className="App">
       <Button type="primary">Primary Button</Button>
       <SyncOutlined spin />
       <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled">
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Switch defaultChecked onChange={onChange} />
      <div>
        <Count></Count>
      </div>
      <div>
        <ReduxCount></ReduxCount>
      </div>
    </div>
  );
}

export default App;
