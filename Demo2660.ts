function abc(player1:number[], player2:number[]) {
	let sumOneOri = player1.reduce((a, b) => a + b, 0);
	let sumTwoOri = player2.reduce((a, b) => a + b, 0);
	if (player1.length > 1 && player2.length > 1) {
		if (player1[0] == 10) sumOneOri += player1[1];
		if (player2[0] == 10) sumTwoOri += player2[1];
		for (let i = 2; i < player1.length; i++)
			if (player1[i - 1] == 10 || player1[i - 2] == 10)
				sumOneOri += player1[i];
		for (let i = 2; i < player2.length; i++)
			if (player2[i - 1] == 10 || player2[i - 2] == 10)
				sumTwoOri += player2[i];
	}
	return sumOneOri > sumTwoOri ? 1 : sumOneOri == sumTwoOri ? 0 : 2;
}
