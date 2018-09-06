var length = 0;
var currentLength = 0;
var title = "";
var videoCount = 0;
var x = 0;
var videoSource = new Array();
var submitArr = new Array();

$(document).ready(function(){
hideXs()
$("#rest").hide()
$("#playlistinfo").hide()
$("#suggestions").hide()
$("#sugs").hide()
$("#playbutton").hide()
$("#timeremaining").hide()
$("#startoverbutton").hide()
$("#editbutton").hide()
$("#completed").hide()
$("#newplaylist").click(function(){
	$("#intro").hide()
 	$("#playlistinfo").show()
})


$("#submit").click(function(){
	length = parseFloat(document.getElementById("length").value)
 	title = String(document.getElementById("title").value)
	if(length.length<1 || title===""){
		alert("Please enter both the playlist title and length.")
	}
	else{
		$("#playlistinfo").hide()
 		$("#playlist-body").text(title)
 		$("#duration").text("Total Length: " + length + ":00")
 		$("#timeremaining").show()
 		$("#timeremaining").text("Time Remaining: " + length + ":00")
 		length = length*60
 		$("#rest").show()
 		document.getElementById("playlist").className = "col-md-6";
		document.getElementById("playlist").style.margin = "0px";
		document.getElementById("playlist").style.marginTop = "30px";
		$("#playbutton").hide()
		$("#song-lib").show()
		$("#startoverbutton").hide()
		$("#editbutton").hide()
		$("#song-lib-body").show()
		$("#categories").show()
		$("#instructions").show()
		$("#updates").show()
		$("#yours").show()
		$("#done").show()
		$("#inputlen").show()
		$("#currentLength").hide()
		document.getElementById("rest").style.marginRight = "15%";
		document.getElementById("rest").style.marginLeft = "15%";
		document.getElementById("play").style.marginLeft = "0px";
		document.getElementById("playlist-body").style.marginTop = "0px";
	}
})


hideCategories()
hideVids()

$("#length").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#submit").click();
        return false;
    }
})

$("#update").keypress(function(e) {
      if (e.which == 13) {
        $("#submitu1").click();
        return false;
      }
 });


$("#pop-title").click(function(){
	for (var key in indexes1) {
		if (indexes1.hasOwnProperty(key)) {  
				 var v = document.getElementById(key)         
       			 v.pause()
       			 v.currentTime=0
       			 v.load()
       	}
	}
		if ($('#pop-items').is(':hidden'))
		{
			$("#pop-items").show()
			$("#suggestions").hide()
			$("#hiphop-items").hide()
			$("#edm-items").hide()
		}
		else
		{
			$("#pop-items").hide()
		}
})

