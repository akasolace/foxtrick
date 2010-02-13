/**
 * Forum Presentation Fixes
 * @author spambot, ljushaff
 */ 
 
FoxtrickForumPresentation = {
       
    MODULE_NAME : "ForumPresentation",
    MODULE_CATEGORY : Foxtrick.moduleCategories.FORUM,
	PAGES : new Array('forum', 'forumViewThread', 'forumOverView' , 'forumDefault', 'forumWritePost', 'forumModWritePost'), 
    DEFAULT_ENABLED : true,
	NEW_AFTER_VERSION: "0.5.0.3",
	LATEST_CHANGE:"Added module for additional Forum presentation options",	
	LATEST_CHANGE_CATEGORY : Foxtrick.latestChangeCategories.NEW,
	
    OPTIONS :  new Array(           "HideFlagsInForumHeader",
									"HideLeagueInForumHeader",
									"Forum_Spoiler_reveal",
									"hideForumNotificationBox"                  
								),
	OPTIONS_CSS: new Array (
                                Foxtrick.ResourcePath+"resources/css/fixes/HideFlagsInForumHeader.css",
                                Foxtrick.ResourcePath+"resources/css/fixes/HideLeagueInForumHeader.css",
                                Foxtrick.ResourcePath+"resources/css/fixes/Forum_Spoiler_reveal.css",
                                Foxtrick.ResourcePath+"resources/css/fixes/hideForumNotificationBox.css"
								),                            
								
    init : function() {
    },
                                                                     
    run : function(page, doc) {       
    },
       
    change : function( page, doc ) {
    }    
};