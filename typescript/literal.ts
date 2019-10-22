type Profession = "teacher" | "doctor" | "accountant";
function personCreator(profession:Profession) {

}

personCreator("teacher");
personCreator("doctor");
//调用报错，只允许指定字符串
personCreator("account");
personCreator("accountant");
