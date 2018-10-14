class Facebook {


    

    constructor(private userLogin:boolean, protected userName:string, private totalFriends:number,private age:number,
        private birthday:number,protected address:string,private schooling:string,private totalPostCount:number,
        public profilePic:string,protected email:string,private totallikes:number,public totalDislikes:number,
        private followPagescount:number,private wallPic:string,private gender:string,private working:string,
        private comapnyName:string,private familyMember:number
        ){
        
            this.userLogin = userLogin;
            this.userName =userName;
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

    public getUserLogin = () =>{
        return this.userLogin;
    }

    public getUserName = () =>{
        return this.userName;
    }

    public getTotalfriends = () =>{
        return this.totalFriends;
    }

    public inscreaseTotalFriends = () =>{
        this.totalFriends = this.totalFriends + 1;
    }

    public getAge = () =>{
        return this.age; 
    }
    public getBirthday = () =>{
        return this.birthday;
    }

    public getAddress = () =>{
        return this.address;
    }

    public gettotalPostCount = () =>{
        return this.totalPostCount;
    }

    public getProfilePic = () =>{
        return this.profilePic;
    }
    public getEmail = () =>{
        return this.email;
    }
    public getTotalLikes = () =>{
        return this.totallikes;
    }

    public increaseTotalLikes = () =>{
        return this.totallikes + 1;
    }

    public decreaseTotalLikes = () =>{
        return this.totalDislikes ;
    }

    public getWallPic = () =>{
        return this.wallPic;
    }

    public getGender = () =>{
        return this.getGender;
    }

    public getWorking = () =>{
        return this.working;
    }
    public getCompanyName = () =>{
        return this.comapnyName;
    }

    public getFamilyMember = () =>{
        return this.familyMember;
    }
    //here fuction are pulic and this function acts as a getter beacause via these functiuon we will get 
    //the private and proteced variable and function value (conspet of getter and setter )

}


let objfacebook = new Facebook(true,"shubham",415,25,10/11/1994,"Kanpur","U P Board",112,"shubham.jpg","shubham.agnihotri356@gmail.com",
512,231,55,"wallpic.jpeg","male","not woking","NIELIT",5);

let userloginStatus:string;
if(objfacebook.getUserLogin()==true){
    userloginStatus = 'User is Login';
}else{
    userloginStatus = 'User is Logout';
}

document.write(`<b> User Login Status </b> - ${userloginStatus} <br/> `);
document.write(`<b> User Name </b> - ${objfacebook.getUserName()} <br/>`);
document.write(`<b>Total friends </b> - ${objfacebook.getTotalfriends()} <br/>`);
objfacebook.inscreaseTotalFriends();
document.write(`<b>after adding one friend we get total friend </b> - ${objfacebook.getTotalfriends()} <br/>`);

document.write(` <b> please check the code all the varibles and methods access same like above codeb for private and proteded 
varible we have to declare getters and if we want to set to diiferent value in private and proteced then we make 
setter in class,so these concept clear to me </b> 
`)


