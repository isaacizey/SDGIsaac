const covid19ImpactEstimator = (data) => data;

currentlyInfectedImpact = covid19ImpactEstimator.reportedCases*10;
impact.currentlyInfected = currentlyInfectedImpact;
currentlyInfectedSevere = covid19ImpactEstimator.reportedCases * 50;
severeImpact.currentlyInfected = currentlyInfectedSevere;
impact.infectionsByRequestedTime= currentlyInfectedImpact * 1024;
severeImpact.infectionsByRequestedTime = currentlyInfectedSevere * 1024;
export default covid19ImpactEstimator;
