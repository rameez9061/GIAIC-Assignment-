let Favourite_Places = ["Makkah","Switzerland","Madina","Norway","Swat"];

console.log(Favourite_Places)

// creating the copy of original using slice method and then sorting  

let copy_array = Favourite_Places.slice().sort();

console.log(copy_array)

// the array is still in its original order \

console.log(Favourite_Places)

// reversing the original array using reverse method without changing the original list 


let reversed_array = Favourite_Places.slice().reverse();

console.log(reversed_array)

// showing that array is still in its original order 

console.log(Favourite_Places)

// reversing the order of the original list 

let reverse_original = Favourite_Places.reverse();
console.log(Favourite_Places);

// again reversing to get it back to normal

let again_reverse_original = Favourite_Places.reverse();

console.log(Favourite_Places);

// sorting the original array in the alphabetical order 

let sorting_original_array = Favourite_Places.sort();

console.log(Favourite_Places);

// re-sorting the original sorted array in reverse alphabetical order


let reverse_sorted = Favourite_Places.sort((a,b)=>{

     if(a<b) return 1;
     if(a>b) return -1;
     return 0;
});

console.log(reverse_sorted)

export{}
