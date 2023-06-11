Notes

conditional rendering - 
deciding what will be rendered based on what is in the state

for the ol in app.jsx
- each item in a list should have a key, makes everything more specific so that in the event that something is deleted (for example), the entire list does not need to be rerendered ... it only re renders the item that changes 

return 
<ol>
 {this.state.data.map((item) => {
    return <li key={item.quote}> {item.character} </li>
 })}
</ol>

- the map method always returns something, you cannot use a for loop because it does not return something 
you cannot use an if statement but you can use a ternary. It is necessary that something is returned. 

SPIN OPERATOR
{...this.state} - known as the spin operator ; passes everything that lives in the state under the name that it lives under in the state without having to type everything out

state = {name: "Russell", location: "UK", happy: "true" }; => you can pass all this info down to the component in {...this.state}, you can send it down as {this.props}

- this only works if you want to send everything down 

Raising Up the State 
- Data only flows in one direction in the react component and you cannot send data back up. The solution to this issue is a callback. The answer is to pass the callback (that is written in the parent) as a prop to the child. 
- Basically, the reference is sent from the parent (App.jsx) to the child (Data.jsx). When the reference is clicked(for example, it its an onClick fxn), it invokes the function that is in the parent. 
- How to raise the state?
--- Callbacks


Point to rememember: 
- Whenever you are sending data through a function in an event listener, you must wrap that function in a fat arrow function so that it doesn't occur instantly. If it is in the fat arrow function, it will not execute instantaneously.  