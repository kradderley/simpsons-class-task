Notes

{...this.state} - known as the spin operator ; passes everything that lives in the state under the name that it lives under in the state without having to type everything out
- this only works if you want to send everything down 

Raising Up the State 
- Data only flows in one direction in the react component and you cannot send data back up. The solition to this issue is a callback. The answer is to pass the callback (that is written in the parent) as a prop to the child. 
- Basically, the reference is sent from the parent (App.jsx) to the child (Data.jsx). When the reference is clicked(for example, it its an onClick fxn), it invokes the function that is in the parent. 
- How to raise the state?
--- Callbacks

What is the purpose of adding the key? 

Point to rememember: 
- Whenever you are sending data through a function in an event listener, you must wrap that function in a fat arrow function so that it doesn't occur instantly. If it is in the fat arrow function, it will not execute instantaneously.  