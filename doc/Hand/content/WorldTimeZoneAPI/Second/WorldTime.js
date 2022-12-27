import { useState, useEffect } from "react";
import { timezones } from "timezones.json";






// Is async await better than fetch?
//Fetch returns a promise which resolves to the request data or an error. Async await is the modern syntax to handle promises. Using async await, the code looks like synchronous code, which makes it easier for people to read and understand the code.

/**TIPS: Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. 
 * To use a function, you must define it somewhere in the scope from which you wish to call it.
**/
    //全域範疇（Global scope）
    const colors = [
        //"#b4b2b5",
        "#089916",
        //"#6ed2dc",
        "#09bd1b",
        "#0af021",
        "#78bf7f",
        "#02570a"
        ];



                //The name of the funtion//
async function getData(place){
    //區域範疇（Local scope）
    //The JavaScript statements that define the function, enclosed in curly brackets//
    //place = $("#pathId");
    const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=6618b41feb9843849ee42cf722fe85ba&location=${place}`

    const res = await fetch(url);  //Task:make it show up faster
          data = await res.json();
          time = data.datetime ;

    //document.getElementById("time").innerText= ${time} ${data.timezone_abbreviation} `;
    document.getElementById("time").innerText=`${place}'s time = ${time} ${data.timezone_abbreviation} `;

    console.log(data);
};

document.querySelectorAll(".allPaths").forEach(e=>{
// 參數 e 就是上面說的事件物件 (Event Object)
    e.addEventListener("mouseover",function(){
    //-----事件監聽-----鼠標經過------任何國家//
        window.onmousemove = function(j){
            
            x = j.clientX;
            y = j.clientY;
            document.getElementById("name").style.top = y-20+"px";
            document.getElementById("name").style.left = x+20+"px";
        }
       
        e.style.fill = colors[Math.floor(Math.random() * 5)];
        
        //e.style.fill=`rgba(200, 200, 200, ${Math.random() * 0.01})`;
        document.getElementById("namep").innerText = e.id;
        //------------------------------------------name of country 
        document.getElementById("name").style.opacity = 1;
    });

    e.addEventListener("mouseleave",function(){
        e.style.fill = "#ccc";
        document.getElementById("name").style.opacity = 0;
        document.getElementById("timeCont").style.opacity = 0;
    });
    //新增點擊事件，當點擊時顯示國家時區時間
    e.addEventListener("click", function(){
        window.onclick = function(i){
            getData(e.id);
            x = i.clientX;
            y = i.clientY;
            document.getElementById("timeCont").style.top = y-30+"px";
            document.getElementById("timeCont").style.left = x+30+"px";

            document.getElementById("timeCont").style.opacity = 1;
        }
       
        document.getElementById("name").style.opacity = 0;
        
        //getData(e.id);
    });

});


