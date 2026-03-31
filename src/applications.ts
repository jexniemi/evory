import { App, ApplicationsJSON } from "@/types/types";

const applications = {
  "Salary & Taxes": {
    backgroundColor: "",
    color: "",
    path: "/salary-and-taxes",
    apps: [
      {
        route: "monthly-salary-calculator",
        displayName: "Monthly Salary Calculator",
        shortDescription: "Calculate monthly salary based on hourly wage.",
      },
      {
        route: "hourly-salary-calculator",
        displayName: "Hourly Salary Calculator",
        shortDescription: "Calculate hourly wage based on monthly salary.",
      },
      {
        route: "annual-salary-calculator",
        displayName: "Annual Salary Calculator",
        shortDescription:
          "Calculate annual salary based on hourly or monthly wage.",
      },
      {
        route: "tax-percentage-calculator",
        displayName: "Tax Percentage Calculator",
        shortDescription:
          "Calculate your personal tax rate based on net salary.",
      },
      {
        route: "vat-calculator",
        displayName: "VAT Calculator",
        shortDescription:
          "Calculate value added tax easily from net or gross price.",
      },
      {
        route: "net-salary-calculator",
        displayName: "Net Salary Calculator",
        shortDescription:
          "Calculate net salary from gross salary after taxes and deductions.",
      },
      {
        route: "work-hours-calculator",
        displayName: "Work Hours Calculator",
        shortDescription:
          "Calculate daily work hours and earnings based on start and end time.",
      },
      {
        route: "paycheck-calculator",
        displayName: "Paycheck Calculator",
        shortDescription:
          "Estimate take-home pay after federal tax, state tax, FICA, and 401(k) deductions.",
      },
      {
        route: "overtime-calculator",
        displayName: "Overtime Calculator",
        shortDescription:
          "Calculate overtime pay based on hourly rate, overtime hours, and multiplier.",
      },
      {
        route: "tax-bracket-calculator",
        displayName: "Tax Bracket Calculator",
        shortDescription:
          "Estimate your 2024 federal income tax, effective tax rate, and marginal bracket.",
      },
      {
        route: "freelance-rate-calculator",
        displayName: "Freelance Rate Calculator",
        shortDescription:
          "Calculate the minimum hourly rate you need to charge as a freelancer.",
      },
    ],
  },
  "Savings & Investments": {
    backgroundColor: "",
    color: "",
    path: "/savings-and-investments",
    apps: [
      {
        route: "compound-interest-calculator",
        displayName: "Compound Interest Calculator",
        shortDescription:
          "Calculate how compound interest affects your investments.",
      },
      {
        route: "simple-compound-interest-calculator",
        displayName: "Simple Compound Interest Calculator",
        shortDescription:
          "Calculate how much your money grows with compound interest.",
      },
      {
        route: "investment-return-calculator",
        displayName: "Investment Return Calculator",
        shortDescription:
          "Calculate the return percentage (ROI) from your investment.",
      },
      {
        route: "loan-repayment-calculator",
        displayName: "Loan Repayment Calculator",
        shortDescription: "Calculate loan monthly payments and total costs.",
      },
      {
        route: "installment-calculator",
        displayName: "Installment Calculator",
        shortDescription:
          "Calculate installment monthly payment and total costs.",
      },
      {
        route: "savings-goal-calculator",
        displayName: "Savings Goal Calculator",
        shortDescription:
          "Calculate how long it will take to reach your savings goal.",
      },
      {
        route: "401k-calculator",
        displayName: "401(k) Calculator",
        shortDescription:
          "Project your 401(k) balance at retirement with employer match and compound growth.",
      },
      {
        route: "social-security-calculator",
        displayName: "Social Security Calculator",
        shortDescription:
          "Estimate Social Security benefits based on your claiming age.",
      },
      {
        route: "mortgage-calculator",
        displayName: "Mortgage Calculator",
        shortDescription:
          "Calculate monthly mortgage payments, total interest, and total cost.",
      },
      {
        route: "down-payment-calculator",
        displayName: "Down Payment Calculator",
        shortDescription:
          "Calculate down payment amount and savings timeline for a home purchase.",
      },
      {
        route: "rental-yield-calculator",
        displayName: "Rental Yield Calculator",
        shortDescription:
          "Calculate gross and net rental yield and cash flow for investment property.",
      },
      {
        route: "debt-payoff-calculator",
        displayName: "Debt Payoff Calculator",
        shortDescription:
          "Calculate how long to pay off debt, total interest, and total cost.",
      },
      {
        route: "retirement-calculator",
        displayName: "Retirement Calculator",
        shortDescription:
          "Project retirement savings and monthly income using compound growth and the 4% rule.",
      },
      {
        route: "cd-calculator",
        displayName: "CD Calculator",
        shortDescription:
          "Calculate certificate of deposit interest earned and total value at maturity.",
      },
      {
        route: "student-loan-calculator",
        displayName: "Student Loan Calculator",
        shortDescription:
          "Calculate monthly student loan payments, total interest, and total repayment amount.",
      },
      {
        route: "roth-ira-calculator",
        displayName: "Roth IRA Calculator",
        shortDescription:
          "Calculate your Roth IRA balance at retirement and see how tax-free growth compounds.",
      },
      {
        route: "net-worth-calculator",
        displayName: "Net Worth Calculator",
        shortDescription:
          "Calculate your net worth by entering all assets and liabilities.",
      },
      {
        route: "inflation-calculator",
        displayName: "Inflation Calculator",
        shortDescription:
          "Calculate how inflation erodes purchasing power over time.",
      },
      {
        route: "emergency-fund-calculator",
        displayName: "Emergency Fund Calculator",
        shortDescription:
          "Calculate your emergency fund target and how long until you reach your goal.",
      },
      {
        route: "home-affordability-calculator",
        displayName: "Home Affordability Calculator",
        shortDescription:
          "Find out how much house you can afford using the 28/36 rule.",
      },
    ],
  },
  "Daily Life & Home": {
    backgroundColor: "",
    color: "",
    path: "/daily-life-and-home",
    apps: [
      {
        route: "percentage-calculator",
        displayName: "Percentage Calculator",
        shortDescription:
          "Calculate percentage value, percentage share, and percentage change easily.",
      },
      {
        route: "discount-calculator",
        displayName: "Discount Calculator",
        shortDescription:
          "Calculate the discounted price of a product or service easily.",
      },
      {
        route: "tip-calculator",
        displayName: "Tip Calculator",
        shortDescription: "Find out how much you should pay as a tip.",
      },
      {
        route: "sales-tax-calculator",
        displayName: "Sales Tax Calculator",
        shortDescription:
          "Calculate sales tax amount and total price with tax.",
      },
      {
        route: "electricity-bill-calculator",
        displayName: "Electricity Bill Calculator",
        shortDescription:
          "Calculate electricity bill amount based on consumption.",
      },
      {
        route: "fuel-cost-calculator",
        displayName: "Fuel Cost Calculator",
        shortDescription: "Calculate fuel costs for your trip.",
      },
      {
        route: "electric-car-trip-cost-calculator",
        displayName: "Electric Car Trip Cost Calculator",
        shortDescription: "Calculate costs for a trip with an electric car.",
      },
      {
        route: "driving-cost-calculator",
        displayName: "Driving Cost Calculator",
        shortDescription: "Calculate fuel costs for a trip.",
      },
      {
        route: "price-per-square-foot-calculator",
        displayName: "Price Per Square Foot Calculator",
        shortDescription:
          "Calculate the price per square foot of a home based on sale price and area.",
      },
      {
        route: "length-converter",
        displayName: "Length Converter",
        shortDescription:
          "Convert length between cm, m, feet, inches, km, and miles.",
      },
      {
        route: "weight-converter",
        displayName: "Weight Converter",
        shortDescription:
          "Convert weight between kg, g, lbs, stones, and tons.",
      },
      {
        route: "currency-converter",
        displayName: "Currency Converter",
        shortDescription: "Convert between over 20 currencies via euro rates.",
      },
      {
        route: "speed-converter",
        displayName: "Speed Converter",
        shortDescription:
          "Convert speed between km/h, m/s, mph, knots, and ft/s.",
      },
      {
        route: "area-converter",
        displayName: "Area Converter",
        shortDescription:
          "Convert area between m², cm², km², ft², hectares, and acres.",
      },
      {
        route: "portion-calculator",
        displayName: "Portion Calculator",
        shortDescription:
          "Scale recipe ingredients to your desired number of servings.",
      },
      {
        route: "gas-mileage-calculator",
        displayName: "Gas Mileage Calculator",
        shortDescription:
          "Calculate MPG, cost per mile, and total fuel cost for your vehicle.",
      },
      {
        route: "unit-price-calculator",
        displayName: "Unit Price Calculator",
        shortDescription:
          "Compare two products by unit price to find the better deal.",
      },
      {
        route: "paint-calculator",
        displayName: "Paint Calculator",
        shortDescription:
          "Calculate how much paint you need for any room based on dimensions, doors, and windows.",
      },
      {
        route: "moving-cost-calculator",
        displayName: "Moving Cost Calculator",
        shortDescription:
          "Estimate professional moving costs based on distance, home size, and packing services.",
      },
      {
        route: "square-footage-calculator",
        displayName: "Square Footage Calculator",
        shortDescription:
          "Calculate square footage from length and width and estimate property value.",
      },
      {
        route: "car-loan-calculator",
        displayName: "Car Loan Calculator",
        shortDescription:
          "Calculate monthly car loan payments, total interest, and total cost for any vehicle.",
      },
      {
        route: "break-even-calculator",
        displayName: "Break-Even Calculator",
        shortDescription:
          "Calculate the break-even point for your business in units and monthly revenue.",
      },
    ],
  },
  "Health & Fitness": {
    backgroundColor: "",
    color: "",
    path: "/health-and-fitness",
    apps: [
      {
        route: "bac-calculator",
        displayName: "Blood Alcohol Content Calculator",
        shortDescription:
          "Estimate blood alcohol level using Widmark formula — includes time to sober up.",
      },
      {
        route: "bmi-calculator",
        displayName: "BMI Calculator",
        shortDescription:
          "Calculate your body mass index and find the normal weight range.",
      },
      {
        route: "bmr-calculator",
        displayName: "Basal Metabolic Rate Calculator",
        shortDescription:
          "Calculate how many calories you burn per day at rest.",
      },
      {
        route: "daily-calorie-needs-calculator",
        displayName: "Daily Calorie Needs Calculator",
        shortDescription: "Calculate your personal daily calorie requirement.",
      },
      {
        route: "sleep-needs-calculator",
        displayName: "Sleep Needs Calculator",
        shortDescription:
          "Calculate how much sleep you need based on your activity level.",
      },
      {
        route: "running-pace-calculator",
        displayName: "Running Pace Calculator",
        shortDescription:
          "Calculate your running pace based on distance and time.",
      },
      {
        route: "water-needs-calculator",
        displayName: "Water Needs Calculator",
        shortDescription:
          "Calculate your daily water requirement based on weight and activity level.",
      },
      {
        route: "macro-calculator",
        displayName: "Macro Calculator",
        shortDescription:
          "Calculate daily calorie needs and macronutrients based on your goals.",
      },
      {
        route: "sleep-cycle-calculator",
        displayName: "Sleep Cycle Calculator",
        shortDescription:
          "Calculate optimal bedtime or wake-up time based on 90-minute sleep cycles.",
      },
      {
        route: "pregnancy-calculator",
        displayName: "Pregnancy Calculator",
        shortDescription: "Calculate due date, pregnancy week, and trimester.",
      },
      {
        route: "heart-rate-calculator",
        displayName: "Heart Rate Calculator",
        shortDescription:
          "Calculate your optimal heart rate zones using the Karvonen formula.",
      },
      {
        route: "calorie-burn-calculator",
        displayName: "Calorie Burn Calculator",
        shortDescription:
          "Calculate calories burned during exercise based on MET values.",
      },
      {
        route: "wind-chill-calculator",
        displayName: "Wind Chill Calculator",
        shortDescription:
          "Calculate wind chill temperature and how cold it feels in windy weather.",
      },
      {
        route: "body-fat-calculator",
        displayName: "Body Fat Calculator",
        shortDescription:
          "Estimate body fat percentage using the US Navy formula from simple measurements.",
      },
      {
        route: "protein-intake-calculator",
        displayName: "Protein Intake Calculator",
        shortDescription:
          "Calculate daily protein needs based on body weight and activity level.",
      },
      {
        route: "ideal-weight-calculator",
        displayName: "Ideal Weight Calculator",
        shortDescription:
          "Calculate ideal body weight using Devine, Robinson, and Miller formulas.",
      },
      {
        route: "due-date-calculator",
        displayName: "Due Date Calculator",
        shortDescription:
          "Calculate your pregnancy due date, current week, and trimester using Naegele's rule.",
      },
      {
        route: "blood-pressure-checker",
        displayName: "Blood Pressure Checker",
        shortDescription:
          "Check your blood pressure category based on AHA guidelines.",
      },
    ],
  },
  Tools: {
    backgroundColor: "",
    color: "",
    path: "/tools",
    apps: [
      {
        route: "temperature-converter",
        displayName: "Temperature Converter",
        shortDescription:
          "Convert temperature between Celsius, Fahrenheit, and Kelvin.",
      },
      {
        route: "qr-generator",
        displayName: "QR Generator",
        shortDescription: "Generate a QR code from text or a link.",
      },
      {
        route: "word-counter",
        displayName: "Word Counter",
        shortDescription: "Count the number of words in a sentence easily.",
      },
      {
        route: "gpa-calculator",
        displayName: "GPA Calculator",
        shortDescription: "Calculate your academic GPA easily.",
      },
      {
        route: "name-day-search",
        displayName: "Name Day Search",
        shortDescription: "Search for name day by name or date.",
      },
      {
        route: "flight-carbon-footprint-calculator",
        displayName: "Flight Carbon Footprint Calculator",
        shortDescription: "Calculate the carbon emissions of your flight.",
      },
      {
        route: "age-calculator",
        displayName: "Age Calculator",
        shortDescription:
          "Calculate your exact age in years, months, and days from your birthdate.",
      },
      {
        route: "date-calculator",
        displayName: "Date Calculator",
        shortDescription:
          "Calculate the difference in days, weeks, and months between two dates.",
      },
      {
        route: "random-number-generator",
        displayName: "Random Number Generator",
        shortDescription:
          "Generate random numbers within your desired range — suitable for draws and games.",
      },
      {
        route: "time-zone-converter",
        displayName: "Time Zone Converter",
        shortDescription:
          "Convert time between major world time zones instantly.",
      },
      {
        route: "grade-calculator",
        displayName: "Grade Calculator",
        shortDescription:
          "Calculate what score you need on your final exam to reach your desired grade.",
      },
      {
        route: "password-generator",
        displayName: "Password Generator",
        shortDescription:
          "Generate strong, random passwords with customizable length and character types.",
      },
      {
        route: "character-counter",
        displayName: "Character Counter",
        shortDescription:
          "Count characters, words, sentences, and paragraphs with social media limit checks.",
      },
      {
        route: "json-formatter",
        displayName: "JSON Formatter",
        shortDescription:
          "Format, beautify, validate, and minify JSON data instantly.",
      },
      {
        route: "countdown-timer",
        displayName: "Countdown Timer",
        shortDescription:
          "Set a countdown timer with hours, minutes, and seconds and get alerted when time is up.",
      },
    ],
  },
  Entertainment: {
    backgroundColor: "",
    color: "",
    path: "/entertainment",
    apps: [
      {
        route: "name-generator/dogs",
        displayName: "Dog Name Generator",
        shortDescription:
          "Use the name generator to quickly come up with a name for your dog.",
      },
      {
        route: "name-generator/cats",
        displayName: "Cat Name Generator",
        shortDescription:
          "The name generator helps you come up with a name for your cat.",
      },
      {
        route: "vacation-days-calculator",
        displayName: "Vacation Days Calculator",
        shortDescription:
          "Calculate how many days are left until your vacation.",
      },
      {
        route: "days-until-christmas",
        displayName: "Days Until Christmas",
        shortDescription: "How many days until Christmas?",
      },
      {
        route: "calendar-tool",
        displayName: "Calendar Tool",
        shortDescription:
          "Find out the number of days in months, browse calendars, and check leap years.",
      },
      {
        route: "flag-game",
        displayName: "Flag Game",
        shortDescription:
          "In the flag game, guess country names using flags. Test your knowledge!",
      },
      {
        route: "military-insignia-quiz",
        displayName: "Military Insignia Quiz",
        shortDescription:
          "Do you know military insignia? Show your knowledge in this quiz.",
      },
      {
        route: "dice-generator",
        displayName: "Dice Generator",
        shortDescription:
          "Roll virtual dice — choose the number and type of dice.",
      },
      {
        route: "horoscope",
        displayName: "Horoscope",
        shortDescription:
          "Check your zodiac sign description, compatible signs, and daily number.",
      },
      {
        route: "lottery-number-generator",
        displayName: "Lottery Number Generator",
        shortDescription: "Randomly generate unique lottery numbers.",
      },
      {
        route: "raffle-machine",
        displayName: "Raffle Machine",
        shortDescription:
          "Draw a winner from a list — suitable for raffles and lotteries.",
      },
      {
        route: "life-calculator",
        displayName: "Life Calculator",
        shortDescription:
          "Calculate how many days, hours, and heartbeats you have lived.",
      },
      {
        route: "coin-flip",
        displayName: "Coin Flip",
        shortDescription:
          "Flip a virtual coin and track heads vs tails statistics.",
      },
      {
        route: "rock-paper-scissors",
        displayName: "Rock Paper Scissors",
        shortDescription:
          "Play Rock Paper Scissors against the computer with score tracking.",
      },
      {
        route: "love-calculator",
        displayName: "Love Calculator",
        shortDescription:
          "Test love compatibility between two names with a fun percentage score.",
      },
      {
        route: "baby-name-generator",
        displayName: "Baby Name Generator",
        shortDescription:
          "Generate popular American baby names by gender and starting letter.",
      },
    ],
  },
} satisfies ApplicationsJSON;

