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
    let totalDistance = (destination - start)
    if { totalDistance <= 400
      return 0
    } else { totalDistance >= 400
      return totalDistance * .2
    } else    }

}