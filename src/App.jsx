import './App.css'
//import Greeter from './Greeter'
//import Die from './Die'
//import ListPicker from './ListPicker'
// import DoubleDice from './DoubleDice'
// import Heading from './Heading'
// import ColorList from './ColorList'
//import Slots from './Slots'
//import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'
// import Clicker from './Clicker'
// import Clicked from './Clicked'
//import Counter from './Counter'
//import Toggler from './Toggler'
//import ToggleCounter from './ToggleCounter'
//import ColourBoxGrid from './ColourBoxGrid'

// const colours = [
//   "orange",
//   "red",
//   "yellow",
//   "greenyellow",
//   "aqua",
//   "blueviolet",
//   "darkmagenta",
//   "darkturquoise",
//   "deeppink",
//   "limegreen",
//   "navy",
//   "plum",
//   "skyblue",
//   "orangered",
//   "mediumseagreen",
// ]


// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];


const data = [
  { id: 1, item: 'coffee', quantity: 1, completed: true },
  { id: 2, item: 'milk', quantity: 1, completed: false },
  { id: 3, item: 'carrots', quantity: 5, completed: false },
  { id: 4, item: 'eggs', quantity: 12, completed: false },
  { id: 5, item: 'tins of soup', quantity: 6, completed: false }
]


function App() {
  return <div>
    {/* <ColourBoxGrid colours={colours} /> */}
    {/* <ToggleCounter /> */}
    {/* <Counter /> */}
    {/* <Clicker />
    <Clicked message="HI!!" buttonText="Click Me!" />
    <Clicked message="Please Stop Clicking Me!" buttonText="Do not click!" /> */}
    <PropertyList properties={properties} />
    {/* <ShoppingList items={data} /> */}
    {/* <Slots />
    {/* <Heading color="orange" text="Let's Play.." fontSize="48px" />
    <Heading color="teal" text="Snake Eyes!!" fontSize="36px" />
    <DoubleDice />
    <DoubleDice />
    <ColorList colours={["red", "pink", "purple", "magenta", "yellow", "blue"]} />
    <ColorList colours={["olive", "slategrey"]} /> */}
    {/* <Greeter person="Andrew" from="Family" />
    <Greeter person="Family" from="Andrew" /> */}
    {/* <Die numSides={6} />
    <Die /> */}
    {/* <ListPicker values={["Doughnut", "Fruit Cake", "Cookie", "Eclair"]} />
    <ListPicker values={["Andrew", "Julie", "Rebekah", "Sarah"]} /> */}
  </div>

}

export default App
