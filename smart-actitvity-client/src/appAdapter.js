
class AppAdapter {
  static url = "http://localhost:3000";

  static getActitvities(){
   
    console.log()
fetch(`${this.url}/actitvities`)
.then(resp => resp.json())
.then(data => {


data.forEach(actitvity =>{
    new Actitvity(actitvity.id, actitvity.name, actitvity.category)

if (!AppContainer.categories.map(category => category.name).includes(actitvity.category.name)) {
new Category(actitvity.category.name)
}
});
AppContainer.renderActitvities();

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

// // static deleteActivities(actitvities) {
    
// //  actitvities.forEach(actitvity => {
// //      fetch(`${this.url}/actitvities${actitvity.id}`, {
// //      method: 'DELETE'

// //  })
// //  .then(resp => resp.json())
// //  .then(data => {console.log(data);
// //     Actitvity.delete(data.id)
// // AppContainer.renderActitvities();})
// //  .catch(err => alert(err))
// // })
// }
}
// a little change 