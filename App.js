/*
*
*<div id="parent">
    <div id="child">
    <h1>hi</h1>
    </div>
</div>  
*
*/
/* OR
*
*<div id="parent">
    <div id="child">
    <h1>hi</h1>
    <h2>i am h2 tag </h2>
    </div>
</div>  
*OR
<div id="parent">
    <div id="child1">
    <h1>hi</h1>
    <h2>i am h2 tag </h2>
    </div>
     <div id="child2">
    <h1>hi</h1>
    <h2>i am h2 tag </h2>
    </div>
</div>  

*/

const parent = React.createElement("div",{id:"parent"},[ React.createElement("div",{
        id:"child1"
    }, [React.createElement("h1",{
        key:"1"
    },"hi"),React.createElement("h2",{
        key:"2"
    },"i am h2 tag")]),
 React.createElement("div",{
        id:"child2"
    }, [React.createElement("h1",{
        key:"3"
    },"hi"),React.createElement("h2",{
        key:"4"
    },"i am h2 tag")]),]
   
   
)
// const  heading = React.createElement("h1",{
//     id:"heading", xyz:"abc"
// },"Hello world from react")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent)