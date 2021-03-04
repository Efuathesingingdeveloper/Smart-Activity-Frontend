class Category {
    static all = [];
    static url = 'http://localhost:3000/'
    constructor(name){
        this.actitvities = [];
        this.categories = [];
        this.name = name;
    }

    byCategory(categoryName) {
        this.actitvities= AppContainer.actitvities.filter(actitvity => actitvity.category.name === categoryName)
        

    }

    
    displayActitvity = (event) =>{
        this.byCategory(event.target.id);
        const actNameArray = this.actitvities.map(act => act.name);
        const names = actNameArray
            .filter(s => s.length > 0)
            .map(name => name[0].toUpperCase() + name.substring(1))
            .join(", ");
        document.querySelector(".answer").innerHTML = names;
    }


}









































        // refreshActivityInner(name) {
        //     this.byCategory(name);
        //     const actNameArray = this.actitvities
        //     const names = actNameArray
        //         .filter(s => s.length > 0)
        //         .map(name => name[0].toUpperCase() + name.substring(1))
        //         .join(", ");
        //     document.querySelector(".answer").innerHTML = names;
        // }
    