$("#hiphop-title").click(function(){
	for (var key in indexes1) {
		if (indexes1.hasOwnProperty(key)) {  
				 var v = document.getElementById(key)         
       			 v.pause()
       			 v.currentTime=0
       			 v.load()
       	}
	}
		if ($('#hiphop-items').is(':hidden'))
		{
			$("#hiphop-items").show()
			$("#suggestions").hide()
			$("#edm-items").hide()
			$("#pop-items").hide()
		}
		else
		{
			$("#hiphop-items").hide()
		}
})
$("#edm-title").click(function(){
	for (var key in indexes1) {
		if (indexes1.hasOwnProperty(key)) {  
				 var v = document.getElementById(key)         
       			 v.pause()
       			 v.currentTime=0
       			 v.load()
       	}
	}
		if ($('#edm-items').is(':hidden'))
		{
			$("#edm-items").show()
			$("#hiphop-items").hide()
			$("#suggestions").hide()
			$("#pop-items").hide()
		}
		else
		{
			$("#edm-items").hide()
		}
})
$("#sugs").click(function(){
	for (var key in indexes1) {
		if (indexes1.hasOwnProperty(key)) {  
				 var v = document.getElementById(key)         
       			 v.pause()
       			 v.currentTime=0
       			 v.load()
       	}
	}
		if ($('#suggestions').is(':hidden'))
		{
			$("#suggestions").show()
			$("#hiphop-items").hide()
			$("#edm-items").hide()
			$("#pop-items").hide()
		}
		else
		{
			$("#suggestions").hide()
		}
})
$("#play").click(function(){
	x=0;
	var i = 0;
	$('input', $('#playlist')).each(function () {
			if ($(this).attr("value") != "X"){
				videoSource[i] = vids[$(this).attr("value")]
				submitArr[i] = submits[videoSource[i]]
				i++
			}
	})
	videoCount = videoSource.length;
	for(var j = 0; j<videoCount; j++){
		document.getElementById(videoSource[j]).addEventListener('ended', myHandler, false);
	}
	videoPlay(videoSource, x)
})
$("#submitu1").click(function(){
		title = String(document.getElementById("utitle").value)
 		$("#playlist-body").text(title)
 		document.getElementById('utitle').value = "";
})
	$("#done").click(function(){
		document.getElementById("playlist").className = "col-md-12";
		document.getElementById("playlist").style.width = "510px";
		document.getElementById("playlist").style.margin = "100px";
		$("#playbutton").show()
		$("#startoverbutton").show()
		$("#editbutton").show()
		$("#categories").hide()
		$("#updates").hide()
		$("#yours").hide()
		$("#song-lib").hide()
		$("#timeremaining").hide()
		$("#done").hide()
		$("#inputlen").hide()
		$("#completed").hide()
		var minutes = Math.floor((currentLength) / 60)
		var seconds = (currentLength)  - minutes * 60
		if (minutes < 10) {minutes = "0"+minutes;}
   		if (seconds < 10) {seconds = "0"+seconds;}
		$("#duration").text("Final Length: " + minutes + ":" + seconds)
		document.getElementById("rest").style.marginRight = "15%";
		document.getElementById("rest").style.marginLeft = "25%";
		document.getElementById("play").style.marginLeft = "90px";
		document.getElementById("duration").style.marginLeft = "-150px";
		document.getElementById("playlist-body").style.marginTop = "-100px";
		document.getElementById("xs").style.marginTop = "50px";
		hideCategories()
		hideSugs()
	})
	$("#edit").click(function(){
		document.getElementById("playlist").className = "col-md-6";
		document.getElementById("playlist").style.margin = "0px";
		document.getElementById("playlist").style.width = "505px";
		document.getElementById("playlist").style.marginTop = "30px";
		document.getElementById("xs").style.marginTop = "90px";
		$("#playbutton").hide()
		$("#startoverbutton").hide()
		$("#editbutton").hide()
		$("#song-lib").show()
		$("#timeremaining").show()
		$("#categories").show()
		$("#updates").show()
		$("#yours").show()
		$("#done").show()
		$("#inputlen").show()
		$("#pop-items").hide()
		$("#suggestions").hide()
		$("#hiphop-items").hide()
		$("#edm-items").hide()
		$("#duration").text("Total Length: " + length/60 + ":00")
		if (currentLength>length){
			$("#timeremaining").text("Time Remaining: " + "00:00")
		}
		else{
			var minutes = Math.floor((length-currentLength) / 60)
			var seconds = (length-currentLength)  - minutes * 60
			if (minutes < 10) {minutes = "0"+minutes;}
   			if (seconds < 10) {seconds = "0"+seconds;}
			$("#timeremaining").text("Time Remaining: " + minutes + ":" + seconds)
		}
		document.getElementById("rest").style.marginRight = "15%";
		document.getElementById("rest").style.marginLeft = "15%";
		document.getElementById("play").style.marginLeft = "0px";
		document.getElementById("duration").style.marginLeft = "0px";
		document.getElementById("playlist-body").style.marginTop = "0px";
		if(currentLength > (length-60) && currentLength < (length + 60))
		{
			$("#completed").show()
		}
		else
		{	
			$("#completed").hide()
		}
		for (var key in indexes1) {
		if (indexes1.hasOwnProperty(key)) {  
				 var v = document.getElementById(key)         
       			 v.pause()
       			 v.currentTime=0
       			 v.load()
       	}
	}
	hideVids()
	$('input', $('#playlist')).each(function () {
		if (vids[$(this).attr("value")] !== undefined){
        	$("#up"+indexes1[vids[$(this).attr("value")]]).css({"margin-top": "10px"});
			$("#down"+indexes1[vids[$(this).attr("value")]]).css({"margin-bottom": "10px"});
    }
})

	})
	$("#startover").click(function(){
		$("#rest").hide()
		$("#playlistinfo").hide()
		$("#suggestions").hide()
		$("#sugs").hide()
		$("#playbutton").hide()
		$("#done").hide()
		$("#startoverbutton").hide()
		$("#editbutton").hide()
		$("#timeremaining").show()
		$("#intro").show()
		$("#timeremaining").text("")
		$("#completed").hide()
		document.getElementById("duration").style.marginLeft = "0px";
		document.getElementById("playlist").style.width = "505px";
		document.getElementById("xs").style.marginTop = "90px";
		document.getElementById('title').value = "";
		document.getElementById('length').value = "";
		initializeList()
		hideXs()
		hideVids()
		initializeDrop()
		length = 0;
		currentLength = 0;
		title = "";
		videoCount = 0;
		x = 0;

		for (var key in submits) {
			if (submits.hasOwnProperty(key)) {  
				 var v = document.getElementById(key)         
       			 v.pause()
       			 v.currentTime=0
       			 v.load()
       		}
		}

		for (var key in indexes) {
			if (indexes.hasOwnProperty(key)) {  
				 $("#"+key).css({'padding-top': ''})
				 $("#"+key).css({'padding-bottom': ''})
				 $("#up"+key).css({'margin-top': ''})
				 $("#down"+key).css({'margin-bottom': ''})
       		}
		}

	})

