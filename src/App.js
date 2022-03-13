import './App.css';
import CardItem from './components/CardItem';
import Model from './components/Model';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="text-center">
              <img src="./assets/images/cybersoft.png" alt="Card image" />
            </div>
            <div className="card-body">
              <h4 className="card-title text-center">
                CyberLearn - Học lập trình trực tuyến - Dự án thử đồ trực tuyến
                - Virtual Dressing Room
              </h4>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <NavBar></NavBar>
          <CardItem></CardItem>
        </div>
        <div className="col-md-4">
          <Model></Model>
        </div>
      </div>
    </div>

  );
}

export default App;
