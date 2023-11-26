export default function Slots({ val1, val2, val3 }) {
    const fruit = ["🍒", "🍋", "🍊"]
    
    let slot1 = Math.floor(Math.random() * fruit.length)
    let slot2 = Math.floor(Math.random() * fruit.length)
    let slot3 = Math.floor(Math.random() * fruit.length)

    const styles = { color: slot1 === slot2 && slot1 === slot3 ? "green" : "red" }

    return (

        <div style={styles}>
            <h1 style={{ fontSize: "80px" }}>
                {fruit[slot1]} {fruit[slot2]} {fruit[slot3]}
            </h1>
            <h2>
                {slot1 === slot2 && slot1 === slot3 ? <p>It&apos;s a match</p> : <p>No Match</p>}
            </h2>
            <h2>
                {slot1 === slot2 && slot1 === slot3 ? <p>You Win!!</p> : <p> You Lose!!</p>}
            </h2>
        </div>
    );
}