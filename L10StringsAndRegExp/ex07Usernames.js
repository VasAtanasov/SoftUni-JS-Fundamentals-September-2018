function generateUserNames(array) {
    let userNames = [];
    for (let i = 0; i < array.length; i++) {
        let email = array[i];
        let emailName = email.substring(0, email.indexOf("@"));
        let domain = email.substring(email.indexOf("@") + 1).split(".");


        let username = emailName + ".";
        for (let j = 0; j < domain.length; j++) {
            username += domain[j][0];
        }

        userNames.push(username);
    }

    console.log(userNames.join(", "));
}


generateUserNames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);