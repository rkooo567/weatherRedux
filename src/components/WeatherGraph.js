import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function sum(lst) {
	let sum_result = 0;
	lst.forEach((element) => {
		sum_result += element;
	});
	return sum_result;
}

function average(lst) {
	return Math.round(sum(lst) / lst.length);
}

export default (props) => {
	const data = props.data;
	return(
		<div>
			<Sparklines height={100} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>				
			<div>
				{average(props.data)} {props.type}
			</div>		
		</div>			
	);
}