initializeList()
initializeDrop()
drag()
sugDrag()
});

function videoPlay(videoSource, videoNum) {
	$('input', $('#playlist')).each(function () {
		if (vids[$(this).attr("value")] !== undefined){
        	$("#up"+indexes1[videoSource[videoNum]]).css({"margin-top": "10px"});
			$("#down"+indexes1[videoSource[videoNum]]).css({"margin-bottom": "10px"});
    }
})
	$("#up"+indexes1[videoSource[videoNum]]).css({"margin-top": "140px"});
	$("#down"+indexes1[videoSource[videoNum]]).css({"margin-bottom": "120px"});

	if(videoNum==0){

		document.getElementById(submitArr[videoNum]).click();
	}
	else{
		document.getElementById(submitArr[videoNum-1]).click();
		document.getElementById(submitArr[videoNum]).click();
	}
	document.getElementById(videoSource[videoNum]).play();
}

function hideCategories()
{
	$("#pop-items").hide();
	$("#hiphop-items").hide();
	$("#edm-items").hide();
}

function initializeList(){
	for (i = 1; i <= 5; i++) { 
    	var video = document.getElementById('vid'+i);
		$('#pop-items').append(video);
	}
	for (i = 6; i <= 10; i++) { 
    	var video = document.getElementById('vid'+i);
		$('#hiphop-items').append(video);
	}
	for (i = 11; i <= 15; i++) { 
    	var video = document.getElementById('vid'+i);
		$('#edm-items').append(video);
	}
	for (i = 1; i<=3; i++){
		var video = document.getElementById('sugvid'+i);
		$('#suggestions').append(video);
	}
}
function hideVids(){
	$("#video1").hide()
	$("#video2").hide()
	$("#video3").hide()
	$("#video4").hide()
	$("#video5").hide()
	$("#video6").hide()
	$("#video7").hide()
	$("#video8").hide()
	$("#video9").hide()
	$("#video10").hide()
	$("#video11").hide()
	$("#video12").hide()
	$("#video13").hide()
	$("#video14").hide()
	$("#video15").hide()
	$("#sug1").hide()
	$("#sug2").hide()
	$("#sug3").hide()
}
function initializeDrop(){
	$("#playlist-body").droppable({
		drop: function(ev, ui){
			var check="false";
			$('input', $('#playlist')).each(function () {
			if (indexes[$(ui.draggable).attr("id")] == vids[$(this).attr("value")]){
        			check = "true"
    			}
			})

			if(check!="true")
			{
				$("#instructions").hide()
				var vidid = $(ui.draggable).attr("id")
				currentLength += parseFloat(videos[vidid])
				if (currentLength>(length+60)){
					alert("Over Limit")
					$("#completed").hide()
					currentLength -= parseFloat(videos[vidid])
					
				}
				else if(currentLength > (length-60) && currentLength < (length + 60))
				{
					$("#instructions").hide()
					$("#f"+vidid).show()
					$("#xs").append($("#up"+vidid))
					$("#xs").append($("#f"+vidid))
					$("#xs").append($("#down"+vidid))
					$("#x"+vidid).show()
					$("#up"+vidid).show()
					$("#down"+vidid).show()
					$("#up"+vidid).css({"margin-top":"10px"})
					$("#down"+vidid).css({"margin-bottom":"10px"})
					$(ui.draggable).css({'padding-top': '45px'})
					$(ui.draggable).css({'padding-bottom': '45px'})
					$("#play-body").append(ui.draggable)
					if (currentLength>length){
						$("#timeremaining").text("Time Remaining: " + "00:00")
					}
					else{
						var minutes = Math.floor((length-currentLength) / 60)
						var seconds = (length-currentLength)  - minutes * 60
						if (minutes < 10) {minutes = "0"+minutes;}
			   			if (seconds < 10) {seconds = "0"+seconds;}
						$("#timeremaining").text("Time Remaining: " + minutes + ":" + seconds)
					}
					$("#completed").show()
				}
				else{
					$("#completed").hide()
					$("#instructions").hide()
					$("#f"+vidid).show()
					$("#xs").append($("#up"+vidid))
					$("#xs").append($("#f"+vidid))
					$("#xs").append($("#down"+vidid))
					$("#x"+vidid).show()
					$("#up"+vidid).show()
					$("#down"+vidid).show()
					$("#play-body").append(ui.draggable)
					$("#up"+vidid).css({"margin-top":"10px"})
					$("#down"+vidid).css({"margin-bottom":"10px"})
					$(ui.draggable).css({'padding-top': '45px'})
					$(ui.draggable).css({'padding-bottom': '45px'})
					var minutes = Math.floor((length-currentLength) / 60)
					var seconds = (length-currentLength) - minutes * 60
					if (minutes < 10) {minutes = "0"+minutes;}
   					if (seconds < 10) {seconds = "0"+seconds;}
					$("#timeremaining").text("Time Remaining: " + minutes + ":" + seconds)
				}

				if(currentLength<length && currentLength>(length-360)){
					$("#sugs").show()
				}
			}
		
			$(this).css({'border': 'none'})
			$(this).css({'color': 'white'})
		},
		over: function() {
			$(this).css({'border': '1px solid black'})
			$(this).css({'color': 'black'})
		},
		out: function(){
			$(this).css({'border': 'none'})
			$(this).css({'color': 'white'})
		}
	});
	$("#play-body").droppable({
		drop: function(ev, ui){
			
			var check="false";
			$('input', $('#playlist')).each(function () {
			if (indexes[$(ui.draggable).attr("id")] == vids[$(this).attr("value")]){
        			check = "true"
    			}
			})

			if(check!="true")
			{	
				$("#instructions").hide()
				var vidid = $(ui.draggable).attr("id")
				currentLength += parseFloat(videos[vidid])
				if (currentLength>(length+60)){
					$("#completed").hide()
					alert("Over Limit")
					currentLength -= parseFloat(videos[vidid])
					
				}
				else if(currentLength > (length-60) && currentLength < (length + 60))
				{
					$("#instructions").hide()
					$("#f"+vidid).show()
					$("#xs").append($("#up"+vidid))
					$("#xs").append($("#f"+vidid))
					$("#xs").append($("#down"+vidid))
					$("#x"+vidid).show()
					$("#up"+vidid).show()
					$("#down"+vidid).show()
					$("#play-body").append(ui.draggable)
					$("#up"+vidid).css({"margin-top":"10px"})
					$("#down"+vidid).css({"margin-bottom":"10px"})
					$(ui.draggable).css({'padding-top': '45px'})
					$(ui.draggable).css({'padding-bottom': '45px'})
					if (currentLength>length){
						$("#timeremaining").text("Time Remaining: " + "00:00")
					}
					else{
						var minutes = Math.floor((length-currentLength) / 60)
						var seconds = (length-currentLength)  - minutes * 60
						if (minutes < 10) {minutes = "0"+minutes;}
			   			if (seconds < 10) {seconds = "0"+seconds;}
						$("#timeremaining").text("Time Remaining: " + minutes + ":" + seconds)
					}
					$("#completed").show()
				}
				else{
					$("#completed").hide()
					$("#instructions").hide()
					$("#f"+vidid).show()
					$("#xs").append($("#up"+vidid))
					$("#xs").append($("#f"+vidid))
					$("#xs").append($("#down"+vidid))
					$("#x"+vidid).show()
					$("#up"+vidid).show()
					$("#down"+vidid).show()
					$("#play-body").append(ui.draggable)
					$("#up"+vidid).css({"margin-top":"10px"})
					$("#down"+vidid).css({"margin-bottom":"10px"})
					$(ui.draggable).css({'padding-top': '45px'})
					$(ui.draggable).css({'padding-bottom': '45px'})
					var minutes = Math.floor((length-currentLength) / 60)
					var seconds = (length-currentLength) - minutes * 60
					if (minutes < 10) {minutes = "0"+minutes;}
   					if (seconds < 10) {seconds = "0"+seconds;}
					$("#timeremaining").text("Time Remaining: " + minutes + ":" + seconds)
				}

				if(currentLength<length && currentLength>(length-360)){
					$("#sugs").show()
				}
			}

			$(this).css({'border': 'none'})
		},
		over: function() {
			$(this).css({'border': '1px solid black'})
		},
		out: function(){
			$(this).css({'border': 'none'})
		}
	});
}

