export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;
    const num3 = num1 + num2;
    const isWinner = num1 !== num2;
    const styles = { color: num1 !== num2 ? "green" : "red" }
    return (
        <div className='DoubleDice' style={styles}>
            <h2>Snake Eyes</h2>
            {isWinner ? <h3>You win!</h3> : <h3>You lose!</h3>}
            <p>Dice 1: {num1}</p>
            <p>Dice 2: {num2}</p>
            <p>Total: {num3}</p>
        </div>
    );
}
