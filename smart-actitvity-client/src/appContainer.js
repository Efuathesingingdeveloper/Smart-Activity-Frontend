class AppContainer {
    static actitvities = [];
    static categories = [];
    url = "http://localhost:3000";
    static appAdapter = new AppAdapter();
    
    static smartActitvity= new SmartActitvity([]);
    
    static bindEventListeners() {
        const button = document.getElementById("createSmartActivity");
        button.addEventListener("click",() => this.generateSmartActitvity())

       
        const newActitvityForm = document.getElementById('newActitvity')
        newActitvityForm.addEventListener('submit', (even) => {
            AppContainer.appAdapter.createActitvity(even);           
             AppContainer.appAdapter.updateCategory(even);

        });
        
        
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
            actitvityDiv.innerHTML =`<div id = 'word-${actitvity.id}'> ${actitvity.name}<button id='act-${actitvity.id}'>delete Activity</button></div>`
                                    
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
                            
                            
                            
                            
                                    }
        function deleteActivityID(id){
            const deleteActivity = document.querySelector('#word-'+id)
             deleteActivity.remove()
            };
            // AppContainer.appAdapter.updateCategory(even);