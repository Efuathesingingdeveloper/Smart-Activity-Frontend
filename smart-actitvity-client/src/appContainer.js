class AppContainer {
    static actitvities = [];
    static categories = [];
    url = "http://localhost:3000";
    
    static smartActitvity= new SmartActitvity([]);
    
    static bindEventListeners() {
        const button = document.getElementById("createSmartActivity");
        button.addEventListener("click",() => this.generateSmartActitvity())

       
        const newActitvityForm = document.getElementById('newActitvity')
        newActitvityForm.addEventListener('submit', (even) => AppAdapter.createActitvity(even));
    };
    
    static generateSmartActitvity(){
        const randomActitvities = this.generateRandomActitvities();
        AppContainer.smartActitvity = new SmartActitvity(randomActitvities);
        this.renderSmartActitvity();
       
    }

    static byCategory(categoryName) {
        return AppContainer.actitvities.filter(actitvity => actitvity.category.name === categoryName)
    }

    static generateRandomActitvities(){
        let randomActitvities = [];
        AppContainer.categories.forEach(category =>{
           
            randomActitvities.push(AppContainer.byCategory(category.name)[Math.floor(Math.random()*100)%AppContainer.byCategory(category.name).length])   
        });
        return randomActitvities;
    }

    static renderSmartActitvity(){
        const smartActitvityDiv = document.getElementById('smartActivity') 
        AppContainer.smartActitvity.actitvities.forEach((actitvity, i) =>{
            let actitvityDiv = document.createElement('div');
            actitvityDiv.innerHTML = actitvity.name + `<div> <button id='act-${actitvity.id}'>delete Activity</button></div>`

          smartActitvityDiv.appendChild(actitvityDiv);
          
         
        })
    }
static deleteActivity(){

    const deleteActivity = document.getElementById("smartActivity");
        deleteActivity.addEventListener("click", function(e) {
e.preventDefault();
const id = e.target.id.split('act-')[1]
console.log(e.target)
    fetch(`http://localhost:3000/actitvities/${id}`, {
        method: 'DELETE',
        headers:{
            'Content-type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(data =>{
        console.log(data);
        deleteActivityID(data.id)
        
    })
})
}







static renderActitvities(){
    const psychologicalSelect = document.getElementById('psychological');
    const physicalSelect = document.getElementById('physical');
    const spiritualSelect = document.getElementById('spiritual');
    psychologicalSelect.innerHTML = " ";
    
    physicalSelect.innerHTML = " ";
    spiritualSelect.innerHTML = " ";
    
    
    AppContainer.actitvities.forEach(actitvity => {
        const option = document.createElement('option');
        option.innerText = actitvity.name;
        
        
        switch(actitvity.category.name) {
            case 'psychological':
                psychologicalSelect.appendChild(option);
                break;
                case 'spiritual':
                    spiritualSelect.appendChild(option);
                    break;
                    case 'physical':
                        physicalSelect.appendChild(option);
                        break;
                        default:
                        }
                        
                        
                    })
                    
                };
            }
   function deleteActivityID(id){
     const deleteActivity = document.querySelector('#act-'+id)
    deleteActivity.remove()
    };