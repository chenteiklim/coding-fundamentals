function getDays(firstDate, secondDate) {
    return (secondDate - firstDate)/86400000
    //   The formula for converting milliseconds into the days is below
    // (1000 milliseconds * (60 seconds * 60 minutes) * 24 hours) which equals to 86,400,000
    }
    console.log(getDays(
        new Date("June 14, 2019"),
        new Date("June 20, 2019")
      ) )

    console.log(getDays(
        new Date("December 29, 2018"),
        new Date("January 1, 2019")
      ))
    console.log(
        getDays(
          new Date("July 20, 2019"),
          new Date("July 30, 2019")
        ))