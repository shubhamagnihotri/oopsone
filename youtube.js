var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var youTube = /** @class */ (function () {
    function youTube(videoTitle, noOfViews, noOfComments, videoCategory, channelName, videoLikesCount, videoDisikesCount, channelSubscribers, channelVideoUploadTitle, uplodedDate, userLogin, getRelatedVideos) {
        var _this = this;
        this.increaseNoOfViews = function () {
            _this.noOfViews = _this.noOfViews + 1;
        };
        this.getNoofViews = function () {
            return _this.noOfViews;
        };
        this.increaseNoofComments = function () {
            _this.noOfComments = _this.noOfComments + 1;
        };
        this.getNoOfComment = function () {
            return _this.noOfComments;
        };
        this.increasevideoLikesCount = function () {
            _this.videoLikesCount = _this.videoLikesCount + 1;
        };
        this.decreasevideoLikesCount = function () {
            _this.videoDisikesCount = _this.videoDisikesCount - 1;
        };
        this.getVideolike = function () {
            return _this.videoLikesCount;
        };
        this.getVideoDislike = function () {
            return _this.videoDisikesCount;
        };
        this.increaseSubscriber = function () {
            return _this.channelSubscribers = _this.channelSubscribers + 1;
        };
        this.getSubscriber = function () {
            return _this.channelSubscribers;
        };
        this.getUserLogin = function () {
            if (_this.userLogin) {
                if (_this.userLogin == true) {
                    return "user is login";
                }
                else {
                    return "user if not login";
                }
            }
            else {
                return "login detail not provided";
            }
        };
        this.getRelatedVideosname = function () {
            return " " + _this.getRelatedVideos["0"] + " and " + _this.getRelatedVideos["1"] + " and " + _this.getRelatedVideos["2"] + "\n        and " + _this.getRelatedVideos["3"];
        };
        this.videoTitle = videoTitle;
        this.noOfViews = noOfViews;
        this.noOfComments = noOfComments;
        this.videoCategory = videoCategory;
        this.channelName = channelName;
        this.videoLikesCount = videoLikesCount;
        this.videoDisikesCount = videoDisikesCount;
        this.channelSubscribers = channelSubscribers;
        this.channelVideoUploadTitle = channelVideoUploadTitle;
        this.uplodedDate = uplodedDate;
        this.userLogin = userLogin;
        this.getRelatedVideos = getRelatedVideos;
    }
    youTube.prototype.getVideoTitle = function () {
        return this.videoTitle;
    };
    return youTube;
}());
var childYotube = /** @class */ (function (_super) {
    __extends(childYotube, _super);
    function childYotube(videoTitle, noOfViews, noOfComments, videoCategory, channelName, videoLikesCount, videoDisikesCount, channelSubscribers, channelVideoUploadTitle, uplodedDate, userLogin, getRelatedVideos, nextVideos) {
        var _this = _super.call(this, videoTitle, noOfViews, noOfComments, videoCategory, channelName, videoLikesCount, videoDisikesCount, channelSubscribers, channelVideoUploadTitle, uplodedDate, userLogin, getRelatedVideos) || this;
        _this.getnextVideo = function () {
            return _this.nextVideos;
        };
        if (nextVideos) {
            _this.nextVideos = nextVideos;
        }
        else {
            _this.nextVideos = "not provided";
        }
        return _this;
    }
    return childYotube;
}(youTube));
var objChildYoutube = new childYotube("Funnuyvideo", 1100, 2001, "comedy", "Edwisor typescript", 5001, 1105, 50000, "ultimate funny video", "20 apl 2018", true, ["kaplisharma1", "kapilsharna2",
    "kaplisharma3", "kapil sharma 4"], "khjklhhhkjhkjhjhj");
document.write("<b>Video Title By Default </b>  -  " + objChildYoutube.getVideoTitle() + " <br />");
document.write("<b>No of view in Video </b> - " + objChildYoutube.getNoofViews() + " <br />");
objChildYoutube.increaseNoOfViews();
document.write("<b>after increment no of view ciew count increase </b> " + objChildYoutube.getNoofViews() + " <br />");
document.write("<b> No of Comment </b> - " + objChildYoutube.getNoOfComment() + " <br />");
document.write("<b> Get related Videoes </b> - " + objChildYoutube.getRelatedVideosname() + " <br /> ");
document.write(" <b> now with the same line of code we can acsess the data memebers of class according to these acessbility cocept of \naccess modifier </b>\n");
