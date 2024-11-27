import React, {useState} from 'react';
import './App.css';
import Toggle from "./components/toggle/Toggle";
import UnControlled from "./components/UnControlled/UnControlled";
import Controlled from "./components/Controlled/Controlled";
import FormikForm from "./components/FormikForm/FormikForm";
import {DataServiceProvider} from "./context/Contexts.providers";
import dataService from "./context/DataService";

function App() {
    const initialValue = false;
    const [selected, setSelected] = useState(initialValue);

    const initialFormikValue = false;
    const [isFormik, setIsFormik] = useState(initialFormikValue);

    const handleToggle = (value: boolean) => {
        setSelected(value);
    }
    const handleFormik = (value: boolean) => {
        setIsFormik(value);
    }

  return (
    <div className="App">
        <DataServiceProvider value={dataService}>
            <Toggle
                label="Idioma"
                opcion1="Español"
                opcion2="Inglés"
                handleToggle={(value: boolean) => {}}
                defaultToggle={false}
            />

          <Toggle
              label="Tipo de formulario"
              opcion1="No controlado"
              opcion2="Controlado"
              handleToggle={handleToggle}
              defaultToggle={initialValue}
          />


            { selected ?
                <UnControlled />
                :
                <div>
                    <Toggle
                        label="Formik"
                        opcion1="Con Formik"
                        opcion2="Controlado"
                        handleToggle={handleFormik}
                        defaultToggle={initialFormikValue}
                    />
                    {
                        isFormik?
                            <FormikForm />
                            :
                            <Controlled />
                    }

                </div>
            }
        </DataServiceProvider>
    </div>
  );
}

export default App;
