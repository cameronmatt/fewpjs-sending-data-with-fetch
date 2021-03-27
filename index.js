function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email
        }) //converts newUser object to text to be sent
        })
        .then(function(response){
            return response.json(); //handles resolution of the promise
        })
        .then(function(data){
            document.body.innerHTML=data['id']
        })
        .catch(function(error){ //catches any possible errors and displays in console log
            document.body.innerHTML=error.message;
        })
    }

