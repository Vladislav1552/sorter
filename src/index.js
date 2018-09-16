
class Sorter {
  
    constructor() {
     
      this.array = [];
      this.length=0;

    }
    add(element) {
    this.length++;
    this.array.push(element);
    
    }
    at(index) {
      return this.array[index];
    }

  
    length() {
      return this.array.length;
    }
  
    toArray() {
      return this.array;
      
    }
    sort(indices) {
  indices.sort((a,b)=>a-b);
var j;
      
      var sorted=[];
        for (var i=0; i<indices.length;i++)
          {
            sorted[i]=this.array[indices[i]];
          }
          sorted.sort(this.compareFunction);	
          for (var i=0; i<indices.length;i++)
          {
            j= indices[i];
            this.array[j]=sorted[i];
          }


        }

    setComparator(compareFunction) {
      this.compareFunction = compareFunction;
    }
  
  }

  module.exports = Sorter;