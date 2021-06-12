import "./MealItem.css"

const MealItem = (props) => {
    return <div className="meal-item">
    <div className="meal-item__date">{props.date.toISOString()}</div>
    <div className="meal-item__meal">
        <div>{props.item}</div>
        <h3>{props.meal}</h3>
    </div>
    <div className="metric-item__count">{props.calorie}</div>
</div>
}

export default MealItem