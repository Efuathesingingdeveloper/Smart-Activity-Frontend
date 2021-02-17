class AppContainer {
    static actitvities = [];
    static categories = [];
    url = "http://localhost:3000";
    
    static smartActitvity= {};
    
    static bindEventListeners() {
        const button = document.getElementById("createSmartActivity");
        button.addEventListener("click",() => this.generateSmartActitvity())
        
        
        
        const newActitvityForm = document.getElementById('newActitvity')
        newActitvityForm.addEventListener('submit', (even) => AppAdapter.createActitvity(even));
    };
    
    static generateSmartActitvity(){

    const randomActitvities = this.genrateRandomActitvities();
    new SmartActivity(randomActitvities)
    // AppAdapter.deleteActitvities(randomActitvities)
   this.renderSmartActitvity();

}
static genrateRandomActitvities(){
    let randomActitvities = [];
    AppContainer.categories.forEach(category =>{
        randomActitvities.push(Actitvity.bycategory(category.name)[Math.floor(Math.random()*Actitvity.bycategory(category.name).length)])   
    });
    // debugger
    return randomActitvities;
    

}
 static renderSmartActitvity(){
    const smartActitvity = document.getElementById('smartActitvity') 
    // debugger
    AppContainer.smartActitvity.actitvities.forEach(actitvity =>{
        
 
    const actitvityDiv = document.createElement('div');
     smartActitvityDiv.innerHTML = "";
    actitviyDiv.innnerText = smartActivity.name
     smartActitvityDiv.appendChild(actitvityDiv);
  })
  }

static renderActitvities(){
    const psychologicalSelect = document.getElementById('psychological');
    const physicalSelect = document.getElementById('physical');
    const spiritualSelect = document.getElementById('spiritual');
    psychologicalSelect.innerHTML = " ";

    physicalSelect.innerHTML = " ";
    spiritualSelect.innerHTML = " ";
    debugger
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