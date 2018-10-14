var Facebook = /** @class */ (function () {
    function Facebook(userLogin, userName, totalFriends, age, birthday, address, schooling, totalPostCount, profilePic, email, totallikes, totalDislikes, followPagescount, wallPic, gender, working, comapnyName, familyMember) {
        var _this = this;
        this.userLogin = userLogin;
        this.userName = userName;
        this.totalFriends = totalFriends;
        this.age = age;
        this.birthday = birthday;
        this.address = address;
        this.schooling = schooling;
        this.totalPostCount = totalPostCount;
        this.profilePic = profilePic;
        this.email = email;
        this.totallikes = totallikes;
        this.totalDislikes = totalDislikes;
        this.followPagescount = followPagescount;
        this.wallPic = wallPic;
        this.gender = gender;
        this.working = working;
        this.comapnyName = comapnyName;
        this.familyMember = familyMember;
        this.getUserLogin = function () {
            return _this.userLogin;
        };
        this.getUserName = function () {
            return _this.userName;
        };
        this.getTotalfriends = function () {
            return _this.totalFriends;
        };
        this.inscreaseTotalFriends = function () {
            _this.totalFriends = _this.totalFriends + 1;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getAddress = function () {
            return _this.address;
        };
        this.gettotalPostCount = function () {
            return _this.totalPostCount;
        };
        this.getProfilePic = function () {
            return _this.profilePic;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getTotalLikes = function () {
            return _this.totallikes;
        };
        this.increaseTotalLikes = function () {
            return _this.totallikes + 1;
        };
        this.decreaseTotalLikes = function () {
            return _this.totalDislikes;
        };
        this.getWallPic = function () {
            return _this.wallPic;
        };
        this.getGender = function () {
            return _this.getGender;
        };
        this.getWorking = function () {
            return _this.working;
        };
        this.getCompanyName = function () {
            return _this.comapnyName;
        };
        this.getFamilyMember = function () {
            return _this.familyMember;
        };
        this.userLogin = userLogin;
        this.userName = userName;
        this.totalFriends = totalFriends;
        this.age = age;
        this.birthday = age;
        this.address = address;
        this.schooling = schooling;
        this.totalPostCount = totalPostCount;
        this.profilePic = profilePic;
        this.email = email;
        this.totallikes = totallikes;
        this.totalDislikes = totalDislikes;
        this.followPagescount = followPagescount;
        this.wallPic = wallPic;
        this.gender = gender;
        this.working = working;
        this.comapnyName = comapnyName;
        this.familyMember = familyMember;
    }
    return Facebook;
}());
var objfacebook = new Facebook(true, "shubham", 415, 25, 10 / 11 / 1994, "Kanpur", "U P Board", 112, "shubham.jpg", "shubham.agnihotri356@gmail.com", 512, 231, 55, "wallpic.jpeg", "male", "not woking", "NIELIT", 5);
var userloginStatus;
if (objfacebook.getUserLogin() == true) {
    userloginStatus = 'User is Login';
}
else {
    userloginStatus = 'User is Logout';
}
document.write("<b> User Login Status </b> - " + userloginStatus + " <br/> ");
document.write("<b> User Name </b> - " + objfacebook.getUserName() + " <br/>");
document.write("<b>Total friends </b> - " + objfacebook.getTotalfriends() + " <br/>");
objfacebook.inscreaseTotalFriends();
document.write("<b>after adding one friend we get total friend </b> - " + objfacebook.getTotalfriends() + " <br/>");
document.write(" <b> please check the code all the varibles and methods access same like above codeb for private and proteded \nvarible we have to declare getters and if we want to set to diiferent value in private and proteced then we make \nsetter in class,so these concept clear to me </b> \n");