function drag(){
	for (i = 1; i <= 15; i++) { 
		$("#vid"+i).draggable({revert: true,
			start: function(){
				$(".droptarget").css({'border':'1px solid black'})
			},
			stop: function(){
				$(".droptarget").css({'border':'none'})
			}
		})
		$("#vid"+i).hover(
			function(){
				$(this).css({'background-color': '#dae2d2', 'z-index': '101'})
			}, function(){
				$(this).css({'background-color': 'white', 'z-index': '100'})
			}
		)
	}
  }


var videos = {
		"vid1": 226,
		"vid2": 227,
		"vid3": 224,
		"vid4": 231,
		"vid5": 260,
		"vid6": 287,
		"vid7": 286,
		"vid8": 215,
		"vid9": 226,
		"vid10": 356, 
		"vid11": 199,
		"vid12": 205,
		"vid13": 234,
		"vid14": 198,
		"vid15": 202,
		"sugvid1": 58,
		"sugvid2": 90,
		"sugvid3": 158
};

var vids = {
	"24K Magic (3:46)": "video1",
	"Fetish (3:47)": "video2",
	"New Rules (3:44)": "video3",
	"Chandelier (3:51)": "video4",
	"Hymn of the Weekend (4:20)": "video5",
	"Formation (4:47)": "video6",
	"Unforgettable (4:46)": "video7",
	"Wild Thoughts (3:35)": "video8",
	"Congratulations (3:46)": "video9",
	"God's Plan (5:56)": "video10", 
	"Alone (3:19)":"video11",
	"In The Name Of Love (3:25)":"video12",
	"Summer (3:54)":"video13",
	"Levels (3:18)":"video14",
	"No Money (3:22)":"video15",
	"Closer (0:58)": "sug1",
	"Don't Let Me Down (1:30)": "sug2",
	"Overture (2:38)": "sug3"
};

