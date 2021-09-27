class Formatter {
  static capitalize(string){
    // capitalizes first letter
    return string[0].toUpperCase() + string.slice([1]);
  }
  static sanitize(string){
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    let map = string.split(' ').map(element => element.replace(/[^A-Za-z0-9-']+/g, ''));
    return map.join(' ');
  }
  static titleize(string){
    //capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
    let conditions = new Set(['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']);
    return Formatter.mapper(string, conditions);
  }
  static mapper(string, conditions){
    let map = string.split(' ').map(element => {
      if(conditions.has(element)){
        return element;
      } else {
        return Formatter.capitalize(element);
      }
    })
    map[0] = Formatter.capitalize(map[0]);
    return map.join(' ');
  }
}

//Test cases:
console.log(Formatter.capitalize( "a" )) //=> A
console.log(Formatter.capitalize( "alligator" )) // => Alligator
console.log(Formatter.capitalize( "BURSTING BALLOON" )) //=> BURSTING BALLOON
console.log('')

console.log(Formatter.sanitize( "c" )) //=> c
console.log(Formatter.sanitize( "!" )) //=>
console.log(Formatter.sanitize( "ca$@#tching cold" )) //=> catching cold
console.log(Formatter.sanitize( "Doin' Dishes" )) //=> Doin' Dishes
console.log(Formatter.sanitize( "Entert*ain(i{ng-Elephan^ts" )) //=> Entertaining-Elephants
console.log('')

console.log(Formatter.titleize( "getting giggles" )) //=> Getting Giggles
console.log(Formatter.titleize( "where the wild things are" )) //=> Where the Wild Things Are
console.log(Formatter.titleize( "chicken soup with rice and a few other songs" )) //=> Chicken Soup With Rice and a Few Other Songs
console.log(Formatter.titleize( "Maurice a an but of and for at by from end" )) //=> Maurice a an but of and for at by from End

console.log(Formatter.titleize( "a tale of two cities" )) //=> A Tale of Two Cities
console.log(Formatter.titleize( "in the night kitchen" )) //=> In the Night Kitchen