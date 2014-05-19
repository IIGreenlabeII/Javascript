var createAthletes = (function(data) {
    var athletes = [];

    [].forEach.call(data, function(value, index, list) {
        var athlete = createAthleteUltimate(value);
    });

    return athletes;
});

    var createAthleteUltimate = (function(firstName, lastName, age, dayOfBirth, stamina, strength, length){
        var athleteUltimate = {};

        Object.defineProperties(athleteUltimate, {
            firstName : {
                value : firstName
            },
            lastName : {
                value : lastName,
                enumerable: true
            },
            age : {
                value : age
            },
            dayOfBirth : {
                value : dayOfbirth
            },
            stamina : {
                value : stamina
            },
            strength : {
                value : strength
            },
            length : {
                get : function() {
                    return length;
                },
                set : function(value) {
                    length = value;
                }
            },
            fullName : {
                get : function() {
                    return firstName + " " + lastName;
                }
            }
        });
        return athleteUltimate;
});

//var test = createAthlete2("Test", "Cool", "200");
var athleteUltimate = createAthleteUltimate();
console.log(athleteUltimate);
//get : function() {
//    return this.firstName;
//},
//set : function(value){
//    return value;
//},
//writeable: true