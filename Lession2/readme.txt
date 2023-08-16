Component is just a function that returns some JSX.
 It returns a bit of our UI and then we can use the ReactDOM.render function to render that component using this JSX syntax.
Component Builting block 
Now, with JSX, we can, in addition to creating these HTML elements, we can also render components.
Creating a component:
We want to use a capital letter and we also want to create this as a function. 
<Header />
 <Main />

React always want to render single component so if more that two in single it gives error so can wrap in div

but the practice is to create componet App and we render App


L2: Dynamic property
props 
Grab them from the props objects JXS expression
function Header(props) {
        return (
          <header>
            <h1>{props.name} 

In the component just set the name  <Header name="Bipin" />


props object as little container where you can place information in for any component.
render the component = pass the properties into the component
And then within that component, we'll reference them in the props object with dot notation.