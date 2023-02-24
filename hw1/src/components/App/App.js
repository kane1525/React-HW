import { useState } from 'react';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';

function App() {
  const [filters, setFilters] = useState({
    name: '',
    age: 'default',
  });
  const [modal, setModal] = useState({
    show: false,
    currentUser: null,
  });
  console.log(modal);

  return (
    <div className="App">
      {modal.show && <Modal setModal={setModal} info={modal} />}
      <Header
        onClick={() => {
          console.log('click on header');
        }}
        filters={filters}
        setFilters={setFilters}
      />
      <Main setModal={setModal} filters={filters} />
    </div>
  );
}

export default App;