var submits = {
	"video1":"submit1",
	"video2":"submit2",
	"video3":"submit3",
	"video4":"submit4",
	"video5":"submit5",
	"video6":"submit6",
	"video7":"submit7",
	"video8":"submit8",
	"video9":"submit9",
	"video10":"submit10",
	"video11":"submit11",
	"video12":"submit12",
	"video13":"submit13",
	"video14":"submit14",
	"video15":"submit15",
	"sug1":"sugsub1",
	"sug2":"sugsub2",
	"sug3":"sugsub3"
	
};

	
var indexes = {
	"vid1": "video1",
	"vid2": "video2",
	"vid3": "video3",
	"vid4": "video4",
	"vid5": "video5",
	"vid6": "video6",
	"vid7": "video7",
	"vid8": "video8",
	"vid9": "video9",
	"vid10": "video10",
	"vid11": "video11",
	"vid12": "video12",
	"vid13": "video13",
	"vid14": "video14",
	"vid15": "video15",
	"sugvid1": "sug1",
	"sugvid2": "sug2",
	"sugvid3": "sug3"
};

	
var indexes1 = {
	"video1": "vid1",
	"video2": "vid2",
	"video3": "vid3",
	"video4": "vid4",
	"video5": "vid5",
	"video6": "vid6",
	"video7": "vid7",
	"video8": "vid8",
	"video9": "vid9",
	"video10": "vid10",
	"video11": "vid11",
	"video12": "vid12",
	"video13": "vid13",
	"video14": "vid14",
	"video15": "vid15",
	"sug1": "sugvid1",
	"sug2": "sugvid2",
	"sug3": "sugvid3",
};

