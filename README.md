# react-optimization-techniques
react optimization techniques from udemy maximilian course

# how does react work

it is a javascript library for building user interfaces, base on components
a component is a function that returns a JSX object

it does not care if those components contain html elements or any other thing such as functions

React gives information to ReactDOM so it decides how to update the UI

props, context, state => components => real DOM 

here:

props: data from a component
context: component-wide data
state: internal data

# virtual DOM

it determines how the component tree currently looks like, and the how it should look like
then reactDOM receives the difference and then manipulate the DOM

but 

re-evaluating the component != re-rendering the DOM

- Components are reevaluated when props, state or context changes
- then react executes component functions

then

- changes to the real DOM are only made for differences between evaluations

then this result goes to the DOM

# virtual DOM diffing

then here happens the reconciliation algorithm of react

