// Class Section
class Section {
  constructor({items, renderer},selector){
    this._items = items;
    this._rendered = renderer;
    this._selector = document.querySelector(selector);
  }

  renderer(){
    this._items.forEach(item => {
      this.addItem(item)
    });
  }

  addItem(element){
    this._selector.append(element);
  }
}