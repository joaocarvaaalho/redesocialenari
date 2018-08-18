import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const white = {
  color: '#fff'
};

const h1 = {
  color: '#bf0b0b',
  marginBottom: '50px'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <div className="row container">
            <div className="col-md-6">
              <div className="m-100 p-5 border-right border-white">
                <img src={logo} className="img-fluid"></img>
              </div>
            </div>
            <div className="col-md-6">
              <div className="view">
                <div className="flex-center center-block m-100">
                  <div className="card back">
                    <div className="card-body px-lg-7 ">
                      <form className="text-center" style={white}>
                        <h1 style={h1}><strong>Login</strong></h1>
                        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.</p>

                        <div className="md-form mt-3">
                          <input type="text" id="materialSubscriptionFormPasswords" className="form-control"></input>
                          <label for="materialSubscriptionFormPasswords">Name</label>
                        </div>

                        <div className="md-form">
                          <input type="email" id="materialSubscriptionFormEmail" className="form-control"></input>
                          <label for="materialSubscriptionFormEmail">E-mail</label>
                      </div>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="form-check-input" id="defaultLoginFormRemember"></input>
                            <label className="form-check-label" for="defaultLoginFormRemember">Me lembre</label>
                            <br></br>
                            <a href="">Esqueceu a senha?</a>
                          </div>
                      <button className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Sign in</button>
                       <p>Não é inscrito? <a href="">Cadastrar</a></p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
