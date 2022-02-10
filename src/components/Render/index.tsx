import  {useState} from "react";
import  styles from './style.module.css'

export const Render = () =>{
    const[n, setN] = useState(0);

    const handleMinus = () =>{
      setN(n-1);
    }
  
    const handleMore = () =>{
      setN(n + 1);
    }
    const handleReset = () =>{
      if(n > 0){
        setN(n - n);
      }
      if(n < 0){ 
        setN (0);
      }
    }
   
    return(
        
      <div className={styles.square}>
        <div className={styles.container}>
          <button onClick={handleMinus} className={styles.btnMenos}>-</button>
          <div className={styles.text}>{n}</div>
          <button onClick={handleMore} className={styles.btnMais}>+</button>
          <button onClick={handleReset} className={styles.reset}>reset</button>
        </div>
      </div>
    );
}