function swapDiv(elm){
	var previous = findPrevious(elm);
    if (previous) {
        elm.parentNode.insertBefore(elm, previous);
    }
}

function findPrevious(elm) {
   do {
       elm = elm.previousSibling;
   } while (elm && elm.nodeType != 1);
   return elm;
}
function hideSugs(){
	$("#sug1").hide()
	$("#sug2").hide()
	$("#sug3").hide()
}
function sugDrag(){
	for (i = 1; i <= 3; i++) { 
		$("#sugvid"+i).draggable({revert: true,
			start: function(){
				$(".droptarget").css({'border':'1px solid black'})
			},
			stop: function(){
				$(".droptarget").css({'border':'none'})
			}
		})
		$("#sugvid"+i).hover(
			function(){
				$(this).css({'background-color': '#dae2d2', 'z-index': '101'})
			}, function(){
				$(this).css({'background-color': 'white', 'z-index': '100'})
			}
		)
	}
  }

function hideXs(){
	for(i=1; i<=15; i++){
		$("#fvid"+i).hide()
		$("#upvid"+i).hide()
		$("#downvid"+i).hide()


	}
	for(i=1;i<=3;i++){
		$("#fsugvid"+i).hide()
		$("#upsugvid"+i).hide()
		$("#downsugvid"+i).hide()
	}
}


function myHandler() {
    x++;
    videoPlay(videoSource, x);
}

function showVid(elem, xvid){
	for (var key in indexes1) {
		if (indexes1.hasOwnProperty(key)) {  
				 var v = document.getElementById(key)         
       			 v.pause()
       			 v.currentTime=0
       			 v.load()
       	}
	}

	$('input', $('#playlist')).each(function () {
		if (vids[$(this).attr("value")] !== undefined){
        	$("#up"+indexes1[vids[$(this).attr("value")]]).css({"margin-top": "10px"});
			$("#down"+indexes1[vids[$(this).attr("value")]]).css({"margin-bottom": "10px"});
    }
})
		if ($('#'+elem).is(':hidden'))
		{
			hideVids()
			$('#'+elem).show()
			var v=document.getElementById(elem) 
			v.currentTime=0
			v.load()
			v.play()
			$("#up"+xvid).css({"margin-top": "140px"});
			$("#down"+xvid).css({"margin-bottom": "120px"});
		}
		else
		{
			$("#up"+xvid).css({"margin-top": "10px"});
			$("#down"+xvid).css({"margin-bottom": "10px"});
			$('#'+elem).hide()
		}

}

