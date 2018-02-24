
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
  
      function compareNumeric(a, b) 
      {
        if (a > b) return 1;
        if (a < b) return -1;
      }
      var sorted=[];
        for (var i=0; i<indices.length;i++)
      
          {
  
            sorted[i]=this.array[indices[i]];
      
          }
          sorted.sort(compareNumeric);	
        indices.sort(compareNumeric);
          for (var i=0; i<indices.length;i++)
          {
            this.array[indices[i]]=sorted[i];
          }

        return this.array;

        }

    setComparator(compareFunction) {

    }
  
  }

  module.exports = Sorter;