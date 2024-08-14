import { useState,useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  const  [themeMode,seThemeMode] = useState("light");

  const lightTheme = ()=>{
    seThemeMode('light');
  }
  const darkTheme = ()=>{
    seThemeMode('dark');
  }
  // actual change in theme 

  useEffect(() => {

    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(themeMode);  
  },[themeMode])

  
  return (

    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
