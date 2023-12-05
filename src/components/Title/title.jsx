import "./title.css"
import { useState, useEffect } from "react";
function Title(){


    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    }, []);
    const handleToggleLoaded = () => {
      setIsLoaded(!isLoaded);
      console.log("funciona")
    };
  
    return (
      <div className={`titlecontainer ${isLoaded ? 'loaded' : ''}`}>
        <div>
          <span><span>PL</span></span><span><span>ay</span></span>
          <span><span>Fu</span></span><span><span>L</span></span>
        </div>
        <small onClick={handleToggleLoaded}>Click to trigger</small>
      </div>
    );
  }
  
export default Title