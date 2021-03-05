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

    // refreshActivityInner(name) {
    //     this.byCategory(name);
    //     const actNameArray = this.actitvities
    //     const names = actNameArray
    //         .filter(s => s.length > 0)
    //         .map(name => name[0].toUpperCase() + name.substring(1))
    //         .join(", ");
    //     document.querySelector(".answer").innerHTML = names;
    // }

    displayActitvity = (event) =>{
        this.byCategory(event.target.id);
        const actNameArray = this.actitvities.map(act => act.name);
        const names = actNameArray
            .filter(s => s.length > 0)
            .map(name => name[0].toUpperCase() + name.substring(1))
            .join(", ");
        document.querySelector(".answer").innerHTML = names;
        
    }


    renderActitvities = (event) =>{
        event.preventDefault();
    const psychologicalButton = document.getElementById('psychological');
    const physicalButton = document.getElementById('physical');
    const spiritualButton = document.getElementById('spiritual');

    psychologicalButton.innerHTML = " ";
    physicalButton.innerHTML = " ";
    spiritualButton.innerHTML = " ";

    AppContainer.actitvities.forEach(actitvity => {
        const option = document.createElement('option');
        option.innerText = actitvity.name;
        
        
        switch(actitvity.category.name) {
            case 'psychological':
                psychologicalButton.appendChild(option);
                break;
                case 'spiritual':
                    spiritualButton.appendChild(option);
                    break;
                    case 'physical':
                        physicalButton.appendChild(option);
                        break;
                        default:
                        }
                        
                        
                    })
                    
                };
}