function removeVid(vid, cat, xnum, num){
	$("#"+xnum).appendTo("#"+vid)
	$("#"+vid).css({'padding-top': ''})
	$("#"+vid).css({'padding-bottom': ''})
	$("#"+xnum).hide()
	$("#up"+vid).hide()
	$("#down"+vid).hide()
	if(vid.substring(0,3)=="vid"){
		$("#upvid"+num).hide()
		$("#downvid"+num).hide()
	}
	else{
		$("#upsug"+num).hide()
		$("#downsug"+num).hide()
	}
	$("#"+vid).appendTo("#"+cat)
	currentLength -= parseFloat(videos[vid])
	$("#"+[indexes[vid]]).hide()
	if ($('#categories').is(':hidden'))
		{
			var minutes = Math.floor((currentLength) / 60)
			var seconds = (currentLength)  - minutes * 60
			if (minutes < 10) {minutes = "0"+minutes;}
   			if (seconds < 10) {seconds = "0"+seconds;}
			$("#duration").text("Final Length: " + minutes + ":" + seconds)
		}
		else{
			var minutes = Math.floor((length-currentLength) / 60)
			var seconds = (length-currentLength) - minutes * 60
			if (minutes < 10) {minutes = "0"+minutes;}
   			if (seconds < 10) {seconds = "0"+seconds;}
			$("#timeremaining").text("Time Remaining: " + minutes + ":" + seconds)
		}

	if(currentLength==0){
		$("#sugs").hide()
		$("#suggestions").hide()
	}
	if(currentLength > (length-60) && currentLength < (length + 60))
	{
		//do nothing
	}
	else
	{	
		$("#completed").hide()
	}
}

function moveUp(thisDiv){
	var ordering = new Array();
	var i = 0;
	var cur = 0;
	var prev = 0;
	$('input', $('#playlist')).each(function () {
		if (vids[$(this).attr("value")] !== undefined){
        	ordering[i] = indexes1[vids[$(this).attr("value")]]
        	if(vids[$(this).attr("value")] == thisDiv)
        	{
        		cur = i;
        		prev = cur - 1;
        	}
    		i++
    	}
	})


	for(i=ordering.length-1;i>=0;i--){
		if(i==cur && i!=0){
			$( "#playlist" ).prepend($("#"+ordering[i-1]));
			$( "#playlist" ).prepend($("#"+ordering[i]));
			$("#xs").prepend($("#down"+ordering[i-1]))
			$("#xs").prepend($("#f"+ordering[i-1]))
			$("#xs").prepend($("#up"+ordering[i-1]))
			$("#xs").prepend($("#down"+ordering[i]))
			$("#xs").prepend($("#f"+ordering[i]))
			$("#xs").prepend($("#up"+ordering[i]))
			i--
		}
		else{
			$( "#playlist" ).prepend($("#"+ordering[i]));
			$("#xs").prepend($("#down"+ordering[i]))
			$("#xs").prepend($("#f"+ordering[i]))
			$("#xs").prepend($("#up"+ordering[i]))
		}
	}
	$( "#playlist").prepend($("#playlist-body"));
	$( "#playlist").append($("#play-body"));
}

function moveDown(thisDiv){
	var ordering = new Array();
	var i = 0;
	var cur = 0;
	var next = 0;
	$('input', $('#playlist')).each(function () {
		if (vids[$(this).attr("value")] !== undefined){
        	ordering[i] = indexes1[vids[$(this).attr("value")]]
        	if(vids[$(this).attr("value")] == thisDiv)
        	{
        		cur = i;
        		next = cur + 1;
        	}
    		i++
    	}
	})


	for(i=0;i<=ordering.length-1;i++){
		if(i==cur && i!=ordering.length-1){
			$( "#playlist" ).append($("#"+ordering[i+1]));
			$( "#playlist" ).append($("#"+ordering[i]));
			$("#xs").append($("#up"+ordering[i+1]))
			$("#xs").append($("#f"+ordering[i+1]))
			$("#xs").append($("#down"+ordering[i+1]))
			$("#xs").append($("#up"+ordering[i]))
			$("#xs").append($("#f"+ordering[i]))
			$("#xs").append($("#down"+ordering[i]))
			i++
		}
		else{
			$( "#playlist" ).append($("#"+ordering[i]));
			$("#xs").append($("#up"+ordering[i]))
			$("#xs").append($("#f"+ordering[i]))
			$("#xs").append($("#down"+ordering[i]))
		}
	}
	$( "#playlist").append($("#play-body"));
}