export const apps: ApplicationsJSON = applications;

export const getApplicationsAsList = () => {
  let result: App[] = [];
  Object.values(apps).forEach(
    (category) => (result = result.concat(category.apps)),
  );
  return result;
};

export const getRandomApps = (currentPath: string, number = 3) => {
  const apps = getApplicationsAsList();
  const randomApps = [];
  const flags: { [key: string]: string } = {};
  while (randomApps.length < number) {
    const app = apps[Math.floor(Math.random() * apps.length)];
    if ("/" + app.route === currentPath || flags["/" + app.route]) continue;
    flags["/" + app.route] = "exists";
    randomApps.push(app);
  }
  return randomApps;
};

export const getRandomAppsOfTheDay = (numOfReturnedApps: number) => {
  const apps = getApplicationsAsList();
  const day = new Date().getDay();
  const randomApps = [];
  const indexOfTheDay = day % apps.length;
  for (
    let i = indexOfTheDay;
    randomApps.length < numOfReturnedApps;
    i = i + 2
  ) {
    if (i >= apps.length) {
      i = 0 + (i - apps.length);
    }
    randomApps.push(apps[i]);
  }
  return randomApps;
};

export const getCategoryNameByRoute = (route: string) => {
  let result: { categoryName: string; categoryPath: string } | undefined;
  try {
    const routeArray = route.split("/");
    const lastElement = routeArray[routeArray.length - 1];
    Object.keys(apps).forEach((category) => {
      apps[category].apps.forEach((app) => {
        console.log(app.route, lastElement);
        if (app.route === lastElement) {
          result = {
            categoryName: category,
            categoryPath: apps[category].path,
          };
        }
      });
    });
  } catch (error) {
    console.error(error);
  }
  return result;
};
