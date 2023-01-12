


function popup()
{
    console.log("I am inside popup");
    let roots=document.getElementsByClassName('main_Container');
  let cn1=roots[0].getElementsByClassName('nav_bar')[0].getElementsByClassName('nav_ul')[0].getElementsByClassName('contact')[0].getElementsByTagName('p');
// console.log(cn1[0].getElementsByClassName('contact')[0].getElementsByTagName('p'));

 let styles= window.getComputedStyle(cn1[0]);
//  console.log(styles);
let val=styles.getPropertyValue("display");
 console.log(styles.getPropertyValue("display"));
// console.log(cn1[0].style.color);
    if(val === "none")
    {
        cn1[0].style.display='block';  
        // roots[0].style.opacity=0.5;
        // cn1[0].style.opacity=0.5;

    }
    else
    {
        cn1[0].style.display='none'; 
        // roots[0].style.opacity=1;
        // cn1[0].style.opacity=1;
    }
}