export default function ListPicker({ values }) {
    const randIdx = Math.floor(Math.random() * values.length)
    const randElemnt = values[randIdx]
    return (
        <>
            <p>The list of values: {randIdx}</p>
            <p>Random element is: {randElemnt}</p>
        </>
    )
}