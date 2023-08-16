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


L3
Different Datatype hoe to pass the props 
const dishes = ["Mashed potato", "Chicken curry", "Pasta", "wings", "Pizza"];
          Component
            <Main adjective="great" dishes={dishes} />

    function Main(props) {
        return (
          <section>
            <p>We serve the most {props.adjective} food around</p>
            <ul>
              {props.dishes.map((dish) => (
                <li>{dish}</li>
              ))}
            </ul>
          </section>

Same as the array but this time it is being accessed using props

Solution 
Unique Key property === id
Every child in list must have unique id. Why?
Becauce it might cause rendering issue when added to the arrat list
Couple of way 
i in 

Best is to do data trasnformation
Creating object
Things to keep in mind while doing dataObject
the arrow should point to the () insted of {}


 Keys help keep your data in sync as your application state changes over time,
it's really important to add them anytime you're trying to iterate over something and return a dynamic value