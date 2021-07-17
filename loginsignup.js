var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nav@gur1",
    database: "logsign"
  });
con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    const input=require("readline-sync");
    const validator=require("validator");
    var user = input.question("SIGNUP/LOGIN ");
    if (user == "signup"){
        const user_name = input.question("Enter your name ");
        function Email_ID(){
            var user_email = input.question("Enter your Emial ID ");
            var res = validator.isEmail(user_email);
            if (res == true){
                return user_email
            }else{
                console.log(`your email_id is not valid`)
                return Email_ID()
            }
        }
        function Password(){
            let user_password = input.question("enter your password your password(you password should contain 8 characters and it should contain atlest one special charcter,one small letter,one numbeer ) ")
            const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/
            const valid =re.test(user_password);
            if (valid == true){
                return user_password
            }else{
                console.log(`${user_name} your password is not valid \n`)
                return Password()
            }
        }
        var valid_mail=Email_ID()
        console.log(valid_mail);
        var valid_password = Password();
        console.log(valid_password)

        //this is for creating table

        // con.query("create table data(name varchar(255),email varchar(255),password varchar(255))",(err,result)=>{
        //     if(err) throw err;
        //     console.log("table column created")
        // })
        c
}
else if(user == "login"){
    const user_name = input.question("Enter your name ");
    let user_password = input.question("enter your password your password(you password should contain 8 characters and it should contain atlest one special charcter,one small letter,one numbeer ) ")
    var sql = `select * from data where password= '${user_password}'`;
    con.query(sql,(err,result)=>{
    if (err)throw err;
    else if(result!=0){
      console.log(`${user_name} succsessfully login`)
    }
    else{
      console.log(`Oppss...your password is incorrect `)
    }
  })
}
});










