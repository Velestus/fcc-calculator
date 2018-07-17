# Electronic Calculator

![JavaScript Calculator](https://bborawski.pl/static/media/calc.jpg)

This project was bootstrapped with [Create React App].

![React logo](https://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png)

This is simple **Electronic Calculator** from [freeCodeCamp.org] projects - refactored so it uses ReactJS.

I have created several functions, each for numbers, decimal point, operations and equations. Due to the fact that _some buttons should have different onClick event_, I wasn't generating them with usage of `Array.prototype.map()`, but just simply hard coded each of them and assigned proper function to it.
Such solution gave me more flexibility with adapting each of those buttons' functionality.

Calculator keeps track of every operation and **_calculates it after_** hitting equation mark. Every button and display field are function components. They receive onClick functions and display values from parent element, which holds and modifies state of whole application.

Calculator prevents user from assigning multiple operations without providing values afterwards. Also, it prevents from adding several decimal points in single number.
I have achieved that easily with usage of `Array.prototype.some()` on array containing all characters.

For **proper assignment** of new state values I have used `this.setState(prevState => ({}))` syntax. 

OnClick functions take value from clicked buttons as parameter.

CSS used in this project _imitates pressing real buttons_. To acquire such effect I have used `box-shadow` and `transform: translateY()` properties on active buttons.

<!-- My Referrences -->
[Create React App]: https://github.com/facebookincubator/create-react-app
[freeCodeCamp.org]: https://www.freecodecamp.org/
