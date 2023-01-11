//Calculate Federal Taxes
const fedTaxCalculation = () => {
    let tenPrecentFedTax = .1;
    let twelvePrecentFedTax = .12;
    let twentytwoPercentFedTax = .22;
    let twentyfourPercentFedTax = .24;
    let thirtytwoPercentFedTax = .32;
    let thirtyfivePercentFedTax = .35;
    let thirtysevenPercentFedTax = .37;

    let levelOneFedTaxCap = 9875;
    let levelTwoFedTaxCap = 40125;
    let levelThreeFedTaxCap = 85525;
    let levelFourFedTaxCap = 163300;
    let levelFiveFedTaxCap = 207350;
    let levelSixFedTaxCap = 518400;

    let fedTaxDue = 0;

    if (grossSalary.value <= levelOneFedTaxCap) {
        fedTaxDue = grossSalary.value * tenPrecentFedTax;
    } else if ((grossSalary.value <= levelTwoFedTaxCap) && (grossSalary.value > levelOneFedTaxCap)) {
        fedTaxDue = ((grossSalary.value - levelOneFedTaxCap) * twelvePrecentFedTax) + (tenPrecentFedTax * levelOneFedTaxCap);
    } else if ((grossSalary.value <= levelThreeFedTaxCap) && (grossSalary.value > levelTwoFedTaxCap)) {
        fedTaxDue = ((grossSalary.value - levelTwoFedTaxCap) * twentytwoPercentFedTax) + ((tenPrecentFedTax * levelOneFedTaxCap) + (twelvePrecentFedTax * (levelTwoFedTaxCap - levelOneFedTaxCap)));
    } else if ((grossSalary.value <= levelFourFedTaxCap) && (grossSalary.value > levelThreeFedTaxCap)) {
        fedTaxDue = ((grossSalary.value - levelThreeFedTaxCap) * twentyfourPercentFedTax) + (tenPrecentFedTax * levelOneFedTaxCap) + (twelvePrecentFedTax * (levelTwoFedTaxCap - levelOneFedTaxCap) + (twentytwoPercentFedTax * (levelThreeFedTaxCap - levelTwoFedTaxCap)));
    } else if ((grossSalary.value <= levelFiveFedTaxCap) && (grossSalary.value > levelFourFedTaxCap)) {
        fedTaxDue = ((grossSalary.value - levelFourFedTaxCap) * thirtytwoPercentFedTax) + (tenPrecentFedTax * levelOneFedTaxCap) + (twelvePrecentFedTax * (levelTwoFedTaxCap - levelOneFedTaxCap) + (twentytwoPercentFedTax * (levelThreeFedTaxCap - levelTwoFedTaxCap) + (twentyfourPercentFedTax * (levelFourFedTaxCap - levelThreeFedTaxCap))));
    } else if ((grossSalary.value <= levelSixFedTaxCap) && (grossSalary.value > levelFiveFedTaxCap)) {
        fedTaxDue = ((grossSalary.value - levelFiveFedTaxCap) * thirtyfivePercentFedTax) + (tenPrecentFedTax * levelOneFedTaxCap) + (twelvePrecentFedTax * (levelTwoFedTaxCap - levelOneFedTaxCap) + (twentytwoPercentFedTax * (levelThreeFedTaxCap - levelTwoFedTaxCap) + (twentyfourPercentFedTax * (levelFourFedTaxCap - levelThreeFedTaxCap) + (thirtytwoPercentFedTax * (levelFiveFedTaxCap - levelFourFedTaxCap)))));
    } else if (grossSalary.value > levelSixFedTaxCap) {
        fedTaxDue = ((grossSalary.value - levelSixFedTaxCap) * thirtysevenPercentFedTax) + (tenPrecentFedTax * levelOneFedTaxCap) + (twelvePrecentFedTax * (levelTwoFedTaxCap - levelOneFedTaxCap) + (twentytwoPercentFedTax * (levelThreeFedTaxCap - levelTwoFedTaxCap) + (twentyfourPercentFedTax * (levelFourFedTaxCap - levelThreeFedTaxCap) + (thirtytwoPercentFedTax * (levelFiveFedTaxCap - levelFourFedTaxCap) + (thirtyfivePercentFedTax * (levelSixFedTaxCap - levelFiveFedTaxCap))))));
    }
    return fedTaxDue;
}

//Calculate State Taxes
const stateTaxCalculation = () => {
    let levelOneStateTaxRate = .0354;
    let levelTwoStateTaxRate = .0465;
    let levelThreeStateTaxRate = .0627;
    let levelFourStateTaxRate = .0765;

    let levelOneStateTaxCap = 11970;
    let levelTwoStateTaxCap = 23930;
    let levelThreeStateTaxCap = 263480;

    let stateTaxDue = 0;

    if (grossSalary.value < levelOneStateTaxCap) {
        stateTaxDue = grossSalary.value * levelOneStateTaxRate;
    } else if ((grossSalary.value > levelOneStateTaxCap) && (grossSalary.value < levelTwoStateTaxCap)) {
        stateTaxDue = ((grossSalary.value - levelOneStateTaxCap) * levelTwoStateTaxRate) + (levelOneStateTaxRate * levelOneStateTaxCap);
    } else if ((grossSalary.value > levelTwoStateTaxCap) && (grossSalary.value < levelThreeStateTaxCap)) {
        stateTaxDue = ((grossSalary.value - levelTwoStateTaxCap) * levelThreeStateTaxRate) + ((levelOneStateTaxCap * levelOneStateTaxRate) + ((levelTwoStateTaxCap - levelOneStateTaxCap) * levelTwoStateTaxRate));
    } else if (grossSalary.value > levelThreeStateTaxCap) {
        stateTaxDue = ((grossSalary.value - levelThreeStateTaxCap) * levelFourStateTaxRate) + ((levelOneStateTaxCap * levelOneStateTaxRate) + ((levelTwoStateTaxCap - levelOneStateTaxCap) * levelTwoStateTaxRate) + ((levelThreeStateTaxCap - levelTwoStateTaxCap) * levelThreeStateTaxRate));
    }
    return stateTaxDue;
}

