function calculateRetirement() {
    const currentAge = parseInt(document.getElementById('currentAge').value);
    const retirementAge = parseInt(document.getElementById('retirementAge').value);
    const currentSavings = parseFloat(document.getElementById('currentSavings').value);
    const monthlySavings = parseFloat(document.getElementById('monthlySavings').value);
    const annualIncomeNeeded = parseFloat(document.getElementById('annualIncomeNeeded').value);
    const preRetirementReturn = parseFloat(document.getElementById('preRetirementReturn').value) / 100;
    const postRetirementReturn = parseFloat(document.getElementById('postRetirementReturn').value) / 100;
    const inflationRate = parseFloat(document.getElementById('inflationRate').value) / 100;

    const yearsToRetirement = retirementAge - currentAge;
    const futureValueOfSavings = currentSavings * Math.pow(1 + preRetirementReturn, yearsToRetirement);
    const futureValueOfContributions = monthlySavings * 12 * ((Math.pow(1 + preRetirementReturn, yearsToRetirement) - 1) / preRetirementReturn);

    const totalSavingsAtRetirement = futureValueOfSavings + futureValueOfContributions;
    const requiredNestEgg = annualIncomeNeeded / postRetirementReturn;

    const resultsDiv = document.getElementById('results');
    if (totalSavingsAtRetirement >= requiredNestEgg) {
        resultsDiv.innerHTML = `Congratulations! Your planned savings are sufficient. You would have approximately $${totalSavingsAtRetirement.toFixed(2)} by the time you retire, which meets your needs.`;
    } else {
        const shortfall = requiredNestEgg - totalSavingsAtRetirement;
        resultsDiv.innerHTML = `Your planned savings will result in a shortfall. You need an additional $${shortfall.toFixed(2)} to meet your retirement goals.`;
    }
}
