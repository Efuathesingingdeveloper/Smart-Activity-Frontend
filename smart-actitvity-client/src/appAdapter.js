const seeCategoryActivities = document.querySelector(".buttonsforActivities")

class AppAdapter {
    url = "http://localhost:3000";
    getActitvities() {

        fetch(`${this.url}/actitvities`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept':'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            AppContainer.actitvities = [];
            AppContainer.categories = [];
            data.forEach(actitvity =>{
                AppContainer.actitvities.push(new Actitvity(actitvity.id, actitvity.name, actitvity.category));
            // Category.actitvities.push(new Actitvity(actitvity.id, actitvity.name, actitvity.category)
                if (!AppContainer.categories.map(category => category.name).includes(actitvity.category.name)) {
                    AppContainer.categories.push(new Category(actitvity.category.name));
                }
        });
        })

    };
    
   createActitvity(event){
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
            //    AppContainer.renderActitvities()
           
            })
            .catch(err => console.log(err));
    }

    getCategory(){
        fetch(`http://localhost:3000/categories`)
        .then(resp => resp.json())
        .then(data => {

            data.forEach( cat => {
                const newCat = new Category(cat.name);
                Category.all.push(newCat);
                seeCategoryActivities.querySelector("#" + newCat.name).addEventListener("click", newCat.displayActitvity);
            })
    })
    }
        
    updateCategory(event) {
        let idx = event.target.children[2].options.selectedIndex;
        let name = event.target.children[2].options[idx].value.toLowerCase();
        
        this.getActitvities();
       
        let upd = Category.all.find(cat => cat.name === name);
       
        upd.refreshActivities(name);
    }

}
