redux funziona in questa maniera
1) come prima cosa si definisce il reducer che ricordiamo permette di settare lo stato 
  (insert e update)

2) poi si definiscono le action che si possono fare sul reducer che in sostanza sono un wrapper 
   per il reducer

3) funzione che viene chiamata ogni volta che c'è una modifica allo store 
    const unsubscribe = store.subscribe(() =>{
      console.log("Updated", store.getState());
    })

    //per fare la unsubscribe basta quindi
    unsubscribe();

4) 