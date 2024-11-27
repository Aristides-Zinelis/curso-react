import React, { useState } from 'react';
import './App.css';
import Toggle from './components/toggle/Toggle';
import Controled from './components/controled/Controled';
import UnControled from './components/unControled/UnControled';
import FormikForm from './components/FormikForm/FormikForm';
import { DataServiceProvider } from './context/Context.providers';
import dataService from './context/Dataservice';

function App() {
  const initialValue =  false;
  const initialFormikValue = true;
  const [selected, setSelected] = useState(initialValue);
  const [isFormik, setIsFormik] = useState(initialFormikValue);
  const handleToggle = (value: boolean) => {
    setSelected(value)
  }

  const handleFormik = (value: boolean) => {
    setIsFormik(value);
  }

  return (
    <div className="App">
      <DataServiceProvider value={dataService}>
      <Toggle
          label='Idioma'
          opcion1='Español'
          opcion2='Ingles'
          handleToggle={() => {}}
          defaultToggle={false}/>
      <Toggle
          label='Tipo de furmulario'
          opcion1='No coltrolado'
          opcion2='Controlado'
          handleToggle={handleToggle}
          defaultToggle={initialValue}/>
      {
        selected ?
          <UnControled/>
        :
        <div>
            <Toggle
              label='Formik'
              opcion1='Con Formik'
              opcion2='Controlado'
              handleToggle={handleFormik}
              defaultToggle={initialFormikValue}/>
            { isFormik ?
              <FormikForm/>
              :
              <Controled/>
            }
        </div>
      }
      </DataServiceProvider>
    </div>
  );
}

export default App;
