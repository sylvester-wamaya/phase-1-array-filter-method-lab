
function findMatching(arrayName, driverName){
    return arrayName.filter((driverNames) => driverNames.toLowerCase() === driverName.toLowerCase());
}
function fuzzyMatch(names, stringName){
    return names.filter(
        (driverName) =>
          driverName.toLowerCase().indexOf(stringName.toLowerCase()) === 0
      );
}
function matchName(driverobj, argument){
    return driverobj.filter((drivers) => drivers.name === argument);
}