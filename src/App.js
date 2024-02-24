function App() {

  const city = { 
    name: "Tokyo",
    country: "Japan",
    population: 14000000,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg"
  }

  const numbers = [1,14,23,56,72];

  return (
    <>
      <h1>It works!</h1>
      {/* import and include the "Test" component already created in the components folder */}

      {/* create a new component here named "HelloWorld" that simply prints out hello world in a h2*/}

      {/* create a second component (you can name it however you want to) that has a h3 and a <p> below that */}

      {/* create a "Greeter" component that prints out "Hello" then a name. it should receive the name as a prop! */}

      {/* create a "CityDetails" component that takes the city object above as props, and then displays its properties, including the image as an actual img*/}

      {/* map over the numbers array, create a "NumberDisplay" component dynamically. pass the number with the prop name "NumberDisplay" actually requires */}
    </>
  );
}

export default App;
