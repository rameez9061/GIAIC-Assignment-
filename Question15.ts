// let Guest_List3 = ["Khursheed", "Iqbal", "Hamza"];

// // using for of loop 

// for (let guests of Guest_List3) {

//     console.log("MR." + guests + " is invited for dinner at Rameez Home");
// }

// console.log("Mr.Hamza won't be able to make it at dinner");

// // guest added 
// let guest_removed = Guest_List3.pop();

// // guest removed 

// let guest_added = Guest_List3.push("Haris");

// console.log("Resending the Invitation to Guests ");

// for (let guests of Guest_List3) {
//     console.log("MR." + guests + " is invited for dinner at Rameez Home")
// }


// console.log(" I have just found a large Dinner Table ");


// // guest added 

// let another_Guest = Guest_List3.push("Hussnain");

// // guest added in the middle of the list 

// let Middel_Guest = Guest_List3.splice(2, 0, "Kamran")


// // Instead of append push is used in javascript to add element at the end of the array according to my Knowledge 

// let end_Guest = Guest_List3.push("Afridi")

// console.log(Guest_List3)

// for (let guests of Guest_List3) {

//     console.log("MR." + guests + " is invited for dinner at Rameez Home")
// }


// // Question no 16

// // shrinking guest list 

// console.log("I can invite only two people for the dinner ")

// let i = 0;
// while (Guest_List3.length > 2) {

//     let pop_name = Guest_List3.pop();
//     console.log("Mr." + pop_name + " , I am sorry for not able to invite you for dinner due to some reasons ");

//     i++;
// }

// // sending message to remaining guests 

// for (let guests of Guest_List3) {

//     console.log("MR." + guests + " is invited for dinner at Rameez Home")
// }

// while (Guest_List3.length > 0) {

//     Guest_List3.pop();
// }

// console.log(Guest_List3)




// // Question no 18 


// let Favourite_Places = ["Makkah","Switzerland","Madina","Norway","Swat"];

// console.log(Favourite_Places)

// // creating the copy of original using slice method and then sorting  

// let copy_array = Favourite_Places.slice().sort();

// console.log(copy_array)

// // the array is still in its original order \

// console.log(Favourite_Places)

// // reversing the original array using reverse method without changing the original list 


// let reversed_array = Favourite_Places.slice().reverse();

// console.log(reversed_array)

// // showing that array is still in its original order 

// console.log(Favourite_Places)

// // reversing the order of the original list 

// let reverse_original = Favourite_Places.reverse();
// console.log(Favourite_Places);

// // again reversing to get it back to normal

// let again_reverse_original = Favourite_Places.reverse();

// console.log(Favourite_Places);

// // sorting the original array in the alphabetical order 

// let sorting_original_array = Favourite_Places.sort();

// console.log(Favourite_Places);

// // re-sorting the original sorted array in reverse alphabetical order


// let reverse_sorted = Favourite_Places.sort((a,b)=>{

//      if(a<b) return 1;
//      if(a>b) return -1;
//      return 0;
// });

// console.log(reverse_sorted)



// // Question 19

// console.log(`${Guest_List3.length} numbers of guests are invited to the dinner`);


// // Question 20

// let list  = "Amazon,Mount-Everest,River-Nile,Nanga-Parbat";

// let create=(list)=>{
     
//     let array = list.split(",");
//     console.log(array)
// }

// create(list)


// // Question 21

// let Bio_data :{name: string, father_name: string, age: number} = {

//     name:"Rameez",
//     father_name:"Anwar Aziz",
//     age:22,
// }

// console.log(`My name is ${Bio_data.name} , my father name is ${Bio_data.father_name} and i am ${Bio_data.age} years old`);


// // Question 22

// let array = ["item1","item1","item3","item4","item5"];

// console.log(array[5]);

// console.log(array[4])


// // Question 23

// let number = 56;

// console.log(number==56);
// console.log(number>20);
// console.log(number>40);
// console.log(number<70);
// console.log(number%2==0);
// console.log(number==0);
// console.log(number<40);
// console.log(number>60);
// console.log(number%6==0);
// console.log(number<10);

