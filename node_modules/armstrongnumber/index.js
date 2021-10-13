function isArmstrongNumber(inputNumber)
	{
		var armstrong_number,number,remainder,sum = 0;
		number = Number(inputNumber);

		armstrong_number = number;
		while(number > 0)
		{
			remainder = number%10;
			sum = sum + (remainder*remainder*remainder);
			number = parseInt(number/10);
		}

		if(sum == armstrong_number)
		{
			return true;
		}
		else
		{
			return false;
		}
    }

 module.exports = isArmstrongNumber;
