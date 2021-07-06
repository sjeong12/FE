if(!localStorage.getItem('adInPlayCnt')){
	localStorage.setItem("adInPlayCnt", 0);
}

//광고 보여주기
function showAdInVideo(current, duration) {
	const totalAdNum = 5;
	const shortAdTime = 5000;
	const longAdTime = 10000;

	for (let num = 1; num <= totalAdNum; num++)
	{
		let cnt = localStorage.getItem("adInPlayCnt");
		if (cnt < num && current > (duration - longAdTime/1000) * num/5)
		{
			let ad;
			let time;

			localStorage.setItem("adInPlayCnt", ++cnt);
			if (num % 2 == 0)
			{
				time = shortAdTime;
				ad = getNewAdUnderVideo();
			}
			else if (cnt == 5)
			{
				time = longAdTime;
				ad = getNewAd("div", "wide");
				setAdStyle(ad, "wide", "center");
			}
			else {
				time = shortAdTime;
				ad = getNewAd("div", "small");
				if (cnt == 1)
					setAdStyle(ad, "small", "left");
				if (cnt == 3)
					setAdStyle(ad, "small", "right");
			}
			ad.setAttribute('data-state', 'visible');
			setTimeout(function () {
				ad.parentNode.removeChild(ad);
			}, time);
		}
	}
}
//광고 생성
let isLeftAd = true;
function getNewAd(type, size) {
	let ad = document.createElement(type);
	let close = document.createElement('button');

	ad.className = 'ad-in-video ' + size + "-ad";
	ad.setAttribute('data-state', 'hidden');
	close.className = 'close-ad-button';
	close.innerHTML = '&times;';
	close.addEventListener("click", function() {
		ad.setAttribute('data-state', 'hidden');
	});
	document.querySelector(".video-section").append(ad);
	ad.append(close);
	return ad;
}
function setAdStyle(ad, size, pos) {
	if (size === "small")
	{
		ad.style.top = "20px";
		if (pos === "left")
			ad.style.left = "20px";
		else
			ad.style.right = "20px";
		isLeftAd = !isLeftAd;
	}
	else if (size === "wide")
	{
		ad.style.bottom = "20px";
		isLeftAd = true;
	}
}
function getNewAdUnderVideo() {
	let ad = document.createElement('div');
	let close = document.createElement('button');

	ad.className = "ad-under-video";
	ad.setAttribute('data-state', 'hidden');
	close.className = 'close-ad-button';
	close.innerHTML = '&times;';
	close.addEventListener("click", function() {
		ad.setAttribute('data-state', 'hidden');
	});
	document.querySelector(".info-section").append(ad);
	ad.append(close);
	return ad;
}

// 영상 재생 전 광고
function getNewAdPreVideo(type) {
	let ad = document.createElement(type);
	let close = document.createElement('button');

	ad.className = "ad-pre-video";
	ad.setAttribute('data-state', 'hidden');
	close.className = 'close-ad-button';
	close.innerHTML = '&times;';
	close.addEventListener("click", function() {
		ad.setAttribute('data-state', 'hidden');
	});
	document.querySelector(".video-section").append(ad);
	ad.append(close);
	return ad;
}
function showAdPreVideo(time, contents) {
	let ad = getNewAdPreVideo("div");
	ad.setAttribute('data-state', 'visible');
	ad.innerText = contents;
	setTimeout(function () {
		ad.parentNode.removeChild(ad);
	}, time);
}

export { showAdInVideo, showAdPreVideo };