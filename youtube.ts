

class youTube{

    private videoTitle:string;
    private noOfViews:number;
    private noOfComments:number;
    private videoCategory:string;
    private channelName:string;
    private videoLikesCount:number;
    private videoDisikesCount:number;
    private channelSubscribers:number;
    public channelVideoUploadTitle:string;
    public uplodedDate:string;
    protected userLogin:boolean;
    protected getRelatedVideos:[string,string,string,string];
    



    constructor(videoTitle:string,noOfViews:number,noOfComments:number,videoCategory:string,
        channelName:string,videoLikesCount:number,videoDisikesCount:number,channelSubscribers:number,
        channelVideoUploadTitle:string,uplodedDate:string,userLogin:boolean,getRelatedVideos:[string,string,string,string],
       
        ){
            this.videoTitle = videoTitle;
            this.noOfViews = noOfViews;
            this.noOfComments = noOfComments;
            this.videoCategory = videoCategory;
            this.channelName = channelName;
            this.videoLikesCount =videoLikesCount;
            this.videoDisikesCount = videoDisikesCount;
            this.channelSubscribers = channelSubscribers ;
            this.channelVideoUploadTitle = channelVideoUploadTitle;
            this.uplodedDate = uplodedDate ;
            this.userLogin = userLogin;
            this.getRelatedVideos = getRelatedVideos;

    }

    public getVideoTitle(){
        return this.videoTitle;
    }

    public increaseNoOfViews = () =>{
        this.noOfViews = this.noOfViews + 1;
    }

    public getNoofViews = () =>{
        return this.noOfViews; 
    }

    public increaseNoofComments = () =>{
         this.noOfComments = this.noOfComments + 1;
    }

    public getNoOfComment = () =>{
        return this.noOfComments;
    }

    public increasevideoLikesCount = () =>{
         this.videoLikesCount = this.videoLikesCount +1; 
    }

    public decreasevideoLikesCount = () => {
         this.videoDisikesCount = this.videoDisikesCount - 1 ;
    }

    public getVideolike = () =>{
        return this.videoLikesCount;
    }
    public getVideoDislike = () =>{
        return this.videoDisikesCount;
    }

    public increaseSubscriber = () =>{
        return this.channelSubscribers = this.channelSubscribers + 1 ; 
    }

    public getSubscriber = () =>{
        return this.channelSubscribers;
    }

    

   


    public getUserLogin = () =>{
        if(this.userLogin){
            if(this.userLogin == true){
                return "user is login";
            }else{
                return "user if not login";
            }
             
        }else{
            return "login detail not provided";
        }
    }

    public getRelatedVideosname = () =>{
        return ` ${ this.getRelatedVideos["0"] } and ${this.getRelatedVideos["1"]} and ${ this.getRelatedVideos["2"]}
        and ${ this.getRelatedVideos["3"]}`;
    }



}



class childYotube extends youTube{
    private nextVideos:any;

    constructor(videoTitle:string,noOfViews:number,noOfComments:number,videoCategory:string,
        channelName:string,videoLikesCount:number,videoDisikesCount:number,channelSubscribers:number,
        channelVideoUploadTitle:string,uplodedDate:string,userLogin:boolean,getRelatedVideos:[string,string,string,string],
        nextVideos ?:any){
        super(videoTitle,noOfViews,noOfComments,videoCategory,channelName,videoLikesCount,videoDisikesCount,channelSubscribers,
            channelVideoUploadTitle,uplodedDate,userLogin,getRelatedVideos);
            if(nextVideos){
                this.nextVideos = nextVideos ;
            }else{
                this.nextVideos = "not provided";
            }
    }

    public getnextVideo = () =>{
        return this.nextVideos;
    }
    
}

let objChildYoutube = new childYotube("Funnuyvideo",1100,2001,"comedy","Edwisor typescript",5001,1105,50000,"ultimate funny video","20 apl 2018",true,["kaplisharma1","kapilsharna2",
"kaplisharma3","kapil sharma 4"],"khjklhhhkjhkjhjhj");

document.write(`<b>Video Title By Default </b>  -  ${objChildYoutube.getVideoTitle()} <br />`);
document.write(`<b>No of view in Video </b> - ${objChildYoutube.getNoofViews()} <br />`);
objChildYoutube.increaseNoOfViews();
document.write(`<b>after increment no of view ciew count increase </b> ${objChildYoutube.getNoofViews()} <br />`);

document.write(`<b> No of Comment </b> - ${objChildYoutube.getNoOfComment()} <br />`);
document.write(`<b> Get related Videoes </b> - ${objChildYoutube.getRelatedVideosname()} <br /> `); 

document.write(` <b> now with the same line of code we can acsess the data memebers of class according to these acessbility cocept of 
access modifier </b>
`);



