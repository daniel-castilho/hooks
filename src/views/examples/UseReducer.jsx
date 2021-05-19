import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const initialState = {
	number: 0, // foco...
	cart: [],
	user: null,
	products: [],
};

function reducer(state, action) {
	switch (action.type) {
		case "numberAdd2":
			return { ...state, number: state.number + 2 };
		case "login":
			return { ...state, user: { name: action.payload } };
        case "numberMult7":
            return { ...state, number: state.number * 7 };
        case "numberDiv25":
            return { ...state, number: state.number / 25 };
        case "round":
            return { ...state, number: parseInt(state.number) };
        case "numberAddN":
            return { ...state, number: state.number + action.payload };
		default:
			return state;
	}
}

const UseReducer = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="UseReducer">
			<PageTitle
				title="Hook UseReducer"
				subtitle="Uma outra forma de ter estado em componentes funcionais!" />

            <SectionTitle title="Exercício #01" />
			<div className="center">
				{state.user ? (
					<span className="text">{state.user.name}</span>
				) : (
					<span className="text">Sem usuário</span>
				)}

				<span className="text">{state.number}</span>
				<div>
					<button
						className="btn"
						onClick={() => dispatch({ type: "login", payload: 'Maria' })}
					>
						Login
					</button>
					<button
						className="btn"
						onClick={() => dispatch({ type: "numberAdd2" })}
					>
						+2
					</button>
				</div>
			</div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({ type: 'numberMult7' })}>* 7</button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberDiv25' })}>/ 25</button>
                    <button className="btn" onClick={() => dispatch({ type: 'round' })}>Round</button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberAddN', payload: -9 })}>- 9</button>
                </div>
            </div>
		</div>
	);
};

export default UseReducer;
