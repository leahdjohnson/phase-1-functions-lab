// Code your solution in this file!

function distanceFromHqInBlocks(number) {
  return Math.abs(number - 42)
  }


  function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264
  }


  function distanceTravelledInFeet(start, destination) {
    return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start);
    //returns the number of feet traveled
  }

  function calculatesFarePrice(start, destination) {
/*     4) gives customers a free sample
      5) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
      6) charges 25 dollars for a distance over 2000 feet
      7) does not allow rides over 2500 feet */
  }
