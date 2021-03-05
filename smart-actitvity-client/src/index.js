
const appAdapter = new AppAdapter()
  
    


function start() {
        appAdapter.getActitvities();
        AppContainer.bindEventListeners();
        AppContainer.deleteActivity();
        appAdapter.getCategory();
    
    }

    start();


