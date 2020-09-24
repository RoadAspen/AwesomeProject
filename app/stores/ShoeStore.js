import {observable, action, computed} from 'mobx';

class ShowStore {
  @observable shoes = [];

  @action addShoe = (shoe) => {
    this.shoes.push(shoe);
  };
  @computed get shoesCount() {
    return this.shoes.length;
  }
}

const shoeStore = new ShowStore();
console.log('shoeStore', shoeStore);
export default shoeStore;
