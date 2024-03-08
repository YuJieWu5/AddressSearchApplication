import './App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ValidationForm from './component/validationForm';
import SearchingForm from './assets/searhingForm';

function App() {
  
  return (
    <>
      <Tabs
        defaultActiveKey="validation"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="searching" title="Searching Form">
          <SearchingForm/>
        </Tab>
        <Tab eventKey="validation" title="Validation Form">
          <ValidationForm/>
        </Tab>
      </Tabs>
      
    </>

  );
}

export default App;
