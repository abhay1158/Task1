// select tab1 button
const tab1=document.getElementById("tabBtn1");
// select tab2 button
const tab2=document.getElementById("tabBtn2");

// select content paragraph of tab1
const tabContent1=document.getElementById("tab1-content");
// select content paragraph of tab2
const tabContent2=document.getElementById("tab2-content");

//Add event listener for click event on tab1 button
tab1.addEventListener("click",function(event){
    tab2.style.backgroundColor="grey";
    tab1.style.backgroundColor="red";

    //display the tab1 content 
    tabContent1.style.display="block";
    // Hide tab2 content
    tabContent2.style.display="none";

    
    tab1.classList.add("active");
    //make tab2 is Inactive
    tab2.classList.remove("active");
});


//Add event listener for click event on tab2 button
tab2.addEventListener("click",function(event){
    tab2.style.backgroundColor="Red";
    tab1.style.backgroundColor="grey";

    tabContent1.style.display="none";
    tabContent2.style.display="block";

    //make tab1 Inactive
    tab1.classList.remove("active");
    tab2.classList.add("active");
});

//display tab1 by default
tab1.click();

console.log("Abhay");