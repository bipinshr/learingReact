<!-- React DOM function - Find that element and inject react code -->
L1.0
<script type="text/javascript">
    ReactDOM.render(
      //    Takes to argument: FIRST ARGUMENT element that we want to create
      // create h1 which does not take any property and contain Getting started
      React.createElement("h1", null, "Getting Started! Learning react from basics "),
      document.getElementById("root")
    );
    //    Second is where we want to put it  here it is root
  </script>




  L1.1
  
  <div id="root"></div>

    <script type="text/javascript">
      let heading = React.createElement(
        "h1",
        { style: { color: "blue" } },
        "Heyyyy Everyone!"
      );

      ReactDOM.render(
        heading,
        document.getElementById("root")
      );


      but now it gets confusing when addeding more element so we ther is too much if React.createElement 

      solution using JSX 
      but there is still problem 
       <script type="text/javascript">
      ReactDOM.render(
        <ul>
          <li>🤖</li>
          <li>🤠</li>
          <li>🌝</li>
        </ul>,
        document.getElementById("root")
      );

      Problem : Unexpected token 
      JSX is not supported in the broser


      FIX: babel 
      generate not supported but brouser and add the create Element TagBase syntax