//Calculate Medicare Taxes
const medicareTaxCalculation = () => {
    let levelOneMedTaxRate = .0145;
    let levelTwoMedTaxRate = .0235;
    let levelOneMedTaxCap = 200000;

    let medTaxDue = 0;

    if (grossSalary.value < 200001) {
        medTaxDue = grossSalary.value * levelOneMedTaxRate;
    } else if (grossSalary.value > 200000) {
        medTaxDue = (levelOneMedTaxCap * levelOneMedTaxRate) + ((grossSalary.value - levelOneMedTaxCap) * levelTwoMedTaxRate);
    } else if (grossSalary.value > levelOneMedTaxCap) {
        medTaxDue = (levelOneMedTaxCap * levelOneMedTaxRate) + ((grossSalary.value - levelOneMedTaxCap) * levelTwoMedTaxRate);
    }
    return medTaxDue;
}

//Calculate SSN Tax
const ssnTaxCalculation = () => {
    let levelOneSSNTaxCap = 137000;
    let levelOneSSNTaxRate = .062;

    let ssnTaxDue = 0;

    if (grossSalary.value < levelOneSSNTaxCap) {
        ssnTaxDue = grossSalary.value * .062;
    } else {
        ssnTaxDue = levelOneSSNTaxCap * levelOneSSNTaxRate;
    }
    return ssnTaxDue;
}

//Calculate Net Pay
const netPayCalculation = () => {
    //equal to gross pay - (federal tax + state tax + social security tax + medicare tax
    let netPay = grossSalary.value - (fedTaxCalculation() + stateTaxCalculation() + ssnTaxCalculation() + medicareTaxCalculation());

    return netPay;
}

//Creates the table and displays
const calculateTaxes = () => {

    //creates div to hold a table and it's elements
    let divContainer2 = document.createElement("div");

    let createTable = document.createElement("table");
    createTable.setAttribute("class", "createTable");

    let createTableHead = document.createElement("thead");
    createTableHead.setAttribute("class", "createTableHead");
    createTableHead.innerHTML = "Tax Calculator"


    let createTableRow = document.createElement("tr");
    let createGrossSalaryData = document.createElement("td");
    createGrossSalaryData.setAttribute("id", "grossSalaryOutput");
    createGrossSalaryData.innerHTML = "Gross Salary: $" + document.querySelector("#grossSalary").value;


    let createTableRow2 = document.createElement("tr");
    let createFedTaxesData = document.createElement("td");
    createFedTaxesData.setAttribute("id", "federalTaxesOutput");
    createFedTaxesData.innerHTML = "Federal Taxes: $" + fedTaxCalculation();


    let createTableRow3 = document.createElement("tr");
    let createStateTaxesData = document.createElement("td");
    createStateTaxesData.setAttribute("id", "stateTaxesOutput");
    createStateTaxesData.innerHTML = "State Taxes: $" + stateTaxCalculation();

    let createTableRow4 = document.createElement("tr");
    let createMedTaxesData = document.createElement("td");
    createMedTaxesData.setAttribute("id", "medicareTaxesOutput");
    createMedTaxesData.innerHTML = "Medicare Taxes: $" + medicareTaxCalculation();

    let createTableRow5 = document.createElement("tr");
    let createSSNTaxesData = document.createElement("td");
    createSSNTaxesData.setAttribute("id", "ssnTaxesOutput");
    createSSNTaxesData.innerHTML = "SSN Taxes: $" + ssnTaxCalculation();

    let createTableRow6 = document.createElement("tr");
    let createNetPayData = document.createElement("td");
    createNetPayData.setAttribute("id", "netPayOutput");
    createNetPayData.innerHTML = "Net Pay: $" + netPayCalculation();


    let createButton = document.createElement("button");
    createButton.setAttribute("id", "clear");
    createButton.innerHTML = "Clear";

    divContainer2.appendChild(createTable);
    createTable.appendChild(createTableHead);
    createTable.appendChild(createTableRow);
    createTableRow.appendChild(createGrossSalaryData);
    createTable.appendChild(createTableRow2);
    createTableRow2.appendChild(createFedTaxesData);
    createTable.appendChild(createTableRow3);
    createTableRow3.appendChild(createStateTaxesData);
    createTable.appendChild(createTableRow4);
    createTableRow4.appendChild(createMedTaxesData);
    createTable.appendChild(createTableRow5);
    createTableRow5.appendChild(createSSNTaxesData);
    createTable.appendChild(createTableRow6);
    createTableRow6.appendChild(createNetPayData);
    divContainer2.appendChild(createButton);
    document.body.appendChild(divContainer2);

    //clears entered data
    let clear = document.getElementById("clear");
    clear.addEventListener("click", function() {
        location.reload()
    });
}
