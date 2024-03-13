import "./App.css";

//1. Create a React component to display the total calories burned during exercises.

const Exercise = ({ exercises }) => {
  const totalCalories = exercises.reduce(
    (acc, curr) => acc + curr.caloriesBurned,
    0,
  );
  return (
    <div>
      <h2>Total Calories Burned</h2>
      {totalCalories}
    </div>
  );
};

//2. Create a React component to display the total duration of songs with a rating above 3.9.

const Songs = ({ songs }) => {
  const totalDuration = songs.reduce((acc, curr) => {
    return curr.rating > 3.9 ? acc + curr.duration : acc;
  }, 0);
  return (
    <div>
      <h2>Total Duration of songs with ratings &gt 3.9</h2>
      {totalDuration}
    </div>
  );
};

//3. Given an array of objects representing books, write a React component to find and display all the details of the book titled "The Great Gatsby". Pass the data as props.

const Books = ({ books, title }) => {
  const bookDetails = books.find((book) => book.title === title);
  return (
    <div>
      <h2>Details of Book Titled: {title} </h2>
      <p>Author: {bookDetails.author}</p>
      <p>Genre: {bookDetails.genre}</p>
    </div>
  );
};
//4. Given an array of objects representing songs, write a React component to find and display all the details of the song titled "Bohemian Rhapsody". Pass the data as props.

const SongDetails = ({ songs, title }) => {
  const songDetails = songs.find((song) => song.title === title);
  return (
    <div>
      <h2>
        Details of the song titled : <i>"{title}"</i>
      </h2>
      <p>Artist: {songDetails.artist}</p>
      <p>Genre: {songDetails.genre}</p>
    </div>
  );
};

//5. Given an array of objects representing cities, write a React component to find and display the population of the city named "Paris". Pass the data as props.

const Cities = ({ cities, name }) => {
  const cityDetails = cities.find((city) => city.name === name);
  return (
    <div key={cityDetails.id}>
      <h2>Population of the city named {name}</h2>
      {cityDetails.population}
    </div>
  );
};

//6. Given an array of objects representing products, write a React component to find and display all the details of the product with ID 3. Pass the data as props.

const Product = ({ products, id }) => {
  const productDetails = products.find((product) => product.id === id);
  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {productDetails.name}</p>
      <p>Price: $ {productDetails.price}</p>
    </div>
  );
};

//7. Given an array of objects representing students, write a React component to find and display all the details (including marks of each subject) of the student "Charlie". Pass the data as props.
const Student = ({ students, name }) => {
  const studentDetails = students.find((student) => student.name === name);
  return (
    <div>
      <h2>
        Details of Student: <i>"{name}"</i>
      </h2>
      <p>Age: {studentDetails.age}</p>
      <h4>Grades</h4>
      <p>Maths: {studentDetails.grades.math}</p>
      <p>Science: {studentDetails.grades.science}</p>
      <p>English: {studentDetails.grades.english}</p>
    </div>
  );
};

//8. Given an array of objects representing orders, write a React component to find and display all the details of the order for customer "Alice Smith". Pass the data as props.

const Orders = ({ orders, name }) => {
  const { customer, totalAmount, products } = orders.find(
    (order) => order.customer === name,
  );

  const productsList = products.map((product) => (
    <p key={product.id}>
      Name: {product.name} - Quantity: {product.quantity}
    </p>
  ));

  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {customer}</p>
      <p>Total Amount: {totalAmount}</p>
      <h4>Products</h4>
      {productsList}
    </div>
  );
};

//9. Given an array of objects representing employees, write a React component to find and display all the details of the employee with ID 1. Pass the data as props.

const Employee = ({ employees, id }) => {
  const {
    name,
    position,
    department: { name: departmentName, location },
  } = employees.find((emp) => emp.id === id);

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {name}</p>
      <p>Position: {position}</p>
      <p>Department: {departmentName}</p>
      <p>Location: {location}</p>
    </div>
  );
};

