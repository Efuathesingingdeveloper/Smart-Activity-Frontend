
class AppAdapter {
  static url = "http://localhost:3000";

  static getActitvities(){
   
    console.log()
fetch(`${this.url}/actitvities`)
.then(resp => resp.json())
.then(data => {


data.forEach(actitvity =>{
    AppContainer.actitvities.push(new Actitvity(actitvity.id, actitvity.name, actitvity.category)
    )

if (!AppContainer.categories.map(category => category.name).includes(actitvity.category.name)) {
AppContainer.categories.push(new Category(actitvity.category.name))
}
AppContainer.renderActitvities();
});

})

// .catch(err => alert(err))   
};

  static createActitvity(event){
   
        event.preventDefault();
        const data = event.target;
        fetch(`${this.url}/actitvities`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify({
                name: data.actitvity.value,
              category: data.children[2].value
            })
        })
            .then(resp => resp.json())
            .then(data => {   
                const {id, name, category} = data;
               new Actitvity(id, name, category)
               AppContainer.renderActitvities()
           
            })
            .catch(err => console.log(err));
    
      
    }

}
