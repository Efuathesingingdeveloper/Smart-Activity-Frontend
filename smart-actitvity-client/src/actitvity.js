class Actitvity {
    constructor(id, name, category){
        this.name = name;
        this.name = name;
        this.category = category;
        this.id = id;

    }
    
    
    static delete(actitvityId) {

        AppContainer.actitvities = AppContainer.actitvities.filter(actitvity => parseInt(actitvityId) !== actitvity.id)
    }
    static byCategory(categoryName) {
        return AppContainer.actitvities.filter(actitvity => actitvity.category.name === categoryName)
    }
}