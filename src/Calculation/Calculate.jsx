import { useState } from "react";

const Calculate = (handleSelectedCards) => {
    const [sum, setSum] = useState(0);
    const [remain, setRemain]=useState(20);
    const handleSelectedCards = () => {
        const newSum = sum + Card.time; 
        setSum(newSum);
    
        if (newSum > 20) {
          alert('Credit exceeded 20!');
         
        }
      };

      const handleSelectedCards= () =>{
        const newRemain =remain - Card.time;
        setRemain(newRemain);
          
        if(newRemain <0){
            alert('you finish all credit!')
        }
      }
    return (
        <div>
           <p>Total Credit Hour : {sum}</p> 
        </div>
    );
};

export default Calculate;