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

4) installare thunk per potere dispatchare anche le action async 
    npm install redux-thunk

    vedi esempio qui sotto:

                export const login = (email, password) => async (dispatch) => {
                  dispatch({ type: "USER_LOGIN_REQUEST" });

                  try {
                    const data = await api.login(email, password);

                    dispatch({
                      type: "USER_LOGIN_SUCCESS",
                      payload: data
                    });
                  } catch (error) {
                    dispatch({
                      type: "USER_LOGIN_FAIL",
                      payload: error.message
                    });
                  }
                };
                👉 Senza thunk questo codice crasherebbe.

    oppure vedi la action fetchToDo