//10. Write a React component to calculate and display the total number of items in stock.

const Store = ({ store }) => {
  const totalItems = store.categories.filter(
    (item) => item.itemDetail.inStock,
  ).length;

  return (
    <div>
      <h2>Item Details</h2>
      <p>Number of items in stock: {totalItems}</p>
    </div>
  );
};

export default function App() {
  const exercises = [
    { id: 1, name: "Running", caloriesBurned: 300 },
    { id: 2, name: "Cycling", caloriesBurned: 200 },
    { id: 3, name: "Swimming", caloriesBurned: 400 },
  ];
  const songs = [
    { id: 1, title: "Song A", duration: 180, rating: 4.2 },
    { id: 2, title: "Song B", duration: 210, rating: 3.8 },
    { id: 3, title: "Song C", duration: 150, rating: 4.5 },
  ];

  const songsObj = [
    {
      id: 1,
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      genre: "Rock",
    },
    { id: 2, title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { id: 3, title: "Rolling in the Deep", artist: "Adele", genre: "Pop" },
  ];

  const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
    },
    { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
    },
  ];

  const cities = [
    { id: 1, name: "New York", population: 8500000 },
    { id: 2, name: "Paris", population: 2200000 },
    { id: 3, name: "Tokyo", population: 3770000 },
  ];

  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Smartphone", price: 800 },
    { id: 3, name: "Headphones", price: 60 },
  ];

  const orders = [
    {
      id: 1,
      customer: "John Doe",
      totalAmount: 150,
      products: [
        { id: 101, name: "Widget", quantity: 2 },
        { id: 102, name: "Gadget", quantity: 1 },
      ],
    },
    {
      id: 2,
      customer: "Alice Smith",
      totalAmount: 200,
      products: [
        { id: 103, name: "Tool", quantity: 1 },
        { id: 104, name: "Device", quantity: 3 },
      ],
    },
    {
      id: 3,
      customer: "Bob Johnson",
      totalAmount: 100,
      products: [{ id: 105, name: "Accessory", quantity: 5 }],
    },
  ];

  const students = [
    {
      id: 1,
      name: "Alice",
      age: 20,
      grades: { math: 90, science: 85, english: 92 },
    },
    {
      id: 2,
      name: "Bob",
      age: 22,
      grades: { math: 78, science: 80, english: 85 },
    },
    {
      id: 3,
      name: "Charlie",
      age: 21,
      grades: { math: 95, science: 88, english: 94 },
    },
  ];

  const employees = [
    {
      id: 1,
      name: "Jane Doe",
      position: "Software Engineer",
      department: { name: "Engineering", location: "Building A" },
    },
    {
      id: 2,
      name: "Sam Smith",
      position: "Marketing Manager",
      department: { name: "Marketing", location: "Building B" },
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "HR Specialist",
      department: { name: "Human Resources", location: "Building C" },
    },
  ];

  const store = {
    name: "Tech Emporium",
    categories: [
      {
        id: 1,
        name: "Electronics",
        itemDetail: { id: 101, product: "Laptop", inStock: true },
      },
      {
        id: 2,
        name: "Accessories",
        itemDetail: { id: 201, product: "Headphones", inStock: true },
      },
      {
        id: 3,
        name: "Electronics",
        itemDetail: { id: 301, product: "Heater", inStock: false },
      },
    ],
  };

  return (
    <main>
      <Exercise exercises={exercises} />
      <hr />
      <Songs songs={songs} />
      <hr />
      <Books books={books} title="The Great Gatsby" />
      <hr />
      <SongDetails songs={songsObj} title="Bohemian Rhapsody" />
      <hr />
      <Cities cities={cities} name="Paris" />
      <hr />
      <Product products={products} id={3} />
      <hr />
      <Student students={students} name="Charlie" />
      <hr />
      <Orders orders={orders} name="Alice Smith" />
      <hr />
      <Employee employees={employees} id={1} />
      <hr />
      <Store store={store} />
    </main>
  );
}
